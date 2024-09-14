import { Link } from "react-router-dom";
import "../NotFound.css";

const NotFoundPage = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2 font-semibold">Lost your way?</h3>
                <p className="details_404">
                  The page you are looking for could not be found.
                </p>
                <Link to="/" className="link_404">
                  Go Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
