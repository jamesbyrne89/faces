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

var _NewPhoto = require('../pages/NewPhoto');

var _NewPhoto2 = _interopRequireDefault(_NewPhoto);

var _TakePhoto = require('../pages/TakePhoto');

var _TakePhoto2 = _interopRequireDefault(_TakePhoto);

var _UploadPhoto = require('../pages/UploadPhoto');

var _UploadPhoto2 = _interopRequireDefault(_UploadPhoto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\htdocs\\Faces\\components\\Modal.js';


var Modal = function (_Component) {
    (0, _inherits3.default)(Modal, _Component);

    function Modal(props) {
        (0, _classCallCheck3.default)(this, Modal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this, props));

        console.log(_this.props);
        return _this;
    }

    (0, _createClass3.default)(Modal, [{
        key: 'renderContent',
        value: function renderContent() {
            if (this.props.content === 'new_photo') {
                return _react2.default.createElement(_NewPhoto2.default, { handler: this.props.handler,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                });
            } else if (this.props.content === 'take_photo') {
                return _react2.default.createElement(_TakePhoto2.default, { handler: this.props.handler,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                });
            } else if (this.props.content === 'upload_photo') {
                return _react2.default.createElement(_UploadPhoto2.default, { handler: this.props.handler,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                    }
                });
            } else {
                return null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.open) {
                return _react2.default.createElement('div', { className: 'modal-wrap', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                }, _react2.default.createElement('div', { className: 'modal-bg',
                    onClick: function onClick() {
                        return _this2.props.handler(false, null);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                }, ' '), ' ', _react2.default.createElement('div', { className: 'modal', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }, _react2.default.createElement('button', { className: 'btn modal-close-btn',
                    onClick: function onClick() {
                        return _this2.props.handler(false, null);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                }, _react2.default.createElement('i', { className: 'fa fa-times', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }, ' ')), ' ', this.renderContent(), ' '), ' ');
            } else {
                return null;
            }
        }
    }]);

    return Modal;
}(_react.Component);

exports.default = Modal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTmV3UGhvdG8iLCJUYWtlUGhvdG8iLCJVcGxvYWRQaG90byIsIk1vZGFsIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsImhhbmRsZXIiLCJvcGVuIiwicmVuZGVyQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWlCOzs7Ozs7Ozs7SUFJbEIsQTttQ0FDRjs7bUJBQUEsQUFBWSxPQUFPOzRDQUFBOzt3SUFBQSxBQUNULEFBQ047O2dCQUFBLEFBQVEsSUFBSSxNQUZHLEFBRWYsQUFBaUI7ZUFDcEI7Ozs7O3dDQUdlLEFBQ1o7Z0JBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxZQUFmLEFBQTJCLGFBQWEsQUFDcEM7dUNBQU8sQUFBQyxvQ0FBUyxTQUFZLEtBQUEsQUFBSyxNQUEzQixBQUFpQzs7a0NBQWpDO29DQUFQLEFBQU8sQUFFVjtBQUZVO2lCQUFBO0FBRFgsdUJBR1csS0FBQSxBQUFLLE1BQUwsQUFBVyxZQUFmLEFBQTJCLGNBQWMsQUFDNUM7dUNBQU8sQUFBQyxxQ0FBVSxTQUFZLEtBQUEsQUFBSyxNQUE1QixBQUFrQzs7a0NBQWxDO29DQUFQLEFBQU8sQUFFVjtBQUZVO2lCQUFBO0FBREosYUFBQSxVQUdJLEtBQUEsQUFBSyxNQUFMLEFBQVcsWUFBZixBQUEyQixnQkFBZ0IsQUFDOUM7dUNBQU8sQUFBQyx1Q0FBWSxTQUFZLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs7a0NBQXBDO29DQUFQLEFBQU8sQUFFVjtBQUZVO2lCQUFBO0FBREosYUFBQSxNQUdBLEFBQ0g7dUJBQUEsQUFBTyxBQUNWO0FBQ0o7Ozs7aUNBRVE7eUJBQ0w7O2dCQUFJLEtBQUEsQUFBSyxNQUFULEFBQWUsTUFBTSxBQUNqQjt1Q0FBUyxjQUFBLFNBQ0QsV0FEQyxBQUNXO2tDQURYO29DQUFBLEFBRUw7QUFGSztpQkFBQSxrQkFFTCxjQUFBLFNBQ0ksV0FESixBQUNnQixBQUNoQjs2QkFDSSxtQkFBQTsrQkFBTSxPQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsT0FBekIsQUFBTSxBQUEwQjtBQUhwQztrQ0FBQTtvQ0FBQTtBQUFBO21CQUZLLEFBRUwsTUFHc0QscUJBQUEsY0FBQSxTQUNsRCxXQURrRCxBQUN0QztrQ0FEc0M7b0NBQUEsQUFFdEQ7QUFGc0Q7bUNBRXRELGNBQUEsWUFDTyxXQURQLEFBQ21CLEFBQ25COzZCQUNJLG1CQUFBOytCQUFNLE9BQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixPQUF6QixBQUFNLEFBQTBCO0FBSHBDO2tDQUFBO29DQUFBLEFBSUE7QUFKQTttQ0FJQSxjQUFBLE9BQ0UsV0FERixBQUNjO2tDQURkO29DQUFBO0FBQUE7bUJBTnNELEFBRXRELEFBSUEsT0FDZ0QsVUFQTSxBQU9OLEFBQUssaUJBWmhELEFBS2lELE1BTDFELEFBQVMsQUFnQlo7QUFqQkQsbUJBaUJPLEFBQUU7dUJBQUEsQUFBTyxBQUFNO0FBQ3pCOzs7OztBQXpDZSxBLEFBNENwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiJFOi9Vc2Vycy9KYW1lcy9XZWIgRGV2L1Byb2plY3RzL2h0ZG9jcy9GYWNlcyJ9