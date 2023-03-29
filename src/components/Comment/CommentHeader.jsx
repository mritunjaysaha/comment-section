import placeholder from '../../assets/images/avatars/image-amyrobson.webp';

import { ReactComponent as IconReply } from '../../assets/images/icon-reply.svg';

export function CommentHeader({ imgSrc, username = 'amyrobson', createdAt = '1 month ago' }) {
    return (
        <div>
            <div>
                <img src={placeholder} />
                <p>
                    {username} <span>{createdAt}</span>
                </p>
            </div>
            <button>
                <IconReply />
                Reply
            </button>
        </div>
    );
}
