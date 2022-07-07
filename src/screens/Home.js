import React from "react";
import { AppProvider } from "../context/AppContext";
import { useLocation } from "react-router-dom";
import Budget from "../components/Budget";
import RemainingBudget from "../components/RemainingBudget";
import ExpenseTotal from "../components/ExpenseTotal";
import ExpenseList from "../components/ExpenseList";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpensePlanning from "../components/ExpensePlanning";

const Home = () => {
  const location = useLocation();

  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <div style={{ flexDirection: "row" }}>
          <h3 className="mt-3">Planning Expense</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <ExpensePlanning />
            </div>
          </div>
        </div>

        <h3 className="mt-3">Expenses</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default Home;
