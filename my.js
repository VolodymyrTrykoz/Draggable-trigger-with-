var scale = document.querySelector('.scale');
var trigger = scale.children[0];
var scaleBox = scale.getBoundingClientRect();
var text = document.querySelector('.text');
console.log(scaleBox);
console.log(scale.children);




trigger.addEventListener('drag', startDragging);


function startDragging(event){
	var triggerCenterX = trigger.clientWidth / 2;

	trigger.style.left = (event.clientX - scaleBox.left)  + 'px';
	console.log(event.clientX);
	if(event.clientX < scaleBox.left) trigger.style.left = (0 - triggerCenterX) + 'px';
	console.log(scaleBox.left + scaleBox.width);
	if(event.clientX > (scaleBox.left + scaleBox.width)) trigger.style.left = (scaleBox.width - triggerCenterX) + 'px' ;

	printPercent(event);	
}


function printPercent(event){
	text.innerHTML = ((event.clientX-scaleBox.left) / scaleBox.width * 100).toFixed(0);
	if (text.innerHTML <= 0) text.innerHTML = 0;
	else if(text.innerHTML > 100) text.innerHTML = 100;	
} 

trigger.ondragend = function(){
	startDragging(event);
	printPercent(event);
}