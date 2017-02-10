!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.socshare = t();
}(this, function() {
    "use strict";
    function e(e) {
        if (e && "undefined" != typeof window) {
            var t = document.createElement("style");
            return t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), 
            e;
        }
    }
    function t(e) {
        return "[object String]" === Object.prototype.toString.call(e);
    }
    function i(e) {
        return "[object Boolean]" === Object.prototype.toString.call(e);
    }
    function o(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
    }
    function n(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
    }
    function r(e) {
        return "[object NodeList]" === Object.prototype.toString.call(e);
    }
    function a(e) {
        return "[object Function]" === Object.prototype.toString.call(e);
    }
    function s(e, t) {
        if (a(t)) {
            var s;
            if (n(e) || r(e)) for (var c = 0, l = e.length; c < l && (s = t(e[c], c), !i(s) || s); c++) ; else if (o(e)) for (var d in e) if (e.hasOwnProperty(d) && (s = t(e[d], d), 
            i(s) && !s)) break;
        }
        return e;
    }
    function c(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, t = t.children[0];
    }
    function l() {
        return !1;
    }
    function d(e) {
        return p.call(this, e);
    }
    function A() {
        s(this, function(e) {
            b(e.element, e.type, e.handler);
        });
    }
    function h(e) {
        var t = this, i = e.srcElement || e.target, o = [], n = t.element.querySelectorAll(t.selector);
        if (t && t.element && i.nodeType && (!e.button || "click" !== e.type)) for (;i != t.element; i = i.parentNode || t.element) for (var r = 0, a = n.length; r < a; r++) if (n[r] === i) {
            o.push(i);
            break;
        }
        return o;
    }
    function p(e) {
        var t, i, o = this, n = h.call(this, e), r = 0;
        if (n.length) for (;i = n[r++]; ) t = o.handlerForMatched.call(i, e, i), void 0 !== t && (e.result = t) === !1 && (e.preventDefault(), 
        e.stopPropagation()); else o.handlerForAll && (t = o.handlerForAll.call(e.srcElement || e.target, e, e.srcElement || e.target), 
        void 0 !== t && (e.result = t) === !1 && (e.preventDefault(), e.stopPropagation()));
    }
    function f(e) {
        if (t(e)) switch (e) {
          case "transitionend":
            return {
                "": "transitionend",
                "-moz-": "transitionend",
                "-webkit-": "webkitTransitionEnd"
            }[V];
        }
        return e;
    }
    function u(e, t, i, o) {
        b(e, t, i), e.addEventListener ? "input" === t && H() ? e.onpropertychange = i : e.addEventListener(t, i, o) : e.attachEvent("on" + t, function() {
            i.call(e);
        });
    }
    function b(e, t, i) {
        e.removeEventListener ? e.removeEventListener(t, i) : e.detachEvent("on" + t, i);
    }
    function g(e, i, o, r, c, h) {
        i = (i || "").match(Q) || [ "" ];
        var p = t(o) && o.length;
        if (r === !1) r = l; else if (!a(r)) return null;
        if (a(c) || (c = null), h) {
            var f = r;
            r = function(e) {
                return f.apply(this, arguments);
            };
        }
        if (n(e) || (e = [ e ]), e.length) {
            var b = [];
            return s(e, function(e) {
                s(i, function(t) {
                    var i = r;
                    p && (i = P(d, {
                        element: e,
                        type: t,
                        selector: o,
                        handlerForMatched: r,
                        handlerForAll: c
                    })), u(e, t, i, !1), b.push({
                        element: e,
                        type: t,
                        handler: i
                    });
                });
            }), P(A, b);
        }
    }
    function w(e) {
        return e = e.toLowerCase(), K.indexOf(e) !== -1;
    }
    function m(e) {
        var t = e.split(".");
        return parseFloat(t[0] + "." + t[1]);
    }
    function v(e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", i = 0; i < e.length; i++) {
            var o = e.charCodeAt(i);
            o < 128 ? t += String.fromCharCode(o) : o > 127 && o < 2048 ? (t += String.fromCharCode(o >> 6 | 192), 
            t += String.fromCharCode(63 & o | 128)) : (t += String.fromCharCode(o >> 12 | 224), 
            t += String.fromCharCode(o >> 6 & 63 | 128), t += String.fromCharCode(63 & o | 128));
        }
        return t;
    }
    function y(e) {
        var t, i, o, n, r, a, s, c = "", l = 0;
        for (e = v(e); l < e.length; ) t = e.charCodeAt(l++), i = e.charCodeAt(l++), o = e.charCodeAt(l++), 
        n = t >> 2, r = (3 & t) << 4 | i >> 4, a = (15 & i) << 2 | o >> 6, s = 63 & o, isNaN(i) ? a = s = 64 : isNaN(o) && (s = 64), 
        c = c + ee.charAt(n) + ee.charAt(r) + ee.charAt(a) + ee.charAt(s);
        return c;
    }
    function k(e) {
        return [ '<div class="' + te + "-item " + e.key + '" data-site="' + e.key + '">  <div class="' + te + '-item-icon" style="background-color:' + e.bgColor + '">    <img src="' + e.icon + '" alt="' + e.name + '" title="' + e.name + '">  </div>  <div class="' + te + '-item-title">' + e.name + "</div></div>" ].join("");
    }
    function x() {
        var e = document.getElementById(te);
        if (!e) {
            var t = this, i = q(this.sites), o = ae.WRAP.replace(/\{\{groups\}\}/g, i);
            e = c(o), g(e, "click", "." + re.CANCEL + ",." + re.BACKDROP + ",." + re.ITEM + ",." + re.BACK_BUTTON, function(i) {
                if (this.classList.contains(re.CANCEL) || this.classList.contains(re.BACKDROP)) t.hide(); else if (this.classList.contains(re.ITEM)) {
                    var o = this.getAttribute("data-site");
                    o && E.call(t, o);
                } else if (this.classList.contains(re.BACK_BUTTON)) {
                    var n = e.querySelector("." + re.COPY_WRAP), r = e.querySelector("." + re.ITEM_WRAP);
                    z(function() {
                        n.classList.add(re.TRANSITION_LEAVE), r.classList.remove(re.TRANSITION_LEAVE);
                    });
                }
                i.stopPropagation();
            }, function(e) {
                e.stopPropagation();
            }), e.addEventListener(f("transitionend"), function(e) {
                e.currentTarget.classList.contains(re.TRANSITION_ENTER) ? e.currentTarget.classList.remove(re.TRANSITION_ENTER) : e.currentTarget.classList.contains(re.TRANSITION_LEAVE) && (e.currentTarget.classList.remove(re.TRANSITION_LEAVE), 
                e.currentTarget.style.display = "none");
            }), document.body.appendChild(e);
        }
        return e;
    }
    function E(e) {
        var t, i, o = this, n = $[e];
        if (n) {
            if (oe) {
                if (Y.browser.isUC && (ne[n] && (t = Y.os.isIOS ? ne[n][0] : ne[n][1]), void 0 !== t)) return i = [ this.title, this.description, this.link, t, "", "@" + this.from, "" ], 
                window.ucweb && window.ucweb.startRequest && window.ucweb.startRequest("shell.page_share", i), 
                void (window.ucbrowser && window.ucbrowser.web_share && window.ucbrowser.web_share.apply(null, i));
                if (Y.browser.isQQ && (ne[e] && (t = ne[e][2]), void 0 !== t)) return void (window.browser ? (i = {
                    url: this.link,
                    title: this.title,
                    description: this.description,
                    img_url: this.imageUrl,
                    img_title: this.imageTitle,
                    to_app: t,
                    cus_txt: ""
                }, window.browser.app && window.browser.app.share(i)) : R("//jsapi.qq.com/get?api=app.setShareInfo,app.share", P(function() {
                    E.call(this, e);
                }, this)));
            }
            if ("wechat" === e || "wechat_timeline" === e) return void S.call(this);
            if ("qzone" === e || "qq" === e) {
                var r = I(n.scheme, {
                    share_id: n.shareID,
                    url: y(this.link),
                    title: y(this.title),
                    description: y(this.description),
                    previewimageUrl: y(this.imageUrl),
                    image_url: y(this.imageUrl)
                });
                return N(r, "qzone" === e ? P(function(e) {
                    !e && C.call(this);
                }, this) : P(function(e) {
                    !e && E.call(this, "copyLink");
                }, this)), void setTimeout(P(function() {
                    this.hide();
                }, this), 100);
            }
            if ("wechat" === e) return Y.browser.isWechat ? alert("请点击右上角在新窗口中打开") : S.call(this), 
            void setTimeout(P(function() {
                this.hide();
            }, this), 100);
            "copyLink" === e && S.call(this);
            var a = n.api;
            if (a) {
                for (var s in o) o.hasOwnProperty(s) && (a = a.replace(new RegExp("{{" + s + "}}", "g"), encodeURIComponent(o[s])));
                window.open(a, "_blank"), setTimeout(P(function() {
                    this.hide();
                }, this), 100);
            }
        }
    }
    function C() {
        var e = this, t = e.description.substring(0, 200);
        window.location = "//openmobile.qq.com/api/check2?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&" + [ "title=" + encodeURIComponent(this.title), "imageUrl=" + encodeURIComponent(this.imageUrl), "desc=" + encodeURIComponent(t), "url=" + e.link, "successUrl=" + e.link ].join("&");
    }
    function I(e, t) {
        var i = [];
        for (var o in t) i.push(o + "=" + t[o]);
        return e + (e.indexOf("?") !== -1 ? "&" : "?") + i.join("&");
    }
    function R(e, t) {
        var i = document.createElement("script");
        i.src = e, i.onload = i.onreadystatechange = function() {
            this.readyState && "load" !== this.readyState && "complete" !== this.readyState || (t && t(), 
            i.onload = i.onreadystatechange, i.parentNode.removeChild(i));
        }, document.body.appendChild(i);
    }
    function T(e) {
        function t(t) {
            e(t > 3001 || document.hidden || document.webkitHidden ? !0 : !1);
        }
        var i, o = +new Date(), n = 0;
        i = setInterval(function() {
            n++;
            var e = +new Date() - o;
            (n >= 100 || e > 3001) && (clearInterval(i), t(e));
        }, 30);
    }
    function N(e, t) {
        if (Y.os.isIOS) window.location.href = e, t && T(function(e) {
            t && t(e);
        }); else {
            var i = document.createElement("iframe");
            i.src = e, i.style.display = "none", t && T(function(e) {
                t && t(e);
            }), document.body.appendChild(i), setTimeout(function() {
                document.body.removeChild(i);
            }, 2e3);
        }
    }
    function S() {
        var e = x.call(this), t = e.querySelector("." + re.ITEM_WRAP);
        t.classList.add(re.TRANSITION_LEAVE);
        var i = e.querySelector("." + re.COPY_WRAP);
        i.style.display = "", i.classList.add(re.TRANSITION_LEAVE);
        var o = i.querySelector("." + re.COPY_LINK);
        o.innerHTML = this.link, o.setAttribute("href", this.link), z(function() {
            i.classList.remove(re.TRANSITION_LEAVE);
        });
    }
    function O() {
        var e = x.call(this), t = e.querySelector("." + re.COPY_WRAP);
        t && "none" !== t.style.display && t.classList.add(re.TRANSITION_LEAVE);
    }
    function q(e) {
        for (var t = "", i = 4, o = 0, n = e.length; o < n; o++) {
            i && o % i === 0 && (t += '<div class="' + te + '-group" data-grop="' + (o / i + 1) + '">');
            var r = e[o], a = $[r];
            a ? t += k(a) : console.warn("site [" + r + "] not exist."), !i || o % i !== i - 1 && o !== n - 1 || (t += "</div>", 
            o != n - 1 && (t += ae.DIVIDE));
        }
        return t;
    }
    function L(e) {
        var t = this;
        for (var i in e) e.hasOwnProperty(i) && t.hasOwnProperty(i) && (t[i] = e[i]);
    }
    function B(e) {
        M(this, le), L.call(this, e);
    }
    var P = function(e, t) {
        return function() {
            return e.apply(t, arguments);
        };
    };
    "function" != typeof Object.assign && (Object.assign = function(e) {
        var t = arguments;
        if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
        for (var i = Object(e), o = 1; o < arguments.length; o++) {
            var n = t[o];
            if (void 0 !== n && null !== n) for (var r in n) n.hasOwnProperty(r) && (i[r] = n[r]);
        }
        return i;
    });
    var z, U, M = Object.assign, H = function() {
        return !-[ 1 ];
    }, V = function() {
        var e = document.createElement("div").style, t = "";
        return s([ "", "-webkit-", "-moz-", "-ms-" ], function(i) {
            var o = i + "transition";
            if (o in e) return t = i, !1;
        }), t;
    }(), Q = /\S+/g, j = {
        "": "",
        "-moz-": "moz",
        "-webkit-": "webkit"
    }[V];
    if (j) z = window[j + "RequestAnimationFrame"], U = window[j + "CancelAnimationFrame"] || window[j + "CancelRequestAnimationFrame"]; else {
        var F = 0;
        z = function(e) {
            var t = new Date().getTime(), i = Math.max(0, 16.7 - (t - F)), o = window.setTimeout(function() {
                e(t + i);
            }, i);
            return F = t + i, o;
        }, U = function(e) {
            clearTimeout(e);
        };
    }
    var K = navigator.userAgent.toLowerCase(), Y = {
        os: {
            version: 0,
            isIOS: w("iPhone") || w("iPad") || w("iPod"),
            isAndroid: w("Android") || w("adr") || w("linux")
        },
        browser: {
            version: 0,
            isUC: w("UCBrowser"),
            isQQ: w("MQQBrowser"),
            isWechat: w("MicroMessenger"),
            isFirefox: w("firefox"),
            isBaidu: w("baiduboxapp"),
            isSafari: w("safari") && !w("chrome")
        },
        brand: {
            isOppo: w("oppo"),
            isSamsung: w("samsungbrowser"),
            isSogou: w("sogoumobilebrowser")
        },
        version: {
            qq: 0,
            uc: 0
        }
    };
    Y.version.qq = Y.browser.isQQ ? m(K.split("mqqbrowser/")[1]) : 0, Y.version.uc = Y.browser.isUC ? m(K.split("ucbrowser/")[1]) : 0;
    var G = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAOVBMVEVHcEz///////////////////////////////////////////////////////////////////////99PJZNAAAAEnRSTlMAMOCwQGDQ8IAQkFAgn79wwKDPjjl1AAABuUlEQVR4Xu3VwXKFIAwF0IsASVBR8/8f27IBnSeitatOz455w30kSsTf9G8amW1KMy9O8JifSXdCNHhgiqQfBi+4R6KeowV3jKRNwaAr6qXeIcRqx4xLSfVVwqw3RDR5rQbNTtcjGoT2vZJNi+AAUyJIcK7uYGT1Tw0AjGW54dSkhUO2lgMgEy0mnGEtPLJQ1gIArtfHQQtyABYtrACStKBWBVWag+5QmgfdMfg0ah/ZxaGFtSd4gYyc0qCUEo/yLGDwEB90z/oHAVHAdJJ6N8DDDZ0Rwdf7uTsi3OX++cYF1ybO+/sJVhsCvF7zyLw2uIm0w5TLcGKt95w8xlAKE1MOna5e5nGqR92NnfVw4127C4R4nBOhXun6k0UmZ0XYXWl21yqSwxAUZIb0A09aJa6npDiTFg6tBOf0DkYrwS2PAiBBjxw/CShdrpx/GkA/6oFvzkYWvWM6fp+IR15JM4ugfeFQAbEgE/fNYHlWQdleCGnPgCKy/GDiO1zqdiGiw5BeWYFXCUHwKmEV3GFafdhwF3ceYN+0UeMdvk28rRlhi3mx4CHj+NviBPlMqitemVYVvOMMfsu/L0Ath0CgH1P9AAAAAElFTkSuQmCC", D = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAOVBMVEVHcEz///////////////////////////////////////////////////////////////////////99PJZNAAAAEnRSTlMA8DB/z6DQPxCAwGAgcLBQ4JAZyUNJAAAB60lEQVR4Xs3X246rMAyF4QRI43Bmvf/DbomhLNUmznRfjS+r/p8gCqfwh0dyn8ZzUp/l27o7dnzMnrpv+hV2Ssjzr2I5JMjrCShIvyCWiIGCAhD7Rj6PACgYABjcg5gioAQNIE71vgegBAsAqdYnwBEIILm9FQhQ8HsKFQCL7SfAETSATfdzhCNYIIoCBsARLID1sy+AIxConYRENIXCZTInQdsRSsj4mMkcgC8QsHthzs7M4RQI2L498roB9t1tzP3DbFq4APYR72U8YOclQQkXwJ7LODg9he0HYM/N5PecrHrs/N3rCdy9XAf987+l0RPQPTK3od8TYM/bwtroCege5fx91L3Mz8Cme6QLUP2Qn4Gie4wXoHrUAN1jvQDV14COvVoD1deAqzdAUT0BtycwqZ6A2/OPWfUE3J5bObAn3O55MYUX+zewSbvn5by8ewJlbfd8Qs53T0DfNJfyMPeWT3dPQAv+sCdwCl12RmxPgLeu6uyBs8AAbSGrh6sFfGH8XGQD+ILdbaMFfOFwXnEIUGjfuScN+ELHkoICPGFyXhQNgFEosHcEDWBQwhIqUwjAEZzX9S0SqAmxC87IqAAjrNL85CFghbiF5kiJBJRQxCtJCIH/fbHr0q627jJ//+lbynjOMeXwh+cfhtCFZYWp8dQAAAAASUVORK5CYII=", W = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAIGAwgKDwQBDA0FDfsHDgkD+PT2O/b44AAAGsSURBVHhe1dfddqsgEAXgzf8AYmw67/+sPUe7zHLhONjctN9dFHaMCVuCX859/GPwM+5Z+Ft+fuIuO/FB9IQb6sSd6DHsyaeKwxAqLIhpcL7MQdf4QtQTZr5UoDCRr3lcC6yIhCuGVV65ANWEK5F1CbLKAxbIPA/IkGUeARkPMe8GJEjS3w+o7wY0HrJAYGzmEQECT/Rgna9OCgBcGXl/j1M095Xa8xADqtMXVF7HzIQzCzamidMTVqniRHpVtguRO2U2+DZPhA5NzPb1yi6Fd4+8VDq0xiJ0STskm7RyOKB8uqRpu+hYobDbwCaWWU64kLLUKtNI4dgs/p6dXnmfz4lfOIp1nLFJ8769+rA+x+tFfXJt4dYjbupP5FuLmu8HZCnA/ihgLZLHSMA+MPRtaLYTakBO/U206xHL/02WtvsqqWjdho0iFwCFNzkEeX5eh2cc2UAA3Oiz1bUkbfJU9s1dWoAiaPNV5Y2N6l6nshiM8kdBN0PkeYiFgHhMu7NRLlH5DMpXGGD7TIJojn1t1QcfNMIFsm3PKDNhVcOe8VgMVJRW3bGaEuEX+gJWbpMHBa1eygAAAABJRU5ErkJggg==", X = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAYECgEPAwwH8/4NAgUJCwcM+fr0RbN4IAAAGVSURBVHhe7ZbdkoMgDIUVE2ARf7o97/+s22k7pZmAUJnZq36XmBwPJgGHf+CLQ+zKN8DUJbABXRYi0GdhArosRNy5dhoAzMl8whN3UsADXRaI0WfBA30WGOiyMOKd8XOBIATCGQNdFoghCXSiBAJ/YgoEXJgp+5PjCs1Vh9H9yOjA3gRoVcuzK5KtjHVqu27db/Y0vyLKvtZ35AjOjz+itE74tEPCMBJa5hFKF5EvHdoAiX5XFPkTDRKaUWK7x1oW+YOCJuRZB5lfHoysAo9tsy2idKlGtZZnST7Fpxa9Fgr5aafqU/0qzTI0q62SyHc0HJOajU2mfeCHVoE55vKx1QSC7DTLkFxqAtJp1DPSdJ/yksZs34I6Qw4waXgStHjHjZecKVbKjuvcUIYdYF/GVf+YPGq42k9NDa71URX6SIB3MaH1MkAykb44xnaB8HyZnZvHySLBb5E7N5bBvMVF0Yxb2zgtL/eL0g540tJHng4e2qqAK4TER5GXShvwQZ2WUCmDA9bDTqP1eJz8ZoYKVoX08uUPi2Bapj4cFIsAAAAASUVORK5CYII=", J = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAMMAgQGCgEPCAcNBQsOCQ37+Pr/HIP5wAAAI0SURBVHhetVfdeuwgCFyNfxhNTJb3f9Zz03aqYvS0X+du10AGGIS8/hjeGLP9zHSz7gr8gcvZ7f+s484tyr3sw7xZxpVWzNXFYxQzzdrNz3g/B6IKzxCe4rC8gnto73gNb79mv2eiSET64PbEz+2z9ThScZ97IAbYdbk2uvLgOvvEgBZLZapIqBVvwFkcaaQKspEU5BfUWpmDl05gP/dwvgAfevu5h02qwLTfTqkSPoDWFHtPAbyORh8qEbVXmuopwKmtqkblQ3Z2oNjwqYEvAlW6oAwuSC0exwujRKC+WML3o4yGaf7weChyA9WpHjHAH3TPQC+82i3SGntly92jkYSKkRFKBQRJd1T9FOUGJCEJeeBAswASMqQhjIpjYQFOdoDX7XDAErTgoMBBE8KcAVjnRQdxFAKhOzsdylq0AwfQgeceh1RlXVX1fBxyUYqQqogKHvHHQy/41qt0S6oHArbNiwYhQIV6GMozBL0BmmIigxJbPYMuKIgNZSQCuMK+MhY2eYrZwRT20E0b6i3zxwxBBPgTWrA7A9kP5gobabmI8b4CAzoN1xg92A6ihnxdM2uHGwLVkjGRCENtsGHk6uxY2OIU4kfFROkWO5ns0MBoFBUrsUjgyW62ZgYn7Ro2PyyKOzcIwneKj7Bv4eEBKG9Kn+VShq7HTcpnXsPuf7eua8kea8kU9HrCpifmhxnaothjBHotwB5Dc/9aQ3JCLjLEuwJzagb0mfwPP70p4fP7T/APapCRU7q26PsAAAAASUVORK5CYII=", Z = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAPFBMVEVHcEz///////////////////////////////////////////////////////////////////////////+PybD1AAAAE3RSTlMAoGAw0PCAEEDAIHDfsJBQ4I+vnt3bXwAAAkdJREFUeF7tVtuCqyAMLAghAfHG///rqW0xwWjd9nHPzgsWyGQgF3r7v/CHzrhSiieau+8I+rKhn8MXBEXCp88JqDRwn4tIkBAtZM8MXwKJGb7E+FBBb3YEa4jI4GlMHwzpVKMpL5ggrdzqdo4bgz8+RFwKYzjIhEcWwKkEKA2EEy9DGKY1o3hRyGyBvDaUCnP/ZdcPldXWlx1Aslu0ptLGdbQ7+7kooPJRJbjnKPFkP7wDvEPs8vcxcypoexkFhOV1/8vjyOP6eR9hT7AUDZ/a2ZUBFQH7v0Sul/AyoM/sW899k2e2/JgAn+GLTSp2P7R3j4iArXcZa/H1aicNAIbIq6BIn3QcgGxFhsbRNFFggHf1J0rXNujmMNV2jFcdm3jHSY24FN8U8HmzjlylHnYaQ2V3Hc+NAKlVY05belLTtrqTTTHUSVVDr4Wp2qOM6SxOcVLknZzTOUmHzS7rE9QUGVVBH0nwgiA3jSN6kYzPkcM2iZpgUKNpkCphJ4EOm7VreicLgHqcngneKBjFjU4WMZe+q8mjCNo4ZhkD3OKZxYXplE8qCpYJUv1ibypA8dbkBzf4sImJ+mkx8mXan6HnY0KbNT5w0YsplYqw7fLYyE26a41szLH3kXU6ckpt0FMMJ4vRtIl8ac+rLqoX2mE9Zq/tNYPfCjKvHG7AugzquVcMz7yh7mgNWNKEF//cymJDaz0aL9zz4htHNFvE+86IaabC8EO8vUdIU9GQ78U1OqCiMRnLzq+BFjIR+TIRkYGE4fbb8Yd/KxZhLtPWraEAAAAASUVORK5CYII=", _ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAADtUlEQVRYhc2YWS8rYRjHnym171sIiS3taXEh0RAiiIQLsX4C388SW0gsPa5cCDmW6Ik29lBCQuyCmjP/h3eUUzMtrfG/mTFvzfubZ5+RZEWk6O7ujjY3NykvL48yMjLoO3R2dkZer5eKi4spISHh+SKArq6u5NXVVfnh4UH+bj0+Pspra2vyxcUF/y1dXl7Ke3t7ZLPZyGQyfYtl3uvp6Yk8Hg97R3K5XLLFYiWzOdoQGCGfD1BukpTYkWNjYw2FEVJChiQR1D9FEfPT/f09KYFKUVFRlJKSwkdDgFA+FhYWaH19nYTxERKOqiqyl5XpJk5YXaZkLPX395OSygHX8/Pzqa2tjSRJijyQUsuor69PhbFYLFRdXU23t7c0OzvLRRCqrKzk6xEFAszAwADHDZ6+tbWVCgsL1XVsMTExQQcHB+y+3t7eD+/15UoINw0NDTEM1Nzc/AYGAiQsAyG1tfSloAbM6OgouwWbNjY2UmlpaeCNop+30nPIpy2EWBkbG6Pr62uGqa+vJ6vV+uHv0Z78wcIO5HT+5tiBAGO32/npA1lga2uLlpeX+Tw7OzsyQIeHXj6Wl5erMEtLSzQ8PPwGCpZxOp18LS4ujlpaWsIH5PP51HOR3phlILfbQ4uLi3RycsKFUfx+amqKYcxmM3V0dJBe3wwa6ObmhlP3vTA6QDbbLyooKOBzuAfZhHaRmprK1bmnp4fS09N19wkKCIE7ODjIWSWEJ4aUwU695l/wRBlIS0tjGByDkS4QAndkZIRTG2DCbWVKX4L29/dpZWXl+WYB+lRTUxNlZmYGBQNp5iCecnx8nKGQ2nV1dWrXdjgcdHR0RMnJyVRRUaHCqTd+SW9hybAAzc3N0fn5OcPU1tZyRgnhWnt7O8cQIHd2dmh+fp7XsrKyKCYmJiQQIU2XofdAaJTCCv4ClICZnp7mbAIIskmro2tJ00KYbSCR2oGEOiNgkNKdnZ0hu8lfmhYST/nRfAMLTk5OqnUGMMGk9qeBEhMT+ai8N/23dnx8zHUJMKHUGT1pzkNoBaLq4m22oaGB52NcByT+FTHU3d0dUmp/GghLMzMztL29HXAdMF1dXZxV4ZLuxIi0/uty0R/FKiLIoZKSEqqpqeE6FE4FPcIC7PT0lI9wGzp3JPTjXhSN+bqgIZP/jGO0EA6mjY0NozlUYdQ1oX7gy5nR2t3dpaSkJDKhhmB48rjduq8okRD2hJfi4+MpNzf3NcswZqA3FRUVvX7vi7BQ1zAp5OTkqN81/wFjhWCOf+rGMAAAAABJRU5ErkJggg==", $ = {
        wechat: {
            key: "wechat",
            name: "微信好友",
            icon: G,
            bgColor: "#49b233"
        },
        wechat_timeline: {
            key: "wechat_timeline",
            name: "朋友圈",
            icon: D,
            bgColor: "#1cb526"
        },
        qq: {
            key: "qq",
            name: "QQ好友",
            icon: W,
            bgColor: "#4081e1",
            shareID: "1101685683",
            scheme: "mqqapi://share/to_fri?src_type=web&version=1&file_type=news"
        },
        qzone: {
            key: "qzone",
            name: "QQ空间",
            icon: X,
            bgColor: "#fd9338",
            shareID: "1101685683",
            api: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{link}}&title={{title}}&pics={{imageUrl}}&desc={{description}}",
            scheme: Y.os.isIOS ? "mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A" : "mqqapi://share/to_qzone?src_type=app&version=1&file_type=news&req_type=1"
        },
        yixin: {
            key: "yixin",
            name: "易信",
            icon: J,
            bgColor: "#23cfaf",
            api: "http://open.yixin.im/share?url={{link}}&title={{title}}&pic={{imageUrl}}&desc={{description}}"
        },
        weibo: {
            key: "weibo",
            name: "微博",
            icon: Z,
            bgColor: "#f04e59",
            api: "http://service.weibo.com/share/share.php?url={{link}}&title={{title}}&pic={{imageUrl}}"
        },
        copyLink: {
            key: "copyLink",
            name: "复制链接",
            icon: _,
            bgColor: "#fff"
        }
    }, ee = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    e(".socshare{position:fixed;z-index:10000;top:0;left:0;width:100%;height:100%}.socshare,.socshare *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.socshare-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.5)}.socshare-view{position:absolute;max-width:100%;max-height:100%;width:100%;bottom:0;left:0;background-color:#efeff4;overflow:hidden}.socshare-content{position:absolute;top:44px;right:0;bottom:44px;left:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.socshare-bar-header,.socshare-bar-footer{position:absolute;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;height:44px;padding:5px;border-color:#e7e7e7;background-color:#f8f8f8;color:#444}.socshare-bar-header .socshare-link,.socshare-bar-footer .socshare-link{width:100%;height:44px;line-height:44.1px;text-align:center;-webkit-transition-duration:300ms;transition-duration:300ms;color:inherit;cursor:pointer}.socshare-bar-header .socshare-link:active,.socshare-bar-header .socshare-link.activated,.socshare-bar-footer .socshare-link:active,.socshare-bar-footer .socshare-link.activated{-webkit-transition-duration:0ms;transition-duration:0ms;background-color:#d9d9d9}.socshare-bar-header{top:0}.socshare-bar-footer{bottom:0}.socshare-bar-footer:after{top:0}.socshare-bar-header:before{content:'';position:absolute;bottom:0;left:0;width:100%;height:1px;background-color:#e7e7e7}.socshare-bar-footer:after{content:'';position:absolute;top:0;right:0;width:100%;height:1px;background-color:#e7e7e7}.socshare-bar-title{position:absolute;top:0;right:89px;bottom:0;left:89px;margin:0 10px;min-width:30px;height:44px;line-height:44.1px;font-size:17px;font-weight:500;text-align:center;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.socshare-group{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:10px 5px;overflow:hidden}.socshare-item{-webkit-box-flex:0;-webkit-flex:0 0 25%;-moz-box-flex:0;-moz-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;width:25%;text-align:center}.socshare-item:active .socshare-item-icon{opacity:1}.socshare-item-icon{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;-moz-justify-content:center;justify-content:center;width:62px;height:62px;margin:0 auto;padding:10px;border-radius:50%;opacity:.85;-webkit-transition-duration:200ms;transition-duration:200ms;-webkit-transition-property:opacity;transition-property:opacity}.socshare-item-icon img{max-width:100%;max-height:100%}.socshare-item-title{margin-top:10px;font-size:12px;text-align:center}.socshare-divide{width:100%;height:1px;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);background-color:#dfdfdf}.socshare-button{position:relative;display:inline-block;padding:0 12px;height:32px;line-height:30px;font-size:14px;border-width:1px;border-style:solid;border-radius:2px;border-color:#b2b2b2;background-color:#f8f8f8;color:#444;white-space:nowrap;text-align:center;text-overflow:ellipsis;text-decoration:none;outline:none}.socshare-button:active{background-color:#e5e5e5;-webkit-box-shadow:inset 0 1px 4px rgba(0,0,0,0.1);-moz-box-shadow:inset 0 1px 4px rgba(0,0,0,0.1);box-shadow:inset 0 1px 4px rgba(0,0,0,0.1)}.socshare-copy{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;height:100%;text-align:center;padding:10px 5px;overflow:hidden}.socshare-copy>div{width:100%}.socshare-copy-title{margin-top:20px;margin-bottom:10px;text-align:center}.socshare-copy-link{margin:0 10px;padding:15px;border:1px solid #e6e6e6;background-color:#fff}.socshare-copy-link-inner{overflow-x:scroll;overflow-y:hidden;white-space:nowrap;color:#999;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.socshare-copy-link-inner :active{color:#999}.socshare,.socshare-backdrop,.socshare-view{-webkit-transition-duration:400ms;transition-duration:400ms}.socshare{-webkit-transition-property:padding-top;transition-property:padding-top}.socshare .socshare-backdrop{-webkit-transition-property:opacity;transition-property:opacity}.socshare .socshare-backdrop.socshare-enter{opacity:1}.socshare .socshare-backdrop.socshare-leave{opacity:0}.socshare .socshare-view{-webkit-transition-property:transform;transition-property:transform}.socshare .socshare-view.socshare-enter{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.socshare .socshare-view.socshare-leave{-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}\n");
    var te = "socshare", ie = f("transitionend"), oe = !1;
    (Y.os.isIOS && Y.browser >= 10.2 || Y.os.isAndroid && Y.version.uc >= 9.7 || Y.version.qq >= 5.4) && (oe = !0);
    var ne = {
        weibo: [ "kSinaWeibo", "SinaWeibo", 11 ],
        wechat: [ "kWeixin", "WechatFriends", 1 ],
        wechat_timeline: [ "kWeixinFriend", "WechatTimeline", 8 ],
        qq: [ "kQQ", "QQ", 4 ],
        qzone: [ "kQZone", "Qzone", 3 ]
    }, re = {
        WRAP: te,
        BACKDROP: te + "-backdrop",
        ITEM_WRAP: te + "-groups",
        ITEM: te + "-item",
        CANCEL: te + "-link",
        BACK_BUTTON: te + "-button",
        COPY_WRAP: te + "-copy",
        COPY_LINK: te + "-copy-link-inner",
        TRANSITION_ENTER: te + "-enter",
        TRANSITION_LEAVE: te + "-leave"
    }, ae = {
        WRAP: [ '<div id="' + te + '" class="' + te + '">', '  <div class="' + te + '-backdrop"></div>', '  <div class="' + te + "-view " + te + '-groups" style="height:320px;">', '    <div class="' + te + '-bar-header">', '      <button class="' + te + '-button" style="display:none;">返回</button>', '      <div class="' + te + '-bar-title">分享至</div>', "    </div>", '    <div class="' + te + '-content">{{groups}}</div>', '    <div class="' + te + '-bar-footer">', '      <div class="' + te + '-link">取消</div>', "    </div>", "  </div>", '  <div class="' + te + "-view " + te + '-copy" style="height:220px;">', '    <div class="' + te + '-bar-header">', '      <button class="' + te + '-button">返回</button>', '      <div class="' + te + '-bar-title">分享至</div>', "    </div>", '    <div class="' + te + '-content">', '      <div class="' + te + '-copy-title">长按复制下方链接，粘贴给好友吧！</div>', '      <div class="' + te + '-copy-link"><a class="' + te + '-copy-link-inner"></a></div>', "    </div>", '    <div class="' + te + '-bar-footer">', '      <div class="' + te + '-link">取消</div>', "    </div>", "  </div>", "</div>" ].join(""),
        COPY: [ '<div id="' + te + 'Copy" class="' + te + '">', '  <div class="' + te + '-backdrop"></div>', '  <div class="' + te + '-view" style="height:220px;">', '    <div class="' + te + '-bar-header">', '      <button class="' + te + '-button">返回</button>', '      <div class="' + te + '-bar-title">分享至</div>', "    </div>", '    <div class="' + te + '-content">', '      <div class="' + te + '-copy-title">长按复制下方链接，粘贴给好友吧！</div>', '      <div class="' + te + '-copy-link"><a class="' + te + '-copy-link-inner"></a></div>', "    </div>", '    <div class="' + te + '-bar-footer">', '      <div class="' + te + '-link">取消</div>', "    </div>", "  </div>", "</div>" ].join(""),
        DIVIDE: ' <div class="' + te + '-divide"></div>'
    }, se = document.getElementsByName("description")[0], ce = document.getElementsByTagName("img")[0], le = {
        title: document.title,
        link: window.location.href,
        description: se && se.content || "",
        imageUrl: ce && ce.src || "",
        imageTitle: "",
        appName: "",
        from: window.location.host,
        sites: [ "wechat", "wechat_timeline", "weibo", "qq", "qzone", "copyLink" ]
    };
    B.prototype = {
        show: function(e) {
            L.call(this, e);
            var t = x.call(this);
            O();
            var i = t.querySelector("." + re.ITEM_WRAP);
            i.classList.add(re.TRANSITION_LEAVE);
            var o = t.querySelector("." + re.BACKDROP);
            o.classList.add(re.TRANSITION_LEAVE), t.style.display = "", z(function() {
                i.classList.remove(re.TRANSITION_LEAVE), o.classList.remove(re.TRANSITION_LEAVE);
            });
        },
        hide: function() {
            var e = document.getElementById(te);
            if (e && "none" !== e.style.display) {
                var t = e.querySelector("." + re.ITEM_WRAP), i = e.querySelector("." + re.BACKDROP), o = e.querySelector("." + re.COPY_WRAP);
                t.classList.add(re.TRANSITION_LEAVE), o.classList.add(re.TRANSITION_LEAVE), i.classList.add(re.TRANSITION_LEAVE), 
                i.addEventListener(ie, function(t) {
                    t.currentTarget.classList.contains(re.TRANSITION_LEAVE) && (e.style.display = "none");
                });
            }
        }
    };
    var de = new B();
    return de;
});
