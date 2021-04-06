

  // TODO when creating a model, take a look at the data you are wanting to "map" to this model - what do we actually want/need here?
export default class Car{

  // TODO you will want to pass into the constructor the things you are passing to it - and the things you want to "map" to your Car object
  constructor(data){
    this.year = data.year
    this.make = data.make
    this.model = data.model
    this.description = data.description
    this.price = data.price
    this.imgUrl = data.imgUrl || "placehold.it/200x200"
  }

  get Template(){
    return /*html*/`
    <div class="col-3">
        <h1>${this.year}</h1>
        <h1>${this.make}</h1>
        <h1>${this.model}</h1>
        <h1>${this.price}</h1>
        <h1>${this.description}</h1>
        <img class="img-fluid" src="${this.imgUrl}" alt=""/>
    </div>
    `
  }

}