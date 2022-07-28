const themeSlider = document.querySelector('#theme-slider');
const rootElement = document.querySelector(':root');

function themeOne() {
    rootElement.style.setProperty('--bodyBackgroundColor', 'hsl(222, 26%, 31%)');
    rootElement.style.setProperty('--keyBackgroundColor', 'hsl(30, 25%, 89%)');
    rootElement.style.setProperty('--keyColor', 'hsl(221, 14%, 31%)');
    rootElement.style.setProperty('--keyShadowColor', 'hsl(28, 16%, 65%)');
    rootElement.style.setProperty('--slider-ButtonsBackgroundColor', 'hsl(223, 31%, 20%)');
    rootElement.style.setProperty('--sliderThumb-equalBackgroundColor', 'hsl(6, 63%, 50%)');
    rootElement.style.setProperty('--equalShadowColor', 'hsl(6, 70%, 34%)');
    rootElement.style.setProperty('--equalColor', 'hsl(0, 0%, 100%)');
    rootElement.style.setProperty('--reset-DelBackgroundColor', 'hsl(225, 21%, 49%)');
    rootElement.style.setProperty('--reset-DelShadowColor', 'hsl(224, 28%, 35%)');
    rootElement.style.setProperty('--inputBackground', 'hsl(224, 36%, 15%)');
    rootElement.style.setProperty('--inputColor', 'hsl(0, 0%, 100%)');
}


function themeTwo() {
    rootElement.style.setProperty('--bodyBackgroundColor', 'hsl(0, 0%, 90%)');
    rootElement.style.setProperty('--keyBackgroundColor', 'hsl(45, 7%, 89%)');
    rootElement.style.setProperty('--keyColor', 'hsl(60, 10%, 19%)');
    rootElement.style.setProperty('--keyShadowColor', 'hsl(35, 11%, 61%)');
    rootElement.style.setProperty('--slider-ButtonsBackgroundColor', 'hsl(0, 5%, 81%)');
    rootElement.style.setProperty('--sliderThumb-equalBackgroundColor', 'hsl(25, 98%, 40%)');
    rootElement.style.setProperty('--equalShadowColor', 'hsl(25, 99%, 27%)');
    rootElement.style.setProperty('--equalColor', 'hsl(0, 0%, 100%)');
    rootElement.style.setProperty('--reset-DelBackgroundColor', 'hsl(225, 21%, 49%)');
    rootElement.style.setProperty('--reset-DelShadowColor', 'hsl(224, 28%, 35%)');
    rootElement.style.setProperty('--inputBackground', 'hsl(0, 0%, 93%)');
    rootElement.style.setProperty('--inputColor', 'hsl(60, 10%, 19%)');
}

function themeThree() {
    rootElement.style.setProperty('--bodyBackgroundColor', 'hsl(268, 75%, 9%)');
    rootElement.style.setProperty('--keyBackgroundColor', 'hsl(281, 89%, 26%)');
    rootElement.style.setProperty('--keyColor', 'hsl(52, 100%, 62%)');
    rootElement.style.setProperty('--keyShadowColor', 'hsl(285, 91%, 52%)');
    rootElement.style.setProperty('--slider-ButtonsBackgroundColor', 'hsl(268, 71%, 12%)');
    rootElement.style.setProperty('--sliderThumb-equalBackgroundColor', 'hsl(176, 100%, 44%)');
    rootElement.style.setProperty('--equalShadowColor', 'hsl(177, 92%, 70%)');
    rootElement.style.setProperty('--equalColor', 'hsl(198, 20%, 13%)');
    rootElement.style.setProperty('--reset-DelBackgroundColor', 'hsl(268, 47%, 21%)');
    rootElement.style.setProperty('--reset-DelShadowColor', 'hsl(290, 70%, 36%)');
    rootElement.style.setProperty('--inputBackground', 'hsl(268, 71%, 12%)');
    rootElement.style.setProperty('--inputColor', 'hsl(52, 100%, 62%)');
}


themeSlider.addEventListener('click', function() {
    localStorage.setItem('preference', this.value);
    console.log(localStorage.getItem('preference'))
    if (this.value === '1') {
        themeOne();
    } else if (this.value === '2') {
        themeTwo();
    } else if (this.value === '3') {
        themeThree();
    }
})

window.addEventListener('load', function() {
    themeSlider.value = localStorage.getItem('preference');
    console.log(localStorage.getItem('preference'))
    if (localStorage.getItem('preference') === '1') {
        themeOne();
    } else if (localStorage.getItem('preference') === '2') {
        themeTwo();
    } else if (localStorage.getItem('preference') === '3') {
        themeThree();
    }
})