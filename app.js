const light = document.querySelector('#bulb');

light.addEventListener('click', function(e){
    e.target.classList.toggle('bulb-on');
})

light.addEventListener('dblclick', function(e){
	e.target.classList.add('bulb-crash');
		console.log("priv")
})