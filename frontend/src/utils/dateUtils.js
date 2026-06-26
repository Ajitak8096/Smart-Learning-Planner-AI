export const getDaysRemaining = (examDate) => {
  const today = new Date();

  const exam = new Date(examDate);

  const diff = exam - today;

  return Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0);
};