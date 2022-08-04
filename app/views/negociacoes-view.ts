import { View } from "./view.js";
import { Negociacoes } from "../models/negociacoes";

export class NegociacoesView extends View<Negociacoes> {  

  template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr> 
        </thead>
        <tbody>
          ${model.lista().map(negocicaco => {
            return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(negocicaco.data)}</td>
                <td>${negocicaco.quantidade}</td>
                <td>${negocicaco.valor}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }
}