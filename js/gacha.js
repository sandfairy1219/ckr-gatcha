document.addEventListener('DOMContentLoaded', function() {
    // 아이템 목록 정의 (실제 구현시 더 많은 아이템 추가)
    const items = [
        { id: 1, name: '쉐도우밀크 쿠키',  rarity: 'BEAST', probability: 0.0371  },
        { id: 2, name: '버닝스파이스 쿠키',  rarity: 'BEAST', probability: 0.0371  },
        { id: 3, name: '미스틱플라워 쿠키',  rarity: 'BEAST', probability: 0.0371  },
        { id: 4, name: '세인트릴리 쿠키',  rarity: ' ANCIENT', probability: 0.0472  },
        { id: 5, name: '골드치즈 쿠키',  rarity: 'ANCIENT', probability: 0.0472 },
        { id: 6, name: '다크카카오 쿠키',  rarity: 'ANCIENT', probability: 0.0472  },
        { id: 7, name: '홀리베리 쿠키',  rarity: 'ANCIENT', probability: 0.0472  },
        { id: 8, name: '퓨어바닐라 쿠키',  rarity: 'ANCIENT', probability: 0.0472  },
        { id: 9, name: '바람궁수 쿠키',  rarity: 'LEGENDARY', probability: 0.0472  },
        { id: 10, name: '뇌신무장 쿠키',  rarity: 'LEGENDARY', probability: 0.0472  },
        { id: 11, name: '달빛술사 쿠키',  rarity: 'LEGENDARY', probability: 0.0472  },
        { id: 12, name: '블랙펄 쿠키',  rarity: 'LEGENDARY', probability: 0.0472  },
        { id: 13, name: '서리여왕 쿠키',  rarity: 'LEGENDARY', probability: 0.0472  },
        { id: 14, name: '바다요정 쿠키',  rarity: 'LEGENDARY', probability: 0.0472  },
        { id: 15, name: '용과 드래곤 쿠키',  rarity: 'DRAGON', probability: 0.0472  },
        { id: 16, name: '동백꽃맛 쿠키',  rarity: 'SUPER EPIC', probability: 0.0360  },
        { id: 17, name: '요정왕 쿠키',  rarity: 'SUPER EPIC', probability: 0.0360  },
        { id: 18, name: '크림슨 코랄 쿠키',  rarity: 'SUPER EPIC', probability: 0.0360  },
        { id: 19, name: '샤이닝글리터맛 쿠키',  rarity: 'SUPER EPIC', probability: 0.0360  },
        { id: 20, name: '캡사이신맛 쿠키',  rarity: 'SUPER EPIC', probability: 0.0360  },
        { id: 21, name: '스타더스트 쿠키',  rarity: 'SUPER EPIC', probability: 0.0360  },
        { id: 22, name: '소르베맛 쿠키',  rarity: 'SUPER EPIC', probability: 0.0360  },
        { id: 23, name: '오이스터맛 쿠키',  rarity: 'SUPER EPIC', probability: 0.0360  },
        { id: 24, name: '클로티드 크림 쿠키',  rarity: 'SUPER EPIC', probability: 0.0360  },
        { id: 25, name: '웨딩케이크맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 26, name: '블랙사파이어맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 27, name: '캔디애플맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 28, name: '옥춘맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 29, name: '그린티무스맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 30, name: '초코드리즐 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 31, name: '아라모드맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 32, name: '금계화맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 33, name: '단계화맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 34, name: '스모크치즈맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 35, name: '넛맥타이거맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 36, name: '별산호맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 37, name: '복사꽃맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 38, name: '구름해태맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 39, name: '성게맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 40, name: '생토노레맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 41, name: '버터롤맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 42, name: '말차맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 43, name: '수은기사 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 44, name: '은방울맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 45, name: '의적맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 46, name: '크림브륄레맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 47, name: '린저 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 48, name: '모짜렐라맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },        
        { id: 49, name: '올리브맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 50, name: '페투치니맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 51, name: '바스크치즈맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 52, name: '프릴해파리맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 53, name: '박하사탕맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
        { id: 54, name: '블랙레모네이드맛 쿠키',  rarity: 'EPIC', probability: 0.0301  },
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
        card.className = `item-card ${item.rarity}`;
        
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
            case 'epic': return '영웅';
            case 'legendary': return '전설';
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