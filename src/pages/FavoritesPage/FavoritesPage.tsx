import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { articlesArray } from 'utils/articlesArray'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import Sidebar from 'components/sidebar/Sidebar'
import LikeButton from 'components/likeButton/LikeButton'
import { Link } from 'react-router-dom'
import classes from './FavoritesPage.module.scss'

type Props = {
    likeState: { [id: number]: boolean }
    changeLikeArticle(id: number, like: boolean): void
    updateLikedState(hasLiked: boolean): void
    likedCount: number
}
const FavoritesPage = ({
    likeState,
    changeLikeArticle,
    updateLikedState,
    likedCount,
}: Props) => {
    const getLikedArticles = () => {
        return articlesArray.filter((article) => likeState[article.id])
    }
    const likedArticles = getLikedArticles()

    return (
        <Container style={{ paddingTop: '50px', minHeight: '100vh' }}>
            <Typography
                sx={{
                    fontSize: '28px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    // color:'rgba( 160, 82, 45,0.8)',
                }}
            >
                Favorites
            </Typography>
            {likedArticles.length > 0 ? (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', lg: 'space-between' },
                    }}
                >
                    <Box>
                        {likedArticles.map((article) => (
                            <>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: {
                                            xs: 'column',
                                            sm: 'row',
                                        },
                                        gap: '20px',
                                        paddingBottom: '30px',
                                    }}
                                >
                                    <div>
                                        <img
                                            className={classes.img}
                                            src={article.imageUrl}
                                            alt="article"
                                        />
                                    </div>
                                    <Box
                                        sx={{
                                            maxWidth: ['450px', '390px'],
                                            width: '100%',
                                        }}
                                    >
                                        <Typography
                                            key={article.id}
                                            sx={{
                                                fontSize: '20px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            <Link
                                                className={classes.title}
                                                to={`/${article.category.toLowerCase()}/${article.title
                                                    .replace(/\s+/g, '-')
                                                    .toLowerCase()}`}
                                            >
                                                {article.title}
                                            </Link>
                                        </Typography>
                                        <div style={{ display:'flex',justifyContent:'space-between',}}>
                                        <Typography
                                            sx={{
                                                fontSize: '18px',
                                                margin: '10px 0',
                                                color:'gray',
                                            }}
                                        >
                                            {article.date} | {article.author}
                                        </Typography>
                                        <LikeButton
                                            isLiked={likeState[article.id]}
                                            id={article.id}
                                            changeLikeArticle={
                                                changeLikeArticle
                                            }
                                            updateLikedState={updateLikedState}
                                            likedCount={likedCount}
                                            />
                                        </div>
                                        <Typography>
                                            {article.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', lg: 'initial' },
                        }}
                    >
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
            ) : (
                <Box>
                    <Typography
                        sx={{
                            display: 'inline-block',
                            fontSize: '26px',
                                minHeight: '90vh',
                        }}
                    >
                        There are no articles here yet
                    </Typography>
                   
                </Box>
            )}
        </Container>
    )
}

export default FavoritesPage
