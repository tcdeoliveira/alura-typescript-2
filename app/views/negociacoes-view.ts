import { View } from "./view.js";
import { Negociacoes } from "../models/negociacoes";

export class NegociacoesView extends View<Negociacoes> {  

  protected template(model: Negociacoes): string {
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
                <td>${this.formatarData(negocicaco.data)}</td>
                <td>${negocicaco.quantidade}</td>
                <td>${negocicaco.valor}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }

  private formatarData(data: Date): string {
    return new Intl.DateTimeFormat().format(data);
  }
}