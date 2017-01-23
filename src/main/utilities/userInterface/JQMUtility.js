/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import '../../../../static/stylesheets/screen.css';
import DataUtility from '../data/DataUtility';

const JQMUtility = {

    showLoader(message) {
        var messageTag = DataUtility.isNotNull(message) ? `
            <div class="sk-circle-text-layout">${message}</div>
        ` : '';
        JQMUtility.loader(`
                <div class="sk-circle-layout">
                    <div class="sk-circle">
                        <div class="sk-circle1 sk-child"></div>
                        <div class="sk-circle2 sk-child"></div>
                        <div class="sk-circle3 sk-child"></div>
                        <div class="sk-circle4 sk-child"></div>
                        <div class="sk-circle5 sk-child"></div>
                        <div class="sk-circle6 sk-child"></div>
                        <div class="sk-circle7 sk-child"></div>
                        <div class="sk-circle8 sk-child"></div>
                        <div class="sk-circle9 sk-child"></div>
                        <div class="sk-circle10 sk-child"></div>
                        <div class="sk-circle11 sk-child"></div>
                        <div class="sk-circle12 sk-child"></div>
                    </div>
                    ${messageTag}
                </div>
            `);
    },
    hideLoader() {
        $.mobile.loading('hide');
    },
    loader(html) {
        $.mobile.loading('show', {
            text: '',
            textVisible: true,
            theme: 'z',
            textonly: true,
            html: html
        });
    }

};

export default JQMUtility;
