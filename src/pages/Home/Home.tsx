import { Container } from '@mui/material'
import Slider from 'components/Slider/Slider'
import HomeArticles from 'components/article/HomeArticles'

type Props = {
    likeState: {
        [id: number]: boolean
    }
    changeLikeArticle(id: number, like: boolean): void
    updateLikedState(hasLiked: boolean): void
    likedCount: number
}

const Home = ({
    likeState,
    changeLikeArticle,
    updateLikedState,
    likedCount,
}: Props) => {
    return (
        <>
            <Slider />
            <Container
                sx={{
                    paddingTop: '30px',
                }}
            >
                <HomeArticles
                    likeState={likeState}
                    changeLikeArticle={changeLikeArticle}
                    updateLikedState={updateLikedState}
                    likedCount={likedCount}
                />
            </Container>
        </>
    )
}

export default Home
