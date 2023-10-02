// my js test 1
// this is a simple program to cal the life someone has left in weeks
function life_in_weeks(age){
    var years_remaining = 90-age;
    var months_remaining = (years_remaining*12)/1
    var week_remaining = (months_remaining*4)/1
    var days_remining = (week_remaining*7)/1
    console.log('you have '+ years_remaining +' years remaining,' + months_remaining + 
                ' months remaining' + week_remaining + ' weeks remaining and '+ days_remining 
                + 'days remaining.')

}