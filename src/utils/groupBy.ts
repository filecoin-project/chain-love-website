export function groupBy(elements: any[], key: string) {
  if (!elements.length) return [];
  return elements.reduce(function (rv, element) {
    (rv[element[key]] = rv[element[key]] || []).push(element);
    return rv;
  }, {});
};
