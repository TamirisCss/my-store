import { FunctionComponent } from "react";
import DotLoader from "react-spinners/DotLoader";

import { LoadingContainer } from "./loading.styles";

interface LoadingProps {
  message?: string;
}

const Loading: FunctionComponent<LoadingProps> = ({ message }) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <DotLoader size={30} />
    </LoadingContainer>
  );
};

export default Loading;
