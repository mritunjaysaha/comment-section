import placeholder from '../../assets/images/avatars/image-amyrobson.webp';

import { ReactComponent as IconReply } from '../../assets/images/icon-reply.svg';
import { CTAButton } from '../Atoms/CTAButton';

import styles from './comment.module.scss';

export function CommentHeader({ imgSrc, username = 'amyrobson', createdAt = '1 month ago' }) {
    return (
        <div className={styles.comment_header}>
            <div className={styles.user_info}>
                <img src={imgSrc} className={styles.user_image} />
                <p className={styles.username}>{username}</p>
                <p className={styles.created_at}>{createdAt}</p>
            </div>
            <CTAButton icon={IconReply}>Reply</CTAButton>
        </div>
    );
}
