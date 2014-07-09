#Timer-js

This package is used to time javascript events

##Install

Install via bower package manager (recomended)

    bower install timer-js

##Methods
####report()
Returns:

    n year(s) n day(s) n hour(s) n minute(s) n second(s)
####reportMicro()
    Returns: n seconds to 3 decimal places
####reset()
    Resets the timer

##Useage

```javascript
function doSomething(){
  var loop = new Timer();
  while (i < 1000) {
    i++;
  }
  console.warn(loop.report());
}
```
