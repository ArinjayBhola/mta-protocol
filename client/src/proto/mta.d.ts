import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a OTRequest. */
export interface IOTRequest {

    /** OTRequest pk0 */
    pk0?: (Uint8Array|null);
}

/** Represents a OTRequest. */
export class OTRequest implements IOTRequest {

    /**
     * Constructs a new OTRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOTRequest);

    /** OTRequest pk0. */
    public pk0: Uint8Array;

    /**
     * Creates a new OTRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OTRequest instance
     */
    public static create(properties?: IOTRequest): OTRequest;

    /**
     * Encodes the specified OTRequest message. Does not implicitly {@link OTRequest.verify|verify} messages.
     * @param message OTRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOTRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OTRequest message, length delimited. Does not implicitly {@link OTRequest.verify|verify} messages.
     * @param message OTRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOTRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a OTRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OTRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OTRequest;

    /**
     * Decodes a OTRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OTRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OTRequest;

    /**
     * Verifies a OTRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a OTRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OTRequest
     */
    public static fromObject(object: { [k: string]: any }): OTRequest;

    /**
     * Creates a plain object from a OTRequest message. Also converts values to other types if specified.
     * @param message OTRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OTRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OTRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OTRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a OTResponse. */
export interface IOTResponse {

    /** OTResponse e0 */
    e0?: (Uint8Array|null);

    /** OTResponse e1 */
    e1?: (Uint8Array|null);
}

/** Represents a OTResponse. */
export class OTResponse implements IOTResponse {

    /**
     * Constructs a new OTResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOTResponse);

    /** OTResponse e0. */
    public e0: Uint8Array;

    /** OTResponse e1. */
    public e1: Uint8Array;

    /**
     * Creates a new OTResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OTResponse instance
     */
    public static create(properties?: IOTResponse): OTResponse;

    /**
     * Encodes the specified OTResponse message. Does not implicitly {@link OTResponse.verify|verify} messages.
     * @param message OTResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOTResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OTResponse message, length delimited. Does not implicitly {@link OTResponse.verify|verify} messages.
     * @param message OTResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOTResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a OTResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OTResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OTResponse;

    /**
     * Decodes a OTResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OTResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OTResponse;

    /**
     * Verifies a OTResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a OTResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OTResponse
     */
    public static fromObject(object: { [k: string]: any }): OTResponse;

    /**
     * Creates a plain object from a OTResponse message. Also converts values to other types if specified.
     * @param message OTResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OTResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OTResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OTResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a MTASession. */
export interface IMTASession {

    /** MTASession requests */
    requests?: (IOTRequest[]|null);
}

/** Represents a MTASession. */
export class MTASession implements IMTASession {

    /**
     * Constructs a new MTASession.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMTASession);

    /** MTASession requests. */
    public requests: IOTRequest[];

    /**
     * Creates a new MTASession instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MTASession instance
     */
    public static create(properties?: IMTASession): MTASession;

    /**
     * Encodes the specified MTASession message. Does not implicitly {@link MTASession.verify|verify} messages.
     * @param message MTASession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMTASession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MTASession message, length delimited. Does not implicitly {@link MTASession.verify|verify} messages.
     * @param message MTASession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMTASession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MTASession message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MTASession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MTASession;

    /**
     * Decodes a MTASession message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MTASession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MTASession;

    /**
     * Verifies a MTASession message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MTASession message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MTASession
     */
    public static fromObject(object: { [k: string]: any }): MTASession;

    /**
     * Creates a plain object from a MTASession message. Also converts values to other types if specified.
     * @param message MTASession
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MTASession, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MTASession to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MTASession
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a MTAResponse. */
export interface IMTAResponse {

    /** MTAResponse responses */
    responses?: (IOTResponse[]|null);
}

/** Represents a MTAResponse. */
export class MTAResponse implements IMTAResponse {

    /**
     * Constructs a new MTAResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMTAResponse);

    /** MTAResponse responses. */
    public responses: IOTResponse[];

    /**
     * Creates a new MTAResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MTAResponse instance
     */
    public static create(properties?: IMTAResponse): MTAResponse;

    /**
     * Encodes the specified MTAResponse message. Does not implicitly {@link MTAResponse.verify|verify} messages.
     * @param message MTAResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMTAResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MTAResponse message, length delimited. Does not implicitly {@link MTAResponse.verify|verify} messages.
     * @param message MTAResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMTAResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MTAResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MTAResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MTAResponse;

    /**
     * Decodes a MTAResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MTAResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MTAResponse;

    /**
     * Verifies a MTAResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MTAResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MTAResponse
     */
    public static fromObject(object: { [k: string]: any }): MTAResponse;

    /**
     * Creates a plain object from a MTAResponse message. Also converts values to other types if specified.
     * @param message MTAResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MTAResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MTAResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MTAResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Handshake. */
export interface IHandshake {

    /** Handshake publicC */
    publicC?: (Uint8Array|null);

    /** Handshake bobGy */
    bobGy?: (Uint8Array|null);
}

/** Represents a Handshake. */
export class Handshake implements IHandshake {

    /**
     * Constructs a new Handshake.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHandshake);

    /** Handshake publicC. */
    public publicC: Uint8Array;

    /** Handshake bobGy. */
    public bobGy: Uint8Array;

    /**
     * Creates a new Handshake instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Handshake instance
     */
    public static create(properties?: IHandshake): Handshake;

    /**
     * Encodes the specified Handshake message. Does not implicitly {@link Handshake.verify|verify} messages.
     * @param message Handshake message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Handshake message, length delimited. Does not implicitly {@link Handshake.verify|verify} messages.
     * @param message Handshake message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Handshake message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Handshake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Handshake;

    /**
     * Decodes a Handshake message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Handshake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Handshake;

    /**
     * Verifies a Handshake message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Handshake message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Handshake
     */
    public static fromObject(object: { [k: string]: any }): Handshake;

    /**
     * Creates a plain object from a Handshake message. Also converts values to other types if specified.
     * @param message Handshake
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Handshake, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Handshake to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Handshake
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
