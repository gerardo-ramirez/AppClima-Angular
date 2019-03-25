import { Component, OnInit } from '@angular/core';
import { WeatherService} from './services/weather.service';//la instanciamos en el contructor.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //la propiedad weather almacenara la respuesta de la api. 
  //mostraremos el estado.
  weather;
constructor( private weatherService: WeatherService ){
  

}

  ngOnInit(){ //Actualiza el estado apenas renderiza pero una sola vez. 

  }
getWeather2(cityName: string, countryCode: string){
  this.weatherService.getWeather(cityName, countryCode)
  .subscribe(
    res=> this.weather = res,
    err=> console.log(err)
  )
}
// instanciamos los parametros  como input html
  submitLocation(cityName:HTMLInputElement, countryCode: HTMLInputElement){
if(cityName.value && countryCode.value){

   this.getWeather2(cityName.value, countryCode.value);

    cityName.value= '';
    countryCode.value= '';
}else{
  alert ("coloque datos por favor");
}

   
    //cityName es el input por eso podemos aplicar focus();
    cityName.focus();

    return false;

  }
}
