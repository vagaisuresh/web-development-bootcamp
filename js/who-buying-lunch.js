var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {

    var n = Math.random();
    n = n * 5;
    n = Math.floor(n);

    return names[n] + " is going to buy lunch today!";
}