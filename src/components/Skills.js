import { useNavigate } from 'react-router-dom';

const skills = [
    { name: 'HTML', image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"  },
    { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: 'React', image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"  },
    { name: 'Java', image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  ];

const Skills = () => {
    
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
      <h1  style={{ color: 'darkblue', fontWeight: 'bold' , fontSize:'2rem', margin:'20px'}} >Skills</h1>
     

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {skills.map((skill) => (
          <div key={skill.name} style={{ border: '1px solid #ccc', padding: '20px', width: '150px', textAlign: 'center', borderRadius: '10px', color:"black" }}>
            <img src={skill.image} alt={skill.name} style={{ width: '80px', height: '80px' }} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      <div style={{ margin: '20px' }}>
        <button onClick={() => navigate('/')} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Back to Game
        </button>
      </div>
    </div>
  );
};

export default Skills;
