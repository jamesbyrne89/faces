webpackHotUpdate(5,{

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Login = __webpack_require__(480);

var _Login2 = _interopRequireDefault(_Login);

var _Modal = __webpack_require__(564);

var _Modal2 = _interopRequireDefault(_Modal);

var _ProfileCard = __webpack_require__(568);

var _ProfileCard2 = _interopRequireDefault(_ProfileCard);

var _LocationsDropdown = __webpack_require__(569);

var _LocationsDropdown2 = _interopRequireDefault(_LocationsDropdown);

var _Header = __webpack_require__(570);

var _Header2 = _interopRequireDefault(_Header);

var _link = __webpack_require__(471);

var _link2 = _interopRequireDefault(_link);

var _Data = __webpack_require__(431);

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
            teams: [{
                name: "Digital",
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
                modal = _state.modal;
            // const allEmployees = teams.map(team => team.profiles)

            var modalHandler = this.modalHandler.bind(this);
            var filterTeams = this.filterTeams.bind(this);
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                }
            }, _react2.default.createElement(_Login2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxBcHAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMb2dpbiIsIk1vZGFsIiwiUHJvZmlsZUNhcmQiLCJMb2NhdGlvbnNEcm9wZG93biIsIkhlYWRlciIsIkxpbmsiLCJiYXNlIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImF1dGhlbnRpY2F0ZWQiLCJhZG1pbiIsInRlYW1zIiwibmFtZSIsInByb2ZpbGVzIiwidGl0bGUiLCJlbWFpbCIsInRlYW0iLCJwaG90byIsImxvY2F0aW9ucyIsImxpc3QiLCJjdXJyZW50IiwibW9kYWwiLCJvcGVuIiwiY29udGVudCIsInRlYW1OYW1lIiwidG9Mb3dlckNhc2UiLCJmaWx0ZXIiLCJyZWR1Y2UiLCJjb25jYXQiLCJvcGVuU3RhdGUiLCJzZXRTdGF0ZSIsInN5bmNTdGF0ZSIsImNvbnRleHQiLCJtb2RhbEhhbmRsZXIiLCJiaW5kIiwiZmlsdGVyVGVhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUF1Qjs7OztBQUM5QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFBWTs7Ozs7OztJQUdmLEE7aUNBQ0Y7O2lCQUFBLEFBQVksT0FBTzs0Q0FBQTs7b0lBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7MkJBQVEsQUFDTSxBQUNmO21CQUZTLEFBRUYsQUFDUDs7c0JBQ0ksQUFDVSxBQUNOOzswQkFBVyxBQUNELEFBQ047MkJBRk8sQUFFQSxBQUNQOzJCQUhPLEFBR0EsQUFDUDswQkFKTyxBQUlELEFBQ047MkJBTE0sQUFBQyxBQUtBO0FBTEEsQUFDUCxpQkFETTswQkFPVixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBWk0sQUFPVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBbkJNLEFBY1YsQUFLVztBQUxYLEFBQ0k7MEJBTUosQUFDVSxBQUNOOzJCQUZKLEFBRVcsQUFDUDsyQkFISixBQUdXLEFBQ1A7MEJBSkosQUFJVSxBQUNOOzJCQTFCTSxBQXFCVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBakNNLEFBNEJWLEFBS1c7QUFMWCxBQUNJOzBCQU1KLEFBQ1UsQUFDTjsyQkFGSixBQUVXLEFBQ1A7MkJBSEosQUFHVyxBQUNQOzBCQUpKLEFBSVUsQUFDTjsyQkF4Q00sQUFtQ1YsQUFLVztBQUxYLEFBQ0k7MEJBTUosQUFDVSxBQUNOOzJCQUZKLEFBRVcsQUFDUDsyQkFISixBQUdXLEFBQ1A7MEJBSkosQUFJVSxBQUNOOzJCQS9DTSxBQTBDVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBdERNLEFBaURWLEFBS1c7QUFMWCxBQUNJOzBCQU1KLEFBQ1UsQUFDTjsyQkFGSixBQUVXLEFBQ1A7MkJBSEosQUFHVyxBQUNQOzBCQUpKLEFBSVUsQUFDTjsyQkFoRUwsQUFDSCxBQUVjLEFBd0RWLEFBS1c7QUFMWCxBQUNJO0FBM0RSLEFBQ0ksYUFGRDtzQkFtRUgsQUFDVSxBQUNOOzswQkFBVyxBQUNELEFBQ047MkJBRk8sQUFFQSxBQUNQOzJCQUhPLEFBR0EsQUFDUDswQkFKTyxBQUlELEFBQ047MkJBMUVMLEFBbUVILEFBRWMsQUFBQyxBQUtBO0FBTEEsQUFDUCxpQkFETTtBQUZkLEFBQ0k7c0JBU0osQUFDVSxBQUNOOzBCQS9FRCxBQTZFSCxBQUVjO0FBRmQsQUFDSTtzQkFHSixBQUNVLEFBQ047MEJBdEZDLEFBR0YsQUFpRkgsQUFFYyxBQUdsQjtBQUxJLEFBQ0k7O3NCQUtFLENBQUEsQUFDRixVQURFLEFBRUYsb0JBRkUsQUFHRixpQkFIRSxBQUlGLG1CQUxHLEFBQ0QsQUFLRixBQUVKO3lCQWpHSyxBQXlGRSxBQVFFLEFBRWI7QUFWVyxBQUNQOztzQkFTRyxBQUNHLEFBQ047eUJBdkdPLEFBRWYsQUFBYSxBQW1HRixBQUVNO0FBRk4sQUFDSDtBQXBHSyxBQUNUO2VBdUdQOzs7OztvQyxBQUVXLE1BQU07Z0JBQUEsQUFDUixRQUFVLEtBREYsQUFDTyxNQURQLEFBQ1IsQUFDTjs7Z0JBQUksV0FBVyxLQUFmLEFBQWUsQUFBSyxBQUNwQjt5QkFBTyxBQUFNLE9BQU8sZ0JBQUE7dUJBQVMsS0FBRCxBQUFNLEtBQU4sQUFBWSxrQkFBcEIsQUFBc0M7QUFBMUQsQUFBTyxBQUNWLGFBRFU7Ozs7MENBR087Z0JBQUEsQUFDUixRQUFVLEtBREYsQUFDTyxNQURQLEFBQ1IsQUFDTjs7eUJBQU8sQUFBTSxPQUFPLFVBQUEsQUFBQyxPQUFELEFBQVEsTUFBUyxBQUNqQzt1QkFBTyxNQUFBLEFBQU0scURBQVUsS0FBdkIsQUFBTyxBQUFxQixBQUMvQjtBQUZNLGFBQUEsRUFBUCxBQUFPLEFBRUosQUFDTjs7OztxQ0FFWSxBLFdBQVcsQSxTQUFTLEFBQzdCO2lCQUFBLEFBQUs7OzBCQUNNLEFBQ0csQUFDTjs2QkFIUixBQUFjLEFBQ0gsQUFFTSxBQUdwQjtBQUxjLEFBQ0g7QUFGTSxBQUNWOzs7OzZDQU9hLEFBQ2pCO3VCQUFBLEFBQUssVUFBTCxBQUFlO3lCQUFTLEFBQ1gsQUFDVDt1QkFGSixBQUF3QixBQUViLEFBRWQ7QUFKMkIsQUFDcEI7Ozs7aUNBS0M7eUJBQytCLEtBRC9CLEFBQ29DO2dCQURwQyxBQUNHLGVBREgsQUFDRztnQkFESCxBQUNVLG1CQURWLEFBQ1U7Z0JBRFYsQUFDcUIsZUFEckIsQUFDcUIsQUFDMUI7QUFDQTs7Z0JBQU0sZUFBZSxLQUFBLEFBQUssYUFBTCxBQUFrQixLQUF2QyxBQUFxQixBQUF1QixBQUM1QztnQkFBTSxjQUFjLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXJDLEFBQW9CLEFBQXNCLEFBQzFDO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsQUFBQzs7OEJBQUQ7Z0NBRkosQUFDSSxBQUNBLEFBR1A7QUFITztBQUFBOzs7OztBQWpKTSxBLEFBdUpsQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9GYWNlcyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\App.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\App.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/App")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45Mjg2ODQyZTYxNGNjMWI2NTFlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXBwLmpzPzYyZjEyM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9wYWdlcy9Mb2dpbic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCc7XG5pbXBvcnQgUHJvZmlsZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlQ2FyZCc7XG5pbXBvcnQgTG9jYXRpb25zRHJvcGRvd24gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2NhdGlvbnNEcm9wZG93bic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi4vbW9kZWxzL0RhdGEnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYXV0aGVudGljYXRlZDogZmFsc2UsXG4gICAgICAgICAgICBhZG1pbjogZmFsc2UsXG4gICAgICAgICAgICB0ZWFtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJEaWdpdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYW1lcyBCeXJuZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSnVuaW9yIFdlYiBEZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImphbWVzLmJ5cm5lQHdhcmVob3VzZS5jby51a1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYW1lcyBCeXJuZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSnVuaW9yIFdlYiBEZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImphbWVzLmJ5cm5lQHdhcmVob3VzZS5jby51a1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYW1lcyBCeXJuZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSnVuaW9yIFdlYiBEZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImphbWVzLmJ5cm5lQHdhcmVob3VzZS5jby51a1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYW1lcyBCeXJuZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSnVuaW9yIFdlYiBEZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImphbWVzLmJ5cm5lQHdhcmVob3VzZS5jby51a1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYW1lcyBCeXJuZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSnVuaW9yIFdlYiBEZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImphbWVzLmJ5cm5lQHdhcmVob3VzZS5jby51a1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYW1lcyBCeXJuZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSnVuaW9yIFdlYiBEZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImphbWVzLmJ5cm5lQHdhcmVob3VzZS5jby51a1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYW1lcyBCeXJuZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSnVuaW9yIFdlYiBEZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImphbWVzLmJ5cm5lQHdhcmVob3VzZS5jby51a1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKb3RpcyBNb29yZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTGVhZCBEZXZlbG9wZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImpvdGlzLm1vb3JlQHdhcmVob3VzZS5jby51a1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJBbGl4IEJ1cm5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhlYWQgT2YgRGlnaXRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiYWxpeGFuc0RyYS5idXJuQHdhcmVob3VzZS5jby51a1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJCcmFuZCBDb21tc1wiLFxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmlsbCBHYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJCcmFuZCBDb21tcyBEaXJlY3RvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiamlsbC5nYXRlQHdhcmVob3VzZS5jby51a1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJCcmFuZCBDb21tc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUmV0YWlsXCIsXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzOiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJ1eWluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlczogW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbG9jYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgbGlzdDogW1xuICAgICAgICAgICAgICAgICAgICBcIkxvbmRvblwiLFxuICAgICAgICAgICAgICAgICAgICBcIlN0YW50b24gSGFyY291cnRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJJbnRlcm5hdGlvbmFsXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiSW50ZXJuYXRpb25hbCAyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiSW50ZXJuYXRpb25hbCAzXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IFwiTG9uZG9uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlclRlYW1zKG5hbWUpIHtcbiAgICAgICAgbGV0IHsgdGVhbXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB0ZWFtTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHRlYW1zLmZpbHRlcih0ZWFtID0+ICh0ZWFtLm5hbWUpLnRvTG93ZXJDYXNlKCkgPT09IHRlYW1OYW1lKTtcbiAgICB9XG5cbiAgICBnZXRBbGxFbXBsb3llZXMoKSB7XG4gICAgICAgIGxldCB7IHRlYW1zIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gdGVhbXMucmVkdWNlKCh0ZWFtcywgdGVhbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRlYW1zLmNvbmNhdCguLi50ZWFtLnByb2ZpbGVzKVxuICAgICAgICB9LCBbXSlcbiAgICB9XG5cbiAgICBtb2RhbEhhbmRsZXIob3BlblN0YXRlLCBjb250ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgICBvcGVuOiBvcGVuU3RhdGUsXG4gICAgICAgICAgICAgICAgY29udGVudDogY29udGVudFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIGJhc2Uuc3luY1N0YXRlKCd0ZWFtcycsIHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHRoaXMsXG4gICAgICAgICAgICBzdGF0ZTogJ3RlYW1zJ1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0ZWFtcywgbG9jYXRpb25zLCBtb2RhbCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgLy8gY29uc3QgYWxsRW1wbG95ZWVzID0gdGVhbXMubWFwKHRlYW0gPT4gdGVhbS5wcm9maWxlcylcbiAgICAgICAgY29uc3QgbW9kYWxIYW5kbGVyID0gdGhpcy5tb2RhbEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgY29uc3QgZmlsdGVyVGVhbXMgPSB0aGlzLmZpbHRlclRlYW1zLmJpbmQodGhpcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExvZ2luIC8+XG48L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9BcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUExREE7QUFtRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBRkE7QUFXQTtBQUFBO0FBREE7QUFLQTtBQUdBO0FBSkE7O0FBS0E7QUFTQTtBQVRBOztBQVdBO0FBQUE7QUFEQTtBQW5HQTtBQXVHQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7OztBQU1BO0FBQUE7O0FBR0E7QUFHQTtBQUpBO0FBREE7Ozs7QUFRQTtBQUFBO0FBRUE7QUFFQTtBQUhBOzs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9