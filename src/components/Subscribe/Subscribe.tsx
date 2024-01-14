import { Button, Typography } from '@mui/material'
import './Subscribe.scss'
type Props = {}
const Subscribe = (props: Props) => {
    return (
        <div className="subscribe">
            <Typography 
                sx={{
                    fontSize:'20px',
                    marginBottom:'20px',
                }}>
                Sign up for updates
                </Typography>
                <form action="#">
                    <input
                        type="email"
                        className="form-input"
                        placeholder="Your email address ..."
                    />
                    <Button className="form-btn">Sign up</Button>
                </form>
            </div>

    )
}
export default Subscribe
