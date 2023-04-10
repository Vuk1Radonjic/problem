import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterenTittle, setEnteredTittle] = useState("");
  const [enterenAmount, setEnteredAmount] = useState("");
  const [enterenDate, setEnteredDate] = useState("");
  //const [userInput, setUserInput] = useState({
    //enteredTittle: "",
    //enteredAmount: "",
    //enteredDate: ""
  //});

  const tittleChangeHandler = (event) => {
    setEnteredTittle(event.target.value);
    //setUserInput({
      //...userInput,
      //enteredTittle: event.target.value
    //}); 
    //setUserInput((prevSate) => {
      //return { ...prevState, enterenTittle: event.target.value};
    //})  
  };
  
  const AmountChangerHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setUserInput({
      //...userInput,
      //enteredTittle: event.target.value
    //});
    //setUserInput((prevSate) => {
      //return { ...prevState, enterenAmount: event.target.value};
    //})
  };

  const DateChangerHandler = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({
      //...userInput,
      //enteredTittle: event.target.value
    //});
    //setUserInput((prevSate) => {
      //return { ...prevState, enterenDate: event.target.value};
    //})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      tittle: enterenTittle,
      amount: +enterenAmount,
      date: new Date(enterenDate)
    };
    props.onSaveExpenseData(expenseData)
    setEnteredTittle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return <div>
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tittle</label>
          <input type="text" value={enterenTittle} onChange={tittleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" max="0.01" value={enterenAmount} onChange={AmountChangerHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-13" value={enterenDate} onChange={DateChangerHandler}/>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  </div>
};

export default ExpenseForm;