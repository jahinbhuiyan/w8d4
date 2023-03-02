class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    // setInterval(() => {
    //   //  const date = new Date();
    //   //  console.log(date)
    //   this._tick();
    // }, 1000);
  }

  start() {
    setInterval(() => {
      //  const date = new Date();
      //  console.log(date)
      this._tick();
    }, 1000);
  }


  printTime() {

    let partOfDay = this.hours > 12 ? "PM" : "AM"

    const time = `${this.hours % 12}:${this.minutes}:${this.seconds} ${partOfDay}`;
    console.clear();
    console.log(time);

  }

  _tick() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
        if (this.hours >= 24) {
          this.hours = 0;
        }
      }
    }

    this.printTime()
    
  } // END 
  
}








