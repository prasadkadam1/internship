import React from "react";

const ReactMemochild = () => {
  console.log("child");

  return <div>ReactMemochild</div>;
};

// export default ReactMemochild;
export default React.memo(ReactMemochild);
