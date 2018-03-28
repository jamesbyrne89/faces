webpackHotUpdate(5,{

/***/ 481:
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

var _Teams = __webpack_require__(482);

var _Teams2 = _interopRequireDefault(_Teams);

var _index = __webpack_require__(101);

var _index2 = _interopRequireDefault(_index);

var _Data = __webpack_require__(438);

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
        _this.handleErrors = _this.handleErrors.bind(_this);
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
                _this4.handleErrors(err);
                console.error(err.code);
                console.error(err.message);
            });
        }
    }, {
        key: 'handleErrors',
        value: function handleErrors(err) {
            console.log(err.code === 'auth/invalid-email');
            if (err.code === 'auth/invalid-email') {
                this.emailInput.classList.add('invalid');
            } else if (err.code !== 'auth/invalid-email') {
                this.emailInput.classList.remove('invalid');
            }
            if (err.code === 'auth/wrong-password') {
                this.passwordInput.classList.add('invalid');
            } else if (err.code !== 'auth/wrong-password') {
                this.passwordInput.classList.add('invalid');
            }
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
                    lineNumber: 105
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, 'faces | Login'), _react2.default.createElement('link', { href: '/static/images/favicon-64x64.png?v=2', rel: 'icon', sizes: '64x64', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }), _react2.default.createElement('link', { href: '/static/images/favicon-32x32.png?v=2', rel: 'icon', sizes: '32x32', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            })), _react2.default.createElement('main', { className: 'wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement('div', { className: 'login-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement('h2', { className: 'login__title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, 'Login'), _react2.default.createElement('div', { className: 'login__methods', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement('button', { className: 'btn login-method fb-login', onClick: this.authenticateWithFacebook, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement('path', { d: 'M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, 'Login with Facebook')), _react2.default.createElement('button', { className: 'btn login-method tw-login', disabled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, _react2.default.createElement('path', { d: 'M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, 'Login with Twitter')), _react2.default.createElement('button', { className: 'btn login-method gh-login', onClick: this.authenticateWithGithub, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement('path', { d: 'M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, 'Login with Github'))), _react2.default.createElement('form', { className: 'login__form', onSubmit: function onSubmit(e) {
                    _this5.authenticateWithEmail;
                }, ref: function ref(form) {
                    _this5.loginForm = form;
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, 'Email'), _react2.default.createElement('input', { className: 'login__email', ref: function ref(input) {
                    _this5.emailInput = input;
                }, type: 'email', placeholder: 'Email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }), _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                }
            }, 'Password'), _react2.default.createElement('input', { className: 'login__password', ref: function ref(input) {
                    _this5.passwordInput = input;
                }, type: 'password', placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }), _react2.default.createElement('button', { className: 'btn btn-submit', ref: function ref(button) {
                    _this5.submitButton = button;
                }, onClick: function onClick(e) {
                    _this5.authenticateWithEmail(e);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, 'Login')))));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxMb2dpbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiUmVkaXJlY3QiLCJIZWFkIiwiVGVhbXMiLCJSb3V0ZXIiLCJhcHAiLCJiYXNlIiwiZmFjZWJvb2tQcm92aWRlciIsImdpdGh1YlByb3ZpZGVyIiwiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwicmVkaXJlY3QiLCJhdXRoZW50aWNhdGVXaXRoRmFjZWJvb2siLCJiaW5kIiwiYXV0aGVudGljYXRlV2l0aEdpdGh1YiIsImF1dGhlbnRpY2F0ZVdpdGhFbWFpbCIsImhhbmRsZUVycm9ycyIsImF1dGgiLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzdWx0IiwiZXJyIiwiYWxlcnQiLCJzZXRTdGF0ZSIsImUiLCJlbWFpbCIsImVtYWlsSW5wdXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwicGFzc3dvcmRJbnB1dCIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2hQcm92aWRlcnNGb3JFbWFpbCIsInByb3ZpZGVycyIsImxlbmd0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImluZGV4T2YiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiY2F0Y2giLCJlcnJvciIsImNvZGUiLCJtZXNzYWdlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicHVzaCIsImZvcm0iLCJsb2dpbkZvcm0iLCJpbnB1dCIsImJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7OztBQUNQLEFBQVMsQUFBSyxBQUFNLEFBQWtCLEFBQXNCOzs7Ozs7O0lBRXRELEE7bUNBQ0Y7O21CQUFBLEFBQVksT0FBTzs0Q0FBQTs7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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jMTg1OTVjYTRjM2JkYjRmZGM5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvTG9naW4uanM/MDkxNjRkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00sIHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgVGVhbXMgZnJvbSAnLi4vcGFnZXMvVGVhbXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXBwLCBiYXNlLCBmYWNlYm9va1Byb3ZpZGVyLCBnaXRodWJQcm92aWRlciB9IGZyb20gJy4uL21vZGVscy9EYXRhJztcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZVdpdGhGYWNlYm9vayA9IHRoaXMuYXV0aGVudGljYXRlV2l0aEZhY2Vib29rLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVXaXRoR2l0aHViID0gdGhpcy5hdXRoZW50aWNhdGVXaXRoR2l0aHViLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVXaXRoRW1haWwgPSB0aGlzLmF1dGhlbnRpY2F0ZVdpdGhFbWFpbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzID0gdGhpcy5oYW5kbGVFcnJvcnMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoZW50aWNhdGVXaXRoRmFjZWJvb2soKSB7XHJcbiAgICAgICAgYXBwLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAoZmFjZWJvb2tQcm92aWRlcilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCwgZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdVbmFibGUgdG8gc2lnbiBpbiB3aXRoIEZhY2Vib29rJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVkaXJlY3Q6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXV0aGVudGljYXRlV2l0aEdpdGh1YigpIHtcclxuICAgICAgICBhcHAuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChnaXRodWJQcm92aWRlcilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCwgZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdVbmFibGUgdG8gc2lnbiBpbiB3aXRoIEdpdGh1YicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZGlyZWN0OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGF1dGhlbnRpY2F0ZVdpdGhFbWFpbChlKSB7XHJcbiAgICAgICAgbGV0IGVtYWlsID0gdGhpcy5lbWFpbElucHV0LnZhbHVlO1xyXG4gICAgICAgIGxldCBwYXNzd29yZCA9IHRoaXMucGFzc3dvcmRJbnB1dC52YWx1ZTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGFwcC5hdXRoKCkuZmV0Y2hQcm92aWRlcnNGb3JFbWFpbChlbWFpbClcclxuICAgICAgICAgICAgLnRoZW4ocHJvdmlkZXJzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm92aWRlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXBwLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvdmlkZXJzLmluZGV4T2YoXCJwYXNzd29yZFwiKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGV5IHVzZWQgRmFjZWJvb2tcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSB0cnkgYW4gYWx0ZXJuYXRpdmUgbG9naW4nKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaWduIHVzZXIgaW5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXBwLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyIHx8ICd1c2VyIGlzIHVuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWRpcmVjdDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoZXJyKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5jb2RlID09PSAnYXV0aC9pbnZhbGlkLWVtYWlsJylcclxuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdhdXRoL2ludmFsaWQtZW1haWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGVyci5jb2RlICE9PSAnYXV0aC9pbnZhbGlkLWVtYWlsJykge1xyXG4gICAgICAgICAgICB0aGlzLmVtYWlsSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdhdXRoL3dyb25nLXBhc3N3b3JkJykge1xyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlcnIuY29kZSAhPT0gJ2F1dGgvd3JvbmctcGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWRpcmVjdCkge1xyXG4gICAgICAgICAgICB7Um91dGVyLnB1c2goJy9UZWFtcycpfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5mYWNlcyB8IExvZ2luPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9pbWFnZXMvZmF2aWNvbi02NHg2NC5wbmc/dj0yXCIgcmVsPVwiaWNvblwiIHNpemVzPVwiNjR4NjRcIiB0eXBlPVwiaW1hZ2UvcG5nXCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ltYWdlcy9mYXZpY29uLTMyeDMyLnBuZz92PTJcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCIzMngzMlwiIHR5cGU9XCJpbWFnZS9wbmdcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDAsOTAwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9zdHlsZXMvc3R5bGVzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ2luX190aXRsZVwiPkxvZ2luPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbl9fbWV0aG9kc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbG9naW4tbWV0aG9kIGZiLWxvZ2luXCIgb25DbGljaz17dGhpcy5hdXRoZW50aWNhdGVXaXRoRmFjZWJvb2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQuNSAwaC0xM2MtMC44MjUgMC0xLjUgMC42NzUtMS41IDEuNXYxM2MwIDAuODI1IDAuNjc1IDEuNSAxLjUgMS41aDYuNXYtN2gtMnYtMmgydi0xYzAtMS42NTMgMS4zNDctMyAzLTNoMnYyaC0yYy0wLjU1IDAtMSAwLjQ1LTEgMXYxaDNsLTAuNSAyaC0yLjV2N2g0LjVjMC44MjUgMCAxLjUtMC42NzUgMS41LTEuNXYtMTNjMC0wLjgyNS0wLjY3NS0xLjUtMS41LTEuNXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG9naW4gd2l0aCBGYWNlYm9vazwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGxvZ2luLW1ldGhvZCB0dy1sb2dpblwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYgMy41MzhjLTAuNTg4IDAuMjYzLTEuMjIyIDAuNDM4LTEuODg0IDAuNTE2IDAuNjc4LTAuNDA2IDEuMTk3LTEuMDUwIDEuNDQ0LTEuODE2LTAuNjM0IDAuMzc1LTEuMzM4IDAuNjUtMi4wODQgMC43OTctMC42LTAuNjM4LTEuNDUzLTEuMDM0LTIuMzk3LTEuMDM0LTEuODEzIDAtMy4yODEgMS40NjktMy4yODEgMy4yODEgMCAwLjI1NiAwLjAyOCAwLjUwNiAwLjA4NCAwLjc0Ny0yLjcyOC0wLjEzOC01LjE0Ny0xLjQ0NC02Ljc2Ni0zLjQzMS0wLjI4MSAwLjQ4NC0wLjQ0NCAxLjA1MC0wLjQ0NCAxLjY1IDAgMS4xMzggMC41NzggMi4xNDQgMS40NTkgMi43MzEtMC41MzgtMC4wMTYtMS4wNDQtMC4xNjYtMS40ODgtMC40MDkgMCAwLjAxMyAwIDAuMDI4IDAgMC4wNDEgMCAxLjU5MSAxLjEzMSAyLjkxOSAyLjYzNCAzLjIxOS0wLjI3NSAwLjA3NS0wLjU2NiAwLjExNi0wLjg2NiAwLjExNi0wLjIxMiAwLTAuNDE2LTAuMDIyLTAuNjE5LTAuMDU5IDAuNDE5IDEuMzAzIDEuNjMxIDIuMjUzIDMuMDY2IDIuMjgxLTEuMTI1IDAuODgxLTIuNTM4IDEuNDA2LTQuMDc4IDEuNDA2LTAuMjY2IDAtMC41MjUtMC4wMTYtMC43ODQtMC4wNDcgMS40NTYgMC45MzQgMy4xODEgMS40NzUgNS4wMzQgMS40NzUgNi4wMzcgMCA5LjM0MS01LjAwMyA5LjM0MS05LjM0MSAwLTAuMTQ0LTAuMDAzLTAuMjg0LTAuMDA5LTAuNDI1IDAuNjQxLTAuNDU5IDEuMTk3LTEuMDM4IDEuNjM3LTEuNjk3elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb2dpbiB3aXRoIFR3aXR0ZXI8L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBsb2dpbi1tZXRob2QgZ2gtbG9naW5cIiBvbkNsaWNrPXt0aGlzLmF1dGhlbnRpY2F0ZVdpdGhHaXRodWJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCAwLjE5OGMtNC40MTggMC04IDMuNTgyLTggOCAwIDMuNTM1IDIuMjkyIDYuNTMzIDUuNDcxIDcuNTkxIDAuNCAwLjA3NCAwLjU0Ny0wLjE3NCAwLjU0Ny0wLjM4NSAwLTAuMTkxLTAuMDA4LTAuODIxLTAuMDExLTEuNDg5LTIuMjI2IDAuNDg0LTIuNjk1LTAuOTQ0LTIuNjk1LTAuOTQ0LTAuMzY0LTAuOTI1LTAuODg4LTEuMTcxLTAuODg4LTEuMTcxLTAuNzI2LTAuNDk3IDAuMDU1LTAuNDg2IDAuMDU1LTAuNDg2IDAuODAzIDAuMDU2IDEuMjI2IDAuODI0IDEuMjI2IDAuODI0IDAuNzE0IDEuMjIzIDEuODcyIDAuODY5IDIuMzI4IDAuNjY1IDAuMDcyLTAuNTE3IDAuMjc5LTAuODcgMC41MDgtMS4wNzAtMS43NzctMC4yMDItMy42NDUtMC44ODgtMy42NDUtMy45NTQgMC0wLjg3MyAwLjMxMy0xLjU4NyAwLjgyNC0yLjE0Ny0wLjA4My0wLjIwMi0wLjM1Ny0xLjAxNSAwLjA3Ny0yLjExNyAwIDAgMC42NzItMC4yMTUgMi4yMDEgMC44MiAwLjYzOC0wLjE3NyAxLjMyMi0wLjI2NiAyLjAwMi0wLjI2OSAwLjY4IDAuMDAzIDEuMzY1IDAuMDkyIDIuMDA0IDAuMjY5IDEuNTI3LTEuMDM1IDIuMTk4LTAuODIgMi4xOTgtMC44MiAwLjQzNSAxLjEwMiAwLjE2MiAxLjkxNiAwLjA3OSAyLjExNyAwLjUxMyAwLjU2IDAuODIzIDEuMjc0IDAuODIzIDIuMTQ3IDAgMy4wNzMtMS44NzIgMy43NDktMy42NTMgMy45NDcgMC4yODcgMC4yNDggMC41NDMgMC43MzUgMC41NDMgMS40ODEgMCAxLjA3MC0wLjAwOSAxLjkzMi0wLjAwOSAyLjE5NSAwIDAuMjEzIDAuMTQ0IDAuNDYyIDAuNTUgMC4zODQgMy4xNzctMS4wNTkgNS40NjYtNC4wNTcgNS40NjYtNy41OSAwLTQuNDE4LTMuNTgyLTgtOC04elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb2dpbiB3aXRoIEdpdGh1Yjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibG9naW5fX2Zvcm1cIiBvblN1Ym1pdD17KGUpID0+IHsgdGhpcy5hdXRoZW50aWNhdGVXaXRoRW1haWwgfX0gcmVmPXsoZm9ybSkgPT4geyB0aGlzLmxvZ2luRm9ybSA9IGZvcm0gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibG9naW5fX2VtYWlsXCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5lbWFpbElucHV0ID0gaW5wdXQgfX0gdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWxcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibG9naW5fX3Bhc3N3b3JkXCIgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy5wYXNzd29yZElucHV0ID0gaW5wdXQgfX0gdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VibWl0XCIgcmVmPXsoYnV0dG9uKSA9PiB7IHRoaXMuc3VibWl0QnV0dG9uID0gYnV0dG9uIH19IG9uQ2xpY2s9eyhlKSA9PiB7IHRoaXMuYXV0aGVudGljYXRlV2l0aEVtYWlsKGUpIH19PkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9Mb2dpbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFHQTtBQWZBO0FBaUJBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBeEJBO0FBMEJBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==