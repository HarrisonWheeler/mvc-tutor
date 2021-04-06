

// TODO when starting from scratch, lets think step by step on what you will need - we need to set up how we are going to hit the database

export const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api"
})

// TODO created this method to show that when importing a const variable, you need to use {}'s to import just a piece of that file

// export const hiGwen = axios.create({

// })