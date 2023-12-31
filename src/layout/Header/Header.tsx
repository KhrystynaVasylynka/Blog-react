import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Logo from 'components/Logo/Logo'
import HeaderMenu from './HeaderMenu'

type Props = {
    hasLikedArticles: boolean
    likedCount: number
}
const Header: React.FC<Props> = ({ hasLikedArticles, likedCount }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: 'rgba(255, 218, 185,0.5)',
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
                        <HeaderMenu
                            hasLikedArticles={hasLikedArticles}
                            likedCount={likedCount}
                        />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header
