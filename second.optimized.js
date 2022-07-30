import moment from 'moment-timezone'; 

const SecondOptimizedParseDate =(dates,dateRange)=>{

    optimizedFind(dates,dateRange);
}
const optimizedFind = async (dates,dateRange)=>{
    console.time("More optimized dates selection:");
    let {startDate,endDate} = {...dateRange};
    //convert ranges of data to UTC
    startDate = moment.tz(startDate,"UTC").format();
    endDate = moment.tz(endDate,"UTC").format();
    // console.log(`original start ${dateRange.startDate} and conveted to UTC ${startDate}`);
    //selecting dates in range second solution
    
    let lowestIndex = 0
    let highestIndex = 0;
    const values = await  Promise.allSettled([
        Promise.resolve(getStartDateIndex(dates,startDate)),
        Promise.resolve(getStartDateIndex(dates,endDate))
    ]);
    lowestIndex = dates.indexOf(values[0].value);
    highestIndex = dates.indexOf(values[1].value);
    //selecting dates in date range
    const optimizedRange = dates.slice(lowestIndex,highestIndex).map(item => moment.tz(item,"Europe/Berlin"));
    // console.log(optimizedRange.length,optimizedRange[0],
    //     optimizedRange[optimizedRange.length-1]);
    console.timeEnd("More optimized dates selection:");
    console.log(`the length of optimized found array is ${optimizedRange.length}`)

}

const getStartDateIndex=(newArr,startValue)=>{
    if(newArr.length ===1 || newArr[0] === startValue){
        return newArr[0];
    }
    const middleIndex= Math.floor(newArr.length/2);
    //if startvalue is lower than the middle value select right side values
    if(  startValue < newArr[middleIndex])
        return getStartDateIndex(newArr.slice(0,middleIndex),startValue);
    //else left side values
    else if(  startValue >= newArr[middleIndex])
        return  getStartDateIndex(newArr.slice(middleIndex),startValue);
}

export default SecondOptimizedParseDate;