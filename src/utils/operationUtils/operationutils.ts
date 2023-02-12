export const calculateMinutes = (loginDate: Date) => {
  const diff =
    (loginDate.getTime() - new Date(new Date().toLocaleString()).getTime()) /
    1000;
  return Math.abs(Math.round(diff / 60));
};
