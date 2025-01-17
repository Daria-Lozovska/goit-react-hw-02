import styles from './Feedback.module.css';

const Feedback = ({ message }) => (
    <div className={styles.container}>
        <p>{message}</p>
    </div>
);

export default Feedback;