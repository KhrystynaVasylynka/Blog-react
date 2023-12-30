
import { Container } from '@mui/material';
import Slider from 'components/Slider/Slider';
import HomeArticles from 'components/article/HomeArticles';




type Props = {
 
};

const Home = (props: Props) => {

  return (
    <>
    <Slider/>
      <Container
        sx={{
          paddingTop: '30px',
        }}
      >
        <HomeArticles
        />
       
      </Container>
    </>
  );
};

export default Home;
