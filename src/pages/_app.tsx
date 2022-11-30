import { globalStyles } from "../styles/global"

import type { AppProps } from 'next/app'

import { Container } from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Container>
        <Component {...pageProps} />
      </Container>
    
  )
}
