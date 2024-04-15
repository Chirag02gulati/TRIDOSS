import React from 'react';
import { Link } from 'react-router-dom';
import './hp.css';
import educationLogo from './ed.png'; // Import your education logo
import healthLogo from './health.png'; // Import your health logo
import conservationLogo from './env.png'; // Import your environmental conservation logo
import developmentLogo from './com.png'; // Import your community development logo

function HomePage() {
  const backgroundStyle = {
    backgroundImage: 'url("https://media.licdn.com/dms/image/D4D12AQH3bCJQ0aXcoQ/article-cover_image-shrink_720_1280/0/1689060299043?e=2147483647&v=beta&t=omvXyxF9cEQb3UIrHcEH_R3DD6tWh4jX2ZTkzzEqzi0")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height:"150px",
    width:"490px",
    marginLeft:"30%",
    marginTop:"40px",
  };

  return (
    <div className='ff'>
      <div style={backgroundStyle}></div>
      <p>Welcome to Tridoss NGO Foundation, where passion meets purpose to drive positive change in our communities. At Tridoss, we are committed to making a meaningful impact on society by addressing key social, economic, and environmental challenges.</p>
      <nav className='ty'>
        <h1>Our Mission</h1>
        <p>Tridoss NGO Foundation is dedicated to creating a brighter future for all. Through our diverse programs and initiatives, we strive to empower individuals, uplift communities, and protect the planet. We believe in fostering sustainable development and promoting social justice for generations to come.</p>
      </nav>
      <nav>
      <h2>Our Programs</h2>
      <div className="program-container">
        <div className="program">
          
        <div className="program-details">
  <h3 style={{ display: 'flex', alignItems: 'center' }}>
  <Link to="/eduction"><img src={educationLogo} alt="Education Logo" className="program-logo" style={{ marginRight: '10px' }} /></Link>
    Education
  </h3>
  <p>We provide access to quality education and learning opportunities for underserved communities, empowering individuals to break the cycle of poverty.</p>
</div>

        </div>
        <div className="program">
          <div className="program-details">
          <h3 style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/Health"><img src={healthLogo} alt="Education Logo" className="program-logo" style={{ marginRight: '10px' }} /></Link>
    Health</h3>
            <p>We promote health and well-being by offering healthcare services, awareness campaigns, and disease prevention programs.</p>
          </div>
        </div>
      </div>
      <div className="program-container">
        <div className="program">
          <div className="program-details">
          <h3 style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/Enviourment"><img src={conservationLogo} alt="Education Logo" className="program-logo" style={{ marginRight: '10px' }} /></Link>Environmental Conservation</h3>
            <p>We work towards preserving our planet's natural resources through initiatives focused on conservation, reforestation, and sustainable practices.</p>
          </div>
        </div>
        <div className="program">
          <div className="program-details">
          <h3 style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/Community"><img src={developmentLogo} alt="Education Logo" className="program-logo" style={{ marginRight: '10px' }} /></Link>Community Development</h3>
            <p>We support community-driven projects that enhance livelihoods, infrastructure, and social cohesion.</p>
          </div>
        </div>
      </div>
    </nav>
    </div>
    
  );
}

export default HomePage;

