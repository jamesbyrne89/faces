webpackHotUpdate(5,{

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(105);

var _extends3 = _interopRequireDefault(_extends2);

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

var _immutabilityHelper = __webpack_require__(485);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _head = __webpack_require__(189);

var _head2 = _interopRequireDefault(_head);

var _Teams = __webpack_require__(487);

var _Teams2 = _interopRequireDefault(_Teams);

var _index = __webpack_require__(101);

var _index2 = _interopRequireDefault(_index);

var _Data = __webpack_require__(442);

var _reactCookie = __webpack_require__(583);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\Login.js';


var ErrorMessage = function ErrorMessage(props) {
    var input = props.input,
        error = props.error,
        message = props.message;

    return _react2.default.createElement('div', { className: input + '-error' + (error ? ' show' : ''), __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, message);
};

var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);

    function Login(props) {
        (0, _classCallCheck3.default)(this, Login);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

        _this.state = {
            redirect: false,
            email: {
                value: '',
                valid: true
            },
            password: {
                value: '',
                valid: true
            }
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

            _Data.app.auth().fetchProvidersForEmail(email.value).then(function (providers) {
                if (providers.length === 0) {
                    // Create user
                    return _Data.app.auth().createUserWithEmailAndPassword(email.value, password.value);
                } else if (providers.indexOf("password") === -1) {
                    // They used Facebook
                    _this4.setState({
                        email: { value: '', valid: valid },
                        password: { value: '', valid: valid }
                    });
                    alert('Please try an alternative login');
                } else {
                    // Sign user in
                    return _Data.app.auth().signInWithEmailAndPassword(email.value, password.value);
                }
            }).then(function (user) {
                if (user && user.email) {
                    _this4.setState({
                        redirect: true,
                        email: { value: '', valid: true },
                        password: { value: '', valid: true }
                    });
                    localStorage.setItem('uid-token', user.uid);
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
            var newState = (0, _extends3.default)({}, this.state);
            newState.email.value = e.target.value;
            this.setState((0, _extends3.default)({}, newState));
        }
    }, {
        key: 'passwordHandler',
        value: function passwordHandler(e) {
            var newState = (0, _extends3.default)({}, this.state);
            newState.password.value = e.target.value;
            this.setState((0, _extends3.default)({}, newState));
        }
    }, {
        key: 'handleErrors',
        value: function handleErrors(err) {
            var newState = (0, _extends3.default)({}, this.state);

            if (err.code === 'auth/invalid-email') {
                newState.email.valid = false;
                this.setState((0, _extends3.default)({}, newState));
            } else if (err.code !== 'auth/invalid-email') {
                newState.email.valid = true;
                this.setState((0, _extends3.default)({}, newState));
            }
            if (err.code === 'auth/wrong-password') {
                newState.password.valid = false;
                this.setState((0, _extends3.default)({}, newState));
            } else if (err.code !== 'auth/wrong-password') {
                newState.password.valid = true;
                this.setState((0, _extends3.default)({}, newState));
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.state.redirect) {
                // {Router.push('/Teams')}
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ redirect: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                email = _state2.email,
                password = _state2.password,
                redirect = _state2.redirect;

            return _react2.default.createElement(_reactCookie.CookiesProvider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, 'faces | Login'), _react2.default.createElement('link', { href: '/static/images/favicon-64x64.png?v=2', rel: 'icon', sizes: '64x64', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            }), _react2.default.createElement('link', { href: '/static/images/favicon-32x32.png?v=2', rel: 'icon', sizes: '32x32', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            })), _react2.default.createElement('main', { className: 'wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }, _react2.default.createElement('div', { className: 'login-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }, _react2.default.createElement('h2', { className: 'login__title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            }, 'Login'), _react2.default.createElement('div', { className: 'login__methods', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, _react2.default.createElement('button', { className: 'btn login-method fb-login', onClick: this.authenticateWithFacebook, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, _react2.default.createElement('path', { d: 'M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171
                }
            }, 'Login with Facebook')), _react2.default.createElement('button', { className: 'btn login-method tw-login', disabled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                }
            }, _react2.default.createElement('path', { d: 'M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 176
                }
            }, 'Login with Twitter')), _react2.default.createElement('button', { className: 'btn login-method gh-login', onClick: this.authenticateWithGithub, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, _react2.default.createElement('path', { d: 'M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }, 'Login with Github'))), _react2.default.createElement('form', { className: 'login__form', onSubmit: this.authenticateWithEmail, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            }, _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, 'Email'), _react2.default.createElement('input', { className: email.valid ? 'login__email' : 'login__email invalid', value: email.value, type: 'email', onChange: this.emailHandler, placeholder: 'Email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }), _react2.default.createElement(ErrorMessage, { input: 'email', error: !email.valid, message: 'Please provide a valid email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }), _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, 'Password'), _react2.default.createElement('input', { className: password.valid ? 'login__password' : 'login__password invalid', value: password.value, type: 'password', onChange: this.passwordHandler, placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }), _react2.default.createElement(ErrorMessage, { input: 'password', error: !password.valid, message: 'Incorrect password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }), _react2.default.createElement('button', { className: 'btn btn-submit', onClick: this.authenticateWithEmail, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191
                }
            }, 'Login')))));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxMb2dpbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiUmVkaXJlY3QiLCJ1cGRhdGUiLCJIZWFkIiwiVGVhbXMiLCJSb3V0ZXIiLCJhcHAiLCJiYXNlIiwiZmFjZWJvb2tQcm92aWRlciIsImdpdGh1YlByb3ZpZGVyIiwiQ29va2llc1Byb3ZpZGVyIiwiQ29va2llcyIsIkVycm9yTWVzc2FnZSIsImlucHV0IiwicHJvcHMiLCJlcnJvciIsIm1lc3NhZ2UiLCJMb2dpbiIsInN0YXRlIiwicmVkaXJlY3QiLCJlbWFpbCIsInZhbHVlIiwidmFsaWQiLCJwYXNzd29yZCIsImF1dGhlbnRpY2F0ZVdpdGhGYWNlYm9vayIsImJpbmQiLCJhdXRoZW50aWNhdGVXaXRoR2l0aHViIiwiYXV0aGVudGljYXRlV2l0aEVtYWlsIiwiZW1haWxIYW5kbGVyIiwicGFzc3dvcmRIYW5kbGVyIiwiaGFuZGxlRXJyb3JzIiwiYXV0aCIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXN1bHQiLCJlcnIiLCJhbGVydCIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2hQcm92aWRlcnNGb3JFbWFpbCIsInByb3ZpZGVycyIsImxlbmd0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImluZGV4T2YiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidWlkIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiY29kZSIsIm5ld1N0YXRlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU87Ozs7QUFDUCxBQUFTLEFBQUssQUFBTSxB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OEJBQTVEO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssU0FBTCxBQUFhLE9BQU0sT0FBbkIsQUFBeUIsOEJBQTZCLE9BQXRELEFBQTRELE1BQUssUUFBakUsQUFBd0UsTUFBSyxTQUE3RSxBQUFxRjs4QkFBckY7Z0NBQUEsQUFDSTtBQURKO3VEQUNVLEdBQU4sQUFBUTs4QkFBUjtnQ0FGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO2lDQUVKLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQWpCWixBQUVJLEFBV0ksQUFJSSxBQUdSLHdDQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCLGVBQWMsVUFBVSxLQUF4QyxBQUE2Qzs4QkFBN0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsV0FBTyxXQUFQLEFBQWlCOzhCQUFqQjtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLG1EQUFPLFdBQVcsTUFBQSxBQUFNLFFBQU4sQUFBYyxpQkFBaEMsQUFBaUQsd0JBQXdCLE9BQU8sTUFBaEYsQUFBc0YsT0FBTyxNQUE3RixBQUFrRyxTQUFRLFVBQVUsS0FBcEgsQUFBeUgsY0FBYyxhQUF2SSxBQUFtSjs4QkFBbko7Z0NBRkosQUFFSSxBQUNBO0FBREE7OENBQ0EsQUFBQyxnQkFBYSxPQUFkLEFBQXFCLFNBQVMsT0FBTyxDQUFDLE1BQXRDLEFBQTRDLE9BQU8sU0FBbkQsQUFBNEQ7OEJBQTVEO2dDQUhKLEFBR0ksQUFDQTtBQURBO2dDQUNBLGNBQUEsV0FBTyxXQUFQLEFBQWlCOzhCQUFqQjtnQ0FBQTtBQUFBO2VBSkosQUFJSSxBQUNBLHNEQUFPLFdBQVcsU0FBQSxBQUFTLFFBQVQsQUFBaUIsb0JBQW5DLEFBQXVELDJCQUEyQixPQUFPLFNBQXpGLEFBQWtHLE9BQU8sTUFBekcsQUFBOEcsWUFBVyxVQUFVLEtBQW5JLEFBQXdJLGlCQUFpQixhQUF6SixBQUFxSzs4QkFBcks7Z0NBTEosQUFLSSxBQUNBO0FBREE7OENBQ0EsQUFBQyxnQkFBYSxPQUFkLEFBQXFCLFlBQVksT0FBTyxDQUFDLFNBQXpDLEFBQWtELE9BQU8sU0FBekQsQUFBa0U7OEJBQWxFO2dDQU5KLEFBTUksQUFDQTtBQURBO2dDQUNBLGNBQUEsWUFBUSxXQUFSLEFBQWtCLGtCQUFpQixTQUFTLEtBQTVDLEFBQWlEOzhCQUFqRDtnQ0FBQTtBQUFBO2VBckNwQixBQUNJLEFBUUksQUFDSSxBQW9CSSxBQU9JLEFBTXZCOzs7OztBQWxMZSxBLEFBcUxwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiJFOi9Vc2Vycy9KYW1lcy9XZWIgRGV2L1Byb2plY3RzL0ZhY2VzIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kMmQwNWYxMzViZTYzZDdlZGVkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvTG9naW4uanM/YjZjOGM5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00sIHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgdXBkYXRlIGZyb20gJ2ltbXV0YWJpbGl0eS1oZWxwZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgVGVhbXMgZnJvbSAnLi4vcGFnZXMvVGVhbXMnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYXBwLCBiYXNlLCBmYWNlYm9va1Byb3ZpZGVyLCBnaXRodWJQcm92aWRlciB9IGZyb20gJy4uL21vZGVscy9EYXRhJztcclxuaW1wb3J0IHsgQ29va2llc1Byb3ZpZGVyLCBDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcblxyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgeyBpbnB1dCwgZXJyb3IsIG1lc3NhZ2UgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7aW5wdXR9LWVycm9yYCArIChlcnJvciA/IGAgc2hvd2AgOiAnJyl9PnttZXNzYWdlfTwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICB2YWxpZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlV2l0aEZhY2Vib29rID0gdGhpcy5hdXRoZW50aWNhdGVXaXRoRmFjZWJvb2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZVdpdGhHaXRodWIgPSB0aGlzLmF1dGhlbnRpY2F0ZVdpdGhHaXRodWIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZVdpdGhFbWFpbCA9IHRoaXMuYXV0aGVudGljYXRlV2l0aEVtYWlsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbWFpbEhhbmRsZXIgPSB0aGlzLmVtYWlsSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmRIYW5kbGVyID0gdGhpcy5wYXNzd29yZEhhbmRsZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycyA9IHRoaXMuaGFuZGxlRXJyb3JzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aGVudGljYXRlV2l0aEZhY2Vib29rKCkge1xyXG4gICAgICAgIGFwcC5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKGZhY2Vib29rUHJvdmlkZXIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQsIGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnVW5hYmxlIHRvIHNpZ24gaW4gd2l0aCBGYWNlYm9vaycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZGlyZWN0OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGF1dGhlbnRpY2F0ZVdpdGhHaXRodWIoKSB7XHJcbiAgICAgICAgYXBwLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAoZ2l0aHViUHJvdmlkZXIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQsIGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnVW5hYmxlIHRvIHNpZ24gaW4gd2l0aCBHaXRodWInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWRpcmVjdDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhdXRoZW50aWNhdGVXaXRoRW1haWwoZSkge1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgYXBwLmF1dGgoKS5mZXRjaFByb3ZpZGVyc0ZvckVtYWlsKGVtYWlsLnZhbHVlKVxyXG4gICAgICAgICAgICAudGhlbihwcm92aWRlcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3ZpZGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgdXNlclxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcHAuYXV0aCgpLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbC52YWx1ZSwgcGFzc3dvcmQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm92aWRlcnMuaW5kZXhPZihcInBhc3N3b3JkXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZXkgdXNlZCBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogeyB2YWx1ZTogJycsIHZhbGlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7IHZhbHVlOiAnJywgdmFsaWQgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgdHJ5IGFuIGFsdGVybmF0aXZlIGxvZ2luJylcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2lnbiB1c2VyIGluXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFwcC5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwudmFsdWUsIHBhc3N3b3JkLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIgJiYgdXNlci5lbWFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHsgdmFsdWU6ICcnLCB2YWxpZDogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogeyB2YWx1ZTogJycsIHZhbGlkOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndWlkLXRva2VuJywgdXNlci51aWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBsb2dnZWQgaW4nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKGVycik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5jb2RlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGVtYWlsSGFuZGxlcihlKSB7XHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gey4uLnRoaXMuc3RhdGV9O1xyXG4gICAgICAgIG5ld1N0YXRlLmVtYWlsLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLm5ld1N0YXRlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcGFzc3dvcmRIYW5kbGVyKGUpIHtcclxuICAgICAgICBsZXQgbmV3U3RhdGUgPSB7Li4udGhpcy5zdGF0ZX07XHJcbiAgICAgICAgbmV3U3RhdGUucGFzc3dvcmQudmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4ubmV3U3RhdGUgfSlcclxuICAgIH0gICAgXHJcblxyXG4gICAgaGFuZGxlRXJyb3JzKGVycikge1xyXG4gICAgICAgIGxldCBuZXdTdGF0ZSA9IHsuLi50aGlzLnN0YXRlfTtcclxuXHJcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnYXV0aC9pbnZhbGlkLWVtYWlsJykge1xyXG4gICAgICAgICAgICBuZXdTdGF0ZS5lbWFpbC52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgLi4ubmV3U3RhdGUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGVyci5jb2RlICE9PSAnYXV0aC9pbnZhbGlkLWVtYWlsJykge1xyXG4gICAgICAgICAgICBuZXdTdGF0ZS5lbWFpbC52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi5uZXdTdGF0ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnYXV0aC93cm9uZy1wYXNzd29yZCcpIHtcclxuICAgICAgICAgICAgbmV3U3RhdGUucGFzc3dvcmQudmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLm5ld1N0YXRlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlcnIuY29kZSAhPT0gJ2F1dGgvd3JvbmctcGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlLnBhc3N3b3JkLnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLm5ld1N0YXRlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucmVkaXJlY3QpIHtcclxuICAgICAgICAgICAgLy8ge1JvdXRlci5wdXNoKCcvVGVhbXMnKX1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlZGlyZWN0OiBmYWxzZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIHJlZGlyZWN0IH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29va2llc1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmZhY2VzIHwgTG9naW48L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ltYWdlcy9mYXZpY29uLTY0eDY0LnBuZz92PTJcIiByZWw9XCJpY29uXCIgc2l6ZXM9XCI2NHg2NFwiIHR5cGU9XCJpbWFnZS9wbmdcIj48L2xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24tMzJ4MzIucG5nP3Y9MlwiIHJlbD1cImljb25cIiBzaXplcz1cIjMyeDMyXCIgdHlwZT1cImltYWdlL3BuZ1wiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86NDAwLDcwMCw5MDBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL3N0eWxlcy9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibG9naW5fX3RpdGxlXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX19tZXRob2RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBsb2dpbi1tZXRob2QgZmItbG9naW5cIiBvbkNsaWNrPXt0aGlzLmF1dGhlbnRpY2F0ZVdpdGhGYWNlYm9va30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNC41IDBoLTEzYy0wLjgyNSAwLTEuNSAwLjY3NS0xLjUgMS41djEzYzAgMC44MjUgMC42NzUgMS41IDEuNSAxLjVoNi41di03aC0ydi0yaDJ2LTFjMC0xLjY1MyAxLjM0Ny0zIDMtM2gydjJoLTJjLTAuNTUgMC0xIDAuNDUtMSAxdjFoM2wtMC41IDJoLTIuNXY3aDQuNWMwLjgyNSAwIDEuNS0wLjY3NSAxLjUtMS41di0xM2MwLTAuODI1LTAuNjc1LTEuNS0xLjUtMS41elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Mb2dpbiB3aXRoIEZhY2Vib29rPC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gbG9naW4tbWV0aG9kIHR3LWxvZ2luXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNiAzLjUzOGMtMC41ODggMC4yNjMtMS4yMjIgMC40MzgtMS44ODQgMC41MTYgMC42NzgtMC40MDYgMS4xOTctMS4wNTAgMS40NDQtMS44MTYtMC42MzQgMC4zNzUtMS4zMzggMC42NS0yLjA4NCAwLjc5Ny0wLjYtMC42MzgtMS40NTMtMS4wMzQtMi4zOTctMS4wMzQtMS44MTMgMC0zLjI4MSAxLjQ2OS0zLjI4MSAzLjI4MSAwIDAuMjU2IDAuMDI4IDAuNTA2IDAuMDg0IDAuNzQ3LTIuNzI4LTAuMTM4LTUuMTQ3LTEuNDQ0LTYuNzY2LTMuNDMxLTAuMjgxIDAuNDg0LTAuNDQ0IDEuMDUwLTAuNDQ0IDEuNjUgMCAxLjEzOCAwLjU3OCAyLjE0NCAxLjQ1OSAyLjczMS0wLjUzOC0wLjAxNi0xLjA0NC0wLjE2Ni0xLjQ4OC0wLjQwOSAwIDAuMDEzIDAgMC4wMjggMCAwLjA0MSAwIDEuNTkxIDEuMTMxIDIuOTE5IDIuNjM0IDMuMjE5LTAuMjc1IDAuMDc1LTAuNTY2IDAuMTE2LTAuODY2IDAuMTE2LTAuMjEyIDAtMC40MTYtMC4wMjItMC42MTktMC4wNTkgMC40MTkgMS4zMDMgMS42MzEgMi4yNTMgMy4wNjYgMi4yODEtMS4xMjUgMC44ODEtMi41MzggMS40MDYtNC4wNzggMS40MDYtMC4yNjYgMC0wLjUyNS0wLjAxNi0wLjc4NC0wLjA0NyAxLjQ1NiAwLjkzNCAzLjE4MSAxLjQ3NSA1LjAzNCAxLjQ3NSA2LjAzNyAwIDkuMzQxLTUuMDAzIDkuMzQxLTkuMzQxIDAtMC4xNDQtMC4wMDMtMC4yODQtMC4wMDktMC40MjUgMC42NDEtMC40NTkgMS4xOTctMS4wMzggMS42MzctMS42OTd6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxvZ2luIHdpdGggVHdpdHRlcjwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGxvZ2luLW1ldGhvZCBnaC1sb2dpblwiIG9uQ2xpY2s9e3RoaXMuYXV0aGVudGljYXRlV2l0aEdpdGh1Yn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04IDAuMTk4Yy00LjQxOCAwLTggMy41ODItOCA4IDAgMy41MzUgMi4yOTIgNi41MzMgNS40NzEgNy41OTEgMC40IDAuMDc0IDAuNTQ3LTAuMTc0IDAuNTQ3LTAuMzg1IDAtMC4xOTEtMC4wMDgtMC44MjEtMC4wMTEtMS40ODktMi4yMjYgMC40ODQtMi42OTUtMC45NDQtMi42OTUtMC45NDQtMC4zNjQtMC45MjUtMC44ODgtMS4xNzEtMC44ODgtMS4xNzEtMC43MjYtMC40OTcgMC4wNTUtMC40ODYgMC4wNTUtMC40ODYgMC44MDMgMC4wNTYgMS4yMjYgMC44MjQgMS4yMjYgMC44MjQgMC43MTQgMS4yMjMgMS44NzIgMC44NjkgMi4zMjggMC42NjUgMC4wNzItMC41MTcgMC4yNzktMC44NyAwLjUwOC0xLjA3MC0xLjc3Ny0wLjIwMi0zLjY0NS0wLjg4OC0zLjY0NS0zLjk1NCAwLTAuODczIDAuMzEzLTEuNTg3IDAuODI0LTIuMTQ3LTAuMDgzLTAuMjAyLTAuMzU3LTEuMDE1IDAuMDc3LTIuMTE3IDAgMCAwLjY3Mi0wLjIxNSAyLjIwMSAwLjgyIDAuNjM4LTAuMTc3IDEuMzIyLTAuMjY2IDIuMDAyLTAuMjY5IDAuNjggMC4wMDMgMS4zNjUgMC4wOTIgMi4wMDQgMC4yNjkgMS41MjctMS4wMzUgMi4xOTgtMC44MiAyLjE5OC0wLjgyIDAuNDM1IDEuMTAyIDAuMTYyIDEuOTE2IDAuMDc5IDIuMTE3IDAuNTEzIDAuNTYgMC44MjMgMS4yNzQgMC44MjMgMi4xNDcgMCAzLjA3My0xLjg3MiAzLjc0OS0zLjY1MyAzLjk0NyAwLjI4NyAwLjI0OCAwLjU0MyAwLjczNSAwLjU0MyAxLjQ4MSAwIDEuMDcwLTAuMDA5IDEuOTMyLTAuMDA5IDIuMTk1IDAgMC4yMTMgMC4xNDQgMC40NjIgMC41NSAwLjM4NCAzLjE3Ny0xLjA1OSA1LjQ2Ni00LjA1NyA1LjQ2Ni03LjU5IDAtNC40MTgtMy41ODItOC04LTh6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkxvZ2luIHdpdGggR2l0aHViPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJsb2dpbl9fZm9ybVwiIG9uU3VibWl0PXt0aGlzLmF1dGhlbnRpY2F0ZVdpdGhFbWFpbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtbGFiZWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtlbWFpbC52YWxpZCA/ICdsb2dpbl9fZW1haWwnIDogJ2xvZ2luX19lbWFpbCBpbnZhbGlkJ30gdmFsdWU9e2VtYWlsLnZhbHVlfSB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5lbWFpbEhhbmRsZXJ9IHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBpbnB1dD17J2VtYWlsJ30gZXJyb3I9eyFlbWFpbC52YWxpZH0gbWVzc2FnZT17J1BsZWFzZSBwcm92aWRlIGEgdmFsaWQgZW1haWwnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LWxhYmVsXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17cGFzc3dvcmQudmFsaWQgPyAnbG9naW5fX3Bhc3N3b3JkJyA6ICdsb2dpbl9fcGFzc3dvcmQgaW52YWxpZCd9IHZhbHVlPXtwYXNzd29yZC52YWx1ZX0gdHlwZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmRIYW5kbGVyfSBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgaW5wdXQ9eydwYXNzd29yZCd9IGVycm9yPXshcGFzc3dvcmQudmFsaWR9IG1lc3NhZ2U9eydJbmNvcnJlY3QgcGFzc3dvcmQnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuYXV0aGVudGljYXRlV2l0aEVtYWlsfT5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvQ29va2llc1Byb3ZpZGVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvTG9naW4uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQ0E7O0FBT0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBOztBQUVBO0FBRUE7QUFIQTs7QUFLQTtBQUdBO0FBSkE7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQVBBO0FBU0E7QUFBQTtBQUdBO0FBakJBO0FBbUJBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQTVCQTtBQThCQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUVBO0FBQ0E7Ozs7QUFHQTtBQUFBOzs7O0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=