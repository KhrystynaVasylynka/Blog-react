import Header from './Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from 'pages/Home/Home'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoryPage from 'pages/CategoryPage/CategoryPage'
import ArticlePage from 'pages/ArticlePage/ArticlePage'
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage'

type Props = {}

type likeArticleType = {
    [id: number]: boolean
}

const App = (props: Props) => {
    const [likeState, setLikeState] = useState<likeArticleType>({
        1: false,
        2: false,
    })

    const isLiked = false
    const [hasLikedArticles, setHasLikedArticles] = useState<boolean>(false)

    const updateLikedState = (isLiked: boolean) => {
        setHasLikedArticles(isLiked)
    }

    const [likedCount, setLikedCount] = useState<number>(0)

    useEffect(() => {
        const countLikedArticles = () => {
            return Object.values(likeState).filter((isLiked) => isLiked).length
        }

        const newLikedCount = countLikedArticles()
        setLikedCount(newLikedCount)
        setHasLikedArticles(newLikedCount > 0)
    }, [likeState])

    const changeLikeArticle = (id: number) => {
        setLikeState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header
                hasLikedArticles={hasLikedArticles}
                likedCount={likedCount}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            likeState={likeState}
                            changeLikeArticle={changeLikeArticle}
                            updateLikedState={updateLikedState}
                            likedCount={likedCount}
                        />
                    }
                ></Route>
                <Route
                    path=":category"
                    element={
                        <CategoryPage
                            category="Beauty"
                            likeState={likeState}
                            changeLikeArticle={changeLikeArticle}
                            isLiked={isLiked}
                            updateLikedState={updateLikedState}
                            likedCount={likedCount}
                        />
                    }
                ></Route>
                <Route
                    path=":category"
                    element={
                        <CategoryPage
                            likeState={likeState}
                            changeLikeArticle={changeLikeArticle}
                            category="Cosmetics"
                            isLiked={isLiked}
                            updateLikedState={updateLikedState}
                            likedCount={likedCount}
                        />
                    }
                ></Route>
                <Route
                    path=":category"
                    element={
                        <CategoryPage
                            likeState={likeState}
                            changeLikeArticle={changeLikeArticle}
                            category="Cream"
                            isLiked={isLiked}
                            updateLikedState={updateLikedState}
                            likedCount={likedCount}
                        />
                    }
                ></Route>
                <Route
                    path=":category"
                    element={
                        <CategoryPage
                            likeState={likeState}
                            changeLikeArticle={changeLikeArticle}
                            category="Hair care"
                            isLiked={isLiked}
                            updateLikedState={updateLikedState}
                            likedCount={likedCount}
                        />
                    }
                ></Route>
                <Route
                    path=":category/:title"
                    element={
                        <ArticlePage
                            likeState={likeState}
                            changeLikeArticle={changeLikeArticle}
                            isLiked={isLiked}
                            updateLikedState={updateLikedState}
                            likedCount={likedCount}
                        />
                    }
                ></Route>
                <Route
                    path="/favorites"
                    element={
                        <FavoritesPage
                            likeState={likeState}
                            changeLikeArticle={changeLikeArticle}
                            updateLikedState={updateLikedState}
                            likedCount={likedCount}
                        />
                    }
                ></Route>
            </Routes>
        </StyledEngineProvider>
    )
}
export default App
