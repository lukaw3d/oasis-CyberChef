import Operation from "../Operation.mjs";
import * as oasisRT from "@oasisprotocol/client-rt";

/** */
export default class extends Operation {
    /** */
    constructor() {
        super();

        this.name = "From rofl1 address";
        this.module = "Oasis";
        this.description = "rofl1";
        this.infoURL = "";
        this.inputType = "string";
        this.outputType = "byteArray";
        this.args = [];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {byteArray}
     */
    run(input, args) {
        const bech32 = input.trim();
        return [...oasisRT.rofl.fromBech32(bech32)];
    }
}
