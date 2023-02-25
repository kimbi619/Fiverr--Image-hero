
const typeWriter = document.querySelector('#typeWriter')
const outline = document.querySelector('#outline')

window.addEventListener('load', () => {
        setTimeout(() => {
                outline.classList.add('animateOutlineHeading')
        }, 500);
})



class Typewriter{
    constructor(txtElement, text, wait = 3000){
        this.txtElement = txtElement;
        this.text = text;
        this.txt ='';
        this.wait = parseInt(wait, 10);
        this.type()
        this.isDeleting = false;
    }

    type(){
        const fullTxt = this.text;

        let typeSpeed = 300;
        if(this.isDeleting){
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            typeSpeed /=2;
        }else{
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.txtElement.innerHTML = `<span class= "border">${this.txt}</span>`
        if(!this.isDeleting && this.txt.length === this.text.length){
            this.isDeleting = true;
            typeSpeed = this.wait;
        }else if(this.txt.length === 0){
            this.isDeleting = false;
            typeSpeed = 4000
            this.randomPosition();
        }
        setTimeout(()=> this.type(),typeSpeed);
    }
    randomPosition(){
        const random5 = document.querySelector('.type-writer5');
        random5.style.cssText = 'left:'+Math.random()*65+'%;' + 'top:' + Math.random()*180+'px';
    }
}



document.addEventListener('DOMContentLoaded',()=>{
    const txtElement = document.querySelector('.type-writer5');
    const text = txtElement.getAttribute('data-text');
    const wait = txtElement.getAttribute('data-wait');
    new Typewriter(txtElement, text,wait);
})