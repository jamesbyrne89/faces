webpackHotUpdate(5,{

/***/ 480:
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

var _Data = __webpack_require__(431);

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
            var _this2 = this;

            var email = this.emailInput.value;
            var password = this.passwordInput.value;
            e.preventDefault();

            _Data.app.auth().fetchProvidersForEmail(email).then(function (provider) {
                if (provider.length === 0) {
                    // Create user
                    return _Data.app.auth().createUserWithEmailAndPassword(email, password);
                } else {
                    // Sign user in
                }
            }).then(function (user) {
                console.log(user || 'user is undefined');
                if (user && user.email) {
                    email = '';
                    password = '';
                    _this2.setState({ redirect: true });
                    console.log('Successfully logged in');
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'faces | Dashboard'), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })), _react2.default.createElement('main', { className: 'wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('div', { className: 'login-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('h2', { className: 'login__title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Login'), _react2.default.createElement('button', { className: 'btn login-method fb-login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Login with Facebook'), _react2.default.createElement('button', { className: 'btn login-method tw-login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Login with Twitter'), _react2.default.createElement('button', { className: 'btn login-method gh-login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Login with Github'), _react2.default.createElement('form', { className: 'login__form', onSubmit: function onSubmit(e) {
                    _this3.authenticateWithEmail;
                }, ref: function ref(form) {
                    _this3.loginForm = form;
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Email'), _react2.default.createElement('input', { className: 'login__email', ref: function ref(input) {
                    _this3.emailInput = input;
                }, type: 'text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }), _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Password'), _react2.default.createElement('input', { className: 'login__password', ref: function ref(input) {
                    _this3.passwordInput = input;
                }, type: 'password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement('button', { className: 'btn btn-submit', ref: function ref(button) {
                    _this3.submitButton = button;
                }, onClick: function onClick(e) {
                    _this3.authenticateWithEmail(e);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Login')))));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxMb2dpbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiUmVkaXJlY3QiLCJIZWFkIiwiYXBwIiwiYmFzZSIsIkxvZ2luIiwicHJvcHMiLCJzdGF0ZSIsInJlZGlyZWN0IiwiYXV0aGVudGljYXRlV2l0aEVtYWlsIiwiYmluZCIsImUiLCJlbWFpbCIsImVtYWlsSW5wdXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwicGFzc3dvcmRJbnB1dCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImZldGNoUHJvdmlkZXJzRm9yRW1haWwiLCJ0aGVuIiwicHJvdmlkZXIiLCJsZW5ndGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInNldFN0YXRlIiwiY2F0Y2giLCJlcnJvciIsImVyciIsImZvcm0iLCJsb2dpbkZvcm0iLCJpbnB1dCIsImJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQUssQUFBWTs7Ozs7OztJLEFBRXBCO21DQUNGOzttQkFBQSxBQUFZLE9BQU87NENBQUE7O3dJQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO3NCQUFMLEFBQWEsQUFDQyxBQUVkO0FBSGEsQUFDVDtjQUVKLEFBQUssd0JBQXdCLE1BQUEsQUFBSyxzQkFBTCxBQUEyQixLQUx6QyxBQUtmO2VBQ0g7Ozs7OzhDLEFBRXFCLEdBQUc7eUJBQ3JCOztnQkFBSSxRQUFRLEtBQUEsQUFBSyxXQUFqQixBQUE0QixBQUM1QjtnQkFBSSxXQUFXLEtBQUEsQUFBSyxjQUFwQixBQUFrQyxBQUNsQztjQUFBLEFBQUUsQUFFRjs7c0JBQUEsQUFBSSxPQUFKLEFBQVcsdUJBQVgsQUFBa0MsT0FBbEMsQUFDSyxLQUFLLG9CQUFZLEFB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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45Y2FmZTNjNTUyZDYzNmJiZjcwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvTG9naW4uanM/N2Y0ODZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00sIHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBhcHAsIGJhc2UgfSBmcm9tICcuLi9tb2RlbHMvRGF0YSc7XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVXaXRoRW1haWwgPSB0aGlzLmF1dGhlbnRpY2F0ZVdpdGhFbWFpbC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dGhlbnRpY2F0ZVdpdGhFbWFpbChlKSB7XHJcbiAgICAgICAgbGV0IGVtYWlsID0gdGhpcy5lbWFpbElucHV0LnZhbHVlO1xyXG4gICAgICAgIGxldCBwYXNzd29yZCA9IHRoaXMucGFzc3dvcmRJbnB1dC52YWx1ZTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGFwcC5hdXRoKCkuZmV0Y2hQcm92aWRlcnNGb3JFbWFpbChlbWFpbClcclxuICAgICAgICAgICAgLnRoZW4ocHJvdmlkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFwcC5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpZ24gdXNlciBpblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyIHx8ICd1c2VyIGlzIHVuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWRpcmVjdDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+ZmFjZXMgfCBEYXNoYm9hcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwLDkwMFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvc3R5bGVzL3N0eWxlcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2dpbl9fdGl0bGVcIj5Mb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGxvZ2luLW1ldGhvZCBmYi1sb2dpblwiPkxvZ2luIHdpdGggRmFjZWJvb2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbG9naW4tbWV0aG9kIHR3LWxvZ2luXCI+TG9naW4gd2l0aCBUd2l0dGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGxvZ2luLW1ldGhvZCBnaC1sb2dpblwiPkxvZ2luIHdpdGggR2l0aHViPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImxvZ2luX19mb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiB7IHRoaXMuYXV0aGVudGljYXRlV2l0aEVtYWlsIH19IHJlZj17KGZvcm0pID0+IHsgdGhpcy5sb2dpbkZvcm0gPSBmb3JtIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImxvZ2luX19lbWFpbFwiIHJlZj17KGlucHV0KSA9PiB7IHRoaXMuZW1haWxJbnB1dCA9IGlucHV0IH19IHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1sYWJlbFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJsb2dpbl9fcGFzc3dvcmRcIiByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnBhc3N3b3JkSW5wdXQgPSBpbnB1dCB9fSB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Ym1pdFwiIHJlZj17KGJ1dHRvbikgPT4geyB0aGlzLnN1Ym1pdEJ1dHRvbiA9IGJ1dHRvbiB9fSBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLmF1dGhlbnRpY2F0ZVdpdGhFbWFpbChlKSB9fT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvTG9naW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUZBO0FBRUE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBVEE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQWxCQTtBQW9CQTtBQUlBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==