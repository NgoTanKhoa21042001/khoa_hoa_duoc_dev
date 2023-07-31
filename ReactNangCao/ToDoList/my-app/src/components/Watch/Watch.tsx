import React, { useEffect, useRef, useState } from 'react'
// Giờ đặt vấn đề ra thì có cách nào để mutate biến mà không làm component render hay không?

function WatchTimer() {
  const [seconds, setSeconds] = useState<number>(0)
  const intervalRef = useRef<any>(null)
  useEffect(() => {
    console.log('chay 1 lan')

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
      console.log('setInterval')
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
      console.log('watchTimer unmout')
    }
  }, [])
  return <div>Watch: {seconds}</div>
}

export default function Watch() {
  const [visible, setVisible] = useState<boolean>(true)

  return (
    <div>
      <button onClick={(prev) => setVisible(!prev)}>Set visibles watch timer</button>
      {visible && <WatchTimer />}
    </div>
  )
}
