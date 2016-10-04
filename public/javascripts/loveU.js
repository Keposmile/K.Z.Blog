$(function(){
  var clock = new Vue({
    el:'#my-love-clock',
    data:updateClock()
  });

  setInterval(function(){
    // clock.data = updateClock();
    var nowTimeData = updateClock();
    clock.$set("days",nowTimeData.days);
    clock.$set("hours",nowTimeData.hours);
    clock.$set("minutes",nowTimeData.minutes);
    clock.$set("seconds",nowTimeData.seconds);
  },1000);


});

function updateClock(){
  Vue.filter('beautyTime', function (value) {
    return (value<10)?(value= '0'+ value):value;
  });
  var TimeClock = {
    new:function(time){
      var timeClock = {
        timeLong:time,
        // getYear:function(){
        //   return this.timeLong/60/60/
        // }
        getDays:function(){
          return parseInt(this.timeLong/1000/60/60/24);
        },
        getHours:function(){
          return parseInt(this.timeLong/1000/60/60%24);
        },
        getMinutes:function(){
          return parseInt(this.timeLong/1000/60%60);
        },
        getSeconds:function(){
          return parseInt(this.timeLong/1000%60);
        }
      };
      return timeClock;
    }
  };
  var timeData={};
  var startTime= new Date("2016-5-20 01:16:00").getTime();
  // console.log(startTime);
  var nowTime = new Date().getTime();
  // console.log(nowTime);
  var loveLong = TimeClock.new(nowTime-startTime);
  // timeData.years = loveLong.getYear();
  timeData.days = loveLong.getDays();
  timeData.hours = loveLong.getHours();
  timeData.minutes = loveLong.getMinutes();
  timeData.seconds = loveLong.getSeconds();
  console.log(timeData);
  return timeData;
}
