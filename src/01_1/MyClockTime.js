function MyClockTime() {
  const currentTime = new Date() ;
  return (
    <h1>
      현재 시각 : {currentTime.toLocaleTimeString()}
    </h1>
  )
}

export default MyClockTime ;
