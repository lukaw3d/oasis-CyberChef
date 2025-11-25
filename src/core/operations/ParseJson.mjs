import Operation from "../Operation.mjs";

/** */
export default class extends Operation {
    /** */
    constructor() {
        super();

        this.name = "JSON.parse";
        this.module = "Oasis";
        this.description = "JSON.parse";
        this.infoURL = "";
        this.inputType = "string";
        this.outputType = "JSON";
        this.args = [];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {JSON}
     */
    run(input, args) {
        return JSON.parse(input);
    }
}
