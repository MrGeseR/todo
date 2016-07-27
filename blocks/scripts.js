'use strict';

var ToDo = function(name) {
	this.id = ToDo.count;
	ToDo.count++;
	this.name = name;
	this.status = false;
};
ToDo.count = 0;

var ToDoList = function() {
	let emptyDiv;
	for (let i = 0; i < document.getElementsByClassName('newToDo').length; i++) {
		if (document.getElementsByClassName('newToDo')[i].hasChildNodes()) {
			continue;
		} else {
		 emptyDiv = i;
		}
	}

 	let div = document.getElementsByClassName('newToDo')[emptyDiv];

 	let a = document.createElement('input');
 	a.setAttribute('class','taskInput');
 	a.setAttribute('type', 'text');
 	a.setAttribute('placeholder', 'Что вы хотите сделать?');
 	div.appendChild(a);

	let br = document.createElement('br');
	div.appendChild(br);

	let c = document.createElement('ul');
	c.setAttribute('class','toDoList');
	c.innerHTML = 'To Do List:';
	div.appendChild(c);

	this.id = ToDoList.count;
  var id = this.id;
	ToDoList.count++;

	var taskName = document.getElementsByClassName('taskInput')[id];
	var ul = document.getElementsByClassName('toDoList')[id];
	var array = [];

	taskName.onkeyup= function () {
		if(event.keyCode==13) {
			let task =  document.createElement('li');
			task.setAttribute('class','toDoList__item');
			if (taskName.value) {
				let select = document.createElement('input');
				select.setAttribute('type','checkbox');
				select.setAttribute('class','toDoList__itemSelect');
				select.setAttribute('id', ToDo.count);
				task.appendChild(select);

		    let span = document.createElement('label');
		    span.setAttribute('for',ToDo.count);
				span.setAttribute('class','toDoList__itemText');
		    span.innerHTML = taskName.value;
				task.appendChild(span);

				let deleting = document.createElement('input');
				deleting.setAttribute('type','button');
				deleting.setAttribute('class',' toDoList__itemRemove');
				deleting.setAttribute('value','Х');
				deleting.setAttribute('onclick','this.parentNode.remove();');
				task.appendChild(deleting);

				ul.appendChild(task);
		    let name = taskName.value;
		  } else {
		  	alert('Введите что вы хотите сделать!')
			}
			taskName.value = '';
			let a = new ToDo(name);
			array.push(a);
		};
	};


	let del = document.createElement('input');
 	del.setAttribute('type','button');
 	del.setAttribute('class','button button_delete');
 	del.setAttribute('value','Delete');
 	div.appendChild(del);

 	let done = document.createElement('input');
 	done.setAttribute('type','button');
 	done.setAttribute('class','button button_done');
 	done.setAttribute('value','Done');
 	div.appendChild(done);

 	let removing = document.getElementsByClassName('button_delete')[id];
 	let doing = document.getElementsByClassName('button_done')[id];

 	removing.onclick = function (){
 		for(let i = ul.children.length-1; i >=0; i--) {
			if (ul.children[i].children[0].checked) {
 				ul.children[i].remove();
				continue;
 			}
    }
 	}

 	doing.onclick = function(){
 		for(let i = ul.children.length-1; i >=0; i--) {
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

var list1 = new ToDoList;