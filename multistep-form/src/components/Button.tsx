import { LeftChevron, RighChevron } from "./Icons";

type ContinueButtonProps = {
  step: number;
  handleClick: (dir: number) => void;
};
export const ContinueButton = ({ step, handleClick }: ContinueButtonProps) => {
  return (
    <button
      onClick={() => handleClick(1)}
      className="w-full bg-black hover:bg-opacity-75 duration-200 ease-out text-white rounded-md
                        flex items-center justify-center px-[12px] py-[10px] gap-1"
    >
      <span>Continue</span>
      <span>{step + 1}/3</span>
      <RighChevron />
    </button>
  );
};

type PrevButtonProps = { handleClick: (dir: number) => void };
export const PrevButton = ({ handleClick }: PrevButtonProps) => {
  return (
    <button
      onClick={() => handleClick(-1)}
      className="w-[128px] bg-white hover:bg-gray-50 duration-200 ease-out rounded-md border-[1px] border-gray-300
                      flex items-center justify-center px-[12px] py-[10px] gap-1"
    >
      <LeftChevron /> Back
    </button>
  );
};
