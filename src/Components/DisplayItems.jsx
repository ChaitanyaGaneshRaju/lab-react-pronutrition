import React, { Component } from "react";
import Food from "../Food.json";
import {
  FoodContainer,
  FoodList,
  FoodImage,
  FoodInfo,
  FoodItemsTextField,
  AddButton,
  CaloriesContainer,
  CaloriesInfo,
  CaloriesList,
  WrongButton,
} from "../Styled Components/DisplayItemStyle";

let food = [...Food];

class DisplayItems extends Component {
  constructor() {
    super();
    this.state = {
      items: [...Food],
    };
  }

  addItemToList = () => {
    this.setState({
      items: food,
    });
  };

  removeItemFromList = (name) => {
    food.forEach((item) => {
      if (item.name === name) item.itemsAddedToList = 0;
    });
    this.setState({
      items: food,
    });
  };

  validateCount = (e, name) => {
    if (e.target.value < 1 ) e.target.value = "";
    food.forEach((item) => {
      if (item.name === name) item.itemsAddedToList = e.target.value;
    });
  };

  renderItems = () => {
    return this.props.items.map((data) => {
      return (
        <React.Fragment key={data.name}>
          <FoodList>
            <FoodImage src={data.image} alt="" />
            <FoodInfo>
              <h4>{data.name}</h4>
              <label>{data.calories}</label>
            </FoodInfo>
            <div>
              <FoodItemsTextField
                type="number"
                placeholder="Enter Items Count"
                onChange={(e) => this.validateCount(e, data.name)}
              />
              <AddButton onClick={() => this.addItemToList()}>+</AddButton>
            </div>
          </FoodList>
        </React.Fragment>
      );
    });
  };

  
  renderList = () => {
    return this.state.items
      .filter((item) => {
        return item.itemsAddedToList > 0;
      })
      .map((item) => {
        return (
          <React.Fragment key={item.name}>
            <CaloriesList>
              <label>
                {item.itemsAddedToList} {item.name}=
                {item.itemsAddedToList * item.calories}
              </label>
              <WrongButton onClick={() => this.removeItemFromList(item.name)}>
                x
              </WrongButton>
            </CaloriesList>
          </React.Fragment>
        );
      });
  };


  render() {
    return (
      <React.Fragment>
        <FoodContainer>{this.renderItems()}</FoodContainer>
        <CaloriesContainer>
          <h3>Today's Food Calories</h3>
          <CaloriesInfo>{this.renderList()}</CaloriesInfo>
        </CaloriesContainer>
      </React.Fragment>
    );
  }
}

export default DisplayItems;
