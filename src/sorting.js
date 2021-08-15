export const byThread = (a, b) => {
  const aNum = parseInt(a.number, 10);
  const bNum = parseInt(b.number, 10);

  if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
    return 0;
  }

  if (aNum < bNum) return -1;
  if (aNum > bNum) return 1;

  return 0;
};
