import { ProxyState } from "../AppState.js";
import { carsService } from "../Services/CarsService.js";


function draw(){
  let myCars = ProxyState.cars
  let template = ''
  myCars.forEach(c => {
    template += c.Template
  })
  document.getElementById("cars").innerHTML = template
  console.log("from the draw func:", myCars);
}


export default class CarsController{
  // TODO this constructor will run when this file loads - think about what you want to happen at that time.
 constructor(){
    // TODO ProxyState.on is watching for a value in the appstate to change and will run a method when that happens
    ProxyState.on("cars", draw)
    this.getCars()
  }

  async getCars(){
    await carsService.getCars()
  }

}