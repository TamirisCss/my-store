import { FunctionComponent } from "react";

//Styles
import { InputErrorMessageContainer } from "./input-error-message.styles";

interface InputErrorMessageProps {
  children: React.ReactNode; // 👈️ added type for children
}

const InputErrorMessage: FunctionComponent<InputErrorMessageProps> = ({
  children,
}) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>;
};

export default InputErrorMessage;
