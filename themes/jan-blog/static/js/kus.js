var pygs=["abap", "algol", "algol_nu", "arduino", "autumn", "borland", "bw", "colorful", "default", "emacs", "friendly", "fruity", "igor", "lovelace", "manni", "monokai", "murphy", "native", "paraiso-dark", "paraiso-light", "pastie", "perldoc", "rainbow_dash", "rrt", "tango", "trac", "vim", "vs", "xcode"]

$(document).ready(function () {

    $('#styleChanger').click(function () {
        nextElement()
    })

});

var myArray = pygs;
var myIndex = 1;
var print = document.getElementById('styleChanger');

print.innerHTML = myArray[0]; //Print first value of array right away.

function nextElement() {
   print.innerHTML = myArray[myIndex];
   myIndex = (myIndex+1)%(myArray.length);
   p = $('#pygment');
   p[0].href="../../../theme/css/pygments/" + myArray[myIndex] + ".css";
}

<script>
    var pygs = {{ PYG }};
    $(document).ready(function () {

    $('#styleChanger').click(function () {
        nextElement()
    })

});

var myIndex = 0;
var print = document.getElementById('styleChanger');

print.innerHTML = pygs[0]; //Print first value of array right away.

function nextElement() {
   myIndex = (myIndex+1)%(pygs.length);
   print.innerHTML = pygs[myIndex];
   p = $('#pygment');
   p[0].href="../../../theme/pygments/" + pygs[myIndex] + ".css";
}

</script>