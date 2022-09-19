import { images } from "../../data/images.js";
import { clearElement } from "./clearElement.js";
import { createSummaryElement } from "./createSummaryElement.js";

const createSummaryFromNotes = (notes) => {
  const notesMap = new Set(notes.map((i) => i.category));
  let summary = [];
  notesMap.forEach((i) => {
    let activeCount = 0;
    let archivedCount = 0;
    notes.map(
      (item) =>
        item.category === i
          ? item.status === "active"
            ? activeCount++
            : archivedCount++
          : null,
      0
    );
    summary.push({
      picture: images[`${i}`],
      category: i,
      active: activeCount,
      archivedCount: archivedCount,
      button: archivedCount,
    });
  });

  return summary;
};

export const createSummaryDiv = (notes) => {
  const summaryBlock = document.querySelector(".summary-info-container");
  clearElement(summaryBlock);
  let summary = createSummaryFromNotes(notes);
  summary.map((i) => {
    const summaryDiv = document.createElement("div");
    summaryDiv.classList.add("summary-info");
    summaryDiv.id = Date.now();
    for (let key in i) {
      summaryDiv.append(createSummaryElement("div", i[key], key));
    }
    summaryBlock.append(summaryDiv);
  });
};
