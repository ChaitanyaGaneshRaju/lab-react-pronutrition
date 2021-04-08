import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1em;
  padding: 1em;
`;

export const FoodContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`;

export const FoodList = styled.div`
  background-color: rgba(207, 214, 206, 255);
  border: 1px solid rgba(90, 34, 206, 255);
  padding: 1em;
  display: flex;
  flex-direction: row;
  row-gap: 2em;
  justify-content: space-between;
`;
export const CaloriesContainer = styled.div`
  width: 50%;
`;

export const FoodImage = styled.img`
  width: 80px;
  height: 80px;
`;
export const FoodInfo = styled.div``;

export const FoodItemsTextField = styled.input`
  height: 2em;
  color: rgba(90, 34, 206, 255);
  border: 1px solid rgba(90, 34, 206, 255);
`;
export const AddButton = styled.button`
  background-color: rgba(90, 34, 206, 255);
  border: none;
  font-weight: bolder;
  color: white;
  cursor: pointer;
`;

export const WrongButton = styled(AddButton)``;

export const CaloriesInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
`;

export const CaloriesList = styled.div`
  margin: 0 20% 0 10%;
  height: 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
