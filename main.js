const api = "http://www.geoplugin.net/json.gp";
const ip_placeholder = document.getElementById("ip_address");
const city_placeholder = document.getElementById("city");
const country_placeholder = document.getElementById("country");
const dt_placeholder = document.getElementById("dt");

const ipGrabber = async () => {
    try{
        let now = new Date();
        var isoDateTime = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString();
        let response = await fetch(api);
        let json =  await response.json();
        ip_placeholder.textContent = json.geoplugin_request;
        city_placeholder.textContent = json.geoplugin_city;
        country_placeholder.textContent = json.geoplugin_countryName;
        dt_placeholder.textContent = isoDateTime;
    }catch(e){
        console.log(`Error: ${e}`)
    }    
}
ipGrabber()
setInterval(ipGrabber, 1000)