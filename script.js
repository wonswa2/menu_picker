const MENUS = {
  한식: [
    { name:'김치찌개', emoji:'🍲', tags:['국물','매콤한','든든한'] },
    { name:'된장찌개', emoji:'🫕', tags:['국물','구수한','든든한'] },
    { name:'제육볶음', emoji:'🥩', tags:['매콤한','든든한','볶음'] },
    { name:'비빔밥',   emoji:'🍚', tags:['가벼운','건강한','든든한'] },
    { name:'삼겹살',   emoji:'🥓', tags:['든든한','구이','기름진'] },
    { name:'불고기',   emoji:'🍖', tags:['달콤한','구이','든든한'] },
    { name:'냉면',     emoji:'🍜', tags:['차가운','가벼운','국물'] },
    { name:'순두부찌개',emoji:'🍲',tags:['국물','매콤한','가벼운'] },
    { name:'갈비탕',   emoji:'🍛', tags:['국물','든든한','구수한'] },
    { name:'파전',     emoji:'🥞', tags:['가벼운','바삭한'] },
  ],
  중식: [
    { name:'짜장면',   emoji:'🍝', tags:['든든한','볶음','달콤한'] },
    { name:'짬뽕',     emoji:'🍜', tags:['국물','매콤한','든든한'] },
    { name:'탕수육',   emoji:'🍗', tags:['바삭한','달콤한','든든한'] },
    { name:'마파두부', emoji:'🫕', tags:['매콤한','국물','가벼운'] },
    { name:'볶음밥',   emoji:'🍚', tags:['든든한','볶음','빠른'] },
    { name:'딤섬',     emoji:'🥟', tags:['가벼운','찜','담백한'] },
    { name:'마라탕',   emoji:'🌶️', tags:['매콤한','국물','든든한'] },
    { name:'꿔바로우', emoji:'🍖', tags:['바삭한','달콤한','든든한'] },
  ],
  일식: [
    { name:'초밥',    emoji:'🍣', tags:['가벼운','차가운','담백한'] },
    { name:'라멘',    emoji:'🍜', tags:['국물','든든한','따뜻한'] },
    { name:'돈카츠',  emoji:'🍱', tags:['바삭한','든든한','기름진'] },
    { name:'우동',    emoji:'🍜', tags:['국물','가벼운','따뜻한'] },
    { name:'덮밥',    emoji:'🍚', tags:['든든한','빠른','담백한'] },
    { name:'냉모밀',  emoji:'🍝', tags:['차가운','가벼운','담백한'] },
    { name:'이자카야',emoji:'🍶', tags:['든든한','구이','기름진'] },
    { name:'타코야키',emoji:'🐙', tags:['바삭한','가벼운','빠른'] },
  ],
  양식: [
    { name:'파스타',     emoji:'🍝', tags:['든든한','기름진','달콤한'] },
    { name:'스테이크',   emoji:'🥩', tags:['든든한','구이','기름진'] },
    { name:'피자',       emoji:'🍕', tags:['든든한','기름진','바삭한'] },
    { name:'햄버거',     emoji:'🍔', tags:['든든한','기름진','빠른'] },
    { name:'리조또',     emoji:'🍚', tags:['든든한','따뜻한','구수한'] },
    { name:'샐러드',     emoji:'🥗', tags:['가벼운','건강한','차가운'] },
    { name:'클램차우더', emoji:'🥣', tags:['국물','든든한','따뜻한'] },
    { name:'그라탱',     emoji:'🫕', tags:['든든한','바삭한','기름진'] },
  ],
  분식: [
    { name:'떡볶이',     emoji:'🌶️', tags:['매콤한','달콤한','든든한'] },
    { name:'순대국',     emoji:'🍲', tags:['국물','든든한','구수한'] },
    { name:'라볶이',     emoji:'🍜', tags:['매콤한','든든한','국물'] },
    { name:'김밥',       emoji:'🍙', tags:['가벼운','담백한','빠른'] },
    { name:'튀김',       emoji:'🍤', tags:['바삭한','기름진','가벼운'] },
    { name:'어묵탕',     emoji:'🍢', tags:['국물','가벼운','따뜻한'] },
    { name:'치즈떡볶이', emoji:'🧀', tags:['매콤한','달콤한','든든한'] },
    { name:'쫄면',       emoji:'🍜', tags:['매콤한','차가운','가벼운'] },
  ],
};

// 거절 횟수별 유머 멘트 (크게 표시됨)
const REJECT_MSGS = [
  { emoji:'😅', text:'음... 그럼 다른 거 찾아볼게요!' },
  { emoji:'🤔', text:'이것도 별로예요? 취향이 까다로우시네요.' },
  { emoji:'👀', text:'혹시 이미 드시고 싶은 거 정해두신 거 아닌가요?' },
  { emoji:'😤', text:'4번째 거절이에요. 진짜루요.' },
  { emoji:'😭', text:'제발요... 뭔가 하나는 마음에 드셔야 할 텐데...' },
  { emoji:'🏳️', text:'오늘도 네 말이 맞아... 그냥 알아서 드세요.' },
];

// 힌트 질문 목록
const HINTS = [
  {
    id: 'weight',
    q: '🍽️ 오늘은 어떤 느낌이에요?',
    opts: [
      { label: '🍖 든든하게 먹고 싶어', tag: '든든한', exclude: false },
      { label: '🥗 가볍게 먹고 싶어',   tag: '가벼운', exclude: false },
    ]
  },
  {
    id: 'broth',
    q: '🥣 국물은 어때요?',
    opts: [
      { label: '🍲 국물 있는 거 땡겨', tag: '국물', exclude: false },
      { label: '🍳 국물 없는 게 좋아', tag: '국물', exclude: true  },
    ]
  },
  {
    id: 'spicy',
    q: '🌶️ 매운 거 괜찮아요?',
    opts: [
      { label: '🌶️ 매운 거 완전 좋아', tag: '매콤한', exclude: false },
      { label: '😇 안 매운 거로 줘',   tag: '매콤한', exclude: true  },
    ]
  },
];

const RESULT_MSGS = [
  { max:1,  msg:'첫 번째에 바로 결정! 역시 결단력 있어요 👍' },
  { max:3,  msg:'고민하셨지만 좋은 선택이에요 😊' },
  { max:5,  msg:'쉽지 않으셨죠... 그래도 잘 고르셨어요 🙃' },
  { max:99, msg:'이렇게까지 거절하시다니... 사실 처음부터 이거 드시고 싶으셨던 거 아닌가요? 😏' },
];

let state = {
  cat: null,
  pool: [],
  rejected: [],
  rejectCount: 0,
  currentMenu: null,
  appliedTags: [],   // 현재 반영된 취향 태그
  hintAnswers: {},
};

function getAllMenus() {
  return Object.values(MENUS).flat();
}

function selectCat(el) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  state.cat = el.dataset.cat;
  document.getElementById('start-btn').disabled = false;
}

function startRec() {
  const base = state.cat === '전체' ? getAllMenus() : (MENUS[state.cat] || []);
  state.pool = [...base];
  state.rejected = [];
  state.rejectCount = 0;
  state.hintAnswers = {};
  state.appliedTags = [];
  showScreen('screen-rec');
  updateRejectUI();
  pickAndShow();
}

function getFilteredPool() {
  // 거절된 메뉴 제외
  let pool = state.pool.filter(m => !state.rejected.includes(m.name));
  // 힌트 태그 필터 적용
  Object.values(state.hintAnswers).forEach(({ tag, exclude }) => {
    if (!tag) return;
    const filtered = exclude
      ? pool.filter(m => !m.tags.includes(tag))
      : pool.filter(m =>  m.tags.includes(tag));
    if (filtered.length > 0) pool = filtered;
  });
  return pool;
}

function pickAndShow() {
  const pool = getFilteredPool();
  if (pool.length === 0) { showExhausted(); return; }
  const menu = pool[Math.floor(Math.random() * pool.length)];
  state.currentMenu = menu;

  document.getElementById('menu-emoji').textContent = menu.emoji;
  document.getElementById('menu-name').textContent  = menu.name;
  document.getElementById('menu-tags').innerHTML    = menu.tags.map(t => `<span class="tag">${t}</span>`).join('');

  // 취향 반영 표시
  updateAppliedTags();

  // 카드 애니메이션
  const card = document.getElementById('menu-card');
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = 'fadeUp .3s ease';
}

// 적용된 취향 태그를 화면에 표시
function updateAppliedTags() {
  const zone = document.getElementById('applied-tags-zone');
  const tags = [];
  Object.values(state.hintAnswers).forEach(({ tag, exclude }) => {
    if (!tag) return;
    tags.push(exclude ? `${tag} 제외` : tag);
  });
  if (tags.length > 0) {
    zone.innerHTML = `<div class="applied-bar">✨ 취향 반영 중: ${tags.map(t => `<span class="applied-tag">${t}</span>`).join('')}</div>`;
  } else {
    zone.innerHTML = '';
  }
}

// 거절 UI (멘트 + 힌트 버튼) 업데이트
function updateRejectUI() {
  const msgBox = document.getElementById('reject-msg-box');
  const hintBtn = document.getElementById('hint-trigger-btn');
  const n = state.rejectCount;

  // 유머 멘트 표시
  if (n === 0) {
    msgBox.style.display = 'none';
  } else {
    const msg = REJECT_MSGS[Math.min(n - 1, REJECT_MSGS.length - 1)];
    msgBox.style.display = 'flex';
    msgBox.innerHTML = `<span class="reject-emoji">${msg.emoji}</span><span>${msg.text}</span>`;
  }

  // 2~3회 거절 후 힌트 버튼 자동 표시
  if (n >= 2) {
    hintBtn.style.display = 'block';
  } else {
    hintBtn.style.display = 'none';
  }
}

function rejectMenu() {
  if (!state.currentMenu) return;
  state.rejected.push(state.currentMenu.name);
  state.rejectCount++;

  // 카드 흔들기
  const card = document.getElementById('menu-card');
  card.style.animation = 'shake .4s ease';

  updateRejectUI();

  // 2회 거절 시 힌트 자동 팝업
  if (state.rejectCount === 2) {
    setTimeout(() => showHintPopup(), 500);
  } else {
    setTimeout(pickAndShow, 420);
  }
}

function likeMenu() {
  if (!state.currentMenu) return;
  const card = document.getElementById('menu-card');
  card.style.animation = 'pop .3s ease';
  setTimeout(() => showResult(state.currentMenu), 320);
}

// 힌트 팝업 (2회 거절 시 자동 등장)
function showHintPopup() {
  document.getElementById('hint-overlay').style.display = 'flex';
  const container = document.getElementById('hint-popup-content');
  container.innerHTML = HINTS.map(h => {
    const opts = h.opts.map(o => `
      <button class="hint-opt"
        data-hint="${h.id}" data-tag="${o.tag}" data-exclude="${o.exclude}"
        onclick="toggleHint(this,'${h.id}')">${o.label}</button>
    `).join('');
    return `<div class="hint-card">
      <div class="hint-q">${h.q}</div>
      <div class="hint-opts">${opts}</div>
    </div>`;
  }).join('');
}

function closeHintPopup() {
  document.getElementById('hint-overlay').style.display = 'none';
  pickAndShow();
}

function toggleHint(el, hintId) {
  document.querySelectorAll(`[data-hint="${hintId}"]`).forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
}

function applyHints() {
  state.hintAnswers = {};
  document.querySelectorAll('.hint-opt.selected').forEach(el => {
    state.hintAnswers[el.dataset.hint] = {
      tag: el.dataset.tag,
      exclude: el.dataset.exclude === 'true',
    };
  });
  document.getElementById('hint-overlay').style.display = 'none';
  pickAndShow();
}

function showResult(menu) {
  document.getElementById('result-emoji-big').textContent = menu.emoji;
  document.getElementById('result-menu-name').textContent = menu.name;
  const n = state.rejectCount;
  const entry = RESULT_MSGS.find(e => n <= e.max) || RESULT_MSGS[RESULT_MSGS.length - 1];
  document.getElementById('result-msg').textContent = entry.msg;
  document.getElementById('result-title').textContent =
    n === 0 ? '바로 결정! 🎉' : n <= 3 ? '드디어 결정! 🎉' : '결국 결정... 😮‍💨';
  document.getElementById('reject-count-badge').innerHTML =
    n === 0 ? '한 번에 결정했어요 ✨'
    : `거절 횟수 <strong>${n}번</strong> 끝에 결정했어요`;

  // 반영된 취향도 결과에 표시
  const tags = [];
  Object.values(state.hintAnswers).forEach(({ tag, exclude }) => {
    if (!tag) return;
    tags.push(exclude ? `${tag} 제외` : tag);
  });
  const tagsEl = document.getElementById('result-tags');
  tagsEl.innerHTML = tags.length > 0
    ? `<div class="result-applied">취향 반영: ${tags.map(t=>`<span class="applied-tag">${t}</span>`).join('')}</div>`
    : '';

  showScreen('screen-result');
}

function showExhausted() {
  document.getElementById('menu-card').innerHTML = `
    <div class="exhausted">
      <span class="exhausted-emoji">😤</span>
      <p>카테고리 메뉴를 전부 거절하셨어요.<br>사실 이미 드실 거 정해두신 거 아닌가요?</p>
    </div>`;
  document.querySelector('.action-row').style.display = 'none';
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function resetAll() {
  state = { cat:null, pool:[], rejected:[], rejectCount:0, currentMenu:null, appliedTags:[], hintAnswers:{} };
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('start-btn').disabled = true;
  document.getElementById('hint-overlay').style.display = 'none';
  document.querySelector('.action-row') && (document.querySelector('.action-row').style.display = '');
  document.getElementById('menu-card').innerHTML = `
    <span class="menu-emoji" id="menu-emoji">🍲</span>
    <div class="menu-name" id="menu-name">메뉴 이름</div>
    <div class="menu-tags" id="menu-tags"></div>`;
  showScreen('screen-cat');
}
