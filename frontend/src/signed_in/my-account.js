import React, { useState, useEffect } from "react";
import axios from "axios";
import NavSignedIn from "../components/signedInNav";
import { useAuth } from "../Login/Auth";
import { useNavigate } from "react-router-dom";

function MyAccount() {
  const { user } = useAuth();
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token); // Log token
    if (!user || !token) {
      console.log("User not authenticated");
      // You may want to handle this differently, like showing a message
    } else {
      axios
        .get("http://localhost:8081/tickets", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          setTickets(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  return (
    <>
      <div>
        <NavSignedIn />
      </div>
      <div className="container mt-5">
        <h2>My Account</h2>
        {tickets.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date Booked</th>
                <th>Adults</th>
                <th>Children</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.name}</td>
                  <td>{ticket.date}</td>
                  <td>{ticket.adults}</td>
                  <td>{ticket.children}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No tickets found</p>
        )}
      </div>
    </>
  );
}

export default MyAccount;