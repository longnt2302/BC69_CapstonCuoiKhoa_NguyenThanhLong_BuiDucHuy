export const dataUser = () => {
  if (localStorage.getItem("USER") === null) return;

  return JSON.parse(localStorage.getItem("USER"));
};
