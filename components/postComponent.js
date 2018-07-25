class PostComponent extends Component{
    constructor(model, parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'postComponent';

        this.userId = document.createElement('h1');
        this.id = document.createElement('p');
        this.title = document.createElement('p');
        this.body = document.createElement('p');

        this.container.appendChild(this.userId);
        this.container.appendChild(this.id);
        this.container.appendChild(this.title);
        this.container.appendChild(this.body);

        this.userId.innerText = this.model.name;
        this.id.innerText = this.model.id;
        this.title.innerText = this.model.title;
        this.body.innerText = this.model.body;

        this.container.post = this.model;
        
    }
    
    // postsBtnClick(e) {
    //     this.dataManagr.setCurrentBee(this.model);
    // }
    
}