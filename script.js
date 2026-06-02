const categories = [
  "한식",
  "중식",
  "일식",
  "양식",
  "분식",
];

const menus = [
  { name: "김치찌개", category: "한식", tags: ["국물", "매콤한", "든든한"] },
  { name: "제육볶음", category: "한식", tags: ["볶음", "매콤한", "든든한", "국물없는"] },
  { name: "비빔밥", category: "한식", tags: ["비빔", "매콤한", "가벼운"] },
  { name: "불고기", category: "한식", tags: ["고기", "달콤한", "든든한", "순한", "국물없는"] },
  { name: "부대찌개", category: "한식", tags: ["국물", "매콤한", "든든한"] },
  { name: "잡채", category: "한식", tags: ["볶음", "순한", "든든한", "국물없는"] },
  { name: "된장찌개", category: "한식", tags: ["국물", "순한", "든든한"] },
  { name: "칼국수", category: "한식", tags: ["국물", "순한", "든든한"] },
  { name: "짜장면", category: "중식", tags: ["국물없는", "순한", "든든한"] },
  { name: "짬뽕", category: "중식", tags: ["국물", "매콤한", "든든한"] },
  { name: "탕수육", category: "중식", tags: ["튀김", "순한", "국물없는"] },
  { name: "마파두부", category: "중식", tags: ["국물", "매콤한", "든든한"] },
  { name: "깐풍기", category: "중식", tags: ["튀김", "매콤한", "국물없는"] },
  { name: "양장피", category: "중식", tags: ["국물없는", "순한", "가벼운"] },
  { name: "돈부리", category: "일식", tags: ["밥", "순한", "든든한", "국물없는"] },
  { name: "라멘", category: "일식", tags: ["국물", "순한", "든든한"] },
  { name: "냉모밀", category: "일식", tags: ["차가운", "가벼운", "국물", "순한"] },
  { name: "초밥", category: "일식", tags: ["가벼운", "순한", "국물없는"] },
  { name: "가츠동", category: "일식", tags: ["덮밥", "순한", "든든한", "국물없는"] },
  { name: "스테이크", category: "양식", tags: ["고기", "든든한", "순한", "국물없는"] },
  { name: "파스타", category: "양식", tags: ["면", "순한", "든든한", "국물없는"] },
  { name: "피자", category: "양식", tags: ["치즈", "순한", "국물없는"] },
  { name: "리조또", category: "양식", tags: ["쌀", "순한", "든든한", "국물없는"] },
  { name: "수프", category: "양식", tags: ["국물", "순한", "가벼운"] },
  { name: "떡볶이", category: "분식", tags: ["매콤한", "국물없는", "든든한"] },
  { name: "순대", category: "분식", tags: ["매콤한", "국물없는", "든든한"] },
  { name: "김밥", category: "분식", tags: ["가벼운", "순한", "국물없는"] },
  { name: "컵밥", category: "분식", tags: ["든든한", "순한", "국물없는"] },
  { name: "튀김", category: "분식", tags: ["가벼운", "순한", "국물없는"] },
  { name: "오뎅", category: "분식", tags: ["국물", "순한", "가벼운"] },
  { name: "만두", category: "분식", tags: ["가벼운", "순한", "국물없는"] },
];

const hintQuestions = [
  {
    question: "오늘은 어떤 느낌이신가요?",
    options: [
      { label: "든든한 음식", tag: "든든한" },
      { label: "가벼운 음식", tag: "가벼운" },
    ],
  },
  {
    question: "어떤 스타일이 좋으신가요?",
    options: [
      { label: "국물 있는 음식", tag: "국물" },
      { label: "국물 없는 음식", tag: "국물없는" },
    ],
  },
  {
    question: "매운 음식은 어떠신가요?",
    options: [
      { label: "좋아요", tag: "매콤한" },
      { label: "싫어요", tag: "순한" },
    ],
  },
];

const rejectionMessages = [
  "좋아요, 다른 메뉴 찾아볼게요.",
  "입맛 찾기가 쉽지 않네요.",
  "혹시 이미 정해놓은 거 아니죠?",
  "제가 맞출 수 있을까요...?",
  "오늘도 네 말이 맞아...",
];

const categoryButtons = document.getElementById("categoryButtons");
const recommendBtn = document.getElementById("recommendBtn");
const recommendationCard = document.getElementById("recommendationCard");
const menuNameEl = document.getElementById("menuName");
const menuTagsEl = document.getElementById("menuTags");
const likeBtn = document.getElementById("likeBtn");
const rejectBtn = document.getElementById("rejectBtn");
const hintSection = document.getElementById("hintSection");
const hintQuestion = document.getElementById("hintQuestion");
const hintOptions = document.getElementById("hintOptions");
const hintMessage = document.getElementById("hintMessage");
const finalMessage = document.getElementById("finalMessage");
const noMoreMessage = document.getElementById("noMoreMessage");
const resetBtn = document.getElementById("resetBtn");

let selectedCategory = "";
let currentMenu = null;
let rejectedMenus = new Set();
let rejectionCount = 0;
let filterTags = new Set();
let currentHintIndex = 0;

function initCategories() {
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-button";
    button.textContent = category;
    button.addEventListener("click", () => selectCategory(category, button));
    categoryButtons.appendChild(button);
  });
}

function selectCategory(category, button) {
  selectedCategory = category;
  const buttons = categoryButtons.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.toggle("selected", btn === button));
  recommendBtn.disabled = false;
  hideMessages();
  resetSession();
}

function resetSession() {
  rejectedMenus.clear();
  rejectionCount = 0;
  filterTags.clear();
  currentHintIndex = 0;
  currentMenu = null;
  recommendationCard.classList.add("hidden");
  hintSection.classList.add("hidden");
  finalMessage.classList.add("hidden");
  noMoreMessage.classList.add("hidden");
  hintMessage.classList.add("hidden");
}

function getFilteredMenus() {
  return menus.filter((menu) => {
    if (menu.category !== selectedCategory) return false;
    if (rejectedMenus.has(menu.name)) return false;
    for (const tag of filterTags) {
      if (!menu.tags.includes(tag)) return false;
    }
    return true;
  });
}

function pickRandomMenu() {
  const candidates = getFilteredMenus();
  if (!candidates.length) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function updateMenuCard(menu) {
  if (!menu) {
    recommendationCard.classList.add("hidden");
    return;
  }

  currentMenu = menu;
  menuNameEl.textContent = menu.name;
  menuTagsEl.innerHTML = menu.tags
    .map((tag) => `<span class="menu-tag">${tag}</span>`)
    .join("");
  recommendationCard.classList.remove("hidden");
}

function showHintQuestion() {
  if (currentHintIndex >= hintQuestions.length) {
    hintSection.classList.add("hidden");
    return;
  }

  const question = hintQuestions[currentHintIndex];
  hintQuestion.textContent = question.question;
  hintOptions.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hint-option";
    button.textContent = option.label;
    button.addEventListener("click", () => applyHint(option.tag));
    hintOptions.appendChild(button);
  });
  hintSection.classList.remove("hidden");
}

function applyHint(tag) {
  filterTags.add(tag);
  currentHintIndex += 1;
  hintMessage.textContent = `좋아요! ${tag} 메뉴를 더 찾아볼게요.`;
  hintMessage.classList.remove("hidden");
  recommendNextMenu();
  showHintQuestion();
}

function getRejectionMessage() {
  if (rejectionCount >= 5) {
    return rejectionMessages[4];
  }
  return rejectionMessages[rejectionCount - 1] || "다른 메뉴를 찾아볼게요.";
}

function showNoMoreMessage() {
  recommendationCard.classList.add("hidden");
  noMoreMessage.textContent = "아직 추천할 메뉴가 남아있지 않아요. 카테고리를 바꾸거나 초기화를 눌러주세요.";
  noMoreMessage.classList.remove("hidden");
}

function recommendNextMenu() {
  const menu = pickRandomMenu();
  if (!menu) {
    showNoMoreMessage();
    currentMenu = null;
    return;
  }

  updateMenuCard(menu);
  finalMessage.classList.add("hidden");
  noMoreMessage.classList.add("hidden");
}

function handleRecommend() {
  if (!selectedCategory) return;
  rejectedMenus.clear();
  rejectionCount = 0;
  filterTags.clear();
  currentHintIndex = 0;
  hintMessage.classList.add("hidden");
  hintSection.classList.add("hidden");
  finalMessage.classList.add("hidden");
  noMoreMessage.classList.add("hidden");
  recommendNextMenu();
}

function handleLike() {
  if (!currentMenu) return;
  finalMessage.textContent = `최종 선택: ${currentMenu.name}!
이 메뉴로 오늘의 식사 결정을 내려볼까요?`;
  finalMessage.classList.remove("hidden");
  recommendationCard.classList.add("hidden");
  hintSection.classList.add("hidden");
  hintMessage.classList.add("hidden");
  noMoreMessage.classList.add("hidden");
}

function handleReject() {
  if (!currentMenu) return;
  rejectionCount += 1;
  rejectedMenus.add(currentMenu.name);
  hintMessage.textContent = getRejectionMessage();
  hintMessage.classList.remove("hidden");
  if (rejectionCount >= 2) {
    showHintQuestion();
  }
  recommendNextMenu();
}

function hideMessages() {
  hintMessage.classList.add("hidden");
  finalMessage.classList.add("hidden");
  noMoreMessage.classList.add("hidden");
}

recommendBtn.addEventListener("click", handleRecommend);
likeBtn.addEventListener("click", handleLike);
rejectBtn.addEventListener("click", handleReject);
resetBtn.addEventListener("click", () => {
  selectedCategory = "";
  recommendationCard.classList.add("hidden");
  hintSection.classList.add("hidden");
  finalMessage.classList.add("hidden");
  hintMessage.classList.add("hidden");
  noMoreMessage.classList.add("hidden");
  filterTags.clear();
  currentHintIndex = 0;
  rejectionCount = 0;
  rejectedMenus.clear();
  recommendBtn.disabled = true;
  const buttons = categoryButtons.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.remove("selected"));
});

initCategories();
