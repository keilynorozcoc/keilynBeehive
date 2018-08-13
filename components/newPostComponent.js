class NewPostCompoment extends Component {

	constructor(model, parent, dataManager) {
		super(model, parent, dataManager);
		this.title = document.getElementById('newPostCompomentTitle');
		this.body = document.getElementById('newPostCompomentBody');
		this.okBtn = document.getElementById('newPostCompomentOKBtn');
		this.cancelBtn = document.getElementById('newPostCompomentCancelBtn');
		this.container = document.getElementById('newPostCompoment');

		this.okBtn.onclick = this.okBtnClick.bind(this);
		this.cancelBtn.onclick = this.cancelBtnClick.bind(this);

		this.postCounter = 1000000;
	}

	show() {
		this.container.hidden = false;
	}

	hide() {
		this.container.hidden = true;
	}

	okBtnClick(e) {
		//Add new Post
		this.postCounter++;
		var newPost = new Post(this.postCounter, this.dataManager.currentBee.id, this.title.value, this.body.value);
		this.dataManager.currentBee.posts.push(newPost)
		this.hide();
		this.dataManager.navManager.showBeePosts();
	}

	cancelBtnClick(e) {
		console.log('hide');
		this.hide();
		this.dataManager.navManager.showBeePosts();
	}
}