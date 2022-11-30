import { styled } from '..'

export const CartComponentBox = styled('aside', {
    position: 'absolute',
    width: 480,
    height: '100vh',
    right: 0,
    top: 0,
    bottom: 0,
    background: '$gray800',
    padding: '0 48px',

    header: {
        padding: '24px 0',
        display: 'flex',
        justifyContent: 'right',
        svg: {
            cursor: 'pointer',
            color: '$gray500',
            transition: '0.3s color',
            '&:hover': {
                color: '$gray300'
            }
        }

    }
})

export const CartComponentBagContainer = styled('div', {

    h1: {
        fontWeight: 700,
        fontSize: 20,
        lineHeight: '32px',
        padding: '32px 0'
    }
})

export const CartContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    minHeight: 570,
    overflowY: 'auto'

})

export const CartItemContent = styled('div', {

    display: 'flex',
    gap: '1.2rem',
    img: {
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
        borderRadius: 8,

    },
    '.cart-item-detail': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        label: {
            fontSize: '18px',
            color: '$gray300'

        },

        b: {
            fontWeight: 700,
            fontSize: 18,
            color: '$gray100'
        },
        a: {
            color: '$green500',
            textDecoration: 'none',
            fontWeight: 700,
            transition: '0.3s color',
            cursor: 'pointer',
            '&:hover': {
                color: '$green300'
            }
        }
    }
})

export const CartComponentBagFooter = styled('footer', {
    div: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '7px'

    },

    '.quantity-items': {
        color: '$gray300',
        fontSize: '18px'
    },
    '.total-value': {
        color: '$gray100',
        fontWeight: 700
    },
    button: {
        background: '$green500',
        padding: '20px 32px',
        color: 'white',
        marginTop: '2rem',
        borderRadius: 8,
        width: '100%',
        border: 0,
        fontWeight: 700,
        fontSize: 18,
        transition: '0.3s background',
        cursor: 'pointer',

        '&:hover': {
            background: '$green300'
        }
    }
})