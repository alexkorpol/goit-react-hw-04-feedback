import { BtnWrapper, Button } from "./ButtonOptions.styled";

const ButtonOptions = ({ statesArray, onLeaveFeedback, noteUsers, debounce}) => {
  console.log("statesArray:", statesArray, "onLeaveFeedback", onLeaveFeedback)
  return (
    <BtnWrapper>
      {        statesArray.map((stateArray) => {
        console.log("stateArray:", stateArray);
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
