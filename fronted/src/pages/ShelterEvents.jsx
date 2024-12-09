import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import Button from '@/components/ui/Button';
import InputForm from '@/components/ui/InputForm';
import { Plus, Trash2, Download } from 'lucide-react';
import ListEvents from '@/components/ui/ListEvents'; 


moment.locale('es');
const localizer = momentLocalizer(moment);

// Los eventos iniciales
const initialEvents = [
  {
    id: 1,
    titulo: 'Día de Adopción de Perros Mayores',
    inicio: new Date(2024, 5, 15, 10, 0),
    fin: new Date(2024, 5, 15, 12, 0),
    descripcion: 'Ven y adopta a un perro mayor. ¡Ellos también necesitan un hogar!',
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
];

Modal.setAppElement('#root');

const ShelterEvents = ({ onlySelect = false }) => {
  const [events, setEvents] = useState([]);

  // Cargar eventos desde localStorage o usar eventos iniciales
  useEffect(() => {
    const storedEvents = localStorage.getItem('eventsLocalesPets');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents)); // Si existen en localStorage, usarlos
    } else {
      // Si no existen, guardar los eventos iniciales
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
    setNewEvent({ ...newEvent, inicio: start, fin: end });
    setIsAddingEvent(true);
    setModalIsOpen(true);
  };

  const handleAddEvent = () => {
    console.log(newEvent)
    if (!newEvent.titulo || !newEvent.descripcion || !newEvent.inicio || !newEvent.fin) {
      toast.error('Por favor complete todos los campos obligatorios');
      return;
    }

    const newEventWithId = { ...newEvent, id: events.length + 1 };
    const updatedEvents = [...events, newEventWithId];
    setEvents(updatedEvents);
    localStorage.setItem('eventsLocalesPets', JSON.stringify(updatedEvents)); // Actualizar localStorage
    toast.success('Evento agregado exitosamente!');
    closeModal();
  };

  const handleDeleteEvent = () => {
    const updatedEvents = events.filter(event => event.id !== selectedEvent.id);
    setEvents(updatedEvents);
    localStorage.setItem('eventsLocalesPets', JSON.stringify(updatedEvents)); // Actualizar localStorage
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

  return (
    <div className="container mx-auto py-8 relative max-w-5xl">
          <h1 className="text-3xl text-beige font-bold mb-4 text-center">Calendario de Eventos del Refugio</h1>
      <div className="bg-white-2 shadow-md rounded-lg overflow-hidden">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="inicio"
          endAccessor="fin"
          style={{ height: 450 }}
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
        <div className="bg-white-2 p-6 rounded-lg  z-50">
          {selectedEvent && !isAddingEvent ? (
            <div>
              <h2 className="text-xl font-bold">{selectedEvent.titulo}</h2>
              <p>Categoría: {selectedEvent.categoria}</p>
              <p>
                Fecha: {moment(selectedEvent.inicio).format('LL')} - {moment(selectedEvent.fin).format('LL')}
              </p>
              <p>Descripción: {selectedEvent.descripcion}</p>

              <Button onClick={closeModal} className="mt-4 p-2 bg-red text-white rounded text-white-2 ">
                Cerrar
              </Button>
              <Button onClick={handleDeleteEvent} className="mt-4 p-2 bg-red text-white-2 rounded">
                Eliminar
                <Trash2 />
              </Button>
            </div>
          ) : (
            <div className="bg-white-2 p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-3">Agregar Nuevo Evento</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleAddEvent(); }} className="">
                <div className="mb-4">
                  <InputForm
                    id="titulo"
                    type="text"
                    label="Título"
                    name="titulo"
                    placeholder="Título del evento"
                    value={newEvent.titulo}
                    onChange={(e)=>handleInputChange('titulo', e)}
                    className="mt-1 p-2 w-full border rounded"
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
                    className="mt-1 p-2 w-full border rounded"
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
                    className="mt-1 p-2 w-full border rounded"
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
                    className="mt-1 p-2 w-full border rounded"
                  />
                </div>
                <div className="flex space-x-4">
                  <Button onClick={closeModal} className="p-2 bg-red text-white-2 rounded">
                    Cancelar
                    <Trash2 />
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
