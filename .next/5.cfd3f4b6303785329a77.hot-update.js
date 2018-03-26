webpackHotUpdate(5,{

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(348);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\Login.js';


var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);

    function Login(props) {
        (0, _classCallCheck3.default)(this, Login);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

        _this.state = {
            redirect: false
        };
        _this.authenticateWithEmail = _this.authenticateWithEmail.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Login, [{
        key: 'authenticateWithEmail',
        value: function authenticateWithEmail(e) {
            var email = this.emailInput.value;
            var password = this.passwordInput.value;
            e.preventDefault();
            console.table([{
                email: this.emailInput.value,
                password: this.passwordInput.value
            }]);
            app.auth().fetchProvidersForEmail(email).then(function (provider) {
                if (providers.length === 0) {
                    // Create user

                } else {
                        // Sign user in
                    }
            }).catch(function (err) {
                console.error(err);
            });
            email = '';
            password = '';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'faces | Dashboard'), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            })), _react2.default.createElement('body', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('div', { className: 'login-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('h2', { className: 'login__title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Login here'), _react2.default.createElement('form', { onSubmit: function onSubmit(e) {
                    _this2.authenticateWithEmail;
                }, ref: function ref(form) {
                    _this2.loginForm = form;
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('input', { ref: function ref(input) {
                    _this2.emailInput = input;
                }, type: 'text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement('input', { ref: function ref(input) {
                    _this2.passwordInput = input;
                }, type: 'password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }), _react2.default.createElement('button', { ref: function ref(button) {
                    _this2.submitButton = button;
                }, onClick: function onClick(e) {
                    _this2.authenticateWithEmail(e);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Login')))));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxMb2dpbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiUmVkaXJlY3QiLCJIZWFkIiwiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwicmVkaXJlY3QiLCJhdXRoZW50aWNhdGVXaXRoRW1haWwiLCJiaW5kIiwiZSIsImVtYWlsIiwiZW1haWxJbnB1dCIsInZhbHVlIiwicGFzc3dvcmQiLCJwYXNzd29yZElucHV0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwidGFibGUiLCJhcHAiLCJhdXRoIiwiZmV0Y2hQcm92aWRlcnNGb3JFbWFpbCIsInRoZW4iLCJwcm92aWRlcnMiLCJsZW5ndGgiLCJjYXRjaCIsImVycm9yIiwiZXJyIiwiZm9ybSIsImxvZ2luRm9ybSIsImlucHV0IiwiYnV0dG9uIiwic3VibWl0QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7O0ksQUFFRDttQ0FDRjs7bUJBQUEsQUFBWSxPQUFPOzRDQUFBOzt3SUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSztzQkFBTCxBQUFhLEFBQ0MsQUFFZDtBQUhhLEFBQ1Q7Y0FFSixBQUFLLHdCQUF3QixNQUFBLEFBQUssc0JBQUwsQUFBMkIsS0FMekMsQUFLZjtlQUNIOzs7Ozs4QyxBQUVxQixHQUFHLEFBQ3JCO2dCQUFJLFFBQVEsS0FBQSxBQUFLLFdBQWpCLEFBQTRCLEFBQzVCO2dCQUFJLFdBQVcsS0FBQSxBQUFLLGNBQXBCLEFBQWtDLEFBQ2xDO2NBQUEsQUFBRSxBQUNGO29CQUFBLEFBQVE7dUJBQ0csS0FBQSxBQUFLLFdBREQsQUFDWSxBQUN2QjswQkFBVSxLQUFBLEFBQUssY0FGbkIsQUFBYyxBQUFDLEFBRWtCLEFBRWpDO0FBSmUsQUFDWCxhQURVO2dCQUlkLEFBQUksT0FBSixBQUFXLHVCQUFYLEFBQWtDLE9BQWxDLEFBQ0MsS0FBSyxvQkFBWSxBQUNkO29CQUFJLFVBQUEsQUFBVSxXQUFkLEFBQXlCLEdBQUcsQUFDeEI7QUFFSDs7QUFIRCx1QkFHTyxBQUNIO0FBQ0g7QUFFSjtBQVRELGVBQUEsQUFVQyxNQUFNLGVBQU8sQUFDVjt3QkFBQSxBQUFRLE1BQVIsQUFBYyxBQUNqQjtBQVpELEFBYUE7b0JBQUEsQUFBUSxBQUNSO3VCQUFBLEFBQVcsQUFDZDs7OztpQ0FFUTt5QkFDTDs7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOERBQU0sTUFBTixBQUFXLDREQUEyRCxLQUF0RSxBQUEwRTs4QkFBMUU7Z0NBRkosQUFFSSxBQUNBO0FBREE7d0RBQ00sTUFBTixBQUFXLDZCQUE0QixLQUF2QyxBQUEyQzs4QkFBM0M7Z0NBSlIsQUFDSSxBQUdJLEFBRUo7QUFGSTtpQ0FFSixjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsK0JBQUEsY0FBQSxVQUFNLFVBQVUsa0JBQUEsQUFBQyxHQUFNLEFBQUU7MkJBQUEsQUFBSyxBQUF1QjtBQUFyRCxtQkFBdUQsS0FBSyxhQUFBLEFBQUMsTUFBUyxBQUFFOzJCQUFBLEFBQUssWUFBTCxBQUFpQixBQUFNO0FBQS9GOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjt3REFDVyxLQUFLLGFBQUEsQUFBQyxPQUFVLEFBQUU7MkJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQU87QUFBbEQsbUJBQW9ELE1BQXBELEFBQXlEOzhCQUF6RDtnQ0FESixBQUNJLEFBQ0E7QUFEQTt5REFDTyxLQUFLLGFBQUEsQUFBQyxPQUFVLEFBQUU7MkJBQUEsQUFBSyxnQkFBTCxBQUFxQixBQUFPO0FBQXJELG1CQUF1RCxNQUF2RCxBQUE0RDs4QkFBNUQ7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQSxZQUFRLEtBQUssYUFBQSxBQUFDLFFBQVcsQUFBRTsyQkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFBUTtBQUF2RCxtQkFBeUQsU0FBUyxpQkFBQSxBQUFDLEdBQU0sQUFBRTsyQkFBQSxBQUFLLHNCQUFMLEFBQTJCLEFBQUk7QUFBMUc7OEJBQUE7Z0NBQUE7QUFBQTtlQWJwQixBQUNJLEFBTUksQUFDSSxBQUVJLEFBR0ksQUFNdkI7Ozs7O0FBdERlLEEsQUF5RHBCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkxvZ2luLmpzIiwic291cmNlUm9vdCI6IkU6L1VzZXJzL0phbWVzL1dlYiBEZXYvUHJvamVjdHMvRmFjZXMifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\Login.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\Login.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Login")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jZmQzZjRiNjMwMzc4NTMyOWE3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvTG9naW4uanM/OThkOWM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00sIHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlV2l0aEVtYWlsID0gdGhpcy5hdXRoZW50aWNhdGVXaXRoRW1haWwuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoZW50aWNhdGVXaXRoRW1haWwoZSkge1xyXG4gICAgICAgIGxldCBlbWFpbCA9IHRoaXMuZW1haWxJbnB1dC52YWx1ZTtcclxuICAgICAgICBsZXQgcGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkSW5wdXQudmFsdWU7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUudGFibGUoW3tcclxuICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWxJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRJbnB1dC52YWx1ZVxyXG4gICAgICAgIH1dKVxyXG4gICAgICAgIGFwcC5hdXRoKCkuZmV0Y2hQcm92aWRlcnNGb3JFbWFpbChlbWFpbClcclxuICAgICAgICAudGhlbihwcm92aWRlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm92aWRlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdXNlclxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFNpZ24gdXNlciBpblxyXG4gICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBlbWFpbCA9ICcnO1xyXG4gICAgICAgIHBhc3N3b3JkID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+ZmFjZXMgfCBEYXNoYm9hcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwLDkwMFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvc3R5bGVzL3N0eWxlcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ2luX190aXRsZVwiPkxvZ2luIGhlcmU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHsgdGhpcy5hdXRoZW50aWNhdGVXaXRoRW1haWwgfX0gcmVmPXsoZm9ybSkgPT4geyB0aGlzLmxvZ2luRm9ybSA9IGZvcm0gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5lbWFpbElucHV0ID0gaW5wdXQgfX0gdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17KGlucHV0KSA9PiB7IHRoaXMucGFzc3dvcmRJbnB1dCA9IGlucHV0IH19IHR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHJlZj17KGJ1dHRvbikgPT4geyB0aGlzLnN1Ym1pdEJ1dHRvbiA9IGJ1dHRvbiB9fSBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLmF1dGhlbnRpY2F0ZVdpdGhFbWFpbChlKSB9fT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2JvZHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvTG9naW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFFQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBR0E7QUFDQTtBQUpBO0FBS0E7QUFFQTtBQVRBO0FBV0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9