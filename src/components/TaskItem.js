import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaHourglassHalf } from 'react-icons/fa';
import styles from './TaskItem.module.css'; // Import CSS module

const TaskItem = ({ name, isCompleted, isInProgress = false }) => {
    return (
        <div className={styles.taskItem}>
            {isCompleted ? (
                <FaCheckCircle className={`${styles.taskIcon} ${styles.completed}`} />
            ) : isInProgress ? (
                <FaHourglassHalf className={`${styles.taskIcon} ${styles.inProgress}`} />
            ) : (
                <FaTimesCircle className={`${styles.taskIcon} ${styles.pending}`} />
            )}
            <span className={styles.taskName}>{name}</span>
        </div>
    );
};

export default TaskItem;
