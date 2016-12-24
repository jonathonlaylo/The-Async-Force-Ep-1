/*jshint esversion: 6 */
(function(window) {
console.log('WORKING!');

  function darthListener(){
    // console.log('responseTest', this.responseText);
    let person = JSON.parse(this.responseText);
    let personName = person.name;
    // console.log('person4Name', person.name);
    document.getElementById('person4Name').innerHTML = personName;

    function homeworldListner(){
      // console.log('homeworld', this.responseText);
      let homeworld = JSON.parse(this.responseText);
      let homeworldName = homeworld.name;
      // console.log('person4HomeWorld', homeworld.name);
      document.getElementById('person4HomeWorld').innerHTML = homeworldName;
    }

    const request = new XMLHttpRequest();
    request.addEventListener('load', homeworldListner);
    request.open("GET", "http://swapi.co/api/planets/1/");
    request.send();
  }

  const request = new XMLHttpRequest();
  request.addEventListener('load', darthListener);
  request.open("GET", "http://swapi.co/api/people/4/");
  request.send();


  function hanSoloListener(){
    // console.log('responseText', this.responseText);
    let person = JSON.parse(this.responseText);
    let personName = person.name;
    // console.log('person14Name', person.name);
    document.getElementById('person14Name').innerHTML = personName;

    function speciesListener(){
      // console.log('species', this.responseText);
      let species = JSON.parse(this.responseText);
      let speciesName = species.name;
      // console.log('person14Species', species.name);
      document.getElementById('person14Species').innerHTML = speciesName;
    }

    const request2 = new XMLHttpRequest();
    request2.addEventListener('load', speciesListener);
    request2.open("GET", "http://swapi.co/api/species/1/");
    request2.send();
  }
  const request2 = new XMLHttpRequest();
  request2.addEventListener('load', hanSoloListener);
  request2.open("GET", "http://swapi.co/api/people/14/");
  request2.send();

  function filmListner(){
    let films = JSON.parse(this.responseText).results;
    // console.log('this is films',films.results);
    // console.log(films.results[1].title);

    for (var i = 0; i < films.length; i++) {
      let filmTitle = document.createElement('li');
      filmTitle.className = 'film';
      filmTitle.innerHTML = `<h2 class='films'>${films[i].title}</h2>`;
      filmList.appendChild(filmTitle);

      for(var j = 0; j < films[i].planets.length; j++){
        // let planets = JSON.parse(this.responseText).name;
        let filmPlanet = document.createElement('ul');
        filmPlanet.className = 'filmPlanet';
        filmPlanet.innerHTML = `<h3 class='planets'>${films[i].planets}</h2>`;
        // filmList.appendChild(planets);
      }
    }
  }
  const filmsReq = new XMLHttpRequest();
  filmsReq.addEventListener("load", filmListner);
  filmsReq.open("GET", "http://swapi.co/api/films/");
  filmsReq.send();

}(window));

/// ===============JON CODED THIS SHIT==========================
// (function(){
//   let personReq = new XMLHttpRequest(); // vanilla js
//   personReq.addEventListener('load', function(){
//       let personObj = JSON.parse(this.responseText);
//       console.log(personObj);
//       document.getElementById("person4Name").innerHTML = personObj.name;

//   });
//   // do another request
//    let homeworldReq = new XMLHttpRequest(); // vanilla js
//     homeworldReq.addEventListener('load', function(){

//         let homeworldObj = JSON.parse(this.responseText);
//         document.getElementById("person4HomeWorld").innerHTML = homeworldObj.name;
//         console.log(homeworldObj);

//        homeworldReq.open("GET", "http://swapi.co/api/people/14/");
//        homeworldReq.send();

//     });
//   personReq.open("GET", "http://swapi.co/api/people/14/");
//   personReq.send();

  //get films
  // let filmsReq = new XMLHttpRequest();
  // filmsReq.addEventListener('load', function(){
  //   // this happens after we get list of films
  //   let films = JSON.parse(this.responseText);
  //   console.log(films.results);

  //   for (var i = 0, len = films.results.length; i < len; i++) {
  //     let filmListItem = document.createElement('li');
  //     let filmTitleHeader = document.createElement('h2');
  //     filmTitleHeader.innerHTML = films.result[i].title;
  //     filmList.appendChild(filmListItem);
  //   }

  //   // for every film
  //   // get all planets that were listen in this film
  //   //  (new xhr request, for each film, and for each planet)
  //   //  then render each planet in uet another nester <ul> list

  // });
  // filmsReq.open('get', 'http://swapi.co/api/films/');
  // filmsReq.send();

// }());