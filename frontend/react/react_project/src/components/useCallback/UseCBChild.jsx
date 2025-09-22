import React from 'react'

const UseCBChild = () => {
  console.log("child");
  return (
    <div>UseCBChild</div>
  )
}

// export default UseCBChild
export default React.memo(UseCBChild)