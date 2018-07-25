class AlbumComponent extends Component{
    constructor(model, parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'albumComponent';

        this.userId = document.createElement('h1');
        this.id = document.createElement('p');
        this.title = document.createElement('p');
        
        this.container.appendChild(this.userId);
        this.container.appendChild(this.id);
        this.container.appendChild(this.title);
     
        this.userId.innerText = this.model.name;
        this.id.innerText = this.model.id;
        this.title.innerText = this.model.title;
      

        this.container.todo = this.model;
        
    }
    
    
}