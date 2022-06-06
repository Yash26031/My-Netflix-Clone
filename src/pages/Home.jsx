import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import Request from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="Up Coming" fetchUrl={Request.requestUpcoming} />
      <Row rowId="2" title="Popular" fetchUrl={Request.requestPopular} />
      <Row rowId="3" title="Top Rated" fetchUrl={Request.requestTopRated} />
    </>
  );
};

export default Home;
