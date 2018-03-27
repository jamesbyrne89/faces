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