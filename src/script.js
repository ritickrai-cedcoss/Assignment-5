function healthReport() {
  var fname = document.getElementById("name").value;
  var inputAge = document.getElementById("age").value;
  var mass = document.getElementById("weight").value;

  check(fname, inputAge, mass);
}

function check(fname, inputAge, mass) {
  if (fname && inputAge && mass != null) {
    filter(fname, inputAge, mass);
  } else {
    document.getElementById("report").innerHTML =
      "ERROR OCCURRED !!! Please re-check the input field & complete all the details";
  }
}
function filter(fname, inputAge, mass) {
  if (inputAge >= 5 && inputAge <= 7) {
    //checking for age 5-7
    maxWeight = 20;
    if (mass >= 15 && mass <= 20) {
      perfect(fname, inputAge, mass);
    } else {
      if (mass > 20) {
        overWeight(fname, inputAge, mass, maxWeight);
      } else {
        underweight(fname, inputAge, mass, maxWeight);
      }
    }
  } else {
    //checking for age 8-10
    maxWeight = 25;
    if (inputAge >= 8 && inputAge <= 10) {
      if (mass >= 21 && mass <= 25) {
        perfect(fname, inputAge, mass);
      } else {
        if (mass > 25) {
          overWeight(fname, inputAge, mass, maxWeight);
        } else {
          underweight(fname, inputAge, mass, maxWeight);
        }
      }
    } else {
      //checking for age 11-15
      maxWeight = 30;
      if (inputAge >= 11 && inputAge <= 15) {
        if (mass >= 26 && mass <= 30) {
          perfect(fname, inputAge, mass);
        } else {
          if (mass > 30) {
            overWeight(fname, inputAge, mass, maxWeight);
          } else {
            underweight(fname, inputAge, mass, maxWeight);
          }
        }
      } else {
        //checking for age 16-20
        maxWeight = 40;
        if (inputAge >= 16 && inputAge <= 20) {
          if (mass >= 31 && mass <= 40) {
            perfect(fname, inputAge, mass);
          } else {
            if (mass > 40) {
              overWeight(fname, inputAge, mass, maxWeight);
            } else {
              underweight(fname, inputAge, mass, maxWeight);
            }
          }
        }
        else{
            if(inputAge<5 || inputAge>20)
            {
                document.getElementById('report').innerHTML="Your age is out of range. Please choose between 5 -20."
            }
        }
      }
    }
  }
}

function perfect(fname, inputAge, mass) {
  document.getElementById("report").innerHTML =
    "Hello " + fname + " !!! Your weight is perfect.";
}

function underweight(fname, inputAge, mass, maxWeight) {
  document.getElementById("report").innerHTML =
    "Hello " +
    fname +
    " !!! Your weight is less than the recommended value of " +
    maxWeight +
    " at an age of " +
    inputAge;
}

function overWeight(fname, inputAge, mass, maxWeight) {
  document.getElementById("report").innerHTML =
    "Hello " +
    fname +
    " !!! Your weight is greater than the recommended value of " +
    maxWeight +
    " at an age of " +
    inputAge;
}
