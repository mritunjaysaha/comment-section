import styles from './button.module.scss';

export function Button({ children, ...rest }) {
    return (
        <button className={styles.button} {...rest}>
            {children}
        </button>
    );
}
