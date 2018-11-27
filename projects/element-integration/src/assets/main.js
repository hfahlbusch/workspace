!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=6)}([function(t,n){t.exports=ng.core},function(t,n){t.exports=ng.forms},function(t,n){t.exports=ng.platformBrowser},function(t,n){t.exports=ng.common},function(t,n){t.exports=ng.elements},function(t,n){t.exports=rxjs},function(t,n,r){t.exports=r(7)},function(t,n,r){"use strict";r.r(n);var e=r(0),o=function(){return function(t){this.showTimestamp=t}}(),i=function(){function t(t){this.greeterConfig=t}return t.prototype.greet=function(t){var n="Hello "+t;return this.greeterConfig&&this.greeterConfig.showTimestamp?"["+(new Date).toISOString()+"] "+n:n},t}(),u=r(1),s=r(5),c=function(t,n){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)};function l(t,n){function r(){this.constructor=t}c(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}function a(t){return"function"==typeof t}var p=!1,f={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;p=t},get useDeprecatedSynchronousErrorHandling(){return p}};function h(t){setTimeout(function(){throw t})}var d={closed:!0,next:function(t){},error:function(t){if(f.useDeprecatedSynchronousErrorHandling)throw t;h(t)},complete:function(){}},b=Array.isArray||function(t){return t&&"number"==typeof t.length};function _(t){return null!=t&&"object"==typeof t}var m,y={e:{}};function v(){try{return m.apply(this,arguments)}catch(t){return y.e=t,y}}function g(t){return m=t,v}function w(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,n){return n+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}w.prototype=Object.create(Error.prototype);var E=w,S=function(){function t(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var t,n=!1;if(!this.closed){var r=this._parent,e=this._parents,o=this._unsubscribe,i=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var u=-1,s=e?e.length:0;r;)r.remove(this),r=++u<s&&e[u]||null;if(a(o))g(o).call(this)===y&&(n=!0,t=t||(y.e instanceof E?C(y.e.errors):[y.e]));if(b(i))for(u=-1,s=i.length;++u<s;){var c=i[u];if(_(c))if(g(c.unsubscribe).call(c)===y){n=!0,t=t||[];var l=y.e;l instanceof E?t=t.concat(C(l.errors)):t.push(l)}}if(n)throw new E(t)}},t.prototype.add=function(n){if(!n||n===t.EMPTY)return t.EMPTY;if(n===this)return this;var r=n;switch(typeof n){case"function":r=new t(n);case"object":if(r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if("function"!=typeof r._addParent){var e=r;(r=new t)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+n+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(r),r._addParent(this),r},t.prototype.remove=function(t){var n=this._subscriptions;if(n){var r=n.indexOf(t);-1!==r&&n.splice(r,1)}},t.prototype._addParent=function(t){var n=this._parent,r=this._parents;n&&n!==t?r?-1===r.indexOf(t)&&r.push(t):this._parents=[t]:this._parent=t},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function C(t){return t.reduce(function(t,n){return t.concat(n instanceof E?n.errors:n)},[])}var x="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),T=function(t){function n(r,e,o){var i=t.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,i._parentSubscription=null,arguments.length){case 0:i.destination=d;break;case 1:if(!r){i.destination=d;break}if("object"==typeof r){r instanceof n?(i.syncErrorThrowable=r.syncErrorThrowable,i.destination=r,r.add(i)):(i.syncErrorThrowable=!0,i.destination=new I(i,r));break}default:i.syncErrorThrowable=!0,i.destination=new I(i,r,e,o)}return i}return l(n,t),n.prototype[x]=function(){return this},n.create=function(t,r,e){var o=new n(t,r,e);return o.syncErrorThrowable=!1,o},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},n.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},n.prototype._unsubscribeAndRecycle=function(){var t=this._parent,n=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=t,this._parents=n,this._parentSubscription=null,this},n}(S),I=function(t){function n(n,r,e,o){var i,u=t.call(this)||this;u._parentSubscriber=n;var s=u;return a(r)?i=r:r&&(i=r.next,e=r.error,o=r.complete,r!==d&&(a((s=Object.create(r)).unsubscribe)&&u.add(s.unsubscribe.bind(s)),s.unsubscribe=u.unsubscribe.bind(u))),u._context=s,u._next=i,u._error=e,u._complete=o,u}return l(n,t),n.prototype.next=function(t){if(!this.isStopped&&this._next){var n=this._parentSubscriber;f.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable?this.__tryOrSetError(n,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},n.prototype.error=function(t){if(!this.isStopped){var n=this._parentSubscriber,r=f.useDeprecatedSynchronousErrorHandling;if(this._error)r&&n.syncErrorThrowable?(this.__tryOrSetError(n,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(n.syncErrorThrowable)r?(n.syncErrorValue=t,n.syncErrorThrown=!0):h(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;h(t)}}},n.prototype.complete=function(){var t=this;if(!this.isStopped){var n=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};f.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable?(this.__tryOrSetError(n,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},n.prototype.__tryOrUnsub=function(t,n){try{t.call(this._context,n)}catch(t){if(this.unsubscribe(),f.useDeprecatedSynchronousErrorHandling)throw t;h(t)}},n.prototype.__tryOrSetError=function(t,n,r){if(!f.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{n.call(this._context,r)}catch(n){return f.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=n,t.syncErrorThrown=!0,!0):(h(n),!0)}return!1},n.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},n}(T);var O="function"==typeof Symbol&&Symbol.observable||"@@observable";function N(){}function D(t){return t?1===t.length?t[0]:function(n){return t.reduce(function(t,n){return n(t)},n)}:N}var j=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(n){var r=new t;return r.source=this,r.operator=n,r},t.prototype.subscribe=function(t,n,r){var e=this.operator,o=function(t,n,r){if(t){if(t instanceof T)return t;if(t[x])return t[x]()}return t||n||r?new T(t,n,r):new T(d)}(t,n,r);if(e?e.call(o,this.source):o.add(this.source||f.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),f.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){f.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=n),!function(t){for(;t;){var n=t,r=n.closed,e=n.destination,o=n.isStopped;if(r||o)return!1;t=e&&e instanceof T?e:null}return!0}(t)?console.warn(n):t.error(n)}},t.prototype.forEach=function(t,n){var r=this;return new(n=P(n))(function(n,e){var o;o=r.subscribe(function(n){try{t(n)}catch(t){e(t),o&&o.unsubscribe()}},e,n)})},t.prototype._subscribe=function(t){var n=this.source;return n&&n.subscribe(t)},t.prototype[O]=function(){return this},t.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return 0===t.length?this:D(t)(this)},t.prototype.toPromise=function(t){var n=this;return new(t=P(t))(function(t,r){var e;n.subscribe(function(t){return e=t},function(t){return r(t)},function(){return t(e)})})},t.create=function(n){return new t(n)},t}();function P(t){if(t||(t=f.Promise||Promise),!t)throw new Error("no Promise impl found");return t}var A=function(t){return function(n){for(var r=0,e=t.length;r<e&&!n.closed;r++)n.next(t[r]);n.closed||n.complete()}};function R(t,n){return new j(n?function(r){var e=new S,o=0;return e.add(n.schedule(function(){o!==t.length?(r.next(t[o++]),r.closed||e.add(this.schedule())):r.complete()})),e}:A(t))}function M(t){var n=new j(function(n){n.next(t),n.complete()});return n._isScalar=!0,n.value=t,n}var V=new j(function(t){return t.complete()});function F(t){return t?function(t){return new j(function(n){return t.schedule(function(){return n.complete()})})}(t):V}function H(t){return t&&"function"==typeof t.schedule}function k(t){return t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var G=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};var L=function(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}();var U=function(t){return function(n){return t.then(function(t){n.closed||(n.next(t),n.complete())},function(t){return n.error(t)}).then(null,h),n}};var B=function(t){return function(n){for(var r=t[L]();;){var e=r.next();if(e.done){n.complete();break}if(n.next(e.value),n.closed)break}return"function"==typeof r.return&&n.add(function(){r.return&&r.return()}),n}};var Y=function(t){return function(n){var r=t[O]();if("function"!=typeof r.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return r.subscribe(n)}};var z=function(t){if(t instanceof j)return function(n){return t._isScalar?(n.next(t.value),void n.complete()):t.subscribe(n)};if(t&&"function"==typeof t[O])return Y(t);if(G(t))return A(t);if(k(t))return U(t);if(t&&"function"==typeof t[L])return B(t);var n=_(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+n+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function Z(t,n){if(!n)return t instanceof j?t:new j(z(t));if(null!=t){if(function(t){return t&&"function"==typeof t[O]}(t))return function(t,n){return new j(n?function(r){var e=new S;return e.add(n.schedule(function(){var o=t[O]();e.add(o.subscribe({next:function(t){e.add(n.schedule(function(){return r.next(t)}))},error:function(t){e.add(n.schedule(function(){return r.error(t)}))},complete:function(){e.add(n.schedule(function(){return r.complete()}))}}))})),e}:Y(t))}(t,n);if(k(t))return function(t,n){return new j(n?function(r){var e=new S;return e.add(n.schedule(function(){return t.then(function(t){e.add(n.schedule(function(){r.next(t),e.add(n.schedule(function(){return r.complete()}))}))},function(t){e.add(n.schedule(function(){return r.error(t)}))})})),e}:U(t))}(t,n);if(G(t))return R(t,n);if(function(t){return t&&"function"==typeof t[L]}(t)||"string"==typeof t)return function(t,n){if(!t)throw new Error("Iterable cannot be null");return new j(n?function(r){var e,o=new S;return o.add(function(){e&&"function"==typeof e.return&&e.return()}),o.add(n.schedule(function(){e=t[L](),o.add(n.schedule(function(){if(!r.closed){var t,n;try{var o=e.next();t=o.value,n=o.done}catch(t){return void r.error(t)}n?r.complete():(r.next(t),this.schedule())}}))})),o}:B(t))}(t,n)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}var $=function(t){function n(n,r,e){var o=t.call(this)||this;return o.parent=n,o.outerValue=r,o.outerIndex=e,o.index=0,o}return l(n,t),n.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},n.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},n.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},n}(T);var K=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return l(n,t),n.prototype.notifyNext=function(t,n,r,e,o){this.destination.next(n)},n.prototype.notifyError=function(t,n){this.destination.error(t)},n.prototype.notifyComplete=function(t){this.destination.complete()},n}(T);function W(t,n){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new q(t,n))}}var q=function(){function t(t,n){this.project=t,this.thisArg=n}return t.prototype.call=function(t,n){return n.subscribe(new J(t,this.project,this.thisArg))},t}(),J=function(t){function n(n,r,e){var o=t.call(this,n)||this;return o.project=r,o.count=0,o.thisArg=e||o,o}return l(n,t),n.prototype._next=function(t){var n;try{n=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(n)},n}(T);var Q=function(){function t(t,n){void 0===n&&(n=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=n}return t.prototype.call=function(t,n){return n.subscribe(new X(t,this.project,this.concurrent))},t}(),X=function(t){function n(n,r,e){void 0===e&&(e=Number.POSITIVE_INFINITY);var o=t.call(this,n)||this;return o.project=r,o.concurrent=e,o.hasCompleted=!1,o.buffer=[],o.active=0,o.index=0,o}return l(n,t),n.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},n.prototype._tryNext=function(t){var n,r=this.index++;try{n=this.project(t,r)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(n,t,r)},n.prototype._innerSub=function(t,n,r){var e=new $(this,void 0,void 0);this.destination.add(e),function(t,n,r,e,o){if(void 0===o&&(o=new $(t,r,e)),!o.closed)z(n)(o)}(this,t,n,r,e)},n.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},n.prototype.notifyNext=function(t,n,r,e,o){this.destination.next(n)},n.prototype.notifyComplete=function(t){var n=this.buffer;this.remove(t),this.active--,n.length>0?this._next(n.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},n}(K);function tt(t){return t}function nt(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),function t(n,r,e){return void 0===e&&(e=Number.POSITIVE_INFINITY),"function"==typeof r?function(o){return o.pipe(t(function(t,e){return Z(n(t,e)).pipe(W(function(n,o){return r(t,n,e,o)}))},e))}:("number"==typeof r&&(e=r),function(t){return t.lift(new Q(n,e))})}(tt,t)}function rt(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return 1===t.length||2===t.length&&H(t[1])?Z(t[0]):nt(1)(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=t[t.length-1];switch(H(r)?t.pop():r=void 0,t.length){case 0:return F(r);case 1:return r?R(t,r):M(t[0]);default:return R(t,r)}}.apply(void 0,t))}var et=function(){function t(t){this.greeterService=t,this.formGroup=new u.FormGroup({name:new u.FormControl("world")}),this.destroy$=new s.Subject}return t.prototype.ngOnInit=function(){var t=this;this.greeting$=this.formGroup.valueChanges.pipe(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(n){var r=t[t.length-1];H(r)?t.pop():r=null;var e=t.length;return rt(1!==e||r?e>0?R(t,r):F(r):M(t[0]),n)}}(this.formGroup.value),W(function(n){var r=n.name;return t.greeterService.greet(r)}))},t.prototype.ngOnDestroy=function(){this.destroy$.next(!0)},t}(),ot=r(4),it=function(){return function(){this.name="world"}}(),ut=function(){function t(t){this.injector=t}return t.prototype.ngDoBootstrap=function(){var t=Object(ot.createCustomElement)(it,{injector:this.injector});customElements.define("static-greeter-element",t);var n=Object(ot.createCustomElement)(et,{injector:this.injector});customElements.define("dynamic-greeter-element",n)},t}(),st=function(){function t(t){this._ref=t,this._latestValue=null,this._latestReturnedValue=null,this._subscription=null,this._obj=null}return t.prototype.ngOnDestroy=function(){this._subscription&&this._dispose()},t.prototype.transform=function(t){var n=this;return this._obj?t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue===this._latestReturnedValue?this._latestReturnedValue:(this._latestReturnedValue=this._latestValue,e.WrappedValue.wrap(this._latestValue)):(t&&(this._obj=t,this._subscription=t.subscribe({next:function(r){return n._updateLatestValue(t,r)}})),this._latestReturnedValue=this._latestValue,this._latestValue)},t.prototype._dispose=function(){this._subscription&&this._subscription.unsubscribe(),this._latestValue=null,this._latestReturnedValue=null,this._subscription=null,this._obj=null},t.prototype._updateLatestValue=function(t,n){t===this._obj&&(this._latestValue=n,this._ref.detectChanges())},t}(),ct=function(){return function(){}}(),lt=[[""]],at=e["ɵcrt"]({encapsulation:3,styles:lt,data:{}});function pt(t){return e["ɵvid"](0,[(t()(),e["ɵeld"](0,0,null,null,10,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(t,n,r){var o=!0;"submit"===n&&(o=!1!==e["ɵnov"](t,2).onSubmit(r)&&o);"reset"===n&&(o=!1!==e["ɵnov"](t,2).onReset()&&o);return o},null,null)),e["ɵdid"](1,16384,null,0,u["ɵangular_packages_forms_forms_bh"],[],null,null),e["ɵdid"](2,540672,null,0,u.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),e["ɵprd"](2048,null,u.ControlContainer,null,[u.FormGroupDirective]),e["ɵdid"](4,16384,null,0,u.NgControlStatusGroup,[[4,u.ControlContainer]],null,null),(t()(),e["ɵeld"](5,0,null,null,5,"input",[["formControlName","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(t,n,r){var o=!0;"input"===n&&(o=!1!==e["ɵnov"](t,6)._handleInput(r.target.value)&&o);"blur"===n&&(o=!1!==e["ɵnov"](t,6).onTouched()&&o);"compositionstart"===n&&(o=!1!==e["ɵnov"](t,6)._compositionStart()&&o);"compositionend"===n&&(o=!1!==e["ɵnov"](t,6)._compositionEnd(r.target.value)&&o);return o},null,null)),e["ɵdid"](6,16384,null,0,u.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,u.COMPOSITION_BUFFER_MODE]],null,null),e["ɵprd"](1024,null,u.NG_VALUE_ACCESSOR,function(t){return[t]},[u.DefaultValueAccessor]),e["ɵdid"](8,671744,null,0,u.FormControlName,[[3,u.ControlContainer],[8,null],[8,null],[6,u.NG_VALUE_ACCESSOR],[2,u["ɵangular_packages_forms_forms_k"]]],{name:[0,"name"]},null),e["ɵprd"](2048,null,u.NgControl,null,[u.FormControlName]),e["ɵdid"](10,16384,null,0,u.NgControlStatus,[[4,u.NgControl]],null,null),(t()(),e["ɵted"](11,null,[" ","\n"])),e["ɵpid"](131072,st,[e.ChangeDetectorRef])],function(t,n){t(n,2,0,n.component.formGroup);t(n,8,0,"name")},function(t,n){var r=n.component;t(n,0,0,e["ɵnov"](n,4).ngClassUntouched,e["ɵnov"](n,4).ngClassTouched,e["ɵnov"](n,4).ngClassPristine,e["ɵnov"](n,4).ngClassDirty,e["ɵnov"](n,4).ngClassValid,e["ɵnov"](n,4).ngClassInvalid,e["ɵnov"](n,4).ngClassPending),t(n,5,0,e["ɵnov"](n,10).ngClassUntouched,e["ɵnov"](n,10).ngClassTouched,e["ɵnov"](n,10).ngClassPristine,e["ɵnov"](n,10).ngClassDirty,e["ɵnov"](n,10).ngClassValid,e["ɵnov"](n,10).ngClassInvalid,e["ɵnov"](n,10).ngClassPending),t(n,11,0,e["ɵunv"](n,11,0,e["ɵnov"](n,12).transform(r.greeting$)))})}var ft=e["ɵccf"]("greeter-dynamic",et,function(t){return e["ɵvid"](0,[(t()(),e["ɵeld"](0,0,null,null,1,"greeter-dynamic",[],null,null,null,pt,at)),e["ɵdid"](1,245760,null,0,et,[i],null,null)],function(t,n){t(n,1,0)},null)},{},{},[]),ht=function(){function t(t){this.greeterService=t}return t.prototype.transform=function(t){return this.greeterService.greet(t)},t}(),dt=[[""]],bt=e["ɵcrt"]({encapsulation:0,styles:dt,data:{}});function _t(t){return e["ɵvid"](0,[e["ɵpid"](0,ht,[i]),(t()(),e["ɵeld"](1,0,null,null,2,"p",[],null,null,null,null,null)),(t()(),e["ɵted"](2,null,["",""])),e["ɵppd"](3,1)],null,function(t,n){var r=n.component;t(n,2,0,e["ɵunv"](n,2,0,t(n,3,0,e["ɵnov"](n,0),r.name)))})}var mt=e["ɵccf"]("greeter-static",it,function(t){return e["ɵvid"](0,[(t()(),e["ɵeld"](0,0,null,null,1,"greeter-static",[],null,null,null,_t,bt)),e["ɵdid"](1,49152,null,0,it,[],null,null)],null,null)},{name:"name"},{},[]),yt=r(3),vt=r(2),gt=function(){function t(){}return t.forRoot=function(n){return{ngModule:t,providers:[i,{provide:o,useValue:n}]}},t}(),wt=e["ɵcmf"](ut,[],function(t){return e["ɵmod"]([e["ɵmpd"](512,e.ComponentFactoryResolver,e["ɵCodegenComponentFactoryResolver"],[[8,[ft,mt]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["ɵmpd"](5120,e.LOCALE_ID,e["ɵangular_packages_core_core_k"],[[3,e.LOCALE_ID]]),e["ɵmpd"](4608,yt.NgLocalization,yt.NgLocaleLocalization,[e.LOCALE_ID,[2,yt["ɵangular_packages_common_common_a"]]]),e["ɵmpd"](4608,e.Compiler,e.Compiler,[]),e["ɵmpd"](5120,e.APP_ID,e["ɵangular_packages_core_core_f"],[]),e["ɵmpd"](5120,e.IterableDiffers,e["ɵangular_packages_core_core_i"],[]),e["ɵmpd"](5120,e.KeyValueDiffers,e["ɵangular_packages_core_core_j"],[]),e["ɵmpd"](4608,vt.DomSanitizer,vt["ɵDomSanitizerImpl"],[yt.DOCUMENT]),e["ɵmpd"](6144,e.Sanitizer,null,[vt.DomSanitizer]),e["ɵmpd"](4608,vt.HAMMER_GESTURE_CONFIG,vt.HammerGestureConfig,[]),e["ɵmpd"](5120,vt.EVENT_MANAGER_PLUGINS,function(t,n,r,e,o,i,u,s){return[new vt["ɵDomEventsPlugin"](t,n,r),new vt["ɵKeyEventsPlugin"](e),new vt["ɵHammerGesturesPlugin"](o,i,u,s)]},[yt.DOCUMENT,e.NgZone,e.PLATFORM_ID,yt.DOCUMENT,yt.DOCUMENT,vt.HAMMER_GESTURE_CONFIG,e["ɵConsole"],[2,vt.HAMMER_LOADER]]),e["ɵmpd"](4608,vt.EventManager,vt.EventManager,[vt.EVENT_MANAGER_PLUGINS,e.NgZone]),e["ɵmpd"](135680,vt["ɵDomSharedStylesHost"],vt["ɵDomSharedStylesHost"],[yt.DOCUMENT]),e["ɵmpd"](4608,vt["ɵDomRendererFactory2"],vt["ɵDomRendererFactory2"],[vt.EventManager,vt["ɵDomSharedStylesHost"]]),e["ɵmpd"](6144,e.RendererFactory2,null,[vt["ɵDomRendererFactory2"]]),e["ɵmpd"](6144,vt["ɵSharedStylesHost"],null,[vt["ɵDomSharedStylesHost"]]),e["ɵmpd"](4608,e.Testability,e.Testability,[e.NgZone]),e["ɵmpd"](4608,u.FormBuilder,u.FormBuilder,[]),e["ɵmpd"](4608,u["ɵangular_packages_forms_forms_j"],u["ɵangular_packages_forms_forms_j"],[]),e["ɵmpd"](4608,i,i,[[2,o]]),e["ɵmpd"](1073742336,yt.CommonModule,yt.CommonModule,[]),e["ɵmpd"](1024,e.ErrorHandler,vt["ɵangular_packages_platform_browser_platform_browser_a"],[]),e["ɵmpd"](1024,e.APP_INITIALIZER,function(t){return[vt["ɵangular_packages_platform_browser_platform_browser_j"](t)]},[[2,e.NgProbeToken]]),e["ɵmpd"](512,e.ApplicationInitStatus,e.ApplicationInitStatus,[[2,e.APP_INITIALIZER]]),e["ɵmpd"](131584,e.ApplicationRef,e.ApplicationRef,[e.NgZone,e["ɵConsole"],e.Injector,e.ErrorHandler,e.ComponentFactoryResolver,e.ApplicationInitStatus]),e["ɵmpd"](1073742336,e.ApplicationModule,e.ApplicationModule,[e.ApplicationRef]),e["ɵmpd"](1073742336,vt.BrowserModule,vt.BrowserModule,[[3,vt.BrowserModule]]),e["ɵmpd"](1073742336,u["ɵangular_packages_forms_forms_bc"],u["ɵangular_packages_forms_forms_bc"],[]),e["ɵmpd"](1073742336,u.ReactiveFormsModule,u.ReactiveFormsModule,[]),e["ɵmpd"](1073742336,ct,ct,[]),e["ɵmpd"](1073742336,gt,gt,[]),e["ɵmpd"](1073742336,ut,ut,[e.Injector]),e["ɵmpd"](256,e["ɵAPP_ROOT"],!0,[]),e["ɵmpd"](256,o,{showTimestamp:!1},[])])});Object(e.enableProdMode)(),vt.platformBrowser().bootstrapModuleFactory(wt,{ngZone:"noop"}).catch(function(t){return console.error(t)})}]);