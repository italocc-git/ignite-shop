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

        '&:hover': {
            color: '$gray300',

        }
    }
})