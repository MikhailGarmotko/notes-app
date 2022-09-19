export const clearElement = (node) => {
  Array.from(node.children).map((i) => i.remove());
  return node;
};
