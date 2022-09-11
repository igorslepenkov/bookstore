export const authorsLister = (authors: string): string[] => {
  const authorsArray = authors.split(", ");
  return authorsArray.map((author, idx) => `${idx + 1}. ${author}\n`);
};
