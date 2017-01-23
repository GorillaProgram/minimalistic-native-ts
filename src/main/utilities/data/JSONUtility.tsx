/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
const JSONUtility = {

    /**
     * JSON -> String
     *
     * @param json
     * @return sting
     */
    jsonToString(json) {
        return JSON.stringify(json);
    },

    /**
     * String -> JSON
     *
     * @param string
     * @returns json
     */
    stringToJson(string) {
        return JSON.parse(string);
    }

};

export default JSONUtility;
