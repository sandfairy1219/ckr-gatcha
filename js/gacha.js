document.addEventListener('DOMContentLoaded', function() {
    // 아이템 목록 정의 (실제 구현시 더 많은 아이템 추가)
    const beastprob = 0.0371;
    const beastsoulgemprob = 0.2132;
    const ancientprob = 0.0472;
    const ancientsoulgemprob = 0.2698;
    const legendaryprob = 0.0472;
    const legendarysoulgemprob = 0.2698;
    const superEpicprob = 0.0360;
    const superEpicsoulgemprob = 0.2304;
    const dragonprob = 0.0472;
    const dragonsoulgemprob = 0.2698;
    const epicprob = 0.0301;
    const epicsoulgemprob = 0.1574;
    const rareprob = 0.3722;
    const raresoulgemprob = 2.2658;
    const commonprob = 1.2772; 
    const commonsoulgemprob = 4.1947;


    const items = [
        { id: 1, name: '쉐도우밀크 쿠키',  rarity: 'BEAST', probability: beastprob  },
        { id: 2, name: '버닝스파이스 쿠키',  rarity: 'BEAST', probability: beastprob  },
        { id: 3, name: '미스틱플라워 쿠키',  rarity: 'BEAST', probability: beastprob  },
        { id: 4, name: '세인트릴리 쿠키',  rarity: ' ANCIENT', probability: ancientprob  },
        { id: 5, name: '골드치즈 쿠키',  rarity: 'ANCIENT', probability: ancientprob },
        { id: 6, name: '다크카카오 쿠키',  rarity: 'ANCIENT', probability: ancientprob  },
        { id: 7, name: '홀리베리 쿠키',  rarity: 'ANCIENT', probability: ancientprob  },
        { id: 8, name: '퓨어바닐라 쿠키',  rarity: 'ANCIENT', probability: ancientprob  },
        { id: 9, name: '바람궁수 쿠키',  rarity: 'LEGENDARY', probability: legendaryprob  },
        { id: 10, name: '뇌신무장 쿠키',  rarity: 'LEGENDARY', probability: legendaryprob  },
        { id: 11, name: '달빛술사 쿠키',  rarity: 'LEGENDARY', probability: legendaryprob  },
        { id: 12, name: '블랙펄 쿠키',  rarity: 'LEGENDARY', probability: legendaryprob  },
        { id: 13, name: '서리여왕 쿠키',  rarity: 'LEGENDARY', probability: legendaryprob  },
        { id: 14, name: '바다요정 쿠키',  rarity: 'LEGENDARY', probability: legendaryprob  },
        { id: 15, name: '용과 드래곤 쿠키',  rarity: 'DRAGON', probability: dragonprob  },
        { id: 16, name: '동백꽃맛 쿠키',  rarity: 'SUPER EPIC', probability: superEpicprob  },
        { id: 17, name: '요정왕 쿠키',  rarity: 'SUPER EPIC', probability: superEpicprob  },
        { id: 18, name: '크림슨 코랄 쿠키',  rarity: 'SUPER EPIC', probability: superEpicprob  },
        { id: 19, name: '샤이닝글리터맛 쿠키',  rarity: 'SUPER EPIC', probability: superEpicprob  },
        { id: 20, name: '캡사이신맛 쿠키',  rarity: 'SUPER EPIC', probability: superEpicprob  },
        { id: 21, name: '스타더스트 쿠키',  rarity: 'SUPER EPIC', probability: superEpicprob  },
        { id: 22, name: '소르베맛 쿠키',  rarity: 'SUPER EPIC', probability: superEpicprob  },
        { id: 23, name: '오이스터맛 쿠키',  rarity: 'SUPER EPIC', probability: superEpicprob  },
        { id: 24, name: '클로티드 크림 쿠키',  rarity: 'SUPER EPIC', probability: superEpicprob  },
        { id: 25, name: '웨딩케이크맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 26, name: '블랙사파이어맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 27, name: '캔디애플맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 28, name: '옥춘맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 29, name: '그린티무스맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 30, name: '초코드리즐 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 31, name: '아라모드맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 32, name: '금계화맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 33, name: '단계화맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 34, name: '스모크치즈맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 35, name: '넛맥타이거맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 36, name: '별산호맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 37, name: '복사꽃맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 38, name: '구름해태맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 39, name: '성게맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 40, name: '생토노레맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 41, name: '버터롤맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 42, name: '말차맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 43, name: '수은기사 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 44, name: '은방울맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 45, name: '의적맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 46, name: '크림브륄레맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 47, name: '린저 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 48, name: '모짜렐라맛 쿠키',  rarity: 'EPIC', probability: epicprob  },        
        { id: 49, name: '올리브맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 50, name: '페투치니맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 51, name: '바스크치즈맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 52, name: '프릴해파리맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 53, name: '박하사탕맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 54, name: '블랙레모네이드맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 55, name: '락스타맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 56, name: '타르트타탕맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 57, name: '로얄마가린맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 58, name: '퀸아망 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 59, name: '푸룬주스 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 60, name: '에일리언 도넛',  rarity: 'EPIC', probability: epicprob  },
        { id: 61, name: '블루파이맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 62, name: '밀키웨이맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 63, name: '예언자맛 쿠키',  rarity: 'EPIC', probability: epicprob  },
        { id: 64, name: '솔방울맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 65, name: '음유시인맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 66, name: '마카롱맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 67, name: '찰스', rarity:'EPIC', probability :epicprob},
        { id: 68, name: '검볼다이버맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 69, name: '캡틴캐비어맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 70, name: '크림 유니콘 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 71, name: '휘낭시에맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 72, name: '크런치초코칩 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 73, name: '와일드베리맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 74, name: '벚꽃맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 75, name: '흑당맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 76, name: '아포가토맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 77, name: '실론나이트맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 78, name: '에클레어맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 79, name: '코코아맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 80, name: '목화맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 81, name: '펌킨파이맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 82, name: '트위즐젤리맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 83, name: '마라맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 84, name: '달토끼맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 85, name: '라즈베리맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 86, name: '파로페맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 87, name: '오징어먹물맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 88, name: '샤벳상어맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 89, name: '라일락맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 90, name: '망고맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 91, name: '벨벳케이크맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 92, name: '페스츄리맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 93, name: '무화과맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 94, name: '딸기크레페맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 95, name: '블랙레이즌맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 96, name: '아몬드맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 97, name: '라떼맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 98, name: '구미호맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 99, name: '민트초코맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 100, name: '웨어울프맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 101, name: '칠리맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 102, name: '다크초코맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 103, name: '눈설탕맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 104, name: '감초맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 105, name: '스파클링맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 106, name: '뱀파이어맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 107, name: '우유맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 108, name: '석류맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 109, name: '허브맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 110, name: '독버섯맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 111, name: '자색고구마맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 112, name: '정글전사 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 113, name: '호밀맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 114, name: '에스프레소맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 115, name: '마들렌맛 쿠키', rarity:'EPIC', probability :epicprob},
        { id: 116, name: '악마맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 117, name: '커스터트 3세맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 118, name: '블랙베리맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 119, name: '아보카도맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 120, name: '당근맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 121, name: '체리맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 122, name: '양파맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 123, name: '용사맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 124, name: '버블껌맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 125, name: '탐험가맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 126, name: '연금술사맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 127, name: '팬케이크맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 128, name: '클로버맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 129, name: '공주맛 쿠키', rarity:'rare', probability :rareprob},
        { id: 130, name: '비트맛 쿠키', rarity:'common', probability :commonprob},
        { id: 131, name: '근육맛 쿠키', rarity:'common', probability :commonprob},
        { id: 132, name: '닌자맛 쿠키', rarity:'common', probability :commonprob},
        { id: 133, name: '천사맛 쿠키', rarity:'common', probability :commonprob},
        { id: 134, name: '마법사맛 쿠키', rarity:'common', probability :commonprob},
        { id: 135, name: '딸기맛 쿠키', rarity:'common', probability :commonprob},
        { id: 136, name: '용감한 쿠키', rarity:'common', probability :commonprob},
        { id: 137, name: '쉐도우밀크 쿠키의 영혼석', rarity:'beastsoulgem', probability :beastsoulgemprob},
        { id: 138, name: '버닝스파이스 쿠키의 영혼석', rarity:'beastsoulgem', probability :beastsoulgemprob},
        { id: 139, name: '미스틱플라워 쿠키의 영혼석', rarity:'beastsoulgem', probability :beastsoulgemprob},
        { id: 140, name: '세인트릴리 쿠키의 영혼석', rarity:'ancientsoulgem', probability :ancientsoulgemprob},
        { id: 141, name: '골드치즈 쿠키의 영혼석', rarity:'ancientsoulgem', probability :ancientsoulgemprob},
        { id: 142, name: '다크카카오 쿠키의 영혼석', rarity:'ancientsoulgem', probability :ancientsoulgemprob},
        { id: 143, name: '홀리베리 쿠키의 영혼석', rarity:'ancientsoulgem', probability :ancientsoulgemprob},
        { id: 144, name: '퓨어바닐라 쿠키의 영혼석', rarity:'ancientsoulgem', probability :ancientsoulgemprob},
        { id: 145, name: '퓨어바닐라 쿠키의 각성 영혼석 20개', rarity:'ancientsoulgem', probability :0.0371},
        { id: 146, name: '퓨어바닐라 쿠키의 각성 영혼석', rarity:'anciensoulgem', probability :0.2132},
        { id: 147, name: '골드치즈 쿠키의 각성 영혼석 20개', rarity:'ancientsoulgem', probability :0.0371},
        { id: 148, name: '골드치즈 쿠키의 각성 영혼석', rarity:'ancientsoulgem', probability :0.2132},
        { id: 149, name: '다크카카오 쿠키의 각성 영혼석 20개', rarity:'ancientsoulgem', probability :0.0371},
        { id: 150, name: '다크카카오 쿠키의 각성 영혼석', rarity:'ancientsoulgem', probability :0.2132},
        { id: 151, name: '바람궁수 쿠키의 영혼석', rarity:'legendarysoulgem', probability :legendaryprob},
        { id: 152, name: '뇌신무장 쿠키의 영혼석', rarity:'legendarysoulgem', probability :  legendaryprob},
        { id: 153, name: '달빛술사 쿠키의 영혼석', rarity:'legendarysoulgem', probability :legendaryprob},
        { id: 154, name: '블랙펄 쿠키의 영혼석', rarity:'legendarysoulgem', probability :legendaryprob},
        { id: 155, name: '서리여왕 쿠키의 영혼석', rarity:'legendarysoulgem', probability :legendaryprob},
        { id: 156, name: '바다요정 쿠키의 영혼석', rarity:'legendarysoulgem', probability :legendaryprob},
        { id: 157, name: '용과 드래곤 쿠키의 영혼석', rarity:'dragonsoulgem', probability :dragonprob},
        { id: 158, name: '동백꽃맛 쿠키의 영혼석', rarity:'superepicsoulgem', probability :superEpicprob},
        { id: 159, name: '요정왕 쿠키의 영혼석', rarity:'superepicsoulgem', probability :superEpicprob},
        { id: 160, name: '크림슨 코랄 쿠키의 영혼석', rarity:'superepicsoulgem', probability :superEpicprob},
        { id: 161, name: '샤이닝글리터맛 쿠키의 영혼석', rarity:'superepicsoulgem', probability :superEpicprob},
        { id: 162, name: '캡사이신맛 쿠키의 영혼석', rarity:'superepicsoulgem', probability :superEpicprob},
        { id: 163, name: '스타더스트 쿠키의 영혼석', rarity:'superepicsoulgem', probability :superEpicprob},
        { id: 164, name: '소르베맛 쿠키의 영혼석', rarity:'superepicsoulgem', probability :superEpicprob},
        { id: 165, name: '오이스터맛 쿠키의 영혼석', rarity:'superepicsoulgem', probability :superEpicprob},
        { id: 166, name: '클로티드 크림 쿠키의 영혼석', rarity:'superepicsoulgem', probability :superEpicprob},
        { id: 167, name: '웨딩케이크맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 168, name: '블랙사파이어맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 169, name: '캔디애플맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 170, name: '옥춘맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 171, name: '그린티무스맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 172, name: '초코드리즐 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 173, name: '아라모드맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 174, name: '금계화맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 175, name: '단계화맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 176, name: '스모크치즈맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 177, name: '넛맥타이거맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 178, name: '별산호맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 179, name: '복사꽃맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 180, name: '구름해태맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 181, name: '성게맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 182, name: '생토노레맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 183, name: '버터롤맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 184, name: '말차맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 185, name: '수은기사 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 186, name: '은방울맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 187, name: '의적맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 188, name: '크림브륄레맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 189, name: '린저 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 190, name: '모짜렐라맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 191, name: '올리브맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 192, name: '페투치니맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 193, name: '바스크치즈맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 194, name: '프릴해파리맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 195, name: '박하사탕맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 196, name: '블랙레모네이드맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 197, name: '락스타맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 198, name: '타르트타탕맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 199, name: '로얄마가린맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 200, name: '퀸아망 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 201, name: '푸룬주스 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 202, name: '에일리언 도넛의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 203, name: '블루파이맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 204, name: '밀키웨이맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 205, name: '예언자맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 206, name: '솔방울맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 207, name: '음유시인맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 208, name: '마카롱맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 209, name: '찰스의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 210, name: '검볼다이버맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 211, name: '캡틴캐비어맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 212, name: '크림 유니콘 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 213, name: '휘낭시에맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 214, name: '크런치초코칩 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 215, name: '와일드베리맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 216, name: '벚꽃맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 217, name: '흑당맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 218, name: '아포가토맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 219, name: '실론나이트맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 220, name: '에클레어맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 221, name: '코코아맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 222, name: '목화맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 223, name: '펌킨파이맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 224, name: '트위즐젤리맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 225, name: '마라맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 226, name: '달토끼맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 227, name: '라즈베리맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 228, name: '파로페맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 229, name: '오징어먹물맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 230, name: '샤벳상어맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 231, name: '라일락맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 232, name: '망고맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 233, name: '벨벳케이크맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 234, name: '페스츄리맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 235, name: '무화과맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 236, name: '딸기크레페맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 237, name: '블랙레이즌맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 238, name: '아몬드맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 239, name: '라떼맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 240, name: '구미호맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 241, name: '민트초코맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 242, name: '웨어울프맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 243, name: '칠리맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 244, name: '다크초코맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 245, name: '눈설탕맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 246, name: '감초맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 247, name: '스파클링맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 248, name: '뱀파이어맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 249, name: '우유맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 250, name: '석류맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 251, name: '허브맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 252, name: '독버섯맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 253, name: '자색고구마맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 254, name: '정글전사 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 255, name: '호밀맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 256, name: '에스프레소맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 257, name: '마들렌맛 쿠키의 영혼석', rarity:'epicsoulgem', probability :epicsoulgemprob},
        { id: 258, name: '악마맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 259, name: '커스터트 3세맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 260, name: '블랙베리맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 261, name: '아보카도맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 262, name: '당근맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 263, name: '체리맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 264, name: '양파맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 265, name: '용사맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 266, name: '버블껌맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 267, name: '탐험가맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 268, name: '연금술사맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 269, name: '팬케이크맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 270, name: '클로버맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 271, name: '공주맛 쿠키의 영혼석', rarity:'raresoulgem', probability :raresoulgemprob},
        { id: 272, name: '비트맛 쿠키의 영혼석', rarity:'commonsoulgem', probability :commonprob},
        { id: 273, name: '근육맛 쿠키의 영혼석', rarity:'commonsoulgem', probability :commonprob},
        { id: 274, name: '닌자맛 쿠키의 영혼석', rarity:'commonsoulgem', probability :commonprob},
        { id: 275, name: '천사맛 쿠키의 영혼석', rarity:'commonsoulgem', probability :commonprob},
        { id: 276, name: '마법사맛 쿠키의 영혼석', rarity:'commonsoulgem', probability :commonprob},
        { id: 277, name: '딸기맛 쿠키의 영혼석', rarity:'commonsoulgem', probability :commonprob},
        { id: 278, name: '용감한 쿠키의 영혼석', rarity:'commonsoulgem', probability :commonprob}

    ];

    const drawBtn = document.getElementById('draw-btn');
    const drawTenBtn = document.getElementById('draw-ten-btn');
    const resultDisplay = document.getElementById('result');
    const historyList = document.getElementById('history-list');
    const itemDisplay = document.querySelector('.item-display');

    // 뽑기 함수 - 애니메이션 없이 즉시 결과 반환
    function drawItem() {
        // 확률에 기반한 아이템 선택 로직
        const totalProbability = items.reduce((sum, item) => sum + item.probability, 0);
        let randomValue = Math.random() * totalProbability;
        let selectedItem;
        
        // 확률에 따른 아이템 선택
        for (const item of items) {
            randomValue -= item.probability;
            if (randomValue <= 0) {
                selectedItem = item;
                break;
            }
        }
        
        // 선택된 아이템이 없으면 첫 번째 아이템 선택 (만일을 위한 안전장치)
        if (!selectedItem) selectedItem = items[0];
        
        // 아이콘 표시
        itemDisplay.textContent = selectedItem.icon;
        
        return selectedItem;
    }

    // 아이템 카드 생성 함수
    function createItemCard(item) {
        const card = document.createElement('div');
        card.className = `item-card ${item.rarity.toLowerCase()}`;
        
        const icon = document.createElement('div');
        icon.className = 'item-icon';
        icon.textContent = item.icon;
        
        const name = document.createElement('div');
        name.className = 'item-name';
        name.textContent = item.name;
        
        const rarity = document.createElement('div');
        rarity.className = 'item-rarity';
        rarity.textContent = getRarityText(item.rarity);
        
        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(rarity);
        
        return card;
    }
    
    // 희귀도 텍스트 변환
    function getRarityText(rarity) {
        switch(rarity) {
            case 'common': return '일반';
            case 'rare': return '희귀';
            case 'EPIC': return '영웅';
            case 'LEGENDARY': return '전설';
            case 'ANCIENT': return '에인션트';
            case 'BEAST': return '비스트';
            case 'DRAGON': return '드래곤';
            case 'SUPER EPIC': return '슈퍼 에픽';
            case 'soulgem': return '영혼석';
            default: return '';
        }
    }

    // 역대 기록 추가
    function addToHistory(item) {
        const li = document.createElement('li');
        li.innerHTML = `${item.icon} ${item.name} <span class="history-rarity">(${getRarityText(item.rarity)})</span>`;
        historyList.prepend(li);
        
        // 기록은 최대 10개만 표시
        if (historyList.children.length > 10) {
            historyList.removeChild(historyList.lastChild);
        }
    }

    // 단일 뽑기 이벤트
    drawBtn.addEventListener('click', () => {
        const item = drawItem();
        
        resultDisplay.innerHTML = '';
        resultDisplay.appendChild(createItemCard(item));
        addToHistory(item);
    });

    // 10연속 뽑기 이벤트
    drawTenBtn.addEventListener('click', () => {
        resultDisplay.innerHTML = '';
        
        for (let i = 0; i < 10; i++) {
            const item = drawItem();
            resultDisplay.appendChild(createItemCard(item));
            addToHistory(item);
        }
    });
});
