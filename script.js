import * as THREE from 'three';

let camera, scene, renderer;

function init() {
    // Create the scene
    scene = new THREE.Scene();

    // Set up the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Add a basic ambient light
    let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Create the renderer
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('model-container'),
        antialias: true
    });

    // Add the loaded model to the scene and start animation
    animate();
}

// Load a specific model based on user input
loadModel('https://example.com/model1.gltf')
    .then(model => {
        // Add the loaded model to the Three.js scene
        scene.add(model);

        animate();
    })
    .catch(error => console.error('Error loading model:', error));