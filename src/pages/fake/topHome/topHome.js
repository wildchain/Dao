import NavBar from '../../../components/navBar/navBar';
import './topHome.css';

const TopHome = () => {
  return (
    <body className="container">
      <NavBar />
      <p className="top-text"></p>
      <p className="mid-text">
        Revolutionising DAO developer tools for the green community
      </p>
      <p className="btm-text">
        We Seek Out World Changers And Difference Makers Around The <br />
        Globe, And Equip Them To Fulfill Their Unique Purpose
      </p>
      <div className="box">
        <div className="donate"><a href="#" style={{ textDecoration: 'none',color:'white' }}>Donate Now </a></div>
        <div className="know"><a href="#" style={{ textDecoration: 'none',color:'white' }}>Know About Us</a></div>
      </div>
    </body>
  );
};

export default TopHome;
