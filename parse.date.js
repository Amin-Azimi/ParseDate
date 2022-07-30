import moment from 'moment-timezone'; 


const createDates=(datesCount,startDate) =>{
    let dates = [];
    for(let i=0;i < datesCount;i++){
        dates.push(startDate.toISOString());
        startDate =new Date( startDate.setHours(startDate.getHours()+1));
    }
    return dates;
}


const ParseDate =()=>{
    const startDate = new Date();
    startDate.setDate(startDate.getUTCDate()-209);
    const dates = createDates(50000,startDate);
    const firstRandomIndex = Math.floor( Math.random()*(dates.length-1));
    const secondRandomIndex = Math.floor(Math.random()*(dates.length-1));
    const dateRange ={ 
        startDate : moment.tz(dates[firstRandomIndex < secondRandomIndex ? firstRandomIndex:secondRandomIndex],"Europe/Berlin").format(),
        endDate   : moment.tz(dates[firstRandomIndex >= secondRandomIndex ? firstRandomIndex:secondRandomIndex],"Europe/Berlin").format()
    }
    console.log(dateRange,dates[firstRandomIndex < secondRandomIndex ? firstRandomIndex:secondRandomIndex],
        dates[firstRandomIndex >= secondRandomIndex ? firstRandomIndex:secondRandomIndex]);

    console.time("Selecting dates in range take long:");

    const selectedDateBetweenDateRange = dates.map(item => moment.tz(item,"Europe/Berlin"))
    .filter( item => item >= moment(dateRange.startDate) && item < moment(dateRange.endDate ));
    console.log(selectedDateBetweenDateRange.length,selectedDateBetweenDateRange[0],
        selectedDateBetweenDateRange[selectedDateBetweenDateRange.length-1]);
    console.timeEnd("Selecting dates in range take long:");
    
}

export default ParseDate;