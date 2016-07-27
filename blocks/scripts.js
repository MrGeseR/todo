'use strict';

var ToDo = function(name) {
	this.id = ToDo.count;
	ToDo.count++;
	this.name = name;
	this.status = false;
};
ToDo.count = 0;

var ToDoList = function() {
	var emptyDiv;
	for (var i = 0; i < document.getElementsByClassName('newToDo').length; i++) {
		if (document.getElementsByClassName('newToDo')[i].hasChildNodes()) {
			continue;
		} else {
		 emptyDiv = i;
		}
	}
	
 	var div = document.getElementsByClassName('newToDo')[emptyDiv];

 	var a = document.createElement('input');
 	a.setAttribute('class','taskInput');
 	a.setAttribute('type', 'text');
 	a.setAttribute('placeholder', 'Что вы хотите сделать?');
 	div.appendChild(a);

	var br = document.createElement('br');
	div.appendChild(br);

	var c = document.createElement('ul');
	c.setAttribute('class','toDoList');
	c.innerHTML = 'To Do List:';
	div.appendChild(c);

	this.id = ToDoList.count;
  var id = this.id;
	ToDoList.count++;

	var taskName = document.getElementsByClassName('taskInput')[id];
	var ul = document.getElementsByClassName('toDoList')[id];
	var array = [];
	var arrayDone = [];

	taskName.onkeyup= function () {
		if(event.keyCode==13) {
			var task =  document.createElement('li');
		task.setAttribute('class','toDoList__item')
			if (taskName.value) {
				var select = document.createElement('input');
				select.setAttribute('type','checkbox');
				select.setAttribute('class','toDoList__itemSelect');
				select.setAttribute('id', ToDo.count);
				task.appendChild(select);

		    var span = document.createElement('label');
		    span.setAttribute('for',ToDo.count);
				span.setAttribute('class','toDoList__itemText');
		    span.innerHTML = taskName.value;
				task.appendChild(span);

				var deleting = document.createElement('input');
				deleting.setAttribute('type','button');
				deleting.setAttribute('class',' toDoList__itemRemove');
				deleting.setAttribute('value','Х');
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
		};
	};


	var del = document.createElement('input');
 	del.setAttribute('type','button');
 	del.setAttribute('class','button button_delete');
 	del.setAttribute('value','Delete');
 	div.appendChild(del);

 	var done = document.createElement('input');
 	done.setAttribute('type','button');
 	done.setAttribute('class','button button_done');
 	done.setAttribute('value','Done');
 	div.appendChild(done);

 	var removing = document.getElementsByClassName('button_delete')[id];
 	var doing = document.getElementsByClassName('button_done')[id];

 	removing.onclick = function (){
 		for(var i = ul.children.length-1; i >=0; i--) {
			if (ul.children[i].children[0].checked) {
 				ul.children[i].remove();
				continue;
 			}
    }
 	}

 	doing.onclick = function(){
 		for(var i = ul.children.length-1; i >=0; i--) {
 			if (ul.children[i].children[0].checked) {
 				ul.children[i].status = true;
 				ul.children[i].setAttribute('class','toDoList__item toDoList__item_done');
 				ul.children[i].children[0].checked = '';
				continue;
 			}
 		}

 	}
};
ToDoList.count = 0;

var newList = new ToDoList();