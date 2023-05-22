import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

   baseURL = "https://sgbe21.herokuapp.com"
   //baseURL = "http://localhost:8081";


   constructor() {
   }
 
   public setBaseURL(value: string) {
     this.baseURL = value;
   }
 
   public getBaseURL(): string {
     return this.baseURL;
   }
 
}
