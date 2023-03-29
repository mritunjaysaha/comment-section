import styles from './comment.module.scss';

export function CommentBody({ content }) {
    return <p className={styles.comment_body}>{content}</p>;
}
