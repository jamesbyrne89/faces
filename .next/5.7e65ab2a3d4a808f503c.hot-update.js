webpackHotUpdate(5,{

/***/ 478:
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

var _Dashboard = __webpack_require__(479);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Modal = __webpack_require__(480);

var _Modal2 = _interopRequireDefault(_Modal);

var _ProfileCard = __webpack_require__(484);

var _ProfileCard2 = _interopRequireDefault(_ProfileCard);

var _LocationsDropdown = __webpack_require__(485);

var _LocationsDropdown2 = _interopRequireDefault(_LocationsDropdown);

var _Header = __webpack_require__(486);

var _Header2 = _interopRequireDefault(_Header);

var _link = __webpack_require__(431);

var _link2 = _interopRequireDefault(_link);

var _Data = __webpack_require__(498);

var _Data2 = _interopRequireDefault(_Data);

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
            return _react2.default.createElement('div', { className: "app-container" + (modal.open ? ' modal-opened' : ''), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                }
            }, _react2.default.createElement(_Header2.default, { teams: teams, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                }
            }), _react2.default.createElement('main', { className: 'app-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }, _react2.default.createElement('header', { className: 'controls-bar', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, _react2.default.createElement('ul', { className: 'controls-bar__controls', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }, _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, 'Warehouse Fashions'), _react2.default.createElement(_LocationsDropdown2.default, { locations: locations, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }), _react2.default.createElement('li', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, _react2.default.createElement('button', { className: 'btn', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, 'Sign Out')))), _react2.default.createElement(_Dashboard2.default, { profiles: 'allEmployees', modalHandler: this.modalHandler, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            }), _react2.default.createElement(_Modal2.default, { open: this.state.modal.open, content: this.state.modal.content, handler: modalHandler, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            })));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxBcHAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJEYXNoYm9hcmQiLCJNb2RhbCIsIlByb2ZpbGVDYXJkIiwiTG9jYXRpb25zRHJvcGRvd24iLCJIZWFkZXIiLCJMaW5rIiwiYmFzZSIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJ0ZWFtcyIsIm5hbWUiLCJwcm9maWxlcyIsInRpdGxlIiwiZW1haWwiLCJ0ZWFtIiwicGhvdG8iLCJsb2NhdGlvbnMiLCJsaXN0IiwiY3VycmVudCIsIm1vZGFsIiwib3BlbiIsImNvbnRlbnQiLCJ0ZWFtTmFtZSIsInRvTG93ZXJDYXNlIiwiZmlsdGVyIiwicmVkdWNlIiwiY29uY2F0Iiwib3BlblN0YXRlIiwic2V0U3RhdGUiLCJzeW5jU3RhdGUiLCJjb250ZXh0IiwibW9kYWxIYW5kbGVyIiwiYmluZCIsImZpbHRlclRlYW1zIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQXVCOzs7O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFHWCxBO2lDQUNGOztpQkFBQSxBQUFZLE9BQU87NENBQUE7O29JQUFBLEFBQ1QsQUFDTjs7Y0FBQSxBQUFLO3NCQUVLLE1BQUYsQUFBUSxBQUNKOzswQkFBVyxBQUNELEFBQ047MkJBRk8sQUFFQSxBQUNQOzJCQUhPLEFBR0EsQUFDUDswQkFKTyxBQUlELEFBQ047MkJBTE0sQUFBQyxBQUtBO0FBTEEsQUFDUCxpQkFETTswQkFPVixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBWk0sQUFPVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBbkJNLEFBY1YsQUFLVztBQUxYLEFBQ0k7MEJBTUosQUFDVSxBQUNOOzJCQUZKLEFBRVcsQUFDUDsyQkFISixBQUdXLEFBQ1A7MEJBSkosQUFJVSxBQUNOOzJCQTFCTSxBQXFCVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBakNNLEFBNEJWLEFBS1c7QUFMWCxBQUNJOzBCQU1KLEFBQ1UsQUFDTjsyQkFGSixBQUVXLEFBQ1A7MkJBSEosQUFHVyxBQUNQOzBCQUpKLEFBSVUsQUFDTjsyQkF4Q00sQUFtQ1YsQUFLVztBQUxYLEFBQ0k7MEJBTUosQUFDVSxBQUNOOzJCQUZKLEFBRVcsQUFDUDsyQkFISixBQUdXLEFBQ1A7MEJBSkosQUFJVSxBQUNOOzJCQS9DTSxBQTBDVixBQUtXO0FBTFgsQUFDSTswQkFNSixBQUNVLEFBQ047MkJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1csQUFDUDswQkFKSixBQUlVLEFBQ047MkJBdERNLEFBaURWLEFBS1c7QUFMWCxBQUNJOzBCQU1KLEFBQ1UsQUFDTjsyQkFGSixBQUVXLEFBQ1A7MkJBSEosQUFHVyxBQUNQOzBCQUpKLEFBSVUsQUFDTjsyQkEvREwsQUFDSCxBQUNjLEFBd0RWLEFBS1c7QUFMWCxBQUNJO0FBMURSLGFBREc7c0JBa0VILEFBQ1UsQUFDTjs7MEJBQVcsQUFDRCxBQUNOOzJCQUZPLEFBRUEsQUFDUDsyQkFITyxBQUdBLEFBQ1A7MEJBSk8sQUFJRCxBQUNOOzJCQXpFTCxBQWtFSCxBQUVjLEFBQUMsQUFLQTtBQUxBLEFBQ1AsaUJBRE07QUFGZCxBQUNJO3NCQVNKLEFBQ1UsQUFDTjswQkE5RUQsQUE0RUgsQUFFYztBQUZkLEFBQ0k7c0JBR0osQUFDVSxBQUNOOzBCQW5GQyxBQUNGLEFBZ0ZILEFBRWMsQUFHdEI7QUFMUSxBQUNJOztzQkFLRixDQUFBLEFBQ0YsVUFERSxBQUVGLG9CQUZFLEFBR0YsaUJBSEUsQUFJRixtQkFMRyxBQUNELEFBS0YsQUFFQTt5QkE5RkssQUFzRkYsQUFRTSxBQUViO0FBVk8sQUFDUDs7c0JBU08sQUFDRCxBQUNGO3lCQXBHTyxBQUVmLEFBQWEsQUFnR0YsQUFFTTtBQUZOLEFBQ1A7QUFqR1MsQUFDVDtlQW9HWDs7Ozs7b0MsQUFFVyxNQUFNO2dCQUFBLEFBQ1IsUUFBVSxLQURGLEFBQ08sTUFEUCxBQUNSLEFBQ047O2dCQUFJLFdBQVcsS0FBZixBQUFlLEFBQUssQUFDcEI7eUJBQU8sQUFBTSxPQUFPLGdCQUFBO3VCQUFTLEtBQUQsQUFBTSxLQUFOLEFBQVksa0JBQXBCLEFBQXNDO0FBQTFELEFBQU8sQUFDVixhQURVOzs7OzBDQUdPO2dCQUFBLEFBQ1IsUUFBVSxLQURGLEFBQ08sTUFEUCxBQUNSLEFBQ1I7O3lCQUFPLEFBQU0sT0FBTyxVQUFBLEFBQUMsT0FBRCxBQUFRLE1BQVMsQUFDakM7dUJBQU8sTUFBQSxBQUFNLHFEQUFVLEtBQXZCLEFBQU8sQUFBcUIsQUFDN0I7QUFGSSxhQUFBLEVBQVAsQUFBTyxBQUVGLEFBQ047Ozs7cUNBRVksQSxXLEFBQVcsU0FBUyxBQUM3QjtpQkFBQSxBQUFLOzswQkFDTSxBQUNHLEFBQ047NkJBSFIsQUFBYyxBQUNILEFBRU0sQUFHcEI7QUFMYyxBQUNIO0FBRk0sQUFDVjs7Ozs2Q0FPYSxBQUNqQjsyQkFBQSxBQUFLLFVBQUwsQUFBZTt5QkFBUyxBQUNYLEFBQ1Q7dUJBRkosQUFBd0IsQUFFYixBQUVkO0FBSjJCLEFBQ3BCOzs7O2lDQUtDO3lCQUMrQixLQUQvQixBQUNvQztnQkFEcEMsQUFDRyxlQURILEFBQ0c7Z0JBREgsQUFDVSxtQkFEVixBQUNVO2dCQURWLEFBQ3FCLGVBRHJCLEFBQ3FCLEFBQzNCO0FBQ0M7O2dCQUFNLGVBQWUsS0FBQSxBQUFLLGFBQUwsQUFBa0IsS0FBdkMsQUFBcUIsQUFBdUIsQUFDNUM7Z0JBQU0sY0FBYyxLQUFBLEFBQUssWUFBTCxBQUFpQixLQUFyQyxBQUFvQixBQUFzQixBQUMxQztvQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO21DQUNRLGNBQUEsU0FBSyxXQUFXLG1CQUFtQixNQUFBLEFBQU0sT0FBTixBQUFhLGtCQUFoRCxBQUFnQixBQUFrRDs4QkFBbEU7Z0NBQUEsQUFFSTtBQUZKO2FBQUEsa0JBRUksQUFBQyxrQ0FBTyxPQUFSLEFBQWU7OEJBQWY7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7OEJBQWhCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFlBQVEsV0FBUixBQUFrQjs4QkFBbEI7Z0NBQUEsQUFFSTtBQUZKOytCQUVJLGNBQUEsUUFBSSxXQUFKLEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx1Q0FBQSxBQUFDLDZDQUFrQixXQUFuQixBQUE4Qjs4QkFBOUI7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsK0JBQUksY0FBQSxZQUFRLFdBQVIsQUFBa0I7OEJBQWxCO2dDQUFBO0FBQUE7ZUFOaEIsQUFDSSxBQUVJLEFBR0ksQUFBSSxBQUdaLGdDQUFBLEFBQUMscUNBQVUsVUFBWCxBQUFxQixnQkFBZ0IsY0FBYyxLQUFuRCxBQUF3RDs4QkFBeEQ7Z0NBVEosQUFTSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyxpQ0FBTSxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBeEIsQUFBOEIsTUFBTSxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBeEQsQUFBOEQsU0FBUyxTQUF2RSxBQUFnRjs4QkFBaEY7Z0NBZGhCLEFBQ1EsQUFHSSxBQVVJLEFBSW5CO0FBSm1COzs7Ozs7QUEzSkYsQSxBQWtLbEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IkU6L1VzZXJzL0phbWVzL1dlYiBEZXYvUHJvamVjdHMvaHRkb2NzL0ZhY2VzIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\Users\\James\\Web Dev\\Projects\\htdocs\\Faces\\pages\\App.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\Users\\James\\Web Dev\\Projects\\htdocs\\Faces\\pages\\App.js"); } } })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43ZTY1YWIyYTNkNGE4MDhmNTAzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXBwLmpzPzE5ODljZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9EYXNoYm9hcmQnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IFByb2ZpbGVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZUNhcmQnO1xuaW1wb3J0IExvY2F0aW9uc0Ryb3Bkb3duIGZyb20gJy4uL2NvbXBvbmVudHMvTG9jYXRpb25zRHJvcGRvd24nO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGJhc2UgZnJvbSAnLi4vbW9kZWxzL0RhdGEnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGVhbXM6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwiRGlnaXRhbFwiLFxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmFtZXMgQnlybmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1bmlvciBXZWIgRGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqYW1lcy5ieXJuZUB3YXJlaG91c2UuY28udWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmFtZXMgQnlybmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1bmlvciBXZWIgRGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqYW1lcy5ieXJuZUB3YXJlaG91c2UuY28udWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmFtZXMgQnlybmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1bmlvciBXZWIgRGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqYW1lcy5ieXJuZUB3YXJlaG91c2UuY28udWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmFtZXMgQnlybmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1bmlvciBXZWIgRGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqYW1lcy5ieXJuZUB3YXJlaG91c2UuY28udWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmFtZXMgQnlybmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1bmlvciBXZWIgRGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqYW1lcy5ieXJuZUB3YXJlaG91c2UuY28udWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmFtZXMgQnlybmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1bmlvciBXZWIgRGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqYW1lcy5ieXJuZUB3YXJlaG91c2UuY28udWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSmFtZXMgQnlybmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkp1bmlvciBXZWIgRGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqYW1lcy5ieXJuZUB3YXJlaG91c2UuY28udWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiSm90aXMgTW9vcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxlYWQgRGV2ZWxvcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJqb3Rpcy5tb29yZUB3YXJlaG91c2UuY28udWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQWxpeCBCdXJuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJIZWFkIE9mIERpZ2l0YWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImFsaXhhbnNEcmEuYnVybkB3YXJlaG91c2UuY28udWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiRGlnaXRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG86IFwiaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjUweDI1MFwiXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQnJhbmQgQ29tbXNcIixcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkppbGwgR2F0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQnJhbmQgQ29tbXMgRGlyZWN0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcImppbGwuZ2F0ZUB3YXJlaG91c2UuY28udWtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW06IFwiQnJhbmQgQ29tbXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvOiBcImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI1MHgyNTBcIlxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlJldGFpbFwiLFxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlczogW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJCdXlpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgcHJvZmlsZXM6IFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgbG9jYXRpb25zOiB7XG4gICAgICAgICAgICBsaXN0OiBbXG4gICAgICAgICAgICAgICAgXCJMb25kb25cIixcbiAgICAgICAgICAgICAgICBcIlN0YW50b24gSGFyY291cnRcIixcbiAgICAgICAgICAgICAgICBcIkludGVybmF0aW9uYWxcIixcbiAgICAgICAgICAgICAgICBcIkludGVybmF0aW9uYWwgMlwiLFxuICAgICAgICAgICAgICAgIFwiSW50ZXJuYXRpb25hbCAzXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IFwiTG9uZG9uXCJcbiAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGFsOiB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBudWxsXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZpbHRlclRlYW1zKG5hbWUpIHtcbiAgICBsZXQgeyB0ZWFtcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgdGVhbU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHRlYW1zLmZpbHRlcih0ZWFtID0+ICh0ZWFtLm5hbWUpLnRvTG93ZXJDYXNlKCkgPT09IHRlYW1OYW1lKTtcbn1cblxuZ2V0QWxsRW1wbG95ZWVzKCkge1xuICAgIGxldCB7IHRlYW1zIH0gPSB0aGlzLnN0YXRlO1xuICByZXR1cm4gdGVhbXMucmVkdWNlKCh0ZWFtcywgdGVhbSkgPT4ge1xuICAgICAgcmV0dXJuIHRlYW1zLmNvbmNhdCguLi50ZWFtLnByb2ZpbGVzKVxuICAgIH0sIFtdKSBcbn1cblxubW9kYWxIYW5kbGVyKG9wZW5TdGF0ZSwgY29udGVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgb3Blbjogb3BlblN0YXRlLFxuICAgICAgICAgICAgY29udGVudDogY29udGVudFxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBiYXNlLnN5bmNTdGF0ZSgndGVhbXMnLCB7XG4gICAgICAgIGNvbnRleHQ6IHRoaXMsXG4gICAgICAgIHN0YXRlOiAndGVhbXMnXG4gICAgfSlcbn1cblxucmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGVhbXMsIGxvY2F0aW9ucywgbW9kYWwgfSA9IHRoaXMuc3RhdGU7XG4gICAvLyBjb25zdCBhbGxFbXBsb3llZXMgPSB0ZWFtcy5tYXAodGVhbSA9PiB0ZWFtLnByb2ZpbGVzKVxuICAgIGNvbnN0IG1vZGFsSGFuZGxlciA9IHRoaXMubW9kYWxIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgY29uc3QgZmlsdGVyVGVhbXMgPSB0aGlzLmZpbHRlclRlYW1zLmJpbmQodGhpcyk7XG4gICAgY29uc29sZS5sb2codGVhbXMpXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImFwcC1jb250YWluZXJcIiArIChtb2RhbC5vcGVuID8gJyBtb2RhbC1vcGVuZWQnIDogJycpfSA+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8SGVhZGVyIHRlYW1zPXt0ZWFtc30gLz5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJhcHAtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImNvbnRyb2xzLWJhclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29udHJvbHMtYmFyX19jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XYXJlaG91c2UgRmFzaGlvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbnNEcm9wZG93biBsb2NhdGlvbnM9e2xvY2F0aW9uc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5TaWduIE91dDwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPERhc2hib2FyZCBwcm9maWxlcz17J2FsbEVtcGxveWVlcyd9IG1vZGFsSGFuZGxlcj17dGhpcy5tb2RhbEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbCBvcGVuPXt0aGlzLnN0YXRlLm1vZGFsLm9wZW59IGNvbnRlbnQ9e3RoaXMuc3RhdGUubW9kYWwuY29udGVudH0gaGFuZGxlcj17bW9kYWxIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICk7XG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9BcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUExREE7QUFtRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBRkE7QUFXQTtBQUFBO0FBREE7QUFLQTtBQUdBO0FBSkE7O0FBS0E7QUFTQTtBQVRBOztBQVdBO0FBQUE7QUFEQTtBQWhHQTtBQW9HQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7OztBQU1BO0FBQUE7O0FBR0E7QUFHQTtBQUpBO0FBREE7Ozs7QUFRQTtBQUFBO0FBRUE7QUFFQTtBQUhBOzs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==