function createSearch(box) {
  const input_search = createElement('input');
  const button_search = createElement('button');

  input_search.placeholder = 'Nome';
  input_search.id = 'search';

  button_search.innerHTML = 'Pesquisar';
  button_search.onclick = buttonSearch;
  button_search.classList.add('search_button');

  box.appendChild(input_search);
  box.appendChild(button_search);
}

function createGenderSelect(box) {
  const select = createElement('select');
  const defaultOption = createElement('option');
  const option_f = createElement('option');
  const option_m = createElement('option');

  select.id = 'select_gender';
  select.onchange = searchGender;

  defaultOption.innerHTML = 'Genero';
  defaultOption.value = '';
  defaultOption.selected = true;
  defaultOption.disabled = true;
  defaultOption.hidden = true;

  option_f.innerHTML = 'Feminino';
  option_f.value = 'F';
  option_m.innerHTML = 'Masculino';
  option_m.value = 'M';

  select.appendChild(defaultOption);
  select.appendChild(option_f);
  select.appendChild(option_m);

  box.appendChild(select);
}

function createButtonsBox(box) {
  const button_pop = createElement('button');
  const button_shift = createElement('button');
  const button_unshift = createElement('button');
  const button_push = createElement('button');

  button_pop.innerHTML = 'Pop';
  button_pop.onclick = () => customArray('pop');
  button_pop.classList.add('search_button');

  button_shift.innerHTML = 'Shift';
  button_shift.onclick = () => customArray('shift');
  button_shift.classList.add('search_button');

  button_unshift.innerHTML = 'Unshift';
  button_unshift.onclick = () => customArray('unshift');
  button_unshift.classList.add('search_button');

  button_push.innerHTML = 'Push';
  button_push.onclick = () => customArray('push');
  button_push.classList.add('search_button');

  box.appendChild(button_pop);
  box.appendChild(button_shift);
  box.appendChild(button_unshift);
  box.appendChild(button_push);
}

function showPeople(main, box) {
  createSearch(box);
  createGenderSelect(box);
  createButtonsBox(box);

  var peopleList = '';

  const table = createElement('table');
  const thead = createElement('thead');
  const tbody = createElement('tbody');

  const tr = createElement('tr');
  const th_name = createElement('th');
  const th_age = createElement('th');
  const th_gender = createElement('th');
  const th_country = createElement('th');

  th_name.innerHTML = 'Nome';
  th_age.innerHTML = 'Idade';
  th_gender.innerHTML = 'Gênero';
  th_country.innerHTML = 'País';

  tr.appendChild(th_name);
  tr.appendChild(th_age);
  tr.appendChild(th_gender);
  tr.appendChild(th_country);
  thead.appendChild(tr);

  for (var i = 0; i < people.length; i++) {
    const tr = createElement('tr');

    const td_name = createElement('td');
    const td_age = createElement('td');
    const td_gender = createElement('td');
    const td_country = createElement('td');

    td_name.innerHTML = people[i].name;
    td_age.innerHTML = people[i].age;
    td_gender.innerHTML = people[i].gender;
    td_country.innerHTML = people[i].country;

    tr.appendChild(td_name);
    tr.appendChild(td_age);
    tr.appendChild(td_gender);
    tr.appendChild(td_country);
    tbody.appendChild(tr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);

  main.appendChild(table);
}
