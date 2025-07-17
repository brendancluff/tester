const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.appendChild(span);
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    input.value = '';
    input.focus();
  }
});
