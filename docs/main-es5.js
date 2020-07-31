(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "../../libs/data-access/api/src/index.ts":
    /*!**************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/data-access/api/src/index.ts ***!
      \**************************************************************************************/

    /*! no static exports found */

    /***/
    function libsDataAccessApiSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _phantom_util_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @phantom/util/storage */
      "../../libs/util/storage/src/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StorageModule", function () {
        return _phantom_util_storage__WEBPACK_IMPORTED_MODULE_0__["StorageModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return _phantom_util_storage__WEBPACK_IMPORTED_MODULE_0__["StorageService"];
      });
      /* harmony import */


      var _lib_api_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/api.module */
      "../../libs/data-access/api/src/lib/api.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
        return _lib_api_module__WEBPACK_IMPORTED_MODULE_1__["ApiModule"];
      });
      /* harmony import */


      var _lib_config_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lib/config/constant */
      "../../libs/data-access/api/src/lib/config/constant.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "URL_CHECK_BASE", function () {
        return _lib_config_constant__WEBPACK_IMPORTED_MODULE_2__["URL_CHECK_BASE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ERROR_ALERT_MESSAGE", function () {
        return _lib_config_constant__WEBPACK_IMPORTED_MODULE_2__["ERROR_ALERT_MESSAGE"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BOOKMARKS_STORAGE_KEY", function () {
        return _lib_config_constant__WEBPACK_IMPORTED_MODULE_2__["BOOKMARKS_STORAGE_KEY"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NO_IMAGE_PLACEHOLDER", function () {
        return _lib_config_constant__WEBPACK_IMPORTED_MODULE_2__["NO_IMAGE_PLACEHOLDER"];
      });
      /* harmony import */


      var _lib_model_bookmark_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lib/model/bookmark.model */
      "../../libs/data-access/api/src/lib/model/bookmark.model.ts");
      /* harmony import */


      var _lib_model_bookmark_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_model_bookmark_model__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony reexport (unknown) */


      for (var __WEBPACK_IMPORT_KEY__ in _lib_model_bookmark_model__WEBPACK_IMPORTED_MODULE_3__) {
        if (["StorageModule", "StorageService", "ApiModule", "URL_CHECK_BASE", "ERROR_ALERT_MESSAGE", "BOOKMARKS_STORAGE_KEY", "NO_IMAGE_PLACEHOLDER", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
          __webpack_require__.d(__webpack_exports__, key, function () {
            return _lib_model_bookmark_model__WEBPACK_IMPORTED_MODULE_3__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
      }
      /* harmony import */


      var _lib_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lib/services/api.service */
      "../../libs/data-access/api/src/lib/services/api.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return _lib_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"];
      });
      /***/

    },

    /***/
    "../../libs/data-access/api/src/lib/api.module.ts":
    /*!***********************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/data-access/api/src/lib/api.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ApiModule */

    /***/
    function libsDataAccessApiSrcLibApiModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
        return ApiModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _phantom_util_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @phantom/util/storage */
      "../../libs/util/storage/src/index.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var ApiModule = function ApiModule() {
        _classCallCheck(this, ApiModule);
      };

      ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ApiModule
      });
      ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ApiModule_Factory(t) {
          return new (t || ApiModule)();
        },
        imports: [[_phantom_util_storage__WEBPACK_IMPORTED_MODULE_1__["StorageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ApiModule, {
          imports: [_phantom_util_storage__WEBPACK_IMPORTED_MODULE_1__["StorageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_phantom_util_storage__WEBPACK_IMPORTED_MODULE_1__["StorageModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/data-access/api/src/lib/config/constant.ts":
    /*!****************************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/data-access/api/src/lib/config/constant.ts ***!
      \****************************************************************************************************/

    /*! exports provided: URL_CHECK_BASE, ERROR_ALERT_MESSAGE, BOOKMARKS_STORAGE_KEY, NO_IMAGE_PLACEHOLDER */

    /***/
    function libsDataAccessApiSrcLibConfigConstantTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "URL_CHECK_BASE", function () {
        return URL_CHECK_BASE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ERROR_ALERT_MESSAGE", function () {
        return ERROR_ALERT_MESSAGE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BOOKMARKS_STORAGE_KEY", function () {
        return BOOKMARKS_STORAGE_KEY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NO_IMAGE_PLACEHOLDER", function () {
        return NO_IMAGE_PLACEHOLDER;
      });

      var URL_CHECK_BASE = 'https://api.linkpreview.net/?key=44f1419ca66071d034e5fd027f9d3173&q=';
      var ERROR_ALERT_MESSAGE = 'The url does not exist. Please try again';
      var BOOKMARKS_STORAGE_KEY = 'bookmarks';
      var NO_IMAGE_PLACEHOLDER = 'https://upload.wikimedia.org/wikipedia/commons/6/62/%22No_Image%22_placeholder.png';
      /***/
    },

    /***/
    "../../libs/data-access/api/src/lib/model/bookmark.model.ts":
    /*!*********************************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/data-access/api/src/lib/model/bookmark.model.ts ***!
      \*********************************************************************************************************/

    /*! no static exports found */

    /***/
    function libsDataAccessApiSrcLibModelBookmarkModelTs(module, exports) {
      /***/
    },

    /***/
    "../../libs/data-access/api/src/lib/services/api.service.ts":
    /*!*********************************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/data-access/api/src/lib/services/api.service.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: ApiService */

    /***/
    function libsDataAccessApiSrcLibServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _phantom_util_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @phantom/util/storage */
      "../../libs/util/storage/src/index.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "../../node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _config_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../config/constant */
      "../../libs/data-access/api/src/lib/config/constant.ts");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(_storageService, _http) {
          _classCallCheck(this, ApiService);

          this._storageService = _storageService;
          this._http = _http;
          /**
           * @description baseurl for checking if url exists
           * @private
           * @memberof ApiService
           */

          this._baseUrl = _config_constant__WEBPACK_IMPORTED_MODULE_5__["URL_CHECK_BASE"];
          /**
           * @description message for if the url does not exist
           * @private
           * @memberof ApiService
           */

          this._alertErrorMessage = _config_constant__WEBPACK_IMPORTED_MODULE_5__["ERROR_ALERT_MESSAGE"];
          /**
           * @description subject used to pass alert message on error
           * @private
           * @type {Subject<string>}
           * @memberof ApiService
           */

          this._alert$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /**
           * @description alert message observable
           * @type {Observable<string>}
           * @memberof ApiService
           */

          this.alertMessage$ = this._alert$$.asObservable();
        }
        /**
         * @description GET list of web urls from local storage or default list
         * @author Kwakes Prempeh
         * @returns {Observable<Bookmark[]>}
         * @memberof ApiService
         */


        _createClass(ApiService, [{
          key: "getItems",
          value: function getItems() {
            var storage = this._storageService.getData(_config_constant__WEBPACK_IMPORTED_MODULE_5__["BOOKMARKS_STORAGE_KEY"]);

            var list = storage['list'];

            if (list === null) {
              list = [];
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(list);
          }
          /**
           * @description Check if url is exists
           * @author Kwakes Prempeh
           * @param {string} formUrl
           * @param {number} [id=null]
           * @returns {Observable<Bookmark>}
           * @memberof ApiService
           */

        }, {
          key: "checkIfUrlExists",
          value: function checkIfUrlExists(formUrl) {
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            return this._http.get("".concat(this._baseUrl).concat(formUrl)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_ref) {
              var url = _ref.url,
                  image = _ref.image;
              image = image ? image : _config_constant__WEBPACK_IMPORTED_MODULE_5__["NO_IMAGE_PLACEHOLDER"];
              return {
                id: id,
                url: url,
                image: image
              };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
          }
          /**
           * @description set the alert message of the app
           * @author Kwakes Prempeh
           * @param {(string | null)} [message=null]
           * @memberof ApiService
           */

        }, {
          key: "setAlertMessage",
          value: function setAlertMessage() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            this._alert$$.next(message);
          }
          /**
           * @description handele the errors from any http call made
           * @author Kwakes Prempeh
           * @private
           * @param {*} error
           * @returns {Observable<never>}
           * @memberof ApiService
           */

        }, {
          key: "handleError",
          value: function handleError(error) {
            var errorMessage = '';

            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = "Error: ".concat(error.error.message);
            } else {
              // server-side error
              errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
            }

            this._alert$$.next(this._alertErrorMessage);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_phantom_util_storage__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _phantom_util_storage__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/data-access/store/src/index.ts":
    /*!****************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/data-access/store/src/index.ts ***!
      \****************************************************************************************/

    /*! exports provided: AddBookmark, GetBookmarks, UpdateBookmark, DeleteBookmark, SetSelectedBookmark, BookmarkStateModel, BookmarkState, StoreModule */

    /***/
    function libsDataAccessStoreSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_state_bookmark_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/state/bookmark.actions */
      "../../libs/data-access/store/src/lib/state/bookmark.actions.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AddBookmark", function () {
        return _lib_state_bookmark_actions__WEBPACK_IMPORTED_MODULE_0__["AddBookmark"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GetBookmarks", function () {
        return _lib_state_bookmark_actions__WEBPACK_IMPORTED_MODULE_0__["GetBookmarks"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UpdateBookmark", function () {
        return _lib_state_bookmark_actions__WEBPACK_IMPORTED_MODULE_0__["UpdateBookmark"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DeleteBookmark", function () {
        return _lib_state_bookmark_actions__WEBPACK_IMPORTED_MODULE_0__["DeleteBookmark"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SetSelectedBookmark", function () {
        return _lib_state_bookmark_actions__WEBPACK_IMPORTED_MODULE_0__["SetSelectedBookmark"];
      });
      /* harmony import */


      var _lib_state_bookmark_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/state/bookmark.state */
      "../../libs/data-access/store/src/lib/state/bookmark.state.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BookmarkStateModel", function () {
        return _lib_state_bookmark_state__WEBPACK_IMPORTED_MODULE_1__["BookmarkStateModel"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BookmarkState", function () {
        return _lib_state_bookmark_state__WEBPACK_IMPORTED_MODULE_1__["BookmarkState"];
      });
      /* harmony import */


      var _lib_store_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lib/store.module */
      "../../libs/data-access/store/src/lib/store.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StoreModule", function () {
        return _lib_store_module__WEBPACK_IMPORTED_MODULE_2__["StoreModule"];
      });
      /***/

    },

    /***/
    "../../libs/data-access/store/src/lib/state/bookmark.actions.ts":
    /*!*************************************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/data-access/store/src/lib/state/bookmark.actions.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: AddBookmark, GetBookmarks, UpdateBookmark, DeleteBookmark, SetSelectedBookmark */

    /***/
    function libsDataAccessStoreSrcLibStateBookmarkActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddBookmark", function () {
        return AddBookmark;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetBookmarks", function () {
        return GetBookmarks;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateBookmark", function () {
        return UpdateBookmark;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteBookmark", function () {
        return DeleteBookmark;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetSelectedBookmark", function () {
        return SetSelectedBookmark;
      });

      var AddBookmark = function AddBookmark(url) {
        _classCallCheck(this, AddBookmark);

        this.url = url;
      };

      AddBookmark.type = '[Bookmark] Add';

      var GetBookmarks = function GetBookmarks() {
        _classCallCheck(this, GetBookmarks);
      };

      GetBookmarks.type = '[Bookmark] Get';

      var UpdateBookmark = function UpdateBookmark(url, id) {
        _classCallCheck(this, UpdateBookmark);

        this.url = url;
        this.id = id;
      };

      UpdateBookmark.type = '[Bookmark] Update';

      var DeleteBookmark = function DeleteBookmark(id) {
        _classCallCheck(this, DeleteBookmark);

        this.id = id;
      };

      DeleteBookmark.type = '[Bookmark] Delete';

      var SetSelectedBookmark = function SetSelectedBookmark(payload) {
        _classCallCheck(this, SetSelectedBookmark);

        this.payload = payload;
      };

      SetSelectedBookmark.type = '[Bookmark] Set';
      /***/
    },

    /***/
    "../../libs/data-access/store/src/lib/state/bookmark.state.ts":
    /*!***********************************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/data-access/store/src/lib/state/bookmark.state.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: BookmarkStateModel, BookmarkState */

    /***/
    function libsDataAccessStoreSrcLibStateBookmarkStateTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookmarkStateModel", function () {
        return BookmarkStateModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookmarkState", function () {
        return BookmarkState;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngxs/store */
      "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
      /* harmony import */


      var _phantom_bookmark_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @phantom/bookmark-api */
      "../../libs/data-access/api/src/index.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "../../node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _bookmark_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bookmark.actions */
      "../../libs/data-access/store/src/lib/state/bookmark.actions.ts");

      var idGenerator = function idGenerator() {
        return '_' + Math.random().toString(36).substr(2, 9);
      };

      var BookmarkStateModel = function BookmarkStateModel() {
        _classCallCheck(this, BookmarkStateModel);
      };

      var BookmarkState = /*#__PURE__*/function () {
        function BookmarkState(_bookmarkApi) {
          _classCallCheck(this, BookmarkState);

          this._bookmarkApi = _bookmarkApi;
        }

        _createClass(BookmarkState, [{
          key: "getBookmarks",
          value: function getBookmarks(_ref2) {
            var getState = _ref2.getState,
                setState = _ref2.setState;
            return this._bookmarkApi.getItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              var state = getState();
              setState(Object.assign(Object.assign({}, state), {
                list: result
              }));
            }));
          }
        }, {
          key: "addBookmark",
          value: function addBookmark(_ref3, _ref4) {
            var getState = _ref3.getState,
                patchState = _ref3.patchState,
                dispatch = _ref3.dispatch;
            var url = _ref4.url;
            return this._bookmarkApi.checkIfUrlExists(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              var state = getState();
              var id = idGenerator();
              var item = Object.assign(Object.assign({}, result), {
                id: id
              });
              patchState({
                list: [].concat(_toConsumableArray(state.list), [item])
              });
              dispatch(new _bookmark_actions__WEBPACK_IMPORTED_MODULE_6__["SetSelectedBookmark"](item));
            }));
          }
        }, {
          key: "updateBookmark",
          value: function updateBookmark(_ref5, _ref6) {
            var getState = _ref5.getState,
                setState = _ref5.setState;
            var url = _ref6.url,
                id = _ref6.id;
            return this._bookmarkApi.checkIfUrlExists(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              var state = getState();

              var BookmarkList = _toConsumableArray(state.list);

              var BookmarkIndex = BookmarkList.findIndex(function (item) {
                return item.id === id;
              });
              var updateItem = Object.assign(Object.assign({}, result), {
                id: id
              });
              BookmarkList[BookmarkIndex] = updateItem;
              setState(Object.assign(Object.assign({}, state), {
                list: BookmarkList
              }));
            }));
          }
        }, {
          key: "deleteBookmark",
          value: function deleteBookmark(_ref7, _ref8) {
            var getState = _ref7.getState,
                setState = _ref7.setState;
            var id = _ref8.id;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
              var state = getState();
              var filteredArray = state.list.filter(function (item) {
                return item.id !== id;
              });
              setState(Object.assign(Object.assign({}, state), {
                list: filteredArray
              }));
            }));
          }
        }, {
          key: "setSelectedBookmarkId",
          value: function setSelectedBookmarkId(_ref9, _ref10) {
            var getState = _ref9.getState,
                setState = _ref9.setState;
            var payload = _ref10.payload;
            var state = getState();
            setState(Object.assign(Object.assign({}, state), {
              selectedBookmark: payload
            }));
          }
        }], [{
          key: "getBookmarkList",
          value: function getBookmarkList(state) {
            return state.list;
          }
        }, {
          key: "getSelectedBookmark",
          value: function getSelectedBookmark(state) {
            return state.selectedBookmark;
          }
        }]);

        return BookmarkState;
      }();

      BookmarkState.ɵfac = function BookmarkState_Factory(t) {
        return new (t || BookmarkState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_phantom_bookmark_api__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      BookmarkState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: BookmarkState,
        factory: BookmarkState.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_6__["GetBookmarks"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], BookmarkState.prototype, "getBookmarks", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_6__["AddBookmark"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _bookmark_actions__WEBPACK_IMPORTED_MODULE_6__["AddBookmark"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], BookmarkState.prototype, "addBookmark", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateBookmark"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _bookmark_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateBookmark"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], BookmarkState.prototype, "updateBookmark", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteBookmark"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _bookmark_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteBookmark"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], BookmarkState.prototype, "deleteBookmark", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_bookmark_actions__WEBPACK_IMPORTED_MODULE_6__["SetSelectedBookmark"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _bookmark_actions__WEBPACK_IMPORTED_MODULE_6__["SetSelectedBookmark"]]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], BookmarkState.prototype, "setSelectedBookmarkId", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BookmarkStateModel]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], BookmarkState, "getBookmarkList", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BookmarkStateModel]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], BookmarkState, "getSelectedBookmark", null);
      BookmarkState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'bookmarks',
        defaults: {
          list: [],
          selectedBookmark: null
        }
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_phantom_bookmark_api__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], BookmarkState);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BookmarkState, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _phantom_bookmark_api__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, {
          getBookmarks: [],
          addBookmark: [],
          updateBookmark: [],
          deleteBookmark: [],
          setSelectedBookmarkId: []
        });
      })();
      /***/

    },

    /***/
    "../../libs/data-access/store/src/lib/store.module.ts":
    /*!***************************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/data-access/store/src/lib/store.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: StoreModule */

    /***/
    function libsDataAccessStoreSrcLibStoreModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreModule", function () {
        return StoreModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _phantom_bookmark_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @phantom/bookmark-api */
      "../../libs/data-access/api/src/index.ts");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngxs/store */
      "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
      /* harmony import */


      var _state_bookmark_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./state/bookmark.state */
      "../../libs/data-access/store/src/lib/state/bookmark.state.ts");

      var StoreModule = function StoreModule() {
        _classCallCheck(this, StoreModule);
      };

      StoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: StoreModule
      });
      StoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function StoreModule_Factory(t) {
          return new (t || StoreModule)();
        },
        imports: [[_phantom_bookmark_api__WEBPACK_IMPORTED_MODULE_1__["ApiModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"].forFeature([_state_bookmark_state__WEBPACK_IMPORTED_MODULE_3__["BookmarkState"]])], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoreModule, {
          imports: [_phantom_bookmark_api__WEBPACK_IMPORTED_MODULE_1__["ApiModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["ɵbb"]],
          exports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_phantom_bookmark_api__WEBPACK_IMPORTED_MODULE_1__["ApiModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"].forFeature([_state_bookmark_state__WEBPACK_IMPORTED_MODULE_3__["BookmarkState"]])],
            exports: [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "../../libs/util/animations/src/index.ts":
    /*!**************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/util/animations/src/index.ts ***!
      \**************************************************************************************/

    /*! exports provided: resetRouteAnimation, fadeRouteAnimation, RouterAnimation */

    /***/
    function libsUtilAnimationsSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_routing_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/routing.animations */
      "../../libs/util/animations/src/lib/routing.animations.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "resetRouteAnimation", function () {
        return _lib_routing_animations__WEBPACK_IMPORTED_MODULE_0__["resetRouteAnimation"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "fadeRouteAnimation", function () {
        return _lib_routing_animations__WEBPACK_IMPORTED_MODULE_0__["fadeRouteAnimation"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RouterAnimation", function () {
        return _lib_routing_animations__WEBPACK_IMPORTED_MODULE_0__["RouterAnimation"];
      });
      /***/

    },

    /***/
    "../../libs/util/animations/src/lib/routing.animations.ts":
    /*!*******************************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/util/animations/src/lib/routing.animations.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: resetRouteAnimation, fadeRouteAnimation, RouterAnimation */

    /***/
    function libsUtilAnimationsSrcLibRoutingAnimationsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resetRouteAnimation", function () {
        return resetRouteAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeRouteAnimation", function () {
        return fadeRouteAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouterAnimation", function () {
        return RouterAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var resetRouteAnimation = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'relative'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%'
      })], {
        optional: true
      })];
      var fadeRouteAnimation = [].concat(resetRouteAnimation, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      })], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()], {
        optional: true
      })])]);
      var RouterAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', fadeRouteAnimation)]);
      /***/
    },

    /***/
    "../../libs/util/storage/src/index.ts":
    /*!***********************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/util/storage/src/index.ts ***!
      \***********************************************************************************/

    /*! exports provided: StorageModule, StorageService */

    /***/
    function libsUtilStorageSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_storage_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/storage.module */
      "../../libs/util/storage/src/lib/storage.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StorageModule", function () {
        return _lib_storage_module__WEBPACK_IMPORTED_MODULE_0__["StorageModule"];
      });
      /* harmony import */


      var _lib_services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/services/storage.service */
      "../../libs/util/storage/src/lib/services/storage.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return _lib_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"];
      });
      /***/

    },

    /***/
    "../../libs/util/storage/src/lib/services/storage.service.ts":
    /*!**********************************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/util/storage/src/lib/services/storage.service.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: StorageService */

    /***/
    function libsUtilStorageSrcLibServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);
        }

        _createClass(StorageService, [{
          key: "getData",
          value: function getData(key) {
            return JSON.parse(window.localStorage.getItem(key));
          }
        }, {
          key: "setData",
          value: function setData(key, data) {
            window.localStorage.setItem(key, JSON.stringify(data));
          }
        }]);

        return StorageService;
      }();

      StorageService.ɵfac = function StorageService_Factory(t) {
        return new (t || StorageService)();
      };

      StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StorageService,
        factory: StorageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "../../libs/util/storage/src/lib/storage.module.ts":
    /*!************************************************************************************************!*\
      !*** /Users/rojomac/development/phantom-tech-test/libs/util/storage/src/lib/storage.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: StorageModule */

    /***/
    function libsUtilStorageSrcLibStorageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageModule", function () {
        return StorageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var StorageModule = function StorageModule() {
        _classCallCheck(this, StorageModule);
      };

      StorageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: StorageModule
      });
      StorageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function StorageModule_Factory(t) {
          return new (t || StorageModule)();
        },
        imports: [[]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | phantom-bookmark-shell */
          "phantom-bookmark-shell").then(__webpack_require__.bind(null,
          /*! @phantom/bookmark-shell */
          "../../libs/feature/shell/src/index.ts")).then(function (module) {
            return module.ShellModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _phantom_util_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @phantom/util/animations */
      "../../libs/util/animations/src/index.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'bookmark-app';
        }

        _createClass(AppComponent, [{
          key: "prepareRoute",
          value: function prepareRoute(outlet) {
            return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["ph-root"]],
        decls: 3,
        vars: 1,
        consts: [[1, "h-100"], ["outlet", "outlet"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimation", ctx.prepareRoute(_r0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2Jvb2ttYXJrLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"],
        data: {
          animation: [_phantom_util_animations__WEBPACK_IMPORTED_MODULE_1__["RouterAnimation"]]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ph-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            animations: [_phantom_util_animations__WEBPACK_IMPORTED_MODULE_1__["RouterAnimation"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngxs/store */
      "../../node_modules/@ngxs/store/__ivy_ngcc__/fesm2015/ngxs-store.js");
      /* harmony import */


      var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngxs/storage-plugin */
      "../../node_modules/@ngxs/storage-plugin/__ivy_ngcc__/fesm2015/ngxs-storage-plugin.js");
      /* harmony import */


      var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngxs/devtools-plugin */
      "../../node_modules/@ngxs/devtools-plugin/__ivy_ngcc__/fesm2015/ngxs-devtools-plugin.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _phantom_bookmark_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @phantom/bookmark-store */
      "../../libs/data-access/store/src/index.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js"); // Third party packages


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forRoot([], {
          developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
        }), _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_5__["NgxsStoragePluginModule"].forRoot({
          key: _phantom_bookmark_store__WEBPACK_IMPORTED_MODULE_9__["BookmarkState"]
        }), _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsReduxDevtoolsPluginModule"].forRoot({
          disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ɵj"], _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_5__["NgxsStoragePluginModule"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsReduxDevtoolsPluginModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forRoot([], {
              developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
            }), _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_5__["NgxsStoragePluginModule"].forRoot({
              key: _phantom_bookmark_store__WEBPACK_IMPORTED_MODULE_9__["BookmarkState"]
            }), _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_6__["NgxsReduxDevtoolsPluginModule"].forRoot({
              disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
            })],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/rojomac/development/phantom-tech-test/apps/bookmark-app/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map