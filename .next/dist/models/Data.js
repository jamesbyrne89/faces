'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.githubProvider = exports.facebookProvider = exports.base = exports.app = undefined;

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
var facebookProvider = new _firebase2.default.auth.FacebookAuthProvider();
var githubProvider = new _firebase2.default.auth.GithubAuthProvider();

exports.app = app;
exports.base = base;
exports.facebookProvider = facebookProvider;
exports.githubProvider = githubProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsc1xcRGF0YS5qcyJdLCJuYW1lcyI6WyJSZWJhc2UiLCJmaXJlYmFzZSIsImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYmFzZSIsImNyZWF0ZUNsYXNzIiwiZGF0YWJhc2UiLCJmYWNlYm9va1Byb3ZpZGVyIiwiYXV0aCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiZ2l0aHViUHJvdmlkZXIiLCJHaXRodWJBdXRoUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7O0FBRVA7O0FBRUEsSUFBTTtZQUFTLEFBQ0gsQUFDUjtnQkFGVyxBQUVDLEFBQ1o7aUJBSFcsQUFHRSxBQUNiO2VBSlcsQUFJQSxBQUNYO21CQUxXLEFBS0ksQUFDZjt1QkFOSixBQUFlLEFBTVE7QUFOUixBQUNYOztBQVFKLElBQU0sTUFBTSxDQUFDLG1CQUFBLEFBQVMsS0FBVixBQUFlLFNBQVMsbUJBQUEsQUFBUyxjQUFqQyxBQUF3QixBQUF1QixVQUFVLG1CQUFyRSxBQUFxRSxBQUFTO0FBQzlFLElBQU0sT0FBTyxpQkFBQSxBQUFPLFlBQVksSUFBaEMsQUFBYSxBQUFtQixBQUFJO0FBQ3BDLElBQU0sbUJBQW1CLElBQUksbUJBQUEsQUFBUyxLQUF0QyxBQUF5QixBQUFrQjtBQUMzQyxJQUFNLGlCQUFpQixJQUFJLG1CQUFBLEFBQVMsS0FBcEMsQUFBdUIsQUFBa0IsQUFHekM7O1FBQUEsQUFBUztRQUFULEFBQWM7UUFBZCxBQUFvQjtRQUFwQixBQUFzQyIsImZpbGUiOiJEYXRhLmpzIiwic291cmNlUm9vdCI6IkU6L1VzZXJzL0phbWVzL1dlYiBEZXYvUHJvamVjdHMvRmFjZXMifQ==