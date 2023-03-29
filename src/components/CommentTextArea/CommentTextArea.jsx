import { useSelector } from 'react-redux';
import { Button } from '../Atoms/Button/Button';

import styles from './commentTextArea.module.scss';

export function CommentTextArea({ handleButtonClick, buttonText = 'send' }) {
    const { currentUser } = useSelector((state) => state.comment);

    const userImg = currentUser?.image?.png;

    return (
        <div className={`${styles.comment_container} ${styles.comment_text_area_container}`}>
            <img src={userImg} className={styles.user_image} />
            <textarea className={styles.textarea} placeholder='Add a comment...' rows={4} />
            <Button onClick={handleButtonClick}>{buttonText}</Button>
        </div>
    );
}
