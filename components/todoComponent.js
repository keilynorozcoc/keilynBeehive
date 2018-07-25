class TodoComponent extends Component{
    constructor(model, parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'todoComponent';

        this.userId = document.createElement('h1');
        this.id = document.createElement('p');
        this.title = document.createElement('p');
        this.completed = document.createElement('p');

        this.container.appendChild(this.userId);
        this.container.appendChild(this.id);
        this.container.appendChild(this.title);
        this.container.appendChild(this.completed);

        this.userId.innerText = this.model.name;
        this.id.innerText = this.model.id;
        this.title.innerText = this.model.title;
        this.completed.innerText = this.model.completed;

        this.container.todo = this.model;
        
    }
    
    
}