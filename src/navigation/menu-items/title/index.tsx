import * as React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import classnames from 'classnames';
import { EmojiTransportation as TransportationIcon } from '@material-ui/icons';

import { TitleItem } from 'src/navigation/menu-items/index';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  classes: any;
  handleToggle: () => void;
  titleItems: TitleItem[];
}

function TitleComponent(props: Props) {
  const { classes } = props;
  return (
    <>
      <ListItem className={classes.header}>
        <ListItemIcon className={classes.itemIcon}>
          <TransportationIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="h6">go GO</Typography>
          }
          className={classnames(classes.baseHeader)}
        />
      </ListItem>
    </>
  );
}

export const Title = React.memo(withStyles(styles)(TitleComponent));
