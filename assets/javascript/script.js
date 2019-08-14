$('#beerBtn').on('click', function(){
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
        }).then( function(response){
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


var clickCounter=0;
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

     $(".btn-primary").on("click",function(){
        clickCounter++;
        $("#number").text(clickCounter);
        database.ref("click_counter").push({
        name:"click_counter"
      });


     });
      

      

         
    

  
