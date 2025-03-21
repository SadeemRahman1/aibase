import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({ trip }) {
    return (
        <div>
            <h2 className='font-bold text-lg'>Place to visit</h2> 
            <div>
                {trip?.tripData?.travel_plan?.itinerary?.map((item, index) => (
                    <div className='mt-5' key={index}>
                            <h2 className='font-medium text-lg'>{item.day}</h2>
                            <div className='grid md:grid-cols-2 gap-5'></div>
                            {item?.plan?.map((place, index) => (
                                    <div className='my-3' key={index}>
                                        <h2 className='font-medium text-sm text-orange-50'>{place?.timeTravel}</h2>
                                        <PlaceCardItem place={place} />
                                    </div>
                                ))
                            }
                    </div>

                ))
                }
            </div>
        </div>
    )
}

export default PlacesToVisit