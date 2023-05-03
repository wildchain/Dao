import './sec1Home.css';
import checkbox from '../../../images/checkmark-removebg-preview.png';
import vision from '../../../images/vision.png';
import dog from '../../../images/dogs.jpg';
import aqua from '../../../images/AquaCleaners.png';
import climate from '../../../images/5955775.jpg';
import agro from '../../../images/SA.jpg';
import wild from '../../../images/WL.jpg';
import water from '../../../images/WC.jpg';
import eco from '../../../images/eco.jpg';
import energy from '../../../images/energy.jpg';
import aqua1 from '../../../images/AquaCleaners1.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const Sec1Home = () => {

  const [home,setHome]=useState(false)
  const [spin,setSpin]=useState(true)
  const handleHome = () =>{
    setHome((prev)=>!prev)
  }
  const handleSpin = () =>{
    setSpin((prev)=>!prev)
  }

  return (
    <body className="container2">
      <div className='container2-top'>
        <div className="welcome">
          <p>SaveOcean DAO</p>
        </div>
        <div className="charity">

          <div className="featured">
            <p className="difference-text">
              Let Us Make a Difference To the Oceans
            </p>
            <p className="description">
              We all have a responsibility to protect our planet's oceans from the devastating effects of water pollution.
              Join us in taking action today to reduce pollution in our waterways and protect marine life.
              <br /> <br />
              By making small changes in our daily lives and supporting efforts to improve wastewater treatment,
              we can make a big impact in saving our oceans. Let's work together to ensure a clean and healthy ocean for future generations to come.
            </p>
            <div className="side">
              <div className="boxes">
                <div className="title-box">
                  <img src={checkbox} width="26px" height="26px" />
                  <p style={{ marginRight: 3, color: '#219D80' }}> Our Mission</p>
                </div>
                <p className='mission'>Our mission is to leverage the power of decentralized technology to protect the world's oceans from water pollution.
                  We aim to build a community-driven platform that empowers individuals to take action and create a cleaner,
                  healthier ocean for future generations.</p>
              </div>
              <div className="boxes">
                <div className="title-box">
                  <img src={vision} width="30px" height="30px" />
                  <p style={{ marginRight: 3, paddingLeft: 5, color: '#219D80' }}>Our Vision</p>
                </div>
                <p>Our vision is a sustainable future with a healthy and thriving ocean ecosystem, empowered by decentralized community action.</p>
              </div>
            </div>
            <div class="skill">
              <p>Donations</p>
              <div class="skill-bar skill2">
                <span style={{ left: '567px', fontSize: '18px' }}>30%</span>
              </div>
            </div>
            <div class="skill">
              <p>Participation Rate</p>
              <div class="skill-bar skill1">
                <span class="skill-count1">95%</span>
              </div>
            </div>
            <div></div>
          </div>
          <div className='right-side'>
            <div className="image-box">
              <img src={aqua} width="600" style={{ display: 'block' }} />
            </div>
            <div className='rd-btn'>
              <Button className='rd-more'>READ MORE ABOUT US</Button>
            </div>
            <div className="desc-box" style={{background:'#DCE6E5'}}>
              <li className='desc-list'>Education and awareness: Join us in raising awareness about the impact of water pollution on our oceans, and help us create a more informed and environmentally conscious society.</li>
              <li className='desc-list'>Community-driven solutions: Be part of a decentralized movement to protect our oceans from water pollution, and contribute to innovative solutions that harness the power of community action.</li>
              <li className='desc-list'>Collaboration and partnerships: Partner with us to make a positive impact on our planet's most precious resource - the ocean. By working together, we can build a more sustainable future and create a better world for generations to come.</li>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-causes">
        <div className="welcome2">
          <p style={{right:'80px',position:'relative'}}>Latest Causes</p>
          <div className="line" />
        </div>
        <p className="difference-text2">
          {' '}
          Find the popular cause and donate them
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
{      spin &&  <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={aqua1} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                AquaCleaners 
              </Card.Title>
              <Card.Text>
              We want to use our DAO to provide funding to procure more machines to clean waste from our oceans. 
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Yes</p>
                <div class="skill-bar skill9">
                  <span style={{ left: '215px', fontSize: '18px' }}>66.6%</span>
                </div>
              </div>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>No</p>
                <div class="skill-bar skill10">
                  <span style={{ left: '215px', fontSize: '18px' }}>33.3%</span>
                </div>
              </div>
              <div className='donate-btn'>
                {   home?<div class="lds-ring" style={{right:'610px',top:'10px',marginRight:'45px'}} onClick={handleSpin}><div></div><div></div><div></div><div></div></div>:<Button className="donate-button" style={{marginRight:'3px'}} onClick={handleHome}>Yes</Button>}
                <Button className="donate-button" style={{marginLeft:'3px'}}>No</Button>
              </div>
            </Card.Body>
          </Card>}
          { !spin &&  <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={aqua1} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                AquaCleaners 
              </Card.Title>
              <Card.Text>
              We want to use our DAO to provide funding to procure more machines to clean waste from our oceans. 
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Yes</p>
                <div class="skill-bar skill11">
                  <span style={{ left: '215px', fontSize: '18px' }}>75%</span>
                </div>
              </div>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>No</p>
                <div class="skill-bar skill12">
                  <span style={{ left: '215px', fontSize: '18px' }}>25%</span>
                </div>
              </div>
              <div className='donate-btn'>
                {<Button className="donate-button" style={{marginRight:'3px'}} onClick={handleHome}>Yes</Button>}
                <Button className="donate-button" style={{marginLeft:'3px'}}>No</Button>
              </div>
            </Card.Body>
          </Card>}
          <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={climate} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                Save The Planet
              </Card.Title>
              <Card.Text>
                Join us to unite for a change! Let's save the planet together!
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Donations</p>
                <div class="skill-bar skill3">
                  <span style={{ left: '230px', fontSize: '18px' }}>5%</span>
                </div>
              </div>
              <div className='donate-btn'>
                <Button className="donate-button">Donate Now</Button>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={agro} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                Organic Gardening
              </Card.Title>
              <Card.Text>
                Where's our organic foodies?! Join us to build a gardening community today!
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Donations</p>
                <div class="skill-bar skill4">
                  <span style={{ left: '230px', fontSize: '18px' }}>9%</span>
                </div>
              </div>
              <div className='donate-btn'>
                <Button className="donate-button">Donate Now</Button>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={wild} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                Wildlife Conservation
              </Card.Title>
              <Card.Text>
                Help to save the world's wildlife, one species at at time.
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Donations</p>
                <div class="skill-bar skill5">
                  <span style={{ left: '230px', fontSize: '18px' }}>10%</span>
                </div>
              </div>
              <div className='donate-btn'>
                <Button className="donate-button">Donate Now</Button>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={water} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                Water Conservation
              </Card.Title>
              <Card.Text>
                Protect our vital resource of Earth! <br /> <br />
                Let's inspire action and start our pledge to save water on World Water Day.
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Donations</p>
                <div class="skill-bar skill6">
                  <span style={{ left: '230px', fontSize: '18px' }}>25%</span>
                </div>
              </div>
              <div className='donate-btn'>
                <Button className="donate-button">Donate Now</Button>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={eco} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                Eco Friends
              </Card.Title>
              <Card.Text>
                Create a sustainable and better future with us today! <br /> <br /> Join Eco Friends now and start recycling!
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Donations</p>
                <div class="skill-bar skill7">
                  <span style={{ left: '230px', fontSize: '18px' }}>20%</span>
                </div>
              </div>
              <div className='donate-btn'>
                <Button className="donate-button">Donate Now</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </body>
  );
};

export default Sec1Home;
