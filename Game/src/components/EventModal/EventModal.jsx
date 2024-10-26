import React from 'react';
import styles from "./EventModal.module.css";

const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
                <h2>{event.name}</h2>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <img src={event.image} alt={event.name} className={styles.image} />
                <p className={styles.description}>{event.description}</p>
            </div>
        </div>
    );
};

export default EventModal;
