import { Box, Container, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from 'components/Logo/Logo';

type Props = {};

const Footer = (props: Props) => {
  const iconStyles = {
    cursor: 'pointer',
		marginRight: '30px',
		color:'brown',
    '&:hover, &:focus': {
      color: 'red',
    },
  };

  return (
    <Box
      sx={{
        background: 'white',
        padding: '10px',
				boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.5)',
				backgroundColor: 'rgba(255, 218, 185,0.5)',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
						alignItems: 'center',
						justifyContent:'space-between'
          }}
				>
					<Box
					 sx={{
							maxWidth: '300px',
          }}>
						<Logo />
						<p>Beauty is the art of being the best possible version of yourself on the inside and outside, now. Simba Cosmetics upgrades you to the latest version!</p>
					</Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
							alignItems: 'center',
            }}
          >
            <Box>
              <Link
                href="https://www.facebook.com/help/188157731232424"
                target="_blank"
                sx={iconStyles}
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://www.facebook.com/help/instagram/155940534568753"
                target="_blank"
                sx={iconStyles}
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://twitter.com/?lang=ru"
                target="_blank"
                sx={iconStyles}
              >
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                sx={{
                  ...iconStyles,
                  '&:last-child': {
                    marginRight: 0,
                  },
                }}
              >
                <YouTubeIcon />
              </Link>
            </Box>
           
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
