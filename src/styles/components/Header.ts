import { styled } from "..";
export const HeaderComponent = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',

    '.product-add-to-cart': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$gray800',
        width: '56px',
        height: '56px',
        borderRadius: 6,
        transition: '0.3s',
        cursor: 'pointer',
        color: '$gray500',
        border: 0,
        position: 'relative',
        '&:hover': {
            color: '$gray300',

        },

        span: {
            background: '$green500',
            width: 24,
            height: 24,
            position: 'absolute',
            top: '-7px',
            right: '-7px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF',
            borderRadius: '1000px',
            fontSize: '14px',
            fontWeight: 700
        }
    }
})