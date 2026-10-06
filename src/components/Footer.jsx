function Footer() {
  const hour = new Date().getHours()
  const openHour = 8
  const closeHour = 22
  const isopen = hour >=openHour && hour <=closeHour
    return (
         <div className="bottom">
        {
          isopen ? <h1>start open evenday</h1> :
          <h1>start open {openHour}:00AM to {closeHour}:00PM</h1>
        }
      </div>
    )
}
export default Footer