import React, { Component } from "react";
import { connect } from "react-redux";

import { addToCart } from "../Actions";

class ItemList extends Component {
  renderList() {
    return this.props.items.map(item => {
      return (
        <div key={this.props.items.indexOf(item)} className="item">
          <div className="content">
            <h4 className="header">
              {item.name} : {item.price}
            </h4>
            <button
              onClick={() => this.props.addToCart(item)}
              className="ui primary button"
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    items: state.listOfItems
  };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(ItemList);
