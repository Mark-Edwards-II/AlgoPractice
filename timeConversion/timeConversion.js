const timeConversion = (time12hr) => {
    let time24hr = '';
    if(time12hr[time12hr.length-2] === 'P' ) {
        let temp = '';
        temp += time12hr[0];
        temp += time12hr[1];
        time24hr += 12 + Number(temp);
        for(let i = 2; i < time12hr.length-2; i++) time24hr += time12hr[i];
        console.log(time24hr);
        return time24hr;
    }
    for(let i = 0; i < time12hr.length-2; i++) time24hr+= time12hr[i];
    console.log(time24hr);
    return time24hr;
}


timeConversion('12:05:45PM');
timeConversion('01:09:00PM');
timeConversion('12:05:45PM');
timeConversion('07:25:10AM');
timeConversion('12:50:00AM');