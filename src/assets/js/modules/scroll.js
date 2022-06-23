const scrollFuncs = {};

const windowHeight = window.innerHeight;

scrollFuncs.scroll1_1 = () => {
  const fadePics = document.querySelectorAll('.js-fadePic1');

  window.addEventListener('scroll', () => {
    for(let i = 0;i < fadePics.length;i++) {
      const fadePicY = fadePics[i].getBoundingClientRect().top;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const offset = fadePicY + scrollY;
      if(scrollY > offset - windowHeight * 0.9){
        fadePics[i].classList.add('is-fade')
      }  
    }
  })
}

scrollFuncs.scroll1_2 = () => {
  const fadePics = document.querySelectorAll('.js-fadePic2');

  window.addEventListener('scroll', () => {
    for(let i = 0;i < fadePics.length;i++) {
      const fadePicY = fadePics[i].getBoundingClientRect().top;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const offset = fadePicY + scrollY;
      if(scrollY > offset - windowHeight * 0.7){
        fadePics[i].classList.add('is-show')
      }  
    }
  })
}

scrollFuncs.scroll1_3 = () => {
  const fadePics = document.querySelectorAll('.js-fadePic3');

  window.addEventListener('scroll', () => {
    for(let i = 0;i < fadePics.length;i++) {
      const fadePicY = fadePics[i].getBoundingClientRect().top;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const offset = fadePicY + scrollY;
      if(scrollY > offset - windowHeight * 0.9){
        fadePics[i].classList.add('is-fade')
      }  
    }
  })
}

scrollFuncs.scroll2_1 = () => {
  const fadeTxt = document.querySelectorAll('.js-fadeTxt1');

  window.addEventListener('scroll', () => {
    for(let i = 0;i < fadeTxt.length;i++) {
      const fadeTxtY = fadeTxt[i].getBoundingClientRect().top;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const offset = fadeTxtY + scrollY;
      if(scrollY > offset - windowHeight * 0.9){
        fadeTxt[i].classList.add('is-fade')
      }  
    }
  })
}

scrollFuncs.scroll2_2 = () => {
  const fadeTxt = document.querySelectorAll('.js-fadeTxt2');
  const scaleWeight = 0.007;

  window.addEventListener('scroll', () => {
    for(let i = 0;i < fadeTxt.length;i++) {
      const fadeTxtY = fadeTxt[i].getBoundingClientRect().top;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const offset = fadeTxtY + scrollY;
      if(scrollY > offset - windowHeight){
        fadeTxt[i].style.transform = `scale(${1 + scaleWeight * (windowHeight - fadeTxtY)})`
      }  
    }
  })
}

scrollFuncs.scroll3_1 = () => {
  const fadeBg = document.querySelectorAll('.js-fadeBg');

  window.addEventListener('scroll', () => {
    for(let i = 0;i < fadeBg.length;i++) {
      const fadeBgY = fadeBg[i].getBoundingClientRect().top;
      const fadeBgH = fadeBg[i].clientHeight;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const offset = fadeBgY + scrollY;
      if(scrollY > offset - windowHeight * 0.5 && scrollY < offset + fadeBgH - windowHeight * 0.5){
        fadeBg[i].classList.add('is-fade');
      } else {
        fadeBg[i].classList.remove('is-fade');
      }
    }
  })
}

const scrollInit = () => {
  const scrollPage = document.getElementById('scroll');
  if(scrollPage) {
    scrollFuncs.scroll1_1();
    scrollFuncs.scroll1_2();
    scrollFuncs.scroll1_3();
    scrollFuncs.scroll2_1();
    scrollFuncs.scroll2_2();
    scrollFuncs.scroll3_1();
  }
}

module.exports = scrollInit;