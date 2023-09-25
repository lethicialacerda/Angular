import { Component } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private service: NotaService) { }

  ngOnInit(): void {
    this.service.listar()
  }

  listaNotas = [
    {
      titulo: "AAAAA",
      conteudo: "Angular é estranho",
      tipo: "tipo1"
      }
    ];
  }    


