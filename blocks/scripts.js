var ToDo = function(name) {
	this.id = ToDo.count
	ToDo.count ++;
	this.name = name;
	this.status = false;
}

ToDo.count = 0;

var whatToDo = [];
var whatDone = [];

var ToDoList = function() {
	var div = $('.newToDo')[0];
	$(div).append("<h1 class='newToDo__heading'>What are you going to do?</h1>");
	var input = $("<input type='text' class='newToDo__input' placeholder='Type here your promises, forgetful!'>");
	var ulToDo = $("<ul class='newToDo__list' id='ulToDo'><h2 class='newToDo__listHeader'> List of things to do:</h2>");
	var ulDone = $("<ul class='newToDo__list' id='ulDone'><h2 class='newToDo__listHeader'> List of done things:</h2>");
	$(div).append(input, ulToDo, ulDone);

	$(input).keypress(function(e){
 	   	if(e.keyCode==13){
	 	  	if(input[0].value != ''||null) {
	 	  		let name = input[0].value;
	 	  		var toDo = new ToDo(name);
				let li = $("<li class='newToDo__listItem'>")
	 	  		$(ulToDo).append(li);
	 	  		let checkbox = ("<input type='checkbox' class='newToDo__listCheckbox' id='"+ToDo.count+"' onclick='replace(this)'>");
	 	  		let label = ("<label for='"+ToDo.count+"' class='newToDo__listLabel'>"+toDo.name+"</label>");
	 	  		let del = ("<img src='./images/Cross.png' class='newToDo__listButton'>");
	 	  		$(li).append(checkbox,label,del);
	 	  		whatToDo.push(toDo);
	 	  		input[0].value = '';
	 	  	} else {
	 	  		alert('Enter the things you want to do!')
	 	  	}
 	   	}
 	});


}

var list = new ToDoList();

function replace(param){
	if ($(param).prop( "checked" )){
		$('#ulDone').append($(param).parent());
		$(param).parent().addClass('newToDo__listItem_done');
		let text = $(param).parent().children()[1].innerText;
		let j;
		for (var i = whatToDo.length - 1; i >= 0; i--) {
			if (whatToDo[i].name == text){
				j = i;
			}
			continue;
		}
		whatToDo[j].status = true;
		whatDone.push(whatToDo[j]);
		whatToDo.splice(j,1);
	} else {
		$('#ulToDo').append($(param).parent());
		$(param).parent().attr('class','newToDo__listItem');
		let text = $(param).parent().children()[1].innerText;
		let j;
		for (var i = whatDone.length - 1; i >= 0; i--) {
			if (whatDone[i].name == text){
				j = i;
			}
			continue;
		}
		whatDone[j].status = false;
		whatToDo.push(whatDone[j]);
		whatDone.splice(j,1);
	}

}


