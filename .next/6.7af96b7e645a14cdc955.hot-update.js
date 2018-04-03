webpackHotUpdate(6,{

/***/ 432:
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

var _Login = __webpack_require__(483);

var _Login2 = _interopRequireDefault(_Login);

var _Layout = __webpack_require__(433);

var _Layout2 = _interopRequireDefault(_Layout);

var _Modal = __webpack_require__(590);

var _Modal2 = _interopRequireDefault(_Modal);

var _ProfileCard = __webpack_require__(594);

var _ProfileCard2 = _interopRequireDefault(_ProfileCard);

var _link = __webpack_require__(435);

var _link2 = _interopRequireDefault(_link);

var _Data = __webpack_require__(441);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43YWY5NmI3ZTY0NWExNGNkYzk1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXBwLmpzPzU2NDAxYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4uL3BhZ2VzL0xvZ2luJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IFByb2ZpbGVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZUNhcmQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBhcHAsIGJhc2UgfSBmcm9tICcuLi9tb2RlbHMvRGF0YSc7XHJcblxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB1aWQ6ICcnLFxyXG4gICAgICAgICAgICBhZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHRlYW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwiRGlnaXRhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkphbWVzIEJ5cm5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1bmlvciBXZWIgRGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImphbWVzLmJ5cm5lQHdhcmVob3VzZS5jby51a1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtOiBcIkRpZ2l0YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmFtZXMgQnlybmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSnVuaW9yIFdlYiBEZXZlbG9wZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiamFtZXMuYnlybmVAd2FyZWhvdXNlLmNvLnVrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYW1lcyBCeXJuZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJKdW5pb3IgV2ViIERldmVsb3BlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqYW1lcy5ieXJuZUB3YXJlaG91c2UuY28udWtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvOiBcImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI1MHgyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkphbWVzIEJ5cm5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1bmlvciBXZWIgRGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImphbWVzLmJ5cm5lQHdhcmVob3VzZS5jby51a1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtOiBcIkRpZ2l0YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmFtZXMgQnlybmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSnVuaW9yIFdlYiBEZXZlbG9wZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiamFtZXMuYnlybmVAd2FyZWhvdXNlLmNvLnVrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKYW1lcyBCeXJuZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJKdW5pb3IgV2ViIERldmVsb3BlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqYW1lcy5ieXJuZUB3YXJlaG91c2UuY28udWtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvOiBcImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI1MHgyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkphbWVzIEJ5cm5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1bmlvciBXZWIgRGV2ZWxvcGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImphbWVzLmJ5cm5lQHdhcmVob3VzZS5jby51a1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtOiBcIkRpZ2l0YWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSm90aXMgTW9vcmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTGVhZCBEZXZlbG9wZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiam90aXMubW9vcmVAd2FyZWhvdXNlLmNvLnVrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90bzogXCJodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNTB4MjUwXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJBbGl4IEJ1cm5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSGVhZCBPZiBEaWdpdGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImFsaXhhbnNEcmEuYnVybkB3YXJlaG91c2UuY28udWtcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogXCJEaWdpdGFsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvOiBcImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI1MHgyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQnJhbmQgQ29tbXNcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJKaWxsIEdhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQnJhbmQgQ29tbXMgRGlyZWN0b3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiamlsbC5nYXRlQHdhcmVob3VzZS5jby51a1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtOiBcIkJyYW5kIENvbW1zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvOiBcImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI1MHgyNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUmV0YWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM6IFtdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQnV5aW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM6IFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgbG9jYXRpb25zOiB7XHJcbiAgICAgICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgICAgICAgIFwiTG9uZG9uXCIsXHJcbiAgICAgICAgICAgICAgICBcIlN0YW50b24gSGFyY291cnRcIixcclxuICAgICAgICAgICAgICAgIFwiSW50ZXJuYXRpb25hbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJJbnRlcm5hdGlvbmFsIDJcIixcclxuICAgICAgICAgICAgICAgIFwiSW50ZXJuYXRpb25hbCAzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiBcIkxvbmRvblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja0F1dGhTdGF0dXMgPSB0aGlzLmNoZWNrQXV0aFN0YXR1cy5iaW5kKHRoaXMpO1xyXG59XHJcblxyXG5jaGVja0F1dGhTdGF0dXMoKSB7XHJcblxyXG5cclxuICAgIGxldCB1c2VyID0gYXBwLmF1dGgoKS5jdXJyZW50VXNlclxyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTG9nZ2VkIGluJylcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRoZW50aWNhdGVkOiB0cnVlIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBObyB1c2VyIGlzIHNpZ25lZCBpbi5cclxuICAgICAgICAgIGNvbnNvbGUud2FybignTm90IGxvZ2dlZCBpbicpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXV0aGVudGljYXRlZDogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5zaWduT3V0KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dGhlbnRpY2F0ZWQ6IGZhbHNlIH0pO1xyXG59XHJcblxyXG5maWx0ZXJUZWFtcyhuYW1lKSB7XHJcbiAgICBsZXQgeyB0ZWFtcyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCB0ZWFtTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiB0ZWFtcy5maWx0ZXIodGVhbSA9PiAodGVhbS5uYW1lKS50b0xvd2VyQ2FzZSgpID09PSB0ZWFtTmFtZSk7XHJcbn1cclxuXHJcbmdldEFsbEVtcGxveWVlcygpIHtcclxuICAgIGxldCB7IHRlYW1zIH0gPSB0aGlzLnN0YXRlO1xyXG4gIHJldHVybiB0ZWFtcy5yZWR1Y2UoKHRlYW1zLCB0ZWFtKSA9PiB7XHJcbiAgICAgIHJldHVybiB0ZWFtcy5jb25jYXQoLi4udGVhbS5wcm9maWxlcylcclxuICAgIH0sIFtdKSBcclxufVxyXG5cclxubW9kYWxIYW5kbGVyKG9wZW5TdGF0ZSwgY29udGVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgb3Blbjogb3BlblN0YXRlLFxyXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMuY2hlY2tBdXRoU3RhdHVzKCk7XHJcbiAgICBjb25zb2xlLmxvZygnQ2hlY2tlZCBhdXRoIHN0YXR1cycpXHJcbiAgICBiYXNlLnN5bmNTdGF0ZSgndGVhbXMnLCB7XHJcbiAgICAgICAgY29udGV4dDogdGhpcyxcclxuICAgICAgICBzdGF0ZTogJ3RlYW1zJ1xyXG4gICAgfSlcclxufVxyXG5cclxucmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyB0ZWFtcywgbG9jYXRpb25zLCBtb2RhbCwgYXV0aGVudGljYXRlZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgLy8gY29uc3QgYWxsRW1wbG95ZWVzID0gdGVhbXMubWFwKHRlYW0gPT4gdGVhbS5wcm9maWxlcylcclxuICAgIGNvbnN0IG1vZGFsSGFuZGxlciA9IHRoaXMubW9kYWxIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICBjb25zdCBmaWx0ZXJUZWFtcyA9IHRoaXMuZmlsdGVyVGVhbXMuYmluZCh0aGlzKTtcclxuICAgIGNvbnN0IHNpZ25PdXQgPSB0aGlzLnNpZ25PdXQuYmluZCh0aGlzKTtcclxuICAgIGNvbnNvbGUubG9nKGF1dGhlbnRpY2F0ZWQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgYXV0aGVudGljYXRlZCA/IDxMYXlvdXQgdGVhbXM9e3RlYW1zfSBzaWduT3V0PXtzaWduT3V0fSBsb2NhdGlvbnM9e2xvY2F0aW9uc30gLz4gOiA8TG9naW4gLz5cclxuICAgICAgICAgICAgXHJcbiAgICApO1xyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9BcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBMURBO0FBbUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUZBO0FBV0E7QUFBQTtBQURBO0FBS0E7QUFHQTtBQUpBOztBQUtBO0FBU0E7QUFUQTs7QUFXQTtBQUdBO0FBSkE7QUFuR0E7QUF1R0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBOzs7O0FBTUE7QUFBQTs7QUFHQTtBQUdBO0FBSkE7QUFEQTs7OztBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUhBOzs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUdBO0FBSEE7QUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=