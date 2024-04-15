import React from 'react';
import './health.css'; 
import educationImage from './e1.webp'; 

function Eduction() {
  return (
    <div className="program-page">
         <div className="program-intro">
        <h2 className='oo'>Education Program</h2>
      </div>
      <div className="program-image">
        <img className="in" src={educationImage} alt="Education Program" />
        <p>We provide access to quality education and learning opportunities for underserved communities, empowering individuals to break the cycle of poverty.</p>
        <p><h3>We achieve this goal through a multifaceted approach:</h3></p>
        <ul>
          <li>Formal Education: We support schools and educational institutions in providing quality education to children and youth, ensuring that they have access to essential learning resources, qualified teachers, and a conducive learning environment.</li>
          <li>Non-Formal Education: We offer alternative learning programs for individuals who are unable to attend traditional schools due to various reasons, such as financial constraints, geographic isolation, or family responsibilities. These programs include adult literacy classes, vocational training, and life skills development courses.</li>
          <li>Scholarship Programs: We provide scholarships and financial assistance to deserving students, enabling them to pursue higher education and fulfill their academic aspirations. Our scholarships cover tuition fees, books, and other educational expenses, helping students overcome financial barriers to learning.</li>
          <li>Educational Infrastructure Development: We invest in the construction and renovation of school buildings, classrooms, libraries, and other educational facilities to create safe, functional, and inclusive learning spaces for students and teachers.</li>
        </ul>
        <p>Through our Education Program, we strive to empower individuals with the knowledge, skills, and opportunities they need to build a better future for themselves and their communities.</p>
      </div>
    </div>
  );
}

export default Eduction;
