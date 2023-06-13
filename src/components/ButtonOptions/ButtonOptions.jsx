import { BtnWrapper, Button } from "./ButtonOptions.styled";
import PropTypes from 'prop-types';

const ButtonOptions = ({ statesArray, onLeaveFeedback}) => {
  return (
    <BtnWrapper>
      {        statesArray.map((stateArray) => {
        return (
          <Button
            type="button"
            key={stateArray}
            onClick={() => onLeaveFeedback(stateArray)}
                      >

            {stateArray}
          </Button>
        );
      })}
    </BtnWrapper>
  );
};
export default ButtonOptions

ButtonOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  statesArray: PropTypes.array.isRequired
};



