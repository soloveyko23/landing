(() => {
    var __webpack_modules__ = {
        144: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                const e = "undefined" != typeof window, t = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), a = e && window.devicePixelRatio > 1, n = {
                    elements_selector: ".lazy",
                    container: t || e ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, s = e => Object.assign({}, n, e), l = function(e, t) {
                    let a;
                    const n = "LazyLoad::Initialized", s = new e(t);
                    try {
                        a = new CustomEvent(n, {
                            detail: {
                                instance: s
                            }
                        });
                    } catch (e) {
                        a = document.createEvent("CustomEvent"), a.initCustomEvent(n, !1, !1, {
                            instance: s
                        });
                    }
                    window.dispatchEvent(a);
                }, o = "src", r = "srcset", i = "sizes", d = "poster", c = "llOriginalAttrs", _ = "data", u = "loading", g = "loaded", b = "applied", h = "error", m = "native", p = "data-", f = "ll-status", v = (e, t) => e.getAttribute(p + t), E = e => v(e, f), I = (e, t) => ((e, t, a) => {
                    const n = p + t;
                    null !== a ? e.setAttribute(n, a) : e.removeAttribute(n);
                })(e, f, t), y = e => I(e, null), k = e => null === E(e), A = e => E(e) === m, L = [ u, g, b, h ], w = (e, t, a, n) => {
                    e && "function" == typeof e && (void 0 === n ? void 0 === a ? e(t) : e(t, a) : e(t, a, n));
                }, x = (t, a) => {
                    e && "" !== a && t.classList.add(a);
                }, C = (t, a) => {
                    e && "" !== a && t.classList.remove(a);
                }, O = e => e.llTempImage, M = (e, t) => {
                    if (!t) return;
                    const a = t._observer;
                    a && a.unobserve(e);
                }, z = (e, t) => {
                    e && (e.loadingCount += t);
                }, N = (e, t) => {
                    e && (e.toLoadCount = t);
                }, T = e => {
                    let t = [];
                    for (let a, n = 0; a = e.children[n]; n += 1) "SOURCE" === a.tagName && t.push(a);
                    return t;
                }, R = (e, t) => {
                    const a = e.parentNode;
                    a && "PICTURE" === a.tagName && T(a).forEach(t);
                }, G = (e, t) => {
                    T(e).forEach(t);
                }, D = [ o ], H = [ o, d ], V = [ o, r, i ], F = [ _ ], j = e => !!e[c], B = e => e[c], J = e => delete e[c], S = (e, t) => {
                    if (j(e)) return;
                    const a = {};
                    t.forEach((t => {
                        a[t] = e.getAttribute(t);
                    })), e[c] = a;
                }, P = (e, t) => {
                    if (!j(e)) return;
                    const a = B(e);
                    t.forEach((t => {
                        ((e, t, a) => {
                            a ? e.setAttribute(t, a) : e.removeAttribute(t);
                        })(e, t, a[t]);
                    }));
                }, U = (e, t, a) => {
                    x(e, t.class_applied), I(e, b), a && (t.unobserve_completed && M(e, t), w(t.callback_applied, e, a));
                }, $ = (e, t, a) => {
                    x(e, t.class_loading), I(e, u), a && (z(a, 1), w(t.callback_loading, e, a));
                }, q = (e, t, a) => {
                    a && e.setAttribute(t, a);
                }, K = (e, t) => {
                    q(e, i, v(e, t.data_sizes)), q(e, r, v(e, t.data_srcset)), q(e, o, v(e, t.data_src));
                }, Q = {
                    IMG: (e, t) => {
                        R(e, (e => {
                            S(e, V), K(e, t);
                        })), S(e, V), K(e, t);
                    },
                    IFRAME: (e, t) => {
                        S(e, D), q(e, o, v(e, t.data_src));
                    },
                    VIDEO: (e, t) => {
                        G(e, (e => {
                            S(e, D), q(e, o, v(e, t.data_src));
                        })), S(e, H), q(e, d, v(e, t.data_poster)), q(e, o, v(e, t.data_src)), e.load();
                    },
                    OBJECT: (e, t) => {
                        S(e, F), q(e, _, v(e, t.data_src));
                    }
                }, W = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], X = (e, t) => {
                    !t || (e => e.loadingCount > 0)(t) || (e => e.toLoadCount > 0)(t) || w(e.callback_finish, t);
                }, Y = (e, t, a) => {
                    e.addEventListener(t, a), e.llEvLisnrs[t] = a;
                }, Z = (e, t, a) => {
                    e.removeEventListener(t, a);
                }, ee = e => !!e.llEvLisnrs, te = e => {
                    if (!ee(e)) return;
                    const t = e.llEvLisnrs;
                    for (let a in t) {
                        const n = t[a];
                        Z(e, a, n);
                    }
                    delete e.llEvLisnrs;
                }, ae = (e, t, a) => {
                    (e => {
                        delete e.llTempImage;
                    })(e), z(a, -1), (e => {
                        e && (e.toLoadCount -= 1);
                    })(a), C(e, t.class_loading), t.unobserve_completed && M(e, a);
                }, ne = (e, t, a) => {
                    const n = O(e) || e;
                    ee(n) || ((e, t, a) => {
                        ee(e) || (e.llEvLisnrs = {});
                        const n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                        Y(e, n, t), Y(e, "error", a);
                    })(n, (s => {
                        ((e, t, a, n) => {
                            const s = A(t);
                            ae(t, a, n), x(t, a.class_loaded), I(t, g), w(a.callback_loaded, t, n), s || X(a, n);
                        })(0, e, t, a), te(n);
                    }), (s => {
                        ((e, t, a, n) => {
                            const s = A(t);
                            ae(t, a, n), x(t, a.class_error), I(t, h), w(a.callback_error, t, n), a.restore_on_error && P(t, V), 
                            s || X(a, n);
                        })(0, e, t, a), te(n);
                    }));
                }, se = (e, t, n) => {
                    (e => W.indexOf(e.tagName) > -1)(e) ? ((e, t, a) => {
                        ne(e, t, a), ((e, t, a) => {
                            const n = Q[e.tagName];
                            n && (n(e, t), $(e, t, a));
                        })(e, t, a);
                    })(e, t, n) : ((e, t, n) => {
                        (e => {
                            e.llTempImage = document.createElement("IMG");
                        })(e), ne(e, t, n), (e => {
                            j(e) || (e[c] = {
                                backgroundImage: e.style.backgroundImage
                            });
                        })(e), ((e, t, n) => {
                            const s = v(e, t.data_bg), l = v(e, t.data_bg_hidpi), r = a && l ? l : s;
                            r && (e.style.backgroundImage = `url("${r}")`, O(e).setAttribute(o, r), $(e, t, n));
                        })(e, t, n), ((e, t, n) => {
                            const s = v(e, t.data_bg_multi), l = v(e, t.data_bg_multi_hidpi), o = a && l ? l : s;
                            o && (e.style.backgroundImage = o, U(e, t, n));
                        })(e, t, n), ((e, t, a) => {
                            const n = v(e, t.data_bg_set);
                            if (!n) return;
                            let s = n.split("|").map((e => `image-set(${e})`));
                            e.style.backgroundImage = s.join(), U(e, t, a);
                        })(e, t, n);
                    })(e, t, n);
                }, le = e => {
                    e.removeAttribute(o), e.removeAttribute(r), e.removeAttribute(i);
                }, oe = e => {
                    R(e, (e => {
                        P(e, V);
                    })), P(e, V);
                }, re = {
                    IMG: oe,
                    IFRAME: e => {
                        P(e, D);
                    },
                    VIDEO: e => {
                        G(e, (e => {
                            P(e, D);
                        })), P(e, H), e.load();
                    },
                    OBJECT: e => {
                        P(e, F);
                    }
                }, ie = (e, t) => {
                    (e => {
                        const t = re[e.tagName];
                        t ? t(e) : (e => {
                            if (!j(e)) return;
                            const t = B(e);
                            e.style.backgroundImage = t.backgroundImage;
                        })(e);
                    })(e), ((e, t) => {
                        k(e) || A(e) || (C(e, t.class_entered), C(e, t.class_exited), C(e, t.class_applied), 
                        C(e, t.class_loading), C(e, t.class_loaded), C(e, t.class_error));
                    })(e, t), y(e), J(e);
                }, de = [ "IMG", "IFRAME", "VIDEO" ], ce = e => e.use_native && "loading" in HTMLImageElement.prototype, _e = (e, t, a) => {
                    e.forEach((e => (e => e.isIntersecting || e.intersectionRatio > 0)(e) ? ((e, t, a, n) => {
                        const s = (e => L.indexOf(E(e)) >= 0)(e);
                        I(e, "entered"), x(e, a.class_entered), C(e, a.class_exited), ((e, t, a) => {
                            t.unobserve_entered && M(e, a);
                        })(e, a, n), w(a.callback_enter, e, t, n), s || se(e, a, n);
                    })(e.target, e, t, a) : ((e, t, a, n) => {
                        k(e) || (x(e, a.class_exited), ((e, t, a, n) => {
                            a.cancel_on_exit && (e => E(e) === u)(e) && "IMG" === e.tagName && (te(e), (e => {
                                R(e, (e => {
                                    le(e);
                                })), le(e);
                            })(e), oe(e), C(e, a.class_loading), z(n, -1), y(e), w(a.callback_cancel, e, t, n));
                        })(e, t, a, n), w(a.callback_exit, e, t, n));
                    })(e.target, e, t, a)));
                }, ue = e => Array.prototype.slice.call(e), ge = e => e.container.querySelectorAll(e.elements_selector), be = e => (e => E(e) === h)(e), he = (e, t) => (e => ue(e).filter(k))(e || ge(t)), me = function(t, a) {
                    const n = s(t);
                    this._settings = n, this.loadingCount = 0, ((e, t) => {
                        ce(e) || (t._observer = new IntersectionObserver((a => {
                            _e(a, e, t);
                        }), (e => ({
                            root: e.container === document ? null : e.container,
                            rootMargin: e.thresholds || e.threshold + "px"
                        }))(e)));
                    })(n, this), ((t, a) => {
                        e && (a._onlineHandler = () => {
                            ((e, t) => {
                                var a;
                                (a = ge(e), ue(a).filter(be)).forEach((t => {
                                    C(t, e.class_error), y(t);
                                })), t.update();
                            })(t, a);
                        }, window.addEventListener("online", a._onlineHandler));
                    })(n, this), this.update(a);
                };
                return me.prototype = {
                    update: function(e) {
                        const a = this._settings, n = he(e, a);
                        var s, l;
                        N(this, n.length), t ? this.loadAll(n) : ce(a) ? ((e, t, a) => {
                            e.forEach((e => {
                                -1 !== de.indexOf(e.tagName) && ((e, t, a) => {
                                    e.setAttribute("loading", "lazy"), ne(e, t, a), ((e, t) => {
                                        const a = Q[e.tagName];
                                        a && a(e, t);
                                    })(e, t), I(e, m);
                                })(e, t, a);
                            })), N(a, 0);
                        })(n, a, this) : (l = n, (e => {
                            e.disconnect();
                        })(s = this._observer), ((e, t) => {
                            t.forEach((t => {
                                e.observe(t);
                            }));
                        })(s, l));
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), e && window.removeEventListener("online", this._onlineHandler), 
                        ge(this._settings).forEach((e => {
                            J(e);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(e) {
                        const t = this._settings;
                        he(e, t).forEach((e => {
                            M(e, this), se(e, t, this);
                        }));
                    },
                    restoreAll: function() {
                        const e = this._settings;
                        ge(e).forEach((t => {
                            ie(t, e);
                        }));
                    }
                }, me.load = (e, t) => {
                    const a = s(t);
                    se(e, a);
                }, me.resetStatus = e => {
                    y(e);
                }, e && ((e, t) => {
                    if (t) if (t.length) for (let a, n = 0; a = t[n]; n += 1) l(e, a); else l(e, t);
                })(me, window.lazyLoadOptions), me;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        class MousePRLX {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                if (this.config.init) {
                    const paralaxMouse = document.querySelectorAll("[data-prlx-mouse]");
                    if (paralaxMouse.length) {
                        this.paralaxMouseInit(paralaxMouse);
                        this.setLogging(`Прокинувся, стежу за об'єктами: (${paralaxMouse.length})`);
                    } else this.setLogging("Немає жодного обєкта. Сплю...");
                }
            }
            paralaxMouseInit(paralaxMouse) {
                paralaxMouse.forEach((el => {
                    const paralaxMouseWrapper = el.closest("[data-prlx-mouse-wrapper]");
                    const paramСoefficientX = el.dataset.prlxCx ? +el.dataset.prlxCx : 100;
                    const paramСoefficientY = el.dataset.prlxCy ? +el.dataset.prlxCy : 100;
                    const directionX = el.hasAttribute("data-prlx-dxr") ? -1 : 1;
                    const directionY = el.hasAttribute("data-prlx-dyr") ? -1 : 1;
                    const paramAnimation = el.dataset.prlxA ? +el.dataset.prlxA : 50;
                    let positionX = 0, positionY = 0;
                    let coordXprocent = 0, coordYprocent = 0;
                    setMouseParallaxStyle();
                    if (paralaxMouseWrapper) mouseMoveParalax(paralaxMouseWrapper); else mouseMoveParalax();
                    function setMouseParallaxStyle() {
                        const distX = coordXprocent - positionX;
                        const distY = coordYprocent - positionY;
                        positionX += distX * paramAnimation / 1e3;
                        positionY += distY * paramAnimation / 1e3;
                        el.style.cssText = `transform: translate3D(${directionX * positionX / (paramСoefficientX / 10)}%,${directionY * positionY / (paramСoefficientY / 10)}%,0) rotate(0.02deg);`;
                        requestAnimationFrame(setMouseParallaxStyle);
                    }
                    function mouseMoveParalax(wrapper = window) {
                        wrapper.addEventListener("mousemove", (function(e) {
                            const offsetTop = el.getBoundingClientRect().top + window.scrollY;
                            if (offsetTop >= window.scrollY || offsetTop + el.offsetHeight >= window.scrollY) {
                                const parallaxWidth = window.innerWidth;
                                const parallaxHeight = window.innerHeight;
                                const coordX = e.clientX - parallaxWidth / 2;
                                const coordY = e.clientY - parallaxHeight / 2;
                                coordXprocent = coordX / parallaxWidth * 100;
                                coordYprocent = coordY / parallaxHeight * 100;
                            }
                        }));
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? functions_FLS(`[PRLX Mouse]: ${message}`) : null;
            }
        }
        modules_flsModules.mousePrlx = new MousePRLX({});
        var lazyload_min = __webpack_require__(144);
        new lazyload_min({
            elements_selector: "[src],[srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        const animationThimble = () => {
            const gameElement = document.querySelector(".page__game");
            if (gameElement) setInterval((() => {
                gameElement.classList.add("animate");
                gameElement.classList.remove("start");
                setTimeout((() => {
                    gameElement.classList.remove("animate");
                    gameElement.classList.add("start");
                }), 3e3);
            }), 15e3);
        };
        const animationButtonPlay = () => {
            const buttonPlay = document.querySelector(".page__button-play");
            if (buttonPlay) setInterval((() => {
                buttonPlay.classList.add("animate");
                setTimeout((() => {
                    buttonPlay.classList.remove("animate");
                }), 3e3);
            }), 8e3);
        };
        class ShellGame {
            constructor() {
                this.gameContainer = document.querySelector(".game-container");
                this.gameElement = this.gameContainer ? this.gameContainer.querySelector(".page__game") : null;
                this.items = this.gameElement ? Array.from(this.gameElement.querySelectorAll(".game__item")) : [];
                this.playButton = document.getElementById("startGameBtn");
                this.bonusBigImage = "img/bonus/prize-gold.webp";
                this.bonusMedImage = "img/bonus/prize-med.webp";
                this.initialImages = [];
                this.clicksMade = 0;
                this.isFirstGame = true;
                this.isAnimating = false;
                this.firstClickedItem = null;
                this.firstClickedThimble = null;
                this.shuffleCount = 10;
                this.shuffleDelay = 500;
                this.clickDelay = 1e3;
                this.boundHandleItemClick = this.handleItemClick.bind(this);
                this.init();
            }
            init() {
                if (this.playButton) this.playButton.addEventListener("click", (() => this.startGame()));
                this.saveInitialImages();
                this.disableItemClick();
            }
            saveInitialImages() {
                this.initialImages = this.items.map((item => {
                    const ballImg = item.querySelector(".game__item .game__bonus-ball img");
                    return ballImg ? ballImg.dataset.src || ballImg.src : "";
                }));
            }
            startGame() {
                if (this.isAnimating || !this.gameContainer || !this.items.length) {
                    console.error("Game is already animating or container/items not found");
                    return;
                }
                this.isAnimating = true;
                this.gameContainer.classList.remove("choose-item");
                if (this.playButton) this.playButton.classList.add("button-hidden");
                this.disableItemClick();
                this.gameContainer.classList.add("start-game");
                const preShuffleVisualDelay = this.shuffleDelay;
                setTimeout((() => {
                    this.performShuffles(this.shuffleCount);
                }), preShuffleVisualDelay);
            }
            performShuffles(count) {
                let currentShuffle = 0;
                const shuffleInterval = () => {
                    if (currentShuffle < count) {
                        this.shuffleItems();
                        currentShuffle++;
                        setTimeout(shuffleInterval, this.shuffleDelay);
                    } else setTimeout((() => {
                        this.isAnimating = false;
                        this.enableItemClick();
                        this.addChooseItemClass();
                    }), this.shuffleDelay);
                };
                shuffleInterval();
            }
            shuffleItems() {
                const totalItems = this.items.length;
                const indices = Array.from({
                    length: totalItems
                }, ((_, i) => i));
                const shuffledIndices = this.shuffleArray([ ...indices ]);
                this.items.forEach(((item, originalIndex) => {
                    const newIndex = shuffledIndices[originalIndex];
                    item.style.transform = this.getTransform(originalIndex, newIndex);
                }));
            }
            shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [ array[j], array[i] ];
                }
                return array;
            }
            getTransform(fromIndex, toIndex) {
                const diff = toIndex - fromIndex;
                if (diff === 0) return "translateX(0)";
                const isSmallScreen = window.matchMedia("(max-width: 480px)").matches;
                if (isSmallScreen) {
                    const translateValue = `${diff * 100}%`;
                    return `translateX(${translateValue})`;
                } else {
                    const translateValue = `calc(${diff * 100}% + ${diff * 3}vmin)`;
                    return `translateX(${translateValue})`;
                }
            }
            enableItemClick() {
                this.items.forEach((item => {
                    item.addEventListener("click", this.boundHandleItemClick);
                    item.style.cursor = "pointer";
                }));
            }
            disableItemClick() {
                this.items.forEach((item => {
                    item.removeEventListener("click", this.boundHandleItemClick);
                    item.style.cursor = "default";
                }));
            }
            handleItemClick(event) {
                if (this.isAnimating || this.clicksMade >= 2) return;
                const clickedItem = event.currentTarget;
                if (!clickedItem || clickedItem.classList.contains("item-active")) return;
                this.isAnimating = true;
                this.disableItemClick();
                setTimeout((() => {
                    const bonusBall = clickedItem.querySelector(".game__bonus-ball img");
                    if (bonusBall) {
                        const bonusImage = this.isFirstGame ? this.bonusBigImage : this.bonusMedImage;
                        bonusBall.src = bonusImage;
                    }
                    clickedItem.classList.add("item-active");
                    const thimble = clickedItem.querySelector(".game__thimble");
                    if (thimble) thimble.style.opacity = "0";
                    this.clicksMade++;
                    if (this.clicksMade === 1 && this.isFirstGame && thimble) this.firstClickedThimble = thimble;
                    setTimeout((() => {
                        this.showPopupStage(this.clicksMade);
                        this.isAnimating = false;
                    }), 500);
                }), 0);
            }
            showPopupStage(stage) {
                this.hideAllPopups();
                const popup = document.querySelector(`[data-popup-stage="${stage}"]`);
                if (popup) {
                    document.documentElement.classList.add("popup-show");
                    popup.classList.add("popup_show");
                    const nextButton = popup.querySelector(".button-next-game");
                    if (nextButton) nextButton.addEventListener("click", (() => {
                        this.closePopup(popup);
                        this.endGameStage();
                    }), {
                        once: true
                    });
                } else {
                    console.warn(`Popup for stage ${stage} not found.`);
                    this.endGameStage();
                }
            }
            hideAllPopups() {
                const popups = document.querySelectorAll("[data-popup-stage].popup_show");
                popups.forEach((popup => {
                    popup.classList.remove("popup_show");
                }));
                if (document.querySelectorAll("[data-popup-stage].popup_show").length === 0) document.documentElement.classList.remove("popup-show");
            }
            closePopup(popup) {
                if (popup) {
                    popup.classList.remove("popup_show");
                    if (document.querySelectorAll("[data-popup-stage].popup_show").length === 0) document.documentElement.classList.remove("popup-show");
                }
            }
            addChooseItemClass() {
                if (this.gameContainer) this.gameContainer.classList.add("choose-item");
            }
            endGameStage() {
                this.gameContainer.classList.remove("choose-item");
                if (this.clicksMade === 1 && this.isFirstGame) {
                    this.isFirstGame = false;
                    if (this.firstClickedThimble) {
                        this.firstClickedThimble.style.opacity = "";
                        this.firstClickedThimble = null;
                    }
                    this.gameContainer.classList.remove("start-game");
                    this.restoreInitialImages();
                    this.resetItemPositions();
                    this.updateTranslation();
                    if (this.playButton) this.playButton.classList.remove("button-hidden");
                } else if (this.clicksMade === 2) {
                    this.isFirstGame = true;
                    this.clicksMade = 0;
                    this.firstClickedThimble = null;
                    this.restoreInitialImages();
                    this.resetItemPositions();
                    this.gameContainer.classList.remove("start-game");
                    if (this.playButton) this.playButton.classList.remove("button-hidden");
                    this.updateTranslation();
                }
            }
            restoreInitialImages() {
                this.items.forEach(((item, index) => {
                    const ballImg = item.querySelector(".game__bonus-ball img");
                    if (ballImg) {
                        const initialSrc = this.initialImages[index];
                        if (initialSrc) ballImg.src = initialSrc; else ballImg.src = "";
                    }
                }));
            }
            resetItemPositions() {
                this.items.forEach((item => {
                    item.style.transform = "";
                    const thimble = item.querySelector(".game__thimble");
                    if (thimble) thimble.style.opacity = "";
                    item.removeAttribute("data-index-item");
                    item.classList.remove("item-active");
                }));
            }
            updateTranslation() {
                if (window.deepl && typeof window.deepl === "function") window.deepl(); else console.warn("DeepL translation function not found.");
            }
        }
        document.addEventListener("DOMContentLoaded", (() => {
            new ShellGame;
        }));
        document.addEventListener("DOMContentLoaded", (() => {
            animationButtonPlay();
            animationThimble();
            const finalPopupButton = document.querySelector(".button-final-popup");
            const finalPopup = document.querySelector('[data-popup-stage="3"]');
            if (finalPopupButton && finalPopup) finalPopupButton.addEventListener("click", (e => {
                e.preventDefault();
                const openedPopups = document.querySelectorAll("[data-popup-stage].popup_show");
                openedPopups.forEach((popup => {
                    popup.classList.remove("popup_show");
                }));
                if (document.querySelectorAll("[data-popup-stage].popup_show").length === 0) document.documentElement.classList.remove("popup-show");
                document.documentElement.classList.add("popup-show");
                finalPopup.classList.add("popup_show");
                const closeButton = finalPopup.querySelector(".popup__close");
                if (closeButton) {
                    const newCloseButton = closeButton.cloneNode(true);
                    closeButton.parentNode.replaceChild(newCloseButton, closeButton);
                    newCloseButton.addEventListener("click", (() => {
                        finalPopup.classList.remove("popup_show");
                        if (document.querySelectorAll("[data-popup-stage].popup_show").length === 0) document.documentElement.classList.remove("popup-show");
                    }), {
                        once: true
                    });
                }
            })); else {
                if (!finalPopupButton) console.warn("Кнопка .button-final-popup не найдена.");
                if (!finalPopup) console.warn('Попап [data-popup-stage="3"] не найден.');
            }
        }));
        window["FLS"] = true;
    })();
})();