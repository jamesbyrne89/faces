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

var _Login = require('../pages/Login');

var _Login2 = _interopRequireDefault(_Login);

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

var _Data = require('../models/Data');

var _Data2 = _interopRequireDefault(_Data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\App.js';


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
        key: 'componentWillMount',
        value: function componentWillMount() {
            _Data2.default.syncState('teams', {
                context: this,
                state: 'teams'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                teams = _state.teams,
                locations = _state.locations,
                modal = _state.modal;
            // const allEmployees = teams.map(team => team.profiles)

            var modalHandler = this.modalHandler.bind(this);
            var filterTeams = this.filterTeams.bind(this);
            console.log(teams);
            return _react2.default.createElement('div', { className: 'app-container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                }
            }, _react2.default.createElement(_Login2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                }
            }));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxBcHAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMb2dpbiIsIk1vZGFsIiwiUHJvZmlsZUNhcmQiLCJMb2NhdGlvbnNEcm9wZG93biIsIkhlYWRlciIsIkxpbmsiLCJiYXNlIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInRlYW1zIiwibmFtZSIsInByb2ZpbGVzIiwidGl0bGUiLCJlbWFpbCIsInRlYW0iLCJwaG90byIsImxvY2F0aW9ucyIsImxpc3QiLCJjdXJyZW50IiwibW9kYWwiLCJvcGVuIiwiY29udGVudCIsInRlYW1OYW1lIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJyZWR1Y2UiLCJjb25jYXQiLCJvcGVuU3RhdGUiLCJzZXRTdGF0ZSIsInN5bmNTdGF0ZSIsImNvbnRleHQiLCJtb2RhbEhhbmRsZXIiLCJiaW5kIiwiZmlsdGVyVGVhbXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBdUI7Ozs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7Ozs7OztJQUdYLEE7aUNBQ0Y7O2lCQUFBLEFBQVksT0FBTzs0Q0FBQTs7b0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7c0JBRUssTUFBRixBQUFRLEFBQ0o7OzBCQUFXLEFBQ0QsQUFDTjsyQkFGTyxBQUVBLEFBQ1A7MkJBSE8sQUFHQSxBQUNQOzBCQUpPLEFBSUQsQUFDTjsyQkFMTSxBQUFDLEFBS0E7QUFMQSxBQUNQLGlCQURNOzBCQU9WLEFBQ1UsQUFDTjsyQkFGSixBQUVXLEFBQ1A7MkJBSEosQUFHVyxBQUNQOzBCQUpKLEFBSVUsQUFDTjsyQkFaTSxBQU9WLEFBS1c7QUFMWCxBQUNJOzBCQU1KLEFBQ1UsQUFDTjsyQkFGSixBQUVXLEFBQ1A7MkJBSEosQUFHVyxBQUNQOzBCQUpKLEFBSVUsQUFDTjsyQkFuQk0sQUFjVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBMUJNLEFBcUJWLEFBS1c7QUFMWCxBQUNJOzBCQU1KLEFBQ1UsQUFDTjsyQkFGSixBQUVXLEFBQ1A7MkJBSEosQUFHVyxBQUNQOzBCQUpKLEFBSVUsQUFDTjsyQkFqQ00sQUE0QlYsQUFLVztBQUxYLEFBQ0k7MEJBTUosQUFDVSxBQUNOOzJCQUZKLEFBRVcsQUFDUDsyQkFISixBQUdXLEFBQ1A7MEJBSkosQUFJVSxBQUNOOzJCQXhDTSxBQW1DVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBL0NNLEFBMENWLEFBS1c7QUFMWCxBQUNJOzBCQU1KLEFBQ1UsQUFDTjsyQkFGSixBQUVXLEFBQ1A7MkJBSEosQUFHVyxBQUNQOzBCQUpKLEFBSVUsQUFDTjsyQkF0RE0sQUFpRFYsQUFLVztBQUxYLEFBQ0k7MEJBTUosQUFDVSxBQUNOOzJCQUZKLEFBRVcsQUFDUDsyQkFISixBQUdXLEFBQ1A7MEJBSkosQUFJVSxBQUNOOzJCQS9ETCxBQUNILEFBQ2MsQUF3RFYsQUFLVztBQUxYLEFBQ0k7QUExRFIsYUFERztzQkFrRUgsQUFDVSxBQUNOOzswQkFBVyxBQUNELEFBQ047MkJBRk8sQUFFQSxBQUNQOzJCQUhPLEFBR0EsQUFDUDswQkFKTyxBQUlELEFBQ047MkJBekVMLEFBa0VILEFBRWMsQUFBQyxBQUtBO0FBTEEsQUFDUCxpQkFETTtBQUZkLEFBQ0k7c0JBU0osQUFDVSxBQUNOOzBCQTlFRCxBQTRFSCxBQUVjO0FBRmQsQUFDSTtzQkFHSixBQUNVLEFBQ047MEJBbkZDLEFBQ0YsQUFnRkgsQUFFYyxBQUd0QjtBQUxRLEFBQ0k7O3NCQUtGLENBQUEsQUFDRixVQURFLEFBRUYsb0JBRkUsQUFHRixpQkFIRSxBQUlGLG1CQUxHLEFBQ0QsQUFLRixBQUVBO3lCQTlGSyxBQXNGRixBQVFNLEFBRWI7QUFWTyxBQUNQOztzQkFTTyxBQUNELEFBQ0Y7eUJBcEdPLEFBRWYsQUFBYSxBQWdHRixBQUVNO0FBRk4sQUFDUDtBQWpHUyxBQUNUO2VBb0dYOzs7OztvQyxBQUVXLE1BQU07Z0JBQUEsQUFDUixRQUFVLEtBREYsQUFDTyxNQURQLEFBQ1IsQUFDTjs7Z0JBQUksV0FBVyxLQUFmLEFBQWUsQUFBSyxBQUNwQjt5QkFBTyxBQUFNLE9BQU8sZ0JBQUE7dUJBQVMsS0FBRCxBQUFNLEtBQU4sQUFBWSxrQkFBcEIsQUFBc0M7QUFBMUQsQUFBTyxBQUNWLGFBRFU7Ozs7MENBR087Z0JBQUEsQUFDUixRQUFVLEtBREYsQUFDTyxNQURQLEFBQ1IsQUFDUjs7eUJBQU8sQUFBTSxPQUFPLFVBQUEsQUFBQyxPQUFELEFBQVEsTUFBUyxBQUNqQzt1QkFBTyxNQUFBLEFBQU0scURBQVUsS0FBdkIsQUFBTyxBQUFxQixBQUM3QjtBQUZJLGFBQUEsRUFBUCxBQUFPLEFBRUYsQUFDTjs7OztxQ0FFWSxBLFcsQUFBVyxTQUFTLEFBQzdCO2lCQUFBLEFBQUs7OzBCQUNNLEFBQ0csQUFDTjs2QkFIUixBQUFjLEFBQ0gsQUFFTSxBQUdwQjtBQUxjLEFBQ0g7QUFGTSxBQUNWOzs7OzZDQU9hLEFBQ2pCOzJCQUFBLEFBQUssVUFBTCxBQUFlO3lCQUFTLEFBQ1gsQUFDVDt1QkFGSixBQUF3QixBQUViLEFBRWQ7QUFKMkIsQUFDcEI7Ozs7aUNBS0M7eUJBQytCLEtBRC9CLEFBQ29DO2dCQURwQyxBQUNHLGVBREgsQUFDRztnQkFESCxBQUNVLG1CQURWLEFBQ1U7Z0JBRFYsQUFDcUIsZUFEckIsQUFDcUIsQUFDM0I7QUFDQzs7Z0JBQU0sZUFBZSxLQUFBLEFBQUssYUFBTCxBQUFrQixLQUF2QyxBQUFxQixBQUF1QixBQUM1QztnQkFBTSxjQUFjLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXJDLEFBQW9CLEFBQXNCLEFBQzFDO29CQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7bUNBQ1EsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUVJO0FBRko7YUFBQSxrQkFFSSxBQUFDOzs4QkFBRDtnQ0FIWixBQUNRLEFBRUksQUFJZjtBQUplO0FBQUE7Ozs7O0FBaEpFLEEsQUF1SmxCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZVJvb3QiOiJFOi9Vc2Vycy9KYW1lcy9XZWIgRGV2L1Byb2plY3RzL0ZhY2VzIn0=