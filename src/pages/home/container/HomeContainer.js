/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { SHOW_INDEX_INFO, showIndexInfo } from '../../../dataflow/actions/Actions';
import Just from '../../../main/context/Just';
import HomeView from '../view/HomeView';

class HomeContainer extends Component {

    constructor(props) {
        super(props);

        Just.delayExecute(() => {
            const { dispatch } = this.props;
            dispatch(showIndexInfo({
                actionType: SHOW_INDEX_INFO
            }), 1000);
        });

        this.handleOpenCardClick = this.handleOpenCardClick.bind(this);
    }

    handleOpenCardClick() {
        this.context.router.push('webView');
    }

    render() {
        const { adModels, noticeModels, productModels } = this.props;
        return (
            <HomeView
                adModels={adModels}
                noticeModels={noticeModels}
                productModels={productModels}
                handleOpenCardClick={this.handleOpenCardClick}
            />
        );
    }
}

HomeContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    adModels: PropTypes.array.isRequired,
    noticeModels: PropTypes.array.isRequired,
    productModels: PropTypes.array.isRequired
};

HomeContainer.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state) {
    const { showIndex } = state;
    return {
        adModels: showIndex.adModels,
        noticeModels: showIndex.noticeModels,
        productModels: showIndex.productModels
    };
}

export default connect(mapStateToProps)(HomeContainer);
