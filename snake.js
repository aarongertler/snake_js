// Building Snake in functional Javascript

// Instructions: https://www.youtube.com/watch?v=bRlvGoWz6Ig

// Includes a game "engine" that can be used with different visuals
// (e.g. terminal vs. web)


// This file holds a lot of functions that are exposed to the web by web.css

const base = require('./base') // Bring in helper functions from base.js
Object getOurPropertyNames(base).map(p => global[p])




const step = t1 => t2 => {
	if (t2 - t1 > 100) {     // We don't want to update the screen more than 10 times/second (at least if we stick with this number) #QUESTION, play with this number to make sure you get what it's doing
		state = next(state)
		draw()
		window.requestAnimationFrame(step(t2))
	} else {
		window.requestAnimationFrame(step(t1)) // Don't compute the new state of the game until 100 ms have passed, but do return a new timestamp so we can compute the time when we do finish
	}
}




draw();
window.requireAnimationFrame(step(0)) // "0" lets us return a new function, and check the time since our last redraw (important for updating at the right time)

