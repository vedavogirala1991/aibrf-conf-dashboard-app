export const formatEvent = (event) => {
  console.log('inside formatEvent', event)
  const {id, title, description, startDate, endDate} = event
  return {
    id,
    title,
    description,
    startDate, 
    endDate,
  }
}
