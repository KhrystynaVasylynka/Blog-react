import { Box, Container, Typography } from '@mui/material'
import LikeButton from 'components/likeButton/LikeButton'
import Review from 'components/Reviews/Review'
import Sidebar from 'components/Sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { articlesArray } from 'utils/articlesArray'
import { reviewsArray } from 'utils/reviewsArray'
import ava0 from '../../assets/img/ava0.webp'
import Form from 'components/Form/Form'

type HomeArticleItemType = {
    id: number
    title: string
    imageUrl: string
    alt: string
    author: string
    date: string
    description: string
    full?: string
}

type LikeState = {
    [id: number]: boolean
}

type ArticlePageProps = {
    likeState: LikeState
    changeLikeArticle(id: number, like: boolean): void
    updateLikedState(hasLiked: boolean): void
    likedCount: number
    isLiked: boolean
}
type CommentData = {
    fullName: string
    email: string
    comment: string
    image?: string
}

const ArticlePage = ({
    likeState,
    changeLikeArticle,
    updateLikedState,
    likedCount,
}: ArticlePageProps) => {
    const initialComments: CommentData[] = reviewsArray.map((review) => ({
        fullName: review.fullname,
        image: review.img,
        email: '',
        comment: review.text,
    }))

    const [allComments, setAllComments] =
        useState<CommentData[]>(initialComments)

    const addComment = (comment: CommentData) => {
        setAllComments((prevComments) => [...prevComments, comment])
    }

    const { title } = useParams<{ title: string | undefined }>()

    if (!title) {
        return <Typography>Article not found</Typography>
    }

    const article = articlesArray.find(
        (article: HomeArticleItemType) =>
            article.title.toLowerCase() ===
            title.replace(/-/g, ' ').toLowerCase()
    )

    if (!article) {
        return <Typography>Article not found</Typography>
    }

    return (
        <Container
            sx={{
                paddingTop: '60px',
                display: 'flex',
                justifyContent: { xs: 'center', lg: 'space-between' },
            }}
        >
            <Box
                sx={{
                    maxWidth: '700px',
                }}
            >
                <Typography
                    variant="h2"
                    component={'h3'}
                    sx={{
                        fontSize: ['30px', '32px'],
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'brown',
                        letterSpacing: '2px',
                    }}
                >
                    {article.title}
                </Typography>
                <img
                    src={article.imageUrl}
                    alt={article.alt}
                    style={{
                        maxWidth: '700px',
                        width: '100%',
                        maxHeight: '300px',
                        objectFit: 'cover',
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '18px',
                            margin: '10px 0',
                            color: 'grey',
                        }}
                    >
                        {article.date} | {article.author}
                    </Typography>

                    <LikeButton
                        isLiked={likeState[article.id]}
                        id={article.id}
                        changeLikeArticle={changeLikeArticle}
                        updateLikedState={updateLikedState}
                        likedCount={likedCount}
                    />
                </Box>
                {article.full && (
                    <Typography
                        sx={{
                            fontSize: ['18px', '20px'],
                            marginBottom: '20px',
                        }}
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: article.full }}
                        ></div>
                    </Typography>
                )}

                <Box>
                    {allComments.map((comment, index) => (
                        <Review
                            key={index}
                            userFullName={comment.fullName}
                            userImg={comment.image || ava0}
                            commentText={comment.comment}
                        />
                    ))}
                </Box>
                <Form addComment={addComment} comments={allComments} />
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
        </Container>
    )
}

export default ArticlePage
