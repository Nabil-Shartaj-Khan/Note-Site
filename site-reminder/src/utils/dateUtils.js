export const getDaysLeft = (dateStr) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // reset to local midnight

  const [year, month, day] = dateStr.split('-').map(Number);
  const target = new Date(year, month - 1, day); // local date at midnight

  const diff = target - now;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};
