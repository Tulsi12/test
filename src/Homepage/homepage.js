import { Component } from "react";
import Courses from "./courses";
import Courses2 from "./courses2";
import Courses3 from "./courses3";
import Banner from "./midsection";

class Home extends Component {
  render() {
    return (
      <>
        <Banner />
        <Courses />
        <Courses2 />
        <Courses3 />
      </>
    );
  }
}

export default Home;
