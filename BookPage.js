class BookPage {
    constructor(content, pageNumber) {
        this.content = content;
        this.pageNumber = pageNumber;
        this.geometry = new THREE.PlaneGeometry(8, 10);
        this.material = new THREE.MeshLambertMaterial({ 
            map: this.createPageTexture(content)
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }
    
    createPageTexture(content) {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 768;
        const context = canvas.getContext('2d');
        
        // الخلفية
        context.fillStyle = '#f5f0e6';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // العنوان
        context.fillStyle = '#8B4513';
        context.font = 'bold 48px Arial';
        context.textAlign = 'center';
        context.fillText(content.title, canvas.width / 2, 100);
        
        // العناصر
        context.fillStyle = '#333';
        context.font = '24px Arial';
        context.textAlign = 'right';
        
        content.items.forEach((item, index) => {
            const yPosition = 200 + (index * 120);
            context.fillText(item.name, canvas.width - 50, yPosition);
            context.fillText(`${item.price} ريال`, canvas.width - 50, yPosition + 30);
            context.fillText(item.description, canvas.width - 50, yPosition + 60);
        });
        
        return new THREE.CanvasTexture(canvas);
    }
}
