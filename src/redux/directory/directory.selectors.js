import {createSelector} from 'reselect';


const directoryItems = state => state.directory;


export const selectDirectorySections = createSelector([directoryItems],(item) => item.sections)