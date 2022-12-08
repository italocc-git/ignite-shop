import Image from 'next/image'
import Link from 'next/link'
import {X} from 'phosphor-react'
import {CartComponentBox ,
     CartComponentBagContainer ,
     CartContent,
     CartItemContent,
     CartComponentBagFooter
} from '../../styles/components/Cart'
import {useShoppingCart } from 'use-shopping-cart'
import {formatCurrencyString } from 'use-shopping-cart/core'
import { useState, useEffect } from 'react'

interface CartComponentProps {
    setShowCart: (showCart : boolean) => void
    showCart : boolean
}

interface Cart {
    product_id : string;
    image : string;
    productName: string;
    price : string
    priceId: string
    quantity: number
}

export function CartComponent({setShowCart, showCart} : CartComponentProps) {
    const {cartDetails, totalPrice, removeItem } = useShoppingCart()
    const [cart , setCart] = useState<Cart[]>([])
    useEffect(() => {
        if(!cartDetails)
        return 
        console.log(cartDetails)
        const cart = Object.entries(cartDetails).map(([key,value]) => {
            
            return {
                product_id: key,
                image: value.image ?? '',
                productName: value.name,
                price: formatCurrencyString({ value: value.price, currency: value.currency}),
                quantity: value.quantity,
                priceId: value.price_id
                
            }
        })
        
        setCart(cart)

    },[showCart, cartDetails])

    const handleRemoveItem = (productId: string) => {
        if(productId) {
            setCart(cart.filter(item => item.product_id !== productId))
            removeItem(productId)
        }
        /* Pensar melhor .. */
        
    }

    const handleFinishTransaction = () => {
        
    }

    return(
        <CartComponentBox>
            <header>
                <X height={24} width={24} weight='bold' onClick={() => setShowCart(false)}/>
            </header>
            <CartComponentBagContainer>
                <main>
                    <h1>Sacola de compras</h1>

                    <CartContent>
                        {cart && cart.map(cartItem => (
                            <CartItemContent key={cartItem.product_id}>
                            <Image src={cartItem.image} width={101} height={93} alt=''  />
                            <div className='cart-item-detail'>
                                <label>{cartItem.productName}</label>
                                <b>{cartItem.price}</b>
                                <div >
                                    <i>{cartItem.quantity === 1 ? `${cartItem.quantity} item `: `${cartItem.quantity} itens`} </i>
                                    <Link  href='/' onClick={() => removeItem(cartItem.product_id)}>
                                        Remover
                                    </Link>
                                </div>
                            </div>
                        </CartItemContent>
                        ))}
                        
                    </CartContent>
                </main>
                

            </CartComponentBagContainer>
            <CartComponentBagFooter>
                    <div className='quantity-items'>
                        <span>Quantidade</span>
                        <span>{cart.length === 1 ? `${cart.length} item `: `${cart.length} itens`}</span>
                    </div>
                    <div className='total-value'>
                        <span>Valor total</span>
                        <span>{formatCurrencyString({value:totalPrice ?? 0 , currency: 'BRL'})}</span>
                    </div>

                    <button onClick={handleFinishTransaction}>Finalizar compra</button>
                </CartComponentBagFooter>
        </CartComponentBox>
    )
}