const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];

localStorage.setItem('items',JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
console.log(data);

const listMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); // 새로고침 되는 걸 막아주기 

    itemsArray.push(input.value);
    localStorage.setItem('items',JSON.stringify(itemsArray));
    listMaker(input.value); // input 값을 받아온다 
    input.value="";  // input은 다시 공백으로 만들기 
});

data.forEach(item => {
    listMaker(item);
});

// 로컬스토리지 값 삭제하는 기능
button.addEventListener('click', () => {
    localStorage.clear();
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})
