// todo object 타입 수정 필요
export const deleteElement = (
  object: { [key: string | number | symbol]: unknown },
  key: string | number | symbol
) => {
  const copyObject = Object.assign({}, object);

  delete copyObject[key];

  return copyObject;
};

export const addElement = <Type>(
  object: { [key: string | number | symbol]: Type },
  key: string | number | symbol,
  value: Type
) => {
  const copyObject = Object.assign({}, object);

  if (!copyObject[key]) copyObject[key] = value;

  return copyObject;
};

export const modifyElement = <Type>(
  object: { [key: string | number | symbol]: Type },
  key: string | number | symbol,
  value: Type
) => {
  const copyObject = Object.assign({}, object);

  if (copyObject[key]) copyObject[key] = value;

  return copyObject;
};
