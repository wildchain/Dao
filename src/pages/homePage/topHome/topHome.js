import NavBar from "../../../components/navBar/navBar";
import "./topHome.css";

const TopHome = () => {
  return (
    <body className="container">
      <NavBar />
      <p className="top-text"></p>
      <p className="mid-text">Rewild the world, 1 vote at a time</p>
      <p className="btm-text">
        If You Want To Change The World Like We Do, <br />
        Come Start A Grant, Vote or Donate
      </p>
      <div className="box">
        <div className="donate">
          <a href="#" style={{ textDecoration: "none", color: "white" }}>
            Donate Now{" "}
          </a>
        </div>
        <div className="know">
          <a href="#" style={{ textDecoration: "none", color: "white" }}>
            Know About Us
          </a>
        </div>
      </div>
    </body>
  );
};

export default TopHome;
