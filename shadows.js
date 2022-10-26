//worked on shadows (failed), geometry, and animations
//what does the .length/.background thing mean?
//am i importing libraries wrong/is there a better way to do it?

import * as THREE from './build/three.module.js';

import { AsciiEffect } from './src/AsciiEffect.js';
import { TrackballControls } from './src/TrackballControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
//trying to add shadowmaps


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
console.log(circGeometry);

const plane = new THREE.PlaneGeometry(10,10,10,10);
console.log(plane);


const mesh = new THREE.Mesh(circGeometry,material);
mesh.castShadow = true; //trying to add lights and shadows

scene.add(mesh);
camera.position.z = 20;
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    mesh.rotation.x +=0.02;
    mesh.rotation.y +=0.01;
    mesh.rotation.z +=0.02;
    
}

animate();