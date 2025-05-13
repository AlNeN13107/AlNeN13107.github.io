const items = [
  { name: "초코파이", category: "과자", price: 1200, tags: ["기분이 안 좋을 때", "감사 인사"] },
  { name: "비타500", category: "음료", price: 1000, tags: ["시험 전"] },
  { name: "붕어싸만코", category: "아이스크림", price: 1500, tags: ["기분이 안 좋을 때", "생일"] },
  { name: "컵라면", category: "음식", price: 1800, tags: ["시험 전", "감사 인사"] },
  { name: "레쓰비", category: "카페인음료", price: 800, tags: ["시험 전"] },
];

function recommendGift() {
  const category = document.getElementById("category").value;
  const budget = parseInt(document.getElementById("budget").value);
  const situation = document.getElementById("situation").value;

  const filtered = items.filter(item =>
    item.category === category &&
    item.price <= budget &&
    item.tags.includes(situation)
  );

  const resultDiv = document.getElementById("result");
  if (filtered.length === 0) {
    resultDiv.innerHTML = "조건에 맞는 선물이 없어요. 😢";
  } else {
    const gift = filtered[Math.floor(Math.random() * filtered.length)];
    resultDiv.innerHTML = `
      <strong>추천 선물:</strong> ${gift.name}<br/>
      💸 가격: ${gift.price}원<br/>
      📦 카테고리: ${gift.category}
    `;
  }
  resultDiv.style.display = "block";
}
