import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";


// Sphere 구를 만드는데 사용한다.
const Circle = () => {
    return (
        <mesh>
            <Sphere args={[2, 5, 5]} position={[0, 0, 0]} />
        </mesh>
    );
};


const Model = () => {
 return (
     <Canvas style={{ width: "400px", height: "400px", background: "red" }}>
         <Circle/>
     </Canvas>
 );
};

export default Model;
