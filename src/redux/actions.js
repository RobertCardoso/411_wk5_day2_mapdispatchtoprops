// * Now, let's create an `action creator` called "addCar" that
//  takes one parameter called "car". Have it return an object whose 
// type is "ADD_CAR" and its value is the car parameter.


export const addCar = (car) => {
    return {
       type: "ADD_CAR",
        value: car   
    }
   
}

export const removeCar = (index) => {
    return{
      type: "REMOVE_CAR",
      payload: index
    }
  }