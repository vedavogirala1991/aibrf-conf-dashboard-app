//Pets Actions
export const RECIEVE_PETS = 'RECIEVE_PETS'
//Added later
//export const SAVE_PET = 'SAVE_PET'


export const recievePets = (pets) => {
  return {
    type : RECIEVE_PETS,
    pets,
  }
}
