import { Canvas } from "@react-three/fiber";



// 구를 만드는데 사용한다.
const Circle = () => {
    return (
        <>
        <ambientLight intensity={0.25} />
        <directionalLight color="white" position={[10, 10, 10]} />
        <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="yellow" />
        </mesh>
        </>
    );
};


const Model = () => {
 return (
     <>
         <Canvas style={{ width: "400px", height: "400px", background: "red" }}>
             <Circle/>
         </Canvas>
     </>

 );
};

export default Model;
