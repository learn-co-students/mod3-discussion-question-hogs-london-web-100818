const FADEDURATION = 700  // this needs to match our css fade animation duration
const MINDELAY = 0      // the minimum delay until the animation begins
const SHORTRANGE = Math.floor((Math.random()* 500)+ 1);    // the delay range until non-selected elements begin their animation
const LONGRANGE = 800     // the delay range until the selected element begins its animation
const LONGESTPOSSIBLE = FADEDURATION + MINDELAY + LONGRANGE // used when transitioning to a new page -- ensures all animations are complete before this one begins
const HOMEGROUP = Array.from(document.getElementsByClassName("home-group"))
const MUDBLOODGROUP = Array.from(document.getElementsByClassName("mudblood-group"))
const PIGGYSMALLSGROUP = Array.from(document.getElementsByClassName("piggy-smalls-group"))
const TRUFFLESHUFFLEGROUP = Array.from(document.getElementsByClassName("truffleshuffle-group"))
const RAINBOWDASHGROUP = Array.from(document.getElementsByClassName("rainbowdash-group"))
