import React from 'react';
import LikeButton from 'components/likeButton/LikeButton';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import classes from './categoryArticleItem.module.scss';

type ArticleItemType = {
  id: number;
  imageUrl: string;
  author: string;
  alt: string;
  category: string;
  date: string;
  title: string;
  description: string;
  isLiked: boolean;
  changeLikeArticle(id: number, like: boolean): void;
  updateLikedState(hasLiked: boolean): void;
  likedCount: number;
};

const CategoryArticleItem: React.FC<ArticleItemType> = ({
  id,
  alt,
  imageUrl,
  date,
  author,
  title,
  description,
  category,
  isLiked,
  changeLikeArticle,
  updateLikedState,
  likedCount,
}) => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate(
      `/${category.toLowerCase()}/${title.toLowerCase().replace(/ /g, '-')}`
    );

    window.scrollTo(0, 0);
  };
  return (
    <div style={{ maxWidth: '700px' }}>
      <img
        src={imageUrl}
        alt={alt}
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
        <Link
          className={classes.title}
          to={`/${category.toLowerCase()}/${title
            .toLowerCase()
            .replace(/ /g, '-')}`}
          onClick={handleLinkClick}
        >
          {title}
        </Link>
        <LikeButton
          key={id}
          isLiked={isLiked}
          id={id}
          changeLikeArticle={changeLikeArticle}
          updateLikedState={updateLikedState}
          likedCount={likedCount}
        />
      </Box>
      <Box sx={{ fontSize: '18px', margin: '10px 0' }}>
        {date} | {author}
      </Box>
      <Typography
        sx={{
          fontSize: ['18px', '20px'],
          marginBottom: '20px',
          lineHeight: [1.4, 1.5],
        }}
      >
        {description}
      </Typography>
      <Link
        to={`/${category}/${title.toLowerCase().replace(/ /g, '-')}`}
        className={classes.readMore}
        onClick={handleLinkClick}
      >
        Read more
      </Link>
    </div>
  );
};

export default CategoryArticleItem;
