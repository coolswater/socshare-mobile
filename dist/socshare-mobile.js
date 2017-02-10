(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.socshare = factory());
}(this, (function () { 'use strict';

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}
/**
 * 利用apply 为函数绑定指定的上下文对象
 */

/**
 * @param {Function} fn 需要绑定的函数
 * @param {Object} context 函数执行的环境、上下文对象
 */
var ApplyBind = function (fn, context) {
  return function () {
    return fn.apply(context, arguments);
  };
};

/**
 * Javascript 对象（object）合并
 * 利用 Object.assign()
 */

if (typeof Object.assign != 'function') {
    Object.assign = function (target) {
        var arguments$1 = arguments;

        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments$1[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
}

var Extend = Object.assign;

/**
 * 数据类型检查
 */

/**
 * 简单判断两个值的类型 是否相等
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean} isEqual
 */


function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}



function isBoolean(obj) {
  return Object.prototype.toString.call(obj) === '[object Boolean]';
}





function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function isNodeList(obj) {
  return Object.prototype.toString.call(obj) === '[object NodeList]';
}

function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
}

/**
 * forEach 循环指定的对象、数组
 */

/**
 * @param {Object} object 需要循环的对象 可以是 Object、Array
 * @param {Function} fn 回调
 * 如果回调返回了false：则结束此次循环
 * @return {Object} object
 */
function forEach(object, fn) {
    if (isFunction(fn)) {
        var res;
        if (isArray(object) || isNodeList(object)) {
            for (var i = 0, l = object.length; i < l; i++) {
                res = fn(object[i], i);
                if (isBoolean(res) && !res) {
                    break;
                }
            }
        } else if (isObject(object)) {
            for (var o in object) {
                if (object.hasOwnProperty(o)) {
                    res = fn(object[o], o);
                    if (isBoolean(res) && !res) {
                        break;
                    }
                }
            }
        }
    }
    return object;
}

/**
 * 清除字符串 首尾空格
 */

function both(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}

/**
 * DOM 操作
 *
 */

function indexOfValidChars(str) {
  for (var i = 0, l = str.length; i < l; i++) {
    if (str[i] !== ' ' && str[i] !== '\n') {
      return i;
    }
  }
  return -1;
}

/**
 * 清理html字符串中的空格和换行符
 * @param {String} innerHtml
 * @return {String} innerHtml
 */


/**
 * 创建一个新元素
 * @param {String} innerHtml
 * @return {Element} element
 */
function createElement(innerHtml) {
  var element = document.createElement('div');
  element.innerHTML = innerHtml;
  element = element.children[0];
  return element;
}

/**
 * 删除指定的元素
 * @param {Node} element
 */


/**
 * 在指定的元素前面追加新元素
 * @param {Node} newEl
 * @param {Node} targetEl
 */


/**
 * 在指定的元素后面追加新元素
 * @param {Node} newEl
 * @param {Node} targetEl
 */


/**
 * 检测元素节点是不是另一个元素的子节点
 * @param {Object} parentNode
 * @param {Node} childNode
 * @return {Object} element
 */
function contains(parentNode, childNode) {
  if (parentNode.contains) {
    return parentNode != childNode && parentNode.contains(childNode);
  } else {
    return !!(parentNode.compareDocumentPosition(childNode) & 16);
  }
}

/**
 * 判断对象是否是一个 DOM元素
 * @param {Object} object
 * @return {Boolean}
 */


/**
 * 判断元素是否包含某个class
 * @param {Object} element
 * @param {String} className
 * @return {Boolean}
 */
function hasClass(element, className) {
  return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

/**
 * 为元素添加class
 * @param {Object} elements
 * @param {String} className
 */


/**
 * 为元素移除class
 * @param {Object} elements
 * @param {String} className
 */


/**
 * 获取浏览器窗口的可视区域的宽度
 * @param {Document} dom
 * @return {Number} 宽度
 */
function getViewportWidth(dom) {
  !dom || (dom = document);
  return dom.documentElement.clientWidth || dom.body.clientWidth;
}

/**
 * 获取浏览器窗口的可视区域的高度
 * @param {Document} dom
 * @return {Number} 高度
 */
function getViewportHeight(dom) {
  !dom || (dom = document);
  return dom.documentElement.clientHeight || dom.body.clientHeight;
}

/**
 * 获取元素在页面上的偏移量
 * @param {Object} element 元素
 * @return {Object} position
 */
function getOffsetAwayFromDocument(element) {
  var top = 0,
      left = 0;
  if (element.getBoundingClientRect) {
    var rect = getBoundingClientRect(element);
    var body = document.body,
        docElem = document.documentElement;
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop,
        scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    var clientTop = docElem.clientTop || body.clientTop,
        clientLeft = docElem.clientLeft || body.clientLeft;
    top = rect.top + scrollTop - clientTop;
    left = rect.left + scrollLeft - clientLeft;
    return {
      // Math.round 兼容火狐浏览器
      top: Math.round(top),
      left: Math.round(left)
    };
  } else {
    while (element) {
      top += element.offsetTop;
      left += element.offsetLeft;
      element = element.offsetParent;
    }
    return {
      top: top,
      left: left
    };
  }
}

/**
 * 获取浮动元素相对于目标元素的定位布局 居（上、右、下、左）
 * 设置贴近目标元素最近，能完整显示浮动元素的一个位置
 * 用于为浮动元素定位在目标元素身边
 * @param {Object} targetEl 目标元素
 * @param {Object} absEl 浮动元素
 * @param {String} direction 期望相对于目标元素的方向 默认为down
 * top、right、bottom、left
 * @return {Object}
 * direction：up、down、right、left
 */


/**
 * 获取浏览器窗口水平滚动条的位置
 * @param {Object} dom document
 * @return {Number} left
 */


/**
 * 获取页面中某个元素的左，上，右、下分别相对浏览器视窗的位置
 * @param {Object} element
 * @return {Object} top,lef,right,bottom,width,height
 * top：元素上边界距窗口最上面的距离
 * right：元素右边界距窗口最左边的距离
 * bottom：元素下边界距窗口最上面的距离
 * left：元素左边界距窗口最左边的距离
 * width：元素宽度
 * height：元素高度
 */
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width || rect.right - rect.left,
    height: rect.height || rect.bottom - rect.top
  };
}

/**
 * 获取浏览器窗口垂直滚动条的位置
 * @param {Object} dom document
 * @return {Number} top
 */

/**
 * 判断是否是IE浏览器
 */

var IsIE = function () {
  return !-[1];
};

/**
 * CSS样式 操作
 */

/**
 * 当前浏览器支持的前缀
 * @return '', '-webkit-', '-moz-', '-ms-'
 */
var supportPrefix = function () {
  var _style = document.createElement('div').style;
  var prefix = '';
  forEach(['', '-webkit-', '-moz-', '-ms-'], function (o) {
    var s = o + 'transition';
    if (s in _style) {
      prefix = o;
      return false;
    }
  });
  return prefix;
}();

/**
 * 判断当前浏览器是否支持指定的CSS属性
 * @param {String} style
 * @return {Boolean} isSupport
 */
function isSupport(style) {
  if (isString(style)) {
    var _style = document.createElement('div').style;
    return style in _style;
  }
  return null;
}

/**
 * 为指定的CSS属性添加当前浏览器支持的前缀
 * @param {String} style
 * @return {String} style
 */

/**
 * 事件处理
 */

// 正则 分割空格
var reg_splitWhitespace = /\S+/g;

function returnFalse() {
    return false;
}

function onHandler(e) {
    return dispatch.call(this, e);
}

function offHandler() {
    forEach(this, function (item) {
        removeEventListener(item.element, item.type, item.handler);
    });
}

function checkHover(e, target) {
    e = getEvent(e);
    if (e.type == 'mouseover') {
        return !contains(target, e.relatedTarget || e.fromElement) && !((e.relatedTarget || e.fromElement) === target);
    } else {
        return !contains(target, e.relatedTarget || e.toElement) && !((e.relatedTarget || e.toElement) === target);
    }
}

function getEvent(e) {
    return e || window.event;
}

/**
 * 遍历事件源节点至代理节点之间的所有节点
 * 匹配每一个事件源节点是否为绑定节点
 */
function getHandlerQueue(e) {
    var _this = this;
    var targetEl = e.srcElement || e.target,
        handlerQueue = [],
        selectors = _this.element.querySelectorAll(_this.selector);
    if (_this && _this.element && targetEl.nodeType && (!e.button || e.type !== 'click')) {
        for (; targetEl != _this.element; targetEl = targetEl.parentNode || _this.element) {
            for (var j = 0, jl = selectors.length; j < jl; j++) {
                if (selectors[j] === targetEl) {
                    handlerQueue.push(targetEl);
                    break;
                }
            }
        }
    }
    return handlerQueue;
}

function dispatch(e) {
    var _this = this,
        res;
    var handlerQueue = getHandlerQueue.call(this, e),
        matched,
        i = 0;
    if (handlerQueue.length) {
        while (matched = handlerQueue[i++]) {
            res = _this.handlerForMatched.call(matched, e, _this.element);
            if (res !== undefined) {
                if ((e.result = res) === false) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        }
    } else {
        if (_this.handlerForAll) {
            res = _this.handlerForAll.call(e.srcElement || e.target, e, _this.element);
            if (res !== undefined) {
                if ((e.result = res) === false) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        }
    }
}

/**
 * 为指定的事件名称添加当前浏览器支持的前缀
 * @param {String} eventName
 * @return {String} eventName has prefix
 */
function addPrefix$$1(eventName) {
    if (isString(eventName)) {
        switch (eventName) {
            case 'transitionend':
                {
                    return {
                        '': 'transitionend',
                        '-moz-': 'transitionend',
                        '-webkit-': 'webkitTransitionEnd'
                    }[supportPrefix];
                }
        }
    }
    return eventName;
}

/**
 * 为元素绑定指定事件 基于原生js
 * @param {Object} element 需要绑定的元素
 * @param {Object} type 需要代理的事件 一个或多个用空格分隔的事件类型
 * @param {Function} handler 事件触发的回调
 * @param {Boolean} [useCapture=false] 默认为false
 * true：Capture方式
 * false：Bubbling方式
 * PS:该值建议设置为false
 */
function addEventListener(element, type, handler, useCapture) {
    removeEventListener(element, type, handler);
    if (element.addEventListener) {
        if (type === 'input' && IsIE()) {
            element.onpropertychange = handler;
        } else {
            element.addEventListener(type, handler, useCapture);
        }
    } else {
        element.attachEvent('on' + type, function () {
            handler.call(element);
        });
    }
}

/**
 * 为元素移除指定的事件 基于原生js
 * @param {Object} element 需要绑定的元素
 * @param {Object} type 需要代理的事件 一个或多个用空格分隔的事件类型
 * @param {Function} handler 事件触发的回调
 */
function removeEventListener(element, type, handler) {
    if (element.removeEventListener) {
        element.removeEventListener(type, handler);
    } else {
        element.detachEvent('on' + type, handler);
    }
}

/**
 * 事件代理
 * PS：弃用一些不支持冒泡事件的类型 如：focus、transition...
 * @param {Object} elements 需要绑定的元素
 * @param {Object} types 需要代理的事件 一个或多个用空格分隔的事件类型
 * @param {Object} selector 需要代理的节点 一个选择器字符串用于过滤器的触发事件的选择器元素的后代
 * @param {Function} handlerForMatched 匹配的节点触发 回调
 * @param {Function} [handlerForAll=null] 绑定的元素内所有的节点触发 回调
 * @param {Boolean} [one=false] 事件是否只触发一次 触发完成后 清除代理
 * @return {Function} 执行后 清除代理
 */
function on(elements, types, selector, handlerForMatched, handlerForAll, one) {

    types = (types || '').match(reg_splitWhitespace) || [''];

    var isAgency = isString(selector) && selector.length;

    if (handlerForMatched === false) {
        handlerForMatched = returnFalse;
    } else if (!isFunction(handlerForMatched)) {
        return null;
    }
    if (!isFunction(handlerForAll)) {
        handlerForAll = null;
    }

    if (one) {
        var origFn = handlerForMatched;
        handlerForMatched = function (e) {
            return origFn.apply(this, arguments);
        };
    }
    if (!isArray(elements)) {
        elements = [elements];
    }
    if (elements.length) {
        var handlers = [];
        forEach(elements, function (element) {
            forEach(types, function (type) {
                var applyHandler = handlerForMatched;
                if (isAgency) {
                    applyHandler = ApplyBind(onHandler, {
                        element: element,
                        type: type,
                        selector: selector,
                        handlerForMatched: handlerForMatched,
                        handlerForAll: handlerForAll
                    });
                }
                addEventListener(element, type, applyHandler, false);
                handlers.push({
                    element: element,
                    type: type,
                    handler: applyHandler
                });
            });
        });
        return ApplyBind(offHandler, handlers);
    }
}

/**
 * 事件代理 只触发一次 触发完成会移除该事件
 * PS：弃用一些不支持冒泡事件的类型 如：focus、transition...
 * @param {Object} elements 需要绑定的元素
 * @param {Object} types 需要代理的事件 一个或多个用空格分隔的事件类型
 * @param {Object} selector 需要代理的节点 一个选择器字符串用于过滤器的触发事件的选择器元素的后代
 * @param {Function} handlerForMatched 匹配的节点触发 回调
 * @param {Function} handlerForAll 绑定的元素内所有的节点触发 回调
 * @return {Function} 执行后 清除代理
 */


/**
 * hover事件
 * @param {Object} elements 需要绑定的元素
 * @param {Object} selector 需要代理的节点 一个选择器字符串用于过滤器的触发事件的选择器元素的后代
 * @param {Function} handlerIn in 鼠标移入事件
 * @param {Function} handlerOut out 鼠标移出事件
 * @return {Function} 执行后 清除代理
 */

/**
 * requestAnimationFrame
 * 优化并行的动画动作，更合理的重新排列动作序列
 * 把能够合并的动作放在一个渲染周期内完成，从而呈现出更流畅的动画效果
 */

var requestAnimationFrame;
var cancelAnimationFrame;

var prefix = {
    '': '',
    '-moz-': 'moz',
    '-webkit-': 'webkit'
}[supportPrefix];
if (prefix) {
    requestAnimationFrame = window[prefix + 'RequestAnimationFrame'];
    cancelAnimationFrame = window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame'];
} else {
    var lastTime = 0;
    requestAnimationFrame = function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
    cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
}

/**
 * 检测客户端信息
 */

var ua = navigator.userAgent.toLowerCase();

/**
 * 设备检测函数
 * @param  {String} needle 特定UA标识
 * @return {Boolean}
 */
function deviceDetect(needle) {
  needle = needle.toLowerCase();
  return ua.indexOf(needle) !== -1;
}

/**
 * 获取浏览器版本
 * @param  {String} str UA中带有版本信息的部分字符串
 * @return {Number} 版本号
 */
function getVersion(str) {
  var arr = str.split('.');
  return parseFloat(arr[0] + '.' + arr[1]);
}

var client = {
  os: {
    version: 0,
    isIOS: deviceDetect('iPhone') || deviceDetect('iPad') || deviceDetect('iPod'),
    isAndroid: deviceDetect('Android') || deviceDetect('adr') || deviceDetect('linux')
  },
  browser: {
    version: 0,
    isUC: deviceDetect('UCBrowser'),
    isQQ: deviceDetect('MQQBrowser'),
    isWechat: deviceDetect('MicroMessenger'),
    isFirefox: deviceDetect('firefox'),
    isBaidu: deviceDetect('baiduboxapp'),
    isSafari: deviceDetect('safari') && !deviceDetect('chrome')
  },
  brand: {
    isOppo: deviceDetect('oppo'),
    isSamsung: deviceDetect('samsungbrowser'),
    isSogou: deviceDetect('sogoumobilebrowser')
  },
  version: {
    qq: 0,
    uc: 0
  }
};

client.version.qq = client.browser.isQQ ? getVersion(ua.split('mqqbrowser/')[1]) : 0;
client.version.uc = client.browser.isUC ? getVersion(ua.split('ucbrowser/')[1]) : 0;

var img1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAOVBMVEVHcEz///////////////////////////////////////////////////////////////////////99PJZNAAAAEnRSTlMAMOCwQGDQ8IAQkFAgn79wwKDPjjl1AAABuUlEQVR4Xu3VwXKFIAwF0IsASVBR8/8f27IBnSeitatOz455w30kSsTf9G8amW1KMy9O8JifSXdCNHhgiqQfBi+4R6KeowV3jKRNwaAr6qXeIcRqx4xLSfVVwqw3RDR5rQbNTtcjGoT2vZJNi+AAUyJIcK7uYGT1Tw0AjGW54dSkhUO2lgMgEy0mnGEtPLJQ1gIArtfHQQtyABYtrACStKBWBVWag+5QmgfdMfg0ah/ZxaGFtSd4gYyc0qCUEo/yLGDwEB90z/oHAVHAdJJ6N8DDDZ0Rwdf7uTsi3OX++cYF1ybO+/sJVhsCvF7zyLw2uIm0w5TLcGKt95w8xlAKE1MOna5e5nGqR92NnfVw4127C4R4nBOhXun6k0UmZ0XYXWl21yqSwxAUZIb0A09aJa6npDiTFg6tBOf0DkYrwS2PAiBBjxw/CShdrpx/GkA/6oFvzkYWvWM6fp+IR15JM4ugfeFQAbEgE/fNYHlWQdleCGnPgCKy/GDiO1zqdiGiw5BeWYFXCUHwKmEV3GFafdhwF3ceYN+0UeMdvk28rRlhi3mx4CHj+NviBPlMqitemVYVvOMMfsu/L0Ath0CgH1P9AAAAAElFTkSuQmCC";

var img2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAOVBMVEVHcEz///////////////////////////////////////////////////////////////////////99PJZNAAAAEnRSTlMA8DB/z6DQPxCAwGAgcLBQ4JAZyUNJAAAB60lEQVR4Xs3X246rMAyF4QRI43Bmvf/DbomhLNUmznRfjS+r/p8gCqfwh0dyn8ZzUp/l27o7dnzMnrpv+hV2Ssjzr2I5JMjrCShIvyCWiIGCAhD7Rj6PACgYABjcg5gioAQNIE71vgegBAsAqdYnwBEIILm9FQhQ8HsKFQCL7SfAETSATfdzhCNYIIoCBsARLID1sy+AIxConYRENIXCZTInQdsRSsj4mMkcgC8QsHthzs7M4RQI2L498roB9t1tzP3DbFq4APYR72U8YOclQQkXwJ7LODg9he0HYM/N5PecrHrs/N3rCdy9XAf987+l0RPQPTK3od8TYM/bwtroCege5fx91L3Mz8Cme6QLUP2Qn4Gie4wXoHrUAN1jvQDV14COvVoD1deAqzdAUT0BtycwqZ6A2/OPWfUE3J5bObAn3O55MYUX+zewSbvn5by8ewJlbfd8Qs53T0DfNJfyMPeWT3dPQAv+sCdwCl12RmxPgLeu6uyBs8AAbSGrh6sFfGH8XGQD+ILdbaMFfOFwXnEIUGjfuScN+ELHkoICPGFyXhQNgFEosHcEDWBQwhIqUwjAEZzX9S0SqAmxC87IqAAjrNL85CFghbiF5kiJBJRQxCtJCIH/fbHr0q627jJ//+lbynjOMeXwh+cfhtCFZYWp8dQAAAAASUVORK5CYII=";

var img3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAIGAwgKDwQBDA0FDfsHDgkD+PT2O/b44AAAGsSURBVHhe1dfddqsgEAXgzf8AYmw67/+sPUe7zHLhONjctN9dFHaMCVuCX859/GPwM+5Z+Ft+fuIuO/FB9IQb6sSd6DHsyaeKwxAqLIhpcL7MQdf4QtQTZr5UoDCRr3lcC6yIhCuGVV65ANWEK5F1CbLKAxbIPA/IkGUeARkPMe8GJEjS3w+o7wY0HrJAYGzmEQECT/Rgna9OCgBcGXl/j1M095Xa8xADqtMXVF7HzIQzCzamidMTVqniRHpVtguRO2U2+DZPhA5NzPb1yi6Fd4+8VDq0xiJ0STskm7RyOKB8uqRpu+hYobDbwCaWWU64kLLUKtNI4dgs/p6dXnmfz4lfOIp1nLFJ8769+rA+x+tFfXJt4dYjbupP5FuLmu8HZCnA/ihgLZLHSMA+MPRtaLYTakBO/U206xHL/02WtvsqqWjdho0iFwCFNzkEeX5eh2cc2UAA3Oiz1bUkbfJU9s1dWoAiaPNV5Y2N6l6nshiM8kdBN0PkeYiFgHhMu7NRLlH5DMpXGGD7TIJojn1t1QcfNMIFsm3PKDNhVcOe8VgMVJRW3bGaEuEX+gJWbpMHBa1eygAAAABJRU5ErkJggg==";

var img4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAYECgEPAwwH8/4NAgUJCwcM+fr0RbN4IAAAGVSURBVHhe7ZbdkoMgDIUVE2ARf7o97/+s22k7pZmAUJnZq36XmBwPJgGHf+CLQ+zKN8DUJbABXRYi0GdhArosRNy5dhoAzMl8whN3UsADXRaI0WfBA30WGOiyMOKd8XOBIATCGQNdFoghCXSiBAJ/YgoEXJgp+5PjCs1Vh9H9yOjA3gRoVcuzK5KtjHVqu27db/Y0vyLKvtZ35AjOjz+itE74tEPCMBJa5hFKF5EvHdoAiX5XFPkTDRKaUWK7x1oW+YOCJuRZB5lfHoysAo9tsy2idKlGtZZnST7Fpxa9Fgr5aafqU/0qzTI0q62SyHc0HJOajU2mfeCHVoE55vKx1QSC7DTLkFxqAtJp1DPSdJ/yksZs34I6Qw4waXgStHjHjZecKVbKjuvcUIYdYF/GVf+YPGq42k9NDa71URX6SIB3MaH1MkAykb44xnaB8HyZnZvHySLBb5E7N5bBvMVF0Yxb2zgtL/eL0g540tJHng4e2qqAK4TER5GXShvwQZ2WUCmDA9bDTqP1eJz8ZoYKVoX08uUPi2Bapj4cFIsAAAAASUVORK5CYII=";

var img5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAP1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////9KjZoYAAAAFHRSTlMAMMAgQGCgEPCAcNBQsOCQ37+Pr/HIP5wAAAI0SURBVHhetVfdeuwgCFyNfxhNTJb3f9Zz03aqYvS0X+du10AGGIS8/hjeGLP9zHSz7gr8gcvZ7f+s484tyr3sw7xZxpVWzNXFYxQzzdrNz3g/B6IKzxCe4rC8gnto73gNb79mv2eiSET64PbEz+2z9ThScZ97IAbYdbk2uvLgOvvEgBZLZapIqBVvwFkcaaQKspEU5BfUWpmDl05gP/dwvgAfevu5h02qwLTfTqkSPoDWFHtPAbyORh8qEbVXmuopwKmtqkblQ3Z2oNjwqYEvAlW6oAwuSC0exwujRKC+WML3o4yGaf7weChyA9WpHjHAH3TPQC+82i3SGntly92jkYSKkRFKBQRJd1T9FOUGJCEJeeBAswASMqQhjIpjYQFOdoDX7XDAErTgoMBBE8KcAVjnRQdxFAKhOzsdylq0AwfQgeceh1RlXVX1fBxyUYqQqogKHvHHQy/41qt0S6oHArbNiwYhQIV6GMozBL0BmmIigxJbPYMuKIgNZSQCuMK+MhY2eYrZwRT20E0b6i3zxwxBBPgTWrA7A9kP5gobabmI8b4CAzoN1xg92A6ihnxdM2uHGwLVkjGRCENtsGHk6uxY2OIU4kfFROkWO5ns0MBoFBUrsUjgyW62ZgYn7Ro2PyyKOzcIwneKj7Bv4eEBKG9Kn+VShq7HTcpnXsPuf7eua8kea8kU9HrCpifmhxnaothjBHotwB5Dc/9aQ3JCLjLEuwJzagb0mfwPP70p4fP7T/APapCRU7q26PsAAAAASUVORK5CYII=";

var img6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAPFBMVEVHcEz///////////////////////////////////////////////////////////////////////////+PybD1AAAAE3RSTlMAoGAw0PCAEEDAIHDfsJBQ4I+vnt3bXwAAAkdJREFUeF7tVtuCqyAMLAghAfHG///rqW0xwWjd9nHPzgsWyGQgF3r7v/CHzrhSiieau+8I+rKhn8MXBEXCp88JqDRwn4tIkBAtZM8MXwKJGb7E+FBBb3YEa4jI4GlMHwzpVKMpL5ggrdzqdo4bgz8+RFwKYzjIhEcWwKkEKA2EEy9DGKY1o3hRyGyBvDaUCnP/ZdcPldXWlx1Aslu0ptLGdbQ7+7kooPJRJbjnKPFkP7wDvEPs8vcxcypoexkFhOV1/8vjyOP6eR9hT7AUDZ/a2ZUBFQH7v0Sul/AyoM/sW899k2e2/JgAn+GLTSp2P7R3j4iArXcZa/H1aicNAIbIq6BIn3QcgGxFhsbRNFFggHf1J0rXNujmMNV2jFcdm3jHSY24FN8U8HmzjlylHnYaQ2V3Hc+NAKlVY05belLTtrqTTTHUSVVDr4Wp2qOM6SxOcVLknZzTOUmHzS7rE9QUGVVBH0nwgiA3jSN6kYzPkcM2iZpgUKNpkCphJ4EOm7VreicLgHqcngneKBjFjU4WMZe+q8mjCNo4ZhkD3OKZxYXplE8qCpYJUv1ibypA8dbkBzf4sImJ+mkx8mXan6HnY0KbNT5w0YsplYqw7fLYyE26a41szLH3kXU6ckpt0FMMJ4vRtIl8ac+rLqoX2mE9Zq/tNYPfCjKvHG7AugzquVcMz7yh7mgNWNKEF//cymJDaz0aL9zz4htHNFvE+86IaabC8EO8vUdIU9GQ78U1OqCiMRnLzq+BFjIR+TIRkYGE4fbb8Yd/KxZhLtPWraEAAAAASUVORK5CYII=";

var img11 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAADtUlEQVRYhc2YWS8rYRjHnym171sIiS3taXEh0RAiiIQLsX4C388SW0gsPa5cCDmW6Ik29lBCQuyCmjP/h3eUUzMtrfG/mTFvzfubZ5+RZEWk6O7ujjY3NykvL48yMjLoO3R2dkZer5eKi4spISHh+SKArq6u5NXVVfnh4UH+bj0+Pspra2vyxcUF/y1dXl7Ke3t7ZLPZyGQyfYtl3uvp6Yk8Hg97R3K5XLLFYiWzOdoQGCGfD1BukpTYkWNjYw2FEVJChiQR1D9FEfPT/f09KYFKUVFRlJKSwkdDgFA+FhYWaH19nYTxERKOqiqyl5XpJk5YXaZkLPX395OSygHX8/Pzqa2tjSRJijyQUsuor69PhbFYLFRdXU23t7c0OzvLRRCqrKzk6xEFAszAwADHDZ6+tbWVCgsL1XVsMTExQQcHB+y+3t7eD+/15UoINw0NDTEM1Nzc/AYGAiQsAyG1tfSloAbM6OgouwWbNjY2UmlpaeCNop+30nPIpy2EWBkbG6Pr62uGqa+vJ6vV+uHv0Z78wcIO5HT+5tiBAGO32/npA1lga2uLlpeX+Tw7OzsyQIeHXj6Wl5erMEtLSzQ8PPwGCpZxOp18LS4ujlpaWsIH5PP51HOR3phlILfbQ4uLi3RycsKFUfx+amqKYcxmM3V0dJBe3wwa6ObmhlP3vTA6QDbbLyooKOBzuAfZhHaRmprK1bmnp4fS09N19wkKCIE7ODjIWSWEJ4aUwU695l/wRBlIS0tjGByDkS4QAndkZIRTG2DCbWVKX4L29/dpZWXl+WYB+lRTUxNlZmYGBQNp5iCecnx8nKGQ2nV1dWrXdjgcdHR0RMnJyVRRUaHCqTd+SW9hybAAzc3N0fn5OcPU1tZyRgnhWnt7O8cQIHd2dmh+fp7XsrKyKCYmJiQQIU2XofdAaJTCCv4ClICZnp7mbAIIskmro2tJ00KYbSCR2oGEOiNgkNKdnZ0hu8lfmhYST/nRfAMLTk5OqnUGMMGk9qeBEhMT+ai8N/23dnx8zHUJMKHUGT1pzkNoBaLq4m22oaGB52NcByT+FTHU3d0dUmp/GghLMzMztL29HXAdMF1dXZxV4ZLuxIi0/uty0R/FKiLIoZKSEqqpqeE6FE4FPcIC7PT0lI9wGzp3JPTjXhSN+bqgIZP/jGO0EA6mjY0NozlUYdQ1oX7gy5nR2t3dpaSkJDKhhmB48rjduq8okRD2hJfi4+MpNzf3NcswZqA3FRUVvX7vi7BQ1zAp5OTkqN81/wFjhWCOf+rGMAAAAABJRU5ErkJggg==";

/**
 * 配置站点
 */

var Sites = {
  wechat: {
    key: 'wechat',
    name: '微信好友',
    icon: img1,
    bgColor: '#49b233'
  },
  wechat_timeline: {
    key: 'wechat_timeline',
    name: '朋友圈',
    icon: img2,
    bgColor: '#1cb526'
  },
  qq: {
    key: 'qq',
    name: 'QQ好友',
    icon: img3,
    bgColor: '#4081e1',
    shareID: '1101685683',
    scheme: 'mqqapi://share/to_fri?src_type=web&version=1&file_type=news'
  },
  qzone: {
    key: 'qzone',
    name: 'QQ空间',
    icon: img4,
    bgColor: '#fd9338',
    shareID: '1101685683',
    api: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{link}}&title={{title}}&pics={{imageUrl}}&desc={{description}}',
    scheme: client.os.isIOS ? 'mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A' : 'mqqapi://share/to_qzone?src_type=app&version=1&file_type=news&req_type=1'
  },
  yixin: {
    key: 'yixin',
    name: '易信',
    icon: img5,
    bgColor: '#23cfaf',
    api: 'http://open.yixin.im/share?url={{link}}&title={{title}}&pic={{imageUrl}}&desc={{description}}'
  },
  weibo: {
    key: 'weibo',
    name: '微博',
    icon: img6,
    bgColor: '#f04e59',
    api: 'http://service.weibo.com/share/share.php?url={{link}}&title={{title}}&pic={{imageUrl}}'
  },
  /*tqq: {
    name: '腾讯微博',
    icon: img7,
    bgColor: '#97cbe1',
    api: 'http://share.v.t.qq.com/index.php?c=share&a=index&url={{link}}&title={{title}}&pic={{imageUrl}}'
  },
  renren: {
    key: 'renren',
    name: '人人网',
    icon: img8,
    bgColor: '#fd9338',
    api: 'http://widget.renren.com/dialog/share?resourceUrl={{link}}&title={{title}}&pic={{imageUrl}}&description={{description}}'
  },
  douban: {
    key: 'douban',
    name: '豆瓣',
    icon: img9,
    bgColor: '#228a31',
    api: 'http://douban.com/recommend/?url={{link}}&title={{title}}&image={{imageUrl}}'
  },
  tieba: {
    key: 'tieba',
    name: '百度贴吧',
    icon: img10,
    bgColor: '#5b95f0',
    api: 'http://tieba.baidu.com/f/commit/share/openShareApi?url={{link}}&title={{title}}&desc={{description}}'
  },*/
  copyLink: {
    key: 'copyLink',
    name: '复制链接',
    icon: img11,
    bgColor: '#fff'
  }
};

/**
 * base64 转换
 */

var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

/**
 * UTF8 编码
 */
function utf8_encode(a) {
  a = a.replace(/\r\n/g, '\n');
  var b = '';
  for (var c = 0; c < a.length; c++) {
    var d = a.charCodeAt(c);
    if (d < 128) {
      b += String.fromCharCode(d);
    } else {
      if (d > 127 && d < 2048) {
        b += String.fromCharCode(d >> 6 | 192);
        b += String.fromCharCode(63 & d | 128);
      } else {
        b += String.fromCharCode(d >> 12 | 224);
        b += String.fromCharCode(d >> 6 & 63 | 128);
        b += String.fromCharCode(63 & d | 128);
      }
    }
  }
  return b;
}

/**
 * UTF8 解码
 */


/**
 * base64 编码
 */
function encode(a) {
  var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i = '',
      j = 0;
  for (a = utf8_encode(a); j < a.length;) {
    b = a.charCodeAt(j++);
    c = a.charCodeAt(j++);
    d = a.charCodeAt(j++);
    e = b >> 2;
    f = (3 & b) << 4 | c >> 4;
    g = (15 & c) << 2 | d >> 6;
    h = 63 & d;
    if (isNaN(c)) {
      g = h = 64;
    } else if (isNaN(d)) {
      h = 64;
    }
    i = i + keyStr.charAt(e) + keyStr.charAt(f) + keyStr.charAt(g) + keyStr.charAt(h);
  }
  return i;
}

/**
 * base64 解码
 */

___$insertStyle(".socshare{position:fixed;z-index:10000;top:0;left:0;width:100%;height:100%}.socshare-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.5)}.socshare-view{position:absolute;max-width:100%;max-height:100%;width:100%;bottom:0;left:0;background-color:#efeff4;overflow:hidden}.socshare-content{position:absolute;top:2.2rem;right:0;bottom:2.2rem;left:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.socshare-bar-header,.socshare-bar-footer{position:absolute;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;height:2.2rem;padding:.25rem;border-color:#e7e7e7;background-color:#f8f8f8;color:#444}.socshare-bar-header .socshare-link,.socshare-bar-footer .socshare-link{width:100%;height:2.2rem;line-height:2.3rem;text-align:center;-webkit-transition-duration:300ms;transition-duration:300ms;color:inherit;cursor:pointer}.socshare-bar-header .socshare-link:active,.socshare-bar-header .socshare-link.activated,.socshare-bar-footer .socshare-link:active,.socshare-bar-footer .socshare-link.activated{-webkit-transition-duration:0ms;transition-duration:0ms;background-color:#d9d9d9}.socshare-bar-header{top:0}.socshare-bar-footer{bottom:0}.socshare-bar-footer:after{top:0}.socshare-bar-header:before{content:'';position:absolute;bottom:0;left:0;width:100%;height:1px;background-color:#e7e7e7}.socshare-bar-footer:after{content:'';position:absolute;top:0;right:0;width:100%;height:1px;background-color:#e7e7e7}.socshare-bar-title{position:absolute;top:0;right:89px;bottom:0;left:89px;margin:0 10px;min-width:30px;height:2.2rem;line-height:2.3rem;font-size:0.85rem;font-weight:500;text-align:center;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.socshare-group{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:10px 5px;overflow:hidden}.socshare-item{-webkit-box-flex:0;-webkit-flex:0 0 25%;-moz-box-flex:0;-moz-flex:0 0 25%;-ms-flex:0 0 25%;flex:0 0 25%;width:25%;text-align:center}.socshare-item:active .socshare-item-icon{opacity:1}.socshare-item-icon{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;-moz-justify-content:center;justify-content:center;width:62px;height:62px;margin:0 auto;padding:10px;border-radius:50%;opacity:.85;-webkit-transition-duration:200ms;transition-duration:200ms;-webkit-transition-property:opacity;transition-property:opacity}.socshare-item-icon img{max-width:100%;max-height:100%}.socshare-item-title{margin-top:10px;font-size:.6rem;text-align:center}.socshare-divide{width:100%;height:1px;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);background-color:#dfdfdf}.socshare-button{position:relative;display:inline-block;padding:0 .6rem;height:1.6rem;line-height:1.5rem;font-size:.7rem;border-width:1px;border-style:solid;border-radius:.1rem;border-color:#b2b2b2;background-color:#f8f8f8;color:#444;white-space:nowrap;text-align:center;text-overflow:ellipsis;text-decoration:none;outline:none}.socshare-button:active{background-color:#e5e5e5;-webkit-box-shadow:inset 0 1px 4px rgba(0,0,0,0.1);-moz-box-shadow:inset 0 1px 4px rgba(0,0,0,0.1);box-shadow:inset 0 1px 4px rgba(0,0,0,0.1)}.socshare-copy{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-moz-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;height:100%;text-align:center;padding:10px 5px;overflow:hidden}.socshare-copy>div{width:100%}.socshare-copy-title{margin-top:20px;margin-bottom:10px;text-align:center}.socshare-copy-link{margin:0 10px;padding:15px;border:1px solid #e6e6e6;background-color:#fff}.socshare-copy-link-inner{overflow-x:scroll;overflow-y:hidden;white-space:nowrap;color:#999;-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.socshare-copy-link-inner :active{color:#999}.socshare,.socshare-backdrop,.socshare-view{-webkit-transition-duration:400ms;transition-duration:400ms}.socshare{-webkit-transition-property:padding-top;transition-property:padding-top}.socshare .socshare-backdrop{-webkit-transition-property:opacity;transition-property:opacity}.socshare .socshare-backdrop.socshare-enter{opacity:1}.socshare .socshare-backdrop.socshare-leave{opacity:0}.socshare .socshare-view{-webkit-transition-property:transform;transition-property:transform}.socshare .socshare-view.socshare-enter{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.socshare .socshare-view.socshare-leave{-webkit-transform:translate3d(0, 100%, 0);transform:translate3d(0, 100%, 0)}\n");

/**
 * web 社交分享
 * 微信、微信朋友圈 仅支持腾讯平台：微信端、QQ浏览器
 * 微博、QQ好友、QQ空间 主流浏览器
 */

var moduleName = 'socshare';

var transitionEndPrefix = addPrefix$$1('transitionend');

/**
 * 是否支持原生分享
 */
var supportNativeShare = false;

if (client.os.isIOS && client.browser >= 10.2 || client.os.isAndroid && client.version.uc >= 9.7 || client.version.qq >= 5.4) {
  supportNativeShare = true;
}

/**
 * 支持浏览器原生分享的APP
 */
var nativeShareApps = {
  weibo: ['kSinaWeibo', 'SinaWeibo', 11],
  wechat: ['kWeixin', 'WechatFriends', 1],
  wechat_timeline: ['kWeixinFriend', 'WechatTimeline', 8],
  qq: ['kQQ', 'QQ', 4],
  qzone: ['kQZone', 'Qzone', 3]
};

/**
 * 样式 类名
 */
var className = {
  WRAP: moduleName,
  BACKDROP: moduleName + '-backdrop',
  ITEM_WRAP: moduleName + '-groups',
  ITEM: moduleName + '-item',
  CANCEL: moduleName + '-link',
  BACK_BUTTON: moduleName + '-button',
  COPY_WRAP: moduleName + '-copy',
  COPY_LINK: moduleName + '-copy-link-inner',
  TRANSITION_ENTER: moduleName + '-enter',
  TRANSITION_LEAVE: moduleName + '-leave'
};

/**
 * 模版
 */
var template = {
  WRAP: ['<div id="' + moduleName + '" class="' + moduleName + '">', '  <div class="' + moduleName + '-backdrop"></div>', '  <div class="' + moduleName + '-view ' + moduleName + '-groups" style="height:320px;">', '    <div class="' + moduleName + '-bar-header">', '      <button class="' + moduleName + '-button" style="display:none;">返回</button>', '      <div class="' + moduleName + '-bar-title">分享至</div>', '    </div>', '    <div class="' + moduleName + '-content">{{groups}}</div>', '    <div class="' + moduleName + '-bar-footer">', '      <div class="' + moduleName + '-link">取消</div>', '    </div>', '  </div>', '  <div class="' + moduleName + '-view ' + moduleName + '-copy" style="height:220px;">', '    <div class="' + moduleName + '-bar-header">', '      <button class="' + moduleName + '-button">返回</button>', '      <div class="' + moduleName + '-bar-title">分享至</div>', '    </div>', '    <div class="' + moduleName + '-content">', '      <div class="' + moduleName + '-copy-title">长按复制下方链接，粘贴给好友吧！</div>', '      <div class="' + moduleName + '-copy-link"><a class="' + moduleName + '-copy-link-inner"></a></div>', '    </div>', '    <div class="' + moduleName + '-bar-footer">', '      <div class="' + moduleName + '-link">取消</div>', '    </div>', '  </div>', '</div>'].join(''),
  COPY: ['<div id="' + moduleName + 'Copy" class="' + moduleName + '">', '  <div class="' + moduleName + '-backdrop"></div>', '  <div class="' + moduleName + '-view" style="height:220px;">', '    <div class="' + moduleName + '-bar-header">', '      <button class="' + moduleName + '-button">返回</button>', '      <div class="' + moduleName + '-bar-title">分享至</div>', '    </div>', '    <div class="' + moduleName + '-content">', '      <div class="' + moduleName + '-copy-title">长按复制下方链接，粘贴给好友吧！</div>', '      <div class="' + moduleName + '-copy-link"><a class="' + moduleName + '-copy-link-inner"></a></div>', '    </div>', '    <div class="' + moduleName + '-bar-footer">', '      <div class="' + moduleName + '-link">取消</div>', '    </div>', '  </div>', '</div>'].join(''),
  DIVIDE: ' <div class="' + moduleName + '-divide"></div>'
};

function getItemHtml(item) {
  return ['<div class="' + moduleName + '-item ' + item.key + '" data-site="' + item.key + '">' + '  <div class="' + moduleName + '-item-icon" style="background-color:' + item.bgColor + '">' + '    <img src="' + item.icon + '" alt="' + item.name + '" title="' + item.name + '">' + '  </div>' + '  <div class="' + moduleName + '-item-title">' + item.name + '</div>' + '</div>'].join('');
}

var metaDesc = document.getElementsByName('description')[0];
var firstImg = document.getElementsByTagName('img')[0];

/**
 * 默认配置
 */
var defaultOptions = {
  title: document.title,
  link: window.location.href,
  description: metaDesc && metaDesc.content || '',
  imageUrl: firstImg && firstImg.src || '',
  imageTitle: '',
  appName: '',
  from: window.location.host,
  sites: ['wechat', 'wechat_timeline', 'weibo', 'qq', 'qzone', 'copyLink']
};

/**
 * 获取弹出层dom
 */
function getWrapElement() {
  var $el = document.getElementById(moduleName);
  if (!$el) {
    var _this = this;
    var sitesHtml = getSitesHtml(this.sites);
    var warpHtml = template.WRAP.replace(/\{\{groups\}\}/g, sitesHtml);
    $el = createElement(warpHtml);
    on($el, 'click', '.' + className.CANCEL + ',.' + className.BACKDROP + ',.' + className.ITEM + ',.' + className.BACK_BUTTON, function (e) {
      if (this.classList.contains(className.CANCEL) || this.classList.contains(className.BACKDROP)) {
        _this.hide();
      } else if (this.classList.contains(className.ITEM)) {
        var id = this.getAttribute('data-site');
        id && shareTo.call(_this, id);
      } else if (this.classList.contains(className.BACK_BUTTON)) {
        var $copy = $el.querySelector('.' + className.COPY_WRAP);
        var $groups = $el.querySelector('.' + className.ITEM_WRAP);
        requestAnimationFrame(function () {
          $copy.classList.add(className.TRANSITION_LEAVE);
          $groups.classList.remove(className.TRANSITION_LEAVE);
        });
      }
      e.stopPropagation();
    }, function (e) {
      e.stopPropagation();
    });
    // 监听动结束事件
    $el.addEventListener(addPrefix$$1('transitionend'), function (e) {
      if (e.currentTarget.classList.contains(className.TRANSITION_ENTER)) {
        e.currentTarget.classList.remove(className.TRANSITION_ENTER);
      } else if (e.currentTarget.classList.contains(className.TRANSITION_LEAVE)) {
        e.currentTarget.classList.remove(className.TRANSITION_LEAVE);
        e.currentTarget.style.display = 'none';
      }
    });
    document.body.appendChild($el);
  }
  return $el;
}

/**
 * 分享到
 * @param {String} key
 */
function shareTo(key) {
  var this$1 = this;


  var site = Sites[key],
      app,
      shareInfo;

  if (!site) {
    return;
  }

  // 在一些支持原生分享的浏览器里 UC和QQ浏览器
  if (supportNativeShare) {
    if (client.browser.isUC) {
      if (nativeShareApps[site]) {
        app = client.os.isIOS ? nativeShareApps[site][0] : nativeShareApps[site][1];
      }

      if (app !== undefined) {
        shareInfo = [this.title, this.description, this.link, app, '', '@' + this.from, ''];

        // android
        if (window.ucweb) {
          window.ucweb.startRequest && window.ucweb.startRequest('shell.page_share', shareInfo);
        }

        // ios
        if (window.ucbrowser) {
          window.ucbrowser.web_share && window.ucbrowser.web_share.apply(null, shareInfo);
        }
        return;
      }
    }
    if (client.browser.isQQ) {
      if (nativeShareApps[key]) {
        app = nativeShareApps[key][2];
      }
      if (app !== undefined) {
        if (window.browser) {
          shareInfo = {
            url: this.link,
            title: this.title,
            description: this.description,
            img_url: this.imageUrl,
            img_title: this.imageTitle,
            to_app: app,
            cus_txt: ''
          };
          window.browser.app && window.browser.app.share(shareInfo);
        } else {
          loadScript('//jsapi.qq.com/get?api=app.setShareInfo,app.share', ApplyBind(function () {
            shareTo.call(this, key);
          }, this));
        }
        return;
      }
    }
  }

  // 其他浏览器 非UC和QQ 提示用户复制链接
  if (key === 'wechat' || key === 'wechat_timeline') {
    showCopy.call(this);
    return;
  }

  // 在普通浏览器里，使用URL Scheme唤起QQ客户端进行分享
  if (key === 'qzone' || key === 'qq') {
    var scheme = appendToQuery(site.scheme, {
      share_id: site.shareID,
      url: encode(this.link),
      title: encode(this.title),
      description: encode(this.description),
      previewimageUrl: encode(this.imageUrl), //For IOS
      image_url: encode(this.imageUrl) //For Android
    });
    openApp(scheme, key === 'qzone' ? ApplyBind(function (isOpen) {
      !isOpen && shareWebQZone.call(this);
    }, this) : ApplyBind(function (isOpen) {
      !isOpen && shareTo.call(this, 'copyLink');
    }, this));
    setTimeout(ApplyBind(function () {
      this.hide();
    }, this), 100);
    return;
  }

  // 微信分享
  if (key === 'wechat') {
    // 微信浏览器，弹出右上角提示
    if (client.browser.isWechat) {
      alert('请点击右上角在新窗口中打开');
    } else {
      // 在普通浏览器里点击微信分享，提示复制链接
      showCopy.call(this);
    }
    setTimeout(ApplyBind(function () {
      this.hide();
    }, this), 100);
    return;
  }

  // 复制链接
  if (key === 'copyLink') {
    showCopy.call(this);
  }

  // 对于没有原生分享的站点，使用webapi进行分享
  var api = site.api;
  if (api) {
    for (var v in this$1) {
      if (this$1.hasOwnProperty(v)) {
        api = api.replace(new RegExp('{{' + v + '}}', 'g'), encodeURIComponent(this$1[v]));
      }
    }
    window.open(api, '_blank');
    setTimeout(ApplyBind(function () {
      this.hide();
    }, this), 100);
  }
}

// 唤起网页QZone分享
function shareWebQZone() {
  var _this = this;
  var description = _this.description.substring(0, 200);
  window.location = '//openmobile.qq.com/api/check2?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&' + ['title=' + encodeURIComponent(this.title), 'imageUrl=' + encodeURIComponent(this.imageUrl), 'desc=' + encodeURIComponent(description), 'url=' + _this.link, 'successUrl=' + _this.link].join('&');
}

/**
 * 追加对象字面量对象到URL queryString
 * @param  {String} url URL字符串
 * @param  {Object} obj 对象
 * @return {String} 追加后的字符串
 */
function appendToQuery(url, obj) {
  var arr = [];
  for (var v in obj) {
    arr.push(v + '=' + obj[v]);
  }
  return url + (url.indexOf('?') !== -1 ? '&' : '?') + arr.join('&');
}

/**
 * 动态加载外部脚本
 * @param {String} url 脚本地址
 * @param {Function} done 脚本完毕回调函数
 */
function loadScript(url, done) {
  var script = document.createElement('script');
  script.src = url;
  script.onload = script.onreadystatechange = function () {
    if (!this.readyState || this.readyState === 'load' || this.readyState === 'complete') {
      done && done();
      script.onload = script.onreadystatechange;
      script.parentNode.removeChild(script);
    }
  };
  document.body.appendChild(script);
}

/**
 * 检测APP是否已经唤起
 * @param {Function} callback
 */
function checkOpen(callback) {
  var _clickTime = +new Date();

  function check(elsTime) {
    if (elsTime > 3001 || document.hidden || document.webkitHidden) {
      callback(true);
    } else {
      callback(false);
    }
  }

  // 启动间隔运行的定时器，并检测累计消耗时间是否超时，若超过则结束
  var _count = 0,
      intHandle;
  intHandle = setInterval(function () {
    _count++;
    var elsTime = +new Date() - _clickTime;
    if (_count >= 100 || elsTime > 3001) {
      clearInterval(intHandle);
      check(elsTime);
    }
  }, 30);
}

/**
 * 通过scheme唤起APP
 * @param {String} scheme 协议
 * @param {Function} callback 唤起操作执行后后执行 无论唤起操作是否成功
 */
function openApp(scheme, callback) {
  if (client.os.isIOS) {
    window.location.href = scheme;
    if (callback) {
      checkOpen(function (state) {
        callback && callback(state);
      });
    }
  } else {
    var iframe = document.createElement('iframe');
    iframe.src = scheme;
    iframe.style.display = 'none';
    if (callback) {
      checkOpen(function (state) {
        callback && callback(state);
      });
    }
    document.body.appendChild(iframe);
    setTimeout(function () {
      document.body.removeChild(iframe);
    }, 2000);
  }
}

/**
 * 显示 复制链接 弹出层
 */
function showCopy() {
  var $el = getWrapElement.call(this);

  var $groups = $el.querySelector('.' + className.ITEM_WRAP);

  $groups.classList.add(className.TRANSITION_LEAVE);

  var $copy = $el.querySelector('.' + className.COPY_WRAP);

  $copy.style.display = '';

  $copy.classList.add(className.TRANSITION_LEAVE);

  var $link = $copy.querySelector('.' + className.COPY_LINK);

  $link.innerHTML = this.link;

  $link.setAttribute('href', this.link);

  requestAnimationFrame(function () {
    $copy.classList.remove(className.TRANSITION_LEAVE);
  });
}

/**
 * 隐藏 复制链接 弹出层
 */
function hideCopy() {
  var $el = getWrapElement.call(this);
  var $copy = $el.querySelector('.' + className.COPY_WRAP);
  if ($copy && $copy.style.display !== 'none') {
    $copy.classList.add(className.TRANSITION_LEAVE);
  }
}

/**
 * 获取分享站点的模版字符串
 */
function getSitesHtml(sites) {
  var html = '',
      groupSize = 4;
  for (var i = 0, l = sites.length; i < l; i++) {
    if (groupSize && i % groupSize === 0) {
      html += '<div class="' + moduleName + '-group" data-grop="' + (i / groupSize + 1) + '">';
    }
    var key = sites[i];
    var item = Sites[key];
    if (item) {
      html += getItemHtml(item);
    } else {
      console.warn('site [' + key + '] not exist.');
    }
    if (groupSize && (i % groupSize === groupSize - 1 || i === l - 1)) {
      html += '</div>';
      if (i != l - 1) {
        html += template.DIVIDE;
      }
    }
  }
  return html;
}

/**
 * 更新配置
 */
function updateOptions(options) {
  var this$1 = this;

  for (var v in options) {
    if (options.hasOwnProperty(v) && this$1.hasOwnProperty(v)) {
      this$1[v] = options[v];
    }
  }
}

/**
 * main
 */
function WebShare(options) {
  Extend(this, defaultOptions);
  updateOptions.call(this, options);
}

/**
 * prototypes
 */
WebShare.prototype = {
  show: function show(options) {

    updateOptions.call(this, options);

    var $el = getWrapElement.call(this);

    hideCopy();

    var $groups = $el.querySelector('.' + className.ITEM_WRAP);

    $groups.classList.add(className.TRANSITION_LEAVE);

    var $backdrop = $el.querySelector('.' + className.BACKDROP);

    $backdrop.classList.add(className.TRANSITION_LEAVE);

    $el.style.display = '';

    requestAnimationFrame(function () {
      $groups.classList.remove(className.TRANSITION_LEAVE);
      $backdrop.classList.remove(className.TRANSITION_LEAVE);
    });
  },
  hide: function hide() {
    var $el = document.getElementById(moduleName);

    if ($el && $el.style.display !== 'none') {

      var $groups = $el.querySelector('.' + className.ITEM_WRAP);

      var $backdrop = $el.querySelector('.' + className.BACKDROP);

      var $copy = $el.querySelector('.' + className.COPY_WRAP);

      $groups.classList.add(className.TRANSITION_LEAVE);

      $copy.classList.add(className.TRANSITION_LEAVE);

      $backdrop.classList.add(className.TRANSITION_LEAVE);

      // 监听动结束事件
      $backdrop.addEventListener(transitionEndPrefix, function (e) {
        if (e.currentTarget.classList.contains(className.TRANSITION_LEAVE)) {
          $el.style.display = 'none';
        }
      });
    }
  }
};

var index = new WebShare();

return index;

})));
