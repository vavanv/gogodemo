import * as React from 'react';
import classnames from 'classnames';
import { Stop, Facilities, Parking, Parkings } from 'src/store/stops/types';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  withStyles,
  WithStyles,
  Collapse,
  CardActions,
  IconButton,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  stop: Stop;
}

const StopInfoComponent = (props: Props) => {
  const { classes, stop } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderFacilities = (facilities: Facilities) => {
    return (
      <Typography variant="caption" component="p" gutterBottom>
        {facilities.map(facility => facility.description).join(', ')}
      </Typography>
    );
  };

  const renderParkings = (parkings: Parkings) => {
    return parkings.map(renderParking);
  };

  const renderParking = (parking: Parking, index: number) => {
    return (
      <Typography key={index} variant="caption" component="p" gutterBottom>
        {parking.name} ( spots: {parking.parkSpots} )
      </Typography>
    );
  };

  const expendedClasses = classnames({
    [classes.expand]: !expanded,
    [classes.expandOpen]: expanded,
  });

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="code" color="primary">
              {stop.code}
            </Avatar>
          }
          title={stop.stopName}
          subheader={stop.city}
        />
        <CardContent>
          {stop.streetName && (
            <>
              <Typography variant="subtitle2" component="p">
                Street Name
              </Typography>
              <Typography variant="caption" component="p" gutterBottom>
                {stop.streetNumber} {stop.streetName}
              </Typography>
            </>
          )}
          {stop.intersection && (
            <>
              <Typography variant="subtitle2" component="p">
                Intersection
              </Typography>
              <Typography variant="caption" component="p" gutterBottom>
                {stop.intersection}
              </Typography>
            </>
          )}
          {stop.drivingDirections && (
            <>
              <Typography variant="subtitle2" component="p">
                Driving Direction
              </Typography>
              <Typography variant="caption" component="p" gutterBottom>
                {stop.drivingDirections}
              </Typography>
            </>
          )}
        </CardContent>
        {(stop.facilities.length > 0 || stop.parkings.length > 0) && (
          <>
            <CardActions disableSpacing={true}>
              <IconButton
                className={expendedClasses}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon fontSize="small" />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {stop.facilities.length > 0 && (
                  <>
                    <Typography variant="subtitle2" component="p">
                      Facilities
                    </Typography>
                    {stop.facilities && renderFacilities(stop.facilities)}
                  </>
                )}
                {stop.parkings.length > 0 && (
                  <>
                    <Typography variant="subtitle2" component="p">
                      Parkings
                    </Typography>
                    {stop.parkings && renderParkings(stop.parkings)}
                  </>
                )}
              </CardContent>
            </Collapse>
          </>
        )}
      </Card>
    </div>
  );
};

export const StopInfo = React.memo(withStyles(styles)(StopInfoComponent));
