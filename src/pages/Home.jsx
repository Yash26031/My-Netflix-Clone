import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import Request from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchUrl={Request.requestUpcoming} />
      <Row title="Popular" fetchUrl={Request.requestPopular} />
      <Row title="Top Rated" fetchUrl={Request.requestTopRated} />
      <Row title="Latest" fetchUrl={Request.requestLatest} />
    </>
  );
};

export default Home;
