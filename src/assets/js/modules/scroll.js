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

const scrollInit = () => {
  const scrollPage = document.getElementById('scroll');
  if(scrollPage) {
    scrollFuncs.scroll1_1();
    scrollFuncs.scroll1_2();
    scrollFuncs.scroll1_3();
    scrollFuncs.scroll2_1();
  }
}

module.exports = scrollInit;