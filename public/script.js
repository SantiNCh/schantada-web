let themeDots = document.getElementsByClassName('theme-dot');
console.log(themeDots);

for (var i=0; themeDots.length > i; i++){
    console.log(i);
    themeDots[i].addEventListener('click', () =>{
        console.log('Option clicked');
    });
}