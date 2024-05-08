import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className='container mx-auto flex flex-col space-y-2 items-center space-x-3 p-3 max-w-7xl md:space-y-0 md:flex-row'>
                <div className='w-full h-64 md:max-w-56 select-none hover:blur-sm transition-all duration-300'>
                    <img className='w-full h-full object-cover rounded-lg' src={props.item.img} alt="Image" />
                </div>
                <div>
                    <i class="ri-map-pin-line text-red-500"></i>
                    <span className='text-slate-500'>{props.item.location}</span>
                    <span className='ml-1 text-slate-400'><a className='underline text-xs' href={props.item.mapLink}>View on Google Maps</a></span>
                    <h1 className='text-3xl font-semibold mb-7'>{props.item.title}</h1>
                    <p className='space-x-1 font-semibold text-sm mb-2'><span>{props.item.startDate}</span><span>-</span><span>{props.item.endDate}</span></p>
                    <p className='text-sm leading-6'>{props.item.info}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
