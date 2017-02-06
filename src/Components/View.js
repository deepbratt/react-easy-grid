import React, {Component} from 'react';

class View extends Component {
    render() {
        //Make a flex box
        let props = {...this.props};
        let style = {...{
            display:'flex',
            flex:1
        },...props.style}

        //Remove flex if height or width exists
        if(style.width !== undefined || style.height !== undefined){
            delete style.flex;
        }

        //If Scroll View add veritcal scrolling
        if(props.scrollY){
            style.overflowY = 'auto';
            delete props.scrollY;
        }
        return (
            <div  {...props} style={style}>
                {props.children}
            </div>
        );
    }
}

export default View;