'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _Dashboard = require('../components/Dashboard');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Modal = require('../components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _ProfileCard = require('../components/ProfileCard');

var _ProfileCard2 = _interopRequireDefault(_ProfileCard);

var _LocationsDropdown = require('../components/LocationsDropdown');

var _LocationsDropdown2 = _interopRequireDefault(_LocationsDropdown);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\htdocs\\Faces\\pages\\App.js';


var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = {
            teams: [{ name: "Digital",
                profiles: [{
                    name: "James Byrne",
                    title: "Junior Web Developer",
                    email: "james.byrne@warehouse.co.uk",
                    team: "Digital",
                    photo: "http://via.placeholder.com/250x250"
                }, {
                    name: "James Byrne",
                    title: "Junior Web Developer",
                    email: "james.byrne@warehouse.co.uk",
                    team: "Digital",
                    photo: "http://via.placeholder.com/250x250"
                }, {
                    name: "James Byrne",
                    title: "Junior Web Developer",
                    email: "james.byrne@warehouse.co.uk",
                    team: "Digital",
                    photo: "http://via.placeholder.com/250x250"
                }, {
                    name: "James Byrne",
                    title: "Junior Web Developer",
                    email: "james.byrne@warehouse.co.uk",
                    team: "Digital",
                    photo: "http://via.placeholder.com/250x250"
                }, {
                    name: "James Byrne",
                    title: "Junior Web Developer",
                    email: "james.byrne@warehouse.co.uk",
                    team: "Digital",
                    photo: "http://via.placeholder.com/250x250"
                }, {
                    name: "James Byrne",
                    title: "Junior Web Developer",
                    email: "james.byrne@warehouse.co.uk",
                    team: "Digital",
                    photo: "http://via.placeholder.com/250x250"
                }, {
                    name: "James Byrne",
                    title: "Junior Web Developer",
                    email: "james.byrne@warehouse.co.uk",
                    team: "Digital",
                    photo: "http://via.placeholder.com/250x250"
                }, {
                    name: "Jotis Moore",
                    title: "Lead Developer",
                    email: "jotis.moore@warehouse.co.uk",
                    team: "Digital",
                    photo: "http://via.placeholder.com/250x250"
                }, {
                    name: "Alix Burn",
                    title: "Head Of Digital",
                    email: "alixansDra.burn@warehouse.co.uk",
                    team: "Digital",
                    photo: "http://via.placeholder.com/250x250"
                }]
            }, {
                name: "Brand Comms",
                profiles: [{
                    name: "Jill Gate",
                    title: "Brand Comms Director",
                    email: "jill.gate@warehouse.co.uk",
                    team: "Brand Comms",
                    photo: "http://via.placeholder.com/250x250"
                }]
            }, {
                name: "Retail",
                profiles: []
            }, {
                name: "Buying",
                profiles: []
            }],
            locations: {
                list: ["London", "Stanton Harcourt", "International", "International 2", "International 3"],
                current: "London"
            },
            modal: {
                open: false,
                content: null
            }
        };
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: 'filterTeams',
        value: function filterTeams(name) {
            var teams = this.state.teams;

            var teamName = name.toLowerCase();
            return teams.filter(function (team) {
                return team.name.toLowerCase() === teamName;
            });
        }
    }, {
        key: 'getAllEmployees',
        value: function getAllEmployees() {
            var teams = this.state.teams;

            return teams.reduce(function (teams, team) {
                return teams.concat.apply(teams, (0, _toConsumableArray3.default)(team.profiles));
            }, []);
        }
    }, {
        key: 'modalHandler',
        value: function modalHandler(openState, content) {
            this.setState({
                modal: {
                    open: openState,
                    content: content
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                teams = _state.teams,
                locations = _state.locations,
                modal = _state.modal;

            var allEmployees = teams.map(function (team) {
                return team.profiles;
            });
            var modalHandler = this.modalHandler.bind(this);
            var filterTeams = this.filterTeams.bind(this);

            return _react2.default.createElement('div', { className: "app-container" + (modal.open ? ' modal-opened' : ''), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            }, _react2.default.createElement(_Header2.default, { teams: teams, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            }), _react2.default.createElement('main', { className: 'app-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                }
            }, _react2.default.createElement('header', { className: 'controls-bar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            }, _react2.default.createElement('ul', { className: 'controls-bar__controls', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                }
            }, 'Warehouse Fashions'), _react2.default.createElement(_LocationsDropdown2.default, { locations: locations, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, _react2.default.createElement('button', { className: 'btn', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, 'Sign Out')))), _react2.default.createElement(_Dashboard2.default, { profiles: allEmployees, modalHandler: this.modalHandler, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }), '} />', _react2.default.createElement(_Modal2.default, { open: this.state.modal.open, content: this.state.modal.content, handler: modalHandler, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            })));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxBcHAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJEYXNoYm9hcmQiLCJNb2RhbCIsIlByb2ZpbGVDYXJkIiwiTG9jYXRpb25zRHJvcGRvd24iLCJIZWFkZXIiLCJMaW5rIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInRlYW1zIiwibmFtZSIsInByb2ZpbGVzIiwidGl0bGUiLCJlbWFpbCIsInRlYW0iLCJwaG90byIsImxvY2F0aW9ucyIsImxpc3QiLCJjdXJyZW50IiwibW9kYWwiLCJvcGVuIiwiY29udGVudCIsInRlYW1OYW1lIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJyZWR1Y2UiLCJjb25jYXQiLCJvcGVuU3RhdGUiLCJzZXRTdGF0ZSIsImFsbEVtcGxveWVlcyIsIm1hcCIsIm1vZGFsSGFuZGxlciIsImJpbmQiLCJmaWx0ZXJUZWFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQXVCOzs7O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7Ozs7SSxBQUdEO2lDQUNGOztpQkFBQSxBQUFZLE9BQU87NENBQUE7O29JQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO3NCQUVLLE1BQUYsQUFBUSxBQUNKOzswQkFBVyxBQUNELEFBQ047MkJBRk8sQUFFQSxBQUNQOzJCQUhPLEFBR0EsQUFDUDswQkFKTyxBQUlELEFBQ047MkJBTE0sQUFBQyxBQUtBO0FBTEEsQUFDUCxpQkFETTswQkFPVixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBWk0sQUFPVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFD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T0FBTixBQUFhLGtCQUFoRCxBQUFnQixBQUFrRDs4QkFBbEU7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksQUFBQyxrQ0FBTyxPQUFSLEFBQWU7OEJBQWY7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7OEJBQWhCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFlBQVEsV0FBUixBQUFrQjs4QkFBbEI7Z0NBQUEsQUFFSTtBQUZKOytCQUVJLGNBQUEsUUFBSSxXQUFKLEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx1Q0FBQSxBQUFDLDZDQUFrQixXQUFuQixBQUE4Qjs4QkFBOUI7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsK0JBQUksY0FBQSxZQUFRLFdBQVIsQUFBa0I7OEJBQWxCO2dDQUFBO0FBQUE7ZUFOaEIsQUFDSSxBQUVJLEFBR0ksQUFBSSxBQUdaLGdDQUFBLEFBQUMscUNBQVUsVUFBWCxBQUFxQixjQUFjLGNBQWMsS0FBakQsQUFBc0Q7OEJBQXREO2dDQVRKLEFBU0k7QUFBQTtnQkFDQSx3QkFBQSxBQUFDLGlDQUFNLE1BQU0sS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUF4QixBQUE4QixNQUFNLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxNQUF4RCxBQUE4RCxTQUFTLFNBQXZFLEFBQWdGOzhCQUFoRjtnQ0FiaEIsQUFDUSxBQUVJLEFBVUksQUFJbkI7QUFKbUI7Ozs7OztBQXZKRixBLEFBOEpsQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9odGRvY3MvRmFjZXMifQ==