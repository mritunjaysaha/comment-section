import styles from './buttonIcon.module.scss';

export function ButtonIcon({ children, icon: Icon, type, ...rest }) {
    return (
        <button
            className={`${styles.button_icon} ${
                type === 'DELETE' ? styles.button_icon_delete : ''
            }`}
            {...rest}
        >
            <Icon />
            {children}
        </button>
    );
}
