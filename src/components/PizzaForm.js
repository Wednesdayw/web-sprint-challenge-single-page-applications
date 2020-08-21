import React from "react";
import styled from "styled-components";

const PizzaFormText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: lightgrey;
  width: 100%;
  height: 100vh;
  padding: 3%;
  h2,
  h3 {
    color: black;
  }
  button {
    color: black;
    border-radius: 10px;
    padding: 5px;
    width: 10%;
    margin-top: 10px;
  }
`;
const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  label {
    margin: 10px;
  }
`;
const PizzaSize = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  label {
    margin: 10px;
  }
  select {
    width: 75%;
    font-size: 10px;
  }
`;

const Instruction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  label {
    margin: 10px;
  }
`;
export default function PizzaForm(props) {
  const {
    values,
    inputChange,
    checkboxChange,
    submit,
    disabled,
    errors,
  } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkboxChange(name, checked);
  };
  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  return (
    <form onSubmit={onSubmit}>
      <PizzaFormText className="form-container">
        <h2>🐱Build your own Pizza!</h2>
        <div>
          <div>{errors.name}</div>
          <div>{errors.address}</div>
          <div>{errors.size}</div>
        </div>
        <FormField>
          <label>Name </label>
          <input
            name="name"
            type="text"
            placeholder="Your Name Here"
            onChange={onInputChange}
            value={values.name}
          />

          <label>Address</label>
          <input
            name="address"
            type="text"
            placeholder="Your address here"
            onChange={onInputChange}
            value={values.address}
          />
        </FormField>
        <PizzaSize>
          <label>Pizza Size </label>
          <select onChange={onInputChange} value={values.size} name="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra-Large</option>
          </select>
        </PizzaSize>

        <h3>Toppings</h3>
        <CheckBox className="checkboxSelection">
          <label>
            <input
              type="checkbox"
              name="chicken"
              checked={values.toppings.chicken === true}
              onChange={onCheckboxChange}
            />
            Chicken
          </label>
          <label>
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.toppings.pepperoni === true}
              onChange={onCheckboxChange}
            />
            Pepperoni &nbsp;
          </label>
          <label>
            <input
              type="checkbox"
              name="spinach"
              checked={values.toppings.spinach === true}
              onChange={onCheckboxChange}
            />
            Spinach &nbsp;
          </label>
          <label>
            <input
              type="checkbox"
              id="checkbox"
              name="bacon"
              checked={values.toppings.bacon === true}
              onChange={onCheckboxChange}
            />
            Bacon &nbsp;
          </label>
        </CheckBox>

        <Instruction>
          <label>Special Instructions?</label>
          <input
            value={values.specialInstructions}
            name="specialInstructions"
            type="text"
            onChange={onInputChange}
          />
        </Instruction>

        <button id="submitBtn" disabled={disabled}>
          Submit
        </button>
      </PizzaFormText>
    </form>
  );
}