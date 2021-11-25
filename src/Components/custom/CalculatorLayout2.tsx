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
import { CustomTextInput, CustomSelect, Figure, Label, CustomBtn } from '.'
import { calculateMath } from '../../Services/AppCalculatorsApi'
import { CollapsibleMenu, Carousel } from '../Content';

interface CalculatorLayoutProps {
    children?: React.ReactNode;
    calculatorTitle: string;
    template: any;
}

interface FieldsI {
    label: string;
    type: string | number;
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
    resultTabContainer: {
        display: 'flex',
        background: COLORS.gradient,
        color: COLORS.light_text_color,
        justifyContent: 'center',
        width: '70%',
        float: 'inline-end',
        '&:nth-child(even)': {
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 20,
        },
        '&:nth-child(odd)': {
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
        },
    },
    paperBackground: {
        margin: theme.spacing(1),
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 20,
    },
}));

const CalculatorLayout = (props: CalculatorLayoutProps) => {
    const { children, template } = props
    const { title, payload, initialValues, result, hasCustomSelect, fields } = template
    const { tabRoot, rightTabContainer, leftTabContainer, paperBackground } = useStyles()
    const [value, setValue] = React.useState(0);
    const [searchText, setSearchText] = React.useState('');
    const [initialFormValues] = React.useState(initialValues)
    const [Result, setResult] = React.useState(result)

    const handleSearchChange = (event: any) => {
        setSearchText(event.target.value);
    };

    const renderFields = ({ fields, handleChange }: { fields: FieldsI[], handleChange: any }) => {
        return fields.map(({ label, type, id, placeholder, select }) => {
            return (
                <div className="form-row">
                    <Label title={label} />
                    <CustomTextInput
                        type={type}
                        id="radius"
                        placeholder={placeholder}
                        onChange={handleChange}
                    />

                    <CustomSelect
                        measurement={select.measurement}
                        id={select.id}
                        onChange={handleChange('radius_unit')}
                    />
                </div>
            )
        })
    }

    return (
        <>
            <Grid container xs={12}>

                {/* Form grid */}
                <Grid item xs={6}>
                    <Paper className={paperBackground}>
                        <div className={tabRoot}>
                            <StyledTabs>
                                <div className={leftTabContainer}>
                                    <Typography>{title}</Typography>
                                </div>
                                <div className={rightTabContainer}>
                                    <Typography>Linear gradient</Typography>
                                </div>
                            </StyledTabs>

                            <TabPanel value={value} index={0}>
                                <Formik
                                    initialValues={initialFormValues}
                                    onSubmit={async ({
                                    }, { setSubmitting, resetForm }) => {
                                        console.log(payload)
                                        try {
                                            resetForm()
                                        } catch (err) {
                                            console.log('====>', err)
                                        }
                                    }}
                                >
                                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                                        <form onSubmit={handleSubmit} className="</form>form-container">
                                            <Container>
                                                {renderFields({ fields, handleChange })}
                                                <CustomBtn />
                                            </Container>
                                        </form>
                                    )}
                                </Formik>

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

                            <TabPanel value={value} index={0}>
                                {children}
                            </TabPanel>
                        </div>
                    </Paper>
                </Grid>


                {/* Ad & menu grid */}
                <Grid item xs={2}>
                    {/* Carousel */}
                    <Grid item xs={12}>
                        <Paper className={paperBackground}>
                            <Carousel />
                        </Paper>
                    </Grid>

                    {/* Search input */}
                    <Grid>
                        <CustomTextInput
                            type={INPUT_TYPE.text}
                            id='search'
                            placeholder={PLACEHOLDERS.search}
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                    </Grid>

                    {/* Menu */}
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