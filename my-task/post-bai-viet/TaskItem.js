import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import styles from './TaskItem.module.css'; // Import CSS module

const TaskItem = ({ name, isCompleted }) => {
    return (
        <div className={styles.taskItem}>
            {isCompleted ? (
                <FaCheckCircle className={`${styles.taskIcon} ${styles.completed}`} />
            ) : (
                <FaTimesCircle className={`${styles.taskIcon} ${styles.pending}`} />
            )}
            <span className={styles.taskName}>{name}</span>
        </div>
    );
};

export default TaskItem;
