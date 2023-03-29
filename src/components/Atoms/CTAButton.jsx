import styles from './ctaButton.module.scss';

export function CTAButton({ children, icon: Icon }) {
    return (
        <button className={styles.cta_button}>
            <Icon />
            {children}
        </button>
    );
}
