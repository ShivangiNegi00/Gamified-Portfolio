// ShooterBall.js
import { useRef , useState} from "react";
import { useFrame , useThree} from "@react-three/fiber";
import * as THREE from "three";
import { Line } from "@react-three/drei";


const bounds = { x: 10, y: 5 };

function ShooterBall({  setHitBall }) {
  const mesh = useRef();
  const {mouse} = useThree();
  const velocity = useRef([0, 0, 0]);
  const [fire,setFire] = useState(false);
  const aimLine = useRef();

  const [mousePos, setMousePos] = useState([0, 0, 0]);

    // Track mouse movement to set aim direction
    const handleMouseMove = (event) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        setMousePos([x * bounds.x, y * bounds.y]);
      };
    

  const handleFire = () => {
     const direction = new THREE.Vector3(mousePos[0], mousePos[1], 0).normalize();
    velocity.current = [direction.x * 0.5, direction.y * 0.5, 0]; // Ball velocity based on aim direction
    setFire(true);
  };

  useFrame(() => {
    if (fire) {
        mesh.current.position.x += velocity.current[0];
        mesh.current.position.y += velocity.current[1];
  
        // Reset if the ball goes out of bounds
        if (mesh.current.position.y > bounds.y || mesh.current.position.y < -bounds.y ||
            mesh.current.position.x > bounds.x || mesh.current.position.x < -bounds.x) {
          mesh.current.position.set(0, -3, 0);
          velocity.current = [0, 0, 0];
          setFire(false);
    }}

    if (aimLine.current) {
        aimLine.current.geometry.setFromPoints([
          new THREE.Vector3(0, -3, 0), // Shooter's position
          new THREE.Vector3(mousePos[0], mousePos[1], 0), // Mouse position as aim direction
        ]);
      }
  });

  return (
   <> 
   <mesh ref={mesh} position={[0, -3, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshLambertMaterial color="green" />
    </mesh>
     {/* Aim Line */}
     <Line
        ref={aimLine}
        points={[[0, -3, 0], [0, 0, 0]]} // Start as a vertical line
        color="black"
        dashed
        lineWidth={1}
        dashSize={0.2}
        gapSize={0.1}
      />
    </> 
  );
}

export default ShooterBall;
 