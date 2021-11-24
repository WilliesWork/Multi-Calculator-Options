import React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

import { COLORS } from './../../Common/shared'

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      color: '#fff',
      background: COLORS.gradient,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.pxToRem(15),
      '&:focus': {
        opacity: 1,
      },
      '&:nth-child(odd)': {
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      '&:nth-child(even)': {
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
      },
    },
    selected: {
      color: 'rgba(2, 0, 36, 1)',
      background: theme.palette.background.paper,
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

export default StyledTab
