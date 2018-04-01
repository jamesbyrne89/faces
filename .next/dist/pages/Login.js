'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Teams = require('../pages/Teams');

var _Teams2 = _interopRequireDefault(_Teams);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _Data = require('../models/Data');

var _reactCookie = require('react-cookie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\Login.js';


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
                        email: { value: '' },
                        password: { value: '' }
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
                        email: { value: '' },
                        password: { value: '' }
                    });
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
            this.setState({ email: { value: e.target.value } });
        }
    }, {
        key: 'passwordHandler',
        value: function passwordHandler(e) {
            this.setState({ password: { value: e.target.value } });
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
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            if (this.state.redirect) {
                {
                    _index2.default.push('/Teams');
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                email = _state2.email,
                password = _state2.password,
                redirect = _state2.redirect;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 137
                }
            }, 'faces | Login'), _react2.default.createElement('link', { href: '/static/images/favicon-64x64.png?v=2', rel: 'icon', sizes: '64x64', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }), _react2.default.createElement('link', { href: '/static/images/favicon-32x32.png?v=2', rel: 'icon', sizes: '32x32', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            })), _react2.default.createElement('main', { className: 'wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, _react2.default.createElement('div', { className: 'login-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, _react2.default.createElement('h2', { className: 'login__title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, 'Login'), _react2.default.createElement('div', { className: 'login__methods', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                }
            }, _react2.default.createElement('button', { className: 'btn login-method fb-login', onClick: this.authenticateWithFacebook, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                }
            }, _react2.default.createElement('path', { d: 'M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                }
            }, 'Login with Facebook')), _react2.default.createElement('button', { className: 'btn login-method tw-login', disabled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                }
            }, _react2.default.createElement('path', { d: 'M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }, 'Login with Twitter')), _react2.default.createElement('button', { className: 'btn login-method gh-login', onClick: this.authenticateWithGithub, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            }, _react2.default.createElement('path', { d: 'M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, 'Login with Github'))), _react2.default.createElement('form', { className: 'login__form', onSubmit: this.authenticateWithEmail, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }, _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            }, 'Email'), _react2.default.createElement('input', { className: 'login__email', value: email.value, type: 'email', onChange: this.emailHandler, placeholder: 'Email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }), _react2.default.createElement('div', { className: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }), _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, 'Password'), _react2.default.createElement('input', { className: 'login__password', value: password.value, type: 'password', onChange: this.passwordHandler, placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }), _react2.default.createElement('div', { className: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                }
            }), _react2.default.createElement('button', { className: 'btn btn-submit', onClick: this.authenticateWithEmail, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171
                }
            }, 'Login')))));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxMb2dpbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiUmVkaXJlY3QiLCJIZWFkIiwiVGVhbXMiLCJSb3V0ZXIiLCJhcHAiLCJiYXNlIiwiZmFjZWJvb2tQcm92aWRlciIsImdpdGh1YlByb3ZpZGVyIiwiQ29va2llc1Byb3ZpZGVyIiwiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwicmVkaXJlY3QiLCJlbWFpbCIsInZhbHVlIiwidmFsaWQiLCJwYXNzd29yZCIsImF1dGhlbnRpY2F0ZVdpdGhGYWNlYm9vayIsImJpbmQiLCJhdXRoZW50aWNhdGVXaXRoR2l0aHViIiwiYXV0aGVudGljYXRlV2l0aEVtYWlsIiwiZW1haWxIYW5kbGVyIiwicGFzc3dvcmRIYW5kbGVyIiwiaGFuZGxlRXJyb3JzIiwiYXV0aCIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXN1bHQiLCJlcnIiLCJhbGVydCIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2hQcm92aWRlcnNGb3JFbWFpbCIsInByb3ZpZGVycyIsImxlbmd0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImluZGV4T2YiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImNvZGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwiZW1haWxJbnB1dCIsImNsYXNzTGlzdCIsImFkZCIsImVtYWlsSW52YWxpZCIsInJlbW92ZSIsInBhc3N3b3JkSW5wdXQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFLLEFBQU0sQUFBa0IsQUFBc0I7O0FBQzVELEFBQVM7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Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSxtREFBTyxXQUFQLEFBQWlCLGdCQUFlLE9BQU8sTUFBdkMsQUFBNkMsT0FBTyxNQUFwRCxBQUF5RCxTQUFRLFVBQVUsS0FBM0UsQUFBZ0YsY0FBYyxhQUE5RixBQUEwRzs4QkFBMUc7Z0NBRkosQUFFSSxBQUNBO0FBREE7dURBQ0ssV0FBTCxBQUFnQjs4QkFBaEI7Z0NBSEosQUFHSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQSxXQUFPLFdBQVAsQUFBaUI7OEJBQWpCO2dDQUFBO0FBQUE7ZUFKSixBQUlJLEFBQ0Esc0RBQU8sV0FBUCxBQUFpQixtQkFBa0IsT0FBTyxTQUExQyxBQUFtRCxPQUFPLE1BQTFELEFBQStELFlBQVcsVUFBVSxLQUFwRixBQUF5RixpQkFBaUIsYUFBMUcsQUFBc0g7OEJBQXRIO2dDQUxKLEFBS0ksQUFDQTtBQURBO3VEQUNLLFdBQUwsQUFBZ0I7OEJBQWhCO2dDQU5KLEFBTUksQUFDQTtBQURBO2dDQUNBLGNBQUEsWUFBUSxXQUFSLEFBQWtCLGtCQUFpQixTQUFTLEtBQTVDLEFBQWlEOzhCQUFqRDtnQ0FBQTtBQUFBO2VBckNwQixBQUNJLEFBUUksQUFDSSxBQW9CSSxBQU9JLEFBTXZCOzs7OztBQXhLZSxBLEFBMktwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiJFOi9Vc2Vycy9KYW1lcy9XZWIgRGV2L1Byb2plY3RzL0ZhY2VzIn0=