class NavManager{
    constructor(dataManager) {
        this.dataManager = dataManager;
        this.beesComponent = document.getElementById('beesComponent');
    }

    showBees(){
        this.dataManager.bees.forEach(bee => {
            var beeCompoment = new BeeComponent(bee, this.beesComponent, this.dataManager);
        });
    }

    showBeesPosts(){

    }

    showBeesAlbum(){

    }
    
    showBeesTodos(){
        
    }
}