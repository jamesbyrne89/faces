webpackHotUpdate(5,{

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectDestructuringEmpty2 = __webpack_require__(585);

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

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

var _Teams = __webpack_require__(483);

var _Teams2 = _interopRequireDefault(_Teams);

var _index = __webpack_require__(101);

var _index2 = _interopRequireDefault(_index);

var _Data = __webpack_require__(440);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\Login.js';


var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);

    function Login(props) {
        (0, _classCallCheck3.default)(this, Login);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

        _this.state = {
            redirect: false,
            emailInput: '',
            passwordInput: '',
            emailInvalid: false,
            passwordInvalid: false
        };
        _this.authenticateWithFacebook = _this.authenticateWithFacebook.bind(_this);
        _this.authenticateWithGithub = _this.authenticateWithGithub.bind(_this);
        _this.authenticateWithEmail = _this.authenticateWithEmail.bind(_this);
        _this.emailHandler = _this.emailHandler.bind(_this);
        _this.passwordHandler = _this.passwordHandler.bind(_this);
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

            var _state = this.state,
                email = _state.email,
                password = _state.password;

            e.preventDefault();

            _Data.app.auth().fetchProvidersForEmail(email).then(function (providers) {
                if (providers.length === 0) {
                    // Create user
                    return _Data.app.auth().createUserWithEmailAndPassword(email, password);
                } else if (providers.indexOf("password") === -1) {
                    // They used Facebook
                    _this4.setState({
                        email: '',
                        password: ''
                    });
                    alert('Please try an alternative login');
                } else {
                    // Sign user in
                    return _Data.app.auth().signInWithEmailAndPassword(email, password);
                }
            }).then(function (user) {
                if (user && user.email) {
                    _this4.setState({
                        email: '',
                        password: ''
                    });
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
        key: 'emailHandler',
        value: function emailHandler(e) {
            this.setState({ email: e.target.value });
        }
    }, {
        key: 'passwordHandler',
        value: function passwordHandler(e) {
            this.setState({ password: e.target.value });
        }
    }, {
        key: 'handleErrors',
        value: function handleErrors(err) {
            console.log(err.code === 'auth/invalid-email');
            if (err.code === 'auth/invalid-email') {
                this.emailInput.classList.add('invalid');
                this.setState({ emailInvalid: true });
            } else if (err.code !== 'auth/invalid-email') {
                this.emailInput.classList.remove('invalid');
                this.setState({ emailInvalid: false });
            }
            if (err.code === 'auth/wrong-password') {
                this.passwordInput.classList.add('invalid');
                this.setState({ emailInvalid: true });
            } else if (err.code !== 'auth/wrong-password') {
                this.passwordInput.classList.add('invalid');
                this.setState({ emailInvalid: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            (0, _objectDestructuringEmpty3.default)(this.state);

            if (this.state.redirect) {
                {
                    _index2.default.push('/Teams');
                }
            }

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, 'faces | Login'), _react2.default.createElement('link', { href: '/static/images/favicon-64x64.png?v=2', rel: 'icon', sizes: '64x64', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }), _react2.default.createElement('link', { href: '/static/images/favicon-32x32.png?v=2', rel: 'icon', sizes: '32x32', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            })), _react2.default.createElement('main', { className: 'wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, _react2.default.createElement('div', { className: 'login-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                }
            }, _react2.default.createElement('h2', { className: 'login__title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, 'Login'), _react2.default.createElement('div', { className: 'login__methods', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement('button', { className: 'btn login-method fb-login', onClick: this.authenticateWithFacebook, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, _react2.default.createElement('path', { d: 'M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, 'Login with Facebook')), _react2.default.createElement('button', { className: 'btn login-method tw-login', disabled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                }
            }, _react2.default.createElement('path', { d: 'M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            }, 'Login with Twitter')), _react2.default.createElement('button', { className: 'btn login-method gh-login', onClick: this.authenticateWithGithub, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                }
            }, _react2.default.createElement('path', { d: 'M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }, 'Login with Github'))), _react2.default.createElement('div', { className: 'login__form', onSubmit: function onSubmit(e) {
                    _this5.authenticateWithEmail;
                }, ref: function ref(form) {
                    _this5.loginForm = form;
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            }, 'Email'), _react2.default.createElement('input', { className: 'login__email', value: this.state.email, type: 'email', onChange: this.emailHandler, placeholder: 'Email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }), _react2.default.createElement('div', { className: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }), _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, 'Password'), _react2.default.createElement('input', { className: 'login__password', value: this.state.password, type: 'password', onChange: this.passwordHandler, placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }), _react2.default.createElement('div', { className: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }), _react2.default.createElement('button', { className: 'btn btn-submit', onClick: function onClick(e) {
                    _this5.authenticateWithEmail(e);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }, 'Login')))));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxMb2dpbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiUmVkaXJlY3QiLCJIZWFkIiwiVGVhbXMiLCJSb3V0ZXIiLCJhcHAiLCJiYXNlIiwiZmFjZWJvb2tQcm92aWRlciIsImdpdGh1YlByb3ZpZGVyIiwiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwicmVkaXJlY3QiLCJlbWFpbElucHV0IiwicGFzc3dvcmRJbnB1dCIsImVtYWlsSW52YWxpZCIsInBhc3N3b3JkSW52YWxpZCIsImF1dGhlbnRpY2F0ZVdpdGhGYWNlYm9vayIsImJpbmQiLCJhdXRoZW50aWNhdGVXaXRoR2l0aHViIiwiYXV0aGVudGljYXRlV2l0aEVtYWlsIiwiZW1haWxIYW5kbGVyIiwicGFzc3dvcmRIYW5kbGVyIiwiaGFuZGxlRXJyb3JzIiwiYXV0aCIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXN1bHQiLCJlcnIiLCJhbGVydCIsInNldFN0YXRlIiwiZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoUHJvdmlkZXJzRm9yRW1haWwiLCJwcm92aWRlcnMiLCJsZW5ndGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJpbmRleE9mIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJjb2RlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwicHVzaCIsImZvcm0iLCJsb2dpbkZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFLLEFBQU0sQUFBa0IsQUFB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Y0FBYyxhQUFuRyxBQUErRzs4QkFBL0c7Z0NBRkosQUFFSSxBQUNBO0FBREE7dURBQ0ssV0FBTCxBQUFnQjs4QkFBaEI7Z0NBSEosQUFHSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQSxXQUFPLFdBQVAsQUFBaUI7OEJBQWpCO2dDQUFBO0FBQUE7ZUFKSixBQUlJLEFBQ0Esc0RBQU8sV0FBUCxBQUFpQixtQkFBa0IsT0FBTyxLQUFBLEFBQUssTUFBL0MsQUFBcUQsVUFBVSxNQUEvRCxBQUFvRSxZQUFXLFVBQVUsS0FBekYsQUFBOEYsaUJBQWlCLGFBQS9HLEFBQTJIOzhCQUEzSDtnQ0FMSixBQUtJLEFBQ0E7QUFEQTt1REFDSyxXQUFMLEFBQWdCOzhCQUFoQjtnQ0FOSixBQU1JLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBLFlBQVEsV0FBUixBQUFrQixrQkFBaUIsU0FBUyxpQkFBQSxBQUFDLEdBQU0sQUFBRTsyQkFBQSxBQUFLLHNCQUFMLEFBQTJCLEFBQUk7QUFBcEY7OEJBQUE7Z0NBQUE7QUFBQTtlQXJDcEIsQUFDSSxBQVFJLEFBQ0ksQUFvQkksQUFPSSxBQU12Qjs7Ozs7QUFsS2UsQSxBQXFLcEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9GYWNlcyJ9

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

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44NGY0OTE0MjFjMjczNmY0NmRhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvTG9naW4uanM/Y2M4MjlmOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdERlc3RydWN0dXJpbmdFbXB0eS5qcz9iMTU4YzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSwgeyBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBUZWFtcyBmcm9tICcuLi9wYWdlcy9UZWFtcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhcHAsIGJhc2UsIGZhY2Vib29rUHJvdmlkZXIsIGdpdGh1YlByb3ZpZGVyIH0gZnJvbSAnLi4vbW9kZWxzL0RhdGEnO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBlbWFpbElucHV0OiAnJyxcclxuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dDogJycsXHJcbiAgICAgICAgICAgIGVtYWlsSW52YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkSW52YWxpZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVXaXRoRmFjZWJvb2sgPSB0aGlzLmF1dGhlbnRpY2F0ZVdpdGhGYWNlYm9vay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlV2l0aEdpdGh1YiA9IHRoaXMuYXV0aGVudGljYXRlV2l0aEdpdGh1Yi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlV2l0aEVtYWlsID0gdGhpcy5hdXRoZW50aWNhdGVXaXRoRW1haWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVtYWlsSGFuZGxlciA9IHRoaXMuZW1haWxIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZEhhbmRsZXIgPSB0aGlzLnBhc3N3b3JkSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzID0gdGhpcy5oYW5kbGVFcnJvcnMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoZW50aWNhdGVXaXRoRmFjZWJvb2soKSB7XHJcbiAgICAgICAgYXBwLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAoZmFjZWJvb2tQcm92aWRlcilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCwgZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdVbmFibGUgdG8gc2lnbiBpbiB3aXRoIEZhY2Vib29rJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVkaXJlY3Q6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXV0aGVudGljYXRlV2l0aEdpdGh1YigpIHtcclxuICAgICAgICBhcHAuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChnaXRodWJQcm92aWRlcilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCwgZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdVbmFibGUgdG8gc2lnbiBpbiB3aXRoIEdpdGh1YicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZGlyZWN0OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGF1dGhlbnRpY2F0ZVdpdGhFbWFpbChlKSB7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBhcHAuYXV0aCgpLmZldGNoUHJvdmlkZXJzRm9yRW1haWwoZW1haWwpXHJcbiAgICAgICAgICAgIC50aGVuKHByb3ZpZGVycyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvdmlkZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFwcC5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb3ZpZGVycy5pbmRleE9mKFwicGFzc3dvcmRcIikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhleSB1c2VkIEZhY2Vib29rXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSB0cnkgYW4gYWx0ZXJuYXRpdmUgbG9naW4nKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaWduIHVzZXIgaW5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXBwLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlciAmJiB1c2VyLmVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZGlyZWN0OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgbG9nZ2VkIGluJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIuY29kZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBlbWFpbEhhbmRsZXIoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBwYXNzd29yZEhhbmRsZXIoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH0gICAgXHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5jb2RlID09PSAnYXV0aC9pbnZhbGlkLWVtYWlsJylcclxuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdhdXRoL2ludmFsaWQtZW1haWwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWxJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlbWFpbEludmFsaWQ6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGVyci5jb2RlICE9PSAnYXV0aC9pbnZhbGlkLWVtYWlsJykge1xyXG4gICAgICAgICAgICB0aGlzLmVtYWlsSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW1haWxJbnZhbGlkOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnYXV0aC93cm9uZy1wYXNzd29yZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsSW52YWxpZDogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZXJyLmNvZGUgIT09ICdhdXRoL3dyb25nLXBhc3N3b3JkJykge1xyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZW1haWxJbnZhbGlkOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7ICB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVkaXJlY3QpIHtcclxuICAgICAgICAgICAge1JvdXRlci5wdXNoKCcvVGVhbXMnKX1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+ZmFjZXMgfCBMb2dpbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24tNjR4NjQucG5nP3Y9MlwiIHJlbD1cImljb25cIiBzaXplcz1cIjY0eDY0XCIgdHlwZT1cImltYWdlL3BuZ1wiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9pbWFnZXMvZmF2aWNvbi0zMngzMi5wbmc/dj0yXCIgcmVsPVwiaWNvblwiIHNpemVzPVwiMzJ4MzJcIiB0eXBlPVwiaW1hZ2UvcG5nXCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwLDkwMFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvc3R5bGVzL3N0eWxlcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJsb2dpbl9fdGl0bGVcIj5Mb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5fX21ldGhvZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGxvZ2luLW1ldGhvZCBmYi1sb2dpblwiIG9uQ2xpY2s9e3RoaXMuYXV0aGVudGljYXRlV2l0aEZhY2Vib29rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjUgMGgtMTNjLTAuODI1IDAtMS41IDAuNjc1LTEuNSAxLjV2MTNjMCAwLjgyNSAwLjY3NSAxLjUgMS41IDEuNWg2LjV2LTdoLTJ2LTJoMnYtMWMwLTEuNjUzIDEuMzQ3LTMgMy0zaDJ2MmgtMmMtMC41NSAwLTEgMC40NS0xIDF2MWgzbC0wLjUgMmgtMi41djdoNC41YzAuODI1IDAgMS41LTAuNjc1IDEuNS0xLjV2LTEzYzAtMC44MjUtMC42NzUtMS41LTEuNS0xLjV6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxvZ2luIHdpdGggRmFjZWJvb2s8L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBsb2dpbi1tZXRob2QgdHctbG9naW5cIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDMuNTM4Yy0wLjU4OCAwLjI2My0xLjIyMiAwLjQzOC0xLjg4NCAwLjUxNiAwLjY3OC0wLjQwNiAxLjE5Ny0xLjA1MCAxLjQ0NC0xLjgxNi0wLjYzNCAwLjM3NS0xLjMzOCAwLjY1LTIuMDg0IDAuNzk3LTAuNi0wLjYzOC0xLjQ1My0xLjAzNC0yLjM5Ny0xLjAzNC0xLjgxMyAwLTMuMjgxIDEuNDY5LTMuMjgxIDMuMjgxIDAgMC4yNTYgMC4wMjggMC41MDYgMC4wODQgMC43NDctMi43MjgtMC4xMzgtNS4xNDctMS40NDQtNi43NjYtMy40MzEtMC4yODEgMC40ODQtMC40NDQgMS4wNTAtMC40NDQgMS42NSAwIDEuMTM4IDAuNTc4IDIuMTQ0IDEuNDU5IDIuNzMxLTAuNTM4LTAuMDE2LTEuMDQ0LTAuMTY2LTEuNDg4LTAuNDA5IDAgMC4wMTMgMCAwLjAyOCAwIDAuMDQxIDAgMS41OTEgMS4xMzEgMi45MTkgMi42MzQgMy4yMTktMC4yNzUgMC4wNzUtMC41NjYgMC4xMTYtMC44NjYgMC4xMTYtMC4yMTIgMC0wLjQxNi0wLjAyMi0wLjYxOS0wLjA1OSAwLjQxOSAxLjMwMyAxLjYzMSAyLjI1MyAzLjA2NiAyLjI4MS0xLjEyNSAwLjg4MS0yLjUzOCAxLjQwNi00LjA3OCAxLjQwNi0wLjI2NiAwLTAuNTI1LTAuMDE2LTAuNzg0LTAuMDQ3IDEuNDU2IDAuOTM0IDMuMTgxIDEuNDc1IDUuMDM0IDEuNDc1IDYuMDM3IDAgOS4zNDEtNS4wMDMgOS4zNDEtOS4zNDEgMC0wLjE0NC0wLjAwMy0wLjI4NC0wLjAwOS0wLjQyNSAwLjY0MS0wLjQ1OSAxLjE5Ny0xLjAzOCAxLjYzNy0xLjY5N3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG9naW4gd2l0aCBUd2l0dGVyPC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbG9naW4tbWV0aG9kIGdoLWxvZ2luXCIgb25DbGljaz17dGhpcy5hdXRoZW50aWNhdGVXaXRoR2l0aHVifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTggMC4xOThjLTQuNDE4IDAtOCAzLjU4Mi04IDggMCAzLjUzNSAyLjI5MiA2LjUzMyA1LjQ3MSA3LjU5MSAwLjQgMC4wNzQgMC41NDctMC4xNzQgMC41NDctMC4zODUgMC0wLjE5MS0wLjAwOC0wLjgyMS0wLjAxMS0xLjQ4OS0yLjIyNiAwLjQ4NC0yLjY5NS0wLjk0NC0yLjY5NS0wLjk0NC0wLjM2NC0wLjkyNS0wLjg4OC0xLjE3MS0wLjg4OC0xLjE3MS0wLjcyNi0wLjQ5NyAwLjA1NS0wLjQ4NiAwLjA1NS0wLjQ4NiAwLjgwMyAwLjA1NiAxLjIyNiAwLjgyNCAxLjIyNiAwLjgyNCAwLjcxNCAxLjIyMyAxLjg3MiAwLjg2OSAyLjMyOCAwLjY2NSAwLjA3Mi0wLjUxNyAwLjI3OS0wLjg3IDAuNTA4LTEuMDcwLTEuNzc3LTAuMjAyLTMuNjQ1LTAuODg4LTMuNjQ1LTMuOTU0IDAtMC44NzMgMC4zMTMtMS41ODcgMC44MjQtMi4xNDctMC4wODMtMC4yMDItMC4zNTctMS4wMTUgMC4wNzctMi4xMTcgMCAwIDAuNjcyLTAuMjE1IDIuMjAxIDAuODIgMC42MzgtMC4xNzcgMS4zMjItMC4yNjYgMi4wMDItMC4yNjkgMC42OCAwLjAwMyAxLjM2NSAwLjA5MiAyLjAwNCAwLjI2OSAxLjUyNy0xLjAzNSAyLjE5OC0wLjgyIDIuMTk4LTAuODIgMC40MzUgMS4xMDIgMC4xNjIgMS45MTYgMC4wNzkgMi4xMTcgMC41MTMgMC41NiAwLjgyMyAxLjI3NCAwLjgyMyAyLjE0NyAwIDMuMDczLTEuODcyIDMuNzQ5LTMuNjUzIDMuOTQ3IDAuMjg3IDAuMjQ4IDAuNTQzIDAuNzM1IDAuNTQzIDEuNDgxIDAgMS4wNzAtMC4wMDkgMS45MzItMC4wMDkgMi4xOTUgMCAwLjIxMyAwLjE0NCAwLjQ2MiAwLjU1IDAuMzg0IDMuMTc3LTEuMDU5IDUuNDY2LTQuMDU3IDUuNDY2LTcuNTkgMC00LjQxOC0zLjU4Mi04LTgtOHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG9naW4gd2l0aCBHaXRodWI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5fX2Zvcm1cIiBvblN1Ym1pdD17KGUpID0+IHsgdGhpcy5hdXRoZW50aWNhdGVXaXRoRW1haWwgfX0gcmVmPXsoZm9ybSkgPT4geyB0aGlzLmxvZ2luRm9ybSA9IGZvcm0gfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibG9naW5fX2VtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IHR5cGU9XCJlbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmVtYWlsSGFuZGxlcn0gcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Jyd9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImxvZ2luX19wYXNzd29yZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSB0eXBlPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5wYXNzd29yZEhhbmRsZXJ9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eycnfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWJtaXRcIiBvbkNsaWNrPXsoZSkgPT4geyB0aGlzLmF1dGhlbnRpY2F0ZVdpdGhFbWFpbChlKSB9fT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9Mb2dpbi5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBkZXN0cnVjdHVyZSB1bmRlZmluZWRcIik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3REZXN0cnVjdHVyaW5nRW1wdHkuanNcbi8vIG1vZHVsZSBpZCA9IDU4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFBQTtBQUZBO0FBS0E7QUFBQTtBQUVBO0FBRUE7QUFIQTtBQUlBO0FBUEE7QUFTQTtBQUFBO0FBR0E7QUFqQkE7QUFtQkE7QUFDQTtBQUVBO0FBRUE7QUFIQTtBQUdBO0FBQ0E7QUFFQTtBQTNCQTtBQTZCQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7Ozs7QUFJQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9