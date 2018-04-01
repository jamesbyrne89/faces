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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Modal = require('../components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _ProfileCard = require('../components/ProfileCard');

var _ProfileCard2 = _interopRequireDefault(_ProfileCard);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _Data = require('../models/Data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\App.js';


var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = {
            authenticated: false,
            admin: false,
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
        key: 'signOut',
        value: function signOut() {
            this.setState({ authenticated: false });
        }
    }, {
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
            _Data.base.syncState('teams', {
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
                modal = _state.modal,
                authenticated = _state.authenticated;
            // const allEmployees = teams.map(team => team.profiles)

            var modalHandler = this.modalHandler.bind(this);
            var filterTeams = this.filterTeams.bind(this);
            var signOut = this.signOut.bind(this);
            return authenticated ? _react2.default.createElement(_Layout2.default, { teams: teams, signOut: signOut, locations: locations, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }) : _react2.default.createElement(_Login2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            });
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxBcHAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMb2dpbiIsIkxheW91dCIsIk1vZGFsIiwiUHJvZmlsZUNhcmQiLCJMaW5rIiwiYmFzZSIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJhdXRoZW50aWNhdGVkIiwiYWRtaW4iLCJ0ZWFtcyIsIm5hbWUiLCJwcm9maWxlcyIsInRpdGxlIiwiZW1haWwiLCJ0ZWFtIiwicGhvdG8iLCJsb2NhdGlvbnMiLCJsaXN0IiwiY3VycmVudCIsIm1vZGFsIiwib3BlbiIsImNvbnRlbnQiLCJzZXRTdGF0ZSIsInRlYW1OYW1lIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJyZWR1Y2UiLCJjb25jYXQiLCJvcGVuU3RhdGUiLCJzeW5jU3RhdGUiLCJjb250ZXh0IiwibW9kYWxIYW5kbGVyIiwiYmluZCIsImZpbHRlclRlYW1zIiwic2lnbk91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTzs7OztBQUNQLEFBQVMsQUFBWTs7Ozs7OztJLEFBR2Y7aUNBQ0Y7O2lCQUFBLEFBQVksT0FBTzs0Q0FBQTs7b0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7MkJBQVEsQUFDTSxBQUNmO21CQUZTLEFBRUYsQUFDUDtzQkFDTSxNQUFGLEFBQVEsQUFDSjs7MEJBQVcsQUFDRCxBQUNOOzJCQUZPLEFBRUEsQUFDUDsyQkFITyxBQUdBLEFBQ1A7MEJBSk8sQUFJRCxBQUNOOzJCQUxNLEFBQUMsQUFLQTtBQUxBLEFBQ1AsaUJBRE07MEJBT1YsQUFDVSxBQUNOOzJCQUZKLEFBRVcsQUFDUDsyQkFISixBQUdXLEFBQ1A7MEJBSkosQUFJVSxBQUNOOzJCQVpNLEFBT1YsQUFLVztBQUxYLEFBQ0k7MEJBTUosQUFDVSxBQUNOOzJCQUZKLEFBRVcsQUFDUDsyQkFISixBQUdXLEFBQ1A7MEJBSkosQUFJVSxBQUNOOzJCQW5CTSxBQWNWLEFBS1c7QUFMWCxBQUNJOzBCQU1KLEFBQ1UsQUFDTjsyQkFGSixBQUVXLEFBQ1A7MkJBSEosQUFHVyxBQUNQOzBCQUpKLEFBSVUsQUFDTjsyQkExQk0sQUFxQlYsQUFLVztBQUxYLEFBQ0k7MEJBTUosQUFDVSxBQUNOOzJCQUZKLEFBRVcsQUFDUDsyQkFISixBQUdXLEFBQ1A7MEJBSkosQUFJVSxBQUNOOzJCQWpDTSxBQTRCVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBeENNLEFBbUNWLEFBS1c7QUFMWCxBQUNJOzBCQU1KLEFBQ1UsQUFDTjsyQkFGSixBQUVXLEFBQ1A7MkJBSEosQUFHVyxBQUNQOzBCQUpKLEFBSVUsQUFDTjsyQkEvQ00sQUEwQ1YsQUFLVztBQUxYLEFBQ0k7MEJBTUosQUFDVSxBQUNOOzJCQUZKLEFBRVcsQUFDUDsyQkFISixBQUdXLEFBQ1A7MEJBSkosQUFJVSxBQUNOOzJCQXRETSxBQWlEVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBL0RMLEFBQ0gsQUFDYyxBQXdEVixBQUtXO0FBTFgsQUFDSTtBQTFEUixhQURHO3NCQWtFSCxBQUNVLEFBQ047OzBCQUFXLEFBQ0QsQUFDTjsyQkFGTyxBQUVBLEFBQ1A7MkJBSE8sQUFHQSxBQUNQOzBCQUpPLEFBSUQsQUFDTjsyQkF6RUwsQUFrRUgsQUFFYyxBQUFDLEFBS0E7QUFMQSxBQUNQLGlCQURNO0FBRmQsQUFDSTtzQkFTSixBQUNVLEFBQ047MEJBOUVELEFBNEVILEFBRWM7QUFGZCxBQUNJO3NCQUdKLEFBQ1UsQUFDTjswQkFyRkMsQUFHRixBQWdGSCxBQUVjLEFBR3RCO0FBTFEsQUFDSTs7c0JBS0YsQ0FBQSxBQUNGLFVBREUsQUFFRixvQkFGRSxBQUdGLGlCQUhFLEFBSUYsbUJBTEcsQUFDRCxBQUtGLEFBRUE7eUJBaEdLLEFBd0ZGLEFBUU0sQUFFYjtBQVZPLEFBQ1A7O3NCQVNPLEFBQ0QsQUFDRjt5QkF0R08sQUFFZixBQUFhLEFBa0dGLEFBRU07QUFGTixBQUNQO0FBbkdTLEFBQ1Q7ZUFzR1g7Ozs7O2tDQUVTLEFBQ047aUJBQUEsQUFBSyxTQUFTLEVBQUUsZUFBaEIsQUFBYyxBQUFpQixBQUNsQzs7OztvQ0FFVyxBLE1BQU07Z0JBQUEsQUFDUixRQUFVLEtBREYsQUFDTyxNQURQLEFBQ1IsQUFDTjs7Z0JBQUksV0FBVyxLQUFmLEFBQWUsQUFBSyxBQUNwQjt5QkFBTyxBQUFNLE9BQU8sZ0JBQUE7dUJBQVMsS0FBRCxBQUFNLEtBQU4sQUFBWSxrQkFBcEIsQUFBc0M7QUFBMUQsQUFBTyxBQUNWLGFBRFU7Ozs7MENBR087Z0JBQUEsQUFDUixRQUFVLEtBREYsQUFDTyxNQURQLEFBQ1IsQUFDUjs7eUJBQU8sQUFBTSxPQUFPLFVBQUEsQUFBQyxPQUFELEFBQVEsTUFBUyxBQUNqQzt1QkFBTyxNQUFBLEFBQU0scURBQVUsS0FBdkIsQUFBTyxBQUFxQixBQUM3QjtBQUZJLGFBQUEsRUFBUCxBQUFPLEFBRUYsQUFDTjs7OztxQyxBQUVZLFdBQVcsQSxTQUFTLEFBQzdCO2lCQUFBLEFBQUs7OzBCQUNNLEFBQ0csQUFDTjs2QkFIUixBQUFjLEFBQ0gsQUFFTSxBQUdwQjtBQUxjLEFBQ0g7QUFGTSxBQUNWOzs7OzZDQU9hLEFBQ2pCO3VCQUFBLEFBQUssVUFBTCxBQUFlO3lCQUFTLEFBQ1gsQUFDVDt1QkFGSixBQUF3QixBQUViLEFBRWQ7QUFKMkIsQUFDcEI7Ozs7aUNBS0M7eUJBQzhDLEtBRDlDLEFBQ21EO2dCQURuRCxBQUNHLGVBREgsQUFDRztnQkFESCxBQUNVLG1CQURWLEFBQ1U7Z0JBRFYsQUFDcUIsZUFEckIsQUFDcUI7Z0JBRHJCLEFBQzRCLHVCQUQ1QixBQUM0QixBQUNsQztBQUNDOztnQkFBTSxlQUFlLEtBQUEsQUFBSyxhQUFMLEFBQWtCLEtBQXZDLEFBQXFCLEFBQXVCLEFBQzVDO2dCQUFNLGNBQWMsS0FBQSxBQUFLLFlBQUwsQUFBaUIsS0FBckMsQUFBb0IsQUFBc0IsQUFDMUM7Z0JBQU0sVUFBVSxLQUFBLEFBQUssUUFBTCxBQUFhLEtBQTdCLEFBQWdCLEFBQWtCLEFBQ2xDO21EQUUyQixBQUFDLGtDQUFPLE9BQVIsQUFBZSxPQUFPLFNBQXRCLEFBQStCLFNBQVMsV0FBeEMsQUFBbUQ7OEJBQW5EO2dDQUFoQixBQUFnQjtBQUFBO2FBQUEsQ0FBaEIsbUJBQW1GLEFBQUM7OzhCQUFEO2dDQUY5RixBQUU4RixBQUdqRztBQUhpRztBQUFBLGFBQUE7Ozs7O0FBckpoRixBLEFBMkpsQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9GYWNlcyJ9