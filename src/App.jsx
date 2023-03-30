import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { Layout } from './layout/Layout';
import { COMMENTS_DATA } from '../data';

const { comments, currentUser } = COMMENTS_DATA;

export default function App() {
    const currentUserLS = localStorage.getItem('currentUser');
    const commentsLS = localStorage.getItem('comments');

    if (!currentUserLS || !commentsLS) {
        console.log('[APP]', { comments, currentUser });
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );
}
