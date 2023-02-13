export const calculateMinutes = (loginDate: Date) => {
  const diff =
    (loginDate.getTime() - new Date(new Date().toISOString()).getTime()) / 1000;

  return Math.abs(Math.round(diff / 60));
};
