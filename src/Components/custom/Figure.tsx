import FIGURE from './../../Common/assets/image-placeholder.jpg'
import useStyles from './../../Styling/CustomStyles'

function Figure() {
  const classes = useStyles();
  return (
    <div className='form-group col'>
      <img src={FIGURE} alt="figure" className='img-fluid img-thumbnail' style={{ height: 150 }} />
    </div>
  )
}

export default Figure
