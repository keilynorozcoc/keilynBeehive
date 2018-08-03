class NavManager{
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.beesComponent = document.getElementById('beesComponent');
        this.postsComponent = document.getElementById('postsComponent');

    }

    showBees(){
        this.dataManager.bees.forEach(bee => {
            var beeComponent = new BeeComponent(bee, this.beesComponent, this.dataManager);
        });
        this.showBeePosts();
    }

    showBeePosts() {
		this.postsComponent.innerHTML = '';
		this.dataManager.currentBee.posts.forEach(post => {
			var postComponent = new PostComponent(post, this.postsComponent, this.dataManager);
    // console.log(this.dataManager.currentBee.posts);
    
        });
}

    showBeesAlbum(){

    }
    
    showBeesTodos(){
        
    }
}