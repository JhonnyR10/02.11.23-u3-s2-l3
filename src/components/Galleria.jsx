import { Component } from "react";

import { Container } from "react-bootstrap";
import SingleFilm from "./SingleFilm";

class Galleria extends Component {
  render() {
    return (
      <Container fluid className="bg-black">
        <h4 className="text-white ms-3 pt-2">Harry Potter</h4>
        <SingleFilm film="Harry Potter" />
        <h4 className="text-white ms-3 pt-2">Wrong Turn</h4>
        <SingleFilm film="Wrong Turn" />
        <h4 className="text-white ms-3 pt-2">Star Wars</h4>
        <SingleFilm film="Star Wars" />
      </Container>
    );
  }
}
export default Galleria;
