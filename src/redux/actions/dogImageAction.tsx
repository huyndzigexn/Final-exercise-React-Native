import actionTypes from './actionTypes';

export const getDogImageRequestAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.GET_DOG_IMAGE.REQUEST,
      payload,
    });

    const getDogImage = async () => {
      const responseRaw = await fetch(
        'https://dog.ceo/api/breeds/image/random',
      );
      const responseJson = await responseRaw.json();
      return responseJson;
    };

    const response = await getDogImage();
    if (response?.status === 'success') {
      dispatch({
        type: actionTypes.GET_DOG_IMAGE.SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_DOG_IMAGE.ERROR,
        payload: response,
      });
    }
  };
};

export const increaseAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.GET_DOG_IMAGE.INCREASE,
      payload,
    });
  };
};

export const decreaseAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.GET_DOG_IMAGE.DECREASE,
      payload,
    });
  };
};
