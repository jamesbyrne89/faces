'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

var _jsxFileName = 'E:\\Users\\James\\Web Dev\\Projects\\Faces\\pages\\Dashboard.js?entry',
    _this = undefined;

var Dashboard = function Dashboard(props) {
    return _react2.default.createElement('div', { className: 'app-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_Header2.default, { teams: teams, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), _react2.default.createElement('main', { className: 'app-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement('header', { className: 'controls-bar', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('ul', { className: 'controls-bar__controls', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, 'Warehouse Fashions'), _react2.default.createElement(_LocationsDropdown2.default, { locations: locations, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement('button', { className: 'btn', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, 'Sign Out')))), _react2.default.createElement(Dashboard, { profiles: 'allEmployees', modalHandler: _this.modalHandler, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    })));
};

exports.default = Dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxEYXNoYm9hcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJNb2RhbCIsIlByb2ZpbGVDYXJkIiwiTG9jYXRpb25zRHJvcGRvd24iLCJIZWFkZXIiLCJMaW5rIiwiYmFzZSIsIkRhc2hib2FyZCIsInByb3BzIiwidGVhbXMiLCJsb2NhdGlvbnMiLCJtb2RhbEhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQXVCOzs7O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFHakIsSUFBTSxZQUFZLFNBQVosQUFBWSxVQUFBLEFBQUMsT0FBUyxBQUN4QjsyQkFFUSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBRUk7QUFGSjtLQUFBLGtCQUVJLEFBQUMsa0NBQU8sT0FBUixBQUFlO3NCQUFmO3dCQUZKLEFBRUksQUFDQTtBQURBO3dCQUNBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxZQUFRLFdBQVIsQUFBa0I7c0JBQWxCO3dCQUFBLEFBRUk7QUFGSjt1QkFFSSxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FESixBQUNJLEFBQ0EsdUNBQUEsQUFBQyw2Q0FBa0IsV0FBbkIsQUFBOEI7c0JBQTlCO3dCQUZKLEFBRUksQUFDQTtBQURBO3dCQUNBLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUk7QUFBSjtBQUFBLHVCQUFJLGNBQUEsWUFBUSxXQUFSLEFBQWtCO3NCQUFsQjt3QkFBQTtBQUFBO09BTmhCLEFBQ0ksQUFFSSxBQUdJLEFBQUksQUFHWiw4Q0FBQSxBQUFDLGFBQVUsVUFBWCxBQUFxQixnQkFBZ0IsY0FBYyxNQUFuRCxBQUF3RDtzQkFBeEQ7d0JBZGhCLEFBRVEsQUFHSSxBQVNJLEFBS25CO0FBTG1COztBQWZwQixBQXNCQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJEYXNoYm9hcmQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9GYWNlcyJ9