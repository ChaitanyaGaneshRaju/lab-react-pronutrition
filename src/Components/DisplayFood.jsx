import React, { Component } from "react";
import DisplayItems from "./DisplayItems";
import {
  Container,
  CaloriesList,
  WrongButton,
} from "../Styled Components/DisplayItemStyle";

class DisplayFood extends Component {
  displayList = () => {
    return this.props.items
      .filter((item) => {
        return item.name ===this.props.name;
      })
      .map((item) => {
        return (
          <CaloriesList>
            <label>{item.itemsAddedToList}{item.name}={item.itemsAddedToList*item.calories}</label>
            <WrongButton>x</WrongButton>
          </CaloriesList>
        );
      });
  };
  render() {
    return (
      <div>
        <Container>
            <DisplayItems items={this.props.items} />
        </Container>
      </div>
    );
  }
}

export default DisplayFood;
