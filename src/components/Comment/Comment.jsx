import { CommentBody } from './CommentBody';
import { CommentHeader } from './CommentHeader';
import { CommentScoreCounter } from './CommentScoreCounter';

import styles from './comment.module.scss';
import { useState } from 'react';
import { CommentTextArea } from './CommentTextArea';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNestedReply,
    addReply,
    editComment,
    editNestedComment,
    openDeleteModel,
    updateLocalStorageComments,
    updateScore,
} from '../../redux/slice/commentSlice';
import { useComment } from '../../hooks/useComment';
import { CommentTextAreaEdit } from './CommentTextAreaEdit';

export function Comment({ data, isMyComment = false, isReply = false, parentId = '' }) {
    const dispatch = useDispatch();

    const { content, score, user, createdAt, id } = data;
    const { currentUser } = useSelector((state) => state.comment);

    const [scoreCount, setScoreCount] = useState(score);
    const [canIncrease, setCanIncrease] = useState(true);
    const [canDecrease, setCanDecrease] = useState(true);
    const [isReplyClicked, setIsReplyClicked] = useState(false);
    const [isEditClicked, setIsEditClicked] = useState(false);

    const { commentValue, setCommentValue, handleTextAreaChange } = useComment();

    function handleIncreaseScore() {
        if (canIncrease) {
            setScoreCount((score) => (score += 1));
            setCanIncrease(!canIncrease);
            setCanDecrease(true);

            dispatch(updateScore({ score: score + 1, parentId, id }));
            dispatch(updateLocalStorageComments());
        }
    }

    function handleDecreaseScore() {
        if (canDecrease && score > 0) {
            setScoreCount((score) => (score -= 1));
            setCanDecrease(!canDecrease);
            setCanIncrease(true);

            dispatch(updateScore({ score: score - 1, parentId, id }));
            dispatch(updateLocalStorageComments());
        }
    }

    function handleReplyClick() {
        setIsReplyClicked(!isReplyClicked);

        console.log('clicked');
    }

    function handleCommentReply(e) {
        e.preventDefault();

        if (!commentValue) {
            return;
        }

        const data = {
            id: Date.now(),
            content: commentValue,
            createdAt: 'today',
            score: 0,
            replyingTo: user.username,
            user: currentUser,
        };

        dispatch(addReply({ id, data }));

        setCommentValue('');
        setIsReplyClicked(false);

        dispatch(updateLocalStorageComments());
    }

    function handleNestedCommentReply() {
        if (!commentValue) {
            return;
        }

        const nestedReplyData = {
            id: Date.now(),
            content: commentValue,
            createdAt: 'today',
            score: 0,
            replyingTo: user.username,
            user: currentUser,
        };

        console.log({ nestedReplyData });

        setIsReplyClicked(false);
        setCommentValue('');

        dispatch(addNestedReply({ parentId, data: nestedReplyData }));

        dispatch(updateLocalStorageComments());
    }

    function handleDeleteClick() {
        if (!isReply) {
            dispatch(openDeleteModel({ id }));
        } else {
            dispatch(openDeleteModel({ parentId, id }));
        }
    }

    function handleEditClick() {
        setCommentValue(content);

        setIsEditClicked(true);
    }

    function handleEditComment() {
        if (!commentValue) {
            return;
        }

        const data = {
            content: commentValue,
        };

        setIsEditClicked(false);
        setCommentValue('');

        dispatch(editComment({ id, data }));
        dispatch(updateLocalStorageComments());
    }

    function handleEditNestedComment() {
        if (!commentValue) {
            return;
        }

        const data = {
            content: commentValue,
        };

        setIsEditClicked(false);
        setCommentValue('');

        dispatch(editNestedComment({ parentId, childId: id, data }));
        dispatch(updateLocalStorageComments());
    }

    return (
        <>
            <div
                className={`${styles.comment_container} ${
                    isEditClicked ? styles.hide_comment : ''
                }`}
            >
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
                        isMyComment={isMyComment}
                        handleReplyClick={handleReplyClick}
                        handleDeleteClick={handleDeleteClick}
                        handleEditClick={handleEditClick}
                    />
                    <CommentBody content={content} />
                </div>
            </div>
            {isReplyClicked ? (
                <CommentTextArea
                    handleButtonClick={!isReply ? handleCommentReply : handleNestedCommentReply}
                    handleChange={handleTextAreaChange}
                    buttonText={'reply'}
                    value={commentValue}
                />
            ) : (
                ''
            )}
            {isEditClicked ? (
                <CommentTextAreaEdit
                    handleButtonClick={!parentId ? handleEditComment : handleEditNestedComment}
                    value={commentValue}
                    handleChange={handleTextAreaChange}
                >
                    <CommentHeader
                        imgSrc={user.image.png}
                        username={user.username}
                        createdAt={createdAt}
                        isMyComment={isMyComment}
                        handleReplyClick={handleReplyClick}
                        handleDeleteClick={handleDeleteClick}
                        handleEditClick={handleEditClick}
                    />
                </CommentTextAreaEdit>
            ) : (
                ''
            )}
        </>
    );
}
