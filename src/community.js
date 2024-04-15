import React from 'react';
import './health.css'; // Assuming you're reusing the same CSS file for styling
import developmentImage from './cc.jpg'; // Replace with the appropriate image path

function Community() {
  return (
    <div className="program-page">
      <div className="program-intro">
        <h2 className='oo'>Community Development</h2>
      </div>
      <div className="program-image">
        <img className="in" src={developmentImage} alt="Community Development Program" />
        <p>We support community-driven projects that enhance livelihoods, infrastructure, and social cohesion.</p>
        <p><h3>We achieve this goal through various initiatives:</h3></p>
        <ul>
          <li>Infrastructure Development: We invest in building essential infrastructure such as schools, healthcare facilities, roads, and water supply systems to improve living standards and enhance access to basic services.</li>
          <li>Economic Empowerment: We provide training, resources, and support to local entrepreneurs, artisans, and small businesses to stimulate economic growth, create employment opportunities, and alleviate poverty.</li>
          <li>Social Welfare Programs: We implement social welfare programs to support vulnerable populations, including women, children, and the elderly. These programs may include healthcare services, nutrition support, education scholarships, and social assistance programs.</li>
          <li>Capacity Building and Empowerment: We empower communities to identify their needs, develop sustainable solutions, and take ownership of their development process. Through capacity building workshops, leadership training, and community mobilization efforts, we foster self-reliance and resilience.</li>
        </ul>
        <p>Through our Community Development Program, we aim to build stronger, more inclusive communities where individuals can thrive and fulfill their potential.</p>
      </div>
    </div>
  );
}

export default Community;
