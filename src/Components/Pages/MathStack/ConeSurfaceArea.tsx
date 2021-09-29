// import { Button, TextField } from '@material-ui/core'
// import { Formik } from 'formik'
// // eslint-disable-next-line no-use-before-define
// import React from 'react'
// import { calculateConeSurfaceArea } from '../../../Services/MathStack'
// import { ConeAreaI } from '../../../Types/MathStack'

// function ConeSurfaceArea () {
//   const [initialFormValues] = React.useState({
//     radius: '',
//     height: ''
//   })

//   const [Result, setResult] = React.useState({
//     BaseArea: 0,
//     LateralArea: 0,
//     ConeArea: 0
//   })
//   return (
//     <div>
//       <h2> Ball Surface Area</h2>
//       <Formik
//         initialValues={initialFormValues}

//         onSubmit={async ({

//           radius,
//           height

//         }, { setSubmitting, resetForm }) => {
//           const payload: ConeAreaI = {
//             radius,
//             height,
//             method: 'coneSurfaceAreaCalculator'
//           }
//           console.log(JSON.stringify(payload))
//           try {
//             const { payload: calConeArea } = await calculateConeSurfaceArea(payload)
//             console.log('=====>', calConeArea)
//             if (typeof calConeArea === 'object') {
//               console.log(calConeArea)
//               setResult({
//                 BaseArea: calConeArea.baseSurfaceArea,
//                 LateralArea: calConeArea.lateralSurefaceArea,
//                 ConeArea: calConeArea.coneSurfaceArea

//               })
//             }
//             resetForm()
//           } catch (err) {
//             console.log('====>', err)
//           }
//         }}

//       >
//         {({ values, handleChange, handleSubmit, isSubmitting }) => (
//           <form onSubmit={handleSubmit}>
//             <div>
//               <TextField
//                 label="Radius"
//                 id="radius"
//                 placeholder="0.0"
//                 variant="outlined"
//                 size="small"
//                 value={values.radius}
//                 onChange={handleChange}

//               />
//               <TextField
//                 label="Height"
//                 id="height"
//                 placeholder="0.0"
//                 variant="outlined"
//                 size="small"
//                 value={values.height}
//                 onChange={handleChange}

//               />

//               <div style={{ padding: 20 }}>
//                 <Button variant="outlined" color="primary" type="submit">
//                   Calculate
//                 </Button>
//               </div>
//               <div>
//                 <h4>Base Surface Area: {Result.BaseArea}</h4>
//                 <h4> Cone Area: {Result.ConeArea}</h4>
//                 <h4> Lateral Area: {Result.LateralArea}</h4>

//               </div>
//             </div>
//           </form>
//         )}

//       </Formik>

//     </div>
//   )
// }

// export default ConeSurfaceArea
import React from 'react'

function ConeSurfaceArea() {
  return (
    <div>
      welcome
    </div>
  )
}

export default ConeSurfaceArea
