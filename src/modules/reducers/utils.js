export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: null,
    data: initialData,
    error: null,
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: (payload) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};

export const createPromiseThunk = (type, API) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];

  return (param) => async (dispatch) => {
    dispatch({ type, param });

    try {
      const payload = await API(...param);

      if (payload.success) {
        dispatch({ type: SUCCESS, payload });
      } else {
        dispatch({ type: FAILURE, payload });
      }

      console.log(payload);
      return payload;
    } catch (e) {
      console.log(e);
      dispatch({ type: FAILURE, payload: e, error: true });
    }
  };
};

export const createPostPromiseThunk = (type, API) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];

  return (body) => async (dispatch) => {
    dispatch({ type, body });

    try {
      const payload = await API(body);

      if (payload.success) {
        dispatch({ type: SUCCESS, payload });
      } else {
        dispatch({ type: FAILURE, payload });
      }

      console.log(payload);
      return payload;
    } catch (e) {
      console.log(e);
      dispatch({ type: FAILURE, payload: e, error: true });
    }
  };
};

export const handleAsyncActions = (type, key) => {
  const [SUCCESS, FAILURE] = [`${type}_SUCCESS`, `${type}_FAILURE`];
  return (draft, action) => {
    switch (action.type) {
      case type:
        draft[key] = reducerUtils.loading();
        break;
      case SUCCESS:
        draft[key] = reducerUtils.success(action.payload.data);
        break;
      case FAILURE:
        draft[key] = reducerUtils.error(action.payload);
        break;
      default:
        break;
    }
  };
};
