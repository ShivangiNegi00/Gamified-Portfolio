import { useNavigate } from 'react-router-dom';
const experiences = [
    { company: 'Multiverz', position: 'Research Intern', description: 'Researched about various best practices of organizations ' },

  ];
  
const Experience = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#f7f7f7', minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
    <h1 style={{ color: 'darkblue', fontWeight: 'bold' , fontSize:'2rem', margin:'20px'}}>Experience</h1>
    

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      {experiences.map((experience) => (
        <div key={experience.company} style={{ border: '1px solid #ccc', padding: '20px', width: '300px', borderRadius: '10px', color:'black' }}>
          <h3>{experience.company}</h3>
          <p><strong>Position:</strong> {experience.position}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>

    <div style={{ margin: '20px' }}>
      <button onClick={() => navigate('/')} style={{ padding: '10px 20px', backgroundColor: 'blue', color:'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Back to Game
      </button>
    </div>
  </div>
  );
};

export default Experience;
