import Box from '@mui/material/Box'
import HomeArticle from '../article/HomeArticleItem'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Tab, Typography, List, ListItem } from '@mui/material'

type HomeArticleItemType = {
    id: number
    imageUrl: string
    author: string
    alt: string
    category: string
    date: string
    title: string
    description: string
    inSidebar: string
}

type Props = {
    articles: HomeArticleItemType[]
    likeState: {
        [id: number]: boolean
    }
    changeLikeArticle(id: number, like: boolean): void
    updateLikedState(hasLiked: boolean): void
    likedCount: number
}

const Sidebar = ({
    articles,
    likeState,
    changeLikeArticle,
    updateLikedState,
    likedCount,
}: Props) => {
    const navigate = useNavigate()

    const handleTabClick = (path: string) => {
        navigate(path)
        window.scrollTo(0, 0)
    }
    return (
        <Box
            sx={{
                paddingTop: '20px',
                backgroundColor: 'rgba(255, 218, 185,0.3)',
                borderLeft: ' 2px solid brown',
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    margin: '0 auto',
                    backgroundColor: 'rgba( 160, 82, 45,0.8)',
                    height: '50px',
                    width: '100%',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginTop: '0px',
                    textAlign: 'center',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                Our Top Articles
            </Typography>
            <List>
                {articles
                    .filter((item) => item.inSidebar === 'yes')
                    .map((item) => (
                        <ListItem key={item.id}>
                            <HomeArticle
                                key={item.id}
                                alt={item.alt}
                                imageUrl={item.imageUrl}
                                category={item.category}
                                date={item.date}
                                author={item.author}
                                title={item.title}
                                description={item.description}
                                id={item.id}
                                isLiked={likeState[item.id]}
                                changeLikeArticle={changeLikeArticle}
                                updateLikedState={updateLikedState}
                                likedCount={likedCount}
                            />
                        </ListItem>
                    ))}
            </List>
            <Typography
                variant="h3"
                sx={{
                    margin: '0 auto',
                    backgroundColor: 'rgba( 160, 82, 45,0.8)',
                    height: '50px',
                    width: '100%',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginTop: '0px',
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
                    maxWidth:'none',
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
                    maxWidth:'none',
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
                    maxWidth:'none',
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
                    maxWidth:'none',
                    display: { xs: 'none', lg: 'flex' },
                }}
                label="Hair care"
                component={NavLink}
                to="/hair care"
                onClick={() => handleTabClick('/hair care')}
                />
          
        </Box>
    )
}

export default Sidebar
