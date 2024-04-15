import React from 'react';
import './health.css'; // Assuming you're reusing the same CSS file for styling
import conservationImage from './conv.avif'; // Replace with the appropriate image path

function Enviournment() {
  return (
    <div className="program-page">
         <div className="program-intro">
        <h2 className='oo'>Environmental Conservation</h2>
      </div>
      <div className="program-image">
        <img className="in" src={conservationImage} alt="Environmental Conservation Program" />
        <p>We work towards preserving our planet's natural resources through initiatives focused on conservation, reforestation, and sustainable practices.</p>
        <p><h3>We achieve this goal through a multifaceted approach:</h3></p>
        <ul>
          <li>Conservation Projects: We collaborate with local communities, government agencies, and conservation organizations to implement projects aimed at protecting endangered species, preserving biodiversity, and safeguarding natural habitats. These projects may include wildlife conservation, habitat restoration, and protected area management.</li>
          <li>Reforestation Programs: We support efforts to restore degraded landscapes and combat deforestation by planting trees, establishing community forests, and promoting sustainable forestry practices. By replenishing forests and promoting ecosystem resilience, we contribute to climate change mitigation, watershed protection, and soil conservation.</li>
          <li>Sustainable Development Initiatives: We advocate for sustainable development practices that balance environmental conservation with socio-economic progress. This may involve promoting renewable energy sources, advocating for eco-friendly technologies, and supporting green businesses and initiatives that prioritize environmental stewardship.</li>
          <li>Environmental Education and Awareness: We raise awareness about environmental issues and promote environmental literacy through educational programs, workshops, and outreach activities. By empowering individuals with knowledge about the importance of conservation and sustainable living, we foster a culture of environmental responsibility and stewardship.</li>
        </ul>
        <p>Through our Environmental Conservation Program, we are committed to protecting the planet's natural heritage, preserving biodiversity, and ensuring a sustainable future for generations to come.</p>
      </div>
    </div>
  );
}

export default Enviournment;
