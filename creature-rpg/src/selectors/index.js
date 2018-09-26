import { createSelector } from 'reselect';
import { selectors as creatureSelectors } from './creature';
import { selectors as workflowSelectors } from './workflow';

export const selectors = {
  ...creatureSelectors,
  ...workflowSelectors,
};