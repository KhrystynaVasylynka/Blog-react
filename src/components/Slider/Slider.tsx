import Carousel from 'react-bootstrap/Carousel'
import bg1 from '../../assets/img/slider-1.webp'
import bg2 from '../../assets/img/slider-2.webp'
import bg3 from '../../assets/img/slider-3.webp'

import './Slider.scss'
import Container from '@mui/material/Container'

type Props = {}
const Slider = (props: Props) => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img src={bg1} alt="style-3" className="carousel-img" />
                <Container>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <img src={bg2} alt="style-1" className="carousel-img" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={bg3} alt="style-1" className="carousel-img" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
