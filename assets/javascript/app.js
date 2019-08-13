// Cocktail API from cocktail DB

$('#cocktailBtn').on('click', function(){
    var search_text = $('#searchCocktail').val();

    var u = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search_text}`

    console.log(u)

    $.ajax({
      url: u,
      method: "GET"
    }).then(function(response) {

      var myJSON = JSON.stringify(response.drinks);
      $('#cocktail').text(myJSON);
    });

    event.preventDefault();
  });



// // Beer API from brewery DB

// var url = "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/"
//     var key = "key=a8f6c358f10c7a5db840633a6ea304f9"
//     var endpoint = "beers/?"
// $.ajax({
// url: url + endpoint + key,
// method: "GET"
// }).then( function(response){
//     console.log(response.data)})
