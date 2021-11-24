import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Container, Paper } from '@material-ui/core'
import { Formik } from 'formik'

import StyledTabs from './StyledTabs';
import StyledTab from './StyledTab';
import TabPanel from './TabPanel';

import { CapsuleVolumeCalculatorI } from '../../Types'
import { RootState } from '../../redux/store'
import { CALCULATORS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE, COLORS } from '../../Common/shared'
import { CustomForm, CustomSelect, Figure, Label, CustomBtn } from '../custom'
import { calculateMath } from './../../Services/AppCalculatorsApi'
import { CollapsibleMenu, Carousel } from '../Content';

interface CalculatorLayoutProps {
    children?: React.ReactNode;
    calculatorTitle: string;
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
    resultTabContainer: {
        display: 'flex',
        background: COLORS.gradient,
        color: COLORS.light_text_color,
        justifyContent: 'center',
        width: '70%',
        float: 'inline-end',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    paperBackground: {
        margin: theme.spacing(1),
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 20,
    },
}));

const CalculatorLayout = (props: CalculatorLayoutProps) => {
    const { children } = props
    const { tabRoot, rightTabContainer, leftTabContainer, resultTabContainer, paperBackground } = useStyles()
    const [value, setValue] = React.useState(0);
    const [initialFormValues] = React.useState({
    })
    const [Result, setResult] = React.useState({
    })
    return (
        <>
            <Grid container xs={12}>
                <Grid item xs={6}>
                    <Paper className={paperBackground}>
                        <div className={tabRoot}>
                            <div className={leftTabContainer}>
                                <Typography>Formular: xxx</Typography>
                            </div>
                            <div className={rightTabContainer}>

                                <Typography>Linear gradient</Typography>
                            </div>
                            <TabPanel value={value} index={0}>
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
                            <TabPanel value={value} index={1}>
                                willie
                            </TabPanel>

                        </div>
                    </Paper>

                </Grid>
                <Grid item xs={4}>
                    <Paper className={paperBackground}>
                        <div className={tabRoot}>
                            <div className={resultTabContainer}>
                                <Typography>Result</Typography>
                            </div>
                            <TabPanel value={value} index={0}>
                                {children}
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Result
                            </TabPanel>
                        </div>
                    </Paper>

                </Grid>
                <Grid item xs={2}>
                    <Grid item xs={12}>
                        <Paper className={paperBackground}>
                            <Carousel />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={paperBackground}>
                            <CollapsibleMenu />
                        </Paper>
                    </Grid>


                </Grid>
            </Grid>
        </>

    )
}

export default CalculatorLayout