var ToDo = function(name) {
	this.id = ToDo.count
	ToDo.count ++;
	this.name = name;
	this.status = false;
}

ToDo.count = 0;

var ToDoList = function() {
	var whatToDo = [];
	var div = $('.newToDo')[0];
	$(div).append("<h1 class='newToDo__heading'>What are you going to do?</h1>");
	var input = $("<input type='text' class='newToDo__input' placeholder='Type here your promices, forgetful!'>");
	var ulToDo = $("<ul class='newToDo__list'><h2 class='newToDo__listHeader'> List of things to do:</h2>");
	var ulDone = $("<ul class='newToDo__list'><h2 class='newToDo__listHeader'> List of done things:</h2>");
	$(div).append(input, ulToDo, ulDone);

	$(input).keypress(function(e){
	     	   if(e.keyCode==13){
	     	  	if(input[0].value != ''||null) {
	     	  		let name = input[0].value;
							let li = $("<li class='newToDo__listItem'>")
	     	  		$(ulToDo).append(li);
	     	  		let checkbox = ("<input type='checkbox' class='newToDo__listCheckbox' id='"+ToDo.count+"'>");
	     	  		let label = ("<label for='"+ToDo.count+"' class='newToDo__listLabel'>"+name+"</label>");
	     	  		let del = ("<img src='./images/Cross.png' class='newToDo__listButton'>");
	     	  		$(li).append(checkbox,label,del);
	     	  		var toDo = new ToDo(name);
	     	  		whatToDo.push(toDo);
	     	  		input[0].value = '';
	     	  	} else {
	     	  		alert('Enter the things you want to do!')
	     	  	}
	     	   }
	     	 });


}

var list = new ToDoList();