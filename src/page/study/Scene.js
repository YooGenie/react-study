import * as THREE from "three";
import { GLTFLoader } from "../../../node_modules/three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls";

const canvas = document.querySelector("#c");

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true }); // antialias: true --> 계단 현상 방지
// 색상 인코딩 방식
renderer.outputEncoding = THREE.sRGBEncoding;

// THREE.PerspectiveCamera: 원근법 적용
//THREE.OrthographicCamera: 원근법 적용 ㄴㄴ
const camera = new THREE.PerspectiveCamera(
    30,
    window.innerWidth / window.innerHeight,
    1,
    10000
);

// 마우스 컨트롤
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 20, 90);

controls.update();

// 조명
// 1. PointLight: A light that gets emitted from a single point in all directions
const PointLight = new THREE.PointLight(0xffffff, 1);
scene.add(PointLight);
// 2. DirectionalLight: A light that gets emitted in a specific direction
const DirectionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(DirectionalLight);
// 3. AmbientLight: A light globally illuminates all objects in the scene equally
const AmbientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(AmbientLight);

const loader = new GLTFLoader();
// gltf 파일 사용
loader.load("viking_room/scene.gltf", function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
    // 애니메이션
    function animate() {
        requestAnimationFrame(animate); // 초당 60번 실행
        gltf.scene.rotation.y += 0.005; // y 축 회전
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
});