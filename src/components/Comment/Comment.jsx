import { CommentBody } from './CommentBody';
import { CommentHeader } from './CommentHeader';
import { CommentScoreCounter } from './CommentScoreCounter';

import styles from './comment.module.scss';

export function Comment({ data }) {
    const { content, score, user, createdAt } = data;
    return (
        <div className={styles.comment_container}>
            <CommentScoreCounter score={score} />
            <div className={styles.comment_data}>
                <CommentHeader
                    imgSrc={user.image.png}
                    username={user.username}
                    createdAt={createdAt}
                />
                <CommentBody content={content} />
            </div>
        </div>
    );
}
