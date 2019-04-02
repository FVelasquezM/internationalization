import React from 'react';
import {FormattedDate, FormattedPlural, FormattedNumber, FormattedRelative, FormattedMessage} from 'react-intl';

export default class Job extends React.Component {

  	render() {


      let visits = Math.trunc(Math.random()*5000);
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.offer.name}</td>
  				  <td>{this.props.offer.company}</td>
      			<td>{this.props.offer.salary} 
              {' '}
              {(this.props.offer.salary > 1)? <FormattedMessage id='millions' /> : <FormattedMessage id='million' /> } 
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
              {' '}
              <FormattedRelative value={this.props.offer.date} />
            </td>
            <td>
              <FormattedNumber value = {visits}/>
            </td>
  			</tr>
  		);
	}
}
