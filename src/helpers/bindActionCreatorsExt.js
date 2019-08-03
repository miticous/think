/* eslint-disable no-plusplus */
/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-spread */
/* eslint-disable func-names */
/* eslint-disable no-undef */
function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

function bindObject(actionCreators, dispatch) {
  const keys = Object.keys(actionCreators);
  const boundActionCreators = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === `function`) {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
    if (typeof actionCreator === `object`) {
      objs = bindObject(actionCreator, dispatch);
      if (Object.keys(objs).length > 0) {
        boundActionCreators[key] = objs;
      }
    }
  }
  return boundActionCreators;
}

export function bindActionCreatorsExt(actionCreators, dispatch) {
  if (typeof actionCreators === `function`) {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== `object` || actionCreators === null) {
    throw new Error(
      `bindActionCreators expected an object or a function, instead received ${
        actionCreators === null ? `null` : typeof actionCreators
      }. ` +
        `Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`,
    );
  }

  const boundActionCreators = bindObject(actionCreators, dispatch);

  return boundActionCreators;
}

export default bindActionCreatorsExt;
