import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles';
import StyledTabs from './StyledTabs';
import StyledTab from './StyledTab';
import TabPanel from './TabPanel';

interface ResultsProps {
  children?: React.ReactNode;
  tabTitle: string;
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 20,
  },
  tabContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const ResultTabs = (props: ResultsProps) => {
  const { children } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabContainer}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label="Result" {...a11yProps(0)} />
          <StyledTab label="" {...a11yProps(1)} />
        </StyledTabs>
      </div>
      <TabPanel value={value} index={0}>
        {children}
      </TabPanel>
      <TabPanel value={value} index={1}>

      </TabPanel>
    </div>
  );
}

export default ResultTabs
