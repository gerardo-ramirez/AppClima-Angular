import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
URI: string = '';
apiKey: string = '';
city: string ='';
  constructor( private httpClient: HttpClient) { 
    this.apiKey = '7dcb15597b9b7fb849b322222c9adfef';
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;

  }
  getWeather(cityName: string, countryCode: string ){
    //sin el return no funciona el sucribe que usamos en component
   return this.httpClient.get(`${this.URI}${cityName},${countryCode}`);
    

  }
}
