import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useEffect, useState } from "react";

const CommentArea = ({ imdbID }) => {
  // state = {
  //   // review: {
  //   //   comment: "",
  //   //   rate: "",
  //   //   elementId: "",
  //   // },
  //   review: null,
  //   loading: true,
  //   error: false,
  // };
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getComments = () => {
    // console.log(imdbID);
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        // this.props.bookState,
        imdbID,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjI5M2Y2ZTNkZDAwMTQ5NWU0NGMiLCJpYXQiOjE2OTgzMjUxMzksImV4cCI6MTY5OTUzNDczOX0.he1d8IgEChhNxsL7NXGJP9dTVJHQ4xGxHI1GhUUGBYI",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          // this.setState({
          //   error: true,
          //   loading: false,
          // });
          setError(true);
          setLoading(false);
          throw new Error("Errore nella richiesta");
        }
      })
      .then((data) => {
        console.log(data);
        // this.setState({
        //   review: data,
        //   loading: false,
        // });
        setReview(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
        // this.setState({
        //   error: true,
        //   loading: false,
        // });
        setError(true);
        setLoading(false);
      });
  };
  // componentDidMount() {
  //   this.getComments();
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.imdbID !== this.props.imdbID) {
  //     this.getComments();
  //     this.setState({
  //       loading: true,
  //     });
  //   }
  // }

  useEffect(() => {
    if (imdbID) {
      getComments();
      setLoading(true);
    }
  }, [imdbID]);

  // console.log("LOSTATOPASSATO", this.props.stateSelected);
  // console.log(this.state.review);
  return (
    <div className="text-center">
      {error && <Error />}

      {loading && imdbID && (
        <div className="d-flex justify-content-center mt-1">
          <Loading />
        </div>
      )}
      {review && <CommentList listaReview={review} getComments={getComments} />}
      {/* {this.props.stateSelected && ( */}
      <AddComment asin={imdbID} getComments={getComments} />
      {/* )} */}
    </div>
  );
};
export default CommentArea;
