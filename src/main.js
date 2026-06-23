import "./style.css";
import { strategies } from "./strategies.js";

function createStrategyCard(documentRef, strategy, index) {
  const isAvailable = Boolean(strategy.href);
  const card = documentRef.createElement(isAvailable ? "a" : "div");

  card.className = `strategy-card${isAvailable ? " is-available" : " is-pending"}`;
  card.setAttribute(
    "aria-label",
    isAvailable
      ? `打法 ${index + 1}：${strategy.title}，点击进入`
      : `打法 ${index + 1}：${strategy.title}，内容待补充`,
  );

  if (isAvailable) {
    card.href = strategy.href;
  }

  card.innerHTML = `
    <span class="strategy-number">打法 ${index + 1}</span>
    <strong class="strategy-name">${strategy.title}</strong>
    <span class="strategy-status">${isAvailable ? "查看打法" : "敬请期待"}</span>
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
}

if (typeof document !== "undefined") {
  initApp(document);
}
