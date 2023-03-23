import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const headers = new HttpHeaders({
  'content-type' : 'application/json',
  'Acess-Control-Allow-Origin':'*'
})

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(private http : HttpClient) {  }


  httpGet(url :string)
  {
     return this.http.get(`${baseUrl}${url}` ,{headers : headers})
  }

  httpPost(url : string , data : any)
  {
    return this.http.get(`${baseUrl}${url}` ,data)
  }

  httpPut(url: string , data : any)
  {
    return this.http.get(`${baseUrl}${url}` ,data)
  }

  httpDelete( url : string)
  {
    return this.http.get(`${baseUrl}${url}` )
  }
}