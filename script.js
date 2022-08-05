createBubble = () => {
    const div = document.querySelector('div');
    const createElement = document.createElement('span');
    var size = 50+ (Math.random() * 50);

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    div.appendChild(createElement);
    setTimeout(() =>{
        createElement.remove();
    }, 4000);

}
setInterval(createBubble,400)