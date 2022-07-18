const submitbtn = document.getElementById('submitbtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp_real_val');
const datahide=document.querySelector('.middle_layer');

const today_date=document.getElementById('today_date');

/** Date and time Setting */
const tempStatus="Clouds";

        const getCurrentDay=()=>{
            var weekday=new Array(7);
            weekday[0]="sunday";
            weekday[1]="Monday";
            weekday[2]="Tuesday";
            weekday[3]="Wednesday";
            weekday[4]="Thursday";
            weekday[5]="Friday";
            weekday[6]="Saturday";

        let currentTime=new Date();
        let days=weekday[currentTime.getDay()];
        const day=document.getElementById('day');
        day.innerText=days;

        };
        var Day=getCurrentDay();

        /**Date Setting */
        const getCurrentTime=()=>{
            var months= ['Jan',
             'Feb', 
             'Mar', 
             'Apr',
              'May', 
              'June', 
            'July', 
            'Aug', 
            'Sept',
            'Oct', 
            'Nov',
             'Dec'];
            var now=new Date();
            var month=months[now.getMonth()];
            var date=now.getDate();
            let hours=now.getHours();
            let mins=now.getMinutes();
            let periods ="AM";
            if(hours>11){
                periods="PM";
                if(hours>12){
                    hours -=12;
                }
            }
            if(mins<10){
                mins="0"+mins;
            }
            // console.log(month+"/"+day);
            return `${month}${date} | ${hours}:${mins}${periods}`;
        }
        today_date.innerHTML= getCurrentTime();



     
        
        








const getInfo = async(event) => {
    event.preventDefault();
    var cityVal = cityName.value;
    console.log(cityVal);
    if (cityVal === "") {
        city_name.innerText = "Please write the name before you search";
        datahide.classList.add('data_hide');
 
    } 
 
 else {
     try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=43065fad6346715ed2358a46c980c7d1`;
           const response=await fetch(url);
           const data=await response.json();
           //    Array of an object
           
           const arrData=[data];
           city_name.innerText=`${arrData[0].name}${arrData[0].sys.country}`;
           temp.innerText=arrData[0].main.temp;
        //    temp_status=arrData[0].weather[0].main;

           const tempMood=arrData[0].weather[0].main;
           if(tempMood=='Clear'){
            temp_status.innerHTML="<i class='fas fa-sun'  style='color:#eccc68';></i>"
           }else if(tempMood=='Clouds'){
            temp_status.innerHTML="<i class='fas fa-cloud'  style='color:#f1f2f6';></i>"
           }else if(tempMood=='Rain'){
            temp_status.innerHTML="<i class='fas fa-rain'  style='color:#a4b0be';></i>"
           }else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68';></i>"

           }
           datahide.classList.remove('data_hide');
        
        } catch {
            city_name.innerText = `plz enter the cityname properly`
            datahide.classList.add('data_hide');
        }
    }
}
submitbtn.addEventListener('click', getInfo);
