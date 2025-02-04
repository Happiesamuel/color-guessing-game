export const generateRandomColors = (numColors: number): string[] => {
  return Array.from(
    { length: numColors },
    () =>
      `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`
  );
};
