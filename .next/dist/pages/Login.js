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

var _Data = require('../models/Data');

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
        key: 'authenticateWithEmail',
        value: function authenticateWithEmail(e) {
            var _this3 = this;

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
                    _this3.setState({ redirect: true });
                    console.log('Successfully logged in');
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            if (this.state.redirect) {
                return _react2.default.createElement(_reactDom.Redirect, { to: '/dashboard', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                    }
                });
            }

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'faces | Dashboard'), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            })), _react2.default.createElement('main', { className: 'wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('div', { className: 'login-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('h2', { className: 'login__title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Login'), _react2.default.createElement('div', { className: 'login__methods', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('button', { className: 'btn login-method fb-login', onClick: this.authenticateWithFacebook, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, 'Login with Facebook'), _react2.default.createElement('button', { className: 'btn login-method tw-login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'Login with Twitter'), _react2.default.createElement('button', { className: 'btn login-method gh-login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, 'Login with Github')), _react2.default.createElement('form', { className: 'login__form', onSubmit: function onSubmit(e) {
                    _this4.authenticateWithEmail;
                }, ref: function ref(form) {
                    _this4.loginForm = form;
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, 'Email'), _react2.default.createElement('input', { className: 'login__email', ref: function ref(input) {
                    _this4.emailInput = input;
                }, type: 'email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }), _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, 'Password'), _react2.default.createElement('input', { className: 'login__password', ref: function ref(input) {
                    _this4.passwordInput = input;
                }, type: 'password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }), _react2.default.createElement('button', { className: 'btn btn-submit', ref: function ref(button) {
                    _this4.submitButton = button;
                }, onClick: function onClick(e) {
                    _this4.authenticateWithEmail(e);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, 'Login')))));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxMb2dpbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiUmVkaXJlY3QiLCJIZWFkIiwiYXBwIiwiYmFzZSIsImZhY2Vib29rUHJvdmlkZXIiLCJMb2dpbiIsInByb3BzIiwic3RhdGUiLCJyZWRpcmVjdCIsImF1dGhlbnRpY2F0ZVdpdGhGYWNlYm9vayIsImJpbmQiLCJhdXRoZW50aWNhdGVXaXRoRW1haWwiLCJhdXRoIiwic2lnbkluV2l0aFBvcHVwIiwidGhlbiIsInJlc3VsdCIsImVyciIsImFsZXJ0Iiwic2V0U3RhdGUiLCJlIiwiZW1haWwiLCJlbWFpbElucHV0IiwidmFsdWUiLCJwYXNzd29yZCIsInBhc3N3b3JkSW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoUHJvdmlkZXJzRm9yRW1haWwiLCJwcm92aWRlciIsImxlbmd0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiY2F0Y2giLCJlcnJvciIsImZvcm0iLCJsb2dpbkZvcm0iLCJpbnB1dCIsImJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFTLEFBQUssQUFBTSxBQUF3Qjs7Ozs7OztJQUV0QyxBO21DQUNGOzttQkFBQSxBQUFZLE9BQU87NENBQUE7O3dJQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO3NCQUFMLEFBQWEsQUFDQyxBQUVkO0FBSGEsQUFDVDtjQUVKLEFBQUssMkJBQTJCLE1BQUEsQUFBSyx5QkFBTCxBQUE4QixLQUE5RCxBQUNBO2NBQUEsQUFBSyx3QkFBd0IsTUFBQSxBQUFLLHNCQUFMLEFBQTJCLEtBTnpDLEFBTWY7ZUFDSDs7Ozs7bURBRTBCO3lCQUN2Qjs7c0JBQUEsQUFBSSxPQUFKLEFBQVcs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QUFLLGFBQUEsQUFBQyxPQUFVLEFBQUU7MkJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQU87QUFBM0UsbUJBQTZFLE1BQTdFLEFBQWtGOzhCQUFsRjtnQ0FGSixBQUVJLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBLFdBQU8sV0FBUCxBQUFpQjs4QkFBakI7Z0NBQUE7QUFBQTtlQUhKLEFBR0ksQUFDQSxzREFBTyxXQUFQLEFBQWlCLG1CQUFrQixLQUFLLGFBQUEsQUFBQyxPQUFVLEFBQUU7MkJBQUEsQUFBSyxnQkFBTCxBQUFxQixBQUFPO0FBQWpGLG1CQUFtRixNQUFuRixBQUF3Rjs4QkFBeEY7Z0NBSkosQUFJSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQSxZQUFRLFdBQVIsQUFBa0Isa0JBQWlCLEtBQUssYUFBQSxBQUFDLFFBQVcsQUFBRTsyQkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFBUTtBQUFsRixtQkFBb0YsU0FBUyxpQkFBQSxBQUFDLEdBQU0sQUFBRTsyQkFBQSxBQUFLLHNCQUFMLEFBQTJCLEFBQUk7QUFBckk7OEJBQUE7Z0NBQUE7QUFBQTtlQXBCcEIsQUFDSSxBQU1JLEFBQ0ksQUFPSSxBQUtJLEFBTXZCOzs7OztBQXJGZSxBLEFBd0ZwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMb2dpbi5qcyIsInNvdXJjZVJvb3QiOiJFOi9Vc2Vycy9KYW1lcy9XZWIgRGV2L1Byb2plY3RzL0ZhY2VzIn0=