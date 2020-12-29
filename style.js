var buttons = document.getElementsByClassName('done');
var title = document.getElementsByClassName('card-title');
var desc = document.getElementsByClassName('card-text');
var footer = document.getElementsByClassName('card-footer');

var clicked = false;
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function() { //added clicked event listener 
       // console.log(desc);
        //console.log(desc[0] , i);
        let string1 = desc[0].innerText;
        let string2 = title[i].innerText;
        if (!clicked) { // when clicked to the checkbox opacity and strict will be addes to the string
            desc[i].style.opacity = '0.5';
            title[i].style.opacity = '0.5';
            let str1 = desc[i].innerText;
            let str2 = title[i].innerText;
            let result1 = str1.strike();
            let result2 = str2.strike();
            desc[i].innerHTML = result1;
            title[i].innerHTML = result2;
            footer[i].innerText = "TASK COMPLETED";
            clicked = true;
        } else {
            desc[i].innerHTML = string1; //when again clicked to the checkbox opacity and strict willbe removed 
            title[i].innerHTML = string2;
            desc[i].style.opacity = '1';
            title[i].style.opacity = '1';
            footer[i].innerText="TASK";
            clicked = false;
        }

    });
}
