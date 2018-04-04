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

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Teams = require('../pages/Teams');

var _Teams2 = _interopRequireDefault(_Teams);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _Data = require('../models/Data');

var _reactCookie = require('react-cookie');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\SignUp.js?entry';


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

var errors = {
    passwordsDoNotMatch: 'Passwords do not match'
};

var SignUp = function (_Component) {
    (0, _inherits3.default)(SignUp, _Component);

    function SignUp(props) {
        (0, _classCallCheck3.default)(this, SignUp);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SignUp.__proto__ || (0, _getPrototypeOf2.default)(SignUp)).call(this, props));

        _this.state = {};

        return _this;
    }

    (0, _createClass3.default)(SignUp, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                email = _state.email,
                password = _state.password,
                redirect = _state.redirect;

            return _react2.default.createElement(_reactCookie.CookiesProvider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'faces | Sign Up'), _react2.default.createElement('link', { href: '/static/images/favicon-64x64.png?v=2', rel: 'icon', sizes: '64x64', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), _react2.default.createElement('link', { href: '/static/images/favicon-32x32.png?v=2', rel: 'icon', sizes: '32x32', type: 'image/png', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }), _react2.default.createElement('link', { href: '/static/styles/styles.css', rel: 'stylesheet', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            })), _react2.default.createElement('main', { className: 'wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('div', { className: 'login-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('h2', { className: 'login__title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Create an account'), _react2.default.createElement('div', { className: 'login__methods', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement('button', { className: 'btn login-method fb-login', onClick: this.authenticateWithFacebook, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('path', { d: 'M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Sign up with Facebook')), _react2.default.createElement('button', { className: 'btn login-method tw-login', disabled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('path', { d: 'M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Sign up with Twitter')), _react2.default.createElement('button', { className: 'btn login-method gh-login', onClick: this.authenticateWithGithub, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('svg', { version: '1.1', xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('path', { d: 'M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })), _react2.default.createElement('span', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Sign up with Github'))), _react2.default.createElement('form', { className: 'login__form', onSubmit: this.authenticateWithEmail, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Email'), _react2.default.createElement('input', { className: email.valid ? 'login__email' : 'login__email invalid', value: email.value, type: 'email', onChange: this.emailHandler, placeholder: 'Email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }), _react2.default.createElement(ErrorMessage, { input: 'email', error: !email.valid, message: 'Please provide a valid email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }), _react2.default.createElement('label', { className: 'input-label', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Password'), _react2.default.createElement('input', { className: password.valid ? 'login__password' : 'login__password invalid', value: passwordOne.value, type: 'password', onChange: this.passwordOneHandler, placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement('input', { className: password.valid ? 'login__password' : 'login__password invalid', value: passwordTwo.value, type: 'password', onChange: this.passwordTwoHandler, placeholder: 'Retype password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }), _react2.default.createElement(ErrorMessage, { input: 'password', error: !password.valid, message: 'Incorrect password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }), _react2.default.createElement('button', { className: 'btn btn-submit', onClick: this.authenticateWithEmail, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Login')))));
        }
    }]);

    return SignUp;
}(_react.Component);

exports.default = SignUp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxTaWduVXAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsIlJlZGlyZWN0IiwidXBkYXRlIiwiSGVhZCIsIlRlYW1zIiwiUm91dGVyIiwiYXBwIiwiYmFzZSIsImZhY2Vib29rUHJvdmlkZXIiLCJnaXRodWJQcm92aWRlciIsIkNvb2tpZXNQcm92aWRlciIsIkNvb2tpZXMiLCJFcnJvck1lc3NhZ2UiLCJpbnB1dCIsInByb3BzIiwiZXJyb3IiLCJtZXNzYWdlIiwiZXJyb3JzIiwicGFzc3dvcmRzRG9Ob3RNYXRjaCIsIlNpZ25VcCIsInN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsInJlZGlyZWN0IiwiYXV0aGVudGljYXRlV2l0aEZhY2Vib29rIiwiYXV0aGVudGljYXRlV2l0aEdpdGh1YiIsImF1dGhlbnRpY2F0ZVdpdGhFbWFpbCIsInZhbGlkIiwidmFsdWUiLCJlbWFpbEhhbmRsZXIiLCJwYXNzd29yZE9uZSIsInBhc3N3b3JkT25lSGFuZGxlciIsInBhc3N3b3JkVHdvIiwicGFzc3dvcmRUd29IYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTzs7OztBQUNQLEFBQVMsQUFBSyxBQUFNLEFBQWtCLEFBQXNCOztBQUM1RCxBQUFTLEFBQWlCOzs7Ozs7O0FBSTFCLElBQU0sZUFBZSxTQUFmLEFBQWUsb0JBQVM7UUFBQSxBQUNsQixRQURrQixBQUNRLE1BRFIsQUFDbEI7UUFEa0IsQUFDWCxRQURXLEFBQ1EsTUFEUixBQUNYO1FBRFcsQUFDSixVQURJLEFBQ1EsTUFEUixBQUNKLEFBQ3RCOzsyQkFDSSxjQUFBLFNBQUssV0FBVyxBQUFHLG9CQUFpQixrQkFBcEMsQUFBZ0IsQUFBc0M7c0JBQXREO3dCQUFBLEFB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QUdSLDBDQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCLGVBQWMsVUFBVSxLQUF4QyxBQUE2Qzs4QkFBN0M7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsV0FBTyxXQUFQLEFBQWlCOzhCQUFqQjtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLG1EQUFPLFdBQVcsTUFBQSxBQUFNLFFBQU4sQUFBYyxpQkFBaEMsQUFBaUQsd0JBQXdCLE9BQU8sTUFBaEYsQUFBc0YsT0FBTyxNQUE3RixBQUFrRyxTQUFRLFVBQVUsS0FBcEgsQUFBeUgsY0FBYyxhQUF2SSxBQUFtSjs4QkFBbko7Z0NBRkosQUFFSSxBQUNBO0FBREE7OENBQ0EsQUFBQyxnQkFBYSxPQUFkLEFBQXFCLFNBQVMsT0FBTyxDQUFDLE1BQXRDLEFBQTRDLE9BQU8sU0FBbkQsQUFBNEQ7OEJBQTVEO2dDQUhKLEFBR0ksQUFDQTtBQURBO2dDQUNBLGNBQUEsV0FBTyxXQUFQLEFBQWlCOzhCQUFqQjtnQ0FBQTtBQUFBO2VBSkosQUFJSSxBQUNBLHNEQUFPLFdBQVcsU0FBQSxBQUFTLFFBQVQsQUFBaUIsb0JBQW5DLEFBQXVELDJCQUEyQixPQUFPLFlBQXpGLEFBQXFHLE9BQU8sTUFBNUcsQUFBaUgsWUFBVyxVQUFVLEtBQXRJLEFBQTJJLG9CQUFvQixhQUEvSixBQUEySzs4QkFBM0s7Z0NBTEosQUFLSSxBQUNBO0FBREE7eURBQ08sV0FBVyxTQUFBLEFBQVMsUUFBVCxBQUFpQixvQkFBbkMsQUFBdUQsMkJBQTJCLE9BQU8sWUFBekYsQUFBcUcsT0FBTyxNQUE1RyxBQUFpSCxZQUFXLFVBQVUsS0FBdEksQUFBMkksb0JBQW9CLGFBQS9KLEFBQTJLOzhCQUEzSztnQ0FOSixBQU1JLEFBQ0E7QUFEQTs4Q0FDQSxBQUFDLGdCQUFhLE9BQWQsQUFBcUIsWUFBWSxPQUFPLENBQUMsU0FBekMsQUFBa0QsT0FBTyxTQUF6RCxBQUFrRTs4QkFBbEU7Z0NBUEosQUFPSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQSxZQUFRLFdBQVIsQUFBa0Isa0JBQWlCLFNBQVMsS0FBNUMsQUFBaUQ7OEJBQWpEO2dDQUFBO0FBQUE7ZUF0Q3BCLEFBQ0ksQUFRSSxBQUNJLEFBb0JJLEFBUUksQUFNdkI7Ozs7O0FBMURnQixBLEFBNkRyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJTaWduVXAuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9GYWNlcyJ9