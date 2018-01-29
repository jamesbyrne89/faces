'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\htdocs\\Faces\\components\\Header.js';


var Header = function Header(props) {
    console.log('header', props);
    var teams = props.teams;

    return _react2.default.createElement('header', { className: 'header', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('h1', { className: 'app-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(_link2.default, { to: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, 'faces')), _react2.default.createElement('nav', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('ul', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, 'View seating plan'), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement(_link2.default, { href: 'Teams', teams: teams, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'Teams'))))));
};

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJIZWFkZXIiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ0ZWFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBUyxTQUFULEFBQVMsT0FBQSxBQUFDLE9BQVUsQUFDdEI7WUFBQSxBQUFRLElBQVIsQUFBWSxVQURVLEFBQ3RCLEFBQXNCO1FBREEsQUFFZCxRQUZjLEFBRUosTUFGSSxBQUVkLEFBQ1I7OzJCQUNJLGNBQUEsWUFBUSxXQUFSLEFBQWtCO3NCQUFsQjt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQTBCO0FBQTFCO3VCQUEwQixBQUFDLGdDQUFLLElBQU4sQUFBUztzQkFBVDt3QkFBQTtBQUFBO09BRDlCLEFBQ0ksQUFBMEIsQUFDMUIsMkJBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUVJLHNDQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUMsZ0NBQUssTUFBTixBQUFXLFNBQVEsT0FBbkIsQUFBMEI7c0JBQTFCO3dCQUFBLEFBQWlDO0FBQWpDO3VCQUFpQyxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FSekQsQUFDSSxBQUVJLEFBQ0ksQUFHUSxBQUNJLEFBQWlDLEFBTzVEO0FBbEJELEFBb0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJFOi9Vc2Vycy9KYW1lcy9XZWIgRGV2L1Byb2plY3RzL2h0ZG9jcy9GYWNlcyJ9