import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

    export default function BookingTable() {
        const [books, setBookings] = useState([]);
      
        useEffect(() => {
          axios.get(`http://localhost:5000/api/vet/spets`)
            .then(response => {
                console.log(response.data.mini)
              setBookings(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        }, []);
      
      
        return (
          <table>
            <thead>
              <tr>
                <th>Pet ID</th>
              </tr>
            </thead>
            <tbody>
              {books.map((petId, index) => (
                <tr key={index}>
                  <td>{petId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      }
      