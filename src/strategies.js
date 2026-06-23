const textFields = ["title", "coreLogic", "audience"];

export function normalizeStrategy(strategy = {}) {
  return Object.fromEntries(
    textFields.map((field) => [
      field,
      typeof strategy[field] === "string" ? strategy[field] : "",
    ]),
  );
}

export const strategies = [
  {
    title: "引凤计划",
    coreLogic: "利用“自营”标为 POP 店铺引流。",
    audience: "爆品或引流品、品牌化转型商家、中长尾品类商家。",
  },
  {
    title: "钩子品引流法",
    coreLogic:
      "用具备极致价格竞争力的“钩子品”（低价、高频、刚需）作为流量入口，从频道、搜推等公域，以极低门槛吸引用户点击、加购和成交，解决“进店难”问题。",
    audience: "有供应链优势、极致低价、多产品线多 SKU 型商家。",
  },
  {
    title: "全生命周期广告法",
    coreLogic:
      "将广告视为“全生命周期投资”，关注对店铺长期健康度的贡献，而非只追求单次投放的短期 ROI。在京东，一次广告投放带来的用户和店铺权重会产生长尾效应；停止广告后，约 70% 的流量仍会留存。",
    audience: "所有品类货架型商家、品牌型商家。",
  },
  {
    title: "货品矩阵打法",
    coreLogic:
      "对不同生命周期的货品采用不同的运营策略，最大化每一盘货的价值。",
    audience: "品牌型商家、货品分层丰富的商家。",
  },
  {
    title: "内容营销打法",
    coreLogic:
      "充分利用京东平台现有的直播资源和短视频资源，为 POP 店铺注入新的流量和销售增量。",
    audience: "新锐品牌型商家、红人型商家、直播型商家。",
  },
  {
    title: "CPS 打法",
    coreLogic:
      "按效果付费，撬动流量杠杆，挖掘团长及京挑客的长尾私域流量。",
    audience: "KA 商家、中腰产业带商家、尾部及新商。",
  },
  {
    title: "站外引流法（CID）",
    coreLogic:
      "构建全域流量闭环，鼓励商家将在抖音等平台的投放，通过红京挂链等方式引流至京东。",
    audience: "新锐品牌、内容型商家、内容型竞对头部商家。",
  },
  {
    title: "京东指数",
    coreLogic:
      "指数是最大钩子品。针对价格敏感商品的多商（自营与 POP 混动）卷价，达到全网最低价，获取流量。",
    audience: "硬通货、期货属性商品、二级市场流通品。",
  },
  {
    title: "POP 京仓京配",
    coreLogic:
      "针对用户对及时体验的高需求，产品入仓后可获得“京东物流”标，在搜索筛选和履约时效上大幅提升，同时促进转化。",
    audience: "品质中上、定位中高端、爆品、标品。",
  },
  {
    title: "价促场打法",
    coreLogic:
      "依托商家货优价低的商品，匹配相应价促场频道，获得精准流量和频道打标，带动店铺成交。",
    audience: "白牌、产业带商家、品牌商、低单价高性价比好物商家。",
  },
].map(normalizeStrategy);

export function getStrategy(index) {
  if (!Number.isInteger(index) || index < 0 || index >= strategies.length) {
    return strategies[0];
  }

  return strategies[index];
}
