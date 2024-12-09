const TestResult = () => {
  const mbtiData = [
    {
      id: 0,
      type: "ENFP",
      nickname: "엉뚱발랄 아이디어 뱅크",
      description:
        "ENFP는 열정적이고 창의적인 성격으로, 새로운 아이디어와 경험을 추구합니다. 사회적 활동을 즐기며, 주변 사람들에게 긍정적인 에너지를 전달합니다. 동시에 감정적으로 풍부하고, 깊은 관계를 선호합니다. 하지만 산만해질 수 있고, 지속성이 부족할 수 있습니다.",
      keywords: ["자유로움", "창의력", "열정", "호기심", "사교적"],
      compatibleMBTI: ["INFJ", "INTJ"],
    },
    {
      id: 1,
      type: "ENTP",
      nickname: "끝말잇기의 제왕",
      description:
        "ENTP는 논쟁을 즐기고, 새로운 아이디어에 대해 끊임없이 탐구합니다. 창의적이며 문제를 해결하는 데 독창적인 접근법을 사용합니다. 때로는 너무 많은 아이디어로 인해 집중력이 흐트러질 수 있습니다.",
      keywords: ["도전정신", "논리력", "탐구심", "유머", "독창성"],
      compatibleMBTI: ["INFJ", "INTJ"],
    },
    {
      id: 2,
      type: "ESFP",
      nickname: "오늘도 내 무대",
      description:
        "ESFP는 삶의 즐거움을 추구하며, 사람들과 어울리는 것을 좋아합니다. 현재를 사는 성향이 강하며, 감각적인 즐거움에 집중합니다. 하지만 계획성 부족으로 인해 장기적인 목표 달성에 어려움을 겪을 수 있습니다.",
      keywords: ["즉흥적", "활발함", "사교성", "현실감각", "유쾌함"],
      compatibleMBTI: ["ISFJ", "ISTJ"],
    },
    {
      id: 3,
      type: "ESTP",
      nickname: "부딪혀보면 알겠지",
      description:
        "ESTP는 행동 중심적인 성격으로, 스릴을 즐기고 문제를 실질적으로 해결합니다. 리더십이 강하며, 위험을 감수하는 것을 두려워하지 않습니다. 하지만 때로는 즉흥적이고, 감정을 깊이 고려하지 않을 수 있습니다.",
      keywords: ["모험", "현실적", "실용적", "리더십", "즉흥성"],
      compatibleMBTI: ["ISFJ", "INFJ"],
    },
    {
      id: 4,
      type: "ENFJ",
      nickname: "모두를 위한 국민 멘토",
      description:
        "ENFJ는 타인의 감정을 잘 이해하며, 사람들을 돕고 이끄는 것을 좋아합니다. 강한 리더십과 사교성을 가지고 있으며, 다른 사람들의 성장을 돕는 데 행복을 느낍니다.",
      keywords: ["배려", "리더십", "공감", "사교성", "이상주의"],
      compatibleMBTI: ["INFP", "ISFP"],
    },
    {
      id: 5,
      type: "ENTJ",
      nickname: "계획이 다 있어",
      description:
        "ENTJ는 목표 지향적이고, 체계적인 접근법을 통해 문제를 해결합니다. 강력한 리더십과 논리적인 사고를 통해 조직을 이끄는 데 탁월합니다. 하지만 지나치게 강압적으로 보일 수 있으니 주의가 필요합니다.",
      keywords: ["전략", "조직력", "리더십", "논리", "목표지향"],
      compatibleMBTI: ["INTP", "INFJ"],
    },
    {
      id: 6,
      type: "ESFJ",
      nickname: "다 잘 챙기는 동네 이모",
      description:
        "ESFJ는 사람들을 돌보고, 따뜻한 관계를 만드는 데 최선을 다합니다. 전통과 조화를 중시하며, 타인의 감정에 민감합니다.",
      keywords: ["배려", "책임감", "사교성", "조화", "신뢰"],
      compatibleMBTI: ["ISFP", "ISTP"],
    },
    {
      id: 7,
      type: "ESTJ",
      nickname: "규칙 지킴이 대장",
      description:
        "ESTJ는 전통과 규칙을 중요시하며, 효율성을 최우선으로 합니다. 실용적이고 조직적인 접근법을 통해 목표를 달성합니다.",
      keywords: ["조직력", "책임감", "규율", "효율성", "실행력"],
      compatibleMBTI: ["ISFJ", "ISTP"],
    },
    {
      id: 8,
      type: "INFP",
      nickname: "마음 속 시인",
      description:
        "INFP는 깊은 감성과 이상주의를 가진 성격으로, 내면의 가치를 소중히 여깁니다. 독창적이며, 다른 사람들을 돕고자 하는 따뜻한 마음을 가지고 있습니다. 하지만 현실적인 문제에 집중하는 데 어려움을 겪을 수 있습니다.",
      keywords: ["감성", "이상주의", "창의력", "내면 세계", "독립성"],
      compatibleMBTI: ["ENFJ", "INFJ"],
    },
    {
      id: 9,
      type: "INTP",
      nickname: "실험에 진심인 사람",
      description:
        "INTP는 논리적이고 분석적인 성향을 가진 사색가입니다. 항상 새로운 아이디어를 탐구하며, 독립적인 사고를 즐깁니다. 하지만 감정적으로 타인을 이해하는 데 어려움을 겪을 수 있습니다.",
      keywords: ["논리", "호기심", "탐구", "독창성", "독립적"],
      compatibleMBTI: ["ENTJ", "ENTP"],
    },
    {
      id: 10,
      type: "ISFP",
      nickname: "내 감각이 최고야",
      description:
        "ISFP는 예술적이고 감각적인 성향으로, 자신의 감정을 표현하는 데 탁월합니다. 조용하지만, 자신의 관심 분야에 열정적이며 창의력을 발휘합니다. 하지만 때로는 결정에 소극적일 수 있습니다.",
      keywords: ["예술적", "감각적", "조용한 열정", "창의력", "독립성"],
      compatibleMBTI: ["ESFJ", "ENFP"],
    },
    {
      id: 11,
      type: "ISTP",
      nickname: "상황 파악의 달인",
      description:
        "ISTP는 실용적이고 현실적인 문제 해결 능력을 가진 유형입니다. 조용히 관찰하고, 필요한 순간에 효율적으로 행동합니다. 하지만 감정적인 교류에는 소극적일 수 있습니다.",
      keywords: ["실용성", "관찰력", "효율성", "독립적", "조용한 해결사"],
      compatibleMBTI: ["ESFP", "ESTP"],
    },
    {
      id: 12,
      type: "INFJ",
      nickname: "내 마음 읽는 초능력자",
      description:
        "INFJ는 이상주의적이며 깊은 통찰력을 가진 조언자입니다. 타인의 감정을 이해하고, 그들을 돕고자 하는 강한 욕구를 가지고 있습니다. 하지만 감정적으로 너무 몰입하여 지칠 수 있습니다.",
      keywords: ["통찰력", "이상주의", "공감", "배려", "직관적"],
      compatibleMBTI: ["ENFP", "ENTP"],
    },
    {
      id: 13,
      type: "INTJ",
      nickname: "10년 뒤가 보이는 사람",
      description:
        "INTJ는 체계적이고 전략적인 사고를 가진 설계자입니다. 미래를 계획하고, 목표를 달성하기 위해 치밀하게 행동합니다. 하지만 지나치게 독립적이고 감정을 표현하지 않는 경향이 있습니다.",
      keywords: ["전략적", "목표지향", "체계적", "독립적", "논리적"],
      compatibleMBTI: ["ENFP", "ENTJ"],
    },
    {
      id: 14,
      type: "ISFJ",
      nickname: "보이지 않는 수호천사",
      description:
        "ISFJ는 헌신적이고 따뜻한 성격으로, 주변 사람들을 세심하게 챙깁니다. 전통과 책임감을 중시하며, 타인에게 신뢰를 주는 유형입니다. 하지만 갈등을 피하려는 성향으로 자신의 감정을 억누를 수 있습니다.",
      keywords: ["헌신적", "책임감", "배려", "신뢰", "세심함"],
      compatibleMBTI: ["ESTP", "ESFP"],
    },
    {
      id: 15,
      type: "ISTJ",
      nickname: "내가 하면 무조건 해",
      description:
        "ISTJ는 책임감이 강하고 실질적인 결과를 중시합니다. 전통과 질서를 중요시하며, 체계적인 접근법으로 문제를 해결합니다. 하지만 변화에 적응하는 데 시간이 걸릴 수 있습니다.",
      keywords: ["책임감", "전통적", "조직적", "신뢰", "실용성"],
      compatibleMBTI: ["ESFP", "ESTJ"],
    },
  ];

  return mbtiData;
};

export default TestResult;
