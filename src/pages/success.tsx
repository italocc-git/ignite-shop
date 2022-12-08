import Link from "next/link";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImageContent,  SuccessContainer } from "../styles/pages/success";
import Head from "next/head";
import {useShoppingCart} from 'use-shopping-cart'
interface SuccessProps {
  costumerName: string;
  products: {
    name: string;
    images: string[];
  }[]
}

export default function Success({costumerName, products} : SuccessProps) {
    
    const {clearCart} = useShoppingCart()
  return (
      <>
        <Head>
          <title>Compra efetuada | Ignite Shop</title>
          <meta name="robots" content="noindex" />
        </Head>
        <SuccessContainer>
          <h1>Compra efetuada</h1>

          <ImageContainer>
          {products.map(product => (
            <ImageContent key={product.name}>
              <Image src={product.images[0]} width={120} height={110} alt="" />
            </ImageContent>
          ))}
          </ImageContainer>

          <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de <strong>{products.length} camisetas</strong> já está a caminho da sua casa.
          </p>

          <Link href="/" onClick={clearCart}>
            Voltar ao catálogo
          </Link>
        </SuccessContainer>
      </>
    )
  }

  export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }
    
    const sessionId = String(query.session_id);
  
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product']
    });
  
    const costumerName = session.customer_details?.name;
    const data = session.line_items?.data as any;
    
    const products = data.map((item : any) => item.price.product) as Stripe.Product
    console.log(products)
    return {
      props: {
        costumerName,
        products
      }
    }
  }