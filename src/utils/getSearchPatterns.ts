export const getSearchPatterns = (title: string) => {
  const mutateTitle = title.replace(/[,]|and|for|of|to|with|in|by/gi, "");
  const secondMutateTitle = mutateTitle.replace(/\s+/g, " ");
  const splitTitle = secondMutateTitle.split(" ");
  return splitTitle.sort((a, b) => b.length - a.length);
};
