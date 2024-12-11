export const NameData = (name1, name2) => {
  const score1 = Array.from(name1).reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0
  );
  const score2 = Array.from(name2).reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0
  );
  const compatibilityScore = Math.abs(score1 - score2) % 100;

  let message = "";
  if (compatibilityScore > 80) {
    message = "최고의 궁합입니다! 환상의 짝꿍이에요!";
  } else if (compatibilityScore > 60) {
    message = "좋은 궁합이에요. 서로 잘 어울립니다!";
  } else if (compatibilityScore > 40) {
    message = "보통 궁합입니다. 노력하면 좋은 관계를 유지할 수 있어요.";
  } else {
    message = "궁합 점수가 낮습니다. 서로 이해하려는 노력이 필요해요.";
  }

  return { score: compatibilityScore, message };
};
