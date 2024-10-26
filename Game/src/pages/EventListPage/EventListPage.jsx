import React, { useState } from 'react';
import styles from "./EventListPage.module.css";
import SearchBar from '../../components/SearchBar/SearchBar';
import eventsData from "../../data/eventsData.json";
import EventCard from '../../components/EventCard/EventCard';
import EventModal from '../../components/EventModal/EventModal';

const EventListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <h1 className={styles.heading}>EventSpot Lite</h1>
      <SearchBar onSearch={setSearchTerm} />

      <div className={styles.header}>
        <span>#</span>
        <span>Name</span>
        <span>Date</span>
        <span>Location</span>
      </div>

      {filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => (
          <EventCard key={event.id} event={event} index={index + 1} onClick={() => openModal(event)} />
        ))
      ) : (
        <p className={styles.noDataMessage}>No events available. Please add some events.</p>
      )}

      {isModalOpen && <EventModal event={selectedEvent} onClose={closeModal} />}
    </div>
  );
};

export default EventListPage;
