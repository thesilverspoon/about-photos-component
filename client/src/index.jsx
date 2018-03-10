import React from 'react';
import ReactDOM from 'react-dom';
import data from '../../data/sampleData.js'

import SummaryView from './SummaryView.jsx';

ReactDOM.render(<SummaryView id={data[70]}/>, document.getElementById('main'));
