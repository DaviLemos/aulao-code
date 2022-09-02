import { View } from './view';
export class PokemonInfoView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `<thead>
                <tr>
                  ${model
                    .map(
                      (item) => `<th colspan="2">
                    ${item.title}
                  </th>`
                    )
                    .join(' ')}
                </tr>
              </thead>
              <tbody>
                <tr>
                  ${model
                    .map((item) => {
                      item.sprites.map(
                        (data) => `
                      <td>
                        <img src="${data.sprite}" alt="" />
                        <p>${data.position}</p>
                      </td>
                    `
                      );
                    })
                    .join(' ')}
                </tr> 
              </tbody>`;
  }
}
{
}
