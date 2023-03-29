import { CommentBody } from './CommentBody';
import { CommentHeader } from './CommentHeader';
import { CommentScoreCounter } from './CommentScoreCounter';

export function Comment({ data }) {
    const { content, score, user, createdAt } = data;
    return (
        <div>
            <CommentScoreCounter score={score} />
            <div>
                <CommentHeader username={user.username} createdAt={createdAt} />
                <CommentBody content={content} />
            </div>
        </div>
    );
}
