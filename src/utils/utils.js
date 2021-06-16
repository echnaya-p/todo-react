let id = 0;

const generateUniqueID = () => {
  id += 1;

  return id;
};

export default generateUniqueID;
