import { Comment } from '../components/Comment/Comment';

import styles from './layout.module.scss';
import { CommentReply } from '../components/Comment/CommentReply';
import { CommentTextArea } from '../components/Comment/CommentTextArea';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNewComment,
    setComments,
    setCurrentUser,
    updateLocalStorageComments,
} from '../redux/slice/commentSlice';
import { useEffect } from 'react';
import { useComment } from '../hooks/useComment';
import { Modal } from '../components/Modal/Modal';

export function Layout() {
    const dispatch = useDispatch();

    useEffect(() => {
        const comments = localStorage.getItem('comments');
        const currentUser = localStorage.getItem('currentUser');

        console.log({ comments, currentUser });
        if (comments && currentUser) {
            dispatch(setCurrentUser(JSON.parse(currentUser)));
            dispatch(setComments(JSON.parse(comments)));
        }
    }, []);

    const { commentsArr, commentsObj, currentUser } = useSelector((state) => state.comment);

    const { commentValue, setCommentValue, handleTextAreaChange } = useComment();

    function handleSend(e) {
        e.preventDefault();

        const data = {
            id: Date.now(),
            content: commentValue,
            createdAt: 'today',
            score: 0,
            user: {
                image: currentUser.image,
                username: currentUser.username,
            },
            replies: [],
        };

        dispatch(addNewComment(data));

        dispatch(updateLocalStorageComments());

        setCommentValue('');
    }

    return (
        <section className={styles.layout_section}>
            {commentsArr.map((id) => (
                <>
                    <Comment
                        key={id}
                        data={commentsObj[id]}
                        isMyComment={currentUser.username === commentsObj[id].user.username}
                    />

                    {commentsObj[id]?.replies.length ? (
                        <CommentReply
                            dataArray={commentsObj[id].replies}
                            currentUsername={currentUser.username}
                            parentId={id}
                        />
                    ) : (
                        ''
                    )}
                </>
            ))}
            <CommentTextArea
                handleChange={handleTextAreaChange}
                handleButtonClick={handleSend}
                value={commentValue}
            />

            <Modal />
        </section>
    );
}
