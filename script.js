// Write your JavaScript code here!

window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[5].name}</li>
               <li>Diameter: ${json[5].diameter}</li>
               <li>Star: ${json[5].star}</li>
               <li>Distance from Earth: ${json[5].distance}</li>
               <li>Number of Moons: ${json[5].moons}</li>
            </ol>
            <img src="${json[5].image}"></img>
         `;
      });
   });


   let form = document.getElementById("launchForm");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");

   form.addEventListener("submit", function (event) {

      if (pilotName.value === "" || copilotName.value === "" ||
         fuelLevel.value === "" || cargoMass.value === "") {

         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();

      } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) ||
         isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Make sure you enter valid information for each field");
         event.preventDefault();

      }  else if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         faultyItems.style.visibility = "visible";
         event.preventDefault();

      } else if (cargoMass.value < 10000 && fuelLevel.value < 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level too low for launch";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         event.preventDefault();
      
      } else if (cargoMass.value > 10000 && fuelLevel.value > 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "Fuel level high enough for launch";
         cargoStatus.innerHTML = "Cargo mass is over the limit for launch";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         event.preventDefault();

      } else {
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Cargo mass is over the limit for launch";
         fuelStatus.innerHTML = "Fuel level too low for launch";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         event.preventDefault();

      }

   });
   
});



