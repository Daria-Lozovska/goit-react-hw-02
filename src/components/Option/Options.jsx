import styles from './Options.module.css';

const Options = ({ options, onLeaveFeedback, onReset, showReset }) => (
    <div className={styles.container}>
        {options.map(option => (
            <button
                key={option}
                className={styles.button}
                onClick={() => onLeaveFeedback(option)}
            >
                {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
        ))}
        {showReset && (
            <button className={styles.reset} onClick={onReset}>
                Reset
            </button>
        )}
    </div>
);

export default Options;