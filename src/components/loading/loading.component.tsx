import { FunctionComponent } from "react";
import DotLoader from "react-spinners/DotLoader";

import { LoadingContainer } from "./loading.styles";

const Loading: FunctionComponent = () => {
  return (
    <LoadingContainer>
      <DotLoader size={30} />
    </LoadingContainer>
  );
};

export default Loading;
