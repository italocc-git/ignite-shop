import Stripe from "stripe";

const StripeKey = process.env.STRIPE_SECRET_KEY ?? ''

export const stripe = new Stripe(StripeKey, {
    apiVersion: "2022-08-01",
    appInfo: {
        name: 'Ignite Shop',
    }
})