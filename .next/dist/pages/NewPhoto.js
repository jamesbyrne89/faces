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

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\htdocs\\Faces\\pages\\NewPhoto.js';


var NewPhoto = function (_Component) {
    (0, _inherits3.default)(NewPhoto, _Component);

    function NewPhoto(props) {
        (0, _classCallCheck3.default)(this, NewPhoto);

        var _this = (0, _possibleConstructorReturn3.default)(this, (NewPhoto.__proto__ || (0, _getPrototypeOf2.default)(NewPhoto)).call(this, props));

        console.log(_this.props);
        _this.state = {
            profileToAffect: null
        };
        return _this;
    }

    (0, _createClass3.default)(NewPhoto, [{
        key: 'setProfile',
        value: function setProfile() {
            this.setState({
                profileToAffect: this.props.profileToChange
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', { className: 'add-photo', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, _react2.default.createElement('h2', { className: 'modal-title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, 'Change photo'), _react2.default.createElement('button', { className: 'btn btn-option',
                onClick: function onClick() {
                    return _this2.props.handler(true, 'upload_photo');
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, 'Upload from Device', _react2.default.createElement('i', { className: 'fa fa-upload', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            })), _react2.default.createElement('button', { className: 'btn btn-option',
                onClick: function onClick() {
                    return _this2.props.handler(true, 'take_photo');
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'Take Using Webcam', _react2.default.createElement('i', { className: 'fa fa-camera', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            })));
        }
    }]);

    return NewPhoto;
}(_react.Component);

exports.default = NewPhoto;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxOZXdQaG90by5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlBsYXllciIsIk5ld1Bob3RvIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJwcm9maWxlVG9BZmZlY3QiLCJzZXRTdGF0ZSIsInByb2ZpbGVUb0NoYW5nZSIsImhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBSWIsQTtzQ0FDRjs7c0JBQUEsQUFBWSxPQUFPOzRDQUFBOzs4SUFBQSxBQUNULEFBQ047O2dCQUFBLEFBQVEsSUFBSSxNQUFaLEFBQWlCLEFBQ2pCO2NBQUEsQUFBSzs2QkFIVSxBQUdmLEFBQWEsQUFDUTtBQURSLEFBQ1Q7ZUFFUDs7Ozs7cUNBRVksQUFDVDtpQkFBQSxBQUFLO2lDQUNnQixLQUFBLEFBQUssTUFEMUIsQUFBYyxBQUNrQixBQUVuQztBQUhpQixBQUNWOzs7O2lDQUlDO3lCQUVMOzttQ0FDSSxjQUFBLFNBQUssV0FBTCxBQUFpQjs4QkFBakI7Z0NBQUEsQUFDWTtBQURaO2FBQUEsa0JBQ1ksY0FBQSxRQUFJLFdBQUosQUFBYzs4QkFBZDtnQ0FBQTtBQUFBO2VBRFosQUFDWSxBQUNBLGlDQUFBLGNBQUEsWUFBUSxXQUFSLEFBQWtCLEFBQ2xCO3lCQUFTLG1CQUFBOzJCQUFNLE9BQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixNQUF6QixBQUFNLEFBQXlCO0FBRHhDOzs4QkFBQTtnQ0FBQTtBQUFBO2VBRW1CLDJEQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FKL0IsQUFFWSxBQUVtQixBQUNuQjtBQURtQjtpQ0FDbkIsY0FBQSxZQUFRLFdBQVIsQUFBa0IsQUFDbEI7eUJBQVMsbUJBQUE7MkJBQU0sT0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLE1BQXpCLEFBQU0sQUFBeUI7QUFEeEM7OzhCQUFBO2dDQUFBO0FBQUE7ZUFJQSwwREFBRyxXQUFILEFBQWE7OEJBQWI7Z0NBVmhCLEFBQ0ksQUFLWSxBQUlBLEFBSW5CO0FBSm1COzs7Ozs7QUEzQkQsQSxBQWtDdkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTmV3UGhvdG8uanMiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9odGRvY3MvRmFjZXMifQ==