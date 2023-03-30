import { Comment } from './Comment';

import styles from './comment.module.scss';

export function CommentReply({ dataArray, currentUsername, parentId }) {
    return (
        <section className={styles.comment_reply_section}>
            <div className={styles.vertical_line}>
                <div></div>
            </div>
            <div className={styles.comment_reply_container}>
                {dataArray.map((data) => (
                    <Comment
                        key={data.id}
                        data={data}
                        isMyComment={data.user.username === currentUsername}
                        isReply={true}
                        parentId={parentId}
                    />
                ))}
            </div>
        </section>
    );
}
