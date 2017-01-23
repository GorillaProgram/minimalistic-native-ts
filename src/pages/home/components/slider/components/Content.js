/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';

class Content extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        const content = this.props.model.content.map((item, index) => {
            return (
                <div key={`${index}`} style={styles.contentItem} >
                    {item.des}: {item.text}
                </div>
            );
        });
        return (
            <div style={styles.container}>
                <img src={this.props.model.image} style={styles.image}/>
                <div style={styles.content}>
                    {content}
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 15,
    },
    image: {
        width: '50%',
        height: '50%'
    },
    content: {
        width: '65%',
        marginLeft: 15,
        marginRight: 5,
        fontSize: 16,
        overflow: 'auto'
    },
    contentItem: {
        marginTop: 5
    }
};

Content.propTypes = {
    model: PropTypes.object.isRequired
};

export default Content;
