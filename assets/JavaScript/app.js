// const round1ScoreRed = Number(document.getElementById("round_1_score_red").value)
// console.log(round1ScoreRed)
// const round1DeductionsRed = document.getElementById("round_1_deductions_red")
// const round1ScoreBlue = document.getElementById("round_1_score_blue")
// const round1DeductionsBlue = document.getElementById("round_1_deductions_blue")

// // const round2ScoreRed = document.getElementById("round_2_score_red")
// const round2DeductionsRed = document.getElementById("round_2_deductions_red")
// const round2ScoreBlue = document.getElementById("round_2_score_blue")
// const round2DeductionsBlue = document.getElementById("round_2_deductions_blue")

// const round3ScoreRed = document.getElementById("round_3_score_red")
// const round3DeductionsRed = document.getElementById("round_3_deductions_red")
// const round3ScoreBlue = document.getElementById("round_3_score_blue")
// const round3DeductionsBlue = document.getElementById("round_3_deductions_blue")

// const round4ScoreRed = document.getElementById("round_4_score_red")
// const round4DeductionsRed = document.getElementById("round_4_deductions_red")
// const round4ScoreBlue = document.getElementById("round_4_score_blue")
// const round4DeductionsBlue = document.getElementById("round_4_deductions_blue")

// const round5ScoreRed = document.getElementById("round_5_score_red")
// const round5DeductionsRed = document.getElementById("round_5_deductions_red")
// const round5ScoreBlue = document.getElementById("round_5_score_blue")
// const round5DeductionsBlue = document.getElementById("round_5_deductions_blue")

// const round6ScoreRed = document.getElementById("round_6_score_red")
// const round6DeductionsRed = document.getElementById("round_6_deductions_red")
// const round6ScoreBlue = document.getElementById("round_6_score_blue")
// const round6DeductionsBlue = document.getElementById("round_6_deductions_blue")

// const round7ScoreRed = document.getElementById("round_7_score_red")
// const round7DeductionsRed = document.getElementById("round_7_deductions_red")
// const round7ScoreBlue = document.getElementById("round_7_score_blue")
// const round7DeductionsBlue = document.getElementById("round_7_deductions_blue")

// const round8ScoreRed = document.getElementById("round_8_score_red")
// const round8DeductionsRed = document.getElementById("round_8_deductions_red")
// const round8ScoreBlue = document.getElementById("round_8_score_blue")
// const round8DeductionsBlue = document.getElementById("round_8_deductions_blue")

// const round9ScoreRed = document.getElementById("round_9_score_red")
// const round9DeductionsRed = document.getElementById("round_9_deductions_red")
// const round9ScoreBlue = document.getElementById("round_9_score_blue")
// const round9DeductionsBlue = document.getElementById("round_9_deductions_blue")

// const round10ScoreRed = document.getElementById("round_10_score_red")
// const round10DeductionsRed = document.getElementById("round_10_deductions_red")
// const round10ScoreBlue = document.getElementById("round_10_score_blue")
// const round10DeductionsBlue = document.getElementById("round_10_deductions_blue")

// const round11ScoreRed = document.getElementById("round_11_score_red")
// const round11DeductionsRed = document.getElementById("round_11_deductions_red")
// const round11ScoreBlue = document.getElementById("round_11_score_blue")
// const round11DeductionsBlue = document.getElementById("round_11_deductions_blue")

// const round12ScoreRed = document.getElementById("round_12_score_red")
// const round12DeductionsRed = document.getElementById("round_12_deductions_red")
// const round12ScoreBlue = document.getElementById("round_12_score_blue")
// const round12DeductionsBlue = document.getElementById("round_12_deductions_blue")

const totalScoreRedUI = document.getElementById("total_score_red") //total score for red boxer
const totalScoreBlueUI = document.getElementById("total_score_blue") //total score for blue boxer
const totalDeductionsRedUI = document.getElementById("total_deductions_red") //total deductions for red boxer
const totalDeductionsBlueUI = document.getElementById("total_deductions_blue") //total deductions for blue boxer

// Calculate scores function
function calculateScores() {

  // Red rounds
  const round1ScoreRed = Number(document.getElementById("round_1_score_red").value)
  // console.log(round1ScoreRed)
  const round2ScoreRed = Number(document.getElementById("round_2_score_red").value)
  // console.log(round2ScoreRed)
  const round3ScoreRed = Number(document.getElementById("round_3_score_red").value)
  // console.log(round3ScoreRed)
  const round4ScoreRed = Number(document.getElementById("round_4_score_red").value)
  // console.log(round4ScoreRed)
  const round5ScoreRed = Number(document.getElementById("round_5_score_red").value)
  // console.log(round5ScoreRed)
  const round6ScoreRed = Number(document.getElementById("round_6_score_red").value)
  // console.log(round6ScoreRed)
  const round7ScoreRed = Number(document.getElementById("round_7_score_red").value)
  // console.log(round7ScoreRed)
  const round8ScoreRed = Number(document.getElementById("round_8_score_red").value)
  // console.log(round8ScoreRed)
  const round9ScoreRed = Number(document.getElementById("round_9_score_red").value)
  // console.log(round9ScoreRed)
  const round10ScoreRed = Number(document.getElementById("round_10_score_red").value)
  // console.log(round10ScoreRed)
  const round11ScoreRed = Number(document.getElementById("round_11_score_red").value)
  // console.log(round11ScoreRed)
  const round12ScoreRed = Number(document.getElementById("round_12_score_red").value)
  // console.log(round12ScoreRed)

  // Red deductions
  const round1DeductionsRed = Number(document.getElementById("round_1_deductions_red").value)
  // console.log(round1DeductionsRed)
  const round2DeductionsRed = Number(document.getElementById("round_2_deductions_red").value)
  // console.log(round2DeductionsRed)
  const round3DeductionsRed = Number(document.getElementById("round_3_deductions_red").value)
  // console.log(round3DeductionsRed)
  const round4DeductionsRed = Number(document.getElementById("round_4_deductions_red").value)
  // console.log(round4DeductionsRed)
  const round5DeductionsRed = Number(document.getElementById("round_5_deductions_red").value)
  // console.log(round5DeductionsRed)
  const round6DeductionsRed = Number(document.getElementById("round_6_deductions_red").value)
  // console.log(round6DeductionsRed)
  const round7DeductionsRed = Number(document.getElementById("round_7_deductions_red").value)
  // console.log(round7DeductionsRed)
  const round8DeductionsRed = Number(document.getElementById("round_8_deductions_red").value)
  // console.log(round8DeductionsRed)
  const round9DeductionsRed = Number(document.getElementById("round_9_deductions_red").value)
  // console.log(round9DeductionsRed)
  const round10DeductionsRed = Number(document.getElementById("round_10_deductions_red").value)
  // console.log(round10DeductionsRed)
  const round11DeductionsRed = Number(document.getElementById("round_11_deductions_red").value)
  // console.log(round11DeductionsRed)
  const round12DeductionsRed = Number(document.getElementById("round_12_deductions_red").value)
  // console.log(round12DeductionsRed)

  // Blue rounds 
  const round1ScoreBlue = Number(document.getElementById("round_1_score_blue").value)
  // console.log(round1ScoreBlue)
  const round2ScoreBlue = Number(document.getElementById("round_2_score_blue").value)
  // console.log(round2ScoreBlue)
  const round3ScoreBlue = Number(document.getElementById("round_3_score_blue").value)
  // console.log(round3ScoreBlue)
  const round4ScoreBlue = Number(document.getElementById("round_4_score_blue").value)
  // console.log(round4ScoreBlue)
  const round5ScoreBlue = Number(document.getElementById("round_5_score_blue").value)
  // console.log(round5ScoreBlue)
  const round6ScoreBlue = Number(document.getElementById("round_6_score_blue").value)
  // console.log(round6ScoreBlue)
  const round7ScoreBlue = Number(document.getElementById("round_7_score_blue").value)
  // console.log(round7ScoreBlue)
  const round8ScoreBlue = Number(document.getElementById("round_8_score_blue").value)
  // console.log(round8ScoreBlue)
  const round9ScoreBlue = Number(document.getElementById("round_9_score_blue").value)
  // console.log(round9ScoreBlue)
  const round10ScoreBlue = Number(document.getElementById("round_10_score_blue").value)
  // console.log(round10ScoreBlue)
  const round11ScoreBlue = Number(document.getElementById("round_11_score_blue").value)
  // console.log(round11ScoreBlue)
  const round12ScoreBlue = Number(document.getElementById("round_12_score_blue").value)
  // console.log(round12ScoreBlue)

  // Blue deductions
  const round1DeductionsBlue = Number(document.getElementById("round_1_deductions_blue").value)
  // console.log(round1DeductionsBlue)
  const round2DeductionsBlue = Number(document.getElementById("round_2_deductions_blue").value)
  // console.log(round2DeductionsBlue)
  const round3DeductionsBlue = Number(document.getElementById("round_3_deductions_blue").value)
  // console.log(round3DeductionsBlue)
  const round4DeductionsBlue = Number(document.getElementById("round_4_deductions_blue").value)
  // console.log(round4DeductionsBlue)
  const round5DeductionsBlue = Number(document.getElementById("round_5_deductions_blue").value)
  // console.log(round5DeductionsBlue)
  const round6DeductionsBlue = Number(document.getElementById("round_6_deductions_blue").value)
  // console.log(round6DeductionsBlue)
  const round7DeductionsBlue = Number(document.getElementById("round_7_deductions_blue").value)
  // console.log(round7DeductionsBlue)
  const round8DeductionsBlue = Number(document.getElementById("round_8_deductions_blue").value)
  // console.log(round8DeductionsBlue)
  const round9DeductionsBlue = Number(document.getElementById("round_9_deductions_blue").value)
  // console.log(round9DeductionsBlue)
  const round10DeductionsBlue = Number(document.getElementById("round_10_deductions_blue").value)
  // console.log(round10DeductionsBlue)
  const round11DeductionsBlue = Number(document.getElementById("round_11_deductions_blue").value)
  // console.log(round11DeductionsBlue)
  const round12DeductionsBlue = Number(document.getElementById("round_12_deductions_blue").value)
  // console.log(round12DeductionsBlue)

  // Red all rounds total points
  const allRedRoundsScore = round1ScoreRed + round2ScoreRed + round3ScoreRed + round4ScoreRed + round5ScoreRed + round6ScoreRed +
    round7ScoreRed + round8ScoreRed + round9ScoreRed + round10ScoreRed + round11ScoreRed + round12ScoreRed
  console.log(`All red round scores = ${allRedRoundsScore}`)

  // Red all rounds total deductions
  const allRedRoundsDeductions = round1DeductionsRed + round2DeductionsRed + round3DeductionsRed + round4DeductionsRed + round5DeductionsRed +
    round6DeductionsRed + round7DeductionsRed + round8DeductionsRed + round9DeductionsRed + round10DeductionsRed + round11DeductionsRed +
    round12DeductionsRed
  console.log(`All red round deductions = ${allRedRoundsDeductions}`)

  // Blue all rounds total points
  const allBlueRoundsScore = round1ScoreBlue + round2ScoreBlue + round3ScoreBlue + round4ScoreBlue + round5ScoreBlue + round6ScoreBlue +
    round7ScoreBlue + round8ScoreBlue + round9ScoreBlue + round10ScoreBlue + round11ScoreBlue + round12ScoreBlue
  console.log(`All blue round scores = ${allBlueRoundsScore}`)

  // Blue all rounds total deductions
  const allBlueRoundsDeductions = round1DeductionsBlue + round2DeductionsBlue + round3DeductionsBlue + round4DeductionsBlue +
    round5DeductionsBlue + round6DeductionsBlue + round7DeductionsBlue + round8DeductionsBlue + round9DeductionsBlue + round10DeductionsBlue +
    round11DeductionsBlue + round12DeductionsBlue
  console.log(`All blue round deductions = ${allBlueRoundsDeductions}`)

  // Total points and deductions display
  const totalScoreRedUI = document.getElementById("total_score_red").value = allRedRoundsScore - allRedRoundsDeductions
  const totalDeductionsRedUI = document.getElementById("total_deductions_red").value = allRedRoundsDeductions
  const totalScoreBlueUI = document.getElementById("total_score_blue").value = allBlueRoundsScore - allBlueRoundsDeductions
  const totalDeductionsBlueUI = document.getElementById("total_deductions_blue").value = allBlueRoundsDeductions
}