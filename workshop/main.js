// window.console.log("hello");

var a = "Marek";
let b = "2";
const c = 3.12;
var isNice = true;

function printHello() {
    var a = "hello";
    console.log(a);
}

//c = 5;

// window.console.log(a);
// window.console.log(b);
// window.console.log(c);

// printHello();

// console.log(a);

a = 12;

var tab = [a, "banana", "pear"];

// console.log(tab);

var tansakcja = {
    name: "marek",
    email: "marek@home.pl",
    amount: 12,
    description: "kwiaty"
};

var transacionList = [
    {
        name: "marek",
        email: "marek@home.pl",
        amount: 12,
        description: "kwiaty"
    },
    {
        name: "marek",
        email: "marek@home.pl",
        amount: 30,
        description: "obiad"
    },
    {
        name: "marek",
        email: "marek@home.pl",
        amount: 120,
        description: "buty"
    }

]

//console.log(transacionList.length);

for (var i = 0; i < transacionList.length; i++) {
    //console.log(transacionList[i].amount);
    var isGreaterThan20 = (transacionList[i].amount > 20);

    if (isGreaterThan20) {
        console.log(i + " duza transakcja");
    }
    else {
        console.log(i + " mala transakcja");
    }
}

console.log(i);

var trans = transacionList[0].amount;

if (trans > 20) {
    console.log("duza transakcja");
}
else {
    console.log("mala transakcja");
}


