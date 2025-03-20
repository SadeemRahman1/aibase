import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/service/FirebaseConfig';

function MyTrips() {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);
  useEffect(() => {
    GetUserTrips();
  }, []);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/');
      return;
    }
    const q = query(collection(db, 'AITrip'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);
    setUserTrips([])
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      setUserTrips(preVal => [...preVal, doc.data()]);
    })
  }

  return (
      <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
        <h2 className='font-bold text-3xl'>My Trips</h2>
        <div className='grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
          {userTrips?.length > 0 ?userTrips.map((trip, index) => (
            <UserTripCardItem trip={trip} key={index}/>
          )) : [1,2,3,4,5,6].map((item, index)=>(
            <div key={index} className='h-[250] w-full bg-slate-200 animate-pulse rounded-xl'>

            </div>
          ))
          }
        </div>
      </div>
  )
}

export default MyTrips