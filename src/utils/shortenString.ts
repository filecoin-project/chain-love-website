export function shortenString(str: string, numOfElementsLeft: number, numOfElementsRight: number) {
  if (!str) return null;
  const length = str.length;
  return `${str.slice(0, numOfElementsLeft)}...${str.slice(length - numOfElementsRight, length)}`;
};