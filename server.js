import moment from 'moment-timezone'; 
import OptimizedParseDate from './optimized.parse.date.js';
import ParseDate from './parse.date.js'

import createDates from './create.dates.js';
import SecondOptimizedParseDate from './second.optimized.js';
import ThirdOptimizedParseDate from './third.optimized.js';
const startDate = new Date();
startDate.setDate(startDate.getUTCDate()-209);
//creatin an array hourly based dates
const dates = createDates(50000,startDate);
 //creating date range object
 const firstRandomIndex = Math.floor( Math.random()*(dates.length-1));
 const secondRandomIndex = Math.floor(Math.random()*(dates.length-1));
 const dateRange ={ 
    startDate : moment.tz(dates[firstRandomIndex < secondRandomIndex ? firstRandomIndex:secondRandomIndex],"Europe/Berlin").format(),
    endDate   : moment.tz(dates[firstRandomIndex >= secondRandomIndex ? firstRandomIndex:secondRandomIndex],"Europe/Berlin").format()
}

console.log(dateRange,'\n');

ParseDate(dates,dateRange);
OptimizedParseDate(dates,dateRange);
SecondOptimizedParseDate(dates,dateRange);

ThirdOptimizedParseDate(dates,dateRange);