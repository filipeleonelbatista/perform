webpackHotUpdate_N_E("pages/sobre-nos",{

/***/ "./src/pages/sobre-nos.js":
/*!********************************!*\
  !*** ./src/pages/sobre-nos.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SobreNosPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/app/app.provider */ "./src/contexts/app/app.provider.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/seo */ "./src/components/seo.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var components_floating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/floating */ "./src/components/floating.js");
/* harmony import */ var sections_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sections/banner */ "./src/sections/banner.js");
/* harmony import */ var sections_feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sections/feature */ "./src/sections/feature.js");
/* harmony import */ var sections_partner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sections/partner */ "./src/sections/partner.js");
/* harmony import */ var sections_workflow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sections/workflow */ "./src/sections/workflow.js");
/* harmony import */ var sections_testimonial__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sections/testimonial */ "./src/sections/testimonial.js");
/* harmony import */ var sections_package__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sections/package */ "./src/sections/package.js");
/* harmony import */ var sections_contact_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sections/contact-form */ "./src/sections/contact-form.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_Marketing_Digital_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/Marketing-Digital.png */ "./src/assets/Marketing-Digital.png");
/* harmony import */ var _assets_Marketing_Digital_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_Marketing_Digital_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "C:\\Users\\Notebook\\Desktop\\agenciaperform-com-br\\project\\src\\pages\\sobre-nos.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    borderRadius: '0.8rem'
  }
};
function SobreNosPage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalIsOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      celular = _useState2[0],
      setCelular = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      email = _useState3[0],
      setEmail = _useState3[1];

  function handleSaveModalForm() {
    if (celular === "" || celular === "") {
      return closeModal();
    }

    window.confirm("Voc\xEA digitou ".concat(celular, " e ").concat(email));
    closeModal();
  }

  function openModal() {// const modal = sessionStorage.getItem('modal');
    // if(modal === null){
    //   sessionStorage.setItem('modal', true);
    // }
    // if(modal === 'false'){
    //   sessionStorage.setItem('modal', false);      
    //   setIsOpen(false);
    // }else{
    //   setIsOpen(true);
    //   sessionStorage.setItem('modal', true);
    // }
  }

  function afterOpenModal() {// references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeModalButton() {
    setIsOpen(false);
    sessionStorage.setItem('modal', false);
  }

  return __jsx("div", {
    onMouseLeave: openModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx(react_modal__WEBPACK_IMPORTED_MODULE_14___default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    style: customStyles,
    contentLabel: "Example Modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      zIndex: '1000'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      width: '25rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _assets_Marketing_Digital_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    style: {
      width: 'inherit',
      height: '100%',
      objectFit: 'cover'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      width: '25rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.8rem 1.8rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, "Fa\xE7a seu plano de voo ", __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 41
    }
  }, "GRATUITO!")), __jsx("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#CCC',
      borderWidth: 0,
      width: '2.6rem',
      height: '2.6rem',
      borderRadius: '50%'
    },
    onClick: closeModalButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_16__["FaTimes"], {
    color: "#000",
    size: 16,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }))), __jsx("div", {
    style: {
      padding: '0.8rem 1.8rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, "Cadastra-se gratuitamente para receber uma CONSULTORIA da sua empresa e conduza seu negocio para outras PLANETAS!"), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, __jsx("label", {
    style: {
      fontWeight: 'bolder',
      color: '#000'
    },
    htmlFor: "phone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, "Celular"), __jsx("input", {
    style: {
      width: '100%',
      height: 'auto',
      padding: '0.8rem',
      borderRadius: '0.8rem',
      fontSize: 18
    },
    id: "phone",
    value: celular,
    onChange: function onChange(e) {
      setCelular(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0.4rem 0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx("label", {
    style: {
      fontWeight: 'bolder',
      color: '#000'
    },
    htmlFor: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, "E-mail"), __jsx("input", {
    style: {
      width: '100%',
      height: 'auto',
      padding: '0.8rem',
      borderRadius: '0.8rem',
      fontSize: 18
    },
    id: "email",
    value: email,
    onChange: function onChange(e) {
      setEmail(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  })), __jsx("button", {
    style: {
      fontWeight: 'bolder',
      color: '#fff',
      backgroundColor: '#333',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0.8rem 0',
      borderWidth: 0,
      width: '100%',
      height: '1.8rem',
      padding: '1.4rem',
      borderRadius: '1.8rem'
    },
    onClick: handleSaveModalForm,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }, "Eu quero receber")), __jsx("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderTop: '2px Solid #CCC',
      padding: '1.4rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, "N\xE3o enviamos span!")))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, __jsx(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_2__["StickyProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Sobre n\xF3s | Ag\xEAncia Perform | Impulsionando resultados digitais",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }), __jsx(sections_banner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }), __jsx(sections_partner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }), __jsx(sections_workflow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }), __jsx(sections_contact_form__WEBPACK_IMPORTED_MODULE_13__["default"], {
    location: "P\xE1gina Sobre n\xF3s",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  })))), __jsx(components_floating__WEBPACK_IMPORTED_MODULE_6__["default"], {
    location: "P\xE1gina Sobre n\xF3s",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }));
}

_s(SobreNosPage, "MfBHQzDrI1G9+cF0a1cYU6MCWWE=");

_c = SobreNosPage;

var _c;

$RefreshReg$(_c, "SobreNosPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NvYnJlLW5vcy5qcyJdLCJuYW1lcyI6WyJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwibWFyZ2luUmlnaHQiLCJ0cmFuc2Zvcm0iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiU29icmVOb3NQYWdlIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsImNlbHVsYXIiLCJzZXRDZWx1bGFyIiwiZW1haWwiLCJzZXRFbWFpbCIsImhhbmRsZVNhdmVNb2RhbEZvcm0iLCJjbG9zZU1vZGFsIiwid2luZG93IiwiY29uZmlybSIsIm9wZW5Nb2RhbCIsImFmdGVyT3Blbk1vZGFsIiwiY2xvc2VNb2RhbEJ1dHRvbiIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiekluZGV4Iiwid2lkdGgiLCJpbWdNb2RhbCIsImhlaWdodCIsIm9iamVjdEZpdCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlcldpZHRoIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW4iLCJib3JkZXJUb3AiLCJ0aGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUlBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFO0FBQ1BDLE9BQUcsRUFBRSxLQURFO0FBRVBDLFFBQUksRUFBRSxLQUZDO0FBR1BDLFNBQUssRUFBRSxNQUhBO0FBSVBDLFVBQU0sRUFBRSxNQUpEO0FBS1BDLGVBQVcsRUFBRSxNQUxO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QUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc29icmUtbm9zLjFiZTIxM2E3OGUwYmQ3Mzk2MmMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBTdGlja3lQcm92aWRlciB9IGZyb20gJ2NvbnRleHRzL2FwcC9hcHAucHJvdmlkZXInO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAndGhlbWUnO1xyXG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvc2VvJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBGbG9hdGluZyBmcm9tICdjb21wb25lbnRzL2Zsb2F0aW5nJztcclxuaW1wb3J0IEJhbm5lciBmcm9tICdzZWN0aW9ucy9iYW5uZXInO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICdzZWN0aW9ucy9mZWF0dXJlJztcclxuaW1wb3J0IFBhcnRuZXJTZWN0aW9uIGZyb20gJ3NlY3Rpb25zL3BhcnRuZXInO1xyXG5pbXBvcnQgV29ya0Zsb3cgZnJvbSAnc2VjdGlvbnMvd29ya2Zsb3cnO1xyXG5pbXBvcnQgVGVzdGltb25pYWxDYXJkIGZyb20gJ3NlY3Rpb25zL3Rlc3RpbW9uaWFsJztcclxuaW1wb3J0IFBhY2thZ2UgZnJvbSAnc2VjdGlvbnMvcGFja2FnZSc7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tICdzZWN0aW9ucy9jb250YWN0LWZvcm0nO1xyXG5cclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuXHJcbmltcG9ydCBpbWdNb2RhbCBmcm9tICcuLi9hc3NldHMvTWFya2V0aW5nLURpZ2l0YWwucG5nJ1xyXG5cclxuaW1wb3J0IHtcclxuICBGYVRpbWVzXHJcbn0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHRvcDogJzUwJScsXHJcbiAgICBsZWZ0OiAnNTAlJyxcclxuICAgIHJpZ2h0OiAnYXV0bycsXHJcbiAgICBib3R0b206ICdhdXRvJyxcclxuICAgIG1hcmdpblJpZ2h0OiAnLTUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGJvcmRlclJhZGl1czogJzAuOHJlbScsXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29icmVOb3NQYWdlKCkge1xyXG5cclxuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NlbHVsYXIsIHNldENlbHVsYXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU2F2ZU1vZGFsRm9ybSgpe1xyXG4gICAgaWYoKGNlbHVsYXIgPT09IFwiXCIpfHwoY2VsdWxhciA9PT0gXCJcIikpIHtcclxuICAgICAgcmV0dXJuIGNsb3NlTW9kYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuY29uZmlybShgVm9jw6ogZGlnaXRvdSAke2NlbHVsYXJ9IGUgJHtlbWFpbH1gKTtcclxuICAgIGNsb3NlTW9kYWwoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgIC8vIGNvbnN0IG1vZGFsID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbW9kYWwnKTtcclxuICAgIC8vIGlmKG1vZGFsID09PSBudWxsKXtcclxuICAgIC8vICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbW9kYWwnLCB0cnVlKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlmKG1vZGFsID09PSAnZmFsc2UnKXtcclxuICAgIC8vICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbW9kYWwnLCBmYWxzZSk7ICAgICAgXHJcbiAgICAvLyAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAvLyB9ZWxzZXtcclxuICAgIC8vICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgLy8gICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdtb2RhbCcsIHRydWUpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWZ0ZXJPcGVuTW9kYWwoKSB7XHJcbiAgICAvLyByZWZlcmVuY2VzIGFyZSBub3cgc3luYydkIGFuZCBjYW4gYmUgYWNjZXNzZWQuXHJcbiAgICAvL3N1YnRpdGxlLnN0eWxlLmNvbG9yID0gJyNmMDAnO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWxCdXR0b24oKSB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbW9kYWwnLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBvbk1vdXNlTGVhdmU9e29wZW5Nb2RhbH0+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XHJcbiAgICAgICAgb25BZnRlck9wZW49e2FmdGVyT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XHJcbiAgICAgICAgY29udGVudExhYmVsPVwiRXhhbXBsZSBNb2RhbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgIHpJbmRleDogJzEwMDAnLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICB3aWR0aDogJzI1cmVtJyxcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aW1nTW9kYWx9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICdpbmhlcml0JyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6ICcyNXJlbScsXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcwLjhyZW0gMS44cmVtJyxcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgPGgyPkZhw6dhIHNldSBwbGFubyBkZSB2b28gPHN0cm9uZz5HUkFUVUlUTyE8L3N0cm9uZz48L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0NDQycsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMi42cmVtJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzIuNnJlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgIH19IG9uQ2xpY2s9e2Nsb3NlTW9kYWxCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgPEZhVGltZXMgY29sb3I9XCIjMDAwXCIgc2l6ZT17MTZ9IC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzAuOHJlbSAxLjhyZW0nLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICA8cD5DYWRhc3RyYS1zZSBncmF0dWl0YW1lbnRlIHBhcmEgcmVjZWJlciB1bWEgQ09OU1VMVE9SSUEgZGEgc3VhIGVtcHJlc2EgZSBjb25kdXphIHNldSBuZWdvY2lvIHBhcmEgb3V0cmFzIFBMQU5FVEFTITwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZGVyJyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDAwJ1xyXG4gICAgICAgICAgICAgICAgfX0gaHRtbEZvcj1cInBob25lXCI+Q2VsdWxhcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwLjhyZW0nLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjhyZW0nLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgICB9fSBpZD1cInBob25lXCIgdmFsdWU9e2NlbHVsYXJ9IG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRDZWx1bGFyKGUudGFyZ2V0LnZhbHVlKSB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMC40cmVtIDAnLFxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnXHJcbiAgICAgICAgICAgICAgICB9fSBodG1sRm9yPVwiZW1haWxcIj5FLW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMC44cmVtJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC44cmVtJyxcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgICAgfX0gaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiB7IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKSB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMzMnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwLjhyZW0gMCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxLjhyZW0nLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEuNHJlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxLjhyZW0nLFxyXG4gICAgICAgICAgICAgIH19IG9uQ2xpY2s9e2hhbmRsZVNhdmVNb2RhbEZvcm19PkV1IHF1ZXJvIHJlY2ViZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGJvcmRlclRvcDogJzJweCBTb2xpZCAjQ0NDJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnMS40cmVtJyxcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgTsOjbyBlbnZpYW1vcyBzcGFuIVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxTdGlja3lQcm92aWRlcj5cclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxTRU8gdGl0bGU9XCJTb2JyZSBuw7NzIHwgQWfDqm5jaWEgUGVyZm9ybSB8IEltcHVsc2lvbmFuZG8gcmVzdWx0YWRvcyBkaWdpdGFpc1wiIC8+XHJcbiAgICAgICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICAgICAgPFBhcnRuZXJTZWN0aW9uIC8+XHJcbiAgICAgICAgICAgIDxXb3JrRmxvdyAvPlxyXG4gICAgICAgICAgICA8Q29udGFjdEZvcm0gbG9jYXRpb249XCJQw6FnaW5hIFNvYnJlIG7Ds3NcIiAvPlxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9TdGlja3lQcm92aWRlcj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8RmxvYXRpbmcgbG9jYXRpb249XCJQw6FnaW5hIFNvYnJlIG7Ds3NcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9