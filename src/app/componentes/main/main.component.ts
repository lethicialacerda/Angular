import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  listaNotas = [
    {
      titulo: "BBBB",
      conteudo: "abacate",
      tipo: "tipo2"
    }
  ];
}
