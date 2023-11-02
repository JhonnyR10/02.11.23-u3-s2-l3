import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import FilmImage from "./FilmImage";
import Loading from "./Loading";
import Error from "./Error";

class SingleFilm extends Component {
  state = {
    listFilm: [],
    error: false,
    showErrorModal: true,
    loading: true,
  };
  aggiornaState = () => {
    fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=64a3fcb&s=" + this.props.film,
      {}
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          this.setState({
            error: true,
            loading: false,
          });
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        this.setState({
          listFilm: data.Search,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
        this.setState({
          error: true,
          loading: false,
          showErrorModal: true,
        });
      });
  };
  handleErrorClose = () => {
    this.setState({
      showErrorModal: false,
    });
  };
  componentDidMount() {
    this.aggiornaState();
  }
  render() {
    // console.log(this.state.listFilm);

    return (
      <Container fluid className="px-3">
        {this.state.loading && (
          <div className="d-flex justify-content-center mt-1">
            <Loading />
          </div>
        )}
        {this.state.error && (
          <Error
            show={this.state.showErrorModal}
            onHide={this.handleErrorClose}
          />
        )}

        <Row className="justify-content-around px-3">
          {this.state.listFilm.map((film, index) => (
            <FilmImage key={index} film={film} />
          ))}
        </Row>
      </Container>
    );
  }
}
export default SingleFilm;
