import * as React from 'react';
import { useDispatch } from 'react-redux';
import { showStopsAction as showStops } from 'src/features/stops/actions';
import {
  Divider,
  Typography,
  withStyles,
  WithStyles,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from '@material-ui/core';
import {
  Train as TrainIcon,
  DirectionsBus as BusIcon,
  DeviceHub as TransportationHubIcon,
} from '@material-ui/icons';
import { GridContainer, GridItem } from 'src/components';
import { actions } from 'src/features/stops/constants';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {}

function ControlPanelComponent(props: Props) {
  const { classes } = props;

  const dispatch = useDispatch();
  const checkBuses = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const checkTrains = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  function handleChange(event: React.ChangeEvent<HTMLElement>) {
    let buses: boolean = checkBuses.current.checked;
    let trains: boolean = checkTrains.current.checked;
    let payload = actions.NONE;
    if (buses && trains) {
      payload = actions.ALL;
    } else if (buses) {
      payload = actions.BUSES;
    } else if (trains) {
      payload = actions.TRAINS;
    }
    dispatch(showStops(payload));
  }

  return (
    <div className={classes.controlPanel}>
      <GridContainer className={classes.form}>
        <GridItem>
          <Typography variant="h6">Stops</Typography>
          <br />
          <Divider />
          <br />
          <GridContainer>
            <GridItem>
              <FormControlLabel
                control={
                  <Checkbox
                    id="trains"
                    color="primary"
                    name="trains"
                    onChange={handleChange}
                    inputRef={checkTrains}
                  />
                }
                label={'Trains'}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="buses"
                    color="primary"
                    onChange={handleChange}
                    inputRef={checkBuses}
                  />
                }
                label={'Buses'}
              />
            </GridItem>
            <GridItem>
              <br />
              <Divider />
              <br />
              <FormHelperText>{'Legend'}</FormHelperText>
              <FormHelperText>
                <TrainIcon fontSize="small" className={classes.legend} />{' '}
                {'Trains'}
              </FormHelperText>
              <FormHelperText>
                <BusIcon fontSize="small" className={classes.legend} />{' '}
                {'Buses'}
              </FormHelperText>
              <FormHelperText>
                <TransportationHubIcon fontSize="small" className={classes.legend} />{' '}
                {'Trains and Buses'}
              </FormHelperText>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export const ControlPanel = React.memo(withStyles(styles)(ControlPanelComponent));
