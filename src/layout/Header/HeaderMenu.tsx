import { useState } from 'react'
import { Tabs, Tab, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink} from 'react-router-dom'



type Props = {
    hasLikedArticles: boolean;
    likedCount: number;
  };
  
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
                        padding: '0px 15px',
                    }}
                    icon={<MenuIcon />}
                    onClick={toggleDrawer(false)}
                />

                <Tab
                    sx={{
                        padding: '0px 15px',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    label="Home"
                />
                <Tab
                    sx={{
                        padding: '0px 15px',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    label="Beauty"
                />
                <Tab
                    sx={{
                        padding: '0px 15px',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    label="Cosmetics"
                />
                <Tab
                    sx={{
                        padding: '0px 15px',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    label="Cream"
                />
                <Tab
                    sx={{
                        padding: '0px 15px',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    label="Hair care"
                />
                <Tab
                    sx={{
                        padding: '0px 15px ',
                        display: { xs: 'none', lg: 'flex' },
                    }}
                    label="Favorites"
                    icon={
                      hasLikedArticles ? (
                        <>
                          <FavoriteIcon sx={{ color: 'red', marginLeft: '10px' }} />
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