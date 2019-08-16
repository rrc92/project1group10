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

var ck;
 var rr;
$('#cocktailBtn').on('click', function(){
  $('#cocktail').text("");
    var search_textcocktail = $('#searchCocktail').val();

    var u = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search_textcocktail}`

    console.log(u)

    $.ajax({
      url: u,
      method: "GET"
    }).then(function(response) {
      var rr=response.drinks[0].strDrink;
    // var cktlname = JSON.stringify(response);
    cockimg=response.drinks[0].strDrinkThumb;
    ck= $("<img id="+"foto"+" src="+cockimg+">");
     
    $('#cocktail').append(ck,rr);
    
    });
    $("#yelploc").text("");

    bartime();
    event.preventDefault();
  });




// Bar search from Yelp API 
var bar=[];
 
function bartime(){
      var baryelp = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=bar&limit=5&location=San francisco";
      
$.ajax({
   url: baryelp,
   headers: {
    'Authorization':'Bearer a5V6v3a0l3zSAXVyVOK9yUkZyg04FGiIhQTAegpoRGZVP7lkSms1xy5KZ4H9tQhQ-0C7LmbMNdXJ6TB6sjrqijknafCpDt2KYzHkG19N3XkoRtqLXLxNlyj38gZVXXYx',
},                  
   method: 'GET',
   
   success: function(data){
   console.log(data);
      for (var i=0;i<5;i++){
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


        }
    })
  }

  // db.ref().push({

// bars:bar,
// coctail:ck,
// image:rr,
// nane:"dtdtdt"



// })
