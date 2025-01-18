import React, { useEffect, useState } from 'react'
import Section_title from '../Common/Section_title'
import Popular_Card from '../Common/Popular_Card'

export default function From_menu() {

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then((res) => res.json())
        .then((data) => {
            const popularData = data.filter(item => item.category === 'popular')
            setData(popularData)
        })
        
    },[])

    console.log(data);
    

  return (
    <div className='pb-8'>
        <Section_title
        subHeading={'---Check it out---'}
        heading={'FROM OUR MENU'}
        >
        </Section_title>

        <div className='max-w-4xl grid lg:grid-cols-2 gap-x-5 m-auto px-3:'>
            {
                data.map((data) => <Popular_Card 
                key={data._id}
                data={data}
                ></Popular_Card>)
            }
        </div>

    </div>
  )
}
