const rating = document.getElementsByTagName('h3');
const button = document.querySelector('button');

let click_active = "";

console.log(document.querySelector('.container_page2').style.display = 'none')

function clicked(e){

    document.getElementById('alert').style.display = 'none';

    var target = e.target.id;
    console.log(target);

    if(click_active !== "" && click_active !== target){
        document.getElementById(click_active).style.backgroundColor = "hsl(212, 12%, 25%)";
        document.getElementById(click_active).style.color = "white";

        click_active = target;
        
        document.getElementById(click_active).style.backgroundColor = "white";
        document.getElementById(click_active).style.color = "black";     
    }
    else if(click_active === ""){
        click_active = target;
        
        document.getElementById(click_active).style.backgroundColor = "white";
        document.getElementById(click_active).style.color = "black";
    }
    
}


// fix: hover is not working after clicking a element once.


for (var i = 0; i < rating.length; i++) {
    rating[i].addEventListener('click',clicked);
}


button.addEventListener("click", page_2);

function page_2(){

    if(click_active === ""){
        document.getElementById('alert').style.display = 'block';
    }
    else{
        document.querySelector('.container').style.display = 'none';

        document.getElementById('rated').innerHTML = `You selected ${click_active} out of 5`;
    
        document.querySelector('.container_page2').style.display = 'flex';
    }

}
