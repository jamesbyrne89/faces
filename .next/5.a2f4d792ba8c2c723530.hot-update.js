webpackHotUpdate(5,{

/***/ 480:
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

var _Login = __webpack_require__(481);

var _Login2 = _interopRequireDefault(_Login);

var _Layout = __webpack_require__(483);

var _Layout2 = _interopRequireDefault(_Layout);

var _Modal = __webpack_require__(580);

var _Modal2 = _interopRequireDefault(_Modal);

var _ProfileCard = __webpack_require__(584);

var _ProfileCard2 = _interopRequireDefault(_ProfileCard);

var _link = __webpack_require__(432);

var _link2 = _interopRequireDefault(_link);

var _Data = __webpack_require__(438);

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
            return authenticated ? _react2.default.createElement(_Login2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }) : _react2.default.createElement(_Layout2.default, { locations: locations, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            });
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxBcHAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMb2dpbiIsIkxheW91dCIsIk1vZGFsIiwiUHJvZmlsZUNhcmQiLCJMaW5rIiwiYmFzZSIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJhdXRoZW50aWNhdGVkIiwiYWRtaW4iLCJ0ZWFtcyIsIm5hbWUiLCJwcm9maWxlcyIsInRpdGxlIiwiZW1haWwiLCJ0ZWFtIiwicGhvdG8iLCJsb2NhdGlvbnMiLCJsaXN0IiwiY3VycmVudCIsIm1vZGFsIiwib3BlbiIsImNvbnRlbnQiLCJ0ZWFtTmFtZSIsInRvTG93ZXJDYXNlIiwiZmlsdGVyIiwicmVkdWNlIiwiY29uY2F0Iiwib3BlblN0YXRlIiwic2V0U3RhdGUiLCJzeW5jU3RhdGUiLCJjb250ZXh0IiwibW9kYWxIYW5kbGVyIiwiYmluZCIsImZpbHRlclRlYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPOzs7O0FBQ1AsQUFBUyxBQUFZOzs7Ozs7O0ksQUFHZjtpQ0FDRjs7aUJBQUEsQUFBWSxPQUFPOzRDQUFBOztvSUFBQSxBQUNULEFBQ047O2NBQUEsQUFBSzsyQkFBUSxBQUNNLEFBQ2Y7bUJBRlMsQUFFRixBQUNQO3NCQUNNLE1BQUYsQUFBUSxBQUNKOzswQkFBVyxBQUNELEFBQ047MkJBRk8sQUFFQSxBQUNQOzJCQUhPLEFBR0EsQUFDUDswQkFKTyxBQUlELEFBQ047MkJBTE0sQUFBQyxBQUtBO0FBTEEsQUFDUCxpQkFETTswQkFPVixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBWk0sQUFPVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBbkJNLEFBY1YsQUFLVztBQUxYLEFBQ0k7MEJBTUosQUFDVSxBQUNOOzJCQUZKLEFBRVcsQUFDUDsyQkFISixBQUdXLEFBQ1A7MEJBSkosQUFJVSxBQUNOOzJCQTFCTSxBQXFCVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBakNNLEFBNEJWLEFBS1c7QUFMWCxBQUNJOzBCQU1KLEFBQ1UsQUFDTjsyQkFGSixBQUVXLEFBQ1A7MkJBSEosQUFHVyxBQUNQOzBCQUpKLEFBSVUsQUFDTjsyQkF4Q00sQUFtQ1YsQUFLVztBQUxYLEFBQ0k7MEJBTUosQUFDVSxBQUNOOzJCQUZKLEFBRVcsQUFDUDsyQkFISixBQUdXLEFBQ1A7MEJBSkosQUFJVSxBQUNOOzJCQS9DTSxBQTBDVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBdERNLEFBaURWLEFBS1c7QUFMWCxBQUNJOzBCQU1KLEFBQ1UsQUFDTjsyQkFGSixBQUVXLEFBQ1A7MkJBSEosQUFHVyxBQUNQOzBCQUpKLEFBSVUsQUFDTjsyQkEvREwsQUFDSCxBQUNjLEFBd0RWLEFBS1c7QUFMWCxBQUNJO0FBMURSLGFBREc7c0JBa0VILEFBQ1UsQUFDTjs7MEJBQVcsQUFDRCxBQUNOOzJCQUZPLEFBRUEsQUFDUDsyQkFITyxBQUdBLEFBQ1A7MEJBSk8sQUFJRCxBQUNOOzJCQXpFTCxBQWtFSCxBQUVjLEFBQUMsQUFLQTtBQUxBLEFBQ1AsaUJBRE07QUFGZCxBQUNJO3NCQVNKLEFBQ1UsQUFDTjswQkE5RUQsQUE0RUgsQUFFYztBQUZkLEFBQ0k7c0JBR0osQUFDVSxBQUNOOzBCQXJGQyxBQUdGLEFBZ0ZILEFBRWMsQUFHdEI7QUFMUSxBQUNJOztzQkFLRixDQUFBLEFBQ0YsVUFERSxBQUVGLG9CQUZFLEFBR0YsaUJBSEUsQUFJRixtQkFMRyxBQUNELEFBS0YsQUFFQTt5QkFoR0ssQUF3RkYsQUFRTSxBQUViO0FBVk8sQUFDUDs7c0JBU08sQUFDRCxBQUNGO3lCQXRHTyxBQUVmLEFBQWEsQUFrR0YsQUFFTTtBQUZOLEFBQ1A7QUFuR1MsQUFDVDtlQXNHWDs7Ozs7b0MsQUFFVyxNQUFNO2dCQUFBLEFBQ1IsUUFBVSxLQURGLEFBQ08sTUFEUCxBQUNSLEFBQ047O2dCQUFJLFdBQVcsS0FBZixBQUFlLEFBQUssQUFDcEI7eUJBQU8sQUFBTSxPQUFPLGdCQUFBO3VCQUFTLEtBQUQsQUFBTSxLQUFOLEFBQVksa0JBQXBCLEFBQXNDO0FBQTFELEFBQU8sQUFDVixhQURVOzs7OzBDQUdPO2dCQUFBLEFBQ1IsUUFBVSxLQURGLEFBQ08sTUFEUCxBQUNSLEFBQ1I7O3lCQUFPLEFBQU0sT0FBTyxVQUFBLEFBQUMsT0FBRCxBQUFRLE1BQVMsQUFDakM7dUJBQU8sTUFBQSxBQUFNLHFEQUFVLEtBQXZCLEFBQU8sQUFBcUIsQUFDN0I7QUFGSSxhQUFBLEVBQVAsQUFBTyxBQUVGLEFBQ047Ozs7cUNBRVksQSxXLEFBQVcsU0FBUyxBQUM3QjtpQkFBQSxBQUFLOzswQkFDTSxBQUNHLEFBQ047NkJBSFIsQUFBYyxBQUNILEFBRU0sQUFHcEI7QUFMYyxBQUNIO0FBRk0sQUFDVjs7Ozs2Q0FPYSxBQUNqQjt1QkFBQSxBQUFLLFVBQUwsQUFBZTt5QkFBUyxBQUNYLEFBQ1Q7dUJBRkosQUFBd0IsQUFFYixBQUVkO0FBSjJCLEFBQ3BCOzs7O2lDQUtDO3lCQUM4QyxLQUQ5QyxBQUNtRDtnQkFEbkQsQUFDRyxlQURILEFBQ0c7Z0JBREgsQUFDVSxtQkFEVixBQUNVO2dCQURWLEFBQ3FCLGVBRHJCLEFBQ3FCO2dCQURyQixBQUM0Qix1QkFENUIsQUFDNEIsQUFDbEM7QUFDQzs7Z0JBQU0sZUFBZSxLQUFBLEFBQUssYUFBTCxBQUFrQixLQUF2QyxBQUFxQixBQUF1QixBQUM1QztnQkFBTSxjQUFjLEtBQUEsQUFBSyxZQUFMLEFBQWlCLEtBQXJDLEFBQW9CLEFBQXNCLEFBQzFDO21EQUUyQixBQUFDOzs4QkFBRDtnQ0FBaEIsQUFBZ0I7QUFBQTtBQUFBLGFBQUEsQ0FBaEIsbUJBQTRCLEFBQUMsa0NBQU8sV0FBUixBQUFtQjs4QkFBbkI7Z0NBRnZDLEFBRXVDLEFBRzFDO0FBSDBDO2FBQUE7Ozs7O0FBaEp6QixBLEFBc0psQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9GYWNlcyJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hMmY0ZDc5MmJhOGMyYzcyMzUzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXBwLmpzP2M4NjdlODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL3BhZ2VzL0xvZ2luJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IFByb2ZpbGVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZUNhcmQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi4vbW9kZWxzL0RhdGEnO1xyXG5cclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgYWRtaW46IGZhbHNlLFxyXG4gICAgICAgICAgICB0ZWFtczogW1xyXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBcIkRpZ2l0YWxcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYW1lcyBCeXJuZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJKdW5pb3IgV2ViIERldmVsb3BlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqYW1lcy5ieXJuZUB3YXJlaG91c2UuY28udWtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvOiBcImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI1MHgyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkphbWVzIEJ5cm5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1bmlvciBXZWIgRGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImphbWVzLmJ5cm5lQHdhcmVob3VzZS5jby51a1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtOiBcIkRpZ2l0YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmFtZXMgQnlybmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSnVuaW9yIFdlYiBEZXZlbG9wZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiamFtZXMuYnlybmVAd2FyZWhvdXNlLmNvLnVrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYW1lcyBCeXJuZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJKdW5pb3IgV2ViIERldmVsb3BlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqYW1lcy5ieXJuZUB3YXJlaG91c2UuY28udWtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvOiBcImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI1MHgyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkphbWVzIEJ5cm5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1bmlvciBXZWIgRGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImphbWVzLmJ5cm5lQHdhcmVob3VzZS5jby51a1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtOiBcIkRpZ2l0YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmFtZXMgQnlybmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSnVuaW9yIFdlYiBEZXZlbG9wZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiamFtZXMuYnlybmVAd2FyZWhvdXNlLmNvLnVrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYW1lcyBCeXJuZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJKdW5pb3IgV2ViIERldmVsb3BlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqYW1lcy5ieXJuZUB3YXJlaG91c2UuY28udWtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvOiBcImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI1MHgyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkpvdGlzIE1vb3JlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxlYWQgRGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImpvdGlzLm1vb3JlQHdhcmVob3VzZS5jby51a1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtOiBcIkRpZ2l0YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQWxpeCBCdXJuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhlYWQgT2YgRGlnaXRhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJhbGl4YW5zRHJhLmJ1cm5Ad2FyZWhvdXNlLmNvLnVrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJyYW5kIENvbW1zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmlsbCBHYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJyYW5kIENvbW1zIERpcmVjdG9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImppbGwuZ2F0ZUB3YXJlaG91c2UuY28udWtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJCcmFuZCBDb21tc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlJldGFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzOiBbXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkJ1eWluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzOiBbXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIGxvY2F0aW9uczoge1xyXG4gICAgICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICAgICAgICBcIkxvbmRvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJTdGFudG9uIEhhcmNvdXJ0XCIsXHJcbiAgICAgICAgICAgICAgICBcIkludGVybmF0aW9uYWxcIixcclxuICAgICAgICAgICAgICAgIFwiSW50ZXJuYXRpb25hbCAyXCIsXHJcbiAgICAgICAgICAgICAgICBcIkludGVybmF0aW9uYWwgM1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudDogXCJMb25kb25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZmlsdGVyVGVhbXMobmFtZSkge1xyXG4gICAgbGV0IHsgdGVhbXMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgdGVhbU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gdGVhbXMuZmlsdGVyKHRlYW0gPT4gKHRlYW0ubmFtZSkudG9Mb3dlckNhc2UoKSA9PT0gdGVhbU5hbWUpO1xyXG59XHJcblxyXG5nZXRBbGxFbXBsb3llZXMoKSB7XHJcbiAgICBsZXQgeyB0ZWFtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICByZXR1cm4gdGVhbXMucmVkdWNlKCh0ZWFtcywgdGVhbSkgPT4ge1xyXG4gICAgICByZXR1cm4gdGVhbXMuY29uY2F0KC4uLnRlYW0ucHJvZmlsZXMpXHJcbiAgICB9LCBbXSkgXHJcbn1cclxuXHJcbm1vZGFsSGFuZGxlcihvcGVuU3RhdGUsIGNvbnRlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgIG9wZW46IG9wZW5TdGF0ZSxcclxuICAgICAgICAgICAgY29udGVudDogY29udGVudFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5jb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICBiYXNlLnN5bmNTdGF0ZSgndGVhbXMnLCB7XHJcbiAgICAgICAgY29udGV4dDogdGhpcyxcclxuICAgICAgICBzdGF0ZTogJ3RlYW1zJ1xyXG4gICAgfSlcclxufVxyXG5cclxucmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB0ZWFtcywgbG9jYXRpb25zLCBtb2RhbCwgYXV0aGVudGljYXRlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgLy8gY29uc3QgYWxsRW1wbG95ZWVzID0gdGVhbXMubWFwKHRlYW0gPT4gdGVhbS5wcm9maWxlcylcclxuICAgIGNvbnN0IG1vZGFsSGFuZGxlciA9IHRoaXMubW9kYWxIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICBjb25zdCBmaWx0ZXJUZWFtcyA9IHRoaXMuZmlsdGVyVGVhbXMuYmluZCh0aGlzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBhdXRoZW50aWNhdGVkID8gPExvZ2luIC8+IDogPExheW91dCBsb2NhdGlvbnM9e2xvY2F0aW9uc30gLz5cclxuICAgICAgICAgICAgXHJcbiAgICApO1xyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9BcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQTFEQTtBQW1FQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFGQTtBQVdBO0FBQUE7QUFEQTtBQUtBO0FBR0E7QUFKQTs7QUFLQTtBQVNBO0FBVEE7O0FBV0E7QUFBQTtBQURBO0FBbEdBO0FBc0dBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBOzs7O0FBTUE7QUFBQTs7QUFHQTtBQUdBO0FBSkE7QUFEQTs7OztBQVFBO0FBQUE7QUFFQTtBQUVBO0FBSEE7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUhBO0FBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9