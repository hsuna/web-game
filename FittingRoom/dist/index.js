(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AssetsManager = require("./managers/AssetsManager");

var _AssetsManager2 = _interopRequireDefault(_AssetsManager);

var _StageInfo = require("./infos/StageInfo");

var _StageInfo2 = _interopRequireDefault(_StageInfo);

var _MainView = require("./modules/MainView");

var _MainView2 = _interopRequireDefault(_MainView);

var _Stage = require("./display/Stage");

var _Stage2 = _interopRequireDefault(_Stage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FittingRoom = function () {
    function FittingRoom(id, w, h, color, assets) {
        _classCallCheck(this, FittingRoom);

        _AssetsManager2.default.getInstance().assert = assets || "";

        _StageInfo2.default.stage = new _Stage2.default(id, w, h, color);
        _StageInfo2.default.id = id;
        _StageInfo2.default.stageWidth = w;
        _StageInfo2.default.stageHeight = h;
        _StageInfo2.default.stage.startTick(50);

        this._view = new _MainView2.default();
        _StageInfo2.default.stage.addChild(this._view);
    }

    _createClass(FittingRoom, [{
        key: "setPhotoByIndex",
        value: function setPhotoByIndex() {
            var _view;

            (_view = this._view).setPhotoByIndex.apply(_view, arguments);
        }
    }, {
        key: "openOrClose",
        value: function openOrClose() {
            var _view2;

            (_view2 = this._view).openOrClose.apply(_view2, arguments);
        }
    }]);

    return FittingRoom;
}();

exports.default = FittingRoom;

},{"./display/Stage":6,"./infos/StageInfo":7,"./managers/AssetsManager":8,"./modules/MainView":10}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Container2 = require("./Container");

var _Container3 = _interopRequireDefault(_Container2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bitmap = function (_Container) {
    _inherits(Bitmap, _Container);

    function Bitmap(skin) {
        _classCallCheck(this, Bitmap);

        var _this = _possibleConstructorReturn(this, (Bitmap.__proto__ || Object.getPrototypeOf(Bitmap)).call(this));

        _this._orgskin = skin;
        _this.image = document.createElement("img");
        _this.image.src = _this._orgskin;
        return _this;
    }

    _createClass(Bitmap, [{
        key: "draw",
        value: function draw(ctx) {
            ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.image.width * this._scaleX, this.image.height * this._scaleY);
            _get(Bitmap.prototype.__proto__ || Object.getPrototypeOf(Bitmap.prototype), "draw", this).call(this, ctx);
        }
    }, {
        key: "width",
        get: function get() {
            return Math.abs(this.image.width * this._scaleX);
        },
        set: function set(value) {
            this._width = value;
        }
    }, {
        key: "height",
        get: function get() {
            return Math.abs(this.image.height * this._scaleY);
        },
        set: function set(value) {
            this._height = value;
        }
    }]);

    return Bitmap;
}(_Container3.default);

exports.default = Bitmap;

},{"./Container":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DisplayObject2 = require("./DisplayObject");

var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_DisplayObject) {
    _inherits(Container, _DisplayObject);

    function Container() {
        _classCallCheck(this, Container);

        var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));

        _this._children = [];
        return _this;
    }

    _createClass(Container, [{
        key: "addChild",
        value: function addChild(child) {
            this.addChildAt(child, this.numChildren);
        }
    }, {
        key: "addChildAt",
        value: function addChildAt(child, index) {
            this._children.splice(index, 1, child);
            child.parent = this;
        }
    }, {
        key: "removeChild",
        value: function removeChild(child) {
            var index = this._children.indexOf(child);
            return this.removeChildAt(index);
        }
    }, {
        key: "removeChildAt",
        value: function removeChildAt(index) {
            var child = this._children.splice(index, 1)[0];
            child.parent = null;
            return child;
        }
    }, {
        key: "removeFromParent",
        value: function removeFromParent(dispose) {
            dispose = dispose || false;
            if (this._parent) this._parent.removeChild(this);
            if (dispose) this.dispose();
        }
    }, {
        key: "draw",
        value: function draw(ctx) {
            var child = void 0;
            for (var i = 0, len = this._children.length; i < len; i++) {
                var _child = this._children[i];
                ctx.save();
                if (_child) {
                    ctx.translate(_child.x, _child.y);
                    if (_child.mask) {
                        ctx.save();
                        ctx.globalAlpha = 0;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.rect(_child.mask.stageX - _child.stageX, _child.mask.stageY - _child.stageY, _child.mask.width, _child.mask.height);
                        ctx.stroke();
                        ctx.clip();
                        ctx.globalAlpha = 1;
                        _child.draw(ctx);
                        ctx.restore();
                    } else _child.draw(ctx);
                }
                ctx.restore();
            }
        }
    }, {
        key: "dispose",
        value: function dispose() {
            var child = void 0;
            var childs = this._children;
            while (childs && childs.length > 0) {
                child = childs[0];
                child && child.dispose();
            }
            this.removeFromParent();
        }
    }, {
        key: "numChildren",
        get: function get() {
            return this._children.length;
        }
    }]);

    return Container;
}(_DisplayObject3.default);

exports.default = Container;

},{"./DisplayObject":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var c_instance = 0;

var DisplayObject = function () {
    function DisplayObject() {
        _classCallCheck(this, DisplayObject);

        this._id = "instance" + ++c_instance;
        this._parent = null;
        this._x = this._y = this._width = this._height = this._rotation = 0.0;
        this._alpha = this._scaleX = this._scaleY = 1.0;
        this._mask = null;
    }

    _createClass(DisplayObject, [{
        key: "setLocation",
        value: function setLocation(valx, valy) {
            this.x = valx;
            this.y = valy;
        }
    }, {
        key: "id",
        get: function get() {
            return this._id;
        }
    }, {
        key: "x",
        get: function get() {
            return this._x;
        },
        set: function set(value) {
            this._x = value;
        }
    }, {
        key: "y",
        get: function get() {
            return this._y;
        },
        set: function set(value) {
            this._y = value;
        }
    }, {
        key: "width",
        get: function get() {
            return this._width;
        },
        set: function set(value) {
            this._width = value;
        }
    }, {
        key: "height",
        get: function get() {
            return this._height;
        },
        set: function set(value) {
            this._height = value;
        }
    }, {
        key: "alpha",
        get: function get() {
            return this._alpha;
        },
        set: function set(value) {
            this._alpha = value;
        }
    }, {
        key: "rotation",
        get: function get() {
            return this._rotation;
        },
        set: function set(value) {
            this._rotation = value;
        }
    }, {
        key: "scaleX",
        get: function get() {
            return this._scaleX;
        },
        set: function set(value) {
            this._scaleX = value;
        }
    }, {
        key: "scaleY",
        get: function get() {
            return this._scaleY;
        },
        set: function set(value) {
            this._scaleY = value;
        }
    }, {
        key: "stageX",
        get: function get() {
            var stageX = 0;
            var target = this;
            while (target) {
                stageX += target.x;
                target = target.parent;
            }
            return stageX;
        }
    }, {
        key: "stageY",
        get: function get() {
            var stageY = 0;
            var target = this;
            while (target) {
                stageY += target.y;
                target = target.parent;
            }
            return stageY;
        }
    }, {
        key: "mask",
        get: function get() {
            return this._mask;
        },
        set: function set(value) {
            this._mask = value;
        }
    }, {
        key: "parent",
        get: function get() {
            return this._parent;
        },
        set: function set(value) {
            this._parent = value;
        }
    }]);

    return DisplayObject;
}();

DisplayObject.stage = null;

exports.default = DisplayObject;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Bitmap2 = require("./Bitmap");

var _Bitmap3 = _interopRequireDefault(_Bitmap2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieClip = function (_Bitmap) {
    _inherits(MovieClip, _Bitmap);

    function MovieClip(skin) {
        _classCallCheck(this, MovieClip);

        var _this = _possibleConstructorReturn(this, (MovieClip.__proto__ || Object.getPrototypeOf(MovieClip)).call(this, skin));

        _this._curFrame = 0;
        _this._animatInfo = null;
        return _this;
    }

    _createClass(MovieClip, [{
        key: "draw",
        value: function draw(ctx) {
            if (this._animatInfo) {
                var frame = void 0;
                var frames = this._animatInfo.frames;
                for (var i = 0, len = frames.length; i < len; i++) {
                    frame = frames[i];
                    if (this._curFrame < frame.frame) break;
                }
                if (frame) {
                    for (var attr in frame.attrs) {
                        this[attr] = frame.attrs[attr];
                    }
                }
                if (this._curFrame + 1 < this._animatInfo.tolFrame) this._curFrame++;else this._curFrame = 0;
            }
            _get(MovieClip.prototype.__proto__ || Object.getPrototypeOf(MovieClip.prototype), "draw", this).call(this, ctx);
        }
    }, {
        key: "addAnimat",
        value: function addAnimat(info) {
            this._animatInfo = info;
            this._curFrame = 0;
        }
    }, {
        key: "removeAnimat",
        value: function removeAnimat(info) {
            this._animatInfo = null;
        }
    }, {
        key: "dispose",
        value: function dispose() {
            this._animatInfo = null;
            _get(MovieClip.prototype.__proto__ || Object.getPrototypeOf(MovieClip.prototype), "dispose", this).call(this);
        }
    }]);

    return MovieClip;
}(_Bitmap3.default);

exports.default = MovieClip;

},{"./Bitmap":2}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Container2 = require("./Container");

var _Container3 = _interopRequireDefault(_Container2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stage = function (_Container) {
    _inherits(Stage, _Container);

    function Stage(id, width, height, backgroundcolor) {
        _classCallCheck(this, Stage);

        var _this = _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this));

        _this._canvasId = id;
        _this._canvas = document.getElementById(_this._canvasId);
        _this._canvas.width = width;
        _this._canvas.height = height;
        _this._canvas.style.backgroundColor = backgroundcolor;
        _this._ctx2d = _this._canvas.getContext("2d");
        _this._tick = -1;
        return _this;
    }

    _createClass(Stage, [{
        key: "dispose",
        value: function dispose() {
            this.stopTick();
            _get(Stage.prototype.__proto__ || Object.getPrototypeOf(Stage.prototype), "dispose", this).call(this);
        }
    }, {
        key: "clear",
        value: function clear() {
            if (!this._ctx2d) {
                return;
            }
            this._ctx2d.setTransform(1, 0, 0, 1, 0, 0);
            this._ctx2d.clearRect(0, 0, this._canvas.width + 1, this._canvas.height + 1);
        }
    }, {
        key: "startTick",
        value: function startTick(value) {
            if (-1 != this._tick) return;
            this._tick = setInterval(function () {
                this.clear();
                this.draw(this._ctx2d);
            }.bind(this), value);
        }
    }, {
        key: "stopTick",
        value: function stopTick() {
            if (-1 == this._tick) return;
            clearInterval(this._tick);
            this._tick = -1;
        }
    }, {
        key: "canvasId",
        get: function get() {
            return this._canvasId;
        }
    }, {
        key: "canvas",
        get: function get() {
            return this._canvas;
        }
    }, {
        key: "ctx2d",
        get: function get() {
            return this._ctx2d;
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
var StageInfo = {
    id: null,
    stage: null,
    stageWidth: 0,
    stageHeight: 0
};

exports.default = StageInfo;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//单例
var __single = Symbol('single');

var AssetsManager = function () {
    function AssetsManager(single) {
        _classCallCheck(this, AssetsManager);

        if (single != __single) {
            throw new Error('Singleton is a singleton.');
        }
        this._instance = null;

        this._assert = "";
        this._images = "";
    }

    _createClass(AssetsManager, [{
        key: 'assert',
        set: function set(value) {
            this._assert = value;
            this._images = value + 'images/';
        }
    }, {
        key: 'images',
        get: function get() {
            return this._images;
        }
    }], [{
        key: 'getInstance',
        value: function getInstance() {
            return this._instance || (this._instance = new AssetsManager(__single));
        }
    }]);

    return AssetsManager;
}();

exports.default = AssetsManager;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _runTween = Symbol('_runTween');

//单例
var __single = Symbol('single');

var TIME_DIFF = 10;

var TweenManager = function () {
    function TweenManager(single) {
        var _this = this;

        _classCallCheck(this, TweenManager);

        if (single != __single) {
            throw new Error('Singleton is a singleton.');
        }
        this._instance = null;

        this._target = {};
        this._tweenId = setInterval(function (_) {
            return _this[_runTween]();
        }, TIME_DIFF);
    }

    _createClass(TweenManager, [{
        key: 'addTween',
        value: function addTween(target, time, attrs, completeHandler) {
            if (!target) return;
            var oldattrs = {};
            for (var attr in attrs) {
                oldattrs[attr] = target[attr];
            }
            this._target[target.id] = {
                target: target,
                curTime: 0,
                time: time,
                attrs: attrs,
                oldattrs: oldattrs,
                completeHandler: completeHandler
            };
        }
    }, {
        key: 'removeTween',
        value: function removeTween(target, isFinish) {
            var info = this._target[target.id];
            if (!info) return;
            if (isFinish) {
                for (var attr in info.attrs) {
                    target[attr] = info.attrs[attr];
                }
            }
            delete this._target[target.id];
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            clearInterval(this._tweenId);
        }
    }, {
        key: _runTween,
        value: function value() {
            var remove = [];
            var target, info, ratio;
            for (var key in this._target) {
                info = this._target[key];
                target = info.target;
                info.curTime += TIME_DIFF;
                ratio = info.curTime / info.time;
                if (ratio >= 1) ratio = 1;
                for (var attr in info.attrs) {
                    target[attr] = (info.attrs[attr] - info.oldattrs[attr]) * ratio + info.oldattrs[attr];
                }
                if (1 == ratio) {
                    remove.push(info);
                }
            }
            for (var i = 0, len = remove.length; i < len; i++) {
                info = remove[i];
                var completeCall = info.completeHandler;
                this.removeTween(info.target);
                completeCall && completeCall.call();
            }
        }
    }], [{
        key: 'getInstance',
        value: function getInstance() {
            return this._instance || (this._instance = new TweenManager(__single));
        }
    }]);

    return TweenManager;
}();

exports.default = TweenManager;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _MyContainer2 = require("../uis/MyContainer");

var _MyContainer3 = _interopRequireDefault(_MyContainer2);

var _TweenManager = require("../managers/TweenManager");

var _TweenManager2 = _interopRequireDefault(_TweenManager);

var _MyImage = require("../uis/MyImage");

var _MyImage2 = _interopRequireDefault(_MyImage);

var _MyMovieClip = require("../uis/MyMovieClip");

var _MyMovieClip2 = _interopRequireDefault(_MyMovieClip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PHOTO_W = 345;
var PHOTO_H = 631;

var _initView = Symbol('_initView');

var MainView = function (_MyContainer) {
    _inherits(MainView, _MyContainer);

    function MainView() {
        _classCallCheck(this, MainView);

        var _this = _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).call(this));

        _this._lastIndex = -1;
        _this[_initView]();
        return _this;
    }

    _createClass(MainView, [{
        key: "setPhotoByIndex",
        value: function setPhotoByIndex(index, step, backCall) {
            if (index > 2 || index < 0) return;
            if (index == this._lastIndex) return;
            var newX = index * -PHOTO_W + 147;
            step = undefined != step ? step : true;
            if (step) {
                _TweenManager2.default.getInstance().addTween(this._photoSp, 200, { x: newX }, backCall);
                _TweenManager2.default.getInstance().addTween(this._shanowSp, 200, { x: newX });
            } else {
                this._photoSp.x = newX;
                this._shanowSp.x = newX;
            }
            this._lastIndex = index;
        }
    }, {
        key: "openOrClose",
        value: function openOrClose(bol, backCall) {
            if (bol) {
                _TweenManager2.default.getInstance().addTween(this._curtainImg, 160, { x: 423, scaleX: 0.2 }, backCall);
            } else {
                _TweenManager2.default.getInstance().addTween(this._curtainImg, 160, { x: 147, scaleX: 1 }, backCall);
            }
        }
    }, {
        key: "dispose",
        value: function dispose() {
            _TweenManager2.default.getInstance().removeTween(this._photoSp);
            _TweenManager2.default.getInstance().removeTween(this._shanowSp);
            _get(MainView.prototype.__proto__ || Object.getPrototypeOf(MainView.prototype), "dispose", this).call(this);
        }
    }, {
        key: _initView,
        value: function value() {
            this._bg = new _MyImage2.default("img_bg.jpg");
            this.addChild(this._bg);

            this._photoSp = new _MyContainer3.default();
            this.addChild(this._photoSp);
            this._photoSp.setLocation(147, 110);
            this._photoSp.mask = {
                stageX: 147,
                stageY: 107,
                width: PHOTO_W,
                height: PHOTO_H + 70
            };

            this._shanowSp = new _MyContainer3.default();
            this.addChild(this._shanowSp);
            this._shanowSp.setLocation(147, 110);

            this._curtainImg = new _MyImage2.default("img_curtain.png");
            this.addChild(this._curtainImg);
            this._curtainImg.setLocation(147, 107);
            this._shanowSp.mask = this._curtainImg;

            this._leftImg = new _MyMovieClip2.default("img_arrow.png");
            this.addChild(this._leftImg);
            this._leftImg.scaleX = -1;
            this._leftImg.setLocation(286, 804);
            this._leftImg.addAnimat({
                tolFrame: 8,
                frames: [{ frame: 0, attrs: { x: 286 } }, { frame: 1, attrs: { x: 284 } }, { frame: 2, attrs: { x: 282 } }, { frame: 3, attrs: { x: 280 } }, { frame: 4, attrs: { x: 278 } }, { frame: 5, attrs: { x: 280 } }, { frame: 6, attrs: { x: 282 } }, { frame: 7, attrs: { x: 284 } }]
            });

            this._rightImg = new _MyMovieClip2.default("img_arrow.png");
            this.addChild(this._rightImg);
            this._rightImg.setLocation(354, 804);
            this._rightImg.addAnimat({
                tolFrame: 8,
                frames: [{ frame: 0, attrs: { x: 354 } }, { frame: 1, attrs: { x: 356 } }, { frame: 2, attrs: { x: 358 } }, { frame: 3, attrs: { x: 360 } }, { frame: 4, attrs: { x: 362 } }, { frame: 5, attrs: { x: 360 } }, { frame: 6, attrs: { x: 358 } }, { frame: 7, attrs: { x: 356 } }]
            });

            this._personImg = new _MyImage2.default("img_person.png");
            this.addChild(this._personImg);
            this._personImg.setLocation(0, 576);

            var list = [{ x: 0.4, y: 9 }, { x: 71.3, y: 1 }, { x: 100.3, y: 3 }];
            var photo = void 0;
            var shanow = void 0;
            for (var i = 0; i < list.length; i++) {
                photo = new _MyImage2.default("img_photo" + i + ".png");
                this._photoSp.addChild(photo);
                photo.setLocation(list[i].x + PHOTO_W * i, list[i].y);

                shanow = new _MyImage2.default("img_shanow" + i + ".png");
                this._shanowSp.addChild(shanow);
                shanow.setLocation(list[i].x + PHOTO_W * i, list[i].y);
            }
        }
    }]);

    return MainView;
}(_MyContainer3.default);

exports.default = MainView;

},{"../managers/TweenManager":9,"../uis/MyContainer":11,"../uis/MyImage":12,"../uis/MyMovieClip":13}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Container2 = require("../display/Container");

var _Container3 = _interopRequireDefault(_Container2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyContainer = function (_Container) {
    _inherits(MyContainer, _Container);

    function MyContainer() {
        _classCallCheck(this, MyContainer);

        return _possibleConstructorReturn(this, (MyContainer.__proto__ || Object.getPrototypeOf(MyContainer)).call(this));
    }

    return MyContainer;
}(_Container3.default);

exports.default = MyContainer;

},{"../display/Container":3}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Bitmap2 = require("../display/Bitmap");

var _Bitmap3 = _interopRequireDefault(_Bitmap2);

var _AssetsManager = require("../managers/AssetsManager");

var _AssetsManager2 = _interopRequireDefault(_AssetsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyImage = function (_Bitmap) {
    _inherits(MyImage, _Bitmap);

    function MyImage(skin) {
        _classCallCheck(this, MyImage);

        skin = _AssetsManager2.default.getInstance().images + skin;
        return _possibleConstructorReturn(this, (MyImage.__proto__ || Object.getPrototypeOf(MyImage)).call(this, skin));
    }

    return MyImage;
}(_Bitmap3.default);

exports.default = MyImage;

},{"../display/Bitmap":2,"../managers/AssetsManager":8}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MovieClip2 = require("../display/MovieClip");

var _MovieClip3 = _interopRequireDefault(_MovieClip2);

var _AssetsManager = require("../managers/AssetsManager");

var _AssetsManager2 = _interopRequireDefault(_AssetsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyMovieClip = function (_MovieClip) {
    _inherits(MyMovieClip, _MovieClip);

    function MyMovieClip(skin) {
        _classCallCheck(this, MyMovieClip);

        skin = _AssetsManager2.default.getInstance().images + skin;
        return _possibleConstructorReturn(this, (MyMovieClip.__proto__ || Object.getPrototypeOf(MyMovieClip)).call(this, skin));
    }

    return MyMovieClip;
}(_MovieClip3.default);

exports.default = MyMovieClip;

},{"../display/MovieClip":5,"../managers/AssetsManager":8}],14:[function(require,module,exports){
"use strict";

var _FittingRoom = require("./com/FittingRoom");

var _FittingRoom2 = _interopRequireDefault(_FittingRoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = 0;
var fittingRoom = new _FittingRoom2.default("canvas", 640, 1008, "#FFFFFF", "assets/");
fittingRoom.setPhotoByIndex(2, false);
fittingRoom.openOrClose(true);
document.addEventListener("click", onClickHandler);

function onClickHandler(evt) {
    index++;
    if (index > 2) index = 0;
    fittingRoom.openOrClose(false, function () {
        fittingRoom.setPhotoByIndex(index, true, function () {
            fittingRoom.openOrClose(true);
        });
    });
}

},{"./com/FittingRoom":1}]},{},[14]);
