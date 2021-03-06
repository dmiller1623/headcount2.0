import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    let currentState = this.state.clicked;
    this.setState({ clicked: !currentState });
    this.props.removeSelected(this.props.location);
    if (this.props.selected) {
      return; 
    } else {
      this.props.displaySelected(this.props);
    }
    
  }

  render() {
    return (
      <div className={this.state.clicked ||
      this.props.selected ? 'selectedCard': 'cards'} 
      onClick={this.handleClick}
      >
        <h2>{this.props.location}</h2>
        {
          Object.keys(this.props.stats).map((stat, index) => {
            return (
              <article key={index}>
                <ul className={this.props.stats[stat] < 0.5 ?
                  'highNum' : 'lowNum'}>
                  {stat}: {this.props.stats[stat]}
                </ul>
              </article>
            );
          })
        }
      </div>
    );
  }
}

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object, 
  displaySelected: PropTypes.func,
  displayCompared: PropTypes.func,
  removeSelected: PropTypes.func,
  selected: PropTypes.bool
};


export default Card;