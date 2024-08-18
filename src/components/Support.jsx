import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0)

  return (
    <button className="outline" onClick={() => setCount(count + 1)} >
    
    {/* {(() => {
      if (count === 0) {
        return 'Click to support'
      } else {
        return `Supported ${count} times`
      }
    })()} */}

    {count === 0 ? "Click to support" : `You've supported ${count} times`}
    
    </button>
  )
}