import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

   //baseURL = "https://sgbe21.herokuapp.com"
   //baseURL = "http://localhost:8080/sgis-2.0.1";
   baseURL = "http://93.87.76.62:8080/sgis-2.0.1";


   constructor() {
   }
 
   public setBaseURL(value: string): void {
     this.baseURL = value;
   }
 
   public getBaseURL(): string {
     return this.baseURL;
   }
 
}
