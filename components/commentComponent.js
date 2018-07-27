class CommentComponent extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);
		this.container.className = 'commentComponent';

		//Create Elements
		this.name = document.createElement('h3');
		this.body = document.createElement('p');
		this.email = document.createElement('p');

		//Add Elements
		this.container.appendChild(this.name);
		this.container.appendChild(this.body);
		this.container.appendChild(this.email);

		//Fill Element
		this.name.innerHTML = model.name;
		this.body.innerHTML = model.body;
		this.email.innerHTML = model.email;
	}
}