import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core'
import { Formik } from 'formik'
import { useSelector } from 'react-redux'

import StyledTabs from './StyledTabs';
import StyledTab from './StyledTab';
import TabPanel from './TabPanel';

import { CapsuleVolumeCalculatorI } from '../../Types'
import { RootState } from '../../redux/store'
import { CALCULATORS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE, COLORS } from '../../Common/shared'
import { CustomForm, CustomSelect, Figure, Label, CustomBtn } from '../custom'
import { calculateMath } from './../../Services/AppCalculatorsApi'

interface CalculatorProps {
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
  tabRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 20,
  },
  leftTabContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '50%',
    height: '10%',
    float: 'inline-start',
    

  },
  rightTabContainer: {
    display: 'flex',
    background: COLORS.gradient,
    color: COLORS.light_text_color,
    justifyContent: 'center',
    width: '50%',
    height: '10%',
    float: 'inline-end',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,

  },

}));

function CalculatorTabs(props: CalculatorProps) {
  const { tabRoot, rightTabContainer, leftTabContainer } = useStyles()
  const { children, tabTitle } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [initialFormValues] = React.useState({
  })
  const [Result, setResult] = React.useState({
  })
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={tabRoot}>
      <div className={leftTabContainer}>
        {/* <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label={tabTitle} {...a11yProps(0)} />
          <StyledTab label={tabTitle} {...a11yProps(1)} />
        </StyledTabs> */}
        <Typography>Formular: xxx</Typography>
      </div>
      <div className={rightTabContainer}>
        {/* <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label={tabTitle} {...a11yProps(0)} />
          <StyledTab label={tabTitle} {...a11yProps(1)} />
        </StyledTabs> */}
        <Typography>Bion</Typography>
      </div>
      <TabPanel value={value} index={0}>
        {children}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Formik
          initialValues={initialFormValues}
          onSubmit={async ({
          }, { setSubmitting, resetForm }) => {
            try {
              resetForm()
            } catch (err) {
              console.log('====>', err)
            }
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="form-container">
              <Grid container xs>
                <Grid item xs>
                  <CustomBtn />
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </TabPanel>
    </div>
  );
}

export default CalculatorTabs
