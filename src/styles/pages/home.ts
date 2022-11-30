import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    /* gap: '3rem', */
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,

    button: {
        position: 'absolute',
        background: 'transparent',
        cursor: 'pointer',
        border: 0,
        top: '50%',
        svg: {
            width: '48px',
            height: '48px',
            color: '$gray300',
            transition: '0.5s color',

            '&:hover': {
                color: '$gray100'
            }
        },
    },

    '.button-left': {
        left: 15,
    },
    '.button-right': {
        right: 15,
    },



})



export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    /* padding: '0.25rem', */
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    },



    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',


        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.3s ease-in-out',


        '.product-details': {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            strong: {
                fontSize: '$lg',
                color: '$gray100',
            },

            span: {
                fontSize: '$xl',
                fontWeight: 'bold',
                color: '$green300'
            },
        },

        '.product-add-to-cart': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$green300',
            width: '56px',
            height: '56px',
            borderRadius: 6,
            transition: '0.3s',

            '&:hover': {
                backgroundColor: '$green500',
            }
        }

    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1
        }
    }
})