// плавная прокрутка страницы вверх при клике на кнопку
document.getElementById("top").onclick = function scrollTop(){
    window.scrollBy(0,-40); // -40 обозначает скорость поднятия вверх(её можно изменить)
    if(pageYOffset > 0){
        requestAnimationFrame(scrollTop);
    }
}
// появление кнопки и её исчезание
window.onscroll = function scrollShowHide(){
    var scrolled = pageYOffset || document.getElementById.scrollTop;
    var topButton = document.getElementById("top");
    if(scrolled > 100){ // 100 отвечает за кол-во пикселей когда будет происходить действие
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    }
}