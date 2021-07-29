
const element = document.createElement('div');
const getMain = document.getElementById('main');
getMain.parentNode.removeChild(document.querySelector('main'));



const newHeader =document.createElement('h1');
newHeader.setAttribute('id', 'victory');
document.body.appendChild(newHeader);

newHeader.innerHTML= "JN is the champion";



element.appendChild(ul); 



const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul); 
element.style.backgroundColor = '#27647B'; 
element.style.fontSize = '24px';
element.style.marginLeft = '30px';
element.style.lineHeight = 2; 
element.style.blockSize='140px'


mov = document.getElementsByTagName('ul')[0];
mov.removeChild(mov.querySelector('li:nth-child(2)')); 


ul.remove();

