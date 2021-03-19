
const timeConversion = (s) => {
    let hh = s[0] += s[1];
    let mm = s[3] += s[4];
    let ss = s[6] += s[7];
    let ampm = s[8] += s[9];
    if(ampm === 'PM') {
        if(hh == '12') {
            return hh+':'+ mm +':'+ ss;
        }
        else {
            return String(12+ Number(hh)) + ':' + mm + ':' + ss;
        }
    }
    else if(ampm === 'AM') {
        if(hh == '12') {
            return '00:'+ mm +':'+ ss;
        }
        else {
            return hh+':'+mm+':'+ss;
        }
    }
}


timeConversion('12:05:45PM');
timeConversion('01:09:53PM');
timeConversion('12:05:45PM');
timeConversion('07:25:10AM');
timeConversion('12:50:00AM');