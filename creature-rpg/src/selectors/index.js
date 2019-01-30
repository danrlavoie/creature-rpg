import { createSelector } from 'reselect';
import { selectors as creatureSelectors } from './creature';
import { selectors as workflowSelectors } from './workflow';
import { selectors as combatSelectors } from './combat';

export const selectors = {
  ...creatureSelectors,
  ...combatSelectors,
  ...workflowSelectors,
};