import { CommentBody } from './CommentBody';
import { CommentHeader } from './CommentHeader';
import { CommentScoreCounter } from './CommentScoreCounter';

import styles from './comment.module.scss';
import { useState } from 'react';
import { CommentTextArea } from '../CommentTextArea/CommentTextArea';

export function Comment({ data }) {
    const { content, score, user, createdAt } = data;

    const [scoreCount, setScoreCount] = useState(score);

    const [canIncrease, setCanIncrease] = useState(true);
    const [canDecrease, setCanDecrease] = useState(true);

    const [isReplyClicked, setIsReplyClicked] = useState(false);

    function handleIncreaseScore() {
        if (canIncrease) {
            setScoreCount((score) => (score += 1));
            setCanIncrease(!canIncrease);
            setCanDecrease(true);
        }
    }

    function handleDecreaseScore() {
        if (canDecrease) {
            setScoreCount((score) => (score -= 1));
            setCanDecrease(!canDecrease);
            setCanIncrease(true);
        }
    }

    function handleReplyClick(e) {
        e.stopPropagation();
    }

    return (
        <>
            <div className={styles.comment_container}>
                <CommentScoreCounter
                    score={scoreCount}
                    handleIncreaseScore={handleIncreaseScore}
                    handleDecreaseScore={handleDecreaseScore}
                />
                <div className={styles.comment_data}>
                    <CommentHeader
                        imgSrc={user.image.png}
                        username={user.username}
                        createdAt={createdAt}
                    />
                    <CommentBody content={content} />
                </div>
            </div>
            {/* <CommentTextArea /> */}
        </>
    );
}
