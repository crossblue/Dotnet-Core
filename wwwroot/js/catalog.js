function retrieveCatalog(){
    $.ajax({

        url: "/catalog/getCatalog",
        type: "GET",
        success: function(res){
            console.warn("Server responded", res);
            //display cars on the HTML

            for(let i = 0; i < res.length; i++){

                displayCar(res[i]);
            }

        },
        error: function(detail){

            console.error(detail);
        }
    });

}

function displayCar(car){

    //get container

    var container = $("#catalog");
    
    //create template/sintx
    var sntx = 
    `<div class ="item">

    <img class="image" src = ${car.image}> 

    <h5 class ="items">Year: ${car.year}</h5>
    <h5 class ="items">Make: ${car.make}</h5>
    <h5 class ="items">Model: ${car.model}</h5> 
    <h5 class ="items">Color: ${car.color}</h5>
    <h5 class ="items">Milage: ${car.milage}</h5>  
    <h5 class ="items">MPG: ${car.mpg}</h5> 
    <h5 class ="items">Seats: ${car.seats}</h5>
    <h5 class = "items">Condition: ${car.condition}</h5>       
    <h5 class ="items">Price: $ ${car.price}</h5> 

        

       

    </div>`;

    // add template to container
    container.append(sntx);
}

function init(){

    console.log("Catalog page!");

    //get data
    retrieveCatalog();
    //hooks events
}

window.onload = init;

