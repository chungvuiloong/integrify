import React, {useState, useEffect} from 'react';
import {Link, link} from 'react-router-dom';


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
        console.log(userDatas);
        setUserDatas(userDatas);
    };


      return (
        <div className="Background">
                                <div className="Alignment"> 
                                      {userDatas.map(userData => (
                                          <div className = "ProfileCard" key={userData.id}>
                                              <div className = "profilePic"> {userData.name.charAt(0)}</div>
                                              <div className = "name">        {userData.name}</div>
                                              <div className = "username">   @{userData.username}</div>
                                              <div className = "website">http://{userData.website}</div>
                                              

                                              {/* button */}
                                              <Link to={`/ProfileCard/${userData.id}`}>
                                                <div className = "moreDetails">
                                                MORE DETAILS
                                                                                      
                                                </div>
                                              </Link>
                                        </div>

                                        ))}
                                  
                                  </div>
                              </div>
      )





}
  


  // ======

//   useEffect(() => {
//     fetchUserDatas();
// }, []);

// const [userDatas, setUserDatas] = useState([]);

// const fetchUserDatas = async () => {
//     const data = await fetch (
//         'https://jsonplaceholder.typicode.com/users/id'
//     );


//     const userDatas = await data.json();
//     console.log(userDatas.userData);
//     setUserDatas(userDatas.userData);
// };


// return (
//   <div className="Background">
//                           <div className="alignment"> 
//                                 {userDatas.map(userData => (
//                                     <div className = "ProfileCard" key={userData.id}>
//                                         <div className = "profilePic"> {userData.name.charAt(0)}</div>
//                                         <div className = "name">        {userData.name}</div>
//                                         <div className = "username">   @{userData.username}</div>
//                                         <div className = "website">http://{userData.website}</div>
//                                    </div>

//                                   ))}
                            
//                              </div>
//                         </div>
// )