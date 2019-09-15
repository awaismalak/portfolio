import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
portfolioImage =[
  {'image':'cabin.png'},
  {'image':'cake.png'},
  {'image':'circus.png'},
  {'image':'game.png'},
  {'image':'safe.png'},
  {'image':'submarine.png'}
 
  
]



  constructor() { }
}
