import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AppState } from 'src/store/types';
import { Stop } from 'src/store/stops/types';
import { getFilteredStopList } from 'src/features/stops/selectors';
import { fetchStopListItemsAction, showStopsAction as showStops } from 'src/features/stops/actions';
import { StopsFormComponent } from './component';

const mapStateToProps = createStructuredSelector<
  AppState,
  {
    stopList: Stop[];
  }
>({
  stopList: getFilteredStopList,
});

const mapDispatchToProps = {
  fetchStopList: fetchStopListItemsAction.request,
  showStops,
};

export const StopsFormContainer = connect(mapStateToProps, mapDispatchToProps)(StopsFormComponent);
