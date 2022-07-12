// Menu navbar
const
      navMenu = document.querySelector('.nav_menu-res'),
      closeNavBtn = document.querySelector('.nav_close-btn'),
      openNavBtn = document.querySelector('.nav_menu-btn');

if(navMenu && openNavBtn){
    openNavBtn.addEventListener("click",function(){
        navMenu.classList.add('open');
    })
}
if(navMenu && closeNavBtn){
    closeNavBtn.addEventListener("click",function(){
        navMenu.classList.remove('open');
    })
}

// Select searching menu option
const optionMenuCity = document.querySelector('.select_btn-citys'),
      optionMenuPrice = document.querySelector('.select_btn-price'),
      optionsCitys = document.querySelector('.select_option-citys'),
      optionsPrices = document.querySelector('.select_option-price'),
      optionsCity = document.querySelectorAll('.option_citys'),
      optionsPrice = document.querySelectorAll('.option_price'),
      btnsCtiyText = document.querySelector('.btn_citys-text'),
      btnsPriceText = document.querySelector('.btn_price-text');

optionMenuCity.addEventListener('click', () => optionsCitys.classList.toggle('open_flex'));
optionMenuPrice.addEventListener('click', () => optionsPrices.classList.toggle('open_flex'));


optionsCity.forEach(optionCity => {
    optionCity.addEventListener("click", () => {
        let selectOptionCity = optionCity.querySelector('.option_span').innerText;
        btnsCtiyText.innerText = selectOptionCity;
    })
});
optionsPrice.forEach(optionPrice => {
    optionPrice.addEventListener("click", () => {
        let selectOptionPrice = optionPrice.innerText;
        btnsPriceText.innerText = selectOptionPrice;
    })
});



// Slick
$('.deals_images').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:'<button type="button" class="slick-prev slick-arrow"><i class="bx bx-chevron-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next slick-arrow"><i class="bx bx-chevron-right"></i></button>',
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            prevArrow:'<button type="button" class="slick-prev slick-arrow hide"><i class="bx bx-chevron-left"></i></button>',
            nextArrow:'<button type="button" class="slick-next slick-arrow hide"><i class="bx bx-chevron-right"></i></button>'
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow:'<button type="button" class="slick-prev slick-arrow hide"><i class="bx bx-chevron-left"></i></button>',
            nextArrow:'<button type="button" class="slick-next slick-arrow hide"><i class="bx bx-chevron-right"></i></button>'   
          }
        }
    ]
  });

$('.section_news-container').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:'<button type="button" class="slick-prev slick-arrow"><i class="bx bx-chevron-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next slick-arrow"><i class="bx bx-chevron-right"></i></button>',
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite:true,
            prevArrow:'<button type="button" class="slick-prev slick-arrow hide"><i class="bx bx-chevron-left"></i></button>',
            nextArrow:'<button type="button" class="slick-next slick-arrow hide"><i class="bx bx-chevron-right"></i></button>'
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite:true,
            prevArrow:'<button type="button" class="slick-prev slick-arrow hide"><i class="bx bx-chevron-left"></i></button>',
            nextArrow:'<button type="button" class="slick-next slick-arrow hide"><i class="bx bx-chevron-right"></i></button>'
          }
        },
        
    ]
  });
