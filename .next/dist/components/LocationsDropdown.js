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
            console.log(this.props);
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
                    lineNumber: 28
                }
            }, _react2.default.createElement("button", { className: "btn location", onClick: this.showHide.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement("i", { className: "fa fa-map-marker", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }), " London"), _react2.default.createElement("div", { className: "menu-dropdown__wrapper", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement("div", { className: "menu-dropdown", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement("ul", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, this.getLocationsList().map(function (loc) {
                return _react2.default.createElement("li", { key: loc, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    }
                }, _react2.default.createElement("a", { className: "btn", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    }
                }, loc));
            })))));
        }
    }]);

    return LocationsDropdown;
}(_react.Component);

exports.default = LocationsDropdown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExvY2F0aW9uc0Ryb3Bkb3duLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTG9jYXRpb25zRHJvcGRvd24iLCJwcm9wcyIsInN0YXRlIiwidmlzaWJsZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9ucyIsImxpc3QiLCJmaWx0ZXIiLCJsb2MiLCJjdXJyZW50IiwibG9jYXRpb25MaXN0IiwiZ2V0TG9jYXRpb25zTGlzdCIsImJpbmQiLCJzaG93SGlkZSIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJQUdWLEE7K0NBQ0Y7OytCQUFBLEFBQVksT0FBTzs0Q0FBQTs7Z0tBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7cUJBRlUsQUFFZixBQUFhLEFBQ0E7QUFEQSxBQUNUO2VBRVA7Ozs7O21DQUVVLEFBQ1A7aUJBQUEsQUFBSzt5QkFDUSxDQUFDLEtBQUEsQUFBSyxNQURuQixBQUFjLEFBQ1csQUFFNUI7QUFIaUIsQUFDVjs7OzsyQ0FJVyxBQUNmO29CQUFBLEFBQVEsSUFBSSxLQURHLEFBQ2YsQUFBaUI7Z0JBREYsQUFFUCxZQUFjLEtBRlAsQUFFWSxNQUZaLEFBRVAsQUFDUjs7NkJBQU8sQUFBVSxLQUFWLEFBQWUsT0FBTyxlQUFBO3VCQUFPLFFBQVEsVUFBZixBQUF5QjtBQUF0RCxBQUFPLEFBQ1YsYUFEVTs7OztpQ0FJRixBQUNOO2dCQUFNLGVBQWUsS0FBQSxBQUFLLGlCQUFMLEFBQXNCLEtBQTNDLEFBQXFCLEFBQTJCLEFBQ25EO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0IsZ0JBQWUsU0FBUyxLQUFBLEFBQUssU0FBTCxBQUFjLEtBQXhELEFBQTBDLEFBQW1COzhCQUE3RDtnQ0FBQSxBQUFvRTtBQUFwRTtvREFBdUUsV0FBSCxBQUFhOzhCQUFiO2dDQUFwRSxBQUFvRTtBQUFBO2dCQUR4RSxBQUNJLEFBRUEsNEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNRO0FBRFI7K0JBQ1EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSztBQUFMO0FBQUEsb0JBQUssQUFBSyxtQkFBTCxBQUF3QixJQUFJLGVBQUE7dUNBQUssY0FBQSxRQUFJLEtBQUosQUFBUztrQ0FBVDtvQ0FBQSxBQUFjO0FBQWQ7aUJBQUEsa0JBQWMsY0FBQSxPQUFHLFdBQUgsQUFBYTtrQ0FBYjtvQ0FBQSxBQUFvQjtBQUFwQjttQkFBbkIsQUFBSyxBQUFjO0FBTnBFLEFBQ0ksQUFHSSxBQUNBLEFBQ1EsQUFBSyxBQUt4Qjs7Ozs7QUFsQytCLEEsQUFxQ2hDOztrQkFBQSxBQUFlIiwiZmlsZSI6IkxvY2F0aW9uc0Ryb3Bkb3duLmpzIiwic291cmNlUm9vdCI6IkU6L1VzZXJzL0phbWVzL1dlYiBEZXYvUHJvamVjdHMvRmFjZXMifQ==