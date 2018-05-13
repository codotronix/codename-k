webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_3__components_about_about_component__["a" /* AboutComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n</div>\r\n\r\n<app-header></app-header>\r\n\r\n<div class=\"main-container container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-top: 120px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "{{text}}"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ".header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 120px; }\n\n.header .logo-img {\n  margin: 7px;\n  height: 120px;\n  background: blue;\n  padding: 10px;\n  border-radius: 4px;\n  -webkit-box-shadow: -6px 6px 8px 0px #6b6b71;\n          box-shadow: -6px 6px 8px 0px #6b6b71; }\n\n.header .header-menu {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  list-style: none;\n  background: #00f;\n  color: #fff;\n  padding: 0px 0 0 20px;\n  border-radius: 20px 0 0 20px;\n  border-left: 25px solid #ff0;\n  border-right: 7px solid #ff0;\n  font-size: 20px; }\n\n.header .header-menu li {\n  display: inline-block;\n  padding: 5px 10px;\n  border-bottom: 5px solid transparent;\n  cursor: pointer;\n  font-size: 20px; }\n\n.header .header-menu li:hover {\n  border-bottom-color: #ffcfcf; }\n\n.header .header-menu li.active,\n.header .header-menu li.active:hover {\n  border-bottom-color: #ff0; }\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.text = 'About Us';
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n\r\n    <img src=\"assets/img/Knexsol-logo-text-200v.png\" class=\"logo-img\"/>\r\n\r\n    <!-- <ul class=\"header-menu\">\r\n        <li routerLink=\"\">Home</li>\r\n        <li>Faculties</li>\r\n        <li routerLink=\"about\">About Us</li>\r\n    </ul> -->\r\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 165px;\n  background: #fff;\n  z-index: 99999;\n  border-bottom: 10px solid #cbcbef; }\n\n.header .logo-img {\n  margin: 15px;\n  height: 120px;\n  background: blue;\n  padding: 10px;\n  border-radius: 4px;\n  -webkit-box-shadow: -6px 6px 8px 0px #6b6b71;\n          box-shadow: -6px 6px 8px 0px #6b6b71; }\n\n.header .header-menu {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  list-style: none;\n  background: #00f;\n  color: #fff;\n  padding: 0px 0 0 20px;\n  border-radius: 20px 0 0 20px;\n  border-left: 25px solid #ff0;\n  border-right: 7px solid #ff0;\n  font-size: 20px; }\n\n.header .header-menu li {\n  display: inline-block;\n  padding: 5px 10px;\n  border-bottom: 5px solid transparent;\n  cursor: pointer;\n  font-size: 20px;\n  outline: none !important; }\n\n.header .header-menu li:hover {\n  border-bottom-color: #ffcfcf; }\n\n.header .header-menu li.active,\n.header .header-menu li.active:hover {\n  border-bottom-color: #ff0; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.text = 'Hello Header';
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <h1 class=\"page-title\">Our Story</h1>\r\n\r\n    <div class=\"row story-row\" *ngFor=\"let x of imageAndCaptions; let i = index;\">\r\n        <!-- Image Container -->\r\n        <div class=\"col-xs-12 col-sm-6 col-md-6 story-img\" [ngClass]=\"{'pull-right': (i % 2 !== 0)}\">\r\n            <img src=\"{{x.imgUrl}}\" class=\"img-responsive\"/>\r\n        </div>\r\n\r\n        <!-- Caption Container -->\r\n        <div class=\"col-xs-12 col-sm-6 col-md-6 story-caption\">\r\n            <i class=\"fas fa-quote-left quotes-icon\"></i>\r\n            <span><i>{{x.caption}}</i></span>\r\n            <i class=\"fas fa-quote-right quotes-icon\"></i>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".page-title {\n  font-size: 50px;\n  text-align: center; }\n\n.story-row {\n  margin-top: 75px; }\n\n.story-row .story-img img {\n  border-radius: 20px; }\n\n.story-row .story-caption {\n  font-size: 50px;\n  padding: 50px 100px; }\n\n.story-row .story-caption .quotes-icon {\n  color: #b0b9e8;\n  vertical-align: top;\n  vertical-align: super; }\n\n/*\r\n for 1600 and below\r\n*/\n\n@media (max-width: 1600px) {\n  .story-row .story-caption {\n    font-size: 40px;\n    padding: 40px 70px; } }\n\n/*\r\n for 1200 and below\r\n*/\n\n@media (max-width: 1200px) {\n  .story-row .story-caption {\n    font-size: 30px;\n    padding: 40px; } }\n\n/*\r\n for 1000 and below\r\n*/\n\n@media (max-width: 1000px) {\n  .story-row .story-caption {\n    font-size: 25px;\n    padding: 20px; } }\n\n/*\r\n for 767 and below\r\n*/\n\n@media (max-width: 767px) {\n  .story-row {\n    margin-top: 30px; }\n  .story-row .story-caption {\n    font-size: 25px;\n    padding: 20px 40px; } }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.imageAndCaptions = [
            {
                "imgUrl": "assets/img/silhouette-3360822_1920.jpg",
                "caption": "We are a group of individuals who are passionate about learning and teaching"
            },
            {
                "imgUrl": "assets/img/bible-3392752_1920.jpg",
                "caption": "With us Books no longer remain a big bundle of dead pages and black boring text..."
            },
            {
                "imgUrl": "assets/img/narrative-794978_1920.jpg",
                "caption": "... But becomes a Journey... A story... And sometimes an Adventure..."
            },
            {
                "imgUrl": "assets/img/boys-1782427_1920.jpg",
                "caption": "True teaching is all about creating the environment ..."
            },
            {
                "imgUrl": "assets/img/earth-2434001_1280.jpg",
                "caption": "... And making the content real and alive ..."
            },
            {
                "imgUrl": "assets/img/nature-3289812_1920.jpg",
                "caption": "We seek out the soul, the living world in their books and syllabus... And put in the hand of our students..."
            },
            {
                "imgUrl": "assets/img/animal-3346192_1920.jpg",
                "caption": "The learning becomes so enchanting, even The Biggest Ones sit and listen..."
            },
            {
                "imgUrl": "assets/img/baby-2604853_1920.jpg",
                "caption": "... And thus Study becomes a Fun Filled Experience..."
            },
            {
                "imgUrl": "assets/img/welcome-to-knexsol-1920x1088.png",
                "caption": " Welcome to Knexsol ..."
            }
        ];
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map