import { Comment } from '../components/Comment/Comment';
import COMMENT_DATA from '../../data.json';

import styles from './layout.module.scss';

const { comments } = COMMENT_DATA;

function Layout() {
    return (
        <section className={styles.layout_section}>
            {comments.map((data) => (
                <Comment key={data.id} data={data} />
            ))}
        </section>
    );
}

export default Layout;
