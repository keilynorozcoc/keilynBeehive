class DataManager{
    constructor() {
        this.bees = [];
        this.currentBee = null;

        this.user = new Bee(100,'Keilyn Orozco', 'korozco', 'korozcoc@ucenfotec.ac.cr', '506 71255214', 
                    new Address('Cartago', 
                    new Geo(0.0, 0.0), 'Calle', '1000', '1000/1000'));
                    

        this.bees.push(this.user);
    }

    setCurrentBee(bee) {
        this.currentBee = bee;
        console.log(this.currentBee);
        
    }
}