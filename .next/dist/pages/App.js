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
            uid: '',
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
        _this.checkAuthStatus = _this.checkAuthStatus.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: 'checkAuthStatus',
        value: function checkAuthStatus() {

            var user = _Data.app.auth().currentUser;
            if (user) {
                console.log('Logged in');
                this.setState({ authenticated: true });
            } else {
                // No user is signed in.
                console.warn('Not logged in');
                this.setState({ authenticated: false });
            }
        }
    }, {
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
            this.checkAuthStatus();
            console.log('Checked auth status');
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
            console.log(authenticated);
            return authenticated ? _react2.default.createElement(_Layout2.default, { teams: teams, signOut: signOut, locations: locations, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }) : _react2.default.createElement(_Login2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            });
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxBcHAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMb2dpbiIsIkxheW91dCIsIk1vZGFsIiwiUHJvZmlsZUNhcmQiLCJMaW5rIiwiYXBwIiwiYmFzZSIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJhdXRoZW50aWNhdGVkIiwidWlkIiwiYWRtaW4iLCJ0ZWFtcyIsIm5hbWUiLCJwcm9maWxlcyIsInRpdGxlIiwiZW1haWwiLCJ0ZWFtIiwicGhvdG8iLCJsb2NhdGlvbnMiLCJsaXN0IiwiY3VycmVudCIsIm1vZGFsIiwib3BlbiIsImNvbnRlbnQiLCJjaGVja0F1dGhTdGF0dXMiLCJiaW5kIiwidXNlciIsImF1dGgiLCJjdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIndhcm4iLCJ0ZWFtTmFtZSIsInRvTG93ZXJDYXNlIiwiZmlsdGVyIiwicmVkdWNlIiwiY29uY2F0Iiwib3BlblN0YXRlIiwic3luY1N0YXRlIiwiY29udGV4dCIsIm1vZGFsSGFuZGxlciIsImZpbHRlclRlYW1zIiwic2lnbk91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTzs7OztBQUNQLEFBQVMsQUFBSyxBQUFZOzs7Ozs7O0ksQUFHcEI7aUNBQ0Y7O2lCQUFBLEFBQVksT0FBTzs0Q0FBQTs7b0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7MkJBQVEsQUFDTSxBQUNmO2lCQUZTLEFBRUosQUFDTDttQkFIUyxBQUdGLEFBQ1A7c0JBQ00sTUFBRixBQUFRLEFBQ0o7OzBCQUFXLEFBQ0QsQUFDTjsyQkFGTyxBQUVBLEFBQ1A7MkJBSE8sQUFHQSxBQUNQOzBCQUpPLEFBSUQsQUFDTjsyQkFMTSxBQUFDLEFBS0E7QUFM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