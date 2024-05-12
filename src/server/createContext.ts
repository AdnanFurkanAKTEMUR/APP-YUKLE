export const createContext = async (opts?: any) => {
  const req = opts?.req;
  const res = opts?.res;

  return req;
};
