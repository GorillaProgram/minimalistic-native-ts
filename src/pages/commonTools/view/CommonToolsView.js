/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import CommonStyles from '../../../main/constant/CommonStyle';
import ImagePath from '../../../main/constant/ImagePath';
import SliderGroup from '../../../main/components/view/slider/SliderGroup';
import { Square } from '../../../main/components/view/UIComponents';

class CommonToolsView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        const settings = {
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div style={CommonStyles.homeRightContainer}>
                <div style={styles.container}>
                    <SliderGroup title="常用工具" settings={settings}>
                        <div style={styles.slide}>
                            <Square title="连接设备" image={ImagePath.cardSendBusinessManagementIcon} />
                            <Square title="清除缓存" image={ImagePath.clearImageCacheBusinessManagementIcon} onClick={this.props.handleClearCacheClick} />
                        </div>
                    </SliderGroup>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {

    },
    slide: {
        display: 'flex',
        flexDirection: 'row',
    }
};

CommonToolsView.propTypes = {
    handleClearCacheClick: PropTypes.func.isRequired
};

export default CommonToolsView;
