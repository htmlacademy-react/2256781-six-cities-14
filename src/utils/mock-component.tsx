import { MemoryHistory, createMemoryHistory } from 'history';
import { HistoryRouter } from '../components/history-router/history-router';
import { HelmetProvider } from 'react-helmet-async';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import { TState } from '../types';
import { AppThunkDispatch } from '.';
import { Action } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

function withHistory(component: JSX.Element, history?: MemoryHistory) {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      <HelmetProvider>{component}</HelmetProvider>
    </HistoryRouter>
  );
}

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
};

function withStore(
  component: JSX.Element,
  initialState: Partial<TState> = {}
): ComponentWithMockStore {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    TState,
    Action<string>,
    AppThunkDispatch
  >(middleware);
  const mockStore = mockStoreCreator(initialState);

  return {
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  };
}

export { withHistory, withStore };
