const text = document.querySelector(".newsText").children;
    const tInputTimer = 10, tOutTimer = 8;
    let ind = 0;
    textLength = text.length;

    function animation() {
        for(let i = 0; i < textLength; i++)
            text[i].classList.remove("text-in","text-out");

        text[ind].classList.add("text-in");

        setTimeout(function(){
            text[ind].classList.add("text-out");
            },tOutTimer);

        if (ind === textLength - 1)
            ind=0;
        else ind++;


        setTimeout(animation,15000);
    }

    window.onload = animation;