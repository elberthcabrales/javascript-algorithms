function isInRange(start, end, value){
  return (start <= value && end <= value)
}
function weightedSchedule(schedules) {
  let maxValue = 0
  for(let i = 0; i < schedules.length; i++){
    let [currentStart, currentEnd, currentUtility] = schedules[i]
    maxValue = Math.max(maxValue, currentUtility)
    for(let j = schedules.length - 1; j >= 0; j--){
      if(i != j){
        const [start, end, utility] = schedules[j]
        if(isInRange(currentStart, currentEnd, start) && isInRange(currentStart, currentEnd, end)){
          maxValue = Math.max(maxValue, currentUtility+utility)
          if(currentStart > start){
            currentStart = start
          }
          if(currentEnd < end){
            currentEnd = end
          }
        }
      }
    }
  }
  return maxValue;
}

const schedules = [[0,2,25], [1,5,40], [6,8,270], [3,7,220]]
const result = weightedSchedule(schedules)

console.log(result === 310)
