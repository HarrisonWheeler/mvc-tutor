import  CarsController from "./Controllers/CarsController.js";

class App {

  // TODO Always make sure you are registering your controllers as you create them
  carsController = new CarsController()
}

window["app"] = new App();
