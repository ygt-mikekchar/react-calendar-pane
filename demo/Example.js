import React from 'react';
import Calendar from '../lib/Calendar.js';
import moment from 'moment';


var Example = React.createClass({

    onSelect: function (date) {
        if (moment().isSame(date, 'month')) {
            console.info('onSelect', date);
        } else {
            return false;
        }
    },

    render: function() {
        let dayClasses = function (date) {
            let day = date.isoWeekday();
            if (day == 6 || day == 7) {
                return(['weekend'])
            }
            return([])
        };
        return (
            <Calendar onSelect={this.onSelect} dayClasses={dayClasses}/>
        );
    }

});

React.render(<Example />, document.body);
