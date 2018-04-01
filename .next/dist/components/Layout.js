'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _LocationsDropdown = require('./LocationsDropdown');

var _LocationsDropdown2 = _interopRequireDefault(_LocationsDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\Faces\\components\\Layout.js';


var Layout = function Layout(props) {
    var signOut = props.signOut;
    console.log(props);
    return _react2.default.createElement('div', { className: 'app-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_Header2.default, { locations: props.locations, teams: props.teams, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement('header', { className: 'controls-bar', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('ul', { className: 'controls-bar__controls', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'Warehouse Fashions'), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('button', { className: 'btn', onClick: signOut, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, 'Sign Out')))), props.children);
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkxvY2F0aW9uc0Ryb3Bkb3duIiwiTGF5b3V0IiwicHJvcHMiLCJzaWduT3V0IiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9ucyIsInRlYW1zIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUF1Qjs7Ozs7Ozs7O0FBRTlCLElBQU0sU0FBUyxTQUFULEFBQVMsT0FBQSxBQUFDLE9BQVUsQUFDdEI7UUFBTSxVQUFVLE1BQWhCLEFBQXNCLEFBQ3RCO1lBQUEsQUFBUSxJQUFSLEFBQVksQUFDUjsyQkFFSSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNJLEFBQUMsa0NBQU8sV0FBVyxNQUFuQixBQUF5QixXQUFXLE9BQU8sTUFBM0MsQUFBaUQ7c0JBQWpEO3dCQURKLEFBQ0ksQUFDQTtBQURBO3dCQUNBLGNBQUEsWUFBUSxXQUFSLEFBQWtCO3NCQUFsQjt3QkFBQSxBQUVRO0FBRlI7dUJBRVEsY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BREosQUFDSSxBQUVBLHVDQUFBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUk7QUFBSjtBQUFBLHVCQUFJLGNBQUEsWUFBUSxXQUFSLEFBQWtCLE9BQU0sU0FBeEIsQUFBaUM7c0JBQWpDO3dCQUFBO0FBQUE7T0FQcEIsQUFFSSxBQUVRLEFBR0ksQUFBSSxBQUdmLHNCQVpULEFBRUksQUFVVyxBQUd0QjtBQWxCRCxBQW9CQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9GYWNlcyJ9