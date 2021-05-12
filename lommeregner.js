var finput = ""
var sinput = ""
var numbi = true
var switchi = 0
//input function
function addtal(ele) {
    if (numbi) {
        finput = finput + ele.innerText
        document.getElementById("firstnum").innerHTML = finput
    }
    else {
        sinput = sinput + ele.innerText
        document.getElementById("secondnum").innerHTML = sinput
    }
}

//reseter lommeregneren
function sletAlt() {
    document.getElementById("result").innerHTML = "result"
    document.getElementById("firstnumb").innerHTML = "0"
    document.getElementById("secondnum").innerHTML = "0"
    numbi = true
    finput = ""
    sinput = ""
    switchi = 0
}


//baisc lommeregner functioner
function plus() {
    numbi = false
    switchi = 1
}
function minus() {
    numbi = false
    switchi = 2
}
function gange() {
    numbi = false
    switchi = 3
}
function divider() {
    numbi = false
    switchi = 4
}
function ligmed() {
    switch (switchi) {
        case 1:
            var finalresult = +finput + +sinput
            document.getElementById("result").innerHTML = finalresult
            break
        case 2:
            var finalresult = +finput - +sinput
            document.getElementById("result").innerHTML = finalresult
            break
        case 3:
            var finalresult = +finput * +sinput
            document.getElementById("result").innerHTML = finalresult
            break
        case 4:
            var finalresult = +finput / +sinput
            document.getElementById("result").innerHTML = finalresult
            break
        default:
            document.getElementById("result").innerHTML = finput
            break
    }
}
//skifter text farven til burgundy rød 
function skiftTextFarveb() {
    document.getElementById("numbers").classList.toggle("text_farven")
}
//går tilbage til den tidliger side som du var på
function goBack()
{
    window.history.back()
}