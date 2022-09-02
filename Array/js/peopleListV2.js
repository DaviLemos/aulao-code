function viewSearch() {
  return `
    <input  id='search'  placeholder='Nome' />
    <button class='search_button' onclick='buttonSearch()'>Pesquisar</button>
    <select id='select_gender' onchange='searchGender()'>
    <option value="" selected disabled hidden>Genero</option>
      <option value='F'>Feminino</option>
      <option value='M'>Masculino</option>
    </select>
    <button class='search_button' onclick='customArray("pop")'>Pop</button>
    <button class='search_button' onclick='customArray("shift")'>Shift</button>
    <button class='search_button' onclick='customArray("unshift")'>Unshift</button>
    <button class='search_button' onclick='customArray("push")'>Push</button>
  `;
}

function showPeople(main, box) {
  const table = viewTable(people);
  const view = viewSearch();

  box.innerHTML += view;
  main.innerHTML += table;
}
