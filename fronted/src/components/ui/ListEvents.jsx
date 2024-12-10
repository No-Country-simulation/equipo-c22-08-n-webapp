import React, { useEffect, useState } from "react";
import moment from "moment";
import Button from "@/components/ui/Button";
import { toast } from "react-toastify"; 
import 'moment/locale/es';
import 'react-toastify/dist/ReactToastify.css';

export default function ListEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem('eventsLocalesPets');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }

    const handleStorageChange = () => {
      const updatedEvents = localStorage.getItem('eventsLocalesPets');
      if (updatedEvents) {
        const parsedEvents = JSON.parse(updatedEvents);
        if (JSON.stringify(parsedEvents) !== JSON.stringify(events)) {
          setEvents(parsedEvents);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [events]); 

  const handleRegister = (event) => {
    toast.info(`Te has inscrito en el evento: ${event.titulo}`);
  };

  return (
    <div className="mt-8 p-4 rounded-lg  
        h-[500px] overflow-y-auto overflow-hidden
        max-h-[400px] custom-scrollbar">
      <h2 className="text-3xl text-center text-beige font-bold mb-4">Lista de Eventos</h2>
      <ul className="lg:grid grid-cols-2 gap-4">
        {events.length === 0 && (
          <li className="bg-white-2 p-4 border-2 border-beige rounded-lg shadow-md h-80 mb-3 lg:mb-0">
            <p className="text-center text-gray-dark">No hay eventos programados</p>
          </li>
        )}
        {events.map(event => (
          <li key={event.id} className="bg-white-2 p-4 border-2 border-beige rounded-lg shadow-md h-80 mb-3 lg:mb-0">
            <div>
              <h3 className="text-xl font-bold text-center text-primary mb-2">{event.titulo}</h3>
              <p className="text-gray-dark bg-beige-light py-2 border-l-4 rounded border-beige pl-2 mb-1">
                {event.categoria}
              </p>
              <p className="text-gray-dark p-4 border-l-4 rounded border-beige pl-2 py-2 bg-beige-light">
                {moment(event.inicio).format('LLL')} - {moment(event.fin).format('LLL')}
              </p>
              <p className="mt-4 h-20 overflow-y-auto border-l-4 rounded border-beige pl-2 mb-2 py-2">
                {event.descripcion}
              </p>
              <Button onClick={() => handleRegister(event)} className="mt-4 p-2 bg-orange text-white-2 rounded">
                Inscribirse
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
