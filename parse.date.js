import moment from 'moment-timezone'; 
import createDates from './create.dates.js';

const ParseDate =(dates,dateRange)=>{
    console.log(dateRange);
    findWithoutOptimization(dates,dateRange);
}

const findWithoutOptimization=(dates,dateRange)=>{
    console.time("Selecting dates in range take long:");
    //selecting dates in date range without optimization
    const selectedDateBetweenDateRange = dates.map(item => moment.tz(item,"Europe/Berlin"))
    .filter( item => item >= moment(dateRange.startDate) && item < moment(dateRange.endDate ));
    // console.log(selectedDateBetweenDateRange.length,selectedDateBetweenDateRange[0],
    //     selectedDateBetweenDateRange[selectedDateBetweenDateRange.length-1]);
    console.timeEnd("Selecting dates in range take long:");
    console.log(`the length of NON-Optimized found array is ${selectedDateBetweenDateRange.length}`)
    console.log(dateRange);

}

export default ParseDate;