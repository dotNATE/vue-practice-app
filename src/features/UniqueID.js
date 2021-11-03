let UUID = 0;

export default () => {
  const getID = () => {
    UUID++;
    return UUID;
  };

  return {
    getID,
  };
};
