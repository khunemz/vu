new Vue({

	el: '#tasks',

	//model
	data: {
		tasks: [{ body: 'Yep', completed: false}],
		newTask: []
	},

	//method
	methods: {
		addTask: function (e) {
			e.preventDefault();
			this.tasks.push({
				body: this.newTask,
				completed: false
			});

			this.newTask='';
		},

		editTask: function(task){
			//remove task
			this.removeTask(task);
			//update newTask input
			this.newTask = task.body;
			//focus the newTask input
			//the $$ is pointing to newTask DOM node
			this.$$.newTask.focus();
		},

		
		removeTask: function(task){
			this.tasks.$remove(task);
		}

	}
})