export const getSearchPatterns = (title: string) => {
  const mutateTitle = title.replace(
    /[-,&_?@!^:;"']| and | for | of | to | with | in | by |[0-9][a-z]+| edition | the/gi,
    " "
  );
  const secondMutateTitle = mutateTitle.replace(/\s\s+/g, " ");
  const splitTitle = secondMutateTitle
    .split(" ")
    .map((pattern) => pattern.toLowerCase());
  return splitTitle.sort((a, b) => b.length - a.length);
};
