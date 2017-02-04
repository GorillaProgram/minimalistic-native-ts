/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const NetworkStatus = {

    /**
     * Bandwidth under 150 kbps.
     */
    POOR: 'POOR',

    /**
     * Bandwidth between 150 and 550 kbps.
     */
    MODERATE: 'MODERATE',

    /**
     * Bandwidth between 550 and 2000 kbps.
     */
    GOOD: 'GOOD',

    /**
     * EXCELLENT - Bandwidth over 2000 kbps.
     */
    EXCELLENT: 'EXCELLENT',

    /**
     * Placeholder for unknown bandwidth. This is the initial value and will stay at this value
     * if a bandwidth cannot be accurately found.
     */
    UNKNOWN: 'UNKNOWN',

    mapToNetworkStatus(connectionQuality: string) {
        if (connectionQuality === 'POOR') {
            return NetworkStatus.POOR;
        } else if (connectionQuality === 'MODERATE') {
            return NetworkStatus.MODERATE;
        } else if (connectionQuality === 'GOOD') {
            return NetworkStatus.GOOD;
        } else if (connectionQuality === 'EXCELLENT') {
            return NetworkStatus.EXCELLENT;
        } else if (connectionQuality === 'UNKNOWN') {
            return NetworkStatus.UNKNOWN;
        }

    }

}

export default NetworkStatus;
