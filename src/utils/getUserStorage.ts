type User = string | null;
export const dataUser = () => {
  const user: User = localStorage.getItem("USER");

  if (!user) return;

  return JSON.parse(user);
};
