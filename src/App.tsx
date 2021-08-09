import React, { useEffect } from 'react';
import $ from 'jquery';
import { tns } from '../node_modules/tiny-slider/src/tiny-slider';
import './App.css';

function App() {
  /* eslint-disable */
  useEffect(() => {
    $(document).ready(function() {
      0 < $(".about-mobile").length && ($(".about-mobile").on("click", function(e) {
        $(".about-mobile-backdrop").show(), $("body").css("overflow", "hidden"), e.preventDefault()
      }), $(".about-mobile-close, .about-mobile-backdrop").on("click", function(e) {
        (e.target.classList.contains("about-mobile-close") || e.target.classList.contains("about-mobile-backdrop")) && ($(".about-mobile-backdrop").hide(), $("body").css("overflow", "unset")), e.preventDefault()
      }))
    }), $(document).ready(function() {
      tns({
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
        let e = () => {
          const st = $(document).scrollTop();
          // @ts-ignore
          r < st && !t && (i.addClass("breadcrumb-fixed"), t = !0), st < r && t && (i.removeClass("breadcrumb-fixed"), t = !1)
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
      if (0 < $(".js-filter").length) {
        var r = {};
        $(".js-filter").each(function() {
          var n = Math.random().toString(36).substr(2, 5),
            a = $(this);
          a.attr("data-identifier", n);
          var e = $('<div class="filter" data-identifier="' + n + '"></div>'),
            i = $('<span class="filter-handle" data-identifier="' + n + '"></span>'),
            s = $('<div class="filter-dropdown"></div>');
          // @ts-ignore
          r[n] = [], a.children("option").each(function() {
            var e = {
                dropdownLabel: $(this).attr("name") || $(this).text(),
                selected: $(this).attr("value") === a.val(),
                label: $(this).text(),
                value: $(this).val()
              },// @ts-ignore
              t = $('<span class="filter-item" data-identifier="' + n + '" data-index="' + r[n].length + '">' + e.dropdownLabel + "</span>");
            // @ts-ignore
            e.selected && (t.addClass("is-active"), i.text(e.label)), s.append(t), r[n].push(e)
          }), e.append(i), e.append(s), e.insertBefore(a)
        }), $(".filter-handle").on("click", function(e) {
          $(this).parents(".filter").toggleClass("is-active"), e.preventDefault()
        }), $(".filter-item").on("click", function(e) {
          var t = $(this).data("identifier"),
            n = parseInt($(this).data("index")),
            // @ts-ignore
            a = r[t][n];
          $('.filter-item[data-identifier="' + t + '"]').removeClass("is-active"), $(this).addClass("is-active"), $('.filter-handle[data-identifier="' + t + '"]').text(a.label), $('select[data-identifier="' + t + '"]').val(a.value), $(".filter[data-identifier]").removeClass("is-active"), e.preventDefault()
        }), $("body").on("click", function(e) {
          0 === $(e.target).parents(".filter").length && $(".filter").removeClass("is-active")
        })
      }
    }), $(document).ready(function() {
      if (0 < $(".homepage").length) {
        const e = () => {
          var scrollTop = $(document).scrollTop();
          // @ts-ignore
          a < scrollTop && t && (n.removeClass("is-transparent"), t = !1), scrollTop < a && !t && (n.addClass("is-transparent"), t = !0)
        }
        var t = !0,
          n = $(".header"),
          // @ts-ignore
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
    // @ts-ignore
    for (var calculateShown = function(e) {
      var t = getComputedStyle(e.parentNode),
        n = parseInt(t.width),
        a = getComputedStyle(e.children[1], null),
        // @ts-ignore
        i = parseInt(a.width) + parseInt(a["margin-left"]);
      // @ts-ignore
      return Math.floor((n + parseInt(a["margin-left"])) / i)
    }, $sliders = document.getElementsByClassName("js-slider"), $dots = document.getElementsByClassName("js-slider-dots"), sliders = {}, i = 0; i < $sliders.length; ++i) {
      for (var $controls = null, $slider = $sliders[i], j = 0; j < $dots.length; ++j) $dots[j].getAttribute("data-slider") === $slider.getAttribute("data-slider") && ($controls = $dots[j]);
      for (j = 0; j < $slider.children.length; ++j) {
        var $dot = document.createElement("div");
        // @ts-ignore
        $dot.setAttribute("data-slider", $slider.getAttribute("data-slider")), $dot.setAttribute("data-index", j), $dot.classList.add("slider-dot"), $controls.appendChild($dot), $dot.addEventListener("click", function(e) {
          var t = e.target,
            // @ts-ignore
            n = sliders[t.getAttribute("data-slider")],
            a = getComputedStyle(n.element.children[1], null),
            // @ts-ignore
            i = parseInt(a.width) + parseInt(a["margin-left"]);
          // @ts-ignore
          $slider.currentSlide = t.getAttribute("data-index"), n.offset = i * $slider.currentSlide * -1, n.element.style.left = n.offset + "px";
          for (var s = 0; s < n.controls.children.length; ++s) n.controls.children[s].classList.remove("is-active");
          // @ts-ignore
          t.classList.add("is-active"), e.preventDefault()
        })
      }
      // @ts-ignore
      $slider.parentNode.addEventListener("touchstart", function(e) {
        // @ts-ignore
        for (var t = e.target; !t.classList.contains("js-slider");) t = t.parentNode;
        // @ts-ignore
        sliders[t.getAttribute("data-slider")].touch.startX = e.layerX
        // @ts-ignore
      }), $slider.parentNode.addEventListener("touchend", function(e) {
        // @ts-ignore
        for (var t = e.target; !t.classList.contains("js-slider");) t = t.parentNode;
        // @ts-ignore
        var n = sliders[t.getAttribute("data-slider")],
          // @ts-ignore
          a = 0 < e.layerX - n.touch.startX,
          i = getComputedStyle(n.element.children[1], null),
          // @ts-ignore
          s = parseInt(i.width) + parseInt(i["margin-left"]);
        n.touch.startX = -1, a ? 0 < n.currentSlide && n.currentSlide-- : n.currentSlide < n.slides - 1 && n.currentSlide++, n.offset = s * n.currentSlide * -1, n.element.style.left = n.offset + "px";
        for (var r = 0; r < n.controls.children.length; ++r) n.controls.children[r].classList.remove("is-active");
        n.controls.children[n.currentSlide].classList.add("is-active")
        // @ts-ignore
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
          // @ts-ignore
          var t = sliders[e];
          t.currentSlide = 0, t.offset = 0, t.shown = calculateShown(t.element), t.element.style.left = t.offset;
          for (var n = 0; n < t.controls.children.length; ++n) t.controls.children[n].classList.remove("is-active");
          t.controls.firstChild.classList.add("is-active")
        }
    });
  }, []);

  return (
    <>
      <div className="dialog-overlay is-hidden"/>
      <div className="mobile-nav-backdrop">
        <div className="mobile-nav">
          <a className="mobile-nav-logo" href="https://www.djordjes.com" title="Djordje Stojiljkovic">Djordje<br />Stojiljkovic</a>
          <button className="mobile-nav-close"/>
          <nav className="mobile-nav-links">
            <a className="mobile-nav-link" href="/" title="Home"><span>Home</span></a>
            <a className="mobile-nav-link" href="/" title="About"><span>About</span></a>
            <a className="mobile-nav-link" href="/" title="Reviews"><span>Reviews</span></a>
            <a className="mobile-nav-link" href="/" title="Art"><span>Art</span></a>
            <a className="mobile-nav-link" href="/" title="Blog"><span>Blog</span></a>
            <a className="mobile-nav-link" href="/" title="Contact"><span>Contact</span></a>
          </nav>
        </div>
      </div>
      <header className="header is-transparent">
        <div className="container">
          <a className="header-logo" href="https://www.djordjes.com" title="Djordje Stojiljkovic">Djordje Stojiljkovic</a>
          <nav className="header-nav">
            <a className="header-nav-link" href="/" title="Home"><span>Home</span></a>
            <a className="header-nav-link" href="/" title="About"><span>About</span></a>
            <a className="header-nav-link" href="/" title="Reviews"><span>Reviews</span></a>
            <a className="header-nav-link" href="/" title="Art"><span>Art</span></a>
            <a className="header-nav-link" href="/" title="Blog"><span>Blog</span></a>
            <a className="header-nav-link" href="/" title="Contact"><span>Contact</span></a>
          </nav>
          <div className="header-right">
            <a className="header-contact"
               href="https://www.djordjes.com/cdn-cgi/l/email-protection#84ece1e8e8ebc4eee1f7f7e1f2e5eae0ebf6e1eaaae7ebe9"
               title="Get in touch">Get in touch</a>
          </div>
          <button className="header-hamburger"/>
        </div>
      </header>
      <div className="hero">
        <div className="container">
          <div className="hero-intro">
            <h5>Hello!</h5>
            <h4>I&#x27;m Djordje Stojiljkovic</h4>
            <p>Full Stack Software Developer. Passionate about clean code, software: architecture, design practices,
              principles, paradigms & concepts.
            </p>
          </div>
          <div className="hero-media">
            <h5>Sharon Hershon, Sr. Computer Scientist at Adobe:</h5>
            <h4>&quot;Djordje wrangled our UI requirements with minimal guidance and didn't hesitate to jump into
              server-side work. His designs were always elegant and creative. Djordje is naturally curious, takes pride in
              his work and is fearless, all traits that exemplify the best engineers. I wholeheartedly recommend Djordje
              and would not hesitate to hire him for the most challenging projects.&quot;</h4>
          </div>
        </div>
      </div>
      <div className="quote">
        <div className="container">
          <span className="quote-scroll">Scroll</span>
          <h2>A constant tendency for improving, both in hard and soft skills, especially the ones useful for the
            improvement of the team and the company I am working for.</h2>
        </div>
      </div>
      <div className="homepage-main">
        <div className="homepage-articles">
          <div className="container is-small is-m">
            <p className="lead margin50">Curious about what I do?</p>
            <div className="about-h5">
              <p className="about-p">Full Stack Software Developer with 7+ years of experience in the industry, doing
                photography for 8 years now, arenaline junkie, music addict.</p>

              <div className="jsx-2202876063 logos">
                <div className="jsx-2202876063 logo"><a
                  href="/elasticon/conf/2016/sf/dude-where-are-my-messages-message-analytics-at-netflix?elektra=home&amp;storm=logo-bar"><img
                  src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt0be4c202c53a151b/5f32ba7a48d3b57cb9749aa9/logohome-netflix.svg"
                  alt="Netflix Logo" className="jsx-2202876063 img-fluid" /></a></div>
                <div className="jsx-2202876063 logo"><a
                  href="/elasticon/conf/2017/sf/powering-uber-marketplace-real-time-data-needs-with-elasticsearch?elektra=home&amp;storm=logo-bar"><img
                  src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt807449107d226e2c/5f32ba88d9a24d7c67e50819/logohome-uber.svg"
                  alt="Uber Logo" className="jsx-2202876063 img-fluid" /></a></div>
                <div className="jsx-2202876063 logo"><a
                  href="/elasticon/conf/2017/sf/security-at-slack?elektra=home&amp;storm=logo-bar"><img
                  src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt377031d153fa9bbd/5f32ba90327a6201d7ebae22/logohome-slack.svg"
                  alt="Slack Logo" className="jsx-2202876063 img-fluid" /></a></div>
                <div className="jsx-2202876063 logo"><a href="/customers/twilio?elektra=home&amp;storm=logo-bar"><img
                  src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt3b5ac9082fc8cdb7/5f32ba979af97004e7f64138/logohome-twilio.svg"
                  alt="Twilio Logo" className="jsx-2202876063 img-fluid" /></a></div>
                <div className="jsx-2202876063 logo"><a
                  href="/elasticon/conf/2018/sf/monitor-your-cloud-environment-with-the-logstash-azure-monitoring-module?elektra=home&amp;?storm=logo-bar"><img
                  src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/bltadbe0f2aa60f3388/5f32baa07ca22b018aed88f1/logohome-microsoft.svg"
                  alt="Microsoft Logo" className="jsx-2202876063 img-fluid" /></a></div>
              </div>
            </div>
            <div className="container">
              <div className="category-items-slider">
                <div className="category-items js-slider" data-slider="1">
                  <a className="category-item is-yellow" href="rank-higher-on-google/index.html"
                     title="Rank Higher on Google">
                    <h6 className="item-subtitle">Mar 28, 2020</h6>
                    <h5 className="item-name">Rank Higher on Google</h5>
                    <span className="item-view">View article</span>
                  </a>
                  <a className="category-item is-yellow" href="what-is-a-hackathon/index.html"
                     title="What is a Hackathon? The Meaning and Two Practical Examples.">
                    <h6 className="item-subtitle">Mar 28, 2020</h6>
                    <h5 className="item-name">What is a Hackathon? The Meaning and Two Practical Examples.</h5>
                    <span className="item-view">View article</span>
                  </a>
                  <a className="category-item is-yellow" href="brainstorming-methods/index.html"
                     title="Learn all the brainstorming methods to organize a brainstorming session">
                    <h6 className="item-subtitle">Mar 25, 2020</h6>
                    <h5 className="item-name">Learn all the brainstorming methods to organize a brainstorming session</h5>
                    <span className="item-view">View article</span>
                  </a>
                </div>
              </div>
              <div className="slider-dots js-slider-dots" data-slider="1"/>
            </div>
          </div>
          <div className="contact">
            <div className="container is-small">
              <h2 className="contact-title">
                Get in touch
                <a className="contact-email"
                   href="https://www.djordjes.com/cdn-cgi/l/email-protection#7a121f1616153a101f09091f0c1b141e15081f1454191517"><span>hello@djordjes.com</span></a>
              </h2>
              <p className="contact-intro">Get in touch through social media, email me or complete this form and I will
                reach out.</p>
              <form className="contact-form js-contact-form" method="post" action="https://api.djordjes.com/contact">
                <div className="contact-form-row">
                  <div className="contact-form-field">
                    <input className="contact-form-input" type="text" name="name" placeholder="Name" />
                      <span className="contact-form-message">Please enter your name</span>
                  </div>
                  <div className="contact-form-field">
                    <input className="contact-form-input" type="email" name="email" placeholder="Email" />
                      <span className="contact-form-message">Email address is invalid, please correct</span>
                  </div>
                </div>
                <div className="contact-form-field">
                  <textarea className="contact-form-input" name="message" placeholder="Message"/>
                  <span className="contact-form-message">Please enter your message</span>
                </div>
                <div className="contact-form-actions">
                  <input className="footer-input" type="hidden" name="origin_url" value="https://www.djordjes.com/" />
                    <button className="contact-form-submit">Submit</button>
                    <div className="contact-form-social">
                      <a className="contact-form-social-link is-facebook"
  href="https://facebook.com/djordjestojilljkovic.39" title="Facebook" target="_blank"/>
                      <a className="contact-form-social-link is-twitter" href="https://twitter.com/djordjes"
  title="Twitter" target="_blank"/>
                      <a className="contact-form-social-link is-skype" href="skype:djordjes?chat" title="Skype"
  target="_blank"/>
                      <a className="contact-form-social-link is-linkedin" href="https://linkedin.com/in/djordjes"
  title="LinkedIn" target="_blank"/>
                    </div>
                    <a className="contact-email"
                       href="https://www.djordjes.com/cdn-cgi/l/email-protection#6e060b0202012e040b1d1d0b180f000a011c0b00400d0103">
                      <span>hello@djordjes.com</span>
                    </a>
                </div>
              </form>
            </div>
            <div className="contact-popup js-contact-popup">
              <div className="contact-popup-body">
                <h2 className="contact-popup-title">Thank you!</h2>
                <p className="contact-popup-text">I have received your message and will be in touch very soon, thank you
                  for your interest.</p>
                <button className="contact-popup-button js-contact-popup-close">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container is-small">
          <div className="footer-left">
            <h2>Social</h2>
            <div className="footer-social-links">
              <a className="footer-social-link is-facebook" href="https://facebook.com/djordjes.39" title="Facebook"
                 target="_blank"><span>Facebook</span></a>
              <a className="footer-social-link is-skype" href="skype:djordjes?chat" title="Skype"
                 target="_blank"><span>Skype</span></a>
              <a className="footer-social-link is-twitter" href="https://twitter.com/djordjes" title="Twitter"
                 target="_blank"><span>Twitter</span></a>
              <a className="footer-social-link is-linkedin" href="https://linkedin.com/in/djordjes" title="LinkedIn"
                 target="_blank"><span>LinkedIn</span></a>
            </div>
            <h2>Contact</h2>
            <p className="is-contact">
              <a href="https://www.djordjes.com/cdn-cgi/l/email-protection"
                 className="__cf_email__">hello@djordjes.com</a><br />
              Serbia<br />11000 Belgrade
            </p>
          </div>
          <div className="footer-right">
            <h2>Join my email list</h2>
            <p>Would you like to stay informed about new content, ideas and engagements? Sign up for my email list!</p>
            <form className="footer-form js-newsletter-form" method="post" action="https://api.djordjes.com/newsletter">
              <span className="footer-message js-message">Please enter a valid email address</span>
              <input className="footer-input" type="hidden" name="origin_url" value="https://www.djordjes.com/" />
                <input className="footer-input" type="email" name="email" placeholder="Your email address" />
                  <button className="footer-submit">Submit</button>
            </form>
            <h2>Partner with me</h2>
            <p>I&#x27;m always excited to discuss new opportunities for growth or business partnership. Feel free to
              reach out!</p>
            <a className="footer-link"
               href="https://www.djordjes.com/cdn-cgi/l/email-protection#d9b1bcb5b5b699b3bcaaaabcafb8b7bdb6abbcb7f7bab6b4"
               title="Get in touch">Get in touch</a>
          </div>
        </div>
        <div className="footer-popup js-newsletter-popup">
          <div className="footer-popup-body">
            <h2 className="footer-popup-title">Thank you!</h2>
            <p className="footer-popup-text">Your email has been added to my list and I will keep you informed about
              industry news.</p>
            <button className="footer-popup-button js-newsletter-popup-close">Close</button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
