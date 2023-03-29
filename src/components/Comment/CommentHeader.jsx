import { ReactComponent as IconReply } from '../../assets/images/icon-reply.svg';
import { ButtonIcon } from '../Atoms/ButtonIcon/ButtonIcon';

import styles from './comment.module.scss';

export function CommentHeader({ imgSrc, username, createdAt, handleReplyClick }) {
    return (
        <div className={styles.comment_header}>
            <div className={styles.user_info}>
                <img src={imgSrc} className={styles.user_image} />
                <p className={styles.username}>{username}</p>
                <p className={styles.created_at}>{createdAt}</p>
            </div>
            <ButtonIcon icon={IconReply} onClick={handleReplyClick}>
                Reply
            </ButtonIcon>
        </div>
    );
}
