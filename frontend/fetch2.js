function createNode(element) {
	//var x = document.createElement(element);
  	//x.setAttribute("value", value);
  	//var t = document.createTextNode("Volvo");
  	//x.appendChild(t);
  	//document.getElementById("mySelect").appendChild(x);
	return document.createElement(element);
	//return x;
}

function append(parent, el) {
	return parent.appendChild(el);
}

const ul = document.getElementById('facilities');
const url = 'https://randomuser.me/api/?results=10';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
	let authors = data.results;
	return authors.map(function(author) {
	  let li = createNode('option');
	  li.setAttribute("value",`${author.name.first} ${author.name.last}`);
	  li.innerHTML = `${author.name.first} ${author.name.last}`;
	  append(ul, li);
	})
})
.catch(function(error) {
console.log(JSON.stringify(error));
});
