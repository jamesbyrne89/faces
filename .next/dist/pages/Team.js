'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProfileCard = require('../components/ProfileCard');

var _ProfileCard2 = _interopRequireDefault(_ProfileCard);

require('../styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\Team.js?entry';


var Team = function Team(props) {
    console.log(props);
    var filterTeams = props.filterTeams,
        team = props.team,
        match = props.match;

    var teamMembers = props.filterTeams(match.params.name)[0].profiles;
    console.log(teamMembers);
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('h2', { className: 'page-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, props.match.params.name), _react2.default.createElement('ul', { className: 'app-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, teamMembers.map(function (item, i) {
        return _react2.default.createElement('li', { key: i, __source: {
                fileName: _jsxFileName,
                lineNumber: 14
            }
        }, _react2.default.createElement(_ProfileCard2.default, { modalHandler: props.modalHandler, profile: item, team: item, __source: {
                fileName: _jsxFileName,
                lineNumber: 14
            }
        }));
    })));
};

exports.default = Team;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxUZWFtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvZmlsZUNhcmQiLCJUZWFtIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiZmlsdGVyVGVhbXMiLCJ0ZWFtIiwibWF0Y2giLCJ0ZWFtTWVtYmVycyIsInBhcmFtcyIsIm5hbWUiLCJwcm9maWxlcyIsIm1hcCIsIml0ZW0iLCJpIiwibW9kYWxIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPOzs7Ozs7O0FBRVAsSUFBTSxPQUFPLFNBQVAsQUFBTyxZQUFTLEFBQ2xCO1lBQUEsQUFBUSxJQURVLEFBQ2xCLEFBQVk7UUFETSxBQUVWLGNBRlUsQUFFbUIsTUFGbkIsQUFFVjtRQUZVLEFBRUcsT0FGSCxBQUVtQixNQUZuQixBQUVHO1FBRkgsQUFFUyxRQUZULEFBRW1CLE1BRm5CLEFBRVMsQUFDM0I7O1FBQU0sY0FBZSxNQUFBLEFBQU0sWUFBWSxNQUFBLEFBQU0sT0FBekIsQUFBQyxBQUErQixNQUFoQyxBQUF1QyxHQUEzRCxBQUE4RCxBQUM5RDtZQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1I7MkJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQTRCO0FBQTVCO2FBQTRCLEFBQU0sTUFBTixBQUFZLE9BRDVDLEFBQ0ksQUFBK0MsQUFDbkQsdUJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNLO0FBREw7bUJBQ0ssQUFBWSxJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sR0FBUDsrQkFBYSxjQUFBLFFBQUksS0FBSixBQUFTOzBCQUFUOzRCQUFBLEFBQVk7QUFBWjtTQUFBLGtCQUFZLEFBQUMsdUNBQVksY0FBYyxNQUEzQixBQUFpQyxjQUFjLFNBQS9DLEFBQXdELE1BQU0sTUFBOUQsQUFBb0U7MEJBQXBFOzRCQUF6QixBQUFhLEFBQVk7QUFBQTs7QUFKbEQsQUFDSSxBQUVBLEFBQ0ssQUFJaEI7QUFiRCxBQWVBOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRlYW0uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9GYWNlcyJ9