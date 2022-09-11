export const authorsCutter = (authors: string): string => {
  const authorsArray = authors.split(", ");
  if (authorsArray.length > 1) {
    return `${authorsArray[0]} and ${authorsArray.length - 1} more`;
  } else {
    return authors;
  }
};
