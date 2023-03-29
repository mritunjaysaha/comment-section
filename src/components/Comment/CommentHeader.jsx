import { useSelector } from 'react-redux';
import { ReactComponent as IconReply } from '../../assets/images/icon-reply.svg';
import { ButtonIcon } from '../Atoms/ButtonIcon/ButtonIcon';

import styles from './comment.module.scss';

export function CommentHeader({ imgSrc, username, createdAt, handleReplyClick, isReply }) {
    const { currentUser } = useSelector((state) => state.comment);

    return (
        <div className={styles.comment_header}>
            <div className={styles.user_info}>
                <img src={imgSrc} className={styles.user_image} />
                <p className={styles.username}>{username}</p>

                {isReply && currentUser.username === username ? (
                    <p className={styles.current_user_reply}>you</p>
                ) : (
                    ''
                )}
                <p className={styles.created_at}>{createdAt}</p>
            </div>
            <ButtonIcon icon={IconReply} onClick={handleReplyClick}>
                Reply
            </ButtonIcon>
        </div>
    );
}
