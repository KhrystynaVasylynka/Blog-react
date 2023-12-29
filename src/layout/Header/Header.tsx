import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Logo from 'components/Logo/Logo'
import HeaderMenu from './HeaderMenu'

type Props = {
   
  };
  const Header= (props: Props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: 'rgba(255, 218, 185,0.2)',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Logo />
                        <HeaderMenu />
                       
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header
