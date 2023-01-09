import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./requests";
import Nav from "./Nav";
import "./App.css";

function Landing() {
  return (
    <div className="landing">
      <Nav />
      <Banner />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumantaries}
      />
    </div>
  );
}

export default Landing;
