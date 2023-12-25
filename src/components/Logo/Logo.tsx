import Typography from '@mui/material/Typography'
import logo from 'assets/logo.webp'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography variant="h6" noWrap component="a" sx={{ flexGrow: 1 }}>
            <div>
                <a href="/" style={{ display: 'block' }}>
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: '100px',
                            verticalAlign: 'bottom',
                            margin: 20,
                        }}
                    />
                </a>
            </div>
        </Typography>
    )
}

export default Logo
