// // Score 64 (simple game):
// const frames = [
//   [2, 0],
//   [4, 2],
//   [6, 0],
//   [2, 4],
//   [1, 5],
//   [7, 0],
//   [5, 2],
//   [7, 0],
//   [2, 6],
//   // [8, 1],
// ]
// Score 71 (with spares):
// const frames = [
//   [6, 1],
//   [4, 0],
//   [6, 4],
//   [2, 7],
//   [3, 5],
//   [5, 0],
//   [5, 5],
//   [0, 0],
//   [1, 6],
//   [7, 2],
// ]
// Score 104 (with spares and strikes):
const frames = [
  [6, 4],
  [8, 0],
  [10, 0],
  [2, 7],
  [5, 5],
  [4, 0],
  [10, 0],
  [2, 1],
  [2, 6],
  [4, 4],
]

// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2],
//   [6, 4],
//   [5, 4],
//   [10, 0],
//   [7, 2],
//   [10, 0],
//   [10, 0],
//   [5, 2],
//   [7, 0],
//   [4, 4],
// ]

// // Score 141 (includes a strike on the last frame):
// const frames = [
//   [1, 2],
//   [6, 4],
//   [5, 4],
//   [10, 0],
//   [7, 2],
//   [10, 0],
//   [10, 0],
//   [5, 2],
//   [7, 0],
//   [10, 10, 10],
// ]

// // Score 300 (perfect game):
// const frames = [
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 10, 10],
// ]

let totalScore = 0
function simpleScore(frame) {
  return frame[0] + frame[1]
}

function isSpare(frame) {
  if (frame.length === 2 && frame[0] !== 10 && frame[0] + frame[1] === 10) {
    return true
  } else {
    return false
  }
}

function isStrike(frame) {
  if (frame[0] === 10) {
    return true
  } else {
    return false
  }
}

// function isDoubleStrike(frame, nextFrame) {
//   if (frame[0] === 10 && nextFrame[0] === 10) {
//     return true
//   } else {
//     return false
//   }
// }

function totalGame(frames) {
  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i]
    const nextFrame = frames[i + 1]
    // const nextNextFrame = frames[i + 2]
    if (isStrike(frame)) {
      totalScore += 10 + nextFrame[0] + nextFrame[1]
    } else if (isSpare(frame)) {
      totalScore += 10 + nextFrame[0]
    } else {
      // totalScore += frame[0] + frame[1]
      totalScore += simpleScore(frame)
    }
  }
  return totalScore
}
console.log('Total score:', totalGame(frames))

// -- NOTES FROM CLASS - JATIN'S EXAMPLE --
// function scoreFrames(frames) {
//   // define main score- let totalScore = 0
//   // go through each frame in frames
//   frames.forEach((frame) => {
//     // add the two balls together
//     const score = scoreFrame(frame[0], frame[1])
//     // add that to main score
//     totalScore += score
//   })
//   return totalScore
// }
// // console.log(scoreFrames(frames))

// // Keep track of scoreFrame (a + b + c) for spare or bottom up approach - start with smaller functions first
// function scoreFrame(a, b) {
//   return a + b
// }
