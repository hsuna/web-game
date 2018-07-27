(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Administrator on 2015/12/8.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Stage = require("./display/Stage");

var _Stage2 = _interopRequireDefault(_Stage);

var _BaseInfo = require("./infos/BaseInfo");

var _BaseInfo2 = _interopRequireDefault(_BaseInfo);

var _StageInfo = require("./infos/StageInfo");

var _StageInfo2 = _interopRequireDefault(_StageInfo);

var _MainView = require("./modules/MainView");

var _MainView2 = _interopRequireDefault(_MainView);

var _MainControl = require("./modules/MainControl");

var _MainControl2 = _interopRequireDefault(_MainControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParkourGame = function () {
    function ParkourGame(id, assetsUrl, w, h, fps) {
        _classCallCheck(this, ParkourGame);

        _StageInfo2.default.id = id;
        _StageInfo2.default.stage = new _Stage2.default(id, w, h, fps);

        _BaseInfo2.default.assetsUrl = assetsUrl;
        _BaseInfo2.default.imageUrl = assetsUrl + "image/";
        _BaseInfo2.default.soundUrl = assetsUrl + "sound/";

        this._view = new _MainView2.default();
        _StageInfo2.default.stage.addChild(this._view);
        this._control = new _MainControl2.default(this._view);
    }

    _createClass(ParkourGame, [{
        key: "control",
        get: function get() {
            return this._control;
        }
    }]);

    return ParkourGame;
}();

exports.default = ParkourGame;

},{"./display/Stage":6,"./infos/BaseInfo":14,"./infos/StageInfo":16,"./modules/MainControl":17,"./modules/MainView":18}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Container2 = require("../display/Container");

var _Container3 = _interopRequireDefault(_Container2);

var _MouseEvent = require("../events/MouseEvent");

var _MouseEvent2 = _interopRequireDefault(_MouseEvent);

var _BaseInfo = require("../infos/BaseInfo");

var _BaseInfo2 = _interopRequireDefault(_BaseInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/8.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _initEvent = Symbol('_initEvent');
var _removeEvent = Symbol('_removeEvent');
var _onMouseEventHandler = Symbol('_onMouseEventHandler');

var Button = function (_Container) {
    _inherits(Button, _Container);

    function Button(skin, w, h, x, y, type) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

        _this._types = [];
        _this._status = 0;
        _this.width = w;
        _this.height = h;
        _this.setSkin(skin, x, y, type);

        _this[_initEvent]();
        return _this;
    }
    // 公有方法


    _createClass(Button, [{
        key: "display",
        value: function display() {
            this[_removeEvent]();
            _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), "dispose", this).call(this);
        }
    }, {
        key: "setSkin",
        value: function setSkin(skin, x, y, type) {
            this._skin = _BaseInfo2.default.imageUrl + skin;
            this._div.style.background = "url(" + this._skin + ") " + -x + "px " + -y + "px no-repeat";

            switch (type) {
                case 1:
                    this._types = [{ "background-position": -x + "px " + -y + "px" }, { "background-position": -x + "px " + (-y - this._height) + "px" }, { "background-position": -x + "px " + (-y - this._height) + "px" }];
                    break;
                case 2:
                    this._types = [{ "background-position": -x + "px " + -y + "px" }, { "background-position": -x + "px " + (-y - this._height) + "px" }, { "background-position": -x + "px " + (-y - this._height * 2) + "px" }];
                    break;
                case 3:
                    this._types = [{ "scale": 1 }, { "scale": 1.1 }, { "scale": 1.05 }];
                    break;
                default:
                    this._types = [{}, {}, {}];
                    break;
            }
            this.status = this._status;
        }
    }, {
        key: _initEvent,


        // 私有方法
        value: function value() {
            this.addEventListener(_MouseEvent2.default.MOUSE_OVER, this[_onMouseEventHandler], this);
            this.addEventListener(_MouseEvent2.default.MOUSE_OUT, this[_onMouseEventHandler], this);
            this.addEventListener(_MouseEvent2.default.MOUSE_DOWN, this[_onMouseEventHandler], this);
            this.addEventListener(_MouseEvent2.default.MOUSE_UP, this[_onMouseEventHandler], this);
        }
    }, {
        key: _removeEvent,
        value: function value() {
            this.removeEventListener(_MouseEvent2.default.MOUSE_OVER, this[_onMouseEventHandler]);
            this.removeEventListener(_MouseEvent2.default.MOUSE_OUT, this[_onMouseEventHandler]);
            this.removeEventListener(_MouseEvent2.default.MOUSE_DOWN, this[_onMouseEventHandler]);
            this.removeEventListener(_MouseEvent2.default.MOUSE_UP, this[_onMouseEventHandler]);
        }
    }, {
        key: _onMouseEventHandler,
        value: function value(evt) {
            switch (evt.type) {
                case _MouseEvent2.default.MOUSE_OUT:
                    this.status = 0;
                    this._div.style.cursor = "none";
                    break;
                case _MouseEvent2.default.MOUSE_OVER:
                    this._div.style.cursor = "pointer";
                case _MouseEvent2.default.MOUSE_UP:
                    this.status = 1;
                    break;
                case _MouseEvent2.default.MOUSE_DOWN:
                    this.status = 2;
                    break;
            }
        }
    }, {
        key: "status",
        set: function set(value) {
            this._status = value;
            var typeObj = this._types[this._status];
            for (var prop in typeObj) {
                if (this._div.style.hasOwnProperty(prop)) {
                    this._div.style[prop] = typeObj[prop];
                } else if (this.hasOwnProperty(prop)) {
                    switch (prop) {
                        case "scale":
                            var tmpW = this._width * Math.cos(this._rotation) + this._height * Math.sin(this._rotation);
                            var tmpH = this._width * Math.sin(this._rotation) + this._height * Math.cos(this._rotation);
                            this.setLocation(this._x + (this._scale - typeObj[prop]) * tmpW * .5, this._y + (this._scale - typeObj[prop]) * tmpH * .5);
                            break;
                    }
                    this[prop] = typeObj[prop];
                }
            }
        }
    }]);

    return Button;
}(_Container3.default);

// 静态属性


Button.NONE = 0;
Button.DOUBLE = 1;
Button.THREE = 2;
Button.SCALE = 3;

exports.default = Button;

},{"../display/Container":3,"../events/MouseEvent":11,"../infos/BaseInfo":14}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dispatcher2 = require("../events/Dispatcher");

var _Dispatcher3 = _interopRequireDefault(_Dispatcher2);

var _Point = require("../geom/Point");

var _Point2 = _interopRequireDefault(_Point);

var _BaseInfo = require("../infos/BaseInfo");

var _BaseInfo2 = _interopRequireDefault(_BaseInfo);

var _Event = require("../events/Event");

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/8.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


//全局数据
var c_instance = 0;

//私有方法

var Container = function (_Dispatcher) {
    _inherits(Container, _Dispatcher);

    function Container(target) {
        _classCallCheck(this, Container);

        var div = target;
        if (!div) {
            div = document.createElement("div");
            div.id = _BaseInfo2.default.name + "_instance_" + ++c_instance;
        }

        var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, div));

        _this._div = div;
        _this.parent = null;
        _this._children = [];
        _this._x = 0;
        _this._y = 0;
        _this._width = 0;
        _this._height = 0;
        _this._scale = 1;
        _this._rotation = 0;
        _this._alpha = 1;
        _this._visible = true;
        _this._div.style.position = "absolute";

        return _this;
    }

    _createClass(Container, [{
        key: "render",
        value: function render() {
            if (this.hasEventListener(_Event2.default.ENTER_FRAME)) {
                var evt = {
                    type: _Event2.default.ENTER_FRAME,
                    currentTarget: this,
                    target: this
                };
                this._target["on" + _Event2.default.ENTER_FRAME].call(this, evt);
            }
            var child = void 0;
            var childs = this._children;
            for (var i = childs.length - 1; i >= 0; i--) {
                child = childs[i];
                child && child.render();
            }
        }
    }, {
        key: "addChild",
        value: function addChild(child) {
            this.addChildAt(child, this.numChildren);
        }
    }, {
        key: "addChildAt",
        value: function addChildAt(child, index) {
            var tchild = this._children[index];
            this._children.splice(index, 0, child);
            if (tchild) this._div.insertBefore(child.div, tchild.div);else this._div.appendChild(child.div);
            child.parent = this;
        }
    }, {
        key: "removeChild",
        value: function removeChild(child) {
            var index = this._children.indexOf(child);
            if (-1 != index) this.removeChildAt(index);
        }
    }, {
        key: "removeChildAt",
        value: function removeChildAt(index) {
            var child = this._children.splice(index, 1)[0];
            this._div.removeChild(child.div);
            child.parent = null;
        }
    }, {
        key: "getChildAt",
        value: function getChildAt(index) {
            var child = this._children[index];
            return child;
        }
    }, {
        key: "removeFormeParent",
        value: function removeFormeParent() {
            if (this.parent) this.parent.removeChild(this);
        }
    }, {
        key: "dispose",
        value: function dispose() {
            var child = void 0;
            var childs = this._children;
            while (childs && childs.length > 0) {
                child = childs[0];
                child && child.dispose();
                child = null;
            }
            this.removeFormeParent();
        }
    }, {
        key: "setLocation",
        value: function setLocation() {
            var valx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var valy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            this.x = valx;
            this.y = valy;
        }
    }, {
        key: "localToGlobal",
        value: function localToGlobal(pot) {
            var target = this;
            var tmp = pot.clone();
            while (target) {
                tmp.x += target.x;
                tmp.y += target.y;
                target = target.parent;
            }
            return tmp;
        }
    }, {
        key: "globalToLocal",
        value: function globalToLocal(pot) {
            var tmp = this.localToGlobal(new _Point2.default(-pot.x, -pot.y));
            tmp.x = -tmp.x;
            tmp.y = -tmp.y;
            return tmp;
        }
    }, {
        key: "updateTransform",
        value: function updateTransform() {
            var props = ["webkitTransform", "mozTransform", "msTransform", "oTransform", "Transform"];
            for (var i = 0; i < props.length; i++) {
                if (this._div.style.hasOwnProperty(props[i])) {
                    this._div.style[props[i]] = "rotate(" + this._rotation + "deg) scale(" + this._scale + ")";
                    this._div.style[props[i] + "Origin"] = "top left";
                    return;
                }
            }
            this._div.style.zoom = this._scale;
            this._rotation = 0;
        }
    }, {
        key: "div",
        get: function get() {
            return this._div;
        }
    }, {
        key: "id",
        get: function get() {
            return this._div.id;
        }
    }, {
        key: "x",
        get: function get() {
            return this._x;
        },
        set: function set(value) {
            this._x = value;
            this._div.style.left = value + "px";
        }
    }, {
        key: "y",
        get: function get() {
            return this._y;
        },
        set: function set(value) {
            this._y = value;
            this._div.style.top = value + "px";
        }
    }, {
        key: "width",
        get: function get() {
            return this._width;
        },
        set: function set(value) {
            this._width = value;
            this._div.style.width = value + "px";
        }
    }, {
        key: "height",
        get: function get() {
            return this._height;
        },
        set: function set(value) {
            this._height = value;
            this._div.style.height = value + "px";
        }
    }, {
        key: "scale",
        get: function get() {
            return this._scale;
        },
        set: function set(value) {
            this._scale = value;
            this.updateTransform();
        }
    }, {
        key: "rotation",
        get: function get() {
            return this._rotation;
        },
        set: function set(value) {
            this._rotation = value;
            this.updateTransform();
        }
    }, {
        key: "alpha",
        get: function get() {
            return this._alpha;
        },
        set: function set(value) {
            this._alpha = value;
            if (this._div.filters) {
                this._div.style.filter = "alpha(opacity=" + value * 100 + ")";
            } else {
                this._div.style.opacity = value;
            }
        }
    }, {
        key: "visible",
        get: function get() {
            return this._visible;
        },
        set: function set(value) {
            this._visible = value;
            this._div.style.display = value ? "" : "none";
        }
    }, {
        key: "numChildren",
        get: function get() {
            return this._children.length;
        }
    }, {
        key: "mask",
        set: function set(value) {
            this._div.style.overflow = value ? "hidden" : "visible";
        }
    }, {
        key: "children",
        get: function get() {
            return this._children.concat();
        }
    }]);

    return Container;
}(_Dispatcher3.default);

exports.default = Container;

},{"../events/Dispatcher":8,"../events/Event":9,"../geom/Point":12,"../infos/BaseInfo":14}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Container2 = require("../display/Container");

var _Container3 = _interopRequireDefault(_Container2);

var _BaseInfo = require("../infos/BaseInfo");

var _BaseInfo2 = _interopRequireDefault(_BaseInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/8.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Image = function (_Container) {
    _inherits(Image, _Container);

    function Image(skin, x, y, w, h) {
        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this));

        _this._skin = null;
        _this.setSkin(skin, x, y);
        _this.width = w;
        _this.height = h;
        return _this;
    }

    _createClass(Image, [{
        key: "setSkin",
        value: function setSkin(skin, x, y) {
            this._skin = _BaseInfo2.default.imageUrl + skin;
            this._div.style.background = "url(" + this._skin + ") " + -x + "px " + -y + "px no-repeat";
        }
    }, {
        key: "setSkinPosition",
        value: function setSkinPosition(x, y) {
            this._div.style.backgroundPosition = -x + "px " + -y + "px";
        }
    }, {
        key: "setSkinRepeat",
        value: function setSkinRepeat(str) {
            this._div.style.backgroundRepeat = str;
        }
    }]);

    return Image;
}(_Container3.default);

exports.default = Image;

},{"../display/Container":3,"../infos/BaseInfo":14}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseInfo = require("../infos/BaseInfo");

var _BaseInfo2 = _interopRequireDefault(_BaseInfo);

var _Container2 = require("./Container");

var _Container3 = _interopRequireDefault(_Container2);

var _Event = require("../events/Event");

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/8.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _initEvent = Symbol('_initEvent');
var _removeEvent = Symbol('_removeEvent');
var _onEventFrameHandler = Symbol('_onEventFrameHandler');
var _updateMovie = Symbol('_updateMovie');
var _analysisInfo = Symbol('_analysisInfo');

var MovieClip = function (_Container) {
    _inherits(MovieClip, _Container);

    function MovieClip(skin, infos) {
        _classCallCheck(this, MovieClip);

        var _this = _possibleConstructorReturn(this, (MovieClip.__proto__ || Object.getPrototypeOf(MovieClip)).call(this));

        _this._skin = _BaseInfo2.default.imageUrl + skin;
        _this._movieInfo = _this[_analysisInfo](infos);
        _this._isPlaying = true;
        _this._currentFrame = 0;
        _this._totalFrames = _this._movieInfo.length - 1;
        _this._frameScript = [];
        _this[_updateMovie]();
        _this[_initEvent]();
        return _this;
    }

    _createClass(MovieClip, [{
        key: "display",
        value: function display() {
            this[_removeEvent]();
            _get(MovieClip.prototype.__proto__ || Object.getPrototypeOf(MovieClip.prototype), "display", this).call(this);
        }
    }, {
        key: "play",
        value: function play() {
            this._isPlaying = true;
        }
    }, {
        key: "stop",
        value: function stop() {
            this._isPlaying = false;
        }
    }, {
        key: "gotoAndPlay",
        value: function gotoAndPlay(frame) {
            this._currentFrame = frame;
            this.play();
        }
    }, {
        key: "gotoAndStop",
        value: function gotoAndStop(frame) {
            this.stop();
            this._currentFrame = frame;
            this[_updateMovie]();
        }
    }, {
        key: "addFrameScript",
        value: function addFrameScript(frame, fun) {
            this._frameScript[frame] = fun;
        }

        // 私有方法

    }, {
        key: _initEvent,
        value: function value() {
            this.addEventListener(_Event2.default.ENTER_FRAME, this[_onEventFrameHandler], this);
        }
    }, {
        key: _removeEvent,
        value: function value() {
            this.removeEventListener(_Event2.default.ENTER_FRAME, this[_onEventFrameHandler]);
        }
    }, {
        key: _onEventFrameHandler,
        value: function value(evt) {
            if (!this._isPlaying) return;

            this[_updateMovie]();
            var fun = this._frameScript[this._currentFrame];
            if (this._currentFrame <= this._totalFrames) this._currentFrame++;else this._currentFrame = 0;
            fun && fun.call();
        }
    }, {
        key: _updateMovie,
        value: function value() {
            var info = this._movieInfo[this._currentFrame];
            if (info) {
                this.width = info.w;
                this.height = info.h;
                this._div.style.background = "url(" + this._skin + ") " + -info.x + "px " + -info.y + "px no-repeat";
            }
        }
    }, {
        key: _analysisInfo,
        value: function value(infos) {
            var info = void 0;
            var movieInfo = [];
            for (var i = 0; i < infos.length; i++) {
                info = infos[i];
                if (info.time) {
                    for (var j = 0; j < info.time; j++) {
                        movieInfo.push(0 == j ? info : null);
                    }
                } else movieInfo.push(info);
            }
            return movieInfo;
        }
    }]);

    return MovieClip;
}(_Container3.default);

exports.default = MovieClip;

},{"../events/Event":9,"../infos/BaseInfo":14,"./Container":3}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Container2 = require('./Container');

var _Container3 = _interopRequireDefault(_Container2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/8.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Stage = function (_Container) {
    _inherits(Stage, _Container);

    function Stage(id, w, h, fps) {
        _classCallCheck(this, Stage);

        var _this = _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this, document.getElementById(id)));

        _this.width = w;
        _this.height = h;
        _this.mask = true;
        _this._div.oncontextmenu = new Function('event.returnValue=false;');
        _this._div.onselectstart = new Function('event.returnValue=false;');
        //this._div.style = this._div.style||{};
        _this._target = document;
        _this._timeId = setInterval(_this.render.bind(_this), 1000 / fps);
        _this._fps = fps;
        return _this;
    }

    _createClass(Stage, [{
        key: 'fps',
        get: function get() {
            return fps;
        }
    }]);

    return Stage;
}(_Container3.default);

exports.default = Stage;

},{"./Container":3}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Container2 = require("./Container");

var _Container3 = _interopRequireDefault(_Container2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/8.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Text = function (_Container) {
    _inherits(Text, _Container);

    function Text() {
        _classCallCheck(this, Text);

        var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

        _this._text = null;
        return _this;
    }

    _createClass(Text, [{
        key: "text",
        get: function get() {
            return this._text;
        },
        set: function set(text) {
            this._div.innerHTML = this._text = text;
        }
    }]);

    return Text;
}(_Container3.default);

exports.default = Text;

},{"./Container":3}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Administrator on 2015/12/8.
 */
///////////////////Dispatcher///////////////////

var Dispatcher = function () {
    function Dispatcher(target) {
        _classCallCheck(this, Dispatcher);

        this._listeners = [];
        this._target = target;
    }

    _createClass(Dispatcher, [{
        key: "addEventListener",
        value: function addEventListener(type, listener, thisArg) {
            if (!this._listeners[type]) {
                this._listeners[type] = [listener];
                this._target["on" + type] = function (evt) {
                    evt = evt || window.event;
                    this._triggerEventListener.call(this, type, evt, thisArg);
                }.bind(this);
            } else {
                this._listeners[type].push(listener);
            }
            return listener;
        }
    }, {
        key: "removeEventListener",
        value: function removeEventListener(type, listener) {
            var listeners = this._listeners[type];
            if (!listeners) return;
            var index = listeners.indexOf(listener);
            if (-1 != index) listeners.splice(index, 1);
            if (listeners.length <= 0) {
                delete this._listeners[type];
                this._target["on" + type] = null;
            }
        }
    }, {
        key: "hasEventListener",
        value: function hasEventListener(type) {
            var listeners = this._listeners[type];
            if (listeners && listeners.length > 0) return true;
            return false;
        }
    }, {
        key: "_triggerEventListener",
        value: function _triggerEventListener(type, evt, thisArg) {
            var listener = void 0;
            var listeners = this._listeners[type];
            if (!listeners) return;
            for (var i = 0, l = listeners.length; i < l; i++) {
                listener = listeners[i];
                listener && listener.call(thisArg || this, evt);
            }
        }
    }]);

    return Dispatcher;
}();

exports.default = Dispatcher;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Administrator on 2015/12/8.
 */
/////////////////////Event///////////////////
var Event = function Event() {
  _classCallCheck(this, Event);
};

Event.ENTER_FRAME = "enterframe";

exports.default = Event;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Administrator on 2015/12/8.
 */
///////////////////KeyEvent///////////////////
var KeyEvent = function KeyEvent() {
  _classCallCheck(this, KeyEvent);
};

KeyEvent.KEY_DOWN = "keydown";
KeyEvent.KEY_PRESS = "keypress";
KeyEvent.KEY_UP = "keyup";

exports.default = KeyEvent;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Administrator on 2015/12/8.
 */
/////////////////////MouseEvent///////////////////
var MouseEvent = function MouseEvent() {
  _classCallCheck(this, MouseEvent);
};

MouseEvent.CLICK = "click";
MouseEvent.MOUSE_OVER = "mouseover";
MouseEvent.MOUSE_OUT = "mouseout";
MouseEvent.MOUSE_DOWN = "mousedown";
MouseEvent.MOUSE_UP = "mouseup";
MouseEvent.MOUSE_MOVE = "mousemove";

exports.default = MouseEvent;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Administrator on 2015/12/22.
 */

var Point = function () {
    function Point() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, [{
        key: "clone",
        value: function clone() {
            return new Point(this.x, this.y);
        }
    }, {
        key: "length",
        get: function get() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }]);

    return Point;
}();

exports.default = Point;

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Administrator on 2015/12/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Point = require("./Point");

var _Point2 = _interopRequireDefault(_Point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function () {
    function Rectangle() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, Rectangle);

        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }

    _createClass(Rectangle, [{
        key: "contains",
        value: function contains(x, y) {
            return x >= this.left && x <= this.right && y >= this.top && y <= this.bottom;
        }
    }, {
        key: "containsPoint",
        value: function containsPoint(pot) {
            return this.contains(pot.x, pot.y);
        }
    }, {
        key: "clone",
        value: function clone() {
            return new Rectangle(this.x, this.y, this.w, this.y);
        }
    }, {
        key: "left",
        get: function get() {
            return this.x;
        }
    }, {
        key: "right",
        get: function get() {
            return this.x + this.width;
        }
    }, {
        key: "top",
        get: function get() {
            return this.y;
        }
    }, {
        key: "bottom",
        get: function get() {
            return this.y + this.height;
        }
    }, {
        key: "topLeft",
        get: function get() {
            return new _Point2.default(this.x, this.y);
        }
    }, {
        key: "bottomRight",
        get: function get() {
            return new _Point2.default(this.x + this.width, this.y + this.height);
        }
    }, {
        key: "size",
        get: function get() {
            return new _Point2.default(this.width, this.height);
        }
    }]);

    return Rectangle;
}();

exports.default = Rectangle;

},{"./Point":12}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Administrator on 2015/12/8.
 */

var BaseInfo = {
    name: "parkour",
    assetsUrl: "./",
    imageUrl: "./",
    soundUrl: "./"
};

exports.default = BaseInfo;

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Administrator on 2015/12/8.
 */
var GameInfo = {
    mapInfo: [[{ x: 0, y: 400.6, w: 399.55, h: 100, r: 0 }, { x: 399.55, y: 301.65, w: 101.45, h: 198.95, r: 0 }, { x: 501, y: 400.6, w: 397.9, h: 100, r: 0 }], //map_0
    [{ x: 0, y: 400.6, w: 30.25, h: 100, r: 0 }, { x: 27.15, y: 271.2, w: 101.2, h: 229.35, r: 0 }, { x: 128.35, y: 400.6, w: 573.85, h: 100, r: 0 }, { x: 601.05, y: 327, w: 99.65, h: 330.4, r: 180 }, { x: 702.35, y: 300.6, w: 99.15, h: 199, r: 0 }, { x: 801.5, y: 400.6, w: 99.95, h: 100, r: 0 }], //map_1
    [{ x: 0, y: 400.6, w: 403.8, h: 100, r: 0 }, { x: 403.8, y: 280.5, w: 102.7, h: 220.1, r: 0 }, { x: 506.5, y: 400.1, w: 394.05, h: 100, r: 0 }], //map_2
    [{ x: 0, y: 348, w: 177.8, h: 152.05, r: 0 }, { x: 327.85, y: 267.7, w: 172.3, h: 66, r: 0 }, { x: 598.85, y: 151.65, w: 169.8, h: 65.55, r: 0 }], //map_3
    [{ x: 165.1, y: 304.35, w: 160.85, h: 43.75, r: 0 }, { x: 349.6, y: 238.3, w: 109.25, h: 243.05, r: 180 }, { x: 482.65, y: 302.95, w: 126.75, h: 43.8, r: 0 }, { x: 560.25, y: 239.9, w: 108.7, h: 245.1, r: 180 }, { x: 656.25, y: 187.95, w: 108.35, h: 312.9, r: 0 }], //map_4
    [{ x: 136.35, y: 259.1, w: 41.25, h: 42.5, r: 0 }, { x: 498.4, y: 237.1, w: 96.3, h: 262.9, r: 0 }, { x: 594.7, y: 347.95, w: 319.95, h: 152.05, r: 0 }], //map_5
    [{ x: 0, y: 347.95, w: 211, h: 151.45, r: 0 }, { x: 446.85, y: 448.25, w: 209.8, h: 51.15, r: 0 }, { x: 783.95, y: 321.2, w: 102, h: 49, r: 0 }], //map_6
    [{ x: 129.7, y: 221.2, w: 132, h: 49.75, r: 0 }, { x: 381, y: 137.45, w: 50, h: 49.25, r: 0 }, { x: 495.8, y: 231.4, w: 182, h: 151, r: 0 }, { x: 628.95, y: 154.6, w: 51.45, h: 158.5, r: 180 }, { x: 677.8, y: 231.4, w: 78.5, h: 62.5, r: 0 }, { x: 756.3, y: 165.65, w: 91.25, h: 128.25, r: 0 }, { x: 839.3, y: 100.2, w: 62.65, h: 134.5, r: 0 }], //map_7
    [{ x: 0.1, y: 100.15, w: 30.05, h: 134.5, r: 0 }, { x: 171.45, y: 348.3, w: 194.25, h: 149.75, r: 0 }, { x: 365.7, y: 288.1, w: 83.75, h: 209.95, r: 0 }, { x: 449.45, y: 226.8, w: 92.5, h: 271.25, r: 0 }, { x: 541.95, y: 161.8, w: 92.75, h: 130.75, r: 0 }, { x: 541.95, y: 347.55, w: 375.85, h: 150.5, r: 0 }], //map_8
    [{ x: 0, y: 347.55, w: 127.55, h: 151.95, r: 0 }, { x: 301.65, y: 453.6, w: 427.5, h: 45.9, r: 0 }, { x: 464.05, y: 380.85, w: 47, h: 402.7, r: 180 }, { x: 617.75, y: 348.1, w: 60.1, h: 402.75, r: 180 }, { x: 729.15, y: 353.6, w: 77.95, h: 145.9, r: 0 }, { x: 807.1, y: 453.6, w: 91.75, h: 45.9, r: 0 }], //map_9
    [{ x: 0, y: 453.55, w: 174.1, h: 45.9, r: 0 }, { x: 86.9, y: 393.25, w: 80.05, h: 404.1, r: 180 }, { x: 245.65, y: 357.1, w: 247.2, h: 45, r: 0 }, { x: 571.15, y: 247.5, w: 245.15, h: 47.05, r: 0 }, { x: 750.95, y: 186.45, w: 80.05, h: 244.45, r: 180 }], //map_10
    [{ x: 74.2, y: 52.55, w: 53.95, h: 44.8, r: 0 }, { x: 225.1, y: 307.75, w: 158.45, h: 42.1, r: 0 }, { x: 409, y: 239.55, w: 110.35, h: 243.75, r: 180 }, { x: 541.8, y: 307.95, w: 124.75, h: 41.9, r: 0 }, { x: 617.7, y: 239.15, w: 108.25, h: 243.65, r: 180 }, { x: 714.55, y: 192.25, w: 104.85, h: 305.75, r: 0 }, { x: 819.4, y: 347.3, w: 100, h: 150.7, r: 0 }], //map_11
    [{ x: 0, y: 347.45, w: 203.55, h: 151.1, r: 0 }, { x: 343.5, y: 274.15, w: 186.5, h: 52.05, r: 0 }, { x: 651, y: 209.55, w: 63.85, h: 243.15, r: 180 }, { x: 702.45, y: 382.3, w: 196.25, h: 71.5, r: 0 }], //map_12
    [{ x: -0.2, y: 382.25, w: 193.25, h: 71.5, r: 0 }, { x: 107.2, y: 303.05, w: 93.05, h: 309.5, r: 180 }, { x: 288.45, y: 298.5, w: 250.45, h: 200, r: 0 }, { x: 615.3, y: 181.55, w: 144.15, h: 50, r: 0 }, { x: 803.45, y: 39.15, w: 97.25, h: 50.3, r: 0 }, { x: 880.25, y: 321.6, w: 20.45, h: 49.95, r: 0 }], //map_13
    [{ x: -0.2, y: 321.6, w: 124.05, h: 49.95, r: 0 }, { x: -0.2, y: 39.15, w: 47.9, h: 50.3, r: 0 }, { x: 167.9, y: 173.8, w: 144.45, h: 50.3, r: 0 }, { x: 340.5, y: 395.5, w: 302.2, h: 104.45, r: 0 }, { x: 642.7, y: 347.8, w: 277.3, h: 152.15, r: 0 }], //map_14
    [{ x: 0, y: 347.75, w: 151.2, h: 151.1, r: 0 }, { x: 305.3, y: 443.05, w: 147.9, h: 52.7, r: 0 }, { x: 504.15, y: 347.75, w: 148.1, h: 53.7, r: 0 }, { x: 701.85, y: 237, w: 149.15, h: 53.15, r: 0 }], //map_15
    [{ x: 2.85, y: 137.25, w: 148.55, h: 52.5, r: 0 }, { x: 255.8, y: 253.5, w: 227.65, h: 52.5, r: 0 }, { x: 400.35, y: 179.95, w: 53.3, h: 184.7, r: 180 }, { x: 573.7, y: 149.05, w: 145.85, h: 50.4, r: 0 }, { x: 696.6, y: 86.75, w: 53.7, h: 91.35, r: 180 }], //map_16
    [{ x: 1.8, y: 345.6, w: 251.55, h: 151.1, r: 0 }, { x: 366.9, y: 261.95, w: 259.45, h: 52.1, r: 0 }, { x: 733.65, y: 347.75, w: 181.45, h: 151.05, r: 0 }], //map_17
    [{ x: 0, y: 347.8, w: 196.95, h: 151.9, r: 0 }, { x: 338.4, y: 274.4, w: 189.35, h: 51.2, r: 0 }, { x: 526.45, y: 135.75, w: 148.8, h: 51.85, r: 0 }, { x: 698.25, y: 375.95, w: 200.75, h: 71.85, r: 0 }], //map_18
    [{ x: -0.7, y: 375.95, w: 190.15, h: 71.85, r: 0 }, { x: 101.9, y: 300.05, w: 91.75, h: 305.3, r: 180 }, { x: 284.95, y: 297.5, w: 252.7, h: 201.95, r: 0 }, { x: 609.3, y: 181.3, w: 145, h: 48.65, r: 0 }, { x: 875.75, y: 321.9, w: 25.95, h: 49.35, r: 0 }], //map_19
    [{ x: -0.3, y: 321.9, w: 118.95, h: 49.35, r: 0 }, { x: 162, y: 174.05, w: 145.65, h: 49.35, r: 0 }, { x: 335.5, y: 393.65, w: 304.65, h: 105.7, r: 0 }, { x: 640.15, y: 345.5, w: 274.85, h: 153.85, r: 0 }], //map_20
    [{ x: 0, y: 346.15, w: 204.2, h: 152.15, r: 0 }, { x: 342.65, y: 445.15, w: 219.6, h: 49.05, r: 0 }, { x: 512.7, y: 373.5, w: 55.35, h: 380.25, r: 180 }, { x: 652.7, y: 355.8, w: 151.35, h: 49.7, r: 0 }, { x: 796.35, y: 273.8, w: 56.35, h: 281.2, r: 180 }, { x: 883, y: 299.45, w: 15.9, h: 50.2, r: 0 }], //map_21
    [{ x: 0, y: 299.4, w: 136.5, h: 50.2, r: 0 }, { x: 100.9, y: 235.85, w: 56.35, h: 242.7, r: 180 }, { x: 206.15, y: 222.95, w: 150.3, h: 49.6, r: 0 }, { x: 328.8, y: 146.45, w: 56.9, h: 153.35, r: 180 }, { x: 428.1, y: 130.3, w: 151.1, h: 50.25, r: 0 }, { x: 628.75, y: 8.9, w: 151.35, h: 49.2, r: 0 }, { x: 700.55, y: 222.95, w: 151.85, h: 51.4, r: 0 }], //map_22
    [{ x: 103.65, y: 299.9, w: 100, h: 163.85, r: 0 }, { x: 203.65, y: 399.25, w: 95.8, h: 100, r: 0 }, { x: 306.75, y: 218.75, w: 109.8, h: 244.5, r: 180 }, { x: 352.75, y: 297.65, w: 100, h: 100, r: 0 }, { x: 642.65, y: 348.6, w: 274.8, h: 150.55, r: 0 }], //map_23
    [{ x: 0, y: 349.15, w: 84.5, h: 151.75, r: 0 }, { x: 177.35, y: 239.4, w: 111.15, h: 245.8, r: 180 }, { x: 228.55, y: 303.55, w: 159.55, h: 43.95, r: 0 }, { x: 415.2, y: 239.4, w: 111.9, h: 245.8, r: 180 }, { x: 520.95, y: 305, w: 159.6, h: 39.6, r: 0 }, { x: 750.25, y: 234.95, w: 237.05, h: 245, r: 180 }, { x: 810.45, y: 279.95, w: 88.4, h: 219.9, r: 0 }], //map_24
    [{ x: -1.35, y: 279.95, w: 216.4, h: 219.9, r: 0 }, { x: 252.2, y: 124.2, w: 247.55, h: 57.15, r: 0 }, { x: 378.1, y: 277.65, w: 247.55, h: 57.2, r: 0 }, { x: 692.3, y: 153.75, w: 109.15, h: 347.2, r: 0 }], //map_25
    [{ x: 124.7, y: 307.3, w: 159.75, h: 40.35, r: 0 }, { x: 310.35, y: 239.05, w: 109.25, h: 243.5, r: 180 }, { x: 443.5, y: 307.3, w: 159.7, h: 41.1, r: 0 }, { x: 521.05, y: 242.15, w: 109.2, h: 245.9, r: 180 }, { x: 799.75, y: 352.15, w: 40, h: 40.85, r: 0 }, { x: 1098.35, y: 348.4, w: 132, h: 151.6, r: 0 }], //map_26
    [{ x: 0, y: 348.35, w: 204.05, h: 152.5, r: 0 }, { x: 259.25, y: 233.8, w: 144.5, h: 50.5, r: 0 }, { x: 449.3, y: 91.85, w: 144.15, h: 51.45, r: 0 }, { x: 524, y: 373.35, w: 145.1, h: 51.35, r: 0 }, { x: 713.75, y: 273.95, w: 145.4, h: 52.55, r: 0 }, { x: 898.85, y: 184.45, w: 36.8, h: 187.75, r: 180 }], //map_27
    [{ x: 25.75, y: 184.45, w: 25.75, h: 187.75, r: 180 }, { x: 102.05, y: 275.55, w: 131, h: 51.05, r: 0 }, { x: 351, y: 211.2, w: 62.45, h: 214.25, r: 180 }, { x: 400.85, y: 384.55, w: 393, h: 72.25, r: 0 }, { x: 703.4, y: 303.95, w: 89.15, h: 310, r: 180 }], //map_28
    [{ x: 84.35, y: 286.2, w: 80.7, h: 62.9, r: 0 }, { x: 163.45, y: 226.2, w: 83.15, h: 122.9, r: 0 }, { x: 246.6, y: 165.8, w: 92.95, h: 183.3, r: 0 }, { x: 328.25, y: 104.7, w: 89.65, h: 132.65, r: 0 }, { x: 336.65, y: 396, w: 304.3, h: 105.6, r: 0 }, { x: 641, y: 349.1, w: 275.9, h: 150.65, r: 0 }], //map_29
    [{ x: 0, y: 349.1, w: 204.7, h: 151.6, r: 0 }, { x: 295.2, y: 236.8, w: 79.4, h: 64.15, r: 0 }, { x: 374.6, y: 176.85, w: 83.55, h: 124.1, r: 0 }, { x: 458.15, y: 115.7, w: 92.75, h: 185.25, r: 0 }, { x: 540.2, y: 55.7, w: 88.35, h: 130.8, r: 0 }, { x: 801, y: 205, w: 97.9, h: 65.55, r: 0 }], //map_30
    [{ x: 0, y: 204.95, w: 184.65, h: 66, r: 0 }, { x: 386.55, y: 154.45, w: 86.35, h: 157.85, r: 180 }, { x: 458.25, y: 245.3, w: 145.25, h: 50.05, r: 0 }, { x: 804.9, y: 39.9, w: 96.1, h: 52.15, r: 0 }, { x: 818.4, y: 323.75, w: 82.6, h: 51.35, r: 0 }], //map_31
    [{ x: -0.1, y: 323.75, w: 119.05, h: 51.35, r: 0 }, { x: -0.05, y: 39.85, w: 48.5, h: 52.15, r: 0 }, { x: 163.8, y: 176, w: 144.95, h: 50.85, r: 0 }, { x: 314.55, y: 90.3, w: 86.85, h: 60.3, r: 0 }, { x: 337.7, y: 394.85, w: 305.05, h: 105, r: 0 }, { x: 642.75, y: 348.25, w: 275.4, h: 151.6, r: 0 }] //map_32
    ]
};

exports.default = GameInfo;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Administrator on 2015/12/8.
 */

var StageInfo = {
  id: null,
  stage: null
};

exports.default = StageInfo;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Administrator on 2015/12/8.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _StageInfo = require("../infos/StageInfo");

var _StageInfo2 = _interopRequireDefault(_StageInfo);

var _Point = require("../geom/Point");

var _Point2 = _interopRequireDefault(_Point);

var _Event = require("../events/Event");

var _Event2 = _interopRequireDefault(_Event);

var _MouseEvent = require("../events/MouseEvent");

var _MouseEvent2 = _interopRequireDefault(_MouseEvent);

var _KeyEvent = require("../events/KeyEvent");

var _KeyEvent2 = _interopRequireDefault(_KeyEvent);

var _PlayerItem = require("./item/PlayerItem");

var _PlayerItem2 = _interopRequireDefault(_PlayerItem);

var _MainView = require("./MainView");

var _MainView2 = _interopRequireDefault(_MainView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _initControl = Symbol('_initControl');
var _removeControl = Symbol('_removeControl');
var _initEvent = Symbol('_initEvent');
var _removeEvent = Symbol('_removeEvent');
var _onEnterFrameHandler = Symbol('_onEnterFrameHandler');
var _onKeyDownHandler = Symbol('_onKeyDownHandler');
var _onMouseClickHandler = Symbol('_onMouseClickHandler');
var _checkHit = Symbol('_checkHit');

var MainControl = function () {
    function MainControl(view) {
        _classCallCheck(this, MainControl);

        this._view = view;
        this._gameing = false;
        this[_initControl]();
        this[_initEvent]();
    }

    _createClass(MainControl, [{
        key: "startGame",
        value: function startGame() {
            if (this._gameing) return;
            this._gameing = true;
            this._gameView.showOrHideTips(false);
            this._playerItem.playOrStop(true);
        }
    }, {
        key: "resetGame",
        value: function resetGame() {
            this._frameNum = 0;
            this._speedY = 0;
            this._moveSpeed = 8;
            this._isRot = false;
            //this._pause  = false;
            this._playerItem.rotation = 0;
            this._playerItem.status = _PlayerItem2.default.RUN;
            this._playerItem.setLocation(100, 330);
            this._playerItem.playOrStop(false);
            this._gameView.showOrHideTips(true);
            this._view.viewType = _MainView2.default.GAME;
            this._view.mapView.initMap();
        }
    }, {
        key: "overGame",
        value: function overGame() {
            this._gameing = false;
            this._overView.setScoreTxt(Math.floor(this._frameNum / this._moveSpeed));
            this._view.viewType = _MainView2.default.OVER;
        }
    }, {
        key: "dispose",
        value: function dispose() {
            this[_removeEvent]();
            this[_removeControl]();
        }
    }, {
        key: _initControl,
        value: function value() {
            this._startBtn = this._view.startBtn;
            this._replayBtn = this._view.replayBtn;
            this._moreBtn = this._view.moreBtn;
            this._playerItem = this._view.playerItem;
            this._mapView = this._view.mapView;
            this._gameView = this._view.gameView;
            this._overView = this._view.overView;

            this._view.viewType = _MainView2.default.START;
        }
    }, {
        key: _removeControl,
        value: function value() {
            this._startBtn = null;
            this._replayBtn = null;
            this._moreBtn = null;
            this._playerItem = null;
            this._mapView = null;
            this._gameView = null;
            this._overView = null;
        }
    }, {
        key: _initEvent,
        value: function value() {
            this._view.addEventListener(_Event2.default.ENTER_FRAME, this[_onEnterFrameHandler], this);
            this._startBtn.addEventListener(_MouseEvent2.default.CLICK, this[_onMouseClickHandler], this);
            this._replayBtn.addEventListener(_MouseEvent2.default.CLICK, this[_onMouseClickHandler], this);
            this._moreBtn.addEventListener(_MouseEvent2.default.CLICK, this[_onMouseClickHandler], this);
            _StageInfo2.default.stage.addEventListener(_KeyEvent2.default.KEY_DOWN, this[_onKeyDownHandler], this);
        }
    }, {
        key: _removeEvent,
        value: function value() {
            this._view.removeEventListener(_Event2.default.ENTER_FRAME, this[_onEnterFrameHandler]);
            this._startBtn.removeEventListener(_MouseEvent2.default.CLICK, this[_onMouseClickHandler]);
            this._replayBtn.removeEventListener(_MouseEvent2.default.CLICK, this[_onMouseClickHandler]);
            this._moreBtn.removeEventListener(_MouseEvent2.default.CLICK, this[_onMouseClickHandler]);
            _StageInfo2.default.stage.removeEventListener(_KeyEvent2.default.KEY_DOWN, this[_onKeyDownHandler]);
        }
    }, {
        key: _onEnterFrameHandler,
        value: function value(evt) {
            //if(!this._pause) return;
            if (!this._gameing) return;
            //if(this._frameNum>25)return;//teset
            this._frameNum++;
            this._mapView.updataMap(this._moveSpeed);
            this._playerItem.y = this._playerItem.y + this._speedY;
            this._speedY++;
            this._gameView.setScoreTxt(Math.floor(this._frameNum * this._moveSpeed / 50));
            var playerStatus = this._playerItem.status;
            if (_PlayerItem2.default.DJUMP == playerStatus && this._isRot == false) {
                this._playerItem.rotation = this._playerItem.rotation + 20;
                if (this._playerItem.rotation >= 180) {
                    this._isRot = true;
                    this._playerItem.rotation = 0;
                }
            } else if (_PlayerItem2.default.RUN == playerStatus) {
                this._playerItem.status = _PlayerItem2.default.RUN;
            }
            //return;
            this[_checkHit]();
            if (this._playerItem.x < -this._playerItem.width * .5 || this._playerItem.y > _StageInfo2.default.stage.height + this._playerItem.height * .5) this.overGame();
        }
    }, {
        key: _onKeyDownHandler,
        value: function value(evt) {
            switch (evt.keyCode) {
                case 32:
                    if (_MainView2.default.GAME == this._view.viewType) this.startGame();else this.resetGame();
                    //if(this._gameing) this._pause = !this._pause;
                    break;
                case 38:
                    if (!this._gameing) return;
                    var playerStatus = this._playerItem.status;
                    if (_PlayerItem2.default.DJUMP != playerStatus) {
                        this._playerItem.status = _PlayerItem2.default.RUN == playerStatus ? _PlayerItem2.default.JUMP : _PlayerItem2.default.DJUMP;
                        this._speedY = -11;
                    }
                    break;
            }
        }
    }, {
        key: _onMouseClickHandler,
        value: function value(evt) {
            switch (evt.currentTarget || evt.srcElement) {
                case this._startBtn.div:
                case this._replayBtn.div:
                    this.resetGame();
                    break;
                case this._moreBtn.div:
                    console.log("this._view.moreBtn.div");
                    break;
            }
        }
    }, {
        key: _checkHit,
        value: function value() {
            var i = void 0,
                len = void 0,
                item = void 0,
                items = void 0,
                itemPot = void 0,
                playPot = void 0;
            items = this._mapView.getMapItems();
            playPot = this._playerItem.localToGlobal(new _Point2.default());
            len = items.length;
            for (i = 0; i < len; i++) {
                item = items[i];
                itemPot = item.globalToLocal(playPot);
                if (item.hitTestPoint(itemPot.x + 10, itemPot.y - 20)) {
                    this._playerItem.y = this._playerItem.y - itemPot.y + Math.max(item.getSize().y, 0) + 22;
                    this._speedY = 0;
                    this._playerItem.rotation = 0;
                }
                if (item.hitTestPoint(itemPot.x + 10, itemPot.y + 35)) {
                    this._playerItem.y = this._playerItem.y - itemPot.y - 34;
                    this._speedY = 0;
                    this._playerItem.status = _PlayerItem2.default.RUN;
                    this._isRot = false;
                    this._playerItem.rotation = 0;
                }
                if (item.hitTestPoint(itemPot.x + 27, itemPot.y)) {
                    this._playerItem.x = this._playerItem.x - this._moveSpeed;
                }
            }
        }
    }]);

    return MainControl;
}();

exports.default = MainControl;

},{"../events/Event":9,"../events/KeyEvent":10,"../events/MouseEvent":11,"../geom/Point":12,"../infos/StageInfo":16,"./MainView":18,"./item/PlayerItem":20}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Container2 = require("../display/Container");

var _Container3 = _interopRequireDefault(_Container2);

var _Image = require("../display/Image");

var _Image2 = _interopRequireDefault(_Image);

var _StartView = require("./view/StartView");

var _StartView2 = _interopRequireDefault(_StartView);

var _GameView = require("./view/GameView");

var _GameView2 = _interopRequireDefault(_GameView);

var _OverView = require("./view/OverView");

var _OverView2 = _interopRequireDefault(_OverView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/8.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _initView = Symbol('_initView');
var _removeView = Symbol('_removeView');

var MainView = function (_Container) {
    _inherits(MainView, _Container);

    function MainView() {
        _classCallCheck(this, MainView);

        var _this = _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).call(this));

        _this._type = -1;
        _this[_initView]();
        return _this;
    }

    _createClass(MainView, [{
        key: "dispose",
        value: function dispose() {
            this[_removeView]();
            _get(MainView.prototype.__proto__ || Object.getPrototypeOf(MainView.prototype), "dispose", this).call(this);
        }
    }, {
        key: _initView,
        value: function value() {
            this._bgImg = new _Image2.default("img_bg.jpg", 0, 0, 420, 500);
            this.addChild(this._bgImg);

            this._startView = new _StartView2.default();
            this.addChild(this._startView);

            this._gameView = new _GameView2.default();
            this.addChild(this._gameView);

            this._overView = new _OverView2.default();
            this.addChild(this._overView);
        }
    }, {
        key: _removeView,
        value: function value() {}
    }, {
        key: "gameView",
        get: function get() {
            return this._gameView;
        }
    }, {
        key: "overView",
        get: function get() {
            return this._overView;
        }
    }, {
        key: "mapView",
        get: function get() {
            return this._gameView.mapView;
        }
    }, {
        key: "playerItem",
        get: function get() {
            return this._gameView.playerItem;
        }
    }, {
        key: "startBtn",
        get: function get() {
            return this._startView.startBtn;
        }
    }, {
        key: "replayBtn",
        get: function get() {
            return this._overView.replayBtn;
        }
    }, {
        key: "moreBtn",
        get: function get() {
            return this._overView.moreBtn;
        }
    }, {
        key: "viewType",
        get: function get() {
            return this._type;
        },
        set: function set(type) {
            if (type == this._type) return;
            var list = [this._startView, this._gameView, this._overView];
            for (var i = list.length - 1; i >= 0; i--) {
                list[i].visible = list[i].type == type ? true : false;
            }
            this._bgImg.setSkinPosition(type * 420, 0);
            this._type = type;
        }
    }]);

    return MainView;
}(_Container3.default);

MainView.START = 0;
MainView.GAME = 1;
MainView.OVER = 2;

exports.default = MainView;

},{"../display/Container":3,"../display/Image":4,"./view/GameView":21,"./view/OverView":23,"./view/StartView":24}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Container2 = require("../../display/Container");

var _Container3 = _interopRequireDefault(_Container2);

var _Image = require("../../display/Image");

var _Image2 = _interopRequireDefault(_Image);

var _Point = require("../../geom/Point");

var _Point2 = _interopRequireDefault(_Point);

var _Rectangle = require("../../geom/Rectangle");

var _Rectangle2 = _interopRequireDefault(_Rectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _initView = Symbol('_initView');

var MapItem = function (_Container) {
    _inherits(MapItem, _Container);

    function MapItem(w, h) {
        _classCallCheck(this, MapItem);

        var _this = _possibleConstructorReturn(this, (MapItem.__proto__ || Object.getPrototypeOf(MapItem)).call(this));

        _this.width = Math.ceil(w);
        _this.height = Math.ceil(h);
        _this[_initView]();
        return _this;
    }

    _createClass(MapItem, [{
        key: "updateSize",
        value: function updateSize(w, h) {
            w = Math.ceil(w), h = Math.ceil(h);
            this.width = w;
            this.height = h;
            this._headImg.width = w;
            this._bodyImg.width = w;
            this._bodyImg.height = h - 30;
        }
    }, {
        key: "hitTestPoint",
        value: function hitTestPoint(x, y) {
            var pot = this.getSize();
            var rect = new _Rectangle2.default(Math.min(0, pot.x), Math.min(0, pot.y), Math.abs(pot.x), Math.abs(pot.y));
            return rect.contains(x, y);
        }
    }, {
        key: "getSize",
        value: function getSize() {
            var rad = this._rotation * (Math.PI / 180);
            return new _Point2.default(Math.cos(rad) * this._width * this._scale + Math.sin(rad) * this._height * this._scale, Math.sin(rad) * this._width * this._scale + Math.cos(rad) * this._height * this._scale);
        }
    }, {
        key: _initView,
        value: function value() {
            this._headImg = new _Image2.default("img_obshead.jpg", 0, 0, this._width, 30);
            this._headImg.setSkinRepeat("repeat-x");
            this._headImg.setLocation(0, 0);
            this.addChild(this._headImg);

            this._bodyImg = new _Image2.default("img_obsbody.jpg", 0, 30, this._width, this._height - 30);
            this._bodyImg.setSkinRepeat("repeat");
            this._bodyImg.setLocation(0, 30);
            this.addChild(this._bodyImg);
        }
    }]);

    return MapItem;
}(_Container3.default);

exports.default = MapItem;

},{"../../display/Container":3,"../../display/Image":4,"../../geom/Point":12,"../../geom/Rectangle":13}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Container2 = require("../../display/Container");

var _Container3 = _interopRequireDefault(_Container2);

var _MovieClip = require("../../display/MovieClip");

var _MovieClip2 = _interopRequireDefault(_MovieClip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _initView = Symbol('_initView');

var PlayerItem = function (_Container) {
    _inherits(PlayerItem, _Container);

    function PlayerItem() {
        _classCallCheck(this, PlayerItem);

        var _this = _possibleConstructorReturn(this, (PlayerItem.__proto__ || Object.getPrototypeOf(PlayerItem)).call(this));

        _this._start = -1;
        _this[_initView]();
        return _this;
    }

    _createClass(PlayerItem, [{
        key: "playOrStop",
        value: function playOrStop(bol) {
            bol ? this._movie.gotoAndPlay(0) : this._movie.gotoAndStop(0);
        }
    }, {
        key: _initView,
        value: function value() {
            var that = this;
            this._movie = new _MovieClip2.default("img_player.png", [{ x: 0, y: 0, w: 60, h: 100, time: 2 }, { x: 60, y: 0, w: 60, h: 100, time: 2 }, { x: 120, y: 0, w: 60, h: 100, time: 2 }, { x: 180, y: 0, w: 60, h: 100, time: 2 }, { x: 240, y: 0, w: 60, h: 100, time: 2 }, { x: 300, y: 0, w: 60, h: 100, time: 2 }, { x: 360, y: 0, w: 60, h: 100, time: 2 }, { x: 420, y: 0, w: 60, h: 100, time: 2 }, { x: 480, y: 0, w: 60, h: 100, time: 2 }, { x: 540, y: 0, w: 60, h: 100, time: 2 }, { x: 600, y: 0, w: 60, h: 100, time: 2 }]);
            this._movie.addFrameScript(19, function () {
                that._movie.gotoAndPlay(0);
            });
            this._movie.addFrameScript(21, function () {
                that._movie.gotoAndPlay(20);
            });

            this.addChild(this._movie);
            this.scale = .75;
            this._movie.setLocation(-this._movie.width * .5, -this._movie.height * .5);
            this.status = PlayerItem.RUN;
        }
    }, {
        key: "status",
        get: function get() {
            return this._start;
        },
        set: function set(value) {
            if (value == this._start) return;
            var frame = 0;
            switch (value) {
                case PlayerItem.RUN:
                    frame = 0;
                    break;
                case PlayerItem.JUMP:
                case PlayerItem.DJUMP:
                    frame = 20;
                    break;
            }
            this._movie.gotoAndPlay(frame);
            this._start = value;
        }
    }, {
        key: "width",
        get: function get() {
            return 100 * this._scale;
        }
    }, {
        key: "height",
        get: function get() {
            return 100 * this._scale;
        }
    }]);

    return PlayerItem;
}(_Container3.default);

PlayerItem.RUN = 0;
PlayerItem.JUMP = 1;
PlayerItem.DJUMP = 2;

exports.default = PlayerItem;

},{"../../display/Container":3,"../../display/MovieClip":5}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Container2 = require("../../display/Container");

var _Container3 = _interopRequireDefault(_Container2);

var _Image = require("../../display/Image");

var _Image2 = _interopRequireDefault(_Image);

var _Text = require("../../display/Text");

var _Text2 = _interopRequireDefault(_Text);

var _PlayerItem = require("../item/PlayerItem");

var _PlayerItem2 = _interopRequireDefault(_PlayerItem);

var _MapView = require("./MapView");

var _MapView2 = _interopRequireDefault(_MapView);

var _MainView = require("../MainView");

var _MainView2 = _interopRequireDefault(_MainView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _initView = Symbol('_initView');
var _removeView = Symbol('_removeView');

var GameView = function (_Container) {
    _inherits(GameView, _Container);

    function GameView() {
        _classCallCheck(this, GameView);

        var _this = _possibleConstructorReturn(this, (GameView.__proto__ || Object.getPrototypeOf(GameView)).call(this));

        _this[_initView]();
        return _this;
    }

    _createClass(GameView, [{
        key: "dispose",
        value: function dispose() {
            this[_removeView]();
            _get(GameView.prototype.__proto__ || Object.getPrototypeOf(GameView.prototype), "dispose", this).call(this);
        }
    }, {
        key: "showOrHideTips",
        value: function showOrHideTips(bol) {
            this._tips.visible = bol;
            this._scoreTxt.visible = !bol;
        }
    }, {
        key: "setScoreTxt",
        value: function setScoreTxt(value) {
            this._scoreTxt.text = "当前分数为：" + value;
        }
    }, {
        key: _initView,
        value: function value() {
            this._mapView = new _MapView2.default();
            this.addChild(this._mapView);

            this._playerItem = new _PlayerItem2.default();
            this.addChild(this._playerItem);
            this._playerItem.setLocation(100, 330);

            this._scoreTxt = new _Text2.default();
            this.addChild(this._scoreTxt);
            this._scoreTxt.width = 400;
            this._scoreTxt.height = 30;
            this._scoreTxt.setLocation(20, 20);

            this._tips = new _Image2.default("img_tips.png", 0, 0, 245, 112);
            this.addChild(this._tips);
            this._tips.setLocation(83, 113);
        }
    }, {
        key: _removeView,
        value: function value() {}
    }, {
        key: "type",
        get: function get() {
            return _MainView2.default.GAME;
        }
    }, {
        key: "mapView",
        get: function get() {
            return this._mapView;
        }
    }, {
        key: "playerItem",
        get: function get() {
            return this._playerItem;
        }
    }]);

    return GameView;
}(_Container3.default);

exports.default = GameView;

},{"../../display/Container":3,"../../display/Image":4,"../../display/Text":7,"../MainView":18,"../item/PlayerItem":20,"./MapView":22}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Container2 = require("../../display/Container");

var _Container3 = _interopRequireDefault(_Container2);

var _GameInfo = require("../../infos/GameInfo");

var _GameInfo2 = _interopRequireDefault(_GameInfo);

var _MapItem = require("../item/MapItem");

var _MapItem2 = _interopRequireDefault(_MapItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _initView = Symbol('_initView');
var _updataMapByIndex = Symbol('_updataMapByIndex');

var MapView = function (_Container) {
    _inherits(MapView, _Container);

    function MapView() {
        _classCallCheck(this, MapView);

        var _this = _possibleConstructorReturn(this, (MapView.__proto__ || Object.getPrototypeOf(MapView)).call(this));

        _this._flag = false;
        _this[_initView]();
        return _this;
    }

    _createClass(MapView, [{
        key: "initMap",
        value: function initMap() {
            this._flag = false;
            this._frameNum = 0;
            this._frameCount = _GameInfo2.default.mapInfo.length;
            this[_updataMapByIndex](this._mapA, this._frameNum);
            this[_updataMapByIndex](this._mapB, this._frameNum);
            this._mapA.x = 0;
            this._mapB.x = this._mapA.width;
        }
    }, {
        key: "updataMap",
        value: function updataMap(speed) {
            this._mapA.x = this._mapA.x - speed;
            this._mapB.x = this._mapB.x - speed;
            if (this._mapA.x < 0 && this._flag == false) {
                this._frameNum = this._frameNum + 1 < this._frameCount ? this._frameNum + 1 : 0;
                this[_updataMapByIndex](this._mapB, this._frameNum);
                this._mapB.x = this._mapA.x + this._mapA.width;
                this._flag = true;
            }
            if (this._mapB.x < 0 && this._flag == true) {
                this._frameNum = this._frameNum + 1 < this._frameCount ? this._frameNum + 1 : 0;
                this[_updataMapByIndex](this._mapA, this._frameNum);
                this._mapA.x = this._mapB.x + this._mapB.width;
                this._flag = false;
            }
            //this._mapTxt.text = "当前地图索引为："+(this._frameNum-1);
        }
    }, {
        key: "getMapItems",
        value: function getMapItems() {
            var items = [];
            items = items.concat(this._mapA.children);
            items = items.concat(this._mapB.children);
            return items;
        }
    }, {
        key: _initView,
        value: function value() {
            this._mapA = new _Container3.default();
            this._mapB = new _Container3.default();
            this.addChild(this._mapA);
            this.addChild(this._mapB);

            //this._mapTxt = new display.Text();
            //this.addChild(this._mapTxt);
            //this._mapTxt.width = 300;
            //this._mapTxt.text = "当前地图索引为："+0;
            //this._mapTxt.setLocation(10, 30);
        }
    }, {
        key: _updataMapByIndex,
        value: function value(map, index) {
            var infos = _GameInfo2.default.mapInfo[index];
            var infosL = infos.length;
            var childL = map.numChildren;
            var len = infosL > childL ? infosL : childL;
            var child = void 0,
                info = void 0;
            var tmpX = 0,
                tmpY = 0,
                minX = 0,
                maxX = 0,
                minY = 0,
                maxY = 0,
                rad = 0;
            for (var i = 0; i < len; i++) {
                child = map.getChildAt(i);
                info = infos[i];
                if (info) {
                    if (child) {
                        child.updateSize(info.w, info.h);
                    } else {
                        child = new _MapItem2.default(info.w, info.h);
                        map.addChild(child);
                    }
                    child.setLocation(info.x, info.y);
                    child.rotation = info.r;
                    rad = info.r * (Math.PI / 180);
                    tmpX = info.x + (Math.cos(rad) * info.w + Math.sin(rad) * info.h);
                    tmpY = info.y + (Math.sin(rad) * info.w + Math.cos(rad) * info.h);
                    minX = Math.min(minX, tmpX);
                    maxX = Math.max(maxX, tmpX);
                    minY = Math.min(minY, tmpY);
                    maxY = Math.max(maxY, tmpY);
                } else if (child) {
                    map.removeChild(child);
                    child && child.dispose();
                    child = null;
                    i--;
                }
            }
            map.width = (maxX - minX) * map.scale;
            map.height = (maxY - minY) * map.scale;
        }
    }]);

    return MapView;
}(_Container3.default);

exports.default = MapView;

},{"../../display/Container":3,"../../infos/GameInfo":15,"../item/MapItem":19}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Button = require("../../display/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Container2 = require("../../display/Container");

var _Container3 = _interopRequireDefault(_Container2);

var _Text = require("../../display/Text");

var _Text2 = _interopRequireDefault(_Text);

var _MainView = require("../MainView");

var _MainView2 = _interopRequireDefault(_MainView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _initView = Symbol('_initView');
var _removeView = Symbol('_removeView');

var OverView = function (_Container) {
    _inherits(OverView, _Container);

    function OverView() {
        _classCallCheck(this, OverView);

        var _this = _possibleConstructorReturn(this, (OverView.__proto__ || Object.getPrototypeOf(OverView)).call(this));

        _this[_initView]();
        return _this;
    }

    _createClass(OverView, [{
        key: "dispose",
        value: function dispose() {
            this[_removeView]();
            _get(OverView.prototype.__proto__ || Object.getPrototypeOf(OverView.prototype), "dispose", this).call(this);
        }
    }, {
        key: "setScoreTxt",
        value: function setScoreTxt(value) {
            this._scoreTxt.text = "你获得的分数为：" + value;
        }
    }, {
        key: _initView,
        value: function value() {
            this._replayBtn = new _Button2.default("img_btn.png", 143, 64, 0, 76, _Button2.default.SCALE);
            this.addChild(this._replayBtn);
            this._replayBtn.setLocation(56, 370);

            this._moreBtn = new _Button2.default("img_btn.png", 143, 64, 0, 140, _Button2.default.SCALE);
            this.addChild(this._moreBtn);
            this._moreBtn.setLocation(225, 370);

            this._scoreTxt = new _Text2.default();
            this.addChild(this._scoreTxt);
            this._scoreTxt.setLocation(120, 200);
            this._scoreTxt.width = 300;
            this._scoreTxt.height = 40;
        }
    }, {
        key: _removeView,
        value: function value() {}
    }, {
        key: "type",
        get: function get() {
            return _MainView2.default.OVER;
        }
    }, {
        key: "replayBtn",
        get: function get() {
            return this._replayBtn;
        }
    }, {
        key: "moreBtn",
        get: function get() {
            return this._moreBtn;
        }
    }]);

    return OverView;
}(_Container3.default);

exports.default = OverView;

},{"../../display/Button":2,"../../display/Container":3,"../../display/Text":7,"../MainView":18}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Button = require("../../display/Button");

var _Button2 = _interopRequireDefault(_Button);

var _Container2 = require("../../display/Container");

var _Container3 = _interopRequireDefault(_Container2);

var _MainView = require("../MainView");

var _MainView2 = _interopRequireDefault(_MainView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Administrator on 2015/12/21.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _initView = Symbol('_initView');
var _removeView = Symbol('_removeView');

var StartView = function (_Container) {
    _inherits(StartView, _Container);

    function StartView() {
        _classCallCheck(this, StartView);

        var _this = _possibleConstructorReturn(this, (StartView.__proto__ || Object.getPrototypeOf(StartView)).call(this));

        _this[_initView]();
        return _this;
    }

    _createClass(StartView, [{
        key: "dispose",
        value: function dispose() {
            this[_removeView]();
            _get(StartView.prototype.__proto__ || Object.getPrototypeOf(StartView.prototype), "dispose", this).call(this);
        }
    }, {
        key: _initView,
        value: function value() {
            this._startBtn = new _Button2.default("img_btn.png", 173, 76, 0, 0, _Button2.default.SCALE);
            this.addChild(this._startBtn);
            this._startBtn.setLocation(127, 383);
        }
    }, {
        key: _removeView,
        value: function value() {}
    }, {
        key: "type",
        get: function get() {
            return _MainView2.default.START;
        }
    }, {
        key: "startBtn",
        get: function get() {
            return this._startBtn;
        }
    }]);

    return StartView;
}(_Container3.default);

exports.default = StartView;

},{"../../display/Button":2,"../../display/Container":3,"../MainView":18}],25:[function(require,module,exports){
"use strict";

var _ParkourGame = require("./com/ParkourGame");

var _ParkourGame2 = _interopRequireDefault(_ParkourGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _ParkourGame2.default("ParkourDiv", "assets/", 420, 500, 30);

},{"./com/ParkourGame":1}]},{},[25]);
