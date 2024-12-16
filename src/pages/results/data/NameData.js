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

  if (compatibilityScore < 40) {
    compatibilityScore += 20;
  }

  if (compatibilityScore >= 90) {
    message = "환상의 궁합! 둘이 함께하면 세상 모든 것들이 달콤해질 거예요!";
  } else if (compatibilityScore >= 80) {
    message = "아주 좋은 궁합이에요! 서로의 매력에 빠져버릴 운명이네요!";
  } else if (compatibilityScore >= 70) {
    message =
      "좋은 궁합입니다! 둘이 함께라면 어느 순간도 지루할 틈이 없겠어요.";
  } else if (compatibilityScore >= 60) {
    message = "잘 맞는 궁합! 서로에게 멋진 지원군이 되어줄 거예요!";
  } else if (compatibilityScore >= 50) {
    message =
      "보통 궁합이에요. 노력과 이해만 있다면 더 좋은 관계로 발전할 수 있어요!";
  } else if (compatibilityScore >= 40) {
    message =
      "그럭저럭 맞는 궁합! 다만 조금 더 노력하면 금방 더 가까워질 수 있어요.";
  } else if (compatibilityScore >= 30) {
    message =
      "궁합이 조금 아쉬워요. 서로 조금 더 이해하고 노력하면 괜찮아질 거예요.";
  } else if (compatibilityScore >= 20) {
    message = "관계에서 다소 차이가 있어요. 더 많은 대화와 이해가 필요할 듯!";
  } else {
    message =
      "궁합이 정말 낮네요! 하지만 아무리 낮은 궁합도 노력하면 좋은 관계가 될 수 있어요!";
  }

  return { score: compatibilityScore, message };
};
