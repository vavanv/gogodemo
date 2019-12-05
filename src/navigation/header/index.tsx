import * as React from 'react';

import { useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  IconButton,
  CircularProgress,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { AppState } from 'src/store/types';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  handleToggle: () => void;
  color: any;
}

function HeaderComponent(props: Props) {
  const navBar = useSelector((s: AppState) => s.ui.navBar);

  const { classes, handleToggle, color } = props;

  return (
    <AppBar color={color}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" onClick={handleToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" color="inherit" className={classes.grow}>
          go GO
        </Typography>
        {navBar.loading && <CircularProgress size={24} color="inherit" />}
      </Toolbar>
    </AppBar>
  );
}

export const Header = React.memo(withStyles(styles)(HeaderComponent));
