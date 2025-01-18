   function checkNumber(){
            var inputNumber = parseInt(document.getElementById("number").value);

            //check if the input is a positive number

            if(inputNumber > 0){
                //check if the input number is a divisible of 3 or 7
                if(inputNumber % 3 == 0  && inputNumber % 7 === 0)

                {
                    alert(inputNumber + "is a divisible by 3 and 7");
                }

                else if(inputNumber % 3 === 0){
                       alert(inputNumber + "is divisible by 3");
                }

                else if(inputNumber % 7 === 0){
                     alert(inputNumber + "is divisible by 7");
            }
            else{
                alert(inputNumber + "is not divisible by 3 or 7");
            }
            }
        };
