import React from "react";
import './directoryMenu.component.css';
import { MenuItem } from "../menu-item/menu-item.component";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export const  DirectoryMenu = connect(mapStateToProps)(({sections}) => {
  return(
    <div className="directory-menu">
      {
        sections.map(({id,title,imageUrl,size,linkUrl}) => 
        <MenuItem key={id} title={title} image={imageUrl} size={size} linkUrl={linkUrl}/>)
      }
  </div>
  )
}

)


