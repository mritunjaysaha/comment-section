import { CommentBody } from './CommentBody';
import { CommentHeader } from './CommentHeader';
import { CommentScoreCounter } from './CommentScoreCounter';

import styles from './comment.module.scss';
import { useState } from 'react';
import { CommentTextArea } from '../CommentTextArea/CommentTextArea';
import { useDispatch, useSelector } from 'react-redux';
import { addReply, updateLocalStorageComments } from '../../redux/slice/commentSlice';
import { useComment } from '../../hooks/useComment';

export function Comment({ data, isMyComment = false }) {
    const dispatch = useDispatch();

    const { content, score, user, createdAt, id } = data;
    const { currentUser } = useSelector((state) => state.comment);

    const [scoreCount, setScoreCount] = useState(score);
    const [canIncrease, setCanIncrease] = useState(true);
    const [canDecrease, setCanDecrease] = useState(true);
    const [isReplyClicked, setIsReplyClicked] = useState(false);

    const { commentValue, setCommentValue, handleTextAreaChange } = useComment();

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

    function handleReplyClick() {
        setIsReplyClicked(!isReplyClicked);

        console.log('clicked');
    }

    function handleCommentReply(e) {
        e.preventDefault();

        const data = {
            id: Date.now(),
            content: commentValue,
            createdAt: 'today',
            score: 0,
            replyingtO: user.username,
            user: {
                image: currentUser.image,
                username: currentUser.username,
            },
        };

        dispatch(addReply({ id, data }));

        setCommentValue('');
        setIsReplyClicked(false);

        dispatch(updateLocalStorageComments());
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
                        handleReplyClick={handleReplyClick}
                        isMyComment={isMyComment}
                    />
                    <CommentBody content={content} />
                </div>
            </div>
            {isReplyClicked ? (
                <CommentTextArea
                    handleButtonClick={handleCommentReply}
                    handleChange={handleTextAreaChange}
                    buttonText='reply'
                    value={commentValue}
                />
            ) : (
                ''
            )}
        </>
    );
}
