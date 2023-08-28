import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      const employeeData = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=1001`
      );
      const res = await employeeData.json();
      setData(res);
    }
    getData();
  }, [count]);
  console.log(data);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add Employee
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Age</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>
                <img src={item.imageUrl} alt="" />
              </td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.dob}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
              <td>{item.contactNumber}</td>
              <td>{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="btn"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Remove Employee
      </button>
    </>
  );
};

export default Useeffect;
