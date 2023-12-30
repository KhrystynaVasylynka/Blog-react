import Header from './Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from 'pages/Home/Home'
import { useState } from 'react';

type Props = {};

type likeArticleType = {
  [id: number]: boolean;
};

const App = (props: Props) => {
  const [likeState, setLikeState] = useState<likeArticleType>({
    1: false,
    2: false,
  });
  const isLiked = false;
  const [hasLikedArticles, setHasLikedArticles] = useState<boolean>(false);

  const updateLikedState = (isLiked: boolean) => {
    setHasLikedArticles(isLiked);
  };

  const [likedCount, setLikedCount] = useState<number>(0);
  const changeLikeArticle = (id: number) => {
    setLikeState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
            <>
                <StyledEngineProvider injectFirst>
                    <CssBaseline />
                    <Header  hasLikedArticles={hasLikedArticles} likedCount={likedCount}/>
        <Home
          likeState={likeState}
          changeLikeArticle={changeLikeArticle}
          updateLikedState={updateLikedState}
          likedCount={likedCount}/>
                </StyledEngineProvider>
            </>
        )
    }


export default App
