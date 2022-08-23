// Boxer names inputs
let boxerRedNameInput = document.getElementById('boxer_red_name_input');
let boxerBlueNameInput = document.getElementById('boxer_blue_name_input');
let winnerIs = document.getElementById("winner_is");

// Calculate scores function
function calculateScores() {

  // Red boxers name
  let boxerRedNameInput = String(document.getElementById('boxer_red_name_input').value);
  console.log(boxerRedNameInput);

  // Blue boxers name
  let boxerBlueNameInput = String(document.getElementById('boxer_blue_name_input').value);
  console.log(boxerBlueNameInput);

  // Red rounds
  const round1ScoreRed = Number(document.getElementById("round_1_score_red").value)
  const round2ScoreRed = Number(document.getElementById("round_2_score_red").value)
  const round3ScoreRed = Number(document.getElementById("round_3_score_red").value)
  const round4ScoreRed = Number(document.getElementById("round_4_score_red").value)
  const round5ScoreRed = Number(document.getElementById("round_5_score_red").value)
  const round6ScoreRed = Number(document.getElementById("round_6_score_red").value)
  const round7ScoreRed = Number(document.getElementById("round_7_score_red").value)
  const round8ScoreRed = Number(document.getElementById("round_8_score_red").value)
  const round9ScoreRed = Number(document.getElementById("round_9_score_red").value)
  const round10ScoreRed = Number(document.getElementById("round_10_score_red").value)
  const round11ScoreRed = Number(document.getElementById("round_11_score_red").value)
  const round12ScoreRed = Number(document.getElementById("round_12_score_red").value)

  // Red deductions
  const round1DeductionsRed = Number(document.getElementById("round_1_deductions_red").value)
  const round2DeductionsRed = Number(document.getElementById("round_2_deductions_red").value)
  const round3DeductionsRed = Number(document.getElementById("round_3_deductions_red").value)
  const round4DeductionsRed = Number(document.getElementById("round_4_deductions_red").value)
  const round5DeductionsRed = Number(document.getElementById("round_5_deductions_red").value)
  const round6DeductionsRed = Number(document.getElementById("round_6_deductions_red").value)
  const round7DeductionsRed = Number(document.getElementById("round_7_deductions_red").value)
  const round8DeductionsRed = Number(document.getElementById("round_8_deductions_red").value)
  const round9DeductionsRed = Number(document.getElementById("round_9_deductions_red").value)
  const round10DeductionsRed = Number(document.getElementById("round_10_deductions_red").value)
  const round11DeductionsRed = Number(document.getElementById("round_11_deductions_red").value)
  const round12DeductionsRed = Number(document.getElementById("round_12_deductions_red").value)

  // Blue rounds 
  const round1ScoreBlue = Number(document.getElementById("round_1_score_blue").value)
  const round2ScoreBlue = Number(document.getElementById("round_2_score_blue").value)
  const round3ScoreBlue = Number(document.getElementById("round_3_score_blue").value)
  const round4ScoreBlue = Number(document.getElementById("round_4_score_blue").value)
  const round5ScoreBlue = Number(document.getElementById("round_5_score_blue").value)
  const round6ScoreBlue = Number(document.getElementById("round_6_score_blue").value)
  const round7ScoreBlue = Number(document.getElementById("round_7_score_blue").value)
  const round8ScoreBlue = Number(document.getElementById("round_8_score_blue").value)
  const round9ScoreBlue = Number(document.getElementById("round_9_score_blue").value)
  const round10ScoreBlue = Number(document.getElementById("round_10_score_blue").value)
  const round11ScoreBlue = Number(document.getElementById("round_11_score_blue").value)
  const round12ScoreBlue = Number(document.getElementById("round_12_score_blue").value)

  // Blue deductions
  const round1DeductionsBlue = Number(document.getElementById("round_1_deductions_blue").value)
  const round2DeductionsBlue = Number(document.getElementById("round_2_deductions_blue").value)
  const round3DeductionsBlue = Number(document.getElementById("round_3_deductions_blue").value)
  const round4DeductionsBlue = Number(document.getElementById("round_4_deductions_blue").value)
  const round5DeductionsBlue = Number(document.getElementById("round_5_deductions_blue").value)
  const round6DeductionsBlue = Number(document.getElementById("round_6_deductions_blue").value)
  const round7DeductionsBlue = Number(document.getElementById("round_7_deductions_blue").value)
  const round8DeductionsBlue = Number(document.getElementById("round_8_deductions_blue").value)
  const round9DeductionsBlue = Number(document.getElementById("round_9_deductions_blue").value)
  const round10DeductionsBlue = Number(document.getElementById("round_10_deductions_blue").value)
  const round11DeductionsBlue = Number(document.getElementById("round_11_deductions_blue").value)
  const round12DeductionsBlue = Number(document.getElementById("round_12_deductions_blue").value)

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

  // Winner display logic
  if (totalScoreRedUI < totalScoreBlueUI) {
    if (document.getElementById("boxer_blue_name_input").value == "") {
      winnerIs.innerText = "The blue corner is the winner!"
    } else {
      winnerIs.innerText = `${boxerBlueNameInput} is the winner!`
      console.log(winnerIs)
    }
  } else {
    if (document.getElementById("boxer_red_name_input").value == "") {
      winnerIs.innerText = "The red corner is the winner!"
    } else {
      winnerIs.innerText = `${boxerRedNameInput} is the winner!`
      console.log(winnerIs)
    }
  }

  // If fight is a draw display logic
  if (totalScoreRedUI == totalScoreBlueUI) {
    winnerIs.innerText = "The fight is a draw!"
    console.log(winnerIs)
  }

}

// Bell sound on page reload
window.onload = function () {
  document.getElementById("my_audio").play();
}