!function(t,e,o,n,i){var s=t(n),r="waypoint.reached",l=function(t,o){t.element.trigger(r,o),t.options.triggerOnce&&t.element[e]("destroy")},f=function(t,e){if(!e)return-1;for(var o=e.waypoints.length-1;o>=0&&e.waypoints[o].element[0]!==t[0];)o-=1;return o},c=[],h=function(e){t.extend(this,{element:t(e),oldScroll:0,waypoints:[],didScroll:!1,didResize:!1,doScroll:t.proxy((function(){var e=this.element.scrollTop(),n=e>this.oldScroll,i=this,s=t.grep(this.waypoints,(function(t,o){return n?t.offset>i.oldScroll&&t.offset<=e:t.offset<=i.oldScroll&&t.offset>e})),r=s.length;this.oldScroll&&e||t[o]("refresh"),this.oldScroll=e,r&&(n||s.reverse(),t.each(s,(function(t,e){(e.options.continuous||t===r-1)&&l(e,[n?"down":"up"])})))}),this)}),t(e).bind("scroll.waypoints",t.proxy((function(){this.didScroll||(this.didScroll=!0,n.setTimeout(t.proxy((function(){this.doScroll(),this.didScroll=!1}),this),t[o].settings.scrollThrottle))}),this)).bind("resize.waypoints",t.proxy((function(){this.didResize||(this.didResize=!0,n.setTimeout(t.proxy((function(){t[o]("refresh"),this.didResize=!1}),this),t[o].settings.resizeThrottle))}),this)),s.load(t.proxy((function(){this.doScroll()}),this))},u={init:function(n,i){return this.each((function(){var s,l=t.fn[e].defaults.context,u=t(this);i&&i.context&&(l=i.context),t.isWindow(l)||(l=u.closest(l)[0]),(s=function(e){var o=null;return t.each(c,(function(t,n){if(n.element[0]===e)return o=n,!1})),o}(l))||(s=new h(l),c.push(s));var p=f(u,s),a=p<0?t.fn[e].defaults:s.waypoints[p].options,d=t.extend({},a,i);d.offset="bottom-in-view"===d.offset?function(){return(t.isWindow(l)?t[o]("viewportHeight"):t(l).height())-t(this).outerHeight()}:d.offset,p<0?s.waypoints.push({element:u,offset:null,options:d}):s.waypoints[p].options=d,n&&u.bind(r,n),i&&i.handler&&u.bind(r,i.handler)})),t[o]("refresh"),this},remove:function(){return this.each((function(e,o){var n=t(o);t.each(c,(function(t,e){var o=f(n,e);o>=0&&(e.waypoints.splice(o,1),e.waypoints.length||(e.element.unbind("scroll.waypoints resize.waypoints"),c.splice(t,1)))}))}))},destroy:function(){return this.unbind(r)[e]("remove")}},p={refresh:function(){t.each(c,(function(e,n){var i=t.isWindow(n.element[0]),s=i?0:n.element.offset().top,r=i?t[o]("viewportHeight"):n.element.height(),f=i?0:n.element.scrollTop();t.each(n.waypoints,(function(t,e){if(e){var o=e.options.offset,i=e.offset;if("function"==typeof e.options.offset)o=e.options.offset.apply(e.element);else if("string"==typeof e.options.offset){var c=parseFloat(e.options.offset);o=e.options.offset.indexOf("%")?Math.ceil(r*(c/100)):c}e.offset=e.element.offset().top-s+f-o,e.options.onlyOnScroll||(null!==i&&n.oldScroll>i&&n.oldScroll<=e.offset?l(e,["up"]):(null!==i&&n.oldScroll<i&&n.oldScroll>=e.offset||!i&&n.element.scrollTop()>e.offset)&&l(e,["down"]))}})),n.waypoints.sort((function(t,e){return t.offset-e.offset}))}))},viewportHeight:function(){return n.innerHeight?n.innerHeight:s.height()},aggregate:function(){var e=t();return t.each(c,(function(o,n){t.each(n.waypoints,(function(t,o){e=e.add(o.element)}))})),e}};t.fn[e]=function(o){return u[o]?u[o].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof o&&o?"object"==typeof o?u.init.apply(this,[null,o]):void t.error("Method "+o+" does not exist on jQuery "+e):u.init.apply(this,arguments)},t.fn[e].defaults={continuous:!0,offset:0,triggerOnce:!1,context:n},t[o]=function(t){return p[t]?p[t].apply(this):p.aggregate()},t[o].settings={resizeThrottle:200,scrollThrottle:100},s.load((function(){t[o]("refresh")}))}(jQuery,"waypoint","waypoints",window);