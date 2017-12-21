import React from "react";
const NoMatch = () => {
  return (
    <div>
      <div className="container py-5 ">
        <div className="col-md-12" id="404_card">
          <div className="col-md-6 mx-auto bg-light">
            <img
              className="card-img-top"
              src="http://metakave.com/wp-content/uploads/2015/11/404-Error-page-1.png"
              alt="Card"
            />
            <div className="card-body border border-primary">
              <h4 className="card-title">Introduce</h4>
              <p className="card-text ">
                Sorry Here is 404 page! check the url please
              </p>
              <a
                href="https://jinhokong.github.io/movie_page_react/"
                className="go to homepage"
              >
                Go MovieInfo
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
