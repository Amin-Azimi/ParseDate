const createDates=(datesCount,startDate) =>{
    let dates = [];
    for(let i=0;i < datesCount;i++){
        dates.push(startDate.toISOString());
        startDate =new Date( startDate.setHours(startDate.getHours()+1));
    }
    return dates;
}

export default createDates;