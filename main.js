// المشهد الأساسي
let scene, camera, renderer, menuBook;

function init() {
    // إخفاء شاشة التحميل
    document.getElementById('loading').style.display = 'none';
    
    // إنشاء المشهد
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    // الإضاءة
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);
    
    // إنشاء الكتاب
    menuBook = new RestaurantMenuBook();
    menuBook.addToScene(scene);
    
    // إضافة الصفحات من البيانات
    menuData.forEach(category => {
        menuBook.addPage(category);
    });
    
    // وضع الكاميرا
    camera.position.z = 15;
    
    // أحداث التحكم
    setupControls();
    
    // بدء animation loop
    animate();
}

function setupControls() {
    document.getElementById('nextBtn').addEventListener('click', () => {
        menuBook.turnPage('next');
    });
    
    document.getElementById('prevBtn').addEventListener('click', () => {
        menuBook.turnPage('prev');
    });
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// بدء التطبيق عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', init);

// تكييف الحجم مع نافذة المتصفح
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
