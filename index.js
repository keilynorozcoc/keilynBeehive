window.addEventListener('load', init, false);

function init() {
	//Declare variables
	var dataManager = new DataManager();
	var navManager = new NavManager(dataManager);

	// var bees;

	//Initialize variables
	// bees = [];
	//Program Logic
	requestUsersData();

	//'https://jsonplaceholder.typicode.com/todos'
	//'https://jsonplaceholder.typicode.com/photos'
	//'https://jsonplaceholder.typicode.com/albums'
	//'https://jsonplaceholder.typicode.com/comments'

	function requestUsersData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
		request.onreadystatechange = requestUsersDataCompleted;
		request.send();
	}

	function requestUsersDataCompleted(e) {
		var request = e.target;
		// console.log(JSON.parse(request.responseText));
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {

				// console.log(request.responseText);
				var data = JSON.parse(request.responseText);
				console.log(data);
				
				for (var key in data) {
					var beeData = data[key];
					var addressData = data[key].address;

					var geo = new Geo(addressData.geo.lat, addressData.geo.lng);

					var address = new Address(addressData.city, geo, 
												addressData.street, 
												addressData.suite, 
												addressData.zipcode);
					
					var bee = new Bee(beeData.id, beeData.username, beeData.email, beeData.phone, 
							  new Address(addressData.city, 
							  new Geo(addressData.geo.lat, 
										addressData.geo.lng), 
										addressData.street, 
										addressData.suite, 
										addressData.zipcode));
							   
					dataManager.bees.push(bee);
				}
				
				navManager.showBees();
			}
			else {
				console.log('Server Error');
			}
		}
	
	}

	function requestPostsData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
		request.onreadystatechange = requestPostsDataCompleted;
		request.send();
	}

	function requestPostsDataCompleted(post) {
		var request = e.target;

		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {

				var postsData = JSON.parse(request.responseText);
				console.log(postsData);
				
				for (var key in postsData) {
					var postData = postsData[key];
					var post = new Post(postData.userId, postData.id, postData.title, postData.body);
					
					postsData.push(post);
				}
				
				// console.log(postsData);
				
			}else {
				console.log('Server Error');
			}
		}
	}

	function requestTodosData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
		request.onreadystatechange = requestTodosDataCompleted;
		request.send();
	}

	function requestTodosDataCompleted() {
		var request = e.target;
		console.log(data);
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {

				var todosData = JSON.parse(request.responseText);
				console.log(todosData);
				
				for (var key in todosData) {
					var albumData = todosData[key];
					var todo = new Todo(todoData.userId, todoData.id, todoData.title, todoData.completed);
					
					todosData.push(todo);
				}
				
				// console.log(todosData);
				
			}else {
				console.log('Server Error');
			}
		}
	}

	function requestAlbumsData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/albums', true);
		request.onreadystatechange = requestAlbumsDataCompleted;
		request.send();
	}

	function requestAlbumsDataCompleted(e) {
		var request = e.target;
		console.log(data);
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200) {

				var albumsData = JSON.parse(request.responseText);
				console.log(albumsData);
				
				for (var key in albumsData) {
					var albumData = albumsData[key];
					var album = new Album(albumData.userId, albumData.id, albumData.title);
					
					albumsData.push(album);
				}
				
				// console.log(albumsData);
				
			}else {
				console.log('Server Error');
			}
		}
	
	}
		// function addPostByUserID(post) {
		
		// }
}