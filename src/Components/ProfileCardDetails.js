import React, {useState, useEffect} from 'react';


export default function ProfileCardDetails ({match}) {

  useEffect(() => {
    fetchUserData();
    console.log();
  }, []);

const [userData, setUserData] = useState([]);

const fetchUserData = async () => {

    const data = await fetch (
        `https://jsonplaceholder.typicode.com/users/${match.params.id}`
    );

    const userData = await data.json();
    console.log(userData);
    setUserData(userData);
};

return (
  <div className="profile-card">
        <div> - name: {userData.name}</div>
        <div> - username: {userData.username}</div>
        <div> - email: {userData.email}</div>
        <div> - phone: {userData.phone}</div>
        <div> - website: {userData.website}</div>
        <div> - address: </div>
        <li>suite:    {userData.address?.suite}</li>
        <li>city:     {userData.address?.city}</li>
        <li>zipcode:  {userData.address?.zipcode}</li> 

  </div>
)}