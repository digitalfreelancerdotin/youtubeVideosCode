function test2(){
	Logger.log(nDaysPriorToGivenDate("9/1/2021 16:00:00", 7))
}

function nDaysPriorToGivenDate(scheduledDate, numberOfDaysPrior){
	eval(UrlFetchApp.fetch('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js').getContentText());
	var schdate = moment(scheduledDate).format('LL');
	var targetDate = moment(schdate).subtract(numberOfDaysPrior,'d').format('YYYY-MM-DD');
	return targetDate;
}