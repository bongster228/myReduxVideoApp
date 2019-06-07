import React, { Component } from "react";
import { connect } from "react-redux";

import { removeFromCart } from "../Actions";

class Cart extends Component {
  renderCart() {
    return this.props.cartItems.map(item => {
      return (
        <div key={this.props.cartItems.indexOf(item)} className="item">
          <div className="content">
            <h4>
              {item.name} : {item.price}
            </h4>
            <button
              onClick={() => this.props.removeFromCart(item)}
              className="ui red button"
            >
              Remove
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderCart()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart
  };
};

export default connect(
  mapStateToProps,
  { removeFromCart }
)(Cart);
