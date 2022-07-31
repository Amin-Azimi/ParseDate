import moment from 'moment-timezone'; 

const ParseDate =(dates,dateRange)=>{
    findWithoutOptimization(dates,dateRange);
}

const findWithoutOptimization=(dates,dateRange)=>{
    console.time("Selecting dates in range take long:");
    //selecting dates in date range without optimization
    const selectedDateBetweenDateRange = dates.map(item => moment.tz(item,"Europe/Berlin"))
    .filter( item => item >= moment(dateRange.startDate) && item < moment(dateRange.endDate ));
    console.timeEnd("Selecting dates in range take long:");
    console.log(`the length of NON-Optimized found array is ${selectedDateBetweenDateRange.length} \n`)
}

export default ParseDate;