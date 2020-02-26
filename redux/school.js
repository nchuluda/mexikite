import * as ActionTypes from './ActionTypes';

export const school = (state = { isLoading: true,
                                     errMess: null,
                                     school: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SCHOOL:
            return {...state, isLoading: false, errMess: null, school: action.payload};

        case ActionTypes.SCHOOL_LOADING = 'SCHOOL_LOADING':
            return {...state, isLoading: true, errMess: null, school: []}

        case ActionTypes.SCHOOL_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};