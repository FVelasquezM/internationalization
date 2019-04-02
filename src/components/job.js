import React from 'react';
import {FormattedDate} from 'react-intl';
import {FormattedNumber} from 'react-intl';
import {FormattedPlural} from 'react-intl';

export default class Job extends React.Component {

  	render() {

      let days = (new Date() - new Date(this.props.offer.date))/86400000;
      days = Math.trunc(days);

      let visits = Math.trunc(Math.random()*5000);
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.offer.name}</td>
  				  <td>{this.props.offer.company}</td>
      			<td>{this.props.offer.salary} 
              {' '} 
              <FormattedPlural
                value={this.props.offer.salary}
                one='million'
                other='millions'
              />
            </td>
      			<td>{this.props.offer.city}</td>
      			<td>
              <FormattedDate
              value={new Date(this.props.offer.date)}
              year='numeric'
              month='long'
              day='numeric'
              weekday='long'
              />

              <div>({days} {' '}
                  <FormattedPlural value={days}
                  one='day'
                  other='days' /> ago)
              </div>
            </td>
            <td>
              <FormattedNumber value = {visits}/>
            </td>
  			</tr>
  		);
	}
}