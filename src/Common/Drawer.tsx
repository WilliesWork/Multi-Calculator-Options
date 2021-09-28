import React from 'react'
import {Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core' 
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/Inbox'
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles({
    drawer: {
      width: '155px',
    }
    })

const Drawer = (props: any) => {
    console.log(props)
    const {history} = props
    const {drawer} = useStyles()
    const drawerList = [{text: 'Home', icon: <InboxIcon />, onClick: () => history.push('/')}, {text: 'Math', icon: <MailIcon />, onClick: () => history.push('/') }, {text:'Health', icon: <MailIcon />, onClick: () => history.push('/') }, {text:'Financial', icon: <InboxIcon />, onClick: () => history.push('/')}]
    return (
        <MUIDrawer variant="permanent" className={drawer}>
            <List>
            {drawerList.map((item, index) => {
                const {text, icon, onClick} = item
           return (   <ListItem button key={text} onClick={onClick} >
               {icon &&  <ListItemIcon>  {icon} </ListItemIcon>}
               
                <ListItemText primary={text} />
              </ListItem>
            )
            })}
          </List>
        </MUIDrawer>
    )
}

export default withRouter(Drawer)
