class DataManager{
    constructor() {
        this.bees = [];
        this.currentBee = null;
        this.NavManager = null;
        this.user = new Bee(100,'Keilyn Orozco', 'korozco', 'korozcoc@ucenfotec.ac.cr', '506 71255214', 
                    new Address('Cartago', 
                    new Geo(0.0, 0.0), 'Calle', '1000', '1000/1000'));
                    

        this.bees.push(this.user);
    }

    setCurrentBee(bee) {
        this.currentBee = bee;
        console.log(this.currentBee);
        
    }

    // addPost(post) {
	// 	this.bees.forEach(function (bee) {
	// 		if (post.userId == bee.id) {
	// 			bee.posts.push(post);
	// 		}
	// 	});
	// }

    addPost(post) {
        console.log(this.bees);
        
		this.bees.forEach(function (bee) {
			if (post.id == post.userId) {
                bee.posts.push(post);
                return;
			}
		});
	}

	addComment(comment) {
		this.bees.forEach(function (bee) {
			bee.posts.forEach(function (post) {
				if (post.id == comment.postId) {
                    post.comments.push(comment);
                return;
                    
                }
			});
		});
    }
}