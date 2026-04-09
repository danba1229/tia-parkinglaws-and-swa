function officialOrdinanceUrl(ordinSeq) {
  return `https://www.law.go.kr/LSW/ordinInfoP.do?ordinSeq=${ordinSeq}`;
}

function officialSourceMeta({
  ordinanceTitle,
  ordinSeq,
  ruleProfile = null,
  lastChecked = "2026-04-03"
}) {
  return {
    sourceType: "official",
    sourceLabel: "국가법령정보센터",
    sourceUrl: officialOrdinanceUrl(ordinSeq),
    ordinanceTitle,
    lastChecked,
    ruleProfile
  };
}

const SEOUL_DISTRICT_RULE_PROFILE = {
  "강남구": "seoul-gangnam",
  "강동구": "seoul-gangdong",
  "강북구": "seoul-gangbuk",
  "강서구": "seoul-gangseo",
  "관악구": "seoul-gwanak",
  "광진구": "seoul-gwangjin",
  "구로구": "seoul-guro",
  "금천구": "seoul-geumcheon",
  "노원구": "seoul-nowon",
  "도봉구": "seoul-dobong",
  "동대문구": "seoul-dongdaemun",
  "동작구": "seoul-dongjak",
  "마포구": "seoul-mapo",
  "서대문구": "seoul-seodaemun",
  "서초구": "seoul-seocho",
  "성동구": "seoul-seongdong",
  "성북구": "seoul-seongbuk",
  "송파구": "seoul-songpa",
  "양천구": "seoul-yangcheon",
  "영등포구": "seoul-yeongdeungpo",
  "용산구": "seoul-yongsan",
  "은평구": "seoul-eunpyeong",
  "종로구": "seoul-jongno",
  "중구": "seoul-junggu",
  "중랑구": "seoul-jungnang"
};

const SEOUL_DISTRICT_ORDIN_SEQ = {
  "강남구": "2082681",
  "강동구": "1952583",
  "강북구": "2061689",
  "강서구": "2074729",
  "관악구": "2100231",
  "광진구": "2112919",
  "구로구": "2081129",
  "금천구": "2112379",
  "노원구": "2001403",
  "도봉구": "2037431",
  "동대문구": "2106663",
  "동작구": "2053599",
  "마포구": "2082373",
  "서대문구": "2070681",
  "서초구": "2021289",
  "성동구": "2035019",
  "성북구": "1975795",
  "송파구": "2112383",
  "양천구": "2085125",
  "영등포구": "2037503",
  "용산구": "1999551",
  "은평구": "1970691",
  "종로구": "2094257",
  "중구": "2116297",
  "중랑구": "2071323"
};

const SEOUL_DISTRICT_META = Object.fromEntries(
  Object.entries(SEOUL_DISTRICT_ORDIN_SEQ).map(([district, ordinSeq]) => [
    district,
    {
      sourceType: "official",
      sourceLabel: "국가법령정보센터",
      sourceUrl: officialOrdinanceUrl(ordinSeq),
      ruleProfile: SEOUL_DISTRICT_RULE_PROFILE[district] ?? null
    }
  ])
);

const GYEONGGI_CITY_META = {
  "수원시": officialSourceMeta({
    ordinanceTitle: "수원시 주차장 조례",
    ordinSeq: "1835131",
    ruleProfile: "gyeonggi-suwon"
  }),
  "성남시": officialSourceMeta({
    ordinanceTitle: "성남시 주차장 설치 및 관리 운영에 관한 조례",
    ordinSeq: "2049099",
    ruleProfile: "gyeonggi-seongnam"
  }),
  "고양시": officialSourceMeta({
    ordinanceTitle: "고양시 주차장 설치 및 관리 조례",
    ordinSeq: "2109927",
    ruleProfile: "gyeonggi-goyang"
  }),
  "용인시": officialSourceMeta({
    ordinanceTitle: "용인시 주차장 설치 및 관리 조례",
    ordinSeq: "2106161",
    ruleProfile: "gyeonggi-yongin"
  }),
  "부천시": officialSourceMeta({
    ordinanceTitle: "부천시 주차장 조례",
    ordinSeq: "1710051",
    ruleProfile: "gyeonggi-bucheon"
  }),
  "안산시": officialSourceMeta({
      ordinanceTitle: "안산시 주차장 조례",
      ordinSeq: "1982073",
      ruleProfile: "gyeonggi-ansan"
    }),
  "안양시": officialSourceMeta({
    ordinanceTitle: "안양시 주차장 설치 및 관리 조례",
    ordinSeq: "2102223",
    ruleProfile: "gyeonggi-anyang"
  }),
  "남양주시": officialSourceMeta({
      ordinanceTitle: "남양주시 주차장 조례",
      ordinSeq: "2079223",
      ruleProfile: "gyeonggi-namyangju"
    }),
  "화성시": officialSourceMeta({
    ordinanceTitle: "화성시 주차장 설치 및 관리 조례",
    ordinSeq: "2087593",
    ruleProfile: "gyeonggi-hwaseong"
  }),
  "평택시": officialSourceMeta({
      ordinanceTitle: "평택시 주차장 설치 및 관리 조례",
      ordinSeq: "2099063",
      ruleProfile: "gyeonggi-pyeongtaek"
    }),
  "의정부시": officialSourceMeta({
      ordinanceTitle: "의정부시 주차장 설치 및 관리 조례",
      ordinSeq: "2107023",
      ruleProfile: "gyeonggi-uijeongbu"
    }),
  "시흥시": officialSourceMeta({
      ordinanceTitle: "시흥시 주차장 설치 및 관리 조례",
      ordinSeq: "2054187",
      ruleProfile: "gyeonggi-siheung"
    }),
  "파주시": officialSourceMeta({
      ordinanceTitle: "파주시 주차장 설치 및 관리 조례",
      ordinSeq: "2084279",
      ruleProfile: "gyeonggi-paju"
    }),
  "김포시": officialSourceMeta({
      ordinanceTitle: "김포시 주차장 조례",
      ordinSeq: "2028079",
      ruleProfile: "gyeonggi-gimpo"
    }),
  "광명시": officialSourceMeta({
      ordinanceTitle: "광명시 주차장 설치 및 관리 조례",
      ordinSeq: "2019975",
      ruleProfile: "gyeonggi-gwangmyeong"
    }),
  "광주시": officialSourceMeta({
      ordinanceTitle: "광주시 주차장 설치 및 관리 조례",
      ordinSeq: "2051439",
      ruleProfile: "gyeonggi-gwangju"
    }),
  "군포시": officialSourceMeta({
      ordinanceTitle: "군포시 주차장 설치 및 관리 조례",
      ordinSeq: "1990477",
      ruleProfile: "gyeonggi-gunpo"
    }),
  "오산시": officialSourceMeta({
      ordinanceTitle: "오산시 주차장 조례",
      ordinSeq: "2040787",
      ruleProfile: "gyeonggi-osan"
    }),
  "이천시": officialSourceMeta({
      ordinanceTitle: "이천시 주차장 설치 및 관리 조례",
      ordinSeq: "2040013",
      ruleProfile: "gyeonggi-icheon"
    }),
  "안성시": officialSourceMeta({
      ordinanceTitle: "안성시 주차장 설치 및 관리조례",
      ordinSeq: "2115243",
      ruleProfile: "gyeonggi-anseong"
    }),
  "구리시": officialSourceMeta({
      ordinanceTitle: "구리시 주차장 조례",
      ordinSeq: "2067643",
      ruleProfile: "gyeonggi-guri"
    }),
  "의왕시": officialSourceMeta({
      ordinanceTitle: "의왕시 주차장설치 및 관리 조례",
      ordinSeq: "2080789",
      ruleProfile: "gyeonggi-uiwang"
    }),
  "하남시": officialSourceMeta({
      ordinanceTitle: "하남시 주차장 조례",
      ordinSeq: "1844801",
      ruleProfile: "gyeonggi-hanam"
    }),
  "포천시": officialSourceMeta({
      ordinanceTitle: "포천시 주차장 설치 및 관리 조례",
      ordinSeq: "2095709",
      ruleProfile: "gyeonggi-pocheon"
    }),
  "양주시": officialSourceMeta({
      ordinanceTitle: "양주시 주차장 조례",
      ordinSeq: "2108757",
      ruleProfile: "gyeonggi-yangju"
    }),
  "동두천시": officialSourceMeta({
      ordinanceTitle: "동두천시 주차장 설치 및 관리 조례",
      ordinSeq: "2087439",
      ruleProfile: "gyeonggi-dongducheon"
    }),
  "과천시": officialSourceMeta({
      ordinanceTitle: "과천시 주차장 조례",
      ordinSeq: "2095451",
      ruleProfile: "gyeonggi-gwacheon"
    }),
  "여주시": officialSourceMeta({
      ordinanceTitle: "여주시 주차장 조례",
      ordinSeq: "2049793",
      ruleProfile: "gyeonggi-yeoju"
    }),
  "가평군": officialSourceMeta({
      ordinanceTitle: "가평군 주차장 설치 및 관리 조례",
      ordinSeq: "2039645",
      ruleProfile: "gyeonggi-gapyeong"
    }),
  "양평군": officialSourceMeta({
      ordinanceTitle: "양평군 주차장 조례",
      ordinSeq: "2087065",
      ruleProfile: "gyeonggi-yangpyeong"
    }),
  "연천군": officialSourceMeta({
      ordinanceTitle: "연천군 주차장 설치조례",
      ordinSeq: "1883467",
      ruleProfile: "gyeonggi-yeoncheon"
    })
  };

const ORDINANCE_DIRECTORY = [
  {
    group: "서울특별시",
    name: "서울특별시",
    shortName: "서울특별시",
    ordinanceTitle: "서울특별시 주차장 설치 및 관리 조례",
    jurisdictionType: "metro",
    tokens: ["서울특별시", "서울시", "서울"],
    sourceType: "official",
    sourceLabel: "국가법령정보센터",
    sourceUrl: "https://www.law.go.kr/LSW/ordinInfoP.do?ordinSeq=1791935",
    lastChecked: "2026-04-02",
    ruleProfile: "seoul-city"
  },
  ...[
    "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구",
    "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구",
    "용산구", "은평구", "종로구", "중구", "중랑구"
  ].map((district) => {
    const meta = SEOUL_DISTRICT_META[district] ?? {};
    return {
    group: "서울 자치구",
    name: `서울특별시 ${district}`,
    shortName: district,
    ordinanceTitle: `서울특별시 ${district} 주차장 설치 및 관리 조례`,
    jurisdictionType: "district",
    tokens: [`서울특별시 ${district}`, `서울 ${district}`, district],
    sourceType: meta.sourceType ?? "secondary",
    sourceLabel: meta.sourceLabel ?? "국가법령정보센터",
    sourceUrl: meta.sourceUrl ?? null,
    lastChecked: "2026-04-02",
    ruleProfile: meta.ruleProfile ?? null
    };
  }),
  ...[
    "수원시", "성남시", "고양시", "용인시", "부천시", "안산시", "안양시", "남양주시", "화성시", "평택시",
    "의정부시", "시흥시", "파주시", "김포시", "광명시", "광주시", "군포시", "오산시", "이천시", "안성시",
    "구리시", "의왕시", "하남시", "포천시", "양주시", "동두천시", "과천시", "여주시", "가평군", "양평군", "연천군"
  ].map((city) => {
    const meta = GYEONGGI_CITY_META[city] ?? {};
    return {
    group: "경기도 시군",
    name: `경기도 ${city}`,
    shortName: city,
    ordinanceTitle: meta.ordinanceTitle ?? (city.includes("시")
      ? `${city === "성남시" ? "성남시 주차장 설치 및 관리 운영에 관한 조례" : `${city} 주차장 설치 및 관리 조례`}`
      : `경기도 ${city} 주차장 설치 및 관리 조례`),
    jurisdictionType: city.endsWith("군") ? "county" : "city",
    tokens: [`경기도 ${city}`, city],
    sourceType: meta.sourceType ?? "official",
    sourceLabel: meta.sourceLabel ?? "국가법령정보센터",
    sourceUrl: meta.sourceUrl ?? null,
    lastChecked: meta.lastChecked ?? "2026-04-03",
    ruleProfile: meta.ruleProfile ?? null
    };
  })
];

const RULE_LIBRARY = {
  "seoul-city": [
    {
      type: "disabled",
      label: "장애인전용주차구획",
      basis: "legal",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "법정주차대수",
      thresholdText: "부설주차장 설치대수가 10대 미만이면 예외",
      legalBasis: "서울특별시 주차장 설치 및 관리 조례 제25조",
      sourceUrl: "https://www.law.go.kr/LSW/ordinInfoP.do?ordinSeq=1791935",
      notes: "부설주차장의 설치기준에 따른 주차대수의 3% 이상"
    },
    {
      type: "family-care",
      label: "가족배려주차장",
      basis: "nonMechanical",
      percent: 10,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "기계식 제외 총주차대수",
      thresholdText: "기계식 제외 주차대수 30대 이상일 때 적용",
      legalBasis: "서울특별시 주차장 설치 및 관리 조례 제25조의2",
      sourceUrl: "https://www.law.go.kr/LSW/ordinInfoP.do?ordinSeq=1791935",
      notes: "확장형 주차구획이 있는 경우 가족배려주차구획의 50% 이상을 확장형으로 설치"
    },
    {
      type: "eco-friendly",
      label: "환경친화적 자동차 전용주차구획",
      basis: "planned",
      percent: 5,
      rounding: "round",
      sourceType: "official",
      basisLabel: "총주차대수",
      thresholdText: "주차면수 50면 이상 공영주차장, 시·자치구 청사 부설주차장",
      legalBasis: "서울특별시 주차장 설치 및 관리 조례 제25조의3",
      sourceUrl: "https://www.law.go.kr/LSW/ordinInfoP.do?ordinSeq=1791935",
      notes: "적용대상 시설인지 별도 확인 필요"
    }
  ],
  "seoul-district-common": [
    {
      type: "disabled",
      label: "장애인전용주차구획",
      basis: "legal",
      percent: 3,
      rounding: "ceil",
      sourceType: "inferred",
      basisLabel: "법정주차대수",
      thresholdText: "서울 자치구 다수 조례에서 부설주차장 10대 미만 예외와 함께 3% 패턴 확인",
      legalBasis: "서울 자치구 공통 패턴 + 주차장법 시행규칙 위임",
      sourceUrl: "https://www.law.go.kr/",
      notes: "개별 구 조례 원문 재확인 전까지 공통패턴으로 적용"
    },
    {
      type: "family-care",
      label: "가족배려주차장",
      basis: "nonMechanical",
      percent: 10,
      rounding: "ceil",
      sourceType: "inferred",
      basisLabel: "기계식 제외 총주차대수",
      thresholdText: "서울 자치구 다수 조례에서 30대 이상, 10% 이상, 확장형 50% 이상 패턴 확인",
      legalBasis: "서울 자치구 공통 패턴 + 주차장법 시행규칙 위임",
      sourceUrl: "https://www.law.go.kr/",
      notes: "여성우선주차구획을 가족배려주차장으로 전환한 구가 많아 최신 원문 재확인 권장"
    },
    {
      type: "ev-public",
      label: "전기·환경친화 자동차 전용주차구획",
      basis: "planned",
      percentRange: "3~5",
      rounding: "ceil",
      sourceType: "inferred",
      basisLabel: "총주차대수",
      thresholdText: "서울 자치구 조례에서 3% 또는 상위법 5% 기준이 혼재",
      legalBasis: "서울 자치구 유사조례 + 상위법 공통기준",
      sourceUrl: "https://www.law.go.kr/",
      notes: "해당 구 조례에 따라 3%·5% 또는 대상시설 범위가 다를 수 있음"
    }
  ],
  "seoul-seongdong": [
    {
      type: "disabled",
      label: "장애인전용주차구획",
      basis: "legal",
      percent: 3,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "법정주차대수",
      thresholdText: "부설주차장 설치대수 10대 미만은 예외",
      legalBasis: "서울특별시 성동구 주차장 설치 및 관리 조례 제30조의2",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/2035019-2144318-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%84%B1%EB%8F%99%EA%B5%AC%EC%A3%BC",
      notes: "검색 스니펫 기준 3%"
    },
    {
      type: "family-care",
      label: "가족배려주차장",
      basis: "planned",
      percent: 10,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "총주차대수",
      thresholdText: "주차대수 규모 30대 이상일 때 적용",
      legalBasis: "서울특별시 성동구 주차장 설치 및 관리 조례 제13조",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/2035019-2144318-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%84%B1%EB%8F%99%EA%B5%AC%EC%A3%BC",
      notes: "확장형 주차구획의 50% 이상 연계 설치 규정이 같이 보임"
    },
    {
      type: "ev-public",
      label: "전기자동차 주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      cap: 10,
      sourceType: "secondary",
      basisLabel: "총주차대수",
      thresholdText: "주차면수 100면 이상 공영주차장·공공청사 부설주차장",
      legalBasis: "서울특별시 성동구 주차장 설치 및 관리 조례 제30조의3",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/2035019-2144318-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%84%B1%EB%8F%99%EA%B5%AC%EC%A3%BC",
      notes: "10면 초과 시 최대 설치면수 10면"
    }
  ],
  "seoul-gangnam": [
    {
      type: "disabled",
      label: "장애인전용주차구획",
      basis: "legal",
      percent: 3,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "법정주차대수",
      thresholdText: "부설주차장 10대 미만은 예외, 소수점 이하는 1대로 봄",
      legalBasis: "서울특별시 강남구 주차장 설치 및 관리 조례 제11조",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/1868947-2072539-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EA%B0%95%EB%82%A8%EA%B5%AC%EC%A3%BC",
      notes: "검색 스니펫 기준 3%"
    },
    {
      type: "family-care",
      label: "가족배려주차장",
      basis: "planned",
      percent: 10,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "총주차대수",
      thresholdText: "주차대수 규모 30대 이상일 때 적용",
      legalBasis: "서울특별시 강남구 주차장 설치 및 관리 조례 제11조의3",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/1868947-2072539-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EA%B0%95%EB%82%A8%EA%B5%AC%EC%A3%BC",
      notes: "가족배려주차구획의 50% 이상을 확장형으로 설치"
    },
    {
      type: "ev-public",
      label: "전기자동차 주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      cap: 10,
      sourceType: "secondary",
      basisLabel: "총주차대수",
      thresholdText: "100대 이상 공영주차장·공공기관 부설주차장",
      legalBasis: "서울특별시 강남구 주차장 설치 및 관리 조례 제11조의4",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/1868947-2072539-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EA%B0%95%EB%82%A8%EA%B5%AC%EC%A3%BC",
      notes: "10면 초과 시 최대 설치대수는 10면"
    }
  ],
  "seoul-guro": [
    {
      type: "disabled",
      label: "장애인전용주차구획",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "주차대수",
      thresholdText: "노상·노외 50대 이상 2%, 노상 20~49대는 1면 이상",
      legalBasis: "서울특별시 구로구 주차장 설치 및 관리 조례 제28조",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/2081129-2074462-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EA%B5%AC%EB%A1%9C%EA%B5%AC%EC%A3%BC?keyword_related=&search_text=%EC%9A%A9%EC%9D%B8%EC%8B%9C+%EC%A3%BC%EC%B0%A8%EC%9E%A5+%EC%84%A4%EC%B9%98+%EB%B0%8F+%EA%B4%80%EB%A6%AC+%EC%A1%B0%EB%A1%80&search_type=laws",
      notes: "조문상 '주차대수' 표현은 계획주차대수로 해석"
    },
    {
      type: "family-care",
      label: "가족배려주차장",
      basis: "planned",
      percent: 10,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "총주차대수",
      thresholdText: "주차대수 규모 30대 이상일 때 적용",
      legalBasis: "서울특별시 구로구 주차장 설치 및 관리 조례 제28조의2",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/2081129-2074462-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EA%B5%AC%EB%A1%9C%EA%B5%AC%EC%A3%BC?keyword_related=&search_text=%EC%9A%A9%EC%9D%B8%EC%8B%9C+%EC%A3%BC%EC%B0%A8%EC%9E%A5+%EC%84%A4%EC%B9%98+%EB%B0%8F+%EA%B4%80%EB%A6%AC+%EC%A1%B0%EB%A1%80&search_type=laws",
      notes: "위치기준 포함, 장애인 전용주차구획과 인접 위치"
    },
    {
      type: "eco-friendly",
      label: "환경친화적 자동차 전용주차구획",
      basis: "planned",
      percent: 5,
      rounding: "round",
      sourceType: "secondary",
      basisLabel: "총주차대수",
      thresholdText: "50면 이상 공영주차장·구 및 소속기관 청사 부설주차장",
      legalBasis: "서울특별시 구로구 주차장 설치 및 관리 조례 제28조의3",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/2081129-2074462-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EA%B5%AC%EB%A1%9C%EA%B5%AC%EC%A3%BC?keyword_related=&search_text=%EC%9A%A9%EC%9D%B8%EC%8B%9C+%EC%A3%BC%EC%B0%A8%EC%9E%A5+%EC%84%A4%EC%B9%98+%EB%B0%8F+%EA%B4%80%EB%A6%AC+%EC%A1%B0%EB%A1%80&search_type=laws",
      notes: "2025.6.26 개정 스니펫 기준"
    }
  ],
  "seoul-songpa": [
    {
      type: "disabled",
      label: "장애인전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "주차대수",
      thresholdText: "부설주차장 10면 이상 3%, 노상 20~49면 1면 이상",
      legalBasis: "서울특별시 송파구 주차장 설치 및 관리 조례 제14조의4",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/1987821-2077890-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%86%A1%ED%8C%8C%EA%B5%AC%EC%A3%BC?keyword_related=&search_text=%EA%B3%84%EB%A3%A1%EC%8B%9C%EC%A3%BC%EC%B0%A8%EC%9E%A5%EC%84%A4%EC%B9%98%EC%A1%B0%EB%A1%80&search_type=laws",
      notes: "조문상 '주차대수' 표현은 계획주차대수로 해석"
    },
    {
      type: "family-care",
      label: "가족배려주차장",
      basis: "nonMechanical",
      percent: 10,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "기계식 제외 총주차대수",
      thresholdText: "기계식 제외 주차대수 30대 이상일 때 적용",
      legalBasis: "서울특별시 송파구 주차장 설치 및 관리 조례 제14조의5",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/1987821-2077890-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%86%A1%ED%8C%8C%EA%B5%AC%EC%A3%BC?keyword_related=&search_text=%EA%B3%84%EB%A3%A1%EC%8B%9C%EC%A3%BC%EC%B0%A8%EC%9E%A5%EC%84%A4%EC%B9%98%EC%A1%B0%EB%A1%80&search_type=laws",
      notes: "가족배려주차구획의 50% 이상을 확장형으로 설치"
    }
  ],
  "seoul-yeongdeungpo": [
    {
      type: "disabled",
      label: "장애인전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "주차대수",
      thresholdText: "노상 20~49대 1면 이상, 50대 이상 3%, 부설은 10대 미만 제외",
      legalBasis: "서울특별시 영등포구 주차장 설치 및 관리 조례 제4조의4",
      sourceUrl: "https://www.ulex.co.kr/%25EB%25B2%2595%25EB%25A5%25A0/1977689-2078786-%25EC%2584%259C%25EC%259A%25B8%25ED%258A%25B9%25EB%25B3%2584%25EC%258B%259C%25EC%2598%2581%25EB%2593%25B1%25ED%258F%25AC%25EA%25B5%25AC",
      notes: "조문상 '주차대수' 표현은 계획주차대수로 해석"
    }
  ],
  "seoul-seocho": [
    {
      type: "disabled-public",
      label: "노상·노외 장애인전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "총주차대수",
      thresholdText: "노상 20~49대는 1면 이상, 50대 이상은 3%; 노외 50대 이상 3%",
      legalBasis: "서울특별시 서초구 주차장 설치 및 관리 조례 제10조",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/1399146-2141611-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%84%9C%EC%B4%88%EA%B5%AC%EC%A3%BC",
      notes: "검색 스니펫 기준"
    },
    {
      type: "women-priority",
      label: "여성우선주차구획",
      basis: "planned",
      percent: 10,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "총주차면수",
      thresholdText: "서초구가 설치한 주차면수 30면 이상 노상·노외·부설주차장",
      legalBasis: "서울특별시 서초구 주차장 설치 및 관리 조례 제11조",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/1399146-2141611-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%84%9C%EC%B4%88%EA%B5%AC%EC%A3%BC",
      notes: "위치기준과 일반형·확장형 구분 표시 규정 포함"
    },
    {
      type: "ev-public",
      label: "전기자동차 주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      cap: 10,
      sourceType: "secondary",
      basisLabel: "총주차대수",
      thresholdText: "100면 이상 공영주차장·서초구 및 소속기관 청사 부설주차장",
      legalBasis: "서울특별시 서초구 주차장 설치 및 관리 조례 제12조",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/1399146-2141611-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%84%9C%EC%B4%88%EA%B5%AC%EC%A3%BC",
      notes: "10면 초과 시 최대 설치면수 10면"
    }
  ],
  "seoul-yangcheon": [
    {
      type: "disabled",
      label: "장애인전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "주차대수",
      thresholdText: "주차대수 규모가 20대 이상 50대 미만인 경우 1면 이상, 50대 이상인 경우 3% 이상",
      legalBasis: "서울특별시 양천구 주차장 설치 및 관리 조례",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/2085125-2078303-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%96%91%EC%B2%9C%EA%B5%AC%EC%A3%BC?keyword_related=&search_text=%EA%B0%95%EB%A6%89%EC%8B%9C+%EC%A3%BC%EC%B0%A8%EC%9E%A5+%EC%84%A4%EC%B9%98+%EB%B0%8F+%EA%B4%80%EB%A6%AC+%EC%A1%B0%EB%A1%80&search_type=laws",
      notes: "사용자 확인 기준에 맞춰 '주차대수'를 계획주차대수로 해석"
    },
    {
      type: "women-priority",
      label: "여성우선주차구획",
      basis: "planned",
      percent: 10,
      rounding: "ceil",
      sourceType: "secondary",
      basisLabel: "총주차면수",
      thresholdText: "주차면수 30면 이상 노상·노외·부설주차장",
      legalBasis: "서울특별시 양천구 주차장 설치 및 관리 조례",
      sourceUrl: "https://www.ulex.co.kr/%EB%B2%95%EB%A5%A0/2085125-2078303-%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%96%91%EC%B2%9C%EA%B5%AC%EC%A3%BC?keyword_related=&search_text=%EA%B0%95%EB%A6%89%EC%8B%9C+%EC%A3%BC%EC%B0%A8%EC%9E%A5+%EC%84%A4%EC%B9%98+%EB%B0%8F+%EA%B4%80%EB%A6%AC+%EC%A1%B0%EB%A1%80&search_type=laws",
      notes: "검색 결과상 주차면수 30면 이상, 10% 기준 확인"
    }
  ],
  "gyeonggi-suwon": [
    {
      type: "mobility-priority",
      label: "교통약자우선 주차구획",
      basis: "legal",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "법적설치 주차대수",
      thresholdText: "법적설치 주차대수 50대 이상인 노상·노외·부설주차장",
      legalBasis: "수원시 주차장 조례 제18조의2",
      sourceUrl: officialOrdinanceUrl("1835131"),
      notes: "소수점 이하는 1대로 보며 분홍색 실선, 확장형 규격, 별표 5 표시 기준까지 함께 규정합니다."
    },
    {
      type: "compact",
      label: "경형자동차 전용주차구획",
      basis: "planned",
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "총주차면수",
      customValueText: "5% 이상 설치 가능",
      thresholdText: "노상주차장 설비기준으로 둘 수 있으며 의무비율 조항은 아님",
      legalBasis: "수원시 주차장 조례 제12조의3",
      sourceUrl: officialOrdinanceUrl("1835131"),
      notes: "총 주차대수의 5퍼센트 이상 설치할 수 있다고 규정한 선택형 기준입니다."
    }
  ],
  "gyeonggi-seongnam": [
    {
      type: "disabled-public",
      label: "노외주차장 장애인 전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "노외주차장 주차대수 50대 이상",
      legalBasis: "성남시 주차장 설치 및 관리 운영에 관한 조례 제17조의2",
      sourceUrl: officialOrdinanceUrl("2049099"),
      notes: "제5조제8호에 따른 노외주차장에 적용하며 소수점 이하는 1대로 봅니다."
    }
  ],
  "gyeonggi-goyang": [
    {
      type: "disabled-public",
      label: "노상주차장 장애인 전용주차구획",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "노상 20대 이상 50대 미만은 1면 이상, 50대 이상은 2% 이상",
      legalBasis: "고양시 주차장 설치 및 관리 조례 제11조",
      sourceUrl: officialOrdinanceUrl("2109927"),
      notes: "제31조의 세부설치기준을 따르며 소수점 이하는 1대로 봅니다."
    },
    {
      type: "disabled-public",
      label: "노외주차장 장애인전용주차구획",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "시장이 설치하는 노외주차장 50대 이상",
      legalBasis: "고양시 주차장 설치 및 관리 조례 제17조",
      sourceUrl: officialOrdinanceUrl("2109927"),
      notes: "시장이 설치하는 노외주차장에 적용하며 소수점 이하는 1대로 봅니다."
    },
    {
      type: "disabled",
      label: "부설주차장 장애인 전용주차구획",
      basis: "planned",
      percent: 4,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "부설주차장 주차대수의 4%",
      legalBasis: "고양시 주차장 설치 및 관리 조례 제31조",
      sourceUrl: officialOrdinanceUrl("2109927"),
      notes: "시설물 주요 출입구 등 이용이 편리한 위치 기준과 바닥·지붕 표시 기준을 함께 규정합니다."
    },
    {
      type: "mobility-priority",
      label: "교통약자 우선주차구획",
      basis: "planned",
      percentRange: "2~4",
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "총주차대수",
      thresholdText: "100대 이상 다중이용시설·공영주차장·시청사 부설주차장",
      legalBasis: "고양시 주차장 설치 및 관리 조례 제31조의2",
      sourceUrl: officialOrdinanceUrl("2109927"),
      notes: "임산부, 영유아 동반자, 어르신 등 교통약자를 대상으로 하며 소수점 이하는 1대로 봅니다."
    },
    {
      type: "eco-friendly",
      label: "환경친화적 자동차 주차구획",
      basis: "planned",
      percent: 5,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "총주차대수",
      thresholdText: "주차대수 50대 이상 공영주차장·시 및 소속기관 청사 부설주차장",
      legalBasis: "고양시 주차장 설치 및 관리 조례 제31조의3",
      sourceUrl: officialOrdinanceUrl("2109927"),
      notes: "환경친화적 자동차 종류와 무관하게 전용 주차구획의 합으로 산정합니다."
    }
  ],
  "gyeonggi-anyang": [
    {
      type: "disabled",
      label: "장애인전용주차구획",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "부설 2%, 노상 20~49대는 1면 이상·50대 이상은 2%, 노외 50대 이상은 2%",
      legalBasis: "안양시 주차장 설치 및 관리 조례 제6조",
      sourceUrl: officialOrdinanceUrl("2102223"),
      notes: "노상 20대 이상 50대 미만은 1면 이상, 소수점 이하는 올림으로 계산합니다."
    },
    {
      type: "family-care",
      label: "가족배려우선 주차구획",
      basis: "legal",
      percent: 10,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "법정 주차면수",
      thresholdText: "법정 주차면수 30면 이상(기계식주차구획 제외) 노상·노외·부설주차장",
      legalBasis: "안양시 주차장 설치 및 관리 조례 제6조의2",
      sourceUrl: officialOrdinanceUrl("2102223"),
      notes: "임산부, 영유아 동반자, 고령 등 이동불편자를 위한 구획으로 확장형 설치와 표지 기준을 함께 둡니다."
    }
  ],
  "gyeonggi-hwaseong": [
    {
      type: "disabled-public",
      label: "노상·노외 장애인전용주차구획",
      basis: "planned",
      percent: 4,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "총주차대수",
      thresholdText: "노상 20~49대는 1면 이상, 50대 이상은 4%; 노외 50대 이상 4%",
      legalBasis: "화성시 주차장 설치 및 관리 조례 제6조",
      sourceUrl: officialOrdinanceUrl("2087593"),
      notes: "노상 20대 이상 50대 미만은 1면 이상이며 소수점 이하는 1대로 봅니다."
    },
    {
      type: "family-care",
      label: "가족배려주차장",
      basis: "none",
      sourceType: "official",
      basisLabel: "정률 없음",
      thresholdText: "화성시가 직접 또는 위탁 관리하는 노상·노외·부설주차장",
      legalBasis: "화성시 주차장 설치 및 관리 조례 제6조의3",
      sourceUrl: officialOrdinanceUrl("2087593"),
      notes: "가족배려주차장 주차면수는 시장이 별도로 정하는 방식입니다.",
      customValueText: "시장 별도 결정"
    }
  ],
  "gyeonggi-yongin": [
    {
      type: "disabled-public",
      label: "노상 장애인전용주차구획",
      basis: "planned",
      percent: 4,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "총주차대수",
      thresholdText: "노상 20~49대는 1면 이상, 50대 이상은 4%",
      legalBasis: "용인시 주차장 설치 및 관리 조례 제16조",
      sourceUrl: officialOrdinanceUrl("2106161"),
      notes: "노상주차장 20대 이상 50대 미만은 1면 이상 설치하도록 한 공식 조문 기준입니다."
    },
    {
      type: "disabled-public",
      label: "노외 장애인전용주차구획",
      basis: "planned",
      percent: 4,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "총주차대수",
      thresholdText: "노외 10~24대는 1면 이상, 25대 이상은 4%",
      legalBasis: "용인시 주차장 설치 및 관리 조례 제20조",
      sourceUrl: officialOrdinanceUrl("2106161"),
      notes: "노외주차장 25대 이상은 4%이며 산정한 대수의 소수점 끝수는 1대로 봅니다."
    },
    {
      type: "disabled",
      label: "부설주차장 장애인전용주차구획",
      basis: "legal",
      percent: 4,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "법정기준 주차대수",
      thresholdText: "부설주차장 대수 10대 미만은 제외",
      legalBasis: "용인시 주차장 설치 및 관리 조례 제23조",
      sourceUrl: officialOrdinanceUrl("2106161"),
      notes: "법정기준 주차대수의 4%를 장애인이 이용하기 편리한 위치에 설치하도록 규정합니다."
    }
  ],
  "gyeonggi-bucheon": [
    {
      type: "disabled",
      label: "장애인전용주차구획",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "부설주차장 주차대수",
      thresholdText: "부설주차장 기준 2%",
      legalBasis: "부천시 주차장 조례 제20조",
      sourceUrl: officialOrdinanceUrl("1710051"),
      notes: "장애인ㆍ노인ㆍ임산부 등의 편의증진보장법 시행령 제4조 대상 시설물에 적용됩니다."
    }
  ],
  "gyeonggi-ansan": [
    {
      type: "disabled-public",
      label: "노상·노외 장애인 전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "노상 20~49대는 1면 이상, 50대 이상은 3%; 노외 50대 이상 3%",
      legalBasis: "안산시 주차장 조례 노상·노외 장애인 전용주차구획 규정",
      sourceUrl: officialOrdinanceUrl("1982073"),
      notes: "공식 조문에서 노상·노외 공영주차장 설치기준을 직접 확인했습니다."
    }
  ],
  "gyeonggi-namyangju": [
    {
      type: "disabled-public",
      label: "공영주차장 장애인전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "주차대수 50대 이상 공영주차장",
      legalBasis: "남양주시 주차장 조례 제31조",
      sourceUrl: officialOrdinanceUrl("2079223"),
      notes: "시장 설치 공영주차장 기준입니다."
    },
    {
      type: "disabled",
      label: "부설주차장 장애인전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "부설주차장 주차대수",
      thresholdText: "편의증진법·교통약자법상 장애인전용주차구역 설치 대상 시설물",
      legalBasis: "남양주시 주차장 조례 제31조",
      sourceUrl: officialOrdinanceUrl("2079223"),
      notes: "제17조제1항에 따른 부설주차장 주차대수의 3% 이상으로 규정합니다."
    },
    {
      type: "family-care",
      label: "가족배려주차장",
      basis: "nonMechanical",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "기계식 제외 총주차대수",
      thresholdText: "기계식 제외 30대 이상 공영·공공 부설주차장",
      legalBasis: "남양주시 주차장 조례 제31조의2",
      sourceUrl: officialOrdinanceUrl("2079223"),
      notes: "확장형 주차구획이 있는 경우 가족배려주차장 주차구획의 50% 이상을 확장형으로 설치합니다."
    }
  ],
  "gyeonggi-pyeongtaek": [
    {
      type: "disabled",
      label: "장애인 전용주차구획",
      basis: "legal",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "부설주차장 설치기준 주차대수",
      thresholdText: "부설주차장 설치기준의 3%, 1대 미만이면 1대로 산정",
      legalBasis: "평택시 주차장 설치 및 관리 조례 제18조의2",
      sourceUrl: officialOrdinanceUrl("2099063"),
      notes: "건축물 주요 출입구 등 접근이 쉬운 위치 기준을 함께 규정합니다."
    }
  ],
  "gyeonggi-uijeongbu": [
    {
      type: "disabled-public",
      label: "노상 장애인 전용주차구획",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "시장 설치 노상주차장 50대 이상",
      legalBasis: "의정부시 주차장 설치 및 관리 조례 제15조",
      sourceUrl: officialOrdinanceUrl("2107023"),
      notes: "노상 공영주차장은 2% 이상으로 직접 규정합니다."
    },
    {
      type: "disabled-public",
      label: "노외 장애인 전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "시장 설치 노외주차장 50대 이상",
      legalBasis: "의정부시 주차장 설치 및 관리 조례 제15조",
      sourceUrl: officialOrdinanceUrl("2107023"),
      notes: "노외 공영주차장은 3% 이상으로 직접 규정합니다."
    }
  ],
  "gyeonggi-siheung": [
    {
      type: "disabled",
      label: "장애인전용 주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "시행규칙 제4조·제5조 대상 주차장",
      legalBasis: "시흥시 주차장 설치 및 관리 조례 제19조",
      sourceUrl: officialOrdinanceUrl("2054187"),
      notes: "조례가 장애인전용 주차구획을 주차대수의 3% 이상으로 직접 규정합니다."
    }
  ],
  "gyeonggi-paju": [
    {
      type: "disabled-public",
      label: "공영주차장 장애인 전용주차구획",
      basis: "planned",
      percentRange: "2~4",
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "노상 20~49대는 1면 이상, 50대 이상 노상·노외 공영주차장은 2~4%",
      legalBasis: "파주시 주차장 설치 및 관리 조례 제12조의2",
      sourceUrl: officialOrdinanceUrl("2084279"),
      notes: "공식 조문이 2%부터 4%까지의 범위로 규정합니다."
    },
    {
      type: "eco-friendly",
      label: "환경친화적 자동차 전용주차구역",
      basis: "planned",
      percent: 5,
      rounding: "round",
      sourceType: "official",
      basisLabel: "총주차대수",
      thresholdText: "주차면수 50면 이상 공영주차장·파주시청 및 소속기관 청사 부설주차장",
      legalBasis: "파주시 주차장 설치 및 관리 조례 제12조의4",
      sourceUrl: officialOrdinanceUrl("2084279"),
      notes: "전용주차구역 설치 수는 소수점 이하는 반올림하여 계산합니다."
    },
    {
      type: "family-care",
      label: "가족배려주차장 주차구획",
      basis: "nonMechanical",
      percent: 5,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "기계식 제외 총주차대수",
      thresholdText: "기계식 제외 50대 이상 노외·부설 공영주차장",
      legalBasis: "파주시 주차장 설치 및 관리 조례 제12조의5",
      sourceUrl: officialOrdinanceUrl("2084279"),
      notes: "임산부, 영유아 동반자, 고령 등 이동이 불편한 사람을 대상으로 합니다."
    }
  ],
  "gyeonggi-gimpo": [
    {
      type: "disabled-public",
      label: "노상·노외 장애인전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "노상·노외 50대 이상",
      legalBasis: "김포시 주차장 조례 제11조의4",
      sourceUrl: officialOrdinanceUrl("2028079"),
      notes: "노상과 노외 모두 주차대수의 3% 이상으로 직접 규정합니다."
    },
    {
      type: "family-care",
      label: "가족배려주차장 주차구획",
      basis: "planned",
      percent: 5,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "총주차대수",
      thresholdText: "주차대수 50대 이상 공영주차장",
      legalBasis: "김포시 주차장 조례 제13조의3",
      sourceUrl: officialOrdinanceUrl("2028079"),
      notes: "노외·부설주차장을 신규 설치하거나 변경할 때 같은 비율 이상 설치를 권고할 수 있습니다."
    }
  ],
  "gyeonggi-gwangmyeong": [
    {
      type: "disabled",
      label: "장애인 전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "부설주차장 주차대수",
      thresholdText: "부설주차장 10대 미만 제외",
      legalBasis: "광명시 주차장 설치 및 관리 조례 제20조",
      sourceUrl: officialOrdinanceUrl("2019975"),
      notes: "부설주차장 주차대수의 3% 이상을 직접 규정합니다."
    },
    {
      type: "family-care",
      label: "가족배려주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "총주차대수",
      thresholdText: "주차대수 30대 이상 노외·부설주차장",
      legalBasis: "광명시 주차장 설치 및 관리 조례 제20조의3",
      sourceUrl: officialOrdinanceUrl("2019975"),
      notes: "장애인 전용주차구획과 인접한 위치 기준까지 함께 규정합니다."
    }
  ],
  "gyeonggi-gwangju": [
    {
      type: "disabled",
      label: "장애인 전용주차구획",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "부설 2%(10대 미만 제외), 노상 20~49대 1면 이상·50대 이상 2%, 노외 50대 이상 2%",
      legalBasis: "광주시 주차장 설치 및 관리 조례 장애인 전용주차구획 설치기준",
      sourceUrl: officialOrdinanceUrl("2051439"),
      notes: "조례가 주차장 종류별 장애인 전용주차구획 설치기준을 직접 열거합니다."
    }
  ],
  "gyeonggi-gunpo": [
    {
      type: "disabled",
      label: "장애인 전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "노상 20~49대 1면 이상, 노상 50대 이상 3%, 노외 50대 이상 3%, 부설 10대 이상 3%",
      legalBasis: "군포시 주차장 설치 및 관리 조례 제7조",
      sourceUrl: officialOrdinanceUrl("1990477"),
      notes: "산정한 장애인 전용주차구획의 주차대수 중 소수점 이하는 올림으로 계산합니다."
    }
  ],
  "gyeonggi-osan": [
    {
      type: "disabled-public",
      label: "공영주차장 장애인 전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "노상 20~49대는 1면 이상, 50대 이상은 3%; 노외 50대 이상 3%",
      legalBasis: "오산시 주차장 조례 제6조",
      sourceUrl: officialOrdinanceUrl("2040787"),
      notes: "공영주차장 대상 장애인 전용주차구획 설치기준입니다."
    },
    {
      type: "mobility-priority",
      label: "교통약자 우선주차구획",
      basis: "planned",
      percent: 10,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "총주차대수",
      thresholdText: "주차대수 50대 이상 노상·노외·부설주차장",
      legalBasis: "오산시 주차장 조례 제6조의2",
      sourceUrl: officialOrdinanceUrl("2040787"),
      notes: "교통약자 우선주차구획은 확장형 주차구획에 설치하도록 직접 규정합니다."
    }
  ],
  "gyeonggi-icheon": [
    {
      type: "disabled-public",
      label: "공영주차장 장애인 전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "노상 20~49대는 1면 이상, 노상 50대 이상 3%, 노외 50대 이상 3%",
      legalBasis: "이천시 주차장 설치 및 관리 조례 제14조의3",
      sourceUrl: officialOrdinanceUrl("2040013"),
      notes: "공영주차장 설치기준을 직접 구조화했습니다."
    },
    {
      type: "family-care",
      label: "가족배려주차장 주차구획",
      basis: "planned",
      percent: 5,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "총주차면수",
      thresholdText: "주차면수 30면 이상 공영(노상·노외·부설)주차장",
      legalBasis: "이천시 주차장 설치 및 관리 조례 제19조의2",
      sourceUrl: officialOrdinanceUrl("2040013"),
      notes: "2025년 5월 16일 개정 조문 기준이며 가족배려주차장 표시 규격까지 함께 둡니다."
    }
  ],
  "gyeonggi-anseong": [
    {
      type: "disabled",
      label: "장애인 전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "부설주차장 주차대수",
      thresholdText: "부설주차장 10대 미만 제외",
      legalBasis: "안성시 주차장 설치 및 관리조례 제18조",
      sourceUrl: officialOrdinanceUrl("2115243"),
      notes: "같은 조 제4항에서 노상·노외주차장 설치기준도 별도로 규정합니다."
    }
  ],
  "gyeonggi-guri": [
    {
      type: "disabled-public",
      label: "노상·노외 장애인 전용주차구획",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "노상 20~49대는 1면 이상, 50대 이상 노상·노외는 2%",
      legalBasis: "구리시 주차장 조례 제28조",
      sourceUrl: officialOrdinanceUrl("2067643"),
      notes: "노상·노외 공영주차장 기준입니다."
    },
    {
      type: "disabled",
      label: "부설주차장 장애인 전용주차구획",
      basis: "planned",
      percent: 4,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "부설주차장 주차대수",
      thresholdText: "부설주차장 10대 미만 제외",
      legalBasis: "구리시 주차장 조례 제28조",
      sourceUrl: officialOrdinanceUrl("2067643"),
      notes: "부설주차장 주차대수의 4% 이상으로 직접 규정합니다."
    }
  ],
  "gyeonggi-uiwang": [
    {
      type: "disabled",
      label: "장애인 전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "설치 대상 주차장의 주차대수 3% 이상",
      legalBasis: "의왕시 주차장설치 및 관리 조례 제21조",
      sourceUrl: officialOrdinanceUrl("2080789"),
      notes: "장애인 전용주차구획 주차대수를 3% 이상으로 직접 규정합니다."
    },
    {
      type: "mobility-priority",
      label: "여성 및 교통약자우선 주차구획",
      basis: "legal",
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "법정 주차대수",
      customValueText: "5% 이상 권장",
      thresholdText: "법정 주차대수 50대 이상 노상·노외·부설주차장",
      legalBasis: "의왕시 주차장설치 및 관리 조례 제23조",
      sourceUrl: officialOrdinanceUrl("2080789"),
      notes: "설치 의무가 아니라 권장 규정으로 직접 명시합니다."
    }
  ],
  "gyeonggi-hanam": [
    {
      type: "disabled",
      label: "장애인 전용주차장",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "부설주차장 주차대수",
      thresholdText: "부설주차장 기준, 1대 미만이면 1대로 산정",
      legalBasis: "하남시 주차장 조례 제20조",
      sourceUrl: officialOrdinanceUrl("1844801"),
      notes: "부설주차장 주차대수의 3% 이상을 직접 규정합니다."
    }
  ],
  "gyeonggi-pocheon": [
    {
      type: "disabled",
      label: "장애인 전용주차장",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "부설주차장 주차대수",
      thresholdText: "부설주차장 10대 미만 제외",
      legalBasis: "포천시 주차장 설치 및 관리 조례 제26조",
      sourceUrl: officialOrdinanceUrl("2095709"),
      notes: "부설주차장 주차대수의 2% 이상을 직접 규정합니다."
    }
  ],
  "gyeonggi-yangju": [
    {
      type: "disabled-public",
      label: "노상·노외 장애인 전용주차구획",
      basis: "planned",
      percent: 3,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "노상 20~49대는 1면 이상, 50대 이상은 3%; 노외 50대 이상 3%",
      legalBasis: "양주시 주차장 조례 제13조의3",
      sourceUrl: officialOrdinanceUrl("2108757"),
      notes: "노상·노외 설치기준을 직접 구조화했습니다."
    }
  ],
  "gyeonggi-dongducheon": [
    {
      type: "disabled-public",
      label: "노상·노외 장애인 전용주차구획",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "노상 20~49대는 1면 이상, 50대 이상은 2%; 노외 50대 이상 2%",
      legalBasis: "동두천시 주차장 설치 및 관리 조례 장애인 전용주차구획 설치기준",
      sourceUrl: officialOrdinanceUrl("2087439"),
      notes: "2025년 11월 18일 개정 조문에 반영된 공식 기준입니다."
    }
  ],
  "gyeonggi-gwacheon": [
    {
      type: "disabled",
      label: "장애인전용주차구역",
      basis: "planned",
      percentRange: "2~3",
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "일반 주차장은 2%, 공영주차장은 3%",
      legalBasis: "과천시 주차장 조례 제20조",
      sourceUrl: officialOrdinanceUrl("2095451"),
      notes: "조례는 장애인전용주차구역 설치비율을 2%로 두되 공영주차장은 3%로 상향합니다."
    }
  ],
  "gyeonggi-yeoju": [
    {
      type: "disabled-public",
      label: "노상·노외 장애인 전용주차구획",
      basis: "planned",
      percent: 4,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "노상 20~49대는 1면 이상, 50대 이상은 4%; 노외 50대 이상 4%",
      legalBasis: "여주시 주차장 조례 제17조",
      sourceUrl: officialOrdinanceUrl("2049793"),
      notes: "노상·노외 공영주차장 설치기준입니다."
    },
    {
      type: "disabled",
      label: "부설주차장 장애인 전용주차구획",
      basis: "planned",
      percent: 4,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "부설주차장 주차대수",
      thresholdText: "부설주차장 설치기준상 주차대수의 4%",
      legalBasis: "여주시 주차장 조례 제17조",
      sourceUrl: officialOrdinanceUrl("2049793"),
      notes: "편의증진보장법 시행규칙 별표 1 제4호 설치기준을 함께 따릅니다."
    }
  ],
  "gyeonggi-gapyeong": [
    {
      type: "disabled",
      label: "장애인전용주차구획",
      basis: "planned",
      percent: 4,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "부설주차장 주차대수",
      thresholdText: "부설주차장 10대 미만 제외",
      legalBasis: "가평군 주차장 설치 및 관리 조례 부설주차장 장애인전용주차구획 기준",
      sourceUrl: officialOrdinanceUrl("2039645"),
      notes: "부설주차장 주차대수의 4% 이상을 직접 규정합니다."
    }
  ],
  "gyeonggi-yangpyeong": [
    {
      type: "disabled-public",
      label: "공영주차장 장애인 전용주차구획",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "주차대수",
      thresholdText: "공영주차장 50대 이상",
      legalBasis: "양평군 주차장 조례 제11조",
      sourceUrl: officialOrdinanceUrl("2087065"),
      notes: "공영주차장 주차대수의 2% 이상으로 직접 규정합니다."
    },
    {
      type: "disabled",
      label: "부설주차장 장애인 전용주차구획",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "부설주차장 주차대수",
      thresholdText: "부설주차장 10대 미만 제외",
      legalBasis: "양평군 주차장 조례 제11조",
      sourceUrl: officialOrdinanceUrl("2087065"),
      notes: "산정한 장애인 전용주차구획의 주차대수 중 소수점 이하의 끝수는 1대로 봅니다."
    }
  ],
  "gyeonggi-yeoncheon": [
    {
      type: "disabled",
      label: "장애인 전용주차장",
      basis: "planned",
      percent: 2,
      rounding: "ceil",
      sourceType: "official",
      basisLabel: "부설주차장 주차대수",
      thresholdText: "부설주차장 10대 미만 제외",
      legalBasis: "연천군 주차장 설치조례 제11조",
      sourceUrl: officialOrdinanceUrl("1883467"),
      notes: "부설주차장 주차대수의 2% 이상을 직접 규정합니다."
    }
  ],
  "gyeonggi-generic": [
    {
      type: "disabled-range",
      label: "장애인전용주차구획",
      basis: "planned",
      percentRange: "2~4",
      rounding: "ceil",
      sourceType: "inferred",
      basisLabel: "주차대수",
      thresholdText: "경기도 시군 조례에서 '주차대수' 기준 장애인전용주차구획 비율이 대체로 2~4% 범위에서 정해짐",
      legalBasis: "주차장법 시행규칙 위임 + 경기 시군 유사조례 공통범위",
      sourceUrl: "https://www.law.go.kr/",
      notes: "개별 시군 조례에서 '주차대수'라고만 적힌 경우 계획주차대수로 해석"
    },
    {
      type: "compact",
      label: "경형주차 산입 가능 대수",
      basis: "planned",
      percent: 10,
      rounding: "floor",
      sourceType: "reference",
      basisLabel: "총주차단위구획 수",
      thresholdText: "설치의무가 아니라 산입 가능 상한",
      legalBasis: "주차장법 시행령 별표 1",
      sourceUrl: "https://www.law.go.kr/",
      notes: "대부분 시군에서 상위법 기준을 그대로 준용"
    },
    {
      type: "expanded",
      label: "확장형 주차단위구획",
      basis: "planned",
      percent: 30,
      rounding: "ceil",
      sourceType: "reference",
      basisLabel: "총주차단위구획 수",
      thresholdText: "주차대수 50대 이상일 때 적용",
      legalBasis: "주차장법 시행규칙 제6조, 제11조",
      sourceUrl: "https://www.law.go.kr/",
      notes: "평행주차 제외"
    },
    {
      type: "eco-friendly",
      label: "환경친화적 자동차 전용주차구획",
      basis: "planned",
      percent: 5,
      rounding: "round",
      sourceType: "reference",
      basisLabel: "총주차대수",
      thresholdText: "대상시설 50면 이상, 조례로 상향 가능",
      legalBasis: "환경친화적 자동차의 개발 및 보급 촉진에 관한 법률 시행령 제18조의6",
      sourceUrl: "https://www.law.go.kr/",
      notes: "시군 조례가 별도로 상향하지 않으면 5% 기준 참고"
    }
  ]
};

function createSeoulOfficialRule({
  district,
  ordinSeq,
  article,
  type,
  label,
  basis,
  basisLabel,
  percent,
  rounding = "ceil",
  cap,
  customValueText,
  thresholdText,
  notes
}) {
  const rule = {
    type,
    label,
    basis,
    rounding,
    sourceType: "official",
    basisLabel,
    thresholdText,
    legalBasis: `서울특별시 ${district} 주차장 설치 및 관리 조례 ${article}`,
    sourceUrl: officialOrdinanceUrl(ordinSeq),
    notes
  };

  if (typeof percent === "number") {
    rule.percent = percent;
  }

  if (typeof cap === "number") {
    rule.cap = cap;
  }

  if (customValueText) {
    rule.customValueText = customValueText;
  }

  return rule;
}

function createSeoulOfficialDerivedRule({
  derivedFromType,
  ...ruleConfig
}) {
  const rule = createSeoulOfficialRule(ruleConfig);
  rule.derivedFromType = derivedFromType;
  return rule;
}

function buildSeoulOfficialRuleLibrary() {
  const seq = SEOUL_DISTRICT_ORDIN_SEQ;

  return {
    "seoul-gangnam": [
      createSeoulOfficialRule({
        district: "강남구",
        ordinSeq: seq["강남구"],
        article: "제11조",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "조문상 '주차대수'는 계획주차대수로 해석합니다."
      }),
      createSeoulOfficialRule({
        district: "강남구",
        ordinSeq: seq["강남구"],
        article: "제11조의3",
        type: "family-care",
        label: "가족배려주차장",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 10,
        thresholdText: "주차대수 규모 30대 이상 노상·노외·부설주차장",
        notes: "확장형 주차구획을 설치하면 가족배려주차구획의 50% 이상을 확장형으로 설치합니다."
      }),
      createSeoulOfficialRule({
        district: "강남구",
        ordinSeq: seq["강남구"],
        article: "제11조의4",
        type: "ev-public",
        label: "전기자동차 주차구획",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 3,
        cap: 10,
        thresholdText: "주차대수 100대 이상 공영주차장·구 및 소속기관 청사 부설주차장",
        notes: "산정 결과가 10대를 초과하면 최대 설치대수는 10대입니다."
      })
    ],
    "seoul-gangdong": [
      createSeoulOfficialRule({
        district: "강동구",
        ordinSeq: seq["강동구"],
        article: "제26조",
        type: "family-care",
        label: "가족배려주차장",
        basis: "nonMechanical",
        basisLabel: "주차대수 규모",
        percent: 10,
        thresholdText: "기계식 주차구획 제외 30대 이상 노상·노외·부설주차장",
        notes: "확장형 주차구획을 설치하면 가족배려주차구획의 50% 이상을 확장형으로 설치합니다."
      }),
      createSeoulOfficialRule({
        district: "강동구",
        ordinSeq: seq["강동구"],
        article: "제26조의2",
        type: "eco-friendly",
        label: "환경친화적 자동차 전용주차구역",
        basis: "planned",
        basisLabel: "주차단위구획 총 수",
        customValueText: "서울시 기준 준용",
        thresholdText: "주차단위구획 총 수 50개 이상 대상시설·구청장 설치 주차장",
        notes: "구 조례 본문은 설치대상만 정하고 세부 설치기준은 서울특별시 환경친화적 자동차 조례를 준용합니다."
      })
    ],
    "seoul-gangbuk": [
      createSeoulOfficialRule({
        district: "강북구",
        ordinSeq: seq["강북구"],
        article: "제11조",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "공식 조문에 노상·노외 기준이 직접 규정돼 있습니다."
      }),
      createSeoulOfficialRule({
        district: "강북구",
        ordinSeq: seq["강북구"],
        article: "제9조",
        type: "family-care",
        label: "가족배려주차장",
        basis: "nonMechanical",
        basisLabel: "주차대수 규모",
        percent: 10,
        thresholdText: "기계식주차구획 제외 30대 이상 노상·노외·부설주차장",
        notes: "확장형 주차구획을 설치하면 가족배려주차구획의 50% 이상을 확장형으로 설치합니다."
      }),
      createSeoulOfficialRule({
        district: "강북구",
        ordinSeq: seq["강북구"],
        article: "제10조",
        type: "eco-friendly",
        label: "환경친화적 자동차 전용주차구획",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 5,
        thresholdText: "주차면수 100면 이상 공영주차장·공공청사 부설주차장",
        notes: "공식 조문에 총 주차대수의 5% 이상이 직접 규정돼 있습니다."
      })
    ],
    "seoul-gangseo": [
      createSeoulOfficialRule({
        district: "강서구",
        ordinSeq: seq["강서구"],
        article: "제6조의3",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "공식 조문에 노상·노외 기준이 직접 규정돼 있습니다."
      }),
      createSeoulOfficialRule({
        district: "강서구",
        ordinSeq: seq["강서구"],
        article: "제6조의4",
        type: "family-care",
        label: "가족배려주차장",
        basis: "nonMechanical",
        basisLabel: "주차면수",
        percent: 10,
        thresholdText: "기계식주차구획 제외 30면 이상 노상·노외·부설주차장",
        notes: "공식 조문은 주차면수 기준으로 설치대상과 10% 이상 기준을 함께 둡니다."
      }),
      createSeoulOfficialRule({
        district: "강서구",
        ordinSeq: seq["강서구"],
        article: "제6조의5",
        type: "eco-friendly",
        label: "환경친화적 자동차 전용주차구획",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 5,
        thresholdText: "주차면수 50면 이상 공영주차장·구 및 소속기관 청사 부설주차장",
        notes: "공식 조문에 총 주차대수의 5% 이상이 직접 규정돼 있습니다."
      })
    ],
    "seoul-gwanak": [
      createSeoulOfficialRule({
        district: "관악구",
        ordinSeq: seq["관악구"],
        article: "제23조의2",
        type: "disabled-annex",
        label: "부설주차장 장애인전용주차구획",
        basis: "legal",
        basisLabel: "법정주차대수",
        percent: 3,
        thresholdText: "부설주차장 설치기준에 따른 주차대수 10대 이상 3%",
        notes: "공식 조문은 부설주차장 설치기준에 따른 주차대수를 기준으로 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "관악구",
        ordinSeq: seq["관악구"],
        article: "제23조의3",
        type: "family-care",
        label: "가족배려주차장",
        basis: "nonMechanical",
        basisLabel: "주차대수 규모",
        percent: 10,
        thresholdText: "기계식주차구획 제외 30대 이상 노상·노외·부설주차장",
        notes: "공식 조문은 가족배려주차장의 이용대상과 위치기준도 함께 둡니다."
      }),
      createSeoulOfficialRule({
        district: "관악구",
        ordinSeq: seq["관악구"],
        article: "제23조의4",
        type: "eco-friendly",
        label: "환경친화적 자동차 전용주차구획",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 5,
        thresholdText: "주차면수 50면 이상 공영주차장·시·자치구 및 소속기관 청사 부설주차장",
        notes: "공식 조문에 총 주차대수의 5% 이상이 직접 규정돼 있습니다."
      })
    ],
    "seoul-gwangjin": [
      createSeoulOfficialRule({
        district: "광진구",
        ordinSeq: seq["광진구"],
        article: "제10조의5",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "노상 기준은 제10조의5, 노외 기준은 제12조의2에서 확인했습니다."
      }),
      createSeoulOfficialRule({
        district: "광진구",
        ordinSeq: seq["광진구"],
        article: "제20조",
        type: "disabled-annex",
        label: "부설주차장 장애인전용주차구획",
        basis: "legal",
        basisLabel: "법정주차대수",
        percent: 3,
        thresholdText: "부설주차장 설치기준에 따른 주차대수 10대 이상 3%",
        notes: "공식 조문은 부설주차장 설치기준에 따른 주차대수를 기준으로 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "광진구",
        ordinSeq: seq["광진구"],
        article: "제8조의2",
        type: "family-care",
        label: "가족배려주차장",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 10,
        thresholdText: "주차대수 규모 30대 이상 노상·노외·부설주차장",
        notes: "가족배려주차장은 공식 조문에 이용대상과 위치기준이 함께 규정돼 있습니다."
      })
    ],
    "seoul-guro": [
      createSeoulOfficialRule({
        district: "구로구",
        ordinSeq: seq["구로구"],
        article: "제28조",
        type: "disabled",
        label: "장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 2,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 2%, 부설 10대 이상 2%",
        notes: "구 조례는 장애인전용주차구획을 2% 기준으로 직접 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "구로구",
        ordinSeq: seq["구로구"],
        article: "제28조의2",
        type: "family-care",
        label: "가족배려주차장",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 10,
        thresholdText: "주차대수 규모 30대 이상 노상·노외·부설주차장",
        notes: "공식 조문은 가족배려주차장의 이용대상과 위치기준을 함께 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "구로구",
        ordinSeq: seq["구로구"],
        article: "제28조의3",
        type: "eco-friendly",
        label: "환경친화적 자동차 전용주차구획",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 5,
        thresholdText: "주차면수 50면 이상 공영주차장·구 및 소속기관 청사 부설주차장",
        notes: "공식 조문에 총 주차대수의 5% 이상이 직접 규정돼 있습니다."
      })
    ],
    "seoul-geumcheon": [
      createSeoulOfficialRule({
        district: "금천구",
        ordinSeq: seq["금천구"],
        article: "제19조",
        type: "disabled-annex",
        label: "부설주차장 장애인전용주차구획",
        basis: "legal",
        basisLabel: "법정주차대수",
        percent: 3,
        thresholdText: "부설주차장 설치기준에 따른 주차대수 10대 이상 3%",
        notes: "금천구 조례는 부설주차장 기준만 직접 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "금천구",
        ordinSeq: seq["금천구"],
        article: "제19조의2",
        type: "family-care",
        label: "가족배려주차장",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 10,
        thresholdText: "주차대수 규모 30대 이상 노상·노외·부설주차장",
        notes: "공식 조문은 가족배려주차장의 이용대상도 함께 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "금천구",
        ordinSeq: seq["금천구"],
        article: "제19조의3",
        type: "ev-public",
        label: "전기자동차 주차구획",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 3,
        cap: 10,
        thresholdText: "주차면수 100면 이상 공영주차장·구 및 소속기관 청사 부설주차장",
        notes: "산정 결과가 10면을 초과하면 최대 설치면수는 10면입니다."
      })
    ],
    "seoul-nowon": [
      createSeoulOfficialRule({
        district: "노원구",
        ordinSeq: seq["노원구"],
        article: "제9조의3",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "노상 기준은 제9조의3, 노외 기준은 제16조의3에서 확인했습니다."
      }),
      createSeoulOfficialRule({
        district: "노원구",
        ordinSeq: seq["노원구"],
        article: "제17조",
        type: "disabled-annex",
        label: "부설주차장 장애인전용주차구획",
        basis: "legal",
        basisLabel: "법정주차대수",
        percent: 3,
        thresholdText: "부설주차장 설치기준에 따른 주차대수 10대 이상 3%",
        notes: "공식 조문은 부설주차장 설치기준에 따른 주차대수를 기준으로 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "노원구",
        ordinSeq: seq["노원구"],
        article: "제17조의2",
        type: "family-care",
        label: "가족배려주차장",
        basis: "nonMechanical",
        basisLabel: "주차대수 규모",
        percent: 10,
        thresholdText: "기계식주차구획 제외 30대 이상 노상·노외·부설주차장",
        notes: "노원구 조례는 가족배려주차장의 이용대상과 위치기준을 함께 규정합니다."
      })
    ],
    "seoul-dobong": [
      createSeoulOfficialRule({
        district: "도봉구",
        ordinSeq: seq["도봉구"],
        article: "제10조의2",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상·노외는 조례상 비율 3%",
        notes: "도봉구 조례는 시행규칙 제4조·제5조의 조례상 비율을 3%로 정합니다."
      }),
      createSeoulOfficialRule({
        district: "도봉구",
        ordinSeq: seq["도봉구"],
        article: "제10조의2",
        type: "disabled-annex",
        label: "부설주차장 장애인전용주차구획",
        basis: "legal",
        basisLabel: "법정주차대수",
        percent: 3,
        thresholdText: "부설주차장 설치기준에 따른 주차대수 10대 이상 3%",
        notes: "공식 조문은 부설주차장 설치기준에 따른 주차대수를 기준으로 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "도봉구",
        ordinSeq: seq["도봉구"],
        article: "제10조의3",
        type: "family-care",
        label: "가족배려주차장",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 10,
        thresholdText: "주차대수 규모 30대 이상 노상·노외·부설주차장",
        notes: "확장형 주차구획을 설치하면 가족배려주차구획의 50% 이상을 확장형으로 설치합니다."
      })
    ],
    "seoul-dongdaemun": [
      createSeoulOfficialRule({
        district: "동대문구",
        ordinSeq: seq["동대문구"],
        article: "제14조",
        type: "disabled-street",
        label: "노상 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 50대 이상 3%",
        notes: "노상 장애인전용주차구획 기준은 제14조 제2항에서 직접 확인했습니다."
      }),
      createSeoulOfficialRule({
        district: "동대문구",
        ordinSeq: seq["동대문구"],
        article: "제20조",
        type: "disabled-offstreet",
        label: "노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "구청장 설치 노외주차장 50대 이상 3%",
        notes: "노외 장애인전용주차구획 기준은 제20조에서 직접 확인했습니다."
      })
    ],
    "seoul-dongjak": [
      createSeoulOfficialRule({
        district: "동작구",
        ordinSeq: seq["동작구"],
        article: "제13조의2",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "노상 기준은 제13조의2, 노외 기준은 제21조의2에서 확인했습니다."
      }),
      createSeoulOfficialRule({
        district: "동작구",
        ordinSeq: seq["동작구"],
        article: "제25조",
        type: "family-care",
        label: "가족배려주차장",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 10,
        thresholdText: "주차면수 30면 이상 노상·노외·부설주차장",
        notes: "가족배려주차장은 위치기준과 일반형·확장형 표식 기준도 함께 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "동작구",
        ordinSeq: seq["동작구"],
        article: "제25조의2",
        type: "ev-public",
        label: "전기자동차 주차구획",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 3,
        cap: 10,
        thresholdText: "주차면수 100면 이상 공영주차장·구 및 소속기관 청사 부설주차장",
        notes: "산정 결과가 10면을 초과하면 최대 설치면수는 10면입니다."
      })
    ],
    "seoul-mapo": [
      createSeoulOfficialRule({
        district: "마포구",
        ordinSeq: seq["마포구"],
        article: "제4조의5",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "공식 조문에 노상·노외 기준이 직접 규정돼 있습니다."
      }),
      createSeoulOfficialRule({
        district: "마포구",
        ordinSeq: seq["마포구"],
        article: "제21조의4",
        type: "family-care",
        label: "가족배려주차장",
        basis: "nonMechanical",
        basisLabel: "주차대수 규모",
        percent: 10,
        thresholdText: "기계식주차구획 제외 30대 이상 노상·노외·부설주차장",
        notes: "마포구 조례는 가족배려주차장의 이용대상과 위치기준을 함께 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "마포구",
        ordinSeq: seq["마포구"],
        article: "제4조의4",
        type: "eco-friendly",
        label: "환경친화적 자동차 전용주차구획",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 5,
        thresholdText: "주차면수 50면 이상 공영주차장·구 및 소속기관 청사 부설주차장",
        notes: "공식 조문에 총 주차대수의 5% 이상이 직접 규정돼 있습니다."
      })
    ],
    "seoul-seodaemun": [
      createSeoulOfficialRule({
        district: "서대문구",
        ordinSeq: seq["서대문구"],
        article: "제1조의7",
        type: "pregnancy",
        label: "임산부 전용주차구획",
        basis: "none",
        basisLabel: "정률 없음",
        customValueText: "정률 없음",
        thresholdText: "서대문구청 및 소속기관 청사 부설주차장 등에 설치·운영 가능",
        notes: "임산부자동차표지 발급, 바닥면 표시, 다중이용시설 설치 권고 규정까지 함께 두고 있습니다."
      })
    ],
    "seoul-seocho": [
      createSeoulOfficialRule({
        district: "서초구",
        ordinSeq: seq["서초구"],
        article: "제10조",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "공식 조문에 노상·노외 기준이 직접 규정돼 있습니다."
      }),
      createSeoulOfficialRule({
        district: "서초구",
        ordinSeq: seq["서초구"],
        article: "제11조",
        type: "family-care",
        label: "가족배려주차장",
        basis: "planned",
        basisLabel: "총주차면수",
        percent: 10,
        thresholdText: "서초구가 설치한 주차면수 30면 이상 노상·노외·부설주차장",
        notes: "서초구 조례는 서초구가 설치한 주차장을 대상으로 가족배려주차장을 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "서초구",
        ordinSeq: seq["서초구"],
        article: "제12조",
        type: "eco-friendly",
        label: "환경친화적 자동차 전용주차구역",
        basis: "planned",
        basisLabel: "주차단위구획 총 수",
        customValueText: "서울시 기준 준용",
        thresholdText: "주차단위구획 총 수 50면 이상 대상시설·구청장 설치 주차장",
        notes: "구 조례 본문은 설치대상만 정하고 세부 설치기준은 서울특별시 환경친화적 자동차 조례 기준을 따릅니다."
      })
    ],
    "seoul-seongdong": [
      createSeoulOfficialRule({
        district: "성동구",
        ordinSeq: seq["성동구"],
        article: "제14조의2",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "노상 기준은 제14조의2, 노외 기준은 제20조의2에서 확인했습니다."
      }),
      createSeoulOfficialRule({
        district: "성동구",
        ordinSeq: seq["성동구"],
        article: "제30조의2",
        type: "disabled-annex",
        label: "부설주차장 장애인전용주차구획",
        basis: "legal",
        basisLabel: "법정주차대수",
        percent: 3,
        thresholdText: "부설주차장 설치기준에 따른 주차대수 10대 이상 3%",
        notes: "공식 조문은 부설주차장 설치기준에 따른 주차대수를 기준으로 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "성동구",
        ordinSeq: seq["성동구"],
        article: "제13조",
        type: "family-care",
        label: "가족배려주차장",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 10,
        thresholdText: "주차대수 규모 30대 이상 노상·노외·부설주차장",
        notes: "성동구 조례는 가족배려주차장의 이용대상과 위치기준을 함께 규정합니다."
      })
    ],
    "seoul-seongbuk": [
      createSeoulOfficialRule({
        district: "성북구",
        ordinSeq: seq["성북구"],
        article: "제6조",
        type: "family-care",
        label: "가족배려주차장",
        basis: "nonMechanical",
        basisLabel: "총주차면수",
        percent: 10,
        thresholdText: "기계식주차장 제외 30면 이상 노상·노외·부설주차장",
        notes: "확장형 주차단위구획을 설치하면 가족배려주차구획의 50% 이상을 확장형으로 설치합니다."
      }),
      createSeoulOfficialRule({
        district: "성북구",
        ordinSeq: seq["성북구"],
        article: "제21조의2",
        type: "ev-public",
        label: "전기자동차 주차구획",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 3,
        cap: 10,
        thresholdText: "주차면수 100면 이상 공영주차장·구 및 소속기관 청사 부설주차장",
        notes: "산정 결과가 10면을 초과하면 최대 설치면수는 10면입니다."
      })
    ],
    "seoul-songpa": [
      createSeoulOfficialRule({
        district: "송파구",
        ordinSeq: seq["송파구"],
        article: "제14조의4",
        type: "disabled",
        label: "장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49면 1대, 노상·노외 50면 이상 3%, 부설주차장 10면 이상 3%",
        notes: "송파구 조례는 노상·노외·부설 기준을 같은 조문에서 직접 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "송파구",
        ordinSeq: seq["송파구"],
        article: "제14조의5",
        type: "family-care",
        label: "가족배려주차장",
        basis: "nonMechanical",
        basisLabel: "기계식 제외 총주차대수",
        percent: 10,
        thresholdText: "기계식주차구획 제외 30대 이상 노상·노외·부설주차장",
        notes: "송파구 조례는 가족배려주차구획의 이용대상과 위치기준을 함께 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "송파구",
        ordinSeq: seq["송파구"],
        article: "제14조의6",
        type: "eco-friendly",
        label: "환경친화적 자동차 전용주차구획",
        basis: "planned",
        basisLabel: "총주차면수",
        percent: 5,
        thresholdText: "구청장이 설치한 주차면수 50면 이상 공영주차장·공공기관 부설주차장",
        notes: "공식 조문에 총 주차면수의 5% 이상이 직접 규정돼 있습니다."
      })
    ],
    "seoul-yangcheon": [
      createSeoulOfficialRule({
        district: "양천구",
        ordinSeq: seq["양천구"],
        article: "제8조의2",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "노상 기준은 제8조의2 제1항, 노외 기준은 제8조의2 제2항에서 확인했습니다."
      }),
      createSeoulOfficialRule({
        district: "양천구",
        ordinSeq: seq["양천구"],
        article: "제8조의2",
        type: "disabled-annex",
        label: "부설주차장 장애인전용주차구획",
        basis: "legal",
        basisLabel: "법정주차대수",
        percent: 3,
        thresholdText: "부설주차장 설치기준에 따른 주차대수 3%",
        notes: "양천구 조례는 부설주차장 설치기준에 따른 주차대수를 직접 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "양천구",
        ordinSeq: seq["양천구"],
        article: "제8조의3",
        type: "family-care",
        label: "가족배려주차장",
        basis: "nonMechanical",
        basisLabel: "주차대수 규모",
        percent: 10,
        thresholdText: "기계식주차구획 제외 30대 이상 공영·공공기관 부설주차장",
        notes: "양천구 조례는 공영 및 공공기관 부설주차장만 가족배려주차장 설치대상으로 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "양천구",
        ordinSeq: seq["양천구"],
        article: "제8조의4",
        type: "eco-friendly",
        label: "환경친화적 자동차 전용주차구역",
        basis: "planned",
        basisLabel: "주차단위구획 총 수",
        customValueText: "서울시 기준 준용",
        thresholdText: "주차단위구획 총 수 50면 이상 대상시설·구청장 설치 주차장",
        notes: "구 조례 본문은 설치대상만 정하고 세부 설치기준은 서울특별시 환경친화적 자동차 조례를 따릅니다."
      })
    ],
    "seoul-yeongdeungpo": [
      createSeoulOfficialRule({
        district: "영등포구",
        ordinSeq: seq["영등포구"],
        article: "제4조의4",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "공식 조문에 노상·노외 기준이 직접 규정돼 있습니다."
      }),
      createSeoulOfficialRule({
        district: "영등포구",
        ordinSeq: seq["영등포구"],
        article: "제4조의5",
        type: "family-care",
        label: "가족배려주차장",
        basis: "nonMechanical",
        basisLabel: "총주차대수",
        percent: 10,
        thresholdText: "기계식주차구획 제외 30대 이상 노상·노외·부설주차장",
        notes: "영등포구 조례는 가족배려주차장의 이용대상과 위치기준을 함께 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "영등포구",
        ordinSeq: seq["영등포구"],
        article: "제4조의6",
        type: "eco-friendly",
        label: "환경친화적 자동차 전용주차구역",
        basis: "planned",
        basisLabel: "주차단위구획 총 수",
        customValueText: "서울시 기준 준용",
        thresholdText: "주차단위구획 총 수 50개 이상 대상시설·구청장 설치 주차장",
        notes: "구 조례 본문은 설치대상만 정하고 세부 설치기준은 환경친화적 자동차 상위 조례 기준을 따릅니다."
      })
    ],
    "seoul-yongsan": [
      createSeoulOfficialRule({
        district: "용산구",
        ordinSeq: seq["용산구"],
        article: "제4조의4",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "공식 조문에 노상·노외 기준이 직접 규정돼 있습니다."
      }),
      createSeoulOfficialRule({
        district: "용산구",
        ordinSeq: seq["용산구"],
        article: "제21조의3",
        type: "family-care",
        label: "가족배려주차장",
        basis: "nonMechanical",
        basisLabel: "주차대수 규모",
        percent: 10,
        thresholdText: "기계식주차구획 제외 30대 이상 노상·노외·부설주차장",
        notes: "용산구 조례는 가족배려주차장의 이용대상과 위치기준을 함께 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "용산구",
        ordinSeq: seq["용산구"],
        article: "제4조의5",
        type: "ev-public",
        label: "전기자동차 주차구획",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 3,
        cap: 10,
        thresholdText: "주차면수 100면 이상 공영주차장·구 및 소속기관 청사 부설주차장",
        notes: "산정 결과가 10면을 초과하면 최대 설치면수는 10면입니다."
      })
    ],
    "seoul-eunpyeong": [
      createSeoulOfficialRule({
        district: "은평구",
        ordinSeq: seq["은평구"],
        article: "제4조의5",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "공식 조문에 노상·노외 기준이 직접 규정돼 있습니다."
      }),
      createSeoulOfficialRule({
        district: "은평구",
        ordinSeq: seq["은평구"],
        article: "제20조의3",
        type: "family-care",
        label: "가족배려주차장",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 10,
        thresholdText: "주차대수 규모 30대 이상 노상·노외·부설주차장",
        notes: "은평구 조례는 가족배려주차장의 이용대상도 함께 규정합니다."
      })
    ],
    "seoul-jongno": [
      createSeoulOfficialRule({
        district: "종로구",
        ordinSeq: seq["종로구"],
        article: "제11조의2",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상·노외 주차대수의 3%",
        notes: "종로구 조례는 노상·노외를 일괄해 3% 이상으로 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "종로구",
        ordinSeq: seq["종로구"],
        article: "제11조의2",
        type: "disabled-annex",
        label: "부설주차장 장애인전용주차구획",
        basis: "legal",
        basisLabel: "법정주차대수",
        percent: 3,
        thresholdText: "부설주차장 설치기준에 따른 주차대수 10대 이상 3%",
        notes: "공식 조문은 부설주차장 설치기준에 따른 주차대수를 기준으로 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "종로구",
        ordinSeq: seq["종로구"],
        article: "제11조의3",
        type: "family-care",
        label: "가족배려주차장",
        basis: "nonMechanical",
        basisLabel: "총주차대수",
        percent: 10,
        thresholdText: "기계식주차구획 제외 30대 이상 노상·노외·부설주차장",
        notes: "종로구 조례는 가족배려주차장의 이용대상도 함께 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "종로구",
        ordinSeq: seq["종로구"],
        article: "제11조의4",
        type: "eco-friendly",
        label: "환경친화적 자동차 전용주차구획",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 5,
        thresholdText: "주차면수 50면 이상 공영주차장",
        notes: "공식 조문에 총 주차대수의 5% 이상이 직접 규정돼 있습니다."
      })
    ],
    "seoul-junggu": [
      createSeoulOfficialRule({
        district: "중구",
        ordinSeq: seq["중구"],
        article: "제4조의4",
        type: "disabled-public",
        label: "노상·노외 장애인전용주차구획",
        basis: "planned",
        basisLabel: "주차대수",
        percent: 3,
        thresholdText: "노상 20~49대 1면 이상, 노상·노외 50대 이상 3%",
        notes: "공식 조문에 노상·노외 기준이 직접 규정돼 있습니다."
      }),
      createSeoulOfficialRule({
        district: "중구",
        ordinSeq: seq["중구"],
        article: "제4조의4",
        type: "disabled-annex",
        label: "부설주차장 장애인전용주차구획",
        basis: "legal",
        basisLabel: "법정주차대수",
        percent: 3,
        thresholdText: "부설주차장 주차대수 10대 이상 3%",
        notes: "공식 조문은 부설주차장 주차대수 10대 미만을 예외로 둡니다."
      })
    ],
    "seoul-jungnang": [
      createSeoulOfficialRule({
        district: "중랑구",
        ordinSeq: seq["중랑구"],
        article: "제23조의2",
        type: "disabled-annex",
        label: "부설주차장 장애인전용주차구획",
        basis: "legal",
        basisLabel: "법정주차대수",
        percent: 3,
        thresholdText: "부설주차장 설치기준에 따른 주차대수 10대 이상 3%",
        notes: "중랑구 조례는 부설주차장 기준을 직접 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "중랑구",
        ordinSeq: seq["중랑구"],
        article: "제23조",
        type: "family-care",
        label: "가족배려주차장",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 10,
        thresholdText: "주차대수 규모 30대 이상 노상·노외·부설주차장",
        notes: "중랑구 조례는 가족배려주차장의 이용대상도 함께 규정합니다."
      }),
      createSeoulOfficialRule({
        district: "중랑구",
        ordinSeq: seq["중랑구"],
        article: "제23조의3",
        type: "ev-public",
        label: "전기자동차 주차구획",
        basis: "planned",
        basisLabel: "총주차대수",
        percent: 5,
        thresholdText: "주차면수 50면 이상 공영주차장·구 및 소속기관 청사 부설주차장",
        notes: "공식 조문에 총 주차대수의 5% 이상이 직접 규정돼 있습니다."
      })
    ]
  };
}

Object.assign(RULE_LIBRARY, buildSeoulOfficialRuleLibrary());

function insertRuleAfterType(rules, anchorType, newRule) {
  if (!Array.isArray(rules)) {
    return;
  }

  const anchorIndex = rules.findIndex((rule) => rule.type === anchorType);
  if (anchorIndex === -1) {
    rules.push(newRule);
    return;
  }

  rules.splice(anchorIndex + 1, 0, newRule);
}

function createFamilyCareExpandedRule(familyRule, thresholdText, notes) {
  return {
    type: "family-care-expanded",
    label: "확장형 가족배려주차구획",
    basis: "derived",
    derivedFromType: "family-care",
    percent: 50,
    rounding: "ceil",
    sourceType: "official",
    basisLabel: "가족배려주차장 필요면수",
    thresholdText,
    legalBasis: familyRule.legalBasis,
    sourceUrl: familyRule.sourceUrl,
    notes
  };
}

function createOfficialNonRateSubtypeRule(sourceRule, type, label, thresholdText, notes) {
  return {
    type,
    label,
    basis: "none",
    rounding: "ceil",
    sourceType: "official",
    basisLabel: "정률 없음",
    customValueText: "정률 없음",
    thresholdText,
    legalBasis: sourceRule.legalBasis,
    sourceUrl: sourceRule.sourceUrl,
    notes
  };
}

function appendSeoulSubtypeRules() {
  const expandedProfiles = [
    "seoul-gangnam",
    "seoul-gangdong",
    "seoul-gangbuk",
    "seoul-gangseo",
    "seoul-gwanak",
    "seoul-gwangjin",
    "seoul-mapo",
    "seoul-nowon",
    "seoul-dobong",
    "seoul-seongdong",
    "seoul-seongbuk",
    "seoul-songpa",
    "seoul-yeongdeungpo",
    "seoul-yongsan",
    "seoul-eunpyeong",
    "seoul-jongno",
    "seoul-jungnang"
  ];

  expandedProfiles.forEach((profile) => {
    const rules = RULE_LIBRARY[profile];
    if (!Array.isArray(rules) || rules.some((rule) => rule.type === "family-care-expanded")) {
      return;
    }

    const familyRule = rules.find((rule) => rule.type === "family-care");
    if (!familyRule) {
      return;
    }

    insertRuleAfterType(
      rules,
      "family-care",
      createFamilyCareExpandedRule(
        familyRule,
        "확장형 주차구획을 설치하는 경우 가족배려주차구획의 50% 이상을 확장형으로 설치",
        "가족배려주차장 필요면수의 50% 이상을 확장형으로 다시 산정합니다."
      )
    );
  });

  const dongjakRules = RULE_LIBRARY["seoul-dongjak"];
  const dongjakFamilyRule = dongjakRules?.find((rule) => rule.type === "family-care");
  if (dongjakFamilyRule) {
    if (!dongjakRules.some((rule) => rule.type === "family-care-general")) {
      insertRuleAfterType(
        dongjakRules,
        "family-care",
        createOfficialNonRateSubtypeRule(
          dongjakFamilyRule,
          "family-care-general",
          "일반형 가족배려주차구획",
          "가족배려주차장은 일반형과 확장형으로 구분하여 표시",
          "별표 3의 가족배려주차장 마크를 일반형과 확장형으로 구분해 표시하도록 규정합니다."
        )
      );
    }

    if (!dongjakRules.some((rule) => rule.type === "family-care-expanded")) {
      insertRuleAfterType(
        dongjakRules,
        "family-care-general",
        createOfficialNonRateSubtypeRule(
          dongjakFamilyRule,
          "family-care-expanded",
          "확장형 가족배려주차구획",
          "가족배려주차장은 일반형과 확장형으로 구분하여 표시",
          "동작구 조례는 확장형 자체의 정률보다 일반형·확장형 구분 표시기준을 직접 둡니다."
        )
      );
    }
  }

  const songpaRules = RULE_LIBRARY["seoul-songpa"];
  if (Array.isArray(songpaRules) && !songpaRules.some((rule) => rule.type === "compact")) {
    songpaRules.push(
      createSeoulOfficialRule({
        district: "송파구",
        ordinSeq: SEOUL_DISTRICT_ORDIN_SEQ["송파구"],
        article: "제14조의7",
        type: "compact",
        label: "경형자동차 주차구획",
        basis: "planned",
        basisLabel: "총주차면수",
        percent: 3,
        cap: 10,
        thresholdText: "구청장이 설치한 100면 이상 노외주차장·공공기관 부설주차장",
        notes: "공식 조문은 총 주차면수의 3% 이상으로 하되 최대 설치면수는 10면으로 규정합니다."
      })
    );
  }
}

appendSeoulSubtypeRules();

const NATIONAL_REFERENCE_RULES = [
  {
    type: "expanded",
    label: "확장형 주차단위구획",
    basis: "planned",
    percent: 30,
    rounding: "ceil",
    sourceType: "reference",
    basisLabel: "총주차단위구획 수",
    thresholdText: "주차대수 50대 이상일 때 적용",
    legalBasis: "주차장법 시행규칙 제6조, 제11조",
    sourceUrl: "https://www.law.go.kr/",
    notes: "평행주차형식 제외, 상위법 참고 기준"
  },
  {
    type: "compact",
    label: "경형주차 산입 가능 대수",
    basis: "planned",
    percent: 10,
    rounding: "floor",
    sourceType: "reference",
    basisLabel: "전체 주차단위구획 수",
    thresholdText: "의무비율이 아니라 산입 가능 상한",
    legalBasis: "주차장법 시행령 별표 1",
    sourceUrl: "https://www.law.go.kr/",
    notes: "전체 주차단위구획 수의 10%까지 법정주차 산입 가능"
  },
  {
    type: "eco-friendly",
    label: "환경친화적 자동차 전용주차구역",
    basis: "planned",
    percent: 5,
    rounding: "round",
    sourceType: "reference",
    basisLabel: "총주차대수",
    thresholdText: "50면 이상 대상시설, 조례로 상향 가능",
    legalBasis: "환경친화적 자동차의 개발 및 보급 촉진에 관한 법률 시행령 제18조의6",
    sourceUrl: "https://www.law.go.kr/",
    notes: "지방조례가 5%보다 높게 정한 경우 그 조례 우선"
  }
];

const NATIONAL_SUBTYPE_REFERENCE_RULES = NATIONAL_REFERENCE_RULES.filter((rule) =>
  ["expanded", "compact"].includes(rule.type)
);

function cloneRule(rule, overrides = {}) {
  return {
    ...rule,
    ...overrides
  };
}

function getRuleIdentity(rule) {
  return [
    rule.type ?? "",
    rule.label ?? "",
    rule.legalBasis ?? "",
    rule.sourceType ?? "",
    rule.sourceUrl ?? "",
    rule.thresholdText ?? "",
    rule.customValueText ?? "",
    rule.derivedFromType ?? ""
  ].join("::");
}

function dedupeRules(rules) {
  const seen = new Set();
  return rules.filter((rule) => {
    const identity = getRuleIdentity(rule);
    if (seen.has(identity)) {
      return false;
    }

    seen.add(identity);
    return true;
  });
}

function isSeoulDistrictMatch(match) {
  return match?.group === "서울 자치구";
}

function buildSeoulSubtypeSupplementRules(profileRules) {
  const supplementRules = [];
  const seoulCityRules = RULE_LIBRARY["seoul-city"] ?? [];
  const seoulCityFamilyRule = seoulCityRules.find((rule) => rule.type === "family-care");
  const localFamilyRule = profileRules.find((rule) => rule.type === "family-care");

  if (localFamilyRule && !profileRules.some((rule) => rule.type === "family-care-expanded")) {
    supplementRules.push(
      createFamilyCareExpandedRule(
        localFamilyRule,
        "관할 조례상 가족배려주차장 필요면수의 50% 이상을 확장형으로 설치",
        "관할 조례의 가족배려주차장 산정 결과를 다시 기준으로 확장형 면수를 계산합니다."
      )
    );
    return supplementRules;
  }

  if (seoulCityFamilyRule && !profileRules.some((rule) => rule.type === "family-care-expanded")) {
    supplementRules.push(
      createFamilyCareExpandedRule(
        seoulCityFamilyRule,
        "서울시 본조례 기준으로 가족배려주차장 필요면수의 50% 이상을 확장형으로 설치",
        "관할 조례에 확장형 정률이 직접 없더라도 서울특별시 조례 기준을 함께 참고할 수 있도록 별도로 보여줍니다."
      )
    );
  }

  return supplementRules;
}

function buildDisplayRules(match, profileRules) {
  const directRules = profileRules.filter((rule) => rule.sourceType === "official" || rule.sourceType === "secondary");

  if (isSeoulDistrictMatch(match)) {
    return dedupeRules([
      ...directRules,
      ...buildSeoulSubtypeSupplementRules(directRules),
      ...NATIONAL_SUBTYPE_REFERENCE_RULES.map((rule) => cloneRule(rule))
    ]);
  }

  if (match?.ruleProfile === "seoul-city") {
    return dedupeRules([
      ...directRules,
      ...NATIONAL_SUBTYPE_REFERENCE_RULES.map((rule) => cloneRule(rule))
    ]);
  }

  return dedupeRules(directRules);
}

function buildRuleContextRules(match, profileRules, displayRules) {
  const contextRules = [...profileRules, ...displayRules];

  if (isSeoulDistrictMatch(match)) {
    const seoulCityFamilyRule = (RULE_LIBRARY["seoul-city"] ?? []).find((rule) => rule.type === "family-care");
    if (seoulCityFamilyRule) {
      contextRules.push(seoulCityFamilyRule);
    }
  }

  return dedupeRules(contextRules);
}

function getRuleSelectorNote(match) {
  if (isSeoulDistrictMatch(match)) {
    return "관할 조례·규칙을 우선 보여주고, 확장형·경형은 서울시 기준과 주차장법 참고 기준도 함께 나열합니다.";
  }

  if (match?.ruleProfile === "seoul-city") {
    return "서울특별시 본조례 규칙을 우선 보여주고, 확장형·경형은 주차장법 참고 기준을 함께 나열합니다.";
  }

  return "해당 관할 조례와 규칙에서 직접 확인한 주차유형만 나열합니다. 선택하면 아래 상세 설명이 해당 유형 기준으로 바뀝니다.";
}

const SEOUL_TRAFFIC_REVIEW_SOURCES = {
  overviewTitle: "서울시 교통영향평가 개요",
  overviewUrl: "https://news.seoul.go.kr/traffic/archives/31912?listPage=1",
  guidelineTitle: "서울특별시 교통영향평가 지침 시행 안내",
  guidelineUrl: "https://news.seoul.go.kr/traffic/archives/32373",
  ordinanceTitle: "서울특별시 교통영향평가에 관한 조례",
  ordinanceUrl: "https://www.law.go.kr/LSW/ordinInfoP.do?ordinSeq=1913205",
  decreeTitle: "도시교통정비 촉진법 시행령 별표 1",
  decreeUrl: "https://law.go.kr/LSW/flDownload.do?flSeq=41083380"
};

function createTrafficThreshold(metric, value, label, unit) {
  return { metric, value, label, unit };
}

const TRAFFIC_REVIEW_BUILDING_TYPES = [
  {
    id: "apartment",
    kind: "building",
    label: "공동주택(아파트)",
    thresholds: [createTrafficThreshold("grossFloorArea", 50000, "연면적", "㎡")],
    thresholdText: "연면적 50,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 1. 공동주택(아파트)"
  },
  {
    id: "first-neighborhood-clinic",
    kind: "building",
    label: "제1종 근린생활시설(의원·한의원)",
    thresholds: [createTrafficThreshold("grossFloorArea", 13000, "연면적", "㎡")],
    thresholdText: "연면적 13,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 2. 제1종 근린생활시설(의원, 한의원)"
  },
  {
    id: "first-neighborhood-other",
    kind: "building",
    label: "제1종 근린생활시설(기타)",
    thresholds: [createTrafficThreshold("grossFloorArea", 8000, "연면적", "㎡")],
    thresholdText: "연면적 8,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 2. 제1종 근린생활시설(기타)"
  },
  {
    id: "second-neighborhood",
    kind: "building",
    label: "제2종 근린생활시설",
    thresholds: [createTrafficThreshold("grossFloorArea", 8000, "연면적", "㎡")],
    thresholdText: "연면적 8,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 3. 제2종 근린생활시설"
  },
  {
    id: "culture-performance",
    kind: "building",
    label: "문화 및 집회시설(공연장·집회장·관람장)",
    thresholds: [createTrafficThreshold("grossFloorArea", 8000, "연면적", "㎡")],
    thresholdText: "연면적 8,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 4. 문화 및 집회시설(공연장, 집회장, 관람장)"
  },
  {
    id: "culture-wedding",
    kind: "building",
    label: "문화 및 집회시설(예식장)",
    thresholds: [createTrafficThreshold("grossFloorArea", 1500, "연면적", "㎡")],
    thresholdText: "연면적 1,500㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 4. 문화 및 집회시설(예식장)"
  },
  {
    id: "culture-exhibition",
    kind: "building",
    label: "문화 및 집회시설(전시장)",
    thresholds: [createTrafficThreshold("grossFloorArea", 8000, "연면적", "㎡")],
    thresholdText: "연면적 8,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 4. 문화 및 집회시설(전시장)"
  },
  {
    id: "culture-zoo",
    kind: "building",
    label: "문화 및 집회시설(동·식물원)",
    thresholds: [createTrafficThreshold("grossFloorArea", 17000, "연면적", "㎡")],
    thresholdText: "연면적 17,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 4. 문화 및 집회시설(동·식물원)"
  },
  {
    id: "religious-assembly",
    kind: "building",
    label: "종교시설(종교집회장)",
    thresholds: [createTrafficThreshold("grossFloorArea", 12000, "연면적", "㎡")],
    thresholdText: "연면적 12,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 5. 종교시설"
  },
  {
    id: "sales-wholesale",
    kind: "building",
    label: "판매시설(도매시장)",
    thresholds: [createTrafficThreshold("grossFloorArea", 8000, "연면적", "㎡")],
    thresholdText: "연면적 8,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 6. 판매시설(도매시장)"
  },
  {
    id: "sales-shop",
    kind: "building",
    label: "판매시설(상점)",
    thresholds: [createTrafficThreshold("grossFloorArea", 7000, "연면적", "㎡")],
    thresholdText: "연면적 7,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 6. 판매시설(상점)"
  },
  {
    id: "sales-discount",
    kind: "building",
    label: "판매시설(할인점·전문점·백화점·쇼핑센터)",
    thresholds: [createTrafficThreshold("grossFloorArea", 3000, "연면적", "㎡")],
    thresholdText: "연면적 3,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 6. 판매시설(할인점, 전문점, 백화점, 쇼핑센터)"
  },
  {
    id: "transport-terminal",
    kind: "building",
    label: "운수시설",
    thresholds: [createTrafficThreshold("grossFloorArea", 6000, "연면적", "㎡")],
    thresholdText: "연면적 6,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 7. 운수시설"
  },
  {
    id: "medical-hospital",
    kind: "building",
    label: "의료시설(병원)",
    thresholds: [createTrafficThreshold("grossFloorArea", 13000, "연면적", "㎡")],
    thresholdText: "연면적 13,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 8. 의료시설"
  },
  {
    id: "education-university",
    kind: "building",
    label: "교육연구시설(대학·대학교)",
    thresholds: [createTrafficThreshold("grossFloorArea", 80000, "연면적", "㎡")],
    thresholdText: "연면적 80,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 9. 교육연구시설(대학, 대학교)"
  },
  {
    id: "education-other",
    kind: "building",
    label: "교육연구시설(교육원·직업훈련소·학원·연구소·도서관)",
    thresholds: [createTrafficThreshold("grossFloorArea", 28000, "연면적", "㎡")],
    thresholdText: "연면적 28,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 9. 교육연구시설(교육원, 직업훈련소, 학원, 연구소, 도서관)"
  },
  {
    id: "sports-facility",
    kind: "building",
    label: "운동시설",
    thresholds: [
      createTrafficThreshold("grossFloorArea", 8000, "연면적", "㎡"),
      createTrafficThreshold("seats", 1700, "관람석", "석")
    ],
    thresholdText: "연면적 8,000㎡ 이상 또는 관람석 1,700석 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 10. 운동시설"
  },
  {
    id: "office-public",
    kind: "building",
    label: "업무시설(공공업무시설)",
    thresholds: [createTrafficThreshold("grossFloorArea", 6000, "연면적", "㎡")],
    thresholdText: "연면적 6,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 11. 업무시설(공공업무시설)"
  },
  {
    id: "office-general",
    kind: "building",
    label: "업무시설(일반업무시설)",
    thresholds: [createTrafficThreshold("grossFloorArea", 20000, "연면적", "㎡")],
    thresholdText: "연면적 20,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 11. 업무시설(일반업무시설)"
  },
  {
    id: "lodging",
    kind: "building",
    label: "숙박시설",
    thresholds: [createTrafficThreshold("grossFloorArea", 20000, "연면적", "㎡")],
    thresholdText: "연면적 20,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 12. 숙박시설"
  },
  {
    id: "entertainment-bar",
    kind: "building",
    label: "위락시설(주점·단란주점·유원시설업)",
    thresholds: [createTrafficThreshold("grossFloorArea", 7000, "연면적", "㎡")],
    thresholdText: "연면적 7,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 13. 위락시설(주점영업, 단란주점영업, 유원시설업)"
  },
  {
    id: "entertainment-casino",
    kind: "building",
    label: "위락시설(투전기업소·카지노업소·무도장·무도학원)",
    thresholds: [createTrafficThreshold("grossFloorArea", 4000, "연면적", "㎡")],
    thresholdText: "연면적 4,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 13. 위락시설(투전기업소, 카지노업소, 무도장, 무도학원)"
  },
  {
    id: "factory",
    kind: "building",
    label: "공장",
    thresholds: [createTrafficThreshold("grossFloorArea", 56000, "연면적", "㎡")],
    thresholdText: "연면적 56,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 14. 공장"
  },
  {
    id: "warehouse",
    kind: "building",
    label: "창고시설(창고·화물터미널·집배송시설)",
    thresholds: [createTrafficThreshold("grossFloorArea", 35000, "연면적", "㎡")],
    thresholdText: "연면적 35,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 15. 창고시설(창고, 화물터미널, 집배송시설)"
  },
  {
    id: "warehouse-yard",
    kind: "building",
    label: "창고시설(하역장)",
    thresholds: [createTrafficThreshold("grossFloorArea", 35000, "연면적", "㎡")],
    thresholdText: "연면적 35,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 15. 창고시설(하역장)"
  },
  {
    id: "auto-facility",
    kind: "building",
    label: "자동차 관련 시설(주차장·검사장·정비공장)",
    thresholds: [createTrafficThreshold("grossFloorArea", 10000, "연면적", "㎡")],
    thresholdText: "연면적 10,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 16. 자동차 관련 시설(주차장, 검사장, 정비공장)"
  },
  {
    id: "auto-market",
    kind: "building",
    label: "자동차 관련 시설(매매장)",
    thresholds: [
      createTrafficThreshold("grossFloorArea", 18000, "연면적", "㎡"),
      createTrafficThreshold("siteArea", 18000, "부지면적", "㎡")
    ],
    thresholdText: "연면적 18,000㎡ 이상 또는 부지면적 18,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 16. 자동차 관련 시설(매매장)"
  },
  {
    id: "broadcasting",
    kind: "building",
    label: "방송통신시설",
    thresholds: [createTrafficThreshold("grossFloorArea", 27000, "연면적", "㎡")],
    thresholdText: "연면적 27,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 17. 방송통신시설"
  },
  {
    id: "cemetery",
    kind: "building",
    label: "묘지 관련 시설",
    thresholds: [createTrafficThreshold("grossFloorArea", 6000, "연면적", "㎡")],
    thresholdText: "연면적 6,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 18. 묘지 관련 시설"
  },
  {
    id: "tourism-open-air",
    kind: "building",
    label: "관광휴게시설(야외음악당·야외극장)",
    thresholds: [createTrafficThreshold("grossFloorArea", 5000, "연면적", "㎡")],
    thresholdText: "연면적 5,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 19. 관광휴게시설(야외음악당, 야외극장)"
  },
  {
    id: "tourism-other",
    kind: "building",
    label: "관광휴게시설(어린이회관·관망탑·휴게소 등)",
    thresholds: [createTrafficThreshold("grossFloorArea", 15000, "연면적", "㎡")],
    thresholdText: "연면적 15,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 19. 관광휴게시설(어린이회관, 관망탑, 휴게소 및 부속시설)"
  },
  {
    id: "funeral",
    kind: "building",
    label: "장례식장",
    thresholds: [createTrafficThreshold("grossFloorArea", 3000, "연면적", "㎡")],
    thresholdText: "연면적 3,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 단일용도 20. 장례식장"
  },
  {
    id: "mixed-use-swa",
    kind: "building",
    label: "복합용도 건축물(Swa 자동 계산)",
    thresholds: [createTrafficThreshold("grossFloorArea", 10000, "Swa 합계", "㎡")],
    thresholdText: "계산식에 따라 계산한 건축 연면적의 합계(Swa) 10,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 건축물 복합용도",
    inputHint: "복합용도는 용도별 면적을 입력하면 공식식에 따라 Swa를 자동 계산합니다."
  }
].map((option) => ({
  ...option,
  sourceType: "official",
  sourceUrl: SEOUL_TRAFFIC_REVIEW_SOURCES.overviewUrl
}));

const TRAFFIC_REVIEW_DEVELOPMENT_TYPES = [
  {
    id: "urban-development",
    kind: "development",
    label: "도시개발사업",
    thresholds: [createTrafficThreshold("siteArea", 50000, "부지면적", "㎡")],
    thresholdText: "부지면적 50,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 개발사업 1. 도시개발사업"
  },
  {
    id: "maintenance-project",
    kind: "development",
    label: "정비사업",
    thresholds: [createTrafficThreshold("siteArea", 25000, "부지면적", "㎡")],
    thresholdText: "부지면적 25,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 개발사업 2. 정비사업"
  },
  {
    id: "city-facility-road",
    kind: "development",
    label: "도시계획시설사업(도로)",
    thresholds: [createTrafficThreshold("roadLength", 2.5, "도로 총연장", "km")],
    thresholdText: "도로 총연장 2.5km 이상",
    legalBasis: "서울시 교통영향평가 개요 > 개발사업 3. 도시계획시설사업 중 도로",
    fixedIntersections: 4,
    scopeText: "해당 도로와 직접 연결되는 가장 가까운 4개 교차로",
    guidelineBasis: "서울특별시 교통영향평가 지침 제5조제2항제2호"
  },
  {
    id: "city-facility-logistics",
    kind: "development",
    label: "도시계획시설사업(유통업무설비)",
    thresholds: [
      createTrafficThreshold("grossFloorArea", 7500, "연면적", "㎡"),
      createTrafficThreshold("siteArea", 27500, "부지면적", "㎡")
    ],
    thresholdText: "연면적 7,500㎡ 이상 또는 부지면적 27,500㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 개발사업 3. 도시계획시설사업 중 유통업무설비"
  },
  {
    id: "park",
    kind: "development",
    label: "공원",
    thresholds: [createTrafficThreshold("siteArea", 150000, "부지면적", "㎡")],
    thresholdText: "부지면적 150,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 개발사업 4. 공원"
  },
  {
    id: "amusement-park",
    kind: "development",
    label: "유원지",
    thresholds: [createTrafficThreshold("siteArea", 75000, "부지면적", "㎡")],
    thresholdText: "부지면적 75,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 개발사업 5. 유원지"
  },
  {
    id: "site-preparation",
    kind: "development",
    label: "대지조성사업",
    thresholds: [createTrafficThreshold("siteArea", 50000, "부지면적", "㎡")],
    thresholdText: "부지면적 50,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 개발사업 6. 대지조성사업"
  },
  {
    id: "housing-site",
    kind: "development",
    label: "택지개발사업·공공주택지구조성사업",
    thresholds: [createTrafficThreshold("siteArea", 50000, "부지면적", "㎡")],
    thresholdText: "부지면적 50,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 개발사업 7. 택지개발사업·공공주택지구조성사업"
  },
  {
    id: "logistics-complex",
    kind: "development",
    label: "물류단지개발사업",
    thresholds: [createTrafficThreshold("siteArea", 25000, "부지면적", "㎡")],
    thresholdText: "부지면적 25,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 개발사업 8. 물류단지개발사업"
  },
  {
    id: "logistics-terminal",
    kind: "development",
    label: "물류터미널·복합물류터미널",
    thresholds: [createTrafficThreshold("siteArea", 12500, "부지면적", "㎡")],
    thresholdText: "부지면적 12,500㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 개발사업 9. 물류터미널 및 복합물류터미널"
  },
  {
    id: "district-unit-plan",
    kind: "development",
    label: "도시지역 지구단위계획 결정",
    thresholds: [createTrafficThreshold("siteArea", 100000, "부지면적", "㎡")],
    thresholdText: "부지면적 100,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 개발사업 10. 도시지역 안의 지구단위계획 결정",
    advisoryThreshold: createTrafficThreshold("siteArea", 50000, "부지면적", "㎡"),
    advisoryNote: "부지면적 50,000㎡ 이상이면 서울시 교통영향평가 심의위원 2인 이상의 자문의견 반영 대상입니다."
  },
  {
    id: "station-area",
    kind: "development",
    label: "역세권개발사업",
    thresholds: [createTrafficThreshold("siteArea", 125000, "사업면적", "㎡")],
    thresholdText: "사업면적 125,000㎡ 이상",
    legalBasis: "서울시 교통영향평가 개요 > 개발사업 11. 역세권개발사업"
  }
].map((option) => ({
  ...option,
  sourceType: "official",
  sourceUrl: SEOUL_TRAFFIC_REVIEW_SOURCES.overviewUrl
}));

const TRAFFIC_REVIEW_BUILDING_TYPE_MAP = Object.fromEntries(
  TRAFFIC_REVIEW_BUILDING_TYPES.map((option) => [option.id, option])
);

const TRAFFIC_REVIEW_DEVELOPMENT_TYPE_MAP = Object.fromEntries(
  TRAFFIC_REVIEW_DEVELOPMENT_TYPES.map((option) => [option.id, option])
);

const TRAFFIC_REVIEW_MIXED_USE_COMPONENT_OPTIONS = TRAFFIC_REVIEW_BUILDING_TYPES
  .filter((option) => option.id !== "mixed-use-swa")
  .map((option) => ({
    id: option.id,
    label: option.label
  }));

const TRAFFIC_REVIEW_GYEONGGI_TOKENS = Object.keys(GYEONGGI_CITY_META);
const TRAFFIC_REVIEW_SEOUL_TOKENS = Object.keys(SEOUL_DISTRICT_META);
const TRAFFIC_REVIEW_GYEONGGI_TRAFFIC_ZONE_CITIES = ["여주시", "가평군", "연천군"];

const GYEONGGI_TRAFFIC_REVIEW_SOURCES = {
  ordinanceTitle: "경기도 교통영향평가 대상사업 및 범위에 관한 조례",
  ordinanceUrl: "https://www.gg.go.kr/bbs/boardView.do?bIdx=61371372&bcIdx=&bsIdx=802&menuId=3411&page=1",
  guidelineTitle: "경기도 교통영향평가 지침",
  guidelineUrl: "https://www.gg.go.kr/bbs/boardView.do?bIdx=61371377&bcIdx=&bsIdx=802&menuId=3411&page=1"
};

const NATIONAL_TRAFFIC_REVIEW_SOURCES = {
  decreeTitle: "도시교통정비 촉진법 시행령 별표 1",
  decreeUrl: "https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=280561&viewCls=lsRvsDocInfoR",
  guidelineTitle: "국토교통부 교통영향평가지침",
  guidelineUrl: "https://www.law.go.kr/LSW/admRulLsInfoP.do?admRulId=2002049&efYd=0"
};

const GYEONGGI_TRAFFIC_REVIEW_BUILDING_RULE_TABLE = {
  apartment: { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [36000, 50000, 90000] }], legalBasis: "경기도 조례 별표 2 > 건축물 1) 공동주택" },
  "first-neighborhood-clinic": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [13000, 18750, 37500] }], legalBasis: "경기도 조례 별표 2 > 건축물 2) 제1종 근린생활시설(의원, 한의원)" },
  "first-neighborhood-other": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [7500, 9000, 18000] }], legalBasis: "경기도 조례 별표 2 > 건축물 2) 제1종 근린생활시설(기타)" },
  "second-neighborhood": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [7500, 11250, 22500] }], legalBasis: "경기도 조례 별표 2 > 건축물 3) 제2종 근린생활시설" },
  "culture-performance": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [7500, 11250, 11250] }], legalBasis: "경기도 조례 별표 2 > 건축물 4) 문화 및 집회시설(공연장, 집회장, 관람장)" },
  "culture-wedding": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [1500, 2250, 4500] }], legalBasis: "경기도 조례 별표 2 > 건축물 4) 문화 및 집회시설(예식장)" },
  "culture-exhibition": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [8000, 11250, 22500] }], legalBasis: "경기도 조례 별표 2 > 건축물 4) 문화 및 집회시설(전시장)" },
  "culture-zoo": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [17000, 20000, 30000] }], legalBasis: "경기도 조례 별표 2 > 건축물 4) 문화 및 집회시설(동·식물원)" },
  "religious-assembly": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [10000, 11250, 22500] }], legalBasis: "경기도 조례 별표 2 > 건축물 5) 종교시설" },
  "sales-wholesale": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [6500, 9750, 19500] }], legalBasis: "경기도 조례 별표 2 > 건축물 6) 판매시설(도매시장)" },
  "sales-shop": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [5500, 8250, 16500] }], legalBasis: "경기도 조례 별표 2 > 건축물 6) 판매시설(상점)" },
  "sales-discount": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [3000, 4500, 9000] }], legalBasis: "경기도 조례 별표 2 > 건축물 6) 판매시설(할인점, 전문점, 백화점, 쇼핑센터)" },
  "transport-terminal": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [6000, 8250, 16500] }], legalBasis: "경기도 조례 별표 2 > 건축물 7) 운수시설" },
  "medical-hospital": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [12500, 18750, 37500] }], legalBasis: "경기도 조례 별표 2 > 건축물 8) 의료시설" },
  "education-university": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [50000, 75000, 150000] }], legalBasis: "경기도 조례 별표 2 > 건축물 9) 교육연구시설(대학, 대학교)" },
  "education-other": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [28000, 30000, 55500] }], legalBasis: "경기도 조례 별표 2 > 건축물 9) 교육연구시설(교육원, 직업훈련소, 학원, 연구소, 도서관)" },
  "sports-facility": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [7000, 8000, 15000] }, { metric: "seats", label: "관람석", unit: "석", values: [1500, 1700, 3000] }], legalBasis: "경기도 조례 별표 2 > 건축물 10) 운동시설" },
  "office-public": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [6000, 6000, 10500] }], legalBasis: "경기도 조례 별표 2 > 건축물 11) 업무시설(공공업무시설)" },
  "office-general": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [12500, 18750, 18750] }], legalBasis: "경기도 조례 별표 2 > 건축물 11) 업무시설(일반업무시설)" },
  lodging: { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [20000, 30000, 60000] }], legalBasis: "경기도 조례 별표 2 > 건축물 12) 숙박시설" },
  "entertainment-bar": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [7000, 8250, 16500] }], legalBasis: "경기도 조례 별표 2 > 건축물 13) 위락시설(주점영업, 단란주점영업, 유원시설업)" },
  "entertainment-casino": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [4000, 4500, 9000] }], legalBasis: "경기도 조례 별표 2 > 건축물 13) 위락시설(투전기업소, 카지노업소, 무도장, 무도학원)" },
  factory: { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [37500, 56250, null] }], legalBasis: "경기도 조례 별표 2 > 건축물 14) 공장" },
  warehouse: { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [27500, 41250, 41250] }], legalBasis: "경기도 조례 별표 2 > 건축물 15) 창고시설(창고, 물류터미널, 집배송시설)" },
  "warehouse-yard": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [35000, 41250, 41250] }], legalBasis: "경기도 조례 별표 2 > 건축물 15) 창고시설(하역장)" },
  "auto-facility": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [6500, 9750, 19500] }], legalBasis: "경기도 조례 별표 2 > 건축물 16) 자동차 관련 시설(주차장, 검사장, 정비공장)" },
  "auto-market": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [18000, 18750, 37500] }, { metric: "siteArea", label: "부지면적", unit: "㎡", values: [18000, 18750, 37500] }], legalBasis: "경기도 조례 별표 2 > 건축물 16) 자동차 관련 시설(매매장)" },
  broadcasting: { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [27000, 32250, 64500] }], legalBasis: "경기도 조례 별표 2 > 건축물 17) 방송통신시설" },
  cemetery: { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [6000, 9000, 18000] }], legalBasis: "경기도 조례 별표 2 > 건축물 18) 묘지 관련 시설" },
  "tourism-open-air": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [5000, 7500, 15000] }], legalBasis: "경기도 조례 별표 2 > 건축물 19) 관광휴게시설(야외음악당, 야외극장)" },
  "tourism-other": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [15000, 22500, 45000] }], legalBasis: "경기도 조례 별표 2 > 건축물 19) 관광휴게시설(어린이회관, 관망탑, 휴게소 등)" },
  funeral: { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [3000, 4500, 9000] }], legalBasis: "경기도 조례 별표 2 > 건축물 20) 장례시설" }
};

const GYEONGGI_TRAFFIC_REVIEW_DEVELOPMENT_RULE_TABLE = {
  "urban-development": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [50000] }], legalBasis: "경기도 조례 별표 2 > 개발사업 1) 도시개발사업" },
  "maintenance-project": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [25000] }], legalBasis: "경기도 조례 별표 2 > 개발사업 2) 정비사업" },
  "city-facility-road": { thresholdDefs: [{ metric: "roadLength", label: "도로 총연장", unit: "km", values: [2.5] }], legalBasis: "경기도 조례 별표 2 > 개발사업 3) 도시계획시설사업 중 도로", fixedIntersections: 4, scopeText: "해당 도로와 접속하는 가장 가까운 4개 교차로", guidelineBasis: "경기도 교통영향평가 지침 제5조제2항제3호" },
  "city-facility-logistics": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [7500] }, { metric: "siteArea", label: "부지면적", unit: "㎡", values: [27500] }], legalBasis: "경기도 조례 별표 2 > 개발사업 3) 도시계획시설사업 중 유통업무설비" },
  park: { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [150000] }], legalBasis: "경기도 조례 별표 2 > 개발사업 3) 도시계획시설사업 중 공원" },
  "amusement-park": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [75000] }], legalBasis: "경기도 조례 별표 2 > 개발사업 3) 도시계획시설사업 중 유원지" },
  "site-preparation": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [50000] }], legalBasis: "경기도 조례 별표 2 > 개발사업 4) 대지조성사업" },
  "housing-site": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [50000] }], legalBasis: "경기도 조례 별표 2 > 개발사업 5) 택지개발사업·공공주택지구조성사업" },
  "logistics-complex": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [25000] }], legalBasis: "경기도 조례 별표 2 > 개발사업 6) 물류단지개발사업" },
  "logistics-terminal": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [12500] }], legalBasis: "경기도 조례 별표 2 > 개발사업 7) 물류터미널 또는 복합물류터미널의 설치" },
  "district-unit-plan": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [50000] }], legalBasis: "경기도 조례 별표 2 > 개발사업 8) 지구단위계획에 관한 도시·군관리계획의 결정" },
  "station-area": { thresholdDefs: [{ metric: "siteArea", label: "사업면적", unit: "㎡", values: [125000] }], legalBasis: "경기도 조례 별표 2 > 개발사업 9) 역세권개발사업" }
};

const NATIONAL_TRAFFIC_REVIEW_BUILDING_RULE_TABLE = {
  apartment: { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [60000, 90000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 1) 공동주택" },
  "first-neighborhood-clinic": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [25000, 37500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 2) 제1종 근린생활시설(의원, 한의원)" },
  "first-neighborhood-other": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [12000, 18000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 2) 제1종 근린생활시설(기타)" },
  "second-neighborhood": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [15000, 22500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 3) 제2종 근린생활시설" },
  "culture-performance": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [15000, 22500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 4) 문화 및 집회시설(공연장, 집회장, 관람장)" },
  "culture-wedding": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [3000, 4500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 4) 문화 및 집회시설(예식장)" },
  "culture-exhibition": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [15000, 22500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 4) 문화 및 집회시설(전시장)" },
  "culture-zoo": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [20000, 30000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 4) 문화 및 집회시설(동·식물원)" },
  "religious-assembly": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [15000, 22500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 5) 종교시설" },
  "sales-wholesale": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [13000, 19500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 6) 판매시설(도매시장)" },
  "sales-shop": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [11000, 16500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 6) 판매시설(상점)" },
  "sales-discount": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [6000, 9000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 6) 판매시설(할인점, 전문점, 백화점, 쇼핑센터)" },
  "transport-terminal": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [11000, 16500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 7) 운수시설" },
  "medical-hospital": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [25000, 37500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 8) 의료시설" },
  "education-university": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [100000, 150000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 9) 교육연구시설(대학, 대학교)" },
  "education-other": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [37000, 55500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 9) 교육연구시설(교육원, 직업훈련소, 학원, 연구소, 도서관)" },
  "sports-facility": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [10000, 15000] }, { metric: "seats", label: "관람석", unit: "석", values: [2000, 3000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 10) 운동시설" },
  "office-public": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [7000, 10500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 11) 업무시설(공공업무시설)" },
  "office-general": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [25000, 37500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 11) 업무시설(일반업무시설)" },
  lodging: { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [40000, 60000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 12) 숙박시설" },
  "entertainment-bar": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [11000, 16500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 13) 위락시설(주점영업, 단란주점영업, 유원시설업 등)" },
  "entertainment-casino": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [6000, 9000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 13) 위락시설(투전기업소, 카지노업소, 무도장, 무도학원)" },
  factory: { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [75000, 112500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 14) 공장" },
  warehouse: { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [55000, 82500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 15) 창고시설(창고, 물류터미널, 집배송시설)" },
  "warehouse-yard": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [55000, 82500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 15) 창고시설(하역장)" },
  "auto-facility": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [13000, 19500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 16) 자동차 관련 시설(주차장, 검사장, 정비공장)" },
  "auto-market": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [25000, 37500] }, { metric: "siteArea", label: "부지면적", unit: "㎡", values: [25000, 37500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 16) 자동차 관련 시설(매매장)" },
  broadcasting: { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [43000, 64500] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 17) 방송통신시설" },
  cemetery: { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [12000, 18000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 18) 묘지 관련 시설" },
  "tourism-open-air": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [10000, 15000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 19) 관광휴게시설(야외음악당, 야외극장)" },
  "tourism-other": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [30000, 45000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 19) 관광휴게시설(어린이회관, 관망탑, 휴게소 등)" },
  funeral: { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [6000, 9000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 20) 장례시설" },
  "mixed-use-swa": { thresholdDefs: [{ metric: "grossFloorArea", label: "Swa 합계", unit: "㎡", values: [10000, 10000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 건축물 나. 복합용도의 건축물" }
};

const NATIONAL_TRAFFIC_REVIEW_DEVELOPMENT_RULE_TABLE = {
  "urban-development": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [100000, 100000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 개발사업 1) 도시개발사업" },
  "maintenance-project": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [50000, 50000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 개발사업 2) 정비사업" },
  "city-facility-road": { thresholdDefs: [{ metric: "roadLength", label: "도로 총연장", unit: "km", values: [5, 5] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 개발사업 3) 도시계획시설사업 중 도로", fixedIntersections: 4, scopeText: "해당 도로와 접속하는 가장 가까운 4개 교차로", guidelineBasis: "국토교통부 교통영향평가지침 제5조제2항제3호" },
  "city-facility-logistics": { thresholdDefs: [{ metric: "grossFloorArea", label: "연면적", unit: "㎡", values: [15000, 15000] }, { metric: "siteArea", label: "부지면적", unit: "㎡", values: [55000, 55000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 개발사업 3) 도시계획시설사업 중 유통업무설비" },
  park: { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [300000, 300000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 개발사업 3) 도시계획시설사업 중 공원" },
  "amusement-park": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [150000, 150000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 개발사업 3) 도시계획시설사업 중 유원지" },
  "site-preparation": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [100000, 100000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 개발사업 4) 대지조성사업" },
  "housing-site": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [100000, 100000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 개발사업 5) 택지개발사업·공공주택지구조성사업" },
  "logistics-complex": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [50000, 50000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 개발사업 6) 물류단지개발사업" },
  "logistics-terminal": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [25000, 25000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 개발사업 7) 물류터미널 또는 복합물류터미널의 설치" },
  "district-unit-plan": { thresholdDefs: [{ metric: "siteArea", label: "부지면적", unit: "㎡", values: [100000, 100000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 개발사업 8) 도시지역 내 지구단위계획 결정" },
  "station-area": { thresholdDefs: [{ metric: "siteArea", label: "사업면적", unit: "㎡", values: [250000, 250000] }], legalBasis: "도시교통정비 촉진법 시행령 별표 1 > 개발사업 10) 역세권개발사업" }
};

function buildTrafficThresholdsFromValues(thresholdDefs, valueIndex) {
  return thresholdDefs
    .map((definition) => {
      const hasSingleSharedValue = Array.isArray(definition.values) && definition.values.length === 1;
      const value = hasSingleSharedValue
        ? (definition.values[0] ?? null)
        : (definition.values[valueIndex] ?? null);
      return value == null ? null : createTrafficThreshold(definition.metric, value, definition.label, definition.unit);
    })
    .filter(Boolean);
}

function buildTrafficThresholdText(thresholds) {
  return thresholds.map((threshold) => `${threshold.label} ${formatTrafficValue(threshold.metric, threshold.value, threshold.unit)} 이상`).join(" 또는 ");
}

function materializeRegionalTrafficReviewOption(baseOption, ruleDefinition, thresholds, overrides = {}) {
  if (!ruleDefinition || thresholds.length === 0) {
    return null;
  }

  return {
    ...baseOption,
    ...overrides,
    thresholds,
    thresholdText: buildTrafficThresholdText(thresholds),
    legalBasis: ruleDefinition.legalBasis,
    fixedIntersections: ruleDefinition.fixedIntersections,
    scopeText: ruleDefinition.scopeText,
    guidelineBasis: ruleDefinition.guidelineBasis
  };
}

const form = document.getElementById("parking-form");
const addressInput = document.getElementById("shared-address");
const legalCountInput = document.getElementById("legal-count");
const plannedCountInput = document.getElementById("planned-count");
const nonMechanicalCountInput = document.getElementById("non-mechanical-count");
const matchSummary = document.getElementById("match-summary");
const ruleResults = document.getElementById("rule-results");
const trafficReviewForm = document.getElementById("traffic-review-form");
const trafficAddressInput = document.getElementById("shared-address");
const trafficProjectKindSelect = document.getElementById("traffic-project-kind");
const trafficBuildingTypeSelect = document.getElementById("traffic-building-type");
const trafficDevelopmentTypeSelect = document.getElementById("traffic-development-type");
const trafficGrossFloorAreaInput = document.getElementById("traffic-gross-floor-area");
const trafficSiteAreaInput = document.getElementById("traffic-site-area");
const trafficSeatsInput = document.getElementById("traffic-seats");
const trafficRoadLengthInput = document.getElementById("traffic-road-length");
const trafficReviewSummary = document.getElementById("traffic-review-summary");
const trafficReviewResults = document.getElementById("traffic-review-results");
const trafficBuildingField = document.querySelector('[data-traffic-field="building-type"]');
const trafficDevelopmentField = document.querySelector('[data-traffic-field="development-type"]');
const trafficMixedUseBuilder = document.getElementById("traffic-mixed-use-builder");
const trafficMixedUseRows = document.getElementById("traffic-mixed-use-rows");
const trafficMixedUseAddButton = document.getElementById("traffic-mixed-use-add");
const trafficGrossFloorAreaField = trafficGrossFloorAreaInput?.closest("label");
const trafficSiteAreaField = trafficSiteAreaInput?.closest("label");
const trafficSeatsField = trafficSeatsInput?.closest("label");
const trafficGrossFloorAreaLabel = trafficGrossFloorAreaField?.querySelector("span");
const trafficRoadLengthField = trafficRoadLengthInput?.closest("label");
const directoryRoot = document.getElementById("directory-root");
const directoryFilter = document.getElementById("directory-filter");
const directoryCountEl = document.getElementById("directory-count");
const ruleCountEl = document.getElementById("rule-count");
const modeButtons = Array.from(document.querySelectorAll("[data-workspace-mode]"));
const screenPanels = Array.from(document.querySelectorAll("[data-screen]"));
let currentRuleSelection = null;
let currentWorkspaceMode = "parking-laws";

if (directoryCountEl) {
  directoryCountEl.textContent = String(ORDINANCE_DIRECTORY.length);
}

if (ruleCountEl) {
  ruleCountEl.textContent = String(
    Object.values(RULE_LIBRARY).reduce((sum, list) => sum + list.length, 0) + NATIONAL_REFERENCE_RULES.length
  );
}

renderDirectory("");
populateTrafficReviewOptions();
syncTrafficReviewForm();

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setWorkspaceMode(button.dataset.workspaceMode);
  });
});

setWorkspaceMode(currentWorkspaceMode);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (currentWorkspaceMode !== "parking-laws") {
    return;
  }
  renderComputation();
});

if (trafficReviewForm) {
  trafficReviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    renderTrafficReview();
  });
}

if (trafficProjectKindSelect) {
  trafficProjectKindSelect.addEventListener("change", () => {
    syncTrafficReviewForm();
  });
}

if (trafficBuildingTypeSelect) {
  trafficBuildingTypeSelect.addEventListener("change", () => {
    syncTrafficReviewForm();
  });
}

if (trafficDevelopmentTypeSelect) {
  trafficDevelopmentTypeSelect.addEventListener("change", () => {
    syncTrafficReviewForm();
  });
}

if (trafficMixedUseAddButton) {
  trafficMixedUseAddButton.addEventListener("click", () => {
    addTrafficMixedUseRow();
  });
}

if (trafficMixedUseRows) {
  trafficMixedUseRows.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-mixed-use-remove]");
    if (!removeButton) {
      return;
    }

    const removeIndex = Number(removeButton.dataset.mixedUseRemove);
    if (!Number.isInteger(removeIndex)) {
      return;
    }

    const nextEntries = collectTrafficReviewMixedUseEntries().filter((_, index) => index !== removeIndex);
    renderTrafficMixedUseRows(nextEntries.length > 0 ? nextEntries : [createDefaultTrafficMixedUseEntry()]);
  });

  trafficMixedUseRows.addEventListener("change", (event) => {
    if (!event.target.matches("[data-mixed-use-type]")) {
      return;
    }

    renderTrafficMixedUseRows(collectTrafficReviewMixedUseEntries());
  });
}

directoryFilter.addEventListener("input", (event) => {
  renderDirectory(event.target.value.trim());
});

ruleResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rule-index]");
  if (!button || !currentRuleSelection) {
    return;
  }

  const index = Number(button.dataset.ruleIndex);
  if (!Number.isInteger(index)) {
    return;
  }

  updateSelectedRule(index);
});

function setWorkspaceMode(mode) {
  currentWorkspaceMode = mode === "traffic-review" ? "traffic-review" : "parking-laws";

  modeButtons.forEach((button) => {
    const isActive = button.dataset.workspaceMode === currentWorkspaceMode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  screenPanels.forEach((panel) => {
    panel.hidden = panel.dataset.screen !== currentWorkspaceMode;
  });

  if (currentWorkspaceMode === "traffic-review") {
    syncTrafficReviewForm();
  }
}

function populateTrafficReviewOptions() {
  if (trafficBuildingTypeSelect) {
    trafficBuildingTypeSelect.innerHTML = TRAFFIC_REVIEW_BUILDING_TYPES.map((option) => `
      <option value="${option.id}">${option.label}</option>
    `).join("");
  }

  if (trafficDevelopmentTypeSelect) {
    trafficDevelopmentTypeSelect.innerHTML = TRAFFIC_REVIEW_DEVELOPMENT_TYPES.map((option) => `
      <option value="${option.id}">${option.label}</option>
    `).join("");
  }
}

function syncTrafficReviewForm() {
  const isDevelopment = trafficProjectKindSelect?.value === "development";
  const option = getSelectedTrafficReviewOption();
  const classification = classifyTrafficReviewAddressV2(trafficAddressInput?.value.trim() ?? "");
  const activeOptions = getTrafficReviewActiveOptions(option, classification);
  const usesSwaValue = [option, ...activeOptions].some((candidate) => candidate?.id === "mixed-use-swa");
  const usesMixedUseBuilder = !isDevelopment && option?.id === "mixed-use-swa";
  const thresholdMetrics = new Set(
    (activeOptions.length > 0 ? activeOptions : option ? [option] : [])
      .flatMap((candidate) => candidate.thresholds.map((threshold) => threshold.metric))
  );
  const usesGrossFloorArea = thresholdMetrics.has("grossFloorArea");
  const usesSiteArea = thresholdMetrics.has("siteArea");
  const usesSeats = thresholdMetrics.has("seats");
  const usesRoadLength = thresholdMetrics.has("roadLength");

  if (trafficBuildingField) {
    trafficBuildingField.hidden = isDevelopment;
    trafficBuildingField.style.display = isDevelopment ? "none" : "";
    trafficBuildingField.setAttribute("aria-hidden", String(isDevelopment));
  }

  if (trafficDevelopmentField) {
    trafficDevelopmentField.hidden = !isDevelopment;
    trafficDevelopmentField.style.display = isDevelopment ? "" : "none";
    trafficDevelopmentField.setAttribute("aria-hidden", String(!isDevelopment));
  }

  if (trafficBuildingTypeSelect) {
    trafficBuildingTypeSelect.disabled = isDevelopment;
  }

  if (trafficDevelopmentTypeSelect) {
    trafficDevelopmentTypeSelect.disabled = !isDevelopment;
  }

  if (trafficGrossFloorAreaLabel) {
    trafficGrossFloorAreaLabel.textContent = usesSwaValue ? "Swa 값(㎡)" : "건축 연면적(㎡)";
  }

  if (trafficGrossFloorAreaInput) {
    trafficGrossFloorAreaInput.placeholder = usesSwaValue ? "예: 12000" : "예: 12000";
  }

  setTrafficInputFieldVisibility(trafficGrossFloorAreaField, trafficGrossFloorAreaInput, usesGrossFloorArea && !usesMixedUseBuilder);
  setTrafficInputFieldVisibility(trafficSiteAreaField, trafficSiteAreaInput, usesSiteArea);
  setTrafficInputFieldVisibility(trafficSeatsField, trafficSeatsInput, usesSeats);
  setTrafficInputFieldVisibility(trafficRoadLengthField, trafficRoadLengthInput, usesRoadLength);
  setTrafficBlockVisibility(trafficMixedUseBuilder, usesMixedUseBuilder);

  if (usesMixedUseBuilder) {
    ensureTrafficMixedUseRows();
  }

  if (currentWorkspaceMode === "traffic-review" && trafficReviewSummary?.classList.contains("empty") && option?.inputHint) {
    trafficReviewSummary.textContent = option.inputHint;
  }
}

function setTrafficInputFieldVisibility(field, input, isVisible) {
  if (field) {
    field.hidden = !isVisible;
    field.style.display = isVisible ? "" : "none";
    field.setAttribute("aria-hidden", String(!isVisible));
  }

  if (input) {
    input.disabled = !isVisible;
  }
}

function setTrafficBlockVisibility(block, isVisible) {
  if (!block) {
    return;
  }

  block.hidden = !isVisible;
  block.style.display = isVisible ? "" : "none";
  block.setAttribute("aria-hidden", String(!isVisible));
}

function getSelectedTrafficReviewOption() {
  if (trafficProjectKindSelect?.value === "development") {
    return TRAFFIC_REVIEW_DEVELOPMENT_TYPE_MAP[trafficDevelopmentTypeSelect?.value]
      ?? TRAFFIC_REVIEW_DEVELOPMENT_TYPES[0]
      ?? null;
  }

  return TRAFFIC_REVIEW_BUILDING_TYPE_MAP[trafficBuildingTypeSelect?.value]
    ?? TRAFFIC_REVIEW_BUILDING_TYPES[0]
    ?? null;
}

function classifyTrafficReviewAddress(address) {
  const compact = compactTrafficText(address);

  if (!compact) {
    return {
      areaType: "unknown",
      zoneLabel: "판정 전",
      jurisdictionLabel: "주소 입력 필요",
      supported: false,
      note: "서울 주소는 도시교통정비지역으로 계산하고, 경기·인천 주소는 우선 교통권역으로 판정합니다."
    };
  }

  if (
    compact.startsWith("서울")
    || compact.includes("서울특별시")
    || compact.includes("서울시")
    || includesCompactToken(compact, TRAFFIC_REVIEW_SEOUL_TOKENS)
  ) {
    return {
      areaType: "urban-maintenance",
      zoneLabel: "도시교통정비지역",
      jurisdictionLabel: "서울특별시",
      supported: true,
      note: "서울시 공식 대상 기준과 서울시 지침의 교차로 산정 기준을 바로 적용합니다."
    };
  }

  if (
    compact.startsWith("경기")
    || compact.includes("경기도")
    || compact.startsWith("인천")
    || compact.includes("인천광역시")
    || compact.includes("인천시")
    || includesCompactToken(compact, TRAFFIC_REVIEW_GYEONGGI_TOKENS)
  ) {
    return {
      areaType: "traffic-zone",
      zoneLabel: "교통권역",
      jurisdictionLabel: compact.includes("인천") ? "인천광역시" : "수도권(경기도권역)",
      supported: false,
      note: "주소 판정은 교통권역으로 잡았고, 서울 외 권역의 세부 계산식은 다음 단계에서 확장할 수 있도록 구조를 준비했습니다."
    };
  }

  return {
    areaType: "unknown",
    zoneLabel: "판정 필요",
    jurisdictionLabel: "주소 확인 필요",
    supported: false,
    note: "광역시·도 또는 시·군·구가 드러나도록 주소를 더 구체적으로 입력해 주세요."
  };
}

function compactTrafficText(value) {
  return String(value ?? "").replace(/\s+/g, "");
}

function includesCompactToken(compactText, tokens) {
  return tokens.some((token) => compactText.includes(compactTrafficText(token)));
}

function classifyTrafficReviewAddressV2(address) {
  const compact = compactTrafficText(address);

  if (!compact) {
    return {
      areaType: "unknown",
      zoneLabel: "판정 전",
      jurisdictionLabel: "주소 입력 필요",
      supported: false,
      note: "서울과 경기도 주소는 지자체 기준과 국가 기준을 함께 계산합니다.",
      localScheme: null,
      localScopeLabel: "",
      localSchemeLabel: "",
      nationalAreaType: null,
      nationalAreaLabel: "",
      nationalSchemeLabel: "도시교통정비 촉진법 기준"
    };
  }

  if (
    compact.startsWith("서울")
    || compact.includes("서울특별시")
    || compact.includes("서울시")
    || includesCompactToken(compact, TRAFFIC_REVIEW_SEOUL_TOKENS)
  ) {
    return {
      areaType: "urban-maintenance",
      zoneLabel: "서울특별시",
      jurisdictionLabel: "서울특별시",
      supported: true,
      note: "서울시 조례·지침 기준과 도시교통정비 촉진법 기준을 함께 계산합니다.",
      localScheme: "seoul",
      localScopeLabel: "서울특별시",
      localSchemeLabel: "서울시 조례·지침 기준",
      nationalAreaType: "urban",
      nationalAreaLabel: "도시교통정비지역",
      nationalSchemeLabel: "도시교통정비 촉진법 기준"
    };
  }

  const matchedGyeonggiCity = findMatchingCompactTokenV2(compact, TRAFFIC_REVIEW_GYEONGGI_TOKENS);
  if (compact.startsWith("경기") || compact.includes("경기도") || matchedGyeonggiCity) {
    const gyeonggiZone = resolveGyeonggiTrafficZoneV2(compact, matchedGyeonggiCity);
    if (!gyeonggiZone) {
      return {
        areaType: "unknown",
        zoneLabel: "경기도 세부권역 확인 필요",
        jurisdictionLabel: matchedGyeonggiCity ?? "경기도",
        supported: false,
        note: "경기도 주소는 읍·면·동까지 입력해야 제1·2·3권역을 정확히 판정할 수 있습니다.",
        localScheme: "gyeonggi",
        localScopeLabel: "",
        localSchemeLabel: "경기도 조례·지침 기준",
        nationalAreaType: null,
        nationalAreaLabel: "",
        nationalSchemeLabel: "도시교통정비 촉진법 기준"
      };
    }

    return {
      areaType: "gyeonggi",
      zoneLabel: gyeonggiZone.zoneLabel,
      jurisdictionLabel: matchedGyeonggiCity ?? "경기도",
      supported: true,
      note: `${gyeonggiZone.zoneLabel}과 국가 기준 ${gyeonggiZone.nationalAreaLabel}을 함께 계산합니다.`,
      localScheme: "gyeonggi",
      localScopeLabel: gyeonggiZone.zoneLabel,
      localSchemeLabel: "경기도 조례·지침 기준",
      nationalAreaType: gyeonggiZone.nationalAreaType,
      nationalAreaLabel: gyeonggiZone.nationalAreaLabel,
      nationalSchemeLabel: "도시교통정비 촉진법 기준",
      gyeonggiZoneKey: gyeonggiZone.zoneKey
    };
  }

  return {
    areaType: "unknown",
    zoneLabel: "판정 필요",
    jurisdictionLabel: "주소 확인 필요",
    supported: false,
    note: "서울특별시 또는 경기도 주소를 읍·면·동까지 포함해 입력해 주세요.",
    localScheme: null,
    localScopeLabel: "",
    localSchemeLabel: "",
    nationalAreaType: null,
    nationalAreaLabel: "",
    nationalSchemeLabel: "도시교통정비 촉진법 기준"
  };
}

function findMatchingCompactTokenV2(compactText, tokens) {
  return [...tokens]
    .sort((left, right) => right.length - left.length)
    .find((token) => compactText.includes(compactTrafficText(token))) ?? null;
}

function resolveGyeonggiTrafficZoneV2(compactAddress, matchedCity) {
  const city = matchedCity ?? findMatchingCompactTokenV2(compactAddress, TRAFFIC_REVIEW_GYEONGGI_TOKENS);
  if (!city) {
    return null;
  }

  const isTrafficZoneCity = TRAFFIC_REVIEW_GYEONGGI_TRAFFIC_ZONE_CITIES.includes(city);
  const hasMyeon = compactAddress.includes("면");
  const hasEupOrDong = compactAddress.includes("읍") || compactAddress.includes("동");
  const looksLikeUrbanAddress = compactAddress.includes("구") || compactAddress.includes("로") || compactAddress.includes("길");

  if (!hasMyeon && !hasEupOrDong && !(looksLikeUrbanAddress && !isTrafficZoneCity)) {
    return null;
  }

  if (isTrafficZoneCity) {
    return hasMyeon
      ? { zoneKey: "zone3", zoneLabel: "경기도 제3권역", nationalAreaType: "zone", nationalAreaLabel: "교통권역" }
      : { zoneKey: "zone2", zoneLabel: "경기도 제2권역", nationalAreaType: "zone", nationalAreaLabel: "교통권역" };
  }

  return hasMyeon
    ? { zoneKey: "zone2", zoneLabel: "경기도 제2권역", nationalAreaType: "urban", nationalAreaLabel: "도시교통정비지역" }
    : { zoneKey: "zone1", zoneLabel: "경기도 제1권역", nationalAreaType: "urban", nationalAreaLabel: "도시교통정비지역" };
}

function getTrafficReviewActiveOptions(baseOption = getSelectedTrafficReviewOption(), classification = classifyTrafficReviewAddressV2(trafficAddressInput?.value.trim() ?? "")) {
  if (!baseOption) {
    return [];
  }

  const options = [];
  const localOption = resolveLocalTrafficReviewOptionV2(baseOption, classification);
  const nationalOption = resolveNationalTrafficReviewOptionV2(baseOption, classification);

  if (localOption) {
    options.push(localOption);
  }

  if (nationalOption) {
    options.push(nationalOption);
  }

  return options;
}

function resolveLocalTrafficReviewOptionV2(baseOption, classification) {
  if (!baseOption || !classification.localScheme) {
    return null;
  }

  if (classification.localScheme === "seoul") {
    const sourceOption = baseOption.kind === "development"
      ? TRAFFIC_REVIEW_DEVELOPMENT_TYPE_MAP[baseOption.id]
      : TRAFFIC_REVIEW_BUILDING_TYPE_MAP[baseOption.id];

    if (!sourceOption) {
      return null;
    }

    return {
      ...sourceOption,
      sourceSet: SEOUL_TRAFFIC_REVIEW_SOURCES,
      comparisonLabel: classification.localSchemeLabel,
      scopeLabel: classification.localScopeLabel,
      scopeCategoryLabel: "서울특별시",
      planProfile: "seoul-local"
    };
  }

  return materializeGyeonggiTrafficReviewOptionV2(baseOption, classification.gyeonggiZoneKey);
}

function materializeGyeonggiTrafficReviewOptionV2(baseOption, zoneKey) {
  const ruleTable = baseOption.kind === "development"
    ? GYEONGGI_TRAFFIC_REVIEW_DEVELOPMENT_RULE_TABLE
    : GYEONGGI_TRAFFIC_REVIEW_BUILDING_RULE_TABLE;
  const ruleDefinition = ruleTable[baseOption.id];
  const zoneIndex = { zone1: 0, zone2: 1, zone3: 2 }[zoneKey];

  if (zoneIndex == null) {
    return null;
  }

  const thresholds = buildTrafficThresholdsFromValues(ruleDefinition?.thresholdDefs ?? [], zoneIndex);
  return materializeRegionalTrafficReviewOption(baseOption, ruleDefinition, thresholds, {
    sourceType: "official",
    sourceUrl: GYEONGGI_TRAFFIC_REVIEW_SOURCES.ordinanceUrl,
    sourceSet: GYEONGGI_TRAFFIC_REVIEW_SOURCES,
    zoneKey,
    comparisonLabel: "경기도 조례·지침 기준",
    scopeLabel: zoneKey === "zone1" ? "경기도 제1권역" : zoneKey === "zone2" ? "경기도 제2권역" : "경기도 제3권역",
    scopeCategoryLabel: zoneKey === "zone1" ? "도시교통정비지역 읍·동" : zoneKey === "zone2" ? "도시교통정비지역 면 또는 교통권역 읍·동" : "교통권역 면",
    planProfile: "gyeonggi-local"
  });
}

function resolveNationalTrafficReviewOptionV2(baseOption, classification) {
  if (!baseOption || !classification.nationalAreaType) {
    return null;
  }

  const ruleTable = baseOption.kind === "development"
    ? NATIONAL_TRAFFIC_REVIEW_DEVELOPMENT_RULE_TABLE
    : NATIONAL_TRAFFIC_REVIEW_BUILDING_RULE_TABLE;
  const ruleDefinition = ruleTable[baseOption.id];
  const areaIndex = classification.nationalAreaType === "zone" ? 1 : 0;
  const thresholds = buildTrafficThresholdsFromValues(ruleDefinition?.thresholdDefs ?? [], areaIndex);

  return materializeRegionalTrafficReviewOption(baseOption, ruleDefinition, thresholds, {
    sourceType: "official",
    sourceUrl: NATIONAL_TRAFFIC_REVIEW_SOURCES.decreeUrl,
    sourceSet: NATIONAL_TRAFFIC_REVIEW_SOURCES,
    comparisonLabel: classification.nationalSchemeLabel,
    scopeLabel: classification.nationalAreaLabel,
    scopeCategoryLabel: classification.nationalAreaLabel,
    planProfile: "national",
    relaxationNote: classification.nationalAreaType === "zone"
      ? "교통권역은 국토교통부 교통영향평가지침 제5조제3항에 따라 공간적 범위를 2분의 1 범위 이내에서 완화할 수 있습니다."
      : ""
  });
}

function collectTrafficReviewInputs() {
  return {
    grossFloorArea: parseNumber(trafficGrossFloorAreaInput?.value),
    siteArea: parseNumber(trafficSiteAreaInput?.value),
    seats: parseNumber(trafficSeatsInput?.value),
    roadLength: parseNumber(trafficRoadLengthInput?.value),
    mixedUseEntries: collectTrafficReviewMixedUseEntries()
  };
}

function createDefaultTrafficMixedUseEntry() {
  return {
    typeId: TRAFFIC_REVIEW_MIXED_USE_COMPONENT_OPTIONS[0]?.id ?? "",
    areaValue: null
  };
}

function ensureTrafficMixedUseRows() {
  if (!trafficMixedUseRows || trafficMixedUseRows.children.length > 0) {
    return;
  }

  renderTrafficMixedUseRows([createDefaultTrafficMixedUseEntry()]);
}

function addTrafficMixedUseRow() {
  const nextEntries = collectTrafficReviewMixedUseEntries();
  nextEntries.push(createDefaultTrafficMixedUseEntry());
  renderTrafficMixedUseRows(nextEntries);
}

function collectTrafficReviewMixedUseEntries() {
  if (!trafficMixedUseRows) {
    return [];
  }

  return Array.from(trafficMixedUseRows.querySelectorAll("[data-mixed-use-row]")).map((row) => ({
    typeId: row.querySelector("[data-mixed-use-type]")?.value ?? createDefaultTrafficMixedUseEntry().typeId,
    areaValue: parseNumber(row.querySelector("[data-mixed-use-area]")?.value)
  }));
}

function renderTrafficMixedUseRows(entries) {
  if (!trafficMixedUseRows) {
    return;
  }

  trafficMixedUseRows.innerHTML = entries.map((entry, index) => {
    const typeId = entry.typeId || createDefaultTrafficMixedUseEntry().typeId;
    const display = resolveTrafficMixedUseDisplayInfo(typeId);
    const optionsHtml = TRAFFIC_REVIEW_MIXED_USE_COMPONENT_OPTIONS.map((option) => `
      <option value="${option.id}" ${option.id === typeId ? "selected" : ""}>${option.label}</option>
    `).join("");

    return `
      <div class="traffic-mixed-use-row" data-mixed-use-row>
        <label>
          <span>용도 ${index + 1}</span>
          <select data-mixed-use-type>${optionsHtml}</select>
        </label>
        <label>
          <span>${display.inputLabel}</span>
          <input data-mixed-use-area type="number" min="0" step="1" placeholder="예: 5000" value="${entry.areaValue ?? ""}">
        </label>
        <span class="badge reference">${display.metricHint}</span>
        <button type="button" class="traffic-mini-action" data-mixed-use-remove="${index}">삭제</button>
      </div>
    `;
  }).join("");
}

function resolveTrafficMixedUseDisplayInfo(typeId) {
  const metrics = new Set(
    [
      ...(TRAFFIC_REVIEW_BUILDING_TYPE_MAP[typeId]?.thresholds ?? []),
      ...((GYEONGGI_TRAFFIC_REVIEW_BUILDING_RULE_TABLE[typeId]?.thresholdDefs ?? []).map((threshold) => ({ metric: threshold.metric }))),
      ...((NATIONAL_TRAFFIC_REVIEW_BUILDING_RULE_TABLE[typeId]?.thresholdDefs ?? []).map((threshold) => ({ metric: threshold.metric })))
    ]
      .filter((threshold) => threshold.metric === "grossFloorArea" || threshold.metric === "siteArea")
      .map((threshold) => threshold.metric)
  );
  const hasGrossFloorArea = metrics.has("grossFloorArea");
  const hasSiteArea = metrics.has("siteArea");

  if (hasGrossFloorArea && hasSiteArea) {
    return { inputLabel: "면적 입력(㎡)", metricHint: "연면적 또는 부지면적 기준" };
  }

  if (hasSiteArea) {
    return { inputLabel: "부지면적 입력(㎡)", metricHint: "부지면적 기준" };
  }

  if (typeId === "sports-facility") {
    return { inputLabel: "연면적 입력(㎡)", metricHint: "연면적 기준(관람석 제외)" };
  }

  return { inputLabel: "연면적 입력(㎡)", metricHint: "연면적 기준" };
}

function selectTrafficMixedUseEligibleThresholds(thresholds) {
  return thresholds.filter((threshold) => threshold.metric === "grossFloorArea" || threshold.metric === "siteArea");
}

function pickTrafficMixedUseThreshold(thresholds) {
  return [...selectTrafficMixedUseEligibleThresholds(thresholds)].sort((left, right) => {
    const leftPriority = left.metric === "grossFloorArea" ? 0 : 1;
    const rightPriority = right.metric === "grossFloorArea" ? 0 : 1;
    return leftPriority - rightPriority;
  })[0] ?? null;
}

function resolveTrafficMixedUseThresholdByOption(typeId, option, classification) {
  if (!typeId || !option) {
    return null;
  }

  if (option.planProfile === "gyeonggi-local") {
    const zoneIndex = { zone1: 0, zone2: 1, zone3: 2 }[option.zoneKey ?? classification.gyeonggiZoneKey];
    const ruleDefinition = GYEONGGI_TRAFFIC_REVIEW_BUILDING_RULE_TABLE[typeId];
    return pickTrafficMixedUseThreshold(buildTrafficThresholdsFromValues(ruleDefinition?.thresholdDefs ?? [], zoneIndex));
  }

  if (option.planProfile === "national") {
    const areaIndex = classification.nationalAreaType === "zone" ? 1 : 0;
    const ruleDefinition = NATIONAL_TRAFFIC_REVIEW_BUILDING_RULE_TABLE[typeId];
    return pickTrafficMixedUseThreshold(buildTrafficThresholdsFromValues(ruleDefinition?.thresholdDefs ?? [], areaIndex));
  }

  return pickTrafficMixedUseThreshold(TRAFFIC_REVIEW_BUILDING_TYPE_MAP[typeId]?.thresholds ?? []);
}

function computeTrafficMixedUseInputs(option, classification, entries) {
  const items = entries.map((entry) => {
    const threshold = resolveTrafficMixedUseThresholdByOption(entry.typeId, option, classification);
    const hasInput = typeof entry.areaValue === "number";
    const contribution = hasInput && threshold ? (entry.areaValue / threshold.value) * 10000 : null;

    return {
      ...entry,
      label: TRAFFIC_REVIEW_BUILDING_TYPE_MAP[entry.typeId]?.label ?? entry.typeId,
      threshold,
      hasInput,
      contribution
    };
  });

  const validItems = items.filter((item) => item.threshold && item.hasInput && typeof item.contribution === "number");
  const swaValue = validItems.length > 0
    ? validItems.reduce((sum, item) => sum + item.contribution, 0)
    : null;

  return {
    items,
    validItems,
    swaValue
  };
}

function prepareTrafficReviewInputsForOption(baseOption, option, classification, inputs) {
  if (baseOption?.id !== "mixed-use-swa") {
    return inputs;
  }

  const mixedUseComputation = computeTrafficMixedUseInputs(option, classification, inputs.mixedUseEntries ?? []);
  return {
    ...inputs,
    grossFloorArea: mixedUseComputation.swaValue,
    mixedUseComputation
  };
}

function buildTrafficMixedUseFormulaText(mixedUseComputation) {
  const validItems = mixedUseComputation?.validItems ?? [];
  if (validItems.length === 0) {
    return "";
  }

  const joinedTerms = validItems.map((item) => (
    `${item.label} ${formatTrafficValue(item.threshold.metric, item.areaValue, "㎡")} / Mia ${formatTrafficValue(item.threshold.metric, item.threshold.value, item.threshold.unit)} = ${formatTrafficValue("grossFloorArea", item.contribution, "㎡")}`
  )).join(" · ");

  return `${joinedTerms} -> Swa ${formatTrafficValue("grossFloorArea", mixedUseComputation.swaValue, "㎡")}`;
}

function analyzeTrafficReviewThreshold(option, inputs) {
  const analyses = option.thresholds.map((threshold) => {
    const inputValue = inputs[threshold.metric];
    const hasInput = typeof inputValue === "number";
    const ratio = hasInput ? inputValue / threshold.value : null;
    return {
      ...threshold,
      inputValue,
      hasInput,
      ratio,
      isMet: hasInput ? ratio >= 1 : false
    };
  });

  const available = analyses.filter((analysis) => analysis.hasInput);
  if (available.length === 0) {
    return {
      status: "missing",
      isMet: false,
      analyses,
      multiplier: null,
      selected: null,
      comparisonText: `${option.thresholdText} 입력값이 필요합니다.`
    };
  }

  const metAnalyses = available.filter((analysis) => analysis.isMet);
  const selected = (metAnalyses.length > 0 ? metAnalyses : available)
    .sort((left, right) => right.ratio - left.ratio)[0];

  return {
    status: "ready",
    isMet: metAnalyses.length > 0,
    analyses,
    multiplier: selected.ratio,
    selected,
    comparisonText: available.map((analysis) => (
      `${analysis.label} ${formatTrafficValue(analysis.metric, analysis.inputValue, analysis.unit)} / 기준 ${formatTrafficValue(analysis.metric, analysis.value, analysis.unit)} = ${formatTrafficMultiplier(analysis.ratio)}`
    )).join(" · ")
  };
}

function computeTrafficReviewIntersectionPlan(option, multiplier) {
  if (typeof option.fixedIntersections === "number") {
    return {
      intersections: option.fixedIntersections,
      radiusText: option.scopeText,
      legalBasis: option.guidelineBasis ?? "교통영향평가 지침 기준"
    };
  }

  if (option.planProfile === "gyeonggi-local") {
    if (option.kind === "building") {
      if (multiplier < 2) {
        return {
          intersections: 2,
          radiusText: "반경 1.0km 이내",
          legalBasis: "경기도 교통영향평가 지침 별표 3"
        };
      }

      if (multiplier < 6) {
        return {
          intersections: 4,
          radiusText: "반경 1.0km 이내",
          legalBasis: "경기도 교통영향평가 지침 별표 3"
        };
      }

      if (multiplier < 10) {
        return {
          intersections: 8,
          radiusText: "반경 1.5km 이내",
          legalBasis: "경기도 교통영향평가 지침 별표 3"
        };
      }

      return {
        intersections: 12,
        radiusText: "반경 2.0km 이내",
        legalBasis: "경기도 교통영향평가 지침 별표 3"
      };
    }

    if (multiplier < 2) {
      return {
        intersections: 4,
        radiusText: "반경 1.0km 이내",
        legalBasis: "경기도 교통영향평가 지침 별표 3"
      };
    }

    if (multiplier < 4) {
      return {
        intersections: 4,
        radiusText: "반경 2.0km 이내",
        legalBasis: "경기도 교통영향평가 지침 별표 3"
      };
    }

    if (multiplier < 8) {
      return {
        intersections: 8,
        radiusText: "반경 3.0km 이내",
        legalBasis: "경기도 교통영향평가 지침 별표 3"
      };
    }

    if (multiplier < 10) {
      return {
        intersections: 12,
        radiusText: "반경 4.0km 이내",
        legalBasis: "경기도 교통영향평가 지침 별표 3"
      };
    }

    return {
      intersections: 15,
      radiusText: "반경 4.0km 이내",
      legalBasis: "경기도 교통영향평가 지침 별표 3"
    };
  }

  if (option.planProfile === "national") {
    if (option.kind === "building") {
      if (multiplier < 4) {
        return {
          intersections: 4,
          radiusText: "반경 1.0km 이내",
          legalBasis: "국토교통부 교통영향평가지침 제5조제1항"
        };
      }

      if (multiplier < 8) {
        return {
          intersections: 8,
          radiusText: "반경 1.5km 이내",
          legalBasis: "국토교통부 교통영향평가지침 제5조제1항"
        };
      }

      return {
        intersections: 12,
        radiusText: "반경 2.0km 이내",
        legalBasis: "국토교통부 교통영향평가지침 제5조제1항"
      };
    }

    if (multiplier < 2) {
      return {
        intersections: 4,
        radiusText: "반경 2.0km 이내",
        legalBasis: "국토교통부 교통영향평가지침 제5조제2항"
      };
    }

    if (multiplier < 4) {
      return {
        intersections: 8,
        radiusText: "반경 3.0km 이내",
        legalBasis: "국토교통부 교통영향평가지침 제5조제2항"
      };
    }

    return {
      intersections: 12,
      radiusText: "반경 4.0km 이내",
      legalBasis: "국토교통부 교통영향평가지침 제5조제2항"
    };
  }

  if (option.kind === "building") {
    if (multiplier < 4) {
      return {
        intersections: 4,
        radiusText: "반경 1.0km 이내",
        legalBasis: "서울특별시 교통영향평가 지침 제5조제1항제1호"
      };
    }

    if (multiplier < 8) {
      return {
        intersections: 8,
        radiusText: "반경 1.5km 이내",
        legalBasis: "서울특별시 교통영향평가 지침 제5조제1항제2호"
      };
    }

    return {
      intersections: 12,
      radiusText: "반경 2.0km 이내",
      legalBasis: "서울특별시 교통영향평가 지침 제5조제1항제3호"
    };
  }

  if (multiplier < 2) {
    return {
      intersections: 4,
      radiusText: "반경 2.0km 이내",
      legalBasis: "서울특별시 교통영향평가 지침 제5조제2항제1호가목"
    };
  }

  if (multiplier < 4) {
    return {
      intersections: 8,
      radiusText: "반경 3.0km 이내",
      legalBasis: "서울특별시 교통영향평가 지침 제5조제2항제1호나목"
    };
  }

  return {
    intersections: 12,
    radiusText: "반경 4.0km 이내",
    legalBasis: "서울특별시 교통영향평가 지침 제5조제2항제1호다목"
  };
}

function renderTrafficReview() {
  const address = trafficAddressInput?.value.trim() ?? "";
  const baseOption = getSelectedTrafficReviewOption();
  const inputs = collectTrafficReviewInputs();
  const classification = classifyTrafficReviewAddressV2(address);

  if (!address) {
    trafficReviewSummary.className = "match-summary";
    trafficReviewSummary.innerHTML = [
      "<strong>주소를 먼저 입력해 주세요.</strong>",
      "서울과 경기도 주소는 지자체 기준과 도시교통정비 촉진법 기준을 함께 계산합니다."
    ].join(" ");
    trafficReviewResults.className = "rule-results empty";
    trafficReviewResults.textContent = "아직 계산된 결과가 없습니다.";
    return;
  }

  if (!baseOption) {
    trafficReviewSummary.className = "match-summary";
    trafficReviewSummary.innerHTML = "<strong>세부 유형을 선택해 주세요.</strong>";
    trafficReviewResults.className = "rule-results empty";
    trafficReviewResults.textContent = "선택된 세부 유형이 없습니다.";
    return;
  }

  const activeOptions = getTrafficReviewActiveOptions(baseOption, classification);
  const localDecisionLabel = classification.localScopeLabel
    ? `${classification.localSchemeLabel} · ${classification.localScopeLabel}`
    : "지자체 기준 확인 필요";
  const nationalDecisionLabel = classification.nationalAreaLabel
    ? `${classification.nationalSchemeLabel} · ${classification.nationalAreaLabel}`
    : "도시교통정비 촉진법 기준 확인 필요";

  trafficReviewSummary.className = "match-summary";
  trafficReviewSummary.innerHTML = [
    `<strong>${classification.zoneLabel}으로 판정했습니다.</strong>`,
    `${classification.jurisdictionLabel} 주소를 기준으로 ${baseOption.label}에 대한 지자체 기준과 국가 기준을 함께 검토합니다.`,
    `${classification.note}`,
    `<div class="match-meta"><span class="badge reference">적용 도시: ${classification.jurisdictionLabel}</span><span class="badge reference">지자체 기준: ${localDecisionLabel}</span><span class="badge reference">도시교통정비 촉진법: ${nationalDecisionLabel}</span></div>`
  ].join(" ");

  if (activeOptions.length === 0) {
    const emptyAnalysis = {
      multiplier: null,
      selected: null,
      comparisonText: `${baseOption.label} 계산을 위해 주소 판정이 더 필요합니다.`
    };
    const fallbackOption = {
      ...baseOption,
      comparisonLabel: classification.localSchemeLabel || classification.nationalSchemeLabel || "기준 확인 필요",
      scopeLabel: classification.localScopeLabel || classification.nationalAreaLabel || classification.zoneLabel,
      scopeCategoryLabel: classification.zoneLabel,
      thresholdText: classification.localScheme === "gyeonggi"
        ? "경기도 권역 판정 후 공식 조례 기준을 계산합니다."
        : (baseOption.thresholdText ?? "권역 판정 후 계산합니다."),
      legalBasis: classification.localScheme === "gyeonggi"
        ? "경기도 교통영향평가 대상사업 및 범위에 관한 조례 및 경기도 교통영향평가 지침"
        : (baseOption.legalBasis ?? ""),
      sourceSet: classification.localScheme === "gyeonggi" ? GYEONGGI_TRAFFIC_REVIEW_SOURCES : null,
      sourceType: "official"
    };

    trafficReviewResults.className = "rule-results";
    trafficReviewResults.innerHTML = renderTrafficReviewCard({
      option: fallbackOption,
      classification,
      analysis: emptyAnalysis,
      inputSummary: summarizeTrafficInputs(baseOption, inputs),
      statusLabel: "주소 추가 확인 필요",
      statusTone: "reference",
      detailNote: classification.note,
      plan: null,
      advisoryNote: ""
    });
    return;
  }

  trafficReviewResults.className = "rule-results";
  const resultStates = activeOptions.map((option) => {
    const preparedInputs = prepareTrafficReviewInputsForOption(baseOption, option, classification, inputs);
    const analysis = analyzeTrafficReviewThreshold(option, preparedInputs);
    const advisoryNote = resolveTrafficReviewAdvisoryNote(option, preparedInputs);
    const inputSummary = summarizeTrafficInputs(option, preparedInputs);

    if (analysis.status === "missing") {
      return {
        option,
        classification,
        analysis,
        preparedInputs,
        inputSummary,
        statusLabel: "입력값 부족",
        statusTone: "secondary",
        detailNote: `${option.comparisonLabel}의 대상 기준은 ${option.thresholdText}입니다.`,
        plan: null,
        advisoryNote
      };
    }

    if (!analysis.isMet) {
      return {
        option,
        classification,
        analysis,
        preparedInputs,
        inputSummary,
        statusLabel: "교통영향평가 대상 미달",
        statusTone: "secondary",
        detailNote: `${option.comparisonLabel} 기준으로는 아직 대상사업 범위에 미달합니다.`,
        plan: null,
        advisoryNote
      };
    }

    const plan = computeTrafficReviewIntersectionPlan(option, analysis.multiplier);
    return {
      option,
      classification,
      analysis,
      preparedInputs,
      inputSummary,
      statusLabel: "교통영향평가 대상",
      statusTone: "official",
      detailNote: `${option.comparisonLabel} 기준으로 ${plan.intersections}개 교차로 이상을 검토합니다.`,
      plan,
      advisoryNote
    };
  });

  trafficReviewResults.innerHTML = renderTrafficReviewComparisonCard({
    baseOption,
    classification,
    inputSummary: summarizeTrafficInputs(baseOption, inputs),
    resultStates
  });
}

function renderTrafficReviewComparisonCard({
  baseOption,
  classification,
  inputSummary,
  resultStates
}) {
  return `
    <article class="rule-card traffic-review-comparison-card">
      <h3>${baseOption.label}</h3>
      <div class="rule-topline">
        <span class="badge official">공식 기준 비교</span>
        <span class="badge reference">${resultStates.length}가지 기준 동시 검토</span>
      </div>
      <div class="rule-summary-grid">
        <div class="metric">
          <span class="metric-label">적용 도시</span>
          <strong>${classification.jurisdictionLabel}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">주소 판정</span>
          <strong>${classification.zoneLabel}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">도시교통정비 촉진법 적용</span>
          <strong>${classification.nationalAreaLabel || "판정 필요"}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">사업 구분</span>
          <strong>${baseOption.kind === "development" ? "개발사업" : "건축물"}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">세부 유형</span>
          <strong>${baseOption.label}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">입력값</span>
          <strong>${inputSummary}</strong>
        </div>
      </div>
      <div class="traffic-review-comparison-grid">
        ${resultStates.map((state) => renderTrafficReviewComparisonPanel(state)).join("")}
      </div>
    </article>
  `;
}

function renderTrafficReviewComparisonPanel({
  option,
  analysis,
  preparedInputs,
  statusLabel,
  statusTone,
  detailNote,
  plan,
  advisoryNote
}) {
  const multiplierLabel = analysis.multiplier == null ? "-" : formatTrafficMultiplier(analysis.multiplier);
  const selectedThresholdText = analysis.selected
    ? `${analysis.selected.label} 기준 ${formatTrafficValue(analysis.selected.metric, analysis.selected.value, analysis.selected.unit)}`
    : option.thresholdText;
  const intersectionsText = plan ? `${plan.intersections}개` : "-";
  const radiusText = plan?.radiusText ?? "-";
  const sourceLinks = buildTrafficReviewSourceLinks(option.sourceSet);
  const mixedUseFormulaText = option.id === "mixed-use-swa"
    ? buildTrafficMixedUseFormulaText(preparedInputs?.mixedUseComputation)
    : "";

  return `
    <section class="traffic-review-panel">
      <div class="traffic-review-panel-head">
        <h4>${option.comparisonLabel ?? "-"}</h4>
        <div class="rule-topline">
          <span class="badge official">${sourceBadgeText(option.sourceType)}</span>
          <span class="badge ${statusTone}">${statusLabel}</span>
        </div>
      </div>
      <div class="traffic-review-panel-grid">
        <div class="metric">
          <span class="metric-label">적용 범위</span>
          <strong>${option.scopeLabel ?? "-"}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">대상 기준</span>
          <strong>${selectedThresholdText}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">기준의 몇 배</span>
          <strong>${multiplierLabel}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">검토 교차로</span>
          <strong>${intersectionsText}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">분석 범위</span>
          <strong>${radiusText}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">권역 적용 기준</span>
          <strong>${option.scopeCategoryLabel ?? "-"}</strong>
        </div>
      </div>
      <p class="rule-equation">기준 비교: ${analysis.comparisonText}</p>
      <p class="rule-source">대상 기준: ${option.thresholdText}</p>
      <p class="rule-source">대상사업 범위 근거: ${option.legalBasis}</p>
      ${mixedUseFormulaText ? `<p class="rule-source">복합용도 산식: ${mixedUseFormulaText}</p>` : ""}
      <p class="rule-notes">${detailNote}</p>
      ${advisoryNote ? `<p class="rule-notes">${advisoryNote}</p>` : ""}
      ${option.relaxationNote ? `<p class="rule-notes">${option.relaxationNote}</p>` : ""}
      ${plan ? `<p class="rule-source">교차로 산정 기준: ${plan.legalBasis}</p>` : ""}
      ${sourceLinks ? `<p class="rule-source">공식 출처: ${sourceLinks}</p>` : ""}
    </section>
  `;
}

function buildTrafficReviewSourceLinks(sourceSet) {
  if (!sourceSet) {
    return "";
  }

  return Object.entries(sourceSet)
    .filter(([key, value]) => key.endsWith("Url") && value)
    .map(([key, value]) => {
      const titleKey = `${key.slice(0, -3)}Title`;
      return sourceSet[titleKey]
        ? `<a href="${value}" target="_blank" rel="noreferrer">${sourceSet[titleKey]}</a>`
        : "";
    })
    .filter(Boolean)
    .join(" · ");
}

function renderTrafficReviewCard({
  option,
  classification,
  analysis,
  inputSummary,
  statusLabel,
  statusTone,
  detailNote,
  plan,
  advisoryNote
}) {
  const multiplierLabel = analysis.multiplier == null ? "-" : formatTrafficMultiplier(analysis.multiplier);
  const selectedThresholdText = analysis.selected
    ? `${analysis.selected.label} 기준 ${formatTrafficValue(analysis.selected.metric, analysis.selected.value, analysis.selected.unit)}`
    : option.thresholdText;
  const intersectionsText = plan ? `${plan.intersections}개` : "-";
  const radiusText = plan?.radiusText ?? "-";
  const sourceLinks = buildTrafficReviewSourceLinks(option.sourceSet);

  return `
    <article class="rule-card">
      <h3>${option.label}</h3>
      <div class="rule-topline">
        <span class="badge official">${sourceBadgeText(option.sourceType)}</span>
        <span class="badge ${statusTone}">${statusLabel}</span>
      </div>
      <div class="rule-summary-grid">
        <div class="metric">
          <span class="metric-label">적용 도시</span>
          <strong>${classification.jurisdictionLabel}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">도시교통정비 촉진법 적용</span>
          <strong>${classification.nationalAreaLabel || "판정 필요"}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">계산 기준</span>
          <strong>${option.comparisonLabel ?? "-"}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">적용 범위</span>
          <strong>${option.scopeLabel ?? classification.jurisdictionLabel}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">주소 판정</span>
          <strong>${classification.zoneLabel}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">사업 구분</span>
          <strong>${option.kind === "development" ? "개발사업" : "건축물"}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">세부 유형</span>
          <strong>${option.label}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">입력값</span>
          <strong>${inputSummary}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">대상 기준</span>
          <strong>${selectedThresholdText}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">기준의 몇 배</span>
          <strong>${multiplierLabel}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">검토 교차로</span>
          <strong>${intersectionsText}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">분석 범위</span>
          <strong>${radiusText}</strong>
        </div>
      </div>
      <p class="rule-equation">기준 비교: ${analysis.comparisonText}</p>
      <p class="rule-source">대상 기준: ${option.thresholdText}</p>
      <p class="rule-source">대상사업 범위 근거: ${option.legalBasis}</p>
      ${option.scopeCategoryLabel ? `<p class="rule-source">권역 적용 기준: ${option.scopeCategoryLabel}</p>` : ""}
      <p class="rule-notes">${detailNote}</p>
      ${advisoryNote ? `<p class="rule-notes">${advisoryNote}</p>` : ""}
      ${option.relaxationNote ? `<p class="rule-notes">${option.relaxationNote}</p>` : ""}
      ${plan ? `<p class="rule-source">교차로 산정 기준: ${plan.legalBasis}</p>` : ""}
      ${sourceLinks ? `<p class="rule-source">공식 출처: ${sourceLinks}</p>` : ""}
    </article>
  `;
}

function resolveTrafficReviewAdvisoryNote(option, inputs) {
  if (!option.advisoryThreshold) {
    return "";
  }

  const advisoryValue = inputs[option.advisoryThreshold.metric];
  if (typeof advisoryValue !== "number") {
    return "";
  }

  return advisoryValue >= option.advisoryThreshold.value ? option.advisoryNote : "";
}

function summarizeTrafficInputs(option, inputs) {
  const parts = [];

  if (option?.id === "mixed-use-swa") {
    const entryCount = inputs.mixedUseEntries?.length ?? 0;
    if (entryCount > 0) {
      parts.push(`복합용도 ${entryCount}건`);
    }

    if (typeof inputs.mixedUseComputation?.swaValue === "number") {
      parts.push(`Swa ${formatTrafficValue("grossFloorArea", inputs.mixedUseComputation.swaValue, "㎡")}`);
    }

    return parts.length > 0 ? parts.join(" / ") : "복합용도 입력값 없음";
  }

  if (typeof inputs.grossFloorArea === "number") {
    const grossLabel = option?.id === "mixed-use-swa" ? "Swa 값" : "연면적";
    parts.push(`${grossLabel} ${formatTrafficValue("grossFloorArea", inputs.grossFloorArea, "㎡")}`);
  }

  if (typeof inputs.siteArea === "number") {
    parts.push(`부지면적 ${formatTrafficValue("siteArea", inputs.siteArea, "㎡")}`);
  }

  if (typeof inputs.seats === "number") {
    parts.push(`관람석 ${formatTrafficValue("seats", inputs.seats, "석")}`);
  }

  if (typeof inputs.roadLength === "number") {
    parts.push(`도로 총연장 ${formatTrafficValue("roadLength", inputs.roadLength, "km")}`);
  }

  return parts.length > 0 ? parts.join(" / ") : "입력값 없음";
}

function formatTrafficValue(metric, value, unit) {
  if (typeof value !== "number") {
    return "-";
  }

  const maximumFractionDigits = metric === "roadLength" ? 2 : 0;
  return `${value.toLocaleString("ko-KR", { maximumFractionDigits })}${unit ?? ""}`;
}

function formatTrafficMultiplier(value) {
  if (typeof value !== "number") {
    return "-";
  }

  return `${value.toLocaleString("ko-KR", { maximumFractionDigits: 2 })}배`;
}

function renderComputation() {
  const address = addressInput.value.trim();
  const legalCount = parseNumber(legalCountInput.value);
  const plannedCount = parseNumber(plannedCountInput.value);
  const nonMechanicalCount = parseNumber(nonMechanicalCountInput.value) ?? plannedCount;
  const match = matchJurisdiction(address);

  if (!match) {
    matchSummary.className = "match-summary";
    matchSummary.innerHTML = [
      "<strong>관할을 찾지 못했습니다.</strong>",
      "주소에 `서울특별시`, `서울`, `경기도`, `수원시`, `성남시`, `강남구` 같은 관할명이 포함되어 있는지 확인해 주세요."
    ].join("");
    ruleResults.className = "rule-results empty";
    ruleResults.textContent = "관할 매칭 후 결과가 표시됩니다.";
    return;
  }

  const profileRules = match.ruleProfile ? (RULE_LIBRARY[match.ruleProfile] ?? []) : [];
  const selectorRules = buildDisplayRules(match, profileRules);
  const contextRules = buildRuleContextRules(match, profileRules, selectorRules);
  const counts = { legal: legalCount, planned: plannedCount, nonMechanical: nonMechanicalCount };
  const matchSourceUrl = resolveOfficialMatchSourceUrl(match);

  matchSummary.className = "match-summary";
  matchSummary.innerHTML = `
    <strong>${match.name}</strong>
    적용 조례명: ${match.ordinanceTitle}
    <div class="match-meta">
      <span class="badge ${match.sourceType}">${sourceBadgeText(match.sourceType)}</span>
      <span class="badge reference">최종 확인일 ${match.lastChecked}</span>
      ${matchSourceUrl ? `<a class="badge official" href="${matchSourceUrl}" target="_blank" rel="noreferrer">출처 열기</a>` : ""}
    </div>
  `;

  const cards = selectorRules.length > 0
    ? [renderRuleSelector(match, selectorRules, counts, contextRules)]
    : [renderEmptyJurisdictionRules(match)];

  currentRuleSelection = selectorRules.length > 0 ? { rules: selectorRules, counts, match, contextRules } : null;

  ruleResults.className = "rule-results";
  ruleResults.innerHTML = cards.join("");
}

function renderRuleSelector(match, rules, counts, contextRules = rules) {
  const choices = rules.map((rule, index) => {
    const computed = computeRequired(rule, counts, contextRules);
    const displayBasisLabel = getDisplayBasisLabel(rule);
    const rateLabel = rule.percentRange
      ? `${rule.percentRange}%`
      : rule.customValueText
        ? rule.customValueText
        : `${rule.percent}%`;
    return `
      <button type="button" class="overview-chip selector-chip ${index === 0 ? "active" : ""}" data-rule-index="${index}">
        <span class="overview-chip-label">${rule.label}</span>
        <strong>${rateLabel}</strong>
        <span class="overview-chip-basis">적용 모수: ${displayBasisLabel}</span>
        <span class="overview-chip-condition">적용 조건: ${rule.thresholdText}</span>
        <span class="overview-chip-note">${computed.requiredCountLabel}</span>
      </button>
    `;
  }).join("");

  return `
    <section class="rule-overview rule-selector-block">
      <div class="overview-head">
        <div>
          <p class="section-kicker">요약</p>
          <h3>${match.shortName}에서 먼저 볼 규칙</h3>
        </div>
        <p class="overview-note">
          ${getRuleSelectorNote(match)}
        </p>
      </div>
      <div class="overview-grid rule-selector-list">
        ${choices}
      </div>
      <div id="selected-rule-detail" class="selected-rule-detail">
        ${renderRuleCard(rules[0], counts, false, match)}
      </div>
    </section>
  `;
}

function renderEmptyJurisdictionRules(match) {
  return `
    <section class="rule-overview rule-selector-block">
      <div class="overview-head">
        <div>
          <p class="section-kicker">요약</p>
          <h3>${match.shortName}에서 먼저 볼 규칙</h3>
        </div>
      </div>
      <div class="match-summary">
        <strong>해당 관할 조례 기준 상세 규칙이 아직 구조화되지 않았습니다.</strong>
        지역별 규칙 보기는 현재 ${match.name} 조례에서 직접 확인한 항목만 표시하도록 바뀌었습니다.
        ${resolveOfficialMatchSourceUrl(match) ? `<div class="match-meta"><a class="badge official" href="${resolveOfficialMatchSourceUrl(match)}" target="_blank" rel="noreferrer">법제처 자치법규로 확인</a></div>` : ""}
      </div>
    </section>
  `;
}

function updateSelectedRule(index) {
  const { rules, counts, match } = currentRuleSelection;
  const selectedRule = rules[index];
  if (!selectedRule) {
    return;
  }

  ruleResults.querySelectorAll("[data-rule-index]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.ruleIndex) === index);
  });

  const detailRoot = document.getElementById("selected-rule-detail");
  if (detailRoot) {
    detailRoot.innerHTML = renderRuleCard(selectedRule, counts, false, match);
  }
}

function renderRuleCard(rule, counts, isReference = false, match = null) {
  const baseValue = counts[rule.basis];
  const contextRules = currentRuleSelection?.contextRules
    ?? currentRuleSelection?.rules
    ?? (match?.ruleProfile ? (RULE_LIBRARY[match.ruleProfile] ?? []) : []);
  const computed = computeRequired(rule, counts, contextRules);
  const resolvedSourceUrl = resolveRuleSourceUrl(rule, match);
  const displayBasisLabel = getDisplayBasisLabel(rule);
  const basisInterpretationNote = getBasisInterpretationNote(rule);
  const legalPercentText = computed.requiredCount != null && counts.legal
    ? `${formatPercent((computed.requiredCount / counts.legal) * 100)}`
    : "-";
  const plannedPercentText = computed.requiredCount != null && counts.planned
    ? `${formatPercent((computed.requiredCount / counts.planned) * 100)}`
    : "-";
  const directBasisPercent = rule.percentRange
    ? `${rule.percentRange}%`
    : rule.customValueText
      ? rule.customValueText
    : `${rule.percent}%`;

  return `
    <article class="rule-card">
      <h3>${rule.label}</h3>
      <div class="rule-topline">
        <span class="badge ${rule.sourceType}">${sourceBadgeText(rule.sourceType)}</span>
        <span class="badge reference">직접 비율 ${directBasisPercent}</span>
      </div>
      <div class="rule-summary-grid">
        <div class="metric">
          <span class="metric-label">주차유형</span>
          <strong>${rule.label}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">적용 모수</span>
          <strong>${displayBasisLabel}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">산정 결과</span>
          <strong>${computed.requiredCountLabel}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">법정 대비</span>
          <strong>${legalPercentText}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">계획 대비</span>
          <strong>${plannedPercentText}</strong>
        </div>
        <div class="metric">
          <span class="metric-label">적용 조건</span>
          <strong>${rule.thresholdText}</strong>
        </div>
      </div>
      <p class="rule-equation">
        계산식: ${computed.formula}
      </p>
      <p class="rule-source">
        ${(isReference || rule.sourceType === "reference") ? "참고 기준" : "근거"}: ${rule.legalBasis}
      </p>
      <p class="rule-notes">
        ${rule.notes}
      </p>
      ${basisInterpretationNote ? `<p class="rule-notes">${basisInterpretationNote}</p>` : ""}
      ${resolvedSourceUrl ? `<p class="rule-source">원문·출처: <a href="${resolvedSourceUrl}" target="_blank" rel="noreferrer">링크 열기</a></p>` : ""}
    </article>
  `;
}

function resolveRuleSourceUrl(rule, match) {
  if (!match) {
    return isOfficialLawSource(rule.sourceUrl) ? rule.sourceUrl : null;
  }

  if (isOfficialLawSource(rule.sourceUrl)) {
    return rule.sourceUrl;
  }

  return resolveOfficialMatchSourceUrl(match);
}

function resolveOfficialMatchSourceUrl(match) {
  if (!match) {
    return null;
  }

  if (isOfficialLawSource(match.sourceUrl)) {
    return match.sourceUrl;
  }

  return buildLawSearchUrl(match.ordinanceTitle);
}

function buildLawSearchUrl(queryText) {
  if (!queryText) {
    return null;
  }

  return `https://www.law.go.kr/LSW/ordinSc.do?menuId=3&subMenuId=27&tabMenuId=139&query=${encodeURIComponent(queryText)}`;
}

function isOfficialLawSource(url) {
  return typeof url === "string" && url.includes("law.go.kr");
}

function getDisplayBasisLabel(rule) {
  if (rule.basis === "none") {
    return "정률 없음";
  }

  if (rule.basis === "legal") {
    return rule.basisLabel;
  }

  if (rule.basis === "nonMechanical") {
    return "기계식 제외 계획주차대수";
  }

  if (rule.basis === "planned") {
    if (/주차단위구획/.test(rule.basisLabel)) {
      return "계획주차대수(주차단위구획 수 기준)";
    }

    if (/주차면수/.test(rule.basisLabel)) {
      return "계획주차대수(조문상 주차면수)";
    }

    if (/주차대수|전체대수/.test(rule.basisLabel)) {
      return "계획주차대수";
    }
  }

  return rule.basisLabel;
}

function getBasisInterpretationNote(rule) {
  if (rule.derivedFromType === "family-care") {
    return "이 항목은 가족배려주차장 산정 결과를 다시 기준으로 계산합니다.";
  }

  if (rule.basis === "planned" && /주차대수|주차면수|전체대수/.test(rule.basisLabel)) {
    return "조문에 적힌 '주차대수' 또는 유사 표현은 이 앱에서 계획주차대수로 해석합니다.";
  }

  if (rule.basis === "nonMechanical") {
    return "조문에 적힌 총주차대수는 이 앱에서 기계식 주차를 제외한 계획주차대수로 해석합니다.";
  }

  return "";
}

function computeRequired(rule, counts, contextRules = [], visitedTypes = new Set()) {
  const baseValue = resolveRuleBaseValue(rule, counts, contextRules, visitedTypes);
  const displayBasisLabel = getDisplayBasisLabel(rule);

  if (rule.basis === "none" && rule.customValueText && typeof rule.percent !== "number" && !rule.percentRange) {
    return {
      requiredCount: null,
      requiredCountLabel: rule.customValueText,
      formula: "정률 계산 대상이 아니라 조례상 설치·운영 또는 표시 기준입니다."
    };
  }

  if (baseValue == null || Number.isNaN(baseValue)) {
    return {
      requiredCount: null,
      requiredCountLabel: "모수 입력 필요",
      formula: `${displayBasisLabel} 값을 입력하면 자동 계산됩니다.`
    };
  }

  if (rule.customValueText && typeof rule.percent !== "number" && !rule.percentRange) {
    return {
      requiredCount: null,
      requiredCountLabel: rule.customValueText,
      formula: `${displayBasisLabel} 기준 정률이 아니라 조례상 별도 결정 사항입니다.`
    };
  }

  if (rule.percentRange) {
    const [minRate, maxRate] = rule.percentRange.split("~").map(Number);
    const minCount = applyRounding(baseValue * (minRate / 100), rule.rounding);
    const maxCount = applyRounding(baseValue * (maxRate / 100), rule.rounding);
    return {
      requiredCount: minCount,
      requiredCountLabel: `${minCount} ~ ${maxCount}면`,
      formula: `${baseValue} × ${minRate}% ~ ${maxRate}% = ${minCount} ~ ${maxCount}`
    };
  }

  let rawCount = baseValue * (rule.percent / 100);
  let requiredCount = applyRounding(rawCount, rule.rounding);

  if (typeof rule.cap === "number") {
    requiredCount = Math.min(requiredCount, rule.cap);
  }

  return {
    requiredCount,
    requiredCountLabel: `${requiredCount}면`,
    formula: `${baseValue} × ${rule.percent}% = ${formatPercent(rawCount)} → ${requiredCount}면`
  };
}

function resolveRuleBaseValue(rule, counts, contextRules, visitedTypes) {
  if (rule.derivedFromType) {
    if (visitedTypes.has(rule.type)) {
      return null;
    }

    const sourceRule = contextRules.find((candidate) => candidate.type === rule.derivedFromType);
    if (!sourceRule) {
      return null;
    }

    const nextVisitedTypes = new Set(visitedTypes);
    nextVisitedTypes.add(rule.type);
    return computeRequired(sourceRule, counts, contextRules, nextVisitedTypes).requiredCount;
  }

  return counts[rule.basis];
}

function applyRounding(value, rounding) {
  if (rounding === "floor") {
    return Math.floor(value);
  }
  if (rounding === "round") {
    return Math.round(value);
  }
  return Math.ceil(value);
}

function matchJurisdiction(address) {
  if (!address) {
    return null;
  }

  const normalized = address.replace(/\s+/g, " ").trim();
  const sorted = [...ORDINANCE_DIRECTORY].sort((a, b) => longestToken(b) - longestToken(a));
  return sorted.find((item) => item.tokens.some((token) => normalized.includes(token))) ?? null;
}

function longestToken(item) {
  return item.tokens.reduce((max, token) => Math.max(max, token.length), 0);
}

function renderDirectory(keyword) {
  const normalizedKeyword = keyword.replace(/\s+/g, "").toLowerCase();
  const filtered = ORDINANCE_DIRECTORY.filter((item) => {
    if (!normalizedKeyword) {
      return true;
    }
    return [item.name, item.shortName, item.ordinanceTitle]
      .join("")
      .replace(/\s+/g, "")
      .toLowerCase()
      .includes(normalizedKeyword);
  });

  const grouped = groupBy(filtered, "group");
  directoryRoot.innerHTML = Object.entries(grouped).map(([groupName, items]) => `
    <section class="directory-group">
      <h3>${groupName}</h3>
      <table class="directory-table">
        <thead>
          <tr>
            <th>관할</th>
            <th>조례명</th>
            <th>데이터 상태</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((item) => `
            <tr>
              <td>${item.name}</td>
              <td>
                ${resolveOfficialMatchSourceUrl(item)
                  ? `<a href="${resolveOfficialMatchSourceUrl(item)}" target="_blank" rel="noreferrer">${item.ordinanceTitle}</a>`
                  : item.ordinanceTitle}
                <span class="small-note">주소 키워드: ${item.tokens[0]}</span>
              </td>
              <td>
                <span class="badge ${item.sourceType}">${sourceBadgeText(item.sourceType)}</span>
                <span class="small-note">${item.ruleProfile ? "상세 계산 규칙 포함" : "디렉터리만 입력됨"}</span>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `).join("");
}

function groupBy(items, key) {
  return items.reduce((acc, item) => {
    acc[item[key]] ||= [];
    acc[item[key]].push(item);
    return acc;
  }, {});
}

function parseNumber(value) {
  if (value === "" || value == null) {
    return null;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatPercent(value) {
  return Number(value).toLocaleString("ko-KR", {
    maximumFractionDigits: 2
  }) + "%";
}

function sourceBadgeText(sourceType) {
  if (sourceType === "official") {
    return "직접 확인한 공식 출처";
  }
  if (sourceType === "inferred") {
    return "공통패턴·범위 추정";
  }
  if (sourceType === "secondary") {
    return "2차 출처 기반";
  }
  return "참고용 정리";
}
