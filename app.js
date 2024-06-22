//1
console.log('Let\'s get ready to party with jQuery!');
//2
$('img').addClass('image-center');
//3
$('p').last().remove();
//4
const randomNumber = Math. floor(Math. random() * 100) + 1
$('title').css('font-size',randomNumber)
var fontSize = randomNumber + 'px'; 
$('h1').css('font-size', fontSize);
//5
$('ol').append('<li>I\'m a list item!</li>');
//6
$('ol').remove()
$('aside').append('<p>Apologize for the list\’s existence!!</p>');
//7
$('input').on('input', function(){
    let numVal = $(this).val();
    let stringVal = String(numVal);

    if (stringVal.length >= 3) {
        let a = stringVal[0];
        let b = stringVal[1];
        let c = stringVal[2];

        
        let num1 = Number(a) * 25;
        let num2 = Number(b) * 25;
        let num3 = Number(c) * 25;

       
        $('body').css('background-color', `rgb(${num1}, ${num2}, ${num3})`);
    }})
    //8
    $(document).ready(function() {
        $('img').on('click', function() {
            $(this).remove();
        });
    });

