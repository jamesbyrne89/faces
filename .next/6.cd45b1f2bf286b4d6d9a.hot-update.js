webpackHotUpdate(6,{

/***/ 497:
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

var _Teams = __webpack_require__(498);

var _Teams2 = _interopRequireDefault(_Teams);

var _index = __webpack_require__(101);

var _index2 = _interopRequireDefault(_index);

var _Data = __webpack_require__(454);

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
        _this.authenticateWithFacebook = _this.authenticateWithFacebook.bind(_this);
        _this.authenticateWithGithub = _this.authenticateWithGithub.bind(_this);
        _this.authenticateWithEmail = _this.authenticateWithEmail.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Login, [{
        key: 'authenticateWithFacebook',
        value: function authenticateWithFacebook() {
            var _this2 = this;

            _Data.app.auth().signInWithPopup(_Data.facebookProvider).then(function (result, err) {
                if (err) {
                    // Show error
                    alert('Unable to sign in with Facebook');
                } else {
                    _this2.setState({ redirect: true });
                }
            });
        }
    }, {
        key: 'authenticateWithGithub',
        value: function authenticateWithGithub() {
            var _this3 = this;

            _Data.app.auth().signInWithPopup(_Data.githubProvider).then(function (result, err) {
                if (err) {
                    // Show error
                    alert('Unable to sign in with Github');
                } else {
                    _this3.setState({ redirect: true });
                }
            });
        }
    }, {
        key: 'authenticateWithEmail',
        value: function authenticateWithEmail(e) {
            var _this4 = this;

            var email = this.emailInput.value;
            var password = this.passwordInput.value;
            e.preventDefault();

            _Data.app.auth().fetchProvidersForEmail(email).then(function (providers) {
                if (providers.length === 0) {
                    // Create user
                    return _Data.app.auth().createUserWithEmailAndPassword(email, password);
                } else if (providers.indexOf("password") === -1) {
                    // They used Facebook
                    email = '';
                    password = '';
                    alert('Please try an alternative login');
                } else {
                    // Sign user in
                    return _Data.app.auth().signInWithEmailAndPassword(email, password);
                }
            }).then(function (user) {
                console.log(user || 'user is undefined');
                if (user && user.email) {
                    email = '';
                    password = '';
                    _this4.setState({ redirect: true });
                    console.log('Successfully logged in');
                }
            }).catch(function (err) {
                console.error(err.message);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            if (this.state.redirect) {
                {
                    _index2.default.push('/Teams');
                }
            }

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, 'faces | Login'), _react2.default.createElement('link', { href: '/static/images/favicon-64x64.png?v=2', rel: 'icon', sizes: '64x64', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }), _react2.default.createElement('link', { href: '/static/images/favicon-32x32.png?v=2', rel: 'icon', sizes: '32x32', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            })), _react2.default.createElement('main', { className: 'wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('div', { className: 'login-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement('h2', { className: 'login__title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, 'Login'), _react2.default.createElement('div', { className: 'login__methods', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, _react2.default.createElement('button', { className: 'btn login-method fb-login', onClick: this.authenticateWithFacebook, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement('path', { d: 'M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, 'Login with Facebook')), _react2.default.createElement('button', { className: 'btn login-method tw-login', disabled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement('path', { d: 'M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, 'Login with Twitter')), _react2.default.createElement('button', { className: 'btn login-method gh-login', onClick: this.authenticateWithGithub, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement('path', { d: 'M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, 'Login with Github'))), _react2.default.createElement('form', { className: 'login__form', onSubmit: function onSubmit(e) {
                    _this5.authenticateWithEmail;
                }, ref: function ref(form) {
                    _this5.loginForm = form;
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, 'Email'), _react2.default.createElement('input', { className: 'login__email', ref: function ref(input) {
                    _this5.emailInput = input;
                }, type: 'email', placeholder: 'Email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }), _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, 'Password'), _react2.default.createElement('input', { className: 'login__password', ref: function ref(input) {
                    _this5.passwordInput = input;
                }, type: 'password', placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }), _react2.default.createElement('button', { className: 'btn btn-submit', ref: function ref(button) {
                    _this5.submitButton = button;
                }, onClick: function onClick(e) {
                    _this5.authenticateWithEmail(e);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, 'Login')))));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxMb2dpbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiUmVkaXJlY3QiLCJIZWFkIiwiVGVhbXMiLCJSb3V0ZXIiLCJhcHAiLCJiYXNlIiwiZmFjZWJvb2tQcm92aWRlciIsImdpdGh1YlByb3ZpZGVyIiwiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwicmVkaXJlY3QiLCJhdXRoZW50aWNhdGVXaXRoRmFjZWJvb2siLCJiaW5kIiwiYXV0aGVudGljYXRlV2l0aEdpdGh1YiIsImF1dGhlbnRpY2F0ZVdpdGhFbWFpbCIsImF1dGgiLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzdWx0IiwiZXJyIiwiYWxlcnQiLCJzZXRTdGF0ZSIsImUiLCJlbWFpbCIsImVtYWlsSW5wdXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwicGFzc3dvcmRJbnB1dCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2hQcm92aWRlcnNGb3JFbWFpbCIsInByb3ZpZGVycyIsImxlbmd0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImluZGV4T2YiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiY2F0Y2giLCJlcnJvciIsIm1lc3NhZ2UiLCJwdXNoIiwiZm9ybSIsImxvZ2luRm9ybSIsImlucHV0IiwiYnV0dG9uIiwic3VibWl0QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFLLEFBQU0sQUFBa0IsQUFBc0I7Ozs7Ozs7SSxBQUV0RDttQ0FDRjs7bUJBQUEsQUFBWSxPQUFPOzRDQUFBOzt3SUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSztzQkFBTCxBQUFhLEFBQ0MsQUFFZDtB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WUFBUSxXQUFSLEFBQWtCLDZCQUE0QixTQUFTLEtBQXZELEFBQTREOzhCQUE1RDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFNBQUwsQUFBYSxPQUFNLE9BQW5CLEFBQXlCLDhCQUE2QixPQUF0RCxBQUE0RCxNQUFLLFFBQWpFLEFBQXdFLE1BQUssU0FBN0UsQUFBcUY7OEJBQXJGO2dDQUFBLEFBQ0k7QUFESjt1REFDVSxHQUFOLEFBQVE7OEJBQVI7Z0NBRlIsQUFDSSxBQUNJLEFBRUo7QUFGSTtpQ0FFSixjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFqQlosQUFFSSxBQVdJLEFBSUksQUFHUix3Q0FBQSxjQUFBLFVBQU0sV0FBTixBQUFnQixlQUFjLFVBQVUsa0JBQUEsQUFBQyxHQUFNLEFBQUU7MkJBQUEsQUFBSyxBQUF1QjtBQUE3RSxtQkFBK0UsS0FBSyxhQUFBLEFBQUMsTUFBUyxBQUFFOzJCQUFBLEFBQUssWUFBTCxBQUFpQixBQUFNO0FBQXZIOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFdBQU8sV0FBUCxBQUFpQjs4QkFBakI7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSxtREFBTyxXQUFQLEFBQWlCLGdCQUFlLEtBQUssYUFBQSxBQUFDLE9BQVUsQUFBRTsyQkFBQSxBQUFLLGFBQUwsQUFBa0IsQUFBTztBQUEzRSxtQkFBNkUsTUFBN0UsQUFBa0YsU0FBUSxhQUExRixBQUFzRzs4QkFBdEc7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQSxXQUFPLFdBQVAsQUFBaUI7OEJBQWpCO2dDQUFBO0FBQUE7ZUFISixBQUdJLEFBQ0Esc0RBQU8sV0FBUCxBQUFpQixtQkFBa0IsS0FBSyxhQUFBLEFBQUMsT0FBVSxBQUFFOzJCQUFBLEFBQUssZ0JBQUwsQUFBcUIsQUFBTztBQUFqRixtQkFBbUYsTUFBbkYsQUFBd0YsWUFBVyxhQUFuRyxBQUErRzs4QkFBL0c7Z0NBSkosQUFJSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQSxZQUFRLFdBQVIsQUFBa0Isa0JBQWlCLEtBQUssYUFBQSxBQUFDLFFBQVcsQUFBRTsyQkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFBUTtBQUFsRixtQkFBb0YsU0FBUyxpQkFBQSxBQUFDLEdBQU0sQUFBRTsyQkFBQSxBQUFLLHNCQUFMLEFBQTJCLEFBQUk7QUFBckk7OEJBQUE7Z0NBQUE7QUFBQTtlQW5DcEIsQUFDSSxBQVFJLEFBQ0ksQUFvQkksQUFLSSxBQU12Qjs7Ozs7QUF4SGUsQSxBQTJIcEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9GYWNlcyJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5jZDQ1YjFmMmJmMjg2YjRkNmQ5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvTG9naW4uanM/N2Q3NGI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00sIHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgVGVhbXMgZnJvbSAnLi4vcGFnZXMvVGVhbXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXBwLCBiYXNlLCBmYWNlYm9va1Byb3ZpZGVyLCBnaXRodWJQcm92aWRlciB9IGZyb20gJy4uL21vZGVscy9EYXRhJztcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZVdpdGhGYWNlYm9vayA9IHRoaXMuYXV0aGVudGljYXRlV2l0aEZhY2Vib29rLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVXaXRoR2l0aHViID0gdGhpcy5hdXRoZW50aWNhdGVXaXRoR2l0aHViLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVXaXRoRW1haWwgPSB0aGlzLmF1dGhlbnRpY2F0ZVdpdGhFbWFpbC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dGhlbnRpY2F0ZVdpdGhGYWNlYm9vaygpIHtcclxuICAgICAgICBhcHAuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChmYWNlYm9va1Byb3ZpZGVyKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0LCBlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1VuYWJsZSB0byBzaWduIGluIHdpdGggRmFjZWJvb2snKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWRpcmVjdDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhdXRoZW50aWNhdGVXaXRoR2l0aHViKCkge1xyXG4gICAgICAgIGFwcC5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKGdpdGh1YlByb3ZpZGVyKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0LCBlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1VuYWJsZSB0byBzaWduIGluIHdpdGggR2l0aHViJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVkaXJlY3Q6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXV0aGVudGljYXRlV2l0aEVtYWlsKGUpIHtcclxuICAgICAgICBsZXQgZW1haWwgPSB0aGlzLmVtYWlsSW5wdXQudmFsdWU7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gdGhpcy5wYXNzd29yZElucHV0LnZhbHVlO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgYXBwLmF1dGgoKS5mZXRjaFByb3ZpZGVyc0ZvckVtYWlsKGVtYWlsKVxyXG4gICAgICAgICAgICAudGhlbihwcm92aWRlcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdXNlclxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcHAuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm92aWRlcnMuaW5kZXhPZihcInBhc3N3b3JkXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXkgdXNlZCBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIHRyeSBhbiBhbHRlcm5hdGl2ZSBsb2dpbicpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpZ24gdXNlciBpblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcHAuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIgfHwgJ3VzZXIgaXMgdW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyICYmIHVzZXIuZW1haWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZGlyZWN0OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgbG9nZ2VkIGluJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWRpcmVjdCkge1xyXG4gICAgICAgICAgICB7Um91dGVyLnB1c2goJy9UZWFtcycpfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5mYWNlcyB8IExvZ2luPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9pbWFnZXMvZmF2aWNvbi02NHg2NC5wbmc/dj0yXCIgcmVsPVwiaWNvblwiIHNpemVzPVwiNjR4NjRcIiB0eXBlPVwiaW1hZ2UvcG5nXCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ltYWdlcy9mYXZpY29uLTMyeDMyLnBuZz92PTJcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCIzMngzMlwiIHR5cGU9XCJpbWFnZS9wbmdcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDAsOTAwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9zdHlsZXMvc3R5bGVzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ2luX190aXRsZVwiPkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbl9fbWV0aG9kc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbG9naW4tbWV0aG9kIGZiLWxvZ2luXCIgb25DbGljaz17dGhpcy5hdXRoZW50aWNhdGVXaXRoRmFjZWJvb2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQuNSAwaC0xM2MtMC44MjUgMC0xLjUgMC42NzUtMS41IDEuNXYxM2MwIDAuODI1IDAuNjc1IDEuNSAxLjUgMS41aDYuNXYtN2gtMnYtMmgydi0xYzAtMS42NTMgMS4zNDctMyAzLTNoMnYyaC0yYy0wLjU1IDAtMSAwLjQ1LTEgMXYxaDNsLTAuNSAyaC0yLjV2N2g0LjVjMC44MjUgMCAxLjUtMC42NzUgMS41LTEuNXYtMTNjMC0wLjgyNS0wLjY3NS0xLjUtMS41LTEuNXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG9naW4gd2l0aCBGYWNlYm9vazwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGxvZ2luLW1ldGhvZCB0dy1sb2dpblwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYgMy41MzhjLTAuNTg4IDAuMjYzLTEuMjIyIDAuNDM4LTEuODg0IDAuNTE2IDAuNjc4LTAuNDA2IDEuMTk3LTEuMDUwIDEuNDQ0LTEuODE2LTAuNjM0IDAuMzc1LTEuMzM4IDAuNjUtMi4wODQgMC43OTctMC42LTAuNjM4LTEuNDUzLTEuMDM0LTIuMzk3LTEuMDM0LTEuODEzIDAtMy4yODEgMS40NjktMy4yODEgMy4yODEgMCAwLjI1NiAwLjAyOCAwLjUwNiAwLjA4NCAwLjc0Ny0yLjcyOC0wLjEzOC01LjE0Ny0xLjQ0NC02Ljc2Ni0zLjQzMS0wLjI4MSAwLjQ4NC0wLjQ0NCAxLjA1MC0wLjQ0NCAxLjY1IDAgMS4xMzggMC41NzggMi4xNDQgMS40NTkgMi43MzEtMC41MzgtMC4wMTYtMS4wNDQtMC4xNjYtMS40ODgtMC40MDkgMCAwLjAxMyAwIDAuMDI4IDAgMC4wNDEgMCAxLjU5MSAxLjEzMSAyLjkxOSAyLjYzNCAzLjIxOS0wLjI3NSAwLjA3NS0wLjU2NiAwLjExNi0wLjg2NiAwLjExNi0wLjIxMiAwLTAuNDE2LTAuMDIyLTAuNjE5LTAuMDU5IDAuNDE5IDEuMzAzIDEuNjMxIDIuMjUzIDMuMDY2IDIuMjgxLTEuMTI1IDAuODgxLTIuNTM4IDEuNDA2LTQuMDc4IDEuNDA2LTAuMjY2IDAtMC41MjUtMC4wMTYtMC43ODQtMC4wNDcgMS40NTYgMC45MzQgMy4xODEgMS40NzUgNS4wMzQgMS40NzUgNi4wMzcgMCA5LjM0MS01LjAwMyA5LjM0MS05LjM0MSAwLTAuMTQ0LTAuMDAzLTAuMjg0LTAuMDA5LTAuNDI1IDAuNjQxLTAuNDU5IDEuMTk3LTEuMDM4IDEuNjM3LTEuNjk3elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb2dpbiB3aXRoIFR3aXR0ZXI8L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBsb2dpbi1tZXRob2QgZ2gtbG9naW5cIiBvbkNsaWNrPXt0aGlzLmF1dGhlbnRpY2F0ZVdpdGhHaXRodWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCAwLjE5OGMtNC40MTggMC04IDMuNTgyLTggOCAwIDMuNTM1IDIuMjkyIDYuNTMzIDUuNDcxIDcuNTkxIDAuNCAwLjA3NCAwLjU0Ny0wLjE3NCAwLjU0Ny0wLjM4NSAwLTAuMTkxLTAuMDA4LTAuODIxLTAuMDExLTEuNDg5LTIuMjI2IDAuNDg0LTIuNjk1LTAuOTQ0LTIuNjk1LTAuOTQ0LTAuMzY0LTAuOTI1LTAuODg4LTEuMTcxLTAuODg4LTEuMTcxLTAuNzI2LTAuNDk3IDAuMDU1LTAuNDg2IDAuMDU1LTAuNDg2IDAuODAzIDAuMDU2IDEuMjI2IDAuODI0IDEuMjI2IDAuODI0IDAuNzE0IDEuMjIzIDEuODcyIDAuODY5IDIuMzI4IDAuNjY1IDAuMDcyLTAuNTE3IDAuMjc5LTAuODcgMC41MDgtMS4wNzAtMS43NzctMC4yMDItMy42NDUtMC44ODgtMy42NDUtMy45NTQgMC0wLjg3MyAwLjMxMy0xLjU4NyAwLjgyNC0yLjE0Ny0wLjA4My0wLjIwMi0wLjM1Ny0xLjAxNSAwLjA3Ny0yLjExNyAwIDAgMC42NzItMC4yMTUgMi4yMDEgMC44MiAwLjYzOC0wLjE3NyAxLjMyMi0wLjI2NiAyLjAwMi0wLjI2OSAwLjY4IDAuMDAzIDEuMzY1IDAuMDkyIDIuMDA0IDAuMjY5IDEuNTI3LTEuMDM1IDIuMTk4LTAuODIgMi4xOTgtMC44MiAwLjQzNSAxLjEwMiAwLjE2MiAxLjkxNiAwLjA3OSAyLjExNyAwLjUxMyAwLjU2IDAuODIzIDEuMjc0IDAuODIzIDIuMTQ3IDAgMy4wNzMtMS44NzIgMy43NDktMy42NTMgMy45NDcgMC4yODcgMC4yNDggMC41NDMgMC43MzUgMC41NDMgMS40ODEgMCAxLjA3MC0wLjAwOSAxLjkzMi0wLjAwOSAyLjE5NSAwIDAuMjEzIDAuMTQ0IDAuNDYyIDAuNTUgMC4zODQgMy4xNzctMS4wNTkgNS40NjYtNC4wNTcgNS40NjYtNy41OSAwLTQuNDE4LTMuNTgyLTgtOC04elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb2dpbiB3aXRoIEdpdGh1Yjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibG9naW5fX2Zvcm1cIiBvblN1Ym1pdD17KGUpID0+IHsgdGhpcy5hdXRoZW50aWNhdGVXaXRoRW1haWwgfX0gcmVmPXsoZm9ybSkgPT4geyB0aGlzLmxvZ2luRm9ybSA9IGZvcm0gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibG9naW5fX2VtYWlsXCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5lbWFpbElucHV0ID0gaW5wdXQgfX0gdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWxcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibG9naW5fX3Bhc3N3b3JkXCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wYXNzd29yZElucHV0ID0gaW5wdXQgfX0gdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VibWl0XCIgcmVmPXsoYnV0dG9uKSA9PiB7IHRoaXMuc3VibWl0QnV0dG9uID0gYnV0dG9uIH19IG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMuYXV0aGVudGljYXRlV2l0aEVtYWlsKGUpIH19PkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9Mb2dpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBR0E7QUFmQTtBQWlCQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQXhCQTtBQTBCQTtBQUlBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==