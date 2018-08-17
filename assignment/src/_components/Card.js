import React, {Component} from 'react';
class Card extends Component {
 
      render() {
        return (
          <div className='todocard' >
            {this.props.profile.name}  {this.props.profile.marks.Maths} {this.props.profile.marks.English} {this.props.profile.marks.Science}
          </div>
        );
      }
    }
    export default Card;