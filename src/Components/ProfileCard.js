import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function ProfileCard () {
      useEffect(() => {
        fetchUserDatas();
      }, []);

    const [userDatas, setUserDatas] = useState([]);

    const fetchUserDatas = async () => {
        const data = await fetch (
            'https://jsonplaceholder.typicode.com/users/'
        );

        const userDatas = await data.json();
        setUserDatas(userDatas);
    };

      return (
        <>
                {userDatas.map(userData => (
                    <div className = "ProfileCard" key={userData.id}>
                    <div className = "profilePic"> {userData.name.charAt(0)}</div>
                    <div className = "name">        {userData.name}</div>
                    <div className = "username">   @{userData.username}</div>
                    <div className = "website">http://{userData.website}</div>
                    <Link to={`/users/${userData.id}`}>
                        <div className = "moreDetails">MORE DETAILS</div>
                    </Link>
                    </div>
                ))}                 
        </>
      )
}