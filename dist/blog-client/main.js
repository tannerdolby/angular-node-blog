(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+DhY":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 6, vars: 0, consts: [[1, "wrapper"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hi there! My name is John Smith. I am an aspiring backend developer with a passion for the web. Feel free to fill out this section with your own information (like a headshot) and maybe some social links where you are located around the web.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n    padding: 1rem;\n    max-width: 80ch;\n}\n\nsection[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n}\n\nsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDgwY2g7XG59XG5cbnNlY3Rpb24ge1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xufVxuXG5zZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59Il19 */"] });


/***/ }),

/***/ "+MCx":
/*!***************************************************!*\
  !*** ./src/app/components/tags/tags.component.ts ***!
  \***************************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");





function TagsComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.postsWithTag.length, " posts tagged: #", ctx_r0.tag, "");
} }
function TagsComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.postsWithTag.length, " post tagged: #", ctx_r1.tag, "");
} }
function TagsComponent_mat_card_9_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_mat_card_9_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const tag_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.refresh(tag_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/blog/category/", tag_r5, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", tag_r5, "");
} }
function TagsComponent_mat_card_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Published on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2022 tagged with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TagsComponent_mat_card_9_a_10_Template, 2, 2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/blog/", article_r3.slug, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, article_r3.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", article_r3.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r3.preview);
} }
class TagsComponent {
    // re render postsWithTag when tag permalink is clicked on /blog/category/:tag page
    constructor(postService, router) {
        this.postService = postService;
        this.router = router;
        this.postsWithTag = [];
        this.tag = "";
    }
    ngOnInit() {
        this.tag = window.location.pathname.substr(15);
        this.postService.getPostsByTag(this.tag).subscribe((response) => {
            response.forEach((r) => {
                r.slug = this.postService.slugify(r.title);
            });
            console.log(response);
            this.postsWithTag = response;
        });
    }
    clear() {
        this.router.navigate(["/blog"]);
    }
    slugify(title) {
        return this.postService.slugify(title);
    }
    refresh(tag) {
        this.postService.getPostsByTag(tag).subscribe((response) => {
            response.map((r) => {
                r.slug = this.slugify(r.title);
            });
            this.postsWithTag = response;
        });
        this.tag = tag;
    }
}
TagsComponent.ɵfac = function TagsComponent_Factory(t) { return new (t || TagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagsComponent, selectors: [["app-tags"]], decls: 10, vars: 3, consts: [[1, "wrapper"], [1, "tagged"], ["class", "posts-tagged", 4, "ngIf"], [3, "click"], ["role", "group", 4, "ngFor", "ngForOf"], [1, "posts-tagged"], ["role", "group"], [3, "routerLink"], [1, "date"], ["class", "tag", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "tag", 3, "routerLink", "click"]], template: function TagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TagsComponent_p_4_Template, 2, 2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TagsComponent_p_5_Template, 2, 2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsComponent_Template_button_click_6_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TagsComponent_mat_card_9_Template, 13, 7, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postsWithTag.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postsWithTag.length === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postsWithTag);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n    max-width: 80ch;\n    margin: 1.5rem auto;\n    padding: 1rem;\n}\n\nsection[_ngcontent-%COMP%] {\n    margin: 2rem auto;\n}\n\n.wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n}\n\narticle[_ngcontent-%COMP%] {\n    border: .125rem solid transparent;\n    padding: 1rem;\n    background: #fff;\n    margin: 2rem 0;\n}\n\narticle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: .35rem 0;\n}\n\narticle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: underline;\n}\n\narticle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n}\n\n.tagged[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.tagged[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: var(--btn-danger);\n    background: inherit;\n    padding: .5rem 1rem;\n    border: .1rem solid lightgray;\n}\n\n.tagged[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background: hsl(0, 0%, 13%);\n    background: var(--btn-danger);\n    color: #fff;\n    border: .1rem solid transparent;\n}\n\nsection[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n    margin: 0 .2rem;\n}\n\nsection[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:first-of-type {\n    margin-left: .1rem;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    margin: 2rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InRhZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDgwY2g7XG4gICAgbWFyZ2luOiAxLjVyZW0gYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG5zZWN0aW9uIHtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbn1cblxuLndyYXBwZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG5hcnRpY2xlIHtcbiAgICBib3JkZXI6IC4xMjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbjogMnJlbSAwO1xufVxuXG5hcnRpY2xlIGgyIHtcbiAgICBtYXJnaW46IC4zNXJlbSAwO1xufVxuXG5hcnRpY2xlIGgyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5hcnRpY2xlIGgyIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRhZ2dlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRhZ2dlZCBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ0bi1kYW5nZXIpO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLnRhZ2dlZCBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEzJSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnRuLWRhbmdlcik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuc2VjdGlvbiAuZGF0ZSAudGFnIHtcbiAgICBtYXJnaW46IDAgLjJyZW07XG59XG5cbnNlY3Rpb24gLmRhdGUgLnRhZzpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogLjFyZW07XG59XG5cbm1hdC1jYXJkIHtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/TannerDolby/angular-node-blog-template/blog-client/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function HomeComponent_mat_card_17_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/blog/category/", tag_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", tag_r3, "");
} }
function HomeComponent_mat_card_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Published on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2022 tagged with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_mat_card_17_a_10_Template, 2, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/blog/", article_r1.slug, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, article_r1.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", article_r1.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.preview);
} }
class HomeComponent {
    constructor(postService) {
        this.postService = postService;
        this.tags = [];
    }
    ngOnInit() {
        this.postService.getRecentPosts().subscribe((response) => {
            response.forEach((r) => {
                r.date = new Date(r.date);
                this.tags = r.tags;
            });
            console.log(response);
            this.recent = response;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 1, consts: [[1, "bg"], [1, "wrapper"], [1, "hero-desc"], [1, "articles"], ["role", "group", 4, "ngFor", "ngForOf"], ["role", "group"], [3, "routerLink"], ["class", "tag", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "tag", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Angular + Node.js Blog Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A blog template built with Angular (Angular Material) and Node.js (Express). The blog posts are created within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "/pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " directory and are rendered on their respective pages using an API endpoint and a single \"posts\" component which acts as a template to display each blog post. Update the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "/assets/blog.json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " data with each blog posts metadata.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Recent Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_mat_card_17_Template, 13, 7, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["header[_ngcontent-%COMP%] {\n    padding: 4.5rem 1rem;\n    background: #ececec;\n    background: #e9e8e8;\n    background: #ecebeb;\n    background: #bee2c4;\n    background: #162f33;\n    background: #ececec;\n    \n    \n    \n    \n    \n    \n    text-align: center;\n    margin: 0 auto;\n    border-bottom: .1rem solid lightgray;\n}\n\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n}\n\n.bg[_ngcontent-%COMP%] {\n    background-color: rgb(248, 248, 248);\n}\n\n.wrapper[_ngcontent-%COMP%] {\n    max-width: 80ch;\n    padding: 1.5rem 1rem 4rem 1rem;\n    margin: 1rem auto;\n}\n\nsection[_ngcontent-%COMP%] {\n    margin: 2rem auto;\n}\n\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n}\n\narticle[_ngcontent-%COMP%] {\n    border: .125rem solid transparent;\n    padding: 1rem;\n    background: #fff;\n    margin: 2rem 0;\n}\n\narticle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin: .35rem 0;\n}\n\narticle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: var(--link-accessible);\n    text-decoration: underline;\n}\n\narticle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n}\n\n.date[_ngcontent-%COMP%] {\n    margin: .5rem 0;\n    font-size: 1rem;\n}\n\n.content[_ngcontent-%COMP%] {\n    margin: .5rem 0;\n}\n\n.tag[_ngcontent-%COMP%]:first-of-type {\n    margin-left: .1rem;\n}\n\n.tag[_ngcontent-%COMP%] {\n    margin: 0 .2rem;\n    text-decoration: none;\n    color: var(--link-accessible);\n}\n\n.tag[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    margin: 2rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0I7Ozs7MEJBSXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIHBhZGRpbmc6IDQuNXJlbSAxcmVtO1xuICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gICAgYmFja2dyb3VuZDogI2U5ZThlODtcbiAgICBiYWNrZ3JvdW5kOiAjZWNlYmViO1xuICAgIGJhY2tncm91bmQ6ICNiZWUyYzQ7XG4gICAgYmFja2dyb3VuZDogIzE2MmYzMztcbiAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICAgIC8qIGJhY2tncm91bmQ6ICMyYjY0NDc7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzBjYTRhYTsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY4YWExOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMjFkMTc7ICovXG4gICAgLyogYmFja2dyb3VuZDogIzQwNGQyZjtcbiAgICBiYWNrZ3JvdW5kOiAjMTUxYzVmO1xuICAgIGJhY2tncm91bmQ6ICMxYzMzNTg7XG4gICAgYmFja2dyb3VuZDogI2JjZTVmNTtcbiAgICBiYWNrZ3JvdW5kOiAjMDg0MTU1OyAqL1xuICAgIC8qIGJhY2tncm91bmQ6ICMyMDI0Mjk7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1ib3R0b206IC4xcmVtIHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xufVxuXG4ud3JhcHBlciB7XG4gICAgbWF4LXdpZHRoOiA4MGNoO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtIDRyZW0gMXJlbTtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbn1cblxuc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG59XG5cbnNlY3Rpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuYXJ0aWNsZSB7XG4gICAgYm9yZGVyOiAuMTI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDJyZW0gMDtcbn1cblxuYXJ0aWNsZSBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luOiAuMzVyZW0gMDtcbn1cblxuYXJ0aWNsZSBoMyBhIHtcbiAgICBjb2xvcjogdmFyKC0tbGluay1hY2Nlc3NpYmxlKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYXJ0aWNsZSBoMyBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5kYXRlIHtcbiAgICBtYXJnaW46IC41cmVtIDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAuNXJlbSAwO1xufVxuXG4udGFnOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAuMXJlbTtcbn1cblxuLnRhZyB7XG4gICAgbWFyZ2luOiAwIC4ycmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tbGluay1hY2Nlc3NpYmxlKTtcbn1cblxuLnRhZzpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbm1hdC1jYXJkIHtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbn0iXX0= */"] });


/***/ }),

/***/ "ENZJ":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


// import { fetch } from '';
class PostService {
    constructor(http) {
        this.http = http;
        // Node/Express local endpoints
        this.postsUrl = "http://localhost:4000/blog";
        this.recentPostsUrl = "http://localhost:4000/recent";
        this.postsByTagUrl = "http://localhost:4000/blog/category";
        // Netlify Lambda function endpoints
        this.recentLambdaUrl = "http://localhost:9000/.netlify/functions/app/recent";
        this.postLambdaUrl = "http://localhost:9000/.netlify/functions/app/blog";
        this.allPostsLambdaUrl = "http://localhost:9000/.netlify/functions/app/blog";
        this.postsByTagLambdaUrl = "http://localhost:9000/.netlify/functions/app/blog/category";
        this.recentPosts = "https://modest-bhabha-3a9de8.netlify.app/.netlify/functions/rawr";
    }
    getPost(slug) {
        return this.http.get(`${this.postLambdaUrl}/${slug}`);
    }
    getRecentPosts() {
        return this.http.get(`${this.recentPosts}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Content-Type': 'text/plain',
                'Accept': "application/json"
            }
        });
    }
    getPostsByTag(tag) {
        return this.http.get(`${this.postsByTagLambdaUrl}/${tag}`);
    }
    getAllPosts() {
        return this.http.get(`${this.allPostsLambdaUrl}`);
    }
    slugify(str) {
        const regex = new RegExp(/\W+/, "gm");
        const slug = str.replace(regex, " ").toLowerCase().split(" ").join("-");
        return slug;
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "G13E":
/*!******************************!*\
  !*** ./src/assets/site.json ***!
  \******************************/
/*! exports provided: socials, site, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"socials\":{\"twitter\":\"https://twitter.com/tannerdolby\",\"github\":\"https://github.com/tannerdolby\",\"codepen\":\"https://codepen.com/tannerdolby\"},\"site\":{\"author\":\"John Smith\",\"email\":\"foobar@gmail.com\",\"nav\":{\"home\":\"/\",\"blog\":\"/blog\",\"about\":\"/about\",\"contact\":\"/contact\"}}}");

/***/ }),

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _assets_site_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/site.json */ "G13E");
var _assets_site_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/site.json */ "G13E", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ContactComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid email format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Message is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor(fb) {
        this.fb = fb;
        this.myEmail = _assets_site_json__WEBPACK_IMPORTED_MODULE_1__["site"].email;
    }
    ngOnInit() {
        this.contactForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        this.cName = this.name;
        this.cEmail = this.email;
        this.cMessage = this.message;
    }
    submit() {
        // update `myEmail` in site.json with your current email
        window.location.href = `mailto:${this.myEmail}?body=${this.contactForm.value.message}`;
        this.contactForm.reset();
        this.contactForm.markAsPristine();
        let controls = this.contactForm.controls;
        for (const control in controls) {
            if (this.contactForm.controls[control].errors !== null) {
                this.contactForm.controls[control].setErrors(null);
            }
        }
    }
    get name() {
        return this.contactForm.get("name");
    }
    get email() {
        return this.contactForm.get("email");
    }
    get message() {
        return this.contactForm.get("message");
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 26, vars: 7, consts: [[1, "wrapper"], [1, "contact-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "name", "placeholder", "Enter name"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "email", "placeholder", "Enter email"], ["matInput", "", "name", "message", "id", "message", "formControlName", "message", "placeholder", "Enter message"], [1, "submit"], ["title", "Please fill in all form fields.", "disabled", "", "type", "submit", 4, "ngIf"], ["type", "submit", 4, "ngIf"], ["title", "Please fill in all form fields.", "disabled", "", "type", "submit"], ["type", "submit"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Feel free to send me a message if you would like to discuss a project or opportunity. I'm also available through Twitter, if that's more your style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_6_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ContactComponent_mat_error_11_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ContactComponent_mat_error_16_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ContactComponent_mat_error_17_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ContactComponent_mat_error_22_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ContactComponent_button_24_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ContactComponent_button_25_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.contactForm.submitted && ctx.cEmail.invalid && (ctx.cEmail.errors == null ? null : ctx.cEmail.errors.required) == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.contactForm.submitted && (ctx.cEmail.errors == null ? null : ctx.cEmail.errors.email) == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.cMessage.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactForm.status === "INVALID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactForm.status === "VALID");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: [".wrapper[_ngcontent-%COMP%] {\n    margin: 1rem auto 3rem auto;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    \n}\n\nsection[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    max-width: 70ch;\n    width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    margin-bottom: 1.5rem;\n}\n\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    resize: vertical;\n    height: 5rem;\n}\n\n.submit[_ngcontent-%COMP%] {\n    margin: .5rem 0;\n}\n\n.submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: #fff;\n    background: #378ad3;\n    background: #3ca4ff;\n    background: var(--btn-primary);\n    border: none;\n    padding: .75rem 2rem;\n    color: #fff;\n    border-radius: .2rem;\n}\n\n.submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background: #378ad3;\n    background: #3d82f1;\n    cursor: pointer;\n}\n\n.form-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #f06;\n    margin: 0;\n}\n\n.submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n    cursor: help;\n}\n\n.contact-form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    max-width: 70ch;\n    margin-top: 1rem;\n}\n\nmat-form-field[_ngcontent-%COMP%]   .form-errors[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIG1hcmdpbjogMXJlbSBhdXRvIDNyZW0gYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvKiBtYXgtd2lkdGg6IDEwMDBweDsgKi9cbn1cblxuc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICAgIG1heC13aWR0aDogNzBjaDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG5zZWN0aW9uIGZvcm0gdGV4dGFyZWEge1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgaGVpZ2h0OiA1cmVtO1xufVxuXG4uc3VibWl0IHtcbiAgICBtYXJnaW46IC41cmVtIDA7XG59XG5cbi5zdWJtaXQgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMzNzhhZDM7XG4gICAgYmFja2dyb3VuZDogIzNjYTRmZjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idG4tcHJpbWFyeSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IC43NXJlbSAycmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xufVxuXG4uc3VibWl0IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzM3OGFkMztcbiAgICBiYWNrZ3JvdW5kOiAjM2Q4MmYxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tZXJyb3IgcCB7XG4gICAgY29sb3I6ICNmMDY7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc3VibWl0IGJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBoZWxwO1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiA3MGNoO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbm1hdC1mb3JtLWZpZWxkIC5mb3JtLWVycm9ycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ "Iw+v":
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _assets_site_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/site.json */ "G13E");
var _assets_site_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../assets/site.json */ "G13E", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class FooterComponent {
    constructor(router) {
        this.router = router;
        this.currYear = 0;
        this.author = "";
        this.nav = {};
        this.socials = {};
        this.pathName = "";
    }
    ngOnInit() {
        this.pathName = window.location.pathname;
        this.currYear = this.getCurrentYear();
        this.author = _assets_site_json__WEBPACK_IMPORTED_MODULE_0__["site"].author;
        this.socials = _assets_site_json__WEBPACK_IMPORTED_MODULE_0__["socials"];
        this.nav = _assets_site_json__WEBPACK_IMPORTED_MODULE_0__["site"].nav;
    }
    getCurrentYear() {
        const year = new Date().getFullYear();
        return year;
    }
    backToTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 30, vars: 9, consts: [[1, "wrapper"], [1, "row"], [1, "footer-nav"], [3, "routerLink"], [3, "href"], [1, "copyright"], [3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "CodePen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_28_listener() { return ctx.backToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Back to top");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.nav.home);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.nav.blog);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.nav.about);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.nav.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.socials.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.socials.github, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.socials.codepen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\u00A9 ", ctx.currYear, " ", ctx.author, ". Hosted with Netlify");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["footer[_ngcontent-%COMP%] {\n    background: #242729;\n    background: inherit;\n    \n    \n    border-top: .1rem solid lightgray;\n    padding: 1rem 1rem 1.5rem 1rem;\n    color: #fff;\n}\n\nfooter[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    max-width: 110ch;\n    margin: 0 auto;\n}\n\nfooter[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.row[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    padding-left: 0;\n    list-style: none;\n    margin-bottom: .5rem;\n}\n\n.row[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: .5rem 0;\n}\n\n.row[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: .5rem;\n    margin: 0 .25rem;\n    color: #222;\n    \n    text-decoration: none;\n}\n\n.row[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #fff;\n    color: #ddd;\n    color: #333;\n    text-decoration: underline;\n}\n\n.row[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\n    padding-left: 0;\n    margin-left: 0;\n}\n\n.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    color: #333;\n    \n}\n\n.copyright[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    padding: 0rem 0 .25rem 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #ddd;\n    color: rgba(255,255,255,.92);\n    color: #222;\n}\n\n.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n    color: #fff;\n    color: #333;\n}\n\n.copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n    color: #ddd;\n    color: rgba(255,255,255,.92);\n    color: #222;\n}\n\n.copyright[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: inherit;\n    text-decoration: underline;\n    margin-left: 1.5rem;\n    padding: .5rem 1rem;\n    border: none;\n    font-size: 1rem;\n}\n\n.copyright[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.footer-nav[_ngcontent-%COMP%] {\n    list-style: none;\n    padding-left: 0;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    margin: 1rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekI7cUNBQ2lDO0lBQ2pDLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1g7bUNBQytCO0lBQy9CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWDttQ0FDK0I7QUFDbkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICMyNDI3Mjk7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMWIxYzFkOyAqL1xuICAgIC8qIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpOyAqL1xuICAgIGJvcmRlci10b3A6IC4xcmVtIHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMS41cmVtIDFyZW07XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbmZvb3RlciAud3JhcHBlciB7XG4gICAgbWF4LXdpZHRoOiAxMTBjaDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuZm9vdGVyIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yb3cgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLnJvdyB1bCBsaSB7XG4gICAgbWFyZ2luOiAuNXJlbSAwO1xufVxuXG4ucm93IHVsIGxpIGEge1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIG1hcmdpbjogMCAuMjVyZW07XG4gICAgY29sb3I6ICMyMjI7XG4gICAgLyogY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjkyKTsgKi9cbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5yb3cgdWwgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5yb3cgdWwgbGk6Zmlyc3QtY2hpbGQgYSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4ucm93IGRpdiBoMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICAvKiBjb2xvcjogI2RkZDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOTIpOyAqL1xufVxuXG4uY29weXJpZ2h0IHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHBhZGRpbmc6IDByZW0gMCAuMjVyZW0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb3B5cmlnaHQgYSB7XG4gICAgY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjkyKTtcbiAgICBjb2xvcjogIzIyMjtcbn1cblxuLmNvcHlyaWdodCBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5jb3B5cmlnaHQgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjZGRkO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC45Mik7XG4gICAgY29sb3I6ICMyMjI7XG59XG5cbi5jb3B5cmlnaHQgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY29weXJpZ2h0IGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvb3Rlci1uYXYge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG59Il19 */"] });


/***/ }),

/***/ "ShDn":
/*!**************************************************************!*\
  !*** ./src/app/components/common/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 0, consts: [["id", "#nav"], [1, "wrapper"], [1, "logo"], ["routerLink", "/"], ["routerLink", "/blog/"], ["routerLink", "/about"], ["routerLink", "/contact"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\n    padding: .2rem 1rem;\n    background: #202429;\n}\n\n.home[_ngcontent-%COMP%] {\n    background: inherit;\n}\n\n.home[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #222;\n    color: #fff;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 110ch;\n    margin: 0 auto;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    list-style: none;\n    padding-left: 0;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin: 0 .25rem;\n    color: #222;\n    color: #fff;\n    text-decoration: none;\n    border-radius: .1rem;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #222;\n    color: #fff;\n    text-decoration: none;\n    padding: .5rem 0;\n}\n\n.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n.is-home[_ngcontent-%COMP%] {\n    background: inherit !important;\n}\n\n@media screen and (max-width: 550px) {\n    .wrapper[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: flex-start;\n    }\n    .logo[_ngcontent-%COMP%] {\n        margin: 1rem 0;\n    }\n\n    nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%]:first-of-type {\n        padding-left: 0;\n    }\n\n    header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gICAgcGFkZGluZzogLjJyZW0gMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjMjAyNDI5O1xufVxuXG4uaG9tZSB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLmhvbWUgdWwgbGkgYSxcbi5ob21lIGRpdiBhIHtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWF4LXdpZHRoOiAxMTBjaDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxubmF2IHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbm5hdiB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbjogMCAuMjVyZW07XG4gICAgY29sb3I6ICMyMjI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IC4xcmVtO1xufVxuXG5uYXYgdWwgbGkgYTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubG9nbyBhIHtcbiAgICBjb2xvcjogIzIyMjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogLjVyZW0gMDtcbn1cblxuLmxvZ28gYTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaXMtaG9tZSB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuICAgIC53cmFwcGVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgfVxuXG4gICAgbmF2IC53cmFwcGVyIHVsIGxpOmZpcnN0LWNoaWxkIGE6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG5cbiAgICBoZWFkZXIgaDEge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/header/header.component */ "ShDn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/common/footer/footer.component */ "Iw+v");




class AppComponent {
    constructor() {
        this.title = 'blog-template';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "YzH7":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PostComponent_article_1_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/blog/category/", tag_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", tag_r3, "");
} }
function PostComponent_article_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Published on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u2022 tagged with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostComponent_article_1_a_9_Template, 2, 2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.postData.metadata.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx_r0.postData.metadata.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.postData.metadata.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.postData.metadata.preview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.postData.post.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PostComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.prevPost(ctx_r4.allPosts); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.nextPost(ctx_r6.allPosts); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PostComponent {
    constructor(postService, router) {
        this.postService = postService;
        this.router = router;
        this.postData = {};
        this.allPosts = {};
        this.tags = [];
        this.pos = 0;
        this.updatePage = {};
    }
    ngOnInit() {
        // get the location of the current URLs path
        const slug = window.location.pathname.substr(6);
        const routerSlug = this.router.url.slice(6);
        this.postService.getPost(slug || routerSlug).subscribe((response) => {
            this.postData = response;
            this.tags = response.metadata.tags;
        });
        this.postService.getAllPosts().subscribe((response) => {
            this.allPosts = response;
            response.map((r) => {
                r.slug = this.postService.slugify(r.title);
            });
            this.pos = this.getPostIndex(this.postData, this.allPosts);
            console.log(this.pos);
        });
    }
    getPostIndex(data, allPosts) {
        let pos;
        if (data.post.slug || data.slug) {
            pos = allPosts.map((p) => p.slug).indexOf(data.post.slug || data.slug);
        }
        return pos;
    }
    nextPost(posts) {
        let index = this.pos;
        let p = index + 1 >= posts.length ? posts[0] : posts[index + 1];
        this.postService.getPost(p.slug).subscribe(response => {
            this.postData = response;
            if (this.pos >= posts.length - 1) {
                this.pos = 0;
            }
            else {
                this.pos += 1;
            }
            console.log(this.pos);
        });
    }
    prevPost(posts) {
        let index = this.pos;
        let p = index - 1 < 0 ? posts[posts.length - 1] : posts[index - 1];
        this.postService.getPost(p.slug).subscribe(response => {
            this.postData = response;
            if (this.pos <= 0) {
                this.pos = posts.length - 1;
            }
            else {
                this.pos -= 1;
            }
        });
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 3, vars: 2, consts: [[1, "wrapper"], [4, "ngIf"], ["class", "nav-posts", 4, "ngIf"], [1, "date"], ["class", "tag", 3, "routerLink", 4, "ngFor", "ngForOf"], ["alt", "Some alt text", 3, "src"], [3, "innerHTML"], [1, "tag", 3, "routerLink"], [1, "nav-posts"], [3, "click"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostComponent_article_1_Template, 14, 8, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostComponent_div_2_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postData.metadata !== undefined && ctx.postData.post !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postData !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n    margin: 2rem auto 3rem auto;\n    padding: 1rem;\n    max-width: 80ch;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\na[_ngcontent-%COMP%] {\n    color: var(--link-accessible) !important;\n}\n\narticle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    margin-bottom: .25rem;\n    margin-top: .5rem;\n}\n\narticle[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    margin-top: .5rem;\n}\n\narticle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    object-fit: cover;\n    width: 100%;\n}\n\n.tag[_ngcontent-%COMP%] {\n    margin: 0 .2rem;\n    text-decoration: none;\n    color: var(--link-accessible);\n}\n\n.tag[_ngcontent-%COMP%]:first-of-type {\n    margin-left: .2rem;\n}\n\n.tag[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.nav-posts[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    margin-top: 2rem;\n}\n\n.nav-posts[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border: .1rem solid #282d33;\n    padding: .5rem 1rem;\n    background-color: inherit;\n}\n\n.nav-posts[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background-color: #282d33;\n    color: #fff;\n    border: .1rem solid transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCwrQkFBK0I7QUFDbkMiLCJmaWxlIjoicG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIG1hcmdpbjogMnJlbSBhdXRvIDNyZW0gYXV0bztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1heC13aWR0aDogODBjaDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYSB7XG4gICAgY29sb3I6IHZhcigtLWxpbmstYWNjZXNzaWJsZSkgIWltcG9ydGFudDtcbn1cblxuYXJ0aWNsZSBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xuICAgIG1hcmdpbi10b3A6IC41cmVtO1xufVxuXG5hcnRpY2xlIC5kYXRlIHtcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbn1cblxuYXJ0aWNsZSBpbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGFnIHtcbiAgICBtYXJnaW46IDAgLjJyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1saW5rLWFjY2Vzc2libGUpO1xufVxuXG4udGFnOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAuMnJlbTtcbn1cblxuLnRhZzpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5uYXYtcG9zdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLm5hdi1wb3N0cyBidXR0b24ge1xuICAgIGJvcmRlcjogLjFyZW0gc29saWQgIzI4MmQzMztcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi5uYXYtcG9zdHMgYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmQzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IC4xcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/post/post.component */ "YzH7");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "cy9D");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/post.service */ "ENZJ");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/blog/blog.component */ "kLxQ");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/common/header/header.component */ "ShDn");
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/common/footer/footer.component */ "Iw+v");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tags/tags.component */ "+MCx");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [
        _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_post_post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"],
        _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"],
        _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _components_common_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
        _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_15__["TagsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"]] }); })();


/***/ }),

/***/ "cy9D":
/*!***********************************************************!*\
  !*** ./src/app/components/notfound/notfound.component.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(); };
NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 5, vars: 0, consts: [[1, "wrapper"]], template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page not found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This tends to happen when you click a broken or mistyped link.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n    max-width: 80ch;\n    margin: 1rem auto;\n    padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakIiLCJmaWxlIjoibm90Zm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBtYXgtd2lkdGg6IDgwY2g7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgcGFkZGluZzogMXJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ "kLxQ":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post.service */ "ENZJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function BlogComponent_mat_card_4_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/blog/category/", tag_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", tag_r3, "");
} }
function BlogComponent_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Published on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2022 tagged with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BlogComponent_mat_card_4_a_10_Template, 2, 2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/blog/", article_r1.slug, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, article_r1.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", article_r1.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.preview);
} }
class BlogComponent {
    constructor(postService) {
        this.postService = postService;
        this.articles = [];
    }
    ngOnInit() {
        this.postService.getAllPosts().subscribe(response => {
            this.articles = response;
            this.articles.map((a) => {
                a.slug = this.slugify(a.title);
            });
        });
    }
    slugify(str) {
        const slug = this.postService.slugify(str);
        return slug;
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 5, vars: 1, consts: [[1, "wrapper"], ["role", "group", 4, "ngFor", "ngForOf"], ["role", "group"], [3, "routerLink"], [1, "date"], ["class", "tag", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "tag", 3, "routerLink"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlogComponent_mat_card_4_Template, 13, 7, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n    max-width: 75ch;\n    margin: 2rem auto;\n    padding: 1rem;\n    background-color: rgb(246, 246, 246);\n}\n\n.wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n}\n\n.wrapper[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    margin: 3rem 0;\n}\n\nsection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    margin: 2rem auto;\n    border: .125rem solid transparent;\n    background: #fff;\n    padding: 1rem;\n}\n\nsection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin: 0;\n}\n\nsection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: underline;\n}\n\nsection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n}\n\nsection[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: var(--link-accessible);\n}\n\nsection[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:first-of-type {\n    margin-left: .1rem;\n}\n\nsection[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n    margin: 0 .2rem;\n}\n\nsection[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%] {\n    margin: 0;\n}\n\nmat-card[_ngcontent-%COMP%] {\n    margin: 2rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgbWF4LXdpZHRoOiA3NWNoO1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjQ2LCAyNDYpO1xufVxuXG4ud3JhcHBlciBoMSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi53cmFwcGVyIHNlY3Rpb24ge1xuICAgIG1hcmdpbjogM3JlbSAwO1xufVxuXG5zZWN0aW9uIGFydGljbGUge1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xuICAgIGJvcmRlcjogLjEyNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbnNlY3Rpb24gYXJ0aWNsZSAudGl0bGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuc2VjdGlvbiBhcnRpY2xlIC50aXRsZSBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuc2VjdGlvbiBhcnRpY2xlIC50aXRsZSBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnNlY3Rpb24gYXJ0aWNsZSBhIHtcbiAgICBjb2xvcjogdmFyKC0tbGluay1hY2Nlc3NpYmxlKTtcbn1cblxuc2VjdGlvbiAuZGF0ZSAudGFnOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAuMXJlbTtcbn1cblxuc2VjdGlvbiAuZGF0ZSAudGFnIHtcbiAgICBtYXJnaW46IDAgLjJyZW07XG59XG5cbnNlY3Rpb24gLnByZXZpZXcge1xuICAgIG1hcmdpbjogMDtcbn1cblxubWF0LWNhcmQge1xuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/notfound/notfound.component */ "cy9D");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/post/post.component */ "YzH7");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/blog/blog.component */ "kLxQ");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "+DhY");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tags/tags.component */ "+MCx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "blog", component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"] },
    { path: "blog/:post", component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"] },
    { path: "blog/category/:tag", component: _components_tags_tags_component__WEBPACK_IMPORTED_MODULE_7__["TagsComponent"] },
    { path: "about", component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: "contact", component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: "**", component: _components_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_1__["NotfoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map