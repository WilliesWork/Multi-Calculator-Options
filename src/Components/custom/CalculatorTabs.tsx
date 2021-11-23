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
import { CALCULATORS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE } from '../../Common/shared'
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
  tabContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

function CalculatorTabs(props: CalculatorProps) {
  const { children, tabTitle } = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [initialFormValues] = React.useState({
    radius: "",
    radius_unit: "",
    height: "",
    height_unit: "",
  })
  const [Result, setResult] = React.useState({
    volumeInRadiusUnit: 0,
    volumeInHeightUnit: 0,
    radiusInheightUnit: 0,
    heightInradiusUnit: 0,
    submittedradius: 0,
    submitted_height: 0,
  })
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.tabRoot}>
      <div className={classes.tabContainer}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
          <StyledTab label={tabTitle} {...a11yProps(0)} />
          <StyledTab label={tabTitle} {...a11yProps(1)} />
        </StyledTabs>
      </div>
      <TabPanel value={value} index={0}>
        {children}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Formik
          initialValues={initialFormValues}
          onSubmit={async ({
            radius,
            radius_unit,
            height,
            height_unit,
          }, { setSubmitting, resetForm }) => {
            const payload: CapsuleVolumeCalculatorI = {
              radius,
              radius_unit,
              height,
              height_unit,
              method: 'CapsuleVolumeCalculator'
            }
            console.log(JSON.stringify(payload))
            try {
              const { payload: capsuleVolume } = await calculateMath(payload)
              console.log('=====>', capsuleVolume)
              if (typeof capsuleVolume === 'object') {
                const { volumeInRadiusUnit,
                  volumeInHeightUnit,
                  radiusInheightUnit,
                  $heightInradiusUnit,
                  submittedradius,
                  submitted_height } = capsuleVolume
                setResult({
                  volumeInHeightUnit: volumeInHeightUnit,
                  volumeInRadiusUnit: volumeInRadiusUnit,
                  radiusInheightUnit: radiusInheightUnit,
                  submitted_height: submitted_height,
                  submittedradius: submittedradius,
                  heightInradiusUnit: $heightInradiusUnit
                })
              }
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
                  <div className="form-row">
                    <Label title={LABELS.radius} />
                    <CustomForm
                      type={INPUT_TYPE.number}
                      id="radius"
                      placeholder={PLACEHOLDERS.number}
                      value={values.radius}
                      onChange={handleChange}
                    />

                    <CustomSelect
                      measurement="length"
                      id="radius_unit"
                      value={values.radius_unit}
                      onChange={handleChange('radius_unit')}
                    />
                  </div>

                  <div className="form-row">
                    <Label title={LABELS.height} />
                    <CustomForm
                      type={INPUT_TYPE.number}
                      id="height"
                      placeholder={PLACEHOLDERS.number}
                      value={values.height}
                      onChange={handleChange}
                    />

                    <CustomSelect
                      measurement="length"
                      id="height_unit"
                      value={values.height_unit}
                      onChange={handleChange('height_unit')}
                    />
                  </div>

                  <CustomBtn />
                </Grid>
              </Grid>
              <div className="text-center mb-3">
                <Typography variant="subtitle1"> Volume in Radius unit: {Result.volumeInRadiusUnit}</Typography>
                <Typography variant="subtitle1"> Volume in Height unit: {Result.volumeInHeightUnit}</Typography>
                <Typography variant="subtitle1"> Submitted Radius: {Result.submittedradius}</Typography>
                <Typography variant="subtitle1"> Submitted Height: {Result.submitted_height}</Typography>
                <Typography variant="subtitle1"> Radius in Height: {Result.radiusInheightUnit}</Typography>
                <Typography variant="subtitle1"> Height in Radius: {Result.heightInradiusUnit}</Typography>
              </div>

            </form>
          )}

        </Formik>
      </TabPanel>
    </div>
  );
}

export default CalculatorTabs
