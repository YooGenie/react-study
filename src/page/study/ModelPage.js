import { Canvas } from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";



// 구를 만드는데 사용한다.
const Circle = () => {
    return (
        <>
            <OrbitControls />
        <ambientLight intensity={0.25} />
        <directionalLight color="white" position={[10, 10, 10]} />
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="yellow" />
        </mesh>
        </>
    );
};

const Sphere = () => {
    return (
        <>
            <OrbitControls />
            <ambientLight intensity={0.75} />
            <directionalLight color="white" position={[10, 10, 10]} />
            <mesh rotation={[Math.PI / 180 * 30, 20, 0]}>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial color="pink" />
            </mesh>
        </>
    );
};


const Model = () => {
 return (
     <>
         <div style={{display:"flex"}}>
         <Canvas style={{ width: "400px", height: "400px", background: "red" }}>
             <Circle/>
         </Canvas>
         <Canvas style={{ width: "400px", height: "400px", background: "blue" }}>
             <Sphere/>
         </Canvas>
         </div>
     </>

 );
};

export default Model;
