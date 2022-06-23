const loaderFuncs = {};
const body = document.querySelector('body');

loaderFuncs.loader1 = () => {
  const loader1 = document.getElementById('js-loader1');
  const loader1Logo = document.getElementById('js-loader1Logo');
  const loader1Btn = document.getElementById('js-loader1Btn')

  loader1Btn.addEventListener('click', (e) => {
    e.preventDefault();

    body.classList.add('is-fixed');
    loader1.classList.add('is-show');
  
    setTimeout(function(){
      loader1Logo.classList.add('is-fadeout');
    }, 4000);
  
    setTimeout(() => {
      loader1.classList.add('is-fadeout');
      body.classList.remove('is-fixed');
  
      setTimeout( () => {
        loader1.classList.remove('is-show');
        loader1.classList.remove('is-fadeout');
        loader1Logo.classList.remove('is-fadeout');
      }, 500)
    }, 4700);
  })
}

loaderFuncs.loader2 = () => {
  const loader2 = document.getElementById('js-loader2');
  const loader2Logo = document.getElementById('js-loader2Logo');
  const loader2Btn = document.getElementById('js-loader2Btn');
  let loader2LogoHtml = '';
  const loader2LogoChar = loader2Logo.innerText.split('');

  
  loader2Btn.addEventListener('click', (e) => {
    e.preventDefault();

    for(let i = 0;i < loader2LogoChar.length;i++) {
      const delayNum = [i] * 0.15 + 0.5;
      const addStyle = 'style = "animation: loader-theme ' + delayNum + 's ease forwards;"'
      loader2LogoHtml += '<span ' + addStyle + '>' + loader2LogoChar[i] + '</span>';
    }
    loader2Logo.innerHTML = loader2LogoHtml;

    body.classList.add('is-fixed');
    loader2.classList.add('is-show');
  
    setTimeout(function(){
      loader2Logo.classList.add('is-fadeout');
    }, 4000);
  
    setTimeout(() => {
      loader2.classList.add('is-fadeout');
      body.classList.remove('is-fixed');
  
      setTimeout( () => {
        loader2.classList.remove('is-show');
        loader2.classList.remove('is-fadeout');
        loader2Logo.classList.remove('is-fadeout');
        loader2Logo.innerHTML = '';
        loader2LogoHtml = '';
      }, 500)
    }, 4700);
  })
}

const loaderInit = () => {
  const loaderPage = document.getElementById('loader');
  if(loaderPage) {
    loaderFuncs.loader1();
    loaderFuncs.loader2();
  }
}

module.exports = loaderInit;