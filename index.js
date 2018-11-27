/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

/*************************************************************************/

function delayedFadeOut(div, range) {
  setTimeout(() => {
    fadeOut(div)
  }, range)
}

function delayedFadeIn(div, range) {
  setTimeout(() => {
    fadeIn(div)
  }, range)
}

function fadeAllOut(el, group) {
  group.forEach(div => {
    if(el !== div) {
      delayedFadeOut(div, SHORTRANGE)
    }
    delayedFadeOut(el, LONGRANGE)
  })
}

function fadeAllIn(group) {
  let range = 500
  delayedFadeIn(group[0], range)
  for(let i = 1; i < 4; i++) {
    delayedFadeIn(group[i], range)
    range += 250
  }
}

function transitionPage(el, groupOut, groupIn) {
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}

