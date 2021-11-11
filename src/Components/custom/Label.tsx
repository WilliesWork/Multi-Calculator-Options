import { Typography } from '@material-ui/core'

const Label = (props: any) => {
  const { title } = props
  return (
    <div className="form-group col-2">
      <Typography>{title}</Typography>
    </div>
  )
}

export default Label
