import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dataCIIU, Departamento, Municipio } from './models';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl: string;

  constructor(public http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }
  getDepartamentos(): Observable<HttpResponse<Departamento[]>> {
    return this.http.get<Departamento[]>(this.apiUrl + 'ApruebaTecnica/ObtenerDepartamentos', { observe: 'response' });
  }
  getMunicipios(depCodigo: string): Observable<HttpResponse<Municipio[]>> {
    return this.http.get<Municipio[]>(this.apiUrl + 'ApruebaTecnica/ObtenerMunicipios/' + depCodigo, { observe: 'response' });
  }
  getDataCIIU(): Observable<HttpResponse<dataCIIU[]>> {
    return this.http.get<dataCIIU[]>(this.apiUrl + 'APruebaTecnica/ObtenerData', { observe: 'response' });
  }
}
