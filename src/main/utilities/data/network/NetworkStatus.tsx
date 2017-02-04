/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const ConnectionQuality {

    /**
     * Bandwidth under 150 kbps.
     */
    POOR = 'POOR',

    /**
     * Bandwidth between 150 and 550 kbps.
     */
    MODERATE = 'MODERATE',
    /**
     * Bandwidth between 550 and 2000 kbps.
     */

    GOOD = 'GOOD',

    /**
     * EXCELLENT - Bandwidth over 2000 kbps.
     */
    EXCELLENT = 'EXCELLENT',

    /**
     * Placeholder for unknown bandwidth. This is the initial value and will stay at this value
     * if a bandwidth cannot be accurately found.
     */
    UNKNOWN = 'UNKNOWN'
}

export default ConnectionQuality;
