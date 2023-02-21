//Pets Actions
export const RECIEVE_EVENTS = 'RECIEVE_EVENTS'
//Added later
//export const SAVE_PET = 'SAVE_PET'


export const recieveEvents = (events) => {
  return {
    type : RECIEVE_EVENTS,
    events,
  }
}
