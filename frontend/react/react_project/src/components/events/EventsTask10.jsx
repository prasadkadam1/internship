// Caps Lock Police: Detect when Caps Lock is on, and show "HEY, WHY ARE YOU YELLING? 😡".

const EventsTask10 = () => {
  return (
    <div>
      <form action="">
        <input
          type="text"
          onKeyDown={(e) => {
            if(e.key == "CapsLock"){
                console.log("Why are you yelling ..!!");   
            }
          }}
        />
      </form>
    </div>
  );
};
export default EventsTask10;
