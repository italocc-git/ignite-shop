import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"
import { useKeenSlider } from 'keen-slider/react'
import {Handbag, CaretRight, CaretLeft} from 'phosphor-react'
import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from "next"
import Link from 'next/link'
import { stripe } from "../lib/stripe"
import Stripe from "stripe"
import Head from 'next/head'
import { Header } from "../components/Header"
import { useState } from "react"
interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}
export default function Home({products} : HomeProps) {
  const [showCart , setShowCart] = useState(false)
  const [sliderRef, intanceRef] = useKeenSlider({
    slides : {
      perView: 3, 
      spacing: 48
    },
    defaultAnimation: {
      duration: 1000,
    }

  })
  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <Header setShowCart={setShowCart}/>
      <HomeContainer ref={sliderRef} className="keen-slider">
      
        {products.map(product => (
          <Link key={product.id}  href={`/product/${product.id}`} prefetch={false}> 
          {/* Recomendado prefetch true apenas em páginas com poucos links. Pode ficar pesando o servidor Next */}
              <Product  className="keen-slider__slide">
                
                <Image src={product.imageUrl} width={520} height={480} alt="" />
                
                <footer>
                  <div className="product-details">
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  
                 <div className="product-add-to-cart">
                    <Handbag color="white" weight="bold" size={32} />
                 </div>
                </footer>
                
            </Product>
          </Link>
        ))}
          <button className="button-left" onClick={() => intanceRef.current?.prev()}>
            <CaretLeft   />
          </button>
          <button className="button-right" onClick={() => intanceRef.current?.next()}>
                  <CaretRight   />
          </button>
      </HomeContainer>
    </>
     
  )
}

export const getStaticProps: GetStaticProps  = async() => {

  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format((price.unit_amount ?? 0) / 100),
    }
  })

  
    return {
      props: {
        products
      },
      revalidate: 60* 60 * 2 /* 2 hours */
    }
}