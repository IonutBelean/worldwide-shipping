import { Container, Card, Button } from "react-bootstrap";
import Layout from "../components/Layout";
import HomeCSS from "./Home.module.css";

const Home = () => {
  return (
    <Layout>
      <Container fluid className={`${HomeCSS} my-3`}>
        <Card className="bg-dark text-white">
          <Card.Img className={`${HomeCSS.image} card-img-right`} />
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
    </Layout>
  );
};

export default Home;
