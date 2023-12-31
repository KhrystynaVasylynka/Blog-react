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
import { NavLink } from 'react-router-dom'
import classes from './Header.module.scss'

type Props = {
    hasLikedArticles: boolean
    likedCount: number
}

const HeaderMenu = ({ hasLikedArticles, likedCount }: Props) => {
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)
    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open)
    }

    return (
        <>
            <Tabs>
                <Tab
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                    }}
                    icon={<MenuIcon />}
                    onClick={toggleDrawer(false)}
                />

                <Tab
                    sx={{
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    className={classes.items}
                    label="Home"
                />
                <Tab
                    sx={{
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    className={classes.items}
                    label="Beauty"
                />
                <Tab
                    sx={{
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    className={classes.items}
                    label="Cosmetics"
                />
                <Tab
                    sx={{
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    className={classes.items}
                    label="Cream"
                />
                <Tab
                    sx={{
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    className={classes.items}
                    label="Hair care"
                />
                <Tab
                    sx={{
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    className={classes.items}
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
                />
            </Tabs>

            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
            >
                <List>
                    <ListItem>
                        Home
                        <ListItemText />
                    </ListItem>
                    <ListItem
                        component={NavLink}
                        to="/fashion"
                        onClick={toggleDrawer(false)}
                    >
                        <ListItemText primary="Fashion" />
                    </ListItem>
                    <ListItem
                        component={NavLink}
                        to="/health"
                        onClick={toggleDrawer(false)}
                    >
                        <ListItemText primary="Health" />
                    </ListItem>
                    <ListItem
                        component={NavLink}
                        to="/astrology"
                        onClick={toggleDrawer(false)}
                    >
                        <ListItemText primary="Astrology" />
                    </ListItem>
                    <ListItem
                        component={NavLink}
                        to="/psychology"
                        onClick={toggleDrawer(false)}
                    >
                        <ListItemText primary="Psychology" />
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
