/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_api_metric_pb = require('../../google/api/metric_pb.js');
goog.exportSymbol('proto.google.api.Billing', null, global);
goog.exportSymbol('proto.google.api.BillingStatusRule', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Billing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Billing.repeatedFields_, null);
};
goog.inherits(proto.google.api.Billing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.api.Billing.displayName = 'proto.google.api.Billing';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Billing.repeatedFields_ = [1,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.Billing.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Billing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Billing} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.api.Billing.toObject = function(includeInstance, msg) {
  var f, obj = {
    metricsList: jspb.Message.getField(msg, 1),
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    proto.google.api.BillingStatusRule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Billing}
 */
proto.google.api.Billing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Billing;
  return proto.google.api.Billing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Billing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Billing}
 */
proto.google.api.Billing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addMetrics(value);
      break;
    case 5:
      var value = new proto.google.api.BillingStatusRule;
      reader.readMessage(value,proto.google.api.BillingStatusRule.deserializeBinaryFromReader);
      msg.addRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Billing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Billing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Billing} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.Billing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.api.BillingStatusRule.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string metrics = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.google.api.Billing.prototype.getMetricsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {!Array.<string>} value */
proto.google.api.Billing.prototype.setMetricsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.google.api.Billing.prototype.addMetrics = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.google.api.Billing.prototype.clearMetricsList = function() {
  this.setMetricsList([]);
};


/**
 * repeated BillingStatusRule rules = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.google.api.BillingStatusRule>}
 */
proto.google.api.Billing.prototype.getRulesList = function() {
  return /** @type{!Array.<!proto.google.api.BillingStatusRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.BillingStatusRule, 5));
};


/** @param {!Array.<!proto.google.api.BillingStatusRule>} value */
proto.google.api.Billing.prototype.setRulesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.api.BillingStatusRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.BillingStatusRule}
 */
proto.google.api.Billing.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.api.BillingStatusRule, opt_index);
};


proto.google.api.Billing.prototype.clearRulesList = function() {
  this.setRulesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.BillingStatusRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.BillingStatusRule.repeatedFields_, null);
};
goog.inherits(proto.google.api.BillingStatusRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.api.BillingStatusRule.displayName = 'proto.google.api.BillingStatusRule';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.BillingStatusRule.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.BillingStatusRule.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.BillingStatusRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.BillingStatusRule} msg The msg instance to transform.
 * @return {!Object}
 */
proto.google.api.BillingStatusRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowedStatusesList: jspb.Message.getField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.BillingStatusRule}
 */
proto.google.api.BillingStatusRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.BillingStatusRule;
  return proto.google.api.BillingStatusRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.BillingStatusRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.BillingStatusRule}
 */
proto.google.api.BillingStatusRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelector(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedStatuses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.BillingStatusRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.BillingStatusRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.BillingStatusRule} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.google.api.BillingStatusRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowedStatusesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string selector = 1;
 * @return {string}
 */
proto.google.api.BillingStatusRule.prototype.getSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.api.BillingStatusRule.prototype.setSelector = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated string allowed_statuses = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.google.api.BillingStatusRule.prototype.getAllowedStatusesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 2));
};


/** @param {!Array.<string>} value */
proto.google.api.BillingStatusRule.prototype.setAllowedStatusesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.google.api.BillingStatusRule.prototype.addAllowedStatuses = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.google.api.BillingStatusRule.prototype.clearAllowedStatusesList = function() {
  this.setAllowedStatusesList([]);
};


goog.object.extend(exports, proto.google.api);