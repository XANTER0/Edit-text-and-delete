let ps = document.querySelectorAll('p');

// Присваивание ссылки 'remove'.
for(let elem of ps) {
    elem.innerHTML = `<span>${elem.innerHTML}</span>`;

    let link = document.createElement('a');
    link.href = '#';
    link.textContent = 'remove';
    link.addEventListener('click', function() {
        elem.remove();
    });

    elem.appendChild(link);
};

let elems = document.querySelectorAll('span');

// Редактирование.
for(let elem of elems) {
    elem.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = elem.textContent;
        elem.textContent = '';
    
        input.addEventListener('blur', function() {
            elem.textContent = this.value;
            elem.addEventListener('click', func);
        });
    
        elem.appendChild(input);
    
        elem.removeEventListener('click', func);
    });
};