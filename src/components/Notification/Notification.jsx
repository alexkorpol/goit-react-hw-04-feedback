import { Phrase } from "./Notification.styled";
import PropTypes from 'prop-types';

const Notification = ({
  message
}) => {
  return (
    <Phrase>{message}</Phrase>
);
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification
