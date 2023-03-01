import $ from 'jquery';
class Countdown {
  constructor(selector){
    this.options = {
      dateAttr: 'data-countdown',
      daysSelector: '[data-countdown-property="days"]',
      hoursSelector: '[data-countdown-property="hours"]',
      minutesSelector: '[data-countdown-property="min"]',
      secondsSelector: '[data-countdown-property="sec"]',
    }

    this.$holder = $(selector);
    this.date = this.$holder.attr(this.options.dateAttr) * 1000;
  }
  timer(){
    const self = this;
    var countDownDate = new Date(this.date).getTime();
    //console.log(countDownDate);
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        //console.log(now);

        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        //console.log(distance);
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        // console.log(hours);
        // console.log(minutes);
        const formatString = (string) => {
          return string.toString().padStart(2, '0');
        }
        self.$holder.find(self.options.daysSelector).text(formatString(days >= 0 ? days : 0));
        self.$holder.find(self.options.hoursSelector).text(formatString(hours >= 0 ? hours : 0));
        self.$holder.find(self.options.minutesSelector).text(formatString(minutes >= 0 ? minutes : 0));
        self.$holder.find(self.options.secondsSelector).text(formatString(seconds >= 0 ? seconds : 0));


        // If the count down is over, write some text
        if (distance <= 0) {
            clearInterval(x);
            //window.location.reload();
        }
    }, 1000);
    }

  init(){
    this.timer()
  }
}




// @countdown init
export const initCountdown = () => {
  const countdownInstance = new Countdown('[data-countdown]');
  countdownInstance.init();

}



// $(document).ready(function(){
//   initCountdown();
// })
