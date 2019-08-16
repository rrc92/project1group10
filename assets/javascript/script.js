$('#beerBtn').on('click', function () {
  event.preventDefault();

  var beerSearch = {
    "api-key": 'a8f6c358f10c7a5db840633a6ea304f9',
  }

  var url = "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/"
  var key = "key=a8f6c358f10c7a5db840633a6ea304f9"
  var endpoint = "beer/WHQisc/ingredients/?"


  url = "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/" + $.param(beerSearch)

  $.ajax({
    url: url + endpoint + key,
    method: "GET"
  }).then(function (response) {
    console.log(response)
  })

});


// ================================================================================

var firebaseConfig = {
  apiKey: "AIzaSyCuCG3hXXQViilWcp1iUDTqVm_A3kadoB0",
  authDomain: "buzztime-97cbd.firebaseapp.com",
  databaseURL: "https://buzztime-97cbd.firebaseio.com",
  projectId: "buzztime-97cbd",
  storageBucket: "",
  messagingSenderId: "756019227674",
  appId: "1:756019227674:web:c2886c7b74a5e8d7"
};


var clickCounter = 0;
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$(".btn-primary").on("click", function () {
  clickCounter++;
  $("#number").text(clickCounter);
  database.ref("click_counter").push({
    name: "click_counter"
  });


});


// Cocktail API from cocktail DB

$('#cocktailBtn').on('click', function (event) {
  event.preventDefault();

  $('#cocktail').text("");
  var search_textcocktail = $('#searchCocktail').val();

  var u = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search_textcocktail}`

  console.log(u)

  $.ajax({
    url: u,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    var rr = response.drinks[0].strDrink;
    // var cktlname = JSON.stringify(response);
    var ctimg = response.drinks[0].strDrinkThumb;
    var ck = $("<img id=" + "foto" + " src=" + ctimg + ">");

    $('#cocktail').append(ck, rr);

  });
  $("#yelploc").text(ctimg);

  bartime();
});



// Bar search from Yelp API 
var bar = [];

function bartime() {
  var baryelp = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=bar&limit=5&location=San francisco";

  $.ajax({
    url: baryelp,
    headers: {
      'Authorization': 'Bearer a5V6v3a0l3zSAXVyVOK9yUkZyg04FGiIhQTAegpoRGZVP7lkSms1xy5KZ4H9tQhQ-0C7LmbMNdXJ6TB6sjrqijknafCpDt2KYzHkG19N3XkoRtqLXLxNlyj38gZVXXYx',
    },                  //change api key, sign up on yelp to retrieve one //
    method: 'GET',

    success: function (data) {
      console.log(data);
      for (var i = 0; i < 5; i++) {
        bar.push(data.businesses[i].name);
        bar.push(data.businesses[i].location.address1);

      }

      $("#yelploc").text(bar);


    }
  });
}

function usertime(){
  var userIPtime = "http://worldtimeapi.org/api/ip"
  console.log(userIPtime)

}

var lTime = []
function countdown() {
      var localdatetime = "http://worldtimeapi.org/api/ip";

      $.ajax({
        url: localdatetime,
        method: 'GET',

        success: function (data) {
          console.log(data);

          console.log(data.datetime.substring(11,19));


        }-
    })
  }