/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.OTRequest = (function() {

    /**
     * Properties of a OTRequest.
     * @exports IOTRequest
     * @interface IOTRequest
     * @property {Uint8Array|null} [pk0] OTRequest pk0
     */

    /**
     * Constructs a new OTRequest.
     * @exports OTRequest
     * @classdesc Represents a OTRequest.
     * @implements IOTRequest
     * @constructor
     * @param {IOTRequest=} [properties] Properties to set
     */
    function OTRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OTRequest pk0.
     * @member {Uint8Array} pk0
     * @memberof OTRequest
     * @instance
     */
    OTRequest.prototype.pk0 = $util.newBuffer([]);

    /**
     * Creates a new OTRequest instance using the specified properties.
     * @function create
     * @memberof OTRequest
     * @static
     * @param {IOTRequest=} [properties] Properties to set
     * @returns {OTRequest} OTRequest instance
     */
    OTRequest.create = function create(properties) {
        return new OTRequest(properties);
    };

    /**
     * Encodes the specified OTRequest message. Does not implicitly {@link OTRequest.verify|verify} messages.
     * @function encode
     * @memberof OTRequest
     * @static
     * @param {IOTRequest} message OTRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OTRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pk0 != null && Object.hasOwnProperty.call(message, "pk0"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.pk0);
        return writer;
    };

    /**
     * Encodes the specified OTRequest message, length delimited. Does not implicitly {@link OTRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OTRequest
     * @static
     * @param {IOTRequest} message OTRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OTRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a OTRequest message from the specified reader or buffer.
     * @function decode
     * @memberof OTRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OTRequest} OTRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OTRequest.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OTRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.pk0 = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a OTRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OTRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OTRequest} OTRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OTRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a OTRequest message.
     * @function verify
     * @memberof OTRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OTRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pk0 != null && message.hasOwnProperty("pk0"))
            if (!(message.pk0 && typeof message.pk0.length === "number" || $util.isString(message.pk0)))
                return "pk0: buffer expected";
        return null;
    };

    /**
     * Creates a OTRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OTRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OTRequest} OTRequest
     */
    OTRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.OTRequest)
            return object;
        var message = new $root.OTRequest();
        if (object.pk0 != null)
            if (typeof object.pk0 === "string")
                $util.base64.decode(object.pk0, message.pk0 = $util.newBuffer($util.base64.length(object.pk0)), 0);
            else if (object.pk0.length >= 0)
                message.pk0 = object.pk0;
        return message;
    };

    /**
     * Creates a plain object from a OTRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OTRequest
     * @static
     * @param {OTRequest} message OTRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OTRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if (options.bytes === String)
                object.pk0 = "";
            else {
                object.pk0 = [];
                if (options.bytes !== Array)
                    object.pk0 = $util.newBuffer(object.pk0);
            }
        if (message.pk0 != null && message.hasOwnProperty("pk0"))
            object.pk0 = options.bytes === String ? $util.base64.encode(message.pk0, 0, message.pk0.length) : options.bytes === Array ? Array.prototype.slice.call(message.pk0) : message.pk0;
        return object;
    };

    /**
     * Converts this OTRequest to JSON.
     * @function toJSON
     * @memberof OTRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OTRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for OTRequest
     * @function getTypeUrl
     * @memberof OTRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    OTRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/OTRequest";
    };

    return OTRequest;
})();

$root.OTResponse = (function() {

    /**
     * Properties of a OTResponse.
     * @exports IOTResponse
     * @interface IOTResponse
     * @property {Uint8Array|null} [e0] OTResponse e0
     * @property {Uint8Array|null} [e1] OTResponse e1
     */

    /**
     * Constructs a new OTResponse.
     * @exports OTResponse
     * @classdesc Represents a OTResponse.
     * @implements IOTResponse
     * @constructor
     * @param {IOTResponse=} [properties] Properties to set
     */
    function OTResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OTResponse e0.
     * @member {Uint8Array} e0
     * @memberof OTResponse
     * @instance
     */
    OTResponse.prototype.e0 = $util.newBuffer([]);

    /**
     * OTResponse e1.
     * @member {Uint8Array} e1
     * @memberof OTResponse
     * @instance
     */
    OTResponse.prototype.e1 = $util.newBuffer([]);

    /**
     * Creates a new OTResponse instance using the specified properties.
     * @function create
     * @memberof OTResponse
     * @static
     * @param {IOTResponse=} [properties] Properties to set
     * @returns {OTResponse} OTResponse instance
     */
    OTResponse.create = function create(properties) {
        return new OTResponse(properties);
    };

    /**
     * Encodes the specified OTResponse message. Does not implicitly {@link OTResponse.verify|verify} messages.
     * @function encode
     * @memberof OTResponse
     * @static
     * @param {IOTResponse} message OTResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OTResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.e0 != null && Object.hasOwnProperty.call(message, "e0"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.e0);
        if (message.e1 != null && Object.hasOwnProperty.call(message, "e1"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.e1);
        return writer;
    };

    /**
     * Encodes the specified OTResponse message, length delimited. Does not implicitly {@link OTResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OTResponse
     * @static
     * @param {IOTResponse} message OTResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OTResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a OTResponse message from the specified reader or buffer.
     * @function decode
     * @memberof OTResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OTResponse} OTResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OTResponse.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OTResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.e0 = reader.bytes();
                    break;
                }
            case 2: {
                    message.e1 = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a OTResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OTResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OTResponse} OTResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OTResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a OTResponse message.
     * @function verify
     * @memberof OTResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OTResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.e0 != null && message.hasOwnProperty("e0"))
            if (!(message.e0 && typeof message.e0.length === "number" || $util.isString(message.e0)))
                return "e0: buffer expected";
        if (message.e1 != null && message.hasOwnProperty("e1"))
            if (!(message.e1 && typeof message.e1.length === "number" || $util.isString(message.e1)))
                return "e1: buffer expected";
        return null;
    };

    /**
     * Creates a OTResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OTResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OTResponse} OTResponse
     */
    OTResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.OTResponse)
            return object;
        var message = new $root.OTResponse();
        if (object.e0 != null)
            if (typeof object.e0 === "string")
                $util.base64.decode(object.e0, message.e0 = $util.newBuffer($util.base64.length(object.e0)), 0);
            else if (object.e0.length >= 0)
                message.e0 = object.e0;
        if (object.e1 != null)
            if (typeof object.e1 === "string")
                $util.base64.decode(object.e1, message.e1 = $util.newBuffer($util.base64.length(object.e1)), 0);
            else if (object.e1.length >= 0)
                message.e1 = object.e1;
        return message;
    };

    /**
     * Creates a plain object from a OTResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OTResponse
     * @static
     * @param {OTResponse} message OTResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OTResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.e0 = "";
            else {
                object.e0 = [];
                if (options.bytes !== Array)
                    object.e0 = $util.newBuffer(object.e0);
            }
            if (options.bytes === String)
                object.e1 = "";
            else {
                object.e1 = [];
                if (options.bytes !== Array)
                    object.e1 = $util.newBuffer(object.e1);
            }
        }
        if (message.e0 != null && message.hasOwnProperty("e0"))
            object.e0 = options.bytes === String ? $util.base64.encode(message.e0, 0, message.e0.length) : options.bytes === Array ? Array.prototype.slice.call(message.e0) : message.e0;
        if (message.e1 != null && message.hasOwnProperty("e1"))
            object.e1 = options.bytes === String ? $util.base64.encode(message.e1, 0, message.e1.length) : options.bytes === Array ? Array.prototype.slice.call(message.e1) : message.e1;
        return object;
    };

    /**
     * Converts this OTResponse to JSON.
     * @function toJSON
     * @memberof OTResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OTResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for OTResponse
     * @function getTypeUrl
     * @memberof OTResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    OTResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/OTResponse";
    };

    return OTResponse;
})();

$root.MTASession = (function() {

    /**
     * Properties of a MTASession.
     * @exports IMTASession
     * @interface IMTASession
     * @property {Array.<IOTRequest>|null} [requests] MTASession requests
     */

    /**
     * Constructs a new MTASession.
     * @exports MTASession
     * @classdesc Represents a MTASession.
     * @implements IMTASession
     * @constructor
     * @param {IMTASession=} [properties] Properties to set
     */
    function MTASession(properties) {
        this.requests = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MTASession requests.
     * @member {Array.<IOTRequest>} requests
     * @memberof MTASession
     * @instance
     */
    MTASession.prototype.requests = $util.emptyArray;

    /**
     * Creates a new MTASession instance using the specified properties.
     * @function create
     * @memberof MTASession
     * @static
     * @param {IMTASession=} [properties] Properties to set
     * @returns {MTASession} MTASession instance
     */
    MTASession.create = function create(properties) {
        return new MTASession(properties);
    };

    /**
     * Encodes the specified MTASession message. Does not implicitly {@link MTASession.verify|verify} messages.
     * @function encode
     * @memberof MTASession
     * @static
     * @param {IMTASession} message MTASession message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MTASession.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requests != null && message.requests.length)
            for (var i = 0; i < message.requests.length; ++i)
                $root.OTRequest.encode(message.requests[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MTASession message, length delimited. Does not implicitly {@link MTASession.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MTASession
     * @static
     * @param {IMTASession} message MTASession message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MTASession.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MTASession message from the specified reader or buffer.
     * @function decode
     * @memberof MTASession
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MTASession} MTASession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MTASession.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MTASession();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.requests && message.requests.length))
                        message.requests = [];
                    message.requests.push($root.OTRequest.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MTASession message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MTASession
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MTASession} MTASession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MTASession.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MTASession message.
     * @function verify
     * @memberof MTASession
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MTASession.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.requests != null && message.hasOwnProperty("requests")) {
            if (!Array.isArray(message.requests))
                return "requests: array expected";
            for (var i = 0; i < message.requests.length; ++i) {
                var error = $root.OTRequest.verify(message.requests[i]);
                if (error)
                    return "requests." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MTASession message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MTASession
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MTASession} MTASession
     */
    MTASession.fromObject = function fromObject(object) {
        if (object instanceof $root.MTASession)
            return object;
        var message = new $root.MTASession();
        if (object.requests) {
            if (!Array.isArray(object.requests))
                throw TypeError(".MTASession.requests: array expected");
            message.requests = [];
            for (var i = 0; i < object.requests.length; ++i) {
                if (typeof object.requests[i] !== "object")
                    throw TypeError(".MTASession.requests: object expected");
                message.requests[i] = $root.OTRequest.fromObject(object.requests[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a MTASession message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MTASession
     * @static
     * @param {MTASession} message MTASession
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MTASession.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.requests = [];
        if (message.requests && message.requests.length) {
            object.requests = [];
            for (var j = 0; j < message.requests.length; ++j)
                object.requests[j] = $root.OTRequest.toObject(message.requests[j], options);
        }
        return object;
    };

    /**
     * Converts this MTASession to JSON.
     * @function toJSON
     * @memberof MTASession
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MTASession.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MTASession
     * @function getTypeUrl
     * @memberof MTASession
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MTASession.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MTASession";
    };

    return MTASession;
})();

$root.MTAResponse = (function() {

    /**
     * Properties of a MTAResponse.
     * @exports IMTAResponse
     * @interface IMTAResponse
     * @property {Array.<IOTResponse>|null} [responses] MTAResponse responses
     */

    /**
     * Constructs a new MTAResponse.
     * @exports MTAResponse
     * @classdesc Represents a MTAResponse.
     * @implements IMTAResponse
     * @constructor
     * @param {IMTAResponse=} [properties] Properties to set
     */
    function MTAResponse(properties) {
        this.responses = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MTAResponse responses.
     * @member {Array.<IOTResponse>} responses
     * @memberof MTAResponse
     * @instance
     */
    MTAResponse.prototype.responses = $util.emptyArray;

    /**
     * Creates a new MTAResponse instance using the specified properties.
     * @function create
     * @memberof MTAResponse
     * @static
     * @param {IMTAResponse=} [properties] Properties to set
     * @returns {MTAResponse} MTAResponse instance
     */
    MTAResponse.create = function create(properties) {
        return new MTAResponse(properties);
    };

    /**
     * Encodes the specified MTAResponse message. Does not implicitly {@link MTAResponse.verify|verify} messages.
     * @function encode
     * @memberof MTAResponse
     * @static
     * @param {IMTAResponse} message MTAResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MTAResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.responses != null && message.responses.length)
            for (var i = 0; i < message.responses.length; ++i)
                $root.OTResponse.encode(message.responses[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MTAResponse message, length delimited. Does not implicitly {@link MTAResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MTAResponse
     * @static
     * @param {IMTAResponse} message MTAResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MTAResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MTAResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MTAResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MTAResponse} MTAResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MTAResponse.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MTAResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.responses && message.responses.length))
                        message.responses = [];
                    message.responses.push($root.OTResponse.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MTAResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MTAResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MTAResponse} MTAResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MTAResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MTAResponse message.
     * @function verify
     * @memberof MTAResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MTAResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.responses != null && message.hasOwnProperty("responses")) {
            if (!Array.isArray(message.responses))
                return "responses: array expected";
            for (var i = 0; i < message.responses.length; ++i) {
                var error = $root.OTResponse.verify(message.responses[i]);
                if (error)
                    return "responses." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MTAResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MTAResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MTAResponse} MTAResponse
     */
    MTAResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.MTAResponse)
            return object;
        var message = new $root.MTAResponse();
        if (object.responses) {
            if (!Array.isArray(object.responses))
                throw TypeError(".MTAResponse.responses: array expected");
            message.responses = [];
            for (var i = 0; i < object.responses.length; ++i) {
                if (typeof object.responses[i] !== "object")
                    throw TypeError(".MTAResponse.responses: object expected");
                message.responses[i] = $root.OTResponse.fromObject(object.responses[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a MTAResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MTAResponse
     * @static
     * @param {MTAResponse} message MTAResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MTAResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.responses = [];
        if (message.responses && message.responses.length) {
            object.responses = [];
            for (var j = 0; j < message.responses.length; ++j)
                object.responses[j] = $root.OTResponse.toObject(message.responses[j], options);
        }
        return object;
    };

    /**
     * Converts this MTAResponse to JSON.
     * @function toJSON
     * @memberof MTAResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MTAResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MTAResponse
     * @function getTypeUrl
     * @memberof MTAResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MTAResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MTAResponse";
    };

    return MTAResponse;
})();

$root.Handshake = (function() {

    /**
     * Properties of a Handshake.
     * @exports IHandshake
     * @interface IHandshake
     * @property {Uint8Array|null} [publicC] Handshake publicC
     * @property {Uint8Array|null} [bobGy] Handshake bobGy
     */

    /**
     * Constructs a new Handshake.
     * @exports Handshake
     * @classdesc Represents a Handshake.
     * @implements IHandshake
     * @constructor
     * @param {IHandshake=} [properties] Properties to set
     */
    function Handshake(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Handshake publicC.
     * @member {Uint8Array} publicC
     * @memberof Handshake
     * @instance
     */
    Handshake.prototype.publicC = $util.newBuffer([]);

    /**
     * Handshake bobGy.
     * @member {Uint8Array} bobGy
     * @memberof Handshake
     * @instance
     */
    Handshake.prototype.bobGy = $util.newBuffer([]);

    /**
     * Creates a new Handshake instance using the specified properties.
     * @function create
     * @memberof Handshake
     * @static
     * @param {IHandshake=} [properties] Properties to set
     * @returns {Handshake} Handshake instance
     */
    Handshake.create = function create(properties) {
        return new Handshake(properties);
    };

    /**
     * Encodes the specified Handshake message. Does not implicitly {@link Handshake.verify|verify} messages.
     * @function encode
     * @memberof Handshake
     * @static
     * @param {IHandshake} message Handshake message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Handshake.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.publicC != null && Object.hasOwnProperty.call(message, "publicC"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicC);
        if (message.bobGy != null && Object.hasOwnProperty.call(message, "bobGy"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.bobGy);
        return writer;
    };

    /**
     * Encodes the specified Handshake message, length delimited. Does not implicitly {@link Handshake.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Handshake
     * @static
     * @param {IHandshake} message Handshake message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Handshake.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Handshake message from the specified reader or buffer.
     * @function decode
     * @memberof Handshake
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Handshake} Handshake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Handshake.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Handshake();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.publicC = reader.bytes();
                    break;
                }
            case 2: {
                    message.bobGy = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Handshake message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Handshake
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Handshake} Handshake
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Handshake.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Handshake message.
     * @function verify
     * @memberof Handshake
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Handshake.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.publicC != null && message.hasOwnProperty("publicC"))
            if (!(message.publicC && typeof message.publicC.length === "number" || $util.isString(message.publicC)))
                return "publicC: buffer expected";
        if (message.bobGy != null && message.hasOwnProperty("bobGy"))
            if (!(message.bobGy && typeof message.bobGy.length === "number" || $util.isString(message.bobGy)))
                return "bobGy: buffer expected";
        return null;
    };

    /**
     * Creates a Handshake message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Handshake
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Handshake} Handshake
     */
    Handshake.fromObject = function fromObject(object) {
        if (object instanceof $root.Handshake)
            return object;
        var message = new $root.Handshake();
        if (object.publicC != null)
            if (typeof object.publicC === "string")
                $util.base64.decode(object.publicC, message.publicC = $util.newBuffer($util.base64.length(object.publicC)), 0);
            else if (object.publicC.length >= 0)
                message.publicC = object.publicC;
        if (object.bobGy != null)
            if (typeof object.bobGy === "string")
                $util.base64.decode(object.bobGy, message.bobGy = $util.newBuffer($util.base64.length(object.bobGy)), 0);
            else if (object.bobGy.length >= 0)
                message.bobGy = object.bobGy;
        return message;
    };

    /**
     * Creates a plain object from a Handshake message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Handshake
     * @static
     * @param {Handshake} message Handshake
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Handshake.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.publicC = "";
            else {
                object.publicC = [];
                if (options.bytes !== Array)
                    object.publicC = $util.newBuffer(object.publicC);
            }
            if (options.bytes === String)
                object.bobGy = "";
            else {
                object.bobGy = [];
                if (options.bytes !== Array)
                    object.bobGy = $util.newBuffer(object.bobGy);
            }
        }
        if (message.publicC != null && message.hasOwnProperty("publicC"))
            object.publicC = options.bytes === String ? $util.base64.encode(message.publicC, 0, message.publicC.length) : options.bytes === Array ? Array.prototype.slice.call(message.publicC) : message.publicC;
        if (message.bobGy != null && message.hasOwnProperty("bobGy"))
            object.bobGy = options.bytes === String ? $util.base64.encode(message.bobGy, 0, message.bobGy.length) : options.bytes === Array ? Array.prototype.slice.call(message.bobGy) : message.bobGy;
        return object;
    };

    /**
     * Converts this Handshake to JSON.
     * @function toJSON
     * @memberof Handshake
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Handshake.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Handshake
     * @function getTypeUrl
     * @memberof Handshake
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Handshake.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Handshake";
    };

    return Handshake;
})();

module.exports = $root;
