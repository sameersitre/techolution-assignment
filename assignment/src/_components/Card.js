import React, {Component} from 'react';
class Card extends Component {
    cardOnClick(){
    }
      render() {
        return (
          <div className='todocard' >
            {this.props.tasks}
          </div>
        );
      }
    }
    export default Card;