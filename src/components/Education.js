import { useNavigate } from 'react-router-dom';

const education = [
    { degree: 'Msc. Informatics', school: 'University of Delhi', YearOFPassing: '2025' },
    { degree: 'Bsc. (Hons) Electronics', school: 'University of Delhi', YearOFPassing: '2023' },
    { degree: 'Class 12', school: 'Amity International School', YearOFPassing: '2020' },
   
  ];

const Education= () => {
  const navigate = useNavigate();

  return (
   <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', padding: '50px', textAlign: 'center' }}>
      <h1  style={{ color: 'darkblue', fontWeight: 'bold' , fontSize:'2rem', margin:'20px'}}>Education</h1>
     

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        {education.map((edu) => (
          <div key={edu.degree} style={{ border: '1px solid #ccc', padding: '20px', width: '300px', borderRadius: '10px' , color:'black'}}>
            <p><strong>Degree:</strong> {edu.degree}</p>
            <p><strong>School:</strong> {edu.school}</p>
            <p><strong>YearOFPassing:</strong> {edu.YearOFPassing}</p>
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

export default Education;
