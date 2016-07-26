'use strict';

var ToDo = function(name) {
	this.id = ToDo.count;
	ToDo.count++;
	this.name = name;
	this.status = false;
};
ToDo.count = 0;

var ToDoList = function() {
 	var div = document.createElement('div');
	div.setAttribute('class', 'newToDo');
 	document.body.appendChild(div);

 	var a = document.createElement('input');
 	a.setAttribute('class','taskInput');
 	a.setAttribute('type', 'text');
 	a.setAttribute('placeholder', 'Что вы хотите сделать?');
 	div.appendChild(a);

 	var b = document.createElement('input');
 	b.setAttribute('type','button');
 	b.setAttribute('class','button');
 	b.setAttribute('value','Add');
 	div.appendChild(b);

	var br = document.createElement('br');
	div.appendChild(br);

	var c = document.createElement('ul');
	c.setAttribute('class','toDoList');
	c.innerHTML = 'To Do List:';
	div.appendChild(c);

	this.id = ToDoList.count;
  var id = this.id;
	ToDoList.count++;

	var button = document.getElementsByClassName('button')[id];
	var taskName = document.getElementsByClassName('taskInput')[id];
	var ul = document.getElementsByClassName('toDoList')[id];
	var array = [];

	button.onclick = function (){
	var task =  document.createElement('li');
	task.setAttribute('class','toDoItem')
		if (taskName.value) {
			var select = document.createElement('input');
			select.setAttribute('type','checkbox');
			select.setAttribute('class','toDoItem__select')
			task.appendChild(select);

	    var span = document.createElement('span');
			span.setAttribute('class','toDoItem__text')
	    span.innerHTML = taskName.value;
			task.appendChild(span);

			var deleting = document.createElement('input');
			deleting.setAttribute('type','button');
			deleting.setAttribute('class','toDoItem__remove');
			deleting.setAttribute('value','Delete this');
			deleting.setAttribute('onclick','this.parentNode.remove();');
			task.appendChild(deleting);

			ul.appendChild(task);
	    var name = taskName.value;
	  } else {
	  	alert('Введите что вы хотите сделать!')
		}
		taskName.value = '';
		var a = new ToDo(name);
		array.push(a);
	}

	var del = document.createElement('input');
 	del.setAttribute('type','button');
 	del.setAttribute('class','delete');
 	del.setAttribute('value','Delete');
 	div.appendChild(del);

 	var done = document.createElement('input');
 	done.setAttribute('type','button');
 	done.setAttribute('class','done');
 	done.setAttribute('value','Done');
 	div.appendChild(done);

 	var removing = document.getElementsByClassName('delete')[id];
 	var doing = document.getElementsByClassName('done')[id];

 	removing.onclick = function (){
 		console.log(ul.children.length);
 		for(var i = ul.children.length-1; i >=0; i--) {
 			if (ul.children[i].children[0].checked) {
 				ul.children[i].remove();
				continue;
 			}
    }
 	}

};
ToDoList.count = 0;

var newList = new ToDoList();
var list2 = new ToDoList();
var list3 = new ToDoList();