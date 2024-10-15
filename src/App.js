import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text, Line } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from 'three';
import ShooterBall from './components/ShooterBall';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Skills from "./components/Skills"; // Example of a new component
import Experience from "./components/Experience"; // Another new component
import Education from "./components/Education"; 
import Projects from "./components/Projects";


function RandomVelocity() {
  return Math.random() * 0.15 - 0.05;
}

const bounds ={ x: 10, y: 5};

// for collision detection
function detectCollision(ball1, ball2) {
  const distance = ball1.position.distanceTo(ball2.position);
  const radiusSum = ball1.geometry.parameters.radius + ball2.geometry.parameters.radius;
  return distance < radiusSum;
}

function BallWithText({ position, color, label, onHit }) {
  const mesh = useRef();
  const velocity = useRef([RandomVelocity(), RandomVelocity()]);
  const navigate = useNavigate();

  const handleClick = () => {
    switch  (label) {
      case "Skills":
        navigate("/Skills");
        break;
      case "Experience":
        navigate("/Experience");
        break;
      case "Education":
        navigate("/Education");
        break;
      case "Projects":
        navigate("/Projects");
        break;
      default:
        break;
    }
  }

  

  useFrame(() => {
    // if (!mesh.current) return; 
    mesh.current.position.x += velocity.current[0];
    mesh.current.position.y += velocity.current[1];

   if(mesh.current.position.x > bounds.x || mesh.current.position.x < -bounds.x){
      velocity.current[0] *= -1;
    }

   if(mesh.current.position.y > bounds.y || mesh.current.position.y < -bounds.y){
      velocity.current[1] *= -1;
    }
  });

  return (
    <mesh ref={mesh} position={position} onClick={handleClick}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshPhysicalMaterial
        color={color}        // Main bubble color
        roughness={0.1}      // Make surface smooth
        transmission={0.7}   // For transparency effect (this is the main trick)
        thickness={0.5}      // How thick the bubble surface is
        clearcoat={1}        // For extra shininess
        clearcoatRoughness={0.1}
        reflectivity={0.5}   // Reflective properties for a bubble-like appearance
        envMapIntensity={0.9} // Add environment lighting reflection
      />
      {label && (
        <Text
        position={[0, 0.56, 0]}
          fontSize={0.25}
          color="black"
          anchorX="center"
          anchorY="middle"
          depthTest={false}
          renderOrder={1}
        >
          {label}
        </Text>
      )}
    </mesh>
  );
}

function MovingBall({ position, color }) {
  const mesh = useRef();
  const velocity = useRef([RandomVelocity(), RandomVelocity()]);

  useFrame(() => {
    mesh.current.position.x += velocity.current[0];
    mesh.current.position.y += velocity.current[1];

   if(mesh.current.position.x > bounds.x || mesh.current.position.x < -bounds.x){
      velocity.current[0] *= -1;
    }

   if(mesh.current.position.y > bounds.y || mesh.current.position.y < -bounds.y){
      velocity.current[1] *= -1;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshPhysicalMaterial
        color={color}        // Main bubble color
        roughness={0.1}      // Make surface smooth
        transmission={0.7}   // For transparency effect (this is the main trick)
        thickness={0.5}      // How thick the bubble surface is
        clearcoat={1}        // For extra shininess
        clearcoatRoughness={0.1}
        reflectivity={0.5}   // Reflective properties for a bubble-like appearance
        envMapIntensity={0.9} // Add environment lighting reflection
      />
    </mesh>
  );
}



const MainCanvas = () => {
  const [hitBall, setHitBall] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setAspectRatio(window.innerWidth / window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cameraProps = {
    position: [0, 0, 50],
    zoom: 2,
    left: -aspectRatio * 10,
    right: aspectRatio * 10,
    top: 10,
    bottom: -10,
    near: 0.1,
    far: 1000,
  };

  const handleCollision = (ballLabel) => {
    // Open a new section based on the ball's label
    alert(`Opening section for ${ballLabel}`);
  };

  return (
    <>
    {/* Intro and Instructions Section */}
    <div style={{ padding: '20px', backgroundColor: '#243642', textAlign: 'center', position: 'relative', zIndex: 1 , color:'white' }}>
        <h2>Hello,i am Shivangi and </h2>
        <h3>Welcome to my bubblified portfolio</h3>
        <p>Navigate through the portfolio by clicking on the moving bubbles. Each bubble represents a different section: Skills, Projects, Experience, and Education.</p>
        <p>How to Play:  click on any bubble to learn more about me!</p>
        <p>Swipe up to play!</p>
      </div>
      <Canvas
        orthographic
        camera={cameraProps}
        style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}
        onMouseMove={(e) => {
          // Pass mouse move events to the ShooterBall
          document.dispatchEvent(new MouseEvent('mousemove', e));
        }}
        onClick={() => {
          // Pass the fire event to the ShooterBall
          document.dispatchEvent(new MouseEvent('click'));
        }}
     >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Moving balls */}
        <MovingBall position={[1, 1, 0]} color="cyan" />
        <MovingBall position={[-1, 1, 0]} color="lightblue" />
        <MovingBall position={[0, 2, 0]} color="pink" />
        <MovingBall position={[2, 2, 0]} color="purple" />
        <MovingBall position={[-2, 2, 0]} color="orange" />
        <MovingBall position={[0, 3, 0]} color="yellow" />
        <MovingBall position={[1, 4, 0]} color="green" />
        <MovingBall position={[-1, 4, 0]} color="brown" />
        <MovingBall position={[0, 5, 0]} color="hotpink" />
        <MovingBall position={[2, 5, 0]} color="thistle" />
        <MovingBall position={[-2, 5, 0]} color="voilet" />



        {/* Balls with text */}
        <BallWithText position={[2, 1, 0]} color="darkmagenta" label="Skills" onHit={() => handleCollision("Skills")}/>
        <BallWithText position={[-2, 1, 0]} color="yellow" label="Experience" onHit = {() => handleCollision("Experience")}/>
        <BallWithText position={[0, -1, 0]} color="blue" label="Education" onHit = {() => handleCollision("Education")}/>
        <BallWithText position={[2, -1, 0]} color="seagreen" label="Projects" onHit = {() => handleCollision("Projects")}/>

        {/* Shooter Ball */}
        <ShooterBall  setHitBall={setHitBall}  />

        
        {/* Controls */}
        {/* <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} /> */}
        <color attach="background" args={["#C4D7FF"]} />
      </Canvas>

     
     
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainCanvas />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience/>} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}
export default App;