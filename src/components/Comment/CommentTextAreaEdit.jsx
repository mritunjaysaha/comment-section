import { CommentTextArea } from './CommentTextArea';

import styles from './comment.module.scss';

export function CommentTextAreaEdit({ children, handleButtonClick, value, handleChange }) {
    return (
        <div className={`${styles.comment_container} ${styles.comment_text_area_edit}`}>
            {children}
            <CommentTextArea
                handleButtonClick={handleButtonClick}
                value={value}
                handleChange={handleChange}
                buttonText={'update'}
                isEdit={true}
            />
        </div>
    );
}
