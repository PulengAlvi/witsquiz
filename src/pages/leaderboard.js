import { db } from "../config/firebase";
//import{ ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import React , { useEffect } from "react";
import { useState } from "react";
import firebase from 'firebase/app';
import {auth} from "../config/firebase"
import 'firebase/auth';
import { getDatabase, ref, orderByValue,orderByChild, query, onValue } from 'firebase/database';


//Marks stored in a sorted array in db 
//Order TextViews according to an array from the database
//Display Name , score and position of the person on the learderboard

export const Learderboard = () => {
  const [data, setdata] = useState({});

  const getData = () => {
    const dataRef = ref(db, '/UserMarks');
    
    // Create a query to order the data by 'userScore' in descending order
    const orderedDataRef = query(dataRef, orderByChild('userScore'));
    
    onValue(orderedDataRef, (snapshot) => {
      if (snapshot.exists()) {
        const orderedData = snapshot.val();
        
        // Convert the object to an array
        // const orderedArray = Object.entries(orderedData).map(([key, value]) => ({
        //   id: key,
        //   ...value,
        // }));
        const orderedArray = Object.entries(orderedData)
          .map(([key, value]) => ({ id: key, ...value }))
          .sort((a, b) => b.userScore - a.userScore);

        setdata(orderedArray);
        
        // Reverse the array to get descending order
       // const descendingOrderArray = orderedArray.reverse();
        
     //   setdata(orderArray);
      } else {
        console.log('No data available');
      }
    });
  };
  
  useEffect(() => {
    getData();
  }, []);
  

  return (
    <div>
      <h1>Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Quiz Title</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{data[id].userName}</td>
                <td>{data[id].quiztittle}</td>
                <td>{data[id].userScore}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Learderboard;