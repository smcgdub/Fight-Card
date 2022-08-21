const round1ScoreRed = document.getElementById("round_1_score_red")
const round1DeductionsRed = document.getElementById("round_1_deductions_red")
const round1ScoreBlue = document.getElementById("round_1_score_blue")
const round1DeductionsBlue = document.getElementById("round_1_deductions_blue")

const round2ScoreRed = document.getElementById("round_2_score_red")
const round2DeductionsRed = document.getElementById("round_2_deductions_red")
const round2ScoreBlue = document.getElementById("round_2_score_blue")
const round2DeductionsBlue = document.getElementById("round_2_deductions_blue")

const round3ScoreRed = document.getElementById("round_3_score_red")
const round3DeductionsRed = document.getElementById("round_3_deductions_red")
const round3ScoreBlue = document.getElementById("round_3_score_blue")
const round3DeductionsBlue = document.getElementById("round_3_deductions_blue")

const round4ScoreRed = document.getElementById("round_4_score_red")
const round4DeductionsRed = document.getElementById("round_4_deductions_red")
const round4ScoreBlue = document.getElementById("round_4_score_blue")
const round4DeductionsBlue = document.getElementById("round_4_deductions_blue")

let totalScoreRed = document.getElementById("total_score_red") //total score for red team
let totalScoreBlue = document.getElementById("total_score_blue") //total score for blue team

function calculateScores() {
  let round1RedTotal = round1ScoreRed - round1DeductionsRed
  let round1BlueTotal = round1ScoreBlue - round1DeductionsBlue
  let totalScoreRedDisplay = round1ScoreRed - round1DeductionsRed
}