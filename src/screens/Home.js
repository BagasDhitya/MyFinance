import React from "react";
import { AppProvider } from "../context/AppContext";
import { useLocation } from "react-router-dom";
import Budget from "../components/Budget";
import RemainingBudget from "../components/RemainingBudget";
import ExpenseTotal from "../components/ExpenseTotal";
import ExpenseList from "../components/ExpenseList";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpensePlanning from "../components/ExpensePlanning";
import axios from "axios";

const Home = () => {
  const location = useLocation();

  const email = location.state?.email;
  const token = location.state?.token;

  const handleReminder = async () => {
    try {
      const response = await axios.post(
        `https://www.googleapis.com/calendar/v3/calendars/${email}/events`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": " application/json",
          },
          data: {
            end: {
              date: "2022-07-09",
              timeZone: "Asia/Bangkok",
              dateTime: "23:30",
            },
            start: {
              date: "2022-07-08",
              timeZone: "Asia/Bangkok",
              dateTime: "22:00",
            },
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  };

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
              <ExpensePlanning onClick={() => handleReminder()} />
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
