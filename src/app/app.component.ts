import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { dataCIIU, Departamento, Municipio } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'and';
  departamentos: Departamento[];
  municipios: Municipio[];
  dataCIIUs: dataCIIU[];
  departamentoSeleccionado: string;
  municipioSeleccionado: string;

  constructor(private appService: AppService) {
    this.departamentos = [];
    this.municipios = [];
    this.dataCIIUs = [];
    this.departamentoSeleccionado = '';
    this.municipioSeleccionado = '';
  }
  ngOnInit(): void {
    this.getDepartamentos();
    this.getdataCIIUs();
  }
  getDepartamentos(): void {
    this.appService.getDepartamentos().subscribe(data => {
      if (data.status === 200 && data.body) {
        this.departamentos = data.body;
      }
    });
  }

  getMunicipios(): void {
    this.appService.getMunicipios(this.departamentoSeleccionado).subscribe(data => {
      if (data.status === 200 && data.body) {
        this.municipios = data.body;
      }
    });
  }
  getdataCIIUs(): void {
    this.appService.getDataCIIU().subscribe(data => {
      if (data.status === 200 && data.body) {
        this.dataCIIUs = data.body;
      }
    });
  }
}

