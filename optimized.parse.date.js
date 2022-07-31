import moment from 'moment-timezone'; 

const OptimizedParseDate =(dates,dateRange)=>{

    optimizedFind(dates,dateRange);
}
const optimizedFind = (dates,dateRange)=>{
    console.time("optimized dates selection:");
    let {startDate,endDate} = {...dateRange};
    //convert ranges of data to UTC
    startDate = moment.tz(startDate,"UTC").format();
    endDate = moment.tz(endDate,"UTC").format();
    const lowestIndex = dates.indexOf(getStartDateIndex(dates,startDate));
    const highestIndex = dates.indexOf(getStartDateIndex(dates,endDate));
  
    //selecting dates in date range
    const optimizedRange = dates.slice(lowestIndex,highestIndex).map(item => moment.tz(item,"Europe/Berlin"));
    console.timeEnd("optimized dates selection:");
    console.log(`the length of optimized found array is ${optimizedRange.length} \n`)

}

const getStartDateIndex=(newArr,startValue)=>{
    if(newArr.length ===1 || newArr[0] === startValue){
        return newArr[0];
    }
    const middleIndex= Math.floor(newArr.length/2);
    if(  startValue < newArr[middleIndex])
        return getStartDateIndex(newArr.slice(0,middleIndex),startValue);
    else if(  startValue >= newArr[middleIndex])
        return  getStartDateIndex(newArr.slice(middleIndex),startValue);
}

export default OptimizedParseDate;