export const calculateMinutes = (loginDate: Date) => {
  const diff = (loginDate.getTime() - new Date().getTime()) / 1000;

  return Math.abs(Math.round(diff / 60));
};
