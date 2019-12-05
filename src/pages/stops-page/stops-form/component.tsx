import * as React from 'react';
import { Stop } from 'src/store/stops/types';
import { Map } from 'src/components';
import { Payload } from 'src/store/types';
import { ControlPanel } from '../control-panel';

interface Props {
  fetchStopList: (params: any) => void;
  stopList: Stop[];
  showStops: ({ type }: Payload) => void;
}

const StopsForm = (props: Props) => {
  const { stopList } = props;

  React.useEffect(() => {
    props.fetchStopList(null);
    // eslint-disable-next-line
  }, []);

  return (
    <Map stopList={stopList}>
      <ControlPanel />
    </Map>
  );
};

export const StopsFormComponent = StopsForm;
