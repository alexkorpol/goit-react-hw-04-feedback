import { BtnWrapper, Button } from "./ButtonOptions.styled";

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



