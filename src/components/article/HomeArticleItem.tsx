import classes from './HomeArticle.module.scss';
import { Box, Typography } from '@mui/material';
import LikeButton from 'components/UI/LikeButton';


type HomeArticleItemType = {
  id: number;
  imageUrl: string;
  author: string;
  alt: string;
  category: string;
  date: string;
  title: string;
  description: string;
  isLiked: boolean;
  likedCount: number;
  changeLikeArticle(id: number, like: boolean): void;
  updateLikedState(hasLiked: boolean): void;
};
 


const HomeArticleItem = ({
  id,
  imageUrl,
  author,
  alt,
  category,
  date,
  title,
  description,
  isLiked,
  changeLikeArticle,
  updateLikedState,
  likedCount,
}: HomeArticleItemType) => {
  return (
    <Box
      sx={{
        maxWidth: ['580px', '780px', '800px', '350px'],
        position: 'relative',
        overflow: 'hidden',
        display: { xs: 'flex', sm: 'initial' },

        flexDirection: { xs: 'column' },
      }}
    >
      <img className={classes.image} src={imageUrl} alt={alt} />
      <span className={classes.category}>
        {category}
      </span>
      <a  className={classes.title} href="#"> {title}</a>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
          }}
        >
          {date} | by {author}
        </Typography>
        <LikeButton
          key={id}
          isLiked={isLiked}
          id={id}
          changeLikeArticle={changeLikeArticle}
          updateLikedState={updateLikedState}
          likedCount={likedCount}
        />
      </Box>

      <Typography> {description}</Typography>
      <a className={classes.readMore}
       href="#"> Read more</a>
    </Box>
  );
};

export default HomeArticleItem;
