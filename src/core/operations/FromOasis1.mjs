import Operation from "../Operation.mjs";
import * as oasis from "@oasisprotocol/client";

/** */
export default class extends Operation {
    /** */
    constructor() {
        super();

        this.name = "From oasis1 address";
        this.module = "Oasis";
        this.description = "oasis1";
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
        return [...oasis.staking.addressFromBech32(bech32)];
    }
}
