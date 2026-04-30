// 1. 데이터 정의
const commonQ = [
    { q: "새로운 앱이나 서비스를 기획하고 직접 만들어보는 과정이 즐거운가요?", t: "gen" },
    { q: "어려운 수학 문제를 풀 때처럼, 정답을 찾을 때까지 끝까지 파고드는 편인가요?", t: "skl" },
    { q: "여러 사람과 아이디어를 나누며 하나의 결과물을 완성하는 게 중요한가요?", t: "gen" },
    { q: "정해진 규칙과 시간 내에 주어진 과제를 완벽하게 해결할 때 뿌듯함을 느끼나요?", t: "skl" },
    { q: "최신 유행하는 기술이나 예쁜 디자인을 빠르게 배우고 적용하고 싶나요?", t: "gen" },
    { q: "반복적인 연습을 통해 실수를 줄이고 기술의 숙련도를 높이는 데 자신 있나요?", t: "skl" },
    { q: "내가 만든 프로그램을 사람들이 실제로 사용하는 모습에 관심이 많나요?", t: "gen" },
    { q: "대회 수상이나 메달처럼 명확한 성과를 내는 것이 본인에게 큰 동기부여가 되나요?", t: "skl" },
    { q: "자유로운 분위기에서 프로젝트의 주제를 직접 정하고 진행하는 것이 좋은가요?", t: "gen" },
    { q: "정해진 교육 과정과 규칙에 따라 집중적으로 훈련받는 환경이 더 잘 맞나요?", t: "skl" },
    { q: "다양한 사람들과 소통하며 협업하는 과정에서 에너지를 얻나요?", t: "gen" },
    { q: "스스로의 한계를 시험하는 고난도의 기술적 문제를 풀 때 몰입이 잘 되나요?", t: "skl" }
];

const generalQ = [
    { q: "웹사이트의 화려하고 인터랙티브한 화면을 직접 구성해보고 싶나요?", target: "frontend" },
    { q: "데이터를 안전하게 처리하고 관리하는 시스템의 뒷부분이 궁금한가요?", target: "backend" },
    { q: "서버를 구축하고 프로그램이 잘 돌아가도록 환경을 관리하는 일에 관심이 있나요?", target: "devops" },
    { q: "아이폰 전용 앱의 부드럽고 세련된 인터페이스를 구현하고 싶나요?", target: "ios" },
    { q: "사용자가 편리함을 느끼도록 아름다운 화면을 설계하고 싶나요?", target: "design" },
    { q: "게임의 캐릭터와 세계가 돌아가는 규칙을 코드로 직접 만들고 싶나요?", target: "game" },
    { q: "안드로이드와 아이폰에서 동시에 작동하는 효율적인 앱을 만들고 싶나요?", target: "flutter" },
    { q: "데이터를 학습시켜 스스로 판단하는 지능형 모델을 만드는 게 흥미로운가요?", target: "ai" },
    { q: "실제 사물을 인터넷에 연결하여 스마트하게 조종하는 기술이 궁금한가요?", target: "iot" },
    { q: "화면 위 버튼 하나, 픽셀 하나의 위치까지 신경 쓰는 꼼꼼한 성격인가요?", target: "frontend" },
    { q: "복잡한 알고리즘을 사용해 데이터를 논리적으로 처리하는 게 즐거운가요?", target: "backend" },
    { q: "반복되는 작업을 자동화하여 업무 효율을 높이는 시스템을 만들고 싶나요?", target: "devops" },
    { q: "애플 기기 특유의 디자인 감성과 애니메이션을 좋아하나요?", target: "ios" },
    { q: "사람들이 앱을 쓰며 겪는 불편함을 디자인으로 해결해주고 싶나요?", target: "design" },
    { q: "가상 세계 속의 물리 법칙이나 인공지능 로직을 직접 짜보고 싶나요?", target: "game" },
    { q: "하나의 코드로 여러 기기에서 실행되는 크로스 플랫폼 기술에 관심이 있나요?", target: "flutter" },
    { q: "수많은 데이터 속에서 의미 있는 패턴과 통계를 찾아내는 일이 재밌나요?", target: "ai" },
    { q: "센서가 달린 하드웨어를 직접 제어하고 연결하는 것이 흥미로운가요?", target: "iot" },
    { q: "최신 웹 기술 트렌드를 빠르게 따라가고 적용하는 게 즐거운가요?", target: "frontend" },
    { q: "해킹을 방어하거나 시스템의 보안을 강화하는 일에 책임감을 느끼나요?", target: "backend" }
];

const skillQ = [
    { q: "외부의 공격으로부터 정보를 지키는 보안 시스템을 설계하고 싶나요?", target: "security" },
    { q: "스마트폰의 자원을 극한까지 활용하는 정교한 앱을 만들고 싶나요?", target: "mobile" },
    { q: "로봇의 관절과 모터를 세밀하게 조종하는 코딩이 즐거운가요?", target: "robotics" },
    { q: "전 세계의 컴퓨터를 연결하는 네트워크 망의 구조가 궁금한가요?", target: "network" },
    { q: "거대한 가상 서버 인프라를 구축하고 관리하는 전문가가 되고 싶나요?", target: "cloud" },
    { q: "디지털 증거를 분석하거나 암호를 푸는 보안 기술에 흥미가 있나요?", target: "security" },
    { q: "로봇이 주어진 미션을 자율적으로 수행하도록 만드는 게 신기한가요?", target: "robotics" },
    { q: "네트워크 장비를 직접 세팅하고 통신망을 구축해보고 싶나요?", target: "network" },
    { q: "서버가 절대 멈추지 않도록 견고한 아키텍처를 배우고 싶나요?", target: "cloud" },
    { q: "정해진 시간 내에 오차 없는 완벽한 기능을 구현하는 게 자신 있나요?", target: "mobile" },
    { q: "리눅스 터미널 환경에서 명령어를 사용하여 시스템을 다루는 게 멋진가요?", target: "security" },
    { q: "기기의 자원을 효율적으로 사용하는 저수준(Low-level) 코딩에 관심이 있나요?", target: "robotics" },
    { q: "복잡한 네트워크 케이블과 장비들 사이에서 문제를 해결하는 게 즐겁나요?", target: "network" },
    { q: "가상화 기술을 통해 서버 자원을 효율적으로 나누고 관리하고 싶나요?", target: "cloud" },
    { q: "화이트 해커가 되어 시스템의 취약점을 찾고 보안을 강화하고 싶나요?", target: "security" },
    { q: "다양한 모바일 기기 간의 통신 기술과 최적화가 궁금한가요?", target: "mobile" },
    { q: "하드웨어 설계와 소프트웨어 개발을 모두 아우르는 전문가가 되고 싶나요?", target: "robotics" },
    { q: "학교나 회사의 네트워크 인프라를 처음부터 끝까지 구축하고 싶나요?", target: "network" },
    { q: "클라우드 환경에서 운영체제(VM)를 자유자재로 다루는 게 흥미로운가요?", target: "cloud" },
    { q: "최신 보안 프로토콜을 연구하고 안전한 환경을 만드는 걸 좋아하나요?", target: "security" }
];

const resultData = {
    frontend: { n: "프론트엔드 (Frontend)", d: "웹사이트의 화면과 사용자 상호작용을 담당합니다.", k: "HTML, CSS, JavaScript, React", a: "사용자의 눈에 가장 먼저 띄는 결과물을 만드세요!" },
    backend: { n: "백엔드 (Backend)", d: "데이터와 서버 엔진을 관리하는 시스템 전문가입니다.", k: "Java, Spring Boot, MySQL", a: "보이지 않는 곳에서 견고한 성을 쌓아보세요." },
    devops: { n: "데브옵스 (DevOps)", d: "배포 자동화 및 클라우드 운영 전문가입니다.", k: "Linux, Docker, AWS", a: "개발과 운영의 가교 역할을 수행하세요." },
    ios: { n: "iOS 개발 (iOS)", d: "애플 생태계의 고품질 앱을 제작합니다.", k: "Swift, SwiftUI, Xcode", a: "디테일이 살아있는 프리미엄 앱을 만들어보세요." },
    design: { n: "UI/UX 디자인", d: "사용자 중심의 경험과 아름다움을 설계합니다.", k: "Figma, Design System", a: "사용자의 마음을 움직이는 설계를 하세요." },
    game: { n: "게임 개발 (Game)", d: "가상 세계의 물리 법칙과 로직을 창조합니다.", k: "Unity, C#, Unreal Engine", a: "상상을 플레이로 연결하는 창조자가 되세요." },
    flutter: { n: "플러터 (Flutter)", d: "멀티 플랫폼 앱 개발의 효율성 전문가입니다.", k: "Dart, Flutter, Mobile SDK", a: "빠른 아이디어 구현과 생산성을 무기로 가지세요." },
    ai: { n: "인공지능 (AI)", d: "데이터 속에서 가치를 찾는 모델 개발자입니다.", k: "Python, PyTorch, 빅데이터", a: "데이터가 들려주는 미래의 소리를 들어보세요." },
    iot: { n: "IoT", d: "사물을 인터넷에 연결하여 제어하는 기술입니다.", k: "Embedded C, Arduino, Sensor", a: "현실의 사물을 코드로 움직여 보세요." },
    security: { n: "사이버 보안 (Security)", d: "정보를 보호하고 침입을 방어하는 파수꾼입니다.", k: "Forensics, Network Security, Linux", a: "정의로운 화이트 해커의 길을 걷게 될 거예요." },
    mobile: { n: "모바일 앱 개발 (Mobile)", d: "스마트폰의 자원을 활용한 정교한 기능을 구현합니다.", k: "Android, Kotlin, UI Master", a: "숙련된 기술로 압도적인 퀄리티를 보여주세요." },
    robotics: { n: "모바일 로보틱스 (Robotics)", d: "지능형 로봇의 두뇌와 움직임을 설계합니다.", k: "Control Engineering, ROS, C++", a: "로봇이 당신의 명령을 기다리고 있습니다." },
    network: { n: "IT 네트워크 (Network)", d: "전 세계를 잇는 통신 인프라를 구축합니다.", k: "Cisco, TCP/IP, Switching", a: "디지털 세상의 혈관을 만드는 전문가입니다." },
    cloud: { n: "클라우드 컴퓨팅 (Cloud)", d: "가상 자원을 효율적으로 관리하는 인프라 전문가입니다.", k: "Cloud Arch, AWS, 가상화기술", a: "클라우드 시대의 핵심 인재가 될 거예요." }
};

// 2. 상태 관리 변수
let phase = 1;
let qIdx = 0;
let typeScore = { gen: 0, skl: 0 };
let majorScore = {};
let finalType = "";

// 3. 실행 함수
function startApp() {
    document.getElementById('home-section').classList.add('hidden'); // 메인 홈 숨기기
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
        ? "당신은 <b>협업과 프로젝트 중심의 [일반전공]</b> 성향입니다!<br>이제 당신에게 맞는 세부 전공을 찾아봅시다."
        : "당신은 <b>몰입과 성과 중심의 [기능반]</b> 성향입니다!<br>이제 적합한 주력 종목을 찾아봅시다.";
}

function nextPhase() {
    phase = 2;
    qIdx = 0;
    document.getElementById('popup-overlay').classList.add('hidden');
    document.getElementById('step-badge').innerText = "STEP 2: 세부 분야 추천";
    render();
}

function finishPhase2() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    
    // 점수가 가장 높은 전공 찾기
    const best = Object.keys(majorScore).reduce((a, b) => (majorScore[a] || 0) > (majorScore[b] || 0) ? a : b);
    const res = resultData[best];
    
    document.getElementById('res-major-name').innerText = res.n;
    document.getElementById('res-desc').innerText = res.d;
    document.getElementById('res-tech').innerText = res.k;
    document.getElementById('res-advice').innerText = `"${res.a}"`;
}