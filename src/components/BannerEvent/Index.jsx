import './Index.css'

import eventsData from '../../store/events'

import Breadcrumb from '../Breadcrumbs/Index';
import {
  useParams,
  Link
} from 'react-router-dom';

import React, { useState, useEffect } from "react";

function BannerEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    const currentEvent = eventsData
      .find((event) => event.id == id);

    setEvent(currentEvent);
  }, [])
  
  const links = [
    {
      path: '/home',
      title: 'Home'
    },
    {
      path: `/home`,
      title: 'Eventos'
    },
    {
      path: `/event/${id}`,
      title: `${event.name}`
    },
  ];

  return (
    <div className="BannerEventContainer">
      <Breadcrumb links={links}/>
      
      <div className="Event">
        <div>
          <span>{ event.eventDate }</span>
          <p>{ event.description }</p>
          <h1>{ event.name }</h1>
        </div>

        <div className="Address">
          <p>
            { event.address }
          </p>
          <Link to={`/event/${id}/ticket`}>
            <button>Comprar ingressos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerEvent