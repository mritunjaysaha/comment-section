import styles from './comment.module.scss';
import { ReactComponent as IconMinus } from '../../assets/images/icon-minus.svg';
import { ReactComponent as IconPlus } from '../../assets/images/icon-plus.svg';

export function CommentScoreCounter({ score = 0, handleIncreaseScore, handleDecreaseScore }) {
    return (
        <div className={styles.comment_score_container}>
            <button className={styles.comment_score_button} onClick={handleIncreaseScore}>
                <IconPlus />
            </button>
            <p className={styles.comment_score}>{score}</p>
            <button className={styles.comment_score_button} onClick={handleDecreaseScore}>
                <IconMinus />
            </button>
        </div>
    );
}
