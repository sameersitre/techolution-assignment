import React, {Component} from 'react';
class Card extends Component {
 
      render() {
        return (
          <div className='todocard' >
            {this.props.profile.name}
          </div>
        );
      }
    }
    export default Card;