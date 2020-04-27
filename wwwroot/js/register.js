function Car(make, model, year, color, price, milage, mpg, image, seats, condition){

    this.make = make;
    this.model = model;
    this.year = year;
    this.color =color;
    this.price = price;
    this.milage = milage;
    this.mpg = mpg;
    this.image= image;
    this.seats = seats;
    this.condition = condition;
}

function registerCar(){

    //Get Variables
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var year = $("#txtYear").val();
    var color = $("#txtColor").val();
    var price = $("#txtPrice").val();
    var milage = $("#txtMilage").val();
    var condition = $("#txtCondition").val();
    var image = $("#Image").val();
    var seats = $("#txtSeats").val();
    var mpg = $("#txtMPG").val();

    var priceNum = 0;
    if(price){

        priceNum = parseFloat(price);
    }

    var yearNum = 0;
    if(year){

      yearNum = parseInt(year);
    }

    var seatsNum = 0;
    if(seats){

        seatsNum = parseInt(seats);
    }

    var mpgNum = 0;
    if(mpg){
        mpgNum = parseInt(mpgNum);
    }
    var milageNum = 0;
    if(milage){
        milageNum= parseInt(milage);
    }

    //create object

    var car = new Car(make, model, yearNum, color, priceNum, milageNum, mpgNum, image, seatsNum, condition);
    console.log(car);

    //send the object on AJAX req
    $.ajax({

        url: "/Catalog/savecar",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(car),
        success: function(res){
            console.log("Server responded", res);

        },
        error: function(detail){

            console.log("Error on request", detail);
        }
    });
}

function init(){
console.log("Register Page!")

$("#btnSave").click(registerCar);

}

window.onload = init;