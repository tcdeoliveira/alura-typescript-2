import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MenssagemView } from '../views/menssagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private menssagemView = new MenssagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);
  }
    
  public adiciona(): void {
    const negociacao = this.criaNegociacao();
    if(negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6){
      this.negociacoes.adiciona(negociacao);
      this.atualizaView();
      this.limparFormulario();
    }else{
      this.menssagemView.update('Apenas negociações em dias uteis são aceitas.');
    }
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.menssagemView.update('Negociacao adicionada com sucesso');
  }


  private criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  private limparFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }
}
