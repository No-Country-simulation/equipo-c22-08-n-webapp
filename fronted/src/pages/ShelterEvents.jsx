import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es'
import Button from '@/components/ui/Button';
import InputForm from '@/components/ui/InputForm';

import { Plus, Trash2 } from 'lucide-react';

moment.locale('es');
const localizer = momentLocalizer(moment);

const initialEvents = [
  {
    id: 1,
    titulo: 'Día de Adopción de Perros Mayores',
    inicio: new Date(2024, 5, 15, 10, 0), // fecha y hora
    fin: new Date(2024, 5, 15, 12, 0),
    descripcion: 'Ven y adopta a un perro mayor. ¡Ellos también necesitan un hogar! d ansduas asdiasduhasbdasd asuidabsduabsdauDNDNSJF SDF IS DFSDF SDFSDIF DSF SDUF',
    categoria: 'Adopción'
  },
  {
    id: 2,
    titulo: 'Jornada de Puertas Abiertas',
    inicio: new Date(2024, 5, 22, 9, 0),
    fin: new Date(2024, 5, 22, 17, 0),
    descripcion: 'Visítanos y conoce a nuestros animales en adopción.',
    categoria: 'Adopción'
  },
  {
    id: 3,
    titulo: 'Charla de Cuidado de Mascotas',
    inicio: new Date(2024, 5, 30, 14, 0),
    fin: new Date(2024, 5, 30, 16, 0),
    descripcion: 'Aprende a cuidar mejor a tus mascotas con nuestros expertos.',
    categoria: 'Concientización'
  },
  {
    id: 4,
    titulo: 'Charla de Cuidado de Mascotas',
    inicio: new Date(2024, 5, 30, 14, 0),
    fin: new Date(2024, 5, 30, 16, 0),
    descripcion: 'Aprende a cuidar mejor a tus mascotas con nuestros expertos.',
    categoria: 'Concientización'
  },
];

Modal.setAppElement('#root');

const ShelterEvents = ({ onlySelect = false }) => {
  const [events, setEvents] = useState(initialEvents);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    titulo: '',
    inicio: '',
    fin: '',
    descripcion: '',
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

  const handleSelectSlot = ({ titulo, inicio, fin, descripcion, categoria }) => {
    if (onlySelect) return;
    setNewEvent({ titulo, inicio, fin, descripcion, categoria });
    setIsAddingEvent(true);
    setModalIsOpen(true);
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    toast.success('Evento agregado exitosamente!');
    closeModal();
  };

  function handleInputChange (e) {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleRegister = (event) => {
    toast.info(`Te has inscrito en el evento: ${event.titulo}`);
  };

  return (
    <div className="container mx-auto my-8 relative max-w-5xl">
      <h1 className="text-3xl font-bold mb-4 text-center">Calendario de Eventos del Refugio</h1>
      <div className="bg-white-2 shadow-md rounded-lg overflow-hidden">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="inicio"
          endAccessor="end"
          style={{ height: 450, }}
          selectable={!onlySelect}
          onSelectEvent={openModal}
          onSelectSlot={handleSelectSlot}
          className="p-4"
          eventPropGetter={(event) => ({
            className: 'p-2 rounded-md mb-2',
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

      <div className="mt-8  p-4 rounded-lg  shadow-lg  h-96 overflow-y-auto ">
        <h2 className="text-3xl text-center text-gray-dark font-bold mb-4">Lista de Eventos</h2>
        <ul className=" lg:grid grid-cols-2 gap-4">

          {events.length === 0 && (
            <li className="bg-white-2 p-4 border-2
              border-beige rounded-lg shadow-md
              h-80
              mb-3 lg:mb-0">
              <p className="text-center text-gray-dark">No hay eventos programados</p>
            </li>
            )}

          {events.map(event => (
            <li key={event.id} 
                    className="bg-white-2 p-4 border-2
                         border-beige rounded-lg shadow-md
                         h-80
                         mb-3 lg:mb-0">
              <div>
                <h3 className="text-xl font-bold text-center text-primary mb-2">{event.titulo}</h3>
                <p className="text-gray-dark bg-beige-light py-2
                    border-l-4 rounded border-beige pl-2 mb-1 ">
                      {event.categoria}
                </p>
                <p className="text-gray-dark p-4 
                    border-l-4 rounded border-beige pl-2 py-2 bg-beige-light">
                    {moment(event.inicio).format('LLL')} - {moment(event.fin).format('LLL')}</p>
                <p className="mt-4 h-20 overflow-y-auto
                       border-l-4 rounded border-beige pl-2 mb-2 py-2">
                  {event.descripcion}
                </p>

                <Button onClick={() => handleRegister(event)} 
                  className="mt-4 p-2 bg-orange text-white-2 rounded">
                  Inscribirse
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Event Details"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="bg-white-2 p-6 rounded-lg shadow-lg z-50">
          {selectedEvent && !isAddingEvent ? (
            <div>
              <h2 className="text-xl font-bold">{selectedEvent.titulo}</h2>
              <p>Categoría: {selectedEvent.categoria}</p>
              <p className=''>
                Fecha: {moment(selectedEvent.inicio).format('LL')} - {moment(selectedEvent.end).format('LL')}
              </p>
              <p>Descripción: {selectedEvent.descripcion}</p>

              <Button onClick={closeModal} 
                className="mt-4 p-2 bg-red text-white rounded text-white-2 ">
                Cerrar
              </Button>
            </div>
          ) : (
            <div className='bg-white-2 p-8 rounded-lg shadow-sm'>
              <h2 className="text-xl font-bold mb-3 ">Agregar Nuevo Evento</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddEvent();
                }}
                className=''
              >
                <div className="mb-4">
                  <InputForm
                    id="titulo"
                    type="text"
                    label="Título"
                    name="titulo"
                    placeholder="Título del evento"
                    value={newEvent.titulo}
                    onChange={()=>handleInputChange(this)}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>

                <div className="mb-4">
                  <InputForm
                    id='descripcion'
                    type='textarea'
                    label='Descripción'
                    placeholder='Descripción del evento'
                    name='descripcion'
                    value={newEvent.descripcion}
                    onChange={()=>handleInputChange(this)}
                    className='mt-1 p-2 w-full border rounded'
                  />
                </div>
                <div className="mb-4">
                  <InputForm
                    id="inicio"
                    type="datetime-local"
                    label="Fecha y Hora de Inicio"
                    name="inicio"
                    value={newEvent.inicio}
                    onChange={()=>handleInputChange(this)}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="mb-4">
                  <InputForm
                    id="fin"
                    type="datetime-local"
                    label="Fecha y Hora de Fin"
                    name="fin"
                    value={newEvent.end}
                    onChange={()=>handleInputChange(this)}
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="flex space-x-4">
                  <Button onClick={closeModal} 
                    className="p-2 bg-red text-white-2 rounded">
                    Cancelar
                    <Trash2/>
                  </Button>
                  <Button
                    type="button"
                    iconPosition="end"
                    onClick={handleAddEvent}
                    className="p-2 bg-success text-white-2 rounded"
                  >
                    Agregar
                    <Plus/>
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
