import { useSelector } from 'react-redux';
import { Button } from '../Atoms/Button/Button';

import styles from './comment.module.scss';

export function CommentTextArea({
    value,
    handleButtonClick,
    buttonText = 'send',
    handleChange,
    isEdit = false,
}) {
    const { currentUser } = useSelector((state) => state.comment);

    const userImg = currentUser?.image?.png;

    return (
        <div className={`${styles.comment_container} ${styles.comment_text_area_container}`}>
            {!isEdit ? <img src={userImg} className={styles.user_image} /> : ''}
            <textarea
                className={styles.textarea}
                placeholder='Add a comment...'
                rows={4}
                onChange={handleChange}
                value={value}
            />
            <Button onClick={handleButtonClick}>{buttonText}</Button>
        </div>
    );
}
