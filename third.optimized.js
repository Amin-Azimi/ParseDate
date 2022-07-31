import moment from 'moment-timezone'; 

//This function is not more optimized than second sloution but it's non blocking recursive function
const ThirdOptimizedParseDate =(dates,dateRange)=>{

    optimizedFind(dates,dateRange);
}
const optimizedFind = async (dates,dateRange)=>{
    console.time("Third optimized dates selection:");
    let {startDate,endDate} = {...dateRange};
    //convert ranges of data to UTC
    startDate = moment.tz(startDate,"UTC").format();
    endDate = moment.tz(endDate,"UTC").format();
    //selecting dates in range second solution
    const lowestIndex = dates.indexOf(await getStartDateIndex(dates,startDate));
    const highestIndex = dates.indexOf(await getStartDateIndex(dates.slice(lowestIndex),endDate));
    //selecting dates in date range
    const optimizedRange = dates.slice(lowestIndex,highestIndex).map(item => moment.tz(item,"Europe/Berlin"));
    console.timeEnd("Third optimized dates selection:");
    console.log(`the length of Thrid optimized found array is ${optimizedRange.length} \n`)
}

const getStartDateIndex=(newArr,startValue)=>{
    return new Promise((resolve,reject)=>{
        if(newArr.length ===1 || newArr[0] === startValue){
            return resolve(newArr[0]);
        }
        const middleIndex= Math.floor(newArr.length/2);
        //if startvalue is lower than the middle value select right side values
        if(  startValue < newArr[middleIndex])
            return process.nextTick(() => resolve(getStartDateIndex(newArr.slice(0,middleIndex),startValue)));
        //else left side values
        else if(  startValue >= newArr[middleIndex])
            return  process.nextTick(() => resolve(getStartDateIndex(newArr.slice(middleIndex),startValue)));
    });
}

export default ThirdOptimizedParseDate;