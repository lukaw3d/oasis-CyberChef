import Operation from "../Operation.mjs";

/** */
export default class extends Operation {
    /** */
    constructor() {
        super();

        this.name = "To Uint8Array";
        this.module = "Oasis";
        this.description = "JSON array to Uint8Array";
        this.infoURL = "";
        this.inputType = "JSON";
        this.outputType = "ArrayBuffer";
        this.args = [];
    }

    /**
     * @param {JSON} input
     * @param {Object[]} args
     * @returns {ArrayBuffer}
     */
    run(input, args) {
        return new Uint8Array(input).buffer;
    }
}
