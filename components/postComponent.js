class PostComponent extends Component{
    constructor(model, parent, dataManager){
        super(model, parent, dataManager);
        this.container.className = 'postComponent';

        // this.userId = document.createElement('h1');
        // this.id = document.createElement('p');
        this.title = document.createElement('h3');
        this.body = document.createElement('p');
        this.addCommentBtn = document.createElement('button');

        // this.container.appendChild(this.userId);
        // this.container.appendChild(this.id);
        this.container.appendChild(this.title);
        this.container.appendChild(this.body);
        this.container.appendChild(this.addCommentBtn);

        // this.userId.innerHTML = this.model.userId;
        // this.id.innerHTML = this.model.id;
        this.title.innerHTML = this.model.title;
        this.body.innerHTML = this.model.body;
        this.addCommentBtn.innerHTML = 'ADD COMMENT';

        this.addCommentBtn.onclick = this.addCommentBtnClick.bind(this);
        this.addComments();

        // this.container.post = this.model;
        
    }
    
    addComments() {
        this.model.comments.forEach(comment => {
            var commentComponent = new CommentComponent(comment, this.container, this.dataManager);
        });
    }

    addCommentBtnClick() {
        console.log('Show Add Comment UI');
		this.dataManager.navManager.showNewCommentComponent(this.model);

    }
    
}