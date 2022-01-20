function getElement(id) {
  return document.getElementById(id);
}

fetch("https://weatherapi-com.p.rapidapi.com/history.json?q=London&dt=2022-01-19&lang=en", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "9683bbb1a2mshfb8d32ce50562fdp110573jsn1c75e3c78012"
      }
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);


getElement('name').innerHTML = 'Name: ' + location.name;
getElement('country').innerHTML = 'Country: ' + location.country;
getElement('region').innerHTML = 'Region: ' + location.region;
getElement('localtime').innerHTML = 'localtime: ' + location.localtime;

    })
    .catch(err => {
      console.error(err);
    });
    


    