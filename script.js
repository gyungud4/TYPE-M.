const resultData = {
    frontend: {
        n: "프론트엔드 (Frontend)", d: "웹사이트의 화면과 사용자 상호작용을 담당합니다.",
        k: "HTML, CSS, JS, React", a: "프론트엔드 전공은 이론만 공부하기 보다는 직접 만들어보고 경험해 보아야 빨리 성장하게 됩니다. \n굳이 팀 프로젝트가 아니더라도 개인 프로젝트를 많이 진행하면서 실력을 쌓아보세요."
    },
    backend: {
        n: "백엔드 (Backend)", d: "데이터와 서버 엔진을 관리하는 시스템 전문가입니다.",
        k: "Java, Spring Boot, MySQL", a: "백엔드(Back-end)는 사용자가 직접 보지 못하는 서버 측 영역으로, \n클라이언트의 요청을 받아 처리하고 데이터를 저장·관리·응답하는 모든 것을 담당합니다."
    },
    devops: {
        n: "데브옵스 (DevOps)", d: "배포 자동화 및 클라우드 운영 전문가입니다.",
        k: "Linux, Docker, AWS", a: "로그가 답이다. 서버, 클라이언트 어디서 오류가 나도 로그를 보면 해결할 수 있습니다. \n네트워크, 컨테이너, 클라우드부터 자동화까지 폭넓은 지식이 필요하지만, 검은 화면 가득한 영어들이 손에 익으면 어디서든 살아남습니다."
    },
    ios: {
        n: "iOS", d: "Apple 플랫폼 위에서 가장 자연스러운 흐름을 만듭니다. ",
        k: " Swift, CoreAnimation, Apple HIG", a: "iOS 개발은 처음부터 쉬운 분야는 아닙니다.Swift, UIKit, SwiftUI 등 Apple만의 개발 방식과 생태계를 이해해야 하며작은 디테일까지 완성도로 이어지는 분야입니다. \n하지만 그만큼 iPhone, MacBook, Apple Watch까지하나의 흐름처럼 연결되는 Apple만의 고급스러운 경험을 직접 구현할 수 있습니다. \n흔한 길은 아니지만,완성도 하나만으로도 존재감을 증명할 수 있는 분야입니다."

    },
    design: {
        n: "UI/UX 디자인", d: "사용자 중심의 경험과 아름다움을 설계합니다."
        , k: "Figma, Design System", a: "UI/UX 디자인은 단순히 예쁜 화면을 만드는 게 아니라, 사용자가 불편함 없이 원하는 목표에 도달하도록 돕는 설계하는 과정입니다. \n툴(Figma) 사용 능력도 중요하지만 \"왜 이렇게 만들었는가\"를 설명할 수 있는 사고력이 훨씬 중요합니다. \n또한 저는 실제 프로젝트 경험이 곧 실력이라고 생각하므로 작은 프로젝트라도 경험을 많이 쌓으면 좋겠습니다."
    },
    game: {
        n: "게임 개발", d: "사람들이 즐기는 게임을 만들어냅니다.",
        k: "Unity, C#", a: "개발 능력 뿐만 아니라 감과 창의력도 매우 중요합니다. \n클라이언트, 서버, 모델링, 사운드 등 다양한 세부 전공이 있습니다. \n실력과 운이 따라준다면 제일 높은 고점을 가지는 전공입니다. \n주의) 게임과 게임 개발에는 많은 차이가 있습니다"
    },
    flutter: {
        n: "플러터 (Flutter)", d: "멀티 플랫폼 앱 개발의 효율성 전문가입니다.",
        k: "Dart, Flutter", a: "Flutter는 코드를 작성하면 만들어지는 UI를 바로 확인하며 개발할 수 있는 크로스 플랫폼 기술입니다. \n하나의 코드로 안드로이드와 iOS 앱을 모두 개발할 수 있는 만큼, 단순히 화면 구현만 하기보다 구조와 원리를 함께 이해하며 공부하는 것이 중요합니다. \n처음에는 어려울 수 있지만 직접 프로젝트를 개발하고 협업하는 경험이 쌓일수록 빠르게 성장할 수 있는 분야라고 생각합니다."
    },
    ai: {
        n: "AI", d: "데이터 속에서 가치를 찾는 모델 개발자입니다.",
        k: "Python, PyTorch", a: "처음에 이론이 많아서 어렵고, 힘들 수 있습니다. 그래도 가장 미래지향적인 전공이고, 앞으로 활용 범위가 계속 넓어질 분야입니다."
    },
    iot: {
        n: "IoT", d: "사물을 인터넷에 연결하여 제어하는 기술입니다.",
        k: "Embedded C, Arduino", a: "IOT는 임베디드와 달리 통신 기술도 함께 사용하는 전공입니다. \n여러 가지 하드웨어 센서를 다루고 DB 연결 같은 다양한 지식도 필요합니다. \n배워야 할 것이 많은 전공이지만, 하드웨어를 직접 다루기 때문에 AI로 완전히 대체되기 어려운 분야라고 생각합니다."
    },
    security: {
        n: "사이버 보안", d: "정보를 보호하고 침입을 방어하는 기입니다.",
        k: "Network, Linux, Forensics",
        a: "기초를 탄탄히 해야 나중에 후배들에게 따라잡히지 않습니다. \n CS, CPU, 메모리, 프로그래밍 언어 등 여러가지 방면의 지식을 가지세요. \n 기초장벽이 높은 전공이라 초반이 힘들테지만 고점이 높으니 버텨내세요."
    },
    mobile: {
        n: "모바일 앱 개발", d: "스마트폰 자원을 활용한 정교한 기능을 구현합니다.",
        k: "Android, Kotlin", a: "Flutter는 코드를 작성하면 만들어지는 UI를 바로 확인하며 개발할 수 있는 크로스 플랫폼 기술입니다. \n하나의 코드로 안드로이드와 iOS 앱을 모두 개발할 수 있는 만큼, 단순히 화면 구현만 하기보다 구조와 원리를 함께 이해하며 공부하는 것이 중요합니다. \n처음에는 어려울 수 있지만 직접 프로젝트를 개발하고 협업하는 경험이 쌓일수록 빠르게 성장할 수 있는 분야라고 생각합니다."
    },
    robotics: {
        n: "모바일 로보틱스", d: "지능형 로봇의 두뇌와 움직임을 설계합니다.",
        k: "Control Eng, ROS, C++", a: "하드웨어라는 또 다른 지식을 요구하는 만큼 시간을 많이 투자해야 합니다. \n또한 주어진 과제에 맞춰 알고리즘과 로봇을 설계하는 유연한 사고가 필요합니다."
    },
    network: {
        n: "IT 네트워크 시스템", d: "전 세계를 잇는 통신 인프라를 구축합니다.",
        k: "Network, Cisco, TCP/IP", a: "다양한 운영체제 환경에서 네트워크를 구성하거나, 가상의 라우터, 스위치를 통해 네트워크를 구성하는 직종입니다. \n익혀야할 이론이 많은 만큼 처음에 기초지식을 잘 쌓아두어야 합니다. \n처음에 다가오기 힘든 전공이긴 하지만, 자신이 잘 할 수 있다는 의지만 있으면 좋은 전공이 될 것입니다."
    },
    cloud: {
        n: "클라우드 컴퓨팅", d: "필요한 서버와 저장공간을 인터넷으로 빌려 사용하는 기술입니다.",
        k: "Network, Linux, AWS, Container", a: "직접 컴퓨터를 다 준비하지 않아도 필요한 만큼 빌려 쓸 수 있습니다. \n웹사이트, 게임, AI 서비스까지 대부분 클라우드 위에서 동작합니다."
    }
};

const commonQ = [
    { q: "기능이 조금 완벽하지 않더라도, 일단 결과물이 눈에 빠르게 보이는 게 좋다.", t: "gen" },
    { q: "코드가 왜 실행되는지 원리를 모르면 답답하다. 이론부터 제대로 이해하고 넘어가야 한다.", t: "skl" },
    { q: "혼자 구글링하며 만드는 것보다, 친구들과 역할 분담해서 하나의 큰 프로젝트를 합칠 때가 재밌다.", t: "gen" },
    { q: "시간 제한이 있거나 랭킹이 매겨지는 코딩 챌린지 같은 승부욕 자극하는 상황을 즐긴다.", t: "skl" },
    { q: "새로운 툴이나 단축키, 신기술이 나왔다고 하면 일단 내 컴퓨터에 다 깔아서 써보는 편이다.", t: "gen" },
    { q: "이것저것 얕게 아는 것보다, 기왕 시작한 거 하나만큼은 전교에서 제일 잘하고 싶다.", t: "skl" },
    { q: "내가 만든 결과물을 친구들이 직접 써보고 피드백을 남겨줄 때 가장 짜릿하다.", t: "gen" },
    { q: "자유로운 칭찬보다는 대회 상장, 자격증, 점수처럼 내 실력이 숫자로 증명될 때 더 불타오른다.", t: "skl" },
    { q: "누가 가이드라인을 정해주는 것보다, 내가 만들고 싶은 주제를 내 맘대로 기획하는 게 편하다.", t: "gen" },
    { q: "매일 정해진 시간표와 훈련 루틴이 빡빡하게 짜여있어야 오히려 딴짓 안 하고 집중이 잘 된다.", t: "skl" },
    { q: "개발 실력도 중요하지만, 내 생각을 남들에게 말로 잘 설명하고 조율하는 것도 자신 있다.", t: "gen" },
    { q: "코드 에러가 안 풀리면 밥 먹을 때나 씻을 때도 계속 머릿속에 맴돌아서 끝까지 붙잡고 있는다.", t: "skl" }
];

const generalQ = [
    { q: "인터넷 사이트를 볼 때, 버튼의 움직임이나 화면 전환 효과 같은 '시각적 디테일'에 눈길이 간다.", target: "frontend" },
    { q: "눈에 보이는 화면보다는, 회원가입이나 로그인 시 데이터가 처리되는 '보이지 않는 규칙'이 궁금하다.", target: "backend" },
    { q: "컴퓨터에 프로그램 설치할 때 환경 변수를 설정하거나 폴더 구조를 깔끔하게 정리하는 걸 좋아한다.", target: "devops" },
    { q: "평소 맥북이나 아이폰, 아이패드 특유의 부드러운 터치감과 UX를 유독 선호한다.", target: "ios" },
    { q: "아무리 기능이 좋아도 UI가 투박하거나 쓰기 불편하면 '내가 바꾸고 싶다'는 생각이 먼저 든다.", target: "design" },
    { q: "게임을 할 때 플레이하는 것보다 캐릭터의 공격 속도나 데미지 공식 같은 게임 속 시스템(룰)에 관심이 많다.", target: "game" },
    { q: "하나의 코드로 아이폰과 갤럭시 양쪽에서 모두 똑같이 굴러가게 만드는 효율적인 방식이 마음에 든다.", target: "flutter" },
    { q: "유튜브나 인스타그램 돋보기에 내 취향의 글만 귀신같이 뜨는 알고리즘의 원리가 궁금하다.", target: "ai" },
    { q: "스마트 기기나 홈 IoT 제품처럼 기계와 인터넷을 연결해서 원격 제어하는 스마트 홈 기술이 재밌어 보인다.", target: "iot" },
    { q: "인터넷 창을 늘리거나 줄였을 때 글자가 깨지거나 줄바꿈이 어색하면 왠지 고쳐주고 싶다.", target: "frontend" },
    { q: "엑셀이나 텍스트로 된 엄청나게 많은 데이터 중에서 필요한 조건만 쏙쏙 골라내서 정리하는 게 편하다.", target: "backend" },
    { q: "프로그램을 매번 수동으로 실행하고 테스트하는 과정이 귀찮아서 자동으로 돌아가게 세팅하고 싶다.", target: "devops" },
    { q: "애플 특유의 미니멀한 디자인 감성과 전용 앱 생태계에 유독 관심이 많다.", target: "ios" },
    { q: "학교 과제로 PPT를 만들 때 폰트, 정렬, 색상 조합 등 레이아웃에 신경을 많이 쓰는 편이다.", target: "design" },
    { q: "내가 구상한 가상 세계관 속에서 몬스터와 캐릭터들이 내 맘대로 움직이는 세상을 구현해보고 싶다.", target: "game" },
    { q: "똑같은 기능을 플랫폼별로 두 번씩 따로 개발하는 건 시간 낭비라고 생각한다.", target: "flutter" },
    { q: "컴퓨터에게 무수한 정답 데이터를 주고 학습시켜서, 컴퓨터가 스스로 예측을 내놓는 과정이 흥미롭다.", target: "ai" },
    { q: "코딩 모니터만 보고 있는 것보다는 센서, 모듈 같은 실제 전기 부품들을 직접 손으로 만지는 게 덜 지루하다.", target: "iot" },
    { q: "하루가 다르게 바뀌는 트렌디한 인터넷 유행이나 새로운 웹 기술 소식을 찾아보는 게 흥미롭다.", target: "frontend" },
    { q: "수많은 사람이 동시에 접속해도 서버가 터지지 않게 튼튼한 방어벽과 뼈대를 설계하고 싶다.", target: "backend" }
];

const skillQ = [
    { q: "시스템의 허점을 찾아서 뚫으려는 사람과, 그걸 막으려는 사람 간의 두뇌 싸움에 매력을 느낀다.", target: "security" },
    { q: "스마트폰을 쓸 때 배터리나 메모리가 낭비되지 않도록 백그라운드 앱을 칼같이 정리하고 관리한다.", target: "mobile" },
    { q: "코딩한 결과가 화면에 글자로만 뜨는 것보다, 현실의 로봇이나 기계 장치가 직접 움직여야 실감이 난다.", target: "robotics" },
    { q: "우리가 매일 쓰는 와이파이나 인터넷 선을 타고 데이터가 목적지까지 찾아가는 흐름이 궁금하다.", target: "network" },
    { q: "내 컴퓨터 한 대를 쓰는 걸 넘어서, 거대한 가상 컴퓨터 수십 대를 원격으로 제어하는 큰 규모의 일에 끌린다.", target: "cloud" },
    { q: "추리 소설처럼 숨겨진 컴퓨터 안의 기록들을 추적하거나 꽁꽁 잠긴 비밀번호를 푸는 과정이 흥미롭다.", target: "security" },
    { q: "내가 직접 실시간으로 조종하지 않아도, 센서가 알아서 주변을 판단하고 자율적으로 움직이는 기계가 신기하다.", target: "robotics" },
    { q: "복잡하게 꼬인 수많은 랜선과 대형 인터넷 장비들을 내 손으로 직접 연결하고 세팅해보고 싶다.", target: "network" },
    { q: "학교 서버나 회사 시스템이 어떤 정전이나 사고 상황에서도 24시간 절대 꺼지지 않게 백업망을 짜고 싶다.", target: "cloud" },
    { q: "0.1초의 아주 작은 렉이나 미세한 오차도 허용하지 않는 완벽하게 타이트한 프로그램을 만들고 싶다.", target: "mobile" },
    { q: "마우스 클릭으로 일하는 것보다, 검은 화면에 타자가 보이지 않을 정도로 명령어를 쳐서 컴퓨터를 다루는 게 멋지다.", target: "security" },
    { q: "컴퓨터 성능이 나빠도 버벅이지 않도록 메모리를 아주 아끼고 쪼개서 쓰는 효율적인 코딩을 배우고 싶다.", target: "robotics" },
    { q: "갑자기 인터넷이 끊겼을 때, 공유기나 선 문제를 시작으로 어디가 고장 났는지 차근차근 찾아 고치는 걸 잘한다.", target: "network" },
    { q: "실제 컴퓨터 여러 대를 살 필요 없이, 가상으로 여러 대의 컴퓨터 환경을 띄워서 관리하는 기술이 궁금하다.", target: "cloud" },
    { q: "시스템의 약점을 미리 분석해서 해킹당하기 전에 튼튼하게 구멍을 메우는 예방 작업에 관심이 많다.", target: "security" },
    { q: "블루투스나 무선 네트워크가 끊김 없이 부드럽게 연결되는 모바일 최적화 기술에 관심이 많다.", target: "mobile" },
    { q: "회로도를 보고 납땜하는 하드웨어 지식과, 그걸 움직이는 소프트웨어 지식을 모두 갖춘 만능이 되고 싶다.", target: "robotics" },
    { q: "우리 팀원들만 접속할 수 있는 안전하고 비밀스러운 단독 인터넷 망을 처음부터 끝까지 구축해보고 싶다.", target: "network" },
    { q: "윈도우나 리눅스 같은 컴퓨터 운영체제(OS)의 가장 깊숙한 핵심 시스템이 어떻게 돌아가는지 궁금하다.", target: "cloud" },
    { q: "아무리 똑똑한 사람이라도 절대 해독할 수 없는 나만의 완벽한 암호나 보안 장치를 만들고 싶다.", target: "security" }
];

let phase = 1; let qIdx = 0; let typeScore = { gen: 0, skl: 0 }; let majorScore = {}; let finalType = ""; let currentUserId = null;


function startQuiz() {
    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    render();
}

function render() {
    let qArr = (phase === 1) ? commonQ : (finalType === 'gen' ? generalQ : skillQ);
    document.getElementById('progress-bar').style.width = (qIdx / qArr.length * 100) + "%";
    document.getElementById('quiz-info').innerText = `${qIdx} / ${qArr.length}`;
    if (qIdx < qArr.length) {
        document.getElementById('q-text').innerText = qArr[qIdx].q;
    }
    window.scrollTo(0, 0);
}

function onAnswer(val) {
    let point = val - 3;
    let qArr = (phase === 1) ? commonQ : (finalType === 'gen' ? generalQ : skillQ);
    if (phase === 1) {
        typeScore[commonQ[qIdx].t] += point;
        qIdx++;
        if (qIdx >= commonQ.length) finishPhase1(); else render();
    } else {
        let target = qArr[qIdx].target;
        majorScore[target] = (majorScore[target] || 0) + point;
        qIdx++;
        if (qIdx >= qArr.length) finishPhase2(); else render();
    }
}

function finishPhase1() {
    finalType = typeScore.gen >= typeScore.skl ? 'gen' : 'skl';
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('mid-result-section').classList.remove('hidden');
    const typeName = finalType === 'gen' ? '일반 전공 타입' : '기능반 타입';
    const typeDesc = finalType === 'gen' ? '실무 역량과 프로젝트 협업을 즐기는 당신!' : '심화된 기술 습득과 문제 해결에 몰입하는 당신!';
    document.getElementById('user-type-text').innerText = typeName;
    document.getElementById('type-desc').innerText = typeDesc;
}

function startPhase2() {
    phase = 2; qIdx = 0;
    document.getElementById('mid-result-section').classList.add('hidden');
    document.getElementById('quiz-section').classList.remove('hidden');
    document.getElementById('step-badge').innerText = "STEP 2: 세부 분야 추천";
    render();
}

function finishPhase2() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');


    const genMajors = ['frontend', 'backend', 'devops', 'ios', 'design', 'game', 'flutter', 'ai', 'iot'];
    const skillMajors = ['security', 'mobile', 'robotics', 'network', 'cloud'];

    const targetKeys = (finalType === 'gen') ? genMajors : skillMajors;

    const best = targetKeys.reduce((a, b) => {
        return (majorScore[a] || 0) >= (majorScore[b] || 0) ? a : b;
    }, targetKeys[0]);

    const res = resultData[best];
    document.getElementById('res-major-name').innerText = res.n;
    document.getElementById('res-desc').innerText = res.d;
    document.getElementById('res-tech').innerText = "핵심 기술: " + res.k;
    document.getElementById('res-advice').innerText = `"${res.a}"`;
}


function openInfo() { document.getElementById('info-modal').style.display = 'flex'; }
function openLogin() { document.getElementById('login-modal').style.display = 'flex'; }
function openSignup() { closeModal('login-modal'); document.getElementById('signup-modal').style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function handleLogin() {
    const id = document.getElementById('login-id').value;
    const pw = document.getElementById('login-pw').value;
    const userData = localStorage.getItem(id);
    if (userData) {
        const user = JSON.parse(userData);
        if (user.pw === pw) {
            alert(user.name + "님 환영합니다!");
            currentUserId = id;
            document.getElementById('auth-area').innerHTML = `<span style="margin-right:10px; font-weight:bold; color:#00458a;">${user.name}님</span><button class="login-btn" onclick="location.reload()">로그아웃</button>`;
            closeModal('login-modal');
        } else alert("비밀번호가 일치하지 않습니다.");
    } else alert("아이디가 존재하지 않습니다.");
}

function handleSignup() {
    const dept = document.getElementById('signup-dept').value;
    const name = document.getElementById('signup-name').value;
    const id = document.getElementById('signup-id').value;
    const pw = document.getElementById('signup-pw').value;


    if (!dept || !name || !id || !pw) {
        return alert("모든 항목을 입력해주세요.");
    }


    const existingUser = localStorage.getItem(id);
    if (existingUser) {
        return alert("이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.");
    }

    localStorage.setItem(id, JSON.stringify({ dept, name, id, pw }));
    alert("회원가입 완료!");
    closeModal('signup-modal');
    openLogin();
}

function saveMyResult() {
    if (!currentUserId) { alert("로그인 후 이용해주세요."); openLogin(); return; }
    const majorName = document.getElementById('res-major-name').innerText;
    const date = new Date().toLocaleDateString();
    let savedResults = JSON.parse(localStorage.getItem(`results_${currentUserId}`)) || [];
    savedResults.push({ id: Date.now(), major: majorName, date: date });
    localStorage.setItem(`results_${currentUserId}`, JSON.stringify(savedResults));
    alert("결과가 저장되었습니다!");
}

function showSavedResults() {
    if (!currentUserId) { alert("로그인 후 이용해주세요."); openLogin(); return; }
    const container = document.getElementById('result-list-container');
    const savedResults = JSON.parse(localStorage.getItem(`results_${currentUserId}`)) || [];
    if (savedResults.length === 0) {
        container.innerHTML = "<p style='padding:20px; color:#94a3b8;'>저장된 결과가 없습니다.</p>";
    } else {
        container.innerHTML = savedResults.map(res => `
            <div class="result-item">
                <div><strong style="color:#00458a;">${res.major}</strong><br><small style="color:#999;">${res.date}</small></div>
                <button class="delete-btn" onclick="deleteResult(${res.id})"><i class="fas fa-trash-alt"></i></button>
            </div>
        `).join('');
    }
    document.getElementById('result-list-modal').style.display = 'flex';
}

function deleteResult(id) {
    if (!confirm("이 결과를 삭제하시겠습니까?")) return;
    let savedResults = JSON.parse(localStorage.getItem(`results_${currentUserId}`)) || [];
    savedResults = savedResults.filter(res => res.id !== id);
    localStorage.setItem(`results_${currentUserId}`, JSON.stringify(savedResults));
    showSavedResults();
}

function toggleCredits() {
    const moreNames = document.getElementById('more-names');
    const btnMore = document.getElementById('btn-more');


    if (moreNames.style.display === 'none') {
        moreNames.style.display = 'block';
        btnMore.innerText = '[ 닫기 ]';
    } else {
        moreNames.style.display = 'none';
        btnMore.innerText = '[ 더보기 ]';
    }
}