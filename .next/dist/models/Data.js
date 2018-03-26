'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.base = exports.app = undefined;

var _reBase = require('re-base');

var _reBase2 = _interopRequireDefault(_reBase);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Firebase

var config = {
    apiKey: 'AIzaSyAJPmiX_d1DzFALvH_6_IPKfBu_QZN6a2A',
    authDomain: 'faces-4a0b7.firebaseapp.com',
    databaseURL: 'https://faces-4a0b7.firebaseio.com',
    projectId: 'faces-4a0b7',
    storageBucket: 'faces-4a0b7.appspot.com',
    messagingSenderId: '353398490697'
};

var app = !_firebase2.default.apps.length ? _firebase2.default.initializeApp(config) : _firebase2.default.app();
var base = _reBase2.default.createClass(app.database());

exports.app = app;
exports.base = base;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsc1xcRGF0YS5qcyJdLCJuYW1lcyI6WyJSZWJhc2UiLCJmaXJlYmFzZSIsImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYmFzZSIsImNyZWF0ZUNsYXNzIiwiZGF0YWJhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7O0FBRVA7O0FBRUEsSUFBTTtZQUFTLEFBQ0gsQUFDUjtnQkFGVyxBQUVDLEFBQ1o7aUJBSFcsQUFHRSxBQUNiO2VBSlcsQUFJQSxBQUNYO21CQUxXLEFBS0ksQUFDZjt1QkFOSixBQUFlLEFBTVE7QUFOUixBQUNYOztBQVFKLElBQU0sTUFBTSxDQUFDLG1CQUFBLEFBQVMsS0FBVixBQUFlLFNBQVMsbUJBQUEsQUFBUyxjQUFqQyxBQUF3QixBQUF1QixVQUFVLG1CQUFyRSxBQUFxRSxBQUFTO0FBQzlFLElBQU0sT0FBTyxpQkFBQSxBQUFPLFlBQVksSUFBaEMsQUFBYSxBQUFtQixBQUFJLEFBRXBDOztRQUFBLEFBQVM7UUFBVCxBQUFjIiwiZmlsZSI6IkRhdGEuanMiLCJzb3VyY2VSb290IjoiRTovVXNlcnMvSmFtZXMvV2ViIERldi9Qcm9qZWN0cy9GYWNlcyJ9