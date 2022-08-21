let round1ScoreRed = document.getElementById("round_1_score_red")
let round1DeductionsRed = document.getElementById("round_1_deductions_red")
let round1ScoreBlue = document.getElementById("round_1_score_blue")
let round1DeductionsBlue = document.getElementById("round_1_deductions_blue")

let totalScoreRed = document.getElementById("total_score_red") //total score for red team
let totalScoreBlue = document.getElementById("total_score_blue") //total score for blue team

function calculateScores() {
  let round1RedTotal = round1ScoreRed - round1DeductionsRed
  let round1BlueTotal = round1ScoreBlue - round1DeductionsBlue
  let totalScoreRedDisplay = round1ScoreRed - round1DeductionsRed
}