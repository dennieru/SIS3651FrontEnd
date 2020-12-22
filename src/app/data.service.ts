import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://192.168.88.160:5050/api/";

  constructor(private httpClient: HttpClient) { }
  
  public sendGetRequest(apiCall = ''){
    return this.httpClient.get(this.REST_API_SERVER + apiCall);
  }
}
