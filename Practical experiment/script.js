function findLargest() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let n3 = parseFloat(document.getElementById("num3").value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById("result").innerText = "Please enter all numbers!";
        return;
    }

    let largest = Math.max(n1, n2, n3);

    document.getElementById("result").innerText = "Largest Number: " + largest;
}