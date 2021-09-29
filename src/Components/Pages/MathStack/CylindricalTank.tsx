// import { TextField, Button } from '@material-ui/core'
// import { Formik } from 'formik'
// // eslint-disable-next-line no-use-before-define
// import React from 'react'
// import { calculateCylindricalTank } from '../../../Services/MathStack'
// import { ConeAreaI } from '../../../Types/MathStack'

// const CylindricalTank = () => {
//   const [initialFormValues] = React.useState({
//     radius: '',
//     height: ''
//   })

//   const [Result, setResult] = React.useState({
//     BaseArea: 0,
//     LateralArea: 0,
//     CylindricalSurfaceTank: 0
//   })
//   return (
//         <div>
//             <h2> Ball Surface Area</h2>
//             <Formik
//                 initialValues={initialFormValues}

//                 onSubmit={async ({

//                   radius,
//                   height

//                 }, { setSubmitting, resetForm }) => {
//                   const payload: ConeAreaI = {
//                     radius,
//                     height,
//                     method: 'cylindricalTankSurfaceAreaCalculator'
//                   }
//                   console.log(JSON.stringify(payload))
//                   try {
//                     const { payload: calCylindricalTank } = await calculateCylindricalTank(payload)
//                     console.log('=====>', calCylindricalTank)
//                     if (typeof calCylindricalTank === 'object') {
//                       console.log(calCylindricalTank)
//                       setResult({
//                         BaseArea: calCylindricalTank.baseSurfaceArea,
//                         LateralArea: calCylindricalTank.lateralSurefaceArea,
//                         CylindricalSurfaceTank: calCylindricalTank.cylindricalTank

//                       })
//                     }
//                     resetForm()
//                   } catch (err) {
//                     console.log('====>', err)
//                   }
//                 }}

//             >
//                 {({ values, handleChange, handleSubmit, isSubmitting }) => (
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <TextField
//                                 label="Radius"
//                                 id="radius"
//                                 placeholder="0.0"
//                                 variant="outlined"
//                                 size="small"
//                                 value={values.radius}
//                                 onChange={handleChange}

//                             />
//                             <TextField
//                                 label="Height"
//                                 id="height"
//                                 placeholder="0.0"
//                                 variant="outlined"
//                                 size="small"
//                                 value={values.height}
//                                 onChange={handleChange}

//                             />

//                             <div style={{ padding: 20 }}>
//                                 <Button variant="outlined" color="primary" type="submit">
//                                     Calculate
//                                 </Button>
//                             </div>
//                             <div>
//                                 <h4>Base Surface Area: {Result.BaseArea}</h4>
//                                 <h4> Cylindrical Surface Area : {Result.CylindricalSurfaceTank}</h4>
//                                 <h4> Lateral Area: {Result.LateralArea}</h4>

//                             </div>
//                         </div>
//                     </form>
//                 )}

//             </Formik>

//         </div>
//   )
// }
// export default CylindricalTank
import React from 'react'

function CylindricalTank() {
  return (
    <div>
      Welcome
    </div>
  )
}

export default CylindricalTank
