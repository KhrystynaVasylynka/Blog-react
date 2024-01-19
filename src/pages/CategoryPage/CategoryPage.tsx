import { Container, Typography, Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { articlesArray } from 'utils/articlesArray'
import CategoryArticleItem from 'components/categoryArticleItem/categoryArticleItem'
import Sidebar from 'components/Sidebar/Sidebar'


type LikeState = {
    [id: number]: boolean
}

type CategoryPageProps = {
    category: string
    likeState: LikeState
    changeLikeArticle(id: number, like: boolean): void
    updateLikedState(hasLiked: boolean): void
    isLiked: boolean
    likedCount: number
}

const CategoryPage = ({
    likeState,
    changeLikeArticle,
    updateLikedState,
    likedCount,
}: CategoryPageProps) => {
    const { category } = useParams()

    const filteredArticles = articlesArray.filter(
        (article) => article.category.toLowerCase() === category
    )

    return (
        <Container sx={{ paddingTop: '50px' }}>
            <Typography
                variant="h2"
                component={'h3'}
                sx={{
                    fontSize: ['28px', '32px'],
                    textAlign: 'center',
                    letterSpacing: '2px',
                    marginBottom: '20px',
                    color: 'brown',
                }}
            >
                Articles in the category{' '}
                <Typography
                    variant="h2"
                    component={'span'}
                    sx={{
                        textTransform: 'uppercase',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        letterSpacing: 'px',
                    }}
                >
                    {category}
                </Typography>
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', lg: 'space-between' },
                }}
            >
                <div>
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map(
                            ({
                                id,
                                alt,
                                imageUrl,
                                date,
                                author,
                                title,
                                description,
                                category,
                            }) => (
                                <CategoryArticleItem
                                    key={id}
                                    id={id}
                                    alt={alt}
                                    imageUrl={imageUrl}
                                    date={date}
                                    author={author}
                                    title={title}
                                    description={description}
                                    category={category}
                                    isLiked={likeState[id]}
                                    changeLikeArticle={changeLikeArticle}
                                    updateLikedState={updateLikedState}
                                    likedCount={likedCount}
                                />
                            )
                        )
                    ) : (
                        <Typography>Articles are not found</Typography>
                    )}
                </div>

                <Box sx={{ display: { xs: 'none', lg: 'initial' } }}>
                    <Sidebar
                      likeState={likeState}
                      changeLikeArticle={changeLikeArticle}
                      articles={articlesArray.filter(
                          (item) => item.inSidebar === 'yes'
                      )}
                      updateLikedState={updateLikedState}
                      likedCount={likedCount}
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default CategoryPage
