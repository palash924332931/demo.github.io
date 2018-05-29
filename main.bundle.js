webpackJsonp([1,4],{

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// The confirmation dialog is used through this service.
// When injected in the confirm component, the activate
// function of this service is bound to the corresponding
// function in that component. The component is in charge
// of manipulating the DOM to show the dialog and get the
// result back (via a Promise). This way, we can just
// add the component to the root app component's template,
// and then inject this service to use it anywhere.
let ConfirmService = class ConfirmService {
};
ConfirmService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
    __metadata('design:paramtypes', [])
], ConfirmService);
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/confirm.service.js.map

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 412;


/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(540);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/main.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dragable_directive__ = __webpack_require__(529);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dragable_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropable_directive__ = __webpack_require__(530);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dropable_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dragable_content_directive__ = __webpack_require__(528);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__dragable_content_directive__["a"]; });



//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/drag.n.drop.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Draggable; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let Draggable = class Draggable {
    constructor(element) {
        this.element = element;
        this.topStart = 0;
        this.leftStart = 0;
        this._allowDrag = true;
    }
    ngOnInit() {
        // css changes
        if (this._allowDrag) {
            this.element.nativeElement.style.position = 'relative';
            this.element.nativeElement.className += ' cursor-draggable';
        }
    }
    onMouseDown(event) {
        if (event.button === 2)
            return; // prevents right click drag, remove his if you don't want it
        this.md = true;
        this.topStart = event.clientY - this.element.nativeElement.style.top.replace('px', '');
        this.leftStart = event.clientX - this.element.nativeElement.style.left.replace('px', '');
    }
    onMouseUp(event) {
        this.md = false;
    }
    onMouseMove(event) {
        if (this.md && this._allowDrag) {
            this.element.nativeElement.style.top = (event.clientY - this.topStart) + 'px';
            this.element.nativeElement.style.left = (event.clientX - this.leftStart) + 'px';
        }
    }
    onTouchStart(event) {
        this.md = true;
        this.topStart = event.changedTouches[0].clientY - this.element.nativeElement.style.top.replace('px', '');
        this.leftStart = event.changedTouches[0].clientX - this.element.nativeElement.style.left.replace('px', '');
        event.stopPropagation();
    }
    onTouchEnd() {
        this.md = false;
    }
    onTouchMove(event) {
        if (this.md && this._allowDrag) {
            this.element.nativeElement.style.top = (event.changedTouches[0].clientY - this.topStart) + 'px';
            this.element.nativeElement.style.left = (event.changedTouches[0].clientX - this.leftStart) + 'px';
        }
        event.stopPropagation();
    }
    set allowDrag(value) {
        this._allowDrag = value;
        if (this._allowDrag)
            this.element.nativeElement.className += ' cursor-draggable';
        else
            this.element.nativeElement.className = this.element.nativeElement.className
                .replace(' cursor-draggable', '');
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('mousedown', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], Draggable.prototype, "onMouseDown", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('document:mouseup'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], Draggable.prototype, "onMouseUp", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('document:mousemove', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], Draggable.prototype, "onMouseMove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('touchstart', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], Draggable.prototype, "onTouchStart", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('document:touchend'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], Draggable.prototype, "onTouchEnd", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('document:touchmove', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], Draggable.prototype, "onTouchMove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])('ng2-draggable'), 
    __metadata('design:type', Boolean), 
    __metadata('design:paramtypes', [Boolean])
], Draggable.prototype, "allowDrag", null);
Draggable = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
        selector: '[ng2-draggable]'
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */]) === 'function' && _a) || Object])
], Draggable);
var _a;
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/dragable-content.directive.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeDraggable; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MakeDraggable = class MakeDraggable {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    ngOnInit() {
        // Get the current element
        //let el = this._elementRef.nativeElement.querySelector('div.dragable-content');
        let el = this._elementRef.nativeElement.querySelector('li.dragable');
        // Set the draggable attribute to the element
        el.draggable = 'true';
        // Set up the dragstart event and add the drag-src CSS class 
        // to change the visual appearance. Set the current todo as the data
        // payload by stringifying the object first
        el.addEventListener('dragstart', (e) => {
            console.log('Start');
            el.classList.add('drag-src');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text', JSON.stringify(this.data));
        });
        // Remove the drag-src class
        el.addEventListener('dragend', (e) => {
            e.preventDefault();
            el.classList.remove('drag-src');
        });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])('makeDraggable'), 
    __metadata('design:type', Object)
], MakeDraggable.prototype, "data", void 0);
MakeDraggable = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
        selector: '[makeDraggable]'
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */]) === 'function' && _a) || Object])
], MakeDraggable);
var _a;
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/dragable.directive.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeDroppable; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MakeDroppable = class MakeDroppable {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.dropped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    ngOnInit() {
        let el = this._elementRef.nativeElement;
        // Add a style to indicate that this element is a drop target
        el.addEventListener('dragenter', (e) => {
            el.classList.add('over');
        });
        // Remove the style
        el.addEventListener('dragleave', (e) => {
            el.classList.remove('over');
        });
        el.addEventListener('dragover', (e) => {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
            return false;
        });
        // On drop, get the data and convert it back to a JSON object
        // and fire off an event passing the data
        el.addEventListener('drop', (e) => {
            if (e.stopPropagation) {
                e.stopPropagation(); // Stops some browsers from redirecting.
            }
            el.classList.remove('over');
            let data = JSON.parse(e.dataTransfer.getData('text'));
            this.dropped.emit(data);
            return false;
        });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(), 
    __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === 'function' && _a) || Object)
], MakeDroppable.prototype, "dropped", void 0);
MakeDroppable = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
        selector: '[makeDroppable]'
    }), 
    __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */]) === 'function' && _b) || Object])
], MakeDroppable);
var _a, _b;
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/dropable.directive.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirm_service__ = __webpack_require__(236);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// http://koscielniak.me/post/2016/03/angular2-confirm-dialog-component/
const KEY_ESC = 27;
let ConfirmComponent = class ConfirmComponent {
    constructor(confirmService) {
        this._defaults = {
            title: 'Confirm',
            message: 'Confirm the operation?',
            cancelText: 'Cancel',
            okText: 'OK'
        };
        // assign a function to the property activate of ConfirmService.
        // After this, calling activate on ConfirmService will cause the function activate
        // from ConfirmComponent to be executed.
        confirmService.activate = this.activate.bind(this);
    }
    setLabels(message = this._defaults.message, title = this._defaults.title) {
        this.title = title;
        this.message = message;
        this.okText = this._defaults.okText;
        this.cancelText = this._defaults.cancelText;
    }
    activate(message = this._defaults.message, title = this._defaults.title) {
        debugger;
        this.confirmationType = 'Alert';
        this.setLabels(message, title);
        console.log("in activate");
        let promise = new Promise(resolve => {
            this.show(resolve);
        });
        return promise;
    }
    show(resolve) {
        document.onkeyup = null;
        let negativeOnClick = (e) => resolve(false);
        let positiveOnClick = (e) => resolve(true);
        if (!this._confirmElement || !this._cancelButton || !this._okButton) {
            return;
        }
        this._confirmElement.style.opacity = 0;
        this._confirmElement.style.zIndex = 9999;
        this._cancelButton.onclick = ((e) => {
            e.preventDefault();
            if (!negativeOnClick(e)) {
                this.hideDialog();
            }
        });
        this._okButton.onclick = ((e) => {
            e.preventDefault();
            if (!positiveOnClick(e)) {
                this.hideDialog();
            }
        });
        this._confirmElement.onclick = () => {
            this.hideDialog();
            return negativeOnClick(null);
        };
        document.onkeyup = (e) => {
            if (e.which === KEY_ESC) {
                this.hideDialog();
                return negativeOnClick(null);
            }
        };
        this._confirmElement.style.opacity = 1;
        this._confirmElement.style.display = 'block';
    }
    hideDialog() {
        document.onkeyup = null;
        this._confirmElement.style.opacity = 0;
        window.setTimeout(() => this._confirmElement.style.zIndex = -1, 400);
    }
    ngOnInit() {
        this._confirmElement = document.getElementById('confirmationModal');
        this._cancelButton = document.getElementById('cancelButton');
        this._okButton = document.getElementById('okButton');
    }
};
ConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'p-confirm',
        template: `
<div id="confirmationModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-md" style="margin: 80px auto;">
        <div class="modal-content">{{confirmationType=='Alert'}}
            <div style="visibility:hidden">
                <div class="modal-header">
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body">
                    <p>{{message}}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" id="okButton">{{okText}}</button>
                    <button type="button" class="btn btn-default" id="cancelButton">{{cancelText}}</button>
                </div>
            </div>

           
        </div>

    </div>
</div>
  `
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__confirm_service__["a" /* ConfirmService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__confirm_service__["a" /* ConfirmService */]) === 'function' && _a) || Object])
], ConfirmComponent);
var _a;
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/confirm.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dragable_directive__ = __webpack_require__(534);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dragable_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropable_directive__ = __webpack_require__(535);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dropable_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dragable_content_directive__ = __webpack_require__(533);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__dragable_content_directive__["a"]; });



//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/drag.n.drop.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Draggable; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let Draggable = class Draggable {
    constructor(element) {
        this.element = element;
        this.topStart = 0;
        this.leftStart = 0;
        this._allowDrag = true;
    }
    ngOnInit() {
        // css changes
        if (this._allowDrag) {
            this.element.nativeElement.style.position = 'relative';
            this.element.nativeElement.className += ' cursor-draggable';
        }
    }
    onMouseDown(event) {
        if (event.button === 2)
            return; // prevents right click drag, remove his if you don't want it
        this.md = true;
        this.topStart = event.clientY - this.element.nativeElement.style.top.replace('px', '');
        this.leftStart = event.clientX - this.element.nativeElement.style.left.replace('px', '');
    }
    onMouseUp(event) {
        this.md = false;
    }
    onMouseMove(event) {
        if (this.md && this._allowDrag) {
            this.element.nativeElement.style.top = (event.clientY - this.topStart) + 'px';
            this.element.nativeElement.style.left = (event.clientX - this.leftStart) + 'px';
        }
    }
    onTouchStart(event) {
        this.md = true;
        this.topStart = event.changedTouches[0].clientY - this.element.nativeElement.style.top.replace('px', '');
        this.leftStart = event.changedTouches[0].clientX - this.element.nativeElement.style.left.replace('px', '');
        event.stopPropagation();
    }
    onTouchEnd() {
        this.md = false;
    }
    onTouchMove(event) {
        if (this.md && this._allowDrag) {
            this.element.nativeElement.style.top = (event.changedTouches[0].clientY - this.topStart) + 'px';
            this.element.nativeElement.style.left = (event.changedTouches[0].clientX - this.leftStart) + 'px';
        }
        event.stopPropagation();
    }
    set allowDrag(value) {
        this._allowDrag = value;
        if (this._allowDrag)
            this.element.nativeElement.className += ' cursor-draggable';
        else
            this.element.nativeElement.className = this.element.nativeElement.className
                .replace(' cursor-draggable', '');
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('mousedown', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], Draggable.prototype, "onMouseDown", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('document:mouseup'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], Draggable.prototype, "onMouseUp", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('document:mousemove', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], Draggable.prototype, "onMouseMove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('touchstart', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], Draggable.prototype, "onTouchStart", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('document:touchend'), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', []), 
    __metadata('design:returntype', void 0)
], Draggable.prototype, "onTouchEnd", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('document:touchmove', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], Draggable.prototype, "onTouchMove", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])('ng2-draggable'), 
    __metadata('design:type', Boolean), 
    __metadata('design:paramtypes', [Boolean])
], Draggable.prototype, "allowDrag", null);
Draggable = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
        selector: '[ng2-draggable]'
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */]) === 'function' && _a) || Object])
], Draggable);
var _a;
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/dragable-content.directive.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeDraggable; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MakeDraggable = class MakeDraggable {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    ngOnInit() {
        // Get the current element
        //let el = this._elementRef.nativeElement.querySelector('div.dragable-content');
        let el = this._elementRef.nativeElement.querySelector('li.dragable');
        // Set the draggable attribute to the element
        el.draggable = 'true';
        // Set up the dragstart event and add the drag-src CSS class 
        // to change the visual appearance. Set the current todo as the data
        // payload by stringifying the object first
        el.addEventListener('dragstart', (e) => {
            el.classList.add('drag-src');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text', JSON.stringify(this.data));
        });
        // Remove the drag-src class
        el.addEventListener('dragend', (e) => {
            e.preventDefault();
            el.classList.remove('drag-src');
        });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])('makeDraggable'), 
    __metadata('design:type', Object)
], MakeDraggable.prototype, "data", void 0);
MakeDraggable = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
        selector: '[makeDraggable]'
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */]) === 'function' && _a) || Object])
], MakeDraggable);
var _a;
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/dragable.directive.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeDroppable; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MakeDroppable = class MakeDroppable {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.dropped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
    }
    ngOnInit() {
        let el = this._elementRef.nativeElement;
        // Add a style to indicate that this element is a drop target
        el.addEventListener('dragenter', (e) => {
            el.classList.add('over');
        });
        // Remove the style
        el.addEventListener('dragleave', (e) => {
            el.classList.remove('over');
        });
        el.addEventListener('dragover', (e) => {
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.dataTransfer.dropEffect = 'move';
            return false;
        });
        // On drop, get the data and convert it back to a JSON object
        // and fire off an event passing the data
        el.addEventListener('drop', (e) => {
            if (e.stopPropagation) {
                e.stopPropagation(); // Stops some browsers from redirecting.
            }
            el.classList.remove('over');
            let data = JSON.parse(e.dataTransfer.getData('text'));
            this.dropped.emit(data);
            return false;
        });
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(), 
    __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === 'function' && _a) || Object)
], MakeDroppable.prototype, "dropped", void 0);
MakeDroppable = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
        selector: '[makeDroppable]'
    }), 
    __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ElementRef */]) === 'function' && _b) || Object])
], MakeDroppable);
var _a, _b;
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/dropable.directive.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PagerService {
    getPager(totalItems, currentPage = 1, pageSize = 10, maximumPaggingDisplay = 10) {
        // calculate total pages
        //console.log("totalItems"+totalItems);
        let totalPages = Math.ceil(totalItems / pageSize);
        let startPage, endPage;
        if (maximumPaggingDisplay == 5) {
            console.log("currentPage" + currentPage);
            if (totalPages <= 5) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            }
            else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 3) {
                    startPage = 1;
                    endPage = 5;
                }
                else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 4;
                    endPage = totalPages;
                }
                else {
                    startPage = currentPage - 2;
                    endPage = currentPage + 2;
                }
            }
        }
        else if (maximumPaggingDisplay == 3) {
            console.log("currentPage" + currentPage);
            if (totalPages <= 3) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            }
            else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 2) {
                    startPage = 1;
                    endPage = 3;
                }
                else if (currentPage + 1 >= totalPages) {
                    startPage = totalPages - 2;
                    endPage = totalPages;
                }
                else {
                    startPage = currentPage - 1;
                    endPage = currentPage + 1;
                }
            }
        }
        else {
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            }
            else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                }
                else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                }
                else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }
        }
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        let pages = this.fnArrayrange(startPage, endPage + 1);
        // let pages=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
    fnArrayrange(start, end) {
        var total = [];
        if (!end) {
            end = start;
            start = 0;
        }
        for (var i = start; i < end; i += 1) {
            total.push(i);
        }
        return total;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PagerService;

//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/p-table-pagger.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__p_table_pagger__ = __webpack_require__(536);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};


//import * as autoTable from 'jspdf-autotable';
let PTableComponent = class PTableComponent {
    constructor(pagerService, differs, renderer) {
        this.pagerService = pagerService;
        this.differs = differs;
        this.renderer = renderer;
        this.checkboxCallbackFn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]() || null;
        this.customActivityOnRecord = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]() || null;
        this.callbackFnOnPageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]() || null;
        this.radioButtonCallbackFn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]() || null;
        this.cellClickCallbackFn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]() || null;
        this.customReflowFn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]() || null;
        this.UserInfo = JSON.parse(localStorage.getItem("car-system-user-info-option-b"));
        this.editUpdateColumn = true;
        this.noRecord = true;
        this.pTableData = [{}];
        this.pTableDatalength = 0;
        this.startPageNo = 0;
        this.totalColspan = 0;
        this.pageNo = 0;
        this.rowLimitArray = [10, 20, 50, 100, 200, 500, 1000];
        this.enabledPagination = true;
        this.globalSearchValue = "";
        this.individualColumnFilterSortingUp = true;
        this.customFilterUniqueArray = [];
        this.columnWiseMasterData = [];
        this.filterItemsCheckedAll = false;
        this.popupFilterColor = 'black';
        this.storedFilteredInfo = [];
        this.columnSearchValue = "";
        this.activeReflow = false;
        this.customReflowActive = false;
        this.pTableColumnSearch = "";
        this.pTableColumnCustomizationList = [];
        this.pTableColumnReorder = [];
        this.settingsTabs = [{ tab: "columnShowHide", tabName: "Show/Hide", active: true }];
        this.pModalSetting = {
            modalTitle: "",
            modalSaveBtnCaption: "Save"
        };
        this.pager = {};
        this.filterAlignment = 'arrow_box_center';
        this.activeTabName = "columnShowHide";
        this.tempStyle = [];
        this.Math = Math;
        this.differ = differs.find({}).create(null);
    }
    ngOnInit() {
        if (this.pTableSetting == null) {
            return false;
        }
        if (this.pTableSetting["enabledSerialNo"]) {
            this.totalColspan = this.totalColspan + 1;
        }
        if (this.pTableSetting["enabledCheckbox"]) {
            this.totalColspan = this.totalColspan + 1;
        }
        if (this.pTableSetting["enabledEditBtn"]) {
            this.totalColspan = this.totalColspan + 1;
        }
        if (this.pTableSetting["enabledRadioBtn"]) {
            this.totalColspan = this.totalColspan + 1;
        }
        if (this.pTableSetting["enabledReordering"]) {
            this.settingsTabs.push({ tab: "columnOrder", tabName: "Reorder", active: false });
        }
        this.pTableSetting["radioBtnColumnHeader"] = this.pTableSetting["radioBtnColumnHeader"] || ' ';
        this.pTableSetting["checkboxColumnHeader"] = this.pTableSetting["checkboxColumnHeader"] || ' ';
        this.totalColspan = this.totalColspan + this.pTableSetting["tableColDef"].length;
        this.maximumPaggingDisplay = this.pTableSetting["displayPaggingSize"] || 10;
        if (this.pTableSetting["enabledAutoScrolled"]) {
            this.enabledPagination = false;
            this.pageSize = this.pTableSetting["pageSize"] || 30;
        }
        else if (!this.pTableSetting["enabledPagination"] && this.pTableSetting["enabledPagination"] != undefined) {
            this.enabledPagination = false;
            this.pageSize = 30000;
        }
        else {
            this.pageSize = this.pTableSetting["pageSize"] || 10;
        }
        //for advanced column filter 
        this.storedFilteredInfo = [];
        this.columnSearchValue = "";
        this.globalSearchValue = "";
        jQuery("#" + this.pTableSetting["tableID"] + " .column-filter-active").css('color', 'white');
        this.pTableColumnCustomizationList = JSON.parse(JSON.stringify(this.pTableSetting.tableColDef)) || [];
        this.pTableColumnReorder = JSON.parse(JSON.stringify(this.pTableSetting.tableColDef)) || [];
    }
    ngDoCheck() {
        if (this.pTableSetting == null) {
            return false;
        }
        var changes = this.differ.diff(this.pTableMasterData);
        if (changes) {
            this.pTableData = this.pTableMasterData || [];
            this.pTableDatalength = this.pTableData.length || 0;
            if (this.pTableSetting.disabledTableReset) {
                this.fnShowPreviousFilteredState();
            }
            else {
                this.storedFilteredInfo = [];
                this.columnSearchValue = "";
                this.globalSearchValue = "";
                jQuery("#" + this.pTableSetting["tableID"] + " .column-filter-active").css('color', 'white');
            }
            //set page state
            if (this.pTableSetting.enabledStaySelectedPage && this.pageNo > 0) {
                this.setPage(this.pageNo);
            }
            else {
                this.setPage(1);
            }
        }
    }
    fnClickPTableCell(event, isCellClick = false, currentCellName, activeClickForThisCell, data) {
        if (isCellClick && (activeClickForThisCell == "Yes" || activeClickForThisCell == "true")) {
            this.cellClickCallbackFn.emit({ cellName: currentCellName, record: data, event: event });
        }
        else {
            return;
        }
    }
    fnTotalColspanCalCulate() {
        let colspan = 0;
        if (this.pTableSetting["enableSerialNo"]) {
            colspan = colspan + 1;
        }
        if (this.pTableSetting["enableCheckbox"]) {
            colspan = colspan + 1;
        }
        if (this.pTableSetting["enabledEditBtn"] || this.pTableSetting["enabledDeleteBtn"]) {
            colspan = colspan + 1;
        }
        if (this.pTableSetting["enableRadioButton"]) {
            colspan = colspan + 1;
        }
        colspan = colspan + this.pTableSetting["tableColDef"].length;
        return colspan;
    }
    fnSaveModalInfo() {
        // this.fnActionOnSaveBtn.emit(this.modalSaveFnParam);
    }
    fnEditRecord(record) {
        jQuery("#customModal").modal("show");
    }
    fnDeleteRecord(record) {
    }
    fnFilterPTable(args, executionType = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let execution = false;
            args = args.trim();
            //this.pTableData=JSON.parse( JSON.stringify( this.pTableMasterData))||[];    
            if (args && this.pTableMasterData.length > 0) {
                let filterKeys = Object.keys(this.pTableMasterData[0]);
                this.pTableData = yield this.pTableMasterData.filter((item, index, array) => {
                    let returnVal = false;
                    for (let i = 0; i < this.pTableSetting["tableColDef"].length; i++) {
                        if (typeof item[this.pTableSetting["tableColDef"][i]["internalName"]] == "string") {
                            if (item[this.pTableSetting["tableColDef"][i]["internalName"]].toLowerCase().includes(args.toLowerCase())) {
                                returnVal = true;
                            }
                        }
                        else if (typeof item[this.pTableSetting["tableColDef"][i]["internalName"]] == "number") {
                            if (item[this.pTableSetting["tableColDef"][i]["internalName"]].toString().indexOf(args.toString()) > -1) {
                                returnVal = true;
                            }
                        }
                        else {
                        }
                    }
                    return returnVal;
                });
            }
            else {
                this.pTableData = this.pTableMasterData;
            }
            if (executionType) {
            }
            else {
                this.storedFilteredInfo = [];
                jQuery("#" + this.pTableSetting["tableID"] + " .column-filter-active").css('color', 'white');
                this.setPage(1);
            }
        });
    }
    setPage(page) {
        this.pageNo = page;
        this.pager = this.pagerService.getPager(this.pTableData.length, page, this.pageSize, this.maximumPaggingDisplay);
        if (page < 1 || page > this.pager.totalPages) {
            if (page - 1 <= this.pager.totalPages && this.pager.totalPages != 0) {
                if (page <= 0) {
                    this.setPage(1);
                }
                else {
                    this.setPage(page - 1);
                }
                return;
            }
        }
        //this.pager = this.pagerService.getPager(this.pTableData.length, page, this.pageSize, this.maximumPaggingDisplay);
        if (this.pTableData.length == 0) {
            this.pagedItems = [];
        }
        else {
            this.pagedItems = this.pTableData.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
        this.pTableDatalength = this.pTableData.length;
        //showing page number
        this.startPageNo = (this.pager.currentPage - 1) * this.pager.pageSize + 1;
        let endPageNo = 0;
        if (this.pTableData.length == 0) {
            this.startPageNo = 0;
        }
        if ((this.pager.currentPage) * this.pager.pageSize < this.pTableData.length) {
            endPageNo = (this.pager.currentPage) * this.pager.pageSize;
        }
        else {
            endPageNo = this.pTableData.length;
        }
        if (this.pTableData.length == this.pTableMasterData.length) {
            this.showingPageDetails = 'Showing ' + this.startPageNo + ' to ' + endPageNo + ' of ' + this.pTableData.length + ' records';
        }
        else {
            this.showingPageDetails = 'Showing ' + this.startPageNo + ' to ' + endPageNo + ' of ' + this.pTableData.length + ' records (filtered from ' + this.pTableMasterData.length + ' total records)';
        }
        //to remove checkbox 
        if (this.pTableSetting["enabledCheckbox"]) {
            jQuery("#" + this.pTableSetting["tableID"] + " th input.p-table-select-all").prop("checked", false);
            jQuery("#" + this.pTableSetting["tableID"] + " td input.checkbox-" + this.pTableSetting["tableID"]).prop("checked", false);
        }
        //call the function after the page changes
        this.callbackFnOnPageChange.emit({ pageNo: page });
    }
    fnColumnSorting(colName, pTableID, isSorting = true) {
        if (!isSorting) {
            return;
        }
        if (this.pTableMasterData.length < 1) {
            return;
        }
        //console.log(this.pTableMasterData);
        if (jQuery("#" + pTableID + " thead th." + colName).hasClass("sorting")) {
            jQuery("#" + pTableID + " thead th.sorting-active").addClass("sorting").removeClass("sorting-down").removeClass("sorting-up");
            jQuery("#" + pTableID + " thead th." + colName).addClass("sorting-up").removeClass("sorting");
            this.pTableData = this.pTableData.sort((n1, n2) => {
                if (n1[colName] > n2[colName]) {
                    return 1;
                }
                if (n1[colName] < n2[colName]) {
                    return -1;
                }
                return 0;
            });
        }
        else if (jQuery("#" + pTableID + " thead th." + colName).hasClass("sorting-up")) {
            jQuery("#" + pTableID + " thead th." + colName).addClass("sorting-down").removeClass("sorting-up");
            this.pTableData = this.pTableData.sort((n1, n2) => {
                if (n1[colName] < n2[colName]) {
                    return 1;
                }
                if (n1[colName] > n2[colName]) {
                    return -1;
                }
                return 0;
            });
        }
        else if (jQuery("#" + pTableID + " thead th." + colName).hasClass("sorting-down")) {
            jQuery("#" + pTableID + " thead th." + colName).addClass("sorting-up").removeClass("sorting-down");
            this.pTableData = this.pTableData.sort((n1, n2) => {
                if (n1[colName] > n2[colName]) {
                    return 1;
                }
                if (n1[colName] < n2[colName]) {
                    return -1;
                }
                return 0;
            });
        }
        this.setPage(1);
    }
    fnOperationOnCheckBox(event, args) {
        if (event.target.checked) {
            jQuery(".checkbox-" + args).prop("checked", true);
        }
        else {
            jQuery(".checkbox-" + args).prop("checked", false);
        }
        this.checkboxCallbackFn.emit({ checkedStatus: event.target.checked, record: "", type: "all-select" });
    }
    fnIndividualCheckboxAction(e, recordInfo, args) {
        let unchecked = jQuery('.checkbox-' + args + ':checkbox:not(:checked)');
        if (unchecked.length === 0) {
            jQuery(".select-all-" + args).prop("checked", true);
        }
        else if (unchecked.length > 0) {
            jQuery(".select-all-" + args).prop("checked", false);
        }
        this.checkboxCallbackFn.emit({ checkedStatus: e.target.checked, record: recordInfo, type: "individual" });
    }
    fnActivityOnRecord(action, recordInfo) {
        this.customActivityOnRecord.emit({ action: action, record: recordInfo });
    }
    fnIndividualRadioAction(e, recordInfo) {
        this.radioButtonCallbackFn.emit({ checkedStatus: e.target.checked, record: recordInfo, type: "individual" });
    }
    fnChangePTableRowLength(records) {
        this.pageSize = records;
        this.setPage(1);
    }
    fnChangePTableDataLength(event) {
        let records = event.target.value;
        this.pageSize = records;
        this.setPage(1);
    }
    fnResizeColumn(event) {
        this.start = event.target;
        this.pressed = true;
        this.startX = event.x;
        this.startWidth = jQuery(this.start).parent().width();
        this.initResizableColumns();
    }
    initResizableColumns() {
        this.renderer.listenGlobal('body', 'mousemove', (event) => {
            if (this.pressed) {
                let width = this.startWidth + (event.x - this.startX);
                jQuery(this.start).parent().css({ 'min-width': width, 'max-   width': width });
                let index = jQuery(this.start).parent().index() + 1;
                jQuery('#' + this.pTableSetting.tableID + ' tr td:nth-child(' + index + ')').css({ 'min-width': width, 'max-width': width });
            }
        });
        this.renderer.listenGlobal('body', 'mouseup', (event) => {
            if (this.pressed) {
                this.pressed = false;
            }
        });
    }
    fnIndividualColumnFilterContext(columnDef, event) {
        this.filterCustomColumnName = columnDef.internalName;
        this.filterColumnTitle = columnDef.headerName;
        this.columnSearchValue = "";
        this.columnWiseMasterData = this.fnFindUniqueColumnWithCheckedFlag(this.pTableData, this.filterCustomColumnName) || [];
        this.customFilterUniqueArray = JSON.parse(JSON.stringify(this.columnWiseMasterData));
        let xPostion = 0;
        //to checked all
        this.filterItemsCheckedAll = true;
        //console.log(event);
        //to set position of pop-up
        let totalScreenX = window.screen.width;
        //console.log("total X: " + totalScreenX + " :pageY" + event.pageY + "event.target.offsetParent.offsetTop" + event.target.offsetParent.offsetTop + "target.offsetTop" + event.target.offsetTop + "event.view.scrollY:" + event.view.scrollY)
        if (event.pageX + 290 > totalScreenX) {
            xPostion = totalScreenX - 320;
        }
        else {
            xPostion = event.pageX;
        }
        let yPosition = event.pageY + 20;
        //let yPosition = '136';
        let ofset = { "top": yPosition, "left": xPostion };
        //let ofset = { "top": event.pageY - event.target.offsetParent.offsetTop - event.target.offsetTop - event.view.scrollY, "left": event.pageX - event.target.offsetParent.offsetLeft - event.target.offsetLeft - event.view.scrollX };
        //jQuery("#fitlerInfo").css(ofset).show();
        //to show modal
        //jQuery("#" + this.pTableSetting.tableID + "-fitlerInfo").css(ofset).show();
        let position = jQuery(event.currentTarget).position();
        let offset = jQuery(event.currentTarget).offset();
        position.left = offset.left - 270;
        position.top += 25;
        if (position.left + 290 > totalScreenX - 270 - 50) {
            console.log("left:", position.left + 290, "X:", totalScreenX - 270 - 50, "D:", totalScreenX - 270 - 50 - position.left + 290);
            if (totalScreenX - 270 - 50 - position.left + 290 < 340) {
                position.left = position.left - 300;
            }
            else {
                position.left = position.left - 130;
            }
        }
        jQuery("#" + this.pTableSetting.tableID + "-fitlerInfo").css(position).show();
        //to set color of filter popup icon
        let checkFilterApplied = this.storedFilteredInfo.filter((rec) => { if (rec.columnName == this.filterCustomColumnName) {
            return true;
        }
        else {
            return false;
        } }) || [];
        this.popupFilterColor = 'black';
        if (checkFilterApplied.length > 0) {
            this.popupFilterColor = 'red';
        }
    }
    fnCustomFilterSelectAll(event) {
        if (event.target.checked) {
            this.filterItemsCheckedAll = true;
            this.customFilterUniqueArray.forEach((rec) => {
                rec.checked = true;
            });
        }
        else {
            this.filterItemsCheckedAll = false;
            this.customFilterUniqueArray.forEach((rec) => {
                rec.checked = false;
            });
        }
    }
    fnCustomFilterIndividualRecord() {
        setTimeout(() => {
            let unSelectedRecords = this.customFilterUniqueArray.filter((rec) => {
                if (rec.checked == true) {
                    return true;
                }
                else {
                    return false;
                }
            }) || [];
            console.log("unSelectedRecords.length", unSelectedRecords.length, "this.customFilterUniqueArray.length", this.customFilterUniqueArray.length);
            this.filterItemsCheckedAll = unSelectedRecords.length == this.customFilterUniqueArray.length ? true : false;
        }, 300);
    }
    fnApplyCustomFilter() {
        this.pTableData = this.fnCustomFilterFromMasterArray(this.pTableData, this.filterCustomColumnName, this.customFilterUniqueArray.filter((rec) => rec.checked == true)) || [];
        jQuery("#" + this.pTableSetting["tableID"] + " #filter-icon-" + this.filterCustomColumnName).css('color', 'red');
        jQuery("#" + this.pTableSetting.tableID + "-fitlerInfo").hide();
        if (this.storedFilteredInfo.length > 0) {
            this.storedFilteredInfo = this.storedFilteredInfo.filter((rec) => { if (rec.columnName == this.filterCustomColumnName) {
                return false;
            }
            else {
                return true;
            } }) || [];
            this.storedFilteredInfo.push({ columnName: this.filterCustomColumnName, checkedItem: this.customFilterUniqueArray.filter((rec) => { if (rec.checked) {
                    return true;
                }
                else {
                    return false;
                } }) });
        }
        else {
            this.storedFilteredInfo.push({ columnName: this.filterCustomColumnName, checkedItem: this.customFilterUniqueArray.filter((rec) => { if (rec.checked) {
                    return true;
                }
                else {
                    return false;
                } }) });
        }
        this.setPage(1);
    }
    fnFilterPTableColumn(arg) {
        if (this.columnSearchValue.trim() != "") {
            this.filterItemsCheckedAll = false;
            this.customFilterUniqueArray = this.columnWiseMasterData.filter((rec) => {
                if (rec.data == null) {
                    return false;
                }
                else {
                    if (rec.data.toLowerCase().includes(this.columnSearchValue.toLowerCase())) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }) || [];
        }
        else {
            this.filterItemsCheckedAll = true;
            this.customFilterUniqueArray = JSON.parse(JSON.stringify(this.columnWiseMasterData));
        }
    }
    fnCustomFilterFromMasterArray(masterObject, findKey, data) {
        var o = {}, i, outer, l = masterObject.length, filteredData = [];
        for (outer = 0; outer < data.length; outer++) {
            let filterMasterData = masterObject.filter((record) => record['' + findKey + ''] == data[outer]["data"]) || [];
            filteredData = filteredData.concat(filterMasterData);
        }
        //console.log(filteredData)
        this.filterItemsCheckedAll = true;
        return filteredData;
    }
    fnApplyCustomCustomization() {
        return __awaiter(this, void 0, void 0, function* () {
            // //for header fixed 
            let visibleColumnCount = 0;
            this.pTableColumnCustomizationList.forEach((rec) => {
                if (rec.visible == true) {
                    visibleColumnCount = visibleColumnCount + 1;
                }
            });
            let colWidth = (100 / visibleColumnCount).toFixed(5);
            this.pTableSetting.tableColDef.forEach((rec) => {
                let columnLooping = this.pTableColumnCustomizationList.filter((record) => { if (record.internalName == rec.internalName) {
                    return true;
                }
                else {
                    return false;
                } }) || [];
                if (columnLooping.length > 0) {
                    rec.visible = columnLooping[0].visible;
                    rec.width = colWidth.toString() + '%';
                }
                else {
                    rec.visible = false;
                }
            });
            this.setPage(1);
            //assign again 
            if (this.storedFilteredInfo.length > 0) {
                this.pTableData = JSON.parse(JSON.stringify(this.pTableMasterData)) || [];
                this.storedFilteredInfo.forEach((rec) => {
                    jQuery("#" + this.pTableSetting["tableID"] + " #filter-icon-" + rec.columnName).css('color', 'white');
                });
                this.storedFilteredInfo = [];
                this.setPage(1);
            }
            //await this.fnShowPreviousFilteredState();   
            this.pTableColumnCustomizationList = JSON.parse(JSON.stringify(this.pTableSetting.tableColDef));
            this.pTableColumnReorder = JSON.parse(JSON.stringify(this.pTableSetting.tableColDef)) || [];
            //to set dynamic table width
            if (this.pTableSetting.enabledDynamicTableWidth) {
                let columnLooping = this.pTableSetting.tableColDef.filter((record) => { if (record.visible == true || record.visible == null) {
                    return true;
                }
                else {
                    return false;
                } }) || [];
                if (columnLooping.length > 3) {
                    //this.pTableSetting.pTableStyle.overflowContentWidth = '150%';
                    this.pTableSetting.pTableStyle.overflowContentWidth = '150%';
                    this.pTableSetting.pTableStyle.tableOverflowX = true;
                }
                else {
                    this.pTableSetting.pTableStyle.overflowContentWidth = '100%';
                    this.pTableSetting.pTableStyle.tableOverflowX = false;
                }
            }
        });
    }
    fnPTableColumnCustomizationSearch(searchVal) {
        this.pTableColumnCustomizationList = this.pTableSetting.tableColDef.filter((record) => { if (record.headerName.toLowerCase().includes(searchVal.toLowerCase())) {
            return true;
        }
        else {
            return false;
        } }) || [];
    }
    fnCloseCustomFilter() {
        //jQuery("#fitlerInfo").hide();
        jQuery("#" + this.pTableSetting.tableID + "-fitlerInfo").hide();
    }
    selectTab(tab) {
        this.settingsTabs.forEach((rec) => {
            if (rec.tab == tab.tab) {
                rec.active = true;
            }
            else {
                rec.active = false;
            }
        });
        this.activeTabName = tab.tab;
    }
    fnChangeColumnOrder(colDef, index, status) {
        let old_index = index;
        let new_index = 0;
        //to check valid index
        if (index <= 0 && status == 'up') {
            return false;
        }
        else if (index >= this.pTableColumnReorder.length - 1 && status == 'down') {
            return false;
        }
        if (status == 'up') {
            new_index = index - 1;
        }
        else {
            new_index = index + 1;
        }
        if (new_index >= this.pTableColumnReorder.length) {
            var k = new_index - this.pTableColumnReorder.length;
            while ((k--) + 1) {
                this.pTableColumnReorder.push(undefined);
            }
        }
        this.pTableColumnReorder.splice(new_index, 0, this.pTableColumnReorder.splice(old_index, 1)[0]);
    }
    fnApplyReorderColumn() {
        this.pTableSetting.tableColDef = JSON.parse(JSON.stringify(this.pTableColumnReorder));
        this.pTableColumnCustomizationList = JSON.parse(JSON.stringify(this.pTableSetting.tableColDef)) || [];
    }
    onDrop(src, trg) {
        this.fnModeDragDropContent(this.pTableColumnReorder.map(x => x.internalName).indexOf(src.internalName), this.pTableColumnReorder.map(x => x.internalName).indexOf(trg.internalName));
        //myArray.map(x => x.hello).indexOf('stevie')
    }
    fnModeDragDropContent(src, trg) {
        src = parseInt(src);
        trg = parseInt(trg);
        if (trg >= this.pTableColumnReorder.length) {
            var k = trg - this.pTableColumnReorder.length;
            while ((k--) + 1) {
                this.pTableColumnReorder.push(undefined);
            }
        }
        this.pTableColumnReorder.splice(trg, 0, this.pTableColumnReorder.splice(src, 1)[0]);
        return this; // for testing purposes
    }
    fnFindUniqueColumnWithCheckedFlag(objectSet, findKey) {
        var o = {}, i, l = objectSet.length, r = [];
        for (i = 0; i < l; i++) {
            o[objectSet[i][findKey]] = objectSet[i][findKey];
        }
        ;
        for (i in o)
            r.push({ checked: true, data: o[i] });
        return r;
    }
    clearFilterFromFilterPopup() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pTableData = JSON.parse(JSON.stringify(this.pTableMasterData));
            if (this.globalSearchValue.trim() != "") {
                yield this.fnFilterPTable(this.globalSearchValue, true);
            }
            //to remove filter from storedFilteredInfo variable
            if (this.storedFilteredInfo.length > 0) {
                this.storedFilteredInfo = this.storedFilteredInfo.filter((rec) => { if (rec.columnName == this.filterCustomColumnName) {
                    return false;
                }
                else {
                    return true;
                } }) || [];
            }
            if (this.storedFilteredInfo.length > 0) {
                this.storedFilteredInfo.forEach((rec) => {
                    this.pTableData = this.fnCustomFilterFromMasterArray(this.pTableData, rec.columnName, rec.checkedItem) || [];
                });
            }
            jQuery("#" + this.pTableSetting["tableID"] + " #filter-icon-" + this.filterCustomColumnName).css('color', 'white');
            jQuery("#" + this.pTableSetting.tableID + "-fitlerInfo").hide();
            this.setPage(1);
        });
    }
    fnShowPreviousFilteredState() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.storedFilteredInfo.length > 0) {
                this.storedFilteredInfo.forEach((rec) => {
                    this.pTableData = this.fnCustomFilterFromMasterArray(this.pTableData, rec.columnName, rec.checkedItem) || [];
                    jQuery("#" + this.pTableSetting["tableID"] + " #filter-icon-" + rec.columnName).css('color', 'red');
                });
            }
            // this.setPage(1);
        });
    }
    fnReflowTable() {
        if (this.pTableSetting.enabledCustomReflow) {
            if (this.customReflowActive) {
                this.customReflowActive = false;
                this.fnResetStyle("retrive");
            }
            else {
                this.customReflowActive = true;
                this.fnResetStyle("reset");
            }
            this.customReflowFn.emit(this.pTableSetting.tableID);
        }
        else {
            if (this.activeReflow) {
                jQuery("#" + this.pTableSetting.tableID + "-fitlerInfo").hide();
                this.activeReflow = false;
                this.fnResetStyle("retrive");
            }
            else {
                this.fnResetStyle("reset");
                this.activeReflow = true;
            }
        }
    }
    fnResetStyle(action) {
        if (action == "reset") {
            //remove previous style
            //if (this.pTableSetting.pTableStyle.overflowContentWidth != undefined && this.pTableSetting.pTableStyle.overflowContentWidth != null) {
            if (this.pTableSetting.pTableStyle != undefined && this.pTableSetting.pTableStyle != null) {
                this.tempStyle = [{ tableOverflow: this.pTableSetting.pTableStyle.tableOverflow || false, tableOverflowX: this.pTableSetting.pTableStyle.tableOverflowX || false, tableOverflowY: this.pTableSetting.pTableStyle.tableOverflowY || false, overflowContentWidth: this.pTableSetting.pTableStyle.overflowContentWidth || null, overflowContentHeight: this.pTableSetting.pTableStyle.overflowContentHeight || null }];
                this.pTableSetting.pTableStyle.overflowContentWidth = null;
                this.pTableSetting.pTableStyle.tableOverflowY = true;
                this.pTableSetting.pTableStyle.tableOverflow = false;
            }
        }
        else if (action == "retrive") {
            //to reset previous style
            if (this.tempStyle.length > 0) {
                this.pTableSetting.pTableStyle.overflowContentWidth = this.tempStyle[0].overflowContentWidth;
                this.pTableSetting.pTableStyle.overflowContentHeight = this.tempStyle[0].overflowContentHeight;
                this.pTableSetting.pTableStyle.tableOverflow = this.tempStyle[0].tableOverflow;
                this.pTableSetting.pTableStyle.tableOverflowX = this.tempStyle[0].tableOverflowX;
                this.pTableSetting.pTableStyle.tableOverflowY = this.tempStyle[0].tableOverflowY;
            }
        }
    }
    fnDownloadPDF() {
        let title = (this.pTableSetting.tableName.toString());
        var columns = [];
        this.pTableSetting.tableColDef.forEach((col) => {
            columns.push({ title: col.headerName, dataKey: col.internalName });
        });
        var rows = this.pTableData || [];
        // Only pt supported (not mm or in) 
        var doc = new jsPDF('p', 'pt');
        var header = function (data) {
            doc.setFontSize(18);
            doc.setTextColor(40);
            //doc.setFontStyle('normal');
            //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
            doc.text("Testing Report", data.settings.margin.left, 50);
        };
        var options = {
            beforePageContent: header,
            margin: {
                top: 200
            },
            addPageContent: function (data) {
                doc.text(title, 40, 30);
            },
            startY: doc.autoTableEndPosY() + 40
        };
        doc.autoTable(columns, rows, options);
        doc.save(this.pTableSetting.tableName + '.pdf');
    }
    fnDownloadCSV() {
        let exportFileName = this.pTableSetting.tableName.replace(/\' '/g, '_');
        let exprtcsv = [];
        var csvData = this.convertToCSV(this.pTableData);
        var blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, this.createFileName(exportFileName));
        }
        else {
            var link = document.createElement("a");
            if (link.download !== undefined) {
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", this.createFileName(exportFileName));
                //link.style = "visibility:hidden";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
    convertToCSV(objarray) {
        var array = typeof objarray != 'object' ? JSON.parse(objarray) : objarray;
        var str = '';
        var row = "";
        //for header row 
        this.pTableSetting.tableColDef.forEach((rec) => {
            if (rec.visible == null || rec.visible == true) {
                row += rec.headerName + ',';
            }
        });
        /*for (var index in objarray[0]) {
            //Now convert each value to string and comma-separated
            row += index + ',';
        }*/
        row = row.slice(0, -1);
        //append Label row with line break
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            //  for (var index in array[i]) {
            //      if (line != '') line += ','
            //      line += JSON.stringify(array[i][index]);
            //  }
            this.pTableSetting.tableColDef.forEach((rec) => {
                if (rec.visible == null || rec.visible == true) {
                    line += JSON.stringify(array[i][rec.internalName]) + ',';
                    ;
                }
            });
            line = line.slice(0, -1);
            str += line + '\r\n';
        }
        return str;
    }
    createFileName(exportFileName) {
        var date = new Date();
        return (exportFileName + "_" +
            date.toLocaleDateString() + "_" +
            date.toLocaleTimeString()
            + '.csv');
    }
    fnPrintPTable() {
        let tableHeader = "", tableBody = "";
        let slNo = 0;
        //add SL 
        if (this.pTableSetting.enabledSerialNo) {
            tableHeader = tableHeader + ` <td  align="center">ক্রমিক </td> `;
        }
        this.pTableSetting.tableColDef.forEach((col) => {
            tableHeader = tableHeader + ` <td  align="center">${col.headerName} </td> `;
        });
        //bind table body
        this.pTableData.forEach((rec) => {
            tableBody = tableBody + ` <tr style="page-break-inside: avoid;"> `;
            if (this.pTableSetting.enabledSerialNo) {
                slNo = slNo + 1;
                tableBody = tableBody + ` <td  align="center">${slNo} </td> `;
            }
            this.pTableSetting.tableColDef.forEach((col) => {
                tableBody = tableBody + ` <td  align="center">${rec[col.internalName] || ''} </td> `;
            });
            tableBody = tableBody + ` </tr> `;
        });
        //to show total 
        if (this.pTableSetting.enabledTotal) {
            tableBody = tableBody + ` <tr style="page-break-inside: avoid;"> `;
            this.pTableSetting.tableColDef.forEach((col, index) => {
                if (index == 0) {
                    tableBody = tableBody + ` <td  align="center"><b>${this.pTableSetting.totalTitle || 'Total'} </b></td> `;
                }
                else {
                    if (col.showTotal) {
                        tableBody = tableBody + ` <td  align="center"><b>${this.fnSummationTotal(col.internalName)} </b></td> `;
                    }
                    else {
                        tableBody = tableBody + ` <td  align="center"></td> `;
                    }
                }
            });
            tableBody = tableBody + ` </tr> `;
        }
        //this.UserInfo[0].Id;
        /* <tr> <td colspan="2" align="center">জোয়ারসাহারা বাস ডিপো </td> </tr>
            <tr> <td colspan="2" align="center">খিলক্ষেত, ঢাকা।</td> </tr>
        */
        let printContents, popupWin;
        printContents = `<table style="width:100%; border:0">
    <tr>
    <td colspan="2" align="center">বাংলাদেশ সড়ক পরিবহন কর্পোরেশন </td> </tr>
    <tr> <td colspan="2" align="center">${this.UserInfo[0].CompnayNameBangla} </td> </tr>
    <tr> <td colspan="2" align="center">${this.UserInfo[0].CompanyAddressBangla}</td> </tr>
    <tr> <td colspan="2" align="center"><b>${this.pTableSetting.tableName}</b></td> </tr>
         <tr>
          <td  colspan="2">         
               <table border="1" style="width:100%; border-collapse: collapse; font-size:10pt;">
                 <tbody>
                   <tr style="background-color: rgba(0, 0, 0, 0.05);font-weight:bold;">
                   ${tableHeader}
                   </tr>
                 </tbody>
                 <tr>
                 ${tableBody}
                 </tr>
               </table>
           </td>
          </tr>
      </table>
      `;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
        <html>
          <head>
            <title>${this.pTableSetting.tableName} (system generated:B-Track)</title>
            <style>
            //........Customized style.......
            </style>
          </head>
      <body onload="window.print();window.close()">${printContents}</body>
        </html>`);
        popupWin.document.close();
    }
    onScroll(event, doc) {
        //console.log(event)
        if (this.pTableSetting.enabledAutoScrolled) {
            const scrollBottom = event.target.scrollHeight;
            const scrollTop = event.target.scrollTop;
            const scrollHeight = event.target.scrollHeight;
            const offsetHeight = event.target.offsetHeight;
            const scrollPosition = scrollTop + offsetHeight;
            const pageHeight = window.screen.height;
            const scrollTreshold = scrollHeight - pageHeight;
            //console.log("scroll bottom "+(scrollBottom - scrollTop)+" offsetHeight"+offsetHeight);
            if (Math.round(scrollBottom - scrollTop) == offsetHeight) {
                this.pageSize = this.pageSize + 20;
                this.setPage(1);
            }
        }
    }
    fnSummationTotal(columnName) {
        let sum = 0;
        this.pTableData.forEach((rec) => {
            sum = Number(sum) + Number(rec[columnName] == null ? 0 : isNaN(rec[columnName]) == true ? 0 : rec[columnName]);
        });
        return sum;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
    __metadata('design:type', Object)
], PTableComponent.prototype, "pTableSetting", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
    __metadata('design:type', Array)
], PTableComponent.prototype, "pTableMasterData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(), 
    __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === 'function' && _a) || Object)
], PTableComponent.prototype, "checkboxCallbackFn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(), 
    __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === 'function' && _b) || Object)
], PTableComponent.prototype, "customActivityOnRecord", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(), 
    __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === 'function' && _c) || Object)
], PTableComponent.prototype, "callbackFnOnPageChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(), 
    __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === 'function' && _d) || Object)
], PTableComponent.prototype, "radioButtonCallbackFn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(), 
    __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === 'function' && _e) || Object)
], PTableComponent.prototype, "cellClickCallbackFn", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(), 
    __metadata('design:type', (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === 'function' && _f) || Object)
], PTableComponent.prototype, "customReflowFn", void 0);
PTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-p-table',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].Default,
        template: __webpack_require__(697),
        styles: [__webpack_require__(696)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__p_table_pagger__["a" /* PagerService */]],
    }), 
    __metadata('design:paramtypes', [(typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__p_table_pagger__["a" /* PagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__p_table_pagger__["a" /* PagerService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* KeyValueDiffers */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* KeyValueDiffers */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Renderer */]) === 'function' && _j) || Object])
], PTableComponent);
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/p-table.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__p_table_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drag_drop_service_drag_n_drop__ = __webpack_require__(532);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PTableModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let PTableModule = class PTableModule {
};
PTableModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__p_table_component__["a" /* PTableComponent */], __WEBPACK_IMPORTED_MODULE_5__drag_drop_service_drag_n_drop__["a" /* MakeDraggable */], __WEBPACK_IMPORTED_MODULE_5__drag_drop_service_drag_n_drop__["b" /* MakeDroppable */], __WEBPACK_IMPORTED_MODULE_5__drag_drop_service_drag_n_drop__["c" /* Draggable */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__p_table_component__["a" /* PTableComponent */]]
    }), 
    __metadata('design:paramtypes', [])
], PTableModule);
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/p-table.module.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Shared_component_p_confirmation_confirm_service__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AppComponent = class AppComponent {
    constructor(_confirm) {
        this._confirm = _confirm;
        this.name = 'Angular';
        this.todos = [{ order: 0, description: 'A Clean up code' },
            { order: 1, description: 'B Blog about it' },
            { order: 2, description: 'C Push code to Github' },
            { order: 3, description: 'D Share blog on twitter' },
            { order: 3, description: 'E Share blog on twitter' },
            { order: 3, description: 'F Share blog on twitter' },
            { order: 3, description: 'G Share blog on twitter' },
            { order: 3, description: 'H Share blog on twitter' },
            { order: 3, description: 'I Share blog on twitter' }];
        this.activeReflow = false;
        this.territoryNodes = [
            { NodeCode: '1,0', NodeName: 'Node, A', BrickOutletCount: 10 },
            { NodeCode: '1,1', NodeName: 'Node, B', BrickOutletCount: 10 },
            { NodeCode: '1,2', NodeName: 'Node, C', BrickOutletCount: 11 },
            { NodeCode: '13', NodeName: 'Node, C', BrickOutletCount: 10 },
            { NodeCode: '10', NodeName: 'Node A', BrickOutletCount: 12 },
            { NodeCode: '10', NodeName: 'Node D', BrickOutletCount: 12 },
            { NodeCode: '10', NodeName: 'Node X', BrickOutletCount: 10 },
            { NodeCode: '11', NodeName: 'Node Y', BrickOutletCount: 10 },
            { NodeCode: '12', NodeName: 'Node Z', BrickOutletCount: 11 },
            { NodeCode: '13', NodeName: 'Node M', BrickOutletCount: 10 },
            { NodeCode: '10', NodeName: 'Node A', BrickOutletCount: 12 },
            { NodeCode: '10', NodeName: 'Node D', BrickOutletCount: 12 },
            { NodeCode: '10', NodeName: 'Node E', BrickOutletCount: 10 },
            { NodeCode: '11', NodeName: 'Node F', BrickOutletCount: 10 },
            { NodeCode: '12', NodeName: 'Node G', BrickOutletCount: 11 },
            { NodeCode: '13', NodeName: 'Node H', BrickOutletCount: 10 },
            { NodeCode: '10', NodeName: 'Node I', BrickOutletCount: 12 },
            { NodeCode: '10', NodeName: 'Node J', BrickOutletCount: 12 },
            { NodeCode: '10', NodeName: 'Node X', BrickOutletCount: 10 },
            { NodeCode: '2', NodeName: 'Node Y', BrickOutletCount: 10 },
            { NodeCode: '1', NodeName: 'Node Z', BrickOutletCount: 11 },
            { NodeCode: '13', NodeName: 'Node M', BrickOutletCount: 1 },
            { NodeCode: '10', NodeName: 'Node A', BrickOutletCount: 15 },
            { NodeCode: '10', NodeName: 'Node D', BrickOutletCount: 1 },
            { NodeCode: '10', NodeName: 'Node X', BrickOutletCount: 10 },
            { NodeCode: '11', NodeName: 'Node Y', BrickOutletCount: 10 },
            { NodeCode: '12', NodeName: 'Node Z', BrickOutletCount: 11 },
            { NodeCode: '13', NodeName: 'Node M', BrickOutletCount: 10 },
            { NodeCode: '10', NodeName: 'Node A', BrickOutletCount: 12 },
            { NodeCode: '10', NodeName: 'Node D', BrickOutletCount: 12 },
            { NodeCode: '10', NodeName: 'Node E', BrickOutletCount: 10 },
            { NodeCode: '11', NodeName: 'Node F', BrickOutletCount: 10 },
            { NodeCode: '12', NodeName: 'Node G', BrickOutletCount: 11 },
            { NodeCode: '13', NodeName: 'Node H', BrickOutletCount: 10 },
            { NodeCode: '10', NodeName: 'Node I', BrickOutletCount: 12 },
            { NodeCode: '10', NodeName: 'Node J', BrickOutletCount: 12 },
            { NodeCode: '10', NodeName: 'Node X', BrickOutletCount: 10 },
            { NodeCode: '2', NodeName: 'Node Y', BrickOutletCount: 10 },
            { NodeCode: '1', NodeName: 'Node Z', BrickOutletCount: 11 },
            { NodeCode: '13', NodeName: 'Node M', BrickOutletCount: 1 },
            { NodeCode: '10', NodeName: 'Node A', BrickOutletCount: 15 },
            { NodeCode: '10', NodeName: 'Node D', BrickOutletCount: 1 }
        ];
    }
    ngOnInit() {
        this.territoryListTableBind = {
            tableID: "territory-list-table",
            tableClass: "table table-border ",
            tableName: "Territory List",
            tableRowIDInternalName: "NodeCode",
            tableColDef: [
                { headerName: 'Code', width: '10%', internalName: 'NodeCode', className: "territory-list-code", sort: true, type: "", onClick: "" },
                { headerName: 'Code 2', width: '10%', internalName: 'NodeCode', className: "territory-list-code", sort: true, type: "", onClick: "" },
                { headerName: 'Territory', width: '40%', internalName: 'NodeName', className: "territory-list-territory", type: "", onClick: "" },
                { headerName: 'Brick Count', width: '20%', internalName: 'BrickOutletCount', className: "territory-list-bricks", sort: false, type: "", onClick: "Yes" },
                { headerName: 'Brick Coun2', width: '10%', internalName: 'BrickOutletCount', className: "territory-list-bricks", sort: false, type: "", onClick: "Yes" },
                { headerName: 'Brick Coun3', width: '10%', internalName: 'BrickOutletCount', className: "territory-list-bricks", sort: false, type: "", onClick: "Yes" },
            ],
            enabledSearch: true,
            enabledSerialNo: true,
            pageSize: 10,
            enabledEditBtn: true,
            enabledDataLength: true,
            enabledCellClick: true,
            enabledColumnFilter: true,
            enabledReflow: true,
            enabledColumnSetting: true,
            enabledReordering: true,
            enabledPagination: true,
            enabledAutoScrolled: false,
            enabledDownloadBtn: true,
            enabledFixedHeader: false,
            pTableStyle: {
                tableOverflowY: true,
                overflowContentHeight: '550px' }
        };
        this.fnCounter();
    }
    showPTable() {
    }
    onDrop(src, trg) {
        this._moveRow(this.todos.map(x => x.description).indexOf(src.description), this.todos.map(x => x.description).indexOf(trg.description));
        //myArray.map(x => x.hello).indexOf('stevie')
    }
    _moveRow(src, trg) {
        debugger;
        src = parseInt(src);
        trg = parseInt(trg);
        if (trg >= this.todos.length) {
            var k = trg - this.todos.length;
            while ((k--) + 1) {
                this.todos.push(undefined);
            }
        }
        this.todos.splice(trg, 0, this.todos.splice(src, 1)[0]);
        return this; // for testing purposes
    }
    prompt() {
        this._confirm.activate('Confirm?')
            .then(result => {
            alert(result);
        }).catch(error => {
            console.log(error);
        });
    }
    fnCustomReflowSetting(event) {
        if (this.activeReflow) {
            jQuery("#" + event + "-fitlerInfo").hide();
            this.activeReflow = false;
        }
        else {
            this.activeReflow = true;
        }
    }
    fnCounter() {
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(100 * 60).subscribe(x => {
            console.log("Time:  " + Date());
        });
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(698),
        styles: []
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Shared_component_p_confirmation_confirm_service__["a" /* ConfirmService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__Shared_component_p_confirmation_confirm_service__["a" /* ConfirmService */]) === 'function' && _a) || Object])
], AppComponent);
var _a;
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/app.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Shared_modules_p_table_p_table_module__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Shared_component_drag_drop_service_drag_n_drop__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Shared_component_p_confirmation_confirm_service__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Shared_component_p_confirmation_confirm_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(323);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__Shared_modules_p_table_p_table_module__["a" /* PTableModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__Shared_component_drag_drop_service_drag_n_drop__["a" /* MakeDraggable */], __WEBPACK_IMPORTED_MODULE_4__Shared_component_drag_drop_service_drag_n_drop__["b" /* MakeDroppable */], __WEBPACK_IMPORTED_MODULE_4__Shared_component_drag_drop_service_drag_n_drop__["c" /* Draggable */], __WEBPACK_IMPORTED_MODULE_6__Shared_component_p_confirmation_confirm_component__["a" /* ConfirmComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__Shared_component_p_confirmation_confirm_service__["a" /* ConfirmService */]]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/app.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=C:/Projects/ECP/Demo PTable/P-Table-2/src/environment.js.map

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = ".p-table thead {\r\n    background-color: #3b4f5a;\r\n}\r\n\r\n.p-table-header,\r\n.panel-heading,\r\n.p-table-footer {\r\n    background-color: #E8F5E9!important;\r\n    padding: 8px;\r\n}\r\n\r\n.p-table-body {\r\n    padding: 0px!important;\r\n}\r\n\r\n.p-table-content {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.p-table {\r\n    margin-bottom: 0px!important;\r\n    width: 100%;\r\n}\r\n\r\n.p-table-header {\r\n    background-color: #B1F1B2;\r\n}\r\n\r\n.p-table .p-table-body .table-bordered>tbody>tr>td {\r\n    line-height: 30px;\r\n}\r\n\r\n.table td {\r\n    padding: 0.30rem!important;\r\n}\r\n\r\n.p-table {\r\n    font-size: 12px;\r\n}\r\n\r\n.p-table-footer {\r\n    font-size: 14px;\r\n}\r\n\r\n.p-table-footer .pagination {\r\n    margin: 0px!important;\r\n}\r\n\r\n.p-table tbody tr:hover td {\r\n    background-color: #eeeeee!important;\r\n}\r\n\r\n.search-table {\r\n    margin-right: 0px!important;\r\n    padding: 5px 0px 5px 0px!important;\r\n}\r\n\r\n.p-table-content .p-table-footer .p-table-aro-first {\r\n    left: -6px !important;\r\n}\r\n\r\n.p-table-content .p-table-footer .p-table-aro-last {\r\n    right: -6px !important;\r\n}\r\n\r\n.p-table-content .search-table .has-feedback {\r\n    margin-bottom: 0px !important;\r\n}\r\n\r\n.p-table th.p-table-row-checkbox {\r\n    /*width:60px !important;*/\r\n    min-width: 5% !important;\r\n    text-align: center;\r\n}\r\n\r\n.col-setting-title {\r\n    padding: 2px;\r\n    margin: 5px;\r\n}\r\n\r\n.p-table-column-up-arrow {\r\n    color: green!important;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n}\r\n\r\n.p-table-column-down-arrow {\r\n    color: blue;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n}\r\n\r\n.p-table thead th {\r\n    vertical-align: middle;\r\n    padding-left: 5px!important;\r\n}\r\n\r\n.btn-column-setting {\r\n    background-color: transparent;\r\n    border-radius: 10px;\r\n}\r\n\r\nspan.sort-icon {\r\n    display: block;\r\n    position: absolute;\r\n    top: 33%;\r\n    right: -4px;\r\n    margin: 0;\r\n    width: 18px;\r\n    height: 18px;\r\n    padding: 0;\r\n}\r\n\r\n.p-table thead th.sorting span.sort-icon {\r\n    background-image: url(\"/assets/images/sort_both.png\") !important;\r\n    background-repeat: no-repeat !important;\r\n    background-position: center right!important;\r\n}\r\n\r\n.p-table thead th.sorting-up span.sort-icon {\r\n    background-image: url(\"/assets/images/sort_asc.png\")!important;\r\n    background-repeat: no-repeat!important;\r\n    background-position: center right!important;\r\n}\r\n\r\n.p-table thead th.sorting-down span.sort-icon {\r\n    background-image: url(\"/assets/images/sort_desc.png\")!important;\r\n    background-repeat: no-repeat!important;\r\n    background-position: center right!important;\r\n}\r\n\r\n.p-table-content .panel-title {\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n/*New tabular property*/\r\n\r\n.p-table-footer .pagination>li>a,\r\n.p-table-footer .pagination>li>span {\r\n    padding: 6px 10px !important;\r\n}\r\n\r\n\r\n/*p-table header default color set*/\r\n\r\n.p-table-body .p-table thead th {\r\n    background: #3b4f5a;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 0px;\r\n    padding-top: 9px;\r\n    padding-bottom: 8px;\r\n    border-right: 1px solid #fff;\r\n    text-align: center;\r\n    font-size: 14px;\r\n}\r\n\r\n.p-table-overflow-x {\r\n    overflow-x: auto !important;\r\n    overflow-y: hidden;\r\n}\r\n\r\n.p-table-overflow-y {\r\n    overflow-y: auto !important;\r\n    overflow-x: hidden;\r\n}\r\n\r\n\r\n/*Individual record color css*/\r\n\r\n.p-table tr.individual-ptable-record-A td {\r\n    background: #d3f8d3 !important;\r\n}\r\n\r\n.p-table tr.individual-ptable-record-A:hover td {\r\n    background: #d3f8d3 !important;\r\n}\r\n\r\n.p-table tr.individual-ptable-record-Fail-Target td {\r\n    background: #FF5050 !important;\r\n}\r\n\r\n.p-table tr.individual-ptable-record-Fail-Target td:hover {\r\n    background: #FF5050 !important;\r\n}\r\n\r\n.p-table tr.ptable-total-row td {\r\n    background: #e8edff !important;\r\n}\r\n\r\n.p-table tr.ptable-total-row:hover td {\r\n    background: #e8edff !important;\r\n}\r\n\r\n\r\n/*end of Individual record color css*/\r\n\r\n\r\n/*   for column resize    */\r\n\r\n.p-table thead tr th {\r\n    position: relative;\r\n}\r\n\r\nspan.p-table-column-resizer {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    width: 8px;\r\n    height: 100%;\r\n    padding: 0;\r\n    cursor: col-resize;\r\n    border: 1px solid transparent;\r\n}\r\n\r\n\r\n/*   end of column resize    */\r\n\r\n\r\n/*    for custom filter */\r\n\r\n.p-table-custom-column-filter {\r\n    position: absolute;\r\n    /* position: fixed; */\r\n    /*height: 340px;*/\r\n    min-height: 263px;\r\n    max-height: 349px;\r\n    width: 288px;\r\n    background-color: #fff;\r\n    display: none;\r\n    z-index: 999999999;\r\n    border: 1px solid rgba(0, 0, 0, .2);\r\n    border-radius: 6px;\r\n    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\r\n}\r\n\r\n.p-table-column-filter-title {\r\n    padding: 8px 10px;\r\n    margin: 0;\r\n    font-size: 14px;\r\n    background-color: #e2ede4;\r\n    border-bottom: 1px solid #ebebeb;\r\n    border-radius: 5px 5px 0 0;\r\n    margin-bottom: 5px;\r\n    margin-top: 1px;\r\n    height: 32px;\r\n}\r\n\r\n.p-table-column-filter-footer {\r\n    padding-top: 1px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\nlabel.checkbox-inline {\r\n    clear: right;\r\n}\r\n\r\n.filterd-data {\r\n    margin-top: 5px;\r\n    margin-left: 20px;\r\n    margin-right: 5px;\r\n    margin-bottom: 5px;\r\n    min-height: 130px !important;\r\n    max-height: 215px !important;\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n}\r\n\r\n.filter-popup-remove-icon {\r\n    color: red;\r\n    font-size: 11px;\r\n    margin-left: -9px !important;\r\n}\r\n\r\nli.dragable {\r\n    font-weight: bold;\r\n    border-radius: 10px;\r\n    background-color: #e7e7e7;\r\n    padding: 5px;\r\n    width: 200px;\r\n    list-style: none;\r\n    cursor: move;\r\n    border-bottom-style: solid;\r\n}\r\n\r\nli.dragable:hover {\r\n    color: #0099ff;\r\n}\r\n\r\ndiv.dragable-content {\r\n    padding: 5px;\r\n}\r\n\r\nul.ul-dragable {\r\n    padding-left: 0px;\r\n}\r\n\r\n.p-table-custom-column-filter .arrow_box {\r\n    position: relative;\r\n    border: 4px solid #E8F5E9!important;\r\n    border-radius: 5px 5px 0 0;\r\n}\r\n\r\n.p-table-custom-column-filter .arrow_box:after,\r\n.p-table-custom-column-filter .arrow_box:before {\r\n    bottom: 100%;\r\n    left: 50%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n}\r\n\r\n.p-table-custom-column-filter .arrow_box:after {\r\n    border-color: rgba(136, 183, 213, 0);\r\n    border-bottom-color: #E8F5E9!important;\r\n    background-color: transparent;\r\n    border-width: 20px;\r\n    margin-left: -20px;\r\n}\r\n\r\n.p-table-custom-column-filter .arrow_box:before {\r\n    border-color: rgba(194, 225, 245, 0);\r\n    border-width: 36px;\r\n    margin-left: -36px;\r\n}\r\n\r\n\r\n/*  end of custom filter  */\r\n\r\n\r\n/* start of  reflow */\r\n\r\n.reflow-modal {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: white;\r\n    top: 0px;\r\n    left: 0px;\r\n    transition: 0.7s;\r\n    z-index: 99999;\r\n}\r\n\r\n.reflow-content {\r\n    margin: 1em auto;\r\n    overflow: visible;\r\n}\r\n\r\n.reflow-icon {\r\n    color: green;\r\n    font-weight: bold;\r\n}\r\n\r\n.reflow-btn {\r\n    background-color: transparent;\r\n    border-radius: 10px;\r\n    margin-left: 5px;\r\n}\r\n\r\n\r\n/*End of reflow */\r\n\r\n.p-table-custom-filter-icon {\r\n    font-size: 18px;\r\n}\r\n\r\n.p-table-content .nav>li>a {\r\n    padding: 3px 3px;\r\n    font-weight: bold;\r\n}\r\n\r\n.p-table-edit-icon {\r\n    font-size: 18px;\r\n    padding: 3px;\r\n    color: green!important;\r\n    background-color: transparent;\r\n    padding-right: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.p-table-delete-icon {\r\n    font-size: 18px;\r\n    color: red!important;\r\n    background-color: transparent;\r\n    padding: 3px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* checkbox- switch*/\r\n\r\n.p-table-scroll-body .switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 48px;\r\n    height: 22px;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.p-table-scroll-body .switch input {\r\n    display: none;\r\n}\r\n\r\n.p-table-scroll-body .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n}\r\n\r\n.p-table-scroll-body .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 17px;\r\n    width: 17px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n}\r\n\r\n.p-table-scroll-body input:checked+.slider {\r\n    background-color: green;\r\n}\r\n\r\n.p-table-scroll-body input:focus+.slider {\r\n    box-shadow: 0 0 1px green;\r\n}\r\n\r\n.p-table-scroll-body input:checked+.slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n}\r\n\r\n\r\n/* Rounded sliders */\r\n\r\n.p-table-scroll-body .slider.round {\r\n    border-radius: 28px;\r\n}\r\n\r\n.p-table-scroll-body .slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n/* Rounded sliders */\r\n\r\n.p-table-scroll-body .slider.round {\r\n    border-radius: 34px;\r\n}\r\n\r\n.p-table-scroll-body .slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n/*Custome color not component */\r\n\r\n\r\n/*Rejected*/\r\n\r\n.individual-ptable-record-Rejected td {\r\n    background-color: #F5CDCD !important;\r\n}\r\n\r\n\r\n/*Accepted*/\r\n\r\n.individual-ptable-record-Accepted td {\r\n    background-color: #DCF5DC !important;\r\n}\r\n\r\n\r\n/*Ignored*/\r\n\r\n.individual-ptable-record-Ignored td {\r\n    background-color: #F8E8BA !important;\r\n}\r\n\r\n.p-table-custom-button {\r\n    padding: 0.037rem 0.75rem!important;\r\n    cursor: pointer;\r\n}\r\n\r\n/************ fixed table header *************************/\r\n\r\n.header-fixed thead {\r\n  position: relative;\r\n  display: table; /*seperates the header from the body allowing it to be positioned*/\r\n  overflow: visible;\r\n  width:calc(100% - 15px);\r\n}\r\n\r\n.header-fixed thead th:nth-child(1) {/*first cell in the header*/\r\n  position: relative;\r\n/*  display: table; /*seperates the first cell in the header from the header*/\r\n}\r\n\r\n\r\n/*tbody*/\r\n.header-fixed tbody {\r\n  position: relative;\r\n  display: block; /*seperates the tbody from the header*/\r\n  /*max-height: 250px;*/\r\n  overflow-y: scroll;\r\n  overflow-x:hidden;\r\n}\r\n\r\n.header-fixed tbody td {\r\n  border: 1px solid #ffffff\r\n}\r\n.header-fixed .p-table-row-checkbox, .header-fixed .p-table-checkbox{\r\n    width: 35px;\r\n    /*display: block;*/\r\n}\r\n.header-fixed .p-table-row-radio, .header-fixed .p-table-checkbox{\r\n    width: 35px;\r\n    /*display: block;*/\r\n}\r\n\r\n.header-fixed .p-table-serial{\r\n    width: 35px;\r\n    /*display: block;*/\r\n}\r\n\r\n.display-block-enabled{\r\n    display: block!important;\r\n}\r\n/*************** End of fixed header ****************************************/"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pTableSetting!=null\" [ngClass]=\"{'reflow-modal': activeReflow}\">\r\n    <div class=\"col-md-12 p-table-content\" [ngClass]=\"{'reflow-content': activeReflow}\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"p-table-header\" *ngIf=\"pTableSetting.tableHeaderFooterVisibility==true ||pTableSetting.tableHeaderFooterVisibility==null\">\r\n                <div class=\"row\">\r\n                    <div class=\"col col-xs-8\">\r\n                        <h3 class=\"panel-title\">{{pTableSetting.tableName}}</h3>\r\n                    </div>\r\n                    <div class=\"col col-xs-4 text-right\">\r\n                        <div>\r\n                            <div *ngIf=\"pTableSetting.enabledCustomReflow==true || pTableSetting.enabledReflow==true\" class=\"\">\r\n                                <button type=\"button\" class=\"pull-right reflow-btn\" (click)=\"fnReflowTable()\" ripple-radius>\r\n                                <span class=\"fa fa-arrows glyphicon-fullscreen reflow-icon\" *ngIf=\"activeReflow==false && customReflowActive==false\"></span>\r\n                                <span class=\"fa fa-arrows-h reflow-icon\" *ngIf=\"activeReflow || customReflowActive\"></span>\r\n                             </button>\r\n                            </div>\r\n                            <div *ngIf=\"pTableSetting.enabledPdfDownload==true\">\r\n                                <button type=\"button\" class=\"pull-right btn-column-setting\" title=\"Generate Print\" (click)=\"fnDownloadPDF()\"> <i class=\"fa fa-download\" style=\"font-size:18px;color:green\"></i></button>\r\n                            </div>\r\n                            <div>\r\n                                <button type=\"button\" class=\"pull-right btn-column-setting\" title=\"Print\" (click)=\"fnPrintPTable()\"> <i class=\"fa fa-print\" style=\"font-size:18px;color:green\"></i></button>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"pTableSetting.enabledColumnSetting\">\r\n                                <button type=\"button\" class=\"pull-right btn-column-setting\" style=\"padding-left:5px;\" popoverTitle=\"Column customization\" ripple-radius> Columns  <span class=\"fa fa-cog\" style=\"color:green\"></span></button>\r\n                              \r\n                                <!--<div  style=\"left:-100px;\" class=\"p-table-popover p-table-custom-column-filter\">\r\n                                    <ul class=\"nav nav-tabs\" *ngIf=\"settingsTabs.length>1\">\r\n                                        <li *ngFor=\"let tab of settingsTabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\r\n                                            <a>{{tab.tabName}}</a>\r\n                                        </li>\r\n                                    </ul>\r\n\r\n                                    <div class=\"tab-content-1\">\r\n                                        <div id=\"home\" class=\"tab-pane fade in active\" *ngIf=\"activeTabName=='columnShowHide'\">\r\n                                            <div class=\"col-setting-title alert alert-success\" role=\"alert\">\r\n                                                <strong>Hide/Show Columns </strong>\r\n                                            </div>\r\n                                            <div class=\"row\" style=\"margin-left: 5px;margin-right: 5px\">\r\n                                                <div class=\"input-group\">\r\n                                                    <input type=\"text\" class=\"form-control\" #pTableColumnSearchVal placeholder=\"Search {{filterColumnTitle}}\" (keyup)=\"fnPTableColumnCustomizationSearch(pTableColumnSearchVal.value)\">\r\n                                                    <span class=\"input-group-btn\">\r\n                                               <button type=\"submit\" class=\"btn btn-default\"> <span class=\"glyphicon glyphicon-search\"></span>                                                    </button>\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div class=\"filterd-data\">\r\n                                                    <div>\r\n                                                        <div *ngFor=\"let columnDef of pTableColumnCustomizationList\" [style.display]=\"columnDef?.alwaysVisible==true?'None':'block'\">\r\n                                                            <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"\" [(ngModel)]=\"columnDef.visible\">{{columnDef.headerName}} </label><br/></div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"footer-buttons pull-right\">\r\n                                                    <button type=\"button\" class=\"btn btn-default filter-button\" (click)=\"fnApplyCustomCustomization();pTableColumnSelection.hide()\">Ok</button>\r\n                                                    <button type=\"button\" class=\"btn btn-default filter-button\" (click)=\"pTableColumnSelection.hide()\">Cancel</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div id=\"menu1\" class=\"tab-pane fade in active\" *ngIf=\"activeTabName=='columnOrder' && pTableSetting.enabledReordering==true\">\r\n                                            <div class=\"col-setting-title alert alert-success\" role=\"alert\">\r\n                                                <strong> Reorder Columns </strong>\r\n                                            </div>\r\n                                            <div class=\"row\" style=\"margin-left: 5px;margin-right: 5px\">\r\n                                                <div class=\"filterd-data\" style=\"margin-left: 0px;\">\r\n                                                    <ul class=\"ul-dragable\">\r\n                                                        <div *ngFor=\"let columnDef of pTableColumnReorder\" class=\"dragable-content\" [makeDraggable]=\"columnDef\" makeDroppable (dropped)=\"onDrop($event, columnDef)\"\r\n                                                            [style.display]=\"columnDef?.visible==false && columnDef?.visible!=null ?'none':''\">\r\n                                                            <li class=\"dragable\">\r\n                                                                <span>{{columnDef.headerName}}</span>\r\n                                                            </li>\r\n                                                        </div>\r\n                                                    </ul>                                                  \r\n                                                </div>\r\n                                                <div class=\"footer-buttons pull-right\">\r\n                                                    <button type=\"button\" class=\"btn btn-default filter-button\" (click)=\"fnApplyReorderColumn();pTableColumnSelection.hide()\">Ok</button>\r\n                                                    <button type=\"button\" class=\"btn btn-default filter-button\" (click)=\"pTableColumnSelection.hide()\">Cancel</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div> -->\r\n\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row search-table\" *ngIf=\"pTableSetting.enabledSearch\">\r\n                <div class=\"col-sm-7 col-md-8 col-xs-9\">\r\n                    <div class=\"pull-left\">\r\n                        <div class=\"btn-group\" *ngIf=\"pTableSetting.enabledDataLength\">\r\n                            <button class=\"btn p-table-data-length\">Show {{pageSize}}  records<span class=\"caret\"></span></button>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li *ngFor=\"let rowlimit of rowLimitArray\"><a id=\"action-1\" (click)=\"fnChangePTableRowLength(rowlimit)\">{{rowlimit}} records</a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-5 col-md-4 col-xs-3 pull-right\" style=\"padding-right:2px;\">\r\n                    <div class=\"form-group has-feedback\">\r\n                        <input type=\"text\" class=\"form-control p-table-search\" id=\"inputValidation\" #search placeholder=\"Search\" [(ngModel)]=\"globalSearchValue\" (keyup)=\"fnFilterPTable(search.value)\" />\r\n                        <span class=\"glyphicon glyphicon-search form-control-feedback\" style=\"z-index: 1\"></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style=\"width:100%\" (scroll)=\"onScroll($event)\" [style.overflow]=\"pTableSetting.pTableStyle?.tableOverflow==true?'auto':'hidden'\" [ngClass]=\"{'p-table-overflow-x':pTableSetting.pTableStyle?.tableOverflowX,'p-table-overflow-y':pTableSetting.pTableStyle?.tableOverflowY}\"\r\n               [style.max-height]=\"pTableSetting.enabledFixedHeader!=true?pTableSetting.pTableStyle?.overflowContentHeight:''\">\r\n                <div class=\"p-table-scroll-body\" [id]=\"'p-table-scroll-'+pTableSetting.tableID\" [style.width]=\"pTableSetting.pTableStyle?.overflowContentWidth\">\r\n                    <div class=\"panel-body p-table-body\" style=\"position:relative;\">\r\n                        <table class=\"p-table table table-striped table-bordered table-list\" [id]=\"pTableSetting.tableID\" [ngClass]=\"{'header-fixed':pTableSetting.enabledFixedHeader}\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th *ngIf=\"pTableSetting.enabledSerialNo\" class=\"p-table-serial\" width=\"2%\">\r\n                                        <span *ngIf=\"pTableSetting.enabledColumnResize\" class=\"p-table-column-resizer\" (mousedown)=\"fnResizeColumn($event)\"></span> SL\r\n                                    </th>\r\n                                    <th *ngIf=\"pTableSetting.enabledCheckbox\" class=\"p-table-row-checkbox\" width=\"2%\"><input type=\"checkbox\" [ngClass]=\"'p-table-select-all select-all-'+pTableSetting.tableID\" (click)=\"fnOperationOnCheckBox($event,pTableSetting.tableID)\">\r\n                                        <span *ngIf=\"pTableSetting.enabledColumnResize\" class=\"p-table-column-resizer\" (mousedown)=\"fnResizeColumn($event)\"></span> {{pTableSetting?.checkboxColumnHeader}}\r\n                                    </th>\r\n                                    <th *ngIf=\"pTableSetting.enabledRadioBtn\" class=\"p-table-row-radio\" width=\"2%\">\r\n                                        <span *ngIf=\"pTableSetting.enabledColumnResize\" class=\"p-table-column-resizer\" (mousedown)=\"fnResizeColumn($event)\"></span> <input type=\"radio\" style=\"visibility:hidden;\"  *ngIf=\"pTableSetting.enabledFixedHeader\"/>{{pTableSetting.enabledFixedHeader!=true?pTableSetting?.radioBtnColumnHeader:''}}\r\n                                    </th>\r\n                                    <th *ngFor=\"let head of pTableSetting.tableColDef\" class=\"{{head.className}} {{head.internalName}}\" [ngClass]=\"{'sorting':head.sort,'sorting-active':head.sort}\" [style.display]=\"head?.visible==false && head?.visible!=null ?'none':''\" [ngStyle]=\"{'width': head.width}\"\r\n                                        (click)=\"fnColumnSorting(head.internalName,pTableSetting.tableID,head.sort)\">\r\n                                        <span *ngIf=\"pTableSetting.enabledColumnFilter && (head.applyColFilter==null ||head.applyColFilter=='Apply')\" (click)=\"$event.stopPropagation();fnIndividualColumnFilterContext(head,$event)\" class=\"column-filter-active pull-left\"><i class=\"fa fa-filter\" style=\"cursor: pointer\" id=\"filter-icon-{{head.internalName}}\" aria-hidden=\"true\"></i></span>\r\n                                        <!--<span class=\"glyphicon glyphicon-filter column-filter-active pull-left\" style=\"cursor: pointer\" id=\"filter-icon-{{head.internalName}}\" (click)=\"fnIndividualColumnFilterContext(head.internalName,$event)\"></span>-->\r\n                                        <span *ngIf=\"pTableSetting.enabledColumnResize\" class=\"p-table-column-resizer\" (mousedown)=\"fnResizeColumn($event)\"></span>\r\n                                        <span *ngIf=\"head.sort\" class=\"sort-icon pull-right\"> </span>\r\n                                        <!-- <div [ngSwitch]=\"head.type\">   -->\r\n                                        <div *ngIf=\"head.type==''||head.type=='text'||head.type=='hyperlink'||head.type=='checkbox' || head.type==null\">{{head.headerName}}</div>\r\n                                        <div *ngIf=\"head.type=='checkbox-all'\"><input type=\"checkbox\" (click)=\"fnClickPTableCell($event,pTableSetting.enabledCellClick,'p-table-select-all',head.onClick,head)\" />{{head.headerName}}</div>\r\n                                        <div *ngIf=\"head.type=='checkbox-switch'|| head.type=='battery-level'|| head.type=='button' || head.type=='custom-button'\">{{head.headerName}}</div>\r\n                                        <!-- </div> -->\r\n                                    </th>\r\n                                    <th *ngIf=\"pTableSetting.enabledEditBtn\" style=\"width:78px; display:block;\">\r\n                                        <span *ngIf=\"pTableSetting.enabledColumnResize\" class=\"p-table-column-resizer\" (mousedown)=\"fnResizeColumn($event)\"></span>\r\n                                        <em class=\"fa fa-cog\"></em>\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                           <tbody [ngStyle]=\"{'max-height':pTableSetting.enabledFixedHeader==true?pTableSetting.pTableStyle?.overflowContentHeight||'400px':'350px'}\">\r\n                                <tr *ngFor=\"let body of pagedItems, let counter=index\" [ngClass]=\"'row-'+body[pTableSetting.tableRowIDInternalName]\" class=\"individual-ptable-record-{{body[pTableSetting.columnNameSetAsClass]}}\">\r\n                                    <td *ngIf=\"pTableSetting.enabledSerialNo\">{{startPageNo+counter}}</td>\r\n                                    <td *ngIf=\"pTableSetting.enabledCheckbox\" class=\"p-table-checkbox\"  width=\"2%\"><input type=\"checkbox\" [ngClass]=\"'checkbox-'+pTableSetting.tableID\" attr.data-sectionvalue=\"{{body[pTableSetting.tableRowIDInternalName]}}\"\r\n                                            (click)=\"fnIndividualCheckboxAction($event,body,pTableSetting.tableID)\"></td>\r\n                                    <td *ngIf=\"pTableSetting.enabledRadioButton\" class=\"p-table-radio\"><input type=\"radio\" [ngClass]=\"'radio-'+pTableSetting.tableID\" name=\"radio-{{pTableSetting.tableID}}\"\r\n                                            attr.data-sectionvalue=\"{{body[pTableSetting.tableRowIDInternalName]}}\" (click)=\"fnIndividualRadioAction($event,body)\"></td>\r\n                                    <td class=\"\" *ngFor=\"let dispCol of pTableSetting.tableColDef\" [style.display]=\"dispCol?.visible==false && dispCol?.visible!=null ?'none':''\"\r\n                                        [ngClass]=\"dispCol.className\" [ngStyle]=\"{'width': dispCol.width}\">\r\n                                        <div *ngIf=\"dispCol.type=='checkbox'|| dispCol.type=='checkbox-all'\"><input type=\"checkbox\" [checked]=\"body[dispCol.internalName]=='true' || body[dispCol.internalName]==true\"\r\n                                                (click)=\"fnClickPTableCell($event,pTableSetting.enabledCellClick,dispCol.internalName,dispCol.onClick,body)\"\r\n                                            /></div>\r\n                                        <div *ngIf=\"dispCol.type=='hyperlink'\"><a class=\"p-table-hyperlink\" (click)=\"fnClickPTableCell($event,pTableSetting.enabledCellClick,dispCol.internalName,dispCol.onClick,body)\">{{body[dispCol.internalName]}}</a></div>\r\n                                        <div *ngIf=\"dispCol.type=='' || dispCol.type==null\">{{body[dispCol.internalName]}}</div>\r\n                                    </td>\r\n                                    <td align=\"left\" style=\"width:78px; display:block;\" *ngIf=\"pTableSetting.enabledEditBtn|| pTableSetting.enabledDeleteBtn\">\r\n                                         <a class=\"p-table-edit-icon\" (click)=\"fnActivityOnRecord('edit-item',body)\"><em class=\"fa fa-pencil\" ></em></a>\r\n                                        <a class=\" p-table-delete-icon\" (click)=\"fnActivityOnRecord('delete-item',body)\"><em class=\"fa fa-trash\" ></em></a>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngIf=\"pTableDatalength<1\" [ngClass]=\"{'display-block-enabled':pTableSetting.enabledFixedHeader}\">\r\n                                    <!--<td [colSpan]=\"totalColspan\" align=\"center\" [ngStyle]=\"{'width': '100%'}\" [ngClass]=\"{'display-block-enabled':pTableSetting.enabledFixedHeader}\"><b>No Record Found.{{totalColspan}}</b></td>-->\r\n                                    <td [colSpan]=\"fnTotalColspanCalCulate()\" align=\"center\" [ngStyle]=\"{'width': '100%'}\" [ngClass]=\"{'display-block-enabled':pTableSetting.enabledFixedHeader}\"><b>No Record Found.</b></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                        <div [id]=\"pTableSetting.tableID+'-fitlerInfo'\" class=\"p-table-custom-column-filter\">\r\n                            <div class=\"arrow_box\">\r\n                                <div class=\"p-table-column-filter-title\">\r\n                                    <div class=\"d-flex justify-content-between\">\r\n                                        <div style=\"width: 87%;float: left\">\r\n                                            <span><b>Filter :</b> {{filterColumnTitle}}</span>\r\n                                        </div>\r\n                                        <div style=\"width: 13%;float: right\">\r\n                                            <span (click)=\"clearFilterFromFilterPopup()\" style=\"cursor: pointer\"> \r\n                                            <span class=\"fa fa-filter p-table-custom-filter-icon\" [id]=\"'filter-remove-'+filterCustomColumnName\" [style.color]=\"popupFilterColor\"></span>\r\n                                            <span class=\"fa fa-remove filter-popup-remove-icon\"></span>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" style=\"margin-left: 5px;margin-right: 5px;padding-right: 4px;\">\r\n                                    <div class=\"input-group col-sm-12\">\r\n                                        <input type=\"text\" class=\"form-control\" #columnSearchVal placeholder=\"Search {{filterColumnTitle}}\" [(ngModel)]=\"columnSearchValue\" (keyup)=\"fnFilterPTableColumn(columnSearchVal.value)\">\r\n                                        <span class=\"input-group-btn\">\r\n                                        <button type=\"submit\" class=\"btn btn-default\"> \r\n                                            <span class=\"fa fa-search\"></span>\r\n                                        </button>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"filterd-data\" style=\"width:100%\">\r\n                                        <div>\r\n                                            <label class=\"checkbox-inline\" style=\"margin-bottom:0px;\"><input type=\"checkbox\" [checked]=\"filterItemsCheckedAll\" value=\"\" (click)=\"fnCustomFilterSelectAll($event)\">Select All </label>\r\n                                            <div *ngFor=\"let uniqueRecord of customFilterUniqueArray\"> <label class=\"checkbox-inline\"><input type=\"checkbox\" value=\"\" [(ngModel)]=\"uniqueRecord.checked\">{{uniqueRecord.data}} </label><br/></div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"footer-buttons pull-right p-table-column-filter-footer\" style=\"width:100%; text-align: right;\">\r\n                                        <button type=\"button\" class=\"btn btn-outline-success filter-button\" (click)=\"fnApplyCustomFilter()\" style=\"padding-left:20px;padding-right:20px;\">Ok</button>\r\n                                        <button type=\"button\" class=\"btn btn-outline-success filter-button\" (click)=\"fnCloseCustomFilter()\">Cancel</button>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div *ngIf=\"pTableSetting.tableHeaderFooterVisibility==true ||pTableSetting.tableHeaderFooterVisibility==null\">\r\n                        <div class=\"p-table-footer\" *ngIf=\"pTableDatalength>0\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col col-xs-4\">\r\n                                    <div [innerHTML]=\"showingPageDetails\"></div>\r\n                                </div>\r\n                                <div class=\"col col-xs-8\">\r\n                                    <!-- pager -->\r\n                                    <ul *ngIf=\"pager.pages && pager.pages.length && enabledPagination\" class=\"pagination hidden-xs pull-right\">\r\n                                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                            <a class=\"page-link\" (click)=\"setPage(1)\">\r\n                                                <!-- <span class=\"glyphicon glyphicon-chevron-left\">  </span><span class=\"glyphicon glyphicon-chevron-left p-table-aro-first\"></span> -->\r\n                                                <i class=\"fa fa-angle-double-left\" style=\"font-size:16px\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\" [attr.disabled]=\"pager.currentPage == 1 ? true : null\">\r\n                                            <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">\r\n                                                <i class=\"fa fa-angle-left\" style=\"font-size:16px\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li *ngFor=\"let page of pager.pages\" class=\"page-item\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                                            <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n                                        </li>\r\n                                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                            <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">\r\n                                                <i class=\"fa fa-angle-right\" style=\"font-size:16px\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                        <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                            <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\">\r\n                                                <!-- <span class=\"glyphicon glyphicon-chevron-right p-table-aro-last\"></span><span class=\"glyphicon glyphicon-chevron-right\"></span> -->\r\n                                                <i class=\"fa fa-angle-double-right\" style=\"font-size:16px\"></i>\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--<app-p-modal [modalSettingOption]=\"pModalSetting\"> </app-p-modal>-->"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  {{title}}\r\n</h1>\r\n <app-p-table [pTableSetting]=\"territoryListTableBind\" [pTableMasterData]=\"territoryNodes\" (customReflowFn)=\"fnCustomReflowSetting($event)\"></app-p-table>\r\n"

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(413);


/***/ })

},[972]);
//# sourceMappingURL=main.bundle.map