import "./style.css";
import { strategies } from "./strategies.js";

function createStrategyCard(documentRef, strategy, index) {
  const isAvailable = Boolean(strategy.href);
  const card = documentRef.createElement(isAvailable ? "a" : "button");

  card.className = `strategy-card${isAvailable ? " is-available" : " is-local"}`;
  card.setAttribute(
    "aria-label",
    isAvailable
      ? `打法 ${index + 1}：${strategy.title}，点击进入`
      : `打法 ${index + 1}：${strategy.title}`,
  );
  if (isAvailable) {
    card.href = strategy.href;
  } else {
    card.type = "button";
  }

  card.innerHTML = `
    <img class="strategy-art" src="${strategy.image}" alt="" aria-hidden="true">
    <span class="strategy-copy">
      <span class="strategy-number">打法 ${index + 1}</span>
      <strong class="strategy-name">${strategy.title}</strong>
      <span class="strategy-status">${isAvailable ? "查看打法" : "打法入口"}</span>
    </span>
  `;

  return card;
}

export function initApp(documentRef = document) {
  const tabsContainer = documentRef.querySelector("#strategy-tabs");

  if (!tabsContainer) {
    return;
  }

  tabsContainer.replaceChildren(
    ...strategies.map((strategy, index) =>
      createStrategyCard(documentRef, strategy, index),
    ),
  );

  tabsContainer.addEventListener("click", (event) => {
    const localCard = event.target.closest(".strategy-card.is-local");

    if (!localCard) {
      return;
    }

    localCard.classList.remove("is-clicked");
    requestAnimationFrame(() => localCard.classList.add("is-clicked"));
  });
}

if (typeof document !== "undefined") {
  initApp(document);
}
