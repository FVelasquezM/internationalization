import React from 'react';
import {FormattedDate} from 'react-intl';

export default class Job extends React.Component {

  	render() {

      let days = (new Date() - new Date(this.props.offer.date))/86400000;
      days = Math.trunc(days);
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.offer.name}</td>
  				<td>{this.props.offer.company}</td>
      			<td>{this.props.offer.salary}</td>
      			<td>{this.props.offer.city}</td>
      			<td>
              <FormattedDate
              value={new Date(this.props.offer.date)}
              year='numeric'
              month='long'
              day='numeric'
              weekday='long'
              />

              <div>({days} {(days > 1)? "days" : "day"} ago)</div>
            </td>
  			</tr>
  		);
	}
}