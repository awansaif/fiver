const namePlaceHolder = document.querySelector(".name")
const btn = document.querySelector("#generate"); 
const td = document.querySelector("#numericvalue"); 
btn.addEventListener('submit' , (e) => {
	e.preventDefault();
	const name = document.querySelector("#name").value;
	namePlaceHolder.innerHTML= '';
	td.innerHTML = '';
	const str = name.split(' ').join('').toLowerCase();
	for(i=0; i< str.length; i++)
	{
		
		var node = document.createElement("th");                 // Create a <li> node
		var textnode = document.createTextNode(str[i].toUpperCase());         // Create a text node
		node.appendChild(textnode);                              // Append the text to <li>
		namePlaceHolder.appendChild(node); 
	}
	console.log(convertLetterToNumber(str))

 })

function convertLetterToNumber(str) {
  var out = [], len = str.length;
  for (pos = 0; pos < len; pos++) {
    out1 = str.charCodeAt(pos) - 97 + 1;
    var node = document.createElement("td");                 // Create a <li> node
	var textnode = document.createTextNode(out1);         // Create a text node
	node.appendChild(textnode);                              // Append the text to <li>
	td.appendChild(node);    
    out.push(out1)
  }
  return out;
}

