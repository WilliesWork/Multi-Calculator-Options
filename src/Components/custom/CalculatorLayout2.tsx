import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid, Container, Paper } from '@material-ui/core'
import { Formik, Form } from 'formik'

import StyledTabs from './StyledTabs';
import StyledTab from './StyledTab';
import TabPanel from './TabPanel';
import NoIndexTabPanel from './NoIndexTabPanel';

import { useAppDispatch, useAppSelector, selectCalculators, calculateData } from '../../redux'
import { PLACEHOLDERS, INPUT_TYPE, COLORS } from '../../Common/shared'
import { calculateMath } from '../../Services/AppCalculatorsApi'
import { CollapsibleMenu, Carousel } from '../Content';
import {
    CustomTextInput,
    CustomSelect,
    CustomResetBtn,
    Label,
    CustomBtn,
    CustomSearchInput
} from './index'


interface CalculatorLayoutProps {
    children?: React.ReactNode;
    calculatorTitle: string;
    template: any;
}

interface FieldsI {
    label: string;
    type: string | any;
    id: string;
    placeholder: string;
    select: any;
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

const CalculatorLayout = (props: CalculatorLayoutProps) => {
    const { children, template } = props
    const { results } = useAppSelector(selectCalculators)
    const dispatch = useAppDispatch()
    const {
        title,
        method,
        initialValues,
        hasCustomSelect,
        fields
    } = template
    const [value, setValue] = React.useState(0);
    const [searchText, setSearchText] = React.useState('');
    // const [Result, setResult] = React.useState(result)
    const {
        tabRoot,
        rightTabContainer,
        leftTabContainer,
        paperBackground,
        sideBarPaperBackground
    } = useStyles()


    const handleSearchChange = (event: any) => {
        setSearchText(event.target.value);
    };

    const renderFields = (fields: FieldsI[]) => {
        return fields.map(({ label, type, id, placeholder, select }) => {
            return (
                <div className="form-row">
                    <Label title={label} />
                    <CustomTextInput
                        type={type}
                        id={id}
                        name={id}
                        placeholder={placeholder}
                    />

                    <CustomSelect
                        measurement={select.measurement}
                        id={select.id}
                        name="radius_unit"
                    />
                </div>
            )
        })
    }

    return (
        <>
            <Grid container xs={12}>
                <Grid container item xs={12} sm={10}>
                    {/* Form grid */}
                    <Grid item xs={12} sm={8}>
                        <Paper className={paperBackground}>
                            <div className={tabRoot}>
                                <StyledTabs>
                                    <div className={leftTabContainer}>
                                        <Typography></Typography>
                                    </div>
                                    <div className={rightTabContainer}>
                                        <Typography>{title}</Typography>
                                    </div>
                                </StyledTabs>

                                <TabPanel value={value} index={0}>
                                    <Formik
                                        initialValues={initialValues}
                                        onSubmit={async (values, { setSubmitting }) => {
                                            const payload = {
                                                ...values,
                                                method
                                            }
                                            console.log("VALUES: ", values)
                                            try {
                                                const { payload: calculatorObject } = await calculateMath(payload)
                                                console.log('=====>', calculatorObject)
                                                if (typeof calculatorObject === 'object') {
                                                    /* const { area, units } = calculatorObject
                                                    setResult({
                                                        area: area,
                                                        unit: units,
                                                    }) */
                                                    dispatch(calculateData({ calculatorObject, method }))
                                                }

                                            } catch (err) {
                                                console.log('====>', err)
                                            }
                                        }}
                                    >
                                        {({ isSubmitting, resetForm }) => (
                                            <Form className="form-container">
                                                {renderFields(fields)}
                                                <div
                                                    className="form-row"
                                                    style={{ alignItems: 'center', justifyContent: 'space-between' }}
                                                >
                                                    <CustomBtn />
                                                    <CustomResetBtn
                                                        onHandleClick={() => resetForm()}
                                                    />
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>

                                </TabPanel>
                            </div>
                        </Paper>
                    </Grid>

                    {/* Result grid */}
                    <Grid item xs={12} sm={4}>
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
                                    <Typography variant="h6" >{results}</Typography>
                                </NoIndexTabPanel>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>



                {/* Ad & menu grid */}
                <Grid item xs={12} sm={2}>
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
                            name="search"
                            placeholder={PLACEHOLDERS.search}
                            value={searchText}
                            onChange={handleSearchChange}
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