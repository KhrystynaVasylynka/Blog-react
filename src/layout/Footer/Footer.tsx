import { Box, Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Social from 'components/Social/Social'
import Subscribe from 'components/Subscribe/Subscribe'

type Props = {}

const Footer = (props: Props) => {
    return (
        <Box
            sx={{
                paddingBottom: '20px',
                boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.5)',
                backgroundColor: 'rgba(255, 218, 185,0.3)',
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: { lg: 'flex' },
                        alignItems: 'end',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: '300px',
                        }}
                    >
                        <Logo />
                        <p>
                            Beauty is the art of being the best possible version
                            of yourself on the inside and outside, now. Simba
                            Cosmetics upgrades you to the latest version!
                        </p>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Subscribe />
                        <Social />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
