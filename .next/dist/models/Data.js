'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.facebookProvider = exports.base = exports.app = undefined;

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

exports.app = app;
exports.base = base;
exports.facebookProvider = facebookProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsc1xcRGF0YS5qcyJdLCJuYW1lcyI6WyJSZWJhc2UiLCJmaXJlYmFzZSIsImNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiYmFzZSIsImNyZWF0ZUNsYXNzIiwiZGF0YWJhc2UiLCJmYWNlYm9va1Byb3ZpZGVyIiwiYXV0aCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7OztBQUVQOztBQUVBLElBQU07WUFBUyxBQUNILEFBQ1I7Z0JBRlcsQUFFQyxBQUNaO2lCQUhXLEFBR0UsQUFDYjtlQUpXLEFBSUEsQUFDWDttQkFMVyxBQUtJLEFBQ2Y7dUJBTkosQUFBZSxBQU1RO0FBTlIsQUFDWDs7QUFRSixJQUFNLE1BQU0sQ0FBQyxtQkFBQSxBQUFTLEtBQVYsQUFBZSxTQUFTLG1CQUFBLEFBQVMsY0FBakMsQUFBd0IsQUFBdUIsVUFBVSxtQkFBckUsQUFBcUUsQUFBUztBQUM5RSxJQUFNLE9BQU8saUJBQUEsQUFBTyxZQUFZLElBQWhDLEFBQWEsQUFBbUIsQUFBSTtBQUNwQyxJQUFNLG1CQUFtQixJQUFJLG1CQUFBLEFBQVMsS0FBdEMsQUFBeUIsQUFBa0IsQUFHM0M7O1FBQUEsQUFBUztRQUFULEFBQWM7UUFBZCxBQUFvQiIsImZpbGUiOiJEYXRhLmpzIiwic291cmNlUm9vdCI6IkU6L1VzZXJzL0phbWVzL1dlYiBEZXYvUHJvamVjdHMvRmFjZXMifQ==