import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Galleria from "./components/Galleria";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
          <Section />
        </header>
        <main className="bg-black">
          <Routes>
            <Route path="/" element={<Galleria />} />
            <Route path="/TV" element={<TVShows />} />
            <Route element={<MovieDetails />} path="/movie-details/:movieId" />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
