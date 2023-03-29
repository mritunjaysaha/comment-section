import { Comment } from '../components/Comment/Comment';
import COMMENT_DATA from '../../data.json';

import styles from './layout.module.scss';
import { CommentReply } from '../components/Comment/CommentReply';
import { CommentTextArea } from '../components/CommentTextArea/CommentTextArea';

const { comments, currentUser } = COMMENT_DATA;

function Layout() {
    return (
        <section className={styles.layout_section}>
            {comments.map((data) => (
                <>
                    <Comment key={data.id} data={data} />

                    {data?.replies.length ? <CommentReply dataArray={data.replies} /> : ''}
                </>
            ))}
            <CommentTextArea userImg={currentUser.image.png} />
        </section>
    );
}

export default Layout;
