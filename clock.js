class Clock {
     constructor() {
       const date = new Date();
       this.hours = date.getHours();
       this.minutes = date.getMinutes();
       this.seconds = date.getSeconds();
  
       setInterval(() => {
        //  const date = new Date();
        //  console.log(date)
          this.tick();
       }, 1000);
     }
  
      tick() {
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
  
        const time = `${this.format(this.hours)}:${this.format(this.minutes)}:${this.format(this.seconds)}`;
        console.clear();
        console.log(time);
      }
  
      format(num) {
        return num < 10 ? `0${num}` : num;
      }
    }
  
    const clock = new Clock();
   
  
  
  