import React from "react";

const UseCBChild = () => {
  console.log("child called");

  return <div>UseCBChild</div>;
};

// export default UseCBChild;
export default React.memo(UseCBChild);
