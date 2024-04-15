import React from 'react';
import './health.css';
import healthImage from './hh.jpg';

function Health() {
  return (
    <div className="program-page">
      <div className="program-intro">
        <h2 className='oo'>Health Program</h2>
      </div>
      <div className="program-image">
        <img className="in"src={healthImage} alt="Health Program" />
        <p>We promote health and well-being by offering healthcare services, awareness campaigns, and disease prevention programs.</p>
        <p><h3>We achieve this goal through a multifaceted approach:</h3></p>
        <ul>
          <li>Healthcare Services: We provide essential healthcare services, including medical consultations, vaccinations, and treatment for common illnesses, to individuals who lack access to proper medical care.</li>
          <li>Awareness Campaigns: We conduct educational campaigns to raise awareness about important health issues such as hygiene, sanitation, nutrition, and disease prevention. Through workshops, seminars, and community outreach programs, we empower individuals to make informed decisions about their health.</li>
          <li>Disease Prevention Programs: We implement targeted programs aimed at preventing the spread of infectious diseases such as malaria, HIV/AIDS, tuberculosis, and COVID-19. These programs include vaccination drives, distribution of mosquito nets, and initiatives to promote safe sexual practices and hygiene.</li>
          <li>Maternal and Child Health: We prioritize the health and well-being of mothers and children by offering prenatal care, postnatal support, and pediatric services. Our goal is to reduce maternal and infant mortality rates and ensure that every child has the opportunity to thrive.</li>
        </ul>
        <p>Through our Health Program, we are committed to improving the overall health outcomes of communities, fostering a culture of wellness, and building resilient healthcare systems that can withstand the challenges of the future.</p>
      </div>
    </div>
  );
}

export default Health;
