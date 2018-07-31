window.addEventListener('load', init, false);
function init() {
	//Declare variables
	var dataManager = new DataManager();
	var navManager = new NavManager(dataManager);
	dataManager.navManager = navManager;
	//Program Logic
	requestUsersData();
	//'https://jsonplaceholder.typicode.com/posts'
	//'https://jsonplaceholder.typicode.com/comments'
	//'https://jsonplaceholder.typicode.com/photos'
	//'https://jsonplaceholder.typicode.com/albums'
	//'https://jsonplaceholder.typicode.com/todos'

	function requestUsersData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
		request.onreadystatechange = requestUsersDataCompleted;
		request.send();
	}

	function requestUsersDataCompleted(e) {
		var request = e.target;

		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {
				var data = JSON.parse(request.responseText);
				for (var key in data) {
					var beeData = data[key];
					var addressData = data[key].address;

					var geo = new Geo(addressData.geo.lat, addressData.geo.lng);

					var address = new Address(addressData.city, geo, 
                                                addressData.street, 
                                                addressData.suite, 
                                                addressData.zipcode);

					var bee = new Bee(beeData.id, beeData.name, beeData.username, beeData.email, beeData.phone, 
                                new Address(addressData.city, 
								new Geo(addressData.geo.lat, 
										addressData.geo.lng), 
										addressData.street, 
										addressData.suite, 
										addressData.zipcode));
										
					dataManager.bees.push(bee);
				}

				requestUserPosts();
	
				dataManager.setCurrentBee(dataManager.bees[1]);
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function requestUserPosts() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
		request.onreadystatechange = requestUserPostsCompleted;
		request.send();
	}

	function requestUserPostsCompleted(e) {
		var request = e.target;
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var data = JSON.parse(request.responseText);
				console.log(data);
				for (const key in data) {
					var postData = data[key];
					var post = new Post(postData.id, postData.userId, postData.title, postData.body);
					dataManager.addPost(post);
				}
				navManager.showBeePosts();
				requestsUserComments();
			}
		}
	}

	function requestsUserComments() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
		request.onreadystatechange = requestsUserCommentsCompleted;
		request.send();
	}

	function requestsUserCommentsCompleted(e) {
		var request = e.target;
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {
				var data = JSON.parse(request.responseText);
				// console.log(data);
				for (const key in data) {
					var commentData = data[key];
					var comment = new Comment(commentData.id, commentData.postId, commentData.name, commentData.email, commentData.body);
					dataManager.addComment(comment);
				}

				navManager.showBees();
				
			}
		}
	}


	function addPostByUserID(post) {

	}
}