// todo object 타입 수정 필요
export const deleteElement = (
  object: { [key: string | number | symbol]: unknown },
  key: string | number | symbol
) => {
  const copyObject = Object.assign({}, object);

  delete copyObject[key];

  return copyObject;
};
