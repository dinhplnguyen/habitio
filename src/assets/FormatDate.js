
const formatDate = (date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

export default formatDate;
