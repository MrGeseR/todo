var button = document.getElementById('button');
var ul = document.getElementById('toDoList');
var taskName = document.getElementById('taskInput');

var ToDo = function(name) {
	ToDo.count++;
	this.name = name;
	this.status = false;
	this.id = ToDo.count;
};

ToDo.count = 0;

var ToDoList = function () {
	var task =  document.createElement('li');
	this.create = function(){
		if (taskName.value) {
	    task.innerHTML = taskName.value;
	    ul.appendChild(task);
	    taskName.value = '';
	  } else {
	  	alert('Введите что вы хотите сделать!')
  }
	}
	this.delete = function () {
		ul.removeChild(this)
	}
};

var toDo = new ToDoList();
button.onclick = toDo.create;