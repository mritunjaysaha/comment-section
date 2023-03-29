import { Comment } from './components/Comment/Comment';
import COMMENT_DATA from '../data.json';

const { comments } = COMMENT_DATA;

function App() {
    return (
        <>
            {comments.map((data) => (
                <Comment key={data.id} data={data} />
            ))}
        </>
    );
}

export default App;
