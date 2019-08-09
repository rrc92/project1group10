
// Cocktail API from cocktail DB

var search_text = "margarita"
var url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search_text}`

    $.ajax({
  url: url,
  method: "GET"
}).then(function (response) {
  console.log(response)
})


// Beer API from brewery DB

var url = "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/"
    var key = "key=a8f6c358f10c7a5db840633a6ea304f9"
    var endpoint = "beer/random/?"
$.ajax({
url: url + endpoint + key,
method: "GET"
}).then( function(response){
    console.log(response)
})