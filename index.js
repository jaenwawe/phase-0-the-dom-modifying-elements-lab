
// const main = document.getElementById('main');
// main
// getMain.parentNode.removeChild(document.querySelector('main'));

// main.innerHTML =
//   "<h1>Sunshine</h1><h3>Let's discuss something else</h3><p><em>Future Developers</em></p>";

const newHeader =document.createElement('h1');
newHeader.setAttribute('id', 'victory');
document.body.appendChild(newHeader);
//"Done with document.createElement";
newHeader.innerHTML= "Jae is the champion"; 

const element = document.createElement("div");
document.body.append(element);
const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.append(li);
}

element.append(ul);


const elementMain = document.getElementById("main");
elementMain.style.height = "300px";
elementMain.style.backgroundColor = "#27647B";

elementMain.textContent = "You've changed what's on the screen!";


element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

elementMain.className = "pet-listing dog";
elementMain.classList.remove("dog");
elementMain.classList.add("cat", "sale");

//someElement.removeChild(someChildElement);
const listing = document.getElementsByTagName("ul")[0];
const secondChild = listing.querySelector("li:nth-child(2)");
listing.removeChild(secondChild);

//someElement.removeChild(someChildElement);
const removeMain = (document.querySelector('main'));
console.log(removeMain);
removeMain.remove();
elementMain.remove();

console.log(removeMain);



