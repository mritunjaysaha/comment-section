import { Comment } from '../components/Comment/Comment';

import styles from './layout.module.scss';
import { CommentReply } from '../components/Comment/CommentReply';
import { CommentTextArea } from '../components/CommentTextArea/CommentTextArea';
import { useDispatch, useSelector } from 'react-redux';
import { setComments, setCurrentUser } from '../redux/slice/commentSlice';
import { useEffect } from 'react';

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

    const { commentsArr, commentsObj } = useSelector((state) => state.comment);

    return (
        <section className={styles.layout_section}>
            {commentsArr.map((id) => (
                <>
                    <Comment key={id} data={commentsObj[id]} />

                    {commentsObj[id]?.replies.length ? (
                        <CommentReply dataArray={commentsObj[id].replies} />
                    ) : (
                        ''
                    )}
                </>
            ))}
            <CommentTextArea />
        </section>
    );
}
