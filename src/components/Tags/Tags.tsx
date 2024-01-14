import { NavLink } from 'react-router-dom'
import { Tab, Typography } from '@mui/material'

type Props = {}

const Tags = (props: Props) => {
    const handleTabClick = (path: string) => {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <Typography
                variant="h3"
                sx={{
                    margin: '0 auto',
                    backgroundColor: 'rgba( 160, 82, 45,0.8)',
                    height: '50px',
                    width: '100%',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                Tags
            </Typography>
            <Tab
                sx={{
                    color: 'brown',
                    maxWidth: 'none',
                    display: { xs: 'none', lg: 'flex' },
                }}
                label="Beauty"
                component={NavLink}
                to="/beauty"
                onClick={() => handleTabClick('/beauty')}
            />
            <Tab
                sx={{
                    color: 'brown',
                    maxWidth: 'none',
                    display: { xs: 'none', lg: 'flex' },
                }}
                label="Cosmetics"
                component={NavLink}
                to="/cosmetics"
                onClick={() => handleTabClick('/cosmetics')}
            />
            <Tab
                sx={{
                    color: 'brown',
                    maxWidth: 'none',
                    display: { xs: 'none', lg: 'flex' },
                }}
                label="Cream"
                component={NavLink}
                to="/cream"
                onClick={() => handleTabClick('/cream')}
            />
            <Tab
                sx={{
                    color: 'brown',
                    maxWidth: 'none',
                    display: { xs: 'none', lg: 'flex' },
                    marginBottom: '20px',
                }}
                label="Hair care"
                component={NavLink}
                to="/hair care"
                onClick={() => handleTabClick('/hair care')}
            />
        </>
    )
}
export default Tags
