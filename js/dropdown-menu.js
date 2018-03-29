var breakpoint = {
        refreshValue: function() {
            this.value = window.getComputedStyle(document.querySelector("body"), ":before").getPropertyValue("content").replace(/\"/g, "")
        }
    },
    minifyInputSearch = function() {
        "sm" == breakpoint.value || "xs" == breakpoint.value ? $(".input-group-search").addClass("input-group-sm") : $(".input-group-search").removeClass("input-group-sm")
    },
    setupOwlCover = function() {
        $(".owl-cover").each(function() {
            var a = $(this);
            switch (a.css("background-image", "url(" + decodeURIComponent(a.data("src")) + ")"), a.attr("data-height") && a.css("height", a.data("height")), breakpoint.value) {
                case "xs":
                    a.attr("data-xs-height") && a.css("height", a.data("xs-height"));
                    break;
                case "sm":
                    a.attr("data-sm-height") && a.css("height", a.data("sm-height"));
                    break;
                case "md":
                    a.attr("data-md-height") && a.css("height", a.data("md-height"));
                    break;
                case "lg":
                    a.attr("data-lg-height") && a.css("height", a.data("lg-height"));
                    break;
                case "xl":
                    a.attr("data-xl-height") && a.css("height", a.data("xl-height"))
            }
        })
    },
    removeClassOn = function() {
        ["xs", "sm", "md", "lg", "xl"].forEach(function(a) {
            $("[remove-class-on-" + a + "]").each(function() {
                var t = $(this).attr("remove-class-on-" + a);
                breakpoint.value == a ? $(this).removeClass(t) : $(this).addClass(t)
            })
        })
    },
    addClassOn = function() {
        ["xs", "sm", "md", "lg", "xl"].forEach(function(a) {
            $("[add-class-on-" + a + "]").each(function() {
                var t = $(this).attr("add-class-on-" + a);
                breakpoint.value == a ? $(this).addClass(t) : $(this).removeClass(t)
            })
        })
    },
    dropdownSelect = function() {
        var a = 1;
        $(".select-dropdown").each(function() {
            var t, e = $(this),
                i = e.val(),
                o = void 0 == (o = e.data("size")) || "" == o ? "" : " btn-" + o,
                n = void 0 == (n = e.data("width")) || "" == n ? "min-width:10rem" : "width:" + n,
                s = void 0 == (s = e.data("width")) || "" == s ? "" : 'style="min-width:' + s + '"',
                l = (t = void 0 == (t = e.find("option:selected").data("before")) || "" == t ? "" : t) + e.find("option:selected").html(),
                d = "";
            if (e.find("option").each(function() {
                    var a = void 0 == $(this).data("before") || "" == $(this).data("before") ? "" : $(this).data("before"),
                        t = $(this).val() == i ? " active" : "";
                    d += '<button class="dropdown-item' + t + '" type="button" data-value="' + $(this).val() + '">' + a + $(this).html() + "</button>"
                }), e.parent(".input-group-prepend").length) {
                e.parent(".input-group-prepend").addClass("dropdown dropdown-select");
                var r = '<button class="btn btn-outline-default btn-select text-right dropdown-toggle' + o + '" type="button" id="dropdownSelect' + a + '"                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="' + n + '">                  <span class="float-left">' + l + '</span>                </button>                <div class="smooth dropdown-menu" aria-labelledby="dropdownSelect' + a + '" ' + s + ">                  " + d + "                </div>"
            } else r = '<div class="dropdown dropdown-select" style="' + n + '">                  <button class="btn btn-outline-default btn-select text-right dropdown-toggle' + o + '" type="button" id="dropdownSelect' + a + '"                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="' + n + '">                    <span class="float-left">' + l + '</span>                  </button>                  <div class="smooth dropdown-menu" aria-labelledby="dropdownSelect' + a + '" ' + s + ">                    " + d + "                  </div>                </div>";
            r = r.replace(/>[\n\t ]+</g, "><");
            e.prop("hidden", !0), e.before(r), a++
        }), $(".dropdown-select").each(function() {
            var a = $(this),
                t = a.siblings(".select-dropdown").length ? a.siblings(".select-dropdown") : a.find(".select-dropdown");
            a.find(".dropdown-item").click(function() {
                var a = $(this),
                    e = a.html(),
                    i = a.data("value");
                t.val() != i && (a.parents(".dropdown").find(".dropdown-toggle").html('<span class="float-left">' + e + "</span>"), a.parents(".dropdown").find(".dropdown-item.active").removeClass("active"), a.addClass("active"), t.val(i), t.trigger("change"))
            })
        })
    },
    dropdownSelectNav = function() {
        $(".select-dropdown-nav").each(function() {
            var a, t = $(this),
                e = t.val(),
                i = void 0 == (i = t.data("width")) || "" == i ? "min-width:10rem" : "width:" + i,
                o = void 0 == (o = t.data("width")) || "" == o ? "" : 'style="min-width:' + o + '"',
                n = (a = void 0 == (a = t.find("option:selected").data("before")) || "" == a ? "" : a) + t.find("option:selected").html(),
                s = "";
            t.find("option").each(function() {
                var a = void 0 == $(this).data("before") || "" == $(this).data("before") ? "" : $(this).data("before"),
                    t = $(this).val() == e ? " active" : "";
                s += '<button class="dropdown-item' + t + '" data-value="' + $(this).val() + '">' + a + $(this).html() + "</button>"
            });
            var l = (l = '<li class="nav-item dropdown dropdown-select-nav" style="' + i + '">                <a href="#" class="nav-link text-right dropdown-toggle" role="button"                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="' + i + '">                  <span class="float-left">' + n + '</span>                </a>                <div class="smooth dropdown-menu"  ' + o + ">                  " + s + "                </div>              </li>").replace(/>[\n\t ]+</g, "><");
            t.prop("hidden", !0), t.after(l), 0
        }), $(".dropdown-select-nav").each(function() {
            var a = $(this),
                t = a.prev();
            a.find(".dropdown-item").click(function() {
                var a = $(this),
                    e = a.html(),
                    i = a.data("value");
                t.val() != i && ($(this).parents(".dropdown").find(".dropdown-toggle").html('<span class="float-left">' + e + "</span>"), a.parents(".dropdown").find(".dropdown-item.active").removeClass("active"), a.addClass("active"), t.val(i), t.trigger("change"))
            })
        })
    },
    toggleMenuBtn = function(a) {
        var t = $(".menu-btn-wrapper").parent(),
            e = $(".logo-wrapper").parent();
        "lg" == breakpoint.value || "xl" == breakpoint.value ? ("show" == a && (t.removeClass("d-lg-none"), e.removeClass("col-lg-3"), e.addClass("col-lg-2")), "hide" == a && (t.addClass("d-lg-none"), e.removeClass("col-lg-2"), e.addClass("col-lg-3"))) : (t.addClass("d-lg-none"), e.removeClass("col-lg-2"))
    },
    mh = $(".middle-header"),
    mhA = "animated slideInDown",
    wp = $("<div></div>");
mh.before(wp);
var ost = wp.offset().top,
    fixtop = "fixed-top",
    lst = $(window).scrollTop();
$(window).on("load scroll resize", function() {
    var a = mh.height(),
        t = $(this).scrollTop();
    t < lst ? t <= ost && (mh.hasClass(fixtop) && (mh.removeClass(fixtop), mh.removeClass(mhA)), wp.height(0), toggleMenuBtn("hide")) : t >= ost + a + 55 && (1 != mh.hasClass(fixtop) && mh.addClass(mhA), mh.addClass(fixtop), wp.height(a), toggleMenuBtn("show")), lst = t
});
var setupCardProduct = function() {
        $(".tools").each(function() {
            var a = $(this);
            "xs" != breakpoint.value && "sm" != breakpoint.value ? (a.attr("hidden", !0), a.addClass("animated")) : (a.attr("hidden", !1), a.removeClass("animated"))
        }), $(".card-product").hover(function() {
            var a = $(this).find(".tools"),
                t = a.data("animate-in"),
                e = a.data("animate-out");
            a.hasClass("animated") && (a.attr("hidden", !1), a.removeClass(e), a.addClass(t))
        }, function() {
            var a = $(this).find(".tools"),
                t = a.data("animate-in"),
                e = a.data("animate-out");
            a.hasClass("animated") && (a.removeClass(t), a.addClass(e))
        })
    },
    inputQty = function() {
        $(".input-group-qty").each(function() {
            var a = $(this),
                t = a.find('input[type="text"]'),
                e = a.find(".btn-down"),
                i = a.find(".btn-up"),
                o = t.data("min"),
                n = t.data("max");
            o = void 0 == o || "" == o || o < 0 ? 0 : o, n = void 0 == n || "" == n || n < 0 ? 1e3 : n;
            t.change(function() {
                !$.isNumeric($(this).val()) || $(this).val() < o ? $(this).val(o) : $(this).val() > n && $(this).val(n)
            }), i.click(function() {
                t.val(parseInt(t.val()) + 1).trigger("change")
            }), e.click(function() {
                t.val(parseInt(t.val()) - 1).trigger("change")
            })
        })
    };
$(window).resize(function() {
    breakpoint.refreshValue(), minifyInputSearch(), setupOwlCover(), removeClassOn(), addClassOn(), setupCardProduct()
}).resize(), $(function() {
    $(".offcanvas");
    var a = $("body"),
        t = ($("#container"), "offcanvas-open"),
        e = function() {
            mh.removeClass(mhA), setTimeout(function() {
                a.toggleClass(t), $("html, body").toggleClass("offcanvas-overflow")
            }, 10)
        };
    $(document).keyup(function(i) {
        27 == i.keyCode && a.hasClass(t) && e()
    }), $(".offcanvas-btn, .content-overlay").on("click", function() {
        e()
    }), $(".list-menu a").addClass("list-group-item"), $(".list-menu i.fa").addClass("fa-fw"), dropdownSelect(), dropdownSelectNav(), $('[data-toggle="tooltip"]').tooltip(), setupOwlCover(), removeClassOn(), addClassOn(), setupCardProduct(), inputQty(), $("body").on("mouseenter mouseleave", ".navbar-theme .nav-item.dropdown", function(a) {
        var t = $(a.target).closest(".dropdown");
        t.addClass("show"), setTimeout(function() {
            t[t.is(":hover") ? "addClass" : "removeClass"]("show")
        }, 0)
    }), $("#search-input").typeahead({
        fitToElement: !0,
        source: ["U.S. Polo Assn. Green Solid Slim Fit", "U.S. Polo Assn. Red Solid Slim Fit", "U.S. Polo Assn. Yellow Solid", "Red Tape Blue Solid Slim Fit", "U.S. Polo Assn. Black Solid Regular Fit", "Gas Mustard Yellow Solid Slim Fit", "Basics Black Striped", "Superdry Blue Solid Slim Fit", "Gritstones Olive Solid", "Celio Brown Textured", "Numero Uno White Striped Regular Fit"]
    });
    // var i = $(".home-slider");
    // i.length && (i.on("initialized.owl.carousel", function(a) {
    //     i.find(".owl-item.active").find(".animated").each(function() {
    //         $(this).addClass($(this).data("animate"))
    //     })
    // }), i.owlCarousel({
    //     items: 1,
    //     loop: !0,
    //     dots: !1,
    //     nav: !0,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     autoplay: !0,
    //     autoplayTimeout: 4e3
    // }), i.on("changed.owl.carousel", function(a) {
    //     var t = i.find(".owl-item");
    //     t.find(".animated").each(function() {
    //         $(this).removeClass($(this).data("animate"))
    //     }), t.eq(a.item.index).find(".animated").each(function() {
    //         $(this).addClass($(this).data("animate"))
    //     })
    // }));
    // var o = $(".product-slider");
    // o.length && o.owlCarousel({
    //     dots: !1,
    //     nav: !0,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     responsive: {
    //         0: {
    //             items: 2
    //         },
    //         768: {
    //             items: 3
    //         },
    //         992: {
    //             items: 4
    //         },
    //         1200: {
    //             items: 5
    //         }
    //     }
    // });
    // var n = $(".brand-slider");
    // n.length && n.owlCarousel({
    //     dots: !1,
    //     nav: !0,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     responsive: {
    //         0: {
    //             items: 2,
    //             margin: 10
    //         },
    //         576: {
    //             items: 3,
    //             margin: 10
    //         },
    //         768: {
    //             items: 4,
    //             margin: 15
    //         },
    //         992: {
    //             items: 5,
    //             margin: 30
    //         },
    //         1200: {
    //             items: 6,
    //             margin: 30
    //         }
    //     }
    // });
    // var s = $(".quickview-slider");
    // if (s.length && s.owlCarousel({
    //         dots: !1,
    //         nav: !0,
    //         navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //         responsive: {
    //             0: {
    //                 items: 2
    //             },
    //             576: {
    //                 items: 1
    //             }
    //         }
    //     }), $(".quick-view").click(function() {
    //         $("#QuickViewModal").modal("show")
    //     }), (l = $("#price")).length) {
    //     var l = document.getElementById("price");
    //     noUiSlider.create(l, {
    //         start: [20, 80],
    //         connect: !0,
    //         range: {
    //             min: 0,
    //             max: 100
    //         }
    //     }), l.noUiSlider.on("update", function(a, t) {
    //         var e = a[t];
    //         t ? $("#max-price").val(Math.round(e)).attr("value", Math.round(e)) : $("#min-price").val(Math.round(e)).attr("value", Math.round(e))
    //     }), $("#max-price").on("change", function() {
    //         l.noUiSlider.set([null, this.value])
    //     }), $("#min-price").on("change", function() {
    //         l.noUiSlider.set([this.value, null])
    //     })
    // }
    // if ((d = $("#rating-range")).length) {
    //     var d = document.getElementById("rating-range");
    //     noUiSlider.create(d, {
    //         start: [$("#min-range").val(), $("#max-range").val()],
    //         connect: !0,
    //         orientation: "vertical",
    //         snap: !0,
    //         direction: "rtl",
    //         range: {
    //             min: 1,
    //             "25%": 2,
    //             "50%": 3,
    //             "75%": 4,
    //             max: 5
    //         },
    //         pips: {
    //             mode: "values",
    //             values: [1, 2, 3, 4, 5]
    //         }
    //     }), d.noUiSlider.on("update", function(a, t) {
    //         var e = $("#rating-range");
    //         e.find('.noUi-value[style="bottom: 100%;"]').html('<div class="rating"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></div>'), e.find('.noUi-value[style="bottom: 75%;"]').html('<div class="rating"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></div>'), e.find('.noUi-value[style="bottom: 50%;"]').html('<div class="rating"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></div>'), e.find('.noUi-value[style="bottom: 25%;"]').html('<div class="rating"><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></div>'), e.find('.noUi-value[style="bottom: 0%;"]').html('<div class="rating"><i class="fa fa-star-o"></i></div>');
    //         var i = a[t];
    //         t ? $("#max-range").val(Math.round(i)).attr("value", Math.round(i)) : $("#min-range").val(Math.round(i)).attr("value", Math.round(i));
    //         for (var o = $("#min-range").val(), n = "" == (n = $("#max-range").val()) ? o : n, s = o; s < parseInt(n) + 1; s++) {
    //             switch (s) {
    //                 case 5:
    //                 case "5":
    //                     var l = "100%";
    //                     break;
    //                 case 4:
    //                 case "4":
    //                     l = "75%";
    //                     break;
    //                 case 3:
    //                 case "3":
    //                     l = "50%";
    //                     break;
    //                 case 2:
    //                 case "2":
    //                     l = "25%";
    //                     break;
    //                 case 1:
    //                 case "1":
    //                     l = "0%"
    //             }
    //             e.find('.noUi-value[style="bottom: ' + l + ';"]').find(".fa").addClass("fa-star").removeClass("fa-star-o")
    //         }
    //     }), $("#max-range").on("change", function() {
    //         d.noUiSlider.set([null, this.value])
    //     }), $("#min-range").on("change", function() {
    //         d.noUiSlider.set([this.value, null])
    //     })
    // }
    // var r = $(".products-slider-detail");
    // if (r.length) {
    //     var c = $(".products-slider-detail a").length;
    //     r.owlCarousel({
    //         margin: 5,
    //         dots: !1,
    //         nav: !(c < 5),
    //         mouseDrag: !(c < 5),
    //         touchDrag: !(c < 5),
    //         navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //         responsive: {
    //             0: {
    //                 items: 4
    //             }
    //         }
    //     }), $(".products-slider-detail a").click(function() {
    //         var a = $(this).find("img").attr("src"),
    //             t = $(this).find("img").attr("data-zoom-image"),
    //             e = $(".image-detail");
    //         return e.attr("src", a), e.attr("data-zoom-image", t), $(".zoomWindow").css("background-image", 'url("' + t + '")'), !1
    //     })
    // }
    // var h = $(".input-rating");
    // h.length && h.raty({
    //     half: !0,
    //     starType: "i"
    // }), $(".image-detail").length && "sm" != breakpoint.value && "xs" != breakpoint.value && $(".image-detail").ezPlus({
    //     responsive: !0,
    //     respond: [{
    //         range: "1200-10000",
    //         zoomWindowHeight: 477,
    //         zoomWindowWidth: 762
    //     }, {
    //         range: "992-1200",
    //         zoomWindowHeight: 504,
    //         zoomWindowWidth: 562
    //     }, {
    //         range: "768-992",
    //         zoomWindowHeight: 449,
    //         zoomWindowWidth: 362
    //     }, {
    //         range: "100-768",
    //         zoomWindowHeight: 0,
    //         zoomWindowWidth: 0
    //     }]
    // }), $(window).scroll(function() {
    //     $(this).scrollTop() > 100 ? $(".back-top").fadeIn() : $(".back-top").fadeOut()
    // })
});