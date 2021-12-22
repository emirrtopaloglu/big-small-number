const score = document.querySelector(".score");
const number = document.querySelector(".number");
const btn = document.querySelectorAll(".btn");
const small = document.querySelector(".small > .btn");
const big = document.querySelector(".big > .btn");

var point = 0;

function randomNumber() {
    random = Math.floor(Math.random() * 10);
    return random;
}

window.addEventListener('load', () => {
    number.innerText = randomNumber();

    btn.forEach(buton => {
        buton.addEventListener('click', () => {

            let oldnumber = number.innerText;
            let newnumber = randomNumber();

            switch (buton.innerText) {
                case 'Small':
                    if (oldnumber > newnumber) {
                        point++;
                        score.innerText = point;
                        number.innerText = newnumber;
                        console.log("Old Number: " + oldnumber);
                        console.log("New Number: " + newnumber);
                        console.log("You Win!");
                        console.log("Point: " + point);
                        console.log("------------------------------------");
                    } else {
                        point--;
                        score.innerText = point;
                        number.innerText = newnumber;
                        console.log("Old Number: " + oldnumber);
                        console.log("New Number: " + newnumber);
                        console.log("You Lose!");
                        console.log("Point: " + point);
                        console.log("------------------------------------");
                    }
                break;
                case 'Big':
                    if (oldnumber < newnumber) {
                        point++;
                        score.innerText = point;
                        number.innerText = newnumber;
                        console.log("Old Number: " + oldnumber);
                        console.log("New Number: " + newnumber);
                        console.log("You Win!");
                        console.log("Point: " + point);
                        console.log("------------------------------------");
                    } else {
                        point--;
                        score.innerText = point;
                        number.innerText = newnumber;
                        console.log("Old Number: " + oldnumber);
                        console.log("New Number: " + newnumber);
                        console.log("You Lose!");
                        console.log("Point: " + point);
                        console.log("------------------------------------");
                    }
                break;
                default:
                    console.log('error');
                break;
            }

        });
    });
});