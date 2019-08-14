import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let arr = ['a', {b:'b'}, ['c', 'd'], {e:['f','g']}];

    let coche = {
      "marca": "honda",
      "motor": {
                     "combustible": "gasolina",
                     "consumo": 5
                      },
      "extras": [0,1,"A/C"]
      
      }


      let arry = [1,2,3,10]
    }

    
  
}
