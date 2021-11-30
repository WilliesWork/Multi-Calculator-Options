import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Container, Paper } from '@material-ui/core'
import { Formik } from 'formik'

import StyledTabs from './StyledTabs';
import StyledTab from './StyledTab';
import TabPanel from './TabPanel';
import NoIndexTabPanel from './NoIndexTabPanel'

import { CALCULATORS, LABELS, PLACEHOLDERS, IDS, INPUT_TYPE, COLORS } from '../../Common/shared'
import { CustomTextInput, CustomSelect, Figure, Label, CustomBtn, CustomSearchInput } from '../custom'
import TestCalculator from './TestCalculator'
import { CollapsibleMenu, Carousel } from '../Content';
import { CircleArea, EllipseArea, ParallelogramArea } from '../TestCalculators'

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
    paperBackground: {
        margin: theme.spacing(1),
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 20,
    },
    sideBarPaperBackground: {
        margin: theme.spacing(1),
        backgroundColor: 'transparent',
        borderRadius: 20,
    },
}));

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CalculatorLayout = (props: CalculatorLayoutProps) => {
    const { children, calculatorTitle } = props
    const { tabRoot, rightTabContainer, leftTabContainer, paperBackground, sideBarPaperBackground } = useStyles()
    const [value, setValue] = React.useState(0);
    const [searchText, setSearchText] = React.useState('');

    const handleTextChange = (event: any) => {
        setSearchText(event.target.value);
    };

    const onTabClick = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Grid container xs={12}>
                {/* Calculator grid */}
                <Grid item xs={6}>
                    <Paper className={paperBackground}>
                        <div className={tabRoot}>
                            <StyledTabs value={value} onChange={onTabClick} >
                                <StyledTab label="Circle area" {...a11yProps(0)} />
                                <StyledTab label="Ellipse area" {...a11yProps(1)} />
                                <StyledTab label="Parallelogram area" {...a11yProps(2)} />

                                {/* <div className={leftTabContainer}>
                                    <Typography></Typography>
                                </div>
                                <div className={rightTabContainer}>
                                    <Typography>Sign Up</Typography>
                                </div> */}
                            </StyledTabs>

                            <TabPanel value={value} index={0}>
                                <CircleArea />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <EllipseArea />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <ParallelogramArea />
                            </TabPanel>
                        </div>
                    </Paper>
                </Grid>

                {/* Result grid */}
                <Grid item xs={4}>
                    <Paper className={paperBackground}>
                        <div className={tabRoot}>
                            <StyledTabs>
                                <div className={leftTabContainer}>
                                    <Typography></Typography>
                                </div>
                                <div className={rightTabContainer}>
                                    <Typography>Result</Typography>
                                </div>
                            </StyledTabs>

                            <NoIndexTabPanel>
                                {children}
                            </NoIndexTabPanel>
                        </div>
                    </Paper>
                </Grid>

                {/* Ad & menu grid */}
                <Grid item xs={2}>
                    {/* Carousel */}
                    <Grid item xs={12}>
                        <Paper elevation={0} className={sideBarPaperBackground}>
                            <Carousel />
                        </Paper>
                    </Grid>

                    {/* Search input */}
                    <Grid>
                        <CustomSearchInput
                            type={INPUT_TYPE.text}
                            id='search'
                            name='search'
                            placeholder={PLACEHOLDERS.search}
                            value={searchText}
                            onChange={handleTextChange}
                        />
                    </Grid>

                    {/* Menu */}
                    <Grid item xs={12}>
                        <Paper elevation={0} className={sideBarPaperBackground}>
                            <CollapsibleMenu />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}

export default CalculatorLayout