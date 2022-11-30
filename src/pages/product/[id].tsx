
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import { useState } from "react";
import Image from "next/image";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import axios from "axios";
import Head from "next/head";
import { Header } from "../../components/Header";
import { CartComponent } from "../../components/CartComponent";

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({product} : ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const [showCart , setShowCart] = useState(false)
  async function handleBuyButton() {
     try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      console.log(err)
      setIsCreatingCheckoutSession(false);

      alert('Falha ao redirecionar ao checkout!')
    }
  }
  
  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <Header setShowCart={setShowCart}/>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={handleBuyButton}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
      {showCart && (
        <CartComponent setShowCart={setShowCart}/>
      )}
    </>
  )
}

export const getStaticPaths : GetStaticPaths = async() => {

  return {
    paths: [
      {
        params: { id : 'prod_MmF2cmnbqKag3P'} /* Só funciona na build, carrega mais rápido. Ex: páginas mais acessadas  */
      }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => { 
  /* <any, tipagem do params> */
  const productId = params!.id as string;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format((price.unit_amount ?? 0) / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hours
  }
}