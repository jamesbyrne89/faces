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

var _Player = require('../components/Player');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\UploadPhoto.js';


var TakePhoto = function (_Component) {
    (0, _inherits3.default)(TakePhoto, _Component);

    function TakePhoto(props) {
        (0, _classCallCheck3.default)(this, TakePhoto);

        return (0, _possibleConstructorReturn3.default)(this, (TakePhoto.__proto__ || (0, _getPrototypeOf2.default)(TakePhoto)).call(this, props));
    }

    (0, _createClass3.default)(TakePhoto, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            return _react2.default.createElement('div', { className: 'upload-photo', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement('h2', { className: 'modal-title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, 'Upload photo'), _react2.default.createElement('button', { className: 'btn btn-navigation', onClick: function onClick() {
                    return props.handler(true, 'new_photo');
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, ' Go Back ', _react2.default.createElement('i', { className: 'fa fa-angle-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, ' ')));
        }
    }]);

    return TakePhoto;
}(_react.Component);

exports.default = TakePhoto;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxVcGxvYWRQaG90by5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlBsYXllciIsIlRha2VQaG90byIsInByb3BzIiwiaGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFJYixBO3VDQUNGOzt1QkFBQSxBQUFZLE9BQU87NENBQUE7OzJJQUFBLEFBQ1QsQUFDRzs7Ozs7aUNBRUosQUFDTDtnQkFBTSxRQUFRLEtBQWQsQUFBbUIsQUFDbkI7bUNBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsaUNBQUEsY0FBQSxZQUFRLFdBQVIsQUFBa0Isc0JBQXFCLFNBQVMsbUJBQUE7MkJBQU0sTUFBQSxBQUFNLFFBQU4sQUFBYyxNQUFwQixBQUFNLEFBQW9CO0FBQTFFOzhCQUFBO2dDQUFBO0FBQUE7ZUFBaUcsNkJBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBSHpHLEFBQ0ksQUFFSSxBQUFpRyxBQUc1Rzs7Ozs7QUFibUIsQSxBQWdCeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVXBsb2FkUGhvdG8uanMiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9GYWNlcyJ9