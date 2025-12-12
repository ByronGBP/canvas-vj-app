webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_canvas_page_canvas_page_component__ = __webpack_require__("../../../../../src/app/pages/canvas-page/canvas-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__pages_canvas_page_canvas_page_component__["a" /* CanvasPageComponent */] },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_canvas_page_canvas_page_component__["a" /* CanvasPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/canvas-page/canvas-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#canvas-container {\n  width: 100vw;\n  height: 100vh;\n  font-family: Futura, sans-serif;\n}\n\n#fire-canvas {\n  position: absolute;\n  z-index: 21;\n  width: 100vw;\n  height: 100vh;\n}\n\n#recursive-draw {\n  position: absolute;\n  z-index: 11;\n  width: 100vw;\n  height: 100vh;\n}\n\n#canvas {\n  position: absolute;\n  z-index: 5;\n  width: 100vw;\n  height: 100vh;\n}\n\n#piano-canvas {\n  position: absolute;\n  z-index: 4;\n  width: 100vw;\n  height: 100vh;\n}\n\n#guitar-canvas {\n  position: absolute;\n  z-index: 3;\n  width: 100vw;\n  height: 100vh;\n}\n\n#drums-canvas {\n  position: absolute;\n  z-index: 2;\n  width: 100vw;\n  height: 100vh;\n}\n\n#bg-canvas {\n  position: absolute;\n  z-index: 1;\n  width: 100vw;\n  height: 100vh;\n  background: black;\n}\n\n#text {\n  opacity: 0;\n  position: absolute;\n  min-height: 100vh;\n  width: 100vw;\n  z-index: 10;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 8vmin;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n\n\n.controls-container {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  padding: 30px;\n  color: #fff;\n  z-index: 100;\n}\n\n.controls-container ul {\n  margin-bottom: 20px;\n  border: 1px solid white;\n  padding: 20px;\n}\n\n.controls-container li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.controls-container li:first-child {\n  margin-bottom: 20px;\n}\n\n.controls-container li span {\n  margin-left: 50px;\n}\n\n.controls-container button {\n  color: white;\n  background-color: transparent;\n  padding: 10px 20px;\n  border-radius: 1px;\n  border-color: white;\n  font-family: inherit;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/canvas-page/canvas-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"canvas-container\">\n\n  <canvas id=\"bg-canvas\"></canvas>\n  <canvas id=\"drums-canvas\"></canvas>\n  <canvas id=\"guitar-canvas\"></canvas>\n  <canvas id=\"piano-canvas\"></canvas>\n  <canvas id=\"canvas\"></canvas>\n  <canvas id=\"fire-canvas\"></canvas>\n  <canvas id=\"recursive-draw\"></canvas>\n  <div id=\"text\">\n    {{text}}\n  </div>\n  <div class=\"controls-container\">\n    <ul [@expandCollapse]=\"expanded ? 'expanded' : 'collapsed'\">\n      <li>Play any song and have fun</li>\n      <li>fireworks > <span>click</span></li>\n      <li>particles > <span>space</span></li>\n      <li>text > <span>N</span></li>\n      <li>wave > <span>Z</span></li>\n      <li>face > <span>R</span></li>\n      <li>background static > <span>B</span></li>\n      <li>background 1 > <span>W</span></li>\n      <li>background 2 > <span>Q</span></li>\n      <li>background 3 > <span>E</span></li>\n      <li>quadrilateral 1 > <span>P</span></li>\n      <li>quadrilateral 2 > <span>O</span></li>\n      <li>quadrilateral 3 > <span>I</span></li>\n      <li>quadrilateral 4 > <span>U</span></li>\n      <li>quadrilateral 5 > <span>Ñ</span></li>\n      <li>quadrilateral 6 > <span>L</span></li>\n      <li>quadrilateral 7 > <span>K</span></li>\n      <li>quadrilateral 8 > <span>J</span></li>\n    </ul>\n    <button (click)=\"toggle()\">Controls</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/canvas-page/canvas-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_canvas__ = __webpack_require__("../../../../../src/app/utils/canvas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeyCode = {
    drums1: 'w',
    drums2: 'q',
    drums3: 'e',
    particles: ' ',
    piano1: 'p',
    piano2: 'o',
    piano3: 'i',
    piano4: 'u',
    piano5: 'ñ',
    piano6: 'l',
    piano7: 'k',
    piano8: 'j',
    text: 'n',
    guitar: 'z',
    bg: 'b',
    face: 'r',
};
var CanvasPageComponent = (function () {
    function CanvasPageComponent() {
        this.text = "Fuck this shit!!";
        this.expanded = false;
    }
    CanvasPageComponent.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    CanvasPageComponent.prototype.onKeyUp = function (ev) {
        ev.preventDefault();
        var key = ev.key.toLowerCase();
        if (key === KeyCode.drums1 || key == KeyCode.drums2 || key == KeyCode.drums3) {
            this.canvas.clearCanvasDrums();
        }
        if (key == KeyCode.text) {
            document.getElementById('text').style.opacity = "0";
        }
        if (key == KeyCode.face) {
            this.canvas.clearCanvasFace();
        }
    };
    CanvasPageComponent.prototype.onKeyDown = function (ev) {
        ev.preventDefault();
        var key = ev.key.toLowerCase();
        if (key === KeyCode.drums1) {
            this.canvas.demoDrums(1);
        }
        if (key == KeyCode.drums2) {
            this.canvas.demoDrums(2);
        }
        if (key == KeyCode.drums3) {
            this.canvas.demoDrums(3);
        }
        if (key === KeyCode.particles) {
            this.canvas.demoParticle();
        }
        if (key == KeyCode.piano1) {
            this.canvas.demoRectangle(1);
            //this.canvas.demoCircle(1);
        }
        if (key == KeyCode.piano2) {
            this.canvas.demoRectangle(2);
            //this.canvas.demoCircle(2);
        }
        if (key == KeyCode.piano3) {
            this.canvas.demoRectangle(3);
            //this.canvas.demoCircle(3);
        }
        if (key == KeyCode.piano4) {
            this.canvas.demoRectangle(4);
            //this.canvas.demoCircle(4);
        }
        if (key == KeyCode.piano5) {
            this.canvas.demoRectangle(5);
            //this.canvas.demoCircle(5);
        }
        if (key == KeyCode.piano6) {
            this.canvas.demoRectangle(6);
            //this.canvas.demoCircle(6);
        }
        if (key == KeyCode.piano7) {
            this.canvas.demoRectangle(7);
            //this.canvas.demoCircle(7);
        }
        if (key == KeyCode.piano8) {
            this.canvas.demoRectangle(8);
            //this.canvas.demoCircle(8);
        }
        if (key === KeyCode.text) {
            document.getElementById('text').style.opacity = "1";
        }
        if (key === KeyCode.guitar) {
            this.canvas.demoLines();
        }
        if (key === KeyCode.bg) {
            this.canvas.demoBg();
        }
        if (key === KeyCode.face) {
            this.canvas.demoRecursive();
        }
    };
    CanvasPageComponent.prototype.ngOnInit = function () {
        this.canvas = new __WEBPACK_IMPORTED_MODULE_1__utils_canvas__["a" /* Canvas */]([]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CanvasPageComponent.prototype, "onKeyUp", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CanvasPageComponent.prototype, "onKeyDown", null);
    CanvasPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-canvas-page',
            template: __webpack_require__("../../../../../src/app/pages/canvas-page/canvas-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/canvas-page/canvas-page.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('expandCollapse', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        height: '0px',
                        opacity: 0,
                        overflow: 'hidden'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                        height: '*',
                        opacity: 1,
                        overflow: 'hidden'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('collapsed <=> expanded', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms ease')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], CanvasPageComponent);
    return CanvasPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/utils/canvas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canvas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__particles__ = __webpack_require__("../../../../../src/app/utils/particles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rectangle__ = __webpack_require__("../../../../../src/app/utils/rectangle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rectangles__ = __webpack_require__("../../../../../src/app/utils/rectangles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gradients__ = __webpack_require__("../../../../../src/app/utils/gradients.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lines__ = __webpack_require__("../../../../../src/app/utils/lines.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spiral__ = __webpack_require__("../../../../../src/app/utils/spiral.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__circle__ = __webpack_require__("../../../../../src/app/utils/circle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__circles__ = __webpack_require__("../../../../../src/app/utils/circles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recursiveDraw__ = __webpack_require__("../../../../../src/app/utils/recursiveDraw.ts");









var Canvas = (function () {
    function Canvas(paintings) {
        this.paintings = paintings;
        this.allTheCodes = [];
        this.animations = [];
        this.setupDimensions();
        this.setupCanvas();
        this.spiral = new __WEBPACK_IMPORTED_MODULE_5__spiral__["a" /* Spiral */](this.canvasBgCtx);
        this.rectangles = new __WEBPACK_IMPORTED_MODULE_2__rectangles__["a" /* Rectangles */](this.canvasPianoCtx);
        this.gradients = new __WEBPACK_IMPORTED_MODULE_3__gradients__["a" /* Gradients */](this.canvasDrumsCtx);
        this.lines = new __WEBPACK_IMPORTED_MODULE_4__lines__["a" /* Lines */](this.canvasGuitarCtx);
        this.circles = new __WEBPACK_IMPORTED_MODULE_7__circles__["a" /* Circles */](this.canvasPianoCtx);
        this.fireworks = new Fireworks();
        this.recursiveFace = new __WEBPACK_IMPORTED_MODULE_8__recursiveDraw__["a" /* RecursiveFace */](this.canvasRecursiveCtx, this.currentDimension.width / 2, this.currentDimension.height / 2, this.currentDimension.height / 2);
    }
    Canvas.prototype.demoRecursive = function () {
        this.recursiveFace.drawRecursive();
    };
    Canvas.prototype.demoBg = function () {
        var _this = this;
        if (this._intervalBg) {
            this.lines.clearCanvas();
            clearInterval(this._intervalBg);
        }
        this._intervalBg = setInterval(function () {
            _this.spiral.spiral();
        }, 55);
        this.spiral.spiral();
    };
    Canvas.prototype.demoCircle = function (x) {
        var _this = this;
        var rParent = 2.5 * this.currentDimension.halfHeight / 4;
        if (this._intervalPiano) {
            clearInterval(this._intervalPiano);
        }
        var newCircle = new __WEBPACK_IMPORTED_MODULE_6__circle__["a" /* Circle */](this.canvasPianoCtx, x, rParent);
        this.circles.push(newCircle, x);
        this._intervalPiano = setInterval(function () {
            if (!_this.circles.ended()) {
                _this.circles.render();
            }
            else {
                clearInterval(_this._intervalPiano);
                _this._intervalPiano = null;
            }
        }, 10);
    };
    Canvas.prototype.demoRectangle = function (x) {
        var _this = this;
        if (this._intervalPiano) {
            clearInterval(this._intervalPiano);
        }
        var newRectangle = new __WEBPACK_IMPORTED_MODULE_1__rectangle__["a" /* Rectangle */](this.canvasPianoCtx, x);
        this.rectangles.push(newRectangle, x);
        this._intervalPiano = setInterval(function () {
            if (!_this.rectangles.ended()) {
                _this.rectangles.render();
            }
            else {
                clearInterval(_this._intervalPiano);
                _this._intervalPiano = null;
            }
        }, 10);
    };
    Canvas.prototype.demoLines = function () {
        var _this = this;
        this.lines.push();
        this.canvasGuitarCtx.beginPath();
        if (this._intervalGuitar) {
            this.lines.clearCanvas();
            clearInterval(this._intervalGuitar);
        }
        this._intervalGuitar = setInterval(function () {
            if (!_this.lines.ended()) {
                //cool effect
                _this.lines.clearCanvas();
                _this.lines.render();
            }
            else {
                clearInterval(_this._intervalGuitar);
                _this._intervalGuitar = null;
                _this.lines.clearCanvas();
            }
        }, 5);
    };
    Canvas.prototype.demoParticle = function () {
        var _this = this;
        if (this._intervalParticle) {
            clearInterval(this._intervalParticle);
        }
        this.particles = new __WEBPACK_IMPORTED_MODULE_0__particles__["a" /* Particles */](this.canvasCtx, 20);
        this._intervalParticle = setInterval(function () {
            if (!_this.particles.ended()) {
                _this.particles.render();
            }
            else {
                clearInterval(_this._intervalParticle);
                _this._intervalParticle = null;
            }
        }, 10);
    };
    Canvas.prototype.demoDrums = function (x) {
        switch (x) {
            case 1:
                this.gradients.gradientBlackWhite();
                break;
            case 2:
                this.gradients.gradientWhiteBlack();
                break;
            case 3:
                this.gradients.gradientTenue();
                break;
        }
    };
    Canvas.prototype.clearCanvasDrums = function () {
        this.gradients.clearCanvas();
    };
    Canvas.prototype.clearCanvasFace = function () {
        console.log('clear!');
        this.recursiveFace.clearCanvas();
    };
    Canvas.prototype.setupCanvas = function () {
        var canvas = document.getElementById('canvas');
        this.canvasCtx = canvas.getContext('2d');
        this.canvasCtx.canvas.width = this.currentDimension.width;
        this.canvasCtx.canvas.height = this.currentDimension.height;
        var canvasPiano = document.getElementById('piano-canvas');
        this.canvasPianoCtx = canvasPiano.getContext('2d');
        this.canvasPianoCtx.canvas.width = this.currentDimension.width;
        this.canvasPianoCtx.canvas.height = this.currentDimension.height;
        var canvasDrums = document.getElementById('drums-canvas');
        this.canvasDrumsCtx = canvasDrums.getContext('2d');
        this.canvasDrumsCtx.canvas.width = this.currentDimension.width;
        this.canvasDrumsCtx.canvas.height = this.currentDimension.height;
        var canvasGuitar = document.getElementById('guitar-canvas');
        this.canvasGuitarCtx = canvasGuitar.getContext('2d');
        this.canvasGuitarCtx.canvas.width = this.currentDimension.width;
        this.canvasGuitarCtx.canvas.height = this.currentDimension.height;
        var canvasBg = document.getElementById('bg-canvas');
        this.canvasBgCtx = canvasBg.getContext('2d');
        this.canvasBgCtx.canvas.width = this.currentDimension.width;
        this.canvasBgCtx.canvas.height = this.currentDimension.height;
        var canvasRecursive = document.getElementById('bg-canvas');
        this.canvasRecursiveCtx = canvasRecursive.getContext('2d');
        this.canvasRecursiveCtx.canvas.width = this.currentDimension.width;
        this.canvasRecursiveCtx.canvas.height = this.currentDimension.height;
    };
    Canvas.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2
        };
    };
    return Canvas;
}());



/***/ }),

/***/ "../../../../../src/app/utils/circle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Circle; });
var PI = Math.PI;
var positionAngle = {
    1: 0,
    2: (PI / 4),
    3: (PI / 2),
    4: (3 * PI / 4),
    5: (PI),
    6: (5 * PI / 4),
    7: (3 * PI / 2),
    8: (7 * PI / 4),
};
var Circle = (function () {
    function Circle(ctx, position, rParent) {
        this.ctx = ctx;
        this.position = position;
        this.rParent = rParent;
        this.gravity = 0.05;
        this.vy = 1.5;
        this.vx = 1.5;
        this.offset = 80;
        this.setupDimensions();
        this.setupPositions();
    }
    Circle.prototype.draw = function () {
        this.drawCircle();
        //this.drawEffect();
    };
    Circle.prototype.update = function () {
        this.calculateOffset();
    };
    Circle.prototype.isAlive = function () {
        return !this.checkIfIsAlive();
    };
    Circle.prototype.drawCircle = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "white";
        this.ctx.stroke();
        this.ctx.closePath();
    };
    Circle.prototype.getPositions = function () {
        this.x = this.currentDimension.halfWidth + this.rParent * Math.sin(this.anglePosition);
        this.y = this.currentDimension.halfHeight + this.rParent * -Math.cos(this.anglePosition);
    };
    Circle.prototype.setupPositions = function () {
        this.anglePosition = positionAngle[this.position];
        this.getPositions();
        this.getFinalPosition();
    };
    Circle.prototype.checkIfIsAlive = function () {
        switch (this.position) {
            case 1:
                //UP
                return this.y < this.finalPosition.y;
            case 2:
                //UP-RIGHT
                return this.x > this.finalPosition.x && this.y < this.finalPosition.y;
            case 3:
                //RIGHT
                return this.x > this.finalPosition.x;
            case 4:
                //DOWN-RIGHT
                return this.x > this.finalPosition.x && this.y > this.finalPosition.y;
            case 5:
                //DOWN
                return this.y > this.finalPosition.y;
            case 6:
                //DOWN-LEFT
                return this.x < this.finalPosition.x && this.y > this.finalPosition.y;
            case 7:
                //LEFT
                return this.x < this.finalPosition.x;
            case 8:
                //UP-LEFT
                return this.x < this.finalPosition.x && this.y < this.finalPosition.y;
        }
    };
    Circle.prototype.getFinalPosition = function () {
        var newY;
        var newX;
        switch (this.position) {
            case 1:
                //UP
                newX = this.x;
                newY = this.y - this.offset;
                this.finalPosition = { x: newX, y: newY };
                break;
            case 2:
                //UP-RIGHT
                newX = this.x + this.offset / 2;
                newY = this.y - this.offset / 2;
                this.finalPosition = { x: newX, y: newY };
                break;
            case 3:
                //RIGHT
                newX = this.x + this.offset;
                this.finalPosition = { x: newX, y: newY };
                break;
            case 4:
                //DOWN-RIGHT
                newX = this.x + this.offset / 2;
                newY = this.y + this.offset / 2;
                this.finalPosition = { x: newX, y: newY };
                break;
            case 5:
                //DOWN
                newY = this.y + this.offset / 2;
                this.finalPosition = { x: newX, y: newY };
                break;
            case 6:
                //DOWN-LEFT
                newX = this.x - this.offset / 2;
                newY = this.y + this.offset / 2;
                this.finalPosition = { x: newX, y: newY };
                break;
            case 7:
                //LEFT
                newX = this.x - this.offset / 2;
                this.finalPosition = { x: newX, y: newY };
                break;
            case 8:
                //UP-LEFT
                newX = this.x - this.offset / 2;
                newY = this.y - this.offset / 2;
                this.finalPosition = { x: newX, y: newY };
                break;
        }
    };
    Circle.prototype.calculateOffset = function () {
        switch (this.position) {
            case 1:
                //UP
                this.y -= this.vy;
                break;
            case 2:
                //UP-RIGHT
                this.x += this.vx;
                this.y -= this.vy;
                break;
            case 3:
                //RIGHT
                this.x += this.vx;
                break;
            case 4:
                //DOWN-RIGHT
                this.x += this.vx;
                this.y += this.vy;
                break;
            case 5:
                //DOWN
                this.y += this.vy;
                break;
            case 6:
                //DOWN-LEFT
                this.x -= this.vx;
                this.y += this.vy;
                break;
            case 7:
                //LEFT
                this.x -= this.vx;
                break;
            case 8:
                //UP-LEFT
                this.x -= this.vx;
                this.y -= this.vy;
                break;
        }
    };
    Circle.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2,
            ninethHeight: window.innerHeight / 10,
            ninethhWidth: window.innerWidth / 10,
        };
    };
    return Circle;
}());



/***/ }),

/***/ "../../../../../src/app/utils/circles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Circles; });
var Circles = (function () {
    function Circles(ctx) {
        this.ctx = ctx;
        this.circles = [, , , , , , ,];
        this.setupDimensions();
    }
    Circles.prototype.render = function () {
        this.clearCanvas();
        this.updateCircles();
        this.checkCircles();
        this.drawCircles();
    };
    Circles.prototype.ended = function () {
        var ended = true;
        this.circles.forEach(function (elem) {
            if (elem) {
                ended = false;
            }
        });
        return ended;
    };
    Circles.prototype.push = function (circle, x) {
        this.circles[x] = null;
        this.circles[x] = circle;
    };
    Circles.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.currentDimension.width, this.currentDimension.height);
    };
    Circles.prototype.updateCircles = function () {
        this.circles.map(function (circle) {
            if (circle) {
                circle.update();
            }
        });
    };
    Circles.prototype.drawCircles = function () {
        this.circles.forEach(function (circle) {
            if (circle) {
                circle.draw();
            }
        });
    };
    Circles.prototype.checkCircles = function () {
        var _this = this;
        return this.circles.map(function (circle, i) {
            if (circle && !circle.isAlive()) {
                _this.deleteAtIndex(i);
            }
        });
    };
    Circles.prototype.deleteAtIndex = function (i) {
        this.circles[i] = null;
    };
    Circles.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2,
            sixthHeight: window.innerHeight / 6,
            sixthhWidth: window.innerWidth / 6,
        };
    };
    return Circles;
}());



/***/ }),

/***/ "../../../../../src/app/utils/gradients.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gradients; });
var Gradients = (function () {
    function Gradients(ctx) {
        this.ctx = ctx;
        this.setupDimensions();
        this.setupBackgrounds();
    }
    Gradients.prototype.gradientBlackWhite = function () {
        this.ctx.fillStyle = this.gradientBlackWhiteBG;
        this.ctx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
    };
    Gradients.prototype.gradientWhiteBlack = function () {
        this.ctx.fillStyle = this.gradientWhiteBlackBG;
        this.ctx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
    };
    Gradients.prototype.gradientTenue = function () {
        this.ctx.fillStyle = this.gradientTenueBG;
        this.ctx.fillRect(0, this.currentDimension.halfHeight, this.currentDimension.width, this.currentDimension.height);
    };
    Gradients.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.currentDimension.width, this.currentDimension.height);
    };
    Gradients.prototype.setupBackgrounds = function () {
        this.gradientTenueBG = this.ctx.createLinearGradient(0, 3 * this.currentDimension.height / 4, 0, this.currentDimension.height);
        this.gradientTenueBG.addColorStop(0, "rgba(0,0,0,0.0)");
        this.gradientTenueBG.addColorStop(1, "rgba(128, 179, 255,0.9)");
        this.gradientWhiteBlackBG = this.ctx.createRadialGradient(this.currentDimension.halfWidth, this.currentDimension.halfHeight, this.currentDimension.halfWidth, this.currentDimension.halfWidth, this.currentDimension.halfHeight, this.currentDimension.halfHeight / 4);
        this.gradientWhiteBlackBG.addColorStop(0, "rgba(0, 0, 0, 0.5)");
        this.gradientWhiteBlackBG.addColorStop(1, "rgba(77, 148, 255, 0.9)");
        this.gradientBlackWhiteBG = this.ctx.createRadialGradient(this.currentDimension.halfWidth, this.currentDimension.halfHeight, this.currentDimension.halfWidth, this.currentDimension.halfWidth, this.currentDimension.halfHeight, 0);
        this.gradientBlackWhiteBG.addColorStop(0, "rgba(77, 148, 255, 0.5)");
        this.gradientBlackWhiteBG.addColorStop(1, "rgba(255, 255, 255, 1)");
    };
    Gradients.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2
        };
    };
    return Gradients;
}());



/***/ }),

/***/ "../../../../../src/app/utils/lineCosinus.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineCosinus; });
var LineCosinus = (function () {
    function LineCosinus(ctx, y) {
        this.ctx = ctx;
        this.y = 0;
        this.vy = 0.5;
        this.setupDimensions();
        this.yAxis = 0;
        this.xAxis = y;
        this.units = 25;
        this.life = 0;
        this.maxLife = this.currentDimension.width;
        this.posX = 0;
        this.posY = Math.cos(this.posX);
        this.ctx.moveTo(this.yAxis, this.units * this.posY + this.xAxis);
    }
    LineCosinus.prototype.isAlive = function () {
        return this.life < this.maxLife;
    };
    LineCosinus.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.currentDimension.width, this.currentDimension.height);
    };
    LineCosinus.prototype.draw = function () {
        //this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(this.life, this.units * this.posY + this.xAxis);
        this.ctx.strokeStyle = 'rgb(71, 157, 255)';
        this.ctx.stroke();
    };
    LineCosinus.prototype.update = function () {
        this.y += this.vy;
        this.posX = (-this.yAxis + this.life) / this.units - this.y;
        this.posY = Math.cos(this.posX);
        this.life += 10;
    };
    LineCosinus.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2,
            ninethHeight: window.innerHeight / 10,
            ninethhWidth: window.innerWidth / 10,
        };
    };
    return LineCosinus;
}());



/***/ }),

/***/ "../../../../../src/app/utils/lineSinus.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineSinus; });
var LineSinus = (function () {
    function LineSinus(ctx, y) {
        this.ctx = ctx;
        this.y = 0;
        this.vy = 0.5;
        this.setupDimensions();
        this.yAxis = 0;
        this.xAxis = y;
        this.units = 25;
        this.life = 0;
        this.maxLife = this.currentDimension.width;
        this.posX = 0;
        this.posY = Math.sin(this.posX);
        this.ctx.moveTo(this.yAxis, this.units * this.posY + this.xAxis);
    }
    LineSinus.prototype.isAlive = function () {
        return this.life < this.maxLife;
    };
    LineSinus.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.currentDimension.width, this.currentDimension.height);
    };
    LineSinus.prototype.draw = function () {
        //this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(this.life, this.units * this.posY + this.xAxis);
        this.ctx.strokeStyle = 'rgb(163, 206, 255)';
        this.ctx.lineWidth = 1;
        // this.ctx.fillStyle = 'black';
        // this.ctx.fill();
        this.ctx.stroke();
    };
    LineSinus.prototype.update = function () {
        this.y += this.vy;
        this.posX = (-this.yAxis + this.life) / this.units - this.y;
        this.posY = Math.sin(this.posX);
        this.life += 10;
    };
    LineSinus.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2,
            ninethHeight: window.innerHeight / 10,
            ninethhWidth: window.innerWidth / 10,
        };
    };
    return LineSinus;
}());



/***/ }),

/***/ "../../../../../src/app/utils/lines.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lines; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lineSinus__ = __webpack_require__("../../../../../src/app/utils/lineSinus.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lineCosinus__ = __webpack_require__("../../../../../src/app/utils/lineCosinus.ts");


var Lines = (function () {
    function Lines(ctx) {
        this.ctx = ctx;
        this.lines = [];
        this.setupDimensions();
    }
    Lines.prototype.render = function () {
        this.clearCanvas();
        this.updateLines();
        this.checkLines();
        this.drawLines();
    };
    Lines.prototype.ended = function () {
        return this.lines.length === 0;
    };
    Lines.prototype.push = function () {
        var newLine = this.getNewLine();
        this.lines.push(newLine);
    };
    Lines.prototype.getNewLine = function () {
        var newHeight = this.getRandomHeight();
        if (newHeight % 2 === 0) {
            return new __WEBPACK_IMPORTED_MODULE_0__lineSinus__["a" /* LineSinus */](this.ctx, newHeight);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__lineCosinus__["a" /* LineCosinus */](this.ctx, newHeight);
    };
    Lines.prototype.getRandomHeight = function () {
        var offset = Math.floor(Math.random() * 100);
        if (offset % 2 === 0) {
            offset *= -1;
        }
        return Math.floor(this.currentDimension.halfHeight + offset);
    };
    Lines.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.currentDimension.width, this.currentDimension.height);
    };
    Lines.prototype.updateLines = function () {
        this.lines.map(function (line) {
            if (line) {
                line.update();
            }
        });
    };
    Lines.prototype.drawLines = function () {
        var _this = this;
        this.lines.forEach(function (line) {
            if (line) {
                line.draw(_this.ctx);
            }
        });
    };
    Lines.prototype.checkLines = function () {
        var _this = this;
        return this.lines.map(function (line, i) {
            if (line && !line.isAlive()) {
                _this.deleteAtIndex(i);
            }
        });
    };
    Lines.prototype.deleteAtIndex = function (i) {
        this.lines.splice(i, 1);
    };
    Lines.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2,
            sixthHeight: window.innerHeight / 6,
            sixthhWidth: window.innerWidth / 6,
        };
    };
    return Lines;
}());



/***/ }),

/***/ "../../../../../src/app/utils/particle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Particle; });
var Particle = (function () {
    function Particle() {
        this.gravity = 0.65;
        this.vx = Math.random() * 20 - 10;
        this.vy = Math.random() * -25;
        this.life = 0;
        this.maxLife = 50;
        this.setupDimensions();
    }
    Particle.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.fillStyle = "rgb(163, 235, 255)";
        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    };
    Particle.prototype.update = function () {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        this.life++;
    };
    Particle.prototype.isAlive = function () {
        return this.life < this.maxLife;
    };
    Particle.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2
        };
        this.x = this.currentDimension.width / 2;
        this.y = this.currentDimension.height / 2;
    };
    return Particle;
}());



/***/ }),

/***/ "../../../../../src/app/utils/particles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Particles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__particle__ = __webpack_require__("../../../../../src/app/utils/particle.ts");

var Particles = (function () {
    function Particles(ctx, nParticles) {
        this.ctx = ctx;
        this.nParticles = nParticles;
        this.particles = [];
        this.setupDimensions();
        this.createTheParticles();
    }
    Particles.prototype.render = function () {
        this.clearCanvas();
        this.updateParticles();
        this.checkParticles();
        this.drawParticles();
    };
    Particles.prototype.ended = function () {
        return this.particles.length === 0;
    };
    Particles.prototype.push = function (particle) {
        this.particles.push(particle);
    };
    Particles.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.currentDimension.width, this.currentDimension.height);
    };
    Particles.prototype.updateParticles = function () {
        this.particles.map(function (particle) {
            particle.update();
        });
    };
    Particles.prototype.drawParticles = function () {
        var _this = this;
        this.particles.forEach(function (particle) {
            particle.draw(_this.ctx);
        });
    };
    Particles.prototype.checkParticles = function () {
        var _this = this;
        return this.particles.map(function (particle, i) {
            if (!particle.isAlive()) {
                _this.deleteAtIndex(i);
            }
        });
    };
    Particles.prototype.deleteAtIndex = function (i) {
        this.particles.splice(i, 1);
    };
    Particles.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2
        };
    };
    Particles.prototype.createTheParticles = function () {
        for (var i = 0; i < this.nParticles; i++) {
            this.push(new __WEBPACK_IMPORTED_MODULE_0__particle__["a" /* Particle */]());
        }
    };
    return Particles;
}());



/***/ }),

/***/ "../../../../../src/app/utils/rectangle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rectangle; });
var positionInvert = {
    1: 8,
    2: 7,
    3: 6,
    4: 5,
    5: 4,
    6: 3,
    7: 2,
    8: 1,
};
var Rectangle = (function () {
    function Rectangle(ctx, position) {
        this.ctx = ctx;
        this.position = position;
        this.gravity = 0.05;
        this.vy = -10.0;
        this.setupDimensions();
        this.setupPositions();
    }
    Rectangle.prototype.draw = function () {
        //this.drawRectange();
        this.drawEffect();
    };
    Rectangle.prototype.drawEffect = function () {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.currentDimension.ninethhWidth, this.getHightForEffect());
        this.ctx.strokeStyle = "rgba(77,166,255,0.5)";
        this.ctx.stroke();
        // this.ctx.shadowBlur=10;
        // this.ctx.shadowColor="rgba(77,166,255,0.5)";
        // //this.ctx.fillStyle = "rgba(0, 71, 179,0.5)";
        // this.ctx.fillStyle = "rgba(0,64,255,0.5)";
        this.ctx.closePath();
        this.ctx.fillStyle = this.gradient;
        this.ctx.fill();
    };
    Rectangle.prototype.drawRectange = function () {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.finalPosition, this.currentDimension.ninethhWidth, this.getHightForRectangle());
        this.ctx.strokeStyle = "white";
        this.ctx.stroke();
        this.ctx.closePath();
    };
    Rectangle.prototype.update = function () {
        this.y += this.vy;
        this.vy -= this.gravity;
    };
    Rectangle.prototype.isAlive = function () {
        return this.y > this.finalPosition;
    };
    Rectangle.prototype.getHightForRectangle = function () {
        return this.currentDimension.height - this.y;
    };
    Rectangle.prototype.getHightForEffect = function () {
        return this.y - this.finalPosition;
    };
    Rectangle.prototype.setupPositions = function () {
        this.inversPosition = positionInvert[this.position];
        this.x = this.currentDimension.ninethhWidth * this.inversPosition;
        this.y = this.currentDimension.height;
        this.finalPosition = this.currentDimension.ninethHeight * this.position;
        this.gradient = this.ctx.createRadialGradient(this.currentDimension.halfWidth, 3 * this.currentDimension.height / 4, this.currentDimension.halfWidth, 3 * this.currentDimension.height / 4, this.currentDimension.halfHeight, 0);
        this.gradient.addColorStop(0, "rgba(0,64,255,0.5");
        this.gradient.addColorStop(1, "rgba(77,166,255,0.5)");
    };
    Rectangle.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2,
            ninethHeight: window.innerHeight / 10,
            ninethhWidth: window.innerWidth / 10,
        };
    };
    return Rectangle;
}());



/***/ }),

/***/ "../../../../../src/app/utils/rectangles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rectangles; });
var Rectangles = (function () {
    function Rectangles(ctx) {
        this.ctx = ctx;
        this.rectangles = [, , , , , , ,];
        this.setupDimensions();
    }
    Rectangles.prototype.render = function () {
        this.clearCanvas();
        this.updateCircles();
        this.checkCircles();
        this.drawCircles();
    };
    Rectangles.prototype.ended = function () {
        var ended = true;
        this.rectangles.forEach(function (elem) {
            if (elem) {
                ended = false;
            }
        });
        return ended;
    };
    Rectangles.prototype.push = function (circle, x) {
        this.rectangles[x] = null;
        this.rectangles[x] = circle;
    };
    Rectangles.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.currentDimension.width, this.currentDimension.height);
    };
    Rectangles.prototype.updateCircles = function () {
        this.rectangles.map(function (rectangle) {
            if (rectangle) {
                rectangle.update();
            }
        });
    };
    Rectangles.prototype.drawCircles = function () {
        this.rectangles.forEach(function (rectangle) {
            if (rectangle) {
                rectangle.draw();
            }
        });
    };
    Rectangles.prototype.checkCircles = function () {
        var _this = this;
        return this.rectangles.map(function (rectangle, i) {
            if (rectangle && !rectangle.isAlive()) {
                _this.deleteAtIndex(i);
            }
        });
    };
    Rectangles.prototype.deleteAtIndex = function (i) {
        this.rectangles[i] = null;
    };
    Rectangles.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2,
            sixthHeight: window.innerHeight / 6,
            sixthhWidth: window.innerWidth / 6,
        };
    };
    return Rectangles;
}());



/***/ }),

/***/ "../../../../../src/app/utils/recursiveDraw.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecursiveFace; });
var RecursiveFace = (function () {
    function RecursiveFace(ctx, x, y, d) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.d = d;
        this.setupDimensions();
        this.ctx.fillStyle = "rgba(0,0,0,1)";
        this.ctx.fillRect(0, 0, this.currentDimension.width, this.currentDimension.height);
    }
    RecursiveFace.prototype.drawRecursive = function () {
        this.drawItem(this.x, this.y, this.d);
    };
    RecursiveFace.prototype.clearCanvas = function () {
        console.log("wtf");
        this.ctx.clearRect(0, 0, this.currentDimension.width, this.currentDimension.height);
    };
    RecursiveFace.prototype.drawItem = function (x, y, d) {
        var newCircle = new RecursiveItemCircle(this.ctx, x, y, d);
        newCircle.draw();
        if (d > 20) {
            var newD = d * 0.25;
            this.drawItem(x + newD, y, newD);
            this.drawItem(x - newD, y, newD);
        }
    };
    RecursiveFace.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2
        };
    };
    return RecursiveFace;
}());

var RecursiveItemCircle = (function () {
    function RecursiveItemCircle(ctx, x, y, d) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.d = d;
    }
    RecursiveItemCircle.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.d / 2, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "white";
        this.ctx.stroke();
        this.ctx.closePath();
    };
    return RecursiveItemCircle;
}());


/***/ }),

/***/ "../../../../../src/app/utils/spiral.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spiral; });
var max = Math.max;
var pow = Math.pow;
var sqrt = Math.sqrt;
var PI = Math.PI;
var sin = Math.sin;
var cos = Math.cos;
var Spiral = (function () {
    function Spiral(ctx) {
        this.ctx = ctx;
        this.t = 0;
        this.n = 8 /* shades */;
        this.m = 4 /* shade repetitions */;
        this.p = 32 /* dots on each branch */;
        this.t_step = 1 / 60;
        this.setupDimensions();
    }
    Spiral.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.currentDimension.width, this.currentDimension.height);
    };
    Spiral.prototype.spiral = function () {
        this.clearCanvas();
        var r = 77;
        var g = 166;
        var b = 255;
        var now = false;
        for (var i = 0; i < this.n * this.m; i++) {
            this.beta = i * 2 * PI / (this.n * this.m);
            this.x0 = 0;
            /* Begin the path up here */
            this.ctx.beginPath();
            this.hue = i * 360 / this.n;
            this.ctx.translate(this.currentDimension.halfWidth, this.currentDimension.halfHeight);
            this.ctx.rotate(this.t / 3);
            /* only need to set the fillstyle once up here now */
            if (g < 64) {
                r = 77;
                g = 166;
            }
            this.ctx.fillStyle = this.getColor(r, g, b);
            for (var j = 0; j < this.p; j++) {
                this.gamma = j * 2 * PI / this.p;
                this.r = max(1, pow(2 * (j * (this.p - j)), 0.43) - 10);
                this.x0 += 3.4 * this.r;
                this.y0 = this.x0 * sin(this.gamma + 2 * this.t + this.x0 / 99) / 5;
                /* change of coordinates */
                this.x1 = this.x0 * cos(this.beta) - this.y0 * sin(this.beta);
                this.y1 = this.x0 * sin(this.beta) + this.y0 * cos(this.beta);
                /* move it to the position of the arc */
                /* (remove this for a cool effect) */
                this.ctx.moveTo(this.x1, this.y1);
                /* setup the arc path here */
                this.ctx.arc(this.x1, this.y1, this.r, 0, 2 * PI);
            }
            this.ctx.fill();
            r -= 18;
            g -= 9;
            if (r < 0) {
                r = 0;
            }
            /* close the 1 path that now is a combination of all the arcs */
            this.ctx.closePath();
            /* fill the whole path only once now */
            /*
             * reason for moving the fill out of the inner loop:
             * see https://twitter.com/loktar00/status/420369245378076672
             * (thanks!)
             */
            this.ctx.rotate(-this.t / 3);
            this.ctx.translate(-this.currentDimension.halfWidth, -this.currentDimension.halfHeight);
        }
        this.t += this.t_step;
    };
    Spiral.prototype.getColor = function (r, g, b) {
        return "rgb(" + r + "," + g + "," + b + ")";
    };
    Spiral.prototype.setupDimensions = function () {
        this.currentDimension = {
            width: window.innerWidth,
            height: window.innerHeight,
            halfWidth: window.innerWidth / 2,
            halfHeight: window.innerHeight / 2,
            sixthHeight: window.innerHeight / 6,
            sixthhWidth: window.innerWidth / 6,
        };
    };
    return Spiral;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map