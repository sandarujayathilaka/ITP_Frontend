import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

    export default function BookingTable() {
        const [books, setBookings] = useState([]);
      
        useEffect(() => {
          axios.get(`http://localhost:5000/api/vet/spets`)
            .then(response => {
                console.log(response.data)
              setBookings(response.data.books);
            })
            .catch(error => {
              console.log(error);
            });
        }, []);
      
      
        return (

          <div className='mt-[300px] ml-[500px]'>
          <table className="w-1/2 bg-bgsec rounded-[10px]" id="myTable">
              <thead className="bg-secondary rounded-[10px] text-white">
                <tr className="h-[40px]">
                  <th className="w-[20%]">Booking ID</th>
                  <th className="">Number of pets</th>
                  <th className="">Start-date</th>
                  <th className="">End-date</th>
                  <th className="">status</th>
                  <th className="">Edit</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody className="">
                {books.map((item) => (
                  <tr
                    key={item._id}
                    className="h-[55px] border-[1px] border-gray-400"
                  >
                    <td>{item._id}</td>
                    <td className="text-center">{item.petCount}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td className="text-center rounded-[100px] text-white">
                      <p className="bg-green-600 h-[27px] rounded-[30px]">
                        {item.status}
                      </p>
                    </td>
                    <td className="text-center">
                   
                    </td>
                    <td className="text-center">
                   
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            </div>
        );
      }
      