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
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addTouchClass() {
            if (isMobile.any()) document.documentElement.classList.add("touch");
        }
        function addLoadedClass() {
            if (!document.documentElement.classList.contains("loading")) window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    lockPaddingElements.forEach((lockPaddingElement => {
                        lockPaddingElement.style.paddingRight = "";
                    }));
                    document.body.style.paddingRight = "";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                const lockPaddingValue = window.innerWidth - document.body.offsetWidth + "px";
                lockPaddingElements.forEach((lockPaddingElement => {
                    lockPaddingElement.style.paddingRight = lockPaddingValue;
                }));
                document.body.style.paddingRight = lockPaddingValue;
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        class Popup {
            constructor() {
                this.settings = {
                    openButtons: "data-popup",
                    closeButtons: "data-close",
                    fixElements: "[data-lp]",
                    classes: {
                        open: "popup_show",
                        bodyOpen: "_popup-active"
                    },
                    closeOnEsc: true,
                    closeOnOutsideClick: true,
                    log: false
                };
                this.currentPopup = null;
                this.init();
            }
            init() {
                document.addEventListener("click", (e => {
                    const openBtn = e.target.closest(`[${this.settings.openButtons}]`);
                    if (openBtn) {
                        e.preventDefault();
                        const popupId = openBtn.getAttribute(this.settings.openButtons);
                        this.open(popupId);
                    }
                    const closeBtn = e.target.closest(`[${this.settings.closeButtons}]`);
                    if (closeBtn || this.settings.closeOnOutsideClick && this.currentPopup && !e.target.closest(".popup__content")) {
                        e.preventDefault();
                        this.close();
                    }
                }));
                if (this.settings.closeOnEsc) document.addEventListener("keydown", (e => {
                    if (e.key === "Escape" && this.currentPopup) {
                        e.preventDefault();
                        this.close();
                    }
                }));
                this.log("Попапы инициализированы");
            }
            open(popupId) {
                if (!popupId) {
                    this.log("Ошибка: не указан ID попапа");
                    return;
                }
                const popup = document.querySelector(popupId);
                if (!popup) {
                    this.log(`Ошибка: попап ${popupId} не найден`);
                    return;
                }
                if (this.currentPopup) this.close();
                this.currentPopup = popup;
                bodyLock();
                popup.classList.add(this.settings.classes.open);
                document.body.classList.add(this.settings.classes.bodyOpen);
                this.log(`Попап ${popupId} открыт`);
            }
            close() {
                if (!this.currentPopup) return;
                this.currentPopup.classList.remove(this.settings.classes.open);
                document.body.classList.remove(this.settings.classes.bodyOpen);
                bodyUnlock();
                this.log(`Попап закрыт`);
                this.currentPopup = null;
            }
            log(message) {
                if (this.settings.log) console.log(`[Popup]: ${message}`);
            }
        }
        new Popup;
        function formFieldsInit(options = {
            viewPass: false,
            autoHeight: false
        }) {
            const formFields = document.querySelectorAll("input[data-required],textarea[data-required]");
            if (formFields.length) formFields.forEach((formField => {
                formField.dataset.inputInitialized = "true";
                if (options.viewPass && formField.getAttribute("type") === "password") initPasswordToggle(formField);
                if (options.autoHeight && formField.tagName === "TEXTAREA") initAutoHeightTextarea(formField);
                [ "focus", "blur", "input" ].forEach((eventType => {
                    formField.addEventListener(eventType, updateFieldState);
                }));
            }));
            initCountrySelects();
            const passwordFields = document.querySelectorAll('input[type="password"]');
            passwordFields.forEach(initPasswordToggle);
            console.log("Form fields initialized:", formFields.length);
        }
        function initPasswordToggle(passwordField) {
            const container = passwordField.closest(".form-field__input-container");
            if (!container) return;
            const toggleButton = container.querySelector(".form-field__toggle-password");
            if (!toggleButton) return;
            toggleButton.removeEventListener("click", toggleButton._clickHandler);
            toggleButton._clickHandler = function(e) {
                e.preventDefault();
                passwordField.type = passwordField.type === "password" ? "text" : "password";
                toggleButton.classList.toggle("show-password", passwordField.type === "text");
                passwordField.focus();
            };
            toggleButton.addEventListener("click", toggleButton._clickHandler);
            console.log("Password toggle initialized for field:", passwordField.id || "unnamed");
        }
        function initAutoHeightTextarea(textarea) {
            const adjustHeight = () => {
                textarea.style.height = "auto";
                textarea.style.height = `${textarea.scrollHeight}px`;
            };
            adjustHeight();
            textarea.addEventListener("input", adjustHeight);
        }
        function updateFieldState(e) {
            const field = e.target;
            const container = field.closest(".form-field");
            if (container) {
                container.classList.toggle("filled", field.value.length > 0);
                if (e.type === "focus") container.classList.add("focused"); else if (e.type === "blur") container.classList.remove("focused");
            }
        }
        function initCountrySelects() {
            const countrySelects = document.querySelectorAll('select[name="countryCode"]');
            if (countrySelects.length) {
                countrySelects.forEach((select => {
                    if (select.dataset.initialized === "true") return;
                    const options = select.querySelectorAll("option");
                    options.forEach((option => {
                        if (option.dataset.asset) {
                            option.setAttribute("title", option.textContent || option.value);
                            option.textContent = "";
                        }
                    }));
                    select.addEventListener("change", (function() {
                        const selectedOption = this.options[this.selectedIndex];
                        const container = this.closest(".form-field");
                        if (container && selectedOption.dataset.asset) {
                            const flagElement = container.querySelector(".selected-country-flag");
                            if (flagElement) flagElement.style.backgroundImage = `url(${selectedOption.dataset.asset.replace("@img", "img")})`;
                        }
                    }));
                    select.dataset.initialized = "true";
                }));
                console.log("Country selects initialized:", countrySelects.length);
            }
        }
        document.addEventListener("DOMContentLoaded", (function() {
            document.addEventListener("phone:validated", (function(e) {
                if (e.target && e.target.matches(".input-phone")) {
                    const form = e.target.closest("form");
                    if (form) {
                        const validationEvent = new CustomEvent("form:validate");
                        form.dispatchEvent(validationEvent);
                    }
                }
            }));
            formFieldsInit({
                viewPass: true,
                autoHeight: false
            });
        }));
        class SelectConstructor {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true,
                    speed: 150
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label"
                };
                this._this = this;
                if (this.config.init) {
                    const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                    if (selectItems.length) {
                        this.selectsInit(selectItems);
                        this.setLogging(`Прокинувся, построїв селектов: (${selectItems.length})`);
                    } else this.setLogging("Сплю, немає жодного select");
                }
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
                document.addEventListener("click", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusin", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusout", function(e) {
                    this.selectsActions(e);
                }.bind(this));
            }
            selectInit(originalSelect, index) {
                const _this = this;
                let selectItem = document.createElement("div");
                selectItem.classList.add(this.selectClasses.classSelect);
                originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                selectItem.appendChild(originalSelect);
                originalSelect.hidden = true;
                index ? originalSelect.dataset.id = index : null;
                if (this.getSelectPlaceholder(originalSelect)) {
                    originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                    if (this.getSelectPlaceholder(originalSelect).label.show) {
                        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                    }
                }
                selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                this.selectBuild(originalSelect);
                originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : this.config.speed;
                this.config.speed = +originalSelect.dataset.speed;
                originalSelect.addEventListener("change", (function(e) {
                    _this.selectChange(e);
                }));
            }
            selectBuild(originalSelect) {
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
                originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const targetElement = e.target;
                const targetType = e.type;
                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                    const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    if (targetType === "click") {
                        if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                        } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(selectItem, originalSelect, optionItem);
                        }
                    } else if (targetType === "focusin" || targetType === "focusout") {
                        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                    } else if (targetType === "keydown" && e.code === "Escape") this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose(selectOneGroup) {
                const selectsGroup = selectOneGroup ? selectOneGroup : document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                    this.selectСlose(selectActiveItem);
                }));
            }
            selectСlose(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.remove(this.selectClasses.classSelectOpen);
                    _slideUp(selectOptions, originalSelect.dataset.speed);
                    setTimeout((() => {
                        selectItem.style.zIndex = "";
                    }), originalSelect.dataset.speed);
                }
            }
            selectAction(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOpenzIndex = originalSelect.dataset.zIndex ? originalSelect.dataset.zIndex : 3;
                this.setOptionsPosition(selectItem);
                if (originalSelect.closest("[data-one-select]")) {
                    const selectOneGroup = originalSelect.closest("[data-one-select]");
                    this.selectsСlose(selectOneGroup);
                }
                setTimeout((() => {
                    if (!selectOptions.classList.contains("_slide")) {
                        selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                        _slideToggle(selectOptions, originalSelect.dataset.speed);
                        if (selectItem.classList.contains(this.selectClasses.classSelectOpen)) selectItem.style.zIndex = selectOpenzIndex; else setTimeout((() => {
                            selectItem.style.zIndex = "";
                        }), originalSelect.dataset.speed);
                    }
                }), 0);
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                if (selectItemTitle) selectItemTitle.remove();
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
            }
            getSelectTitleValue(selectItem, originalSelect) {
                let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                    selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                    if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                        if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                    }
                }
                selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                let pseudoAttribute = "";
                let pseudoAttributeClass = "";
                if (originalSelect.hasAttribute("data-pseudo-label")) {
                    pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заповніть атрибут"`;
                    pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                }
                this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                    const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                    return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                }
            }
            getSelectElementContent(selectOption) {
                const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
                let selectOptionContentHTML = ``;
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
                selectOptionContentHTML += selectOption.textContent;
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(originalSelect) {
                const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                if (selectPlaceholder) return {
                    value: selectPlaceholder.textContent,
                    show: selectPlaceholder.hasAttribute("data-show"),
                    label: {
                        show: selectPlaceholder.hasAttribute("data-label"),
                        text: selectPlaceholder.dataset.label
                    }
                };
            }
            getSelectedOptionsData(originalSelect, type) {
                let selectedOptions = [];
                if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                return {
                    elements: selectedOptions.map((option => option)),
                    values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getOptions(originalSelect) {
                const selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                const customMaxHeightValue = +originalSelect.dataset.scroll ? +originalSelect.dataset.scroll : null;
                let selectOptions = Array.from(originalSelect.options);
                if (selectOptions.length > 0) {
                    let selectOptionsHTML = ``;
                    if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                    selectOptionsHTML += `<div ${selectOptionsScroll} ${selectOptionsScroll ? `style="max-height: ${customMaxHeightValue}px"` : ""} class="${this.selectClasses.classSelectOptionsScroll}">`;
                    selectOptions.forEach((selectOption => {
                        selectOptionsHTML += this.getOption(selectOption, originalSelect);
                    }));
                    selectOptionsHTML += `</div>`;
                    return selectOptionsHTML;
                }
            }
            getOption(selectOption, originalSelect) {
                const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                let selectOptionHTML = ``;
                selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                selectOptionHTML += this.getSelectElementContent(selectOption);
                selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                return selectOptionHTML;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptions(originalSelect);
            }
            setOptionsPosition(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectItemScroll = this.getSelectElement(selectItem, this.selectClasses.classSelectOptionsScroll).selectElement;
                const customMaxHeightValue = +originalSelect.dataset.scroll ? `${+originalSelect.dataset.scroll}px` : ``;
                const selectOptionsPosMargin = +originalSelect.dataset.optionsMargin ? +originalSelect.dataset.optionsMargin : 10;
                if (!selectItem.classList.contains(this.selectClasses.classSelectOpen)) {
                    selectOptions.hidden = false;
                    const selectItemScrollHeight = selectItemScroll.offsetHeight ? selectItemScroll.offsetHeight : parseInt(window.getComputedStyle(selectItemScroll).getPropertyValue("max-height"));
                    const selectOptionsHeight = selectOptions.offsetHeight > selectItemScrollHeight ? selectOptions.offsetHeight : selectItemScrollHeight + selectOptions.offsetHeight;
                    const selectOptionsScrollHeight = selectOptionsHeight - selectItemScrollHeight;
                    selectOptions.hidden = true;
                    const selectItemHeight = selectItem.offsetHeight;
                    const selectItemPos = selectItem.getBoundingClientRect().top;
                    const selectItemTotal = selectItemPos + selectOptionsHeight + selectItemHeight + selectOptionsScrollHeight;
                    const selectItemResult = window.innerHeight - (selectItemTotal + selectOptionsPosMargin);
                    if (selectItemResult < 0) {
                        const newMaxHeightValue = selectOptionsHeight + selectItemResult;
                        if (newMaxHeightValue < 100) {
                            selectItem.classList.add("select--show-top");
                            selectItemScroll.style.maxHeight = selectItemPos < selectOptionsHeight ? `${selectItemPos - (selectOptionsHeight - selectItemPos)}px` : customMaxHeightValue;
                        } else {
                            selectItem.classList.remove("select--show-top");
                            selectItemScroll.style.maxHeight = `${newMaxHeightValue}px`;
                        }
                    }
                } else setTimeout((() => {
                    selectItem.classList.remove("select--show-top");
                    selectItemScroll.style.maxHeight = customMaxHeightValue;
                }), +originalSelect.dataset.speed);
            }
            optionAction(selectItem, originalSelect, optionItem) {
                const selectOptions = selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOptions)}`);
                if (!selectOptions.classList.contains("_slide")) {
                    if (originalSelect.multiple) {
                        optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                        const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                        originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                            originalSelectSelectedItem.removeAttribute("selected");
                        }));
                        const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                        selectSelectedItems.forEach((selectSelectedItems => {
                            originalSelect.querySelector(`option[value = "${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                        }));
                    } else {
                        if (!originalSelect.hasAttribute("data-show-selected")) setTimeout((() => {
                            if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                            optionItem.hidden = true;
                        }), this.config.speed);
                        originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                        this.selectAction(selectItem);
                    }
                    this.setSelectTitleValue(selectItem, originalSelect);
                    this.setSelectChange(originalSelect);
                }
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                }
            }
            searchActions(selectItem) {
                this.getSelectElement(selectItem).originalSelect;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption} `);
                const _this = this;
                selectInput.addEventListener("input", (function() {
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().includes(selectInput.value.toUpperCase())) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                    }));
                    selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
                }));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        select: originalSelect
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? FLS(`[select]: ${message} `) : null;
            }
        }
        flsModules.select = new SelectConstructor({});
        const messages = {
            ru: {
                phoneForbidden: "Номер телефона не обслуживается. Воспользуйтесь номером другого оператора или обратитесь в поддержку.",
                phoneZero: "Похоже, вы ввели неправильный код оператора. Проверьте правильность своего номера.",
                phoneRepeat: "Похоже, вы повторно ввели код страны. Проверьте правильность введенного номера.",
                phoneError: "Введите правильный номер",
                emptyPhone: "Введите номер телефона"
            },
            en: {
                phoneForbidden: "The phone number is not serviced. Use another operator's number or contact support.",
                phoneZero: "Seems you entered the wrong operator code. Check the correctness of your number.",
                phoneRepeat: "Seems you re-entered the country code. Check the correctness of the entered number.",
                phoneError: "Enter Correct Number",
                emptyPhone: "Enter phone number"
            },
            uk: {
                phoneForbidden: "Номер телефону не обслуговується. Скористайся номером іншого оператора або звернись у підтримку.",
                phoneZero: "Схоже, ти ввів неправильний код оператора. Перевір правильність свого номера.",
                phoneRepeat: "Схоже, ти повторно ввів код країни. Перевір правильність введеного номера.",
                phoneError: "Введи правильний номер",
                emptyPhone: "Введіть номер телефону"
            }
        };
        const defaultMasks = {
            brand: "COM",
            list: {
                defaultVariation: {
                    AUT: {
                        iso2: "AT",
                        id: 40,
                        name: "Austria",
                        masks: [ "+43(XXX) XX-XX-XX" ]
                    },
                    AUS: {
                        iso2: "AU",
                        id: 36,
                        name: "Australia",
                        masks: [ "+61(XXX) XXX-XXX" ]
                    },
                    BEL: {
                        iso2: "BE",
                        id: 56,
                        name: "Belgium",
                        masks: [ "+32(XXX) XXX-XXX" ]
                    },
                    CYP: {
                        iso2: "CY",
                        id: 196,
                        name: "Cyprus",
                        masks: [ "+357(XX) XXX-XXX" ]
                    },
                    CZE: {
                        iso2: "CZ",
                        id: 203,
                        name: "Czech Republic",
                        masks: [ "+420(XXX) XXX-XXX" ]
                    },
                    USA: {
                        iso2: "US",
                        id: 840,
                        name: "United States",
                        masks: [ "+1(XXX) XXX-XXXX" ]
                    },
                    DNK: {
                        iso2: "DK",
                        id: 208,
                        name: "Denmark",
                        masks: [ "+45(XX) XX-XX-XX" ]
                    },
                    FRA: {
                        iso2: "FR",
                        id: 250,
                        name: "France",
                        masks: [ "+33(X) XX-XX-XX-XX" ]
                    },
                    FIN: {
                        iso2: "FI",
                        id: 246,
                        name: "Finland",
                        masks: [ "+358(XX) XXX-XXXX" ]
                    },
                    DEU: {
                        iso2: "DE",
                        id: 276,
                        name: "Germany",
                        masks: [ "+49(XXX) XXXXXXXX" ]
                    },
                    GEO: {
                        iso2: "GE",
                        id: 268,
                        name: "Georgia",
                        masks: [ "+995(XXX) XXX-XXX" ]
                    },
                    GRC: {
                        iso2: "GR",
                        id: 300,
                        name: "Greece",
                        masks: [ "+30(XXX) XXX-XXXX" ]
                    },
                    GBR: {
                        iso2: "GB",
                        id: 826,
                        name: "United Kingdom",
                        masks: [ "+44(XXXX) XXXXXX" ]
                    },
                    ITA: {
                        iso2: "IT",
                        id: 380,
                        name: "Italy",
                        masks: [ "+39(XXX) XXX XXXX" ]
                    },
                    IRL: {
                        iso2: "IE",
                        id: 372,
                        name: "Ireland",
                        masks: [ "+353(XX) XXX-XXXX" ]
                    },
                    ISL: {
                        iso2: "IS",
                        id: 352,
                        name: "Iceland",
                        masks: [ "+354(XXX) XXXX" ]
                    },
                    LVA: {
                        iso2: "LV",
                        id: 428,
                        name: "Latvia",
                        masks: [ "+371(XXX) XXXXX" ]
                    },
                    LUX: {
                        iso2: "LU",
                        id: 442,
                        name: "Luxembourg",
                        masks: [ "+352(XXX) XXX-XXX" ]
                    },
                    NOR: {
                        iso2: "NO",
                        id: 578,
                        name: "Norway",
                        masks: [ "+47(XXX) XX-XXX" ]
                    },
                    NZL: {
                        iso2: "NZ",
                        id: 554,
                        name: "New Zealand",
                        masks: [ "+64(XX) XXX-XXXX" ]
                    },
                    NLD: {
                        iso2: "NL",
                        id: 528,
                        name: "Netherlands",
                        masks: [ "+31(XX) XXX-XXXX" ]
                    },
                    PRT: {
                        iso2: "PT",
                        id: 620,
                        name: "Portugal",
                        masks: [ "+351(XX) XXX-XXXX" ]
                    },
                    POL: {
                        iso2: "PL",
                        id: 616,
                        name: "Poland",
                        masks: [ "+48(XXX) XXX-XXX" ]
                    },
                    CHE: {
                        iso2: "CH",
                        id: 756,
                        name: "Switzerland",
                        masks: [ "+41(XX) XXX-XXXX" ]
                    },
                    SWE: {
                        iso2: "SE",
                        id: 752,
                        name: "Sweden",
                        masks: [ "+46(XX) XXX-XXXX" ]
                    },
                    ESP: {
                        iso2: "ES",
                        id: 724,
                        name: "Spain",
                        masks: [ "+34(XXX) XXX-XXX" ]
                    },
                    SVN: {
                        iso2: "SI",
                        id: 705,
                        name: "Slovenia",
                        masks: [ "+386(X) XXX-XXXX" ]
                    },
                    UKR: {
                        iso2: "UA",
                        id: 804,
                        name: "Ukraine",
                        masks: [ "+380(XX) XXX-XX-XX" ]
                    }
                }
            }
        };
        function getCurrentLanguage() {
            return "uk";
        }
        const errorMessages = messages[getCurrentLanguage()];
        document.addEventListener("DOMContentLoaded", (function() {
            console.log("Инициализация масок для телефонов");
            initPhoneMasks();
            setTimeout((() => {
                const masksApplied = checkMasksApplied();
                if (!masksApplied) console.log("Некоторые маски не применились при первой проверке");
                setupPhoneValidation();
                validateAllPhones();
            }), 800);
            flsModules.inputmask = true;
        }));
        function initPhoneMasks() {
            console.log("Запуск инициализации телефонных масок");
            const standardSelects = document.querySelectorAll('select[name="countryCode"], select#phone_code');
            standardSelects.forEach((select => {
                if (select.options.length === 0) fillSelectWithCountries(select);
                const phoneInput = findPhoneInput(select);
                if (phoneInput) {
                    applyMaskBySelect(phoneInput, select);
                    select.addEventListener("change", (function() {
                        applyMaskBySelect(phoneInput, this);
                    }));
                }
            }));
            document.addEventListener("selectCallback", (function(e) {
                try {
                    const originalSelect = e.detail.select;
                    if (!originalSelect) return;
                    if (originalSelect && (originalSelect.name === "countryCode" || originalSelect.id === "phone_code" || originalSelect.classList.contains("country-select") || originalSelect.getAttribute("data-country-select") === "true")) {
                        const selectParent = originalSelect.closest(".select");
                        const phoneInput = findPhoneInput(selectParent || originalSelect.parentElement);
                        if (phoneInput) if (selectParent) applyMaskBySelect(phoneInput, selectParent); else applyMaskBySelect(phoneInput, originalSelect);
                    }
                } catch (error) {
                    console.error("Ошибка в обработчике selectCallback:", error);
                }
            }));
        }
        function fillSelectWithCountries(select) {
            try {
                const countriesList = defaultMasks.list.defaultVariation;
                const countryArray = [];
                for (const key in countriesList) countryArray.push({
                    iso3: key,
                    ...countriesList[key]
                });
                countryArray.sort(((a, b) => a.name.localeCompare(b.name)));
                select.classList.add("country-select");
                select.setAttribute("data-country-select", "true");
                function extractPhoneCode(mask) {
                    const codeMatch = mask.match(/^\+\d+/);
                    return codeMatch ? codeMatch[0] : "";
                }
                select.innerHTML = countryArray.map(((country, index) => {
                    const phoneCode = extractPhoneCode(country.masks[0]);
                    return `<option \n                value="${country.iso2}" \n                data-mask="${country.masks[0]}" \n                data-countrykey="${country.iso3}"\n                data-phone-code="${phoneCode}"\n                data-index="${index + 1}"\n                data-position="${index + 1}"\n                data-asset="img/flags/${country.iso2.toLowerCase()}.svg">\n                ${country.name} (${phoneCode})\n            </option>`;
                })).join("");
                if (!window.phoneCountriesMap) window.phoneCountriesMap = {};
                window.phoneCountriesMap[select.id || select.name || "defaultSelect"] = countryArray.map(((country, index) => ({
                    index: index + 1,
                    iso2: country.iso2,
                    iso3: country.iso3,
                    mask: country.masks[0],
                    phoneCode: extractPhoneCode(country.masks[0]),
                    id: country.id
                })));
                const savedCountry = localStorage.getItem("phoneCountry") || "UA";
                const option = select.querySelector(`option[value="${savedCountry}"]`);
                if (option) option.selected = true;
            } catch (error) {
                console.error("Ошибка при заполнении селекта странами:", error);
            }
        }
        function findPhoneInput(selectElement) {
            if (!selectElement) return null;
            try {
                let phoneInput = null;
                const phoneInputId = selectElement.getAttribute("data-phone-input");
                if (phoneInputId) {
                    phoneInput = document.getElementById(phoneInputId);
                    if (phoneInput) return phoneInput;
                }
                const fieldGroup = selectElement.closest(".form-field-group, .form__group, .input-group");
                if (fieldGroup) {
                    phoneInput = fieldGroup.querySelector('input[type="tel"], input[name="phone"], input.phone-input');
                    if (phoneInput) return phoneInput;
                }
                const parentElement = selectElement.parentElement;
                if (parentElement) {
                    phoneInput = parentElement.querySelector('input[type="tel"], input[name="phone"], input.phone-input');
                    if (phoneInput) return phoneInput;
                    const nextSibling = parentElement.nextElementSibling;
                    if (nextSibling) {
                        phoneInput = nextSibling.querySelector('input[type="tel"], input[name="phone"], input.phone-input');
                        if (phoneInput) return phoneInput;
                    }
                }
                const grandParent = selectElement.parentElement?.parentElement;
                if (grandParent) {
                    phoneInput = grandParent.querySelector('input[type="tel"], input[name="phone"], input.phone-input');
                    if (phoneInput) return phoneInput;
                }
                const form = selectElement.closest("form");
                if (form) {
                    phoneInput = form.querySelector('input[type="tel"], input[name="phone"], input.phone-input');
                    if (phoneInput) return phoneInput;
                }
                return null;
            } catch (error) {
                console.error("Ошибка при поиске поля ввода телефона:", error);
                return null;
            }
        }
        function applyMaskBySelect(phoneInput, selectElement) {
            if (!phoneInput || !selectElement) return;
            try {
                let countryCode, mask, phoneCode;
                const currentPhoneCode = phoneInput.getAttribute("data-phone-code");
                let selectedOption;
                if (selectElement.tagName === "SELECT") {
                    if (selectElement.selectedIndex === -1) return;
                    selectedOption = selectElement.options[selectElement.selectedIndex];
                } else {
                    const originalSelect = selectElement.querySelector("select");
                    if (!originalSelect || originalSelect.selectedIndex === -1) return;
                    selectedOption = originalSelect.options[originalSelect.selectedIndex];
                }
                if (!selectedOption) return;
                countryCode = selectedOption.value;
                phoneCode = selectedOption.getAttribute("data-phone-code");
                if (phoneCode) mask = createMaskFromPhoneCode(phoneCode); else mask = selectedOption.getAttribute("data-mask");
                if (!mask) {
                    mask = "+380(XX) XXX-XX-XX";
                    phoneCode = "+380";
                }
                const codeChanged = currentPhoneCode && currentPhoneCode !== phoneCode;
                if (codeChanged) phoneInput.value = phoneCode;
                if (countryCode && typeof countryCode === "string") localStorage.setItem("phoneCountry", countryCode);
                applyMaskToInput(phoneInput, mask, phoneCode);
                updateFlagImage(selectElement, countryCode);
            } catch (error) {
                console.error("Ошибка при применении маски:", error);
            }
        }
        function createMaskFromPhoneCode(phoneCode) {
            if (!phoneCode) return null;
            const cleanCode = phoneCode.startsWith("+") ? phoneCode.substring(1) : phoneCode;
            switch (cleanCode) {
              case "380":
                return "+380 (XX) XXX-XX-XX";

              case "61":
                return "+61 (XXX) XXX XXX";

              case "43":
                return "+43 (XXX) XX XX XX";

              case "32":
                return "+32 (XXX) XX XX XX";

              case "357":
                return "+357 (XX) XXX XXX";

              case "420":
                return "+420 (XXX) XXX XXX";

              case "1":
                return "+1 (XXX) XXX-XXXX";

              case "45":
                return "+45 (XX) XX XX XX";

              case "33":
                return "+33 (X) XX XX XX XX";

              case "358":
                return "+358 (XX) XXX XXXX";

              case "49":
                return "+49 (XXX) XXXXXXXX";

              case "30":
                return "+30 (XXX) XXX XXXX";

              case "44":
                return "+44 (XXXX) XXXXXX";

              case "386":
                return "+386 (XX) XXX-XXX";

              case "34":
                return "+34 (XXX) XXX-XXX";

              case "46":
                return "+46 (XX) XXX-XXXX";

              case "41":
                return "+41 (XX) XXX-XXXX";

              case "48":
                return "+48 (XXX) XXX-XXX";

              case "351":
                return "+351 (XX) XXX-XXXX";

              case "31":
                return "+31 (XX) XXX-XXXX";

              case "47":
                return "+47 (XXX) XX-XXX";

              default:
                return `+${cleanCode} (${"X".repeat(Math.min(3, 10 - cleanCode.length))})-${"X".repeat(Math.min(3, 7 - cleanCode.length))}-${"X".repeat(4)}`;
            }
        }
        function applyMaskToInput(input, mask, phoneCode) {
            try {
                if (input._phoneHandlers) Object.keys(input._phoneHandlers).forEach((event => {
                    input.removeEventListener(event, input._phoneHandlers[event]);
                }));
                const previousCode = input.getAttribute("data-phone-code");
                const codeChanged = previousCode && previousCode !== phoneCode;
                if (codeChanged) input.value = "";
                input.setAttribute("data-mask", mask);
                input.setAttribute("data-phone-code", phoneCode);
                input.setAttribute("placeholder", mask);
                input.hasBeenInteractedWith = false;
                const handlers = {};
                handlers.input = function(e) {
                    this.hasBeenInteractedWith = true;
                    const mask = this.getAttribute("data-mask");
                    const code = this.getAttribute("data-phone-code");
                    if (!mask || !code) return;
                    if (!this.value.startsWith(code)) this.value = code + this.value.replace(/\D/g, "");
                    checkRepeatedCountryCode(this);
                    const digits = extractDigits(this.value, code);
                    const maxDigits = (mask.match(/X/g) || []).length;
                    if (digits.length > maxDigits + 3) showPhoneError(this, errorMessages.phoneError || "Номер слишком длинный");
                    if (e && (e.inputType === "deleteContentBackward" || e.inputType === "deleteContentForward" || e.inputType === "deleteContent")) {
                        if (digits.length > 0) this.value = formatPhoneNumber(digits, mask, code); else this.value = code;
                        const cursorPos = findCursorPosition(this.value);
                        setTimeout((() => {
                            this.setSelectionRange(cursorPos, cursorPos);
                        }), 0);
                        validatePhoneField(this, this.hasBeenBlurred);
                        return;
                    }
                    const limitedDigits = digits.slice(0, maxDigits);
                    this.value = formatPhoneNumber(limitedDigits, mask, code);
                    const cursorPos = findCursorPosition(this.value);
                    setTimeout((() => {
                        this.setSelectionRange(cursorPos, cursorPos);
                    }), 0);
                    validatePhoneField(this, this.hasBeenBlurred);
                };
                handlers.focus = function() {
                    this.hasBeenInteractedWith = true;
                    const code = this.getAttribute("data-phone-code");
                    if (!code) return;
                    if (!this.value) this.value = code; else if (!this.value.startsWith(code)) this.value = code + this.value.replace(/\D/g, "");
                    const pos = Math.max(code.length, this.selectionStart);
                    setTimeout((() => {
                        this.setSelectionRange(pos, pos);
                    }), 0);
                    clearPhoneError(this);
                    this.classList.add("focused");
                };
                handlers.blur = function() {
                    this.hasBeenBlurred = true;
                    this.hasBeenInteractedWith = true;
                    validatePhoneField(this, true);
                    this.classList.remove("focused");
                };
                handlers.keydown = function(e) {
                    const code = this.getAttribute("data-phone-code");
                    const selStart = this.selectionStart;
                    const selEnd = this.selectionEnd;
                    const isSelection = selEnd > selStart;
                    if (e.keyCode === 8 && selStart <= code.length) {
                        if (isSelection && selEnd > code.length) ; else e.preventDefault();
                        return;
                    }
                    if (e.keyCode === 46 && selStart < code.length) {
                        if (isSelection && selEnd > code.length) ; else e.preventDefault();
                        return;
                    }
                    if (!isControlKey(e) && !isDigitKey(e)) e.preventDefault();
                };
                Object.keys(handlers).forEach((event => {
                    input.addEventListener(event, handlers[event]);
                }));
                input._phoneHandlers = handlers;
                input.hasPhoneMask = true;
                if (codeChanged || !input.value) input.value = phoneCode; else {
                    const digits = extractDigits(input.value, phoneCode);
                    input.value = formatPhoneNumber(digits, mask, phoneCode);
                }
                clearPhoneError(input);
                input.hasBeenBlurred = false;
            } catch (error) {
                console.error("Ошибка при применении маски:", error);
            }
        }
        function checkRepeatedCountryCode(input) {
            const code = input.getAttribute("data-phone-code");
            if (!code) return false;
            let valueWithoutCode = input.value.substring(code.length);
            const cleanCode = code.replace(/\+/g, "");
            if (valueWithoutCode.startsWith(cleanCode) || valueWithoutCode.startsWith("+" + cleanCode)) {
                showPhoneError(input, errorMessages.phoneRepeat || "Повторный ввод кода страны");
                return true;
            }
            return false;
        }
        function extractDigits(value, countryCode) {
            if (!value) return "";
            if (value.startsWith(countryCode)) value = value.substring(countryCode.length);
            return value.replace(/\D/g, "");
        }
        function formatPhoneNumber(digits, mask, countryCode) {
            let result = "";
            let digitIndex = 0;
            result += countryCode;
            const openBracketPos = mask.indexOf("(", countryCode.length);
            if (openBracketPos !== -1 && openBracketPos <= countryCode.length + 1) {
                result += " (";
                if (digits.length > 0) {
                    const closeBracketPos = mask.indexOf(")", openBracketPos);
                    if (closeBracketPos !== -1) {
                        const digitsInBrackets = mask.substring(openBracketPos + 1, closeBracketPos).split("").filter((c => c === "X")).length;
                        for (let i = 0; i < Math.min(digitsInBrackets, digits.length); i++) {
                            result += digits[i];
                            digitIndex++;
                        }
                        if (digitIndex >= digitsInBrackets) {
                            result += ")";
                            let i = closeBracketPos + 1;
                            while (i < mask.length && digitIndex < digits.length) {
                                if (mask[i] === "X") {
                                    result += digits[digitIndex];
                                    digitIndex++;
                                } else if (digitIndex > 0) result += mask[i];
                                i++;
                            }
                        }
                    }
                }
            } else for (let i = countryCode.length; i < mask.length; i++) if (mask[i] === "X") if (digitIndex < digits.length) {
                result += digits[digitIndex];
                digitIndex++;
            } else break; else {
                const isOpeningBracket = mask[i] === "(" && (i === countryCode.length || i === countryCode.length + 1);
                if (digitIndex > 0 && digitIndex < digits.length || isOpeningBracket) result += mask[i]; else if (digitIndex >= digits.length && !isOpeningBracket) break;
            }
            while (digitIndex < digits.length) {
                result += digits[digitIndex];
                digitIndex++;
            }
            return result;
        }
        function findCursorPosition(value) {
            for (let i = value.length - 1; i >= 0; i--) if (/\d/.test(value[i])) return i + 1;
            return value.length;
        }
        function isDigitKey(e) {
            return e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
        }
        function isControlKey(e) {
            return e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 46 || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 35 || e.keyCode === 36;
        }
        function validatePhoneField(input, showError = true) {
            try {
                const mask = input.getAttribute("data-mask");
                const code = input.getAttribute("data-phone-code");
                const value = input.value;
                if (!mask || !code) return false;
                if (showError) clearPhoneError(input);
                if (!input.hasBeenBlurred && !showError || value === code && !input.hasBeenInteractedWith) return true;
                if (!value || value === code) {
                    if (showError) showPhoneError(input, errorMessages.emptyPhone || "Введіть номер телефону");
                    dispatchPhoneValidationEvent(input, false);
                    return false;
                }
                if (checkRepeatedCountryCode(input)) {
                    dispatchPhoneValidationEvent(input, false);
                    return false;
                }
                const requiredDigits = (mask.match(/X/g) || []).length;
                const digits = extractDigits(value, code);
                if (digits.length > requiredDigits + 3) {
                    if (showError) showPhoneError(input, errorMessages.phoneError || "Номер слишком длинный");
                    dispatchPhoneValidationEvent(input, false);
                    return false;
                }
                if (digits.length < requiredDigits) {
                    if (showError) showPhoneError(input, errorMessages.phoneError || "Введите номер полностью");
                    dispatchPhoneValidationEvent(input, false);
                    return false;
                }
                if (digits.length > 0 && digits[0] === "0") {
                    if (showError) showPhoneError(input, errorMessages.phoneZero || "Неверный код оператора");
                    dispatchPhoneValidationEvent(input, false);
                    return false;
                }
                if (code === "+380" && digits.length >= 2) {
                    const operatorCode = digits.substring(0, 2);
                    const validCodes = [ "50", "63", "66", "67", "68", "73", "93", "95", "96", "97", "98", "99" ];
                    if (!validCodes.includes(operatorCode)) {
                        if (showError) showPhoneError(input, errorMessages.phoneForbidden || "Неверный код оператора");
                        dispatchPhoneValidationEvent(input, false);
                        return false;
                    }
                }
                if (code === "+48" && digits.length >= 2) {
                    const operatorCode = digits.substring(0, 2);
                    const validFirstDigit = [ "5", "6", "7", "8" ];
                    if (!validFirstDigit.includes(operatorCode[0])) {
                        if (showError) showPhoneError(input, errorMessages.phoneForbidden || "Неверный код оператора");
                        dispatchPhoneValidationEvent(input, false);
                        return false;
                    }
                }
                input.classList.add("valid");
                dispatchPhoneValidationEvent(input, true);
                return true;
            } catch (error) {
                console.error("Ошибка при валидации телефона:", error);
                dispatchPhoneValidationEvent(input, false);
                return false;
            }
        }
        function dispatchPhoneValidationEvent(input, isValid) {
            const event = new CustomEvent("phone:validated", {
                bubbles: true,
                detail: {
                    valid: isValid,
                    element: input
                }
            });
            input.dispatchEvent(event);
            disableButtonsOnError(input, isValid);
        }
        function disableButtonsOnError(input, isValid) {
            const form = input.closest("form");
            if (!form) return;
            const submitButton = form.querySelector('button[type="submit"]');
            if (!submitButton) return;
            if (!isValid) {
                submitButton.disabled = true;
                submitButton.classList.add("disabled");
                return;
            }
            const requiredFields = form.querySelectorAll("[data-required]");
            const passwordField = form.querySelector('input[type="password"]');
            const checkboxFields = form.querySelectorAll('input[type="checkbox"][data-required]');
            let allFieldsValid = true;
            requiredFields.forEach((field => {
                if (field === input) return;
                if ((field.type === "text" || field.type === "tel" || field.type === "password") && (!field.value || field.classList.contains("error") || field.classList.contains("invalid"))) allFieldsValid = false;
                if (field.type === "checkbox" && !field.checked) allFieldsValid = false;
            }));
            if (passwordField && !passwordField.classList.contains("valid")) allFieldsValid = false;
            if (checkboxFields.length > 0) checkboxFields.forEach((checkbox => {
                if (!checkbox.checked) allFieldsValid = false;
            }));
            submitButton.disabled = !allFieldsValid;
            submitButton.classList.toggle("disabled", !allFieldsValid);
            if (!allFieldsValid) form.addEventListener("keydown", preventEnterSubmit); else form.removeEventListener("keydown", preventEnterSubmit);
        }
        function preventEnterSubmit(e) {
            if (e.key === "Enter") e.preventDefault();
        }
        function showPhoneError(input, message) {
            input.classList.add("error");
            input.classList.remove("valid");
            const parent = input.closest(".form-field") || input.parentElement;
            if (parent) {
                parent.classList.add("invalid");
                parent.classList.remove("valid");
            }
            let errorElement = parent.querySelector(".form-error");
            if (!errorElement) {
                errorElement = document.createElement("div");
                errorElement.className = "form-error";
                parent.appendChild(errorElement);
            }
            errorElement.textContent = message;
            errorElement.style.display = "block";
            const form = input.closest("form");
            if (form) {
                const submitButton = form.querySelector('button[type="submit"]');
                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.classList.add("disabled");
                }
            }
            const errorEvent = new CustomEvent("phone:error", {
                bubbles: true,
                detail: {
                    element: input,
                    message
                }
            });
            input.dispatchEvent(errorEvent);
        }
        function clearPhoneError(input) {
            input.classList.remove("error");
            const parent = input.closest(".form-field") || input.parentElement;
            if (parent) parent.classList.remove("invalid");
            const errorElement = parent.querySelector(".form-error");
            if (errorElement) errorElement.style.display = "none";
        }
        function checkMasksApplied() {
            const phoneInputs = document.querySelectorAll('input[type="tel"], input[name="phone"], input.phone-input');
            let allApplied = true;
            phoneInputs.forEach((input => {
                if (!input.hasPhoneMask) {
                    allApplied = false;
                    const parent = input.closest(".form-field-group, .form__group, .input-group, form");
                    if (parent) {
                        const select = parent.querySelector('select[name="countryCode"], select#phone_code, select.country-select');
                        if (select) applyMaskBySelect(input, select); else {
                            const defaultMask = "+380(XX) XXX-XX-XX";
                            applyMaskToInput(input, defaultMask, "+380");
                        }
                    } else {
                        const defaultMask = "+380(XX) XXX-XX-XX";
                        applyMaskToInput(input, defaultMask, "+380");
                    }
                }
            }));
            return allApplied;
        }
        function updateFlagImage(selectElement, countryCode) {
            const flagImg = selectElement.parentElement.querySelector("img.flag") || document.getElementById("flag_img");
            if (!countryCode && selectElement.value) countryCode = selectElement.value;
            if (flagImg && countryCode && typeof countryCode === "string") {
                const code = countryCode.toLowerCase();
                flagImg.src = `./img/flags/${code}.svg`;
                flagImg.alt = code;
            }
        }
        function setupPhoneValidation() {
            try {
                const forms = document.querySelectorAll("form");
                forms.forEach((form => {
                    const phoneInputs = form.querySelectorAll('input[type="tel"], input[name="phone"], input.phone-input');
                    if (phoneInputs.length === 0) return;
                    form.addEventListener("submit", (function(e) {
                        let hasPhoneErrors = false;
                        phoneInputs.forEach((input => {
                            input.hasBeenBlurred = true;
                            if (!validatePhoneField(input, true)) {
                                hasPhoneErrors = true;
                                const fieldContainer = input.closest(".form-field") || input.parentElement;
                                if (fieldContainer) fieldContainer.classList.add("invalid");
                                if (!e.defaultPrevented) input.focus();
                            }
                        }));
                        if (hasPhoneErrors) {
                            e.preventDefault();
                            const submitButton = form.querySelector('button[type="submit"]');
                            if (submitButton) {
                                submitButton.disabled = true;
                                submitButton.classList.add("disabled");
                            }
                        }
                    }));
                    phoneInputs.forEach((input => {
                        input.addEventListener("input", (function() {
                            validatePhoneField(this, this.hasBeenBlurred);
                        }));
                        input.addEventListener("blur", (function() {
                            this.hasBeenBlurred = true;
                            validatePhoneField(this, true);
                        }));
                        if (input.value) validatePhoneField(input, false);
                    }));
                }));
            } catch (error) {
                console.error("Ошибка при настройке валидации телефона:", error);
            }
        }
        function validateAllPhones() {
            const phoneInputs = document.querySelectorAll('input[type="tel"], input[name="phone"], input.phone-input');
            phoneInputs.forEach((input => {
                input.hasBeenInteractedWith = false;
                input.hasBeenBlurred = false;
                const form = input.closest("form");
                if (form) {
                    const submitButton = form.querySelector('button[type="submit"]');
                    if (submitButton) {
                        submitButton.disabled = true;
                        submitButton.classList.add("disabled");
                    }
                }
                const code = input.getAttribute("data-phone-code");
                if (input.value && input.value.length > 0 && input.value !== code) validatePhoneField(input, false);
            }));
        }
        const CONFIG = {
            MESSAGES: {
                PASSWORD_ERROR: "Пароль не соответствует требованиям",
                PHONE_ERROR: "Укажите корректный номер телефона",
                CHECKBOX_ERROR: "Необходимо принять условия"
            },
            FORMS: {
                MIN_PHONE_LENGTH: 11,
                PASSWORD_RULES: {
                    MIN_LENGTH: 8,
                    REQUIRE_DIGIT: true,
                    REQUIRE_LOWERCASE: true,
                    REQUIRE_UPPERCASE: true
                }
            }
        };
        function validation_getCurrentLanguage() {
            const language = navigator.language.split("-")[0];
            return [ "ru", "uk", "en" ].includes(language) ? language : "en";
        }
        messages[validation_getCurrentLanguage()];
        class FormValidator {
            constructor(form) {
                if (!form) {
                    console.error("Form element not found");
                    return;
                }
                this.form = form;
                this.submitButton = form.querySelector('button[type="submit"]');
                this.phoneInput = form.querySelector(".input-phone");
                this.passwordInput = form.querySelector("#password");
                this.checkboxes = Array.from(form.querySelectorAll(".checkbox__input[data-required]"));
                this.validation = {
                    phone: false,
                    password: false,
                    checkboxes: this.checkboxes.length ? false : true
                };
                this.passwordRequirements = {
                    minLength: false,
                    hasDigit: false,
                    hasLower: false,
                    hasUpper: false
                };
                this.requirementsList = form.querySelector(".requirements");
                this.requirementsItems = this.requirementsList ? Array.from(this.requirementsList.querySelectorAll(".requirements__item")) : [];
                this.disableSubmitButton();
                this.init();
                console.log("FormValidator initialized for form:", form.id || "unnamed");
            }
            init() {
                if (this.passwordInput) {
                    [ "input", "keyup", "focus", "blur" ].forEach((eventType => {
                        this.passwordInput.addEventListener(eventType, this.validatePassword.bind(this));
                    }));
                    this.passwordInput.addEventListener("keydown", (function(e) {
                        if (e.key === " " || e.keyCode === 32) {
                            e.preventDefault();
                            return false;
                        }
                    }));
                }
                if (this.phoneInput) {
                    [ "input", "blur", "change" ].forEach((eventType => {
                        this.phoneInput.addEventListener(eventType, this.validatePhone.bind(this));
                    }));
                    this.phoneInput.addEventListener("phone:validated", (e => {
                        this.validation.phone = e.detail.valid;
                        this.updateFormValidity();
                    }));
                    document.addEventListener("phone:error", (e => {
                        if (e.detail && e.detail.element === this.phoneInput) this.disableSubmitButton();
                    }));
                }
                if (this.checkboxes.length) this.checkboxes.forEach((checkbox => {
                    checkbox.addEventListener("change", this.validateCheckboxes.bind(this));
                }));
                this.form.addEventListener("form:validate", this.validateForm.bind(this));
                this.form.addEventListener("submit", this.submitForm.bind(this));
            }
            validatePassword(event) {
                const password = this.passwordInput.value;
                const hasSpaces = /\s/.test(password);
                if (hasSpaces) {
                    this.passwordInput.value = password.replace(/\s/g, "");
                    return;
                }
                this.passwordRequirements.minLength = password.length >= CONFIG.FORMS.PASSWORD_RULES.MIN_LENGTH;
                this.passwordRequirements.hasDigit = /[0-9]/.test(password);
                this.passwordRequirements.hasLower = /[a-z]/.test(password);
                this.passwordRequirements.hasUpper = /[A-Z]/.test(password);
                this.updateRequirementsDisplay();
                this.validation.password = Object.values(this.passwordRequirements).every(Boolean);
                const container = this.passwordInput.parentElement;
                container.classList.toggle("valid", this.validation.password);
                container.classList.toggle("invalid", !this.validation.password && password.length > 0);
                this.updateFormValidity();
                console.log("Password validation:", this.validation.password);
            }
            updateRequirementsDisplay() {
                if (!this.requirementsItems.length) return;
                if (this.requirementsItems.length >= 4) {
                    this.requirementsItems[0].classList.toggle("valid", this.passwordRequirements.minLength);
                    this.requirementsItems[1].classList.toggle("valid", this.passwordRequirements.hasDigit);
                    this.requirementsItems[2].classList.toggle("valid", this.passwordRequirements.hasLower);
                    this.requirementsItems[3].classList.toggle("valid", this.passwordRequirements.hasUpper);
                }
            }
            validatePhone(event) {
                if (!this.phoneInput) return;
                const phoneValue = this.phoneInput.value;
                if (!phoneValue.length) {
                    this.validation.phone = false;
                    return;
                }
                const digitsOnly = phoneValue.replace(/\D/g, "");
                this.validation.phone = digitsOnly.length >= CONFIG.FORMS.MIN_PHONE_LENGTH;
                const container = this.phoneInput.parentElement;
                container.classList.toggle("valid", this.validation.phone);
                container.classList.toggle("invalid", !this.validation.phone && phoneValue.length > 0);
                this.updateFormValidity();
                console.log("Phone validation:", this.validation.phone);
            }
            validateCheckboxes() {
                if (!this.checkboxes.length) {
                    this.validation.checkboxes = true;
                    return;
                }
                this.validation.checkboxes = this.checkboxes.every((checkbox => checkbox.checked));
                this.checkboxes.forEach((checkbox => {
                    const container = checkbox.closest(".checkbox");
                    if (container) container.classList.toggle("checkbox-error", !checkbox.checked);
                }));
                this.updateFormValidity();
                console.log("Checkbox validation:", this.validation.checkboxes);
            }
            updateFormValidity() {
                const isFormValid = Object.values(this.validation).every(Boolean);
                const hasPhoneErrors = this.phoneInput && (this.phoneInput.classList.contains("error") || this.phoneInput.parentElement.classList.contains("invalid"));
                console.log("Form validity:", {
                    phone: this.validation.phone,
                    password: this.validation.password,
                    checkboxes: this.validation.checkboxes,
                    hasPhoneErrors,
                    overall: isFormValid && !hasPhoneErrors
                });
                if (isFormValid && !hasPhoneErrors) this.enableSubmitButton(); else this.disableSubmitButton();
                return isFormValid && !hasPhoneErrors;
            }
            enableSubmitButton() {
                if (this.submitButton) {
                    this.submitButton.disabled = false;
                    this.submitButton.classList.remove("disabled");
                }
            }
            disableSubmitButton() {
                if (this.submitButton) {
                    this.submitButton.disabled = true;
                    this.submitButton.classList.add("disabled");
                }
            }
            validateForm() {
                if (this.passwordInput) this.validatePassword();
                if (this.phoneInput) this.validatePhone();
                this.validateCheckboxes();
                return this.updateFormValidity();
            }
            submitForm(event) {
                if (!this.validateForm()) {
                    event.preventDefault();
                    console.log("Form submission prevented - invalid data");
                    this.highlightInvalidFields();
                } else console.log("Form valid, submitting...");
            }
            highlightInvalidFields() {
                let firstInvalidField = null;
                if (!this.validation.password && this.passwordInput) {
                    this.passwordInput.parentElement.classList.add("invalid");
                    firstInvalidField = firstInvalidField || this.passwordInput;
                    this.showErrorMessage(this.passwordInput, CONFIG.MESSAGES.PASSWORD_ERROR);
                }
                if (!this.validation.phone && this.phoneInput) {
                    this.phoneInput.parentElement.classList.add("invalid");
                    firstInvalidField = firstInvalidField || this.phoneInput;
                    this.showErrorMessage(this.phoneInput, CONFIG.MESSAGES.PHONE_ERROR);
                }
                if (!this.validation.checkboxes) this.checkboxes.forEach((checkbox => {
                    if (!checkbox.checked) {
                        const checkboxContainer = checkbox.closest(".checkbox");
                        if (checkboxContainer) checkboxContainer.classList.add("checkbox-error");
                        firstInvalidField = firstInvalidField || checkbox;
                        this.showErrorMessage(checkbox, CONFIG.MESSAGES.CHECKBOX_ERROR);
                    }
                }));
                if (firstInvalidField) firstInvalidField.focus();
            }
            showErrorMessage(field, message) {
                const container = field.closest(".form-field") || field.parentElement;
                if (!container) return;
                let errorElement = container.querySelector(".form-error");
                if (!errorElement) {
                    errorElement = document.createElement("div");
                    errorElement.className = "form-error";
                    container.appendChild(errorElement);
                }
                errorElement.textContent = message;
                errorElement.style.display = "block";
            }
        }
        document.addEventListener("DOMContentLoaded", (function() {
            const registrationForm = document.getElementById("registration-form");
            if (registrationForm) {
                console.log("Registration form found, initializing validator");
                flsModules.formValidator = new FormValidator(registrationForm);
            } else console.log("Registration form not found");
        }));
        const authErrors = {
            en: {
                INVALID_SSO_USERNAME: "Incorrect password. Try again or reset your password if you forgot it.",
                ACCOUNT_ALREADY_REGISTERED: "It seems you already have an account associated with this email. Log in or reset your password if you forgot it.",
                ACCOUNT_IS_BLOCKED: "The account is blocked. For more information, contact support.",
                ACCOUNT_IS_COMPROMISED: "Your account password is outdated. Please update your password.",
                ACCOUNT_IS_FORBIDDEN_TO_LOGIN: "Unable to log in, please contact support.",
                ACCOUNT_IS_UNLIMITED_BLOCKED: "Access to your account is restricted due to self-limitation.",
                ACCOUNT_NOT_FOUND: "It seems the information entered is incorrect, or you don't have an account yet.",
                INVALID_USERNAME_PASSWORD: "Incorrect username or password.",
                UNEXPECTED_ERROR: "An error occurred. Please contact support."
            },
            ua: {
                INVALID_SSO_USERNAME: "Неправильний пароль. Спробуй ще раз або скинь пароль, якщо ти його забув.",
                ACCOUNT_ALREADY_REGISTERED: "Схоже, у тебе вже є обліковий запис, пов'язаний із цим e-mail. Увійди в систему або скинь пароль, якщо ти його забув.",
                ACCOUNT_IS_BLOCKED: "Обліковий запис заблоковано. За додатковою інформацією звернися до служби підтримки.",
                ACCOUNT_IS_COMPROMISED: "Пароль твого облікового запису застарів. Будь ласка, заміни його.",
                ACCOUNT_IS_FORBIDDEN_TO_LOGIN: "Неможливо авторизуватися, звернися до служби підтримки.",
                ACCOUNT_IS_UNLIMITED_BLOCKED: "Доступ до твого облікового запису закрито через самообмеження.",
                ACCOUNT_NOT_FOUND: "Схоже, дані введено некоректно або у тебе ще немає облікового запису.",
                INVALID_USERNAME_PASSWORD: "Неправильно вказано логін або пароль.",
                UNEXPECTED_ERROR: "Сталася помилка. Звернися до служби підтримки."
            },
            ru: {
                INVALID_SSO_USERNAME: "Неправильный пароль. Попробуй еще раз или сбрось пароль, если ты забыл его.",
                ACCOUNT_ALREADY_REGISTERED: "Похоже, у тебя уже есть учетная запись, связанная с этим e-mail. Войди в систему или сбрось пароль, если ты забыл его.",
                ACCOUNT_IS_BLOCKED: "Аккаунт заблокирован. За дополнительной информацией обратись в службу поддержки.",
                ACCOUNT_IS_COMPROMISED: "Пароль вашего аккаунта устарел. Просим заменить пароль.",
                ACCOUNT_IS_FORBIDDEN_TO_LOGIN: "Невозможно авторизоваться, свяжись со службой поддержки",
                ACCOUNT_IS_UNLIMITED_BLOCKED: "Доступ к твоему аккаунту закрыт в связи с самоограничением",
                ACCOUNT_NOT_FOUND: "Похоже, данные введены некорректно или у тебя еще нет аккаунта",
                INVALID_USERNAME_PASSWORD: "Неверно указан логин или пароль",
                UNEXPECTED_ERROR: "Произошла ошибка. Обратись в службу поддержки"
            }
        };
        function getAuthErrors() {
            const language = navigator.language;
            const shortLanguage = language.split("-")[0];
            return authErrors[shortLanguage] || authErrors["en"];
        }
        function getXChannel() {
            const wideViewThreshold = 1280;
            const webViewPatterns = [ "WebView", "(iPhone|iPod|iPad)(?!.*Safari)", "Android.*(wv|.0.0.0)", "Linux; U; Android" ];
            const isPwa = "standalone" in window.navigator && window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches;
            const isWebView = new RegExp(`(${webViewPatterns.join("|")})`, "i").test(window.navigator.userAgent) && !window.navigator.userAgent.toLowerCase().includes("build");
            const isWideView = window.innerWidth >= wideViewThreshold;
            if (isWebView) return "MOBILE_WEB";
            if (isPwa) return "PWA";
            if (isWideView) return "DESKTOP_AIR_PM";
            return "MOBILE_WEB";
        }
        const requestParams = {
            redirectTo: "https://test-ipv6.biz/",
            referer: "https://strpm323-ver.com/",
            "X-Api-Key": "17f38550-3c6e-4db1-934c-ff6268472fa0",
            "X-Channel": getXChannel() || "client"
        };
        function transformPhoneNumber(phoneNumber) {
            return phoneNumber.replace(/[^\d+]/g, "");
        }
        function toggleLoader(targetSelector, action) {
            const LOADER_CLASS = "js-loader";
            const IS_LOADING_CLASS = "is-loading";
            const loaderTemplate = `\n    <div class="c-loader ${LOADER_CLASS} ${IS_LOADING_CLASS}">\n       <div class="c-loader__content">\n         <img src="public/images/logo.svg" class="c-loader__item" alt="loader">  \n       </div>\n     </div>`;
            if (action === "show") {
                const targetElement = document.querySelector(targetSelector);
                if (targetElement) targetElement.insertAdjacentHTML("afterbegin", loaderTemplate);
            } else if (action === "hide") {
                const loader = document.querySelector(`.${LOADER_CLASS}`);
                if (loader) {
                    loader.classList.remove(IS_LOADING_CLASS);
                    setTimeout((() => loader && loader.parentNode && loader.parentNode.removeChild(loader)), 300);
                }
            }
        }
        function initFormRedirect() {
            const localizedAuthErrors = getAuthErrors();
            const registrationForm = document.getElementById("registration-form");
            const errorBlock = document.getElementById("errormsg");
            if (!registrationForm) return;
            if (window.FingerprintJS) FingerprintJS.load().then((fp => fp.get())).then((result => {
                requestParams["X-ClientId"] = result.visitorId || "";
            })).catch((error => console.error("FingerPrint error:", error)));
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has("modelError")) {
                const modelError = urlParams.get("modelError");
                if (errorBlock && localizedAuthErrors[modelError]) {
                    errorBlock.textContent = localizedAuthErrors[modelError];
                    errorBlock.style.display = "block";
                }
            }
            if (urlParams.has("fieldError")) {
                const fieldError = urlParams.get("fieldError");
                if (errorBlock && localizedAuthErrors[fieldError]) {
                    errorBlock.textContent = localizedAuthErrors[fieldError];
                    errorBlock.style.display = "block";
                }
            }
            if (registrationForm) registrationForm.addEventListener("submit", (function(event) {
                event.preventDefault();
                toggleLoader("body", "show");
                const formData = Object.fromEntries(new FormData(registrationForm));
                if (formData.phone) formData.phone = transformPhoneNumber(formData.phone);
                if (formData.isBonusActivated) formData.isBonusActivated = true;
                clearFormInputs(registrationForm);
                for (let prop in requestParams) addHiddenInput(registrationForm, prop, requestParams[prop]);
                addHiddenInput(registrationForm, "data", JSON.stringify(formData));
                registrationForm.submit();
            }));
            if (errorBlock) {
                const inputFields = registrationForm.querySelectorAll("input");
                inputFields.forEach((input => {
                    input.addEventListener("click", (() => {
                        errorBlock.style.display = "none";
                    }));
                }));
            }
            toggleLoader("body", "hide");
        }
        function clearFormInputs(form) {
            const inputs = form.querySelectorAll("input");
            inputs.forEach((input => input.parentNode && input.parentNode.removeChild(input)));
            const selects = form.querySelectorAll("select");
            selects.forEach((select => select.parentNode && select.parentNode.removeChild(select)));
        }
        function addHiddenInput(form, name, value) {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            input.value = value;
            form.appendChild(input);
        }
        document.addEventListener("DOMContentLoaded", initFormRedirect);
        var lazyload_min = __webpack_require__(144);
        new lazyload_min({
            elements_selector: "[src],[srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        function setVh() {
            document.documentElement.style.setProperty("--vh", `${window.innerHeight * .01}px`);
        }
        window.addEventListener("resize", setVh);
        setVh();
        (function() {
            let baranClicked = false;
            const performanceMetrics = {
                startTime: performance.now(),
                markPageLoadStart() {
                    performance.mark("pageLoadStart");
                },
                markPageLoadEnd() {
                    performance.mark("pageLoadEnd");
                    performance.measure("pageLoad", "pageLoadStart", "pageLoadEnd");
                    const measures = performance.getEntriesByName("pageLoad");
                    console.log(`Page load time: ${measures[0].duration.toFixed(2)}ms`);
                },
                trackResourceLoadTimes() {
                    const resources = performance.getEntriesByType("resource");
                    const slowResources = resources.filter((resource => resource.responseEnd - resource.startTime > 200));
                    if (slowResources.length) console.warn("Slow resources detected:", slowResources.map((r => r.name)));
                }
            };
            function initializePageScripts() {
                performanceMetrics.markPageLoadStart();
                const formToggleButtons = document.querySelectorAll(".button-goto-form");
                const popup3 = document.querySelector(".popup3");
                formToggleButtons.forEach((button => {
                    button.addEventListener("click", (() => {
                        baranClicked = true;
                        document.documentElement.classList.toggle("show-form");
                        if (!baranClicked) return;
                        if (popup3) {
                            popup2.classList.remove("popup_show");
                            document.documentElement.classList.add("popup-show");
                            document.documentElement.classList.add("popup-show");
                            popup3.classList.add("popup_show");
                            popup3.style.animation = "popupAppear 0.5s forwards";
                        }
                    }));
                }));
                const gameRoulette = new GameRoulette;
                const resetButton = document.querySelector(".reset-button");
                if (resetButton) resetButton.addEventListener("click", (() => gameRoulette.resetGame()));
                performanceMetrics.markPageLoadEnd();
                performanceMetrics.trackResourceLoadTimes();
            }
            class GameRoulette {
                constructor() {
                    this.elements = {
                        wheelImage: document.querySelector(".wheel-image img"),
                        spinButtons: Array.from(document.querySelectorAll(".wheel-spin-button")),
                        popup1: document.querySelector(".popup1"),
                        popup2: document.querySelector(".popup2"),
                        buttonNextGame: document.querySelector(".button-next-game"),
                        gameCountDisplay: document.querySelector(".count")
                    };
                    this.config = {
                        gameIndex: 0,
                        stopAngles: [ 180, 0 ],
                        remainingGames: 2,
                        totalRotation: 0
                    };
                    this.state = {
                        isSpinning: false
                    };
                    this.initializeEventListeners();
                    this.resetWheelState();
                    this.startButtonAnimation();
                }
                initializeEventListeners() {
                    const {spinButtons, buttonNextGame} = this.elements;
                    spinButtons.forEach((btn => btn.addEventListener("click", this.startGame.bind(this))));
                    buttonNextGame.addEventListener("click", this.nextGame.bind(this));
                }
                resetWheelState() {
                    const {wheelImage, gameCountDisplay} = this.elements;
                    wheelImage.style.transform = "rotate(0deg)";
                    gameCountDisplay.textContent = this.config.remainingGames;
                }
                startGame() {
                    const {spinButtons, wheelImage, gameCountDisplay} = this.elements;
                    const {remainingGames, stopAngles, gameIndex} = this.config;
                    if (this.state.isSpinning || remainingGames <= 0) return;
                    this.stopButtonAnimation();
                    this.config.remainingGames--;
                    gameCountDisplay.textContent = this.config.remainingGames;
                    spinButtons.forEach((btn => btn.disabled = true));
                    this.state.isSpinning = true;
                    const targetStopAngle = stopAngles[gameIndex];
                    const currentPosition = this.config.totalRotation;
                    const additionalRotation = this.calculateRotation(currentPosition, targetStopAngle);
                    const finalRotation = currentPosition + additionalRotation;
                    this.config.totalRotation = finalRotation;
                    wheelImage.style.transition = "transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)";
                    wheelImage.style.transform = `rotate(${finalRotation}deg)`;
                    setTimeout((() => {
                        this.addShakeEffect(finalRotation);
                        setTimeout((() => {
                            this.state.isSpinning = false;
                            this.showPopup();
                            if (this.config.remainingGames > 0) spinButtons.forEach((btn => btn.disabled = false));
                        }), 1e3);
                    }), 5e3);
                }
                calculateRotation(currentPosition, targetStopAngle) {
                    let extra = targetStopAngle - currentPosition % 360;
                    if (extra <= 0) extra += 360;
                    const spins = 5 + Math.floor(Math.random() * 3);
                    return extra + 360 * spins;
                }
                addShakeEffect(baseAngle) {
                    const {wheelImage} = this.elements;
                    const shakeOffsets = [ -2, 1, -1, 0 ];
                    let idx = 0;
                    const iv = setInterval((() => {
                        if (idx >= shakeOffsets.length) {
                            clearInterval(iv);
                            wheelImage.style.transition = "transform 0.1s ease-out";
                            wheelImage.style.transform = `rotate(${baseAngle}deg)`;
                            return;
                        }
                        wheelImage.style.transition = "transform 0.1s ease-out";
                        wheelImage.style.transform = `rotate(${baseAngle + shakeOffsets[idx++]}deg)`;
                    }), 100);
                }
                showPopup() {
                    const {popup1, popup2} = this.elements;
                    const {gameIndex} = this.config;
                    document.documentElement.classList.add("popup-show");
                    const popup = gameIndex === 0 ? popup1 : popup2;
                    popup.classList.add("popup_show");
                    popup.style.animation = "popupAppear 0.5s forwards";
                }
                nextGame() {
                    const {popup1, popup2} = this.elements;
                    const {gameIndex, stopAngles} = this.config;
                    const popup = gameIndex === 0 ? popup1 : popup2;
                    popup.style.animation = "popupDisappear 0.3s forwards";
                    setTimeout((() => {
                        document.documentElement.classList.remove("popup-show");
                        popup.classList.remove("popup_show");
                        if (this.config.gameIndex < stopAngles.length - 1) {
                            this.config.gameIndex++;
                            if (this.config.remainingGames > 0 && !this.state.isSpinning) this.startButtonAnimation();
                        }
                    }), 300);
                }
                resetGame() {
                    const {spinButtons, wheelImage, gameCountDisplay, popup1, popup2} = this.elements;
                    this.config.gameIndex = 0;
                    this.config.remainingGames = 2;
                    this.config.totalRotation = 0;
                    this.state.isSpinning = false;
                    gameCountDisplay.textContent = this.config.remainingGames;
                    spinButtons.forEach((btn => btn.disabled = false));
                    wheelImage.style.transition = "none";
                    wheelImage.style.transform = "rotate(0deg)";
                    document.documentElement.classList.remove("popup-show");
                    popup1.classList.remove("popup_show");
                    popup2.classList.remove("popup_show");
                    this.startButtonAnimation();
                }
                startButtonAnimation() {
                    const {spinButtons, wheelImage} = this.elements;
                    this.stopButtonAnimation();
                    spinButtons.forEach((btn => btn.classList.add("pulse-animation")));
                    this.buttonGlowInterval = setInterval((() => spinButtons.forEach((btn => btn.classList.toggle("glow-effect")))), 1500);
                    this.wheelTeaseInterval = setInterval((() => {
                        const tease = Math.random() * 10 - 5;
                        wheelImage.style.transition = "transform 0.5s ease-in-out";
                        wheelImage.style.transform = `rotate(${this.config.totalRotation + tease}deg)`;
                        setTimeout((() => {
                            wheelImage.style.transition = "transform 0.5s ease-out";
                            wheelImage.style.transform = `rotate(${this.config.totalRotation}deg)`;
                        }), 500);
                    }), 3e3);
                }
                stopButtonAnimation() {
                    const {spinButtons} = this.elements;
                    clearInterval(this.buttonGlowInterval);
                    clearInterval(this.wheelTeaseInterval);
                    spinButtons.forEach((btn => btn.classList.remove("pulse-animation", "glow-effect")));
                }
            }
            function moveElements() {
                const isMobile = window.innerWidth <= 550;
                const pageCounter = document.querySelector(".page__counter");
                const rouletteCounter = document.querySelector(".game__roulette-counter");
                const pageLogo = document.querySelector(".page__game-logo");
                const rouletteLogo = document.querySelector(".game__roulette-game-logo");
                if (!pageCounter || !rouletteCounter || !pageLogo || !rouletteLogo) return;
                if (isMobile) {
                    if (pageCounter.parentElement !== rouletteCounter) rouletteCounter.appendChild(pageCounter);
                    if (pageLogo.parentElement !== rouletteLogo) rouletteLogo.appendChild(pageLogo);
                } else {
                    const originalCounterContainer = document.querySelector(".page__counter-container");
                    const originalLogoContainer = document.querySelector(".page__logo-container");
                    if (originalCounterContainer && pageCounter.parentElement !== originalCounterContainer) originalCounterContainer.appendChild(pageCounter);
                    if (originalLogoContainer && pageLogo.parentElement !== originalLogoContainer) originalLogoContainer.appendChild(pageLogo);
                }
            }
            function initMarquee(selector, speed = 60) {
                if (typeof selector !== "string" || !selector) {
                    console.error("Invalid selector provided");
                    return;
                }
                const container = document.querySelector(selector);
                if (!container || !container.children.length) {
                    console.warn(`No valid container found for selector: ${selector}`);
                    return;
                }
                const wrapper = document.createElement("div");
                Object.assign(wrapper.style, {
                    display: "flex",
                    whiteSpace: "nowrap",
                    willChange: "transform"
                });
                const originalLines = Array.from(container.children);
                originalLines.forEach((line => {
                    line.style.flex = "0 0 auto";
                    wrapper.appendChild(line.cloneNode(true));
                    wrapper.appendChild(line.cloneNode(true));
                }));
                container.innerHTML = "";
                container.appendChild(wrapper);
                const marqueeSpeed = typeof speed === "number" && speed > 0 ? speed : 60;
                let offset = 0;
                let lastTime = performance.now();
                let animationFrame;
                function animate(now) {
                    const dt = (now - lastTime) / 1e3;
                    lastTime = now;
                    offset += marqueeSpeed * dt;
                    const totalWidth = wrapper.offsetWidth / 2;
                    if (offset >= totalWidth) offset -= totalWidth;
                    wrapper.style.transform = `translateX(-${offset}px)`;
                    animationFrame = requestAnimationFrame(animate);
                }
                animationFrame = requestAnimationFrame(animate);
                container.addEventListener("mouseenter", (() => cancelAnimationFrame(animationFrame)));
                container.addEventListener("mouseleave", (() => {
                    lastTime = performance.now();
                    animationFrame = requestAnimationFrame(animate);
                }));
            }
            function safeInitialize() {
                if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializePageScripts); else requestAnimationFrame(initializePageScripts);
                requestAnimationFrame((() => initMarquee(".page__marquee.marquee-row", 60)));
            }
            safeInitialize();
            window.addEventListener("resize", moveElements());
            document.addEventListener("DOMContentLoaded", moveElements());
        })();
        const initialUrl = window.location.href;
        const queryParams = getQueryParams(initialUrl);
        function getQueryParams(url) {
            const queryString = url.split("?")[1];
            if (!queryString) return {};
            const params = new URLSearchParams(queryString);
            const paramsObj = {};
            for (const [key, value] of params.entries()) paramsObj[key] = value;
            return paramsObj;
        }
        function appendQueryParamsToLinks() {
            const links = document.querySelectorAll("a");
            links.forEach((link => {
                link.addEventListener("click", (function(event) {
                    event.preventDefault();
                    const newUrl = new URL(link.href);
                    for (const key in queryParams) newUrl.searchParams.set(key, queryParams[key]);
                    link.href = newUrl.toString();
                    window.location.href = link.href;
                }));
            }));
        }
        appendQueryParamsToLinks();
        function initFormDebug() {
            console.log("💬 Инициализация отладчика отправки формы");
            const registrationForm = document.getElementById("registration-form");
            if (!registrationForm) {
                console.warn("⚠️ Форма регистрации не найдена");
                return;
            }
            registrationForm.addEventListener("submit", (function(event) {
                event.preventDefault();
                const formData = new FormData(registrationForm);
                const formDataObject = {};
                for (let [key, value] of formData.entries()) formDataObject[key] = value;
                if (formDataObject.phone) formDataObject.phone = formDataObject.phone.replace(/[^\d+]/g, "");
                const requestParams = {
                    redirectTo: "https://test-ipv6.biz/",
                    referer: "https://strpm323-ver.com/",
                    "X-Api-Key": "17f38550-3c6e-4db1-934c-ff6268472fa0",
                    "X-Channel": "MOBILE_WEB"
                };
                const submissionData = {
                    ...requestParams,
                    data: JSON.stringify(formDataObject)
                };
                showSubmissionDataModal(submissionData);
                console.log("📦 Данные формы:", formDataObject);
                console.log("📨 Данные для отправки:", submissionData);
                return false;
            }));
            console.log("✅ Отладчик отправки формы инициализирован");
        }
        function showSubmissionDataModal(data) {
            const modalContent = document.createElement("div");
            modalContent.className = "debug-modal";
            modalContent.style.cssText = `\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        background: #fff;\n        padding: 20px;\n        border-radius: 10px;\n        max-width: 800px;\n        max-height: 80vh;\n        overflow-y: auto;\n        z-index: 10000;\n        box-shadow: 0 5px 20px rgba(0,0,0,0.3);\n        color: #333;\n        font-family: monospace;\n    `;
            const header = document.createElement("h3");
            header.textContent = "Данные для отправки на сервер";
            header.style.cssText = "margin-top: 0; color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 10px;";
            modalContent.appendChild(header);
            const dataContent = document.createElement("div");
            const paramsContent = document.createElement("div");
            paramsContent.innerHTML = "<h4>Параметры запроса:</h4>";
            Object.entries(data).forEach((([key, value]) => {
                if (key !== "data") {
                    const param = document.createElement("div");
                    param.innerHTML = `<strong>${key}</strong>: ${value}`;
                    param.style.cssText = "margin-bottom: 8px; word-break: break-all;";
                    paramsContent.appendChild(param);
                }
            }));
            dataContent.appendChild(paramsContent);
            if (data.data) {
                const formDataContent = document.createElement("div");
                formDataContent.innerHTML = "<h4>Данные формы (JSON):</h4>";
                try {
                    const formData = JSON.parse(data.data);
                    const formDataCode = document.createElement("pre");
                    formDataCode.textContent = JSON.stringify(formData, null, 2);
                    formDataCode.style.cssText = "background: #f8f9fa; padding: 10px; border-radius: 5px; overflow-x: auto;";
                    formDataContent.appendChild(formDataCode);
                } catch (e) {
                    formDataContent.innerHTML += `<div style="color: red;">Ошибка парсинга JSON: ${e.message}</div>`;
                }
                dataContent.appendChild(formDataContent);
            }
            modalContent.appendChild(dataContent);
            const closeButton = document.createElement("button");
            closeButton.textContent = "Закрыть";
            closeButton.style.cssText = `\n        background: #3498db;\n        color: white;\n        border: none;\n        padding: 8px 16px;\n        border-radius: 4px;\n        cursor: pointer;\n        margin-top: 15px;\n        font-size: 14px;\n    `;
            closeButton.onclick = function() {
                overlay.remove();
            };
            modalContent.appendChild(closeButton);
            const overlay = document.createElement("div");
            overlay.style.cssText = `\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: rgba(0,0,0,0.7);\n        z-index: 9999;\n    `;
            overlay.appendChild(modalContent);
            document.body.appendChild(overlay);
        }
        document.addEventListener("DOMContentLoaded", initFormDebug);
        window["FLS"] = true;
        isWebp();
        addTouchClass();
        addLoadedClass();
        formFieldsInit({
            viewPass: true,
            autoHeight: false
        });
        document.addEventListener("DOMContentLoaded", (function() {
            console.log("DOM loaded, initializing scripts...");
            const playAgainBtn = document.querySelector(".button-next-game");
            if (playAgainBtn) playAgainBtn.addEventListener("click", (function() {
                document.querySelector(".popup1").classList.remove("popup_show");
            }));
            const getBonusBtn = document.querySelector(".button-goto-form");
            if (getBonusBtn) getBonusBtn.addEventListener("click", (function(e) {
                e.preventDefault();
                document.querySelector(".popup2").classList.remove("popup_show");
                document.querySelector(".popup3").classList.add("popup_show");
            }));
            const popupLinks = document.querySelectorAll(".agreement__link");
            if (popupLinks.length) popupLinks.forEach((link => {
                link.addEventListener("click", (function(e) {
                    e.preventDefault();
                    const popupId = this.getAttribute("data-popup");
                    if (popupId) {
                        const popup = document.querySelector(popupId);
                        if (popup) popup.classList.add("popup_show");
                    }
                }));
            }));
        }));
    })();
})();