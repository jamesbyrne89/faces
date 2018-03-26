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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\Login.js';


var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);

    function Login(props) {
        (0, _classCallCheck3.default)(this, Login);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

        _this.authenticateWithEmail = _this.authenticateWithEmail.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Login, [{
        key: 'authenticateWithEmail',
        value: function authenticateWithEmail(e) {
            console.log(e);
            e.preventDefault();
            console.table([{
                email: this.emailInput.value,
                password: this.passwordInput.value
            }]);
            this.emailInput.value = '';
            this.passwordInput.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, 'faces | Dashboard'), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            })), _react2.default.createElement('body', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('div', { className: 'login-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('h2', { className: 'login__title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, 'Login here'), _react2.default.createElement('form', { onSubmit: function onSubmit(e) {
                    _this2.authenticateWithEmail;
                }, ref: function ref(form) {
                    _this2.loginForm = form;
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('input', { ref: function ref(input) {
                    _this2.emailInput = input;
                }, type: 'text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement('input', { ref: function ref(input) {
                    _this2.passwordInput = input;
                }, type: 'password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement('button', { ref: function ref(button) {
                    _this2.submitButton = button;
                }, onClick: function onClick(e) {
                    _this2.authenticateWithEmail(e);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'Login')))));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxMb2dpbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiSGVhZCIsIkxvZ2luIiwicHJvcHMiLCJhdXRoZW50aWNhdGVXaXRoRW1haWwiLCJiaW5kIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsInRhYmxlIiwiZW1haWwiLCJlbWFpbElucHV0IiwidmFsdWUiLCJwYXNzd29yZCIsInBhc3N3b3JkSW5wdXQiLCJmb3JtIiwibG9naW5Gb3JtIiwiaW5wdXQiLCJidXR0b24iLCJzdWJtaXRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SUFFRCxBO21DQUNGOzttQkFBQSxBQUFZLE9BQU87NENBQUE7O3dJQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLLHdCQUF3QixNQUFBLEFBQUssc0JBQUwsQUFBMkIsS0FGekMsQUFFZjtlQUNIOzs7Ozs4Q0FFcUIsQSxHQUFHLEFBQ3JCO29CQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Y0FBQSxBQUFFLEFBQ0Y7b0JBQUEsQUFBUTt1QkFDRyxLQUFBLEFBQUssV0FERCxBQUNZLEFBQ3ZCOzBCQUFVLEtBQUEsQUFBSyxjQUZuQixBQUFjLEFBQUMsQUFFa0IsQUFFakM7QUFKZSxBQUNYLGFBRFU7aUJBSWQsQUFBSyxXQUFMLEFBQWdCLFFBQWhCLEFBQXdCLEFBQ3hCO2lCQUFBLEFBQUssY0FBTCxBQUFtQixRQUFuQixBQUEyQixBQUM5Qjs7OztpQ0FFUTt5QkFDTDs7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOERBQU0sTUFBTixBQUFXLDREQUEyRCxLQUF0RSxBQUEwRTs4QkFBMUU7Z0NBRkosQUFFSSxBQUNBO0FBREE7d0RBQ00sTUFBTixBQUFXLDZCQUE0QixLQUF2QyxBQUEyQzs4QkFBM0M7Z0NBSlIsQUFDSSxBQUdJLEFBRUo7QUFGSTtpQ0FFSixjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsK0JBQUEsY0FBQSxVQUFNLFVBQVUsa0JBQUEsQUFBQyxHQUFNLEFBQUU7MkJBQUEsQUFBSyxBQUF1QjtBQUFyRCxtQkFBdUQsS0FBSyxhQUFBLEFBQUMsTUFBUyxBQUFFOzJCQUFBLEFBQUssWUFBTCxBQUFpQixBQUFNO0FBQS9GOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjt3REFDVyxLQUFLLGFBQUEsQUFBQyxPQUFVLEFBQUU7MkJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQU87QUFBbEQsbUJBQW9ELE1BQXBELEFBQXlEOzhCQUF6RDtnQ0FESixBQUNJLEFBQ0E7QUFEQTt5REFDTyxLQUFLLGFBQUEsQUFBQyxPQUFVLEFBQUU7MkJBQUEsQUFBSyxnQkFBTCxBQUFxQixBQUFPO0FBQXJELG1CQUF1RCxNQUF2RCxBQUE0RDs4QkFBNUQ7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQSxZQUFRLEtBQUssYUFBQSxBQUFDLFFBQVcsQUFBRTsyQkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFBUTtBQUF2RCxtQkFBeUQsU0FBUyxpQkFBQSxBQUFDLEdBQU0sQUFBRTsyQkFBQSxBQUFLLHNCQUFMLEFBQTJCLEFBQUk7QUFBMUc7OEJBQUE7Z0NBQUE7QUFBQTtlQWJwQixBQUNJLEFBTUksQUFDSSxBQUVJLEFBR0ksQUFNdkI7Ozs7O0FBckNlLEEsQUF3Q3BCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkxvZ2luLmpzIiwic291cmNlUm9vdCI6IkU6L1VzZXJzL0phbWVzL1dlYiBEZXYvUHJvamVjdHMvRmFjZXMifQ==