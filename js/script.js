$('body').on('click', '.navbar-bars', function(e) {
    e.preventDefault();
    $('.grids-left').toggleClass('grids-ln');
    $('.grids-right').toggleClass('grids-rf');
});
// $('body').on('click', '.btn-add-penerima', function(e) {
//     e.preventDefault();
//     $(this).removeClass('btn-add-plus');
//     $(this).addClass('btn-add-min');
//     $('.add-nama-penerima').toggleClass('add-show');
// });
$('body').on('click', '.btn-add-plus', function(e) {
    e.preventDefault();
    $(this).css({display : "none"});
    $('.btn-subs').css({display : "none"});
    $('.btn-add-min').css({display : "block"});
    $('.add-nama-penerima').addClass('add-show');
});
$('body').on('click', '.btn-add-min', function(e) {
    e.preventDefault();
    $(this).css({display : "none"});
    $('.btn-subs').css({display : "block"});
    $('.btn-add-plus').css({display : "block"});
    $('.add-nama-penerima').removeClass('add-show');
});
$('body').on('click', '#batal', function(e) {
    e.preventDefault();
    $('.btn-add-min').css({display : "none"});
    $('.btn-subs').css({display : "block"});
    $('.btn-add-plus').css({display : "block"});
    $('.add-nama-penerima').removeClass('add-show');
});
$('body').on('click', '#prodVid', function(e) {
    e.preventDefault();
    $('iframe').css({display : "block"});
    $(this).toggleClass('prodVid-open');
    $('.iframe-vid')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    $('.owl-thumb-item').removeClass('active');
});
$('body').on('click', '.owl-thumb-item', function(e) {
    e.preventDefault();
    $('iframe').css({display : "none"});
    $('#prodVid').removeClass('prodVid-open');
    $('.iframe-vid')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});
$(document).ready(function(){
	$('#lookbookXaya').justifiedGallery({
	    rowHeight : 300,
	    lastRow : 'center',
	    margins : 20
	});
});$(function () {
    $('.pannable-image').ImageViewer({
    	snapView: true,
    });
});
// index
$(document).ready(function(){
	$("#banner").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dots: false,
		nav: true,
		navText : ["<img src='images/prev.png'>","<img src='images/next.png'>"]
	});
	$("#gridShop").owlCarousel({
		// items:5,
		// margin: 30,
		loop:true,
		autoplay:true,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dots: false,
		nav: true,
		navText : ["<img src='images/prev.png'>","<img src='images/next.png'>"],
		responsiveClass:true,
		responsive:{
		    0:{
		        items:3,
		        margin: 15,
		    },
		    576:{
		        items:3,
		        margin: 20,
		    },
		    768:{
		        items:4,
		        margin: 25,
		    },
		    992:{
		        items:5,
		        margin: 30,
		    }
		}
	});
	$("#sync1").owlCarousel({
		items: 1,
		dots: false,
		mouseDrag: false,
		pullDrag: false,
		loop: false,
		thumbs: true,
		thumbsPrerendered: true,
		thumbContainerClass: 'owl-thumbs',
		thumbItemClass: 'owl-thumb-item',
		nav: true,
		navText: ['<i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>','<i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>'],
		responsiveClass:true,
		responsive:{
		    0:{
		       dots: true,
		       nav: false
		    },
		    576:{
		       dots: false,
		       nav: true
		    },
		    768:{
		       dots: false,
		       nav: true
		    },
		    992:{
		       dots: false,
		       nav: true
		    }
		}
	});
	// $("#sidebar").mCustomScrollbar({
        theme: "minimal-dark"
    // });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.main').removeClass('top-home-anms');
        $('.header').removeClass('top-head-anms');
        $('.overlay').fadeOut();
        $('#content').css({position : "absolute"})
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.main').addClass('top-home-anms');
        $('.header').addClass('top-head-anms');
        $('.overlay').fadeIn();
        $('#content').css({position : "fixed"})
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

window.onload = function(e){
	var $clock = $('#timer'),
	    eventTime = moment().add(1, 'days').unix(),
	    currentTime = moment().unix(),
	    diffTime = eventTime - currentTime,
	    duration = moment.duration(diffTime * 1000, 'milliseconds'),
	    interval = 1000;
	// if time to countdown
	if(diffTime > 0) {
	    // Show clock
	    // $clock.show();
	    var $d = $('<div class="days" ></div>').appendTo($clock),
	        $h = $('<div class="hours" ></div>').appendTo($clock),
	        $m = $('<div class="minutes" ></div>').appendTo($clock),
	        $s = $('<div class="seconds" ></div>').appendTo($clock);

	    setInterval(function(){
	        duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
	        var d = moment.duration(duration).days(),
	            h = moment.duration(duration).hours(),
	            m = moment.duration(duration).minutes(),
	            s = moment.duration(duration).seconds();

	        d = $.trim(d).length === 1 ? '0' + d : d;
	        h = $.trim(h).length === 1 ? '0' + h : h;
	        m = $.trim(m).length === 1 ? '0' + m : m;
	        s = $.trim(s).length === 1 ? '0' + s : s;

	        // show how many hours, minutes and seconds are left
	        // $d.text(d);
	        $h.text(h);
	        $m.text(m);
	        $s.text(s);

	        $(".days").html(d + "<span>:</span>");
			$(".hours").html(h + "<span>:</span>");
			$(".minutes").html(m + "<span>:</span>");
			// $(".seconds").html(s + "<span>:</span>");	

	    }, interval);
	}
};


var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
var myMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
var d = new Date();
d.setDate(d.getDate() + 1);
var date = d.getDate();
var thisDay = d.getDay();
	thisDay = myDays[thisDay];
var thisMonth = d.getMonth();
	thisMonth = myMonth[thisMonth];
document.getElementById("demo").innerHTML = thisDay + ", " + date + " " + thisMonth + " " + d.getFullYear() + "&nbsp;&nbsp;Pukul " + d.getHours() + " : " + d.getMinutes();


jQuery(document).ready(function($) {
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});
});

new WOW().init();