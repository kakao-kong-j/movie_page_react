import React, { Component } from "react";
import "../css/Introduce.css";
import img from "../img/MovieInfo.png";
class Introduce extends Component {
  render() {
    return (
      <div>
        <div className="video-background">
          <div className="video-foreground">
            <iframe
              title="movie_player"
              id="movie_player"
              src="https://www.youtube.com/embed/B65hW9YYY5A?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&start=3&cc_load_policy=0"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        <div className="container py-5 ">
          <div className="col-md-12" id="movieinfo_card">
            <div className="col-md-6 mx-auto bg-light">
              <img className="card-img-top" src={img} alt="Card" />
              <div className="card-body border border-primary">
                <h4 className="card-title">Introduce</h4>
                <p className="card-text ">
                  MovieInfo is a platform that allows users to easily view
                  information based on movie information provided by YTS.am
                </p>
                <a
                  href="https://jinhokong.github.io/movie_page_react/movielist"
                  className="btn btn-primary btn-block"
                >
                  Go MovieInfo
                </a>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="container py-5 ">
          <div className="col-md-12" id="github_card">
            <div className="col-md-6 mx-auto bg-light">
              <img
                className="card-img-top"
                src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
                alt="Card"
              />
              <div className="card-body border border-primary">
                <h4 className="card-title">Github</h4>
                <p className="card-text ">
                  MovieInfo means all sources are open source. If you are
                  looking for information on MovieInfo, go to Github via the
                  button below.
                </p>
                <a
                  href="https://github.com/jinhokong/movie_page_react.git"
                  className="btn btn-primary btn-block"
                  onClick={this.button}
                >
                  Visit Github
                </a>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="container py-5 ">
          <div className="col-md-12" id="yts_card">
            <div className="col-md-6 mx-auto bg-light">
              <img
                className="card-img-top"
                src="https://yts.am/assets/images/website/logo-YTS.svg"
                alt="Card"
              />
              <div className="card-body border border-primary">
                <h4 className="card-title">YTS</h4>
                <p className="card-text ">
                  MovieInfo is made with the API provided by YTS.am. Please note
                  that the information in the MovieInfo except for the comments
                  belongs to YTS.am.
                </p>
                <a href="https://yts.am/" className="btn btn-primary btn-block">
                  Visit YTS.am
                </a>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="container py-5 ">
          <div className="col-md-12" id="developer_card">
            <div className="col-md-6 mx-auto bg-light">
              <img
                className="card-img-top"
                src="https://avatars2.githubusercontent.com/u/20773978?s=460&v=4"
                alt="Card"
              />
              <div className="card-body border border-primary">
                <h4 className="card-title">Developer</h4>
                <p className="card-text ">
                  he is always waiting for feedback and feedback. Developer
                  Email: tpdleps@gmail.com
                </p>
                <a
                  href="https://github.com/jinhokong"
                  className="btn btn-primary btn-block"
                >
                  Visit his Github
                </a>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Introduce;
