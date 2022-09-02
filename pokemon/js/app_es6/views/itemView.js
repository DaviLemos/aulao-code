export class ItemView {
  static templateIndex(model) {
    return `
            <li>
              <h3>${model.name}</h3>
              <img
                src=${model.src}
                alt= "${model.name} Image"
              />
              <p>
                ${model.cost}
              </p>
            </li>
            `;
  }
}

{
  /* <h3>${model.name}</h3> */
}
{
  /* <p>
${model.cost}
</p>     */
}
