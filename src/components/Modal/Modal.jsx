import { useDispatch, useSelector } from 'react-redux';
import {
    closeDeleteModal,
    deleteComment,
    updateLocalStorageComments,
} from '../../redux/slice/commentSlice';
import { Button } from '../Atoms/Button/Button';
import styles from './Modal.module.scss';

export function Modal() {
    const dispatch = useDispatch();

    function handleCloseClick() {
        dispatch(closeDeleteModal());
    }

    function handleDeleteClick() {
        dispatch(deleteComment());
        dispatch(closeDeleteModal());
        dispatch(updateLocalStorageComments());
    }

    return (
        <section className={styles.modal_section}>
            <div className={styles.modal_card}>
                <h3>Delete comment</h3>
                <p>
                    Are you sure you want to delete this comment? This will remove the comment and
                    can’t be undone.
                </p>
                <div className={styles.button_container}>
                    <Button onClick={handleCloseClick}>No, Cancel</Button>
                    <Button onClick={handleDeleteClick}>Delete</Button>
                </div>
            </div>
        </section>
    );
}
