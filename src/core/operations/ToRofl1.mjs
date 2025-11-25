import Operation from "../Operation.mjs";
import * as oasis from "@oasisprotocol/client";
import * as oasisRT from "@oasisprotocol/client-rt";

/** */
export default class extends Operation {
    /** */
    constructor() {
        super();

        this.name = "To rofl1 address";
        this.module = "Oasis";
        this.description = "rofl1";
        this.infoURL = "";
        this.inputType = "ArrayBuffer";
        this.outputType = "string";
        this.args = [];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        let arr = new Uint8Array(input);
        // jq outputs string "[0, ...]" instead of json [0, ...]. Handle it here instead of requiring JSON.parse + toUint8Array
        if (arr[0] === "[".charCodeAt(0) && arr[arr.length-1] === "]".charCodeAt(0)) {
            arr = new Uint8Array(JSON.parse(oasis.misc.toStringUTF8(arr)));
        }
        return oasisRT.rofl.toBech32(arr);
    }
}
