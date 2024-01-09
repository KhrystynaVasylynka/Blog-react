import Box from '@mui/material/Box'
import HomeArticle from '../article/HomeArticleItem'
import { Typography, List, ListItem } from '@mui/material'
import Tags from 'components/Tags/Tags'

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
          <Tags/>
        </Box>
    )
}

export default Sidebar
