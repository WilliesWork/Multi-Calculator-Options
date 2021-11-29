import React from 'react'
import { Button, withStyles, } from '@material-ui/core'
import { red, purple } from '@material-ui/core/colors';

import { BUTTONS, COLORS } from '../../Common/shared'

const ColorButton = withStyles((theme) => ({
  root: {
    color: COLORS.background,
    backgroundColor: COLORS.gradient,
    '&:hover': {
      backgroundColor: purple[400],
    },
  },
}))(Button);

const CustomResetBtn = () => {
  return (
    <div className="form d-grid gap-2 d-md-flex justify-content-md-end">
      <ColorButton
        size="small"
        variant="contained"
        color="primary"
        type="submit"
        className="btn btn-primary"
      >
        {BUTTONS.clear}
      </ColorButton>
    </div>
  )
}

export default CustomResetBtn
