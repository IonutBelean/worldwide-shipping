import { Container, Card, Button, Carousel } from "react-bootstrap";
import Layout from "../components/Layout";
import HomeCSS from "./Home.module.css";

const Home = () => {
  return (
    <Layout>
      <Container className={`${HomeCSS.container} p-0`}>
        <Card className="bg-dark text-white border-light">
          <Card.Img className={`${HomeCSS.image} `} />
          <Card.ImgOverlay
            className={`${HomeCSS.content} d-flex flex-column justify-content-around align-items-start`}
          >
            <Card.Title>We'd love to help design your dream dress!</Card.Title>
            <Card.Text>
              You can get inspired from our designs or upload your photos.
            </Card.Text>
            <Button>Upload Photos</Button>
            <Button>See Designs</Button>
          </Card.ImgOverlay>
        </Card>
      </Container>
      <Container className="p-0">
        <Carousel className={`${HomeCSS.carousel_container} bg-dark`}>
          <Carousel.Item interval={1500}>
            <img
              className={`${HomeCSS.carousel} d-block w-100`}
              src={require("../pics/Carousel/1.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={`${HomeCSS.carousel} d-block w-100`}
              src={require("../pics/Carousel/2.jpg")}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={`${HomeCSS.carousel} d-block w-100`}
              src={require("../pics/Carousel/3.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={`${HomeCSS.carousel} d-block w-100`}
              src={require("../pics/Carousel/4.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={`${HomeCSS.carousel} d-block w-100`}
              src={require("../pics/Carousel/5.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={`${HomeCSS.carousel} d-block w-100`}
              src={require("../pics/Carousel/6.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={`${HomeCSS.carousel} d-block w-100`}
              src={require("../pics/Carousel/7.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={`${HomeCSS.carousel} d-block w-100`}
              src={require("../pics/Carousel/8.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={`${HomeCSS.carousel} d-block w-100`}
              src={require("../pics/Carousel/9.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={`${HomeCSS.carousel} d-block w-100`}
              src={require("../pics/Carousel/10.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className={`${HomeCSS.carousel} d-block w-100`}
              src={require("../pics/Carousel/11.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Layout>
  );
};

export default Home;
