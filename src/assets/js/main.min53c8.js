$(document).ready(function() {
    0 < $(".about-mobile").length && ($(".about-mobile").on("click", function(e) {
        $(".about-mobile-backdrop").show(), $("body").css("overflow", "hidden"), e.preventDefault()
    }), $(".about-mobile-close, .about-mobile-backdrop").on("click", function(e) {
        (e.target.classList.contains("about-mobile-close") || e.target.classList.contains("about-mobile-backdrop")) && ($(".about-mobile-backdrop").hide(), $("body").css("overflow", "unset")), e.preventDefault()
    }))
}), $(document).ready(function() {
	var slider = tns({
	    container: '.logos',
	    items: 3,
	    slideBy: 'page',
	    autoWidth: false,
	    controls: false,
  		mouseDrag: true,
  		swipeAngle: false,
  		speed: 400,
  		autoplayButtonOutput: false,
  		navContainer: false,
  		controlsContainer: false,
  		responsive: {
        768: {
            items: 2,
            fixedWidth: 500,
        },
    },
	  });

    if (0 < $(".js-breadcrumb").length) {
        function e() {
            var e = $(document).scrollTop();
            r < e && !t && (i.addClass("breadcrumb-fixed"), t = !0), e < r && t && (i.removeClass("breadcrumb-fixed"), t = !1)
        }
        var t = !1,
            n = $(".js-breadcrumb"),
            a = $(".header"),
            i = $("body"),
            s = parseInt(a.css("height")),
            r = n.position().top - s;
        if ($(".js-breadcrumb-toggle").on("click", function(e) {
                n.toggleClass("is-open"), e.preventDefault()
            }), $(window).on("scroll", e), e(), 0 < $(".breadcrumb-pages-wrapper").length) {
            var o = $(".breadcrumb-social"),
                l = $(".breadcrumb-pages-inner"),
                d = l.children().length;
            0 < $(".js-breadcrumb-prevOLD").length && l.css("top", "-36px"), $(".breadcrumb-prevOLD").on("mouseover", function() {
                o.fadeOut("fast"), l.css("top", "0")
            }).on("mouseout", function() {
                o.fadeIn("fast"), l.css("top", "-36px")
            }), $(".breadcrumb-nextOLD").on("mouseover", function() {
                o.fadeOut("fast"), l.css("top", 3 === d ? "-72px" : "-36px")
            }).on("mouseout", function() {
                o.fadeIn("fast"), l.css("top", 3 === d ? "-36px" : "0")
            }), setTimeout(function() {
                l.css("transition", "top ease-in-out .1s")
            }, 500)
        }
    }
}), $(document).ready(function() {
    if (0 < $(".js-contact-form").length) {
        var n = $(".js-contact-popup"),
            a = $(".js-contact-form");
        a.on("submit", function(e) {
            e.preventDefault(), $(".contact-form-field").removeClass("has-error"), a.find(".contact-form-message").hide();
            var t = !1;
            a.find(".contact-form-input").each(function() {
                0 === $(this).val().trim().length && (t = !0, $(this).siblings(".contact-form-message").fadeIn(), $(this).parents(".contact-form-field").addClass("has-error"))
            }), t ? (a.addClass("has-error"), a.children(".js-message").fadeIn()) : grecaptcha.ready(function() {
                grecaptcha.execute("6LfuMJ0UAAAAAFrQSdEGzMahsiM-Nf1W59bOyHCA", {
                    action: "contact"
                }).then(function(e) {
                    a.prepend('<input type="hidden" name="g-recaptcha-response" value="' + e + '">');
                    var t = a.serialize();
                    $.ajax({
                        type: "POST",
                        url: a.attr("action"),
                        data: t
                    }).done(function(e) {
                        "true" == e.success ? (a.find(".contact-form-input").each(function() {
                            $(this).val("")
                        }), n.fadeIn()) : console.error("Error: " + e.code)
                    }).fail(function(e) {
                        console.error("Error: " + e.code)
                    })
                })
            })
        }), $(".js-contact-popup-close").on("click", function(e) {
            n.fadeOut(), e.preventDefault()
        })
    }
}), $(document).ready(function() {
    if (0 < $(".js-filter").length) {
        var r = {};
        $(".js-filter").each(function() {
            var n = Math.random().toString(36).substr(2, 5),
                a = $(this);
            a.attr("data-identifier", n);
            var e = $('<div class="filter" data-identifier="' + n + '"></div>'),
                i = $('<span class="filter-handle" data-identifier="' + n + '"></span>'),
                s = $('<div class="filter-dropdown"></div>');
            r[n] = [], a.children("option").each(function() {
                var e = {
                        dropdownLabel: $(this).attr("name") || $(this).text(),
                        selected: $(this).attr("value") === a.val(),
                        label: $(this).text(),
                        value: $(this).val()
                    },
                    t = $('<span class="filter-item" data-identifier="' + n + '" data-index="' + r[n].length + '">' + e.dropdownLabel + "</span>");
                e.selected && (t.addClass("is-active"), i.text(e.label)), s.append(t), r[n].push(e)
            }), e.append(i), e.append(s), e.insertBefore(a)
        }), $(".filter-handle").on("click", function(e) {
            $(this).parents(".filter").toggleClass("is-active"), e.preventDefault()
        }), $(".filter-item").on("click", function(e) {
            var t = $(this).data("identifier"),
                n = parseInt($(this).data("index")),
                a = r[t][n];
            $('.filter-item[data-identifier="' + t + '"]').removeClass("is-active"), $(this).addClass("is-active"), $('.filter-handle[data-identifier="' + t + '"]').text(a.label), $('select[data-identifier="' + t + '"]').val(a.value), $(".filter[data-identifier]").removeClass("is-active"), e.preventDefault()
        }), $("body").on("click", function(e) {
            0 === $(e.target).parents(".filter").length && $(".filter").removeClass("is-active")
        })
    }
}), $(document).ready(function() {
    if (0 < $(".homepage").length) {
        function e() {
            var e = $(document).scrollTop();
            a < e && t && (n.removeClass("is-transparent"), t = !1), e < a && !t && (n.addClass("is-transparent"), t = !0)
        }
        var t = !0,
            n = $(".header"),
            a = $(".quote").offset().top - parseInt(n.css("height"));
        $(window).on("scroll", e), e()
    }
}), $(document).ready(function() {
    $(".kg-card-hascaption").each(function() {
        var e = $(this).find("figcaption").text();
        $(this).find("img").attr("alt", e)
    })
}), $(document).ready(function() {
    0 < $(".mobile-nav").length && ($(".mobile-nav-lang-link.is-active").on("click", function(e) {
        $(".mobile-nav-lang").toggleClass("is-open"), $(".mobile-nav-link.has-dropdown").removeClass("is-open"), e.preventDefault()
    }), $(".mobile-nav-close, .mobile-nav-backdrop").on("click", function(e) {
        (e.target.classList.contains("mobile-nav-close") || e.target.classList.contains("mobile-nav-backdrop")) && ($(".mobile-nav-backdrop").hide(), $("body").css("overflow", "unset")), e.preventDefault()
    }), $(".header-hamburger").on("click", function(e) {
        $(".mobile-nav-backdrop").show(), $("body").css("overflow", "hidden"), e.preventDefault()
    }), $(".header-nav-link.has-dropdown > span").on("click", function(e) {
        $(this).parents(".header-nav-link").toggleClass("is-open"), e.preventDefault()
    }), $(".header-nav-link.has-dropdown").on("mouseleave", function() {
        $(this).removeClass("is-open")
    }), $("body").on("click", function(e) {
        $(e.target).parents(".header-nav-link.has-dropdown").length || $(".header-nav-link.has-dropdown.is-open").removeClass("is-open")
    }), $(".mobile-nav-link.has-dropdown > span").on("click", function(e) {
        $(this).parents(".mobile-nav-link").toggleClass("is-open"), e.preventDefault()
    }), $(".mobile-nav-link").on("click", function() {
        var e = $(this).attr("href");
        null != e && (window.location.href = e)
    }), $(".mobile-nav-lang-link").on("click", function() {
        var e = $(this).attr("href");
        null != e && (window.location.href = e), console.log("wtf")
    }))
}), $(document).ready(function() {
    if (0 < $(".js-newsletter-form").length) {
        var n = $(".js-newsletter-popup"),
            a = $(".js-newsletter-form");
        a.on("submit", function(e) {
            e.preventDefault(), a.removeClass("has-error"), a.children(".js-message").fadeOut();
            var t = !1;
            a.children("input").each(function() {
                0 === $(this).val().trim().length && (t = !0)
            }), t ? (a.addClass("has-error"), a.children(".js-message").fadeIn()) : grecaptcha.ready(function() {
                grecaptcha.execute("6LfuMJ0UAAAAAFrQSdEGzMahsiM-Nf1W59bOyHCA", {
                    action: "newsletter"
                }).then(function(e) {
                    a.prepend('<input type="hidden" name="g-recaptcha-response" value="' + e + '">');
                    var t = a.serialize();
                    $.ajax({
                        type: "POST",
                        url: a.attr("action"),
                        data: t
                    }).done(function(e) {
                        "true" == e.success ? (a.children("input").each(function() {
                            $(this).val("")
                        }), n.fadeIn()) : console.error("Error: " + e.code)
                    }).fail(function(e) {
                        console.error("Error: " + e.code)
                    })
                })
            })
        }), $(".js-newsletter-popup-close").on("click", function(e) {
            n.fadeOut(), e.preventDefault()
        })
    }
});
var iphoneDetect = function() {
    if ($("html").removeClass("is-iphone").removeClass("is-iphone-x").removeClass("is-iphone-landscape"), navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
        if (window.innerHeight > window.innerWidth) {
            $("html").addClass("is-iphone");
            var e = window.devicePixelRatio || 1,
                t = window.screen.width * e,
                n = window.screen.height * e;
            navigator.platform && /iPhone|iPod/.test(navigator.platform) && 1125 <= t && 2436 <= n && $("html").addClass("is-iphone-x")
        } else $("html").addClass("is-iphone-landscape")
};
iphoneDetect(), $(window).on("resize", iphoneDetect);
for (var calculateShown = function(e) {
        var t = getComputedStyle(e.parentNode),
            n = parseInt(t.width),
            a = getComputedStyle(e.children[1], null),
            i = parseInt(a.width) + parseInt(a["margin-left"]);
        return Math.floor((n + parseInt(a["margin-left"])) / i)
    }, $sliders = document.getElementsByClassName("js-slider"), $dots = document.getElementsByClassName("js-slider-dots"), sliders = {}, i = 0; i < $sliders.length; ++i) {
    for (var $controls = null, $slider = $sliders[i], j = 0; j < $dots.length; ++j) $dots[j].getAttribute("data-slider") === $slider.getAttribute("data-slider") && ($controls = $dots[j]);
    for (j = 0; j < $slider.children.length; ++j) {
        var $dot = document.createElement("div");
        $dot.setAttribute("data-slider", $slider.getAttribute("data-slider")), $dot.setAttribute("data-index", j), $dot.classList.add("slider-dot"), $controls.appendChild($dot), $dot.addEventListener("click", function(e) {
            var t = e.target,
                n = sliders[t.getAttribute("data-slider")],
                a = getComputedStyle(n.element.children[1], null),
                i = parseInt(a.width) + parseInt(a["margin-left"]);
            $slider.currentSlide = t.getAttribute("data-index"), n.offset = i * $slider.currentSlide * -1, n.element.style.left = n.offset + "px";
            for (var s = 0; s < n.controls.children.length; ++s) n.controls.children[s].classList.remove("is-active");
            t.classList.add("is-active"), e.preventDefault()
        })
    }
    $slider.parentNode.addEventListener("touchstart", function(e) {
        for (var t = e.target; !t.classList.contains("js-slider");) t = t.parentNode;
        sliders[t.getAttribute("data-slider")].touch.startX = e.layerX
    }), $slider.parentNode.addEventListener("touchend", function(e) {
        for (var t = e.target; !t.classList.contains("js-slider");) t = t.parentNode;
        var n = sliders[t.getAttribute("data-slider")],
            a = 0 < e.layerX - n.touch.startX,
            i = getComputedStyle(n.element.children[1], null),
            s = parseInt(i.width) + parseInt(i["margin-left"]);
        n.touch.startX = -1, a ? 0 < n.currentSlide && n.currentSlide-- : n.currentSlide < n.slides - 1 && n.currentSlide++, n.offset = s * n.currentSlide * -1, n.element.style.left = n.offset + "px";
        for (var r = 0; r < n.controls.children.length; ++r) n.controls.children[r].classList.remove("is-active");
        n.controls.children[n.currentSlide].classList.add("is-active")
    }), $controls.firstChild.classList.add("is-active"), sliders[$slider.getAttribute("data-slider")] = {
        currentSlide: 0,
        controls: $controls,
        element: $slider,
        slides: $slider.children.length,
        offset: 0,
        touch: {
            startX: -1
        },
        shown: calculateShown($slider)
    }
}
window.addEventListener("resize", function() {
    for (var e in sliders)
        if (sliders.hasOwnProperty(e)) {
            var t = sliders[e];
            t.currentSlide = 0, t.offset = 0, t.shown = calculateShown(t.element), t.element.style.left = t.offset;
            for (var n = 0; n < t.controls.children.length; ++n) t.controls.children[n].classList.remove("is-active");
            t.controls.firstChild.classList.add("is-active")
        }
});