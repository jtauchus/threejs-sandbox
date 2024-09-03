// Initialize the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the GLTF model
const loader = new THREE.GLTFLoader();
loader.load('TEST.c4d.gltf', function (gltf) {
    scene.add(gltf.scene); // Add the loaded model to the scene

    // Optional: Adjust the position, scale, or rotation of the loaded model
    gltf.scene.position.set(0, 0, 0); 
    gltf.scene.scale.set(1, 1, 1);
    
    animate(); // Start the animation loop
}, undefined, function (error) {
    console.error('An error occurred while loading the model:', error);
});

// Set camera position
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
