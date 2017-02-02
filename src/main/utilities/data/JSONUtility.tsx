/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
const JSONUtility = {

    /**
     * JSON -> String
     *
     * @param json
     * @return sting
     */
    toString(json: any) {
        return JSON.stringify(json);
    },

    /**
     * String -> JSON
     *
     * @param jsonString
     * @returns json
     */
    toJson(jsonString: string) {
        return JSON.parse(jsonString);
    }

};

export default JSONUtility;
