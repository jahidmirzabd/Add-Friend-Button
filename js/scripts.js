let postStatus = document.querySelector('h4');
let removeFriend = 0;

postStatus.addEventListener("click", () =>{
if (removeFriend == 0) {
    postStatus.innerHTML = "Follow";
    postStatus.style.color = "#7E8EF1";  
    removeFriend = 1;
}else{
    postStatus.innerHTML = "Unfollow";
    postStatus.style.color = "#000"; 
    removeFriend = 0;
}
});


let cardStutus = document.querySelector("img");
let iconHeart = document.querySelector("i")

cardStutus.addEventListener("dblclick", function () {
    iconHeart.style.transform = 'translate(-50%, -50%) scale(1)';
    iconHeart.style.opacity = 0.8;

    setTimeout(() => {
        iconHeart.style.transform = 'translate(-50%, -50%) scale(0)';
        iconHeart.style.opacity = 0;
    }, 2000);

});



let main = document.querySelector(".content");
let crsrCstm = document.querySelector(".crsr");

main.addEventListener("mousemove", function(dets){
    crsrCstm.style.left = dets.x+"px";
    crsrCstm.style.top = dets.y+"px";
});