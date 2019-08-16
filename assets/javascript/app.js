// Cocktail API from cocktail DB
 
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
    var cockimg=response.drinks[0].strDrinkThumb;
    var ck= $("<img id="+"foto"+" src="+cockimg+">");
     
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
 
 
  
 


