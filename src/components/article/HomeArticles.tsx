import { Box, Container, Grid, Typography } from '@mui/material';
import { articlesArray } from 'utils/articlesArray';
import HomeArticleItem from './HomeArticleItem';


type Props = {
  likeState: {
    [id: number]: boolean;
  };
  changeLikeArticle(id: number, like: boolean): void;
  updateLikedState(hasLiked: boolean): void;
  likedCount: number;

};



const HomeArticles = ({
  likeState,
  changeLikeArticle,
  updateLikedState,
  likedCount,
}: Props) => {
  return (
    <Container>
      <Grid container spacing={3} sx={{ paddingTop: '0px!important' }}>
        <Grid
          item
          xs={12}
          md={12}
          lg={8}
          sx={{
            marginBottom: '40px',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              marginTop: '-10px',
              fontWeight: 'bold',
              fontSize: ['20px', '30px', '40px'],
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '20px',
            }}
          >
            Our articles
          </Typography>
         
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', lg: 'space-between' },
            }}
          >
            {articlesArray.map(
              ({
                id,
                imageUrl,
                author,
                alt,
                category,
                date,
                title,
                description,
              }) => (
                <HomeArticleItem
                  key={id}
                  alt={alt}
                  imageUrl={imageUrl}
                  category={category}
                  date={date}
                  author={author}
                  title={title}
                  description={description}
                  isLiked={likeState[id]}
                  id={id}
                  changeLikeArticle={changeLikeArticle}
                  updateLikedState={updateLikedState}
                  likedCount={likedCount}
                />
              )
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeArticles;
