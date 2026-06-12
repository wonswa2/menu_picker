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
    { name:'초밥',   emoji:'🍣', tags:['가벼운','차가운','담백한'] },
    { name:'라멘',   emoji:'🍜', tags:['국물','든든한','따뜻한'] },
    { name:'돈카츠', emoji:'🍱', tags:['바삭한','든든한','기름진'] },
    { name:'우동',   emoji:'🍜', tags:['국물','가벼운','따뜻한'] },
    { name:'덮밥',   emoji:'🍚', tags:['든든한','빠른','담백한'] },
    { name:'냉모밀', emoji:'🍝', tags:['차가운','가벼운','담백한'] },
    { name:'이자카야',emoji:'🍶',tags:['든든한','구이','기름진'] },
    { name:'타코야키',emoji:'🐙',tags:['바삭한','가벼운','빠른'] },
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

const HINTS = [
  {
    id:'weight', q:'오늘은 어떤 느낌이세요?',
    opts:[
      { label:'🍖 든든하게 먹고 싶어', tag:'든든한', exclude:false },
      { label:'🥗 가볍게 먹고 싶어',   tag:'가벼운', exclude:false },
    ]
  },
  {
    id:'broth', q:'국물은요?',
    opts:[
      { label:'🍲 국물 있는 거 땡겨',  tag:'국물', exclude:false },
      { label:'🍳 국물 없는 게 좋아',  tag:'국물', exclude:true  },
    ]
  },
  {
    id:'spicy', q:'매운 거 괜찮아요?',
    opts:[
      { label:'🌶️ 매운 거 좋아',  tag:'매콤한', exclude:false },
      { label:'😇 안 매운 거 줘', tag:'매콤한', exclude:true  },
    ]
  },
];

const MOODS = [
  '좋아요, 다른 메뉴 찾아볼게요. 🙂',
  '입맛 찾기가 쉽지 않네요... 🤔',
  '혹시 이미 정해놓은 거 아니죠? 👀',
  '제가 맞출 수 있을까요...? 😅',
  '5번째 거절이에요. 진짜루요. 😤',
  '오늘도 네 말이 맞아... 😶',
  '저 그냥 메뉴판 가져다 드릴게요. 🏳️',
];

const RESULT_MSGS = [
  { max:1,  msg:'와 첫 번째에 바로 골랐네요! 역시 결단력 있어요 👍' },
  { max:3,  msg:'몇 번 고민하셨지만 좋은 선택이에요 😊' },
  { max:5,  msg:'쉽지 않으셨죠... 근데 잘 고르셨어요 🙃' },
  { max:99, msg:'이렇게까지 거절하셨는데... 사실 처음부터 이거 드시고 싶으셨던 거 아닌가요? 😏' },
];

let state = {
  cat: null, pool: [], rejected: [],
  rejectCount: 0, currentMenu: null,
  hintAnswers: {}, hintShown: false,
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
  state.hintShown = false;
  showScreen('screen-rec');
  pickAndShow();
}

function getFilteredPool() {
  let pool = state.pool.filter(m => !state.rejected.includes(m.name));
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
  const card = document.getElementById('menu-card');
  card.style.animation = 'none';
  setTimeout(() => card.style.animation = '', 10);
  updateMood();
}

function updateMood() {
  const n = state.rejectCount;
  document.getElementById('mood-bar').textContent =
    n === 0 ? '오늘 뭐 먹을까요? 🍽️' : MOODS[Math.min(n - 1, MOODS.length - 1)];
}

function rejectMenu() {
  if (!state.currentMenu) return;
  state.rejected.push(state.currentMenu.name);
  state.rejectCount++;
  document.getElementById('menu-card').style.animation = 'shake .4s ease';
  if (state.rejectCount >= 2 && !state.hintShown) {
    document.getElementById('hint-zone').innerHTML = `
      <div class="hint-banner" onclick="showHints()">
        💡 혹시 취향을 좀 더 알려주실래요? →
      </div>`;
  }
  setTimeout(pickAndShow, 420);
}

function likeMenu() {
  if (!state.currentMenu) return;
  document.getElementById('menu-card').style.animation = 'pop .3s ease';
  setTimeout(() => showResult(state.currentMenu), 320);
}

function showHints() {
  state.hintShown = true;
  document.getElementById('hints-container').innerHTML = HINTS.map(h => {
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
  showScreen('screen-hint');
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
  showScreen('screen-rec');
  pickAndShow();
}

function backToRec() {
  showScreen('screen-rec');
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
    : `이 메뉴 고르기까지 <strong>${n}번</strong> 거절하셨어요`;
  showScreen('screen-result');
}

function showExhausted() {
  document.getElementById('menu-card').innerHTML = `
    <div class="exhausted">
      <span class="exhausted-emoji">😤</span>
      <p>카테고리 메뉴를 전부 거절하셨어요.<br>사실 이미 드실 거 정해두신 거 아닌가요?</p>
    </div>`;
  document.querySelector('.action-row').style.display = 'none';
  document.getElementById('hint-zone').innerHTML = '';
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function resetAll() {
  state = { cat:null, pool:[], rejected:[], rejectCount:0, currentMenu:null, hintAnswers:{}, hintShown:false };
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('start-btn').disabled = true;
  document.getElementById('hint-zone').innerHTML = '';
  document.querySelector('.action-row').style.display = '';
  document.getElementById('menu-card').innerHTML = `
    <span class="menu-emoji" id="menu-emoji">🍲</span>
    <div class="menu-name" id="menu-name">메뉴 이름</div>
    <div class="menu-tags" id="menu-tags"></div>`;
  showScreen('screen-cat');
}
