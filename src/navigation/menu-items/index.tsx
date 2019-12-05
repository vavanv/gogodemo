import * as React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import { Train as TrainIcon, MailOutline as ContactMailIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { ROUTE_ROOT } from 'src/app/app/constants';

import { Title } from './title';

import { styles } from './styles';

export interface TitleItem {
  caption: string;
  icon: any;
  visible: boolean;
  route?: string;
}

interface Props extends WithStyles<typeof styles> {
  handleToggle: () => void;
}

function NavBarMainMenuItemsComponent(props: Props) {
  const { classes, handleToggle } = props;

  const titleItems: TitleItem[] = [
    {
      caption: 'Contact Us',
      icon: <ContactMailIcon />,
      visible: true,
      // route: ROUTE_CONTACT_US,
    },
  ];

  const items = [
    {
      caption: 'Main',
      visible: true,
      subitems: [
        {
          caption: 'Stops',
          icon: <TrainIcon />,
          visible: true,
          route: ROUTE_ROOT,
        },
      ],
    },
  ];

  return (
    <div className={classes.rootDiv}>
      <List className={classes.list}>
        <Title titleItems={titleItems} handleToggle={handleToggle} />
        {items.map(({ caption, visible, subitems }) => {
          return visible ? (
            <React.Fragment key={caption}>
              <ListItem className={classes.categoryHeader} key={caption}>
                <ListItemText
                  classes={{
                    primary: classes.categoryHeaderText,
                  }}
                >
                  {caption}
                </ListItemText>
              </ListItem>
              {subitems.map(({ caption, icon, visible: visibleSubItem, route }) => {
                return visibleSubItem ? (
                  <Link to={route} key={caption}>
                    <ListItem
                      button
                      onClick={handleToggle}
                      className={classes.item}
                      key={caption}
                    >
                      <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                      <ListItemText
                        primary={caption}
                        classes={{ primary: classes.itemText }}
                      />
                    </ListItem>
                  </Link>
                ) : null;
              })}
              <Divider className={classes.divider} />
            </React.Fragment>
          ) : null;
        })}
      </List>
    </div>
  );
}

export const NavBarMainMenuItems = React.memo(withStyles(styles)(NavBarMainMenuItemsComponent));
