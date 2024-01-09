import classes from './HomeArticle.module.scss'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import LikeButton from 'components/likeButton/LikeButton'

type HomeArticleItemType = {
    id: number
    imageUrl: string
    author: string
    alt: string
    category: string
    date: string
    title: string
    description: string
    isLiked: boolean
    likedCount: number
    changeLikeArticle(id: number, like: boolean): void
    updateLikedState(hasLiked: boolean): void
}

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
    const handleLinkClick = () => {
      window.scrollTo(0, 0);
    };
    return (
        <Box
            sx={{
                maxWidth: ['580px', '780px', '800px', '350px'],
                position: 'relative',
                overflow: 'hidden',
                display: { xs: 'flex', sm: 'initial' },

                flexDirection: { xs: 'column' },
                margin: '10px 0',
            }}
        >
            <img className={classes.image} src={imageUrl} alt={alt} />
            <span className={`${classes.category}`}>
        {category}
      </span>
      <Link
        to={`/${category.toLowerCase()}/${title
          .toLowerCase()
          .replace(/ /g, '-')}`}
        className={classes.title}
        onClick={handleLinkClick}
      >
                {title}
          </Link>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '10px 0',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                    }}
                    className={classes.data}
                >
                    {date} | by {author}
                </Typography>
            </Box>

            <Typography> {description}</Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Link
        to={`/${category}/${title.toLowerCase().replace(/ /g, '-')}`}
        className={classes.readMore}
        onClick={handleLinkClick}
      >
        Read more
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
        </Box>
    )
}

export default HomeArticleItem
