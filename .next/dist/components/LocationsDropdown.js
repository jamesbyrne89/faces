"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\Faces\\components\\LocationsDropdown.js";


var LocationsDropdown = function (_Component) {
    (0, _inherits3.default)(LocationsDropdown, _Component);

    function LocationsDropdown(props) {
        (0, _classCallCheck3.default)(this, LocationsDropdown);

        var _this = (0, _possibleConstructorReturn3.default)(this, (LocationsDropdown.__proto__ || (0, _getPrototypeOf2.default)(LocationsDropdown)).call(this, props));

        _this.state = {
            visible: false
        };
        return _this;
    }

    (0, _createClass3.default)(LocationsDropdown, [{
        key: "showHide",
        value: function showHide() {
            this.setState({
                visible: !this.state.visible
            });
        }
    }, {
        key: "getLocationsList",
        value: function getLocationsList() {
            var locations = this.props.locations;

            return locations.list.filter(function (loc) {
                return loc !== locations.current;
            });
        }
    }, {
        key: "render",
        value: function render() {
            var locationList = this.getLocationsList.bind(this);
            return _react2.default.createElement("li", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement("button", { className: "btn location", onClick: this.showHide.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement("i", { className: "fa fa-map-marker", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }), " London"), _react2.default.createElement("div", { className: "menu-dropdown__wrapper", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement("div", { className: "menu-dropdown", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement("ul", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, this.getLocationsList().map(function (loc) {
                return _react2.default.createElement("li", { key: loc, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                }, _react2.default.createElement("a", { className: "btn", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                }, loc));
            })))));
        }
    }]);

    return LocationsDropdown;
}(_react.Component);

exports.default = LocationsDropdown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExvY2F0aW9uc0Ryb3Bkb3duLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTG9jYXRpb25zRHJvcGRvd24iLCJwcm9wcyIsInN0YXRlIiwidmlzaWJsZSIsInNldFN0YXRlIiwibG9jYXRpb25zIiwibGlzdCIsImZpbHRlciIsImxvYyIsImN1cnJlbnQiLCJsb2NhdGlvbkxpc3QiLCJnZXRMb2NhdGlvbnNMaXN0IiwiYmluZCIsInNob3dIaWRlIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0ksQUFHVjsrQ0FDRjs7K0JBQUEsQUFBWSxPQUFPOzRDQUFBOztnS0FBQSxBQUNULEFBQ047O2NBQUEsQUFBSztxQkFGVSxBQUVmLEFBQWEsQUFDQTtBQURBLEFBQ1Q7ZUFFUDs7Ozs7bUNBRVUsQUFDUDtpQkFBQSxBQUFLO3lCQUNRLENBQUMsS0FBQSxBQUFLLE1BRG5CLEFBQWMsQUFDVyxBQUU1QjtBQUhpQixBQUNWOzs7OzJDQUlXO2dCQUFBLEFBQ1AsWUFBYyxLQURQLEFBQ1ksTUFEWixBQUNQLEFBQ1I7OzZCQUFPLEFBQVUsS0FBVixBQUFlLE9BQU8sZUFBQTt1QkFBTyxRQUFRLFVBQWYsQUFBeUI7QUFBdEQsQUFBTyxBQUNWLGFBRFU7Ozs7aUNBSUYsQUFDTjtnQkFBTSxlQUFlLEtBQUEsQUFBSyxpQkFBTCxBQUFzQixLQUEzQyxBQUFxQixBQUEyQixBQUNuRDttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUEsWUFBUSxXQUFSLEFBQWtCLGdCQUFlLFNBQVMsS0FBQSxBQUFLLFNBQUwsQUFBYyxLQUF4RCxBQUEwQyxBQUFtQjs4QkFBN0Q7Z0NBQUEsQUFBb0U7QUFBcEU7b0RBQXVFLFdBQUgsQUFBYTs4QkFBYjtnQ0FBcEUsQUFBb0U7QUFBQTtnQkFEeEUsQUFDSSxBQUVBLDRCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDQTtBQURBOytCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDUTtBQURSOytCQUNRLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLG9CQUFLLEFBQUssbUJBQUwsQUFBd0IsSUFBSSxlQUFBO3VDQUFLLGNBQUEsUUFBSSxLQUFKLEFBQVM7a0NBQVQ7b0NBQUEsQUFBYztBQUFkO2lCQUFBLGtCQUFjLGNBQUEsT0FBRyxXQUFILEFBQWE7a0NBQWI7b0NBQUEsQUFBb0I7QUFBcEI7bUJBQW5CLEFBQUssQUFBYztBQU5wRSxBQUNJLEFBR0ksQUFDQSxBQUNRLEFBQUssQUFLeEI7Ozs7O0FBakMrQixBLEFBb0NoQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJMb2NhdGlvbnNEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiJFOi9Vc2Vycy9KYW1lcy9XZWIgRGV2L1Byb2plY3RzL0ZhY2VzIn0=