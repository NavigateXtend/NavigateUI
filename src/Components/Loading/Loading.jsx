import { Helmet } from 'react-helmet';
import Loading1 from './Part1/Loading1';

const Loading = () => {
    return (
        <>
            <Helmet>
                <title>Loader Component | Unify UI</title>
            </Helmet>
            <div>
                <Loading1 />
            </div>
        </>
    );
};

export default Loading;
