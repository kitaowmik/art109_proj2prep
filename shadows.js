import * as THREE from 'https://unpkg.com/three@0.145.0/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
//trying to add shadowmaps
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 15, 20, 15 );
light.castShadow = true; // default false
scene.add( light );
//trying to add lights and shadows
light.shadow.mapSize.width = 50; 
light.shadow.mapSize.height = 50; 
light.shadow.camera.near = 5; 
light.shadow.camera.far = 20;


renderer.setSize(innerWidth,innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

const circGeometry =  new THREE.SphereGeometry(5,10,5);
const material = new THREE.MeshBasicMaterial({color: 0x75afd2})


const mesh = new THREE.Mesh(circGeometry,material);
mesh.castShadow = true; //trying to add lights and shadows

scene.add(mesh);
camera.position.z = 20;
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    mesh.rotation.x +=0.01;
    mesh.rotation.y +=0.01;
    
}

animate();