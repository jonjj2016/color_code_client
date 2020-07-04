const actionGen = (arr) => {
  let actionObj = {};
  let funNameList = [];
  let funcName = [];
  let typeList = [];

  funNameList = [...funNameList, ...Object.keys(arr)];
  typeList = [...typeList, ...Object.values(arr)];

  funNameList.forEach((item) => {
    funcName.push(item.toLowerCase());
  });

  funcName.forEach((item, index) => {
    actionObj[item] = (data, route) => ({
      [`type`]: typeList[index],
      [`payload`]: data,
      [`route`]: route,
    });
  });

  return actionObj;
};

const typeGen = (constant, optional, bool, vars) => {
  let Types = ['CREATE', 'PATCH', 'REMOVE', 'GET', 'FIND'];
  let TypeArr = [];
  if (optional) {
    //if bool is true means we don't need default crud types
    optional = optional.map((option) => {
      return option.toUpperCase();
    });
    if (!bool) {
      Types = [...optional];
    } else {
      Types = [...Types, ...optional];
    }
  }

  let obj = {};
  Types.forEach((item) => {
    let block = {
      [`${item}_START`]: `${item}_${constant}_START`,
      [`${item}_SUCCESS`]: `${item}_${constant}_SUCCESS`,
      [`${item}_FAILED`]: `${item}_${constant}_FAILED`,
    };
    if (!bool && vars) {
      block = {};
      vars.forEach((variable) => {
        block = {
          ...block,
          // [`${variable.toUpperCase()}`]: `${item}_${variable.toUpperCase()}`
          [`${item}_${variable.toUpperCase()}`]: `${item}_${variable.toUpperCase()}`,
        };
      });
    }
    obj = {
      ...obj,
      ...block,
      [`LOADING`]: `${item}_LOADING`,
      [`SET_CURRENT`]: `${item}_SET_CURRENT`,
    };
  });
  TypeArr = {
    ...obj,
  };

  return TypeArr;
};
//   const autoGen = (arr, optional, bool) => {
//     // return actionGen([typeGen(arr, optional, bool)])
//     const arg = arr.toUpperCase();
//     const types = typeGen(arg, optional, bool);
//     const actions = actionGen(types);

//     return [actions, types];
//   };

/////////////////////////////////////////////////////////////////////////////////////////////////////
export const autoTypeGen = (con, ...myArr) => {
  let newConstant = con.toUpperCase();
  if (myArr.length === 0) {
    const types = typeGen(newConstant);
    const actions = actionGen(types);
    return [types, actions];
  }
  // if(!myArr)
  if (typeof myArr[myArr.length - 1] === 'boolean') {
    myArr.pop();
    const types = typeGen(newConstant, myArr, true);
    const actions = actionGen(types);
    return [types, actions];
  }

  const types = typeGen(newConstant, myArr, false);
  const actions = actionGen(types);
  return [types, actions];
};
export const customTypeGen = (option, ...options) => {
  const types = typeGen(null, [option], null, [...options]);
  const actions = actionGen(types);
  return [types, actions];
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//const [types3, actions3] = customType('menu', 'open', 'close')
//
