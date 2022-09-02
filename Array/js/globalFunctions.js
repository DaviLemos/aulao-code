function viewTable(data) {
  return `
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Gênero</th>
          <th>País</th>
          </tr>
          </thead>
          <tbody>
            ${data
              .map(
                (person) => `
              <tr>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.gender}</td>
                <td>${person.country}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
  `;
}

function buttonSearch() {
  const input_search = $('#search');
  const text = input_search.value;
  const expression = new RegExp(text, 'i');

  let new_list = people.filter((person) => {
    return expression.test(person.name);
  });
  const view = viewTable(new_list);

  $('#main').innerHTML = view;
}

const customArray = (method) => {
  switch (method) {
    case 'push':
      const new_l_person = {
        name: 'Samanta',
        age: '29',
        gender: 'F',
        country: 'Italy',
      };
      people.push(new_l_person);
      break;

    case 'pop':
      people.pop();
      break;

    case 'shift':
      people.shift();
      break;

    case 'unshift':
      const new_f_person = {
        name: 'Cleber',
        age: '25',
        gender: 'M',
        country: 'USA',
      };

      people.unshift(new_f_person);
      break;
  }

  const view = viewTable(people);
  $('#main').innerHTML = view;
};

const boolCond = (cond_1, cond_2) => cond_1 === cond_2;

function searchGender() {
  const select = $('#select_gender');
  const value = select.value;

  let new_list = people.filter((person) => {
    return boolCond(person.gender, value);
  });

  const view = viewTable(new_list);

  $('#main').innerHTML = view;
}
