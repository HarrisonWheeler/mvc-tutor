import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";
import { api } from "./AxiosService.js";


class CarsService {

  // TODO this method will not run unless it is called - think about where you want this to be called if you aren't getting the results you think you should. 
  async getCars(){
    let res = await api.get('cars')
    ProxyState.cars = res.data.map(c => new Car(c))
    // TODO this is setting the ProxyState.cars to a new array of instantiated Car objects that we defined in the Car model
    console.log(ProxyState.cars);
  }

  // TODO this method is to show how intellisense works when trying to access class methods from another file

  // async hiGwen(){

  // }
}

export const carsService = new CarsService()