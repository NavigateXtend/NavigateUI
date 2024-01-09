import PropTypes from 'prop-types';

const Preview = ({ children }) => {
    return <div className="w-full">{children}</div>;
};
Preview.propTypes = {
    children:PropTypes.node
}
export default Preview;
