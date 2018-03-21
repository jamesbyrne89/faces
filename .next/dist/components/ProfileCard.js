"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\Users\\James\\Web Dev\\Projects\\Faces\\components\\ProfileCard.js";


var ProfileCard = function ProfileCard(props) {
    console.log(props);
    return _react2.default.createElement("div", { className: "profile-card", __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement("picture", { className: "profile-card__photo", __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement("img", { className: "profile-card__img",
        src: props.profile.photo,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }), " ", _react2.default.createElement("i", { className: "change-photo-icon fa fa-camera",
        profileToUpdate: props.profile,
        onClick: function onClick() {
            return props.modalHandler(true, "new_photo");
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, " "), " "), _react2.default.createElement("span", { className: "profile-card__name", __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, " ", props.profile.name, " "), " ", _react2.default.createElement("span", { className: "profile-card__title", __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, " ", props.profile.title, " "), " ", _react2.default.createElement("span", { className: "profile-card__email", __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, " ", props.profile.email, " "), " ");
};

exports.default = ProfileCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFByb2ZpbGVDYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvZmlsZUNhcmQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9maWxlIiwicGhvdG8iLCJtb2RhbEhhbmRsZXIiLCJuYW1lIiwidGl0bGUiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7QUFJaEIsSUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsT0FBVSxBQUMzQjtZQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7MkJBQVMsY0FBQSxTQUFLLFdBQUwsQUFBaUI7c0JBQWpCO3dCQUFBLEFBQ0w7QUFESztLQUFBLGtCQUNMLGNBQUEsYUFBUyxXQUFULEFBQXFCO3NCQUFyQjt3QkFBQSxBQUNBO0FBREE7OENBQ0ssV0FBTCxBQUFpQixBQUNqQjthQUFRLE1BQUEsQUFBTSxRQURkLEFBQ3NCOztzQkFEdEI7d0JBREEsQUFDQTtBQUFBO1FBRUcscUJBQUEsY0FBQSxPQUFHLFdBQUgsQUFBZSxBQUNsQjt5QkFBb0IsTUFEakIsQUFDdUIsQUFDMUI7aUJBQ0ksbUJBQUE7bUJBQU0sTUFBQSxBQUFNLGFBQU4sQUFBbUIsTUFBekIsQUFBTSxBQUF5QjtBQUhoQztzQkFBQTt3QkFBQTtBQUFBO09BSEgsQUFHRyxNQUpFLEFBQ0wsQUFRQSxzQkFBQSxjQUFBLFVBQU0sV0FBTixBQUFrQjtzQkFBbEI7d0JBQUE7QUFBQTtPQUEyQyxXQUFBLEFBQU0sUUFBakQsQUFBeUQsTUFUcEQsQUFTTCxNQUF3RSxxQkFBQSxjQUFBLFVBQU0sV0FBTixBQUFrQjtzQkFBbEI7d0JBQUE7QUFBQTtPQUE0QyxXQUFBLEFBQU0sUUFBbEQsQUFBMEQsT0FUN0gsQUFTbUUsTUFBMEUscUJBQUEsY0FBQSxVQUFNLFdBQU4sQUFBa0I7c0JBQWxCO3dCQUFBO0FBQUE7T0FBNEMsV0FBQSxBQUFNLFFBQWxELEFBQTBELE9BVHZNLEFBUzZJLE1BVHRKLEFBQVMsQUFXWjtBQWJELEFBZUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUHJvZmlsZUNhcmQuanMiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9GYWNlcyJ9