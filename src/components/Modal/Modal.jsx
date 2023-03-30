import { Button } from '../Atoms/Button/Button';
import styles from './Modal.module.scss';

export function Modal() {
    return (
        <section className={styles.modal_section}>
            <div className={styles.modal_card}>
                <h3>Delete comment</h3>
                <p>
                    Are you sure you want to delete this comment? This will remove the comment and
                    can’t be undone.
                </p>
                <div className={styles.button_container}>
                    <Button>No, Cancel</Button>
                    <Button>Delete</Button>
                </div>
            </div>
        </section>
    );
}
