// 1. 데이터 정의
const commonQ = [
    { q: "새로운 기술을 배워서 바로 서비스를 만드는 것이 즐거운가요?", t: "gen" },
    { q: "하나의 문제를 끝까지 파고들어 최적의 정답을 찾아내는 것이 좋나요?", t: "skl" },
    { q: "동료들과 소통하며 함께 결과물을 만들어내는 과정이 중요한가요?", t: "gen" },
    { q: "정해진 시간 내에 주어진 과제를 완벽하게 해결할 때 쾌감을 느끼나요?", t: "skl" },
    { q: "트렌디한 최신 기술이나 디자인을 빠르게 습득하고 싶나요?", t: "gen" },
    { q: "반복적인 훈련을 통해 실수를 줄이고 숙련도를 높이는 게 자신 있나요?", t: "skl" },
    { q: "사용자가 실제로 쓰는 앱이나 웹을 개발하는 데 관심이 많나요?", t: "gen" },
    { q: "명확한 성과(메달, 수상)를 내는 것에 동기부여가 크게 되나요?", t: "skl" },
    { q: "자유로운 분위기에서 프로젝트 주제를 직접 정하는 것이 좋은가요?", t: "gen" },
    { q: "정해진 커리큘럼과 규칙에 따라 훈련받는 환경이 좋나요?", t: "skl" },
    { q: "다양한 사람들과 협업하며 대화하는 것이 즐거운가요?", t: "gen" },
    { q: "스스로의 한계를 시험하는 고난도 문제를 풀 때 몰입이 잘 되나요?", t: "skl" }
];

const generalQ = [
    { q: "웹사이트의 인터랙티브한 화면 구성이 흥미로운가요?", target: "frontend" },
    { q: "서버에서 데이터를 처리하고 관리하는 시스템이 궁금한가요?", target: "backend" },
    { q: "서버 배포와 인프라 관리 인프라 구축에 관심이 있나요?", target: "devops" },
    { q: "애플 기기 특유의 사용자 인터페이스를 좋아하나요?", target: "ios" },
    { q: "사용자의 시선을 끄는 예쁜 디자인을 설계하고 싶나요?", target: "design" },
    { q: "게임의 규칙과 물리 엔진을 코드로 구현하고 싶나요?", target: "game" },
    { q: "크로스 플랫폼 앱 개발의 효율성을 경험하고 싶나요?", target: "flutter" },
    { q: "데이터를 학습시켜 예측하는 지능형 모델이 궁금한가요?", target: "ai" },
    { q: "사물을 인터넷에 연결하는 임베디드 코딩이 흥미롭나요?", target: "iot" },
    { q: "화면의 작은 픽셀 하나까지 신경 쓰는 완벽주의자인가요?", target: "frontend" },
    { q: "복잡한 알고리즘으로 데이터를 정렬하는 게 즐거운가요?", target: "backend" },
    { q: "자동화 툴을 사용해 업무 효율을 높이는 걸 좋아하나요?", target: "devops" },
    { q: "Mac OS와 아이폰의 부드러운 애니메이션에 감탄하나요?", target: "ios" },
    { q: "사용자가 겪는 불편함을 디자인으로 해결하고 싶나요?", target: "design" },
    { q: "가상 세계의 물리 법칙을 직접 정의하고 싶나요?", target: "game" },
    { q: "하나의 코드로 모든 기기에서 돌아가는 앱을 만들고 싶나요?", target: "flutter" },
    { q: "방대한 데이터 속에서 패턴을 찾아내는 게 흥미롭나요?", target: "ai" },
    { q: "센서가 달린 하드웨어를 직접 제어하고 싶나요?", target: "iot" },
    { q: "최신 웹 프레임워크 트렌드를 따라가는 게 즐겁나요?", target: "frontend" },
    { q: "안정적이고 보안이 강력한 시스템을 만드는 게 중요할까요?", target: "backend" }
];

const skillQ = [
    { q: "해커들의 침입을 막는 방어 로직을 설계하고 싶나요?", target: "security" },
    { q: "안드로이드 시스템을 극한까지 활용하는 앱을 만들고 싶나요?", target: "mobile" },
    { q: "기계의 관절과 모터를 정밀하게 제어하는 게 즐거운가요?", target: "robotics" },
    { q: "전 세계 인터넷을 연결하는 거대 네트워크 망이 궁금한가요?", target: "network" },
    { q: "수만 대의 서버를 하나처럼 부리는 가상화 기술이 좋나요?", target: "cloud" },
    { q: "컴퓨터 포렌식이나 암호 분석에 흥미가 있나요?", target: "security" },
    { q: "로봇이 주어진 미션을 수행하기 위해 움직이는 게 신기한가요?", target: "robotics" },
    { q: "네트워크 장비(Cisco 등)를 직접 세팅해보고 싶나요?", target: "network" },
    { q: "서버가 절대 죽지 않는 무중단 아키텍처를 배우고 싶나요?", target: "cloud" },
    { q: "정해진 시간 내에 오차 없는 완벽한 결과물을 내는 게 좋나요?", target: "mobile" },
    { q: "리눅스 터미널에서 명령어를 치는 게 멋지다고 생각하나요?", target: "security" },
    { q: "기기의 자원을 효율적으로 사용하는 저수준 코딩이 좋나요?", target: "robotics" },
    { q: "복잡한 케이블과 스위치 장비를 다루는 게 즐겁나요?", target: "network" },
    { q: "클라우드 보안과 트래픽 분산에 관심이 있나요?", target: "cloud" },
    { q: "화이트 해커가 되어 취약점을 찾아보고 싶나요?", target: "security" },
    { q: "다양한 모바일 기기 간의 통신 기술이 궁금한가요?", target: "mobile" },
    { q: "하드웨어 설계와 소프트웨어 개발을 동시에 하고 싶나요?", target: "robotics" },
    { q: "전용 인프라 망을 처음부터 끝까지 구축하고 싶나요?", target: "network" },
    { q: "가상화 운영체제(VM)를 다루는 게 흥미롭나요?", target: "cloud" },
    { q: "최신 보안 프로토콜을 연구하는 걸 좋아하나요?", target: "security" }
];

const resultData = {
    frontend: { n: "프론트엔드", d: "웹사이트의 화면과 사용자 상호작용을 담당합니다.", k: "React, Next.js, TypeScript", a: "사용자의 눈에 가장 먼저 띄는 결과물을 만드세요!" },
    backend: { n: "백엔드", d: "데이터와 서버 엔진을 관리하는 시스템 전문가입니다.", k: "Spring Boot, Node.js, MySQL", a: "보이지 않는 곳에서 견고한 성을 쌓아보세요." },
    devops: { n: "데브옵스", d: "배포 자동화 및 클라우드 운영 전문가입니다.", k: "Docker, AWS, Kubernetes", a: "개발과 운영의 가교 역할을 수행하세요." },
    ios: { n: "iOS 개발", d: "애플 생태계의 고품질 앱을 제작합니다.", k: "Swift, SwiftUI, Xcode", a: "디테일이 살아있는 프리미엄 앱을 만들어보세요." },
    design: { n: "UI/UX 디자인", d: "사용자 중심의 경험과 아름다움을 설계합니다.", k: "Figma, Design System", a: "사용자의 마음을 움직이는 설계를 하세요." },
    game: { n: "게임 개발", d: "가상 세계의 물리 법칙과 로직을 창조합니다.", k: "Unity, C#, Unreal Engine", a: "상상을 플레이로 연결하는 창조자가 되세요." },
    flutter: { n: "플러터", d: "멀티 플랫폼 앱 개발의 효율성 전문가입니다.", k: "Dart, Flutter, Mobile SDK", a: "빠른 아이디어 구현과 생산성을 무기로 가지세요." },
    ai: { n: "인공지능", d: "데이터 속에서 가치를 찾는 모델 개발자입니다.", k: "Python, PyTorch, Big Data", a: "데이터가 들려주는 미래의 소리를 들어보세요." },
    iot: { n: "IoT", d: "사물을 인터넷에 연결하여 제어하는 기술입니다.", k: "Embedded C, Arduino, Sensor", a: "현실의 사물을 코드로 움직여 보세요." },
    security: { n: "사이버 보안", d: "정보를 보호하고 침입을 방어하는 파수꾼입니다.", k: "Forensics, Network Security", a: "정의로운 화이트 해커의 길을 걷게 될 거예요." },
    mobile: { n: "모바일 앱(기능)", d: "기능대회 표준에 맞춘 정교한 기능을 구현합니다.", k: "Android, Kotlin, UI Master", a: "숙련된 기술로 압도적인 퀄리티를 보여주세요." },
    robotics: { n: "모바일 로보틱스", d: "지능형 로봇의 눈과 발을 설계합니다.", k: "Control Engineering, ROS", a: "로봇이 당신의 명령을 기다리고 있습니다." },
    network: { n: "IT 네트워크", d: "전 세계를 잇는 통신 인프라를 구축합니다.", k: "Cisco, TCP/IP, Switching", a: "디지털 세상의 혈관을 만드는 전문가입니다." },
    cloud: { n: "클라우드 컴퓨팅", d: "가상 자원을 효율적으로 관리하는 인프라 전문가입니다.", k: "Cloud Arch, AWS, Linux", a: "클라우드 시대의 핵심 인재가 될 거예요." }
};

// 2. 상태 관리 변수
let phase = 1;
let qIdx = 0;
let typeScore = { gen: 0, skl: 0 };
let majorScore = {};
let finalType = "";

// 3. 실행 함수
function startApp() {
    document.querySelector('.hero').classList.add('hidden'); // 메인 홈 숨기기
    document.getElementById('quiz-section').classList.remove('hidden'); // 퀴즈 보이기
    render();
}

// 메인 페이지 버튼들에 이벤트 연결
document.querySelectorAll('.start-btn').forEach(btn => {
    btn.addEventListener('click', startApp);
});

function render() {
    let qArr = (phase === 1) ? commonQ : (finalType === 'gen' ? generalQ : skillQ);
    
    // 진행도 및 텍스트 업데이트
    document.getElementById('progress-bar').style.width = (qIdx / qArr.length * 100) + "%";
    document.getElementById('quiz-info').innerText = `${qIdx + 1} / ${qArr.length}`;
    document.getElementById('q-text').innerText = qArr[qIdx].q;
}

function onAnswer(val) {
    let point = val - 3; // 5점(+2), 3점(0), 1점(-2)
    
    if (phase === 1) {
        typeScore[commonQ[qIdx].t] += point;
        qIdx++;
        if (qIdx >= commonQ.length) finishPhase1();
        else render();
    } else {
        let qArr = (finalType === 'gen' ? generalQ : skillQ);
        let target = qArr[qIdx].target;
        majorScore[target] = (majorScore[target] || 0) + point;
        qIdx++;
        if (qIdx >= qArr.length) finishPhase2();
        else render();
    }
}

function finishPhase1() {
    finalType = typeScore.gen >= typeScore.skl ? 'gen' : 'skl';
    document.getElementById('popup-overlay').classList.remove('hidden');
    document.getElementById('pop-msg').innerHTML = finalType === 'gen' 
        ? "당신은 <b>협업과 프로젝트 중심의 [일반전공]</b> 성향입니다!<br>이제 세부 전공을 분석해봅시다."
        : "당신은 <b>몰입과 성과 중심의 [기능반]</b> 성향입니다!<br>이제 적합한 종목을 분석해봅시다.";
}

function nextPhase() {
    phase = 2;
    qIdx = 0;
    document.getElementById('popup-overlay').classList.add('hidden');
    document.getElementById('step-badge').innerText = "STEP 2: 세부 전공 추천";
    render();
}

function finishPhase2() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    
    // 점수가 가장 높은 전공 찾기
    const best = Object.keys(majorScore).reduce((a, b) => majorScore[a] > majorScore[b] ? a : b);
    const res = resultData[best];
    
    document.getElementById('res-major-name').innerText = res.n;
    document.getElementById('res-desc').innerText = res.d;
    document.getElementById('res-tech').innerText = res.k;
    document.getElementById('res-advice').innerText = `"${res.a}"`;
}