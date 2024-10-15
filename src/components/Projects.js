import { useNavigate } from 'react-router-dom';

const projects = [
  { name: 'E-commerce website ', image: 'project1_image.png', github: 'https://github.com/user/project1' },
 
];

const ProjectPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
      <h1  style={{ color: 'darkblue', fontWeight: 'bold' , fontSize:'2rem', margin:'20px'}}>Projects</h1>
      

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {projects.map((project) => (
          <div key={project.name} style={{ border: '1px solid #ccc', padding: '20px', width: '200px', textAlign: 'center', borderRadius: '10px', color:"black" }}>
            <img src={project.image} alt={project.name} style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
            <p>{project.name}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
      <div style={{ margin: '20px' }}>
        <button onClick={() => navigate('/')} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Back to 3D Canvas
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
