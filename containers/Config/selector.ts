import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../../store/store';

const selectors = (state: RootState) => state.config;

export const isLogin = createSelector([selectors], config => config.isLogin);
