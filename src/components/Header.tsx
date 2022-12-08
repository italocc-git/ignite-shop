import Image from 'next/image'
import logoImg from "../assets/logo.svg"
import { Handbag } from "phosphor-react"
import Link from 'next/link'
import { HeaderComponent } from '../styles/components/Header'
import {useShoppingCart} from 'use-shopping-cart'
interface HeaderProps {
    setShowCart : (showCart : boolean) => void
}

export function Header({setShowCart} : HeaderProps){
    const {cartCount} = useShoppingCart()
    return (
        <HeaderComponent>
            <Link href='/'>
                <Image src={logoImg.src} alt="logo-img" width={130} height={52} />
            </Link>
            
            <button className="product-add-to-cart" onClick={() => setShowCart(true)}>
                <Handbag weight="bold" size={32} />
                <span>{cartCount}</span>
            </button>
        </HeaderComponent>
    )
}