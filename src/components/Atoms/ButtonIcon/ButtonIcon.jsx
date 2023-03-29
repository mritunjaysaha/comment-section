import styles from './buttonIcon.module.scss';

export function ButtonIcon({ children, icon: Icon, ...rest }) {
    return (
        <button className={styles.button_icon} {...rest}>
            <Icon />
            {children}
        </button>
    );
}
