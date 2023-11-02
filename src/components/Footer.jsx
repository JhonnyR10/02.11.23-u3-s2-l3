import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";
const Footer = () => {
  return (
    <footer className="bg-black pt-5 border border-0">
      <div className="container border border-0">
        <div className="py-5">
          <div className="row row-cols-4 justify-content-center pb-3">
            <div className="col-1">
              <Facebook className="text-secondary" />
            </div>
            <div className="col-1">
              <Instagram className="text-secondary" />
            </div>
            <div className="col-1">
              <Twitter className="text-secondary" />
            </div>
            <div className="col-1">
              <Youtube className="text-secondary" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-5 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#audio" className="nav-link p-0 text-secondary">
                    Audio and Subtitles
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#media" className="nav-link p-0 text-secondary">
                    Media Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#privacy" className="nav-link p-0 text-secondary">
                    Privacy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#contac" className="nav-link p-0 text-secondary">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <button
                    type="button"
                    className="btn btn-black border-secondary rounded-0 text-secondary pe-3"
                  >
                    Service Code
                  </button>
                </li>
                <li>
                  <span>1997-2019 Netflix,inc</span>
                </li>
              </ul>
            </div>

            <div className="col-5 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#Audio" className="nav-link p-0 text-secondary">
                    Audio Description
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#invector" className="nav-link p-0 text-secondary">
                    Invector Relations
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#legal" className="nav-link p-0 text-secondary">
                    Legal Notices
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-5 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#help" className="nav-link p-0 text-secondary">
                    Help Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#jobs" className="nav-link p-0 text-secondary">
                    Jobs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#cookie" className="nav-link p-0 text-secondary">
                    Cookie Preferences
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-5 col-md-2 mb-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#Gift" className="nav-link p-0 text-secondary">
                    Gift cards
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#Terms" className="nav-link p-0 text-secondary">
                    Terms of Use
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#corporate" className="nav-link p-0 text-secondary">
                    Corporate information
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
