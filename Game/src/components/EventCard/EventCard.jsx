import React from 'react';
import styles from "./EventCard.module.css";

const EventCard = ({ event, index, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <p>{index}</p>
      <p>{event.name}</p>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </div>
  );
};

export default EventCard;
