let weather={
    "apikey": "88ad9dd1c596ff43ae447e9856597de7",
    fetchweather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q= " 
        + city
        + "&units=metric&appid="
        + this.apikey).then((Response)=>Response.json()).then((data)=>this.displayweather(data));

    },
    displayweather : function(data){
        const { name }=data;
        const { icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const{speed}=data.wind;
        document.querySelector(".city").innerText="weather in "+name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".humidity").innerText="humidity : "+humidity+"%";
        document.querySelector(".wind").innerText="wind speed : "+speed+" km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/weekly?water/?"+name+"')"

    },
    search: function(){
       this.fetchweather(document.querySelector(".search-bar").value); 
    }
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});

weather.fetchweather("oran");