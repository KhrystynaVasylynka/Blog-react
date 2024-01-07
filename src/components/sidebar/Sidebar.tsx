import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Typography } from '@mui/material'
import HomeArticle from '../article/HomeArticleItem'

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
                borderLeft: ' 1px solid #333',
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontSize: '26px',
                    fontWeight: 'bold',
                    marginTop: '0px',
                    textAlign: 'center',
                }}
            >
                OUR TOP ARTICLES
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
        </Box>
    )
}

export default Sidebar
