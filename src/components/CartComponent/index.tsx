import Image from 'next/image'
import Link from 'next/link'
import {X} from 'phosphor-react'
import camiseta1 from '../../assets/camisetas/1.png'
import camiseta2 from '../../assets/camisetas/2.png'
import {CartComponentBox ,
     CartComponentBagContainer ,
     CartContent,
     CartItemContent,
     CartComponentBagFooter
} from '../../styles/components/Cart'

interface CartComponentProps {
    setShowCart: (showCart : boolean) => void
}

export function CartComponent({setShowCart} : CartComponentProps) {
    return(
        <CartComponentBox>
            <header>
                <X height={24} width={24} weight='bold' onClick={() => setShowCart(false)}/>
            </header>
            <CartComponentBagContainer>
                <main>
                    <h1>Sacola de compras</h1>

                    <CartContent>
                        <CartItemContent>
                            <Image src={camiseta1} width={101} height={93} alt=''  />
                            <div className='cart-item-detail'>
                                <label>Camiseta Beyond the Limits</label>
                                <b>R$ 79,90</b>
                                <Link  href=''>
                                    Remover
                                </Link>
                            </div>
                        </CartItemContent>
                        <CartItemContent>
                            <Image src={camiseta2} width={101} height={93} alt=''  />
                            <div className='cart-item-detail'>
                                <label>Camiseta Explorer</label>
                                <b>R$ 61,90</b>
                                <Link href=''>
                                    Remover
                                </Link>
                            </div>
                        </CartItemContent>
                    </CartContent>
                </main>
                

            </CartComponentBagContainer>
            <CartComponentBagFooter>
                    <div className='quantity-items'>
                        <span>Quantidade</span>
                        <span>2 itens</span>
                    </div>
                    <div className='total-value'>
                        <span>Valor total</span>
                        <span>R$ 270,00</span>
                    </div>

                    <button>Finalizar compra</button>
                </CartComponentBagFooter>
        </CartComponentBox>
    )
}