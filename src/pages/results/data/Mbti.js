const Mbti = [
  {
    pair: ["ENFP", "ENTJ"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ENFP와 ENTJ는 친구로서 매우 좋은 관계를 형성할 수 있습니다. ENFP는 창의력과 에너지를 제공하며, ENTJ는 이를 실행 가능한 계획으로 바꿉니다.",
      romantic:
        "연인 관계에서는 ENFP의 열정과 ENTJ의 리더십이 강하게 결합되어 서로를 동기 부여하고 도전하게 합니다.",
    },
  },
  {
    pair: ["ENFP", "INFJ"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "ENFP와 INFJ는 서로의 차이를 통해 친구로서 깊은 유대감을 형성합니다. ENFP의 활발함은 INFJ의 신중한 태도를 밝게 비춰줍니다.",
      romantic:
        "연인으로서는 ENFP의 창의력과 INFJ의 직관이 아름답게 조화를 이룹니다. 두 사람은 감정적으로 매우 잘 맞으며, 서로를 격려합니다.",
    },
  },
  {
    pair: ["ENFP", "ISTJ"],
    friendshipScore: 65,
    romanticScore: 70,
    description: {
      friendship:
        "ENFP와 ISTJ는 친구로서 다소 도전적인 관계일 수 있습니다. ENFP는 자유로운 사고를 즐기며, ISTJ는 질서를 중요시합니다.",
      romantic:
        "연인으로서는 ENFP의 즉흥성과 ISTJ의 안정성이 충돌할 수 있지만, 서로의 차이를 인정하면 안정적인 관계를 만들 수 있습니다.",
    },
  },
  {
    pair: ["ENFP", "ISFJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ENFP와 ISFJ는 서로의 차이를 통해 조화로운 친구 관계를 형성할 수 있습니다. ENFP는 활발함을, ISFJ는 안정감을 제공합니다.",
      romantic:
        "연인으로서는 ENFP의 활기와 ISFJ의 안정성이 서로를 보완하며 따뜻한 관계를 형성합니다.",
    },
  },
  {
    pair: ["ENFP", "INTJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ENFP와 INTJ는 친구로서 서로의 차이점에서 배우고 성장할 수 있습니다. ENFP는 창의적이고 외향적인 아이디어를 제공합니다.",
      romantic:
        "연인 관계에서는 ENFP의 즉흥성과 INTJ의 계획적인 접근이 충돌할 수 있지만, 장기적으로 강한 유대감을 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ENFP", "INTP"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "ENFP와 INTP는 친구로서 매우 흥미로운 대화를 나눌 수 있습니다. 두 사람은 서로의 아이디어와 창의적인 사고를 자극합니다.",
      romantic:
        "연인 관계에서는 INTP의 독립성과 ENFP의 활발함이 조화를 이루며, 감정적으로도 성장할 기회를 제공합니다.",
    },
  },
  {
    pair: ["ENFP", "ISFP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ENFP와 ISFP는 친구로서 창의적이고 감정적으로 안정적인 관계를 형성할 수 있습니다. 서로의 개성을 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람 모두 감정적으로 깊이 연결되며, 서로의 자유로운 성향을 이해하고 존중합니다.",
    },
  },
  {
    pair: ["ENFP", "ESTJ"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ENFP와 ESTJ는 친구로서 갈등이 있을 수 있지만, 서로의 차이를 이해하고 존중한다면 강력한 협력 관계를 유지할 수 있습니다.",
      romantic:
        "연인 관계에서는 ENFP의 창의성과 ESTJ의 실용성이 충돌할 수 있지만, 조화를 이룬다면 강한 유대감을 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ENFP", "ESFJ"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "ENFP와 ESFJ는 친구로서 매우 좋은 관계를 형성할 수 있습니다. 두 사람은 서로의 감정을 이해하고 지지합니다.",
      romantic:
        "연인 관계에서는 ENFP와 ESFJ가 감정적으로 깊이 연결되어 서로를 격려하고 긍정적인 영향을 미칠 수 있습니다.",
    },
  },
  {
    pair: ["ENFP", "ESTP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ENFP와 ESTP는 모험심과 활발함을 공유하며 매우 즐거운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람의 에너지가 조화를 이루며, 관계가 매우 다이내믹하고 재미있어질 가능성이 큽니다.",
    },
  },
  {
    pair: ["ENFP", "ESFP"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ENFP와 ESFP는 매우 활기차고 유쾌한 친구 관계를 형성합니다. 두 사람은 서로의 열정을 공유합니다.",
      romantic:
        "연인 관계에서는 두 사람 모두 에너지가 넘치며, 관계를 매우 재미있고 활기차게 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ENFP", "INFP"],
    friendshipScore: 95,
    romanticScore: 90,
    description: {
      friendship:
        "ENFP와 INFP는 친구로서 서로의 감정을 깊이 이해하고 공유하며 안정적인 유대감을 형성합니다.",
      romantic:
        "연인 관계에서는 ENFP와 INFP가 서로의 이상과 감정을 존중하며 매우 안정적이고 헌신적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ENTJ", "ENFP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ENTJ와 ENFP는 서로의 에너지와 목표 지향성을 공유하며 협력적인 친구 관계를 형성합니다. ENFP는 ENTJ의 리더십을 존중하며, ENTJ는 ENFP의 창의적인 아이디어를 실행 가능한 계획으로 발전시킵니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 강점을 통해 성장하며 매우 상호 보완적인 관계를 형성할 수 있습니다. ENFP의 따뜻함이 ENTJ에게 안정감을 제공하고, ENTJ의 추진력이 ENFP에게 동기 부여를 줍니다.",
    },
  },
  {
    pair: ["ENTJ", "INFJ"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "ENTJ와 INFJ는 친구로서 서로에게 깊은 지적 자극을 제공하며, 목표를 향해 함께 협력할 수 있는 관계를 형성합니다. INFJ는 ENTJ의 계획을 깊이 있게 지원하고, ENTJ는 INFJ의 비전을 실행합니다.",
      romantic:
        "연인 관계에서는 두 사람 모두 이상적인 목표를 향해 나아가며 매우 헌신적이고 안정적인 관계를 형성합니다. ENTJ는 INFJ의 감정을 존중하고, INFJ는 ENTJ의 리더십을 따르며 상호 성장합니다.",
    },
  },
  {
    pair: ["ENTJ", "ISTJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ENTJ와 ISTJ는 실용적이고 계획적인 사고를 공유하며, 매우 효율적인 친구 관계를 형성합니다. 두 사람은 서로의 목표를 지원하며 안정적으로 협력할 수 있습니다.",
      romantic:
        "연인 관계에서는 ENTJ와 ISTJ가 서로의 강점을 존중하며 안정적이고 장기적인 관계를 형성할 가능성이 높습니다. 둘 다 책임감을 중요시하며, 관계를 꾸준히 발전시킵니다.",
    },
  },
  {
    pair: ["ENTJ", "ISFJ"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "ENTJ와 ISFJ는 서로의 성격 차이를 극복하며 균형 있는 친구 관계를 형성할 수 있습니다. ENTJ는 ISFJ의 배려심을 높이 평가하고, ISFJ는 ENTJ의 결단력을 존중합니다.",
      romantic:
        "연인 관계에서는 서로 다른 성격이 충돌할 수 있지만, ENTJ의 리더십과 ISFJ의 헌신이 조화를 이루며 관계를 안정적으로 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ENTJ", "INTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENTJ와 INTJ는 목표 지향적이고 전략적인 사고를 공유하며 매우 생산적인 친구 관계를 형성할 수 있습니다. 두 사람은 함께 장기적인 목표를 설정하고 이를 실행할 수 있습니다.",
      romantic:
        "연인 관계에서는 ENTJ와 INTJ가 서로의 강점을 존중하며 매우 발전적인 관계를 형성할 수 있습니다. 두 사람은 서로를 자극하며 지적이고 감정적인 유대감을 동시에 형성합니다.",
    },
  },
  {
    pair: ["ENTJ", "INTP"],
    friendshipScore: 80,
    romanticScore: 84,
    description: {
      friendship:
        "ENTJ와 INTP는 지적인 대화를 즐기며 서로의 강점을 인정합니다. ENTJ는 INTP의 창의성과 분석적 사고를 활용하며, INTP는 ENTJ의 실행력을 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 지적인 자극을 주고받습니다. ENTJ는 INTP의 자유로움을 존중하며, INTP는 ENTJ의 리더십을 따릅니다.",
    },
  },
  {
    pair: ["ENTJ", "ISFP"],
    friendshipScore: 60,
    romanticScore: 65,
    description: {
      friendship:
        "ENTJ와 ISFP는 성격 차이로 인해 초기에는 조화를 이루기 어려울 수 있지만, 서로를 이해하면 유익한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ENTJ의 계획성과 ISFP의 자유로운 감성이 충돌할 수 있지만, 서로의 차이를 이해하고 조율하면 따뜻하고 균형 잡힌 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ENTJ", "ESTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENTJ와 ESTJ는 매우 효율적이고 실용적인 친구 관계를 형성합니다. 두 사람은 목표를 향해 함께 일하며, 서로의 추진력을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 ENTJ와 ESTJ가 매우 안정적이고 목표 지향적인 관계를 형성할 수 있습니다. 둘 다 책임감을 중요시하며, 장기적인 관계를 발전시킬 수 있습니다.",
    },
  },
  {
    pair: ["ENTJ", "ESFJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ENTJ와 ESFJ는 서로의 강점을 존중하며 균형 잡힌 친구 관계를 형성할 수 있습니다. ESFJ는 ENTJ의 결단력을 높이 평가하고, ENTJ는 ESFJ의 따뜻함을 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 매우 안정적이고 감정적으로 깊은 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ENTJ", "ESTP"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "ENTJ와 ESTP는 에너지와 결단력을 공유하며 매우 활발한 친구 관계를 형성할 수 있습니다. 두 사람은 모험과 새로운 기회를 함께 탐색합니다.",
      romantic:
        "연인 관계에서는 두 사람의 강렬한 에너지가 조화를 이루며 매우 다이내믹한 관계를 형성할 가능성이 큽니다.",
    },
  },
  {
    pair: ["ENTJ", "ESFP"],
    friendshipScore: 78,
    romanticScore: 82,
    description: {
      friendship:
        "ENTJ와 ESFP는 서로의 차이점에서 배우며 즐거운 친구 관계를 형성할 수 있습니다. ESFP는 ENTJ에게 유연함을 가르치고, ENTJ는 ESFP에게 목표 지향적인 사고를 제공합니다.",
      romantic:
        "연인 관계에서는 서로의 성향 차이가 갈등을 유발할 수 있지만, 이를 극복하면 감정적으로 따뜻한 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ENTJ", "INFP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ENTJ와 INFP는 성격 차이로 인해 조화를 이루는 데 시간이 걸릴 수 있지만, 서로를 이해하면 깊은 유대감을 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 서로의 가치관이 충돌할 수 있지만, 상대방의 목표와 감정을 존중하면 균형 잡힌 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "ENFP"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "INFJ와 ENFP는 서로의 차이를 통해 친구로서 깊은 유대감을 형성합니다. INFJ는 ENFP의 활기를 존중하고, ENFP는 INFJ의 깊이 있는 통찰력을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 INFJ와 ENFP가 감정적으로 깊이 연결되며, 서로를 격려하고 지원합니다. 두 사람은 매우 이상적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "ENTJ"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "INFJ와 ENTJ는 친구로서 서로에게 지적인 자극을 제공하며, 목표를 향해 함께 협력할 수 있는 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 INFJ의 통찰력과 ENTJ의 추진력이 결합되어 매우 헌신적이고 안정적인 관계를 형성합니다.",
    },
  },
  {
    pair: ["INFJ", "INFJ"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "INFJ끼리는 친구로서 매우 깊이 있는 대화를 나누며, 서로를 이해하고 지지할 수 있는 안정적인 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 INFJ가 서로의 감정과 가치관을 존중하며 매우 조화롭고 헌신적인 관계를 이어갈 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "ISTJ"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "INFJ와 ISTJ는 서로 다른 성향을 가지고 있지만, 서로의 차이를 존중하면 신뢰를 바탕으로 한 좋은 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 INFJ의 이상주의와 ISTJ의 실용주의가 충돌할 수 있지만, 이를 극복하면 균형 잡힌 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "ISFJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "INFJ와 ISFJ는 서로의 감정을 잘 이해하며, 서로를 위로하고 지지하는 안정적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 감정적으로 매우 잘 맞으며, 헌신적이고 따뜻한 관계를 유지할 가능성이 큽니다.",
    },
  },
  {
    pair: ["INFJ", "INTJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "INFJ와 INTJ는 친구로서 지적인 대화를 즐기며 서로의 아이디어를 존중합니다. 두 사람은 함께 목표를 설정하고 이를 달성할 수 있습니다.",
      romantic:
        "연인 관계에서는 INFJ의 감성과 INTJ의 논리적 사고가 조화를 이루며 서로를 보완하는 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "INTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "INFJ와 INTP는 서로의 독창적인 사고를 높이 평가하며, 깊이 있는 대화를 나눌 수 있는 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 INFJ의 감성과 INTP의 분석적 사고가 조화를 이루며, 서로에게 안정감을 제공하는 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "ISFP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "INFJ와 ISFP는 서로의 감정과 가치를 이해하며, 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 INFJ와 ISFP가 서로를 보완하며 매우 감정적으로 안정적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "ESTJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "INFJ와 ESTJ는 서로의 성격 차이를 이해하며 균형 있는 친구 관계를 형성할 수 있습니다. ESTJ는 INFJ의 비전을 실행 가능하도록 돕습니다.",
      romantic:
        "연인 관계에서는 서로의 접근 방식이 다를 수 있지만, 서로를 존중하면 매우 안정적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "ESFJ"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "INFJ와 ESFJ는 서로의 감정과 가치를 존중하며 따뜻한 친구 관계를 형성할 수 있습니다. ESFJ는 INFJ의 이상주의를 지원합니다.",
      romantic:
        "연인 관계에서는 두 사람이 감정적으로 깊이 연결되며, 서로를 지지하는 헌신적인 관계를 유지할 가능성이 큽니다.",
    },
  },
  {
    pair: ["INFJ", "ESTP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "INFJ와 ESTP는 서로 다른 성향으로 인해 초기에는 갈등이 있을 수 있지만, 서로의 차이를 존중하면 흥미로운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 INFJ의 신중함과 ESTP의 모험심이 충돌할 수 있지만, 적절한 균형을 찾으면 매우 흥미롭고 다채로운 관계가 될 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "ESFP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "INFJ와 ESFP는 서로의 차이를 존중하며, 감정적으로 연결될 수 있는 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 INFJ와 ESFP가 서로의 성격 차이를 극복하며 따뜻한 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "INFP"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "INFJ와 INFP는 서로의 감정을 잘 이해하며, 깊이 있는 대화를 나눌 수 있는 매우 안정적인 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 감정적으로 깊이 연결되며, 서로를 지지하고 지원하는 이상적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "ENFP"],
    friendshipScore: 65,
    romanticScore: 70,
    description: {
      friendship:
        "ISTJ와 ENFP는 서로 다른 성향으로 인해 조화를 이루는 데 시간이 걸릴 수 있지만, 서로의 강점을 이해하면 보완적인 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ISTJ의 안정성과 ENFP의 창의성이 충돌할 수 있지만, 서로의 차이를 인정하고 존중하면 안정적인 관계를 만들 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "ENTJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ISTJ와 ENTJ는 실용적이고 계획적인 사고를 공유하며 효율적인 친구 관계를 형성합니다. 두 사람은 함께 목표를 설정하고 이를 실행할 수 있습니다.",
      romantic:
        "연인 관계에서는 ISTJ의 책임감과 ENTJ의 추진력이 조화를 이루며, 안정적이고 장기적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "INFJ"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "ISTJ와 INFJ는 서로의 차이를 존중하며, 신뢰를 바탕으로 한 균형 있는 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ISTJ의 실용주의와 INFJ의 이상주의가 충돌할 수 있지만, 이를 극복하면 안정적이고 헌신적인 관계를 만들 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "ISTJ"],
    friendshipScore: 85,
    romanticScore: 80,
    description: {
      friendship:
        "ISTJ끼리는 친구로서 매우 안정적인 관계를 형성할 수 있습니다. 두 사람은 서로의 규칙성과 책임감을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 ISTJ끼리 실용적이고 안정적인 관계를 형성하지만, 감정 표현이 부족할 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "ISFJ"],
    friendshipScore: 88,
    romanticScore: 85,
    description: {
      friendship:
        "ISTJ와 ISFJ는 서로의 실용성과 감정적인 안정감을 존중하며, 매우 조화로운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 지지하며, 안정적이고 따뜻한 관계를 유지할 가능성이 큽니다.",
    },
  },
  {
    pair: ["ISTJ", "INTJ"],
    friendshipScore: 80,
    romanticScore: 82,
    description: {
      friendship:
        "ISTJ와 INTJ는 서로의 계획적이고 목표 지향적인 사고를 공유하며, 매우 생산적인 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 ISTJ의 실용적 접근과 INTJ의 전략적 사고가 조화를 이루며, 서로를 보완하는 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "INTP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ISTJ와 INTP는 서로의 차이점에서 배울 수 있는 친구 관계를 형성합니다. INTP는 창의성을, ISTJ는 안정성을 제공합니다.",
      romantic:
        "연인 관계에서는 ISTJ와 INTP가 서로의 차이를 이해하려고 노력하면 감정적으로 안정적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "ISFP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ISTJ와 ISFP는 서로의 성향 차이를 존중하며, 따뜻하고 안정적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ISTJ의 계획성과 ISFP의 유연성이 충돌할 수 있지만, 서로의 차이를 이해하면 안정적이고 감정적으로 깊은 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "ESTJ"],
    friendshipScore: 90,
    romanticScore: 85,
    description: {
      friendship:
        "ISTJ와 ESTJ는 실용적이고 책임감 있는 성격을 공유하며, 매우 강력한 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 매우 안정적이고 생산적인 관계를 유지하며, 장기적으로 함께 성장할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISTJ", "ESFJ"],
    friendshipScore: 85,
    romanticScore: 80,
    description: {
      friendship:
        "ISTJ와 ESFJ는 서로의 감정적 안정감과 실용성을 존중하며, 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며, 안정적이고 헌신적인 관계를 유지할 가능성이 큽니다.",
    },
  },
  {
    pair: ["ISTJ", "ESTP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ISTJ와 ESTP는 서로 다른 성향으로 인해 초기에는 갈등이 있을 수 있지만, 서로를 이해하면 매우 생산적인 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ISTJ의 안정성과 ESTP의 모험심이 충돌할 수 있지만, 조화를 이루면 강력한 유대감을 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "ESFP"],
    friendshipScore: 72,
    romanticScore: 75,
    description: {
      friendship:
        "ISTJ와 ESFP는 성향 차이를 극복하면 서로에게 큰 자극을 줄 수 있는 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 존중하고 보완하면 따뜻하고 안정적인 관계를 만들 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "INFP"],
    friendshipScore: 65,
    romanticScore: 70,
    description: {
      friendship:
        "ISTJ와 INFP는 서로의 성격 차이로 인해 조화를 이루는 데 시간이 걸릴 수 있지만, 차이를 존중하면 좋은 친구 관계를 유지할 수 있습니다.",
      romantic:
        "연인 관계에서는 ISTJ와 INFP가 서로의 가치관을 이해하려고 노력하면 감정적으로 안정적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "ENFP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ISFJ와 ENFP는 서로의 성향 차이를 통해 배우며 따뜻한 친구 관계를 형성할 수 있습니다. ENFP는 ISFJ에게 활기를, ISFJ는 ENFP에게 안정감을 제공합니다.",
      romantic:
        "연인 관계에서는 ISFJ의 헌신과 ENFP의 창의성이 조화를 이루며 서로에게 안정감과 즐거움을 제공합니다.",
    },
  },
  {
    pair: ["ISFJ", "ENTJ"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "ISFJ와 ENTJ는 서로의 책임감과 헌신적인 태도를 공유하며 균형 있는 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ENTJ의 추진력과 ISFJ의 배려심이 결합되어 안정적이고 발전적인 관계를 만들 수 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "INFJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ISFJ와 INFJ는 서로의 감정을 잘 이해하며, 감정적으로 안정적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ISFJ와 INFJ가 서로를 보완하며 따뜻하고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFJ", "ISTJ"],
    friendshipScore: 88,
    romanticScore: 85,
    description: {
      friendship:
        "ISFJ와 ISTJ는 서로의 책임감과 실용성을 존중하며, 안정적이고 신뢰할 수 있는 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 안정감을 강화하며 따뜻한 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFJ", "ISFJ"],
    friendshipScore: 90,
    romanticScore: 85,
    description: {
      friendship:
        "ISFJ끼리는 서로의 감정적 안정감과 헌신을 이해하며 매우 따뜻한 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 ISFJ가 서로를 지지하고 이해하며 안정적이고 헌신적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "INTJ"],
    friendshipScore: 80,
    romanticScore: 82,
    description: {
      friendship:
        "ISFJ와 INTJ는 서로의 성격 차이를 이해하며 조화로운 친구 관계를 형성할 수 있습니다. ISFJ는 INTJ에게 따뜻함을 제공하고, INTJ는 ISFJ에게 계획적인 사고를 제공합니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 존중하며 안정적이고 깊이 있는 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "INTP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ISFJ와 INTP는 서로의 차이를 통해 배울 수 있는 친구 관계를 형성합니다. ISFJ는 INTP의 자유로움을, INTP는 ISFJ의 따뜻함을 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 성향 차이를 이해하고 조율하면 안정적이고 흥미로운 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "ISFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ISFJ와 ISFP는 서로의 감정과 가치를 이해하며 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 매우 안정적이고 감정적으로 깊은 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "ESTJ"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ISFJ와 ESTJ는 서로의 책임감과 실용성을 존중하며 신뢰할 수 있는 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 매우 안정적이고 헌신적인 관계를 유지하며 서로를 격려할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFJ", "ESFJ"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ISFJ와 ESFJ는 서로의 감정적 안정감을 공유하며 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 매우 안정적이고 헌신적인 관계를 유지할 가능성이 큽니다.",
    },
  },
  {
    pair: ["ISFJ", "ESTP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ISFJ와 ESTP는 성향 차이로 인해 초기에는 갈등이 있을 수 있지만, 서로를 이해하면 조화로운 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ISFJ의 안정성과 ESTP의 모험심이 조화를 이루며 흥미롭고 다채로운 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "ESFP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ISFJ와 ESFP는 서로의 차이를 존중하며 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 안정적이고 즐거운 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "INFP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ISFJ와 INFP는 서로의 감정적 깊이를 이해하며 매우 따뜻하고 신뢰할 수 있는 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 격려하고 지원하며 감정적으로 안정적인 관계를 유지할 가능성이 큽니다.",
    },
  },
  {
    pair: ["INTJ", "ENFP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "INTJ와 ENFP는 서로의 차이를 존중하며, 지적인 대화를 즐기는 친구 관계를 형성할 수 있습니다. ENFP는 창의적인 아이디어를, INTJ는 전략적인 실행 계획을 제공합니다.",
      romantic:
        "연인 관계에서는 INTJ와 ENFP가 서로의 강점을 보완하며, 장기적인 목표를 공유할 수 있는 매우 조화로운 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INTJ", "ENTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "INTJ와 ENTJ는 목표 지향적이고 전략적인 사고를 공유하며 매우 생산적인 친구 관계를 형성합니다. 두 사람은 서로의 계획을 지원하며 함께 성장할 수 있습니다.",
      romantic:
        "연인 관계에서는 INTJ의 계획성과 ENTJ의 리더십이 결합되어 강력한 유대감을 형성할 가능성이 큽니다.",
    },
  },
  {
    pair: ["INTJ", "INFJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "INTJ와 INFJ는 서로의 지적 호기심과 깊이 있는 대화를 통해 친밀한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 INFJ의 감성과 INTJ의 논리적 사고가 조화를 이루며, 서로에게 안정감을 제공하는 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INTJ", "ISTJ"],
    friendshipScore: 80,
    romanticScore: 82,
    description: {
      friendship:
        "INTJ와 ISTJ는 서로의 계획적이고 실용적인 성향을 존중하며 매우 신뢰할 수 있는 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 안정적이고 장기적인 목표를 공유하며 균형 잡힌 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INTJ", "ISFJ"],
    friendshipScore: 80,
    romanticScore: 82,
    description: {
      friendship:
        "INTJ와 ISFJ는 서로의 차이를 이해하며 조화로운 친구 관계를 형성할 수 있습니다. ISFJ는 따뜻함을, INTJ는 전략적 사고를 제공합니다.",
      romantic:
        "연인 관계에서는 INTJ와 ISFJ가 서로의 강점을 존중하며 감정적으로 안정적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["INTJ", "INTJ"],
    friendshipScore: 85,
    romanticScore: 80,
    description: {
      friendship:
        "INTJ끼리는 목표 지향적이고 전략적인 사고를 공유하며 매우 생산적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 INTJ가 서로의 계획을 이해하지만, 감정적으로 부족할 수 있으므로 균형을 맞추는 노력이 필요합니다.",
    },
  },
  {
    pair: ["INTJ", "INTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "INTJ와 INTP는 서로의 창의성과 분석적 사고를 존중하며 매우 지적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 지적으로 자극을 주며 서로를 격려할 수 있는 매우 균형 잡힌 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INTJ", "ISFP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "INTJ와 ISFP는 성격 차이로 인해 초기에는 조화를 이루기 어려울 수 있지만, 서로를 이해하면 안정적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 INTJ의 계획성과 ISFP의 자유로운 감성이 충돌할 수 있지만, 서로를 존중한다면 조화로운 관계를 만들 수 있습니다.",
    },
  },
  {
    pair: ["INTJ", "ESTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "INTJ와 ESTJ는 매우 효율적이고 실용적인 친구 관계를 형성합니다. 두 사람은 목표를 향해 협력하며 높은 생산성을 자랑합니다.",
      romantic:
        "연인 관계에서는 두 사람이 책임감을 공유하며 매우 안정적이고 장기적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INTJ", "ESFJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "INTJ와 ESFJ는 서로의 차이를 이해하며 균형 잡힌 친구 관계를 형성할 수 있습니다. ESFJ는 INTJ에게 감정적인 지원을, INTJ는 ESFJ에게 실용적인 조언을 제공합니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 극복하며 따뜻하고 안정적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INTJ", "ESTP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "INTJ와 ESTP는 성격 차이로 인해 초기에는 갈등이 있을 수 있지만, 서로를 이해하면 흥미로운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람의 차이가 도전으로 작용할 수 있지만, 이를 극복하면 강력한 유대감을 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INTJ", "ESFP"],
    friendshipScore: 72,
    romanticScore: 75,
    description: {
      friendship:
        "INTJ와 ESFP는 서로의 성향 차이를 통해 배우며 조화로운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 INTJ의 계획성과 ESFP의 유연성이 충돌할 수 있지만, 서로의 차이를 이해하면 따뜻한 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INTJ", "INFP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "INTJ와 INFP는 서로의 가치와 목표를 공유하며 깊이 있는 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 이상을 존중하며 매우 헌신적이고 감정적으로 안정적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INTP", "ENFP"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "INTP와 ENFP는 서로의 창의적 사고와 유머를 공유하며 즐거운 친구 관계를 형성할 수 있습니다. INTP는 ENFP의 활발함을 존중하고, ENFP는 INTP의 분석적 사고를 높이 평가합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 자극하며 성장할 수 있는 매우 흥미롭고 감정적으로 안정적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INTP", "ENTJ"],
    friendshipScore: 80,
    romanticScore: 84,
    description: {
      friendship:
        "INTP와 ENTJ는 지적인 대화를 즐기며 서로의 강점을 인정하는 친구 관계를 형성합니다. ENTJ는 INTP의 창의성을 실행 가능한 계획으로 발전시키고, INTP는 ENTJ의 추진력을 지원합니다.",
      romantic:
        "연인 관계에서는 두 사람이 지적으로 자극을 주고받으며 감정적으로도 안정적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["INTP", "INFJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "INTP와 INFJ는 서로의 깊이 있는 대화를 즐기며 지적이고 감정적으로 안정적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 INTP와 INFJ가 서로를 보완하며 매우 조화로운 관계를 형성할 수 있습니다. INTP는 INFJ의 감정을 이해하고, INFJ는 INTP의 논리성을 존중합니다.",
    },
  },
  {
    pair: ["INTP", "ISTJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "INTP와 ISTJ는 서로의 성향 차이를 존중하며 조화로운 친구 관계를 형성할 수 있습니다. INTP는 창의성과 자유로움을, ISTJ는 안정성을 제공합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 이해하고 조율하면 균형 잡힌 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["INTP", "ISFJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "INTP와 ISFJ는 서로의 차이를 이해하며 따뜻한 친구 관계를 형성할 수 있습니다. ISFJ는 INTP의 독립성을 존중하고, INTP는 ISFJ의 헌신을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 성향 차이를 극복하면 안정적이고 감정적으로 깊은 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INTP", "INTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "INTP와 INTJ는 서로의 창의적이고 전략적인 사고를 공유하며 매우 생산적인 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 지적으로 서로를 자극하며 매우 균형 잡힌 관계를 형성할 수 있습니다. INTJ는 INTP의 아이디어를 실행 가능하도록 돕습니다.",
    },
  },
  {
    pair: ["INTP", "INTP"],
    friendshipScore: 90,
    romanticScore: 85,
    description: {
      friendship:
        "INTP끼리는 서로의 창의적이고 독립적인 사고를 공유하며 깊이 있는 대화를 나눌 수 있는 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 INTP가 서로의 독립성을 존중하며 감정적으로도 안정적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INTP", "ISFP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "INTP와 ISFP는 서로의 차이를 극복하면 따뜻하고 조화로운 친구 관계를 형성할 수 있습니다. ISFP는 INTP의 독창성을, INTP는 ISFP의 감성적 접근을 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 이해하려고 노력하면 안정적이고 따뜻한 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["INTP", "ESTJ"],
    friendshipScore: 78,
    romanticScore: 80,
    description: {
      friendship:
        "INTP와 ESTJ는 서로의 성향 차이를 극복하며 협력적인 친구 관계를 형성할 수 있습니다. ESTJ는 INTP의 창의성을 실행 가능한 계획으로 발전시킵니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 존중하며, 목표를 공유하면 안정적이고 실용적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INTP", "ESFJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "INTP와 ESFJ는 성향 차이로 인해 초기에는 갈등이 있을 수 있지만, 서로를 이해하면 조화로운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 INTP와 ESFJ가 서로의 성격 차이를 극복하고 조화를 이루면 감정적으로 안정적이고 따뜻한 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["INTP", "ESTP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "INTP와 ESTP는 서로의 차이를 통해 배우며 흥미로운 친구 관계를 형성할 수 있습니다. ESTP는 INTP의 유연한 사고를 높이 평가합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며, 다이내믹하고 자극적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INTP", "ESFP"],
    friendshipScore: 72,
    romanticScore: 75,
    description: {
      friendship:
        "INTP와 ESFP는 서로의 성향 차이를 극복하며 즐거운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 이해하고 존중하면 따뜻하고 다채로운 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INTP", "INFP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "INTP와 INFP는 서로의 창의성과 감수성을 이해하며 깊이 있는 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 격려하며 이상적인 관계를 형성할 수 있습니다. INFP는 INTP의 논리성을 존중하고, INTP는 INFP의 감정을 이해합니다.",
    },
  },
  {
    pair: ["ISFP", "ENFP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ISFP와 ENFP는 감정적 안정감과 창의적인 아이디어를 공유하며 따뜻한 친구 관계를 형성합니다. ENFP는 ISFP에게 활기를, ISFP는 ENFP에게 감성적 안정감을 제공합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 이해하고 존중하며, 매우 감정적으로 안정적이고 행복한 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISFP", "ENTJ"],
    friendshipScore: 60,
    romanticScore: 65,
    description: {
      friendship:
        "ISFP와 ENTJ는 서로의 성향 차이로 인해 조화를 이루기 어렵지만, 서로를 이해하면 유익한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ISFP의 자유로움과 ENTJ의 계획성이 충돌할 수 있지만, 서로를 존중하려는 노력이 있다면 따뜻한 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISFP", "INFJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ISFP와 INFJ는 서로의 감정과 가치를 잘 이해하며 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFP", "ISTJ"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ISFP와 ISTJ는 성향 차이를 극복하며 균형 잡힌 친구 관계를 형성할 수 있습니다. ISTJ는 ISFP의 자유로움을, ISFP는 ISTJ의 안정감을 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 따뜻하고 안정적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISFP", "ISFJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ISFP와 ISFJ는 서로의 감정을 잘 이해하며 매우 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 존중하며 안정적이고 감정적으로 깊은 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFP", "INTJ"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ISFP와 INTJ는 성향 차이로 인해 조화를 이루기 어렵지만, 서로를 이해하면 생산적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 극복하려고 노력하면 안정적이고 감정적으로 따뜻한 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISFP", "INTP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ISFP와 INTP는 서로의 성향 차이를 극복하며 따뜻한 친구 관계를 형성할 수 있습니다. INTP는 ISFP의 감정을 이해하려 노력하고, ISFP는 INTP의 논리성을 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 존중하며 조화로운 관계를 유지할 가능성이 있습니다.",
    },
  },
  {
    pair: ["ISFP", "ISFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ISFP끼리는 서로의 감정을 존중하며 매우 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 ISFP가 서로를 지지하며 감정적으로 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFP", "ESTJ"],
    friendshipScore: 72,
    romanticScore: 75,
    description: {
      friendship:
        "ISFP와 ESTJ는 서로의 성격 차이를 이해하고 존중하며 균형 잡힌 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 극복하고 조화를 이루면 감정적으로 안정적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISFP", "ESFJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ISFP와 ESFJ는 서로의 감정을 이해하며 따뜻하고 안정적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 존중하며 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFP", "ESTP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ISFP와 ESTP는 서로의 차이를 존중하며 흥미로운 친구 관계를 형성할 수 있습니다. ESTP는 ISFP에게 활력을, ISFP는 ESTP에게 감정적 깊이를 제공합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 강점을 존중하며 다채롭고 활기찬 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ISFP", "ESFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ISFP와 ESFP는 감정적으로 매우 잘 맞으며 서로를 지지하는 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 안정적이고 즐거운 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFP", "INFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ISFP와 INFP는 서로의 감정과 이상을 공유하며 매우 깊은 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 지지하고 격려하며 감정적으로 안정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "ENFP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ESTJ와 ENFP는 성향 차이로 인해 초기에는 충돌할 수 있지만, 서로의 차이를 이해하고 존중하면 강력한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ENFP의 창의성과 ESTJ의 실용성이 충돌할 수 있지만, 서로를 보완하며 안정적인 관계를 형성할 가능성이 있습니다.",
    },
  },
  {
    pair: ["ESTJ", "ENTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESTJ와 ENTJ는 매우 실용적이고 효율적인 친구 관계를 형성합니다. 두 사람은 목표를 공유하며 함께 협력할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 책임감과 추진력을 공유하며 안정적이고 장기적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "INFJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ESTJ와 INFJ는 서로의 접근 방식이 다를 수 있지만, 서로의 차이를 존중하며 균형 잡힌 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 INFJ의 이상주의와 ESTJ의 실용성이 충돌할 수 있지만, 적절히 조화를 이루면 안정적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESTJ", "ISTJ"],
    friendshipScore: 90,
    romanticScore: 85,
    description: {
      friendship:
        "ESTJ와 ISTJ는 실용적이고 계획적인 사고를 공유하며 신뢰할 수 있는 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 책임감을 공유하며 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "ISFJ"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ESTJ와 ISFJ는 서로의 책임감과 실용성을 존중하며 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 감정적으로 깊이 연결되며 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "INTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESTJ와 INTJ는 목표 지향적이고 실용적인 사고를 공유하며 매우 생산적인 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 계획을 존중하며 안정적이고 장기적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "INTP"],
    friendshipScore: 78,
    romanticScore: 80,
    description: {
      friendship:
        "ESTJ와 INTP는 성향 차이를 극복하며 균형 잡힌 친구 관계를 형성할 수 있습니다. ESTJ는 INTP의 창의적 아이디어를 실행 가능하도록 돕습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 존중하며 감정적으로 안정적인 관계를 형성할 가능성이 있습니다.",
    },
  },
  {
    pair: ["ESTJ", "ISFP"],
    friendshipScore: 72,
    romanticScore: 75,
    description: {
      friendship:
        "ESTJ와 ISFP는 성향 차이로 인해 초기에는 갈등이 있을 수 있지만, 서로의 차이를 존중하면 신뢰할 수 있는 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 강점을 보완하며 안정적이고 따뜻한 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "ESTJ"],
    friendshipScore: 85,
    romanticScore: 82,
    description: {
      friendship:
        "ESTJ끼리는 서로의 책임감과 목표 지향성을 존중하며 매우 안정적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 계획을 존중하며 실용적이고 안정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "ESFJ"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ESTJ와 ESFJ는 서로의 감정적 안정감과 실용성을 존중하며 매우 조화로운 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 따뜻하고 안정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "ESTP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ESTJ와 ESTP는 서로의 에너지와 실용성을 공유하며 활기찬 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 매우 다이내믹하고 흥미로운 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "ESFP"],
    friendshipScore: 78,
    romanticScore: 80,
    description: {
      friendship:
        "ESTJ와 ESFP는 성향 차이를 극복하며 활기차고 조화로운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 이해하고 조화를 이루면 안정적이고 따뜻한 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "INFP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ESTJ와 INFP는 서로의 가치와 목표를 이해하려는 노력을 통해 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 성향 차이를 존중하며 감정적으로 깊이 연결될 수 있습니다.",
    },
  },
  {
    pair: ["ESFJ", "ENFP"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "ESFJ와 ENFP는 서로의 감정을 잘 이해하며, 감정적으로 안정적이고 활기찬 친구 관계를 형성합니다. ENFP는 ESFJ에게 유머와 창의성을 제공하고, ESFJ는 ENFP에게 안정감을 제공합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 격려하며 따뜻하고 안정적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFJ", "ENTJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ESFJ와 ENTJ는 서로의 강점을 존중하며, 조화로운 친구 관계를 형성할 수 있습니다. ESFJ는 ENTJ의 추진력을 높이 평가하고, ENTJ는 ESFJ의 따뜻함과 배려를 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 이해하고 조화를 이루면 매우 안정적이고 따뜻한 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESFJ", "INFJ"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ESFJ와 INFJ는 감정적으로 안정적이며 따뜻한 친구 관계를 형성할 수 있습니다. INFJ는 ESFJ의 헌신을 높이 평가하고, ESFJ는 INFJ의 통찰력을 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 감정을 이해하며 매우 안정적이고 깊은 유대감을 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFJ", "ISTJ"],
    friendshipScore: 85,
    romanticScore: 80,
    description: {
      friendship:
        "ESFJ와 ISTJ는 서로의 책임감과 실용적인 접근 방식을 공유하며 안정적인 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 존중하며 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFJ", "ISFJ"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ESFJ와 ISFJ는 서로의 감정을 이해하며 매우 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 감정적으로 깊이 연결되어 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFJ", "INTJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ESFJ와 INTJ는 서로의 차이를 존중하며 조화로운 친구 관계를 형성할 수 있습니다. ESFJ는 INTJ에게 따뜻함을 제공하고, INTJ는 ESFJ에게 실용적인 조언을 제공합니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 극복하며 안정적이고 따뜻한 관계를 형성할 가능성이 있습니다.",
    },
  },
  {
    pair: ["ESFJ", "INTP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ESFJ와 INTP는 성향 차이를 극복하며 균형 잡힌 친구 관계를 형성할 수 있습니다. INTP는 ESFJ의 감정을 이해하려 노력하고, ESFJ는 INTP의 논리적 사고를 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 안정적이고 따뜻한 관계를 유지할 가능성이 있습니다.",
    },
  },
  {
    pair: ["ESFJ", "ISFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESFJ와 ISFP는 서로의 감정과 가치를 존중하며 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 이해하며 감정적으로 안정적이고 깊은 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFJ", "ESTJ"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ESFJ와 ESTJ는 서로의 책임감과 실용성을 존중하며 매우 조화로운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFJ", "ESFJ"],
    friendshipScore: 92,
    romanticScore: 90,
    description: {
      friendship:
        "ESFJ끼리는 서로의 감정을 이해하며 매우 따뜻하고 안정적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 지지하며 감정적으로 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFJ", "ESTP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ESFJ와 ESTP는 서로의 차이를 극복하며 활기찬 친구 관계를 형성할 수 있습니다. ESTP는 ESFJ에게 모험심을, ESFJ는 ESTP에게 감정적 안정감을 제공합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 다채롭고 활기찬 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFJ", "ESFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ESFJ와 ESFP는 서로의 에너지와 감정적 안정감을 공유하며 매우 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 격려하며 감정적으로 안정적이고 활기찬 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFJ", "INFP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ESFJ와 INFP는 서로의 감정적 깊이를 이해하며 매우 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 지지하며 감정적으로 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTP", "ENFP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ESTP와 ENFP는 활기차고 모험적인 친구 관계를 형성할 수 있습니다. 두 사람은 서로의 에너지를 공유하며 즐거운 시간을 보낼 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 자극하며 매우 다이내믹하고 흥미로운 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTP", "ENTJ"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "ESTP와 ENTJ는 서로의 추진력과 목표 지향성을 공유하며 매우 생산적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 에너지를 결합하여 다이내믹하고 열정적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTP", "INFJ"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ESTP와 INFJ는 성향 차이로 인해 초기에는 조화를 이루기 어려울 수 있지만, 서로를 이해하면 흥미로운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ESTP의 모험심과 INFJ의 신중함이 충돌할 수 있지만, 적절히 균형을 맞추면 흥미롭고 다채로운 관계가 될 수 있습니다.",
    },
  },
  {
    pair: ["ESTP", "ISTJ"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ESTP와 ISTJ는 서로의 성향 차이를 극복하며 조화로운 친구 관계를 형성할 수 있습니다. ISTJ는 ESTP의 모험심을 존중하고, ESTP는 ISTJ의 안정감을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 강점을 존중하며 균형 잡힌 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTP", "ISFJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ESTP와 ISFJ는 서로의 차이를 극복하며 조화로운 친구 관계를 형성할 수 있습니다. ISFJ는 ESTP에게 안정감을, ESTP는 ISFJ에게 활력을 제공합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 다채롭고 안정적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTP", "INTJ"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ESTP와 INTJ는 서로의 차이를 극복하며 생산적인 친구 관계를 형성할 수 있습니다. INTJ는 ESTP의 모험심을, ESTP는 INTJ의 전략적 사고를 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 안정적이고 흥미로운 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTP", "INTP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ESTP와 INTP는 서로의 차이를 통해 배우며 흥미로운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 성향 차이를 존중하고 균형을 맞추면 다이내믹하고 자극적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESTP", "ISFP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ESTP와 ISFP는 서로의 감정을 존중하며 다채롭고 즐거운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 강점을 보완하며 감정적으로 안정적이고 활기찬 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTP", "ESTJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ESTP와 ESTJ는 서로의 실용성과 에너지를 공유하며 활기찬 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 매우 다이내믹하고 안정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTP", "ESFJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ESTP와 ESFJ는 서로의 차이를 존중하며 활기차고 다채로운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 안정적이고 즐거운 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTP", "ESTP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ESTP끼리는 서로의 에너지를 공유하며 매우 활기차고 모험적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 유사성을 이해하고 매우 다이내믹하고 재미있는 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTP", "ESFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESTP와 ESFP는 서로의 에너지와 모험심을 공유하며 매우 활기차고 즐거운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 감정적으로 깊이 연결되며 매우 즐겁고 안정적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTP", "INFP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ESTP와 INFP는 서로의 차이를 극복하며 배우고 성장할 수 있는 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 성향 차이를 이해하고 존중하면 균형 잡힌 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "ENFP"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ESFP와 ENFP는 서로의 활발하고 창의적인 에너지를 공유하며 매우 즐거운 친구 관계를 형성할 수 있습니다. 두 사람은 함께 새로운 경험을 탐색하며 서로를 격려합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 감정을 잘 이해하고 보완하며 매우 다이내믹하고 행복한 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "ENTJ"],
    friendshipScore: 78,
    romanticScore: 82,
    description: {
      friendship:
        "ESFP와 ENTJ는 서로의 차이점에서 배우며 균형 잡힌 친구 관계를 형성할 수 있습니다. ESFP는 ENTJ에게 유연함을, ENTJ는 ESFP에게 목표 지향성을 가르칩니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 강점을 이해하고 존중하면 감정적으로 따뜻하고 실질적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "INFJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ESFP와 INFJ는 서로의 차이를 존중하며 따뜻한 친구 관계를 형성할 수 있습니다. INFJ는 ESFP의 창의성을, ESFP는 INFJ의 통찰력을 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 극복하려는 노력을 통해 안정적이고 조화로운 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "ISTJ"],
    friendshipScore: 72,
    romanticScore: 75,
    description: {
      friendship:
        "ESFP와 ISTJ는 서로의 차이를 이해하고 존중하며 안정적인 친구 관계를 형성할 수 있습니다. ISTJ는 ESFP의 활발함을, ESFP는 ISTJ의 안정성을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 보완하며 조화로운 관계를 형성할 가능성이 있습니다.",
    },
  },
  {
    pair: ["ESFP", "ISFJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESFP와 ISFJ는 서로의 감정과 가치를 이해하며 매우 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "INTJ"],
    friendshipScore: 72,
    romanticScore: 75,
    description: {
      friendship:
        "ESFP와 INTJ는 서로의 차이를 극복하며 조화로운 친구 관계를 형성할 수 있습니다. INTJ는 ESFP에게 전략적 사고를, ESFP는 INTJ에게 창의적 유연성을 제공합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 안정적이고 감정적으로 흥미로운 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "INTP"],
    friendshipScore: 72,
    romanticScore: 75,
    description: {
      friendship:
        "ESFP와 INTP는 서로의 차이를 이해하며 흥미로운 친구 관계를 형성할 수 있습니다. INTP는 ESFP의 에너지를 존중하고, ESFP는 INTP의 창의적인 사고를 높이 평가합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 성향 차이를 극복하면 감정적으로 안정적이고 균형 잡힌 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ESFP", "ISFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESFP와 ISFP는 서로의 감정을 이해하며 매우 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 감정과 가치를 공유하며 감정적으로 안정적이고 깊은 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "ESTJ"],
    friendshipScore: 78,
    romanticScore: 80,
    description: {
      friendship:
        "ESFP와 ESTJ는 서로의 실용성과 에너지를 공유하며 활기찬 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 강점을 보완하며 안정적이고 다이내믹한 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "ESFJ"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ESFP와 ESFJ는 서로의 에너지와 감정적 안정감을 공유하며 매우 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 격려하며 감정적으로 안정적이고 활기찬 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "ESTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESFP와 ESTP는 서로의 에너지를 공유하며 매우 다이내믹하고 즐거운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 이해하고 보완하며 감정적으로 안정적이고 활기찬 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "ESFP"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ESFP끼리는 서로의 활기와 에너지를 공유하며 매우 즐거운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 강점을 공유하며 다이내믹하고 행복한 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "INFP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ESFP와 INFP는 서로의 감정과 가치를 존중하며 매우 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "ENFP"],
    friendshipScore: 95,
    romanticScore: 90,
    description: {
      friendship:
        "INFP와 ENFP는 서로의 감정적 깊이를 이해하며 매우 강한 친구 관계를 형성합니다. 두 사람은 서로의 이상과 가치를 공유하며 안정적인 유대감을 유지합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 지지하며 감정적으로 매우 안정적이고 헌신적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "ENTJ"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "INFP와 ENTJ는 성향 차이로 인해 초기에는 갈등이 있을 수 있지만, 서로의 차이를 이해하려는 노력을 통해 강한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 서로의 가치와 목표를 이해하며 안정적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "INFJ"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "INFP와 INFJ는 서로의 감정적 깊이를 존중하며 매우 안정적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 깊이 이해하며 매우 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "ISTJ"],
    friendshipScore: 65,
    romanticScore: 70,
    description: {
      friendship:
        "INFP와 ISTJ는 성격 차이를 극복하며 상호 보완적인 친구 관계를 형성할 수 있습니다. ISTJ는 INFP의 자유로움을, INFP는 ISTJ의 안정성을 존중합니다.",
      romantic:
        "연인 관계에서는 서로의 성향 차이를 존중하면 안정적이고 따뜻한 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["INFP", "ISFJ"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "INFP와 ISFJ는 서로의 감정을 이해하며 따뜻한 친구 관계를 형성할 수 있습니다. 두 사람은 서로를 지지하며 매우 안정적인 유대감을 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 매우 안정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "INTJ"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "INFP와 INTJ는 서로의 목표와 가치를 공유하며 지적이고 감정적으로 안정적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 이상과 계획을 이해하며 매우 안정적이고 발전적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "INTP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "INFP와 INTP는 서로의 창의성과 감수성을 공유하며 매우 지적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 깊이 연결된 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "ISFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "INFP와 ISFP는 서로의 감정을 잘 이해하며 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 매우 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "ESTJ"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "INFP와 ESTJ는 서로의 성격 차이를 이해하며 강한 친구 관계를 형성할 수 있습니다. ESTJ는 INFP의 이상주의를, INFP는 ESTJ의 실용성을 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 안정적이고 감정적으로 따뜻한 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "ESFJ"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "INFP와 ESFJ는 서로의 감정을 존중하며 매우 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "ESTP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "INFP와 ESTP는 성격 차이로 인해 초기에는 조화를 이루기 어렵지만, 서로의 차이를 존중하면 강한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 서로의 성향 차이를 극복하려는 노력을 통해 안정적이고 다이내믹한 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "ESFP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "INFP와 ESFP는 서로의 감정과 가치를 공유하며 매우 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "INFP"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "INFP끼리는 서로의 감정을 깊이 이해하며 매우 강한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 INFP가 서로를 격려하며 매우 안정적이고 감정적으로 깊은 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "ENFP"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "ENTP와 ENFP는 매우 창의적이고 활기찬 친구 관계를 형성합니다. 서로의 아이디어와 에너지를 공유하며 즐거운 대화를 나눌 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 감정적으로 깊이 연결되며 서로를 격려하고 지원하는 이상적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "ENTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENTP와 ENTJ는 서로의 추진력과 창의적인 사고를 공유하며 매우 생산적인 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 서로를 자극하며 목표를 공유할 수 있는 매우 조화로운 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "INFJ"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "ENTP와 INFJ는 서로에게 영감을 주며 지적인 대화를 즐길 수 있는 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 깊은 유대감을 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "ISTJ"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ENTP와 ISTJ는 성격 차이로 인해 초기에는 충돌할 수 있지만, 서로를 이해하면 균형 잡힌 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 서로의 강점을 존중하며 안정적이고 보완적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "ISFJ"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "ENTP와 ISFJ는 서로의 차이를 이해하고 존중하며 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 강점을 보완하며 안정적이고 조화로운 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "INTJ"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ENTP와 INTJ는 지적인 대화를 즐기며 서로의 창의적 사고와 전략적 사고를 보완하는 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 자극하며 매우 발전적이고 안정적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "INTP"],
    friendshipScore: 90,
    romanticScore: 88,
    description: {
      friendship:
        "ENTP와 INTP는 서로의 창의성과 지적 호기심을 공유하며 매우 흥미로운 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 아이디어를 존중하며 감정적으로도 안정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "ISFP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ENTP와 ISFP는 성향 차이로 인해 초기에는 충돌할 수 있지만, 서로를 이해하면 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 서로의 성향 차이를 극복하려는 노력을 통해 안정적이고 조화로운 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "ESTJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ENTP와 ESTJ는 서로의 목표 지향성과 창의적인 사고를 공유하며 매우 협력적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 실용적이고 감정적으로 안정된 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "ESFJ"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "ENTP와 ESFJ는 서로의 차이를 이해하며 균형 잡힌 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 따뜻하고 안정적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "ESTP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ENTP와 ESTP는 서로의 에너지와 모험심을 공유하며 매우 다이내믹한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 자극하며 매우 활기차고 감정적으로도 안정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "ESFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENTP와 ESFP는 서로의 유머와 활기찬 에너지를 공유하며 매우 즐거운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 감정적으로 깊이 연결되며 매우 다이내믹하고 따뜻한 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "INFP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ENTP와 INFP는 서로의 이상과 아이디어를 공유하며 매우 지적이고 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 격려하며 감정적으로 깊이 연결된 안정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFP", "ENFP"],
    friendshipScore: 90,
    romanticScore: 88,
    description: {
      friendship:
        "ENFP끼리는 서로의 열정과 창의력을 공유하며 매우 활기차고 긍정적인 친구 관계를 형성합니다. 두 사람 모두 새로운 경험을 즐기며 함께 모험을 떠나는 것을 좋아합니다.",
      romantic:
        "연인 관계에서는 서로의 감정을 깊이 이해하며 감정적으로 강한 유대감을 형성합니다. 하지만 둘 다 즉흥적인 성향이 있어 장기적 계획이 부족할 수 있으므로 균형을 맞추는 노력이 필요합니다.",
    },
  },
  {
    pair: ["ENFP", "ENTP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ENFP와 ENTP는 서로의 에너지와 창의적인 아이디어를 공유하며 매우 지적인 친구 관계를 형성합니다. 두 사람 모두 호기심이 많아 함께 새로운 주제를 탐구하는 것을 즐깁니다.",
      romantic:
        "연인 관계에서는 서로에게 자극을 주며 열정적이고 다이내믹한 관계를 형성합니다. 하지만 서로의 자유를 존중하지 않으면 갈등이 생길 수 있으므로 배려가 필요합니다.",
    },
  },
  {
    pair: ["ENFP", "INTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENFP와 INTJ는 서로의 강점을 존중하며 보완적인 친구 관계를 형성할 수 있습니다. ENFP는 INTJ에게 창의적 유연함을 제공하고, INTJ는 ENFP에게 전략적 사고를 가르칩니다.",
      romantic:
        "연인 관계에서는 ENFP의 감성과 INTJ의 논리성이 결합되어 서로를 성장시키는 관계가 될 수 있습니다. 그러나 서로의 성향 차이를 이해하려는 노력이 필요합니다.",
    },
  },
  {
    pair: ["ENFP", "ENFJ"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ENFP와 ENFJ는 서로의 감정과 열정을 이해하며 매우 활기차고 긍정적인 친구 관계를 형성합니다. 둘 다 사람들과의 교류를 좋아하며 함께 일하는 것을 즐깁니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 지지하고 격려하며 감정적으로 깊이 연결됩니다. 하지만 서로의 기대치가 높을 수 있으므로 적절한 균형이 필요합니다.",
    },
  },
  {
    pair: ["ENFP", "INFP"],
    friendshipScore: 95,
    romanticScore: 90,
    description: {
      friendship:
        "ENFP와 INFP는 서로의 감정과 가치관을 존중하며 매우 깊은 유대감을 형성합니다. 두 사람 모두 이상주의적이기 때문에 함께 꿈을 키워나가는 것을 즐깁니다.",
      romantic:
        "연인 관계에서는 서로의 감정을 잘 이해하고 깊이 연결되며, 안정적이고 따뜻한 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFP", "INTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENFP와 INTP는 서로의 창의성과 지적인 호기심을 존중하며 매우 흥미로운 친구 관계를 형성할 수 있습니다. ENFP는 INTP의 독창적인 생각을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 자극하며 성장할 수 있는 다이내믹한 관계를 형성합니다. 하지만 INTP의 감정 표현 부족이 ENFP에게 부담이 될 수 있습니다.",
    },
  },
  {
    pair: ["ENFP", "ESFP"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ENFP와 ESFP는 서로의 활기차고 자유로운 성향을 공유하며 매우 즐겁고 다이내믹한 친구 관계를 형성합니다. 두 사람 모두 새로운 경험을 좋아합니다.",
      romantic:
        "연인 관계에서는 두 사람이 감정적으로 깊이 연결되며 서로를 격려하고 지지하는 이상적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFP", "ESTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENFP와 ESTP는 서로의 에너지를 공유하며 매우 활기차고 모험적인 친구 관계를 형성합니다. 두 사람은 함께 새로운 활동을 즐기는 것을 좋아합니다.",
      romantic:
        "연인 관계에서는 서로를 자극하며 다이내믹하고 열정적인 관계를 유지할 가능성이 높습니다. 하지만 감정적인 깊이가 부족하지 않도록 주의해야 합니다.",
    },
  },
  {
    pair: ["ENFP", "ISFJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ENFP와 ISFJ는 서로의 차이를 존중하며 균형 잡힌 친구 관계를 형성합니다. ENFP는 ISFJ에게 새로운 시각을 제공하고, ISFJ는 ENFP에게 안정감을 줍니다.",
      romantic:
        "연인 관계에서는 ENFP의 활기와 ISFJ의 헌신이 어우러져 따뜻하고 안정적인 관계를 형성할 수 있습니다. 서로의 필요를 이해하려는 노력이 중요합니다.",
    },
  },
  {
    pair: ["ENFP", "ESFJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENFP와 ESFJ는 서로의 감정을 잘 이해하며 밝고 활기찬 친구 관계를 형성합니다. 둘 다 사회적 활동을 좋아해 함께 어울리는 것을 즐깁니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 지지하며 감정적으로 안정적인 관계를 유지할 수 있습니다. 하지만 ESFJ의 현실주의와 ENFP의 자유로움 사이의 균형이 필요합니다.",
    },
  },
  {
    pair: ["ENFP", "ESTJ"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "ENFP와 ESTJ는 서로의 성향이 다르지만 강력한 팀워크를 형성할 수 있습니다. ENFP의 창의성을 ESTJ의 실용성이 보완합니다.",
      romantic:
        "연인 관계에서는 서로의 강점을 이해하면 발전적인 관계를 만들 수 있습니다. 하지만 ESTJ의 규칙성이 ENFP의 자유를 제한하지 않도록 주의해야 합니다.",
    },
  },
  {
    pair: ["ENFP", "ISFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ENFP와 ISFP는 서로의 감정을 잘 이해하며 따뜻하고 조화로운 친구 관계를 형성합니다. ENFP의 에너지가 ISFP에게 새로운 활력을 줍니다.",
      romantic:
        "연인 관계에서는 두 사람이 감정적으로 깊이 연결되며 매우 따뜻하고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFP", "ISTP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ENFP와 ISTP는 서로의 성향 차이로 인해 초기에는 충돌할 수 있지만, 서로의 강점을 존중하면 흥미로운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ENFP의 감정 표현과 ISTP의 실용성이 서로를 보완할 수 있지만, 성향 차이를 이해하는 노력이 필요합니다.",
    },
  },
  {
    pair: ["ENTP", "ENTP"],
    friendshipScore: 90,
    romanticScore: 85,
    description: {
      friendship:
        "ENTP끼리는 서로의 지적 호기심과 끝없는 대화를 즐기며 매우 활기차고 자극적인 친구 관계를 형성합니다. 함께 새로운 아이디어를 탐구하고 도전하는 것을 좋아합니다.",
      romantic:
        "연인 관계에서는 두 사람이 열정적으로 사랑하지만 갈등이 생기면 감정적 균형이 무너질 수 있으므로 이해와 배려가 중요합니다.",
    },
  },
  {
    pair: ["ENTP", "INFJ"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "ENTP와 INFJ는 서로에게 깊은 영감을 주는 친구 관계를 형성합니다. INFJ는 ENTP의 창의성을 높이 평가하고, ENTP는 INFJ의 통찰력을 존중합니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 보완하며 감정적으로도 매우 안정적이고 깊이 있는 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "INTJ"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ENTP와 INTJ는 서로의 지적 자극을 즐기며 매우 생산적이고 창의적인 친구 관계를 형성합니다. 두 사람 모두 논리적 토론을 즐깁니다.",
      romantic:
        "연인 관계에서는 서로의 강점을 보완하며 발전적인 관계를 형성할 수 있습니다. 다만 감정 표현이 부족하지 않도록 주의해야 합니다.",
    },
  },
  {
    pair: ["ENTP", "ENFJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENTP와 ENFJ는 서로의 열정과 에너지를 공유하며 매우 긍정적인 친구 관계를 형성합니다. 두 사람은 함께 목표를 향해 나아가는 것을 즐깁니다.",
      romantic:
        "연인 관계에서는 서로를 격려하며 감정적으로 안정적이고 발전적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "ENTJ"],
    friendshipScore: 90,
    romanticScore: 85,
    description: {
      friendship:
        "ENTP와 ENTJ는 서로의 추진력과 창의적인 아이디어를 결합해 매우 생산적이고 활기찬 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 서로의 강점이 결합되어 강력한 유대감을 형성하지만, 주도권을 두고 갈등이 생길 수 있으므로 배려가 필요합니다.",
    },
  },
  {
    pair: ["ENTP", "INFP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ENTP와 INFP는 서로의 창의력과 감수성을 공유하며 흥미로운 친구 관계를 형성합니다. ENTP는 INFP에게 새로운 시각을 제공하고, INFP는 ENTP에게 감성적 깊이를 제공합니다.",
      romantic:
        "연인 관계에서는 서로의 감정과 생각을 존중하며 매우 따뜻하고 조화로운 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "INTP"],
    friendshipScore: 90,
    romanticScore: 88,
    description: {
      friendship:
        "ENTP와 INTP는 서로의 지적 호기심과 창의적인 사고를 공유하며 매우 흥미롭고 자극적인 친구 관계를 형성합니다. 둘 다 토론과 논쟁을 즐기며 새로운 아이디어를 발전시킵니다.",
      romantic:
        "연인 관계에서는 서로를 이해하고 지지하며 지적인 유대감을 형성할 수 있습니다. 하지만 감정 표현에 대한 노력이 필요합니다.",
    },
  },
  {
    pair: ["ENTP", "ISFP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ENTP와 ISFP는 서로의 성향이 다르지만 이를 존중하면 흥미로운 친구 관계를 형성할 수 있습니다. ENTP의 활발함이 ISFP에게 자극이 되고, ISFP의 감성이 ENTP에게 안정감을 줍니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 이해하려는 노력이 필요하지만, 이를 극복하면 감정적으로 깊고 따뜻한 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ENTP", "ESFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ENTP와 ESFP는 서로의 에너지와 열정을 공유하며 매우 활기차고 즐거운 친구 관계를 형성합니다. 둘 다 새로운 경험과 활동을 좋아합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 자극하며 매우 다이내믹하고 긍정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "ESTP"],
    friendshipScore: 90,
    romanticScore: 88,
    description: {
      friendship:
        "ENTP와 ESTP는 서로의 활발하고 모험적인 성향을 존중하며 매우 다이내믹한 친구 관계를 형성합니다. 두 사람은 함께 도전하고 새로운 활동을 즐깁니다.",
      romantic:
        "연인 관계에서는 서로의 열정이 시너지를 만들어 매우 흥미롭고 활기찬 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ENTP", "ISTJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ENTP와 ISTJ는 성향 차이로 인해 초기에는 충돌할 수 있지만, 서로의 강점을 이해하면 균형 잡힌 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ENTP의 창의성과 ISTJ의 안정성이 보완되지만 서로의 차이를 존중하는 노력이 필요합니다.",
    },
  },
  {
    pair: ["ENTP", "ESFJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ENTP와 ESFJ는 서로의 차이를 존중하며 협력적인 친구 관계를 형성합니다. ENTP는 ESFJ에게 새로운 시각을 제공하고, ESFJ는 ENTP에게 감정적 지원을 제공합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 안정적이고 따뜻한 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENTP", "ISTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENTP와 ISTP는 서로의 독립적인 성향을 존중하며 자유롭고 흥미로운 친구 관계를 형성할 수 있습니다. 둘 다 실용적인 접근을 선호합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 자극하며 매우 다이내믹하고 재미있는 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "INFJ"],
    friendshipScore: 95,
    romanticScore: 90,
    description: {
      friendship:
        "INFJ끼리는 서로의 감정과 깊이 있는 통찰력을 이해하며 매우 안정적이고 신뢰할 수 있는 친구 관계를 형성합니다. 서로에게 진솔하게 소통하며 지적 대화를 즐깁니다.",
      romantic:
        "연인 관계에서는 두 INFJ가 서로를 깊이 이해하고 헌신하며 감정적으로 안정된 관계를 유지할 수 있습니다. 다만 지나치게 내성적이 되지 않도록 주의가 필요합니다.",
    },
  },
  {
    pair: ["INFJ", "INTJ"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "INFJ와 INTJ는 서로의 통찰력과 계획성을 공유하며 깊이 있는 친구 관계를 형성합니다. INFJ는 INTJ의 논리적 사고를 존중하고, INTJ는 INFJ의 감정을 이해하려 노력합니다.",
      romantic:
        "연인 관계에서는 서로의 성향을 보완하며 안정적이고 발전적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFJ", "ENFJ"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "INFJ와 ENFJ는 서로의 감정적 깊이를 이해하며 따뜻하고 헌신적인 친구 관계를 형성합니다. 두 사람 모두 사람들에게 긍정적인 영향을 주는 것을 중요하게 여깁니다.",
      romantic:
        "연인 관계에서는 서로를 격려하고 지지하며 감정적으로 매우 안정적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFJ", "ENTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "INFJ와 ENTJ는 서로의 강점을 존중하며 조화로운 친구 관계를 형성합니다. INFJ의 통찰력과 ENTJ의 리더십이 결합되어 큰 시너지를 냅니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 목표를 공유하며 감정적으로도 안정된 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "INFP"],
    friendshipScore: 95,
    romanticScore: 95,
    description: {
      friendship:
        "INFJ와 INFP는 서로의 감정과 가치관을 깊이 이해하며 매우 안정적이고 신뢰할 수 있는 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 서로를 감정적으로 지지하며 이상적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFJ", "INTP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "INFJ와 INTP는 서로의 지적인 호기심과 통찰력을 공유하며 균형 잡힌 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 차이를 존중하며 감정적으로도 깊이 연결될 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "ISFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "INFJ와 ISFP는 서로의 감정을 존중하며 따뜻한 친구 관계를 형성합니다. ISFP는 INFJ에게 안정감을 제공하고, INFJ는 ISFP를 격려합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 이해하며 감정적으로 따뜻하고 안정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFJ", "ESFP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "INFJ와 ESFP는 성향 차이로 인해 초기에는 조화를 이루기 어렵지만, 서로를 이해하면 따뜻한 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 서로의 성향 차이를 존중하면 감정적으로 깊고 따뜻한 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "ESTP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "INFJ와 ESTP는 성향 차이로 인해 초기에는 갈등이 있을 수 있지만, 서로의 강점을 존중하면 흥미롭고 균형 잡힌 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ESTP의 모험심과 INFJ의 신중함이 보완될 수 있지만, 상호 이해와 존중이 중요합니다.",
    },
  },
  {
    pair: ["INFJ", "ISTJ"],
    friendshipScore: 80,
    romanticScore: 82,
    description: {
      friendship:
        "INFJ와 ISTJ는 서로의 실용성과 통찰력을 존중하며 균형 잡힌 친구 관계를 형성할 수 있습니다. ISTJ는 INFJ에게 실용적 접근을 제공하고, INFJ는 ISTJ에게 새로운 시각을 줍니다.",
      romantic:
        "연인 관계에서는 서로의 강점을 존중하며 안정적이고 신뢰할 수 있는 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFJ", "ESFJ"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "INFJ와 ESFJ는 서로의 감정과 배려심을 존중하며 따뜻한 친구 관계를 형성할 수 있습니다. ESFJ의 사교성과 INFJ의 신중함이 좋은 조화를 이룹니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 이해하고 감정적으로 지지하며 매우 따뜻하고 안정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFJ", "ESTJ"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "INFJ와 ESTJ는 성향 차이가 뚜렷하지만, 서로의 강점을 이해하고 협력하면 좋은 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ESTJ의 실용성과 INFJ의 통찰력이 결합되어 발전적인 관계를 만들 수 있지만, 감정적 균형을 맞추는 노력이 필요합니다.",
    },
  },
  {
    pair: ["INFJ", "ISTP"],
    friendshipScore: 78,
    romanticScore: 82,
    description: {
      friendship:
        "INFJ와 ISTP는 서로의 차이를 통해 배울 수 있는 친구 관계를 형성할 수 있습니다. INFJ의 깊은 통찰력과 ISTP의 실용성이 서로를 보완합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 성향을 존중하고 이해하려 노력하면 감정적으로 따뜻하고 균형 잡힌 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["INFJ", "ISFJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "INFJ와 ISFJ는 서로의 감정을 이해하며 매우 안정적이고 따뜻한 친구 관계를 형성할 수 있습니다. 두 사람 모두 진솔한 소통을 중요하게 생각합니다.",
      romantic:
        "연인 관계에서는 서로를 배려하며 헌신적으로 사랑할 가능성이 높습니다. 안정적이고 감정적으로 깊은 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ENFJ", "ENFJ"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ENFJ끼리는 서로의 열정과 리더십을 공유하며 매우 협력적이고 긍정적인 친구 관계를 형성합니다. 둘 다 타인을 돕는 것을 좋아해 함께 성장할 수 있습니다.",
      romantic:
        "연인 관계에서는 서로의 감정을 깊이 이해하며 따뜻하고 헌신적인 관계를 유지할 수 있습니다. 다만 서로의 기대치가 높을 수 있으므로 균형이 필요합니다.",
    },
  },
  {
    pair: ["ENFJ", "ENTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENFJ와 ENTJ는 서로의 목표와 열정을 공유하며 생산적이고 협력적인 친구 관계를 형성합니다. ENFJ는 ENTJ의 추진력을 존중하고, ENTJ는 ENFJ의 배려심을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 서로의 강점을 보완하며 매우 발전적이고 균형 잡힌 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ENFJ", "INFJ"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ENFJ와 INFJ는 서로의 감정을 잘 이해하며 깊이 있는 친구 관계를 형성합니다. INFJ는 ENFJ의 열정을 지지하고, ENFJ는 INFJ의 통찰력을 존중합니다.",
      romantic:
        "연인 관계에서는 서로의 감정적 필요를 이해하며 매우 안정적이고 따뜻한 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFJ", "INTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENFJ와 INTJ는 서로의 성향을 이해하며 협력적인 친구 관계를 형성합니다. ENFJ는 INTJ의 논리성과 계획을 지지하고, INTJ는 ENFJ의 열정과 사교성을 존중합니다.",
      romantic:
        "연인 관계에서는 서로를 보완하며 감정적으로 안정되고 목표를 향해 함께 나아가는 발전적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ENFJ", "INFP"],
    friendshipScore: 90,
    romanticScore: 95,
    description: {
      friendship:
        "ENFJ와 INFP는 서로의 감정과 가치관을 존중하며 매우 따뜻하고 헌신적인 친구 관계를 형성합니다. ENFJ는 INFP에게 자신감을 심어주고, INFP는 ENFJ에게 안정감을 제공합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 지지하며 감정적으로 깊은 유대감을 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFJ", "INTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENFJ와 INTP는 서로의 강점을 존중하며 균형 잡힌 친구 관계를 형성할 수 있습니다. ENFJ는 INTP의 논리적 사고를 존중하고, INTP는 ENFJ의 사교성을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 서로를 이해하려는 노력이 필요하지만, 이를 극복하면 감정적으로 안정적이고 발전적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ENFJ", "ISFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ENFJ와 ISFP는 서로의 감정을 잘 이해하며 조화로운 친구 관계를 형성할 수 있습니다. ISFP의 섬세함이 ENFJ의 열정과 잘 어우러집니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 지지하고 감정적으로 깊이 연결되며 매우 따뜻한 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFJ", "ESFP"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ENFJ와 ESFP는 서로의 활기차고 긍정적인 에너지를 공유하며 매우 즐거운 친구 관계를 형성합니다. 두 사람 모두 사교적이며 활동적인 성향을 가집니다.",
      romantic:
        "연인 관계에서는 서로의 열정이 시너지를 만들어 매우 다이내믹하고 감정적으로 안정된 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFJ", "ESTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENFJ와 ESTP는 서로의 활기찬 에너지와 추진력을 공유하며 매우 다이내믹한 친구 관계를 형성합니다. ENFJ는 ESTP의 도전 정신을 존중하고, ESTP는 ENFJ의 리더십을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 서로의 열정을 격려하며 자극적인 관계를 유지할 수 있지만, 감정적 균형을 맞추기 위한 노력이 필요합니다.",
    },
  },
  {
    pair: ["ENFJ", "ISTJ"],
    friendshipScore: 80,
    romanticScore: 82,
    description: {
      friendship:
        "ENFJ와 ISTJ는 서로의 성향이 다르지만 이를 통해 균형 잡힌 친구 관계를 형성합니다. ENFJ는 ISTJ의 신중함을 배우고, ISTJ는 ENFJ의 열정적인 접근을 존중합니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 이해하며 실용적이고 감정적으로 안정적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFJ", "ESFJ"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ENFJ와 ESFJ는 서로의 감정을 잘 이해하며 매우 따뜻하고 협력적인 친구 관계를 형성합니다. 두 사람 모두 타인을 돕는 것에 가치를 두어 긍정적인 에너지를 공유합니다.",
      romantic:
        "연인 관계에서는 서로를 지지하며 감정적으로 매우 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFJ", "ESTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENFJ와 ESTJ는 목표 지향적이고 책임감 있는 성향을 공유하며 협력적인 친구 관계를 형성합니다. ENFJ의 사교성과 ESTJ의 실용성이 조화를 이룹니다.",
      romantic:
        "연인 관계에서는 서로의 강점을 존중하며 감정적으로 안정적이고 발전적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFJ", "ISTP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ENFJ와 ISTP는 성향이 다르지만 서로의 강점을 이해하면 균형 잡힌 친구 관계를 형성할 수 있습니다. ENFJ는 ISTP에게 감정적 지원을, ISTP는 ENFJ에게 실용적인 관점을 제공합니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 극복하면 감정적이고 실질적인 균형을 맞춘 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ENFJ", "ISFJ"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ENFJ와 ISFJ는 서로의 헌신과 감정을 잘 이해하며 매우 따뜻하고 신뢰할 수 있는 친구 관계를 형성합니다. ISFJ는 ENFJ의 에너지를 지지하고, ENFJ는 ISFJ의 섬세함을 존중합니다.",
      romantic:
        "연인 관계에서는 서로의 감정적 필요를 충족시키며 헌신적이고 안정된 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFJ", "ISFP"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ENFJ와 ISFP는 서로의 감정을 존중하며 매우 따뜻하고 조화로운 친구 관계를 형성합니다. ENFJ는 ISFP의 감수성을 지지하고, ISFP는 ENFJ의 열정을 존중합니다.",
      romantic:
        "연인 관계에서는 서로를 보완하며 감정적으로 깊이 연결된 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ENFJ", "ISTP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ENFJ와 ISTP는 성향이 다르지만 서로의 강점을 이해하면 균형 잡힌 친구 관계를 형성할 수 있습니다. ENFJ는 ISTP에게 감정적 지원을, ISTP는 ENFJ에게 실용적인 관점을 제공합니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 극복하면 감정적이고 실질적인 균형을 맞춘 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ENFJ", "ENTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ENFJ와 ENTP는 서로의 열정과 에너지를 공유하며 매우 긍정적이고 흥미로운 친구 관계를 형성합니다. 두 사람 모두 사람들과 교류하고 성장하는 것을 즐깁니다.",
      romantic:
        "연인 관계에서는 서로의 감정과 목표를 존중하며 발전적이고 열정적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ENFJ", "ESTP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ENFJ와 ESTP는 서로의 활기와 실행력을 존중하며 함께 도전적인 일을 즐길 수 있습니다. ENFJ는 ESTP의 추진력을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 서로의 다이내믹한 에너지가 시너지를 만들어 주지만, 감정적 균형을 맞추기 위한 노력이 필요합니다.",
    },
  },
  {
    pair: ["ENFJ", "INTJ"],
    friendshipScore: 85,
    romanticScore: 90,
    description: {
      friendship:
        "ENFJ와 INTJ는 서로의 강점을 보완하며 협력적인 친구 관계를 형성합니다. ENFJ의 감정적인 지원이 INTJ의 전략적 사고와 조화를 이룹니다.",
      romantic:
        "연인 관계에서는 서로의 필요를 이해하며 감정적 안정감과 실질적인 발전을 이루는 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ENFJ", "INFP"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ENFJ와 INFP는 서로의 감정과 가치를 깊이 이해하며 매우 따뜻하고 신뢰할 수 있는 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 서로를 지지하며 감정적으로 안정적이고 이상적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "ESTJ"],
    friendshipScore: 88,
    romanticScore: 85,
    description: {
      friendship:
        "ESTJ끼리는 서로의 책임감과 목표 지향적인 성향을 공유하며 매우 신뢰할 수 있는 친구 관계를 형성합니다. 두 사람 모두 체계적이고 계획을 중요시합니다.",
      romantic:
        "연인 관계에서는 서로의 비전을 존중하며 실용적이고 안정적인 관계를 유지할 가능성이 높습니다. 다만 고집이 충돌하지 않도록 주의가 필요합니다.",
    },
  },
  {
    pair: ["ESTJ", "ESFJ"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ESTJ와 ESFJ는 서로의 책임감과 사교적인 성향을 존중하며 매우 협력적이고 따뜻한 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 서로를 지지하고 감정적으로 깊이 연결되며 안정적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "ISTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESTJ와 ISTJ는 서로의 실용적이고 책임감 있는 성향을 공유하며 매우 신뢰할 수 있는 친구 관계를 형성합니다. 함께 협력하여 목표를 달성하는 것을 즐깁니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 안정감을 존중하며 매우 실용적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "ISFJ"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ESTJ와 ISFJ는 서로의 실용성과 섬세함을 존중하며 매우 균형 잡힌 친구 관계를 형성할 수 있습니다. ESTJ는 ISFJ의 배려심을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 서로를 보완하며 감정적으로 안정되고 신뢰할 수 있는 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "ESFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESTJ와 ESFP는 서로의 차이를 존중하며 균형 잡힌 친구 관계를 형성합니다. ESTJ는 ESFP의 활기를, ESFP는 ESTJ의 실용성을 존중합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 강점을 보완하며 감정적으로도 활기차고 안정적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ESTJ", "ESTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESTJ와 ESTP는 함께 도전적이고 실용적인 목표를 추구하며 협력적인 친구 관계를 형성합니다. 두 사람 모두 실행력을 중요하게 생각합니다.",
      romantic:
        "연인 관계에서는 서로의 추진력을 존중하며 다이내믹하고 발전적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESTJ", "ISFP"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "ESTJ와 ISFP는 성향 차이가 크지만 이를 이해하면 보완적인 친구 관계를 형성할 수 있습니다. ESTJ는 ISFP에게 안정감을, ISFP는 ESTJ에게 감성적 균형을 제공합니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 극복하려는 노력을 통해 따뜻하고 안정적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESTJ", "INFP"],
    friendshipScore: 70,
    romanticScore: 75,
    description: {
      friendship:
        "ESTJ와 INFP는 성향 차이로 인해 초기에는 갈등이 있을 수 있지만, 서로의 가치를 이해하려는 노력을 통해 균형 잡힌 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 서로의 성향 차이를 존중하면 감정적으로 깊고 발전적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESFJ", "ESFJ"],
    friendshipScore: 92,
    romanticScore: 90,
    description: {
      friendship:
        "ESFJ끼리는 서로의 배려심과 헌신적인 성향을 존중하며 매우 따뜻하고 협력적인 친구 관계를 형성합니다. 서로에게 안정감을 주며 긍정적인 에너지를 공유합니다.",
      romantic:
        "연인 관계에서는 서로를 잘 이해하고 지지하며 감정적으로 매우 안정적이고 헌신적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFJ", "ISTJ"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESFJ와 ISTJ는 서로의 책임감과 실용적인 성향을 존중하며 균형 잡힌 친구 관계를 형성할 수 있습니다. ESFJ는 ISTJ에게 감정적 지원을 제공하고, ISTJ는 ESFJ의 계획을 지지합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 강점을 보완하며 안정적이고 신뢰할 수 있는 관계를 형성합니다.",
    },
  },
  {
    pair: ["ESFJ", "ISFJ"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ESFJ와 ISFJ는 서로의 감정과 섬세한 성향을 존중하며 매우 따뜻하고 안정적인 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로에게 헌신적이며 감정적으로 깊이 연결된 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFJ", "ESTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESFJ와 ESTP는 서로의 활기찬 에너지를 공유하며 즐거운 친구 관계를 형성합니다. ESTP는 ESFJ에게 새로운 도전의 기회를 제공하고, ESFJ는 ESTP에게 감정적 지원을 줍니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 격려하며 긍정적이고 활기찬 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESFJ", "ISFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ESFJ와 ISFP는 서로의 감정을 존중하며 따뜻하고 안정적인 친구 관계를 형성합니다. ESFJ는 ISFP의 창의적이고 섬세한 면을 지지합니다.",
      romantic:
        "연인 관계에서는 서로의 감정을 잘 이해하고 보완하며 따뜻하고 안정된 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFJ", "ESFP"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ESFJ와 ESFP는 서로의 긍정적 에너지와 사교성을 공유하며 매우 즐거운 친구 관계를 형성합니다. 함께 활동적이고 활기찬 시간을 보내는 것을 즐깁니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로에게 감정적 안정감을 주며 매우 따뜻하고 즐거운 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESFJ", "INFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESFJ와 INFP는 서로의 감정과 가치관을 존중하며 균형 잡힌 친구 관계를 형성합니다. INFP는 ESFJ에게 깊이 있는 감정을 제공하고, ESFJ는 INFP에게 안정감을 줍니다.",
      romantic:
        "연인 관계에서는 서로를 지지하며 감정적으로 따뜻하고 조화로운 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "ISTJ"],
    friendshipScore: 90,
    romanticScore: 85,
    description: {
      friendship:
        "ISTJ끼리는 서로의 실용적이고 계획적인 성향을 존중하며 매우 신뢰할 수 있는 친구 관계를 형성합니다. 함께 목표를 세우고 이를 실행하는 것을 좋아합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 존중하며 안정적이고 책임감 있는 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISTJ", "ISFJ"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ISTJ와 ISFJ는 서로의 섬세하고 책임감 있는 성향을 존중하며 매우 따뜻하고 신뢰할 수 있는 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로에게 헌신적이며 안정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISTJ", "ESTP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ISTJ와 ESTP는 서로의 차이를 존중하며 보완적인 친구 관계를 형성할 수 있습니다. ESTP의 즉흥성과 ISTJ의 계획성이 균형을 이룹니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 극복하고 균형을 맞추는 노력이 필요하지만, 이를 극복하면 서로에게 긍정적인 영향을 미칩니다.",
    },
  },
  {
    pair: ["ISTJ", "ISFP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ISTJ와 ISFP는 서로의 차이를 통해 배울 수 있는 친구 관계를 형성합니다. ISTJ는 ISFP의 창의력을 존중하고, ISFP는 ISTJ의 책임감을 높이 평가합니다.",
      romantic:
        "연인 관계에서는 서로의 성향을 보완하며 감정적으로 따뜻하고 신뢰할 수 있는 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "ESFP"],
    friendshipScore: 78,
    romanticScore: 82,
    description: {
      friendship:
        "ISTJ와 ESFP는 서로의 성향이 다르지만, 이를 이해하면 서로에게 긍정적인 자극을 주는 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 서로의 강점을 존중하며 활기차고 안정적인 관계를 유지할 가능성이 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "ENFP"],
    friendshipScore: 75,
    romanticScore: 80,
    description: {
      friendship:
        "ISTJ와 ENFP는 성향 차이로 인해 초기에는 갈등이 있을 수 있지만, 서로의 강점을 존중하면 흥미롭고 균형 잡힌 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 극복하며 감정적으로 안정되고 발전적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISTJ", "ENTP"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ISTJ와 ENTP는 서로의 차이를 이해하며 균형 잡힌 친구 관계를 형성할 수 있습니다. ENTP의 창의성이 ISTJ의 실용성과 어우러집니다.",
      romantic:
        "연인 관계에서는 서로의 성향 차이를 극복하고 균형을 맞추는 노력이 필요합니다.",
    },
  },
  {
    pair: ["ISFJ", "ISFJ"],
    friendshipScore: 92,
    romanticScore: 90,
    description: {
      friendship:
        "ISFJ끼리는 서로의 세심함과 배려심을 이해하며 매우 따뜻하고 안정적인 친구 관계를 형성합니다. 두 사람은 서로의 감정을 존중하며 신뢰를 쌓습니다.",
      romantic:
        "연인 관계에서는 서로에게 헌신적이며 감정적으로 깊이 연결되어 안정적이고 따뜻한 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFJ", "ISTP"],
    friendshipScore: 78,
    romanticScore: 82,
    description: {
      friendship:
        "ISFJ와 ISTP는 서로의 성향이 다르지만 이를 존중하면 균형 잡힌 친구 관계를 형성할 수 있습니다. ISFJ는 ISTP의 실용성을 높이 평가하고, ISTP는 ISFJ의 배려심을 존중합니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 이해하고 보완하며 감정적으로 따뜻하고 실용적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "ESFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ISFJ와 ESFP는 서로의 감정을 존중하며 균형 잡힌 친구 관계를 형성합니다. ESFP의 활기찬 에너지가 ISFJ에게 긍정적인 자극을 줍니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 보완하며 감정적으로 따뜻하고 행복한 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "ESTP"],
    friendshipScore: 80,
    romanticScore: 82,
    description: {
      friendship:
        "ISFJ와 ESTP는 서로의 차이를 통해 성장하며 흥미로운 친구 관계를 형성할 수 있습니다. ISFJ는 ESTP의 추진력을 존중하고, ESTP는 ISFJ의 배려심을 인정합니다.",
      romantic:
        "연인 관계에서는 서로의 성향 차이를 이해하면 균형 잡힌 관계를 형성할 가능성이 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "ENFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ISFJ와 ENFP는 서로의 감정과 에너지를 존중하며 따뜻하고 긍정적인 친구 관계를 형성할 수 있습니다. ENFP의 활기찬 성향이 ISFJ에게 긍정적인 에너지를 줍니다.",
      romantic:
        "연인 관계에서는 서로를 지지하며 감정적으로 안정적이고 따뜻한 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFJ", "ENTP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ISFJ와 ENTP는 성향이 다르지만 서로의 강점을 존중하면 균형 잡힌 친구 관계를 형성할 수 있습니다. ENTP의 창의성이 ISFJ의 실용성과 어우러집니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 이해하고 노력하면 매우 다이내믹하고 긍정적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "INTJ"],
    friendshipScore: 82,
    romanticScore: 85,
    description: {
      friendship:
        "ISFJ와 INTJ는 서로의 차이를 존중하며 보완적인 친구 관계를 형성할 수 있습니다. INTJ의 계획성과 ISFJ의 섬세함이 좋은 조화를 이룹니다.",
      romantic:
        "연인 관계에서는 서로의 강점을 존중하고 감정적으로 안정된 관계를 유지할 가능성이 있습니다.",
    },
  },
  {
    pair: ["ISFJ", "INFP"],
    friendshipScore: 88,
    romanticScore: 92,
    description: {
      friendship:
        "ISFJ와 INFP는 서로의 감정을 깊이 이해하며 매우 따뜻하고 신뢰할 수 있는 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로에게 헌신하며 감정적으로 안정적이고 깊이 연결된 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISTP", "ISTP"],
    friendshipScore: 85,
    romanticScore: 82,
    description: {
      friendship:
        "ISTP끼리는 서로의 독립적이고 실용적인 성향을 존중하며 자유롭고 편안한 친구 관계를 형성합니다. 함께 탐험하거나 새로운 기술을 배우는 것을 좋아합니다.",
      romantic:
        "연인 관계에서는 서로의 독립성을 존중하며 실용적이고 여유로운 관계를 유지하지만 감정 표현이 부족할 수 있으므로 주의가 필요합니다.",
    },
  },
  {
    pair: ["ISTP", "ISFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ISTP와 ISFP는 서로의 감정과 독립성을 존중하며 조화로운 친구 관계를 형성할 수 있습니다. ISFP의 감성이 ISTP에게 새로운 시각을 제공합니다.",
      romantic:
        "연인 관계에서는 서로의 성향을 존중하며 감정적으로 따뜻하고 실용적인 관계를 형성할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISTP", "ESTP"],
    friendshipScore: 90,
    romanticScore: 88,
    description: {
      friendship:
        "ISTP와 ESTP는 서로의 모험심과 실용성을 공유하며 매우 활기차고 에너지 넘치는 친구 관계를 형성합니다. 함께 활동적인 경험을 즐깁니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 강점을 이해하며 다이내믹하고 재미있는 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISTP", "ESFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ISTP와 ESFP는 서로의 차이를 존중하며 활기차고 즐거운 친구 관계를 형성합니다. ISTP의 실용성이 ESFP의 에너지를 뒷받침합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 자극하며 매우 다이내믹하고 긍정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISTP", "ENFP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ISTP와 ENFP는 서로의 성향 차이로 인해 초기에는 갈등이 있을 수 있지만, 이를 존중하면 흥미로운 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 서로의 자유로운 성향을 존중하며 감정적으로 발전적인 관계를 유지할 가능성이 있습니다.",
    },
  },
  {
    pair: ["ISTP", "ENTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ISTP와 ENTP는 서로의 창의력과 독립성을 존중하며 매우 자유롭고 흥미로운 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 함께 도전하며 다이내믹하고 자극적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISTP", "INTJ"],
    friendshipScore: 82,
    romanticScore: 85,
    description: {
      friendship:
        "ISTP와 INTJ는 서로의 논리성과 실용성을 존중하며 균형 잡힌 친구 관계를 형성할 수 있습니다. INTJ의 계획성과 ISTP의 즉흥성이 서로를 보완합니다.",
      romantic:
        "연인 관계에서는 서로의 강점을 이해하며 실용적이고 안정된 관계를 형성할 가능성이 있습니다.",
    },
  },
  {
    pair: ["ISTP", "INTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ISTP와 INTP는 서로의 독립적이고 지적인 성향을 존중하며 매우 자유롭고 흥미로운 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 함께 탐구하며 감정적으로도 안정적이고 지적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISFP", "ISFP"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ISFP끼리는 서로의 감성을 잘 이해하며 따뜻하고 섬세한 친구 관계를 형성합니다. 서로의 예술적 감각을 공유하며 조화롭게 어울립니다.",
      romantic:
        "연인 관계에서는 서로의 감정을 존중하고 깊은 유대감을 형성하며 매우 감성적이고 안정된 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFP", "ESFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ISFP와 ESFP는 서로의 감성을 이해하며 활기차고 자유로운 친구 관계를 형성합니다. 함께 새로운 활동을 즐기며 긍정적인 에너지를 나눕니다.",
      romantic:
        "연인 관계에서는 서로의 감정을 깊이 이해하며 따뜻하고 즐거운 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFP", "ESTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ISFP와 ESTP는 서로의 차이를 통해 배우며 실용적이고 균형 잡힌 친구 관계를 형성할 수 있습니다. ESTP의 에너지가 ISFP에게 새로운 자극을 줍니다.",
      romantic:
        "연인 관계에서는 서로의 자유로움을 존중하며 다이내믹하고 감정적으로 안정된 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISFP", "ENFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ISFP와 ENFP는 서로의 감정과 창의성을 존중하며 따뜻하고 긍정적인 친구 관계를 형성합니다. ENFP의 에너지가 ISFP에게 새로운 시각을 제공합니다.",
      romantic:
        "연인 관계에서는 서로를 이해하며 감정적으로 안정적이고 깊이 연결된 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ISFP", "ENTP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ISFP와 ENTP는 서로의 성향 차이를 이해하면 흥미로운 친구 관계를 형성할 수 있습니다. ENTP의 창의력이 ISFP의 감성을 자극합니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 극복하려는 노력이 필요하지만 이를 보완하면 균형 잡힌 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ISFP", "INTJ"],
    friendshipScore: 75,
    romanticScore: 78,
    description: {
      friendship:
        "ISFP와 INTJ는 서로의 성향 차이를 존중하며 보완적인 친구 관계를 형성할 수 있습니다. INTJ의 계획성이 ISFP의 감성을 균형 있게 보완합니다.",
      romantic:
        "연인 관계에서는 서로의 강점을 이해하며 감정적 균형을 맞춘 관계를 유지할 가능성이 있습니다.",
    },
  },
  {
    pair: ["ISFP", "INFP"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ISFP와 INFP는 서로의 감정과 가치관을 존중하며 따뜻하고 섬세한 친구 관계를 형성합니다. 두 사람 모두 예술과 감성적 활동을 즐깁니다.",
      romantic:
        "연인 관계에서는 서로의 감정을 깊이 이해하며 감성적으로도 매우 안정적인 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "ESFP"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ESFP끼리는 서로의 활기찬 에너지를 공유하며 매우 재미있고 긍정적인 친구 관계를 형성합니다. 함께 새로운 경험을 탐험하고 즐기는 것을 좋아합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로의 감정을 잘 이해하며 다이내믹하고 열정적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESFP", "ESTP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ESFP와 ESTP는 서로의 모험심과 에너지를 존중하며 매우 활동적이고 즐거운 친구 관계를 형성합니다. 둘 다 즉흥적이고 새로운 경험을 좋아합니다.",
      romantic:
        "연인 관계에서는 두 사람이 함께 새로운 도전을 즐기며 활기차고 흥미로운 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["ESFP", "ENFP"],
    friendshipScore: 90,
    romanticScore: 92,
    description: {
      friendship:
        "ESFP와 ENFP는 서로의 활기와 창의력을 공유하며 긍정적이고 재미있는 친구 관계를 형성합니다. 함께 모험을 즐기며 성장합니다.",
      romantic:
        "연인 관계에서는 서로의 감정을 깊이 이해하며 매우 따뜻하고 즐거운 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESFP", "ENTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESFP와 ENTP는 서로의 창의적 에너지와 활발한 성향을 공유하며 매우 흥미로운 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 자극하며 열정적이고 다이내믹한 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESFP", "INTJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ESFP와 INTJ는 성향 차이를 통해 서로에게 새로운 시각을 제공하며 보완적인 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 ESFP의 활기와 INTJ의 계획성이 조화를 이루지만 서로의 차이를 이해하려는 노력이 필요합니다.",
    },
  },
  {
    pair: ["ESFP", "INTP"],
    friendshipScore: 78,
    romanticScore: 82,
    description: {
      friendship:
        "ESFP와 INTP는 서로의 성향이 다르지만 이를 존중하면 균형 잡힌 친구 관계를 형성할 수 있습니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 이해하고 감정적으로 균형을 맞춘 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESFP", "ISFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ESFP와 ISFP는 서로의 감성을 이해하며 따뜻하고 긍정적인 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 서로의 감정을 깊이 존중하며 매우 따뜻하고 안정된 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESFP", "ISTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESFP와 ISTP는 서로의 실용성과 자유로운 성향을 존중하며 균형 잡힌 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 서로를 이해하면 다이내믹하고 안정적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESTP", "ESTP"],
    friendshipScore: 90,
    romanticScore: 88,
    description: {
      friendship:
        "ESTP끼리는 서로의 활발함과 도전 정신을 공유하며 매우 흥미롭고 에너지 넘치는 친구 관계를 형성합니다. 함께 모험과 새로운 경험을 즐깁니다.",
      romantic:
        "연인 관계에서는 서로의 열정이 시너지를 만들어 다이내믹하고 재미있는 관계를 유지할 수 있지만, 갈등 시 냉정함을 유지하는 노력이 필요합니다.",
    },
  },
  {
    pair: ["ESTP", "ENFP"],
    friendshipScore: 88,
    romanticScore: 90,
    description: {
      friendship:
        "ESTP와 ENFP는 서로의 에너지를 공유하며 매우 활기차고 창의적인 친구 관계를 형성합니다. 둘 다 즉흥적이고 긍정적인 성향을 가집니다.",
      romantic:
        "연인 관계에서는 서로의 감정을 존중하며 흥미롭고 열정적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESTP", "ENTP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESTP와 ENTP는 함께 새로운 도전을 즐기며 다이내믹하고 흥미진진한 친구 관계를 형성합니다. 둘 다 모험적이고 창의적입니다.",
      romantic:
        "연인 관계에서는 서로의 추진력을 존중하며 열정적이고 발전적인 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESTP", "INTJ"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "ESTP와 INTJ는 서로의 차이를 통해 배울 수 있는 친구 관계를 형성합니다. INTJ의 계획성과 ESTP의 실행력이 조화를 이룹니다.",
      romantic:
        "연인 관계에서는 서로의 강점을 이해하며 감정적 균형을 유지하면 발전적인 관계를 형성할 수 있습니다.",
    },
  },
  {
    pair: ["ESTP", "INTP"],
    friendshipScore: 82,
    romanticScore: 85,
    description: {
      friendship:
        "ESTP와 INTP는 성향이 다르지만 이를 존중하면 보완적인 친구 관계를 형성할 수 있습니다. INTP의 분석력과 ESTP의 추진력이 어우러집니다.",
      romantic:
        "연인 관계에서는 서로를 이해하려는 노력을 통해 감정적 안정과 실용적 조화를 맞출 수 있습니다.",
    },
  },
  {
    pair: ["ESTP", "ISFP"],
    friendshipScore: 85,
    romanticScore: 88,
    description: {
      friendship:
        "ESTP와 ISFP는 서로의 감성과 실용성을 존중하며 균형 잡힌 친구 관계를 형성합니다. ISFP의 섬세함이 ESTP의 추진력을 보완합니다.",
      romantic:
        "연인 관계에서는 두 사람이 서로를 지지하며 다이내믹하고 감정적으로 따뜻한 관계를 유지할 수 있습니다.",
    },
  },
  {
    pair: ["ESTP", "ISTP"],
    friendshipScore: 88,
    romanticScore: 85,
    description: {
      friendship:
        "ESTP와 ISTP는 서로의 실용적이고 독립적인 성향을 존중하며 매우 자유롭고 균형 잡힌 친구 관계를 형성합니다.",
      romantic:
        "연인 관계에서는 두 사람이 함께 새로운 경험을 탐험하며 감정적으로 안정된 관계를 유지할 가능성이 높습니다.",
    },
  },
  {
    pair: ["INFP", "ISTP"],
    friendshipScore: 80,
    romanticScore: 85,
    description: {
      friendship:
        "INFP와 ISTP는 성향이 다르지만 이를 이해하면 균형 잡힌 친구 관계를 형성할 수 있습니다. INFP의 감성과 ISTP의 실용성이 서로에게 새로운 시각을 제공합니다.",
      romantic:
        "연인 관계에서는 서로의 차이를 존중하고 이해하는 노력이 중요합니다. 이를 극복하면 서로를 보완하며 감정적으로 안정된 관계를 유지할 수 있습니다.",
    },
  },
];
export default Mbti;
