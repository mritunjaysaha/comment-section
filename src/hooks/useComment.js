import { useState } from "react";

export function useComment() {
    const [commentValue, setCommentValue] = useState('');
    function handleTextAreaChange(e) {
        setCommentValue(e.target.value);
    }

    return { commentValue, setCommentValue, handleTextAreaChange }
}