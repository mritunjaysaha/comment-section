import { useSelector } from 'react-redux';
import { ReactComponent as IconReply } from '../../assets/images/icon-reply.svg';
import { ReactComponent as IconDelete } from '../../assets/images/icon-delete.svg';
import { ReactComponent as IconEdit } from '../../assets/images/icon-edit.svg';
import { ButtonIcon } from '../Atoms/ButtonIcon/ButtonIcon';

import styles from './comment.module.scss';

export function CommentHeader({
    imgSrc,
    username,
    createdAt,
    handleReplyClick,
    isMyComment,
    handleDeleteClick,
}) {
    const { currentUser } = useSelector((state) => state.comment);

    return (
        <div className={styles.comment_header}>
            <div className={styles.user_info}>
                <img src={imgSrc} className={styles.user_image} />
                <p className={styles.username}>{username}</p>

                {isMyComment && currentUser.username === username ? (
                    <p className={styles.current_user_reply}>you</p>
                ) : (
                    ''
                )}
                <p className={styles.created_at}>{createdAt}</p>
            </div>
            <div className={styles.button_container}>
                {isMyComment ? (
                    <>
                        <ButtonIcon type='DELETE' icon={IconDelete} onClick={handleDeleteClick}>
                            Delete
                        </ButtonIcon>
                        <ButtonIcon icon={IconEdit}>Edit</ButtonIcon>
                    </>
                ) : (
                    <ButtonIcon icon={IconReply} onClick={handleReplyClick}>
                        Reply
                    </ButtonIcon>
                )}
            </div>
        </div>
    );
}
