export function CommentScoreCounter({ score = 0 }) {
    return (
        <div>
            <button>+</button>
            <p>{score}</p>
            <button>-</button>
        </div>
    );
}
