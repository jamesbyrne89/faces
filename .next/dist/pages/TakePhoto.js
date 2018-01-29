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

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\htdocs\\Faces\\pages\\TakePhoto.js';


var TakePhoto = function (_Component) {
    (0, _inherits3.default)(TakePhoto, _Component);

    function TakePhoto(props) {
        (0, _classCallCheck3.default)(this, TakePhoto);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TakePhoto.__proto__ || (0, _getPrototypeOf2.default)(TakePhoto)).call(this, props));

        _this.state = {
            media: {
                available: null,
                src: ''
            }
        };
        _this.getVideo();
        return _this;
    }

    (0, _createClass3.default)(TakePhoto, [{
        key: 'getVideo',
        value: function getVideo() {
            var _this2 = this;

            navigator.mediaDevices.getUserMedia({ audio: false, video: true }).then(function (stream) {
                /* use the stream */
                _this2.setState({
                    media: {
                        available: true,
                        src: window.URL.createObjectURL(stream)
                    }
                });
            }).catch(function (err) {
                /* handle the error */
                console.error(err);
                _this2.setState({
                    media: {
                        available: false,
                        src: ''
                    }
                });
            });
        }
    }, {
        key: 'handleMediaError',
        value: function handleMediaError() {
            return this.state.media.available ? "" : _react2.default.createElement('div', { className: 'error', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, ' No media detected ');
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var errorMsg = this.handleMediaError();

            return _react2.default.createElement('div', { className: 'take-photo', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_Player2.default, { className: 'player',
                src: this.state.media.src,
                errorMsg: errorMsg,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }), _react2.default.createElement('aside', { className: 'take-photo__controls', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('button', { className: 'btn btn-navigation', onClick: function onClick() {
                    return props.handler(true, 'new_photo');
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, ' Go Back ', _react2.default.createElement('i', { className: 'fa fa-angle-right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, ' ')), _react2.default.createElement('div', { className: 'wrapper', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('button', { className: 'btn btn-option', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, ' Take Photo ', _react2.default.createElement('i', { className: 'fa fa-camera', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, ' ')), _react2.default.createElement('button', { className: 'btn btn-option', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, ' Save Photo ', _react2.default.createElement('i', { className: 'fa fa-save', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, ' ')), _react2.default.createElement('button', { className: 'btn btn-option', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, ' Download ', _react2.default.createElement('i', { className: 'fa fa-download', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, ' ')), _react2.default.createElement('button', { className: 'btn btn-cancel', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, ' Discard ', _react2.default.createElement('i', { className: 'fa fa-trash', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, ' ')))));
        }
    }]);

    return TakePhoto;
}(_react.Component);

exports.default = TakePhoto;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxUYWtlUGhvdG8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJQbGF5ZXIiLCJUYWtlUGhvdG8iLCJwcm9wcyIsInN0YXRlIiwibWVkaWEiLCJhdmFpbGFibGUiLCJzcmMiLCJnZXRWaWRlbyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJ0aGVuIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzdHJlYW0iLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImVyciIsImVycm9yTXNnIiwiaGFuZGxlTWVkaWFFcnJvciIsImhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFJYjt1Q0FDRjs7dUJBQUEsQUFBWSxPQUFPOzRDQUFBOztnSkFBQSxBQUNULEFBQ047O2NBQUEsQUFBSzs7MkJBQ00sQUFDUSxBQUNYO3FCQUhSLEFBQWEsQUFDRixBQUVFLEFBR2I7QUFMVyxBQUNIO0FBRkssQUFDVDtjQUhXLEFBUWYsQUFBSztlQUNSOzs7OzttQ0FFVTt5QkFDUDs7c0JBQUEsQUFBVSxhQUFWLEFBQXVCLGFBQWEsRUFBRSxPQUFGLEFBQVMsT0FBTyxPQUFwRCxBQUFvQyxBQUF1QixRQUEzRCxBQUNLLEtBQUssa0JBQVUsQUFDWjtBQUNBO3VCQUFBLEFBQUs7O21DQUNNLEFBQ1EsQUFDWDs2QkFBSyxPQUFBLEFBQU8sSUFBUCxBQUFXLGdCQUh4QixBQUFjLEFBQ0gsQUFFRSxBQUEyQixBQUczQztBQUxjLEFBQ0g7QUFGTSxBQUNWO0FBSlosZUFBQSxBQVVLLE1BQU0sZUFBTyxBQUNWO0FBQ0E7d0JBQUEsQUFBUSxNQUFSLEFBQWMsQUFDZDt1QkFBQSxBQUFLOzttQ0FDTSxBQUNRLEFBQ1g7NkJBSFIsQUFBYyxBQUNILEFBRUUsQUFHaEI7QUFMYyxBQUNIO0FBRk0sQUFDVjtBQWRaLEFBb0JIOzs7OzJDQUdrQixBQUNmO21CQUFPLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixZQUFqQixBQUE2QixxQkFBSyxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBO0FBQUE7YUFBQSxFQUF6QyxBQUF5QyxBQUM1Qzs7OztpQ0FFUSxBQUNMO2dCQUFNLFFBQVEsS0FBZCxBQUFtQixBQUNuQjtnQkFBTSxXQUFTLEtBQWYsQUFBZSxBQUFLLEFBR3BCOzttQ0FDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLEFBQUMsa0NBQU8sV0FBUixBQUFrQixBQUNsQjtxQkFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BRGpCLEFBQ3VCLEFBQ3ZCOzBCQUZBLEFBRVc7OzhCQUZYO2dDQURKLEFBQ0ksQUFJQTtBQUpBO2dDQUlBLGNBQUEsV0FBTyxXQUFQLEFBQWlCOzhCQUFqQjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQSxZQUFRLFdBQVIsQUFBa0Isc0JBQXFCLFNBQVMsbUJBQUE7MkJBQU0sTUFBQSxBQUFNLFFBQU4sQUFBYyxNQUFwQixBQUFNLEFBQW9CO0FBQTFFOzhCQUFBO2dDQUFBO0FBQUE7ZUFBaUcsNkJBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBRGpHLEFBQ0EsQUFBaUcsQUFDN0YsdUJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0I7OEJBQWxCO2dDQUFBO0FBQUE7ZUFBK0MsZ0NBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBRG5ELEFBQ0ksQUFBK0MsQUFDL0MsdUJBQUEsY0FBQSxZQUFRLFdBQVIsQUFBa0I7OEJBQWxCO2dDQUFBO0FBQUE7ZUFBK0MsZ0NBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBRm5ELEFBRUksQUFBK0MsQUFDL0MsdUJBQUEsY0FBQSxZQUFRLFdBQVIsQUFBa0I7OEJBQWxCO2dDQUFBO0FBQUE7ZUFBNkMsOEJBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBSGpELEFBR0ksQUFBNkMsQUFDN0MsdUJBQUEsY0FBQSxZQUFRLFdBQVIsQUFBa0I7OEJBQWxCO2dDQUFBO0FBQUE7ZUFBNEMsNkJBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBWjVELEFBQ0ksQUFLSSxBQUVJLEFBSUksQUFBNEMsQUFLL0Q7Ozs7O0FBOURtQixBLEFBaUV4Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJUYWtlUGhvdG8uanMiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9odGRvY3MvRmFjZXMifQ==