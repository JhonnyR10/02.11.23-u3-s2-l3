import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleErrorClose = () => {
    setShowErrorModal(false);
  };
  console.log(listFilm.Poster);
  return (
    <Container fluid className="p-3">
      {loading && (
        <div className="d-flex justify-content-center mt-1">
          <Loading />
        </div>
      )}
      {error && <Error show={showErrorModal} onHide={handleErrorClose} />}

      <Row className="justify-content-center mt-4">
        {/* {listFilm.map((film, index) => (
          <FilmImage key={index} film={film} />
        ))} */}
        <Col xs={3}>
          {listFilm && (
            <Card className="border-0 text-white">
              <Card.Img
                variant="top"
                src={listFilm.Poster}
                style={{ height: "500px" }}
              />
              <Card.Body className="bg-black">
                <Card.Title>{listFilm.Title}</Card.Title>
                <Card.Text>{listFilm.Plot}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="bg-black text-white">
                  Released : {listFilm.Released}
                </ListGroup.Item>
                <ListGroup.Item className="bg-black text-white">
                  Genre : {listFilm.Genre}
                </ListGroup.Item>
                <ListGroup.Item className="bg-black text-white">
                  Runtime : {listFilm.Runtime}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body className="bg-black">
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col xs={6}>
          <CommentArea imdbID={listFilm.imdbID} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
