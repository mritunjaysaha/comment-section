import styles from './buttonIcon.module.scss';

export function ButtonIcon({ children, icon: Icon }) {
    return (
        <button className={styles.button_icon}>
            <Icon />
            {children}
        </button>
    );
}
