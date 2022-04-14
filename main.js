(function(){
    const slider = {
        img: document.querySelector("img"),
        counter: 1,
        init(){
            this.slide();
        },
        slide(){
            if(this.counter !== sliderDb.length){
                this.img.setAttribute("src", `${sliderDb[this.counter].url}`);
                this.counter++;
                setTimeout(function(){
                    slider.slide();
                }, 2000)
            } else {
                this.counter = 0;
                this.slide();
            }
        }
    }
    slider.init();
})()