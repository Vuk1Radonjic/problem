import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card.jsx";
import ExpenseDate from "./ExpenseDate.jsx";

const ExpenseItem = (props) => {
  const [tittle, setTittle] = useState(props.title);

  const clickHandler = () => {
    setTittle("Updated!");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{tittle}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Tittle</button>
    </Card>
  );
}

export default ExpenseItem;