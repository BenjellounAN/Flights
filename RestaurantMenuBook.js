class RestaurantMenuBook {
    constructor() {
        this.pages = [];
        this.currentPage = 0;
        this.group = new THREE.Group();
        this.isAnimating = false;
    }
    
    addToScene(scene) {
        scene.add(this.group);
    }
    
    addPage(content) {
        const page = new BookPage(content, this.pages.length);
        page.mesh.position.x = this.pages.length * 0.1;
        this.group.add(page.mesh);
        this.pages.push(page);
    }
    
    turnPage(direction) {
        if (this.isAnimating) return;
        
        if (direction === 'next' && this.currentPage < this.pages.length - 1) {
            this.animatePageTurn(this.currentPage, direction);
            this.currentPage++;
        } else if (direction === 'prev' && this.currentPage > 0) {
            this.currentPage--;
            this.animatePageTurn(this.currentPage, direction);
        }
    }
    
    animatePageTurn(pageIndex, direction) {
        this.isAnimating = true;
        const page = this.pages[pageIndex].mesh;
        const targetRotation = direction === 'next' ? Math.PI * 0.5 : 0;
        
        // كود animation سيضاف لاحقاً
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }
}
