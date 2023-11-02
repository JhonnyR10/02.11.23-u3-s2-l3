import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import CommentArea from "./CommentArea";

const MovieDetails = () => {
  const [listFilm, setListFilm] = useState([]);
  const [error, setError] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(true);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const renderFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=64a3fcb&i=" + params.movieId, {})
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setError(true);
          setLoading(false);
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        setListFilm(data);
        console.log("DATA", data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
        setError(true);
        setLoading(false);
        setShowErrorModal(true);
      });
  };

  useEffect(() => {
    renderFilm();
  }, []);

  const handleErrorClose = () => {
    setShowErrorModal(false);
  };
  console.log(listFilm.Poster);
  return (
    <Container fluid className="px-3">
      {loading && (
        <div className="d-flex justify-content-center mt-1">
          <Loading />
        </div>
      )}
      {error && <Error show={showErrorModal} onHide={handleErrorClose} />}

      <Row className="">
        {/* {listFilm.map((film, index) => (
          <FilmImage key={index} film={film} />
        ))} */}
        <Col xs={3}>
          {listFilm && (
            <Card>
              <Card.Img
                variant="top"
                src={listFilm.Poster}
                style={{ height: "500px" }}
              />
              <Card.Body>
                <Card.Title>{listFilm.Title}</Card.Title>
                <Card.Text>{listFilm.Plot}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Released : {listFilm.Released}</ListGroup.Item>
                <ListGroup.Item>Genre : {listFilm.Genre}</ListGroup.Item>
                <ListGroup.Item>Runtime : {listFilm.Runtime}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col>
          <CommentArea imdbID={listFilm.imdbID} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
