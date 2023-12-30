import classes from './HomeArticle.module.scss';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


type HomeArticleItemType = {
  id: number;
  imageUrl: string;
  author: string;
  alt: string;
  category: string;
  date: string;
  title: string;
  description: string;
 
 
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
      <Link
        to={`/${category.toLowerCase()}/${title
          .toLowerCase()
          .replace(/ /g, '-')}`}
        className={classes.title}
      
      >
        {title}
      </Link>
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
      </Box>

      <Typography> {description}</Typography>
      <Link
        to={`/${category}/${title.toLowerCase().replace(/ /g, '-')}`}
        className={classes.readMore}
       
      >
        Read more
      </Link>
    </Box>
  );
};

export default HomeArticleItem;
