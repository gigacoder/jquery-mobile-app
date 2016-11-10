// below code for dynamic header
$(document).on("pagecreate", "[data-role='page']", function(){
  if($($(this)).hasClass("hyapps-header-default")){
    // $('<div data-role="header"  data-position="fixed" data-fullscreen="false"><a href="#hyapps-app-page-1-panel-left" class="ui-btn ui-icon-bars ui-btn-icon-left ui-corner-all ui-btn-icon-notext"></a><h1>'+ '' +'</h1><a href="#hyapps-app-page-1-panel-right" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-icon-notext ui-icon-gear" data-rel="popup" data-position-to="window"></a></div>')
    $('<div data-role="header"  data-position="fixed" data-fullscreen="false"><h1>'+ '' +'</h1></div>')

    .prependTo( $(this) )
    .toolbar({position: "fixed"});
    $(this).find("[data-role='header'] h1").text($(this).jqmData("title"));
    console.log($(this).jqmData("title"));
    if($(this).jqmData("title")==="Home")
    {
      //$(this).addClass('ui-btn-active');

      $("#hyapps-app-panel-right-page-1").addClass('ui-btn-active');
      if( $($.ui.activeDiv).prop("id") === "hyapps-app-panel-right-page-1" )
      {
          console.log("= ggg=");
      }

    }
  } //header default

  if ($($(this)).hasClass("hyapps-footer-default")){
    $('<div data-role="footer" data-position="fixed" data-fullscreen="false"><a href="#hyapps-app-homepage" class="ui-btn ui-icon-home ui-btn-icon-left ui-shadow ui-corner-all ui-btn-icon-notext"></a><a href="#" class="ui-btn-right ui-btn ui-icon-lock ui-btn-icon-right ui-shadow ui-corner-all ui-btn-icon-notext hyapps-app-no-top-pos"></a></div>')
    .appendTo($(this))
    .toolbar({position: "fixed"});
  }
});// show page
// dyynamic footer

//below code for vertically centralizing the content of login page
$(document).on('pageshow','#hyapps-app-login-page', function(e,data){
    $('#hyapps-app-login-page-content').css('margin-top',($(window).height() - $('[data-role=header]').height() - $('[data-role=footer]').height() - $('#hyapps-app-login-page-content').outerHeight())/2);
});



//panel open close




$(document).on("pageinit","[data-role='page']", function (event) {

    $(".ui-panel").on("panelopen", function (event, ui) {

      $('.ui-panel').focus();
      $("#hyapps-app-page-1-homepage").not(".ui-panel)").css("overflow", "hidden").on("touchmove", stopScroll);


    });

    $(".ui-panel").on("panelclose", function (event, ui) {
        //remove the overflow: hidden property. Also, remove the "touchmove" event.
        $('#hyapps-app-page-1-homepage').focus();
        // $('body').css("overflow", "auto").off("touchmove");
        $("body").not(".ui-panel").css("overflow", "auto").off("touchmove");

    });

    function stopScroll() {
       //alert("kaka kaka ");
        return false;
    }
});




//swiper code starts here
//swiper page-1
$(document).on("pageshow", "[data-role='page']", function(){
  var homeSwiper = new Swiper('.swiper-page-1-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    slidesPerColumn: 3,
    paginationClickable: true,
    spaceBetween: 30,
  });

  $(".scrollTo").on("click", function(){
    var x = $(this);
    $.mobile.loading("show");
    // $("#hyapps-app-page-1-panel-left").panel("close");
    $("#hyapps-app-page-1-panel-left").panel().panel("close");

    setTimeout( function(){
      var elem = $(x).prop("href");
      elem = elem.substr(elem.lastIndexOf("#"));
      //scroll to elem
      var top = $(elem).offset().top;
      $.mobile.silentScroll(top-50);
      var index = $(x).attr('href').split('#page-1-chart-box-')[1] - 1;
      var column = Math.floor(index/3);
      homeSwiper.slideTo(column);
      // function for loader hide
      setTimeout( function(){
        $.mobile.loading('hide');
      }, 1);
      return false;
    }, 500);
  });
});
//swiper about
$(document).on("pageshow", "[data-role='page']", function(){
  var aboutSwiper = new Swiper('.swiper-about-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    slidesPerColumn: 4,
    paginationClickable: true,
    spaceBetween: 30,
  });

  $(".scrollTo").on("click", function(){
    var x = $(this);
    $.mobile.loading("show");
    // $("#hyapps-app-about-panel-left").panel("close");
    $("#hyapps-app-about-panel-left").panel().panel("close");

    setTimeout( function(){
      var elem = $(x).prop("href");
      elem = elem.substr(elem.lastIndexOf("#"));
      //scroll to elem
      var top = $(elem).offset().top;
      $.mobile.silentScroll(top-50);
      var index = $(x).attr('href').split('#about-chart-box-')[1] - 1;
      var column = Math.floor(index/4);
      aboutSwiper.slideTo(column);
      // function for loader hide
      setTimeout( function(){
        $.mobile.loading('hide');
      }, 1);
      return false;
    }, 500);
  });
});
//swiper products
$(document).on("pageshow", "[data-role='page']", function(){
  var productsSwiper = new Swiper('.swiper-products-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 1,
    slidesPerColumn: 4,
    paginationClickable: true,
    spaceBetween: 30,
  });

  $(".scrollTo").on("click", function(){
    var x = $(this);
    $.mobile.loading("show");
    // $("#hyapps-app-products-panel-left").panel("close");
    $("#hyapps-app-products-panel-left").panel().panel("close");

    setTimeout( function(){
      var elem = $(x).prop("href");
      elem = elem.substr(elem.lastIndexOf("#"));
      //scroll to elem
      var top = $(elem).offset().top;
      $.mobile.silentScroll(top-50);
      var index = $(x).attr('href').split('#products-chart-box-')[1] - 1;
      var column = Math.floor(index/4);
      productsSwiper.slideTo(column);
      // function for loader hide
      setTimeout( function(){
        $.mobile.loading('hide');
      }, 1);
      return false;
    }, 500);
  });
});

//swiper code ends here


//tuchable menu code
$(".hyapps-app-touchableMenu").on("taphold", function(e) {
  e.stopPropagation();
  $(this).simpledialog2({
    mode:"blank",
    headerText:"Image Options",
    showModal:false,
    forceInput:true,
    headerClose:true,
    blankContent:"<ul data-role='listview'><li><a href=''>Send to Facebook</a></li><li><a href=''>Send to Twitter</a></li><li><a href=''>Send to Cat</a></li></ul>"
  });
});

//dynamic panel list for pages
$(document).on("pagebeforecreate", "[data-role='page']", function(){
  //This code creates dynamic list of sections
  var hyappsPageList = '<li id="hyapps-app-panel-right-page-1" class="ui-state-persist"><a href="#hyapps-app-page-1-homepage" class="ui-btn ui-btn-icon-left ui-icon-hyapps-app-piechart">page-1 section</a></li>';
  hyappsPageList += '<li id="hyapps-app-panel-right-about" class="ui-state-persist"><a href="#hyapps-app-about-homepage" class="ui-btn ui-btn-icon-left ui-icon-hyapps-app-linechart">about section</a></li>';
  hyappsPageList += '<li id="hyapps-app-panel-right-products" class="ui-state-persist"><a href="#hyapps-app-products-homepage" class="ui-btn ui-btn-icon-left ui-icon-hyapps-app-linegraph">products section</a></li>';
  hyappsPageList += '<li id="hyapps-app-panel-right-products" class="ui-state-persist"><a href="#hyapps-app-financialReport-homepage" class="ui-btn ui-btn-icon-left ui-icon-hyapps-app-graph">contact</a></li>';
  $(".hyapps-page-list").html(hyappsPageList);
  // $(".hyapps-page-list").listview("");
});

// dynamic panel list page-1
$(document).on("pagebeforecreate", "#hyapps-app-page-1-homepage", function(){
	var homeChartData = {
		results: [
			{
				chart_id: "page-1-chart-box-1",
				chart_image: "images/panel-chart-1.jpg",
				chart_title: "image 1"
			},
			{
				chart_id: "page-1-chart-box-2",
				chart_image: "images/panel-chart-2.jpg",
				chart_title: "image 2"
			},
			{
				chart_id: "page-1-chart-box-3",
				chart_image: "images/panel-chart-3.jpg",
				chart_title: "image 3"
			},
			{
				chart_id: "page-1-chart-box-4",
				chart_image: "images/panel-chart-1.jpg",
				chart_title: "image 4"
			},
			{
				chart_id: "page-1-chart-box-5",
				chart_image: "images/panel-chart-2.jpg",
				chart_title: "image 5"
			},
			{
				chart_id: "page-1-chart-box-6",
				chart_image: "images/panel-chart-3.jpg",
				chart_title: "image 6"
			}
		]
	};
	var	page1_panel_list = '<ul data-role="listview" id="hyapps-app-page-1-left-list" data-inset="true" class="hyapps-app-panel" >';
	page1_panel_list +='<li data-icon="delete"><a href="#" data-rel="close" class="hyapps-app-panel-header ui-btn ui-btn-icon-left ui-icon-delete"> Close</a></li>';

	var res = homeChartData.results;
	for (var key in res)
	{
		page1_panel_list += '<li data-icon="false">';
		page1_panel_list += '<a class="scrollTo" data-transition="slide" href=#'+ res[key].chart_id +'>';
		page1_panel_list += '<img class="hyapps-app-blue-border" src="'+res[key].chart_image+'">';
		page1_panel_list += '<p class="hyapps-app-blue-text">'+ res[key].chart_title +'</p>';
		page1_panel_list += '</a></li>';
		// console.info(res[key].chart_title);
	}
	page1_panel_list += '</ul>';
	$("#hyapps-app-page-1-panel-left").html(page1_panel_list);
});

// dynamic panel list about
$(document).on("pagebeforecreate", "#hyapps-app-about-homepage", function(){
	var aboutChartData = {
		results: [
      {
				chart_id: "about-chart-box-1",
				chart_image: "images/panel-chart-3.jpg",
				chart_title: "image 1"
			},
			{
				chart_id: "about-chart-box-2",
				chart_image: "images/panel-chart-1.jpg",
				chart_title: "image 2"
			},
			{
				chart_id: "about-chart-box-3",
				chart_image: "images/panel-chart-2.jpg",
				chart_title: "image 3"
			},
			{
				chart_id: "about-chart-box-4",
				chart_image: "images/panel-chart-3.jpg",
				chart_title: "image 4"
			}
		]
	};
	var	about_panel_list = '<ul data-role="listview" id="hyapps-app-page-1-left-list" data-inset="true" class="hyapps-app-panel" >';
	about_panel_list +='<li data-icon="delete"><a href="#" data-rel="close" class="hyapps-app-panel-header ui-btn ui-btn-icon-left ui-icon-delete"> Close</a></li>';

	var res = aboutChartData.results;
	for (var key in res)
	{
		about_panel_list += '<li data-icon="false">';
		about_panel_list += '<a class="scrollTo" data-transition="slide" href=#'+ res[key].chart_id +'>';
		about_panel_list += '<img class="hyapps-app-blue-border" src="'+res[key].chart_image+'">';
		about_panel_list += '<p class="hyapps-app-blue-text">'+ res[key].chart_title +'</p>';
		about_panel_list += '</a></li>';
		// console.info(res[key].chart_title);
	}
	about_panel_list += '</ul>';
	$("#hyapps-app-about-panel-left").html(about_panel_list);
});

// dynamic panel list products
$(document).on("pagebeforecreate", "#hyapps-app-products-homepage", function(){
	var productsChartData = {
		results: [
      {
        chart_id: "products-chart-box-1",
        chart_image: "images/panel-chart-3.jpg",
        chart_title: "image 1"
      },
      {
        chart_id: "products-chart-box-2",
        chart_image: "images/panel-chart-1.jpg",
        chart_title: "image 2"
      },
      {
				chart_id: "products-chart-box-3",
				chart_image: "images/panel-chart-3.jpg",
				chart_title: "image 3"
			},
			{
				chart_id: "products-chart-box-4",
				chart_image: "images/panel-chart-1.jpg",
				chart_title: "image 4"
			}
		]
	};
	var	products_panel_list = '<ul data-role="listview" id="hyapps-app-products-left-list" data-inset="true" class="hyapps-app-panel" >';
	products_panel_list +='<li data-icon="delete"><a href="#" data-rel="close" class="hyapps-app-panel-header ui-btn ui-btn-icon-left ui-icon-delete"> Close</a></li>';

	var res = productsChartData.results;
	for (var key in res)
	{
		products_panel_list += '<li data-icon="false">';
		products_panel_list += '<a class="scrollTo" data-transition="slide" href=#'+ res[key].chart_id +'>';
		products_panel_list += '<img class="hyapps-app-blue-border" src="'+res[key].chart_image+'">';
		products_panel_list += '<p class="hyapps-app-blue-text">'+ res[key].chart_title +'</p>';
		products_panel_list += '</a></li>';
		// console.info(res[key].chart_title);
	}
	products_panel_list += '</ul>';
	$("#hyapps-app-products-panel-left").html(products_panel_list);
});


//financial report popup scrollable
$('#index').on('pagebeforeshow',function(e,data){
    $('#test-button').on('click', function(e) {
        $('#hyapps-app-financialreport-popup').css('overflow-y', 'scroll');
        $('#hyapps-app-financialreport-popup').popup('open');
    });
});

$('#hyapps-app-financialreport-popup').on({
  popupbeforeposition: function() {
    var maxHeight = $(window).height() - 30;
    $('#hyapps-app-financialreport-popup').css('max-height', maxHeight + 'px');
  }
});

//this code is to hide address bar
$(document).on('pageshow', '#hyapps-app-page-1-homepage', function(){

  // $( document ).on( "pageshow", function( event ) {
  window.addEventListener("load",function() {
    // Set a timeout...
    setTimeout(function(){
      // Hide the address bar!
      window.scrollTo(0, 1);
    }, 0);
  });

  // this code is for flip animation on clicking right panel
  $('.hyapps-page-list a').each(function() {
    $(this).attr('data-transition','flip');
  });

});
