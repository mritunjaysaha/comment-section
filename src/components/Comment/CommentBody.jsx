export function CommentBody({
    content = "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
}) {
    return (
        <div>
            <p>{content}</p>
        </div>
    );
}
