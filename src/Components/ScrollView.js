import React, {Component} from 'react';
import Grid from './Grid';
import Col from './Col';

class ScrollView extends Component {
    render() {
        return (
            <Grid {...this.props} scrollY>
                <Col>{this.props.children}</Col>
            </Grid>
        );
    }
}

export default ScrollView;