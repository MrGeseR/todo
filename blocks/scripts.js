var ToDo = function(name) {
	this.id = ToDo.count
	ToDo.count ++;
	this.name = name;
	this.status = false;
}

ToDo.count = 0;

var whatToDo = [];
var whatDone = [];
var whatDoing = [];

var ToDoList = function() {
	var div = $('.newToDo')[0];
	$(div).append("<h1 class='newToDo__heading'>What are you going to do?</h1>");
	var input = $("<input type='text' class='newToDo__input' placeholder='Type here your promises, forgetful!'>");
	var headers = $("<div></div>");
	$(div).append(input, headers);
	var header1 = $("<h2 class='newToDo__listHeader col-md-6'> List of things to do:</h2>");
	// var header2 = $("<h2 class='newToDo__listHeader col-md-4'> List of things that are in progress:</h2>");
	var header3 = $("<h2 class='newToDo__listHeader col-md-6'> List of done things:</h2>");
	$(headers).append(header1, header3);

	var ulToDo = $("<ul class='newToDo__list col-md-6' id='ulToDo'>");
	// var ulDoing = $("<ul class='newDoing__list col-md-4' id='ulDoing'>");
	var ulDone = $("<ul class='newDone__list col-md-6' id='ulDone'>");
	$(div).append(ulToDo,  ulDone);

	$(input).keypress(function(e){
 	   	if(e.keyCode==13){
	 	  	if(input[0].value != ''||null) {
	 	  		let name = input[0].value;
	 	  		var toDo = new ToDo(name);
				let li = $("<li class='newToDo__listItem'>")
	 	  		$(ulToDo).append(li);
	 	  		let checkbox = ("<input type='checkbox' class='newToDo__listCheckbox' id='"+ToDo.count+"' onclick='changeUl(this)'>");
	 	  		let label = ("<label for='"+ToDo.count+"' class='newToDo__listLabel '>"+toDo.name+"</label>");
	 	  		let del = ("<img src='./images/Cross.png' class='newToDo__listButton' onclick='del(this)' >");
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

function changeUl(param){
	if ($(param).prop("checked")){
		$('#ulDone').append($(param).parent());
		$(param).parent().attr('class', 'newDone__listItem');
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

function del(param){
	$(param).parent().remove();
	let text = $(param).parent().children()[1].innerText;
	for (let i = whatDone.length - 1; i >= 0; i--) {
		if (whatDone[i].name == text){
			whatDone.splice(i,1);
		}
		continue;
	}
	for (let i = whatToDo.length - 1; i >= 0; i--) {
		if (whatToDo[i].name == text){
			whatToDo.splice(i,1);
		}
		continue;
	}
}

$(function() {
	$('#ulToDo').sortable({
		connectWith: '.newDone__list',
		placeholder: 'emptySpace',
		receive: function (event, ui) {
			$(ui.item.children()[0]).prop('checked',false)
			$(ui.item.children()[0]).trigger('onclick')
    	}
	});
	$('#ulDone').sortable({
		connectWith: '.newToDo__list',
		placeholder: 'emptySpace',
		receive: function (event, ui) {
			$(ui.item.children()[0]).prop('checked',true)
			$(ui.item.children()[0]).trigger('onclick')
			    }
  });
});