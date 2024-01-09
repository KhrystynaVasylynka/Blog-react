import { useState } from 'react'
import {
    Tabs,
    Tab,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink, useLocation } from 'react-router-dom'
import classes from './Header.module.scss'
import { useNavigate } from 'react-router-dom'

type Props = {
    hasLikedArticles: boolean
    likedCount: number
}

const HeaderMenu = ({ hasLikedArticles, likedCount }: Props) => {
    const location = useLocation()

    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)
    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open)
    }
    const navigate = useNavigate()

    const handleTabClick = (path: string) => {
        navigate(path)
        window.scrollTo(0, 0)
    }

    return (
        <>
            <Tabs>
                <Tab
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        padding: '0px 15px',
                    }}
                    icon={<MenuIcon />}
                    onClick={toggleDrawer(true)}
                />

                <Tab
                    sx={{
                        padding: '0px 15px',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    label="Home"
                    component={NavLink}
                    to="/"
                    className={`${classes.items} ${
                        location.pathname === '/' ? classes.activeLink : ''
                    }`}
                    onClick={() => handleTabClick('/')}
                />
                <Tab
                    sx={{
                        padding: '0px 15px',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    label="Beauty"
                    component={NavLink}
                    to="/beauty"
                    className={`${classes.items} ${
                        location.pathname === '/beauty'
                            ? classes.activeLink
                            : ''
                    }`}
                    onClick={() => handleTabClick('/beauty')}
                />
                <Tab
                    sx={{
                        padding: '0px 15px',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    label="Cosmetics"
                    component={NavLink}
                    to="/cosmetics"
                    className={`${classes.items} ${
                        location.pathname === '/cosmetics'
                            ? classes.activeLink
                            : ''
                    }`}
                    onClick={() => handleTabClick('/cosmetics')}
                />
                <Tab
                    sx={{
                        padding: '0px 15px',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    label="Cream"
                    component={NavLink}
                    to="/cream"
                    className={`${classes.items} ${
                        location.pathname === '/cream' ? classes.activeLink : ''
                    }`}
                    onClick={() => handleTabClick('/cream')}
                />
                <Tab
                    sx={{
                        padding: '0px 15px',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    label="Hair care"
                    component={NavLink}
                    to="/hair care"
                    className={`${classes.items} ${
                        location.pathname === '/hair care'
                            ? classes.activeLink
                            : ''
                    }`}
                    onClick={() => handleTabClick('/hair care')}
                />
                <Tab
                    sx={{
                        padding: '0px 15px 5px 35px',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    label="Favorites"
                    icon={
                        hasLikedArticles ? (
                            <>
                                <FavoriteIcon
                                    sx={{ color: 'red', marginLeft: '10px' }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{ fontSize: '18px', color: '#1976d2' }}
                                >
                                    {' '}
                                    {likedCount}
                                </Typography>
                            </>
                        ) : (
                            <FavoriteBorderIcon />
                        )
                    }
                    iconPosition="end"
                    component={NavLink}
                    to="/favorites"
                    className={classes.items}
                    onClick={() => handleTabClick('/favorites')}
                />
            </Tabs>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
            >
                <List>
                    <ListItem
                        component={NavLink}
                        to="/"
                        onClick={toggleDrawer(false)}
                    >
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem
                        component={NavLink}
                        to="/beauty"
                        onClick={toggleDrawer(false)}
                    >
                        <ListItemText primary="Beauty" />
                    </ListItem>
                    <ListItem
                        component={NavLink}
                        to="/cosmetics"
                        onClick={toggleDrawer(false)}
                    >
                        <ListItemText primary="Cosmetics" />
                    </ListItem>
                    <ListItem
                        component={NavLink}
                        to="/cream"
                        onClick={toggleDrawer(false)}
                    >
                        <ListItemText primary="Cream" />
                    </ListItem>
                    <ListItem
                        component={NavLink}
                        to="/hair care"
                        onClick={toggleDrawer(false)}
                    >
                        <ListItemText primary="Hair care" />
                    </ListItem>
                    <ListItem
                        component={NavLink}
                        to="/favorites"
                        onClick={toggleDrawer(false)}
                    >
                        <ListItemText primary="Favorites" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default HeaderMenu
