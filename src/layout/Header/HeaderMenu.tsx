import Button from '@mui/material/Button'

type Props = {}
const HeaderMenu = (props: Props) => {
    return (
        <>
            <Button color="primary">Home</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">Cart</Button>
        </>
    )
}
export default HeaderMenu
