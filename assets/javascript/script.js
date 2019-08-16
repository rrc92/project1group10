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
    var cocktailImg = response.drinks[0].strDrinkThumb;
    var ck = $("<img id=" + "foto" + " src=" + cocktailImg + ">");

    $('#cocktail').append(ck, rr);

  });
});