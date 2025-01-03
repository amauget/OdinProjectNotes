import PropTypes from 'prop-types';

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string, //can add .isRequired to the end to issue warning for wrong data types.
};

RenderName.defaultProps = {
  name: 'Zach',
};

export default RenderName;