// -----------------------------Hero Page JavaScript----------------------------------------

// Fetching Hero Details From Api.

fetch(
  `https://www.superheroapi.com/api.php/586069776286026/${localStorage.getItem(
    "id"
  )}`
)
  .then((response) => response.json())
  .then((data) => {

    // Add Hero Image in Html Page.
    document.getElementById("img").setAttribute("src", `${data.image.url}`);
    // Add Hero Name in Html Page
    document.getElementById("name").innerHTML = `${data.name}`;

    // Add Biography Details in Page.
    document.getElementById("full-name").append(`${data.biography["full-name"]}`);
    document.getElementById("place").append(`${data.biography["place-of-birth"]}`);
    document.getElementById("first-appearance").append(`${data.biography["first-appearance"]}`);
    document.getElementById("publisher").append(`${data.biography.publisher}`);
    document.getElementById("alignment").append(`${data.biography.alignment}`);
    

    // Add Poserstats Details in Page.
    document.getElementById("intelligence").append(`${data.powerstats.intelligence}`);
    document.getElementById("strength").append(`${data.powerstats.strength}`);
    document.getElementById("speed").append(`${data.powerstats.speed}`);
    document.getElementById("power").append(`${data.powerstats.power}`);
    document.getElementById("durability").append(`${data.powerstats.durability}`);
    document.getElementById("combat").append(`${data.powerstats.combat}`);


    // Add Appearance Details in Page.
    document.getElementById("gender").append(`${data.appearance.gender}`);
    document.getElementById("race").append(`${data.appearance.race}`);
    document.getElementById("height").append(`${data.appearance.height}`);
    document.getElementById("weight").append(`${data.appearance.weight}`);
    document.getElementById("eye-color").append(`${data.appearance["eye-color"]}`);
    document.getElementById("hair-color").append(`${data.appearance["hair-color"]}`);


    // Add Work Details in Page.
    document.getElementById("occupation").append(`${data.work.occupation}`);
    document.getElementById("base").append(`${data.work.base}`);


    // Add Connections Details in Page.
    document.getElementById("relatives").append(`${data.connections.relatives}`);
    document.getElementById("group-affiliation").append(`${data.connections["group-affiliation"]}`);
  });


