import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

   //baseURL = "http://localhost:8080/sgis-2.0.1";
   baseURL = process.env['BCK_URL'] || '';


   constructor() {
   }
 
   public setBaseURL(value: string): void {
     this.baseURL = value;
   }
 
   public getBaseURL(): string {
     return this.baseURL;
   }
 
}
