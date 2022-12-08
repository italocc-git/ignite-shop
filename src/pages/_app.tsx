import { globalStyles } from "../styles/global"
import {CartProvider} from 'use-shopping-cart'
import type { AppProps } from 'next/app'

import { Container } from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
      
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_SECRET_KEY ?? ''}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={process.env.NEXT_URL ?? ''}
      currency="BRL"
      shouldPersist
    >
        <Container>
          <Component {...pageProps} />
        </Container>
    </CartProvider>
  )
}
