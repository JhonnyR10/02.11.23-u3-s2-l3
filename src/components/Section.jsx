import { CaretDown, TextLeft, GridFill } from "react-bootstrap-icons";
const Section = () => {
  return (
    <section>
      <div className="container-fluid bg-black px-4 py-2">
        <div className="d-flex flex-row">
          <div className="">
            <h2 className="m-0 text-white">TV Shows</h2>
          </div>
          <div className="ms-4">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-black border-white border border-end-0 rounded-0 text-white pe-4"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genres
              </button>
              <button
                type="button"
                className="btn btn-black border border-start-0 border-white dropdown-toggle-split"
                style={{ color: "white" }}
              >
                <CaretDown className="text-white" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#action">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#another">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#Somthing">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-0 ms-auto">
            <div className="d-flex justify-content-start">
              <div className="p-0 text-end">
                <button
                  type="button"
                  className="btn btn-black border border border-white rounded-0"
                  style={{ color: "white" }}
                >
                  <TextLeft className="text-white margin" />
                </button>
              </div>
              <div className="p-0 text-start">
                <button
                  type="button"
                  className="btn btn-black border border border-white rounded-0"
                  style={{ color: "white" }}
                >
                  <GridFill className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section;
