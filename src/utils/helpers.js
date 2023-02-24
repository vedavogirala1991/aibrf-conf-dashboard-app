export const formatEvent = (event) => {
  const {id, title, description, startDate, endDate} = event
  return {
    id,
    title,
    description,
    startDate, 
    endDate,
  }
}

export const formatTime = (timeText) => {
  let initialHours = timeText.substring(0,2)
  var hourNumber = Number(initialHours)
  var mer = ''
  if(hourNumber===0) {
    hourNumber=12
    mer = ' AM'
  } else if(hourNumber>0 && hourNumber<12) {
    mer = ' AM'
  } else if(hourNumber>12){
    hourNumber=hourNumber-12
    mer = ' PM'
  } else {
    mer = ' PM'
  }

  let finalHours = hourNumber<=9 ? '0'+hourNumber+ timeText.substring(2,timeText.length) : ''+hourNumber + timeText.substring(2,timeText.length)
  let finalTime = finalHours + mer
  return finalTime
}
