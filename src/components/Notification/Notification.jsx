import styles from './Notification.module.css';

const Notification = ({ message }) => (
    <div className={styles.container}>
        <p>{message}</p>
    </div>
);

export default Notification;