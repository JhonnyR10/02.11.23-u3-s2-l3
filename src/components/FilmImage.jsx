import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilmImage = ({ film }) => {
  // console.log("FILMIMAGE", film);
  return (
    <Col xs={6} sm={6} md={4} lg={2} xl={2} className="px-0">
      <Link to={"/movie-details/" + film.imdbID}>
        <Card className="border-0 ">
          <Card.Img
            style={{ height: "300px" }}
            className=""
            variant="top"
            src={film.Poster}
          />
        </Card>
      </Link>
    </Col>
  );
};
export default FilmImage;
