var input=document.querySelector('.city_name');
var main=document.getElementById('name');
var temp=document.getElementById('temp');
var clouds=document.getElementById('clouds');
var desc=document.getElementById('desc');
var humid=document.getElementById('humid');
var submitBtn=document.getElementById('btn');

submitBtn.addEventListener('click',function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=e74c67c1a24145a0500c3dacc5f7a75d')
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue=data['name'];
        var descValue=data['weather'][0]['description'];
        var cloudsValue=data['clouds']['all'];
        var humidValue=data['main']['humidity'];
        // console.log(tempValue+" "+nameValue+" "+humidValue);

        main.innerHTML = nameValue;
        temp.innerHTML = "Temperature : "+tempValue;
        clouds.innerHTML= "Clouds : "+cloudsValue;
        humid.innerHTML="Humidity : "+humidValue;
        desc.innerHTML = "Description : "+descValue;
    })
    .catch(err => alert("Entered Wrong City!!"));
})