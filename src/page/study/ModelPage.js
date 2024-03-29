import React, {useRef} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {CatModel} from "./cat";
import {useFrame} from '@react-three/fiber';


// 구를 만드는데 사용한다.
const Circle = () => {
    const circleRef = useRef();

    useFrame(() => {
        circleRef.current.rotation.y += 0.003; // y축을 기준으로 회전
        circleRef.current.rotation.x += 0.005; // x축을 기준으로 회전
    });
    return (
        <>
            <group ref={circleRef}>
                <OrbitControls/>
                <ambientLight intensity={0.25}/>
                <directionalLight color="white" position={[10, 10, 10]}/>
                <mesh>
                    <sphereGeometry args={[1, 32, 32]}/>
                    <meshStandardMaterial color="yellow"/>
                </mesh>
            </group>
        </>
    );
};

const Sphere = () => {
    return (
        <>
            <OrbitControls/>
            <ambientLight intensity={0.75}/>
            <directionalLight color="white" position={[10, 10, 10]}/>
            <mesh rotation={[Math.PI / 180 * 30, 20, 0]}>
                <boxGeometry args={[3, 3, 3]}/>
                <meshStandardMaterial color="pink"/>
            </mesh>
        </>
    );
};

const Cat = () => {
    const catRef = useRef();

    useFrame(() => {
        catRef.current.rotation.y += 0.009; // y축을 기준으로 회전
        catRef.current.rotation.x += 0.01; // x축을 기준으로 회전
    });
    return (
        <group ref={catRef}>
            < CatModel scale={[0.01, 0.01, 0.01]}/>
        </group>
    );
}


const Model = () => {
    return (
        <>
            <div style={{display: "flex"}}>
                <Canvas style={{width: "400px", height: "400px", background: "red"}}>

                    <Circle/>

                </Canvas>
                <Canvas style={{width: "400px", height: "400px", background: "blue"}}>
                    <Sphere/>
                </Canvas>
                <Canvas style={{width: "400px", height: "400px", background: "yellow"}}>
                    <OrbitControls/>
                    <axesHelper/>
                    {/* 각각의 축을 나타내는 선분들로 이루어진 좌표축을 표시하는 데 사용*/}
                    <ambientLight intensity={0.75}/>
                    <directionalLight color="white" position={[10, 10, 10]}/>
                    <group>
                        <Cat/>
                    </group>
                </Canvas>
            </div>
        </>

    );
};

export default Model;
