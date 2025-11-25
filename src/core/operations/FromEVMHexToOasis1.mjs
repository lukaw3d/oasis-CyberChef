import Operation from "../Operation.mjs";
import * as oasis from "@oasisprotocol/client";
import * as oasisRT from "@oasisprotocol/client-rt";

/** */
export default class extends Operation {
    /** */
    constructor() {
        super();

        this.name = "From EVM hex address to oasis1 address";
        this.module = "Oasis";
        this.description = "0x to oasis1";
        this.infoURL = "";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        return getEvmBech32Address(input);
    }
}

/**
 * @param {string} evmAddress
 */
export function getEvmBech32Address(evmAddress) {
    const evmBytes = oasis.misc.fromHex(evmAddress.replace("0x", ""));
    const address = oasis.address.fromData(
        oasisRT.address.V0_SECP256K1ETH_CONTEXT_IDENTIFIER,
        oasisRT.address.V0_SECP256K1ETH_CONTEXT_VERSION,
        evmBytes,
    );
    const bech32Address = oasisRT.address.toBech32(address);
    return bech32Address;
}
