//헤더슬라이더
function SliderP__init(selector) {
    var $slider = $(selector);
    
    var $slides = $slider.find('.slides > div');
    var slidesCount = $slides.length;
    
    var $totalCount = $slider.find('.index-box > :last-child');
    $totalCount.text(slidesCount);
    
    var currentIndex = 0;
    var $current = $slider.find(' > .slides > div.active');
    if ( $current.length > 0 ) {
        currentIndex = $current.index();
    }
    
    $slider.data('slider-p-slidesCount', slidesCount);
    $slider.data('slider-p-currentIndex', currentIndex);
    
    $slider.find('.control-box > .left').click(function() {
        SliderP__movePrev($slider);
    });
    
    $slider.find('.control-box > .pause').click(function() {
        SliderP__stopAnimate($slider);
    });
    
    $slider.find('.control-box > .right').click(function() {
        SliderP__moveNext($slider);
    });
    
    SliderP__show($slider, 0);
}

function SliderP__moveNext($slider) {
    var currentIndex = $slider.data('slider-p-currentIndex');
    var postIndex = currentIndex + 1;
    var slidesCount = $slider.data('slider-p-slidesCount');
    
    if ( postIndex + 1 > slidesCount ) {
        postIndex = 0;
    }
    
    SliderP__show($slider, postIndex);
}

function SliderP__movePrev($slider) {
    var currentIndex = $slider.data('slider-p-currentIndex');
    var postIndex = currentIndex - 1;
    var slidesCount = $slider.data('slider-p-slidesCount');
    
    if ( postIndex < 0 ) {
        postIndex = slidesCount - 1;
    }
    
    SliderP__show($slider, postIndex);
}

function SliderP__show($slider, postIndex) {
    var $stick = $slider.find('.progress-bar > .stick');
    $stick.css('width', 0);
    
    var currentIndex = $slider.data('slider-p-currentIndex');
    var slidesCount = $slider.data('slider-p-slidesCount');
    var $current = $slider.find(' > .slides > div').eq(currentIndex);
    var $post = $slider.find(' > .slides > div').eq(postIndex);
    
    $slider.data('slider-p-currentIndex', postIndex);
    
    $current.removeClass('active');
    $post.addClass('active');
    
    var $currentIndex = $slider.find('.index-box > :first-child');
    $currentIndex.text(postIndex + 1);
    
    SliderP__startAnimate($slider);
}

function SliderP__startAnimate($slider) {
    var $stick = $slider.find('.progress-bar > .stick');
    
    var animateDuration = parseInt($slider.attr('data-slider-p-animate-duration'));
    
    $stick.stop().animate({
        width:'100%'
    }, animateDuration, function() {
        SliderP__moveNext($slider);
    });
}

function SliderP__stopAnimate($slider) {
    var $stick = $slider.find('.progress-bar > .stick');
    
    $stick.stop();
}

SliderP__init('.slider-p');


//탭박스
function TabBox__init() {
  $('[data-tab-head-item-name]').click(function() {
    var $this = $(this);
    var tabName = $this.attr('data-tab-name');
    var itemName = $this.attr('data-tab-head-item-name');
    // [for]
    // 모든 것을 숨기고
    $('[data-tab-name="' + tabName + '"]').removeClass('active');
    
    $('[data-tab-name="' + tabName + '"][data-tab-head-item-name="' + itemName + '"]').addClass('active');
    $('[data-tab-name="' + tabName + '"][data-tab-body-item-name="' + itemName + '"]').addClass('active');
  });
}

TabBox__init();

//공지사항메뉴밑줄
var $itemBottomLine = $('.notice .item-bottom-line');


$('.notice > ul > li').click(function() {
  var $this = $(this);
   var left = $this.position().left;
   var width = $this.width();
    $itemBottomLine.css('left', left);
    $itemBottomLine.css('width', width);
});

  $('.notice > ul > li').eq(0).click();

//컨텐츠 오른쪽슬라이더
$('.my-slider-1 > .owl-carousel').owlCarousel({
  items:1,
  autoplay:true,
  autoplayTimeout:2000,
  loop:true,
});

$('.slider-box-1 > .slider').slick({
  arrows:false,
  slidesToShow:7,
  autoplay:true,
  responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 920, 
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:4
						} 
					},
					{ 
						breakpoint: 691, 
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:3
						} 
					},
{  
						breakpoint: 350, 
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:2
						} 
					}
				]
});


