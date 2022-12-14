!function(a){
	"use strict";
	a(window).load((function(){
		switch(a(".current").first().text()){
			case"About":
				a(".main-navigation li a").css("color","#000"),
					a(".main-navigation li.current > a").css("color","#21C3C9");
			break;
			case"Contact":
				case"Home":	a(".main-navigation li a").css("color","#FFF"),
					a(".main-navigation li.current > a").css("color","#21C3C9");
			break;
			case"Project":
				case"Resume":
					case"Presentation":
						a(".main-navigation li a").css("color","#000"),
				a(".main-navigation li.current > a").css("color","#21C3C9");
			break;
			case"home":
				a(".main-navigation li a").css("color","#FFF"),
				a(".main-navigation li.current > a").css("color","#21C3C9");
			break;
			case"Projet":
				case"Curriculum":
					a(".main-navigation li a").css("color","#000"),
				a(".main-navigation li.current > a").css("color","#21C3C9")
		}
		a("#loader").fadeOut("slow",(function(){
			a("#preloader").delay(300).fadeOut("slow")
		}))
	})),
		setTimeout((function(){
			a("#intro h1").fitText(1,{minFontSize:"42px",maxFontSize:"84px"})
		}), 100),
		a(".fluid-video-wrapper").fitVids(),
		a("#owl-slider").owlCarousel({navigation:!1,pagination:!0,itemsCustom:[[0,1],[700,2],[960,3]],navigationText:!1}),
		a(".alert-box").on("click",".close",(function(){a(this).parent().fadeOut(500)}));
	let e = a("#stats");
	let n = a(".stat-count");
	e.waypoint({handler:function(e){
		"down" === e&&n.each((function(){
			let e = a(this);
			a({Counter:0}).animate({Counter:e.text()},
				{duration:4e3,easing:"swing",step:function(a){e.text(Math.ceil(a))}})
		})),this.destroy()},offset:"90%"
	});
	let i = a("#folio-wrapper");
	i.imagesLoaded((function(){
		i.masonry({itemSelector:".folio-item",resize:!0})
	}));
	let o = a(".menu-toggle");
	let t = a(".main-navigation");
	o.on("click",(function(a){
		a.preventDefault(),o.toggleClass("is-clicked"), t.slideToggle()
	})),
		t.find("li a").on("click",(function(){
			o.toggleClass("is-clicked"),t.fadeOut()
		}));
	let s = a("section");
	let c = a("#main-nav-wrap li a");
	s.waypoint({handler:function(e){
		let n;
		n = a("section#"+this.element.id),"up" === e&& (n=n.prev());
		let i = a('#main-nav-wrap a[href="#'+n.attr("id")+'"]'),
			o = a('#menu-mobile a[href="#'+n.attr("id")+'"]');
		switch(a(".menu-mobile li").removeClass("current"),
			o.find("li").addClass("current"),
			c.parent().removeClass("current"),
			i.parent().addClass("current"),
			a(".current").first().text()){
			case"About":a(".main-navigation li a").css("color","#000"),
				a(".main-navigation li.current > a").css("color","#21C3C9");
			break;
			case"Contact":
				case"Home":a(".main-navigation li a").css("color","#FFF"),
					a(".main-navigation li.current > a").css("color","#21C3C9");
				break;
				case"Project":
					case"Resume":
						case"Presentation":a(".main-navigation li a").css("color","#000"),
							a(".main-navigation li.current > a").css("color","#21C3C9");
						break;
						case"home":a(".main-navigation li a").css("color","#FFF"),
							a(".main-navigation li.current > a").css("color","#21C3C9");
						break;
						case"Projet":
							case"Curriculum":a(".main-navigation li a").css("color","#000"),
								a(".main-navigation li.current > a").css("color","#21C3C9")
		}},offset:"25%"}),
		a(".smoothscroll").on("click",(function(e){
		e.preventDefault();
		let n = this.hash;
		let i = a(n);
		a("html, body").stop().animate({scrollTop:i.offset().top},800,"swing",(function(){window.location.hash=n}))})),
		a(".item-wrap a").magnificPopup({type:"inline",fixedContentPos:!1,removalDelay:200,showCloseBtn:!0,mainClass:"mfp-fade"}),
		a("input, textarea, select").placeholder(),
		a("#contactForm").validate({submitHandler:function(e){
			let n = a("#submit-loader");
			a.ajax({type:"POST",url:"inc/sendEmail.php",data:a(e).serialize(),beforeSend:function(){n.fadeIn()},success:function(e){
				"OK" === e?(n.fadeOut(),a("#message-warning").hide(),a("#contactForm").fadeOut(), a("#message-success").fadeIn()):(n.fadeOut(),a("#message-warning").html(e),a("#message-warning").fadeIn())
				},
				error:function(){
				n.fadeOut(),a("#message-warning").html("Something went wrong. Please try again."),
					a("#message-warning").fadeIn()}
			})
		}});
	jQuery(window).scroll((function(){
		a("#header-search").hasClass("is-visible")
		|| (jQuery(window).scrollTop() >= 300? jQuery("#go-top").fadeIn(400):jQuery("#go-top").fadeOut(400))
	}));
	let r = !1;
	a(".js-menu").on("click",(function(){
		r ? (a(this).removeClass("active"),
			a("body").removeClass("menu-open")):(a(this).addClass("active"),
			a("body").addClass("menu-open")),
			r=!r
	})),
		a("#menu-toggle-mobile").click((function(){
			a(".menu-mobile").slideToggle("slow")
		})),
		a(".header-mobile a").click((function(){
			a(".js-menu").removeClass("active"),a("body").removeClass("menu-open"),
				r = !r,
				a(".menu-mobile").fadeOut("slow")
		}))
}(jQuery);