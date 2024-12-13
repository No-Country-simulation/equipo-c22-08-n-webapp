import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import Button from '@/components/ui/Button';
import InputForm from '@/components/ui/InputForm';
import { Plus, Trash2, Download, Info } from 'lucide-react';
import ListEvents from '@/components/ui/ListEvents'; 

moment.locale('es');
const localizer = momentLocalizer(moment);

// Los eventos iniciales
const initialEvents = [
  {
    id: 1,
    titulo: 'Día de Adopción de Perros Mayores',
    inicio: new Date(2024, 11, 15, 10, 0),  // 15 de diciembre de 2024 a las 10:00
    fin: new Date(2024, 11, 18, 12, 0),    // 15 de diciembre de 2024 a las 12:00
    descripcion: 'Ven y adopta a un perro mayor. ¡Ellos también necesitan un hogar!',
    categoria: 'Adopción'
  },
  {
    id: 2,
    titulo: 'Jornada de Puertas Abiertas',
    inicio: new Date(2024, 11, 22, 9, 0),  // 22 de diciembre de 2024 a las 09:00
    fin: new Date(2024, 11, 25, 17, 0),   // 22 de diciembre de 2024 a las 17:00
    descripcion: 'Visítanos y conoce a nuestros animales en adopción.',
    categoria: 'Adopción'
  },
  {
    id: 3,
    titulo: 'Charla de Cuidado de Mascotas',
    inicio: new Date(2024, 11, 29, 14, 0), // 30 de diciembre de 2024 a las 14:00
    fin: new Date(2024, 11, 30, 16, 0),   // 30 de diciembre de 2024 a las 16:00
    descripcion: 'Aprende a cuidar mejor a tus mascotas con nuestros expertos.',
    categoria: 'Concientización'
  },
];


Modal.setAppElement('#root');

const ShelterEvents = ({ onlySelect = false }) => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState(Views.MONTH);

  useEffect(() => {
    const storedEvents = localStorage.getItem('eventsLocalesPets');
    if (storedEvents) {
      const parsedEvents = JSON.parse(storedEvents).map(event => ({
        ...event,
        inicio: new Date(event.inicio),
        fin: new Date(event.fin)
      }));
      setEvents(parsedEvents);
    } else {
      localStorage.setItem('eventsLocalesPets', JSON.stringify(initialEvents));
      setEvents(initialEvents);
    }
  }, []);
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    titulo: '',
    inicio: '',
    fin: '',
    descripcion: '',
    categoria: 'Adopción',
  });

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
    setIsAddingEvent(false);
  };

  const handleSelectSlot = ({ start, end }) => {
    if (onlySelect) return;
    setNewEvent({ 
      ...newEvent, 
      inicio: moment(start).format('YYYY-MM-DDTHH:mm'), 
      fin: moment(end).format('YYYY-MM-DDTHH:mm') 
    });
    setIsAddingEvent(true);
    setModalIsOpen(true);
  };

  const handleAddEvent = () => {
    if (!newEvent.titulo || !newEvent.descripcion || !newEvent.inicio || !newEvent.fin) {
      toast.error('Por favor complete todos los campos obligatorios');
      return;
    }

    const newEventWithId = { 
      ...newEvent, 
      id: events.length + 1,
      inicio: new Date(newEvent.inicio),
      fin: new Date(newEvent.fin)
    };
    const updatedEvents = [...events, newEventWithId];
    setEvents(updatedEvents);
    localStorage.setItem('eventsLocalesPets', JSON.stringify(updatedEvents)); 
    toast.success('Evento agregado exitosamente!');
    closeModal();
  };

  const handleDeleteEvent = () => {
    const updatedEvents = events.filter(event => event.id !== selectedEvent.id);
    setEvents(updatedEvents);
    localStorage.setItem('eventsLocalesPets', JSON.stringify(updatedEvents)); 
    toast.success('Evento eliminado exitosamente!');
    closeModal();
  };

  const handleInputChange = (name, value) => {
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleExportEvents = () => {
    const blob = new Blob([JSON.stringify(events)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'events.json';
    link.click();
  };


  const CustomEvent = ({ event }) => {
    return (
      <div className="custom-event flex items-center">
        <span className="event-title truncate mr-2">{event.titulo}</span>
        <Info 
          size={16} 
          className="text-white cursor-pointer hover:text-gray-200" 
          onClick={() => openModal(event)}
        />
      </div>
    );
  };

  const memoizedEvents = useMemo(() => events, [events]);

  return (
    <div className="container mx-auto py-8 relative max-w-5xl">
      <div className="bg-white-2 shadow-md rounded-lg overflow-hidden">
        <Calendar
          localizer={localizer}
          events={memoizedEvents}
          startAccessor="inicio"
          endAccessor="fin"
          style={{ height: 450 }}
          selectable={!onlySelect}
          onSelectEvent={openModal}
          onSelectSlot={handleSelectSlot}
          view={view}
          onView={nextView => setView(nextView)}
          className="p-4"
          components={{
            event: CustomEvent 
          }}
          eventPropGetter={(event) => ({
            className: 'p-2 rounded-md mb-2 bg-gray text-white flex items-center justify-between',
          })}
          messages={{ 
            allDay: 'Todo el día', 
            previous: 'Anterior', 
            next: 'Siguiente', 
            today: 'Hoy', 
            month: 'Mes', 
            week: 'Semana', 
            day: 'Día', 
            agenda: 'Agenda', 
            date: 'Fecha', 
            time: 'Hora', 
            event: 'Evento', 
            noEventsInRange: 'No hay eventos en este rango.', 
            showMore: total => `+ Ver más (${total})`,
            weekHeaderFormat: { week: 'short', day: '2-digit' }, 
            dayHeaderFormat: { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' } 
          }}
        />
      </div>

      <ListEvents events={events} />

      <div className="mt-4">
        <Button onClick={handleExportEvents} className="p-2 bg-blue text-white rounded">
          Exportar Eventos
          <Download />
        </Button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Event Details"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className=" text-beige text-2xl p-6 rounded-lg  z-50">
          {selectedEvent && !isAddingEvent ? (
            <div className="bg-black text-beige text-xl p-6 rounded-lg max-w-md mx-auto">
              <h2 className="font-semibold text-center text-2xl p-4 border-b-2 border-beige mb-4">
                {selectedEvent.titulo}
              </h2>

              <p className="text-lg mb-2 ">
                <span className="font-medium text-gray">Categoría:</span> {selectedEvent.categoria}
              </p>

              <p className="text-lg mb-2 ">
                <span className="font-medium text-gray">Fecha:</span> {moment(selectedEvent.inicio).format('LL')} - {moment(selectedEvent.fin).format('LL')}
              </p>
              
              <p className="text-lg mb-2 ">
                <span className="font-medium text-gray">Hora:</span> {moment(selectedEvent.inicio).format('LT')} - {moment(selectedEvent.fin).format('LT')}
              </p>

              <p className="text-lg text-gray-300 mb-4">
                <span className="font-medium text-gray">Descripción:</span> {selectedEvent.descripcion}
              </p>
              
              <div className="flex justify-center gap-4">
                {/* <Button 
                  onClick={handleDeleteEvent}
                  className="mt-4 px-6 py-2 bg-red text-white-2 rounded-lg transition duration-300"
                >
                  Eliminar
                  <Trash2 />
                </Button> */}
                <Button 
                  onClick={closeModal} 
                  className="mt-4 px-6 py-2 bg-gray text-white-2 rounded-lg transition duration-300"
                >
                  Cerrar
                </Button>
              </div>
            </div>
          ) : (
            <div className=" p-8 rounded-lg shadow-sm text-beige bg-white-2">
              <h2 className="text-2xl font-bold mb-3">Agregar Nuevo Evento</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleAddEvent(); }} 
                className="text-gray-dark">
                <div className="mb-4">
                  <InputForm
                    id="titulo"
                    type="text"
                    label="Título"
                    name="titulo"
                    placeholder="Título del evento"
                    value={newEvent.titulo}
                    onChange={(e)=>handleInputChange('titulo', e)}
                    className="mt-1 p-2 w-full border rounded text-xl"
                  />
                </div>

                <div className="mb-4">
                  <InputForm
                    id="descripcion"
                    type="textarea"
                    label="Descripción"
                    placeholder="Descripción del evento"
                    name="descripcion"
                    value={newEvent.descripcion}
                    onChange={(e)=>handleInputChange('descripcion', e)}
                    className="mt-1 p-2 w-full border rounded text-xl"
                  />
                </div>
                <div className="mb-4">
                  <InputForm
                    id="inicio"
                    type="datetime-local"
                    label="Fecha y Hora de Inicio"
                    name="inicio"
                    value={newEvent.inicio}
                    onChange={(e)=>handleInputChange('inicio', e)}
                    className="mt-1 p-2 w-full border rounded text-xl"
                  />
                </div>
                <div className="mb-4">
                  <InputForm
                    id="fin"
                    type="datetime-local"
                    label="Fecha y Hora de Fin"
                    name="fin"
                    value={newEvent.fin}
                    onChange={(e)=>handleInputChange('fin', e)}
                    className="mt-1 p-2 w-full border rounded text-xl"
                  />
                </div>
                <div className="flex space-x-4 justify-between">
                  <Button onClick={closeModal} 
                    className="p-2 bg-red text-white-2 rounded">
                    Cancelar
                    {/* <Trash2 /> */}
                  </Button>
                  <Button
                    type="submit"
                    iconPosition="end"
                    onClick={handleAddEvent}
                    className="p-2 bg-success text-white-2 rounded"
                  >
                    Agregar
                    <Plus />
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default ShelterEvents;