export const calculateMinutes = (loginDate: Date) => {
  debugger;
  const diff =
    (loginDate.getTime() - new Date(new Date().toLocaleString()).getTime()) /
    1000;
  debugger;
  return Math.abs(Math.round(diff / 60));
};
