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
    jsonToString(json: any) {
        return JSON.stringify(json);
    },

    /**
     * String -> JSON
     *
     * @param string
     * @returns json
     */
    stringToJson(params: string) {
        return JSON.parse(params);
    }

};

export default JSONUtility;
