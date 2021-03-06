'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Week = _react2['default'].createClass({
    displayName: 'Week',

    render: function render() {
        return _react2['default'].createElement(
            'tr',
            { className: 'Week' },
            this.props.children
        );
    }
});

exports['default'] = Week;
module.exports = exports['default'];