/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tensorflow/tfjs-core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tensorflow/tfjs-core'], factory) :
    (factory((global.tf = global.tf || {}),global.tf));
}(this, (function (exports,tfc) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    var _epsilon;
    /**
     * Returns the value of the fuzz factor used in numeric expressions.
     */
    function epsilon() {
        if (_epsilon == null) {
            _epsilon = tfc.backend().epsilon();
        }
        return _epsilon;
    }
    /**
     * Returns the default image data format convention.
     */
    function imageDataFormat() {
        return 'channelsLast';
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Explicit error types.
     *
     * See the following link for more information about why the code includes
     * calls to setPrototypeOf:
     *
     * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
     */
    // tslint:enable
    /**
     * Equivalent of Python's AttributeError.
     */
    var AttributeError = /** @class */ (function (_super) {
        __extends(AttributeError, _super);
        function AttributeError(message) {
            var _this = _super.call(this, message) || this;
            // Set the prototype explicitly.
            Object.setPrototypeOf(_this, AttributeError.prototype);
            return _this;
        }
        return AttributeError;
    }(Error));
    /**
     * Equivalent of Python's RuntimeError.
     */
    var RuntimeError = /** @class */ (function (_super) {
        __extends(RuntimeError, _super);
        function RuntimeError(message) {
            var _this = _super.call(this, message) || this;
            // Set the prototype explicitly.
            Object.setPrototypeOf(_this, RuntimeError.prototype);
            return _this;
        }
        return RuntimeError;
    }(Error));
    /**
     * Equivalent of Python's ValueError.
     */
    var ValueError = /** @class */ (function (_super) {
        __extends(ValueError, _super);
        function ValueError(message) {
            var _this = _super.call(this, message) || this;
            // Set the prototype explicitly.
            Object.setPrototypeOf(_this, ValueError.prototype);
            return _this;
        }
        return ValueError;
    }(Error));
    /**
     * Equivalent of Python's NotImplementedError.
     */
    var NotImplementedError = /** @class */ (function (_super) {
        __extends(NotImplementedError, _super);
        function NotImplementedError(message) {
            var _this = _super.call(this, message) || this;
            // Set the prototype explicitly.
            Object.setPrototypeOf(_this, NotImplementedError.prototype);
            return _this;
        }
        return NotImplementedError;
    }(Error));
    /**
     * Equivalent of Python's AssertionError.
     */
    var AssertionError = /** @class */ (function (_super) {
        __extends(AssertionError, _super);
        function AssertionError(message) {
            var _this = _super.call(this, message) || this;
            // Set the prototype explicitly.
            Object.setPrototypeOf(_this, AssertionError.prototype);
            return _this;
        }
        return AssertionError;
    }(Error));
    /**
     * Equivalent of Python's IndexError.
     */
    var IndexError = /** @class */ (function (_super) {
        __extends(IndexError, _super);
        function IndexError(message) {
            var _this = _super.call(this, message) || this;
            // Set the prototype explicitly.
            Object.setPrototypeOf(_this, IndexError.prototype);
            return _this;
        }
        return IndexError;
    }(Error));

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    // tslint:enable
    /**
     * If `value` is an Array, equivalent to Python's `value * numValues`.
     * If `value` is not an Array, equivalent to Python's `[value] * numValues`
     */
    // tslint:disable-next-line:no-any
    function pyListRepeat(value, numValues) {
        if (Array.isArray(value)) {
            // tslint:disable-next-line:no-any
            var newArray = [];
            for (var i = 0; i < numValues; i++) {
                newArray = newArray.concat(value);
            }
            return newArray;
        }
        else {
            var newArray = new Array(numValues);
            newArray.fill(value);
            return newArray;
        }
    }
    function assert(val, message) {
        if (!val) {
            throw new AssertionError(message);
        }
    }
    /**
     * Count the number of elements of the `array` that are equal to `reference`.
     */
    function count(array, refernce) {
        var counter = 0;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            if (item === refernce) {
                counter++;
            }
        }
        return counter;
    }
    /**
     * If an array is of length 1, just return the first element. Otherwise, return
     * the full array.
     * @param tensors
     */
    function singletonOrArray(xs) {
        if (xs.length === 1) {
            return xs[0];
        }
        return xs;
    }
    /**
     * Normalizes a list/tensor into a list.
     *
     * If a tensor is passed, we return
     * a list of size 1 containing the tensor.
     *
     * @param x target object to be normalized.
     */
    // tslint:disable-next-line:no-any
    function toList(x) {
        if (Array.isArray(x)) {
            return x;
        }
        return [x];
    }
    /**
     * Converts string to snake-case.
     * @param name
     */
    function toSnakeCase(name) {
        var intermediate = name.replace(/(.)([A-Z][a-z0-9]+)/g, '$1_$2');
        var insecure = intermediate.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
        /*
         If the class is private the name starts with "_" which is not secure
         for creating scopes. We prefix the name with "private" in this case.
         */
        if (insecure[0] !== '_') {
            return insecure;
        }
        return 'private' + insecure;
    }
    function toCamelCase(identifier) {
        // quick return for empty string or single character strings
        if (identifier.length <= 1) {
            return identifier;
        }
        // Check for the underscore indicating snake_case
        if (identifier.indexOf('_') === -1) {
            return identifier;
        }
        return identifier.replace(/[_]+(\w|$)/g, function (m, p1) { return p1.toUpperCase(); });
    }
    // tslint:disable-next-line:no-any
    var _GLOBAL_CUSTOM_OBJECTS = {};
    function serializeKerasObject(instance) {
        if (instance === null || instance === undefined) {
            return null;
        }
        var dict = {};
        dict['className'] = instance.getClassName();
        dict['config'] = instance.getConfig();
        return dict;
    }
    /**
     * Replace ndarray-style scalar objects in serialization objects with numbers.
     *
     * Background: In some versions of tf.keras, certain scalar values in the HDF5
     * model save file can be serialized as: `{'type': 'ndarray', 'value': num}`,
     * where in `num` is a plain number. This method converts such serialization
     * to a `number`.
     *
     * @param config The keras-format serialization object to be processed
     *   (in place).
     */
    function convertNDArrayScalarsInConfig(config) {
        if (config == null || typeof config !== 'object') {
            return;
        }
        else if (Array.isArray(config)) {
            config.forEach(function (configItem) { return convertNDArrayScalarsInConfig(configItem); });
        }
        else {
            var fields = Object.keys(config);
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                var value = config[field];
                if (value != null && typeof value === 'object') {
                    if (!Array.isArray(value) && value['type'] === 'ndarray' &&
                        typeof value['value'] === 'number') {
                        config[field] = value['value'];
                    }
                    else {
                        convertNDArrayScalarsInConfig(value);
                    }
                }
            }
        }
    }
    /**
     * Deserialize a saved Keras Object
     * @param identifier either a string ID or a saved Keras dictionary
     * @param moduleObjects a list of Python class names to object constructors
     * @param customObjects a list of Python class names to object constructors
     * @param printableModuleName debug text for the object being reconstituted
     * @param fastWeightInit Optional flag to use fast weight initialization
     *   during deserialization. This is applicable to cases in which
     *   the initialization will be immediately overwritten by loaded weight
     *   values. Default: `false`.
     * @returns a TensorFlow.js Layers object
     */
    // tslint:disable:no-any
    function deserializeKerasObject(identifier, moduleObjects, customObjects, printableModuleName, fastWeightInit) {
        if (moduleObjects === void 0) { moduleObjects = {}; }
        if (customObjects === void 0) { customObjects = {}; }
        if (printableModuleName === void 0) { printableModuleName = 'object'; }
        if (fastWeightInit === void 0) { fastWeightInit = false; }
        var _a, _b, _c;
        // tslint:enable
        if (typeof identifier === 'string') {
            var functionName = identifier;
            var fn = void 0;
            if (functionName in customObjects) {
                fn = customObjects[functionName];
            }
            else if (functionName in _GLOBAL_CUSTOM_OBJECTS) {
                fn = _GLOBAL_CUSTOM_OBJECTS[functionName];
            }
            else {
                fn = moduleObjects[functionName];
                if (fn == null) {
                    throw new ValueError("Unknown " + printableModuleName + ": " + identifier + ". " +
                        "This may be due to one of the following reasons:\n" +
                        ("1. The " + printableModuleName + " is defined in Python, in which ") +
                        "case it needs to be ported to TensorFlow.js or your JavaScript " +
                        "code.\n" +
                        ("2. The custom " + printableModuleName + " is defined in JavaScript, ") +
                        "but is not registered properly with " +
                        "tf.serialization.registerClass().");
                    // TODO(cais): Add link to tutorial page on custom layers.
                }
            }
            return fn;
        }
        else {
            // In this case we are dealing with a Keras config dictionary.
            var config = identifier;
            if (config['className'] == null || config['config'] == null) {
                throw new ValueError(printableModuleName + ": Improper config format: " +
                    (JSON.stringify(config) + ".\n") +
                    "'className' and 'config' must set.");
            }
            var className = config['className'];
            var cls = void 0, fromConfig = void 0;
            if (className in customObjects) {
                _a = customObjects[className], cls = _a[0], fromConfig = _a[1];
            }
            else if (className in _GLOBAL_CUSTOM_OBJECTS) {
                _b = _GLOBAL_CUSTOM_OBJECTS['className'], cls = _b[0], fromConfig = _b[1];
            }
            else if (className in moduleObjects) {
                _c = moduleObjects[className], cls = _c[0], fromConfig = _c[1];
            }
            if (cls == null) {
                throw new ValueError("Unknown " + printableModuleName + ": " + className + ". " +
                    "This may be due to one of the following reasons:\n" +
                    ("1. The " + printableModuleName + " is defined in Python, in which ") +
                    "case it needs to be ported to TensorFlow.js or your JavaScript " +
                    "code.\n" +
                    ("2. The custom " + printableModuleName + " is defined in JavaScript, ") +
                    "but is not registered properly with " +
                    "tf.serialization.registerClass().");
                // TODO(cais): Add link to tutorial page on custom layers.
            }
            if (fromConfig != null) {
                // Porting notes: Instead of checking to see whether fromConfig accepts
                // customObjects, we create a customObjects dictionary and tack it on to
                // config['config'] as config['config'].customObjects. Objects can use it,
                // if they want.
                // tslint:disable-next-line:no-any
                var customObjectsCombined = {};
                for (var _i = 0, _d = Object.keys(_GLOBAL_CUSTOM_OBJECTS); _i < _d.length; _i++) {
                    var key = _d[_i];
                    customObjectsCombined[key] = _GLOBAL_CUSTOM_OBJECTS[key];
                }
                for (var _e = 0, _f = Object.keys(customObjects); _e < _f.length; _e++) {
                    var key = _f[_e];
                    customObjectsCombined[key] = customObjects[key];
                }
                // Add the customObjects to config
                var nestedConfig = config['config'];
                nestedConfig['customObjects'] = customObjectsCombined;
                var backupCustomObjects = __assign({}, _GLOBAL_CUSTOM_OBJECTS);
                for (var _g = 0, _h = Object.keys(customObjects); _g < _h.length; _g++) {
                    var key = _h[_g];
                    _GLOBAL_CUSTOM_OBJECTS[key] = customObjects[key];
                }
                convertNDArrayScalarsInConfig(config['config']);
                var returnObj = fromConfig(cls, config['config'], customObjects, fastWeightInit);
                _GLOBAL_CUSTOM_OBJECTS = __assign({}, backupCustomObjects);
                return returnObj;
            }
            else {
                // Then `cls` may be a function returning a class.
                // In this case by convention `config` holds
                // the kwargs of the function.
                var backupCustomObjects = __assign({}, _GLOBAL_CUSTOM_OBJECTS);
                for (var _j = 0, _k = Object.keys(customObjects); _j < _k.length; _j++) {
                    var key = _k[_j];
                    _GLOBAL_CUSTOM_OBJECTS[key] = customObjects[key];
                }
                // In python this is **config['config'], for tfjs-layers we require
                // classes that use this fall-through construction method to take
                // a config interface that mimics the expansion of named parameters.
                var returnObj = new cls(config['config']);
                _GLOBAL_CUSTOM_OBJECTS = __assign({}, backupCustomObjects);
                return returnObj;
            }
        }
    }
    /**
     * Compares two numbers for sorting.
     * @param a
     * @param b
     */
    function numberCompare(a, b) {
        return (a < b) ? -1 : ((a > b) ? 1 : 0);
    }
    /**
     * Comparison of two numbers for reverse sorting.
     * @param a
     * @param b
     */
    function reverseNumberCompare(a, b) {
        return -1 * numberCompare(a, b);
    }
    /**
     * Get the unique elements of an array.
     * @param xs Array.
     * @returns An Array consisting of the unique elements in `xs`.
     */
    function unique(xs) {
        if (xs == null) {
            return xs;
        }
        var out = [];
        // TODO(cais): Maybe improve performance by sorting.
        for (var _i = 0, xs_1 = xs; _i < xs_1.length; _i++) {
            var x = xs_1[_i];
            if (out.indexOf(x) === -1) {
                out.push(x);
            }
        }
        return out;
    }
    /**
     * Determine if an Object is empty (i.e., does not have own properties).
     * @param obj Object
     * @returns Whether the Object is empty.
     * @throws ValueError: If object is `null` or `undefined`.
     */
    function isObjectEmpty(obj) {
        if (obj == null) {
            throw new ValueError("Invalid value in obj: " + JSON.stringify(obj));
        }
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Helper function used to build type union/enum run-time checkers.
     * @param values The list of allowed values.
     * @param label A string name for the type
     * @param value The value to test.
     * @throws ValueError: If the value is not in values nor `undefined`/`null`.
     */
    function checkStringTypeUnionValue(values, label, value) {
        if (value == null) {
            return;
        }
        if (values.indexOf(value) < 0) {
            throw new ValueError(value + " is not a valid " + label + ".  Valid values are " + values + " or null/undefined.");
        }
    }
    /**
     * Helper function for verifying the types of inputs.
     *
     * Ensures that the elements of `x` are all of type `expectedType`.
     * Also verifies that the length of `x` is within bounds.
     *
     * @param x Object to test.
     * @param expectedType The string expected type of all of the elements in the
     * Array.
     * @param minLength Return false if x.length is less than this.
     * @param maxLength Return false if x.length is greater than this.
     * @returns true if and only if `x` is an `Array<expectedType>` with
     * length >= `minLength` and <= `maxLength`.
     */
    // tslint:disable:no-any
    function checkArrayTypeAndLength(x, expectedType, minLength, maxLength) {
        if (minLength === void 0) { minLength = 0; }
        if (maxLength === void 0) { maxLength = Infinity; }
        assert(minLength >= 0);
        assert(maxLength >= minLength);
        return (Array.isArray(x) && x.length >= minLength && x.length <= maxLength &&
            x.every(function (e) { return typeof e === expectedType; }));
    }
    // tslint:enable:no-any
    /**
     * Assert that a value or an array of value are positive integer.
     *
     * @param value The value being asserted on. May be a single number or an array
     *   of numbers.
     * @param name Name of the value, used to make the error message.
     */
    function assertPositiveInteger(value, name) {
        if (Array.isArray(value)) {
            tfc.util.assert(value.length > 0, function () { return name + " is unexpectedly an empty array."; });
            value.forEach(function (v, i) { return assertPositiveInteger(v, "element " + (i + 1) + " of " + name); });
        }
        else {
            tfc.util.assert(Number.isInteger(value) && value > 0, function () { return "Expected " + name + " to be a positive integer, but got " +
                (formatAsFriendlyString(value) + "."); });
        }
    }
    /**
     * Format a value into a display-friendly, human-readable fashion.
     *
     * - `null` is formatted as `'null'`
     * - Strings are formated with flanking pair of quotes.
     * - Arrays are formatted with flanking pair of square brackets.
     *
     * @param value The value to display.
     * @return Formatted string.
     */
    // tslint:disable-next-line:no-any
    function formatAsFriendlyString(value) {
        if (value === null) {
            return 'null';
        }
        else if (Array.isArray(value)) {
            return '[' + value.map(function (v) { return formatAsFriendlyString(v); }).join(',') + ']';
        }
        else if (typeof value === 'string') {
            return "\"" + value + "\"";
        }
        else {
            return "" + value;
        }
    }
    /**
     * Returns a function `f2` (decorator) which wraps the original function
     * `f`. `f2` guarantees that `f` can be called at most once
     * every `waitMs` ms. If `f2` is called more often, it will return
     * the last returned result of `f`.
     *
     * @param f The original function `f` to wrap.
     * @param waitMs The time between two consecutive calls to `f` in ms.
     */
    function debounce(f, waitMs) {
        var lastTime = tfc.util.now();
        var lastResult;
        var f2 = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var now = tfc.util.now();
            if (now - lastTime < waitMs) {
                return lastResult;
            }
            lastTime = now;
            lastResult = f.apply(void 0, args);
            return lastResult;
        };
        return f2;
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Helper function used by many of the Constraints to find the L2Norms.
     */
    function calcL2Norms(w, axis) {
        return tfc.tidy(function () { return tfc.sqrt(tfc.sum(tfc.mulStrict(w, w), axis, true)); });
    }
    /**
     * Base class for functions that impose constraints on weight values
     */
    /**
     * @doc {
     *   heading: 'Constraints',
     *   subheading: 'Classes',
     *   namespace: 'constraints'
     * }
     */
    var Constraint = /** @class */ (function (_super) {
        __extends(Constraint, _super);
        function Constraint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Constraint.prototype.getConfig = function () {
            return {};
        };
        return Constraint;
    }(tfc.serialization.Serializable));
    var MaxNorm = /** @class */ (function (_super) {
        __extends(MaxNorm, _super);
        function MaxNorm(args) {
            var _this = _super.call(this) || this;
            _this.defaultMaxValue = 2;
            _this.defaultAxis = 0;
            _this.maxValue =
                args.maxValue != null ? args.maxValue : _this.defaultMaxValue;
            _this.axis = args.axis != null ? args.axis : _this.defaultAxis;
            return _this;
        }
        MaxNorm.prototype.apply = function (w) {
            var _this = this;
            return tfc.tidy(function () {
                var norms = calcL2Norms(w, _this.axis);
                var desired = tfc.clipByValue(norms, 0, _this.maxValue);
                return tfc.mul(w, tfc.div(desired, tfc.add(epsilon(), norms)));
            });
        };
        MaxNorm.prototype.getConfig = function () {
            return { maxValue: this.maxValue, axis: this.axis };
        };
        /** @nocollapse */
        MaxNorm.className = 'MaxNorm';
        return MaxNorm;
    }(Constraint));
    tfc.serialization.registerClass(MaxNorm);
    var UnitNorm = /** @class */ (function (_super) {
        __extends(UnitNorm, _super);
        function UnitNorm(args) {
            var _this = _super.call(this) || this;
            _this.defaultAxis = 0;
            _this.axis = args.axis != null ? args.axis : _this.defaultAxis;
            return _this;
        }
        UnitNorm.prototype.apply = function (w) {
            var _this = this;
            return tfc.tidy(function () { return tfc.div(w, tfc.add(epsilon(), calcL2Norms(w, _this.axis))); });
        };
        UnitNorm.prototype.getConfig = function () {
            return { axis: this.axis };
        };
        /** @nocollapse */
        UnitNorm.className = 'UnitNorm';
        return UnitNorm;
    }(Constraint));
    tfc.serialization.registerClass(UnitNorm);
    var NonNeg = /** @class */ (function (_super) {
        __extends(NonNeg, _super);
        function NonNeg() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NonNeg.prototype.apply = function (w) {
            return tfc.relu(w);
        };
        /** @nocollapse */
        NonNeg.className = 'NonNeg';
        return NonNeg;
    }(Constraint));
    tfc.serialization.registerClass(NonNeg);
    var MinMaxNorm = /** @class */ (function (_super) {
        __extends(MinMaxNorm, _super);
        function MinMaxNorm(args) {
            var _this = _super.call(this) || this;
            _this.defaultMinValue = 0.0;
            _this.defaultMaxValue = 1.0;
            _this.defaultRate = 1.0;
            _this.defaultAxis = 0;
            _this.minValue =
                args.minValue != null ? args.minValue : _this.defaultMinValue;
            _this.maxValue =
                args.maxValue != null ? args.maxValue : _this.defaultMaxValue;
            _this.rate = args.rate != null ? args.rate : _this.defaultRate;
            _this.axis = args.axis != null ? args.axis : _this.defaultAxis;
            return _this;
        }
        MinMaxNorm.prototype.apply = function (w) {
            var _this = this;
            return tfc.tidy(function () {
                var norms = calcL2Norms(w, _this.axis);
                var desired = tfc.add(tfc.mul(_this.rate, tfc.clipByValue(norms, _this.minValue, _this.maxValue)), tfc.mul(1.0 - _this.rate, norms));
                return tfc.mul(w, tfc.div(desired, tfc.add(epsilon(), norms)));
            });
        };
        MinMaxNorm.prototype.getConfig = function () {
            return {
                minValue: this.minValue,
                maxValue: this.maxValue,
                rate: this.rate,
                axis: this.axis
            };
        };
        /** @nocollapse */
        MinMaxNorm.className = 'MinMaxNorm';
        return MinMaxNorm;
    }(Constraint));
    tfc.serialization.registerClass(MinMaxNorm);
    // Maps the JavaScript-like identifier keys to the corresponding registry
    // symbols.
    var CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
        'maxNorm': 'MaxNorm',
        'minMaxNorm': 'MinMaxNorm',
        'nonNeg': 'NonNeg',
        'unitNorm': 'UnitNorm'
    };
    function serializeConstraint(constraint) {
        return serializeKerasObject(constraint);
    }
    function deserializeConstraint(config, customObjects) {
        if (customObjects === void 0) { customObjects = {}; }
        return deserializeKerasObject(config, tfc.serialization.SerializationMap.getMap().classNameMap, customObjects, 'constraint');
    }
    function getConstraint(identifier) {
        if (identifier == null) {
            return null;
        }
        if (typeof identifier === 'string') {
            var className = identifier in CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP ?
                CONSTRAINT_IDENTIFIER_REGISTRY_SYMBOL_MAP[identifier] :
                identifier;
            var config = { className: className, config: {} };
            return deserializeConstraint(config);
        }
        else if (identifier instanceof Constraint) {
            return identifier;
        }
        else {
            return deserializeConstraint(identifier);
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * MaxNorm weight constraint.
     *
     * Constrains the weights incident to each hidden unit
     * to have a norm less than or equal to a desired value.
     *
     * References
     *       - [Dropout: A Simple Way to Prevent Neural Networks from Overfitting
     * Srivastava, Hinton, et al.
     * 2014](http://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf)
     */
    /** @doc {heading: 'Constraints',namespace: 'constraints'} */
    function maxNorm(args) {
        return new MaxNorm(args);
    }
    /**
     * Constrains the weights incident to each hidden unit to have unit norm.
     */
    /** @doc {heading: 'Constraints', namespace: 'constraints'} */
    function unitNorm(args) {
        return new UnitNorm(args);
    }
    /**
     * Constains the weight to be non-negative.
     */
    /** @doc {heading: 'Constraints', namespace: 'constraints'} */
    function nonNeg() {
        return new NonNeg();
    }
    /** @doc {heading: 'Constraints', namespace: 'constraints'} */
    function minMaxNorm(config) {
        return new MinMaxNorm(config);
    }

    var exports_constraints = /*#__PURE__*/Object.freeze({
        maxNorm: maxNorm,
        unitNorm: unitNorm,
        nonNeg: nonNeg,
        minMaxNorm: minMaxNorm
    });

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    var VALID_DATA_FORMAT_VALUES = ['channelsFirst', 'channelsLast'];
    var VALID_PADDING_MODE_VALUES = ['valid', 'same', 'causal'];
    var VALID_POOL_MODE_VALUES = ['max', 'avg'];
    var VALID_BIDIRECTIONAL_MERGE_MODES = ['sum', 'mul', 'concat', 'ave'];

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    // A map from the requested scoped name of a Tensor to the number of Tensors
    // wanting that name so far.  This allows enforcing name uniqueness by appending
    // an incrementing index, e.g. scope/name, scope/name_1, scope/name_2, etc.
    var nameMap = new Map();
    function checkDataFormat(value) {
        checkStringTypeUnionValue(VALID_DATA_FORMAT_VALUES, 'DataFormat', value);
    }
    function checkPaddingMode(value) {
        checkStringTypeUnionValue(VALID_PADDING_MODE_VALUES, 'PaddingMode', value);
    }
    function checkPoolMode(value) {
        checkStringTypeUnionValue(VALID_POOL_MODE_VALUES, 'PoolMode', value);
    }
    var _nameScopeStack = [];
    var _nameScopeDivider = '/';
    /**
     * Enter namescope, which can be nested.
     */
    function nameScope(name, fn) {
        _nameScopeStack.push(name);
        try {
            var val = fn();
            _nameScopeStack.pop();
            return val;
        }
        catch (e) {
            _nameScopeStack.pop();
            throw e;
        }
    }
    /**
     * Get the current namescope as a flat, concatenated string.
     */
    function currentNameScopePrefix() {
        if (_nameScopeStack.length === 0) {
            return '';
        }
        else {
            return _nameScopeStack.join(_nameScopeDivider) + _nameScopeDivider;
        }
    }
    /**
     * Get the name a Tensor (or Variable) would have if not uniqueified.
     * @param tensorName
     * @return Scoped name string.
     */
    function getScopedTensorName(tensorName) {
        if (!isValidTensorName(tensorName)) {
            throw new Error('Not a valid tensor name: \'' + tensorName + '\'');
        }
        return currentNameScopePrefix() + tensorName;
    }
    /**
     * Get unique names for Tensors and Variables.
     * @param scopedName The fully-qualified name of the Tensor, i.e. as produced by
     *  `getScopedTensorName()`.
     * @return A unique version of the given fully scoped name.
     *   If this is the first time that the scoped name is seen in this session,
     *   then the given `scopedName` is returned unaltered.  If the same name is
     *   seen again (producing a collision), an incrementing suffix is added to the
     *   end of the name, so it takes the form 'scope/name_1', 'scope/name_2', etc.
     */
    function getUniqueTensorName(scopedName) {
        if (!isValidTensorName(scopedName)) {
            throw new Error('Not a valid tensor name: \'' + scopedName + '\'');
        }
        if (!nameMap.has(scopedName)) {
            nameMap.set(scopedName, 0);
        }
        var index = nameMap.get(scopedName);
        nameMap.set(scopedName, nameMap.get(scopedName) + 1);
        if (index > 0) {
            var result = scopedName + '_' + index;
            // Mark the composed name as used in case someone wants
            // to call getUniqueTensorName("name_1").
            nameMap.set(result, 1);
            return result;
        }
        else {
            return scopedName;
        }
    }
    var tensorNameRegex = new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);
    /**
     * Determine whether a string is a valid tensor name.
     * @param name
     * @returns A Boolean indicating whether `name` is a valid tensor name.
     */
    function isValidTensorName(name) {
        return !!name.match(tensorNameRegex);
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Determine if a number is an integer.
     */
    function isInteger(x) {
        return x === parseInt(x.toString(), 10);
    }
    /**
     * Calculate the product of an array of numbers.
     * @param array The array to calculate the product over.
     * @param begin Beginning index, inclusive.
     * @param end Ending index, exclusive.
     * @return The product.
     */
    function arrayProd(array, begin, end) {
        if (begin == null) {
            begin = 0;
        }
        if (end == null) {
            end = array.length;
        }
        var prod = 1;
        for (var i = begin; i < end; ++i) {
            prod *= array[i];
        }
        return prod;
    }
    /**
     * A helper function transforms the two input types to an instance of Tensor1D,
     * so the return value can be fed directly into various TF.js Core functions.
     * @param array
     */
    function toArray1D(array) {
        array = Array.isArray(array) ? new Float32Array(array) : array;
        return tfc.tensor1d(array);
    }
    /**
     * Compute minimum value.
     * @param array
     * @return minimum value.
     */
    function min(array) {
        return tfc.min(toArray1D(array)).dataSync()[0];
    }
    /**
     * Compute maximum value.
     * @param array
     * @return maximum value
     */
    function max(array) {
        return tfc.max(toArray1D(array)).dataSync()[0];
    }
    /**
     * Generate an array of integers in [begin, end).
     * @param begin Beginning integer, inclusive.
     * @param end Ending integer, exclusive.
     * @returns Range array.
     * @throws ValueError, iff `end` < `begin`.
     */
    function range(begin, end) {
        if (end < begin) {
            throw new ValueError("end (" + end + ") < begin (" + begin + ") is forbidden.");
        }
        var out = [];
        for (var i = begin; i < end; ++i) {
            out.push(i);
        }
        return out;
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Casts a tensor to a different dtype and returns it.
     * @param x Input tensor.
     * @param dtype String: 'float32'|'int32'|'bool'.
     * @returns Tensor of the specified `dtype`.
     */
    function cast(x, dtype) {
        return x.asType(dtype);
    }
    /**
     * Adds a 1-sized dimension at index "axis".
     * @param x Input tensor.
     * @param axis Position where to add the new axis.
     * @returns Result of the dimension expansion.
     */
    function expandDims(x, axis) {
        if (axis === void 0) { axis = -1; }
        var outShape = x.shape.slice();
        if (axis < 0) {
            axis = outShape.length + axis + 1;
        }
        outShape.splice(axis, 0, 1);
        return x.reshape(outShape);
    }
    /**
     * Repeats a 2D tensor.
     *
     * If `x` has shape `[samples, dim]` and `n` is 2, for example, the output
     * will have shape `[samples, 2, dim]`.
     *
     * @param x Input tensor.
     * @param n Integer, number of times to repeat.
     * @returns The result of the repeat operation.
     * @throws ValueError: If input tensor is not 2D.
     */
    function repeat(x, n) {
        return tfc.tidy(function () {
            if (x.shape.length !== 2) {
                throw new ValueError("repeat() expects a rank-2 tensor, but received a " +
                    ("rank-" + x.shape.length + " tensor."));
            }
            var y = expandDims(x, 1);
            return tile(y, [1, n, 1]);
        });
    }
    /**
     * Flatten an Tensor into 1D.
     * @param x Input tensor.
     * @return The result of the flattening `x`.
     */
    function flatten(x) {
        var newShape = [arrayProd(x.shape)];
        return x.reshape(newShape);
    }
    /**
     * Turn a nD tensor into a 2D tensor with same 0th dimension.
     * In other words, it flattens each data samples of a batch.
     *
     * @param x The tensor to flatten. The rank of this tensor is required to be 2
     *   or higher.
     * @return The result of the flattening.
     */
    function batchFlatten(x) {
        if (x.rank <= 1) {
            throw new ValueError("batchFlatten requires a minimum rank of 2. Got rank: " + x.rank + ".");
        }
        var newShape = [x.shape[0], arrayProd(x.shape, 1)];
        return x.reshape(newShape);
    }
    /**
     * Do slicing along the first axis.
     * @param array input `tf.Tensor`.
     * @param start starting index, inclusive.
     * @param size size of the slice along the first axis.
     * @returns result of the slicing.
     * @throws ValueError: If `array` is of an unsupported subtype of `tf.Tensor`.
     */
    function sliceAlongFirstAxis(array, start, size) {
        return tfc.tidy(function () {
            switch (array.rank) {
                case 1:
                    return tfc.slice1d(array, start, size);
                case 2:
                    return tfc.slice2d(array, [start, 0], [size, array.shape[1]]);
                case 3:
                    return tfc.slice3d(array, [start, 0, 0], [size, array.shape[1], array.shape[2]]);
                case 4:
                    return tfc.slice4d(array, [start, 0, 0, 0], [size, array.shape[1], array.shape[2], array.shape[3]]);
                default:
                    throw new ValueError("sliceAlongFirstAxis() received an unsupported tensor rank: " +
                        ("" + array.rank));
            }
        });
    }
    /**
     * Do slicing along the last axis.
     * @param array input `tf.Tensor`.
     * @param start starting index, inclusive.
     * @param size size of the slice along the last axis.
     * @returns result of the slicing.
     * @throws ValueError: If `array` is of an unsupported subtype of `tf.Tensor`.
     */
    function sliceAlongLastAxis(array, start, size) {
        return tfc.tidy(function () {
            switch (array.rank) {
                case 1:
                    return tfc.slice1d(array, start, size);
                case 2:
                    return tfc.slice2d(array, [0, start], [array.shape[0], size]);
                case 3:
                    return tfc.slice3d(array, [0, 0, start], [array.shape[0], array.shape[1], size]);
                case 4:
                    return tfc.slice4d(array, [0, 0, 0, start], [array.shape[0], array.shape[1], array.shape[2], size]);
                default:
                    throw new ValueError("sliceAlongLastAxis() received an unsupported tensor rank: " +
                        ("" + array.rank));
            }
        });
    }
    /**
     * Do slicing along the sepcified axis.
     * @param array input `tf.Tensor`.
     * @param start starting index, inclusive.
     * @param size of the slice along the chosen axis.
     * @param choose an axis.
     * @returns result of the slicing.
     * @throws ValueError: If `array` is of an unsupported subtype of `tf.Tensor`.
     */
    function sliceAlongAxis(array, start, size, axis) {
        return tfc.tidy(function () {
            switch (array.rank) {
                case 1:
                    return tfc.slice1d(array, start, size);
                case 2:
                    switch (axis) {
                        case 1:
                            return sliceAlongFirstAxis(array, start, size);
                        case 2:
                            return sliceAlongLastAxis(array, start, size);
                        default:
                            throw new ValueError("The axis is not within the rank of the tensor " +
                                ("" + axis));
                    }
                case 3:
                    switch (axis) {
                        case 1:
                            return sliceAlongFirstAxis(array, start, size);
                        case 2:
                            return tfc.slice3d(array, [0, start, 0], [array.shape[0], size, array.shape[2]]);
                        case 3:
                            return sliceAlongLastAxis(array, start, size);
                        default:
                            throw new ValueError("The axis is not within the rank of the tensor " +
                                ("" + axis));
                    }
                case 4:
                    switch (axis) {
                        case 1:
                            return sliceAlongFirstAxis(array, start, size);
                        case 2:
                            return tfc.slice4d(array, [0, start, 0, 0], [array.shape[0], size, array.shape[2], array.shape[3]]);
                        case 3:
                            return tfc.slice4d(array, [0, 0, start, 0], [array.shape[0], array.shape[1], size, array.shape[3]]);
                        case 4:
                            return sliceAlongLastAxis(array, start, size);
                        default:
                            throw new ValueError("The axis is not within the rank of the tensor " +
                                ("" + axis));
                    }
                default:
                    throw new ValueError("sliceAlongLastAxis() received an unsupported tensor rank: " +
                        ("" + array.rank));
            }
        });
    }
    /**
     * Concatenates a list of tensors alongside the specified axis.
     * @param tensors `Array` of tensors to concatenate.
     * @param axis Concatenation axis.
     * @returns The result of the concatenation.
     */
    function concatenate(tensors, axis) {
        if (axis === void 0) { axis = -1; }
        var rank;
        if (axis < 0) {
            rank = tensors[0].rank;
            if (rank !== 0) {
                axis = rank;
            }
            else {
                axis = 0;
            }
        }
        if (axis === tensors[0].rank) {
            // Porting Note: This is necessary because tfc.concat() requires axis to be
            //   in the interval [-rank, rank).
            axis = -1;
        }
        // Porting Note: Sparse concat is not supported yet.
        return tfc.concat(tensors, axis);
    }
    /**
     * Concatenate two arrays along the first dimension.
     * @param a The 1st `tf.Tensor` to concatenate.
     * @param b The 2nd `tf.Tensor` to concatenate.
     * @returns Result of the concatenation.
     * @throws ValueError: If `a` is of an unsupported subtype of `tf.Tensor`.
     */
    function concatAlongFirstAxis(a, b) {
        switch (a.rank) {
            case 1:
                return tfc.concat1d([a, b]);
            case 2:
                return tfc.concat2d([a, b], 0);
            case 3:
                return tfc.concat3d([a, b], 0);
            case 4:
                return tfc.concat4d([a, b], 0);
            default:
                throw new ValueError('concatAlongFirstAxis() received an unsupported tensor rank: ' +
                    a.rank);
        }
    }
    /**
     * Creates a tensor by tiling `x` by `n`.
     * @param x A tensor.
     * @param n An Array of integers or a single integer. If an Array, the length
     *   must be the same as the number of dimensions in `x`. If a single integer,
     *   it will be treated as an Array of length 1.
     */
    function tile(x, n) {
        if (!Array.isArray(n)) {
            n = [n];
        }
        if (x.rank !== n.length) {
            throw new ValueError("The length of input n (" + n.length + ") does not match " +
                ("the number of dimensions in input x (" + x.rank + ")"));
        }
        return tfc.tile(x, n);
    }
    /* Creation of random tensors. */
    /**
     * Get a tensor with normal distribution of values.
     *
     * @param shape Shape of the tensor.
     * @param mean mean value of the normal distribution.
     * @param stddev standard deviation of the normal distribution.
     * @param dtype
     * @param seed
     * @return The normal tensor.
     */
    function randomNormal(shape, mean$$1, stddev, dtype, seed) {
        if (mean$$1 === void 0) { mean$$1 = 0.0; }
        if (stddev === void 0) { stddev = 1.0; }
        return tfc.randomNormal(shape, mean$$1, stddev, dtype, seed);
    }
    /* Linear Algebra */
    /**
     * Multiply two tensors and returns the result as a tensor.
     *
     * For 2D tensors, this is equivalent to matrix multiplication (matMul).
     * For tensors of higher ranks, it follows the Theano behavior,
     * (e.g. `(2, 3) * (4, 3, 5) -> (2, 4, 5)`).  From the Theano documentation:
     *
     * For N dimensions it is a sum product over the last axis of x and the
     * second-to-last of y:
     *
     * @param a A tensor of at least rank 2.
     * @param b A tensor of at least rank 2.
     * @param activation (optional) A string identifying the activation
     *   function.
     * @return Result of the dot operation.
     */
    function dot(a, b, activation, bias) {
        if ((a.rank < 2) || (b.rank < 2)) {
            throw new NotImplementedError("dot requires both inputs to be rank >= 2" +
                (" but got x shape = " + a.shape + " and y shape = " + b.shape));
        }
        if (b.rank >= 3) {
            var xLastDim = a.shape.slice(-1)[0];
            var ySecondLastDim = b.shape.slice(-2)[0];
            if (xLastDim !== ySecondLastDim) {
                throw new NotImplementedError("If rank y >= 3, then the second last dim" +
                    (" of y must equal the last dim of x but got x shape = " + a.shape + " and ") +
                    (" y shape = " + b.shape));
            }
        }
        // Handle basic 2D x 2D case.
        if ((a.rank === 2) && (b.rank === 2)) {
            var transposeA = false;
            var transposeB = false;
            // tfc.fused.matMul only fuses certain activation functions. Unsupported
            // activation functions are treated as 'linear' activations, which is
            // equivalent to a no-op.
            return tfc.fused.matMul({
                a: a,
                b: b,
                transposeA: transposeA,
                transposeB: transposeB,
                bias: bias ? reshapeBias(a.rank, bias, imageDataFormat()) : null,
                activation: activation
            });
        }
        else {
            // Reshape x into the analogous 2D Tensor.
            var aFirstDims = a.shape.slice(); // Holds all but the last dim of x.
            var aLastDim = aFirstDims.pop();
            a = a.reshape([-1, aLastDim]);
            // Reshape y into the analogous 2D Tensor, and keep track of the
            // required dimensions to reproduce the output shape.
            var bShape = b.shape.slice();
            var bLastDim = bShape.pop();
            var ySecondLastDim = bShape.pop();
            var yOtherDims = bShape.concat([bLastDim]);
            // permutation should be like [r-2, 0, 1, 2, ... r-4, r-3, r-1]
            // where r is the rank of y.
            var perm = Array.from({ length: b.rank }, function (_, i) {
                if (i === 0) {
                    return b.rank - 2;
                }
                else if (i <= b.rank - 2) {
                    return i - 1;
                }
                return i;
            });
            b = b.transpose(perm).reshape([ySecondLastDim, -1]);
            // Multiply x and y as 2D Tensors, and then reshape back to original.
            var outputShape = aFirstDims.concat(yOtherDims);
            var transposeA = false;
            var transposeB = false;
            return tfc.fused
                .matMul({
                a: a,
                b: b,
                transposeA: transposeA,
                transposeB: transposeB,
                bias: bias ? reshapeBias(a.rank, bias, imageDataFormat()) : null,
                activation: activation
            })
                .reshape(outputShape);
        }
    }
    /* Elementary math functions. */
    /**
     * Retrieves the elements of indices `indices` in the tensor `reference`.
     * @param reference A tensor.
     * @param indices An integer tensor of indices or an `Array` of integers.
     * @param axis Axis along which to perform the gather operation.
     * @returns The result of the gathering as a tensor.
     */
    function gather(reference, indices, axis) {
        return tfc.tidy(function () {
            if (Array.isArray(indices)) {
                indices = tfc.tensor1d(indices, 'int32');
            }
            else {
                indices = indices.toInt();
            }
            return tfc.gather(reference, indices, axis);
        });
    }
    /**
     * Element-wise square.
     * @param x Input tensor.
     * @return element-wise x^2
     */
    function square(x) {
        return tfc.mulStrict(x, x);
    }
    /**
     * Reshapes bias tensor according to rank of x.
     */
    function reshapeBias(xRank, bias, dataFormat) {
        var biasShape = bias.shape;
        if (bias.rank !== 1 && bias.rank !== xRank) {
            throw new ValueError('Unexpected bias dimensions: ' + bias.rank +
                '; expected it to be 1 or ' + xRank);
        }
        if (xRank === 5) {
            if (dataFormat === 'channelsFirst') {
                if (biasShape.length === 1) {
                    return bias.reshape([1, biasShape[0], 1, 1, 1]);
                }
                else {
                    return bias.reshape([1, biasShape[3], biasShape[0], biasShape[1], biasShape[2]]);
                }
            }
            else if (dataFormat === 'channelsLast') {
                if (biasShape.length === 1) {
                    return bias.reshape([1, 1, 1, 1, biasShape[0]]);
                }
                else {
                    return bias.reshape([1].concat(biasShape));
                }
            }
        }
        else if (xRank === 4) {
            if (dataFormat === 'channelsFirst') {
                if (biasShape.length === 1) {
                    return bias.reshape([1, biasShape[0], 1, 1]);
                }
                else {
                    return bias.reshape([1, biasShape[2], biasShape[0], biasShape[1]]);
                }
            }
            else if (dataFormat === 'channelsLast') {
                if (biasShape.length === 1) {
                    return bias.reshape([1, 1, 1, biasShape[0]]);
                }
                else {
                    return bias.reshape([1].concat(biasShape));
                }
            }
        }
        else if (xRank === 3) {
            if (dataFormat === 'channelsFirst') {
                if (biasShape.length === 1) {
                    return bias.reshape([1, biasShape[0], 1]);
                }
                else {
                    return bias.reshape([1, biasShape[1], biasShape[0]]);
                }
            }
            else if (dataFormat === 'channelsLast') {
                if (biasShape.length === 1) {
                    return bias.reshape([1, 1, biasShape[0]]);
                }
                else {
                    return bias.reshape([1].concat(biasShape));
                }
            }
        }
        else if (xRank < 3) {
            return bias;
        }
        throw new ValueError("Unsupported input rank by biasAdd: " + bias.rank);
    }
    /* Neural-network operations. */
    /**
     * Add a bias to a tensor.
     *
     * @param x The tensor to add the bias to.
     * @param bias The bias to add to `x`. Must be 1D or the same rank as `x`.
     * @return Result of the bias adding.
     * @throws ValueError: If the rank of `bias` is incorrect.
     */
    function biasAdd(x, bias, dataFormat) {
        return tfc.tidy(function () {
            if (dataFormat == null) {
                dataFormat = imageDataFormat();
            }
            checkDataFormat(dataFormat);
            return x.add(reshapeBias(x.rank, bias, dataFormat));
        });
    }
    /**
     * Exponential linear unit (ELU).
     * @param x A tensor or variable to compute the activation function for.
     * @param alpha: A scalar, a scaling factor for the negative section.
     * @return Output of the ELU operation.
     */
    function elu(x, alpha) {
        if (alpha === void 0) { alpha = 1; }
        // TODO(cais): Add support for alpha values other than 1.
        if (alpha !== 1) {
            throw new NotImplementedError("Support for alpha values other than 1 (" + alpha + ") is not implemented " +
                "yet.");
        }
        return tfc.elu(x);
    }
    /**
     * Softsign of a tensor.
     *
     * Defined as x / (abs(x) + 1), element-wise.
     *
     * @param x: Input.
     * @returns Output.
     */
    function softsign(x) {
        return tfc.tidy(function () { return tfc.div(x, tfc.abs(x).add(1)); });
    }
    /**
     * Sets entries in `x` to zero at random, while scaling the entire tensor.
     *
     * @param x input tensor.
     * @param level fraction of the entries in the tensor that will be set to 0.
     * @param noiseShape shape of randomly generated keep/drop flags, must be
     *   broadcastable to the shape of `x`. Optional.
     * @param seed random seed to ensure determinism. Optional.
     * @returns Result of the dropout operation.
     */
    function dropout(x, level, noiseShape, seed) {
        return tfc.tidy(function () { return tfc.dropout(x, level, noiseShape, seed); });
    }
    /**
     * Element-wise, segment-wise linear approximation of sigmoid.
     *
     * Returns `0.` if `x < -2.5`, `1.` if `x > 2.5`.
     * In `-2.5 <= x <= 2.5`, returns `0.2 * x + 0.5`.
     *
     * @param x Input tensor.
     * @returns Output tensor.
     */
    function hardSigmoid(x) {
        return tfc.tidy(function () {
            var y = tfc.add(.5, tfc.mul(.2, x));
            return tfc.clipByValue(y, 0, 1);
        });
    }
    /**
     * Invoke `x` in the training phase, and `alt` otherwise.
     *
     * Porting Note: We do not create placeholder tensors for the `training`
     * boolean flag here, because there is no such thing in the TF.js imperative
     * backend.
     *
     * @param x The function to invoke iff `training` is `true`.
     * @param alt The function to invoke iff `training` is `false`.
     * @param training Boolean flag for whether training phase is active.
     * @returns The return value of `x()` if `training` is `true`, or the return
     *   value of `alt()` if `training` is `false`.
     */
    function inTrainPhase(x, alt, training) {
        if (training === void 0) { training = false; }
        return training ? x() : alt();
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    var VALID_FAN_MODE_VALUES = ['fanIn', 'fanOut', 'fanAvg'];
    var VALID_DISTRIBUTION_VALUES = ['normal', 'uniform', 'truncatedNormal'];

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    function checkFanMode(value) {
        checkStringTypeUnionValue(VALID_FAN_MODE_VALUES, 'FanMode', value);
    }
    function checkDistribution(value) {
        checkStringTypeUnionValue(VALID_DISTRIBUTION_VALUES, 'Distribution', value);
    }
    /**
     * Initializer base class.
     *
     * @doc {
     *   heading: 'Initializers', subheading: 'Classes', namespace: 'initializers'}
     */
    var Initializer = /** @class */ (function (_super) {
        __extends(Initializer, _super);
        function Initializer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Initializer.prototype.fromConfigUsesCustomObjects = function () {
            return false;
        };
        Initializer.prototype.getConfig = function () {
            return {};
        };
        return Initializer;
    }(tfc.serialization.Serializable));
    var Zeros = /** @class */ (function (_super) {
        __extends(Zeros, _super);
        function Zeros() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Zeros.prototype.apply = function (shape, dtype) {
            return tfc.zeros(shape, dtype);
        };
        /** @nocollapse */
        Zeros.className = 'Zeros';
        return Zeros;
    }(Initializer));
    tfc.serialization.registerClass(Zeros);
    var Ones = /** @class */ (function (_super) {
        __extends(Ones, _super);
        function Ones() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Ones.prototype.apply = function (shape, dtype) {
            return tfc.ones(shape, dtype);
        };
        /** @nocollapse */
        Ones.className = 'Ones';
        return Ones;
    }(Initializer));
    tfc.serialization.registerClass(Ones);
    var Constant = /** @class */ (function (_super) {
        __extends(Constant, _super);
        function Constant(args) {
            var _this = _super.call(this) || this;
            if (typeof args !== 'object') {
                throw new ValueError("Expected argument of type ConstantConfig but got " + args);
            }
            if (args.value === undefined) {
                throw new ValueError("config must have value set but got " + args);
            }
            _this.value = args.value;
            return _this;
        }
        Constant.prototype.apply = function (shape, dtype) {
            var _this = this;
            return tfc.tidy(function () { return tfc.mul(tfc.scalar(_this.value), tfc.ones(shape, dtype)); });
        };
        Constant.prototype.getConfig = function () {
            return {
                value: this.value,
            };
        };
        /** @nocollapse */
        Constant.className = 'Constant';
        return Constant;
    }(Initializer));
    tfc.serialization.registerClass(Constant);
    var RandomUniform = /** @class */ (function (_super) {
        __extends(RandomUniform, _super);
        function RandomUniform(args) {
            var _this = _super.call(this) || this;
            _this.DEFAULT_MINVAL = -0.05;
            _this.DEFAULT_MAXVAL = 0.05;
            _this.minval = args.minval || _this.DEFAULT_MINVAL;
            _this.maxval = args.maxval || _this.DEFAULT_MAXVAL;
            _this.seed = args.seed;
            return _this;
        }
        RandomUniform.prototype.apply = function (shape, dtype) {
            return tfc.randomUniform(shape, this.minval, this.maxval, dtype);
        };
        RandomUniform.prototype.getConfig = function () {
            return { minval: this.minval, maxval: this.maxval, seed: this.seed };
        };
        /** @nocollapse */
        RandomUniform.className = 'RandomUniform';
        return RandomUniform;
    }(Initializer));
    tfc.serialization.registerClass(RandomUniform);
    var RandomNormal = /** @class */ (function (_super) {
        __extends(RandomNormal, _super);
        function RandomNormal(args) {
            var _this = _super.call(this) || this;
            _this.DEFAULT_MEAN = 0.;
            _this.DEFAULT_STDDEV = 0.05;
            _this.mean = args.mean || _this.DEFAULT_MEAN;
            _this.stddev = args.stddev || _this.DEFAULT_STDDEV;
            _this.seed = args.seed;
            return _this;
        }
        RandomNormal.prototype.apply = function (shape, dtype) {
            dtype = dtype || 'float32';
            if (dtype !== 'float32' && dtype !== 'int32') {
                throw new NotImplementedError("randomNormal does not support dType " + dtype + ".");
            }
            return randomNormal(shape, this.mean, this.stddev, dtype, this.seed);
        };
        RandomNormal.prototype.getConfig = function () {
            return { mean: this.mean, stddev: this.stddev, seed: this.seed };
        };
        /** @nocollapse */
        RandomNormal.className = 'RandomNormal';
        return RandomNormal;
    }(Initializer));
    tfc.serialization.registerClass(RandomNormal);
    var TruncatedNormal = /** @class */ (function (_super) {
        __extends(TruncatedNormal, _super);
        function TruncatedNormal(args) {
            var _this = _super.call(this) || this;
            _this.DEFAULT_MEAN = 0.;
            _this.DEFAULT_STDDEV = 0.05;
            _this.mean = args.mean || _this.DEFAULT_MEAN;
            _this.stddev = args.stddev || _this.DEFAULT_STDDEV;
            _this.seed = args.seed;
            return _this;
        }
        TruncatedNormal.prototype.apply = function (shape, dtype) {
            dtype = dtype || 'float32';
            if (dtype !== 'float32' && dtype !== 'int32') {
                throw new NotImplementedError("truncatedNormal does not support dType " + dtype + ".");
            }
            return tfc.truncatedNormal(shape, this.mean, this.stddev, dtype, this.seed);
        };
        TruncatedNormal.prototype.getConfig = function () {
            return { mean: this.mean, stddev: this.stddev, seed: this.seed };
        };
        /** @nocollapse */
        TruncatedNormal.className = 'TruncatedNormal';
        return TruncatedNormal;
    }(Initializer));
    tfc.serialization.registerClass(TruncatedNormal);
    var Identity = /** @class */ (function (_super) {
        __extends(Identity, _super);
        function Identity(args) {
            var _this = _super.call(this) || this;
            _this.gain = args.gain != null ? args.gain : 1.0;
            return _this;
        }
        Identity.prototype.apply = function (shape, dtype) {
            var _this = this;
            return tfc.tidy(function () {
                if (shape.length !== 2 || shape[0] !== shape[1]) {
                    throw new ValueError('Identity matrix initializer can only be used for' +
                        ' 2D square matrices.');
                }
                else {
                    return tfc.mul(_this.gain, tfc.eye(shape[0]));
                }
            });
        };
        Identity.prototype.getConfig = function () {
            return { gain: this.gain };
        };
        /** @nocollapse */
        Identity.className = 'Identity';
        return Identity;
    }(Initializer));
    tfc.serialization.registerClass(Identity);
    /**
     * Computes the number of input and output units for a weight shape.
     * @param shape Shape of weight.
     * @param dataFormat data format to use for convolution kernels.
     *   Note that all kernels in Keras are standardized on the
     *   CHANNEL_LAST ordering (even when inputs are set to CHANNEL_FIRST).
     * @return An length-2 array: fanIn, fanOut.
     */
    function computeFans(shape, dataFormat) {
        if (dataFormat === void 0) { dataFormat = 'channelsLast'; }
        var fanIn;
        var fanOut;
        checkDataFormat(dataFormat);
        if (shape.length === 2) {
            fanIn = shape[0];
            fanOut = shape[1];
        }
        else if ([3, 4, 5].indexOf(shape.length) !== -1) {
            if (dataFormat === 'channelsFirst') {
                var receptiveFieldSize = arrayProd(shape, 2);
                fanIn = shape[1] * receptiveFieldSize;
                fanOut = shape[0] * receptiveFieldSize;
            }
            else if (dataFormat === 'channelsLast') {
                var receptiveFieldSize = arrayProd(shape, 0, shape.length - 2);
                fanIn = shape[shape.length - 2] * receptiveFieldSize;
                fanOut = shape[shape.length - 1] * receptiveFieldSize;
            }
        }
        else {
            var shapeProd = arrayProd(shape);
            fanIn = Math.sqrt(shapeProd);
            fanOut = Math.sqrt(shapeProd);
        }
        return [fanIn, fanOut];
    }
    var VarianceScaling = /** @class */ (function (_super) {
        __extends(VarianceScaling, _super);
        /**
         * Constructor of VarianceScaling.
         * @throws ValueError for invalid value in scale.
         */
        function VarianceScaling(args) {
            var _this = _super.call(this) || this;
            if (args.scale < 0.0) {
                throw new ValueError("scale must be a positive float. Got: " + args.scale);
            }
            _this.scale = args.scale == null ? 1.0 : args.scale;
            _this.mode = args.mode == null ? 'fanIn' : args.mode;
            checkFanMode(_this.mode);
            _this.distribution =
                args.distribution == null ? 'normal' : args.distribution;
            checkDistribution(_this.distribution);
            _this.seed = args.seed;
            return _this;
        }
        VarianceScaling.prototype.apply = function (shape, dtype) {
            var fans = computeFans(shape);
            var fanIn = fans[0];
            var fanOut = fans[1];
            var scale = this.scale;
            if (this.mode === 'fanIn') {
                scale /= Math.max(1, fanIn);
            }
            else if (this.mode === 'fanOut') {
                scale /= Math.max(1, fanOut);
            }
            else {
                scale /= Math.max(1, (fanIn + fanOut) / 2);
            }
            if (this.distribution === 'normal') {
                var stddev = Math.sqrt(scale);
                dtype = dtype || 'float32';
                if (dtype !== 'float32' && dtype !== 'int32') {
                    throw new NotImplementedError(this.getClassName() + " does not support dType " + dtype + ".");
                }
                return tfc.truncatedNormal(shape, 0, stddev, dtype, this.seed);
            }
            else {
                var limit = Math.sqrt(3 * scale);
                return tfc.randomUniform(shape, -limit, limit, dtype);
            }
        };
        VarianceScaling.prototype.getConfig = function () {
            return {
                scale: this.scale,
                mode: this.mode,
                distribution: this.distribution,
                seed: this.seed
            };
        };
        /** @nocollapse */
        VarianceScaling.className = 'VarianceScaling';
        return VarianceScaling;
    }(Initializer));
    tfc.serialization.registerClass(VarianceScaling);
    var GlorotUniform = /** @class */ (function (_super) {
        __extends(GlorotUniform, _super);
        /**
         * Constructor of GlorotUniform
         * @param scale
         * @param mode
         * @param distribution
         * @param seed
         */
        function GlorotUniform(args) {
            return _super.call(this, {
                scale: 1.0,
                mode: 'fanAvg',
                distribution: 'uniform',
                seed: args == null ? null : args.seed
            }) || this;
        }
        GlorotUniform.prototype.getClassName = function () {
            // In Python Keras, GlorotUniform is not a class, but a helper method
            // that creates a VarianceScaling object. Use 'VarianceScaling' as
            // class name to be compatible with that.
            return VarianceScaling.className;
        };
        /** @nocollapse */
        GlorotUniform.className = 'GlorotUniform';
        return GlorotUniform;
    }(VarianceScaling));
    tfc.serialization.registerClass(GlorotUniform);
    var GlorotNormal = /** @class */ (function (_super) {
        __extends(GlorotNormal, _super);
        /**
         * Constructor of GlorotNormal.
         * @param scale
         * @param mode
         * @param distribution
         * @param seed
         */
        function GlorotNormal(args) {
            return _super.call(this, {
                scale: 1.0,
                mode: 'fanAvg',
                distribution: 'normal',
                seed: args == null ? null : args.seed
            }) || this;
        }
        GlorotNormal.prototype.getClassName = function () {
            // In Python Keras, GlorotNormal is not a class, but a helper method
            // that creates a VarianceScaling object. Use 'VarianceScaling' as
            // class name to be compatible with that.
            return VarianceScaling.className;
        };
        /** @nocollapse */
        GlorotNormal.className = 'GlorotNormal';
        return GlorotNormal;
    }(VarianceScaling));
    tfc.serialization.registerClass(GlorotNormal);
    var HeNormal = /** @class */ (function (_super) {
        __extends(HeNormal, _super);
        function HeNormal(args) {
            return _super.call(this, {
                scale: 2.0,
                mode: 'fanIn',
                distribution: 'normal',
                seed: args == null ? null : args.seed
            }) || this;
        }
        HeNormal.prototype.getClassName = function () {
            // In Python Keras, HeNormal is not a class, but a helper method
            // that creates a VarianceScaling object. Use 'VarianceScaling' as
            // class name to be compatible with that.
            return VarianceScaling.className;
        };
        /** @nocollapse */
        HeNormal.className = 'HeNormal';
        return HeNormal;
    }(VarianceScaling));
    tfc.serialization.registerClass(HeNormal);
    var HeUniform = /** @class */ (function (_super) {
        __extends(HeUniform, _super);
        function HeUniform(args) {
            return _super.call(this, {
                scale: 2.0,
                mode: 'fanIn',
                distribution: 'uniform',
                seed: args == null ? null : args.seed
            }) || this;
        }
        HeUniform.prototype.getClassName = function () {
            // In Python Keras, HeUniform is not a class, but a helper method
            // that creates a VarianceScaling object. Use 'VarianceScaling' as
            // class name to be compatible with that.
            return VarianceScaling.className;
        };
        /** @nocollapse */
        HeUniform.className = 'HeUniform';
        return HeUniform;
    }(VarianceScaling));
    tfc.serialization.registerClass(HeUniform);
    var LeCunNormal = /** @class */ (function (_super) {
        __extends(LeCunNormal, _super);
        function LeCunNormal(args) {
            return _super.call(this, {
                scale: 1.0,
                mode: 'fanIn',
                distribution: 'normal',
                seed: args == null ? null : args.seed
            }) || this;
        }
        LeCunNormal.prototype.getClassName = function () {
            // In Python Keras, LeCunNormal is not a class, but a helper method
            // that creates a VarianceScaling object. Use 'VarianceScaling' as
            // class name to be compatible with that.
            return VarianceScaling.className;
        };
        /** @nocollapse */
        LeCunNormal.className = 'LeCunNormal';
        return LeCunNormal;
    }(VarianceScaling));
    tfc.serialization.registerClass(LeCunNormal);
    var LeCunUniform = /** @class */ (function (_super) {
        __extends(LeCunUniform, _super);
        function LeCunUniform(args) {
            return _super.call(this, {
                scale: 1.0,
                mode: 'fanIn',
                distribution: 'uniform',
                seed: args == null ? null : args.seed
            }) || this;
        }
        LeCunUniform.prototype.getClassName = function () {
            // In Python Keras, LeCunUniform is not a class, but a helper method
            // that creates a VarianceScaling object. Use 'VarianceScaling' as
            // class name to be compatible with that.
            return VarianceScaling.className;
        };
        /** @nocollapse */
        LeCunUniform.className = 'LeCunNormal';
        return LeCunUniform;
    }(VarianceScaling));
    tfc.serialization.registerClass(LeCunUniform);
    var Orthogonal = /** @class */ (function (_super) {
        __extends(Orthogonal, _super);
        function Orthogonal(args) {
            var _this = _super.call(this) || this;
            _this.DEFAULT_GAIN = 1;
            _this.gain = args.gain == null ? _this.DEFAULT_GAIN : args.gain;
            _this.seed = args.seed;
            if (_this.seed != null) {
                throw new NotImplementedError('Random seed is not implemented for Orthogonal Initializer yet.');
            }
            return _this;
        }
        Orthogonal.prototype.apply = function (shape, dtype) {
            var _this = this;
            return tfc.tidy(function () {
                if (shape.length !== 2) {
                    throw new NotImplementedError('The Orthogonal Initializer does not support non-2D shapes yet.');
                }
                if (shape[0] * shape[1] > 2000) {
                    console.warn("Orthogonal initializer is being called on a matrix with more " +
                        ("than 2000 (" + shape[0] * shape[1] + ") elements: ") +
                        "Slowness may result.");
                }
                // TODO(cais): Add seed support.
                var normalizedShape = shape[0] > shape[1] ? [shape[1], shape[0]] : shape;
                var a = randomNormal(normalizedShape, 0, 1, 'float32');
                var q = tfc.linalg.gramSchmidt(a);
                if (shape[0] > shape[1]) {
                    q = q.transpose();
                }
                return tfc.mul(_this.gain, q);
            });
        };
        Orthogonal.prototype.getConfig = function () {
            return {
                gain: this.gain,
                seed: this.seed,
            };
        };
        /** @nocollapse */
        Orthogonal.className = 'Orthogonal';
        return Orthogonal;
    }(Initializer));
    tfc.serialization.registerClass(Orthogonal);
    // Maps the JavaScript-like identifier keys to the corresponding registry
    // symbols.
    var INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
        'constant': 'Constant',
        'glorotNormal': 'GlorotNormal',
        'glorotUniform': 'GlorotUniform',
        'heNormal': 'HeNormal',
        'heUniform': 'HeUniform',
        'identity': 'Identity',
        'leCunNormal': 'LeCunNormal',
        'leCunUniform': 'LeCunUniform',
        'ones': 'Ones',
        'orthogonal': 'Orthogonal',
        'randomNormal': 'RandomNormal',
        'randomUniform': 'RandomUniform',
        'truncatedNormal': 'TruncatedNormal',
        'varianceScaling': 'VarianceScaling',
        'zeros': 'Zeros'
    };
    function deserializeInitializer(config, customObjects) {
        if (customObjects === void 0) { customObjects = {}; }
        return deserializeKerasObject(config, tfc.serialization.SerializationMap.getMap().classNameMap, customObjects, 'initializer');
    }
    function serializeInitializer(initializer) {
        return serializeKerasObject(initializer);
    }
    function getInitializer(identifier) {
        if (typeof identifier === 'string') {
            var className = identifier in INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP ?
                INITIALIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP[identifier] :
                identifier;
            /* We have four 'helper' classes for common initializers that
            all get serialized as 'VarianceScaling' and shouldn't go through
            the deserializeInitializer pathway. */
            if (className === 'GlorotNormal') {
                return new GlorotNormal();
            }
            else if (className === 'GlorotUniform') {
                return new GlorotUniform();
            }
            else if (className === 'HeNormal') {
                return new HeNormal();
            }
            else if (className === 'HeUniform') {
                return new HeUniform();
            }
            else if (className === 'LeCunNormal') {
                return new LeCunNormal();
            }
            else if (className === 'LeCunUniform') {
                return new LeCunUniform();
            }
            else {
                var config = {};
                config['className'] = className;
                config['config'] = {};
                return deserializeInitializer(config);
            }
        }
        else if (identifier instanceof Initializer) {
            return identifier;
        }
        else {
            return deserializeInitializer(identifier);
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Initializer that generates tensors initialized to 0.
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function zeros() {
        return new Zeros();
    }
    /**
     * Initializer that generates tensors initialized to 1.
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function ones() {
        return new Ones();
    }
    /**
     * Initializer that generates values initialized to some constant.
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function constant(args) {
        return new Constant(args);
    }
    /**
     * Initializer that generates random values initialized to a uniform
     * distribution.
     *
     * Values will be distributed uniformly between the configured minval and
     * maxval.
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function randomUniform(args) {
        return new RandomUniform(args);
    }
    /**
     * Initializer that generates random values initialized to a normal
     * distribution.
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function randomNormal$1(args) {
        return new RandomNormal(args);
    }
    /**
     * Initializer that generates random values initialized to a truncated normal.
     * distribution.
     *
     * These values are similar to values from a `RandomNormal` except that values
     * more than two standard deviations from the mean are discarded and re-drawn.
     * This is the recommended initializer for neural network weights and filters.
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function truncatedNormal(args) {
        return new TruncatedNormal(args);
    }
    /**
     * Initializer that generates the identity matrix.
     * Only use for square 2D matrices.
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function identity(args) {
        return new Identity(args);
    }
    /**
     * Initializer capable of adapting its scale to the shape of weights.
     * With distribution=NORMAL, samples are drawn from a truncated normal
     * distribution centered on zero, with `stddev = sqrt(scale / n)` where n is:
     *   - number of input units in the weight tensor, if mode = FAN_IN.
     *   - number of output units, if mode = FAN_OUT.
     *   - average of the numbers of input and output units, if mode = FAN_AVG.
     * With distribution=UNIFORM,
     * samples are drawn from a uniform distribution
     * within [-limit, limit], with `limit = sqrt(3 * scale / n)`.
     */
    /** @doc {heading: 'Initializers',namespace: 'initializers'} */
    function varianceScaling(config) {
        return new VarianceScaling(config);
    }
    /**
     * Glorot uniform initializer, also called Xavier uniform initializer.
     * It draws samples from a uniform distribution within [-limit, limit]
     * where `limit` is `sqrt(6 / (fan_in + fan_out))`
     * where `fan_in` is the number of input units in the weight tensor
     * and `fan_out` is the number of output units in the weight tensor
     *
     * Reference:
     *   Glorot & Bengio, AISTATS 2010
     *       http://jmlr.org/proceedings/papers/v9/glorot10a/glorot10a.pdf.
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function glorotUniform(args) {
        return new GlorotUniform(args);
    }
    /**
     * Glorot normal initializer, also called Xavier normal initializer.
     * It draws samples from a truncated normal distribution centered on 0
     * with `stddev = sqrt(2 / (fan_in + fan_out))`
     * where `fan_in` is the number of input units in the weight tensor
     * and `fan_out` is the number of output units in the weight tensor.
     *
     * Reference:
     *   Glorot & Bengio, AISTATS 2010
     *       http://jmlr.org/proceedings/papers/v9/glorot10a/glorot10a.pdf
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function glorotNormal(args) {
        return new GlorotNormal(args);
    }
    /**
     * He normal initializer.
     *
     * It draws samples from a truncated normal distribution centered on 0
     * with `stddev = sqrt(2 / fanIn)`
     * where `fanIn` is the number of input units in the weight tensor.
     *
     * Reference:
     *     He et al., http://arxiv.org/abs/1502.01852
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function heNormal(args) {
        return new HeNormal(args);
    }
    /**
     * He uniform initializer.
     *
     * It draws samples from a uniform distribution within [-limit, limit]
     * where `limit` is `sqrt(6 / fan_in)`
     * where `fanIn` is the number of input units in the weight tensor.
     *
     * Reference:
     *     He et al., http://arxiv.org/abs/1502.01852
     */
    /** @doc {heading: 'Initializers',namespace: 'initializers'} */
    function heUniform(args) {
        return new HeUniform(args);
    }
    /**
     * LeCun normal initializer.
     *
     * It draws samples from a truncated normal distribution centered on 0
     * with `stddev = sqrt(1 / fanIn)`
     * where `fanIn` is the number of input units in the weight tensor.
     *
     * References:
     *   [Self-Normalizing Neural Networks](https://arxiv.org/abs/1706.02515)
     *   [Efficient Backprop](http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf)
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function leCunNormal(args) {
        return new LeCunNormal(args);
    }
    /**
     * LeCun uniform initializer.
     *
     * It draws samples from a uniform distribution in the interval
     * `[-limit, limit]` with `limit = sqrt(3 / fanIn)`,
     * where `fanIn` is the number of input units in the weight tensor.
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function leCunUniform(args) {
        return new LeCunUniform(args);
    }
    /**
     * Initializer that generates a random orthogonal matrix.
     *
     * Reference:
     * [Saxe et al., http://arxiv.org/abs/1312.6120](http://arxiv.org/abs/1312.6120)
     */
    /** @doc {heading: 'Initializers', namespace: 'initializers'} */
    function orthogonal(args) {
        return new Orthogonal(args);
    }

    var exports_initializers = /*#__PURE__*/Object.freeze({
        zeros: zeros,
        ones: ones,
        constant: constant,
        randomUniform: randomUniform,
        randomNormal: randomNormal$1,
        truncatedNormal: truncatedNormal,
        identity: identity,
        varianceScaling: varianceScaling,
        glorotUniform: glorotUniform,
        glorotNormal: glorotNormal,
        heNormal: heNormal,
        heUniform: heUniform,
        leCunNormal: leCunNormal,
        leCunUniform: leCunUniform,
        orthogonal: orthogonal
    });

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Utilities related to persistent state in the backend.
     */
    /**
     * An ID to track `tf.SymbolicTensor`s and derived classes.
     * Required in different places in engine/topology.ts to identify unique
     * tensors.
     */
    var _nextUniqueTensorId = 0;
    function getNextUniqueTensorId() {
        return _nextUniqueTensorId++;
    }
    var _uidPrefixes = {};
    /**
     * Provides a unique UID given a string prefix.
     *
     * @param prefix
     */
    function getUid(prefix) {
        if (prefix === void 0) { prefix = ''; }
        if (!(prefix in _uidPrefixes)) {
            _uidPrefixes[prefix] = 0;
        }
        _uidPrefixes[prefix] += 1;
        return prefix + _uidPrefixes[prefix].toString();
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    // tslint:enable
    /**
     * Determine whether the input is an Array of Shapes.
     */
    function isArrayOfShapes(x) {
        return Array.isArray(x) && Array.isArray(x[0]);
    }
    /**
     * Special case of normalizing shapes to lists.
     *
     * @param x A shape or list of shapes to normalize into a list of Shapes.
     * @return A list of Shapes.
     */
    function normalizeShapeList(x) {
        if (x.length === 0) {
            return [];
        }
        if (!Array.isArray(x[0])) {
            return [x];
        }
        return x;
    }
    /**
     * Helper function to obtain exactly one Tensor.
     * @param xs: A single `tf.Tensor` or an `Array` of `tf.Tensor`s.
     * @return A single `tf.Tensor`. If `xs` is an `Array`, return the first one.
     * @throws ValueError: If `xs` is an `Array` and its length is not 1.
     */
    function getExactlyOneTensor(xs) {
        var x;
        if (Array.isArray(xs)) {
            if (xs.length !== 1) {
                throw new ValueError("Expected Tensor length to be 1; got " + xs.length);
            }
            x = xs[0];
        }
        else {
            x = xs;
        }
        return x;
    }
    /**
     * Helper function to obtain exactly on instance of Shape.
     *
     * @param shapes Input single `Shape` or Array of `Shape`s.
     * @returns If input is a single `Shape`, return it unchanged. If the input is
     *   an `Array` containing exactly one instance of `Shape`, return the instance.
     *   Otherwise, throw a `ValueError`.
     * @throws ValueError: If input is an `Array` of `Shape`s, and its length is not
     *   1.
     */
    function getExactlyOneShape(shapes) {
        if (Array.isArray(shapes) && Array.isArray(shapes[0])) {
            if (shapes.length === 1) {
                shapes = shapes;
                return shapes[0];
            }
            else {
                throw new ValueError("Expected exactly 1 Shape; got " + shapes.length);
            }
        }
        else {
            return shapes;
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Count the elements in an Array of LayerVariables.
     *
     * @param weights: The LayerVariables of which the constituent numbers are to
     *   be counted.
     * @returns A count of the elements in all the LayerVariables
     */
    function countParamsInWeights(weights) {
        var count = 0;
        for (var _i = 0, weights_1 = weights; _i < weights_1.length; _i++) {
            var weight = weights_1[_i];
            if (weight.shape.length === 0) {
                count += 1;
            }
            else {
                count += weight.shape.reduce(function (a, b) { return a * b; });
            }
        }
        return count;
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    var DEFAULT_VARIABLE_NAME_PREFIX = 'Variable';
    /**
     * A `tf.layers.LayerVariable` is similar to a `tf.Tensor` in that it has a
     * dtype and shape, but its value is mutable.  The value is itself represented
     * as a`tf.Tensor`, and can be read with the `read()` method and updated with
     * the `write()` method.
     */
    var LayerVariable = /** @class */ (function () {
        /**
         * Construct Variable from a `tf.Tensor`.
         *
         * If not explicitly named, the Variable will be given a name with the
         * prefix 'Variable'. Variable names are unique. In the case of name
         * collision, suffixies '_<num>' will be added to the name.
         *
         * @param val Initial value of the Variable.
         * @param name Name of the variable. If `null` or `undefined` is provided, it
         *   will default a name with the prefix 'Variable'.
         * @param constraint Optional, projection function to be applied to the
         * variable after optimize updates
         * @throws ValueError if `name` is `null` or `undefined`.
         */
        function LayerVariable(val, dtype, name, trainable, constraint) {
            if (dtype === void 0) { dtype = 'float32'; }
            if (name === void 0) { name = DEFAULT_VARIABLE_NAME_PREFIX; }
            if (trainable === void 0) { trainable = true; }
            if (constraint === void 0) { constraint = null; }
            this.dtype = dtype == null ? 'float32' : dtype;
            this.shape = val.shape;
            this.id = getNextUniqueTensorId();
            name = name == null ? DEFAULT_VARIABLE_NAME_PREFIX : name;
            this.originalName = getScopedTensorName(name);
            this.name = getUniqueTensorName(this.originalName);
            this.trainable_ = trainable;
            this.constraint = constraint;
            this.val = tfc.variable(val, this.trainable_, this.name, this.dtype);
        }
        /**
         * Get a snapshot of the Variable's value.
         *
         * The returned value is a snapshot of the Variable's value at the time of
         * the invocation. Future mutations in the value of the tensor will only
         * be reflected by future calls to this method.
         */
        LayerVariable.prototype.read = function () {
            this.assertNotDisposed();
            return this.val;
        };
        /**
         * Update the value of the Variable.
         *
         * @param newVal: The new value to update to. Must be consistent with the
         *   dtype and shape of the Variable.
         * @return This Variable.
         */
        LayerVariable.prototype.write = function (newVal) {
            // TODO(cais): Once  TF.js Core supports Tensor.dtype, check dtype match.
            this.assertNotDisposed();
            checkShapesMatch(this.val, newVal);
            // Skip updating if this is the exact same tensor.
            if (this.val.id !== newVal.id) {
                this.val.assign(newVal);
                if (this.constraint != null) {
                    this.val.assign(this.constraint.apply(this.val));
                }
            }
            return this;
        };
        /**
         * Dispose this LayersVariable instance from memory.
         */
        LayerVariable.prototype.dispose = function () {
            this.assertNotDisposed();
            this.val.dispose();
        };
        LayerVariable.prototype.assertNotDisposed = function () {
            if (this.val.isDisposed) {
                throw new Error("LayersVariable " + this.name + " is already disposed.");
            }
        };
        Object.defineProperty(LayerVariable.prototype, "trainable", {
            get: function () {
                return this.trainable_;
            },
            set: function (trainable) {
                this.trainable_ = trainable;
                this.val.trainable = trainable;
            },
            enumerable: true,
            configurable: true
        });
        return LayerVariable;
    }());
    function checkShapesMatch(x, y) {
        if (x.shape.toString() !== y.shape.toString()) {
            throw new Error('Shape mismatch: ' + JSON.stringify(x.shape) + ' vs. ' +
                JSON.stringify(y.shape));
        }
    }
    /**
     * Get the values of an array of Variables.
     *
     * @param tensors An `Array` of `Variable`s to get the values of.
     * @return The values of the inputs, as an `Array` of`tf.Tensor`s.
     */
    function batchGetValue(xs) {
        return xs.map(function (x) { return x.read(); });
    }
    /**
     * Update the value of multiple Variables at once.
     *
     * @param variablesAndValues An `Array`, each element is of type
     *   [Variable, Tensor]. The first item is the
     *   `Variable` of which the value is to be updated. The second item
     *   carries the new value.
     */
    function batchSetValue(variablesAndValues) {
        variablesAndValues.forEach(function (variableAndValue) {
            var variable = variableAndValue[0];
            variable.write(variableAndValue[1]);
        });
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Specifies the ndim, dtype and shape of every input to a layer.
     *
     * Every layer should expose (if appropriate) an `inputSpec` attribute:
     * a list of instances of InputSpec (one per input tensor).
     *
     * A null entry in a shape is compatible with any dimension,
     * a null shape is compatible with any shape.
     */
    var InputSpec = /** @class */ (function () {
        function InputSpec(args) {
            this.dtype = args.dtype;
            this.shape = args.shape;
            /*
              TODO(michaelterry): Could throw error if ndim and shape are both defined
                (then backport).
            */
            if (args.shape != null) {
                this.ndim = args.shape.length;
            }
            else {
                this.ndim = args.ndim;
            }
            this.maxNDim = args.maxNDim;
            this.minNDim = args.minNDim;
            this.axes = args.axes || {};
        }
        return InputSpec;
    }());
    /**
     * `tf.SymbolicTensor` is a placeholder for a Tensor without any concrete value.
     *
     * They are most often encountered when building a graph of `Layer`s for a
     * a `tf.LayersModel` and the input data's shape, but not values are known.
     */
    /** @doc {heading: 'Models', 'subheading': 'Classes'} */
    var SymbolicTensor = /** @class */ (function () {
        /**
         *
         * @param dtype
         * @param shape
         * @param sourceLayer The Layer that produced this symbolic tensor.
         * @param inputs The inputs passed to sourceLayer's __call__() method.
         * @param nodeIndex
         * @param tensorIndex
         * @param callArgs The keyword arguments passed to the __call__() method.
         * @param name
         * @param outputTensorIndex The index of this tensor in the list of outputs
         *   returned by apply().
         */
        function SymbolicTensor(dtype, shape, sourceLayer, inputs, callArgs, name, outputTensorIndex) {
            this.dtype = dtype;
            this.shape = shape;
            this.sourceLayer = sourceLayer;
            this.inputs = inputs;
            this.callArgs = callArgs;
            this.outputTensorIndex = outputTensorIndex;
            this.id = getNextUniqueTensorId();
            if (name != null) {
                this.originalName = getScopedTensorName(name);
                this.name = getUniqueTensorName(this.originalName);
            }
            this.rank = shape.length;
        }
        return SymbolicTensor;
    }());
    var _nextNodeID = 0;
    /**
     * A `Node` describes the connectivity between two layers.
     *
     * Each time a layer is connected to some new input,
     * a node is added to `layer.inboundNodes`.
     *
     * Each time the output of a layer is used by another layer,
     * a node is added to `layer.outboundNodes`.
     *
     * `nodeIndices` and `tensorIndices` are basically fine-grained coordinates
     * describing the origin of the `inputTensors`, verifying the following:
     *
     * `inputTensors[i] ==
     * inboundLayers[i].inboundNodes[nodeIndices[i]].outputTensors[
     *   tensorIndices[i]]`
     *
     * A node from layer A to layer B is added to:
     *     A.outboundNodes
     *     B.inboundNodes
     */
    var Node = /** @class */ (function () {
        function Node(args, 
        // TODO(michaelterry): Define actual type for this.
        callArgs) {
            this.callArgs = callArgs;
            this.id = _nextNodeID++;
            /*
              Layer instance (NOT a list).
              this is the layer that takes a list of input tensors
              and turns them into a list of output tensors.
              the current node will be added to
              the inboundNodes of outboundLayer.
            */
            this.outboundLayer = args.outboundLayer;
            /*
                The following 3 properties describe where
                the input tensors come from: which layers,
                and for each layer, which node and which
                tensor output of each node.
            */
            // List of layer instances.
            this.inboundLayers = args.inboundLayers;
            // List of integers, 1:1 mapping with inboundLayers.
            this.nodeIndices = args.nodeIndices;
            // List of integers, 1:1 mapping with inboundLayers.
            this.tensorIndices = args.tensorIndices;
            /*
                Following 2 properties:
                tensor inputs and outputs of outboundLayer.
            */
            // List of tensors. 1:1 mapping with inboundLayers.
            this.inputTensors = args.inputTensors;
            // List of tensors, created by outboundLayer.call().
            this.outputTensors = args.outputTensors;
            /*
                Following 2 properties: input and output masks.
                List of tensors, 1:1 mapping with inputTensor.
            */
            this.inputMasks = args.inputMasks;
            // List of tensors, created by outboundLayer.computeMask().
            this.outputMasks = args.outputMasks;
            // Following 2 properties: input and output shapes.
            // List of shape tuples, shapes of inputTensors.
            this.inputShapes = args.inputShapes;
            // List of shape tuples, shapes of outputTensors.
            this.outputShapes = args.outputShapes;
            // Add nodes to all layers involved.
            for (var _i = 0, _a = args.inboundLayers; _i < _a.length; _i++) {
                var layer = _a[_i];
                if (layer != null) {
                    layer.outboundNodes.push(this);
                }
            }
            args.outboundLayer.inboundNodes.push(this);
        }
        Node.prototype.getConfig = function () {
            var inboundNames = [];
            for (var _i = 0, _a = this.inboundLayers; _i < _a.length; _i++) {
                var layer = _a[_i];
                if (layer != null) {
                    inboundNames.push(layer.name);
                }
                else {
                    inboundNames.push(null);
                }
            }
            return {
                outboundLayer: this.outboundLayer ? this.outboundLayer.name : null,
                inboundLayers: inboundNames,
                nodeIndices: this.nodeIndices,
                tensorIndices: this.tensorIndices
            };
        };
        return Node;
    }());
    var _nextLayerID = 0;
    /**
     * A layer is a grouping of operations and weights that can be composed to
     * create a `tf.LayersModel`.
     *
     * Layers are constructed by using the functions under the
     * [tf.layers](#Layers-Basic) namespace.
     */
    /** @doc {heading: 'Layers', subheading: 'Classes', namespace: 'layers'} */
    var Layer = /** @class */ (function (_super) {
        __extends(Layer, _super);
        function Layer(args) {
            var _this = _super.call(this) || this;
            _this._callHook = null;
            _this._addedWeightNames = [];
            // Porting Notes: PyKeras does not have this property in this base Layer
            //   class. Instead lets Layer subclass set it dynamically and checks the
            //   value with `hasattr`. In tfjs-layers, we let this be a member of this
            //   base class.
            _this._stateful = false;
            _this.id = _nextLayerID++;
            _this.activityRegularizer = null;
            _this.inputSpec = null;
            _this.supportsMasking = false;
            // These properties will be set upon call of this.build()
            _this._trainableWeights = [];
            _this._nonTrainableWeights = [];
            _this._losses = [];
            _this._updates = [];
            _this._built = false;
            /*
              These lists will be filled via successive calls
              to this.addInboundNode().
             */
            _this.inboundNodes = [];
            _this.outboundNodes = [];
            var name = args.name;
            if (!name) {
                var prefix = _this.getClassName();
                name = toSnakeCase(prefix) + '_' + getUid(prefix);
            }
            _this.name = name;
            _this.trainable_ = args.trainable == null ? true : args.trainable;
            if (args.inputShape != null || args.batchInputShape != null) {
                /*
                  In this case we will later create an input layer
                  to insert before the current layer
                 */
                var batchInputShape = void 0;
                if (args.batchInputShape != null) {
                    batchInputShape = args.batchInputShape;
                }
                else if (args.inputShape != null) {
                    var batchSize = null;
                    if (args.batchSize != null) {
                        batchSize = args.batchSize;
                    }
                    batchInputShape = [batchSize].concat(args.inputShape);
                }
                _this.batchInputShape = batchInputShape;
                // Set dtype.
                var dtype = args.dtype;
                if (dtype == null) {
                    dtype = args.inputDType;
                }
                if (dtype == null) {
                    dtype = 'float32';
                }
                _this.dtype = dtype;
            }
            if (args.weights != null) {
                _this.initialWeights = args.weights;
            }
            else {
                _this.initialWeights = null;
            }
            // The value of `_refCount` is initialized to null. When the layer is used
            // in a symbolic way for the first time, it will be set to 1.
            _this._refCount = null;
            _this.fastWeightInitDuringBuild = false;
            return _this;
        }
        /**
         * Converts a layer and its index to a unique (immutable type) name.
         * This function is used internally with `this.containerNodes`.
         * @param layer The layer.
         * @param nodeIndex The layer's position (e.g. via enumerate) in a list of
         *   nodes.
         *
         * @returns The unique name.
         */
        Layer.nodeKey = function (layer, nodeIndex) {
            return layer.name + '_ib-' + nodeIndex.toString();
        };
        /**
         * Returns this.inboundNode at index nodeIndex.
         *
         * Porting note: This is a replacement for _get_node_attribute_at_index()
         * @param nodeIndex
         * @param attrName The name of the attribute related to request for this node.
         */
        Layer.prototype.getNodeAtIndex = function (nodeIndex, attrName) {
            if (this.inboundNodes.length === 0) {
                throw new RuntimeError('The layer has never been called ' +
                    ("and thus has no defined " + attrName + "."));
            }
            if (this.inboundNodes.length <= nodeIndex) {
                throw new ValueError("Asked to get " + attrName + " at node " + nodeIndex + ", " +
                    ("but the layer has only " + this.inboundNodes.length + " inbound nodes."));
            }
            return this.inboundNodes[nodeIndex];
        };
        /**
         * Retrieves the input tensor(s) of a layer at a given node.
         *
         * @param nodeIndex Integer, index of the node from which to retrieve the
         *   attribute. E.g. `nodeIndex=0` will correspond to the first time the layer
         *   was called.
         *
         * @return A tensor (or list of tensors if the layer has multiple inputs).
         */
        Layer.prototype.getInputAt = function (nodeIndex) {
            return singletonOrArray(this.getNodeAtIndex(nodeIndex, 'input').inputTensors);
        };
        /**
         * Retrieves the output tensor(s) of a layer at a given node.
         *
         * @param nodeIndex Integer, index of the node from which to retrieve the
         *   attribute. E.g. `nodeIndex=0` will correspond to the first time the layer
         *   was called.
         *
         * @return A tensor (or list of tensors if the layer has multiple outputs).
         */
        Layer.prototype.getOutputAt = function (nodeIndex) {
            return singletonOrArray(this.getNodeAtIndex(nodeIndex, 'output').outputTensors);
        };
        Object.defineProperty(Layer.prototype, "input", {
            // Properties
            /**
             * Retrieves the input tensor(s) of a layer.
             *
             * Only applicable if the layer has exactly one inbound node,
             * i.e. if it is connected to one incoming layer.
             *
             * @return Input tensor or list of input tensors.
             *
             * @exception AttributeError if the layer is connected to more than one
             *   incoming layers.
             */
            get: function () {
                if (this.inboundNodes.length > 1) {
                    throw new AttributeError("Layer " + this.name +
                        ' has multiple inbound nodes, ' +
                        'hence the notion of "layer input" ' +
                        'is ill-defined. ' +
                        'Use `getInputAt(nodeIndex)` instead.');
                }
                else if (this.inboundNodes.length === 0) {
                    throw new AttributeError("Layer " + this.name +
                        ' is not connected, no input to return.');
                }
                return singletonOrArray(this.getNodeAtIndex(0, 'input').inputTensors);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "output", {
            /**
             * Retrieves the output tensor(s) of a layer.
             *
             * Only applicable if the layer has exactly one inbound node,
             * i.e. if it is connected to one incoming layer.
             *
             * @return Output tensor or list of output tensors.
             *
             * @exception AttributeError if the layer is connected to more than one
             *   incoming layers.
             */
            get: function () {
                if (this.inboundNodes.length === 0) {
                    throw new AttributeError("Layer " + this.name +
                        ' has no inbound nodes.');
                }
                if (this.inboundNodes.length > 1) {
                    throw new AttributeError("Layer " + this.name +
                        ' has multiple inbound nodes, ' +
                        'hence the notion of "layer output" ' +
                        'is ill-defined. ' +
                        'Use `getOutputAt(nodeIndex)` instead.');
                }
                return singletonOrArray(this.getNodeAtIndex(0, 'output').outputTensors);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "losses", {
            get: function () {
                return this._losses;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Retrieves the Layer's current loss values.
         *
         * Used for regularizers during training.
         */
        Layer.prototype.calculateLosses = function () {
            // Porting Node: This is an augmentation to Layer.loss in PyKeras.
            //   In PyKeras, Layer.loss returns symbolic tensors. Here a concrete
            //   Tensor (specifically Scalar) values are returned. This is due to the
            //   imperative backend.
            return this.losses.map(function (lossFn) { return lossFn(); });
        };
        Object.defineProperty(Layer.prototype, "updates", {
            get: function () {
                return this._updates;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "built", {
            get: function () {
                return this._built;
            },
            set: function (built) {
                this._built = built;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "trainable", {
            get: function () {
                return this.trainable_;
            },
            set: function (trainable) {
                this._trainableWeights.forEach(function (w) { return w.trainable = trainable; });
                this.trainable_ = trainable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "trainableWeights", {
            get: function () {
                if (this.trainable_) {
                    return this._trainableWeights.filter(function (w) { return w.trainable; });
                }
                else {
                    return [];
                }
            },
            set: function (weights) {
                this._trainableWeights = weights;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "nonTrainableWeights", {
            get: function () {
                if (this.trainable) {
                    return this._trainableWeights.filter(function (w) { return !w.trainable; })
                        .concat(this._nonTrainableWeights);
                }
                else {
                    return this._trainableWeights.concat(this._nonTrainableWeights);
                }
            },
            set: function (weights) {
                this._nonTrainableWeights = weights;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "weights", {
            /**
             * The concatenation of the lists trainableWeights and nonTrainableWeights
             * (in this order).
             */
            get: function () {
                return this.trainableWeights.concat(this.nonTrainableWeights);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "stateful", {
            get: function () {
                return this._stateful;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Reset the states of the layer.
         *
         * This method of the base Layer class is essentially a no-op.
         * Subclasses that are stateful (e.g., stateful RNNs) should override this
         * method.
         */
        Layer.prototype.resetStates = function () {
            if (!this.stateful) {
                throw new Error('Cannot call the resetStates() method of a non-stateful Layer ' +
                    'object.');
            }
        };
        /**
         * Checks compatibility between the layer and provided inputs.
         *
         * This checks that the tensor(s) `input`
         * verify the input assumptions of the layer
         * (if any). If not, exceptions are raised.
         *
         * @param inputs Input tensor or list of input tensors.
         *
         * @exception ValueError in case of mismatch between
         *   the provided inputs and the expectations of the layer.
         */
        Layer.prototype.assertInputCompatibility = function (inputs) {
            inputs = toList(inputs);
            if (this.inputSpec == null || this.inputSpec.length === 0) {
                return;
            }
            var inputSpec = toList(this.inputSpec);
            if (inputs.length !== inputSpec.length) {
                throw new ValueError("Layer " + this.name + " expects " + inputSpec.length + " inputs, " +
                    ("but it received " + inputs.length + " input tensors. ") +
                    ("Input received: " + inputs));
            }
            for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
                var x = inputs[inputIndex];
                var spec = inputSpec[inputIndex];
                if (spec == null) {
                    continue;
                }
                // Check ndim.
                var ndim = x.rank;
                if (spec.ndim != null) {
                    if (ndim !== spec.ndim) {
                        throw new ValueError("Input " + inputIndex + " is incompatible with layer " + this.name + ": " +
                            ("expected ndim=" + spec.ndim + ", found ndim=" + ndim));
                    }
                }
                if (spec.maxNDim != null) {
                    if (ndim > spec.maxNDim) {
                        throw new ValueError("Input " + inputIndex + " is incompatible with layer " + this.name +
                            (": expected max_ndim=" + spec.maxNDim + ", found ndim=" + ndim));
                    }
                }
                if (spec.minNDim != null) {
                    if (ndim < spec.minNDim) {
                        throw new ValueError("Input " + inputIndex + " is incompatible with layer " + this.name +
                            (": expected min_ndim=" + spec.minNDim + ", found ndim=" + ndim + "."));
                    }
                }
                // Check dtype.
                if (spec.dtype != null) {
                    if (x.dtype !== spec.dtype) {
                        throw new ValueError("Input " + inputIndex + " is incompatible with layer " + this.name + " " +
                            (": expected dtype=" + spec.dtype + ", found dtype=" + x.dtype + "."));
                    }
                }
                // Check specific shape axes.
                if (spec.axes) {
                    var xShape = x.shape;
                    for (var key in spec.axes) {
                        var axis = Number(key);
                        var value = spec.axes[key];
                        // Perform Python-style slicing in case axis < 0;
                        // TODO(cais): Use https://github.com/alvivi/typescript-underscore to
                        // ensure type safety through Underscore calls.
                        var xShapeAtAxis = axis >= 0 ? xShape[axis] : xShape[xShape.length + axis];
                        if (value != null && [value, null].indexOf(xShapeAtAxis) === -1) {
                            throw new ValueError("Input " + inputIndex + " is incompatible with layer " +
                                (this.name + ": expected axis " + axis + " of input shape to ") +
                                ("have value " + value + " but got shape " + xShape + "."));
                        }
                    }
                }
                // Check shape.
                if (spec.shape != null) {
                    for (var i = 0; i < spec.shape.length; ++i) {
                        var specDim = spec.shape[i];
                        var dim = x.shape[i];
                        if (specDim != null && dim != null) {
                            if (specDim !== dim) {
                                throw new ValueError("Input " + inputIndex + " is incompatible with layer " +
                                    (this.name + ": expected shape=" + spec.shape + ", ") +
                                    ("found shape=" + x.shape + "."));
                            }
                        }
                    }
                }
            }
        };
        /**
         * This is where the layer's logic lives.
         *
         * @param inputs Input tensor, or list/tuple of input tensors.
         * @param kwargs Additional keyword arguments.
         *
         * @return A tensor or list/tuple of tensors.
         */
        Layer.prototype.call = function (inputs, kwargs) {
            return inputs;
        };
        Layer.prototype.invokeCallHook = function (inputs, kwargs) {
            if (this._callHook != null) {
                this._callHook(inputs, kwargs);
            }
        };
        /**
         * Set call hook.
         * This is currently used for testing only.
         * @param callHook
         */
        Layer.prototype.setCallHook = function (callHook) {
            this._callHook = callHook;
        };
        /**
         * Clear call hook.
         * This is currently used for testing only.
         */
        Layer.prototype.clearCallHook = function () {
            this._callHook = null;
        };
        /**
         * Builds or executes a `Layer's logic.
         *
         * When called with `tf.Tensor`(s), execute the `Layer`s computation and
         * return Tensor(s). For example:
         *
         * ```js
         * const denseLayer = tf.layers.dense({
         *   units: 1,
         *   kernelInitializer: 'zeros',
         *   useBias: false
         * });
         *
         * // Invoke the layer's apply() method with a `tf.Tensor` (with concrete
         * // numeric values).
         * const input = tf.ones([2, 2]);
         * const output = denseLayer.apply(input);
         *
         * // The output's value is expected to be [[0], [0]], due to the fact that
         * // the dense layer has a kernel initialized to all-zeros and does not have
         * // a bias.
         * output.print();
         * ```
         *
         * When called with `tf.SymbolicTensor`(s), this will prepare the layer for
         * future execution.  This entails internal book-keeping on shapes of
         * expected Tensors, wiring layers together, and initializing weights.
         *
         * Calling `apply` with `tf.SymbolicTensor`s are typically used during the
         * building of non-`tf.Sequential` models. For example:
         *
         * ```js
         * const flattenLayer = tf.layers.flatten();
         * const denseLayer = tf.layers.dense({units: 1});
         *
         * // Use tf.layers.input() to obtain a SymbolicTensor as input to apply().
         * const input = tf.input({shape: [2, 2]});
         * const output1 = flattenLayer.apply(input);
         *
         * // output1.shape is [null, 4]. The first dimension is the undetermined
         * // batch size. The second dimension comes from flattening the [2, 2]
         * // shape.
         * console.log(JSON.stringify(output1.shape));
         *
         * // The output SymbolicTensor of the flatten layer can be used to call
         * // the apply() of the dense layer:
         * const output2 = denseLayer.apply(output1);
         *
         * // output2.shape is [null, 1]. The first dimension is the undetermined
         * // batch size. The second dimension matches the number of units of the
         * // dense layer.
         * console.log(JSON.stringify(output2.shape));
         *
         * // The input and output and be used to construct a model that consists
         * // of the flatten and dense layers.
         * const model = tf.model({inputs: input, outputs: output2});
         * ```
         *
         * @param inputs a `tf.Tensor` or `tf.SymbolicTensor` or an Array of them.
         * @param kwargs Additional keyword arguments to be passed to `call()`.
         *
         * @return Output of the layer's `call` method.
         *
         * @exception ValueError error in case the layer is missing shape information
         *   for its `build` call.
         */
        // Porting Note: This is a replacement for __call__() in Python.
        /** @doc {heading: 'Models', 'subheading': 'Classes'} */
        Layer.prototype.apply = function (inputs, kwargs) {
            var _this = this;
            kwargs = kwargs || {};
            this.assertNotDisposed();
            // Ensure inputs are all the same type.
            var inputsList = toList(inputs);
            var allAreSymbolic = true;
            for (var _i = 0, inputsList_1 = inputsList; _i < inputsList_1.length; _i++) {
                var input = inputsList_1[_i];
                if (!(input instanceof SymbolicTensor)) {
                    allAreSymbolic = false;
                    break;
                }
            }
            var noneAreSymbolic = true;
            for (var _a = 0, inputsList_2 = inputsList; _a < inputsList_2.length; _a++) {
                var input = inputsList_2[_a];
                if (input instanceof SymbolicTensor) {
                    noneAreSymbolic = false;
                    break;
                }
            }
            if (allAreSymbolic === noneAreSymbolic) {
                throw new ValueError('Arguments to apply() must be all ' +
                    'SymbolicTensors or all Tensors');
            }
            // TODO(michaelterry): nameScope() may not be necessary.
            return nameScope(this.name, function () {
                // Handle laying building (weight creating, input spec locking).
                if (!_this.built) {
                    /*
                      Throw exceptions in case the input is not compatible
                      with the inputSpec specified in the layer constructor.
                     */
                    _this.assertInputCompatibility(inputs);
                    // Collect input shapes to build layer.
                    var inputShapes = [];
                    for (var _i = 0, _a = toList(inputs); _i < _a.length; _i++) {
                        var xElem = _a[_i];
                        inputShapes.push(xElem.shape);
                    }
                    _this.build(singletonOrArray(inputShapes));
                    _this.built = true;
                    // Load weights that were specified at layer instantiation.
                    if (_this.initialWeights) {
                        _this.setWeights(_this.initialWeights);
                    }
                    if (_this._refCount === null && noneAreSymbolic) {
                        // The first use of this layer is a non-symbolic call, set ref count
                        // to 1 so the Layer can be properly disposed if its dispose() method
                        // is called.
                        _this._refCount = 1;
                    }
                }
                /*
                  Throw exceptions in case the input is not compatible
                  with the inputSpec set at build time.
                */
                _this.assertInputCompatibility(inputs);
                // Handle mask propagation.
                // TODO(michaelterry): Mask propagation not currently implemented.
                // Actually call the layer, collecting output(s), mask(s), and shape(s).
                if (noneAreSymbolic) {
                    var output = _this.call(inputs, kwargs);
                    // TODO(michaelterry): Compute the outputMask
                    // If the layer returns tensors from its inputs, unmodified,
                    // we copy them to avoid loss of tensor metadata.
                    var outputList = toList(output);
                    var outputListCopy = [];
                    // TODO(michaelterry): This copying may not be necessary given our eager
                    // backend.
                    for (var _b = 0, outputList_1 = outputList; _b < outputList_1.length; _b++) {
                        var x = outputList_1[_b];
                        if (inputsList.indexOf(x) !== -1) {
                            x = x.clone();
                        }
                        outputListCopy.push(x);
                    }
                    output = singletonOrArray(outputListCopy);
                    if (_this.activityRegularizer != null) {
                        throw new NotImplementedError('Layer invocation in the presence of activity ' +
                            'regularizer(s) is not supported yet.');
                    }
                    // TODO(michaelterry): Call addInboundNode()?
                    return output;
                }
                else {
                    var inputShape = collectInputShape(inputs);
                    var outputShape = _this.computeOutputShape(inputShape);
                    var output = void 0;
                    var outputDType_1 = guessOutputDType(inputs);
                    _this.warnOnIncompatibleInputShape(Array.isArray(inputs) ? inputShape[0] :
                        inputShape);
                    if (outputShape != null && outputShape.length > 0 &&
                        Array.isArray(outputShape[0])) {
                        // We have multiple output shapes. Create multiple output tensors.
                        output = outputShape
                            .map(function (shape, index) { return new SymbolicTensor(outputDType_1, shape, _this, toList(inputs), kwargs, _this.name, index); });
                    }
                    else {
                        output = new SymbolicTensor(outputDType_1, outputShape, _this, toList(inputs), kwargs, _this.name);
                    }
                    /*
                      Add an inbound node to the layer, so that it keeps track
                      of the call and of all new variables created during the call.
                      This also updates the layer history of the output tensor(s).
                      If the input tensor(s) had no previous history,
                      this does nothing.
                    */
                    _this.addInboundNode(inputs, output, null, null, inputShape, outputShape, kwargs);
                    _this._refCount++;
                    if (_this.activityRegularizer != null) {
                        throw new NotImplementedError('Layer invocation in the presence of activity ' +
                            'regularizer(s) is not supported yet.');
                    }
                    return output;
                }
            });
        };
        /**
         * Check compatibility between input shape and this layer's batchInputShape.
         *
         * Print warning if any incompatibility is found.
         *
         * @param inputShape Input shape to be checked.
         */
        Layer.prototype.warnOnIncompatibleInputShape = function (inputShape) {
            if (this.batchInputShape == null) {
                return;
            }
            else if (inputShape.length !== this.batchInputShape.length) {
                console.warn("The rank of the input tensor provided (shape: " +
                    (JSON.stringify(inputShape) + ") does not match that of the ") +
                    ("batchInputShape (" + JSON.stringify(this.batchInputShape) + ") ") +
                    ("of the layer " + this.name));
            }
            else {
                var dimMismatch_1 = false;
                this.batchInputShape.forEach(function (dimension, i) {
                    if (dimension != null && inputShape[i] != null &&
                        inputShape[i] !== dimension) {
                        dimMismatch_1 = true;
                    }
                });
                if (dimMismatch_1) {
                    console.warn("The shape of the input tensor " +
                        ("(" + JSON.stringify(inputShape) + ") does not ") +
                        ("match the expectation of layer " + this.name + ": ") +
                        ("" + JSON.stringify(this.batchInputShape)));
                }
            }
        };
        Object.defineProperty(Layer.prototype, "outputShape", {
            /**
             * Retrieves the output shape(s) of a layer.
             *
             * Only applicable if the layer has only one inbound node, or if all inbound
             * nodes have the same output shape.
             *
             * @returns Output shape or shapes.
             * @throws AttributeError: if the layer is connected to more than one incoming
             *   nodes.
             */
            /** @doc {heading: 'Models', 'subheading': 'Classes'} */
            get: function () {
                if (this.inboundNodes == null || this.inboundNodes.length === 0) {
                    throw new AttributeError("The layer " + this.name + " has never been called and thus has no " +
                        "defined output shape.");
                }
                var allOutputShapes = [];
                for (var _i = 0, _a = this.inboundNodes; _i < _a.length; _i++) {
                    var node = _a[_i];
                    var shapeString = JSON.stringify(node.outputShapes);
                    if (allOutputShapes.indexOf(shapeString) === -1) {
                        allOutputShapes.push(shapeString);
                    }
                }
                if (allOutputShapes.length === 1) {
                    var outputShapes = this.inboundNodes[0].outputShapes;
                    if (Array.isArray(outputShapes) && Array.isArray(outputShapes[0]) &&
                        outputShapes.length === 1) {
                        return outputShapes[0];
                    }
                    else {
                        return outputShapes;
                    }
                }
                else {
                    throw new AttributeError("The layer " + this.name + " has multiple inbound nodes with different " +
                        "output shapes. Hence the notion of \"outut shape\" is ill-defined " +
                        "for the layer.");
                    // TODO(cais): Implement getOutputShapeAt().
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Counts the total number of numbers (e.g., float32, int32) in the
         * weights.
         *
         * @returns An integer count.
         * @throws RuntimeError: If the layer is not built yet (in which case its
         *   weights are not defined yet.)
         */
        /** @doc {heading: 'Models', 'subheading': 'Classes'} */
        Layer.prototype.countParams = function () {
            if (!this.built) {
                throw new RuntimeError("You tried to call countParams() on " + this.name + ", " +
                    "but the layer is not built yet. Build it first by calling " +
                    "build(batchInputShape).");
            }
            return countParamsInWeights(this.weights);
        };
        /**
         * Creates the layer weights.
         *
         * Must be implemented on all layers that have weights.
         *
         * Called when apply() is called to construct the weights.
         *
         * @param inputShape A `Shape` or array of `Shape` (unused).
         */
        /** @doc {heading: 'Models', 'subheading': 'Classes'} */
        Layer.prototype.build = function (inputShape) {
            this.built = true;
        };
        /**
         * Returns the current values of the weights of the layer.
         *
         * @param trainableOnly Whether to get the values of only trainable weights.
         * @returns Weight values as an `Array` of `tf.Tensor`s.
         */
        /** @doc {heading: 'Models', 'subheading': 'Classes'} */
        Layer.prototype.getWeights = function (trainableOnly) {
            if (trainableOnly === void 0) { trainableOnly = false; }
            return batchGetValue(trainableOnly ? this.trainableWeights : this.weights);
        };
        /**
         * Sets the weights of the layer, from Tensors.
         *
         * @param weights a list of Tensors. The number of arrays and their shape
         *   must match number of the dimensions of the weights of the layer (i.e.
         *   it should match the output of `getWeights`).
         *
         * @exception ValueError If the provided weights list does not match the
         *   layer's specifications.
         */
        /** @doc {heading: 'Models', 'subheading': 'Classes'} */
        Layer.prototype.setWeights = function (weights) {
            var _this = this;
            tfc.tidy(function () {
                var params = _this.weights;
                if (params.length !== weights.length) {
                    // TODO(cais): Restore the following and use `providedWeights`, instead
                    // of `weights` in the error message, once the deeplearn.js bug is
                    // fixed: https://github.com/PAIR-code/deeplearnjs/issues/498 const
                    // providedWeights = JSON.stringify(weights).substr(0, 50);
                    throw new ValueError("You called setWeights(weights) on layer \"" + _this.name + "\" " +
                        ("with a weight list of length " + weights.length + ", ") +
                        ("but the layer was expecting " + params.length + " weights. ") +
                        ("Provided weights: " + weights + "..."));
                }
                if (params.length === 0) {
                    return;
                }
                var weightValueTuples = [];
                var paramValues = batchGetValue(params);
                for (var i = 0; i < paramValues.length; ++i) {
                    var pv = paramValues[i];
                    var p = params[i];
                    var w = weights[i];
                    if (!tfc.util.arraysEqual(pv.shape, w.shape)) {
                        throw new ValueError("Layer weight shape " + pv.shape + " " +
                            ("not compatible with provided weight shape " + w.shape));
                    }
                    weightValueTuples.push([p, w]);
                }
                batchSetValue(weightValueTuples);
            });
        };
        /**
         * Adds a weight variable to the layer.
         *
         * @param name Name of the new weight variable.
         * @param shape The shape of the weight.
         * @param dtype The dtype of the weight.
         * @param initializer An initializer instance.
         * @param regularizer A regularizer instance.
         * @param trainable Whether the weight should be trained via backprop or not
         *   (assuming that the layer itself is also trainable).
         * @param constraint An optional trainable.
         * @return The created weight variable.
         */
        /** @doc {heading: 'Models', 'subheading': 'Classes'} */
        Layer.prototype.addWeight = function (name, shape, dtype, initializer, regularizer, trainable, constraint) {
            // Reject duplicate weight names.
            if (this._addedWeightNames.indexOf(name) !== -1) {
                throw new ValueError("Duplicate weight name " + name + " for layer " + this.name);
            }
            this._addedWeightNames.push(name);
            if (dtype == null) {
                dtype = 'float32';
            }
            if (this.fastWeightInitDuringBuild) {
                initializer = getInitializer('zeros');
            }
            var initValue = initializer.apply(shape, dtype);
            var weight = new LayerVariable(initValue, dtype, name, trainable, constraint);
            initValue.dispose();
            // Request backend not to dispose the weights of the model on scope() exit.
            if (regularizer != null) {
                this.addLoss(function () { return regularizer.apply(weight.read()); });
            }
            if (trainable == null) {
                trainable = true;
            }
            if (trainable) {
                this._trainableWeights.push(weight);
            }
            else {
                this._nonTrainableWeights.push(weight);
            }
            return weight;
        };
        /**
         * Set the fast-weight-initialization flag.
         *
         * In cases where the initialized weight values will be immediately
         * overwritten by loaded weight values during model loading, setting
         * the flag to `true` saves unnecessary calls to potentially expensive
         * initializers and speeds up the loading process.
         *
         * @param value Target value of the flag.
         */
        Layer.prototype.setFastWeightInitDuringBuild = function (value) {
            this.fastWeightInitDuringBuild = value;
        };
        /**
         * Add losses to the layer.
         *
         * The loss may potentionally be conditional on some inputs tensors,
         * for instance activity losses are conditional on the layer's inputs.
         */
        /** @doc {heading: 'Models', 'subheading': 'Classes'} */
        Layer.prototype.addLoss = function (losses) {
            var _a;
            if (losses == null || Array.isArray(losses) && losses.length === 0) {
                return;
            }
            // Update this.losses
            losses = toList(losses);
            if (this._losses !== undefined && this._losses !== null) {
                (_a = this.losses).push.apply(_a, losses);
            }
        };
        /**
         * Computes the output shape of the layer.
         *
         * Assumes that the layer will be built to match that input shape provided.
         *
         * @param inputShape A shape (tuple of integers) or a list of shape tuples
         *   (one per output tensor of the layer). Shape tuples can include null for
         *   free dimensions, instead of an integer.
         */
        /** @doc {heading: 'Models', 'subheading': 'Classes'} */
        Layer.prototype.computeOutputShape = function (inputShape) {
            return inputShape;
        };
        /**
         * Computes an output mask tensor.
         *
         * @param inputs Tensor or list of tensors.
         * @param mask Tensor or list of tensors.
         *
         * @return null or a tensor (or list of tensors, one per output tensor of the
         * layer).
         */
        Layer.prototype.computeMask = function (inputs, mask) {
            var _this = this;
            if (!this.supportsMasking) {
                if (mask != null) {
                    if (Array.isArray(mask)) {
                        mask.forEach(function (maskElement) {
                            if (maskElement != null) {
                                throw new TypeError("Layer " + _this.name + " does not support masking, " +
                                    'but was passed an inputMask.');
                            }
                        });
                    }
                    else {
                        throw new TypeError("Layer " + this.name + " does not support masking, " +
                            'but was passed an inputMask.');
                    }
                }
                // masking not explicitly supported: return null as mask
                return null;
            }
            // if masking is explictly supported, by default
            // carry over the input mask
            return mask;
        };
        /**
         * Internal method to create an inbound node for the layer.
         *
         * @param inputTensors List of input tensors.
         * @param outputTensors List of output tensors.
         * @param inputMasks List of input masks (a mask can be a tensor, or null).
         * @param outputMasks List of output masks (a mask can be a tensor, or null).
         * @param inputShapes List of input shape tuples.
         * @param outputShapes List of output shape tuples.
         * @param kwargs Dictionary of keyword arguments that were passed to the
         *   `call` method of the layer at the call that created the node.
         */
        Layer.prototype.addInboundNode = function (inputTensors, outputTensors, inputMasks, outputMasks, inputShapes, outputShapes, kwargs) {
            if (kwargs === void 0) { kwargs = null; }
            var inputTensorList = toList(inputTensors);
            outputTensors = toList(outputTensors);
            inputMasks = toList(inputMasks);
            outputMasks = toList(outputMasks);
            inputShapes = normalizeShapeList(inputShapes);
            outputShapes = normalizeShapeList(outputShapes);
            // Collect input tensor(s) coordinates.
            var inboundLayers = [];
            var nodeIndices = [];
            var tensorIndices = [];
            for (var _i = 0, inputTensorList_1 = inputTensorList; _i < inputTensorList_1.length; _i++) {
                var x = inputTensorList_1[_i];
                /*
                 * TODO(michaelterry): Keras adds this value to tensors; it's not
                 * clear whether we'll use this or not.
                 */
                inboundLayers.push(x.sourceLayer);
                nodeIndices.push(x.nodeIndex);
                tensorIndices.push(x.tensorIndex);
            }
            // Create node, add it to inbound nodes.
            // (This call has side effects.)
            // tslint:disable-next-line:no-unused-expression
            new Node({
                outboundLayer: this,
                inboundLayers: inboundLayers,
                nodeIndices: nodeIndices,
                tensorIndices: tensorIndices,
                inputTensors: inputTensorList,
                outputTensors: outputTensors,
                inputMasks: inputMasks,
                outputMasks: outputMasks,
                inputShapes: inputShapes,
                outputShapes: outputShapes
            }, kwargs);
            // Update tensor history
            for (var i = 0; i < outputTensors.length; i++) {
                // TODO(michaelterry: _uses_learning_phase not tracked.
                outputTensors[i].sourceLayer = this;
                outputTensors[i].nodeIndex = this.inboundNodes.length - 1;
                outputTensors[i].tensorIndex = i;
            }
        };
        /**
         * Returns the config of the layer.
         *
         * A layer config is a TS dictionary (serializable)
         * containing the configuration of a layer.
         * The same layer can be reinstantiated later
         * (without its trained weights) from this configuration.
         *
         * The config of a layer does not include connectivity
         * information, nor the layer class name.  These are handled
         * by 'Container' (one layer of abstraction above).
         *
         * Porting Note: The TS dictionary follows TS naming standrds for
         * keys, and uses tfjs-layers type-safe Enums.  Serialization methods
         * should use a helper function to convert to the pythonic storage
         * standard. (see serialization_utils.convertTsToPythonic)
         *
         * @returns TS dictionary of configuration.
         */
        /** @doc {heading: 'Models', 'subheading': 'Classes'} */
        Layer.prototype.getConfig = function () {
            var config = { name: this.name, trainable: this.trainable };
            if (this.batchInputShape != null) {
                config['batchInputShape'] = this.batchInputShape;
            }
            if (this.dtype != null) {
                config['dtype'] = this.dtype;
            }
            return config;
        };
        /**
         * Dispose the weight variables that this Layer instance holds.
         *
         * @returns {number} Number of disposed variables.
         */
        Layer.prototype.disposeWeights = function () {
            this.weights.forEach(function (weight) { return weight.dispose(); });
            return this.weights.length;
        };
        Layer.prototype.assertNotDisposed = function () {
            if (this._refCount === 0) {
                throw new Error("Layer '" + this.name + "' is already disposed.");
            }
        };
        /**
         * Attempt to dispose layer's weights.
         *
         * This method decrease the reference count of the Layer object by 1.
         *
         * A Layer is reference-counted. Its reference count is incremented by 1
         * the first item its `apply()` method is called and when it becomes a part
         * of a new `Node` (through calling the `apply()`) method on a
         * `tf.SymbolicTensor`).
         *
         * If the reference count of a Layer becomes 0, all the weights will be
         * disposed and the underlying memory (e.g., the textures allocated in WebGL)
         * will be freed.
         *
         * Note: If the reference count is greater than 0 after the decrement, the
         * weights of the Layer will *not* be disposed.
         *
         * After a Layer is disposed, it cannot be used in calls such as `apply()`,
         * `getWeights()` or `setWeights()` anymore.
         *
         * @returns A DisposeResult Object with the following fields:
         *   - refCountAfterDispose: The reference count of the Container after this
         *     `dispose()` call.
         *   - numDisposedVariables: Number of `tf.Variable`s (i.e., weights) disposed
         *     during this `dispose()` call.
         * @throws {Error} If the layer is not built yet, or if the layer has already
         *   been disposed.
         */
        /** @doc {heading: 'Models', 'subheading': 'Classes'} */
        Layer.prototype.dispose = function () {
            if (!this.built) {
                throw new Error("Cannot dispose Layer " + this.name + " because it has not been " +
                    "built yet.");
            }
            if (this._refCount === null) {
                throw new Error("Cannot dispose Layer " + this.name + " because it has not been used " +
                    "yet.");
            }
            this.assertNotDisposed();
            var numDisposedVariables = 0;
            if (--this._refCount === 0) {
                numDisposedVariables = this.disposeWeights();
            }
            return { refCountAfterDispose: this._refCount, numDisposedVariables: numDisposedVariables };
        };
        return Layer;
    }(tfc.serialization.Serializable));
    /**
     * Collects the input shape(s) of a list of `tf.Tensor`s or
     * `tf.SymbolicTensor`s.
     *
     * TODO(michaelterry): Update PyKeras docs (backport).
     *
     * @param inputTensors List of input tensors (or single input tensor).
     *
     * @return List of shape tuples (or single tuple), one tuple per input.
     */
    function collectInputShape(inputTensors) {
        inputTensors =
            toList(inputTensors);
        var shapes = [];
        for (var _i = 0, inputTensors_1 = inputTensors; _i < inputTensors_1.length; _i++) {
            var x = inputTensors_1[_i];
            shapes.push(x.shape);
        }
        return singletonOrArray(shapes);
    }
    /**
     * Guesses output dtype based on inputs.
     *
     * At present, just returns 'float32' for any input.
     *
     * @param inputTensors List of input tensors (or single input tensor).
     *
     * @return The guessed DType. At present, always returns 'float32'.
     */
    function guessOutputDType(inputTensors) {
        return 'float32';
    }
    /**
     * Returns the list of input tensors necessary to compute `tensor`.
     *
     * Output will always be a list of tensors (potentially with 1 element).
     *
     * @param tensor The tensor to start from.
     * @param layer Origin layer of the tensor.
     * @param nodeIndex Origin node index of the tensor.
     *
     * @return Array of input tensors.
     */
    function getSourceInputs(tensor, layer, nodeIndex) {
        if (layer == null || (nodeIndex != null && nodeIndex > 0)) {
            layer = tensor.sourceLayer;
            nodeIndex = tensor.nodeIndex;
        }
        if (layer.inboundNodes.length === 0) {
            return [tensor];
        }
        else {
            var node = layer.inboundNodes[nodeIndex];
            if (node.inboundLayers.length === 0) {
                return node.inputTensors;
            }
            else {
                var sourceTensors = [];
                for (var i = 0; i < node.inboundLayers.length; i++) {
                    var x = node.inputTensors[i];
                    var layer_1 = node.inboundLayers[i];
                    var nodeIndex_1 = node.nodeIndices[i];
                    var previousSources = getSourceInputs(x, layer_1, nodeIndex_1);
                    // Avoid input redundancy.
                    for (var _i = 0, previousSources_1 = previousSources; _i < previousSources_1.length; _i++) {
                        var x_1 = previousSources_1[_i];
                        if (sourceTensors.indexOf(x_1) === -1) {
                            sourceTensors.push(x_1);
                        }
                    }
                }
                return sourceTensors;
            }
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    var InputLayer = /** @class */ (function (_super) {
        __extends(InputLayer, _super);
        function InputLayer(args) {
            var _this = _super.call(this, {
                dtype: args.dtype,
                name: args.name != null ? args.name : getUid('input').toString()
            }) || this;
            // Normalize config.batchSize and config.sparse
            if (args.batchSize == null) {
                args.batchSize = null;
            }
            if (args.sparse == null) {
                args.sparse = false;
            }
            _this.trainable = false;
            _this.built = true;
            _this.sparse = args.sparse;
            if (args.inputShape != null && args.batchInputShape != null) {
                throw new ValueError('Only provide the inputShape OR ' +
                    'batchInputShape argument to inputLayer, not both at the same time.');
            }
            var batchInputShape = args.batchInputShape;
            if (batchInputShape == null) {
                if (args.inputShape == null) {
                    throw new ValueError('An InputLayer should be passed either a ' +
                        '`batchInputShape` or an `inputShape`.');
                }
                else {
                    batchInputShape = [args.batchSize].concat(args.inputShape);
                }
            }
            else {
                // TODO(michaelterry): Backport to PyKeras
                if (args.batchSize != null) {
                    throw new ValueError('Cannot specify batchSize if batchInputShape is ' +
                        'specified when creating an InputLayer.');
                }
            }
            var dtype = args.dtype || 'float32';
            _this.batchInputShape = batchInputShape;
            _this.dtype = dtype;
            // TODO(michaelterry): Backport this to PyKeras?
            _this.inputSpec = [{ shape: batchInputShape }];
            var inputTensor = new SymbolicTensor(_this.dtype, _this.batchInputShape, _this, [], {}, _this.name);
            inputTensor.nodeIndex = 0;
            inputTensor.tensorIndex = 0;
            // Create an input node to add to this.outboundNode.
            // (This call has side effects.)
            // tslint:disable-next-line:no-unused-expression
            new Node({
                outboundLayer: _this,
                inboundLayers: [],
                nodeIndices: [],
                tensorIndices: [],
                inputTensors: [inputTensor],
                outputTensors: [inputTensor],
                inputMasks: [null],
                outputMasks: [null],
                inputShapes: [batchInputShape],
                outputShapes: [batchInputShape]
            });
            return _this;
        }
        InputLayer.prototype.apply = function (inputs, kwargs) {
            throw new ValueError('Cannot pass any input to an ' +
                ("InputLayer's apply() method. InputLayer name: " + this.name));
        };
        InputLayer.prototype.dispose = function () {
            // dispose() for InputLayer is overridden as no-op.
            return { refCountAfterDispose: this._refCount, numDisposedVariables: 0 };
        };
        InputLayer.prototype.getConfig = function () {
            return {
                batchInputShape: this.batchInputShape,
                dtype: this.dtype,
                sparse: this.sparse,
                name: this.name
            };
        };
        /** @nocollapse */
        InputLayer.className = 'InputLayer';
        return InputLayer;
    }(Layer));
    tfc.serialization.registerClass(InputLayer);
    function Input(config) {
        if (config.batchShape == null && config.shape == null) {
            throw new Error('Please provide to Input either a `shape`' +
                ' or a `batchShape` argument. Note that ' +
                '`shape` does not include the batch ' +
                'dimension.');
        }
        if (config.batchShape != null && config.shape != null) {
            // TODO(michaelterry): Backport to PyKeras.
            throw new ValueError('Please provide either a `shape` or `batchShape` ' +
                'argument to Input, but not both.');
        }
        var batchShape = config.batchShape;
        if (config.shape != null && batchShape == null) {
            batchShape = [null].concat(config.shape);
        }
        var dtype = config.dtype;
        if (dtype == null) {
            dtype = 'float32';
        }
        var inputLayer = new InputLayer({
            batchInputShape: batchShape,
            name: config.name,
            dtype: dtype,
            sparse: config.sparse
        });
        var outputs = inputLayer.inboundNodes[0].outputTensors;
        return outputs[0];
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Turn any Scalar values in a Logs object into actual number values.
     *
     * @param logs The `Logs` object to be resolved in place.
     */
    function resolveScalarsInLogs(logs) {
        return __awaiter(this, void 0, void 0, function () {
            var promises, keys, scalarsToDispose, key, value, valueScalar, values, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (logs == null) {
                            return [2 /*return*/];
                        }
                        promises = [];
                        keys = [];
                        scalarsToDispose = [];
                        for (key in logs) {
                            value = logs[key];
                            if (typeof value !== 'number') {
                                valueScalar = value;
                                promises.push(valueScalar.data());
                                keys.push(key);
                                scalarsToDispose.push(valueScalar);
                            }
                        }
                        if (!(promises.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        values = _a.sent();
                        for (i = 0; i < values.length; ++i) {
                            logs[keys[i]] = values[i][0];
                        }
                        // Dispose the original scalar tensors.
                        tfc.dispose(scalarsToDispose);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Dispose all Tensors in an UnresolvedLogs object.
     *
     * @param logs An `UnresolvedLogs` object potentially containing `tf.Tensor`s in
     *   places where the values can be `tf.Tensor` or `number`.
     */
    function disposeTensorsInLogs(logs) {
        if (logs == null) {
            return;
        }
        for (var key in logs) {
            var value = logs[key];
            if (typeof value !== 'number') {
                value.dispose();
            }
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /** Verbosity logging level when fitting a model. */
    var ModelLoggingVerbosity;
    (function (ModelLoggingVerbosity) {
        ModelLoggingVerbosity[ModelLoggingVerbosity["SILENT"] = 0] = "SILENT";
        ModelLoggingVerbosity[ModelLoggingVerbosity["VERBOSE"] = 1] = "VERBOSE";
    })(ModelLoggingVerbosity || (ModelLoggingVerbosity = {}));
    /** How often to yield to the main thread when training (in ms). */
    var DEFAULT_YIELD_EVERY_MS = 125;
    /**
     * Abstract base class used to build new callbacks.
     *
     * The `logs` dictionary that callback methods take as argument will contain
     * keys for quantities relevant to the current batch or epoch.
     *
     * Currently, the `.fit()` method of the `Sequential` model class
     * will include the following quantities in the `logs` that
     * it passes to its callbacks:
     *
     * onEpochEnd: Logs include `acc` and `loss`, and optionally include `valLoss`
     *   (if validation is enabled in `fit`), and `valAcc` (if validation and
     *   accuracy monitoring are enabled).
     * onBatchBegin: Logs include `size`, the number of samples in the current
     *   batch.
     * onBatchEnd: Logs include `loss`, and optionally `acc` (if accuracy monitoring
     *   is enabled).
     */
    var BaseCallback = /** @class */ (function () {
        function BaseCallback() {
            // TODO(michaelterry): This type is a best guess.
            this.validationData = null;
        }
        BaseCallback.prototype.setParams = function (params) {
            this.params = params;
        };
        BaseCallback.prototype.onEpochBegin = function (epoch, logs) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        BaseCallback.prototype.onEpochEnd = function (epoch, logs) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        BaseCallback.prototype.onBatchBegin = function (batch, logs) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        BaseCallback.prototype.onBatchEnd = function (batch, logs) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        BaseCallback.prototype.onTrainBegin = function (logs) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        BaseCallback.prototype.onTrainEnd = function (logs) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        // LayersModel needs to call Callback.setModel(), but cannot actually depend
        // on Callback because that creates a cyclic dependency.  Providing this no-op
        // method on BaseCallback breaks the cycle: this way LayersModel can depend on
        // BaseCallback but not on Callback.  The argument is typed as `Container`
        // (the superclass of LayersModel) to avoid recapitulating the cycle. Callback
        // overrides this method and enforces that the argument is really a
        // LayersModel.
        BaseCallback.prototype.setModel = function (model) {
            // Do nothing. Use Callback instead of BaseCallback to track the model.
        };
        return BaseCallback;
    }());
    /**
     * Container abstracting a list of callbacks.
     */
    var CallbackList = /** @class */ (function () {
        // TODO(cais): When the need arises, uncomment the following lines and
        // implement the queue for time values.
        // private deltaTBatch: number;
        // private deltaTsBatchBegin: Array<number>;
        // private deltaTsBatchEnd: Array<number>;
        /**
         * Constructor of CallbackList.
         * @param callbacks Array of `Callback` instances.
         * @param queueLength Queue length for keeping running statistics over
         *   callback execution time.
         */
        function CallbackList(callbacks, queueLength) {
            if (queueLength === void 0) { queueLength = 10; }
            // TODO(cais): Make use of queueLength when implementing the queue for time
            // values.
            if (callbacks == null) {
                callbacks = [];
            }
            this.callbacks = callbacks;
            this.queueLength = queueLength;
        }
        CallbackList.prototype.append = function (callback) {
            this.callbacks.push(callback);
        };
        CallbackList.prototype.setParams = function (params) {
            for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
                var callback = _a[_i];
                callback.setParams(params);
            }
        };
        CallbackList.prototype.setModel = function (model) {
            for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
                var callback = _a[_i];
                callback.setModel(model);
            }
        };
        /**
         * Called at the start of an epoch.
         * @param epoch Index of epoch.
         * @param logs Dictionary of logs.
         */
        CallbackList.prototype.onEpochBegin = function (epoch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, callback;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (logs == null) {
                                logs = {};
                            }
                            _i = 0, _a = this.callbacks;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            callback = _a[_i];
                            return [4 /*yield*/, callback.onEpochBegin(epoch, logs)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Called at the end of an epoch.
         * @param epoch Index of epoch.
         * @param logs Dictionary of logs.
         */
        CallbackList.prototype.onEpochEnd = function (epoch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, callback;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (logs == null) {
                                logs = {};
                            }
                            _i = 0, _a = this.callbacks;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            callback = _a[_i];
                            return [4 /*yield*/, callback.onEpochEnd(epoch, logs)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Called  right before processing a batch.
         * @param batch Index of batch within the current epoch.
         * @param logs Dictionary of logs.
         */
        CallbackList.prototype.onBatchBegin = function (batch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, callback;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (logs == null) {
                                logs = {};
                            }
                            _i = 0, _a = this.callbacks;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            callback = _a[_i];
                            return [4 /*yield*/, callback.onBatchBegin(batch, logs)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Called at the end of a batch.
         * @param batch Index of batch within the current epoch.
         * @param logs Dictionary of logs.
         */
        CallbackList.prototype.onBatchEnd = function (batch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, callback;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (logs == null) {
                                logs = {};
                            }
                            _i = 0, _a = this.callbacks;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            callback = _a[_i];
                            return [4 /*yield*/, callback.onBatchEnd(batch, logs)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Called at the beginning of training.
         * @param logs Dictionary of logs.
         */
        CallbackList.prototype.onTrainBegin = function (logs) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, callback;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (logs == null) {
                                logs = {};
                            }
                            _i = 0, _a = this.callbacks;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            callback = _a[_i];
                            return [4 /*yield*/, callback.onTrainBegin(logs)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Called at the end of training.
         * @param logs Dictionary of logs.
         */
        CallbackList.prototype.onTrainEnd = function (logs) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, callback;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (logs == null) {
                                logs = {};
                            }
                            _i = 0, _a = this.callbacks;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            callback = _a[_i];
                            return [4 /*yield*/, callback.onTrainEnd(logs)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return CallbackList;
    }());
    /**
     * Callback that accumulates epoch averages of metrics.
     *
     * This callback is automatically applied to every LayersModel.
     */
    var BaseLogger = /** @class */ (function (_super) {
        __extends(BaseLogger, _super);
        function BaseLogger() {
            return _super.call(this) || this;
        }
        BaseLogger.prototype.onEpochBegin = function (epoch) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.seen = 0;
                    this.totals = {};
                    return [2 /*return*/];
                });
            });
        };
        BaseLogger.prototype.onBatchEnd = function (batch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                var batchSize, _loop_1, this_1, key;
                var _this = this;
                return __generator(this, function (_a) {
                    if (logs == null) {
                        logs = {};
                    }
                    batchSize = logs['size'] == null ? 0 : logs['size'];
                    this.seen += batchSize;
                    _loop_1 = function (key) {
                        var value = logs[key];
                        if (typeof value === 'number') {
                            if (!this_1.totals.hasOwnProperty(key)) {
                                this_1.totals[key] = 0;
                            }
                            this_1.totals[key] = this_1.totals[key] + value * batchSize;
                        }
                        else {
                            var oldTotalsToDispose = void 0;
                            if (key in this_1.totals) {
                                oldTotalsToDispose = this_1.totals[key];
                            }
                            else {
                                this_1.totals[key] = 0;
                            }
                            this_1.totals[key] = tfc.tidy(function () { return tfc.add(_this.totals[key], tfc.mul(value, batchSize)); });
                            if (oldTotalsToDispose != null) {
                                oldTotalsToDispose.dispose();
                            }
                        }
                    };
                    this_1 = this;
                    for (key in logs) {
                        _loop_1(key);
                    }
                    return [2 /*return*/];
                });
            });
        };
        BaseLogger.prototype.onEpochEnd = function (epoch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                var _loop_2, this_2, _i, _a, key;
                var _this = this;
                return __generator(this, function (_b) {
                    if (logs != null) {
                        _loop_2 = function (key) {
                            if (this_2.totals[key] == null) {
                                return "continue";
                            }
                            if (typeof this_2.totals[key] === 'number') {
                                logs[key] = this_2.totals[key] / this_2.seen;
                            }
                            else {
                                tfc.tidy(function () {
                                    logs[key] = tfc.mul(tfc.div(1, _this.seen), _this.totals[key]);
                                    _this.totals[key].dispose();
                                    tfc.keep(logs[key]);
                                });
                            }
                        };
                        this_2 = this;
                        for (_i = 0, _a = this.params['metrics']; _i < _a.length; _i++) {
                            key = _a[_i];
                            _loop_2(key);
                        }
                    }
                    return [2 /*return*/];
                });
            });
        };
        return BaseLogger;
    }(BaseCallback));
    /**
     * Callback that records events into a `History` object. This callback is
     * automatically applied to every TF.js Layers model. The `History` object
     * gets returned by the `fit` method of models.
     */
    var History = /** @class */ (function (_super) {
        __extends(History, _super);
        function History() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        History.prototype.onTrainBegin = function (logs) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.epoch = [];
                    this.history = {};
                    return [2 /*return*/];
                });
            });
        };
        History.prototype.onEpochEnd = function (epoch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                var key;
                return __generator(this, function (_a) {
                    if (logs == null) {
                        logs = {};
                    }
                    this.epoch.push(epoch);
                    for (key in logs) {
                        if (this.history[key] == null) {
                            this.history[key] = [];
                        }
                        this.history[key].push(logs[key]);
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Await the values of all losses and metrics.
         */
        History.prototype.syncData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var promises, keys, indices, key, valueArray, i, valueScalar, values, n, tensorToDispose;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            promises = [];
                            keys = [];
                            indices = [];
                            for (key in this.history) {
                                valueArray = this.history[key];
                                for (i = 0; i < valueArray.length; ++i) {
                                    if (typeof valueArray[i] !== 'number') {
                                        valueScalar = valueArray[i];
                                        promises.push(valueScalar.data());
                                        keys.push(key);
                                        indices.push(i);
                                    }
                                }
                            }
                            return [4 /*yield*/, Promise.all(promises)];
                        case 1:
                            values = _a.sent();
                            for (n = 0; n < values.length; ++n) {
                                tensorToDispose = this.history[keys[n]][indices[n]];
                                tensorToDispose.dispose();
                                this.history[keys[n]][indices[n]] = values[n][0];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        return History;
    }(BaseCallback));
    /**
     * Custom callback for training.
     */
    var CustomCallback = /** @class */ (function (_super) {
        __extends(CustomCallback, _super);
        function CustomCallback(args, yieldEvery) {
            var _this = _super.call(this) || this;
            _this.currentEpoch = 0;
            _this.yieldEvery = yieldEvery || 'auto';
            if (_this.yieldEvery === 'auto') {
                _this.yieldEvery = DEFAULT_YIELD_EVERY_MS;
            }
            if (_this.yieldEvery === 'never' && args.onYield != null) {
                throw new Error('yieldEvery is `never` but you provided an `onYield` callback. ' +
                    'Either change `yieldEvery` or remove the callback');
            }
            if (tfc.util.isNumber(_this.yieldEvery)) {
                // Decorate `maybeWait` so it will be called at most once every
                // `yieldEvery` ms.
                _this.maybeWait = debounce(_this.maybeWait.bind(_this), _this.yieldEvery);
            }
            _this.trainBegin = args.onTrainBegin;
            _this.trainEnd = args.onTrainEnd;
            _this.epochBegin = args.onEpochBegin;
            _this.epochEnd = args.onEpochEnd;
            _this.batchBegin = args.onBatchBegin;
            _this.batchEnd = args.onBatchEnd;
            _this.yield = args.onYield;
            return _this;
        }
        CustomCallback.prototype.maybeWait = function (epoch, batch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                var ps;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ps = [];
                            if (!(this.yield != null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, resolveScalarsInLogs(logs)];
                        case 1:
                            _a.sent();
                            ps.push(this.yield(epoch, batch, logs));
                            _a.label = 2;
                        case 2:
                            ps.push(tfc.nextFrame());
                            return [4 /*yield*/, Promise.all(ps)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CustomCallback.prototype.onEpochBegin = function (epoch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.currentEpoch = epoch;
                            if (!(this.epochBegin != null)) return [3 /*break*/, 3];
                            return [4 /*yield*/, resolveScalarsInLogs(logs)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.epochBegin(epoch, logs)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        CustomCallback.prototype.onEpochEnd = function (epoch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                var ps;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ps = [];
                            if (!(this.epochEnd != null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, resolveScalarsInLogs(logs)];
                        case 1:
                            _a.sent();
                            ps.push(this.epochEnd(epoch, logs));
                            _a.label = 2;
                        case 2:
                            if (this.yieldEvery === 'epoch') {
                                ps.push(tfc.nextFrame());
                            }
                            return [4 /*yield*/, Promise.all(ps)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CustomCallback.prototype.onBatchBegin = function (batch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.batchBegin != null)) return [3 /*break*/, 3];
                            return [4 /*yield*/, resolveScalarsInLogs(logs)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.batchBegin(batch, logs)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        CustomCallback.prototype.onBatchEnd = function (batch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                var ps;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ps = [];
                            if (!(this.batchEnd != null)) return [3 /*break*/, 2];
                            return [4 /*yield*/, resolveScalarsInLogs(logs)];
                        case 1:
                            _a.sent();
                            ps.push(this.batchEnd(batch, logs));
                            _a.label = 2;
                        case 2:
                            if (this.yieldEvery === 'batch') {
                                ps.push(tfc.nextFrame());
                            }
                            else if (tfc.util.isNumber(this.yieldEvery)) {
                                ps.push(this.maybeWait(this.currentEpoch, batch, logs));
                            }
                            return [4 /*yield*/, Promise.all(ps)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CustomCallback.prototype.onTrainBegin = function (logs) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.trainBegin != null)) return [3 /*break*/, 3];
                            return [4 /*yield*/, resolveScalarsInLogs(logs)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.trainBegin(logs)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        CustomCallback.prototype.onTrainEnd = function (logs) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.trainEnd != null)) return [3 /*break*/, 3];
                            return [4 /*yield*/, resolveScalarsInLogs(logs)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.trainEnd(logs)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return CustomCallback;
    }(BaseCallback));
    /**
     * Standardize callbacks or configurations of them to an Array of callbacks.
     */
    function standardizeCallbacks(callbacks, yieldEvery) {
        if (callbacks == null) {
            callbacks = {};
        }
        if (callbacks instanceof BaseCallback) {
            return [callbacks];
        }
        if (Array.isArray(callbacks) && callbacks[0] instanceof BaseCallback) {
            return callbacks;
        }
        // Convert custom callback configs to custom callback objects.
        var callbackConfigs = toList(callbacks);
        return callbackConfigs.map(function (callbackConfig) { return new CustomCallback(callbackConfig, yieldEvery); });
    }
    /**
     * A global registry for callback constructors to be used during
     * LayersModel.fit().
     */
    var CallbackConstructorRegistry = /** @class */ (function () {
        /**
         * Blocks public access to constructor.
         */
        function CallbackConstructorRegistry() {
        }
        /**
         * Register a tf.LayersModel.fit() callback constructor.
         *
         * The registered callback constructor will be used to instantiate
         * callbacks for every tf.LayersModel.fit() call afterwards.
         *
         * @param verbosityLevel Level of verbosity at which the `callbackConstructor`
         *   is to be reigstered.
         * @param callbackConstructor A no-arg constructor for `tf.Callback`.
         * @throws Error, if the same callbackConstructor has been registered before,
         *   either at the same or a different `verbosityLevel`.
         */
        CallbackConstructorRegistry.registerCallbackConstructor = function (verbosityLevel, callbackConstructor) {
            tfc.util.assert(verbosityLevel >= 0 && Number.isInteger(verbosityLevel), function () { return "Verbosity level is expected to be an integer >= 0, " +
                ("but got " + verbosityLevel); });
            CallbackConstructorRegistry.checkForDuplicate(callbackConstructor);
            if (CallbackConstructorRegistry.constructors[verbosityLevel] == null) {
                CallbackConstructorRegistry.constructors[verbosityLevel] = [];
            }
            CallbackConstructorRegistry.constructors[verbosityLevel].push(callbackConstructor);
        };
        CallbackConstructorRegistry.checkForDuplicate = function (callbackConstructor) {
            for (var levelName in CallbackConstructorRegistry.constructors) {
                var constructors = CallbackConstructorRegistry.constructors[+levelName];
                constructors.forEach(function (ctor) {
                    if (ctor === callbackConstructor) {
                        throw new ValueError('Duplicate callback constructor.');
                    }
                });
            }
        };
        /**
         * Clear all registered callback constructors.
         */
        CallbackConstructorRegistry.clear = function () {
            CallbackConstructorRegistry.constructors = {};
        };
        /**
         * Create callbacks using the registered callback constructors.
         *
         * Given `verbosityLevel`, all constructors registered at that level or above
         * will be called and the instantiated callbacks will be used.
         *
         * @param verbosityLevel: Level of verbosity.
         */
        CallbackConstructorRegistry.createCallbacks = function (verbosityLevel) {
            var constructors = [];
            for (var levelName in CallbackConstructorRegistry.constructors) {
                var level = +levelName;
                if (verbosityLevel >= level) {
                    constructors.push.apply(constructors, CallbackConstructorRegistry.constructors[level]);
                }
            }
            return constructors.map(function (ctor) { return new ctor(); });
        };
        CallbackConstructorRegistry.constructors = {};
        return CallbackConstructorRegistry;
    }());
    function configureCallbacks(callbacks, verbose, epochs, initialEpoch, numTrainSamples, stepsPerEpoch, batchSize, doValidation, callbackMetrics) {
        var history = new History();
        var actualCallbacks = [
            new BaseLogger()
        ].concat(CallbackConstructorRegistry.createCallbacks(verbose));
        if (callbacks != null) {
            actualCallbacks.push.apply(actualCallbacks, callbacks);
        }
        actualCallbacks.push(history);
        var callbackList = new CallbackList(actualCallbacks);
        // TODO(cais): Figure out when this LayersModel instance can have a
        // dynamically
        //   set property called 'callback_model' as in PyKeras.
        callbackList.setParams({
            epochs: epochs,
            initialEpoch: initialEpoch,
            samples: numTrainSamples,
            steps: stepsPerEpoch,
            batchSize: batchSize,
            verbose: verbose,
            doValidation: doValidation,
            metrics: callbackMetrics,
        });
        return { callbackList: callbackList, history: history };
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Instantiate a layer from a config dictionary.
     * @param config dict of the form {class_name: str, config: dict}
     * @param customObjects dict mapping class names (or function names)
     *   of custom (non-Keras) objects to class/functions
     * @param fastWeightInit Optional flag to use fast weight initialization
     *   during deserialization. This is applicable to cases in which
     *   the initialization will be immediately overwritten by loaded weight
     *   values. Default: `false`.
     * @returns Layer instance (may be LayersModel, Sequential, Layer...)
     */
    function deserialize(config, customObjects, fastWeightInit) {
        if (customObjects === void 0) { customObjects = {}; }
        if (fastWeightInit === void 0) { fastWeightInit = false; }
        return deserializeKerasObject(config, tfc.serialization.SerializationMap.getMap().classNameMap, customObjects, 'layer', fastWeightInit);
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Normalizes a tensor wrt the L2 norm alongside the specified axis.
     * @param x
     * @param axis Axis along which to perform normalization.
     */
    function l2Normalize(x, axis) {
        return tfc.tidy(function () {
            if (x.dtype !== 'float32') {
                x = x.asType('float32');
            }
            var squareSum = tfc.sum(square(x), axis, true);
            var epsilonTensor = tfc.fill(squareSum.shape, epsilon());
            var norm = tfc.sqrt(tfc.maximum(squareSum, epsilonTensor));
            return tfc.div(x, norm);
        });
    }
    function meanSquaredError(yTrue, yPred) {
        return tfc.tidy(function () { return tfc.mean(square(tfc.sub(yPred, yTrue)), -1); });
    }
    function meanAbsoluteError(yTrue, yPred) {
        return tfc.tidy(function () { return tfc.mean(tfc.abs(tfc.sub(yPred, yTrue)), -1); });
    }
    function meanAbsolutePercentageError(yTrue, yPred) {
        return tfc.tidy(function () {
            var diff = tfc.sub(yTrue, yPred);
            var clippedTrue = tfc.clipByValue(tfc.abs(yTrue), epsilon(), Number.MAX_VALUE);
            var absResult = tfc.abs(tfc.div(diff, clippedTrue));
            return tfc.mul(100, tfc.mean(absResult, -1));
        });
    }
    function meanSquaredLogarithmicError(yTrue, yPred) {
        return tfc.tidy(function () {
            var clippedPred = tfc.clipByValue(yPred, epsilon(), Number.MAX_VALUE);
            var firstLog = tfc.log(tfc.add(1, clippedPred));
            var clippedTrue = tfc.clipByValue(yTrue, epsilon(), Number.MAX_VALUE);
            var secondLog = tfc.log(tfc.add(1, clippedTrue));
            return tfc.mean(square(tfc.sub(firstLog, secondLog)), -1);
        });
    }
    function squaredHinge(yTrue, yPred) {
        return tfc.tidy(function () {
            var maxResult = tfc.maximum(0, tfc.sub(1, tfc.mul(yTrue, yPred)));
            return tfc.mean(square(maxResult), -1);
        });
    }
    function hinge(yTrue, yPred) {
        return tfc.tidy(function () {
            var maxResult = tfc.maximum(0, tfc.sub(1, tfc.mul(yTrue, yPred)));
            return tfc.mean(maxResult, -1);
        });
    }
    function categoricalHinge(yTrue, yPred) {
        return tfc.tidy(function () {
            var pos = tfc.sum(tfc.mul(yTrue, yPred), -1);
            var neg = tfc.max(tfc.mul(tfc.sub(1, yTrue), yPred), -1);
            return tfc.maximum(0, tfc.add(1, tfc.sub(neg, pos)));
        });
    }
    /**
     * Logarithm of the hyperbolic cosine of the prediction error.
     *
     * `log(cosh(x))` is approximately equal to `(x ** 2) / 2` for small `x` and
     * to `abs(x) - log(2)` for large `x`. This means that 'logcosh' works mostly
     * like the mean squared error, but will not be so strongly affected by the
     * occasional wildly incorrect prediction.
     */
    function logcosh(yTrue, yPred) {
        return tfc.tidy(function () {
            var log2 = Math.log(2);
            var predictionDiff = tfc.sub(yPred, yTrue);
            var logcoshResult = tfc.sub(tfc.add(predictionDiff, tfc.softplus(tfc.mul(-2, predictionDiff))), log2);
            return tfc.mean(logcoshResult, -1);
        });
    }
    function categoricalCrossentropy(target, output, fromLogits) {
        if (fromLogits === void 0) { fromLogits = false; }
        return tfc.tidy(function () {
            if (fromLogits) {
                output = tfc.softmax(output);
            }
            else {
                // scale preds so that the class probabilities of each sample sum to 1.
                var outputSum = tfc.sum(output, output.shape.length - 1, true);
                output = tfc.div(output, outputSum);
            }
            output = tfc.clipByValue(output, epsilon(), 1 - epsilon());
            return tfc.neg(tfc.sum(tfc.mul(target.toFloat(), tfc.log(output)), output.shape.length - 1));
        });
    }
    /**
     * Categorical crossentropy with integer targets.
     *
     * @param target An integer tensor.
     * @param output A tensor resulting from a softmax (unless `fromLogits` is
     *  `true`, in which case `output` is expected to be the logits).
     * @param fromLogits Boolean, whether `output` is the result of a softmax, or is
     *   a tensor of logits.
     */
    function sparseCategoricalCrossentropy(target, output) {
        return tfc.tidy(function () {
            var flatTarget = tfc.floor(flatten(target)).toInt();
            output = tfc.clipByValue(output, epsilon(), 1 - epsilon());
            var outputShape = output.shape;
            var oneHotTarget = tfc.oneHot(flatTarget, outputShape[outputShape.length - 1])
                .reshape(outputShape);
            var fromLogits = false;
            return categoricalCrossentropy(oneHotTarget, output, fromLogits);
        });
    }
    /**
     * From TensorFlow's implementation in nn_impl.py:
     *
     * For brevity, let `x = logits`, `z = labels`.  The logistic loss is
     *      z * -log(sigmoid(x)) + (1 - z) * -log(1 - sigmoid(x))
     *    = z * -log(1 / (1 + exp(-x))) + (1 - z) * -log(exp(-x) / (1 + exp(-x)))
     *    = z * log(1 + exp(-x)) + (1 - z) * (-log(exp(-x)) + log(1 + exp(-x)))
     *    = z * log(1 + exp(-x)) + (1 - z) * (x + log(1 + exp(-x))
     *    = (1 - z) * x + log(1 + exp(-x))
     *    = x - x * z + log(1 + exp(-x))
     * For x < 0, to avoid overflow in exp(-x), we reformulate the above
     *      x - x * z + log(1 + exp(-x))
     *    = log(exp(x)) - x * z + log(1 + exp(-x))
     *    = - x * z + log(1 + exp(x))
     * Hence, to ensure stability and avoid overflow, the implementation uses this
     * equivalent formulation
     *    max(x, 0) - x * z + log(1 + exp(-abs(x)))
     *
     * @param labels The labels.
     * @param logits The logits.
     */
    function sigmoidCrossEntropyWithLogits(labels, logits) {
        if (!tfc.util.arraysEqual(labels.shape, logits.shape)) {
            throw new ValueError("logits and labels must have the same shape, but got shapes " +
                (JSON.stringify(labels.shape) + " and " + JSON.stringify(logits.shape)));
        }
        return tfc.tidy(function () {
            // The logistic loss formula from above is
            //   x - x * z + log(1 + exp(-x))
            // For x < 0, a more numerically stable formula is
            //   -x * z + log(1 + exp(x))
            // Note that these two expressions can be combined into the following:
            //   max(x, 0) - x * z + log(1 + exp(-abs(x)))
            var reluLogits = logits.relu();
            var negAbsLogits = logits.abs().neg();
            return reluLogits.sub(logits.mul(labels)).add(negAbsLogits.exp().log1p());
        });
    }
    function binaryCrossentropy(yTrue, yPred) {
        return tfc.tidy(function () {
            var y;
            y = tfc.clipByValue(yPred, epsilon(), 1 - epsilon());
            y = tfc.log(tfc.div(y, tfc.sub(1, y)));
            return tfc.mean(sigmoidCrossEntropyWithLogits(yTrue, y), -1);
        });
    }
    function kullbackLeiblerDivergence(yTrue, yPred) {
        return tfc.tidy(function () {
            var clippedTrue = tfc.clipByValue(yTrue, epsilon(), 1);
            var clippedPred = tfc.clipByValue(yPred, epsilon(), 1);
            return tfc.sum(tfc.mul(yTrue, tfc.log(tfc.div(clippedTrue, clippedPred))), -1);
        });
    }
    function poisson(yTrue, yPred) {
        return tfc.tidy(function () {
            var logPred = tfc.log(tfc.add(epsilon(), yPred));
            return tfc.mean(tfc.sub(yPred, tfc.mul(yTrue, logPred)), -1);
        });
    }
    function cosineProximity(yTrue, yPred) {
        return tfc.tidy(function () {
            var trueNormalized = l2Normalize(yTrue, -1);
            var predNormalized = l2Normalize(yPred, -1);
            var trueXPred = tfc.mul(trueNormalized, predNormalized);
            return tfc.neg(tfc.sum(trueXPred, -1));
        });
    }
    // TODO(michaelterry): Add deserialize() function.
    var lossesMap = {
        meanSquaredError: meanSquaredError,
        meanAbsoluteError: meanAbsoluteError,
        meanAbsolutePercentageError: meanAbsolutePercentageError,
        meanSquaredLogarithmicError: meanSquaredLogarithmicError,
        squaredHinge: squaredHinge,
        hinge: hinge,
        categoricalHinge: categoricalHinge,
        logcosh: logcosh,
        categoricalCrossentropy: categoricalCrossentropy,
        sparseCategoricalCrossentropy: sparseCategoricalCrossentropy,
        binaryCrossentropy: binaryCrossentropy,
        kullbackLeiblerDivergence: kullbackLeiblerDivergence,
        poisson: poisson,
        cosineProximity: cosineProximity
    };
    // Porting note: This diverges from the PyKeras implementation and may need to
    // change based on (de)serialization requirements.
    function get(identifierOrFn) {
        if (typeof identifierOrFn === 'string') {
            if (identifierOrFn in lossesMap) {
                return lossesMap[identifierOrFn];
            }
            var errMsg = "Unknown loss " + identifierOrFn;
            if (identifierOrFn.toLowerCase().includes('softmaxcrossentropy')) {
                errMsg = "Unknown loss " + identifierOrFn + ". " +
                    'Use "categoricalCrossentropy" as the string name for ' +
                    'tf.losses.softmaxCrossEntropy';
            }
            throw new ValueError(errMsg);
        }
        else {
            return identifierOrFn;
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    function binaryAccuracy(yTrue, yPred) {
        return tfc.tidy(function () {
            var threshold = tfc.mul(.5, tfc.onesLike(yPred));
            var yPredThresholded = cast(tfc.greater(yPred, threshold), yTrue.dtype);
            return tfc.mean(tfc.equal(yTrue, yPredThresholded), -1);
        });
    }
    function categoricalAccuracy(yTrue, yPred) {
        return tfc.tidy(function () { return cast(tfc.equal(tfc.argMax(yTrue, -1), tfc.argMax(yPred, -1)), 'float32'); });
    }
    function truePositives(yTrue, yPred) {
        return tfc.tidy(function () {
            return tfc.logicalAnd(yTrue.equal(1), yPred.equal(1)).sum().cast('float32');
        });
    }
    function falseNegatives(yTrue, yPred) {
        return tfc.tidy(function () {
            return tfc.logicalAnd(yTrue.equal(1), yPred.equal(0)).sum().cast('float32');
        });
    }
    function falsePositives(yTrue, yPred) {
        return tfc.tidy(function () {
            return tfc.logicalAnd(yTrue.equal(0), yPred.equal(1)).sum().cast('float32');
        });
    }
    function precision(yTrue, yPred) {
        return tfc.tidy(function () {
            var tp = truePositives(yTrue, yPred);
            var fp = falsePositives(yTrue, yPred);
            var denominator = tp.add(fp);
            return tfc.where(tfc.greater(denominator, 0), tp.div(denominator), 0)
                .cast('float32');
        });
    }
    function recall(yTrue, yPred) {
        return tfc.tidy(function () {
            var tp = truePositives(yTrue, yPred);
            var fn = falseNegatives(yTrue, yPred);
            var denominator = tp.add(fn);
            return tfc.where(tfc.greater(denominator, 0), tp.div(denominator), 0)
                .cast('float32');
        });
    }
    function binaryCrossentropy$1(yTrue, yPred) {
        return binaryCrossentropy(yTrue, yPred);
    }
    function sparseCategoricalAccuracy(yTrue, yPred) {
        if (yTrue.rank === yPred.rank) {
            yTrue = yTrue.squeeze([yTrue.rank - 1]);
        }
        yPred = yPred.argMax(-1);
        if (yPred.dtype !== yTrue.dtype) {
            yPred = yPred.asType(yTrue.dtype);
        }
        return tfc.equal(yTrue, yPred).asType('float32');
    }
    // Aliases.
    var mse$1 = meanSquaredError;
    var MSE$1 = meanSquaredError;
    var mae$1 = meanAbsoluteError;
    var MAE$1 = meanAbsoluteError;
    var mape$1 = meanAbsolutePercentageError;
    var MAPE$1 = meanAbsolutePercentageError;
    var categoricalCrossentropy$1 = categoricalCrossentropy;
    var cosine$1 = cosineProximity;
    var sparseCategoricalCrossentropy$1 = sparseCategoricalCrossentropy;
    // TODO(cais, nielsene): Add serialize().
    var metricsMap = {
        binaryAccuracy: binaryAccuracy,
        categoricalAccuracy: categoricalAccuracy,
        precision: precision,
        categoricalCrossentropy: categoricalCrossentropy$1,
        sparseCategoricalCrossentropy: sparseCategoricalCrossentropy$1,
        mse: mse$1,
        MSE: MSE$1,
        mae: mae$1,
        MAE: MAE$1,
        mape: mape$1,
        MAPE: MAPE$1,
        cosine: cosine$1
    };
    function get$1(identifier) {
        if (typeof identifier === 'string' && identifier in metricsMap) {
            return metricsMap[identifier];
        }
        else if (typeof identifier !== 'string' && identifier != null) {
            return identifier;
        }
        else {
            throw new ValueError("Unknown metric " + identifier);
        }
    }
    /**
     * Get the shortcut function name.
     *
     * If the fn name is a string,
     *   directly return the string name.
     * If the function is included in metricsMap or lossesMap,
     *   return key of the map.
     *   - If the function relative to multiple keys,
     *     return the first found key as the function name.
     *   - If the function exists in both lossesMap and metricsMap,
     *     search lossesMap first.
     * If the function is not included in metricsMap or lossesMap,
     *   return the function name.
     *
     * @param fn loss function, metric function, or short cut name.
     * @returns Loss or Metric name in string.
     */
    function getLossOrMetricName(fn) {
        assert(fn !== null, "Unknown LossOrMetricFn " + fn);
        if (typeof fn === 'string') {
            return fn;
        }
        else {
            var fnName = void 0;
            for (var _i = 0, _a = Object.keys(lossesMap); _i < _a.length; _i++) {
                var key = _a[_i];
                if (lossesMap[key] === fn) {
                    fnName = key;
                    break;
                }
            }
            if (fnName !== undefined) {
                return fnName;
            }
            for (var _b = 0, _c = Object.keys(metricsMap); _b < _c.length; _b++) {
                var key = _c[_b];
                if (metricsMap[key] === fn) {
                    fnName = key;
                    break;
                }
            }
            if (fnName !== undefined) {
                return fnName;
            }
            return fn.name;
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    // Add (de)serialize()
    // Porting note: This diverges from the PyKeras implementation and may need to
    // change based on (de)serialization requirements.
    function getOptimizer(identifier) {
        var optimizerMap = {
            'Adagrad': function () { return tfc.train.adagrad(0.01); },
            'Adadelta': function () { return tfc.train.adadelta(1, 0.95, epsilon()); },
            'Adam': function () { return tfc.train.adam(0.001, 0.9, 0.999, epsilon()); },
            'Adamax': function () { return tfc.train.adamax(0.002, 0.9, 0.999, epsilon(), 0); },
            'RMSProp': function () { return tfc.train.rmsprop(0.001, 0.9, 0, epsilon()); },
            'SGD': function () { return tfc.train.sgd(0.01); }
        };
        optimizerMap['adagrad'] = optimizerMap['Adagrad'];
        optimizerMap['adadelta'] = optimizerMap['Adadelta'];
        optimizerMap['adam'] = optimizerMap['Adam'];
        optimizerMap['adamax'] = optimizerMap['Adamax'];
        optimizerMap['rmsprop'] = optimizerMap['RMSProp'];
        optimizerMap['sgd'] = optimizerMap['SGD'];
        if (identifier in optimizerMap) {
            return optimizerMap[identifier]();
        }
        throw new ValueError("Unknown Optimizer " + identifier);
    }

    /**
     * @license
     * Copyright 2019 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /** Utility functions related to user-defined metadata. */
    // Maximum recommended serialized size for user-defined metadata.
    // Beyond this limit, a warning message will be printed during model loading and
    // saving.
    var MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH = 1 * 1024 * 1024;
    /**
     * Check validity of user-defined metadata.
     *
     * @param userDefinedMetadata
     * @param modelName Name of the model that the user-defined metadata belongs to.
     *   Used during construction of error messages.
     * @param checkSize Whether to check the size of the metadata is under
     *   recommended limit. Default: `false`. If `true`, will try stringify the
     *   JSON object and print a console warning if the serialzied size is above the
     *   limit.
     * @throws Error if `userDefinedMetadata` is not a plain JSON object.
     */
    function checkUserDefinedMetadata(userDefinedMetadata, modelName, checkSize) {
        if (checkSize === void 0) { checkSize = false; }
        if (userDefinedMetadata == null ||
            typeof userDefinedMetadata !== 'object' ||
            Object.getPrototypeOf(userDefinedMetadata) !== Object.prototype ||
            !plainObjectCheck(userDefinedMetadata)) {
            throw new Error('User-defined metadata is expected to be a JSON object, but is not.');
        }
        if (checkSize) {
            var out = JSON.stringify(userDefinedMetadata);
            if (out.length > MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH) {
                console.warn("User-defined metadata of model \"" + modelName + "\" is too large in " +
                    ("size (length=" + out.length + " when serialized). It is not ") +
                    "recommended to store such large objects in user-defined metadata. " +
                    "Please make sure its serialized length is <= " +
                    (MAX_USER_DEFINED_METADATA_SERIALIZED_LENGTH + "."));
            }
        }
    }
    /**
     * Check if an input is plain JSON object or any valid subfield of it.
     *
     * @param x The input to be checked.
     * @param assertObject Whether to assert `x` is a JSON object, i.e., reject
     *   cases of arrays and primitives.
     * @return Returns `true` if and only if `x` is a plain JSON object,
     *   a JSON-valid primitive including string, number, boolean and null,
     *   or an array of the said types.
     */
    // tslint:disable-next-line:no-any
    function plainObjectCheck(x) {
        if (x === null) {
            // Note: typeof `null` is 'object', and `null` is valid in JSON.
            return true;
        }
        else if (typeof x === 'object') {
            if (Object.getPrototypeOf(x) === Object.prototype) {
                // `x` is a JavaScript object and its prototype is Object.
                var keys = Object.keys(x);
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var key = keys_1[_i];
                    if (typeof key !== 'string') {
                        // JSON keys must be strings.
                        return false;
                    }
                    if (!plainObjectCheck(x[key])) { // Recursive call.
                        return false;
                    }
                }
                return true;
            }
            else {
                // `x` is a JavaScript object but its prototype is not Object.
                if (Array.isArray(x)) {
                    // `x` is a JavaScript array.
                    for (var _a = 0, x_1 = x; _a < x_1.length; _a++) {
                        var item = x_1[_a];
                        if (!plainObjectCheck(item)) { // Recursive call.
                            return false;
                        }
                    }
                    return true;
                }
                else {
                    // `x` is a JavaScript object and its prototype is not Object,
                    // and it's not an Array. I.e., it's a complex object such as
                    // `Error` and `Date`.
                    return false;
                }
            }
        }
        else {
            // `x` is not a JavaScript object or `null`.
            var xType = typeof x;
            return xType === 'string' || xType === 'number' || xType === 'boolean';
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Print the summary of a LayersModel object.
     *
     * @param model tf.LayersModel instance.
     * @param lineLength Total length of printed lines. Set this to adapt to the
     *   display to different terminal or console sizes.
     * @param positions Relative or absolute positions of log elements in each
     *   line. Each number corresponds to right-most (i.e., ending) position of a
     *   column.
     *   If not provided, defaults to `[0.45, 0.85, 1]` for sequential-like
     *   models and `[0.33, 0.55, 0.67, 1]` for non-sequential like models.
     * @param printFn Print function to use.
     *   It will be called on each line of the summary. You can provide a custom
     *   function in order to capture the string summary. Defaults to `console.log`.
     */
    function printSummary(model, lineLength, positions, 
    // tslint:disable-next-line:no-any
    printFn) {
        if (printFn === void 0) { printFn = console.log; }
        var sequentialLike = isModelSequentialLike(model);
        // Header names for different log elements.
        var toDisplay = ['Layer (type)', 'Output shape', 'Param #'];
        if (sequentialLike) {
            lineLength = lineLength || 65;
            positions = positions || [0.45, 0.85, 1];
        }
        else {
            lineLength = lineLength || 98;
            positions = positions || [0.33, 0.55, 0.67, 1];
            // Header names for different log elements.
        }
        if (positions[positions.length - 1] <= 1) {
            // `positions` is relative. Convert it to absolute positioning.
            positions = positions.map(function (p) { return Math.floor(lineLength * p); });
        }
        var relevantNodes;
        if (!sequentialLike) {
            toDisplay.push('Receives inputs');
            relevantNodes = [];
            for (var depth in model.nodesByDepth) {
                relevantNodes.push.apply(relevantNodes, model.nodesByDepth[depth]);
            }
        }
        printFn('_'.repeat(lineLength));
        printRow(toDisplay, positions, printFn);
        printFn('='.repeat(lineLength));
        var layers = model.layers;
        for (var i = 0; i < layers.length; ++i) {
            if (sequentialLike) {
                printLayerSummary(layers[i], positions, printFn);
            }
            else {
                printLayerSummaryWithConnections(layers[i], positions, relevantNodes, printFn);
            }
            printFn((i === layers.length - 1 ? '=' : '_').repeat(lineLength));
        }
        // tslint:disable-next-line:no-any
        model.checkTrainableWeightsConsistency();
        var trainableCount = countTrainableParams(model);
        var nonTrainableCount = countParamsInWeights(model.nonTrainableWeights);
        printFn("Total params: " + (trainableCount + nonTrainableCount));
        printFn("Trainable params: " + trainableCount);
        printFn("Non-trainable params: " + nonTrainableCount);
        printFn('_'.repeat(lineLength));
    }
    function countTrainableParams(model) {
        var trainableCount;
        // tslint:disable:no-any
        if (model.collectedTrainableWeights != null) {
            trainableCount =
                countParamsInWeights(model.collectedTrainableWeights);
        }
        else {
            trainableCount = countParamsInWeights(model.trainableWeights);
        }
        // tslint:enable:no-any
        return trainableCount;
    }
    function isModelSequentialLike(model) {
        var sequentialLike = true;
        var nodesByDepth = [];
        var nodes = [];
        for (var depth in model.nodesByDepth) {
            nodesByDepth.push(model.nodesByDepth[depth]);
        }
        for (var _i = 0, nodesByDepth_1 = nodesByDepth; _i < nodesByDepth_1.length; _i++) {
            var depthNodes = nodesByDepth_1[_i];
            if (depthNodes.length > 1 ||
                depthNodes.length === 1 && depthNodes[0].inboundLayers.length > 1) {
                sequentialLike = false;
                break;
            }
            nodes.push.apply(nodes, depthNodes);
        }
        if (sequentialLike) {
            // Search for shared layers.
            for (var _a = 0, _b = model.layers; _a < _b.length; _a++) {
                var layer = _b[_a];
                var flag = false;
                for (var _c = 0, _d = layer.inboundNodes; _c < _d.length; _c++) {
                    var node = _d[_c];
                    if (nodes.indexOf(node) !== -1) {
                        if (flag) {
                            sequentialLike = false;
                            break;
                        }
                        else {
                            flag = true;
                        }
                    }
                }
                if (!sequentialLike) {
                    break;
                }
            }
        }
        return sequentialLike;
    }
    function printRow(fields, positions, 
    // tslint:disable-next-line:no-any
    printFn) {
        if (printFn === void 0) { printFn = console.log; }
        var line = '';
        for (var i = 0; i < fields.length; ++i) {
            if (i > 0) {
                line = line.slice(0, line.length - 1) + ' ';
            }
            line += fields[i];
            line = line.slice(0, positions[i]);
            line += ' '.repeat(positions[i] - line.length);
        }
        printFn(line);
    }
    /**
     * Prints a summary for a single Layer, without connectivity information.
     *
     * @param layer: Layer instance to print.
     */
    function printLayerSummary(layer, positions, 
    // tslint:disable-next-line:no-any
    printFn) {
        var outputShape;
        try {
            outputShape = JSON.stringify(layer.outputShape);
        }
        catch (err) {
            outputShape = 'multiple';
        }
        var name = layer.name;
        var className = layer.getClassName();
        var fields = [name + " (" + className + ")", outputShape, layer.countParams().toString()];
        printRow(fields, positions, printFn);
    }
    /**
     * Prints a summary for a single Layer, with connectivity information.
     */
    function printLayerSummaryWithConnections(layer, positions, relevantNodes, 
    // tslint:disable-next-line:no-any
    printFn) {
        var outputShape;
        try {
            outputShape = JSON.stringify(layer.outputShape);
        }
        catch (err) {
            outputShape = 'multiple';
        }
        var connections = [];
        for (var _i = 0, _a = layer.inboundNodes; _i < _a.length; _i++) {
            var node = _a[_i];
            if (relevantNodes != null && relevantNodes.length > 0 &&
                relevantNodes.indexOf(node) === -1) {
                continue;
            }
            for (var i = 0; i < node.inboundLayers.length; ++i) {
                var inboundLayer = node.inboundLayers[i].name;
                var inboundLayerIndex = node.nodeIndices[i];
                var inboundTensorIndex = node.tensorIndices[i];
                connections.push(inboundLayer + "[" + inboundLayerIndex + "][" + inboundTensorIndex + "]");
            }
        }
        var name = layer.name;
        var className = layer.getClassName();
        var firstConnection = connections.length === 0 ? '' : connections[0];
        var fields = [
            name + " (" + className + ")", outputShape, layer.countParams().toString(),
            firstConnection
        ];
        printRow(fields, positions, printFn);
        for (var i = 1; i < connections.length; ++i) {
            printRow(['', '', '', connections[i]], positions, printFn);
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    // tslint:enable
    /**
     * Test whether a value in an array is the name of a LayersModel or Layer.
     * @param key The key name that the value is found under. Note that the key
     *   may not be at the level immediately above the value, if the value is in a
     *   nested array.
     * @param index Index of the value in the Array that it is found in.
     * @param value The value object.
     * @returns A boolean indicating whether value is a name.
     */
    function isArrayItemInputOrOutputName(key, index, value) {
        return (key === 'inboundNodes' || key === 'outputLayers' ||
            key === 'inputLayers') &&
            index === 0 && typeof value === 'string';
    }
    /**
     * Convert a Pythonic config object to TypeScript config object.
     * @param pythonicConfig The config object to convert.
     * @param key Optional key name of the object being converted.
     * @returns Result of the conversion.
     */
    function convertPythonicToTs(pythonicConfig, key) {
        if (pythonicConfig === null) {
            return null;
        }
        else if (typeof pythonicConfig === 'string') {
            return toCamelCase(pythonicConfig);
        }
        else if ((typeof pythonicConfig === 'number') ||
            (typeof pythonicConfig === 'boolean')) {
            return pythonicConfig;
        }
        else if (pythonicConfig instanceof Array) {
            var tsArray = [];
            var arrayLength = pythonicConfig.length;
            for (var i = 0; i < arrayLength; ++i) {
                var item = pythonicConfig[i];
                if (isArrayItemInputOrOutputName(key, i, item)) {
                    tsArray.push(item);
                }
                else {
                    tsArray.push(convertPythonicToTs(item, key));
                }
            }
            return tsArray;
        }
        else {
            var tsDict = {};
            for (var _i = 0, _a = Object.keys(pythonicConfig); _i < _a.length; _i++) {
                var pythonicKey = _a[_i];
                var pythonicValue = pythonicConfig[pythonicKey];
                if (pythonicKey === 'name' && typeof pythonicValue === 'string') {
                    // Special case the 'name' key with a string value. Name values, such as
                    // the names of LayersModel and Layer instances, should not undergo the
                    // camel-case conversion.
                    tsDict[pythonicKey] = pythonicValue;
                }
                else {
                    var tsKey = toCamelCase(pythonicKey);
                    tsDict[tsKey] = convertPythonicToTs(pythonicValue, tsKey);
                }
            }
            return tsDict;
        }
    }
    /**
     * Convert a TypeScript config object to Python config object.
     * @param tsConfig The config object to convert.
     * @param key Optional key name of the object being converted.
     * @returns Result of the conversion.
     */
    function convertTsToPythonic(tsConfig, key) {
        if (tsConfig === null || tsConfig === undefined) {
            return null;
        }
        else if (typeof tsConfig === 'string') {
            return toSnakeCase(tsConfig);
        }
        else if ((typeof tsConfig === 'number') || (typeof tsConfig === 'boolean')) {
            return tsConfig;
        }
        else if (tsConfig instanceof Array) {
            var pyArray = [];
            var arrayLength = tsConfig.length;
            for (var i = 0; i < arrayLength; ++i) {
                var item = tsConfig[i];
                if (isArrayItemInputOrOutputName(key, i, item)) {
                    pyArray.push(item);
                }
                else {
                    pyArray.push(convertTsToPythonic(item, key));
                }
            }
            return pyArray;
        }
        else {
            var pyDict = {};
            for (var _i = 0, _a = Object.keys(tsConfig); _i < _a.length; _i++) {
                var tsKey = _a[_i];
                var tsValue = tsConfig[tsKey];
                var pyKey = toSnakeCase(tsKey);
                if ((tsKey === 'name' || tsKey === 'className') &&
                    typeof tsValue === 'string') {
                    // Special case the 'name' key with a string value. Name values, such as
                    // the names of LayersModel and Layer instances, should not undergo the
                    // snake-case conversion.
                    pyDict[pyKey] = tsValue;
                }
                else {
                    pyDict[pyKey] = convertTsToPythonic(tsValue, tsKey);
                }
            }
            return pyDict;
        }
    }

    /** @license See the LICENSE file. */
    // This code is auto-generated, do not modify this file!
    var version = '1.2.8';

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Helper function to check the dtype and shape compatibility of a feed value.
     */
    function assertFeedCompatibility(key, val) {
        // Check dtype compatibility.
        if (key.dtype == null || key.dtype === val.dtype) {
            //  a.  If types match, return val tensor as is.
            return val;
        }
        try {
            //  b. Attempt to convert to expected type.
            return tfc.cast(val, key.dtype);
        }
        catch (err) {
            //  c. If conversion fails, return helpful error.
            throw new ValueError("The dtype of the feed (" + val.dtype + ") can not be cast to the dtype " +
                ("of the key '" + key.name + "' (" + key.dtype + ")."));
        }
    }
    /**
     * FeedDict: A mapping from unique SymbolicTensors to feed values for them.
     * A feed value is a concrete value represented as an `Tensor`.
     */
    var FeedDict = /** @class */ (function () {
        /**
         * Constructor, optionally does copy-construction.
         * @param feeds An Array of `Feed`s, or another `FeedDict`, in which case
         *   copy-construction will be performed.
         */
        function FeedDict(feeds) {
            this.id2Value = {};
            this.id2Mask = {};
            this.name2Id = {};
            if (feeds instanceof FeedDict) {
                for (var id in feeds.id2Value) {
                    this.id2Value[id] = feeds.id2Value[id];
                    if (id in feeds.id2Mask) {
                        this.id2Mask[id] = feeds.id2Mask[id];
                    }
                }
            }
            else {
                if (feeds == null) {
                    return;
                }
                for (var _i = 0, feeds_1 = feeds; _i < feeds_1.length; _i++) {
                    var feed = feeds_1[_i];
                    this.add(feed.key, feed.value);
                }
            }
        }
        /**
         * Add a key-value pair to the FeedDict.
         *
         * @param key The key of the feed.
         * @param value The value of the tensor feed.
         * @param mask The value of the mask feed (optional).
         * @returns This `FeedDict`.
         * @throws ValueError: If the key `SymbolicTensor` already exists in the
         *   `FeedDict`.
         */
        FeedDict.prototype.add = function (key, value, mask) {
            if (this.id2Value[key.id] == null) {
                this.id2Value[key.id] = assertFeedCompatibility(key, value);
                this.name2Id[key.name] = key.id;
                if (mask != null) {
                    this.id2Mask[key.id] = mask;
                }
            }
            else {
                throw new ValueError("Duplicate key: name=" + key.name + ", id=" + key.id);
            }
            return this;
        };
        /**
         * Add a Feed to the FeedDict.
         * @param feed The new `Feed` to add.
         * @returns This `FeedDict`.
         */
        FeedDict.prototype.addFeed = function (feed) {
            this.add(feed.key, feed.value);
        };
        /**
         * Probe whether a key already exists in the FeedDict.
         * @param key
         */
        FeedDict.prototype.hasKey = function (key) {
            return this.id2Value[key.id] != null;
        };
        /**
         * Get all the SymbolicTensor available in this FeedDict.
         */
        FeedDict.prototype.names = function () {
            return Object.keys(this.name2Id);
        };
        /**
         * Get the feed value for given key.
         * @param key The SymbolicTensor, or its name (as a string), of which the
         *     value is sought.
         * @returns If `key` exists, the corresponding feed value.
         * @throws ValueError: If `key` does not exist in this `FeedDict`.
         */
        FeedDict.prototype.getValue = function (key) {
            if (key instanceof SymbolicTensor) {
                if (this.id2Value[key.id] == null) {
                    throw new ValueError("Nonexistent key: " + key.name);
                }
                else {
                    return this.id2Value[key.id];
                }
            }
            else {
                var id = this.name2Id[key];
                if (id == null) {
                    throw new ValueError("Feed dict has no SymbolicTensor name: " + key);
                }
                return this.id2Value[id];
            }
        };
        /**
         * Get the feed mask for given key.
         * @param key The SymbolicTensor, or its name (as a string), of which the
         *     value is sought.
         * @returns If `key` exists, the corresponding feed mask.
         * @throws ValueError: If `key` does not exist in this `FeedDict`.
         */
        FeedDict.prototype.getMask = function (key) {
            if (key instanceof SymbolicTensor) {
                if (this.id2Value[key.id] == null) {
                    throw new ValueError("Nonexistent key: " + key.name);
                }
                else {
                    return this.id2Mask[key.id];
                }
            }
            else {
                var id = this.name2Id[key];
                if (id == null) {
                    throw new ValueError("Feed dict has no SymbolicTensor name: " + key);
                }
                return this.id2Mask[id];
            }
        };
        /** Dispose all mask Tensors held by this object. */
        FeedDict.prototype.disposeMasks = function () {
            if (this.id2Mask != null) {
                tfc.dispose(this.id2Mask);
            }
        };
        return FeedDict;
    }());
    // Cache for topologically sorted SymbolicTensors for given execution
    // targets (i.e., fetches).
    var cachedSorted = {};
    // Cache for recipient count maps for given execution targets (i.e., fetches).
    var cachedRecipientCounts = {};
    /**
     * Execute a SymbolicTensor by using concrete feed values.
     *
     * A `SymbolicTensor` object is a node in a computation graph of TF.js
     * Layers. The object is backed by a source layer and input
     * `SymbolicTensor`s to the source layer. This method evaluates
     * the `call()` method of the source layer, using concrete values of the
     * inputs obtained from either
     * * `feedDict`, if the input key exists in `feedDict`, or else,
     * * a recursive call to `execute()` itself.
     *
     * @param x: The `SymbolicTensor` to execute.
     * @param feedDict: The feed values, as base condition of the recursion.
     *   execution.
     * @param kwargs: Optional keyword arguments.
     * @param probe: A probe object (of interface `ExecutionProbe`) used for
     *   testing memory footprint of `execute` calls.
     * @returns Result of the execution.
     * @throws ValueError: If any `SymbolicTensor`s from `InputLayer`s
     *   encountered during the execution lacks a feed value in `feedDict`.
     */
    function execute(fetches, feedDict, kwargs, probe) {
        var training = kwargs == null ? false : kwargs['training'];
        var arrayFetches = Array.isArray(fetches);
        var fetchArray = arrayFetches ? fetches : [fetches];
        var outputNames = fetchArray.map(function (t) { return t.name; });
        var finalOutputs = [];
        var feedNames = feedDict.names();
        for (var _i = 0, outputNames_1 = outputNames; _i < outputNames_1.length; _i++) {
            var outputName = outputNames_1[_i];
            if (feedNames.indexOf(outputName) !== -1) {
                finalOutputs.push(feedDict.getValue(outputName));
            }
            else {
                finalOutputs.push(null);
            }
        }
        if (probe != null) {
            // For optional probing of memory footprint during execution.
            probe.maxNumTensors = -Infinity;
            probe.minNumTensors = Infinity;
        }
        // Check cache.
        var fetchAndFeedKey = outputNames.join(',') + '|' + feedDict.names().join(',');
        var sorted;
        var recipientCounts;
        if (cachedSorted[fetchAndFeedKey] == null) {
            // Cache doesn't contain the desired combination of fetches. Compute
            // topological sort for the combination for the first time.
            var out = getTopologicalSortAndRecipientCounts(fetchArray, feedDict);
            sorted = out.sorted;
            recipientCounts = out.recipientCounts;
            // Store results in cache for future use.
            cachedSorted[fetchAndFeedKey] = sorted;
            cachedRecipientCounts[fetchAndFeedKey] = recipientCounts;
        }
        sorted = cachedSorted[fetchAndFeedKey];
        recipientCounts = {};
        if (!training) {
            Object.assign(recipientCounts, cachedRecipientCounts[fetchAndFeedKey]);
        }
        var internalFeedDict = new FeedDict(feedDict);
        // Start iterative execution on the topologically-sorted SymbolicTensors.
        for (var i = 0; i < sorted.length; ++i) {
            if (probe != null) {
                // For optional probing of memory usage during execution.
                var numTensors = tfc.memory().numTensors;
                if (numTensors > probe.maxNumTensors) {
                    probe.maxNumTensors = numTensors;
                }
                if (numTensors < probe.minNumTensors) {
                    probe.minNumTensors = numTensors;
                }
            }
            var symbolic = sorted[i];
            var srcLayer = symbolic.sourceLayer;
            if (srcLayer instanceof InputLayer) {
                continue;
            }
            var inputValues = [];
            var inputMasks = [];
            var tensorsToDispose = [];
            var maskExists = false;
            for (var _a = 0, _b = symbolic.inputs; _a < _b.length; _a++) {
                var input = _b[_a];
                var value = internalFeedDict.getValue(input);
                var mask = internalFeedDict.getMask(input);
                inputValues.push(value);
                inputMasks.push(mask);
                if (mask != null) {
                    maskExists = true;
                }
                if (!training) {
                    recipientCounts[input.name]--;
                    if (recipientCounts[input.name] === 0 && !feedDict.hasKey(input) &&
                        outputNames.indexOf(input.name) === -1 && !value.isDisposed &&
                        input.sourceLayer.stateful !== true) {
                        tensorsToDispose.push(value);
                    }
                }
            }
            if (maskExists) {
                kwargs = kwargs || {};
                kwargs['mask'] = inputMasks[0];
            }
            var outputTensors = toList(srcLayer.apply(inputValues, kwargs));
            var outputMask = null;
            if (srcLayer.supportsMasking) {
                outputMask = srcLayer.computeMask(inputValues, inputMasks);
            }
            var layerOutputs = getNodeOutputs(symbolic);
            var outputSymbolicTensors = Array.isArray(layerOutputs) ? layerOutputs : [layerOutputs];
            for (var i_1 = 0; i_1 < outputSymbolicTensors.length; ++i_1) {
                if (!internalFeedDict.hasKey(outputSymbolicTensors[i_1])) {
                    internalFeedDict.add(outputSymbolicTensors[i_1], outputTensors[i_1], Array.isArray(outputMask) ? outputMask[0] : outputMask);
                }
                var index = outputNames.indexOf(outputSymbolicTensors[i_1].name);
                if (index !== -1) {
                    finalOutputs[index] = outputTensors[i_1];
                }
            }
            if (!training) {
                // Clean up Tensors that are no longer needed.
                tfc.dispose(tensorsToDispose);
            }
        }
        // NOTE(cais): Unlike intermediate tensors, we don't discard mask
        // tensors as we go, because these tensors are sometimes passed over a
        // series of mutliple layers, i.e., not obeying the immediate input
        // relations in the graph. If this becomes a memory-usage concern,
        // we can improve this in the future.
        internalFeedDict.disposeMasks();
        return arrayFetches ? finalOutputs : finalOutputs[0];
    }
    /**
     * Sort the `SymbolicTensor`s topologically, for an array of fetches.
     *
     * This function calls getTopologicalSortAndRecipientCountsForOneFetch and
     * merges their results.
     *
     * @param fetch The array of fetches requested. Must be a non-empty array.
     * @param feedDict The dictionary of fed values.
     * @returns sorted: Topologically-sorted array of SymbolicTensors.
     *   recipientCounts: Recipient counts for all SymbolicTensors in `sorted`.
     */
    function getTopologicalSortAndRecipientCounts(fetches, feedDict) {
        tfc.util.assert(fetches != null && fetches.length > 0, function () { return "Expected at least one fetch, got none"; });
        var finalSorted = [];
        var finalRecipientMap = {};
        if (fetches.length === 1) {
            // Special-casing 1 fetch for efficiency.
            var out = getTopologicalSortAndRecipientCountsForOneFetch(fetches[0], feedDict);
            finalSorted = out.sorted;
            finalRecipientMap = out.recipientMap;
        }
        else {
            var visited = new Set();
            for (var _i = 0, fetches_1 = fetches; _i < fetches_1.length; _i++) {
                var fetch_1 = fetches_1[_i];
                var _a = getTopologicalSortAndRecipientCountsForOneFetch(fetch_1, feedDict), sorted = _a.sorted, recipientMap = _a.recipientMap;
                // Merge sorted SymbolicTensor Arrays.
                for (var _b = 0, sorted_1 = sorted; _b < sorted_1.length; _b++) {
                    var symbolicTensor = sorted_1[_b];
                    if (!visited.has(symbolicTensor.name)) {
                        finalSorted.push(symbolicTensor);
                        visited.add(symbolicTensor.name);
                    }
                }
                var _loop_1 = function (name_1) {
                    if (finalRecipientMap[name_1] == null) {
                        finalRecipientMap[name_1] = new Set();
                    }
                    recipientMap[name_1].forEach(function (recipient) { return finalRecipientMap[name_1].add(recipient); });
                };
                // Merge recipient maps.
                for (var name_1 in recipientMap) {
                    _loop_1(name_1);
                }
            }
        }
        return {
            sorted: finalSorted,
            recipientCounts: recipientMap2Counts(finalRecipientMap)
        };
    }
    function recipientMap2Counts(recipientMap) {
        var recipientCounts = {};
        for (var name_2 in recipientMap) {
            recipientCounts[name_2] = recipientMap[name_2].size;
        }
        return recipientCounts;
    }
    /**
     * Sort the `SymbolicTensor`s topologically, for a single fetch.
     *
     * This helper function processes the upstream SymbolicTensors of a single
     * fetch.
     *
     * @param fetch The single fetch requested.
     * @param feedDict The dictionary of fed values.
     * @returns sorted: Topologically-sorted array of SymbolicTensors.
     *   recipientMap: Recipient names for all SymbolicTensors in `sorted`.
     */
    function getTopologicalSortAndRecipientCountsForOneFetch(fetch, feedDict) {
        var visited = new Set();
        var sorted = [];
        var recipientMap = {};
        // Put keys of the feedDict into visited first, so they don't have to be
        // walked. This is needed in case where there are feeds for intermediate
        // SymbolicTensors of the graph.
        for (var _i = 0, _a = feedDict.names(); _i < _a.length; _i++) {
            var key = _a[_i];
            visited.add(key);
        }
        var stack = [];
        var marks = [];
        // Initial population of stack and marks.
        stack.push(fetch);
        while (stack.length > 0) {
            var top_1 = stack[stack.length - 1];
            if (visited.has(top_1.name)) {
                stack.pop();
                continue;
            }
            var topIsMarked = marks[marks.length - 1] === stack.length - 1;
            if (top_1.inputs.length === 0 || topIsMarked) {
                // Input SymbolicTensor or all children have been visited.
                stack.pop();
                sorted.push(top_1);
                visited.add(top_1.name);
                if (topIsMarked) {
                    marks.pop();
                }
            }
            else {
                // A non-input SymbolicTensor whose upstream SymbolicTensors haven't
                // been visited yet. Push them onto the stack.
                marks.push(stack.length - 1);
                for (var _b = 0, _c = top_1.inputs; _b < _c.length; _b++) {
                    var input = _c[_b];
                    // Increment the recipient count. Note that this needs to happen
                    // regardless of whether the SymbolicTensor has been visited before.
                    if (recipientMap[input.name] == null) {
                        recipientMap[input.name] = new Set();
                    }
                    recipientMap[input.name].add(top_1.name);
                    if (visited.has(input.name)) {
                        continue; // Avoid repeated visits to the same SymbolicTensor.
                    }
                    stack.push(input);
                }
            }
        }
        return { sorted: sorted, recipientMap: recipientMap };
    }
    /**
     * Get the symbolic output tensors of the node to which a given fetch belongs.
     * @param fetch The fetched symbolic tensor.
     * @returns The Array of symbolic tensors output by the node to which `fetch`
     *   belongs.
     */
    function getNodeOutputs(fetch) {
        var layerOutputs;
        if (fetch.sourceLayer.inboundNodes.length === 1) {
            layerOutputs = fetch.sourceLayer.output;
        }
        else {
            var nodeIndex = null;
            for (var i = 0; i < fetch.sourceLayer.inboundNodes.length; ++i) {
                for (var _i = 0, _a = fetch.sourceLayer.inboundNodes[i]
                    .outputTensors; _i < _a.length; _i++) {
                    var outputTensor = _a[_i];
                    if (outputTensor.id === fetch.id) {
                        nodeIndex = i;
                        break;
                    }
                }
            }
            layerOutputs = fetch.sourceLayer.getOutputAt(nodeIndex);
        }
        return layerOutputs;
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * A Container is a directed acyclic graph of layers.
     *
     * It is the topological form of a "model". A LayersModel
     * is simply a Container with added training routines.
     *
     */
    var Container = /** @class */ (function (_super) {
        __extends(Container, _super);
        function Container(args) {
            var _this = 
            // No args passed to super's constructor.
            _super.call(this, {}) || this;
            _this.containerNodes = new Set();
            _this.name = args.name;
            if (_this.name == null) {
                var prefix = _this.getClassName().toLowerCase();
                _this.name = getUid(prefix);
            }
            _this.supportsMasking = false;
            _this.trainable_ = true;
            // TODO(michaelterry): Initialize perInputLosses/Updates here.
            // Container-specific properties.
            if (Array.isArray(args.inputs)) {
                _this.inputs = args.inputs.slice();
            }
            else {
                _this.inputs = [args.inputs];
            }
            if (Array.isArray(args.outputs)) {
                _this.outputs = args.outputs.slice();
            }
            else {
                _this.outputs = [args.outputs];
            }
            // Check for redundancy in inputs.
            if (unique(_this.inputs).length !== _this.inputs.length) {
                throw new ValueError('The list of inputs passed to the model is ' +
                    'redundant. All inputs should only appear once. Found: ' +
                    _this.inputs.map(function (x) { return x.name; }));
            }
            // Check for redundancy in outputs.
            if (unique(_this.outputs).length !== _this.outputs.length) {
                console.warn('The list of outputs passed to the model is redundant. ' +
                    'All outputs should only appear once. Found: ' +
                    _this.outputs.map(function (x) { return x.name; }));
            }
            /*
              List of initial layers (1 to 1 mapping with this.inputs, hence the same
              layer might appear twice)
            */
            _this.inputLayers = [];
            _this.inputLayersNodeIndices = [];
            _this.inputLayersTensorIndices = [];
            /*
              List of layers (1 to 1 mapping with this.outputs, hence the same layer
              might appear twice)
            */
            _this.outputLayers = [];
            _this.outputLayersNodeIndices = [];
            _this.outputLayersTensorIndices = [];
            /*
              All layers in order of horizontal graph traversal. Entries are unique.
              Includes input and output layers.
            */
            _this.layers = [];
            // TODO(michaelterry): Determine if caching still needed with eager
            // backend.
            /*
              This is for performance optimization when calling the Container on new
              inputs. Every time the Container is called on a set on input tensors,
              we compute the output tensors, output masks and output shapes in one pass,
              then cache them here. When one of these outputs is queried later,
              we retrieve it from there instead of recomputing it.
            */
            // this.outputTensorCache = {};
            // this.outputShapeCache = {};
            // Build this.outputLayers:
            for (var _i = 0, _a = _this.outputs; _i < _a.length; _i++) {
                var x = _a[_i];
                var layer = x.sourceLayer;
                var nodeIndex = x.nodeIndex;
                var tensorIndex = x.tensorIndex;
                _this.outputLayers.push(layer);
                _this.outputLayersNodeIndices.push(nodeIndex);
                _this.outputLayersTensorIndices.push(tensorIndex);
            }
            // TODO(michaelterry): Add output mask cache code.
            // Build this.inputLayers:
            for (var _b = 0, _c = _this.inputs; _b < _c.length; _b++) {
                var x = _c[_b];
                var layer = x.sourceLayer;
                var nodeIndex = x.nodeIndex;
                var tensorIndex = x.tensorIndex;
                /*
                  It's supposed to be an input layer, so only one node
                  and one tensor output.
                */
                assert(nodeIndex === 0, 'input layer has >1 nodes');
                assert(tensorIndex === 0, 'input layer has >1 tensors');
                _this.inputLayers.push(layer);
                _this.inputLayersNodeIndices.push(nodeIndex);
                _this.inputLayersTensorIndices.push(tensorIndex);
            }
            // Build this.inputNames and this.outputNames.
            _this.inputNames = [];
            _this.outputNames = [];
            _this.feedInputShapes = [];
            _this.feedInputNames = [];
            _this.feedOutputNames = [];
            for (var i = 0; i < _this.inputLayers.length; i++) {
                var layer = _this.inputLayers[i];
                // Check that layer is an InputLayer.
                if (!(layer instanceof InputLayer)) {
                    throw new TypeError('Input layers to a LayersModel must be InputLayer objects. ' +
                        ("Received inputs: " + args.inputs + ". ") +
                        ("Input " + i + " (0-based) originates ") +
                        ("from layer type " + layer.getClassName() + "."));
                }
                _this.inputNames.push(layer.name);
                _this.feedInputShapes.push(layer.batchInputShape);
                _this.feedInputNames.push(layer.name);
            }
            for (var _d = 0, _e = _this.outputLayers; _d < _e.length; _d++) {
                var layer = _e[_d];
                _this.outputNames.push(layer.name);
            }
            _this.internalInputShapes = _this.inputs.map(function (x) { return x.shape; });
            _this.internalOutputShapes = _this.outputs.map(function (x) { return x.shape; });
            /*
              Container_nodes: set of nodes included in the graph (not all nodes
              included in the layers are relevant to the current graph).
            */
            // ids of all nodes relevant to the Container:
            var nodesDepths = {};
            // To recover nodes from their ID.
            var nodeIDToNode = {};
            var layersDepths = {};
            // To layers from their ID.
            var layerIDToLayer = {};
            var layerIndices = {};
            var nodesInDecreasingDepth = [];
            /**
             * Builds a map of the graph of layers.
             *
             * This recursively updates the map `layerIndices`,
             * the list `nodesInDecreasingDepth` and the set `containerNodes`.
             *
             * @param tensor Some tensor in a graph.
             * @param finishedNodes Set of nodes whose subgraphs have been traversed
             *         completely. Useful to prevent duplicated work.
             * @param nodesInProgress Set of nodes that are currently active on the
             *         recursion stack. Useful to detect cycles.
             * @param layer Layer from which `tensor` comes from. If not provided,
             *   will be obtained from tensor.sourceLayer.
             * @param nodeIndex Node index from which `tensor` comes from.
             * @param tensorIndex TensorIndex from which `tensor` comes from.
             *
             * @exception RuntimeError if a cycle is detected.
             */
            var buildMapOfGraph = function (tensor, finishedNodes, nodesInProgress, layer, nodeIndex, tensorIndex) {
                if (layer == null || nodeIndex == null || tensorIndex == null) {
                    layer = tensor.sourceLayer;
                    nodeIndex = tensor.nodeIndex;
                    tensorIndex = tensor.tensorIndex;
                }
                var node = layer.inboundNodes[nodeIndex];
                // Prevent cycles.
                if (nodesInProgress.indexOf(node) !== -1) {
                    throw new RuntimeError("The tensor " + tensor.name + " at layer \"" + layer.name + "\" " +
                        'is part of a cycle.');
                }
                // Don't repeat work for shared subgraphs
                if (finishedNodes.indexOf(node) !== -1) {
                    return;
                }
                // Update containerNodes.
                _this.containerNodes.add(Container.nodeKey(layer, nodeIndex));
                // Store the traversal order for layer sorting.
                if (!(layer.id in layerIndices)) {
                    layerIndices[layer.id] = Object.keys(layerIndices).length;
                }
                if (nodesInProgress.indexOf(node) === -1) {
                    nodesInProgress.push(node);
                }
                // Propagate to all previous tensors connected to this node.
                var numInboundLayers = node.inboundLayers.length;
                for (var i = 0; i < numInboundLayers; i++) {
                    var x = node.inputTensors[i];
                    var layer_1 = node.inboundLayers[i];
                    var nodeIndex_1 = node.nodeIndices[i];
                    var tensorIndex_1 = node.tensorIndices[i];
                    buildMapOfGraph(x, finishedNodes, nodesInProgress, layer_1, nodeIndex_1, tensorIndex_1);
                }
                finishedNodes.push(node);
                while (nodesInProgress.indexOf(node) >= 0) {
                    nodesInProgress.splice(nodesInProgress.indexOf(node), 1);
                }
                nodesInDecreasingDepth.push(node);
            };
            var finishedNodes = [];
            var nodesInProgress = [];
            for (var _f = 0, _g = _this.outputs; _f < _g.length; _f++) {
                var x = _g[_f];
                buildMapOfGraph(x, finishedNodes, nodesInProgress);
            }
            var reversedNodesInDecreasingDepth = nodesInDecreasingDepth.slice().reverse();
            for (var _h = 0, reversedNodesInDecreasingDepth_1 = reversedNodesInDecreasingDepth; _h < reversedNodesInDecreasingDepth_1.length; _h++) {
                var node = reversedNodesInDecreasingDepth_1[_h];
                nodeIDToNode[node.id] = node;
                // If the depth is not set, the node has no outbound nodes (depth 0).
                if (!(node.id in nodesDepths)) {
                    nodesDepths[node.id] = 0;
                }
                var depth = nodesDepths[node.id];
                // Update the depth of the corresponding layer
                var previousDepth = (layersDepths[node.outboundLayer.id] == null ?
                    0 :
                    layersDepths[node.outboundLayer.id]);
                /*
                  If we've seen this layer before at a higher depth, we should use that
                  depth instead of the node depth.  This is necessary for shared layers
                  that have inputs at different depth levels in the graph.
                */
                depth = Math.max(depth, previousDepth);
                layersDepths[node.outboundLayer.id] = depth;
                layerIDToLayer[node.outboundLayer.id] = node.outboundLayer;
                nodesDepths[node.id] = depth;
                // Update the depth of inbound nodes.
                for (var i = 0; i < node.inboundLayers.length; i++) {
                    var inboundLayer = node.inboundLayers[i];
                    var nodeIndex = node.nodeIndices[i];
                    var inboundNode = inboundLayer.inboundNodes[nodeIndex];
                    var previousDepth_1 = (nodesDepths[inboundNode.id] == null ? 0 :
                        nodesDepths[inboundNode.id]);
                    nodesDepths[inboundNode.id] = Math.max(depth + 1, previousDepth_1);
                    nodeIDToNode[inboundNode.id] = inboundNode;
                }
            }
            // Build a dict {depth: list of nodes with this depth}
            var nodesByDepth = {};
            for (var nodeID in nodesDepths) {
                var depth = nodesDepths[nodeID];
                if (!(depth in nodesByDepth)) {
                    nodesByDepth[depth] = [];
                }
                nodesByDepth[depth].push(nodeIDToNode[nodeID]);
            }
            // Build a dict {depth: list of layers with this depth}
            var layersByDepth = {};
            for (var layerID in layersDepths) {
                var depth = layersDepths[layerID];
                if (!(depth in layersByDepth)) {
                    layersByDepth[depth] = [];
                }
                layersByDepth[depth].push(layerIDToLayer[layerID]);
            }
            // Get sorted list of layer depths.
            var depthKeys = Object.keys(layersByDepth)
                .map(function (x) { return parseInt(x, 10); })
                .sort(reverseNumberCompare);
            // Set this.layers and this.layersByDepth.
            _this.layers = [];
            for (var _j = 0, depthKeys_1 = depthKeys; _j < depthKeys_1.length; _j++) {
                var depth = depthKeys_1[_j];
                var layersForDepth = layersByDepth[depth];
                // Container.layers needs to have a deterministic order:
                // here we order them by traversal order.
                layersForDepth.sort(function (a, b) {
                    var aIndex = layerIndices[a.id];
                    var bIndex = layerIndices[b.id];
                    if (aIndex < bIndex) {
                        return -1;
                    }
                    if (aIndex > bIndex) {
                        return 1;
                    }
                    return 0;
                });
                for (var _k = 0, layersForDepth_1 = layersForDepth; _k < layersForDepth_1.length; _k++) {
                    var layer = layersForDepth_1[_k];
                    _this.layers.push(layer);
                }
            }
            _this.layersByDepth = layersByDepth;
            // Get sorted list of node depths;
            depthKeys = Object.keys(nodesByDepth)
                .map(function (x) { return parseInt(x, 10); })
                .sort(reverseNumberCompare);
            // Check that all tensors required are computable.
            // computable_tensors: all tensors in the graph
            // that can be computed from the inputs provided.
            var computableTensors = _this.inputs.slice();
            // To provide a better error msg.
            var layersWithCompleteInput = [];
            for (var _l = 0, depthKeys_2 = depthKeys; _l < depthKeys_2.length; _l++) {
                var depth = depthKeys_2[_l];
                for (var _m = 0, _o = nodesByDepth[depth]; _m < _o.length; _m++) {
                    var node = _o[_m];
                    var layer = node.outboundLayer;
                    if (layer != null) {
                        for (var _p = 0, _q = node.inputTensors; _p < _q.length; _p++) {
                            var x = _q[_p];
                            if (computableTensors.indexOf(x) === -1) {
                                throw new RuntimeError("Graph disconnected: cannot obtain value for tensor " + x +
                                    (" at layer \"" + layer.name + "\". ") +
                                    'The following previous layers were accessed without ' +
                                    ("issue: " + layersWithCompleteInput));
                            }
                        }
                        for (var _r = 0, _s = node.outputTensors; _r < _s.length; _r++) {
                            var x = _s[_r];
                            computableTensors.push(x);
                        }
                        layersWithCompleteInput.push(layer.name);
                    }
                }
            }
            // Set this.containerNodes and this.nodesByDepth.
            _this.nodesByDepth = nodesByDepth;
            // Ensure name unicity, which will be crucial for serialization
            // (since serialized nodes refer to layers by their name).
            var allNames = _this.layers.map(function (x) { return x.name; });
            var _loop_1 = function (name_1) {
                var numOccurrences = allNames.filter(function (x) { return x === name_1; }).length;
                if (numOccurrences !== 1) {
                    throw new RuntimeError("The name \"" + name_1 + "\" is used " + numOccurrences + " times " +
                        'in the model. All layer names should be unique. Layer names: ' +
                        JSON.stringify(allNames));
                }
            };
            for (var _t = 0, allNames_1 = allNames; _t < allNames_1.length; _t++) {
                var name_1 = allNames_1[_t];
                _loop_1(name_1);
            }
            // Layer parameters.
            // The new container starts with a single inbound node
            // for its inputs, and no outbound nodes.
            // Will be appended to by future calls to apply().
            _this.outboundNodes = [];
            // Will be appended to below, and by future calls to apply().
            _this.inboundNodes = [];
            // Create the node linking internal inputs to internal outputs.
            // (This call has side effects.)
            // tslint:disable-next-line:no-unused-expression
            new Node({
                outboundLayer: _this,
                inboundLayers: [],
                nodeIndices: [],
                tensorIndices: [],
                inputTensors: _this.inputs,
                outputTensors: _this.outputs,
                inputMasks: _this.inputs.map(function (x) { return null; }),
                outputMasks: _this.outputs.map(function (x) { return null; }),
                inputShapes: _this.inputs.map(function (x) { return x.shape; }),
                outputShapes: _this.outputs.map(function (x) { return x.shape; })
            });
            _this.built = true;
            _this._refCount = 1; // The ref count of a container always start at 1.
            return _this;
        }
        Container.prototype.assertNotDisposed = function () {
            if (this._refCount === 0) {
                throw new Error("Container '" + this.name + "' is already disposed.");
            }
        };
        /**
         * Attempt to dispose a LayersModel's weights.
         *
         * This method decrease the reference count of the LayersModel object by 1.
         *
         * A LayersModel is reference-counted. Its reference count is incremented by 1
         * when it is first constructed and when it is used as a Layer of another
         * LayersModel.
         *
         * If the reference count of a LayersModel becomes 0, the `dispose` method of
         * all its constituent `Layer`s will be called.
         *
         * Note: If the reference count is greater than 0 after the decrement, the
         * `dispose` method of its constituent `Layer`s will *not* be called.
         *
         * After a LayersModel is disposed, it cannot be used in calls such as
         * 'predict`, `evaluate` or `fit` anymore.
         *
         * @returns A DisposeResult Object with the following fields:
         *   - refCountAfterDispose: The reference count of the LayersModel after this
         *     `dispose()` call.
         *   - numDisposedVariables: Number of `tf.Variable`s (i.e., weights) disposed
         *     during this `dispose()` call.
         * @throws {Error} If the layer is not built yet, or if the LayersModel has
         *   already been disposed.
         */
        Container.prototype.dispose = function () {
            this.assertNotDisposed();
            var result = { refCountAfterDispose: null, numDisposedVariables: 0 };
            if (--this._refCount === 0) {
                for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                    var layer = _a[_i];
                    result.numDisposedVariables += layer.dispose().numDisposedVariables;
                }
            }
            result.refCountAfterDispose = this._refCount;
            return result;
        };
        Object.defineProperty(Container.prototype, "trainable", {
            get: function () {
                return this.trainable_;
            },
            set: function (trainable) {
                this.layers.forEach(function (layer) {
                    // tslint:disable-next-line:no-any
                    layer._trainableWeights
                        .forEach(function (w) { return w.trainable = trainable; });
                });
                this.trainable_ = trainable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "trainableWeights", {
            get: function () {
                // Porting Note: This check below is to prevent errors where the
                //   _trainableWeights inherited from the parent class (Layer) gets
                //   inadvertently used.
                if (this._trainableWeights.length > 0) {
                    throw new ValueError('Container instance unexpectedly contains _trainableWeights.' +
                        'The trainable weights of a Container are a union of the ' +
                        'trainable weights of its consituent Layers. Its own ' +
                        '_trainableWeights must remain an empty Array.');
                }
                if (!this.trainable) {
                    return [];
                }
                var weights = [];
                for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                    var layer = _a[_i];
                    weights = weights.concat(layer.trainableWeights);
                }
                return weights;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "nonTrainableWeights", {
            get: function () {
                var weights = [];
                for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                    var layer = _a[_i];
                    weights.push.apply(weights, layer.nonTrainableWeights);
                }
                if (!this.trainable) {
                    var trainableWeights = [];
                    for (var _b = 0, _c = this.layers; _b < _c.length; _b++) {
                        var layer = _c[_b];
                        trainableWeights.push.apply(trainableWeights, layer.trainableWeights);
                    }
                    return trainableWeights.concat(weights);
                }
                return weights;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Container.prototype, "weights", {
            get: function () {
                return this.trainableWeights.concat(this.nonTrainableWeights);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Loads all layer weights from a JSON object.
         *
         * Porting Note: HDF5 weight files cannot be directly loaded in JavaScript /
         *   TypeScript. The utility script at `scripts/pykeras.py` offers means
         *   to convert them into JSON strings compatible with this method.
         * Porting Note: TensorFlow.js Layers supports only loading by name currently.
         *
         * @param weights A JSON mapping weight names to weight values as nested
         *   arrays of numbers, or a `NamedTensorMap`, i.e., a JSON mapping weight
         *   names to `tf.Tensor` objects.
         * @param strict Require that the provided weights exactly match those
         *   required by the container.  Default: `true`.  Passing `false` means that
         *   extra weights and missing weights will be silently ignored.
         */
        Container.prototype.loadWeights = function (weights, strict) {
            if (strict === void 0) { strict = true; }
            var nameToWeight = {};
            var totalWeightsCount = 0;
            for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                for (var _b = 0, _c = layer.weights; _b < _c.length; _b++) {
                    var weight = _c[_b];
                    if (nameToWeight[weight.originalName] != null) {
                        throw new ValueError("Duplicate weight name: " + weight.originalName);
                    }
                    nameToWeight[weight.originalName] = weight;
                    totalWeightsCount++;
                }
            }
            var weightValueTuples = [];
            for (var name_2 in weights) {
                if (nameToWeight[name_2] != null) {
                    weightValueTuples.push([nameToWeight[name_2], weights[name_2]]);
                }
                else if (strict) {
                    throw new ValueError("Provided weight data has no target variable: " + name_2);
                }
                delete nameToWeight[name_2];
            }
            if (strict) {
                // Check that all weights are set.
                var unsetNames = [];
                for (var name_3 in nameToWeight) {
                    unsetNames.push(name_3);
                }
                if (unsetNames.length > 0) {
                    throw new ValueError(unsetNames.length + " of " + totalWeightsCount + " weights are not set: " +
                        ("" + unsetNames));
                }
            }
            batchSetValue(weightValueTuples);
        };
        /**
         * Util shared between different serialization methods.
         * @returns LayersModel config with Keras version information added.
         */
        Container.prototype.updatedConfig = function () {
            var theConfig = this.getConfig();
            var modelConfig = {};
            modelConfig['className'] = this.getClassName();
            modelConfig['config'] = theConfig;
            modelConfig['kerasVersion'] = "tfjs-layers " + version;
            // TODO(nielsene): Replace something like K.backend() once
            // possible.
            modelConfig['backend'] = 'TensorFlow.js';
            return modelConfig;
        };
        /**
         * Returns a JSON string containing the network configuration.
         *
         * To load a network from a JSON save file, use
         * models.modelFromJSON(jsonString);
         * @param extraJsonArgs Unused in tfjs-layers, maintained for PyKeras
         * @param returnString Whether the return value should be stringified
         *    (default: `true`).
         * @returns a JSON string if `returnString` (default), or a JSON object if
         *   `!returnString`.
         */
        // tslint:disable-next-line:no-any
        Container.prototype.toJSON = function (unused, returnString) {
            if (returnString === void 0) { returnString = true; }
            var modelConfig = convertTsToPythonic(this.updatedConfig());
            return returnString ? JSON.stringify(modelConfig) : modelConfig;
        };
        /**
         * Call the model on new inputs.
         *
         * In this case `call` just reapplies all ops in the graph to the new inputs
         * (e.g. build a new computational graph from the provided inputs).
         *
         * @param inputs A tensor or list of tensors.
         * @param mask A mask or list of masks. A mask can be either a tensor or null
         *   (no mask).
         *
         * @return A tensor if there is a single output, or a list of tensors if there
         *   are more than one outputs.
         */
        Container.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                inputs = toList(inputs);
                var feedDict = new FeedDict();
                for (var i = 0; i < _this.inputs.length; ++i) {
                    feedDict.add(_this.inputs[i], inputs[i]);
                }
                return execute(_this.outputs, feedDict, kwargs);
            });
        };
        /**
         * Computes an output mask tensor.
         *
         * @param inputs Tensor or list of tensors.
         * @param mask Tensor or list of tensors.
         *
         * @return null or a tensor (or list of tensors, one per output tensor of the
         * layer).
         */
        Container.prototype.computeMask = function (inputs, mask) {
            var _this = this;
            return tfc.tidy(function () {
                inputs = toList(inputs);
                var masks;
                if (mask == null) {
                    masks = pyListRepeat(null, inputs.length);
                }
                else {
                    masks = toList(mask);
                }
                // TODO(michaelterry): Add support for mask caching.
                return _this.runInternalGraph(inputs, masks)[1];
            });
        };
        /**
         * Computes the output shape of the layer.
         *
         * Assumes that the layer will be built to match that input shape provided.
         *
         * @param inputShape A shape (tuple of integers) or a list of shape tuples
         *   (one per output tensor of the layer). Shape tuples can include null for
         *   free dimensions, instead of an integer.
         */
        Container.prototype.computeOutputShape = function (inputShape) {
            var inputShapes = normalizeShapeList(inputShape);
            if (inputShapes.length !== this.inputLayers.length) {
                throw new ValueError("Invalid inputShape argument " + inputShape + ": " +
                    ("model has " + this.inputLayers.length + " tensor inputs."));
            }
            // TODO(michaelterry): Add caching
            var layersToOutputShapes = {};
            for (var i = 0; i < inputShapes.length; i++) {
                var layer = this.inputLayers[i];
                var inputShape_1 = inputShapes[i];
                // It's an input layer: computeOutputShape is identity,
                // and there is only one node and one tensor output.
                var shapeKey = layer.name + '_0_0';
                layersToOutputShapes[shapeKey] = inputShape_1;
            }
            var depthKeys = Object.keys(this.nodesByDepth)
                .map(function (x) { return parseInt(x, 10); })
                .sort(reverseNumberCompare);
            // Iterate over nodes, by depth level.
            if (depthKeys.length > 1) {
                for (var _i = 0, depthKeys_3 = depthKeys; _i < depthKeys_3.length; _i++) {
                    var depth = depthKeys_3[_i];
                    var nodes = this.nodesByDepth[depth];
                    for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
                        var node = nodes_1[_a];
                        // This is always a single layer, never a list.
                        var layer = node.outboundLayer;
                        if (this.inputLayers.map(function (x) { return x.id; }).indexOf(layer.id) !== -1) {
                            // We've already covered the input layers a few lines above.
                            continue;
                        }
                        // Potentially redundant list, same size of node.inputTensors.
                        var inputShapes_1 = [];
                        for (var j = 0; j < node.inboundLayers.length; j++) {
                            var inboundLayer = node.inboundLayers[j];
                            var nodeIndex_2 = node.nodeIndices[j];
                            var tensorIndex = node.tensorIndices[j];
                            var shapeKey = inboundLayer.name + "_" + nodeIndex_2 + "_" + tensorIndex;
                            var inputShape_2 = layersToOutputShapes[shapeKey];
                            inputShapes_1.push(inputShape_2);
                        }
                        var outputShape = layer.computeOutputShape(singletonOrArray(inputShapes_1));
                        var outputShapes_1 = normalizeShapeList(outputShape);
                        var nodeIndex = layer.inboundNodes.indexOf(node);
                        for (var j = 0; j < outputShapes_1.length; j++) {
                            var shapeKey = layer.name + "_" + nodeIndex + "_" + j;
                            layersToOutputShapes[shapeKey] = outputShapes_1[j];
                        }
                    }
                }
            }
            // Read final output shapes from layersToOutputShapes.
            var outputShapes = [];
            var outputShapeKeys = [];
            for (var i = 0; i < this.outputLayers.length; i++) {
                var layer = this.outputLayers[i];
                var nodeIndex = this.outputLayersNodeIndices[i];
                var tensorIndex = this.outputLayersTensorIndices[i];
                var shapeKey = layer.name + "_" + nodeIndex + "_" + tensorIndex;
                outputShapeKeys.push(shapeKey);
            }
            for (var i = 0; i < outputShapeKeys.length; i++) {
                var key = outputShapeKeys[i];
                assert(key in layersToOutputShapes);
                outputShapes.push(layersToOutputShapes[key]);
            }
            // TODO(michaelterry): Update cache
            return singletonOrArray(outputShapes);
        };
        /**
         * Computes output tensors for new inputs.
         *
         * Note:
         *   - Expects `inputs` to be a list (potentially with 1 element).
         *
         * @param inputs List of tensors
         * @param masks List of masks (tensors or null).
         * @return Three lists: outputTensors, outputMasks, outputShapes
         */
        Container.prototype.runInternalGraph = function (inputs, masks) {
            if (masks == null) {
                masks = pyListRepeat(null, inputs.length);
            }
            // Dictionary mapping reference tensors to tuples
            // (computed tensor, compute mask)
            // we assume a 1:1 mapping from tensor to mask
            // TODO: raise exception when a `.computeMask()` call
            // does not return a list the same size as `call`
            var tensorMap = {};
            for (var i = 0; i < this.inputs.length; ++i) {
                var x = this.inputs[i];
                var y = inputs[i];
                var mask = masks[i];
                tensorMap[x.id] = [y, mask];
            }
            var depthKeys = Object.keys(this.nodesByDepth)
                .map(function (x) { return parseInt(x, 10); })
                .sort(reverseNumberCompare);
            for (var _i = 0, depthKeys_4 = depthKeys; _i < depthKeys_4.length; _i++) {
                var depth = depthKeys_4[_i];
                var nodes = this.nodesByDepth[depth];
                for (var _a = 0, nodes_2 = nodes; _a < nodes_2.length; _a++) {
                    var node = nodes_2[_a];
                    // This is always a single layer, never a list.
                    var layer = node.outboundLayer;
                    var referenceInputTensors = node.inputTensors;
                    var referenceOutputTensors = node.outputTensors;
                    // If all previous input tensors are available in tensorMap,
                    // then call node.inboundLayer on them.
                    // List of tuples [input, mask]:
                    var computedData = new Array();
                    for (var _b = 0, referenceInputTensors_1 = referenceInputTensors; _b < referenceInputTensors_1.length; _b++) {
                        var x = referenceInputTensors_1[_b];
                        if (x.id in tensorMap) {
                            computedData.push(tensorMap[x.id]);
                        }
                    }
                    if (computedData.length === referenceInputTensors.length) {
                        // TODO(michaelterry): Add K.name_scope here, if we need it.
                        var kwargs = {};
                        var computedTensors = void 0;
                        var computedMasks = void 0;
                        var outputTensors_1 = void 0;
                        var outputMasks_1 = void 0;
                        // call layer
                        if (node.callArgs != null) {
                            kwargs = node.callArgs;
                        }
                        if (computedData.length === 1) {
                            var _c = computedData[0], computedTensor = _c[0], computedMask = _c[1];
                            if (kwargs['mask'] == null) {
                                kwargs['mask'] = computedMask;
                            }
                            outputTensors_1 =
                                toList(layer.call(computedTensor, kwargs));
                            outputMasks_1 = toList(layer.computeMask(computedTensor, computedMask));
                            computedTensors = [computedTensor];
                            computedMasks = [computedMask];
                        }
                        else {
                            computedTensors = computedData.map(function (x) { return x[0]; });
                            computedMasks = computedData.map(function (x) { return x[1]; });
                            if (kwargs['mask'] == null) {
                                kwargs['mask'] = computedMasks;
                            }
                            outputTensors_1 =
                                toList(layer.call(computedTensors, kwargs));
                            outputMasks_1 = toList(layer.computeMask(computedTensors, computedMasks));
                        }
                        if (layer.activityRegularizer) {
                            throw new NotImplementedError('LayersModel invocation with concrete Tensor value(s) in the ' +
                                'presence of activity regularizer(s) is not supported yet.');
                        }
                        // TODO(michaelterry): Add model updates and losses
                        // Update tensor map.
                        for (var i = 0; i < referenceOutputTensors.length; ++i) {
                            var x = referenceOutputTensors[i];
                            var y = outputTensors_1[i];
                            var mask = outputMasks_1[i];
                            tensorMap[x.id] = [y, mask];
                        }
                    }
                }
            }
            var outputTensors = [];
            var outputMasks = [];
            var outputShapes = [];
            for (var _d = 0, _e = this.outputs; _d < _e.length; _d++) {
                var x = _e[_d];
                assert(x.id in tensorMap, "Could not compute output " + x.name + " : " + x.id);
                var _f = tensorMap[x.id], tensor = _f[0], mask = _f[1];
                outputShapes.push(tensor.shape);
                outputTensors.push(tensor);
                outputMasks.push(mask);
            }
            // TODO(michaelterry): Add support for caches.
            return [outputTensors, outputMasks, outputShapes];
        };
        /**
         * Builds a map of internal node keys to node ordering.
         * Used in serializaion a node orderings may change as unused nodes are
         * dropped. Porting Note:  This helper method was pulled out of getConfig to
         * improve readability.
         * @param layers An array of Layers in the model.
         * @returns Map of Node Keys to index order within the layer.
         */
        Container.prototype.buildNodeConversionMap = function (layers) {
            var nodeConversionMap = {};
            var keptNodes;
            for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                keptNodes = layer instanceof Container ? 1 : 0;
                for (var originalNodeIndex = 0; originalNodeIndex < layer.inboundNodes.length; originalNodeIndex++) {
                    var nodeKey = Container.nodeKey(layer, originalNodeIndex);
                    if (this.containerNodes.has(nodeKey)) {
                        // i.e. we mark it to be saved
                        nodeConversionMap[nodeKey] = keptNodes;
                        keptNodes += 1;
                    }
                }
            }
            return nodeConversionMap;
        };
        /**
         * Retrieves a layer based on either its name (unique) or index.
         *
         * Indices are based on order of horizontal graph traversal (bottom-up).
         *
         * If both `name` and `index` are specified, `index` takes precedence.
         *
         * @param name Name of layer.
         * @param index Index of layer.
         * @returns A Layer instance.
         * @throws ValueError: In case of invalid layer name or index.
         */
        /**
         * @doc {
         *    heading: 'Layers',
         *    subheading: 'Classes',
         *    namespace: 'layers',
         *    subclasses: ['LayersModel']
         * }
         */
        Container.prototype.getLayer = function (name, index) {
            if (index != null) {
                if (this.layers.length <= index) {
                    throw new ValueError("Was asked to retrieve layer at index " + index + ", but model only " +
                        ("has " + this.layers.length + " layer(s)."));
                }
                else {
                    return this.layers[index];
                }
            }
            else {
                if (name == null) {
                    throw new ValueError('Provide either a layer name or layer index');
                }
            }
            for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                if (layer.name === name) {
                    return layer;
                }
            }
            throw new ValueError("No such layer: " + name);
        };
        /**
         * Retrieves the Container's current loss values.
         *
         * Used for regularizers during training.
         */
        Container.prototype.calculateLosses = function () {
            var _this = this;
            // Porting Node: This is an augmentation to Container.loss in PyKeras.
            //   In PyKeras, Container.loss returns symbolic tensors. Here a concrete
            //   Tensor (specifically Scalar) values are returned. This is due to the
            //   imperative backend.
            return tfc.tidy(function () {
                var losses = [];
                for (var _i = 0, _a = _this.layers; _i < _a.length; _i++) {
                    var layer = _a[_i];
                    for (var nodeIndex = 0; nodeIndex < layer.inboundNodes.length; ++nodeIndex) {
                        var nodeKey = Container.nodeKey(layer, nodeIndex);
                        if (_this.containerNodes.has(nodeKey)) {
                            losses.push.apply(losses, layer.calculateLosses());
                        }
                    }
                }
                // TODO(cais): Add any unconditional model-level losses?
                return losses;
            });
        };
        Container.prototype.getConfig = function () {
            var config = { name: this.name };
            // Build a map from layer unique name (self._node_key)
            // to the index of the nodes that are saved in the config.
            // Only nodes in container_nodes are saved.
            var nodeConversionMap = this.buildNodeConversionMap(this.layers);
            // Serialize and save the layers in layerConfigs
            var layerConfigs = [];
            for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                var layerClassName = layer.getClassName();
                var layerConfig = layer.getConfig();
                var filteredInboundNodes = [];
                for (var originalNodeIndex = 0; originalNodeIndex < layer.inboundNodes.length; originalNodeIndex++) {
                    var node = layer.inboundNodes[originalNodeIndex];
                    var nodeKey = Container.nodeKey(layer, originalNodeIndex);
                    var kwargs = {};
                    if (this.containerNodes.has(nodeKey)) {
                        // The node is relevant to the model:
                        // add to filteredInboundNodes.
                        if (node.callArgs) {
                            try {
                                JSON.stringify(node.callArgs);
                                kwargs = node.callArgs;
                            }
                            catch (err) {
                                console.warn("Layer " + layer.name + " was passed " +
                                    "non-serializable keyword arguments: " +
                                    (node.callArgs + ". They will not be included ") +
                                    "in the serialized model (and thus will be " +
                                    "missing at deserialization time).");
                                kwargs = {};
                            }
                        }
                        if (node.inboundLayers.length > 0) {
                            var nodeData = [];
                            for (var i = 0; i < node.inboundLayers.length; i++) {
                                var inboundLayer = node.inboundLayers[i];
                                var nodeIndex = node.nodeIndices[i];
                                var tensorIndex = node.tensorIndices[i];
                                var nodeKey_1 = Container.nodeKey(inboundLayer, nodeIndex);
                                var newNodeIndex = nodeConversionMap[nodeKey_1];
                                if (newNodeIndex == null) {
                                    newNodeIndex = 0;
                                }
                                nodeData.push([inboundLayer.name, newNodeIndex, tensorIndex, kwargs]);
                            }
                            filteredInboundNodes.push(nodeData);
                        }
                    }
                }
                var dict = {};
                dict['name'] = layer.name;
                dict['className'] = layerClassName;
                dict['config'] = layerConfig;
                dict['inboundNodes'] = filteredInboundNodes;
                layerConfigs.push(dict);
            }
            config['layers'] = layerConfigs;
            // Gather info about inputs and outputs
            var modelInputs = [];
            for (var i = 0; i < this.inputLayers.length; i++) {
                var layer = this.inputLayers[i];
                var nodeIndex = this.inputLayersNodeIndices[i];
                var nodeKey = Container.nodeKey(layer, nodeIndex);
                if (!this.containerNodes.has(nodeKey)) {
                    continue;
                }
                var newNodeIndex = nodeConversionMap[nodeKey];
                if (newNodeIndex === null || newNodeIndex === undefined) {
                    newNodeIndex = 0;
                }
                var tensorIndex = this.inputLayersTensorIndices[i];
                modelInputs.push([layer.name, newNodeIndex, tensorIndex]);
            }
            config['inputLayers'] = modelInputs;
            var modelOutputs = [];
            for (var i = 0; i < this.outputLayers.length; i++) {
                var layer = this.outputLayers[i];
                var nodeIndex = this.outputLayersNodeIndices[i];
                var nodeKey = Container.nodeKey(layer, nodeIndex);
                if (!this.containerNodes.has(nodeKey)) {
                    continue;
                }
                var newNodeIndex = nodeConversionMap[nodeKey];
                if (newNodeIndex === null || newNodeIndex === undefined) {
                    newNodeIndex = 0;
                }
                var tensorIndex = this.outputLayersTensorIndices[i];
                modelOutputs.push([layer.name, newNodeIndex, tensorIndex]);
            }
            config['outputLayers'] = modelOutputs;
            return config;
        };
        /**
         * Instantiates a LayersModel from its config (output of `get_config()`).
         * @param cls the class to create
         * @param config LayersModel config dictionary.
         * @param customObjects An optional dictionary of custom objects.
         * @param fastWeightInit Optional flag to use fast weight initialization
         *   during deserialization. This is applicable to cases in which
         *   the initialization will be immediately overwritten by loaded weight
         *   values. Default: `false`.
         * @returns A LayersModel instance.
         * @throws ValueError: In case of improperly formatted config dict.
         */
        /** @nocollapse */
        Container.fromConfig = function (cls, config, customObjects, fastWeightInit) {
            if (customObjects === void 0) { customObjects = {}; }
            if (fastWeightInit === void 0) { fastWeightInit = false; }
            // Layer instances created during
            // the graph reconstruction process
            var createdLayers = {};
            // Dictionary mapping layer instances to
            // node data that specifies a layer call.
            // It acts as a queue that maintains any unprocessed
            // layer call until it becomes possible to process it
            // (i.e. until the input tensors to the call all exist).
            var unprocessedNodes = {};
            function addUnprocessedNode(layer, nodeData) {
                if (!(layer.name in unprocessedNodes)) {
                    unprocessedNodes[layer.name] = [nodeData];
                }
                else {
                    unprocessedNodes[layer.name].push(nodeData);
                }
            }
            function processNode(layer, nodeData) {
                var inputTensors = [];
                var kwargs;
                for (var _i = 0, nodeData_1 = nodeData; _i < nodeData_1.length; _i++) {
                    var inputData = nodeData_1[_i];
                    var inboundLayerName = inputData[0];
                    var inboundNodeIndex = inputData[1];
                    var inboundTensorIndex = inputData[2];
                    kwargs = inputData[3] == null ?
                        {} :
                        inputData[3];
                    if (!(inboundLayerName in createdLayers)) {
                        addUnprocessedNode(layer, nodeData);
                        return;
                    }
                    var inboundLayer = createdLayers[inboundLayerName];
                    if (inboundLayer.inboundNodes.length <= inboundNodeIndex) {
                        addUnprocessedNode(layer, nodeData);
                        return;
                    }
                    var inboundNode = inboundLayer.inboundNodes[inboundNodeIndex];
                    inputTensors.push(inboundNode.outputTensors[inboundTensorIndex]);
                }
                // Call layer on its inputs, thus creating the node
                // and building the layer if needed.
                // Note: This has Eager vs Graph Implications.
                if (inputTensors.length > 0) {
                    layer.apply(singletonOrArray(inputTensors), kwargs); // was ** kwargs
                }
            }
            /**
             * Deserialize a layer, then call it on appropriate inputs.
             * @param layerData: layer config dict.
             * @throws ValueError: In case of improperly formatted `layer_data`
             * dict.
             */
            function processLayer(layerData) {
                var layerName = layerData['name'];
                // Instantiate layer.
                var layer = deserialize(layerData, config['customObjects'] != null ?
                    config['customObjects'] :
                    {});
                layer.setFastWeightInitDuringBuild(fastWeightInit);
                createdLayers[layerName] = layer;
                // Gather layer inputs.
                var inboundNodesData = layerData['inboundNodes'];
                inboundNodesData.forEach(function (nodeData) {
                    if (!(nodeData instanceof Array)) {
                        throw new ValueError("Corrupted configuration, expected array for nodeData: " + nodeData);
                    }
                    // We don't process nodes (i.e. make layer calls)
                    // on the fly because the inbound node may not yet exist,
                    // in case of layer shared at different topological depths
                    // (e.g.a model such as A(B(A(B(x)))))
                    addUnprocessedNode(layer, nodeData);
                });
            }
            // First, we create all layers and enqueue nodes to be processed.
            var name = config['name'];
            var layersFromConfig = config['layers'];
            for (var _i = 0, layersFromConfig_1 = layersFromConfig; _i < layersFromConfig_1.length; _i++) {
                var layerData = layersFromConfig_1[_i];
                processLayer(layerData);
            }
            // Then we process nodes in order of layer depth.
            // Nodes that cannot yet be processed(if the inbound node
            // does not yet exist) are re - enqueued, and the process
            // is repeated until all nodes are processed.
            while (!isObjectEmpty(unprocessedNodes)) {
                for (var _a = 0, layersFromConfig_2 = layersFromConfig; _a < layersFromConfig_2.length; _a++) {
                    var layerData = layersFromConfig_2[_a];
                    var layer = createdLayers[layerData['name']];
                    if (layer.name in unprocessedNodes) {
                        var currentUnprocessedNodesForLayer = unprocessedNodes[layer.name];
                        delete unprocessedNodes[layer.name];
                        for (var _b = 0, currentUnprocessedNodesForLayer_1 = currentUnprocessedNodesForLayer; _b < currentUnprocessedNodesForLayer_1.length; _b++) {
                            var nodeData = currentUnprocessedNodesForLayer_1[_b];
                            processNode(layer, nodeData);
                        }
                    }
                }
            }
            var inputTensors = [];
            var outputTensors = [];
            var inputLayersFromConfig = config['inputLayers'];
            for (var _c = 0, inputLayersFromConfig_1 = inputLayersFromConfig; _c < inputLayersFromConfig_1.length; _c++) {
                var layerData = inputLayersFromConfig_1[_c];
                var layerName = layerData[0];
                var nodeIndex = layerData[1];
                var tensorIndex = layerData[2];
                assert(layerName in createdLayers);
                var layer = createdLayers[layerName];
                var layerOutputTensors = layer.inboundNodes[nodeIndex].outputTensors;
                inputTensors.push(layerOutputTensors[tensorIndex]);
            }
            var outputLayersFromConfig = config['outputLayers'];
            for (var _d = 0, outputLayersFromConfig_1 = outputLayersFromConfig; _d < outputLayersFromConfig_1.length; _d++) {
                var layerData = outputLayersFromConfig_1[_d];
                var layerName = layerData[0];
                var nodeIndex = layerData[1];
                var tensorIndex = layerData[2];
                assert(layerName in createdLayers);
                var layer = createdLayers[layerName];
                var layerOutputTensors = layer.inboundNodes[nodeIndex].outputTensors;
                outputTensors.push(layerOutputTensors[tensorIndex]);
            }
            return new cls({ inputs: inputTensors, outputs: outputTensors, name: name });
        };
        Object.defineProperty(Container.prototype, "stateful", {
            /**
             * Determine whether the container is stateful.
             *
             * Porting Note: this is the equivalent of the stateful @property of
             *   the Container class in PyKeras.
             */
            get: function () {
                // Porting Note: This check is to prevent inadvertent setting of the
                //   _stateful property of the Container instance.
                if (this._stateful) {
                    throw new ValueError('Container instance unexpectedly has _stateful = true. The ' +
                        'statefulness of a Container is determined by the Layers it ' +
                        'contains. Its _stateful property must remain the default false.');
                }
                for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                    var layer = _a[_i];
                    if (layer.stateful) {
                        return true;
                    }
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Reset the state of all stateful constituent layers (if any).
         *
         * Examples of stateful layers include RNN layers whose `stateful` property
         * is set as `true`.
         */
        Container.prototype.resetStates = function () {
            var _this = this;
            tfc.tidy(function () {
                _this.layers.forEach(function (layer) {
                    // tslint:disable:no-any
                    if (layer.stateful) {
                        layer.resetStates();
                    }
                    // tslint:enable:no-any
                });
            });
        };
        return Container;
    }(Layer));

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    function standardizeSampleOrClassWeights(xWeight, outputNames, weightType) {
        var numOutputs = outputNames.length;
        if (xWeight == null || (Array.isArray(xWeight) && xWeight.length === 0)) {
            return outputNames.map(function (name) { return null; });
        }
        if (numOutputs === 1) {
            if (Array.isArray(xWeight) && xWeight.length === 1) {
                return xWeight;
            }
            else if (typeof xWeight === 'object' && outputNames[0] in xWeight) {
                return [xWeight[outputNames[0]]];
            }
            else {
                return [xWeight];
            }
        }
        if (Array.isArray(xWeight)) {
            if (xWeight.length !== numOutputs) {
                throw new Error("Provided " + weightType + " is an array of " + xWeight.length + " " +
                    ("element(s), but the model has " + numOutputs + " outputs. ") +
                    "Make sure a set of weights is provided for each model output.");
            }
            return xWeight;
        }
        else if (typeof xWeight === 'object' && Object.keys(xWeight).length > 0 &&
            typeof xWeight[Object.keys(xWeight)[0]] ===
                'object') {
            var output_1 = [];
            outputNames.forEach(function (outputName) {
                if (outputName in xWeight) {
                    output_1.push(xWeight[outputName]);
                }
                else {
                    output_1.push(null);
                }
            });
            return output_1;
        }
        else {
            throw new Error("The model has multiple (" + numOutputs + ") outputs, " +
                ("so " + weightType + " must be either an array with ") +
                (numOutputs + " elements or an object with " + outputNames + " keys. ") +
                ("Provided " + weightType + " not understood: " + JSON.stringify(xWeight)));
        }
    }
    /**
     * Standardize class weighting objects.
     *
     * This function takes a single class-weighting object, an array of them,
     * or a map from output name to class-weighting object. It compares it to the
     * output name(s) of the model, base on which it outputs an array of
     * class-weighting objects of which the length matches the number of outputs.
     *
     * @param classWeight Input class-weighting object(s).
     * @param outputNames All output name(s) of the model.
     * @return An array of class-weighting objects. The length of the array matches
     *   the model's number of outputs.
     */
    function standardizeClassWeights(classWeight, outputNames) {
        return standardizeSampleOrClassWeights(classWeight, outputNames, 'classWeight');
    }
    /**
     * Standardize by-sample and/or by-class weights for training.
     *
     * Note that this function operates on one model output at a time. For a model
     * with multiple outputs, you must call this function multiple times.
     *
     * @param y The target tensor that the by-sample and/or by-class weight is for.
     *     The values of y are assumed to encode the classes, either directly
     *     as an integer index, or as one-hot encoding.
     * @param sampleWeight By-sample weights.
     * @param classWeight By-class weights: an object mapping class indices
     *     (integers) to a weight (float) to apply to the model's loss for the
     *     samples from this class during training. This can be useful to tell the
     *     model to "pay more attention" to samples from an under-represented class.
     * @param sampleWeightMode The mode for the sample weights.
     * @return A Promise of weight tensor, of which the size of the first dimension
     *     matches that of `y`.
     */
    function standardizeWeights(y, sampleWeight, classWeight, sampleWeightMode) {
        return __awaiter(this, void 0, void 0, function () {
            var yClasses, yClassIndices, _a, _b, classSampleWeight_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (sampleWeight != null || sampleWeightMode != null) {
                            // TODO(cais): Once 'temporal' mode is implemented, document it in the doc
                            // string.
                            throw new Error('Support sampleWeight is not implemented yet');
                        }
                        if (!(classWeight != null)) return [3 /*break*/, 2];
                        yClasses = tfc.tidy(function () {
                            if (y.shape.length === 1) {
                                // Assume class indices.
                                return y.clone();
                            }
                            else if (y.shape.length === 2) {
                                if (y.shape[1] > 1) {
                                    // Assume one-hot encoding of classes.
                                    var axis = 1;
                                    return y.argMax(axis);
                                }
                                else if (y.shape[1] === 1) {
                                    // Class index.
                                    return y.reshape([y.shape[0]]);
                                }
                                else {
                                    throw new Error("Encountered unexpected last-dimension size (" + y.shape[1] + ") " +
                                        "during handling of class weights. The size is expected to be " +
                                        ">= 1.");
                                }
                            }
                            else {
                                throw new Error("Unexpected rank of target (y) tensor (" + y.rank + ") during " +
                                    "handling of class weights. The rank is expected to be 1 or 2.");
                            }
                        });
                        _b = (_a = Array).from;
                        return [4 /*yield*/, yClasses.data()];
                    case 1:
                        yClassIndices = _b.apply(_a, [_c.sent()]);
                        tfc.dispose(yClasses);
                        classSampleWeight_1 = [];
                        yClassIndices.forEach(function (classIndex) {
                            if (classWeight[classIndex] == null) {
                                throw new Error("classWeight must contain all classes in the training data. " +
                                    ("The class " + classIndex + " exists in the data but not in ") +
                                    "classWeight");
                            }
                            else {
                                classSampleWeight_1.push(classWeight[classIndex]);
                            }
                        });
                        return [2 /*return*/, tfc.tensor1d(classSampleWeight_1, 'float32')];
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    }
    /**
     * Apply per-sample weights on the loss values from a number of samples.
     *
     * @param losses Loss tensor of shape `[batchSize]`.
     * @param sampleWeights Per-sample weight tensor of shape `[batchSize]`.
     * @returns Tensor of the same shape as`losses`.
     */
    function computeWeightedLoss(losses, sampleWeights) {
        return tfc.mul(losses, sampleWeights);
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    // Default batch size used during tensor-based validation.
    var DEFAULT_VALIDATION_BATCH_SIZE = 32;
    /**
     * Standardize the output of a dataset iterator for use by
     * LayersModel.fitDataset().
     *
     * @param model: A `tf.LayersModel` object.
     * @param iteratorOut The output of a dataset iterator. It is required to be
     *   an object of the form `{xs: TensorOrArrayOrMap, ys:
     * TensorOrArrayOrMap}`, where `TensorOrArrayOrMap` is a single `tf.Tensor`,
     * a `tf.Tensor[]`, or a flat map from string names to `tf.Tensor`s.
     * @returns A flat array of `tf.Tensor` objects: the input `tf.Tensor`s
     *   followed by the target `tf.Tensor`s.  When `tf.Tensor`s are provided
     *   as a map, the order in the resulting array is taken from the `inputNames`
     *   and `outputNames` of the model.
     */
    function standardizeDataIteratorOutput(
    // Type `model` as `any` here to avoid circular dependency w/
    // training.ts.
    // tslint:disable-next-line:no-any
    model, iteratorOut) {
        var xs;
        var ys;
        var iteratorOutObj = iteratorOut;
        xs = iteratorOutObj['xs'];
        ys = iteratorOutObj['ys'];
        tfc.util.assert(xs != null && ys != null, function () { return 'A Dataset iterator for fitDataset() is expected to generate ' +
            'objects of the form `{xs: xVal, ys: yVal}`, where the two ' +
            'values may be `tf.Tensor`, an array of Tensors, or a map of ' +
            'string to Tensor.  The provided Dataset instead generates ' +
            iteratorOut; });
        var flattenedXs = flattenTensorOrArrayOrMap('input', model.inputNames, xs);
        var flattenedYs = flattenTensorOrArrayOrMap('output', model.outputNames, ys);
        var batchSize = flattenedXs[0].shape[0];
        tfc.util.assert(flattenedXs.length === model.inputs.length, function () { return "LayersModel has " + model.inputs.length + " inputs, but the dataset " +
            ("provides " + flattenedXs.length + " inputs.  (Expected input keys: ") +
            (JSON.stringify(model.inputNames) + ")"); });
        tfc.util.assert(flattenedYs.length === model.outputs.length, function () {
            return "LayersModel has " + model.outputs.length + " outputs, but the dataset " +
                ("provides " + flattenedYs.length + " outputs.  (Expected output keys: ") +
                (JSON.stringify(model.outputNames) + ")");
        });
        var _loop_1 = function (xIndex) {
            tfc.util.assert(flattenedXs[xIndex].shape[0] === batchSize, function () { return "Batch size mismatch: input " +
                (model.inputNames[xIndex] + " has " + flattenedXs[xIndex].shape[0] + "; ") +
                ("expected  " + batchSize + " based on input " + model.inputNames[0] + "."); });
        };
        for (var xIndex in flattenedXs) {
            _loop_1(xIndex);
        }
        var _loop_2 = function (yIndex) {
            tfc.util.assert(flattenedYs[yIndex].shape[0] === batchSize, function () { return "Batch size mismatch: output " +
                (model.outputNames[yIndex] + " has " + flattenedYs[yIndex].shape[0] + "; ") +
                ("expected  " + batchSize + " based on input " + model.inputNames[0] + "."); });
        };
        for (var yIndex in flattenedYs) {
            _loop_2(yIndex);
        }
        return { xs: flattenedXs, ys: flattenedYs };
    }
    function flattenTensorOrArrayOrMap(inputOrOutput, names, values) {
        if (values instanceof tfc.Tensor) {
            return [values];
        }
        else if (Array.isArray(values)) {
            tfc.util.assert(values.length === names.length, function () { return "Received an array of " + values.length + " Tensors, but expected " + names.length + " to match the " + inputOrOutput + " keys " + names + "."; });
            return values;
        }
        else {
            var result = [];
            // Check that all the required keys are available.
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var name_1 = names_1[_i];
                if (values[name_1] == null) {
                    throw new ValueError("The feature data generated by the dataset lacks the required " +
                        (inputOrOutput + " key '" + name_1 + "'."));
                }
                result.push(values[name_1]);
            }
            return result;
        }
    }
    function standardizeTensorValidationData(data) {
        if (data.length === 3) {
            throw new NotImplementedError('Validation with sample weights is not implemented yet.');
        }
        return { xs: data[0], ys: data[1] };
    }
    function fitDataset(
    // Type `model` as `any` here to avoid circular dependency w/
    // training.ts.
    // tslint:disable-next-line:no-any
    model, dataset, args) {
        return __awaiter(this, void 0, void 0, function () {
            var hasBatchesPerEpoch, doValidation, valXs, valYs, validationData, trainFunction, outLabels, callbackMetrics, callbacks, verbose, _a, callbackList, history_1, epoch, dataIterator, epochLogs, stepsDone, batchIndex, iteratorOut, _b, xs, ys, batchLogs, sampleWeights, standardClassWeights, i, _c, _d, ins, outs, i, label, out, valOuts, _e, i;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        hasBatchesPerEpoch = args.batchesPerEpoch != null;
                        tfc.util.assert(model.optimizer != null, function () { return 'You must compile a model before training/testing. Use ' +
                            'LayersModel.compile(modelCompileConfig).'; });
                        tfc.util.assert(args != null, function () { return "For fitDataset(), the 2nd argument (config) is required, " +
                            "but it is not provided in this call."; });
                        tfc.util.assert(args.epochs != null && args.epochs > 0 && Number.isInteger(args.epochs), function () { return "For fitDataset(), config.epochs is expected to be a positive " +
                            ("integer, but got " + args.epochs); });
                        tfc.util.assert(!hasBatchesPerEpoch ||
                            (args.batchesPerEpoch > 0 && Number.isInteger(args.batchesPerEpoch)), function () { return "For fitDataset(), config.batchesPerEpoch is expected to be a " +
                            ("positive integer if specified, but got " + args.batchesPerEpoch); });
                        tfc.util.assert(
                        // tslint:disable-next-line:no-any
                        args['validationSplit'] == null, function () { return '`validationSplit` is not supported by `fitDataset()`. ' +
                            'Use validationData instead.'; });
                        if (model.isTraining) {
                            throw new Error('Cannot start training because another fit() call is ongoing.');
                        }
                        model.isTraining = true;
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, , 26, 27]);
                        doValidation = args.validationData != null;
                        valXs = void 0;
                        valYs = void 0;
                        if (doValidation) {
                            if (isDatasetObject(args.validationData)) {
                                tfc.util.assert(args.validationBatches == null ||
                                    (args.validationBatches > 0 &&
                                        Number.isInteger(args.validationBatches)), function () { return "For fitDataset() with dataset-based validation, " +
                                    "config.validationBatches is expected not to be provided, " +
                                    "or to be a positive integer, " +
                                    ("but got " + args.validationBatches); });
                            }
                            else {
                                validationData = standardizeTensorValidationData(args.validationData);
                                valXs = validationData.xs;
                                valYs = validationData.ys;
                            }
                        }
                        trainFunction = model.makeTrainFunction();
                        outLabels = model.getDedupedMetricsNames();
                        callbackMetrics = void 0;
                        if (doValidation) {
                            callbackMetrics =
                                outLabels.slice().concat(outLabels.map(function (n) { return 'val_' + n; }));
                        }
                        else {
                            callbackMetrics = outLabels.slice();
                        }
                        callbacks = standardizeCallbacks(args.callbacks, args.yieldEvery);
                        verbose = args.verbose == null ? 1 : args.verbose;
                        _a = configureCallbacks(callbacks, verbose, args.epochs, null, null, getStepsPerEpoch(dataset, args), null, // Batch size determined by the dataset itself.
                        doValidation, callbackMetrics), callbackList = _a.callbackList, history_1 = _a.history;
                        callbackList.setModel(model);
                        model.history = history_1;
                        return [4 /*yield*/, callbackList.onTrainBegin()];
                    case 2:
                        _f.sent();
                        model.stopTraining_ = false;
                        epoch = args.initialEpoch == null ? 0 : args.initialEpoch;
                        return [4 /*yield*/, dataset.iterator()];
                    case 3:
                        dataIterator = _f.sent();
                        _f.label = 4;
                    case 4:
                        if (!(epoch < args.epochs)) return [3 /*break*/, 23];
                        epochLogs = {};
                        return [4 /*yield*/, callbackList.onEpochBegin(epoch)];
                    case 5:
                        _f.sent();
                        stepsDone = 0;
                        batchIndex = 0;
                        if (!!hasBatchesPerEpoch) return [3 /*break*/, 7];
                        return [4 /*yield*/, dataset.iterator()];
                    case 6:
                        dataIterator = _f.sent();
                        _f.label = 7;
                    case 7:
                        if (!(hasBatchesPerEpoch ? stepsDone < args.batchesPerEpoch : true)) return [3 /*break*/, 21];
                        return [4 /*yield*/, dataIterator.next()];
                    case 8:
                        iteratorOut = _f.sent();
                        // If `batchesPerEpoch` is specified, the dataset should not be
                        // exhausted until all epoches are done.
                        if (hasBatchesPerEpoch && iteratorOut.done) {
                            console.warn('You provided `batchesPerEpoch` as ' +
                                (args.batchesPerEpoch + ", ") +
                                'but your dataset iterator ran out of data after ' +
                                (stepsDone + " batches; ") +
                                'interrupting training. Make sure that your ' +
                                'dataset can generate at least `batchesPerEpoch * epochs` ' +
                                'batches (in this case, ' +
                                (args.batchesPerEpoch * args.epochs + " batches). ") +
                                'You may need to use the repeat() function when building ' +
                                'your dataset.');
                            return [3 /*break*/, 21];
                        }
                        if (!(iteratorOut.value != null)) return [3 /*break*/, 15];
                        _b = standardizeDataIteratorOutput(model, iteratorOut.value), xs = _b.xs, ys = _b.ys;
                        batchLogs = {};
                        batchLogs['batch'] = batchIndex;
                        batchLogs['size'] = xs[0].shape[0];
                        return [4 /*yield*/, callbackList.onBatchBegin(batchIndex, batchLogs)];
                    case 9:
                        _f.sent();
                        sampleWeights = [];
                        if (!(args.classWeight != null)) return [3 /*break*/, 13];
                        standardClassWeights = standardizeClassWeights(args.classWeight, model.outputNames);
                        i = 0;
                        _f.label = 10;
                    case 10:
                        if (!(i < standardClassWeights.length)) return [3 /*break*/, 13];
                        _d = (_c = sampleWeights).push;
                        return [4 /*yield*/, standardizeWeights(ys[i], null, standardClassWeights[i])];
                    case 11:
                        _d.apply(_c, [_f.sent()]);
                        _f.label = 12;
                    case 12:
                        ++i;
                        return [3 /*break*/, 10];
                    case 13:
                        ins = xs.concat(ys).concat(sampleWeights);
                        outs = trainFunction(ins);
                        tfc.dispose(ins);
                        for (i = 0; i < outLabels.length; ++i) {
                            label = outLabels[i];
                            out = outs[i];
                            batchLogs[label] = out;
                            tfc.keep(out);
                        }
                        return [4 /*yield*/, callbackList.onBatchEnd(batchIndex, batchLogs)];
                    case 14:
                        _f.sent();
                        disposeTensorsInLogs(batchLogs);
                        batchIndex++;
                        stepsDone++;
                        _f.label = 15;
                    case 15:
                        if (!(hasBatchesPerEpoch ? stepsDone >= args.batchesPerEpoch :
                            iteratorOut.done)) return [3 /*break*/, 20];
                        if (!doValidation) return [3 /*break*/, 19];
                        valOuts = void 0;
                        if (!isDatasetObject(args.validationData)) return [3 /*break*/, 17];
                        _e = toList;
                        return [4 /*yield*/, model.evaluateDataset(args.validationData, { batches: args.validationBatches })];
                    case 16:
                        valOuts = _e.apply(void 0, [_f.sent()]);
                        return [3 /*break*/, 18];
                    case 17:
                        valOuts = toList(model.evaluate(valXs, valYs, {
                            batchSize: args.validationBatchSize == null ?
                                DEFAULT_VALIDATION_BATCH_SIZE :
                                args.validationBatchSize,
                            verbose: 0
                        }));
                        _f.label = 18;
                    case 18:
                        for (i = 0; i < model.metricsNames.length; ++i) {
                            epochLogs["val_" + model.metricsNames[i]] = valOuts[i];
                        }
                        _f.label = 19;
                    case 19: 
                    // Call `break` to exit one epoch lopp after validation is done. If
                    // config.batchesPerEpoch is specified, an epoch while loop will
                    // stop when `stepsDone >= config.batchesPerEpoch`. When
                    // config.batchesPerEpoch is not provided, the following `break` is
                    // required to exit the while lopp after dataset is exhausted.
                    return [3 /*break*/, 21];
                    case 20:
                        if (model.stopTraining_) {
                            return [3 /*break*/, 21];
                        }
                        return [3 /*break*/, 7];
                    case 21: return [4 /*yield*/, callbackList.onEpochEnd(epoch, epochLogs)];
                    case 22:
                        _f.sent();
                        epoch++;
                        if (model.stopTraining_) {
                            return [3 /*break*/, 23];
                        }
                        return [3 /*break*/, 4];
                    case 23: return [4 /*yield*/, callbackList.onTrainEnd()];
                    case 24:
                        _f.sent();
                        return [4 /*yield*/, model.history.syncData()];
                    case 25:
                        _f.sent();
                        return [2 /*return*/, model.history];
                    case 26:
                        model.isTraining = false;
                        return [7 /*endfinally*/];
                    case 27: return [2 /*return*/];
                }
            });
        });
    }
    /** Helper function that determines number of steps (batches) per epoch. */
    function getStepsPerEpoch(dataset, args) {
        // Attempt to determine # of batches in an epoch.
        var stepsPerEpoch = null;
        if (args.batchesPerEpoch != null) {
            stepsPerEpoch = args.batchesPerEpoch;
        }
        else if (Number.isFinite(dataset.size)) {
            stepsPerEpoch = dataset.size;
        }
        return stepsPerEpoch;
    }
    // Check if provided object is a Dataset object by checking it's .iterator
    // element.
    function isDatasetObject(dataset) {
        return (typeof dataset.iterator === 'function');
    }
    // Check if provided object is a LazyIterator object by checking it's .next
    // element.
    function isLazyIteratorObject(iterator) {
        return (typeof iterator.next === 'function');
    }
    function evaluateDataset(
    // Type `model` as `any` here to avoid circular dependency w/
    // training.ts.
    // tslint:disable-next-line:no-any
    model, dataset, args) {
        return __awaiter(this, void 0, void 0, function () {
            var hasBatches, f, outs, dataIterator, _a, numExamples, batch, _loop_3, state_1, i, oldScalar;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        args = args || {};
                        hasBatches = args.batches != null;
                        f = model.testFunction;
                        outs = [];
                        if (args.verbose > 0) {
                            throw new NotImplementedError('Verbose mode is not implemented yet.');
                        }
                        tfc.util.assert(!hasBatches || (args.batches > 0 && Number.isInteger(args.batches)), function () { return 'Test loop expects `batches` to be a positive integer, but ' +
                            ("received " + JSON.stringify(args.batches)); });
                        if (!isLazyIteratorObject(dataset)) return [3 /*break*/, 1];
                        _a = dataset;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, dataset.iterator()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        dataIterator = _a;
                        numExamples = 0;
                        batch = 0;
                        _loop_3 = function () {
                            var iteratorOut;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, dataIterator.next()];
                                    case 1:
                                        iteratorOut = _a.sent();
                                        outs = tfc.tidy(function () {
                                            if (iteratorOut.value) {
                                                // TODO(cais): Once real dataset is available, use
                                                //   `map(x => standardizeDataIteratorOutput(model, x).map(f)`.
                                                var _a = standardizeDataIteratorOutput(model, iteratorOut.value), xs = _a.xs, ys = _a.ys;
                                                var xsAndYs_1 = xs.concat(ys);
                                                var batchOuts = tfc.tidy(function () { return f(xsAndYs_1); });
                                                tfc.dispose(xsAndYs_1);
                                                if (batch === 0) {
                                                    for (var i = 0; i < batchOuts.length; ++i) {
                                                        outs.push(tfc.scalar(0));
                                                    }
                                                }
                                                var batchSize_1 = xsAndYs_1[0].shape[0];
                                                var _loop_4 = function (i) {
                                                    var batchOut = batchOuts[i];
                                                    var oldScalar = outs[i];
                                                    outs[i] = tfc.tidy(function () {
                                                        return tfc.add(outs[i], tfc.mul(batchSize_1, batchOut));
                                                    });
                                                    if (batch > 0) {
                                                        tfc.dispose(oldScalar);
                                                    }
                                                };
                                                for (var i = 0; i < batchOuts.length; ++i) {
                                                    _loop_4(i);
                                                }
                                                tfc.dispose(batchOuts);
                                                numExamples += batchSize_1;
                                                ++batch;
                                            }
                                            return outs;
                                        });
                                        if (iteratorOut.done) {
                                            if (hasBatches) {
                                                console.warn('Your dataset iterator ran out of data during evaluateDataset(). ' +
                                                    'Interrupting evalution. Make sure that your ' +
                                                    'dataset can generate at least `batches` ' +
                                                    ("batches (in this case, " + args.batches + " batches). ") +
                                                    'You may need to use the repeat() function when building ' +
                                                    'your dataset.');
                                            }
                                            return [2 /*return*/, "break"];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _b.label = 4;
                    case 4:
                        if (!(hasBatches ? batch < args.batches : true)) return [3 /*break*/, 6];
                        return [5 /*yield**/, _loop_3()];
                    case 5:
                        state_1 = _b.sent();
                        if (state_1 === "break")
                            return [3 /*break*/, 6];
                        return [3 /*break*/, 4];
                    case 6:
                        for (i = 0; i < outs.length; ++i) {
                            oldScalar = outs[i];
                            outs[i] = tfc.div(outs[i], numExamples);
                            tfc.dispose(oldScalar);
                        }
                        return [2 /*return*/, singletonOrArray(outs)];
                }
            });
        });
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    function checkBatchSize(batchSize) {
        tfc.util.assert(batchSize > 0 && Number.isInteger(batchSize), function () { return "batchSize is required to be a positive integer, but got " + batchSize; });
    }
    /**
     * Slice an Tensor or an Array of Tensors, by start and stop indices.
     *
     * Porting Note: The `_slice_arrays` function in PyKeras is covered by this
     *   function and `sliceArraysByIndices()` together.
     *
     * @param arrays: the input.
     * @param start: the starting index (inclusive).
     * @param stop: the stopping index (exclusive).
     * @returns The result of the slicing. If `arrays` is an `Array` of
     *   `tf.Tensor`s, the slicing will be applied to all elements of the `Array`
     *   in the same way.
     */
    function sliceArrays(arrays, start, stop) {
        if (arrays == null) {
            return [null];
        }
        else if (Array.isArray(arrays)) {
            return arrays.map(function (array) { return sliceAlongFirstAxis(array, start, stop - start); });
        }
        else { // Tensor.
            return sliceAlongFirstAxis(arrays, start, stop - start);
        }
    }
    /**
     * Slice an Tensor or an Array of Tensors, by random-order indices.
     *
     * Porting Note: The `_slice_arrays` function in PyKeras is covered by this
     *   function and `sliceArrays()` together.
     *
     * @param arrays The input `tf.Tensor` or `Array` of `tf.Tensor`s to slice.
     *   If an `Array` of `tf.Tensor`s, all `tf.Tensor`s will be sliced in the
     *   same fashion.
     * @param indices The indices to use for slicing along the first (batch)
     *   dimension.
     * @returns Result(s) of the slicing.
     */
    function sliceArraysByIndices(arrays, indices) {
        return tfc.tidy(function () {
            if (arrays == null) {
                return null;
            }
            else if (Array.isArray(arrays)) {
                return arrays.map(function (array) { return sliceArraysByIndices(array, indices); });
            }
            else {
                // TODO(cais): indices should be a pre-constructed Tensor1D to avoid
                //   tensor1d() calls.
                return gather(arrays, indices.dtype === 'int32' ? indices : indices.toInt());
            }
        });
    }
    /**
     * Returns a list of batch indices (tuples of indices).
     * @param size: Integer, total size of the data to slice into batches.
     * @param batchSize: Integer, batch size.
     * @returns An Array of [batchStart, batchEnd] tuples. batchStart is
     *   inclusive; batchEnd is exclusive. I.e., each batch consists of indices x
     *   that satisfy batchStart <= x < batchEnd.
     */
    function makeBatches(size, batchSize) {
        var output = [];
        var batchStart = 0;
        var batchEnd = null;
        while (batchStart < size) {
            batchEnd = batchStart + batchSize;
            if (batchEnd >= size) {
                batchEnd = size;
            }
            output.push([batchStart, batchEnd]);
            batchStart = batchEnd;
        }
        return output;
    }
    /**
     * Abstract fit function for `f(ins)`.
     * @param f A Function returning a list of tensors. For training, this
     *   function is expected to perform the updates to the variables.
     * @param ins List of tensors to be fed to `f`.
     * @param outLabels List of strings, display names of the outputs of `f`.
     * @param batchSize Integer batch size or `== null` if unknown.
     * @param epochs Number of times to iterate over the data.
     * @param verbose Verbosity mode: 0, 1, or 2. Default: 1.
     * @param callbacks List of callbacks to be called during training.
     * @param valF Function to call for validation.
     * @param valIns List of tensors to be fed to `valF`.
     * @param shuffle Whether to shuffle the data at the beginning of every
     * epoch.
     * @param callbackMetrics List of strings, the display names of the metrics
     *   passed to the callbacks. They should be the concatenation of the
     *   display names of the outputs of `f` and the list of display names
     *   of the outputs of `valF`.
     * @param initialEpoch Epoch at which to start training (useful for
     *   resuming a previous training run).
     * @param stepsPerEpoch Total number of steps (batches on samples) before
     *   declaring one epoch finished and starting the next epoch. Ignored with
     *   the default value of `undefined` or `null`.
     * @param validationSteps Number of steps to run validation for (only if
     *   doing validation from data tensors). Not applicable for tfjs-layers.
     * @returns A `History` object.
     */
    function fitLoop(
    // Type `model` as `any` here to avoid circular dependency w/ training.ts.
    // tslint:disable-next-line:no-any
    model, f, ins, outLabels, batchSize, epochs, verbose, callbacks, valF, valIns, shuffle, callbackMetrics, initialEpoch, stepsPerEpoch, validationSteps) {
        return __awaiter(this, void 0, void 0, function () {
            var doValidation, numTrainSamples, indexArray, _a, callbackList, history, _loop_1, epoch, state_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (batchSize == null) {
                            batchSize = 32;
                        }
                        if (epochs == null) {
                            epochs = 1;
                        }
                        if (shuffle == null) {
                            shuffle = true;
                        }
                        if (initialEpoch == null) {
                            initialEpoch = 0;
                        }
                        doValidation = false;
                        if (valF != null && valIns != null) {
                            doValidation = true;
                            // TODO(cais): verbose message.
                        }
                        if (validationSteps != null) {
                            doValidation = true;
                            if (stepsPerEpoch == null) {
                                throw new ValueError('Can only use `validationSteps` when doing step-wise training, ' +
                                    'i.e., `stepsPerEpoch` must be set.');
                            }
                        }
                        numTrainSamples = model.checkNumSamples(ins, batchSize, stepsPerEpoch, 'steps_per_epoch');
                        if (numTrainSamples != null) {
                            indexArray = range(0, numTrainSamples);
                        }
                        if (verbose == null) {
                            verbose = 1;
                        }
                        _a = configureCallbacks(callbacks, verbose, epochs, initialEpoch, numTrainSamples, stepsPerEpoch, batchSize, doValidation, callbackMetrics), callbackList = _a.callbackList, history = _a.history;
                        callbackList.setModel(model);
                        model.history = history;
                        return [4 /*yield*/, callbackList.onTrainBegin()];
                    case 1:
                        _b.sent();
                        model.stopTraining_ = false;
                        _loop_1 = function (epoch) {
                            var epochLogs, epochIndexArray1D_1, batches_1, _loop_2, batchIndex, state_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, callbackList.onEpochBegin(epoch)];
                                    case 1:
                                        _a.sent();
                                        epochLogs = {};
                                        if (!(stepsPerEpoch != null)) return [3 /*break*/, 2];
                                        throw new NotImplementedError('stepsPerEpoch mode is not implemented yet.');
                                    case 2:
                                        if (shuffle === 'batch') {
                                            throw new NotImplementedError('batch shuffling is not implemneted yet');
                                        }
                                        else if (shuffle) {
                                            tfc.util.shuffle(indexArray);
                                        }
                                        epochIndexArray1D_1 = tfc.tensor1d(indexArray);
                                        batches_1 = makeBatches(numTrainSamples, batchSize);
                                        _loop_2 = function (batchIndex) {
                                            var batchLogs;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        batchLogs = {};
                                                        return [4 /*yield*/, callbackList.onBatchBegin(batchIndex, batchLogs)];
                                                    case 1:
                                                        _a.sent();
                                                        tfc.tidy(function () {
                                                            var batchStart = batches_1[batchIndex][0];
                                                            var batchEnd = batches_1[batchIndex][1];
                                                            var batchIds = sliceAlongFirstAxis(epochIndexArray1D_1, batchStart, batchEnd - batchStart);
                                                            batchLogs['batch'] = batchIndex;
                                                            batchLogs['size'] = batchEnd - batchStart;
                                                            // TODO(cais): In ins, train flag can be a number, instead of an
                                                            //   Tensor? Do we need to handle this in tfjs-layers?
                                                            var insBatch = sliceArraysByIndices(ins, batchIds);
                                                            var outs = f(insBatch);
                                                            for (var i = 0; i < outLabels.length; ++i) {
                                                                var label = outLabels[i];
                                                                var out = outs[i];
                                                                batchLogs[label] = out;
                                                                tfc.keep(out);
                                                                // TODO(cais): Use scope() to avoid ownership.
                                                            }
                                                            if (batchIndex === batches_1.length - 1) { // Last batch.
                                                                if (doValidation) {
                                                                    var valOuts = model.testLoop(valF, valIns, batchSize);
                                                                    // Porting Notes: In tfjs-layers, valOuts is always an Array.
                                                                    for (var i = 0; i < outLabels.length; ++i) {
                                                                        var label = outLabels[i];
                                                                        var out = valOuts[i];
                                                                        tfc.keep(out);
                                                                        // TODO(cais): Use scope() to avoid ownership.
                                                                        epochLogs['val_' + label] = out;
                                                                    }
                                                                }
                                                            }
                                                        });
                                                        return [4 /*yield*/, callbackList.onBatchEnd(batchIndex, batchLogs)];
                                                    case 2:
                                                        _a.sent();
                                                        disposeTensorsInLogs(batchLogs);
                                                        if (model.stopTraining_) {
                                                            return [2 /*return*/, "break"];
                                                        }
                                                        return [2 /*return*/];
                                                }
                                            });
                                        };
                                        batchIndex = 0;
                                        _a.label = 3;
                                    case 3:
                                        if (!(batchIndex < batches_1.length)) return [3 /*break*/, 6];
                                        return [5 /*yield**/, _loop_2(batchIndex)];
                                    case 4:
                                        state_2 = _a.sent();
                                        if (state_2 === "break")
                                            return [3 /*break*/, 6];
                                        _a.label = 5;
                                    case 5:
                                        ++batchIndex;
                                        return [3 /*break*/, 3];
                                    case 6:
                                        epochIndexArray1D_1.dispose();
                                        _a.label = 7;
                                    case 7: 
                                    // TODO(cais): Run validation at the end of the epoch.
                                    return [4 /*yield*/, callbackList.onEpochEnd(epoch, epochLogs)];
                                    case 8:
                                        // TODO(cais): Run validation at the end of the epoch.
                                        _a.sent();
                                        if (model.stopTraining_) {
                                            return [2 /*return*/, "break"];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        epoch = initialEpoch;
                        _b.label = 2;
                    case 2:
                        if (!(epoch < epochs)) return [3 /*break*/, 5];
                        return [5 /*yield**/, _loop_1(epoch)];
                    case 3:
                        state_1 = _b.sent();
                        if (state_1 === "break")
                            return [3 /*break*/, 5];
                        _b.label = 4;
                    case 4:
                        ++epoch;
                        return [3 /*break*/, 2];
                    case 5: return [4 /*yield*/, callbackList.onTrainEnd()];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, model.history.syncData()];
                    case 7:
                        _b.sent();
                        return [2 /*return*/, model.history];
                }
            });
        });
    }
    function fitTensors(
    // Type `model` as `any` here to avoid circular dependency w/ training.ts.
    // tslint:disable-next-line:no-any
    model, x, y, args) {
        if (args === void 0) { args = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var inputs, targets, inputValX, inputValY, valX, valY, sampleWeights, batchSize, checkBatchAxis, standardizedOuts, doValidation, valIns, checkBatchAxis_1, valStandardized, splitAt, originalBatchSize, ins, trainFunction, outLabels, valFunction, callbackMetrics, callbacks, out;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (model.isTraining) {
                            throw new Error('Cannot start training because another fit() call is ongoing.');
                        }
                        model.isTraining = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 7, 8]);
                        batchSize = args.batchSize == null ? 32 : args.batchSize;
                        checkBatchSize(batchSize);
                        checkBatchAxis = false;
                        return [4 /*yield*/, model.standardizeUserData(x, y, args.sampleWeight, args.classWeight, checkBatchAxis, batchSize)];
                    case 2:
                        standardizedOuts = _a.sent();
                        inputs = standardizedOuts[0];
                        targets = standardizedOuts[1];
                        sampleWeights = standardizedOuts[2];
                        doValidation = false;
                        valIns = void 0;
                        if (!(args.validationData != null && args.validationData.length > 0)) return [3 /*break*/, 4];
                        doValidation = true;
                        if (args.validationData.length === 2) {
                            // config.validationData consists of valX and valY.
                            inputValX = args.validationData[0];
                            inputValY = args.validationData[1];
                        }
                        else if (args.validationData.length === 3) {
                            throw new NotImplementedError('validationData including sample weights is not supported yet.');
                        }
                        else {
                            throw new ValueError("When passing validation data, it must contain 2 (valX, valY) " +
                                "or 3 (valX, valY, valSampleWeight) items; " +
                                (args.validationData + " is invalid."));
                        }
                        checkBatchAxis_1 = true;
                        return [4 /*yield*/, model.standardizeUserData(inputValX, inputValY, null, /** Unused sample weights. */ null, /** Unused class weights. */ checkBatchAxis_1, batchSize)];
                    case 3:
                        valStandardized = _a.sent();
                        valX = valStandardized[0];
                        valY = valStandardized[1];
                        valIns = valX.concat(valY);
                        return [3 /*break*/, 5];
                    case 4:
                        if (args.validationSplit != null && args.validationSplit > 0 &&
                            args.validationSplit < 1) {
                            doValidation = true;
                            splitAt = Math.floor(inputs[0].shape[0] * (1 - args.validationSplit));
                            originalBatchSize = inputs[0].shape[0];
                            valX = sliceArrays(inputs, splitAt, originalBatchSize);
                            inputs = sliceArrays(inputs, 0, splitAt);
                            valY = sliceArrays(targets, splitAt, originalBatchSize);
                            targets = sliceArrays(targets, 0, splitAt);
                            // TODO(cais): Once sampleWeights becomes available, slice it to get
                            //   valSampleWeights.
                            valIns = valX.concat(valY);
                            // TODO(cais): Add useLearningPhase data properly.
                        }
                        else if (args.validationSteps != null) {
                            doValidation = true;
                            // TODO(cais): Add useLearningPhase.
                        }
                        _a.label = 5;
                    case 5:
                        ins = inputs.concat(targets).concat(sampleWeights);
                        model.checkTrainableWeightsConsistency();
                        trainFunction = model.makeTrainFunction();
                        outLabels = model.getDedupedMetricsNames();
                        valFunction = void 0;
                        callbackMetrics = void 0;
                        if (doValidation) {
                            model.makeTestFunction();
                            valFunction = model.testFunction;
                            callbackMetrics =
                                outLabels.slice().concat(outLabels.map(function (n) { return 'val_' + n; }));
                        }
                        else {
                            valFunction = null;
                            valIns = [];
                            callbackMetrics = outLabels.slice();
                        }
                        callbacks = standardizeCallbacks(args.callbacks, args.yieldEvery);
                        return [4 /*yield*/, fitLoop(model, trainFunction, ins, outLabels, batchSize, args.epochs, args.verbose, callbacks, valFunction, valIns, args.shuffle, callbackMetrics, args.initialEpoch, null, null)];
                    case 6:
                        out = _a.sent();
                        return [2 /*return*/, out];
                    case 7:
                        model.isTraining = false;
                        // Memory clean up.
                        disposeNewTensors(inputs, x);
                        disposeNewTensors(targets, y);
                        disposeNewTensors(valX, inputValX);
                        disposeNewTensors(valY, inputValY);
                        if (sampleWeights != null) {
                            tfc.dispose(sampleWeights);
                        }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    }
    /**
     * Ensure tensors all have a rank of at least 2.
     *
     * If a tensor has a rank of 1, it is dimension-expanded to rank 2.
     * If any tensor has a rank of 0 (i.e., is a scalar), an error will be thrown.
     */
    function ensureTensorsRank2OrHigher(tensors) {
        var outs = [];
        if (tensors instanceof tfc.Tensor) {
            tensors = [tensors];
        }
        // Make Tensors at least 2D.
        for (var i = 0; i < tensors.length; ++i) {
            var tensor = tensors[i];
            if (tensor.rank === 1) {
                outs.push(expandDims(tensor, 1));
            }
            else if (tensor.rank === 0) {
                throw new Error('Expected tensor to be at least 1D, but received a 0D tensor ' +
                    '(scalar).');
            }
            else {
                outs.push(tensor);
            }
        }
        return outs;
    }
    /**
     * Compare a set of tensors with a reference (old) set, discard the ones
     * in the new set that are not present in the reference set.
     *
     * This method is used for memory clenaup during calls such as
     * LayersModel.fit().
     *
     * @param tensors New set which may contain Tensors not present in
     *   `refTensors`.
     * @param refTensors Reference Tensor set.
     */
    // TODO(cais, kangyizhang): Deduplicate with tfjs-data.
    function disposeNewTensors(tensors, refTensors) {
        if (tensors == null) {
            return;
        }
        var oldTensorIds = [];
        if (refTensors instanceof tfc.Tensor) {
            oldTensorIds.push(refTensors.id);
        }
        else if (Array.isArray(refTensors)) {
            refTensors.forEach(function (t) { return oldTensorIds.push(t.id); });
        }
        else if (refTensors != null) {
            // `oldTensors` is a map from string name to Tensor.
            for (var name_1 in refTensors) {
                var oldTensor = refTensors[name_1];
                oldTensorIds.push(oldTensor.id);
            }
        }
        var tensorsToDispose = [];
        if (tensors instanceof tfc.Tensor) {
            if (oldTensorIds.indexOf(tensors.id) === -1) {
                tensorsToDispose.push(tensors);
            }
        }
        else if (Array.isArray(tensors)) {
            tensors.forEach(function (t) {
                if (oldTensorIds.indexOf(t.id) === -1) {
                    tensorsToDispose.push(t);
                }
            });
        }
        else if (tensors != null) {
            // `oldTensors` is a map from string name to Tensor.
            for (var name_2 in tensors) {
                var tensor = tensors[name_2];
                if (oldTensorIds.indexOf(tensor.id) === -1) {
                    tensorsToDispose.push(tensor);
                }
            }
        }
        tensorsToDispose.forEach(function (t) {
            if (!t.isDisposed) {
                t.dispose();
            }
        });
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Helper function for polymorphic input data: 1. singleton Tensor.
     */
    function isDataTensor(x) {
        return x instanceof tfc.Tensor;
    }
    /**
     * Helper function for polymorphic input data: 2. Array of Tensor.
     */
    function isDataArray(x) {
        return Array.isArray(x);
    }
    /**
     * Helper function for polymorphic input data: 3. "dict" of Tensor.
     */
    function isDataDict(x) {
        return !isDataTensor(x) && !isDataArray(x);
    }
    /**
     * Normalizes inputs and targets provided by users.
     * @param data User-provided input data (polymorphic).
     * @param names An Array of expected Tensor names.
     * @param shapes Optional Array of expected Tensor shapes.
     * @param checkBatchAxis Whether to check that the batch axis of the arrays
     *   match  the expected value found in `shapes`.
     * @param exceptionPrefix String prefix used for exception formatting.
     * @returns List of standardized input Tensors (one Tensor per model input).
     * @throws ValueError: in case of improperly formatted user data.
     */
    function standardizeInputData(data, names, shapes, checkBatchAxis, exceptionPrefix) {
        if (checkBatchAxis === void 0) { checkBatchAxis = true; }
        if (exceptionPrefix === void 0) { exceptionPrefix = ''; }
        if (names == null || names.length === 0) {
            // Check for the case where the model expected no data, but some data got
            // sent.
            if (data != null) {
                var gotUnexpectedData = false;
                if (isDataArray(data) && data.length > 0) {
                    gotUnexpectedData = true;
                }
                else if (isDataDict(data)) {
                    for (var key in data) {
                        if (data.hasOwnProperty(key)) {
                            gotUnexpectedData = true;
                            break;
                        }
                    }
                }
                else {
                    // `data` is a singleton Tensor in this case.
                    gotUnexpectedData = true;
                }
                if (gotUnexpectedData) {
                    throw new ValueError("Error when checking model " + exceptionPrefix + " expected no data, " +
                        ("but got " + data));
                }
            }
            return [];
        }
        if (data == null) {
            return names.map(function (name) { return null; });
        }
        var arrays;
        if (isDataDict(data)) {
            data = data;
            arrays = [];
            for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                var name_1 = names_1[_i];
                if (data[name_1] == null) {
                    throw new ValueError("No data provided for \"" + name_1 + "\". Need data for each key in: " +
                        ("" + names));
                }
                arrays.push(data[name_1]);
            }
        }
        else if (isDataArray(data)) {
            data = data;
            if (data.length !== names.length) {
                throw new ValueError("Error when checking model " + exceptionPrefix + ": the Array of " +
                    "Tensors that you are passing to your model is not the size the " +
                    ("model expected. Expected to see " + names.length + " Tensor(s), but ") +
                    ("instead got the following list of Tensor(s): " + data));
            }
            arrays = data;
        }
        else {
            data = data;
            if (names.length > 1) {
                throw new ValueError("The model " + exceptionPrefix + " expects " + names.length + " Tensor(s), " +
                    ("but only received one Tensor. Found: Tensor with shape " + data.shape));
            }
            arrays = [data];
        }
        arrays = ensureTensorsRank2OrHigher(arrays);
        // Check shape compatibility.
        if (shapes != null) {
            for (var i = 0; i < names.length; ++i) {
                if (shapes[i] == null) {
                    continue;
                }
                var array = arrays[i];
                if (array.shape.length !== shapes[i].length) {
                    throw new ValueError("Error when checking " + exceptionPrefix + ": expected " + names[i] + " " +
                        ("to have " + shapes[i].length + " dimension(s). but got array with ") +
                        ("shape " + array.shape));
                }
                for (var j = 0; j < shapes[i].length; ++j) {
                    if (j === 0 && !checkBatchAxis) {
                        // Skip the first (batch) axis.
                        continue;
                    }
                    var dim = array.shape[j];
                    var refDim = shapes[i][j];
                    if (refDim != null && refDim >= 0 && dim !== refDim) {
                        throw new ValueError("Error when checking " + exceptionPrefix + ": expected " + names[i] + " " +
                            ("to have shape [" + shapes[i] + "], but got array with shape ") +
                            ("[" + array.shape + "]."));
                    }
                }
            }
        }
        return arrays;
    }
    /**
     * User input validation for Tensors.
     * @param inputs `Array` of `tf.Tensor`s for inputs.
     * @param targets `Array` of `tf.Tensor`s for targets.
     * @param weights Optional `Array` of `tf.Tensor`s for sample weights.
     * @throws ValueError: in case of incorrectly formatted data.
     */
    function checkArrayLengths(inputs, targets, weights) {
        var setX = unique(inputs.map(function (input) { return input.shape[0]; }));
        setX.sort();
        var setY = unique(targets.map(function (target) { return target.shape[0]; }));
        setY.sort();
        // TODO(cais): Check `weights` as well.
        if (setX.length > 1) {
            throw new ValueError("All input Tensors (x) should have the same number of samples. " +
                "Got array shapes: " +
                ("" + JSON.stringify(inputs.map(function (input) { return input.shape; }))));
        }
        if (setY.length > 1) {
            throw new ValueError("All target Tensors (y) should have the same number of samples. " +
                "Got array shapes: " +
                ("" + JSON.stringify(targets.map(function (target) { return target.shape; }))));
        }
        if (setX.length > 0 && setY.length > 0 && !tfc.util.arraysEqual(setX, setY)) {
            throw new ValueError("Input Tensors should have the same number of samples as target " +
                ("Tensors. Found " + setX[0] + " input sample(s) and " + setY[0] + " target ") +
                "sample(s).");
        }
    }
    /**
     * Validation on the compatibility of targes and loss functions.
     *
     * This helps prevent users from using loss functions incorrectly.
     *
     * @param targets `Array` of `tf.Tensor`s of targets.
     * @param lossFns `Array` of loss functions.
     * @param outputShapes `Array` of shapes of model outputs.
     */
    function checkLossAndTargetCompatibility(targets, lossFns, outputShapes) {
        // TODO(cais): Dedicated test coverage?
        var keyLosses = [
            meanSquaredError, binaryCrossentropy,
            categoricalCrossentropy
        ];
        for (var i = 0; i < targets.length; ++i) {
            var y = targets[i];
            var loss = lossFns[i];
            var shape = outputShapes[i];
            if (loss == null) {
                continue;
            }
            if (loss === categoricalCrossentropy) {
                if (y.shape[y.shape.length - 1] === 1) {
                    throw new ValueError("You are passing a target array of shape " + y.shape + " while using " +
                        "a loss 'categorical_crossentropy'. 'categorical_crossentropy'" +
                        "expects targets to be binary matrices (1s and 0s) of shape " +
                        "[samples, classes].");
                    // TODO(cais): Example code in error message.
                }
            }
            if (keyLosses.indexOf(loss) !== -1) {
                var slicedYShape = y.shape.slice(1);
                var slicedShape = shape.slice(1);
                for (var j = 0; j < slicedYShape.length; ++j) {
                    var targetDim = slicedYShape[j];
                    var outDim = slicedShape[j];
                    if (outDim != null && targetDim !== outDim) {
                        throw new ValueError("A target Tensor with shape " + y.shape + " was passed for an " +
                            ("output of shape " + shape + ", while using a loss function that ") +
                            "expects targets to have the same shape as the output.");
                    }
                }
            }
        }
    }
    /**
     * Check inputs provided by the user.
     *
     * Porting Note: This corresponds to _standardize_input_data() in Python
     *   Keras. Because of the strong typing in TF.js, we do not need to convert
     *   the data. Specifically:
     *   1) in PyKeras, `data` can be `DataFrame` instances from pandas, for
     *      example. We don't need to worry about that here because there is no
     *      widely popular javascript/typesdcript equivalent of pandas (so far).
     *      If one becomes available in the future, we can add support.
     *   2) in PyKeras, inputs can be Python dict. But here we are stipulating
     * that the data is either a single `tf.Tensor` or an Array of `tf.Tensor`s. We
     * may add support for `Object` data inputs in the future when the need
     * arises.
     *
     * Instead, we perform basic checks for number of parameters and shapes.
     *
     * @param data: The input data.
     * @param names: Name for the inputs, from the model.
     * @param shapes: Expected shapes for the input data, from the model.
     * @param checkBatchAxis: Whether the size along the batch axis (i.e., the
     *   first dimension) will be checked for matching.
     * @param exceptionPrefix: Execption prefix message, used in generating error
     *   messages.
     * @throws ValueError: on incorrect number of inputs or mismatches in shapes.
     */
    function checkInputData(data, names, shapes, checkBatchAxis, exceptionPrefix) {
        if (checkBatchAxis === void 0) { checkBatchAxis = true; }
        if (exceptionPrefix === void 0) { exceptionPrefix = ''; }
        var arrays;
        if (Array.isArray(data)) {
            if (data.length !== names.length) {
                throw new ValueError("Error when checking model " + exceptionPrefix + ": the Array of " +
                    "Tensors that you are passing to your model is not the size the " +
                    ("the model expected. Expected to see " + names.length + " Tensor(s),") +
                    (" but instead got " + data.length + " Tensors(s)."));
            }
            arrays = data;
        }
        else {
            if (names.length > 1) {
                throw new ValueError("The model expects " + names.length + " " + exceptionPrefix + " Tensors, " +
                    "but only received one Tensor. Found: array with shape " +
                    (JSON.stringify(data.shape) + "."));
            }
            arrays = [data];
        }
        if (shapes != null) {
            for (var i = 0; i < names.length; ++i) {
                if (shapes[i] == null) {
                    continue;
                }
                var array = arrays[i];
                if (array.shape.length !== shapes[i].length) {
                    throw new ValueError("Error when checking " + exceptionPrefix + ": expected " + names[i] + " " +
                        ("to have " + shapes[i].length + " dimension(s), but got array with ") +
                        ("shape " + JSON.stringify(array.shape)));
                }
                for (var j = 0; j < shapes[i].length; ++j) {
                    if (j === 0 && !checkBatchAxis) {
                        continue;
                    }
                    var dim = array.shape[j];
                    var refDim = shapes[i][j];
                    if (refDim != null) {
                        if (refDim !== dim) {
                            throw new ValueError("Error when checking " + exceptionPrefix + ": expected " +
                                (names[i] + " to have shape " + JSON.stringify(shapes[i]) + " but ") +
                                ("got array with shape " + JSON.stringify(array.shape) + "."));
                        }
                    }
                }
            }
        }
    }
    /**
     * Maps metric functions to model outputs.
     * @param metrics An shortcut strings name, metric function, `Array` or dict
     *   (`Object`) of metric functions.
     * @param outputNames An `Array` of the names of model outputs.
     * @returns An `Array` (one entry per model output) of `Array` of metric
     *   functions. For instance, if the model has 2 outputs, and for the first
     *   output we want to compute `binaryAccuracy` and `binaryCrossentropy`,
     *   and just `binaryAccuracy` for the second output, the `Array` would look
     *   like:
     *     `[[binaryAccuracy, binaryCrossentropy],  [binaryAccuracy]]`
     * @throws TypeError: incompatible metrics format.
     */
    function collectMetrics(metrics, outputNames) {
        if (metrics == null || Array.isArray(metrics) && metrics.length === 0) {
            return outputNames.map(function (name) { return []; });
        }
        var wrappedMetrics;
        if (typeof metrics === 'string' || typeof metrics === 'function') {
            wrappedMetrics = [metrics];
        }
        else if (Array.isArray(metrics) || typeof metrics === 'object') {
            wrappedMetrics = metrics;
        }
        else {
            throw new TypeError('Type of metrics argument not understood. Expected an string,' +
                'function, Array, or Object, found: ' + metrics);
        }
        if (Array.isArray(wrappedMetrics)) {
            // We then apply all metrics to all outputs.
            return outputNames.map(function (name) { return wrappedMetrics; });
        }
        else {
            // In this case, metrics is a dict.
            var nestedMetrics = [];
            for (var _i = 0, outputNames_1 = outputNames; _i < outputNames_1.length; _i++) {
                var name_2 = outputNames_1[_i];
                var outputMetrics = wrappedMetrics.hasOwnProperty(name_2) ? wrappedMetrics[name_2] : [];
                if (!Array.isArray(outputMetrics)) {
                    outputMetrics = [outputMetrics];
                }
                nestedMetrics.push(outputMetrics);
            }
            return nestedMetrics;
        }
    }
    var LAYERS_MODEL_FORMAT_NAME = 'layers-model';
    /**
     * A `tf.LayersModel` is a directed, acyclic graph of `tf.Layer`s plus methods
     * for training, evaluation, prediction and saving.
     *
     * `tf.LayersModel` is the basic unit of training, inference and evaluation in
     * TensorFlow.js. To create a `tf.LayersModel`, use `tf.LayersModel`.
     *
     * See also:
     *   `tf.Sequential`, `tf.loadLayersModel`.
     */
    /** @doc {heading: 'Models', subheading: 'Classes'} */
    var LayersModel = /** @class */ (function (_super) {
        __extends(LayersModel, _super);
        function LayersModel(args) {
            var _this = _super.call(this, args) || this;
            _this.isTraining = false;
            return _this;
        }
        /**
         * Print a text summary of the model's layers.
         *
         * The summary includes
         * - Name and type of all layers that comprise the model.
         * - Output shape(s) of the layers
         * - Number of weight parameters of each layer
         * - If the model has non-sequential-like topology, the inputs each layer
         *   receives
         * - The total number of trainable and non-trainable parameters of the model.
         *
         * ```js
         * const input1 = tf.input({shape: [10]});
         * const input2 = tf.input({shape: [20]});
         * const dense1 = tf.layers.dense({units: 4}).apply(input1);
         * const dense2 = tf.layers.dense({units: 8}).apply(input2);
         * const concat = tf.layers.concatenate().apply([dense1, dense2]);
         * const output =
         *     tf.layers.dense({units: 3, activation: 'softmax'}).apply(concat);
         *
         * const model = tf.model({inputs: [input1, input2], outputs: output});
         * model.summary();
         * ```
         *
         * @param lineLength Custom line length, in number of characters.
         * @param positions Custom widths of each of the columns, as either
         *   fractions of `lineLength` (e.g., `[0.5, 0.75, 1]`) or absolute number
         *   of characters (e.g., `[30, 50, 65]`). Each number corresponds to
         *   right-most (i.e., ending) position of a column.
         * @param printFn Custom print function. Can be used to replace the default
         *   `console.log`. For example, you can use `x => {}` to mute the printed
         *   messages in the console.
         */
        /** @doc {heading: 'Models', subheading: 'Classes'} */
        LayersModel.prototype.summary = function (lineLength, positions, printFn) {
            if (printFn === void 0) { printFn = console.log; }
            if (!this.built) {
                throw new ValueError("This model has never been called, thus its weights have not been " +
                    "created yet. So no summary can be displayed. Build the model " +
                    "first (e.g., by calling it on some test data).");
            }
            printSummary(this, lineLength, positions, printFn);
        };
        /**
         * Configures and prepares the model for training and evaluation.  Compiling
         * outfits the model with an optimizer, loss, and/or metrics.  Calling `fit`
         * or `evaluate` on an un-compiled model will throw an error.
         *
         * @param args a `ModelCompileArgs` specifying the loss, optimizer, and
         * metrics to be used for fitting and evaluating this model.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        LayersModel.prototype.compile = function (args) {
            var _this = this;
            if (args.loss == null) {
                args.loss = [];
            }
            this.loss = args.loss;
            if (typeof args.optimizer === 'string') {
                this.optimizer_ = getOptimizer(args.optimizer);
                this.isOptimizerOwned = true;
            }
            else {
                if (!(args.optimizer instanceof tfc.Optimizer)) {
                    throw new ValueError("User-defined optimizer must be an instance of tf.Optimizer.");
                }
                this.optimizer_ = args.optimizer;
                this.isOptimizerOwned = false;
            }
            // TODO(cais): Add lossWeights.
            // TODO(cais): Add sampleWeightMode.
            // Prepare loss functions.
            var lossFunctions = [];
            if (!Array.isArray(args.loss) && typeof args.loss !== 'string' &&
                typeof args.loss !== 'function') {
                args.loss = args.loss;
                for (var name_3 in args.loss) {
                    if (this.outputNames.indexOf(name_3) === -1) {
                        throw new ValueError("Unknown entry in loss dictionary: \"" + name_3 + "\". " +
                            ("Only expected the following keys: " + this.outputNames));
                    }
                }
                for (var _i = 0, _a = this.outputNames; _i < _a.length; _i++) {
                    var name_4 = _a[_i];
                    if (args.loss[name_4] == null) {
                        console.warn("Output \"" + name_4 + "\" is missing from loss dictionary. We assume " +
                            "this was done on purpose, and we will not be expecting data " +
                            ("to be passed to " + name_4 + " during training"));
                    }
                    lossFunctions.push(get(args.loss[name_4]));
                }
            }
            else if (Array.isArray(args.loss)) {
                if (args.loss.length !== this.outputs.length) {
                    throw new ValueError("When passing an Array as loss, it should have one entry per " +
                        ("model output. The model has " + this.outputs.length + " output(s), ") +
                        ("but you passed loss=" + args.loss + "."));
                }
                var theLosses = args.loss;
                lossFunctions = theLosses.map(function (l) { return get(l); });
            }
            else {
                var lossFunction_1 = get(args.loss);
                this.outputs.forEach(function (_) {
                    lossFunctions.push(lossFunction_1);
                });
            }
            this.lossFunctions = lossFunctions;
            this.feedOutputNames = [];
            this.feedOutputShapes = [];
            this.feedLossFns = [];
            for (var i = 0; i < this.outputs.length; ++i) {
                // TODO(cais): Logic for skipping target(s).
                var shape = this.internalOutputShapes[i];
                var name_5 = this.outputNames[i];
                this.feedOutputNames.push(name_5);
                this.feedOutputShapes.push(shape);
                this.feedLossFns.push(this.lossFunctions[i]);
            }
            // TODO(cais): Add logic for output masks.
            // TODO(cais): Add logic for sample weights.
            var skipTargetIndices = [];
            // Prepare metrics.
            this.metrics = args.metrics;
            // TODO(cais): Add weightedMetrics.
            this.metricsNames = ['loss'];
            this.metricsTensors = [];
            // Compute total loss.
            // Porting Note: In PyKeras, metrics_tensors are symbolic tensor objects.
            //   Here, metricsTensors are TypeScript functions. This difference is due
            //   to the difference in symbolic/imperative property of the backends.
            nameScope('loss', function () {
                for (var i = 0; i < _this.outputs.length; ++i) {
                    if (skipTargetIndices.indexOf(i) !== -1) {
                        continue;
                    }
                    // TODO(cais): Add weightedLoss, sampleWeight and mask.
                    //   The following line should be weightedLoss
                    var weightedLoss = _this.lossFunctions[i];
                    if (_this.outputs.length > 1) {
                        _this.metricsTensors.push([weightedLoss, i]);
                        _this.metricsNames.push(_this.outputNames[i] + '_loss');
                    }
                }
                // Porting Note: Due to the imperative nature of the backend, we calculate
                //   the regularizer penalties in the totalLossFunction, instead of here.
            });
            var nestedMetrics = collectMetrics(args.metrics, this.outputNames);
            // TODO(cais): Add nestedWeightedMetrics.
            /**
             * Helper function used in loop below.
             */
            var appendMetric = function (outputIndex, metricName, metricTensor) {
                if (_this.outputNames.length > 1) {
                    metricName = _this.outputNames[outputIndex] + '_' + metricName;
                }
                _this.metricsNames.push(metricName);
                _this.metricsTensors.push([metricTensor, outputIndex]);
            };
            nameScope('metric', function () {
                var _loop_1 = function (i) {
                    if (skipTargetIndices.indexOf(i) !== -1) {
                        return "continue";
                    }
                    var outputMetrics = nestedMetrics[i];
                    // TODO(cais): Add weights and outputWeightedMetrics.
                    // TODO(cais): Add optional arg `weights` to the following function.
                    var handleMetrics = function (metrics) {
                        var metricNamePrefix = '';
                        var metricName;
                        var accFn;
                        var weightedMetricFn;
                        var _loop_2 = function (metric) {
                            if (typeof metric === 'string' &&
                                ['accuracy', 'acc', 'crossentropy', 'ce'].indexOf(metric) !==
                                    -1) {
                                var outputShape = _this.internalOutputShapes[i];
                                if (outputShape[outputShape.length - 1] === 1 ||
                                    _this.lossFunctions[i] === binaryCrossentropy) {
                                    // case: binary accuracy/crossentropy.
                                    if (['accuracy', 'acc'].indexOf(metric) !== -1) {
                                        accFn = binaryAccuracy;
                                    }
                                    else if (['crossentropy', 'ce'].indexOf(metric) !== -1) {
                                        accFn = binaryCrossentropy$1;
                                    }
                                }
                                else if (_this.lossFunctions[i] ===
                                    sparseCategoricalCrossentropy) {
                                    // case: categorical accuracy / crossentropy with sparse
                                    // targets.
                                    if (['accuracy', 'acc'].indexOf(metric) !== -1) {
                                        accFn = sparseCategoricalAccuracy;
                                    }
                                    else if (['crossentropy', 'ce'].indexOf(metric) !== -1) {
                                        accFn = sparseCategoricalCrossentropy$1;
                                    }
                                }
                                else {
                                    // case: categorical accuracy / crossentropy.
                                    if (['accuracy', 'acc'].indexOf(metric) !== -1) {
                                        accFn = categoricalAccuracy;
                                    }
                                    else if (['crossentropy', 'ce'].indexOf(metric) !== -1) {
                                        accFn = categoricalCrossentropy$1;
                                    }
                                }
                                var suffix = void 0;
                                if (['accuracy', 'acc'].indexOf(metric) !== -1) {
                                    suffix = 'acc';
                                }
                                else if (['crossentropy', 'ce'].indexOf(metric) !== -1) {
                                    suffix = 'ce';
                                }
                                // TODO(cais): Add weighting actually.
                                weightedMetricFn = accFn;
                                metricName = metricNamePrefix + suffix;
                            }
                            else {
                                var metricFn = get$1(metric);
                                // TODO(cais): Add weighting actually.
                                weightedMetricFn = metricFn;
                                metricName =
                                    metricNamePrefix + getLossOrMetricName(metric);
                            }
                            // TODO(cais): Add weighting and masking to metricResult.
                            var metricResult;
                            nameScope(metricName, function () {
                                metricResult = weightedMetricFn;
                            });
                            appendMetric(i, metricName, metricResult);
                        };
                        //  TODO(cais): Use 'weights_' for weighted metrics.
                        for (var _i = 0, metrics_1 = metrics; _i < metrics_1.length; _i++) {
                            var metric = metrics_1[_i];
                            _loop_2(metric);
                        }
                    };
                    handleMetrics(outputMetrics);
                };
                for (var i = 0; i < _this.outputs.length; ++i) {
                    _loop_1(i);
                }
            });
            // Porting Notes: Given the imperative backend of tfjs-core,
            //   there is no need for constructing the symbolic graph and placeholders.
            this.collectedTrainableWeights = this.trainableWeights;
        };
        /**
         * Check trainable weights count consistency.
         *
         * This will raise a warning if `this.trainableWeights` and
         * `this.collectedTrainableWeights` are inconsistent (i.e., have different
         * numbers of parameters).
         * Inconsistency will typically arise when one modifies `model.trainable`
         * without calling `model.compile()` again.
         */
        LayersModel.prototype.checkTrainableWeightsConsistency = function () {
            if (this.collectedTrainableWeights == null) {
                return;
            }
            if (this.trainableWeights.length !==
                this.collectedTrainableWeights.length) {
                console.warn('Discrepancy between trainableweights and collected trainable ' +
                    'weights. Did you set `model.trainable` without calling ' +
                    '`model.compile()` afterwards?');
            }
        };
        /**
         * Returns the loss value & metrics values for the model in test mode.
         *
         * Loss and metrics are specified during `compile()`, which needs to happen
         * before calls to `evaluate()`.
         *
         * Computation is done in batches.
         *
         * ```js
         * const model = tf.sequential({
         *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
         * });
         * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
         * const result = model.evaluate(
         *     tf.ones([8, 10]), tf.ones([8, 1]), {batchSize: 4});
         * result.print();
         * ```
         *
         * @param x `tf.Tensor` of test data, or an `Array` of `tf.Tensor`s if the
         * model has multiple inputs.
         * @param y `tf.Tensor` of target data, or an `Array` of `tf.Tensor`s if the
         * model has multiple outputs.
         * @param args A `ModelEvaluateArgs`, containing optional fields.
         *
         * @return `Scalar` test loss (if the model has a single output and no
         *   metrics) or `Array` of `Scalar`s (if the model has multiple outputs
         *   and/or metrics). The attribute `model.metricsNames`
         *   will give you the display labels for the scalar outputs.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        LayersModel.prototype.evaluate = function (x, y, args) {
            if (args === void 0) { args = {}; }
            var batchSize = args.batchSize == null ? 32 : args.batchSize;
            checkBatchSize(batchSize);
            // TODO(cais): Standardize `config.sampleWeights` as well.
            // Validate user data.
            var checkBatchAxis = true;
            var standardizedOuts = this.standardizeUserDataXY(x, y, checkBatchAxis, batchSize);
            try {
                // TODO(cais): If uses `useLearningPhase`, set the corresponding element
                // of the input to 0.
                var ins = standardizedOuts[0].concat(standardizedOuts[1]);
                this.makeTestFunction();
                var f = this.testFunction;
                var testOuts = this.testLoop(f, ins, batchSize, args.verbose, args.steps);
                return singletonOrArray(testOuts);
            }
            finally {
                disposeNewTensors(standardizedOuts[0], x);
                disposeNewTensors(standardizedOuts[1], y);
            }
        };
        // TODO(cais): Add code snippet below once real dataset objects are
        //   available.
        /**
         * Evaluate model using a dataset object.
         *
         * Note: Unlike `evaluate()`, this method is asynchronous (`async`);
         *
         * @param dataset A dataset object. Its `iterator()` method is expected
         *   to generate a dataset iterator object, the `next()` method of which
         *   is expected to produce data batches for evaluation. The return value
         *   of the `next()` call ought to contain a boolean `done` field and a
         *   `value` field. The `value` field is expected to be an array of two
         *   `tf.Tensor`s or an array of two nested `tf.Tensor` structures. The former
         *   case is for models with exactly one input and one output (e.g..
         *   a sequential model). The latter case is for models with multiple
         *   inputs and/or multiple outputs. Of the two items in the array, the
         *   first is the input feature(s) and the second is the output target(s).
         * @param args A configuration object for the dataset-based evaluation.
         * @returns Loss and metric values as an Array of `Scalar` objects.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        LayersModel.prototype.evaluateDataset = function (dataset, args) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.makeTestFunction();
                    return [2 /*return*/, evaluateDataset(this, dataset, args)];
                });
            });
        };
        /**
         * Get number of samples provided for training, evaluation or prediction.
         *
         * @param ins Input `tf.Tensor`.
         * @param batchSize Integer batch size, optional.
         * @param steps Total number of steps (batches of samples) before
         * declaring loop finished. Optional.
         * @param stepsName The public API's parameter name for `steps`.
         * @returns Number of samples provided.
         */
        LayersModel.prototype.checkNumSamples = function (ins, batchSize, steps, stepsName) {
            if (stepsName === void 0) { stepsName = 'steps'; }
            var numSamples;
            if (steps != null) {
                numSamples = null;
                if (batchSize != null) {
                    throw new ValueError("If " + stepsName + " is set, batchSize must be null or undefined." +
                        ("Got batchSize = " + batchSize));
                }
            }
            else if (ins != null) {
                if (Array.isArray(ins)) {
                    numSamples = ins[0].shape[0];
                }
                else {
                    numSamples = ins.shape[0];
                }
            }
            else {
                throw new ValueError("Either the input data should have a defined shape, or " +
                    (stepsName + " shoud be specified."));
            }
            return numSamples;
        };
        /**
         * Execute internal tensors of the model with input data feed.
         * @param inputs Input data feed. Must match the inputs of the model.
         * @param outputs Names of the output tensors to be fetched. Must match
         *   names of the SymbolicTensors that belong to the graph.
         * @returns Fetched values for `outputs`.
         */
        LayersModel.prototype.execute = function (inputs, outputs) {
            if (Array.isArray(outputs) && outputs.length === 0) {
                throw new ValueError('`outputs` is an empty Array, which is not allowed.');
            }
            var outputsIsArray = Array.isArray(outputs);
            var outputNames = (outputsIsArray ? outputs :
                [outputs]);
            var outputSymbolicTensors = this.retrieveSymbolicTensors(outputNames);
            // Format the input into a FeedDict.
            var feedDict = new FeedDict();
            if (inputs instanceof tfc.Tensor) {
                inputs = [inputs];
            }
            if (Array.isArray(inputs)) {
                if (inputs.length !== this.inputs.length) {
                    throw new ValueError("The number of inputs provided (" + inputs.length + ") " +
                        "does not match the number of inputs of this model " +
                        ("(" + this.inputs.length + ")."));
                }
                for (var i = 0; i < this.inputs.length; ++i) {
                    feedDict.add(this.inputs[i], inputs[i]);
                }
            }
            else {
                for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
                    var input = _a[_i];
                    var tensorValue = inputs[input.name];
                    if (tensorValue == null) {
                        throw new ValueError("No value is provided for the model's input " + input.name);
                    }
                    feedDict.add(input, tensorValue);
                }
            }
            // Run execution.
            var executeOutputs = execute(outputSymbolicTensors, feedDict);
            return outputsIsArray ? executeOutputs : executeOutputs[0];
        };
        /**
         * Retrieve the model's internal symbolic tensors from symbolic-tensor names.
         */
        LayersModel.prototype.retrieveSymbolicTensors = function (symbolicTensorNames) {
            var outputSymbolicTensors = pyListRepeat(null, symbolicTensorNames.length);
            var outputsRemaining = symbolicTensorNames.length;
            for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                var layerOutputs = Array.isArray(layer.output) ?
                    layer.output :
                    [layer.output];
                var layerOutputNames = layerOutputs.map(function (output) { return output.name; });
                for (var i = 0; i < symbolicTensorNames.length; ++i) {
                    var index = layerOutputNames.indexOf(symbolicTensorNames[i]);
                    if (index !== -1) {
                        outputSymbolicTensors[i] = layerOutputs[index];
                        outputsRemaining--;
                    }
                    if (outputsRemaining === 0) {
                        break;
                    }
                }
                if (outputsRemaining === 0) {
                    break;
                }
            }
            if (outputsRemaining > 0) {
                var remainingNames_1 = [];
                outputSymbolicTensors.forEach(function (tensor, i) {
                    if (tensor == null) {
                        remainingNames_1.push(symbolicTensorNames[i]);
                    }
                });
                throw new ValueError("Cannot find SymbolicTensors for output name(s): " +
                    ("" + JSON.stringify(remainingNames_1)));
            }
            return outputSymbolicTensors;
        };
        /**
         * Helper method to loop over some data in batches.
         *
         * Porting Note: Not using the functional approach in the Python equivalent
         *   due to the imperative backend.
         * Porting Note: Does not support step mode currently.
         *
         * @param ins: input data
         * @param batchSize: integer batch size.
         * @param verbose: verbosity model
         * @returns: Predictions as `tf.Tensor` (if a single output) or an `Array` of
         *   `tf.Tensor` (if multipe outputs).
         */
        LayersModel.prototype.predictLoop = function (ins, batchSize, verbose) {
            var _this = this;
            if (batchSize === void 0) { batchSize = 32; }
            if (verbose === void 0) { verbose = false; }
            return tfc.tidy(function () {
                var numSamples = _this.checkNumSamples(ins);
                if (verbose) {
                    throw new NotImplementedError('Verbose predictLoop() is not implemented yet.');
                }
                // Sample-based predictions.
                // Porting Note: Tensor currently does not support sliced assignments as
                //   in numpy, e.g., x[1:3] = y. Therefore we use concatenation while
                //   iterating over the batches.
                var batches = makeBatches(numSamples, batchSize);
                var outsBatches = _this.outputs.map(function (output) { return []; });
                var _loop_3 = function (batchIndex) {
                    var batchOuts = tfc.tidy(function () {
                        var batchStart = batches[batchIndex][0];
                        var batchEnd = batches[batchIndex][1];
                        // TODO(cais): Take care of the case of the last element is a flag for
                        //   training/test.
                        var insBatch = sliceArrays(ins, batchStart, batchEnd);
                        // Construct the feeds for execute();
                        var feeds = [];
                        if (Array.isArray(insBatch)) {
                            for (var i = 0; i < insBatch.length; ++i) {
                                feeds.push({ key: _this.inputs[i], value: insBatch[i] });
                            }
                        }
                        else {
                            feeds.push({ key: _this.inputs[0], value: insBatch });
                        }
                        var feedDict = new FeedDict(feeds);
                        return execute(_this.outputs, feedDict);
                    });
                    batchOuts.forEach(function (batchOut, i) { return outsBatches[i].push(batchOut); });
                };
                // TODO(cais): Can the scope() be pushed down inside the for loop?
                for (var batchIndex = 0; batchIndex < batches.length; ++batchIndex) {
                    _loop_3(batchIndex);
                }
                return singletonOrArray(outsBatches.map(function (batches) { return tfc.concat(batches, 0); }));
            });
        };
        /**
         * Generates output predictions for the input samples.
         *
         * Computation is done in batches.
         *
         * Note: the "step" mode of predict() is currently not supported.
         *   This is because the TensorFlow.js core backend is imperative only.
         *
         * ```js
         * const model = tf.sequential({
         *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
         * });
         * model.predict(tf.ones([8, 10]), {batchSize: 4}).print();
         * ```
         *
         * @param x The input data, as an Tensor, or an `Array` of `tf.Tensor`s if
         *   the model has multiple inputs.
         * @param args A `ModelPredictArgs` object containing optional fields.
         *
         * @return Prediction results as a `tf.Tensor`(s).
         *
         * @exception ValueError In case of mismatch between the provided input data
         *   and the model's expectations, or in case a stateful model receives a
         *   number of samples that is not a multiple of the batch size.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        LayersModel.prototype.predict = function (x, args) {
            if (args === void 0) { args = {}; }
            var xsRank2OrHigher = ensureTensorsRank2OrHigher(x);
            checkInputData(xsRank2OrHigher, this.inputNames, this.feedInputShapes, false);
            try {
                // TODO(cais): Take care of stateful models.
                //   if (this.stateful) ...
                // TODO(cais): Take care of the learning_phase boolean flag.
                //   if (this.useLearningPhase) ...
                var batchSize = args.batchSize == null ? 32 : args.batchSize;
                checkBatchSize(batchSize);
                return this.predictLoop(xsRank2OrHigher, batchSize);
            }
            finally {
                disposeNewTensors(xsRank2OrHigher, x);
            }
        };
        /**
         * Returns predictions for a single batch of samples.
         *
         * ```js
         * const model = tf.sequential({
         *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
         * });
         * model.predictOnBatch(tf.ones([8, 10])).print();
         * ```
         * @param x: Input samples, as an Tensor (for models with exactly one
         *   input) or an array of Tensors (for models with more than one input).
         * @return Tensor(s) of predictions
         */
        /** @doc {heading: 'Models', subheading: 'Classes'} */
        LayersModel.prototype.predictOnBatch = function (x) {
            checkInputData(x, this.inputNames, this.feedInputShapes, true);
            // TODO(cais): Take care of the learning_phase boolean flag.
            //   if (this.useLearningPhase) ...
            var batchSize = (Array.isArray(x) ? x[0] : x).shape[0];
            return this.predictLoop(x, batchSize);
        };
        LayersModel.prototype.standardizeUserDataXY = function (x, y, checkBatchAxis, batchSize) {
            if (checkBatchAxis === void 0) { checkBatchAxis = true; }
            // TODO(cais): Add sampleWeight, classWeight
            if (this.optimizer_ == null) {
                throw new RuntimeError('You must compile a model before training/testing. Use ' +
                    'LayersModel.compile(modelCompileArgs).');
            }
            var outputShapes = [];
            for (var i = 0; i < this.feedOutputShapes.length; ++i) {
                var outputShape = this.feedOutputShapes[i];
                var lossFn = this.feedLossFns[i];
                if (lossFn === sparseCategoricalCrossentropy) {
                    outputShapes.push(outputShape.slice(0, outputShape.length - 1).concat([1]));
                }
                else {
                    // Porting Note: Because of strong typing `lossFn` must be a function.
                    outputShapes.push(outputShape);
                }
            }
            x = standardizeInputData(x, this.feedInputNames, this.feedInputShapes, false, 'input');
            y = standardizeInputData(y, this.feedOutputNames, outputShapes, false, 'target');
            // TODO(cais): Standardize sampleWeights & classWeights.
            checkArrayLengths(x, y, null);
            // TODO(cais): Check sampleWeights as well.
            checkLossAndTargetCompatibility(y, this.feedLossFns, this.feedOutputShapes);
            if (this.stateful && batchSize != null && batchSize > 0) {
                if (x[0].shape[0] % batchSize !== 0) {
                    throw new ValueError("In a stateful network, you should only pass inputs with a " +
                        "number of samples that is divisible by the batch size " +
                        (batchSize + ". Found: " + x[0].shape[0] + " sample(s)."));
                }
            }
            return [x, y];
        };
        LayersModel.prototype.standardizeUserData = function (x, y, sampleWeight, classWeight, checkBatchAxis, batchSize) {
            if (checkBatchAxis === void 0) { checkBatchAxis = true; }
            return __awaiter(this, void 0, void 0, function () {
                var _a, standardXs, standardYs, standardSampleWeights, classWeights, i, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _a = this.standardizeUserDataXY(x, y, checkBatchAxis, batchSize), standardXs = _a[0], standardYs = _a[1];
                            // TODO(cais): Handle sampleWeights.
                            if (sampleWeight != null) {
                                throw new Error('sample weight is not supported yet.');
                            }
                            standardSampleWeights = null;
                            if (!(classWeight != null)) return [3 /*break*/, 4];
                            classWeights = standardizeClassWeights(classWeight, this.outputNames);
                            standardSampleWeights = [];
                            i = 0;
                            _d.label = 1;
                        case 1:
                            if (!(i < classWeights.length)) return [3 /*break*/, 4];
                            _c = (_b = standardSampleWeights).push;
                            return [4 /*yield*/, standardizeWeights(standardYs[i], null, classWeights[i])];
                        case 2:
                            _c.apply(_b, [_d.sent()]);
                            _d.label = 3;
                        case 3:
                            ++i;
                            return [3 /*break*/, 1];
                        case 4: 
                        // TODO(cais): Deal with the case of model.stateful == true.
                        return [2 /*return*/, [standardXs, standardYs, standardSampleWeights]];
                    }
                });
            });
        };
        /**
         * Loop over some test data in batches.
         * @param f A Function returning a list of tensors.
         * @param ins Array of tensors to be fed to `f`.
         * @param batchSize Integer batch size or `null` / `undefined`.
         * @param verbose verbosity mode.
         * @param steps Total number of steps (batches of samples) before
         * declaring test finished. Ignored with the default value of `null` /
         * `undefined`.
         * @returns Array of Scalars.
         */
        LayersModel.prototype.testLoop = function (f, ins, batchSize, verbose, steps) {
            var _this = this;
            if (verbose === void 0) { verbose = 0; }
            return tfc.tidy(function () {
                var numSamples = _this.checkNumSamples(ins, batchSize, steps, 'steps');
                var outs = [];
                if (verbose > 0) {
                    throw new NotImplementedError('Verbose mode is not implemented yet.');
                }
                // TODO(cais): Use `indicesForConversionToDense' to prevent slow down.
                if (steps != null) {
                    throw new NotImplementedError('steps mode in testLoop() is not implemented yet');
                }
                else {
                    var batches = makeBatches(numSamples, batchSize);
                    var indexArray = tfc.tensor1d(range(0, numSamples));
                    for (var batchIndex = 0; batchIndex < batches.length; ++batchIndex) {
                        var batchStart = batches[batchIndex][0];
                        var batchEnd = batches[batchIndex][1];
                        var batchIds = sliceAlongFirstAxis(indexArray, batchStart, batchEnd - batchStart);
                        // TODO(cais): In ins, train flag can be a number, instead of an
                        //   Tensor? Do we need to handle this in tfjs-layers?
                        var insBatch = sliceArraysByIndices(ins, batchIds);
                        var batchOuts = f(insBatch);
                        if (batchIndex === 0) {
                            for (var i = 0; i < batchOuts.length; ++i) {
                                outs.push(tfc.scalar(0));
                            }
                        }
                        for (var i = 0; i < batchOuts.length; ++i) {
                            var batchOut = batchOuts[i];
                            outs[i] =
                                tfc.add(outs[i], tfc.mul(batchEnd - batchStart, batchOut));
                        }
                    }
                    for (var i = 0; i < outs.length; ++i) {
                        outs[i] = tfc.div(outs[i], numSamples);
                    }
                }
                return outs;
            });
        };
        LayersModel.prototype.getDedupedMetricsNames = function () {
            var outLabels = this.metricsNames;
            // Rename duplicated metrics names (can happen with an output layer
            // shared among multiple dataflows).
            var dedupedOutLabels = [];
            for (var i = 0; i < outLabels.length; ++i) {
                var label = outLabels[i];
                var newLabel = label;
                if (count(outLabels, label) > 1) {
                    var dupIndex = count(outLabels.slice(0, i), label);
                    newLabel += "_" + dupIndex;
                }
                dedupedOutLabels.push(newLabel);
            }
            return dedupedOutLabels;
        };
        /**
         * Creates a function that performs the following actions:
         *
         * 1. computes the losses
         * 2. sums them to get the total loss
         * 3. call the optimizer computes the gradients of the LayersModel's
         *    trainable weights w.r.t. the total loss and update the variables
         * 4. calculates the metrics
         * 5. returns the values of the losses and metrics.
         */
        LayersModel.prototype.makeTrainFunction = function () {
            var _this = this;
            return function (data) {
                var lossValues = [];
                var inputs = data.slice(0, _this.inputs.length);
                var targets = data.slice(_this.inputs.length, _this.inputs.length + _this.outputs.length);
                var sampleWeights = data.slice(_this.inputs.length + _this.outputs.length, _this.inputs.length + _this.outputs.length * 2);
                var metricsValues = [];
                // Create a function that computes the total loss based on the
                // inputs. This function is used for obtaining gradients through
                // backprop.
                var totalLossFunction = function () {
                    var feeds = [];
                    for (var i = 0; i < _this.inputs.length; ++i) {
                        feeds.push({ key: _this.inputs[i], value: inputs[i] });
                    }
                    var feedDict = new FeedDict(feeds);
                    var outputs = execute(_this.outputs, feedDict, { 'training': true });
                    // TODO(cais): Take care of the case of multiple outputs from a
                    //   single layer?
                    var totalLoss;
                    for (var i = 0; i < _this.lossFunctions.length; ++i) {
                        var lossFunction = _this.lossFunctions[i];
                        var loss = lossFunction(targets[i], outputs[i]);
                        if (sampleWeights[i] != null) {
                            loss = computeWeightedLoss(loss, sampleWeights[i]);
                        }
                        // TODO(cais): push Scalar instead.
                        var meanLoss = tfc.mean(loss);
                        // TODO(cais): Use a scope() instead, to avoid ownership.
                        lossValues.push(meanLoss);
                        if (i === 0) {
                            totalLoss = loss;
                        }
                        else {
                            totalLoss = tfc.add(totalLoss, loss);
                        }
                    }
                    // Compute the metrics.
                    // TODO(cais): These should probably be calculated outside
                    //   totalLossFunction to benefit speed?
                    for (var i = 0; i < _this.metricsTensors.length; ++i) {
                        var weightedMetric = void 0;
                        if (_this.outputs.length > 1 && i < _this.outputs.length) {
                            weightedMetric = lossValues[i];
                        }
                        else {
                            var metric = _this.metricsTensors[i][0];
                            var outputIndex = _this.metricsTensors[i][1];
                            weightedMetric =
                                tfc.mean(metric(targets[outputIndex], outputs[outputIndex]));
                        }
                        tfc.keep(weightedMetric);
                        // TODO(cais): Use a scope() instead, to avoid ownership.
                        metricsValues.push(weightedMetric);
                    }
                    totalLoss = tfc.mean(totalLoss);
                    // Add regularizer penalties.
                    _this.calculateLosses().forEach(function (regularizerLoss) {
                        totalLoss = tfc.add(totalLoss, regularizerLoss);
                    });
                    return totalLoss;
                };
                var variables = _this.collectedTrainableWeights.map(function (param) { return param.read(); });
                var returnCost = true;
                var totalLossValue = _this.optimizer_.minimize(totalLossFunction, returnCost, variables);
                return [totalLossValue].concat(metricsValues);
            };
        };
        /**
         * Create a function which, when invoked with an array of `tf.Tensor`s as a
         * batch of inputs, returns the prespecified loss and metrics of the model
         * under the batch of input data.
         */
        LayersModel.prototype.makeTestFunction = function () {
            var _this = this;
            this.testFunction = function (data) {
                return tfc.tidy(function () {
                    var valOutputs = [];
                    var totalLoss;
                    var inputs = data.slice(0, _this.inputs.length);
                    var targets = data.slice(_this.inputs.length, _this.inputs.length + _this.outputs.length);
                    var feeds = [];
                    for (var i = 0; i < _this.inputs.length; ++i) {
                        feeds.push({ key: _this.inputs[i], value: inputs[i] });
                    }
                    var feedDict = new FeedDict(feeds);
                    var outputs = execute(_this.outputs, feedDict);
                    // Compute total loss.
                    for (var i = 0; i < _this.lossFunctions.length; ++i) {
                        var lossFunction = _this.lossFunctions[i];
                        // TODO(cais): Add sample weighting and replace the simple
                        // averaging.
                        var loss = tfc.mean(lossFunction(targets[i], outputs[i]));
                        if (i === 0) {
                            totalLoss = loss;
                        }
                        else {
                            totalLoss = tfc.add(totalLoss, loss);
                        }
                        valOutputs.push(totalLoss);
                    }
                    // Compute the metrics.
                    for (var i = 0; i < _this.metricsTensors.length; ++i) {
                        var metric = _this.metricsTensors[i][0];
                        var outputIndex = _this.metricsTensors[i][1];
                        // TODO(cais): Replace K.mean() with a proper weighting function.
                        var meanMetric = tfc.mean(metric(targets[outputIndex], outputs[outputIndex]));
                        valOutputs.push(meanMetric);
                    }
                    return valOutputs;
                });
            };
        };
        /**
         * Trains the model for a fixed number of epochs (iterations on a
         * dataset).
         *
         * ```js
         * const model = tf.sequential({
         *     layers: [tf.layers.dense({units: 1, inputShape: [10]})]
         * });
         * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
         * for (let i = 1; i < 5 ; ++i) {
         *   const h = await model.fit(tf.ones([8, 10]), tf.ones([8, 1]), {
         *       batchSize: 4,
         *       epochs: 3
         *   });
         *   console.log("Loss after Epoch " + i + " : " + h.history.loss[0]);
         * }
         * ```
         *
         * @param x `tf.Tensor` of training data, or an array of `tf.Tensor`s if the
         * model has multiple inputs. If all inputs in the model are named, you
         * can also pass a dictionary mapping input names to `tf.Tensor`s.
         * @param y `tf.Tensor` of target (label) data, or an array of `tf.Tensor`s if
         * the model has multiple outputs. If all outputs in the model are named,
         * you can also pass a dictionary mapping output names to `tf.Tensor`s.
         * @param args A `ModelFitArgs`, containing optional fields.
         *
         * @return A `History` instance. Its `history` attribute contains all
         *   information collected during training.
         *
         * @exception ValueError In case of mismatch between the provided input
         * data and what the model expects.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        LayersModel.prototype.fit = function (x, y, args) {
            if (args === void 0) { args = {}; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, fitTensors(this, x, y, args)];
                });
            });
        };
        // TODO(cais): Add code snippet below when it's possible to instantiate
        //   actual dataset objects.
        /**
         * Trains the model using a dataset object.
         *
         * @param dataset A dataset object. Its `iterator()` method is expected
         *   to generate a dataset iterator object, the `next()` method of which
         *   is expected to produce data batches for training. The return value
         *   of the `next()` call ought to contain a boolean `done` field and a
         *   `value` field. The `value` field is expected to be an array of two
         *   `tf.Tensor`s or an array of two nested `tf.Tensor` structures. The former
         *   case is for models with exactly one input and one output (e.g..
         *   a sequential model). The latter case is for models with multiple
         *   inputs and/or multiple outputs.
         *   Of the two items in the array, the first is the input feature(s) and
         *   the second is the output target(s).
         * @param args A `ModelFitDatasetArgs`, containing optional fields.
         *
         * @return A `History` instance. Its `history` attribute contains all
         *   information collected during training.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        LayersModel.prototype.fitDataset = function (dataset, args) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, fitDataset(this, dataset, args)];
                });
            });
        };
        /**
         * Runs a single gradient update on a single batch of data.
         *
         * This method differs from `fit()` and `fitDataset()` in the following
         * regards:
         *   - It operates on exactly one batch of data.
         *   - It returns only the loss and matric values, instead of
         *     returning the batch-by-batch loss and metric values.
         *   - It doesn't support fine-grained options such as verbosity and
         *     callbacks.
         *
         * @param x Input data. It could be one of the following:
         *   - A `tf.Tensor`, or an Array of `tf.Tensor`s (in case the model has
         *     multiple inputs).
         *   - An Object mapping input names to corresponding `tf.Tensor` (if the
         *     model has named inputs).
         * @param y Target darta. It could be either a `tf.Tensor` a multiple
         *   `tf.Tensor`s. It should be consistent with `x`.
         * @returns Training loss or losses (in case the model has
         *   multiple outputs), along with metrics (if any), as numbers.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        LayersModel.prototype.trainOnBatch = function (x, y) {
            return __awaiter(this, void 0, void 0, function () {
                var standardizeOut, inputs, targets, trainFunction, losses, lossValues, _i, losses_1, loss, v;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.standardizeUserData(x, y)];
                        case 1:
                            standardizeOut = _a.sent();
                            inputs = standardizeOut[0];
                            targets = standardizeOut[1];
                            trainFunction = this.makeTrainFunction();
                            losses = trainFunction(inputs.concat(targets));
                            lossValues = [];
                            _i = 0, losses_1 = losses;
                            _a.label = 2;
                        case 2:
                            if (!(_i < losses_1.length)) return [3 /*break*/, 5];
                            loss = losses_1[_i];
                            return [4 /*yield*/, loss.data()];
                        case 3:
                            v = _a.sent();
                            lossValues.push(v[0]);
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5:
                            tfc.dispose(losses);
                            return [2 /*return*/, singletonOrArray(lossValues)];
                    }
                });
            });
        };
        /**
         * Extract weight values of the model.
         *
         * @param config: An instance of `io.SaveConfig`, which specifies
         * model-saving options such as whether only trainable weights are to be
         * saved.
         * @returns A `NamedTensorMap` mapping original weight names (i.e.,
         *   non-uniqueified weight names) to their values.
         */
        LayersModel.prototype.getNamedWeights = function (config) {
            var namedWeights = [];
            var trainableOnly = config != null && config.trainableOnly;
            var weights = trainableOnly ? this.trainableWeights : this.weights;
            var weightValues = this.getWeights(trainableOnly);
            for (var i = 0; i < weights.length; ++i) {
                if (trainableOnly && !weights[i].trainable) {
                    // Optionally skip non-trainable weights.
                    continue;
                }
                namedWeights.push({ name: weights[i].originalName, tensor: weightValues[i] });
            }
            return namedWeights;
        };
        Object.defineProperty(LayersModel.prototype, "stopTraining", {
            get: function () {
                return this.stopTraining_;
            },
            /**
             * Setter used for force stopping of LayersModel.fit() (i.e., training).
             *
             * Example:
             *
             * ```js
             * const input = tf.input({shape: [10]});
             * const output = tf.layers.dense({units: 1}).apply(input);
             * const model = tf.model({inputs: [input], outputs: [output]});
             * model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
             * const xs = tf.ones([8, 10]);
             * const ys = tf.zeros([8, 1]);
             *
             * const history = await model.fit(xs, ys, {
             *   epochs: 10,
             *   callbacks: {
             *     onEpochEnd: async (epoch, logs) => {
             *       if (epoch === 2) {
             *         model.stopTraining = true;
             *       }
             *     }
             *   }
             * });
             *
             * // There should be only 3 values in the loss array, instead of 10
             * values,
             * // due to the stopping after 3 epochs.
             * console.log(history.history.loss);
             * ```
             */
            set: function (stop) {
                this.stopTraining_ = stop;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LayersModel.prototype, "optimizer", {
            get: function () {
                return this.optimizer_;
            },
            set: function (optimizer) {
                if (this.optimizer_ !== optimizer) {
                    this.optimizer_ = optimizer;
                    this.isOptimizerOwned = false;
                }
            },
            enumerable: true,
            configurable: true
        });
        LayersModel.prototype.dispose = function () {
            var result = _super.prototype.dispose.call(this);
            if (result.refCountAfterDispose === 0 && this.optimizer != null &&
                this.isOptimizerOwned) {
                var numTensorsBeforeOptmizerDisposal = tfc.memory().numTensors;
                this.optimizer_.dispose();
                result.numDisposedVariables +=
                    numTensorsBeforeOptmizerDisposal - tfc.memory().numTensors;
            }
            return result;
        };
        LayersModel.prototype.getLossIdentifiers = function () {
            var lossNames;
            if (typeof this.loss === 'string') {
                lossNames = toSnakeCase(this.loss);
            }
            else if (Array.isArray(this.loss)) {
                for (var _i = 0, _a = this.loss; _i < _a.length; _i++) {
                    var loss = _a[_i];
                    if (typeof loss !== 'string') {
                        throw new Error('Serialization of non-string loss is not supported.');
                    }
                }
                lossNames = this.loss.map(function (name) { return toSnakeCase(name); });
            }
            else {
                var outputNames = Object.keys(this.loss);
                lossNames = {};
                var losses_2 = this.loss;
                for (var _b = 0, outputNames_2 = outputNames; _b < outputNames_2.length; _b++) {
                    var outputName = outputNames_2[_b];
                    if (typeof losses_2[outputName] === 'string') {
                        lossNames[outputName] =
                            toSnakeCase(losses_2[outputName]);
                    }
                    else {
                        throw new Error('Serialization of non-string loss is not supported.');
                    }
                }
            }
            return lossNames;
        };
        LayersModel.prototype.getMetricIdentifiers = function () {
            if (typeof this.metrics === 'string' ||
                typeof this.metrics === 'function') {
                return [toSnakeCase(getLossOrMetricName(this.metrics))];
            }
            else if (Array.isArray(this.metrics)) {
                return this.metrics.map(function (metric) { return toSnakeCase(getLossOrMetricName(metric)); });
            }
            else {
                var metricsIdentifiers = {};
                for (var key in this.metrics) {
                    metricsIdentifiers[key] =
                        toSnakeCase(getLossOrMetricName(this.metrics[key]));
                }
                return metricsIdentifiers;
            }
        };
        LayersModel.prototype.getTrainingConfig = function () {
            return {
                loss: this.getLossIdentifiers(),
                metrics: this.getMetricIdentifiers(),
                optimizer_config: {
                    class_name: this.optimizer.getClassName(),
                    config: this.optimizer.getConfig()
                }
            };
            // TODO(cais): Add weight_metrics when they are supported.
            // TODO(cais): Add sample_weight_mode when it's supported.
            // TODO(cais): Add loss_weights when it's supported.
        };
        LayersModel.prototype.loadTrainingConfig = function (trainingConfig) {
            if (trainingConfig.weighted_metrics != null) {
                throw new Error('Loading weight_metrics is not supported yet.');
            }
            if (trainingConfig.loss_weights != null) {
                throw new Error('Loading loss_weights is not supported yet.');
            }
            if (trainingConfig.sample_weight_mode != null) {
                throw new Error('Loading sample_weight_mode is not supported yet.');
            }
            var tsConfig = convertPythonicToTs(trainingConfig.optimizer_config);
            var optimizer = deserialize(tsConfig);
            var loss;
            if (typeof trainingConfig.loss === 'string') {
                loss = toCamelCase(trainingConfig.loss);
            }
            else if (Array.isArray(trainingConfig.loss)) {
                loss = trainingConfig.loss.map(function (lossEntry) { return toCamelCase(lossEntry); });
            }
            else if (trainingConfig.loss != null) {
                loss = {};
                for (var key in trainingConfig.loss) {
                    loss[key] = toCamelCase(trainingConfig.loss[key]);
                }
            }
            var metrics;
            if (Array.isArray(trainingConfig.metrics)) {
                metrics = trainingConfig.metrics.map(function (metric) { return toCamelCase(metric); });
            }
            else if (trainingConfig.metrics != null) {
                metrics = {};
                for (var key in trainingConfig.metrics) {
                    metrics[key] =
                        toCamelCase(trainingConfig.metrics[key]);
                }
            }
            this.compile({ loss: loss, metrics: metrics, optimizer: optimizer });
        };
        /**
         * Save the configuration and/or weights of the LayersModel.
         *
         * An `IOHandler` is an object that has a `save` method of the proper
         * signature defined. The `save` method manages the storing or
         * transmission of serialized data ("artifacts") that represent the
         * model's topology and weights onto or via a specific medium, such as
         * file downloads, local storage, IndexedDB in the web browser and HTTP
         * requests to a server. TensorFlow.js provides `IOHandler`
         * implementations for a number of frequently used saving mediums, such as
         * `tf.io.browserDownloads` and `tf.io.browserLocalStorage`. See `tf.io`
         * for more details.
         *
         * This method also allows you to refer to certain types of `IOHandler`s
         * as URL-like string shortcuts, such as 'localstorage://' and
         * 'indexeddb://'.
         *
         * Example 1: Save `model`'s topology and weights to browser [local
         * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
         * then load it back.
         *
         * ```js
         * const model = tf.sequential(
         *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
         * console.log('Prediction from original model:');
         * model.predict(tf.ones([1, 3])).print();
         *
         * const saveResults = await model.save('localstorage://my-model-1');
         *
         * const loadedModel = await tf.loadLayersModel('localstorage://my-model-1');
         * console.log('Prediction from loaded model:');
         * loadedModel.predict(tf.ones([1, 3])).print();
         * ```
         *
         * Example 2. Saving `model`'s topology and weights to browser
         * [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API);
         * then load it back.
         *
         * ```js
         * const model = tf.sequential(
         *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
         * console.log('Prediction from original model:');
         * model.predict(tf.ones([1, 3])).print();
         *
         * const saveResults = await model.save('indexeddb://my-model-1');
         *
         * const loadedModel = await tf.loadLayersModel('indexeddb://my-model-1');
         * console.log('Prediction from loaded model:');
         * loadedModel.predict(tf.ones([1, 3])).print();
         * ```
         *
         * Example 3. Saving `model`'s topology and weights as two files
         * (`my-model-1.json` and `my-model-1.weights.bin`) downloaded from
         * browser.
         *
         * ```js
         * const model = tf.sequential(
         *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
         * const saveResults = await model.save('downloads://my-model-1');
         * ```
         *
         * Example 4. Send  `model`'s topology and weights to an HTTP server.
         * See the documentation of `tf.io.http` for more details
         * including specifying request parameters and implementation of the
         * server.
         *
         * ```js
         * const model = tf.sequential(
         *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
         * const saveResults = await model.save('http://my-server/model/upload');
         * ```
         *
         * @param handlerOrURL An instance of `IOHandler` or a URL-like,
         * scheme-based string shortcut for `IOHandler`.
         * @param config Options for saving the model.
         * @returns A `Promise` of `SaveResult`, which summarizes the result of
         * the saving, such as byte sizes of the saved artifacts for the model's
         *   topology and weight values.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
         */
        LayersModel.prototype.save = function (handlerOrURL, config) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, handlers, weightDataAndSpecs, returnString, unusedArg, modelConfig, modelArtifacts, includeOptimizer, weightType, _b, optimizerWeightData, optimizerWeightSpecs, _c, _d, checkSize;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            if (typeof handlerOrURL === 'string') {
                                handlers = tfc.io.getSaveHandlers(handlerOrURL);
                                if (handlers.length === 0) {
                                    throw new ValueError("Cannot find any save handlers for URL '" + handlerOrURL + "'");
                                }
                                else if (handlers.length > 1) {
                                    throw new ValueError("Found more than one (" + handlers.length + ") save handlers for " +
                                        ("URL '" + handlerOrURL + "'"));
                                }
                                handlerOrURL = handlers[0];
                            }
                            if (handlerOrURL.save == null) {
                                throw new ValueError('LayersModel.save() cannot proceed because the IOHandler ' +
                                    'provided does not have the `save` attribute defined.');
                            }
                            return [4 /*yield*/, tfc.io.encodeWeights(this.getNamedWeights(config))];
                        case 1:
                            weightDataAndSpecs = _e.sent();
                            returnString = false;
                            unusedArg = null;
                            modelConfig = this.toJSON(unusedArg, returnString);
                            modelArtifacts = {
                                modelTopology: modelConfig,
                                format: LAYERS_MODEL_FORMAT_NAME,
                                generatedBy: "TensorFlow.js tfjs-layers v" + version,
                                convertedBy: null,
                            };
                            includeOptimizer = config == null ? false : config.includeOptimizer;
                            if (!(includeOptimizer && this.optimizer != null)) return [3 /*break*/, 4];
                            modelArtifacts.trainingConfig = this.getTrainingConfig();
                            weightType = 'optimizer';
                            _d = (_c = tfc.io).encodeWeights;
                            return [4 /*yield*/, this.optimizer.getWeights()];
                        case 2: return [4 /*yield*/, _d.apply(_c, [_e.sent(), weightType])];
                        case 3:
                            _b = _e.sent(), optimizerWeightData = _b.data, optimizerWeightSpecs = _b.specs;
                            (_a = weightDataAndSpecs.specs).push.apply(_a, optimizerWeightSpecs);
                            weightDataAndSpecs.data = tfc.io.concatenateArrayBuffers([weightDataAndSpecs.data, optimizerWeightData]);
                            _e.label = 4;
                        case 4:
                            if (this.userDefinedMetadata != null) {
                                checkSize = true;
                                checkUserDefinedMetadata(this.userDefinedMetadata, this.name, checkSize);
                                modelArtifacts.userDefinedMetadata = this.userDefinedMetadata;
                            }
                            modelArtifacts.weightData = weightDataAndSpecs.data;
                            modelArtifacts.weightSpecs = weightDataAndSpecs.specs;
                            return [2 /*return*/, handlerOrURL.save(modelArtifacts)];
                    }
                });
            });
        };
        /**
         * Set user-defined metadata.
         *
         * The set metadata will be serialized together with the topology
         * and weights of the model during `save()` calls.
         *
         * @param setUserDefinedMetadata
         */
        LayersModel.prototype.setUserDefinedMetadata = function (userDefinedMetadata) {
            checkUserDefinedMetadata(userDefinedMetadata, this.name);
            this.userDefinedMetadata = userDefinedMetadata;
        };
        /**
         * Get user-defined metadata.
         *
         * The metadata is supplied via one of the two routes:
         *   1. By calling `setUserDefinedMetadata()`.
         *   2. Loaded during model loading (if the model is constructed
         *      via `tf.loadLayersModel()`.)
         *
         * If no user-defined metadata is available from either of the
         * two routes, this function will return `undefined`.
         */
        LayersModel.prototype.getUserDefinedMetadata = function () {
            return this.userDefinedMetadata;
        };
        // The class name is 'Model' rather than 'LayersModel' for backwards
        // compatibility since this class name shows up in the serialization format.
        /** @nocollapse */
        LayersModel.className = 'Model';
        return LayersModel;
    }(Container));
    tfc.serialization.registerClass(LayersModel);

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Parses a JSON model configuration file and returns a model instance.
     *
     * ```js
     * // This example shows how to serialize a model using `toJSON()` and
     * // deserialize it as another model using `tf.models.modelFromJSON()`.
     * // Note: this example serializes and deserializes only the topology
     * // of the model; the weights of the loaded model will be different
     * // from those of the the original model, due to random weight
     * // initialization.
     * // To load the topology and weights of a model, use `tf.loadLayersModel()`.
     * const model1 = tf.sequential();
     * model1.add(tf.layers.repeatVector({inputShape: [2], n: 4}));
     * // Serialize `model1` as a JSON object.
     * const model1JSON = model1.toJSON(null, false);
     * model1.summary();
     *
     * const model2 = await tf.models.modelFromJSON(model1JSON);
     * model2.summary();
     * ```
     *
     *  @param modelAndWeightsConfig JSON object or string encoding a model and
     *       weights configuration. It can also be only the topology JSON of the
     *       model, in which case the weights will not be loaded.
     *  @param custom_objects Optional dictionary mapping names
     *       (strings) to custom classes or functions to be
     *       considered during deserialization.
     * @returns A TensorFlow.js Layers `tf.LayersModel` instance (uncompiled).
     */
    function modelFromJSON(modelAndWeightsConfig, customObjects) {
        return __awaiter(this, void 0, void 0, function () {
            var modelTopology, tsConfig, model, weightValues, uniqueWeightValues, _i, _a, weight;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!('modelTopology' in modelAndWeightsConfig)) {
                            modelAndWeightsConfig = {
                                modelTopology: modelAndWeightsConfig
                            };
                        }
                        modelAndWeightsConfig = modelAndWeightsConfig;
                        modelTopology = modelAndWeightsConfig.modelTopology;
                        if (modelTopology['model_config'] != null) {
                            // If the model-topology JSON contains a 'model_config' field, then it is
                            // a full model JSON (e.g., from `keras.Model.save()`), which contains
                            // not only the model's architecture in its 'model_config' field, but
                            // additional information such as the model's optimizer. We use only the
                            // 'model_config' field currently.
                            modelTopology = modelTopology['model_config'];
                        }
                        tsConfig = convertPythonicToTs(modelTopology);
                        model = deserialize(tsConfig, customObjects);
                        if (!(modelAndWeightsConfig.weightsManifest != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, tfc.io.loadWeights(modelAndWeightsConfig.weightsManifest, modelAndWeightsConfig.pathPrefix, model.weights.map(function (weight) { return weight.originalName; }))];
                    case 1:
                        weightValues = _b.sent();
                        uniqueWeightValues = {};
                        for (_i = 0, _a = model.weights; _i < _a.length; _i++) {
                            weight = _a[_i];
                            uniqueWeightValues[weight.originalName] =
                                weightValues[weight.originalName];
                        }
                        model.loadWeights(uniqueWeightValues);
                        // Dispose temporary weight values.
                        tfc.dispose(weightValues);
                        _b.label = 2;
                    case 2: return [2 /*return*/, model];
                }
            });
        });
    }
    /**
     * Load a model, including its topology and optionally weights.  See the
     * Tutorial named "How to import a Keras Model" for usage examples.
     *
     * Example 1: Save `model`'s topology and weights to browser [local
     * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
     * then load it back.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * console.log('Prediction from original model:');
     * model.predict(tf.ones([1, 3])).print();
     *
     * const saveResults = await model.save('localstorage://my-model-1');
     *
     * const loadedModel = await tf.loadLayersModel('localstorage://my-model-1');
     * console.log('Prediction from loaded model:');
     * loadedModel.predict(tf.ones([1, 3])).print();
     * ```
     *
     * Example 2. Saving `model`'s topology and weights to browser
     * [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API);
     * then load it back.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * console.log('Prediction from original model:');
     * model.predict(tf.ones([1, 3])).print();
     *
     * const saveResults = await model.save('indexeddb://my-model-1');
     *
     * const loadedModel = await tf.loadLayersModel('indexeddb://my-model-1');
     * console.log('Prediction from loaded model:');
     * loadedModel.predict(tf.ones([1, 3])).print();
     * ```
     *
     * Example 3. Load a model from user-selected files from HTML
     * [file input
     * elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file).
     *
     * ```js
     * // Note: this code snippet will not work without the HTML elements in the
     * //   page
     * const jsonUpload = document.getElementById('json-upload');
     * const weightsUpload = document.getElementById('weights-upload');
     *
     * const model = await tf.loadLayersModel(
     *     tf.io.browserFiles([jsonUpload.files[0], weightsUpload.files[0]]));
     * ```
     *
     * Example 4. Load a model from an HTTP server.
     *
     * ```js
     * const model = await
     *     tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/iris_v1/model.json');
     * model.summary();
     * ```
     *
     * @param pathOrIOHandler Can be either of the two formats
     *   1. A string path to the `ModelAndWeightsConfig` JSON describing
     *      the model in the canonical TensorFlow.js format. This path will be
     *      interpreted as a relative HTTP path, to which `fetch` will be used to
     *      request the model topology and weight manifest JSON.
     *      The content of the JSON file is assumed to be a JSON object with the
     *      following fields and values:
     *      - 'modelTopology': A JSON object that can be either of:
     *        1. a model architecture JSON consistent with the format of the return
     *            value of `keras.Model.to_json()`
     *        2. a full model JSON in the format of `keras.models.save_model()`.
     *      - 'weightsManifest': A TensorFlow.js weights manifest.
     *      See the Python converter function `save_model()` for more details.
     *      It is also assumed that model weights can be accessed from relative
     *      paths described by the `paths` fields in weights manifest.
     *   2. An `tf.io.IOHandler` object that loads model artifacts with its `load`
     *      method.
     * @param options Optional configuration arguments for the model loading,
     *   including:
     *   - `strict`: Require that the provided weights exactly match those required
     *     by the layers.  Default true.  Passing false means that both extra
     *     weights and missing weights will be silently ignored.
     *   - `onProgress`: A progress callback of the form:
     *     `(fraction: number) => void`. This callback can be used to monitor the
     *     model-loading process.
     * @returns A `Promise` of `tf.LayersModel`, with the topology and weights
     *     loaded.
     */
    function loadLayersModelInternal(pathOrIOHandler, options) {
        return __awaiter(this, void 0, void 0, function () {
            var handlers;
            return __generator(this, function (_a) {
                if (options == null) {
                    options = {};
                }
                if (typeof pathOrIOHandler === 'string') {
                    handlers = tfc.io.getLoadHandlers(pathOrIOHandler, options.onProgress);
                    if (handlers.length === 0) {
                        // For backward compatibility: if no load handler can be found,
                        // assume it is a relative http path.
                        // TODO(cais): Reformat the args into a single `LoadOptions` once the core
                        // is refactored.
                        handlers.push(tfc.io.browserHTTPRequest(pathOrIOHandler, options));
                    }
                    else if (handlers.length > 1) {
                        throw new ValueError("Found more than one (" + handlers.length + ") load handlers for " +
                            ("URL '" + pathOrIOHandler + "'"));
                    }
                    pathOrIOHandler = handlers[0];
                }
                return [2 /*return*/, loadLayersModelFromIOHandler(pathOrIOHandler, undefined, options)];
            });
        });
    }
    /**
     * Load a model and optionally its weights, using an IOHandler object.
     *
     * @param handler The instance of `IOHandler` to be used during the model
     *   loading.
     * @param customObjects Any optional custom objects to be used during model
     *   loading.
     * @param strict Whether the weight loading will be done in strict mode.
     *   Default: `true`.
     */
    function loadLayersModelFromIOHandler(handler, customObjects, options) {
        return __awaiter(this, void 0, void 0, function () {
            var artifacts, modelTopology, strict, fastWeightInit, model, trainingConfig, _a, modelWeights, optimizerWeights;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (options == null) {
                            options = {};
                        }
                        if (handler.load == null) {
                            throw new ValueError('Cannot proceed with model loading because the IOHandler provided ' +
                                'does not have the `load` method implemented.');
                        }
                        return [4 /*yield*/, handler.load()];
                    case 1:
                        artifacts = _b.sent();
                        modelTopology = artifacts.modelTopology;
                        if (modelTopology['model_config'] != null) {
                            modelTopology = modelTopology['model_config'];
                        }
                        strict = options.strict == null ? true : options.strict;
                        fastWeightInit = artifacts.weightData != null && artifacts.weightSpecs != null && strict;
                        model = deserialize(convertPythonicToTs(modelTopology), customObjects, fastWeightInit);
                        trainingConfig = artifacts.trainingConfig;
                        if (trainingConfig != null) {
                            model.loadTrainingConfig(trainingConfig);
                        }
                        if (artifacts.userDefinedMetadata != null) {
                            model.setUserDefinedMetadata(artifacts.userDefinedMetadata);
                        }
                        if (!(artifacts.weightData != null)) return [3 /*break*/, 4];
                        // Loading weights requires weightSpecs.
                        if (artifacts.weightSpecs == null) {
                            throw new ValueError('LayersModel artifacts contains weight data, but not weight specs. ' +
                                'Therefore loading of weights cannot proceed.');
                        }
                        _a = decodeModelAndOptimizerWeights(artifacts.weightData, artifacts.weightSpecs), modelWeights = _a.modelWeights, optimizerWeights = _a.optimizerWeights;
                        model.loadWeights(modelWeights, strict);
                        if (!(model.optimizer != null && optimizerWeights.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, model.optimizer.setWeights(optimizerWeights)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        // Dispose temporary weight values.
                        tfc.dispose(modelWeights);
                        tfc.dispose(optimizerWeights.map(function (w) { return w.tensor; }));
                        _b.label = 4;
                    case 4: return [2 /*return*/, model];
                }
            });
        });
    }
    function decodeModelAndOptimizerWeights(buffer, specs) {
        var name2Tensor = tfc.io.decodeWeights(buffer, specs);
        var modelWeights = {};
        var optimizerWeights = [];
        specs.forEach(function (spec) {
            if (spec.group === 'optimizer') {
                optimizerWeights.push({ name: spec.name, tensor: name2Tensor[spec.name] });
            }
            else {
                modelWeights[spec.name] = name2Tensor[spec.name];
            }
        });
        return { modelWeights: modelWeights, optimizerWeights: optimizerWeights };
    }
    /**
     * A model with a stack of layers, feeding linearly from one to the next.
     *
     * `tf.sequential` is a factory function that creates an instance of
     * `tf.Sequential`.
     *
     * ```js
     *  // Define a model for linear regression.
     *  const model = tf.sequential();
     *  model.add(tf.layers.dense({units: 1, inputShape: [1]}));
     *
     *  // Prepare the model for training: Specify the loss and the optimizer.
     *  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
     *
     *  // Generate some synthetic data for training.
     *  const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
     *  const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
     *
     *  // Train the model using the data then do inference on a data point the
     *  // model hasn't seen:
     *  await model.fit(xs, ys);
     *  model.predict(tf.tensor2d([5], [1, 1])).print();
     * ```
     */
    /** @doc {heading: 'Models', subheading: 'Classes'} */
    var Sequential = /** @class */ (function (_super) {
        __extends(Sequential, _super);
        function Sequential(args) {
            var _this = _super.call(this, { inputs: [], outputs: [] }) || this;
            args = args || {};
            _this.trainable = true;
            _this.built = false;
            // Set model name.
            _this.name = (args.name != null) ? args.name : getUid('sequential_');
            // Add to the model any layers passed to the constructor.
            if (args.layers != null) {
                for (var _i = 0, _a = args.layers; _i < _a.length; _i++) {
                    var layer = _a[_i];
                    _this.add(layer);
                }
            }
            return _this;
        }
        // Helper function to Sequential.add  Throws if the new output shape will be
        // invalid.
        Sequential.prototype.checkShape = function (layer) {
            var shape = layer.inboundNodes[0].outputTensors[0].shape;
            if (shape.some(function (x) { return x < 0; })) {
                throw new ValueError('Negative dimension size caused by adding layer ' +
                    (layer.name + " with input shape [") +
                    (layer.inboundNodes[0].inputTensors[0].shape + "]"));
            }
        };
        /**
         * Adds a layer instance on top of the layer stack.
         *
         * ```js
         *  const model = tf.sequential();
         *  model.add(tf.layers.dense({units: 8, inputShape: [1]}));
         *  model.add(tf.layers.dense({units: 4, activation: 'relu6'}));
         *  model.add(tf.layers.dense({units: 1, activation: 'relu6'}));
         *  // Note that the untrained model is random at this point.
         *  model.predict(tf.randomNormal([10, 1])).print();
         * ```
         * @param layer Layer instance.
         *
         * @exception ValueError In case the `layer` argument does not know its
         * input shape.
         * @exception ValueError In case the `layer` argument has multiple output
         *   tensors, or is already connected somewhere else (forbidden in
         *   `Sequential` models).
         */
        /** @doc {heading: 'Models', subheading: 'Classes'} */
        Sequential.prototype.add = function (layer) {
            var isLayerModelInstance = layer instanceof Sequential || layer instanceof LayersModel;
            var modelLayer;
            if (isLayerModelInstance) {
                modelLayer = layer;
                if (modelLayer.outputs.length !== 1) {
                    throw new ValueError('All layers in a Sequential model ' +
                        'should have a single output tensor. ' +
                        'For multi-output layers, ' +
                        'use the functional API.');
                }
                if (modelLayer.inputs.length !== 1) {
                    throw new ValueError('All layers in a Sequential model ' +
                        'should have a single input tensor. ' +
                        'For multi-input layers, ' +
                        'use the functional API.');
                }
            }
            if (this.outputs.length === 0) {
                // first layer in model: check that it is an input layer
                if (layer.inboundNodes.length === 0) {
                    // create an input layer
                    if (layer.batchInputShape == null) {
                        throw new ValueError('The first layer in a Sequential model must ' +
                            'get an `inputShape` or `batchInputShape` argument.');
                    }
                    // Instantiate the input layer.
                    var x = Input({
                        batchShape: layer.batchInputShape,
                        dtype: layer.dtype,
                        name: layer.name + '_input'
                    });
                    // This will build the current layer and create the node connecting
                    // the current layer to the input layer we just created.
                    layer.apply(x);
                }
                if (isLayerModelInstance) {
                    this.outputs = modelLayer.outputs;
                    this.inputs = modelLayer.inputs;
                }
                else {
                    if (layer.inboundNodes.length !== 1) {
                        throw new ValueError('A layer added to a Sequential model must not already be ' +
                            ("connected somewhere else. LayersModel received layer " + layer.name + " ") +
                            ("which has " + layer.inboundNodes.length + " pre-existing inbound ") +
                            'connections.');
                    }
                    if (layer.inboundNodes[0].outputTensors.length !== 1) {
                        throw new ValueError('All layers in a Sequential model ' +
                            'should have a single output tensor. ' +
                            'For multi-output layers, ' +
                            'use the functional API.');
                    }
                    this.checkShape(layer);
                    this.outputs = [layer.inboundNodes[0].outputTensors[0]];
                    this.inputs = getSourceInputs(this.outputs[0]);
                }
                this.inboundNodes = [];
                // We create an input node, which we will keep updated
                // as we add more layers.
                // (This call has side effects.)
                // tslint:disable-next-line:no-unused-expression
                new Node({
                    outboundLayer: this,
                    inboundLayers: [],
                    nodeIndices: [],
                    tensorIndices: [],
                    inputTensors: this.inputs,
                    outputTensors: this.outputs,
                    // no model-level masking for now
                    inputMasks: pyListRepeat(null, this.inputs.length),
                    outputMasks: [null],
                    inputShapes: this.inputs.map(function (x) { return x.shape; }),
                    outputShapes: this.outputs[0].shape
                });
            }
            else {
                var outputTensor = layer.apply(this.outputs[0]);
                if (Array.isArray(outputTensor)) {
                    throw new TypeError('All layers in a Sequential model ' +
                        'should have a single output tensor. ' +
                        'For multi-output layers, ' +
                        'use the functional API.');
                }
                this.checkShape(layer);
                this.outputs = [outputTensor];
                // update self.inbound_nodes
                this.inboundNodes[0].outputTensors = this.outputs;
                this.inboundNodes[0].outputShapes = [this.outputs[0].shape];
            }
            this.layers.push(layer);
            this.built = false;
        };
        /**
         * Removes the last layer in the model.
         *
         * @exception TypeError if there are no layers in the model.
         */
        Sequential.prototype.pop = function () {
            if (this.layers.length === 0) {
                throw new TypeError('There are no layers in the model.');
            }
            this.layers.pop();
            if (this.layers.length === 0) {
                this.outputs = [];
                this.inboundNodes = [];
                this.outboundNodes = [];
            }
            else {
                var lastLayerIndex = this.layers.length - 1;
                this.layers[lastLayerIndex].outboundNodes = [];
                this.outputs = [this.layers[lastLayerIndex].output];
                // update self.inbound_nodes
                this.inboundNodes[0].outputTensors = this.outputs;
                this.inboundNodes[0].outputShapes = [this.outputs[0].shape];
            }
        };
        Sequential.prototype.call = function (inputs, kwargs) {
            if (this.model == null) {
                this.build();
            }
            return this.model.call(inputs, kwargs);
        };
        Sequential.prototype.build = function (inputShape) {
            // Call `getExactlyOneShape` without using its return value,
            // to verify that exactly one input shape is provided.
            getExactlyOneShape(inputShape);
            if (this.inputs.length === 0 || this.outputs.length === 0) {
                throw new TypeError('Sequential model cannot be built: model is empty.' +
                    ' Add some layers first.');
            }
            // actually create the model
            this.model = new LayersModel({
                inputs: this.inputs,
                outputs: this.outputs[0],
                name: this.name + '_model'
            });
            this.model.trainable = this.trainable;
            // mirror model attributes
            this.supportsMasking = this.model.supportsMasking;
            // TODO(michaelterry): Add caches
            this.inputLayers = this.model.inputLayers;
            this.inputLayersNodeIndices = this.model.inputLayersNodeIndices;
            this.inputLayersTensorIndices = this.model.inputLayersTensorIndices;
            this.outputLayers = this.model.outputLayers;
            this.outputLayersNodeIndices = this.model.outputLayersNodeIndices;
            this.outputLayersTensorIndices = this.model.outputLayersTensorIndices;
            this.nodesByDepth = this.model.nodesByDepth;
            this.containerNodes = this.model.containerNodes;
            this.outputNames = this.model.outputNames;
            this.inputNames = this.model.inputNames;
            // TODO(michaelterry): Add feedInputNames, feedInputs, if needed.
            // TODO(michaelterry): Add callbackModel if needed.
            this.built = true;
        };
        Sequential.prototype.countParams = function () {
            if (!this.built) {
                this.build();
            }
            return _super.prototype.countParams.call(this);
        };
        /**
         * Print a text summary of the Sequential model's layers.
         *
         * The summary includes
         * - Name and type of all layers that comprise the model.
         * - Output shape(s) of the layers
         * - Number of weight parameters of each layer
         * - The total number of trainable and non-trainable parameters of the
         * model.
         *
         * ```js
         * const model = tf.sequential();
         * model.add(
         *     tf.layers.dense({units: 100, inputShape: [10], activation: 'relu'}));
         * model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
         *
         * model.summary();
         * ```
         *
         * @param lineLength Custom line length, in number of characters.
         * @param positions Custom widths of each of the columns, as either
         *   fractions of `lineLength` (e.g., `[0.5, 0.75, 1]`) or absolute number
         *   of characters (e.g., `[30, 50, 65]`). Each number corresponds to
         *   right-most (i.e., ending) position of a column.
         * @param printFn Custom print function. Can be used to replace the default
         *   `console.log`. For example, you can use `x => {}` to mute the printed
         *   messages in the console.
         */
        /** @doc {heading: 'Models', subheading: 'Classes'} */
        Sequential.prototype.summary = function (lineLength, positions, printFn) {
            if (printFn === void 0) { printFn = console.log; }
            if (!this.built) {
                this.build();
            }
            _super.prototype.summary.call(this, lineLength, positions, printFn);
        };
        /**
         * Sets the weights of the model.
         *
         * @param weights Should be a list of Tensors with shapes and types matching
         *   the output of `model.getWeights()`.
         */
        Sequential.prototype.setWeights = function (weights) {
            if (this.model == null) {
                this.build();
            }
            this.model.setWeights(weights);
        };
        /**
         * Returns the loss value & metrics values for the model in test mode.
         *
         * Loss and metrics are specified during `compile()`, which needs to happen
         * before calls to `evaluate()`.
         *
         * Computation is done in batches.
         *
         * ```js
         * const model = tf.sequential({
         *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
         * });
         * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
         * const result = model.evaluate(tf.ones([8, 10]), tf.ones([8, 1]), {
         *   batchSize: 4,
         * });
         * result.print();
         * ```
         *
         * @param x `tf.Tensor` of test data, or an `Array` of `tf.Tensor`s if the
         * model has multiple inputs.
         * @param y `tf.Tensor` of target data, or an `Array` of `tf.Tensor`s if the
         * model has multiple outputs.
         * @param args A `ModelEvaluateConfig`, containing optional fields.
         *
         * @return `Scalar` test loss (if the model has a single output and no
         *   metrics) or `Array` of `Scalar`s (if the model has multiple outputs
         *   and/or metrics). The attribute `model.metricsNames`
         *   will give you the display labels for the scalar outputs.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        Sequential.prototype.evaluate = function (x, y, args) {
            if (args === void 0) { args = {}; }
            if (!this.built) {
                throw new RuntimeError('The model needs to be compiled before being used.');
            }
            return this.model.evaluate(x, y, args);
        };
        // TODO(cais): Add code snippet below once real dataset objects are
        //   available.
        /**
         * Evaluate model using a dataset object.
         *
         * Note: Unlike `evaluate()`, this method is asynchronous (`async`);
         *
         * @param dataset A dataset object. Its `iterator()` method is expected
         *   to generate a dataset iterator object, the `next()` method of which
         *   is expected to produce data batches for evaluation. The return value
         *   of the `next()` call ought to contain a boolean `done` field and a
         *   `value` field. The `value` field is expected to be an array of two
         *   `tf.Tensor`s or an array of two nested `tf.Tensor` structures. The former
         *   case is for models with exactly one input and one output (e.g..
         *   a sequential model). The latter case is for models with multiple
         *   inputs and/or multiple outputs. Of the two items in the array, the
         *   first is the input feature(s) and the second is the output target(s).
         * @param args A configuration object for the dataset-based evaluation.
         * @returns Loss and metric values as an Array of `Scalar` objects.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        Sequential.prototype.evaluateDataset = function (dataset, args) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!this.built) {
                        throw new RuntimeError('The model needs to be compiled before being used.');
                    }
                    return [2 /*return*/, this.model.evaluateDataset(dataset, args)];
                });
            });
        };
        /**
         * Generates output predictions for the input samples.
         *
         * Computation is done in batches.
         *
         * Note: the "step" mode of predict() is currently not supported.
         *   This is because the TensorFow.js core backend is imperative only.
         *
         * ```js
         * const model = tf.sequential({
         *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
         * });
         * model.predict(tf.ones([2, 10])).print();
         * ```
         *
         * @param x The input data, as an Tensor, or an `Array` of `tf.Tensor`s if
         *   the model has multiple inputs.
         * @param conifg A `ModelPredictConfig` object containing optional fields.
         *
         * @return `tf.Tensor`(s) of predictions.
         *
         * @exception ValueError In case of mismatch between the provided input data
         *   and the model's expectations, or in case a stateful model receives a
         *   number of samples that is not a multiple of the batch size.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        Sequential.prototype.predict = function (x, args) {
            if (args === void 0) { args = {}; }
            if (this.model == null) {
                this.build();
            }
            return this.model.predict(x, args);
        };
        /**
         * Returns predictions for a single batch of samples.
         *
         * @param x: Input samples, as an Tensor, or list of Tensors (if the model
         *   has multiple inputs).
         * @return Tensor(s) of predictions
         */
        Sequential.prototype.predictOnBatch = function (x) {
            if (this.model == null) {
                this.build();
            }
            return this.model.predictOnBatch(x);
        };
        /**
         * See `LayersModel.compile`.
         *
         * @param args
         */
        Sequential.prototype.compile = function (args) {
            this.build();
            this.model.compile(args);
            this.optimizer_ = this.model.optimizer;
            // tslint:disable-next-line:no-any
            this.isOptimizerOwned = this.model.isOptimizerOwned;
            this.loss = this.model.loss;
            this.metrics = this.model.metrics;
            // TODO(cais): Add this.lossWeights, this.sampleWeightMode,
            //   this.weightedMetrics, this.targets.
            this.metricsTensors = this.model.metricsTensors;
            this.metricsNames = this.model.metricsNames;
            // TODO(cais): Add sampleWeights.
        };
        Object.defineProperty(Sequential.prototype, "optimizer", {
            get: function () {
                return this.model == null ? undefined : this.model.optimizer;
            },
            set: function (optimizer) {
                this.model.optimizer = optimizer;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Trains the model for a fixed number of epochs (iterations on a dataset).
         *
         * ```js
         * const model = tf.sequential({
         *   layers: [tf.layers.dense({units: 1, inputShape: [10]})]
         * });
         * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
         * const history = await model.fit(tf.ones([8, 10]), tf.ones([8, 1]), {
         *   batchSize: 4,
         *   epochs: 3
         * });
         * console.log(history.history.loss[0]);
         * ```
         *
         * @param x `tf.Tensor` of training data, or an array of `tf.Tensor`s if the
         * model has multiple inputs. If all inputs in the model are named, you can
         * also pass a dictionary mapping input names to `tf.Tensor`s.
         * @param y `tf.Tensor` of target (label) data, or an array of `tf.Tensor`s if
         * the model has multiple outputs. If all outputs in the model are named, you
         *  can also pass a dictionary mapping output names to `tf.Tensor`s.
         * @param args  A `ModelFitConfig`, containing optional fields.
         *
         * @return A `History` instance. Its `history` attribute contains all
         *   information collected during training.
         *
         * @exception ValueError In case of mismatch between the provided input data
         *   and what the model expects.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        Sequential.prototype.fit = function (x, y, args) {
            if (args === void 0) { args = {}; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!this.built) {
                        throw new RuntimeError('The model needs to be compiled before ' +
                            'being used.');
                    }
                    return [2 /*return*/, this.model.fit(x, y, args)];
                });
            });
        };
        /**
         * Trains the model using a dataset object.
         *
         * ```js
         * const xArray = [
         *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
         *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
         *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
         *   [1, 1, 1, 1, 1, 1, 1, 1, 1],
         * ];
         * const yArray = [1, 1, 1, 1];
         * // Create a dataset from the JavaScript array.
         * const xDataset = tf.data.array(xArray);
         * const yDataset = tf.data.array(yArray);
         * // Zip combines the `x` and `y` Datasets into a single Dataset, the
         * // iterator of which will return an object containing of two tensors,
         * // corresponding to `x` and `y`.  The call to `batch(4)` will bundle
         * // four such samples into a single object, with the same keys now pointing
         * // to tensors that hold 4 examples, organized along the batch dimension.
         * // The call to `shuffle(4)` causes each iteration through the dataset to
         * // happen in a different order.  The size of the shuffle window is 4.
         * const xyDataset = tf.data.zip({xs: xDataset, ys: yDataset})
         *     .batch(4)
         *     .shuffle(4);
         * const model = tf.sequential({
         *   layers: [tf.layers.dense({units: 1, inputShape: [9]})]
         * });
         * model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
         * const history = await model.fitDataset(xyDataset, {
         *   epochs: 4,
         *   callbacks: {onEpochEnd: (epoch, logs) => console.log(logs.loss)}
         * });
         * ```
         *
         * @param dataset A dataset object. Its `iterator()` method is expected to
         *   generate a dataset iterator object, the `next()` method of which is
         *   expected to produce data batches for evaluation. The return value of the
         *   `next()` call ought to contain a boolean `done` field and a `value`
         *   field.
         *
         *   The `value` field is expected to be an object of with fields
         *   `xs` and `ys`, which point to the feature tensor and the target tensor,
         *   respectively. This case is for models with exactly one input and one
         *   output (e.g.. a sequential model). For example:
         *   ```js
         *   {value: {xs: xsTensor, ys: ysTensor}, done: false}
         *   ```
         *
         *   If the model has multiple inputs, the `xs` field of `value` should
         *   be an object mapping input names to their respective feature tensors.
         *   For example:
         *   ```js
         *   {
         *     value: {
         *       xs: {
         *         input_1: xsTensor1,
         *         input_2: xsTensor2
         *       },
         *       ys: ysTensor
         *     },
         *     done: false
         *   }
         *   ```
         *   If the model has multiple outputs, the `ys` field of `value` should
         *   be an object mapping output names to their respective target tensors.
         *   For example:
         *   ```js
         *   {
         *     value: {
         *       xs: xsTensor,
         *       ys: {
         *         output_1: ysTensor1,
         *         output_2: ysTensor2
         *       },
         *     },
         *     done: false
         *   }
         *   ```
         * @param args A `ModelFitDatasetArgs`, containing optional fields.
         *
         * @return A `History` instance. Its `history` attribute contains all
         *   information collected during training.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
         */
        Sequential.prototype.fitDataset = function (dataset, args) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!this.built) {
                        throw new RuntimeError('The model needs to be compiled before ' +
                            'being used.');
                    }
                    return [2 /*return*/, this.model.fitDataset(dataset, args)];
                });
            });
        };
        /**
         * Runs a single gradient update on a single batch of data.
         *
         * This method differs from `fit()` and `fitDataset()` in the following
         * regards:
         *   - It operates on exactly one batch of data.
         *   - It returns only the loss and matric values, instead of
         *     returning the batch-by-batch loss and metric values.
         *   - It doesn't support fine-grained options such as verbosity and
         *     callbacks.
         *
         * @param x Input data. It could be one of the following:
         *   - A `tf.Tensor`, or an Array of `tf.Tensor`s (in case the model has
         *     multiple inputs).
         *   - An Object mapping input names to corresponding `tf.Tensor` (if the
         *     model has named inputs).
         * @param y Target darta. It could be either a `tf.Tensor` a multiple
         *   `tf.Tensor`s. It should be consistent with `x`.
         * @returns Training loss or losses (in case the model has
         *   multiple outputs), along with metrics (if any), as numbers.
         */
        /**
         * @doc {heading: 'Models', subheading: 'Classes'}
         */
        Sequential.prototype.trainOnBatch = function (x, y) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.model.trainOnBatch(x, y)];
                });
            });
        };
        /* See parent class for JsDoc */
        /** @nocollapse */
        Sequential.fromConfig = function (cls, config, customObjects, fastWeightInit) {
            if (customObjects === void 0) { customObjects = {}; }
            if (fastWeightInit === void 0) { fastWeightInit = false; }
            var configArray;
            var extraModelConfig = {};
            if (config instanceof Array) {
                if (!(config[0].className != null) ||
                    config[0]['className'] === 'Merge') {
                    throw new ValueError('Legacy serialization format not supported yet.');
                }
                configArray = config;
            }
            else {
                tfc.util.assert(config['layers'] != null, function () {
                    return "When the config data for a Sequential model is not an Array, " +
                        "it must be an Object that contains the 'layers' field.";
                });
                configArray = config['layers'];
                delete config['layers'];
                extraModelConfig = config;
            }
            var model = new cls(extraModelConfig);
            if (!(model instanceof Sequential)) {
                throw new NotImplementedError("Sequential.fromConfig called on non-Sequential input: " + model);
            }
            for (var _i = 0, configArray_1 = configArray; _i < configArray_1.length; _i++) {
                var conf = configArray_1[_i];
                var customObjects_1 = undefined;
                var layer = deserialize(conf, customObjects_1, fastWeightInit);
                if (fastWeightInit) {
                    layer.setFastWeightInitDuringBuild(true);
                }
                model.add(layer);
            }
            return model;
        };
        Object.defineProperty(Sequential.prototype, "stopTraining", {
            get: function () {
                if (this.model == null) {
                    throw new ValueError('Cannot get the stopTraining property of a sequential model before ' +
                        'it is compiled.');
                }
                return this.model.stopTraining;
            },
            /**
             * Setter used for force stopping of LayersModel.fit() (i.e., training).
             *
             * Example:
             *
             * ```js
             * const model = tf.sequential();
             * model.add(tf.layers.dense({units: 1, inputShape: [10]}));
             * model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
             * const xs = tf.ones([8, 10]);
             * const ys = tf.zeros([8, 1]);
             *
             * const history = await model.fit(xs, ys, {
             *   epochs: 10,
             *   callbacks: {
             *     onEpochEnd: async (epoch, logs) => {
             *       if (epoch === 2) {
             *         model.stopTraining = true;
             *       }
             *     }
             *   }
             * });
             *
             * // There should be only 3 values in the loss array, instead of 10 values,
             * // due to the stopping after 3 epochs.
             * console.log(history.history.loss);
             * ```
             */
            set: function (stop) {
                // TODO(cais): When refactoring to remove the composition pattern happens,
                // remove this method overriding.
                if (this.model == null) {
                    throw new ValueError('Cannot set the stopTraining property of a sequential model before ' +
                        'it is compiled.');
                }
                this.model.stopTraining = stop;
            },
            enumerable: true,
            configurable: true
        });
        // TODO(cais): Override get trainableWeights() here
        // tslint:disable-next-line:no-any
        Sequential.prototype.getConfig = function () {
            // NOTE(cais): We override the return type of getConfig() to `any` here,
            //   because the `Sequential` class is a special case among `Container`
            //   subtypes in that its getConfig() method returns an Array (not a
            //   dict).
            var config = [];
            for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                var dict = {};
                dict['className'] = layer.getClassName();
                dict['config'] = layer.getConfig();
                config.push(dict);
            }
            return config;
        };
        /** @nocollapse */
        Sequential.className = 'Sequential';
        return Sequential;
    }(LayersModel));
    tfc.serialization.registerClass(Sequential);

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    // TODO(cais): Add doc string to all the public static functions in this
    //   class; include exectuable JavaScript code snippets where applicable
    //   (b/74074458).
    // LayersModel and related factory methods.
    /**
     * A model is a data structure that consists of `Layers` and defines inputs
     * and outputs.
     *
     * The key difference between `tf.model` and `tf.sequential` is that
     * `tf.model` is more generic, supporting an arbitrary graph (without
     * cycles) of layers. `tf.sequential` is less generic and supports only a linear
     * stack of layers.
     *
     * When creating a `tf.LayersModel`, specify its input(s) and output(s). Layers
     * are used to wire input(s) to output(s).
     *
     * For example, the following code snippet defines a model consisting of
     * two `dense` layers, with 10 and 4 units, respectively.
     *
     * ```js
     * // Define input, which has a size of 5 (not including batch dimension).
     * const input = tf.input({shape: [5]});
     *
     * // First dense layer uses relu activation.
     * const denseLayer1 = tf.layers.dense({units: 10, activation: 'relu'});
     * // Second dense layer uses softmax activation.
     * const denseLayer2 = tf.layers.dense({units: 4, activation: 'softmax'});
     *
     * // Obtain the output symbolic tensor by applying the layers on the input.
     * const output = denseLayer2.apply(denseLayer1.apply(input));
     *
     * // Create the model based on the inputs.
     * const model = tf.model({inputs: input, outputs: output});
     *
     * // The model can be used for training, evaluation and prediction.
     * // For example, the following line runs prediction with the model on
     * // some fake data.
     * model.predict(tf.ones([2, 5])).print();
     * ```
     * See also:
     *   `tf.sequential`, `tf.loadLayersModel`.
     */
    /**
     * @doc {heading: 'Models', subheading: 'Creation'}
     */
    function model(args) {
        return new LayersModel(args);
    }
    /**
     * Creates a `tf.Sequential` model.  A sequential model is any model where the
     * outputs of one layer are the inputs to the next layer, i.e. the model
     * topology is a simple 'stack' of layers, with no branching or skipping.
     *
     * This means that the first layer passed to a `tf.Sequential` model should have
     * a defined input shape. What that means is that it should have received an
     * `inputShape` or `batchInputShape` argument, or for some type of layers
     * (recurrent, Dense...) an `inputDim` argument.
     *
     * The key difference between `tf.model` and `tf.sequential` is that
     * `tf.sequential` is less generic, supporting only a linear stack of layers.
     * `tf.model` is more generic and supports an arbitrary graph (without
     * cycles) of layers.
     *
     * Examples:
     *
     * ```js
     * const model = tf.sequential();
     *
     * // First layer must have an input shape defined.
     * model.add(tf.layers.dense({units: 32, inputShape: [50]}));
     * // Afterwards, TF.js does automatic shape inference.
     * model.add(tf.layers.dense({units: 4}));
     *
     * // Inspect the inferred shape of the model's output, which equals
     * // `[null, 4]`. The 1st dimension is the undetermined batch dimension; the
     * // 2nd is the output size of the model's last layer.
     * console.log(JSON.stringify(model.outputs[0].shape));
     * ```
     *
     * It is also possible to specify a batch size (with potentially undetermined
     * batch dimension, denoted by "null") for the first layer using the
     * `batchInputShape` key. The following example is equivalent to the above:
     *
     * ```js
     * const model = tf.sequential();
     *
     * // First layer must have a defined input shape
     * model.add(tf.layers.dense({units: 32, batchInputShape: [null, 50]}));
     * // Afterwards, TF.js does automatic shape inference.
     * model.add(tf.layers.dense({units: 4}));
     *
     * // Inspect the inferred shape of the model's output.
     * console.log(JSON.stringify(model.outputs[0].shape));
     * ```
     *
     * You can also use an `Array` of already-constructed `Layer`s to create
     * a `tf.Sequential` model:
     *
     * ```js
     * const model = tf.sequential({
     *   layers: [tf.layers.dense({units: 32, inputShape: [50]}),
     *            tf.layers.dense({units: 4})]
     * });
     * console.log(JSON.stringify(model.outputs[0].shape));
     * ```
     */
    /**
     * @doc {heading: 'Models', subheading: 'Creation'}
     */
    function sequential(config) {
        return new Sequential(config);
    }
    /**
     * Load a model composed of Layer objects, including its topology and optionally
     * weights. See the Tutorial named "How to import a Keras Model" for usage
     * examples.
     *
     * This method is applicable to:
     *
     * 1. Models created with the `tf.layers.*`, `tf.sequential`, and
     * `tf.model` APIs of TensorFlow.js and later saved with the
     * `tf.LayersModel.save` method.
     * 2. Models converted from Keras or TensorFlow tf.keras using
     *    the [tensorflowjs_converter](https://github.com/tensorflow/tfjs-converter)
     *
     * This mode is *not* applicable to TensorFlow `SavedModel`s or their converted
     * forms. For those models, use `tf.loadGraphModel`.
     *
     * Example 1. Load a model from an HTTP server.
     *
     * ```js
     * const model = await tf.loadLayersModel(
     *     'https://storage.googleapis.com/tfjs-models/tfjs/iris_v1/model.json');
     * model.summary();
     * ```
     *
     * Example 2: Save `model`'s topology and weights to browser [local
     * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
     * then load it back.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * console.log('Prediction from original model:');
     * model.predict(tf.ones([1, 3])).print();
     *
     * const saveResults = await model.save('localstorage://my-model-1');
     *
     * const loadedModel = await tf.loadLayersModel('localstorage://my-model-1');
     * console.log('Prediction from loaded model:');
     * loadedModel.predict(tf.ones([1, 3])).print();
     * ```
     *
     * Example 3. Saving `model`'s topology and weights to browser
     * [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API);
     * then load it back.
     *
     * ```js
     * const model = tf.sequential(
     *     {layers: [tf.layers.dense({units: 1, inputShape: [3]})]});
     * console.log('Prediction from original model:');
     * model.predict(tf.ones([1, 3])).print();
     *
     * const saveResults = await model.save('indexeddb://my-model-1');
     *
     * const loadedModel = await tf.loadLayersModel('indexeddb://my-model-1');
     * console.log('Prediction from loaded model:');
     * loadedModel.predict(tf.ones([1, 3])).print();
     * ```
     *
     * Example 4. Load a model from user-selected files from HTML
     * [file input
     * elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file).
     *
     * ```js
     * // Note: this code snippet will not work without the HTML elements in the
     * //   page
     * const jsonUpload = document.getElementById('json-upload');
     * const weightsUpload = document.getElementById('weights-upload');
     *
     * const model = await tf.loadLayersModel(
     *     tf.io.browserFiles([jsonUpload.files[0], weightsUpload.files[0]]));
     * ```
     *
     * @param pathOrIOHandler Can be either of the two formats
     *   1. A string path to the `ModelAndWeightsConfig` JSON describing
     *      the model in the canonical TensorFlow.js format. For file://
     *      (tfjs-node-only), http:// and https:// schemas, the path can be
     *      either absolute or relative.
     *   2. An `tf.io.IOHandler` object that loads model artifacts with its `load`
     *      method.
     * @param options Optional configuration arguments for the model loading,
     *   including:
     *   - `strict`: Require that the provided weights exactly match those required
     *     by the layers.  Default true.  Passing false means that both extra
     *     weights and missing weights will be silently ignored.
     *   - ｀onProgress｀: A function of the signature `(fraction: number) => void',
     *     that can be used as the progress callback for the model loading.
     * @returns A `Promise` of `tf.LayersModel`, with the topology and weights
     *     loaded.
     */
    /** @doc {heading: 'Models', subheading: 'Loading'} */
    function loadLayersModel(pathOrIOHandler, options) {
        if (options == null) {
            options = {};
        }
        return loadLayersModelInternal(pathOrIOHandler, options);
    }
    /**
     * Used to instantiate an input to a model as a `tf.SymbolicTensor`.
     *
     * Users should call the `input` factory function for
     * consistency with other generator functions.
     *
     * Example:
     *
     * ```js
     * // Defines a simple logistic regression model with 32 dimensional input
     * // and 3 dimensional output.
     * const x = tf.input({shape: [32]});
     * const y = tf.layers.dense({units: 3, activation: 'softmax'}).apply(x);
     * const model = tf.model({inputs: x, outputs: y});
     * model.predict(tf.ones([2, 32])).print();
     * ```
     *
     * Note: `input` is only necessary when using `model`. When using
     * `sequential`, specify `inputShape` for the first layer or use `inputLayer`
     * as the first layer.
     */
    /** @doc {heading: 'Models', subheading: 'Inputs'} */
    function input(config) {
        return Input(config);
    }
    function registerCallbackConstructor(verbosityLevel, callbackConstructor) {
        CallbackConstructorRegistry.registerCallbackConstructor(verbosityLevel, callbackConstructor);
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Base class for Activations.
     *
     * Special note: due to cross-language compatibility reasons, the
     * static readonly className field in this family of classes must be set to
     * the initialLowerCamelCase name of the activation.
     */
    var Activation = /** @class */ (function (_super) {
        __extends(Activation, _super);
        function Activation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Activation.prototype.getConfig = function () {
            return {};
        };
        return Activation;
    }(tfc.serialization.Serializable));
    /**
     * Exponential linear unit (ELU).
     * Reference: https://arxiv.org/abs/1511.07289
     */
    var Elu = /** @class */ (function (_super) {
        __extends(Elu, _super);
        function Elu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Calculate the activation function.
         *
         * @param x: Input.
         * @param alpha: Scaling factor the negative section.
         * @return Output of the ELU activation.
         */
        Elu.prototype.apply = function (x, alpha) {
            if (alpha === void 0) { alpha = 1; }
            return elu(x, alpha);
        };
        /** @nocollapse */
        Elu.className = 'elu';
        return Elu;
    }(Activation));
    tfc.serialization.registerClass(Elu);
    /**
     * Scaled Exponential Linear Unit. (Klambauer et al., 2017).
     * Reference: Self-Normalizing Neural Networks, https://arxiv.org/abs/1706.02515
     * Notes:
     *   - To be used together with the initialization "lecunNormal".
     *   - To be used together with the dropout variant "AlphaDropout".
     */
    var Selu = /** @class */ (function (_super) {
        __extends(Selu, _super);
        function Selu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Selu.prototype.apply = function (x) {
            return tfc.selu(x);
        };
        /** @nocollapse */
        Selu.className = 'selu';
        return Selu;
    }(Activation));
    tfc.serialization.registerClass(Selu);
    /**
     *  Rectified linear unit
     */
    var Relu = /** @class */ (function (_super) {
        __extends(Relu, _super);
        function Relu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Relu.prototype.apply = function (x) {
            return tfc.relu(x);
        };
        /** @nocollapse */
        Relu.className = 'relu';
        return Relu;
    }(Activation));
    tfc.serialization.registerClass(Relu);
    /**
     * Rectified linear unit activation maxing out at 6.0.
     */
    var Relu6 = /** @class */ (function (_super) {
        __extends(Relu6, _super);
        function Relu6() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Relu6.prototype.apply = function (x) {
            return tfc.tidy(function () { return tfc.minimum(6.0, tfc.relu(x)); });
        };
        /** @nocollapse */
        Relu6.className = 'relu6';
        return Relu6;
    }(Activation));
    tfc.serialization.registerClass(Relu6);
    //* Linear activation (no-op) */
    var Linear = /** @class */ (function (_super) {
        __extends(Linear, _super);
        function Linear() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Linear.prototype.apply = function (x) {
            return x;
        };
        /** @nocollapse */
        Linear.className = 'linear';
        return Linear;
    }(Activation));
    tfc.serialization.registerClass(Linear);
    /**
     * Sigmoid activation function.
     */
    var Sigmoid = /** @class */ (function (_super) {
        __extends(Sigmoid, _super);
        function Sigmoid() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Sigmoid.prototype.apply = function (x) {
            return tfc.sigmoid(x);
        };
        /** @nocollapse */
        Sigmoid.className = 'sigmoid';
        return Sigmoid;
    }(Activation));
    tfc.serialization.registerClass(Sigmoid);
    /**
     * Segment-wise linear approximation of sigmoid.
     */
    var HardSigmoid = /** @class */ (function (_super) {
        __extends(HardSigmoid, _super);
        function HardSigmoid() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HardSigmoid.prototype.apply = function (x) {
            return hardSigmoid(x);
        };
        /** @nocollapse */
        HardSigmoid.className = 'hardSigmoid';
        return HardSigmoid;
    }(Activation));
    tfc.serialization.registerClass(HardSigmoid);
    /**
     * Softplus activation function.
     */
    var Softplus = /** @class */ (function (_super) {
        __extends(Softplus, _super);
        function Softplus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Softplus.prototype.apply = function (x) {
            return tfc.softplus(x);
        };
        /** @nocollapse */
        Softplus.className = 'softplus';
        return Softplus;
    }(Activation));
    tfc.serialization.registerClass(Softplus);
    /**
     * Softsign activation function.
     */
    var Softsign = /** @class */ (function (_super) {
        __extends(Softsign, _super);
        function Softsign() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Softsign.prototype.apply = function (x) {
            return softsign(x);
        };
        /** @nocollapse */
        Softsign.className = 'softsign';
        return Softsign;
    }(Activation));
    tfc.serialization.registerClass(Softsign);
    /**
     * Hyperbolic tangent function.
     */
    var Tanh = /** @class */ (function (_super) {
        __extends(Tanh, _super);
        function Tanh() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Tanh.prototype.apply = function (x) {
            return tfc.tanh(x);
        };
        /** @nocollapse */
        Tanh.className = 'tanh';
        return Tanh;
    }(Activation));
    tfc.serialization.registerClass(Tanh);
    /**
     * Softmax activation function
     */
    var Softmax = /** @class */ (function (_super) {
        __extends(Softmax, _super);
        function Softmax() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Calculate the activation function.
         *
         * @param x Tensor.
         * @param axis Integer, axis along which the softmax normalization is applied.
         * Invalid if < 2, as softmax across 1 (the batch dimension) is assumed to be
         * an error.
         *
         * @returns a Tensor of the same shape as x
         *
         * @throws ValueError: In case `dim(x) < 2`.
         */
        Softmax.prototype.apply = function (x, axis) {
            if (axis === void 0) { axis = (-1); }
            return tfc.softmax(x, axis);
        };
        /** @nocollapse */
        Softmax.className = 'softmax';
        return Softmax;
    }(Activation));
    tfc.serialization.registerClass(Softmax);
    /**
     * Log softmax activation function
     */
    var LogSoftmax = /** @class */ (function (_super) {
        __extends(LogSoftmax, _super);
        function LogSoftmax() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Calculate the activation function of log softmax:
         * log( exp(x_i) / sum(exp(x)) )
         *
         * @param x Tensor.
         * @param axis Integer, axis along which the softmax normalization is applied.
         * Invalid if < 2, as softmax across 1 (the batch dimension) is assumed to be
         * an error.
         *
         * @returns a Tensor of the same shape as x
         *
         * @throws ValueError: In case `dim(x) < 2`.
         */
        LogSoftmax.prototype.apply = function (x, axis) {
            if (axis === void 0) { axis = (-1); }
            return tfc.logSoftmax(x, axis);
        };
        /** @nocollapse */
        LogSoftmax.className = 'logSoftmax';
        return LogSoftmax;
    }(Activation));
    tfc.serialization.registerClass(LogSoftmax);
    function serializeActivation(activation) {
        return activation.getClassName();
    }
    function deserializeActivation(config, customObjects) {
        if (customObjects === void 0) { customObjects = {}; }
        return deserializeKerasObject(config, tfc.serialization.SerializationMap.getMap().classNameMap, customObjects, 'activation');
    }
    function getActivation(identifier) {
        if (identifier == null) {
            var config = {};
            config['className'] = 'linear';
            config['config'] = {};
            return deserializeActivation(config);
        }
        if (typeof identifier === 'string') {
            var config = {};
            config['className'] = identifier;
            config['config'] = {};
            return deserializeActivation(config);
        }
        else if (identifier instanceof Activation) {
            return identifier;
        }
        else {
            return deserializeActivation(identifier);
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    function assertObjectArgs(args) {
        if (args != null && typeof args !== 'object') {
            throw new Error("Argument to L1L2 regularizer's constructor is expected to be an " +
                ("object, but received: " + args));
        }
    }
    /**
     * Regularizer base class.
     */
    var Regularizer = /** @class */ (function (_super) {
        __extends(Regularizer, _super);
        function Regularizer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Regularizer;
    }(tfc.serialization.Serializable));
    var L1L2 = /** @class */ (function (_super) {
        __extends(L1L2, _super);
        function L1L2(args) {
            var _this = _super.call(this) || this;
            assertObjectArgs(args);
            _this.l1 = args == null || args.l1 == null ? 0.01 : args.l1;
            _this.l2 = args == null || args.l2 == null ? 0.01 : args.l2;
            _this.hasL1 = _this.l1 !== 0;
            _this.hasL2 = _this.l2 !== 0;
            return _this;
        }
        /**
         * Porting note: Renamed from __call__.
         * @param x Variable of which to calculate the regularization score.
         */
        L1L2.prototype.apply = function (x) {
            var _this = this;
            return tfc.tidy(function () {
                var regularization = tfc.zeros([1]);
                if (_this.hasL1) {
                    regularization = tfc.add(regularization, tfc.sum(tfc.mul(_this.l1, tfc.abs(x))));
                }
                if (_this.hasL2) {
                    regularization =
                        tfc.add(regularization, tfc.sum(tfc.mul(_this.l2, square(x))));
                }
                return regularization.asScalar();
            });
        };
        L1L2.prototype.getConfig = function () {
            return { 'l1': this.l1, 'l2': this.l2 };
        };
        /** @nocollapse */
        L1L2.fromConfig = function (cls, config) {
            return new cls({ l1: config['l1'], l2: config['l2'] });
        };
        /** @nocollapse */
        L1L2.className = 'L1L2';
        return L1L2;
    }(Regularizer));
    tfc.serialization.registerClass(L1L2);
    function l1(args) {
        assertObjectArgs(args);
        return new L1L2({ l1: args != null ? args.l1 : null, l2: 0 });
    }
    function l2(args) {
        assertObjectArgs(args);
        return new L1L2({ l2: args != null ? args.l2 : null, l1: 0 });
    }
    // Maps the JavaScript-like identifier keys to the corresponding keras symbols.
    var REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP = {
        'l1l2': 'L1L2'
    };
    function serializeRegularizer(constraint) {
        return serializeKerasObject(constraint);
    }
    function deserializeRegularizer(config, customObjects) {
        if (customObjects === void 0) { customObjects = {}; }
        return deserializeKerasObject(config, tfc.serialization.SerializationMap.getMap().classNameMap, customObjects, 'regularizer');
    }
    function getRegularizer(identifier) {
        if (identifier == null) {
            return null;
        }
        if (typeof identifier === 'string') {
            var className = identifier in REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP ?
                REGULARIZER_IDENTIFIER_REGISTRY_SYMBOL_MAP[identifier] :
                identifier;
            var config = { className: className, config: {} };
            return deserializeRegularizer(config);
        }
        else if (identifier instanceof Regularizer) {
            return identifier;
        }
        else {
            return deserializeRegularizer(identifier);
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    var ReLU = /** @class */ (function (_super) {
        __extends(ReLU, _super);
        function ReLU(args) {
            var _this = _super.call(this, args == null ? {} : args) || this;
            _this.supportsMasking = true;
            if (args != null) {
                _this.maxValue = args.maxValue;
            }
            return _this;
        }
        ReLU.prototype.call = function (inputs, kwargs) {
            inputs = getExactlyOneTensor(inputs);
            var output = tfc.relu(inputs);
            if (this.maxValue != null) {
                output = tfc.clipByValue(output, 0, this.maxValue);
            }
            return output;
        };
        ReLU.prototype.computeOutputShape = function (inputShape) {
            return inputShape;
        };
        ReLU.prototype.getConfig = function () {
            var config = { maxValue: this.maxValue };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        ReLU.className = 'ReLU';
        return ReLU;
    }(Layer));
    tfc.serialization.registerClass(ReLU);
    var LeakyReLU = /** @class */ (function (_super) {
        __extends(LeakyReLU, _super);
        function LeakyReLU(args) {
            var _this = _super.call(this, args == null ? {} : args) || this;
            _this.DEFAULT_ALPHA = 0.3;
            if (args == null) {
                args = {};
            }
            _this.alpha = args.alpha == null ? _this.DEFAULT_ALPHA : args.alpha;
            return _this;
        }
        LeakyReLU.prototype.call = function (inputs, kwargs) {
            var x = getExactlyOneTensor(inputs);
            return tfc.leakyRelu(x, this.alpha);
        };
        LeakyReLU.prototype.computeOutputShape = function (inputShape) {
            return inputShape;
        };
        LeakyReLU.prototype.getConfig = function () {
            var config = { alpha: this.alpha };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        LeakyReLU.className = 'LeakyReLU';
        return LeakyReLU;
    }(Layer));
    tfc.serialization.registerClass(LeakyReLU);
    var PReLU = /** @class */ (function (_super) {
        __extends(PReLU, _super);
        function PReLU(args) {
            var _this = _super.call(this, args == null ? {} : args) || this;
            _this.DEFAULT_ALPHA_INITIALIZER = 'zeros';
            if (args == null) {
                args = {};
            }
            _this.supportsMasking = true;
            _this.alphaInitializer =
                getInitializer(args.alphaInitializer || _this.DEFAULT_ALPHA_INITIALIZER);
            _this.alphaRegularizer = getRegularizer(args.alphaRegularizer);
            _this.alphaConstraint = getConstraint(args.alphaConstraint);
            if (args.sharedAxes == null) {
                _this.sharedAxes = null;
            }
            else if (Array.isArray(args.sharedAxes)) {
                _this.sharedAxes = args.sharedAxes;
            }
            else if (typeof args.sharedAxes === 'number') {
                _this.sharedAxes = [args.sharedAxes];
            }
            else {
                throw new ValueError("Expected sharedAxes to be a number or an array of numbers, " +
                    ("but got " + args.sharedAxes));
            }
            return _this;
        }
        PReLU.prototype.build = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            var paramShape = inputShape.slice(1);
            if (this.sharedAxes != null) {
                for (var _i = 0, _a = this.sharedAxes; _i < _a.length; _i++) {
                    var i = _a[_i];
                    paramShape[i - 1] = 1;
                }
            }
            this.alpha = this.addWeight('alpha', paramShape, 'float32', this.alphaInitializer, this.alphaRegularizer, true, this.alphaConstraint);
            // Set input spec.
            var axes = {};
            if (this.sharedAxes != null) {
                for (var i = 1; i < inputShape.length; ++i) {
                    axes[i] = inputShape[i];
                }
            }
            this.inputSpec = [new InputSpec({
                    ndim: inputShape.length,
                    axes: axes,
                })];
            this.built = true;
        };
        PReLU.prototype.call = function (inputs, kwargs) {
            inputs = getExactlyOneTensor(inputs);
            return tfc.prelu(inputs, this.alpha.read());
        };
        PReLU.prototype.getConfig = function () {
            var config = {
                alphaInitializer: serializeInitializer(this.alphaInitializer),
                alphaRegularizer: serializeRegularizer(this.alphaRegularizer),
                alphaConstraint: serializeConstraint(this.alphaConstraint),
                sharedAxes: this.sharedAxes
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        PReLU.className = 'PReLU';
        return PReLU;
    }(Layer));
    tfc.serialization.registerClass(PReLU);
    var ELU = /** @class */ (function (_super) {
        __extends(ELU, _super);
        function ELU(args) {
            var _this = _super.call(this, args == null ? {} : args) || this;
            _this.DEFAULT_ALPHA = 1.0;
            if (args == null) {
                args = {};
            }
            if (args.alpha != null && args.alpha !== _this.DEFAULT_ALPHA) {
                throw new NotImplementedError("Non-default alpha value (" + args.alpha + ") is not supported by the " +
                    "ELU layer yet.");
            }
            _this.alpha = args.alpha == null ? _this.DEFAULT_ALPHA : args.alpha;
            return _this;
        }
        ELU.prototype.call = function (inputs, kwargs) {
            var x = getExactlyOneTensor(inputs);
            return tfc.elu(x);
        };
        ELU.prototype.computeOutputShape = function (inputShape) {
            return inputShape;
        };
        ELU.prototype.getConfig = function () {
            var config = { alpha: this.alpha };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        ELU.className = 'ELU';
        return ELU;
    }(Layer));
    tfc.serialization.registerClass(ELU);
    var ThresholdedReLU = /** @class */ (function (_super) {
        __extends(ThresholdedReLU, _super);
        function ThresholdedReLU(args) {
            var _this = _super.call(this, args == null ? {} : args) || this;
            _this.DEFAULT_THETA = 1.0;
            if (args == null) {
                args = {};
            }
            _this.theta = args.theta == null ? _this.DEFAULT_THETA : args.theta;
            return _this;
        }
        ThresholdedReLU.prototype.call = function (inputs, kwargs) {
            var x = getExactlyOneTensor(inputs);
            return x.mul(cast(x.greater(this.theta), 'float32'));
        };
        ThresholdedReLU.prototype.computeOutputShape = function (inputShape) {
            return inputShape;
        };
        ThresholdedReLU.prototype.getConfig = function () {
            var config = { theta: this.theta };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        ThresholdedReLU.className = 'ThresholdedReLU';
        return ThresholdedReLU;
    }(Layer));
    tfc.serialization.registerClass(ThresholdedReLU);
    var Softmax$1 = /** @class */ (function (_super) {
        __extends(Softmax$$1, _super);
        function Softmax$$1(args) {
            var _this = _super.call(this, args == null ? {} : args) || this;
            _this.DEFAULT_AXIS = 1.0;
            if (args == null) {
                args = {};
            }
            _this.softmax = new Softmax().apply;
            _this.axis = args.axis == null ? _this.DEFAULT_AXIS : args.axis;
            return _this;
        }
        Softmax$$1.prototype.call = function (inputs, kwargs) {
            var x = getExactlyOneTensor(inputs);
            return this.softmax(x, this.axis);
        };
        Softmax$$1.prototype.computeOutputShape = function (inputShape) {
            return inputShape;
        };
        Softmax$$1.prototype.getConfig = function () {
            var config = { axis: this.axis };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        Softmax$$1.className = 'Softmax';
        return Softmax$$1;
    }(Layer));
    tfc.serialization.registerClass(Softmax$1);

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Transforms a single number of array of numbers into an array of numbers.
     * @param value
     * @param n: The size of the tuple to be returned.
     * @param name: Name of the parameter, used for generating error messages.
     * @returns An array of numbers.
     */
    function normalizeArray(value, n, name) {
        if (typeof value === 'number') {
            return pyListRepeat(value, n);
        }
        else {
            if (value.length !== n) {
                throw new ValueError("The " + name + " argument must be an integer or tuple of " + n + " integers." +
                    (" Received: " + value.length + " elements."));
            }
            for (var i = 0; i < n; ++i) {
                var singleValue = value[i];
                if (!isInteger(singleValue)) {
                    throw new ValueError("The " + name + " argument must be an integer or tuple of " + n +
                        (" integers. Received: " + JSON.stringify(value) + " including a") +
                        (" non-integer number " + singleValue));
                }
            }
            return value;
        }
    }
    /**
     * Determines output length of a convolution given input length.
     * @param inputLength
     * @param filterSize
     * @param padding
     * @param stride
     * @param dilation: dilation rate.
     */
    function convOutputLength(inputLength, filterSize, padding, stride, dilation) {
        if (dilation === void 0) { dilation = 1; }
        if (inputLength == null) {
            return inputLength;
        }
        var dilatedFilterSize = filterSize + (filterSize - 1) * (dilation - 1);
        var outputLength;
        if (padding === 'same') {
            outputLength = inputLength;
        }
        else { // VALID
            outputLength = inputLength - dilatedFilterSize + 1;
        }
        return Math.floor((outputLength + stride - 1) / stride);
    }
    function deconvLength(dimSize, strideSize, kernelSize, padding) {
        if (dimSize == null) {
            return null;
        }
        if (padding === 'valid') {
            dimSize = dimSize * strideSize + max([kernelSize - strideSize, 0]);
        }
        else if (padding === 'same') {
            dimSize = dimSize * strideSize;
        }
        else {
            throw new ValueError("Unsupport padding mode: " + padding + ".");
        }
        return dimSize;
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    function mapActivationToFusedKernel(activationName) {
        if (activationName === 'relu') {
            return 'relu';
        }
        if (activationName === 'linear') {
            return 'linear';
        }
        return null;
    }
    /**
     * Transpose and cast the input before the conv2d.
     * @param x Input image tensor.
     * @param dataFormat
     */
    function preprocessConv2DInput(x, dataFormat) {
        // TODO(cais): Cast type to float32 if not.
        return tfc.tidy(function () {
            checkDataFormat(dataFormat);
            if (dataFormat === 'channelsFirst') {
                return tfc.transpose(x, [0, 2, 3, 1]); // NCHW -> NHWC.
            }
            else {
                return x;
            }
        });
    }
    /**
     * Transpose and cast the input before the conv3d.
     * @param x Input image tensor.
     * @param dataFormat
     */
    function preprocessConv3DInput(x, dataFormat) {
        return tfc.tidy(function () {
            checkDataFormat(dataFormat);
            if (dataFormat === 'channelsFirst') {
                return tfc.transpose(x, [0, 2, 3, 4, 1]); // NCDHW -> NDHWC.
            }
            else {
                return x;
            }
        });
    }
    /**
     * 1D-convolution with bias added.
     *
     * Porting Note: This function does not exist in the Python Keras backend.
     *   It is exactly the same as `conv2d`, except the added `bias`.
     *
     * @param x Input tensor, rank-3, of shape `[batchSize, width, inChannels]`.
     * @param kernel Kernel, rank-3, of shape `[filterWidth, inDepth, outDepth]`.
     * @param bias Bias, rank-3, of shape `[outDepth]`.
     * @param strides
     * @param padding Padding mode.
     * @param dataFormat Data format.
     * @param dilationRate
     * @returns The result of the 1D convolution.
     * @throws ValueError, if `x`, `kernel` or `bias` is not of the correct rank.
     */
    function conv1dWithBias(x, kernel, bias, strides, padding, dataFormat, dilationRate) {
        if (strides === void 0) { strides = 1; }
        if (padding === void 0) { padding = 'valid'; }
        if (dilationRate === void 0) { dilationRate = 1; }
        return tfc.tidy(function () {
            if (dataFormat == null) {
                dataFormat = imageDataFormat();
            }
            checkDataFormat(dataFormat);
            // Check the ranks of x, kernel and bias.
            if (x.shape.length !== 3) {
                throw new ValueError("The input of a conv1dWithBias operation should be 3, but is " +
                    (x.shape.length + " instead."));
            }
            if (kernel.shape.length !== 3) {
                throw new ValueError("The kernel for a conv1dWithBias operation should be 3, but is " +
                    (kernel.shape.length + " instead"));
            }
            if (bias != null && bias.shape.length !== 1) {
                throw new ValueError("The bias for a conv1dWithBias operation should be 1, but is " +
                    (kernel.shape.length + " instead"));
            }
            // TODO(cais): Support CAUSAL padding mode.
            if (dataFormat === 'channelsFirst') {
                x = tfc.transpose(x, [0, 2, 1]); // NCW -> NWC.
            }
            if (padding === 'causal') {
                throw new NotImplementedError('The support for CAUSAL padding mode in conv1dWithBias is not ' +
                    'implemented yet.');
            }
            var y = tfc.conv1d(x, kernel, strides, padding === 'same' ? 'same' : 'valid', 'NWC', dilationRate);
            if (bias != null) {
                y = biasAdd(y, bias);
            }
            return y;
        });
    }
    /**
     * 2D Convolution with an added bias and optional activation.
     * Note: This function does not exist in the Python Keras Backend. This function
     * is exactly the same as `conv2d`, except the added `bias`.
     */
    function conv2dWithBiasActivation(x, kernel, bias, strides, padding, dataFormat, dilationRate, activation) {
        if (strides === void 0) { strides = [1, 1]; }
        if (padding === void 0) { padding = 'valid'; }
        if (activation === void 0) { activation = null; }
        return tfc.tidy(function () {
            if (dataFormat == null) {
                dataFormat = imageDataFormat();
            }
            checkDataFormat(dataFormat);
            if (x.rank !== 3 && x.rank !== 4) {
                throw new ValueError("conv2dWithBiasActivation expects input to be of rank 3 or 4, " +
                    ("but received " + x.rank + "."));
            }
            if (kernel.rank !== 3 && kernel.rank !== 4) {
                throw new ValueError("conv2dWithBiasActivation expects kernel to be of rank 3 or 4, " +
                    ("but received " + x.rank + "."));
            }
            var y = preprocessConv2DInput(x, dataFormat);
            if (padding === 'causal') {
                throw new NotImplementedError('The support for CAUSAL padding mode in conv1dWithBias is not ' +
                    'implemented yet.');
            }
            y = tfc.fused.conv2d({
                x: y,
                filter: kernel,
                strides: strides,
                pad: padding === 'same' ? 'same' : 'valid',
                dilations: dilationRate,
                dataFormat: 'NHWC',
                bias: bias,
                activation: activation
            });
            if (dataFormat === 'channelsFirst') {
                y = tfc.transpose(y, [0, 3, 1, 2]);
            }
            return y;
        });
    }
    /**
     * 3D Convolution with an added bias.
     * Note: This function does not exist in the Python Keras Backend. This function
     * is exactly the same as `conv3d`, except the added `bias`.
     */
    function conv3dWithBias(x, kernel, bias, strides, padding, dataFormat, dilationRate) {
        if (strides === void 0) { strides = [1, 1, 1]; }
        if (padding === void 0) { padding = 'valid'; }
        return tfc.tidy(function () {
            if (dataFormat == null) {
                dataFormat = imageDataFormat();
            }
            checkDataFormat(dataFormat);
            if (x.rank !== 4 && x.rank !== 5) {
                throw new ValueError("conv3dWithBias expects input to be of rank 4 or 5, but received " +
                    (x.rank + "."));
            }
            if (kernel.rank !== 4 && kernel.rank !== 5) {
                throw new ValueError("conv3dWithBias expects kernel to be of rank 4 or 5, but received " +
                    (x.rank + "."));
            }
            var y = preprocessConv3DInput(x, dataFormat);
            if (padding === 'causal') {
                throw new NotImplementedError('The support for CAUSAL padding mode in conv3dWithBias is not ' +
                    'implemented yet.');
            }
            y = tfc.conv3d(y, kernel, strides, padding === 'same' ? 'same' : 'valid', 'NDHWC', dilationRate);
            if (bias != null) {
                y = biasAdd(y, bias);
            }
            if (dataFormat === 'channelsFirst') {
                y = tfc.transpose(y, [0, 4, 1, 2, 3]);
            }
            return y;
        });
    }
    /**
     * Abstract convolution layer.
     */
    var BaseConv = /** @class */ (function (_super) {
        __extends(BaseConv, _super);
        function BaseConv(rank, args) {
            var _this = _super.call(this, args) || this;
            _this.bias = null;
            _this.DEFAULT_KERNEL_INITIALIZER = 'glorotNormal';
            _this.DEFAULT_BIAS_INITIALIZER = 'zeros';
            BaseConv.verifyArgs(args);
            _this.rank = rank;
            assertPositiveInteger(_this.rank, 'rank');
            if (_this.rank !== 1 && _this.rank !== 2 && _this.rank !== 3) {
                throw new NotImplementedError("Convolution layer for rank other than 1, 2, or 3 (" + _this.rank + ") is " +
                    "not implemented yet.");
            }
            _this.kernelSize = normalizeArray(args.kernelSize, rank, 'kernelSize');
            _this.strides = normalizeArray(args.strides == null ? 1 : args.strides, rank, 'strides');
            _this.padding = args.padding == null ? 'valid' : args.padding;
            checkPaddingMode(_this.padding);
            _this.dataFormat =
                args.dataFormat == null ? 'channelsLast' : args.dataFormat;
            checkDataFormat(_this.dataFormat);
            _this.activation = getActivation(args.activation);
            _this.useBias = args.useBias == null ? true : args.useBias;
            _this.biasInitializer =
                getInitializer(args.biasInitializer || _this.DEFAULT_BIAS_INITIALIZER);
            _this.biasConstraint = getConstraint(args.biasConstraint);
            _this.biasRegularizer = getRegularizer(args.biasRegularizer);
            _this.activityRegularizer = getRegularizer(args.activityRegularizer);
            _this.dilationRate = normalizeArray(args.dilationRate == null ? 1 : args.dilationRate, rank, 'dilationRate');
            if (_this.rank === 1 &&
                (Array.isArray(_this.dilationRate) &&
                    _this.dilationRate.length !== 1)) {
                throw new ValueError("dilationRate must be a number or an array of a single number " +
                    "for 1D convolution, but received " +
                    ("" + JSON.stringify(_this.dilationRate)));
            }
            else if (_this.rank === 2) {
                if (typeof _this.dilationRate === 'number') {
                    _this.dilationRate = [_this.dilationRate, _this.dilationRate];
                }
                else if (_this.dilationRate.length !== 2) {
                    throw new ValueError("dilationRate must be a number or array of two numbers for 2D " +
                        ("convolution, but received " + JSON.stringify(_this.dilationRate)));
                }
            }
            else if (_this.rank === 3) {
                if (typeof _this.dilationRate === 'number') {
                    _this.dilationRate =
                        [_this.dilationRate, _this.dilationRate, _this.dilationRate];
                }
                else if (_this.dilationRate.length !== 3) {
                    throw new ValueError("dilationRate must be a number or array of three numbers for 3D " +
                        ("convolution, but received " + JSON.stringify(_this.dilationRate)));
                }
            }
            return _this;
        }
        BaseConv.verifyArgs = function (args) {
            // Check config.kernelSize type and shape.
            assert('kernelSize' in args, "required key 'kernelSize' not in config");
            if (typeof args.kernelSize !== 'number' &&
                !checkArrayTypeAndLength(args.kernelSize, 'number', 1, 3))
                throw new ValueError("BaseConv expects config.kernelSize to be number or number[] with " +
                    ("length 1, 2, or 3, but received " + JSON.stringify(args.kernelSize) + "."));
        };
        BaseConv.prototype.getConfig = function () {
            var config = {
                kernelSize: this.kernelSize,
                strides: this.strides,
                padding: this.padding,
                dataFormat: this.dataFormat,
                dilationRate: this.dilationRate,
                activation: serializeActivation(this.activation),
                useBias: this.useBias,
                biasInitializer: serializeInitializer(this.biasInitializer),
                biasRegularizer: serializeRegularizer(this.biasRegularizer),
                activityRegularizer: serializeRegularizer(this.activityRegularizer),
                biasConstraint: serializeConstraint(this.biasConstraint)
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        return BaseConv;
    }(Layer));
    /**
     * Abstract nD convolution layer.  Ancestor of convolution layers which reduce
     * across channels, i.e., Conv1D and Conv2D, but not DepthwiseConv2D.
     */
    var Conv = /** @class */ (function (_super) {
        __extends(Conv, _super);
        function Conv(rank, args) {
            var _this = _super.call(this, rank, args) || this;
            _this.kernel = null;
            Conv.verifyArgs(args);
            _this.filters = args.filters;
            assertPositiveInteger(_this.filters, 'filters');
            _this.kernelInitializer = getInitializer(args.kernelInitializer || _this.DEFAULT_KERNEL_INITIALIZER);
            _this.kernelConstraint = getConstraint(args.kernelConstraint);
            _this.kernelRegularizer = getRegularizer(args.kernelRegularizer);
            return _this;
        }
        Conv.prototype.build = function (inputShape) {
            var _a;
            inputShape = getExactlyOneShape(inputShape);
            var channelAxis = this.dataFormat === 'channelsFirst' ? 1 : inputShape.length - 1;
            if (inputShape[channelAxis] == null) {
                throw new ValueError("The channel dimension of the input should be defined. " +
                    ("Found " + inputShape[channelAxis]));
            }
            var inputDim = inputShape[channelAxis];
            var kernelShape = this.kernelSize.concat([inputDim, this.filters]);
            this.kernel = this.addWeight('kernel', kernelShape, null, this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
            if (this.useBias) {
                this.bias = this.addWeight('bias', [this.filters], null, this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
            }
            this.inputSpec = [{ ndim: this.rank + 2, axes: (_a = {}, _a[channelAxis] = inputDim, _a) }];
            this.built = true;
        };
        Conv.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                inputs = getExactlyOneTensor(inputs);
                var outputs;
                var biasValue = _this.bias == null ? null : _this.bias.read();
                var fusedActivationName = mapActivationToFusedKernel(_this.activation.getClassName());
                if (fusedActivationName != null && _this.rank === 2) {
                    outputs = conv2dWithBiasActivation(inputs, _this.kernel.read(), biasValue, _this.strides, _this.padding, _this.dataFormat, _this.dilationRate, fusedActivationName);
                }
                else {
                    if (_this.rank === 1) {
                        outputs = conv1dWithBias(inputs, _this.kernel.read(), biasValue, _this.strides[0], _this.padding, _this.dataFormat, _this.dilationRate[0]);
                    }
                    else if (_this.rank === 2) {
                        // TODO(cais): Move up to constructor.
                        outputs = conv2dWithBiasActivation(inputs, _this.kernel.read(), biasValue, _this.strides, _this.padding, _this.dataFormat, _this.dilationRate);
                    }
                    else if (_this.rank === 3) {
                        outputs = conv3dWithBias(inputs, _this.kernel.read(), biasValue, _this.strides, _this.padding, _this.dataFormat, _this.dilationRate);
                    }
                    else {
                        throw new NotImplementedError('convolutions greater than 3D are not implemented yet.');
                    }
                    if (_this.activation != null) {
                        outputs = _this.activation.apply(outputs);
                    }
                }
                return outputs;
            });
        };
        Conv.prototype.computeOutputShape = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            var newSpace = [];
            var space = (this.dataFormat === 'channelsLast') ?
                inputShape.slice(1, inputShape.length - 1) :
                inputShape.slice(2);
            for (var i = 0; i < space.length; ++i) {
                var newDim = convOutputLength(space[i], this.kernelSize[i], this.padding, this.strides[i], typeof this.dilationRate === 'number' ? this.dilationRate :
                    this.dilationRate[i]);
                newSpace.push(newDim);
            }
            var outputShape = [inputShape[0]];
            if (this.dataFormat === 'channelsLast') {
                outputShape = outputShape.concat(newSpace);
                outputShape.push(this.filters);
            }
            else {
                outputShape.push(this.filters);
                outputShape = outputShape.concat(newSpace);
            }
            return outputShape;
        };
        Conv.prototype.getConfig = function () {
            var config = {
                filters: this.filters,
                kernelInitializer: serializeInitializer(this.kernelInitializer),
                kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
                kernelConstraint: serializeConstraint(this.kernelConstraint)
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        Conv.verifyArgs = function (args) {
            // Check config.filters type, shape, and value.
            if (!('filters' in args) || typeof args.filters !== 'number' ||
                args.filters < 1) {
                throw new ValueError("Convolution layer expected config.filters to be a 'number' > 0 " +
                    ("but got " + JSON.stringify(args.filters)));
            }
        };
        return Conv;
    }(BaseConv));
    var Conv2D = /** @class */ (function (_super) {
        __extends(Conv2D, _super);
        function Conv2D(args) {
            var _this = _super.call(this, 2, args) || this;
            Conv2D.verifyArgs(args);
            return _this;
        }
        Conv2D.prototype.getConfig = function () {
            var config = _super.prototype.getConfig.call(this);
            delete config['rank'];
            return config;
        };
        Conv2D.verifyArgs = function (args) {
            // config.kernelSize must be a number or array of numbers.
            if ((typeof args.kernelSize !== 'number') &&
                !checkArrayTypeAndLength(args.kernelSize, 'number', 1, 2))
                throw new ValueError("Conv2D expects config.kernelSize to be number or number[] with " +
                    ("length 1 or 2, but received " + JSON.stringify(args.kernelSize) + "."));
        };
        /** @nocollapse */
        Conv2D.className = 'Conv2D';
        return Conv2D;
    }(Conv));
    tfc.serialization.registerClass(Conv2D);
    var Conv3D = /** @class */ (function (_super) {
        __extends(Conv3D, _super);
        function Conv3D(args) {
            var _this = _super.call(this, 3, args) || this;
            Conv3D.verifyArgs(args);
            return _this;
        }
        Conv3D.prototype.getConfig = function () {
            var config = _super.prototype.getConfig.call(this);
            delete config['rank'];
            return config;
        };
        Conv3D.verifyArgs = function (args) {
            // config.kernelSize must be a number or array of numbers.
            if (typeof args.kernelSize !== 'number') {
                if (!(Array.isArray(args.kernelSize) &&
                    (args.kernelSize.length === 1 || args.kernelSize.length === 3)))
                    throw new ValueError("Conv3D expects config.kernelSize to be number or" +
                        (" [number, number, number], but received " + JSON.stringify(args.kernelSize) + "."));
            }
        };
        /** @nocollapse */
        Conv3D.className = 'Conv3D';
        return Conv3D;
    }(Conv));
    tfc.serialization.registerClass(Conv3D);
    var Conv2DTranspose = /** @class */ (function (_super) {
        __extends(Conv2DTranspose, _super);
        function Conv2DTranspose(args) {
            var _this = _super.call(this, args) || this;
            _this.inputSpec = [new InputSpec({ ndim: 4 })];
            if (_this.padding !== 'same' && _this.padding !== 'valid') {
                throw new ValueError("Conv2DTranspose currently supports only padding modes 'same' " +
                    ("and 'valid', but received padding mode " + _this.padding));
            }
            return _this;
        }
        Conv2DTranspose.prototype.build = function (inputShape) {
            var _a;
            inputShape = getExactlyOneShape(inputShape);
            if (inputShape.length !== 4) {
                throw new ValueError('Input should have rank 4; Received input shape: ' +
                    JSON.stringify(inputShape));
            }
            var channelAxis = this.dataFormat === 'channelsFirst' ? 1 : inputShape.length - 1;
            if (inputShape[channelAxis] == null) {
                throw new ValueError('The channel dimension of the inputs should be defined. ' +
                    'Found `None`.');
            }
            var inputDim = inputShape[channelAxis];
            var kernelShape = this.kernelSize.concat([this.filters, inputDim]);
            this.kernel = this.addWeight('kernel', kernelShape, 'float32', this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
            if (this.useBias) {
                this.bias = this.addWeight('bias', [this.filters], 'float32', this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
            }
            // Set input spec.
            this.inputSpec =
                [new InputSpec({ ndim: 4, axes: (_a = {}, _a[channelAxis] = inputDim, _a) })];
            this.built = true;
        };
        Conv2DTranspose.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                var input = getExactlyOneTensor(inputs);
                if (input.shape.length !== 4) {
                    throw new ValueError("Conv2DTranspose.call() expects input tensor to be rank-4, but " +
                        ("received a tensor of rank-" + input.shape.length));
                }
                var inputShape = input.shape;
                var batchSize = inputShape[0];
                var hAxis;
                var wAxis;
                if (_this.dataFormat === 'channelsFirst') {
                    hAxis = 2;
                    wAxis = 3;
                }
                else {
                    hAxis = 1;
                    wAxis = 2;
                }
                var height = inputShape[hAxis];
                var width = inputShape[wAxis];
                var kernelH = _this.kernelSize[0];
                var kernelW = _this.kernelSize[1];
                var strideH = _this.strides[0];
                var strideW = _this.strides[1];
                // Infer the dynamic output shape.
                var outHeight = deconvLength(height, strideH, kernelH, _this.padding);
                var outWidth = deconvLength(width, strideW, kernelW, _this.padding);
                // Porting Note: We don't branch based on `this.dataFormat` here,
                // because
                //   the tjfs-core function `conv2dTranspose` called below always
                //   assumes channelsLast.
                var outputShape = [batchSize, outHeight, outWidth, _this.filters];
                if (_this.dataFormat !== 'channelsLast') {
                    input = tfc.transpose(input, [0, 2, 3, 1]);
                }
                var outputs = tfc.conv2dTranspose(input, _this.kernel.read(), outputShape, _this.strides, _this.padding);
                if (_this.dataFormat !== 'channelsLast') {
                    outputs = tfc.transpose(outputs, [0, 3, 1, 2]);
                }
                if (_this.bias != null) {
                    outputs =
                        biasAdd(outputs, _this.bias.read(), _this.dataFormat);
                }
                if (_this.activation != null) {
                    outputs = _this.activation.apply(outputs);
                }
                return outputs;
            });
        };
        Conv2DTranspose.prototype.computeOutputShape = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            var outputShape = inputShape.slice();
            var channelAxis;
            var heightAxis;
            var widthAxis;
            if (this.dataFormat === 'channelsFirst') {
                channelAxis = 1;
                heightAxis = 2;
                widthAxis = 3;
            }
            else {
                channelAxis = 3;
                heightAxis = 1;
                widthAxis = 2;
            }
            var kernelH = this.kernelSize[0];
            var kernelW = this.kernelSize[1];
            var strideH = this.strides[0];
            var strideW = this.strides[1];
            outputShape[channelAxis] = this.filters;
            outputShape[heightAxis] =
                deconvLength(outputShape[heightAxis], strideH, kernelH, this.padding);
            outputShape[widthAxis] =
                deconvLength(outputShape[widthAxis], strideW, kernelW, this.padding);
            return outputShape;
        };
        Conv2DTranspose.prototype.getConfig = function () {
            var config = _super.prototype.getConfig.call(this);
            delete config['dilationRate'];
            return config;
        };
        /** @nocollapse */
        Conv2DTranspose.className = 'Conv2DTranspose';
        return Conv2DTranspose;
    }(Conv2D));
    tfc.serialization.registerClass(Conv2DTranspose);
    var SeparableConv = /** @class */ (function (_super) {
        __extends(SeparableConv, _super);
        function SeparableConv(rank, config) {
            var _this = _super.call(this, rank, config) || this;
            _this.DEFAULT_DEPTHWISE_INITIALIZER = 'glorotUniform';
            _this.DEFAULT_POINTWISE_INITIALIZER = 'glorotUniform';
            _this.depthwiseKernel = null;
            _this.pointwiseKernel = null;
            if (config.filters == null) {
                throw new ValueError('The `filters` configuration field is required by SeparableConv, ' +
                    'but is unspecified.');
            }
            if (config.kernelInitializer != null || config.kernelRegularizer != null ||
                config.kernelConstraint != null) {
                throw new ValueError('Fields kernelInitializer, kernelRegularizer and kernelConstraint ' +
                    'are invalid for SeparableConv2D. Use depthwiseInitializer, ' +
                    'depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, ' +
                    'pointwiseRegularizer and pointwiseConstraint instead.');
            }
            if (config.padding != null && config.padding !== 'same' &&
                config.padding !== 'valid') {
                throw new ValueError("SeparableConv" + _this.rank + "D supports only padding modes: " +
                    ("'same' and 'valid', but received " + JSON.stringify(config.padding)));
            }
            _this.depthMultiplier =
                config.depthMultiplier == null ? 1 : config.depthMultiplier;
            _this.depthwiseInitializer = getInitializer(config.depthwiseInitializer || _this.DEFAULT_DEPTHWISE_INITIALIZER);
            _this.depthwiseRegularizer = getRegularizer(config.depthwiseRegularizer);
            _this.depthwiseConstraint = getConstraint(config.depthwiseConstraint);
            _this.pointwiseInitializer = getInitializer(config.depthwiseInitializer || _this.DEFAULT_POINTWISE_INITIALIZER);
            _this.pointwiseRegularizer = getRegularizer(config.pointwiseRegularizer);
            _this.pointwiseConstraint = getConstraint(config.pointwiseConstraint);
            return _this;
        }
        SeparableConv.prototype.build = function (inputShape) {
            var _a;
            inputShape = getExactlyOneShape(inputShape);
            if (inputShape.length < this.rank + 2) {
                throw new ValueError("Inputs to SeparableConv" + this.rank + "D should have rank " +
                    (this.rank + 2 + ", but received input shape: ") +
                    ("" + JSON.stringify(inputShape)));
            }
            var channelAxis = this.dataFormat === 'channelsFirst' ? 1 : inputShape.length - 1;
            if (inputShape[channelAxis] == null || inputShape[channelAxis] < 0) {
                throw new ValueError("The channel dimension of the inputs should be defined, " +
                    ("but found " + JSON.stringify(inputShape[channelAxis])));
            }
            var inputDim = inputShape[channelAxis];
            var depthwiseKernelShape = this.kernelSize.concat([inputDim, this.depthMultiplier]);
            var pointwiseKernelShape = [];
            for (var i = 0; i < this.rank; ++i) {
                pointwiseKernelShape.push(1);
            }
            pointwiseKernelShape.push(inputDim * this.depthMultiplier, this.filters);
            var trainable = true;
            this.depthwiseKernel = this.addWeight('depthwise_kernel', depthwiseKernelShape, 'float32', this.depthwiseInitializer, this.depthwiseRegularizer, trainable, this.depthwiseConstraint);
            this.pointwiseKernel = this.addWeight('pointwise_kernel', pointwiseKernelShape, 'float32', this.pointwiseInitializer, this.pointwiseRegularizer, trainable, this.pointwiseConstraint);
            if (this.useBias) {
                this.bias = this.addWeight('bias', [this.filters], 'float32', this.biasInitializer, this.biasRegularizer, trainable, this.biasConstraint);
            }
            else {
                this.bias = null;
            }
            this.inputSpec =
                [new InputSpec({ ndim: this.rank + 2, axes: (_a = {}, _a[channelAxis] = inputDim, _a) })];
            this.built = true;
        };
        SeparableConv.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                inputs = getExactlyOneTensor(inputs);
                var output;
                if (_this.rank === 1) {
                    throw new NotImplementedError('1D separable convolution is not implemented yet.');
                }
                else if (_this.rank === 2) {
                    if (_this.dataFormat === 'channelsFirst') {
                        inputs = tfc.transpose(inputs, [0, 2, 3, 1]); // NCHW -> NHWC.
                    }
                    output = tfc.separableConv2d(inputs, _this.depthwiseKernel.read(), _this.pointwiseKernel.read(), _this.strides, _this.padding, _this.dilationRate, 'NHWC');
                }
                if (_this.useBias) {
                    output = biasAdd(output, _this.bias.read(), _this.dataFormat);
                }
                if (_this.activation != null) {
                    output = _this.activation.apply(output);
                }
                if (_this.dataFormat === 'channelsFirst') {
                    output = tfc.transpose(output, [0, 3, 1, 2]); // NHWC -> NCHW.
                }
                return output;
            });
        };
        SeparableConv.prototype.getConfig = function () {
            var config = _super.prototype.getConfig.call(this);
            delete config['rank'];
            delete config['kernelInitializer'];
            delete config['kernelRegularizer'];
            delete config['kernelConstraint'];
            config['depthwiseInitializer'] =
                serializeInitializer(this.depthwiseInitializer);
            config['pointwiseInitializer'] =
                serializeInitializer(this.pointwiseInitializer);
            config['depthwiseRegularizer'] =
                serializeRegularizer(this.depthwiseRegularizer);
            config['pointwiseRegularizer'] =
                serializeRegularizer(this.pointwiseRegularizer);
            config['depthwiseConstraint'] =
                serializeConstraint(this.depthwiseConstraint);
            config['pointwiseConstraint'] =
                serializeConstraint(this.pointwiseConstraint);
            return config;
        };
        /** @nocollapse */
        SeparableConv.className = 'SeparableConv';
        return SeparableConv;
    }(Conv));
    var SeparableConv2D = /** @class */ (function (_super) {
        __extends(SeparableConv2D, _super);
        function SeparableConv2D(args) {
            return _super.call(this, 2, args) || this;
        }
        /** @nocollapse */
        SeparableConv2D.className = 'SeparableConv2D';
        return SeparableConv2D;
    }(SeparableConv));
    tfc.serialization.registerClass(SeparableConv2D);
    var Conv1D = /** @class */ (function (_super) {
        __extends(Conv1D, _super);
        function Conv1D(args) {
            var _this = _super.call(this, 1, args) || this;
            Conv1D.verifyArgs(args);
            _this.inputSpec = [{ ndim: 3 }];
            return _this;
        }
        Conv1D.prototype.getConfig = function () {
            var config = _super.prototype.getConfig.call(this);
            delete config['rank'];
            delete config['dataFormat'];
            return config;
        };
        Conv1D.verifyArgs = function (args) {
            // config.kernelSize must be a number or array of numbers.
            if (typeof args.kernelSize !== 'number' &&
                !checkArrayTypeAndLength(args.kernelSize, 'number', 1, 1))
                throw new ValueError("Conv1D expects config.kernelSize to be number or number[] with " +
                    ("length 1, but received " + JSON.stringify(args.kernelSize) + "."));
        };
        /** @nocollapse */
        Conv1D.className = 'Conv1D';
        return Conv1D;
    }(Conv));
    tfc.serialization.registerClass(Conv1D);
    var Cropping2D = /** @class */ (function (_super) {
        __extends(Cropping2D, _super);
        function Cropping2D(args) {
            var _this = _super.call(this, args) || this;
            if (typeof args.cropping === 'number')
                _this.cropping =
                    [[args.cropping, args.cropping], [args.cropping, args.cropping]];
            else if (typeof args.cropping[0] === 'number')
                _this.cropping = [
                    [args.cropping[0], args.cropping[0]],
                    [args.cropping[1], args.cropping[1]]
                ];
            else
                _this.cropping = args.cropping;
            _this.dataFormat =
                args.dataFormat === undefined ? 'channelsLast' : args.dataFormat;
            _this.inputSpec = [{ ndim: 4 }];
            return _this;
        }
        Cropping2D.prototype.computeOutputShape = function (inputShape) {
            if (this.dataFormat === 'channelsFirst')
                return [
                    inputShape[0], inputShape[1],
                    inputShape[2] - this.cropping[0][0] - this.cropping[0][1],
                    inputShape[3] - this.cropping[1][0] - this.cropping[1][1]
                ];
            else
                return [
                    inputShape[0],
                    inputShape[1] - this.cropping[0][0] - this.cropping[0][1],
                    inputShape[2] - this.cropping[1][0] - this.cropping[1][1], inputShape[3]
                ];
        };
        Cropping2D.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                inputs = getExactlyOneTensor(inputs);
                if (_this.dataFormat === 'channelsLast') {
                    var hSliced = sliceAlongAxis(inputs, _this.cropping[0][0], inputs.shape[1] - _this.cropping[0][0] - _this.cropping[0][1], 2);
                    return sliceAlongAxis(hSliced, _this.cropping[1][0], inputs.shape[2] - _this.cropping[1][1] - _this.cropping[1][0], 3);
                }
                else {
                    var hSliced = sliceAlongAxis(inputs, _this.cropping[0][0], inputs.shape[2] - _this.cropping[0][0] - _this.cropping[0][1], 3);
                    return sliceAlongAxis(hSliced, _this.cropping[1][0], inputs.shape[3] - _this.cropping[1][1] - _this.cropping[1][0], 4);
                }
            });
        };
        Cropping2D.prototype.getConfig = function () {
            var config = { cropping: this.cropping, dataFormat: this.dataFormat };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        Cropping2D.className = 'Cropping2D';
        return Cropping2D;
    }(Layer));
    tfc.serialization.registerClass(Cropping2D);
    var UpSampling2D = /** @class */ (function (_super) {
        __extends(UpSampling2D, _super);
        function UpSampling2D(args) {
            var _this = _super.call(this, args) || this;
            _this.DEFAULT_SIZE = [2, 2];
            _this.inputSpec = [{ ndim: 4 }];
            _this.size = args.size == null ? _this.DEFAULT_SIZE : args.size;
            _this.dataFormat =
                args.dataFormat == null ? 'channelsLast' : args.dataFormat;
            return _this;
        }
        UpSampling2D.prototype.computeOutputShape = function (inputShape) {
            if (this.dataFormat === 'channelsFirst') {
                var height = inputShape[2] == null ? null : this.size[0] * inputShape[2];
                var width = inputShape[3] == null ? null : this.size[1] * inputShape[3];
                return [inputShape[0], inputShape[1], height, width];
            }
            else {
                var height = inputShape[1] == null ? null : this.size[0] * inputShape[1];
                var width = inputShape[2] == null ? null : this.size[1] * inputShape[2];
                return [inputShape[0], height, width, inputShape[3]];
            }
        };
        UpSampling2D.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                var input = getExactlyOneTensor(inputs);
                var inputShape = input.shape;
                if (_this.dataFormat === 'channelsFirst') {
                    input = tfc.transpose(input, [0, 2, 3, 1]);
                    var height = _this.size[0] * inputShape[2];
                    var width = _this.size[1] * inputShape[3];
                    var resized = input.resizeNearestNeighbor([height, width]);
                    return tfc.transpose(resized, [0, 3, 1, 2]);
                }
                else {
                    var height = _this.size[0] * inputShape[1];
                    var width = _this.size[1] * inputShape[2];
                    return input.resizeNearestNeighbor([height, width]);
                }
            });
        };
        UpSampling2D.prototype.getConfig = function () {
            var config = { size: this.size, dataFormat: this.dataFormat };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        UpSampling2D.className = 'UpSampling2D';
        return UpSampling2D;
    }(Layer));
    tfc.serialization.registerClass(UpSampling2D);

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * 2D convolution with separable filters.
     * @param x Input tensor.
     * @param depthwiseKernel Convolution kernel for depthwise convolution.
     * @param strides Strides (Array of two integers).
     * @param padding Padding model.
     * @param dataFormat Data format.
     * @param dilationRate Array of two integers, dilation rates for the separable
     *   convolution.
     * @returns Output tensor.
     * @throws ValueError If depthwiseKernel is not a 4D array.
     */
    function depthwiseConv2d(x, depthwiseKernel, strides, padding, dataFormat, dilationRate) {
        if (strides === void 0) { strides = [1, 1]; }
        if (padding === void 0) { padding = 'valid'; }
        return tfc.tidy(function () {
            if (dataFormat == null) {
                dataFormat = imageDataFormat();
            }
            checkDataFormat(dataFormat);
            var y = preprocessConv2DInput(x, dataFormat);
            if (x.rank !== 4) {
                throw new ValueError("Input for depthwiseConv2d is required to be 4-D, but is instead " +
                    (x.rank + "-D"));
            }
            if (depthwiseKernel.rank !== 4) {
                throw new ValueError("depthwiseKernel is required to be 4-D, but is instead " +
                    (depthwiseKernel.rank + "-D"));
            }
            y = tfc.depthwiseConv2d(y, depthwiseKernel, strides, padding === 'same' ? 'same' : 'valid', 'NHWC', dilationRate);
            if (dataFormat === 'channelsFirst') {
                y = tfc.transpose(y, [0, 3, 1, 2]);
            }
            return y;
        });
    }
    var DepthwiseConv2D = /** @class */ (function (_super) {
        __extends(DepthwiseConv2D, _super);
        function DepthwiseConv2D(args) {
            var _this = _super.call(this, 2, args) || this;
            _this.depthwiseKernel = null;
            _this.depthMultiplier =
                args.depthMultiplier == null ? 1 : args.depthMultiplier;
            _this.depthwiseInitializer = getInitializer(args.depthwiseInitializer || _this.DEFAULT_KERNEL_INITIALIZER);
            _this.depthwiseConstraint = getConstraint(args.depthwiseConstraint);
            _this.depthwiseRegularizer = getRegularizer(args.depthwiseRegularizer);
            return _this;
        }
        DepthwiseConv2D.prototype.build = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            if (inputShape.length < 4) {
                throw new ValueError("Inputs to DepthwiseConv2D should have rank 4. " +
                    ("Received input shape: " + JSON.stringify(inputShape) + "."));
            }
            var channelAxis = this.dataFormat === 'channelsFirst' ? 1 : 3;
            if (inputShape[channelAxis] == null || inputShape[channelAxis] < 0) {
                throw new ValueError('The channel dimension of the inputs to DepthwiseConv2D should ' +
                    ("be defined, but is not (" + inputShape[channelAxis] + ")."));
            }
            var inputDim = inputShape[channelAxis];
            var depthwiseKernelShape = [
                this.kernelSize[0], this.kernelSize[1], inputDim, this.depthMultiplier
            ];
            this.depthwiseKernel = this.addWeight('depthwise_kernel', depthwiseKernelShape, null, this.depthwiseInitializer, this.depthwiseRegularizer, true, this.depthwiseConstraint);
            if (this.useBias) {
                this.bias = this.addWeight('bias', [inputDim * this.depthMultiplier], null, this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
            }
            else {
                this.bias = null;
            }
            this.built = true;
        };
        DepthwiseConv2D.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                inputs = getExactlyOneTensor(inputs);
                var outputs = depthwiseConv2d(inputs, _this.depthwiseKernel.read(), _this.strides, _this.padding, _this.dataFormat, null);
                // TODO(cais): Add support for dilation.
                if (_this.useBias) {
                    outputs = biasAdd(outputs, _this.bias.read(), _this.dataFormat);
                }
                if (_this.activation != null) {
                    outputs = _this.activation.apply(outputs);
                }
                return outputs;
            });
        };
        DepthwiseConv2D.prototype.computeOutputShape = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            var rows = this.dataFormat === 'channelsFirst' ? inputShape[2] : inputShape[1];
            var cols = this.dataFormat === 'channelsFirst' ? inputShape[3] : inputShape[2];
            var outFilters = this.dataFormat === 'channelsFirst' ?
                inputShape[1] * this.depthMultiplier :
                inputShape[3] * this.depthMultiplier;
            var outRows = convOutputLength(rows, this.kernelSize[0], this.padding, this.strides[0]);
            var outCols = convOutputLength(cols, this.kernelSize[1], this.padding, this.strides[1]);
            if (this.dataFormat === 'channelsFirst') {
                return [inputShape[0], outFilters, outRows, outCols];
            }
            else {
                // In this case, assume 'channelsLast'.
                return [inputShape[0], outRows, outCols, outFilters];
            }
        };
        DepthwiseConv2D.prototype.getConfig = function () {
            var config = _super.prototype.getConfig.call(this);
            config['depthMultiplier'] = this.depthMultiplier;
            config['depthwiseInitializer'] =
                serializeInitializer(this.depthwiseInitializer);
            config['depthwiseRegularizer'] =
                serializeRegularizer(this.depthwiseRegularizer);
            config['depthwiseConstraint'] =
                serializeConstraint(this.depthwiseRegularizer);
            return config;
        };
        /** @nocollapse */
        DepthwiseConv2D.className = 'DepthwiseConv2D';
        return DepthwiseConv2D;
    }(BaseConv));
    tfc.serialization.registerClass(DepthwiseConv2D);

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    function mapActivationToFusedKernel$1(activationName) {
        if (activationName === 'relu') {
            return 'relu';
        }
        if (activationName === 'linear') {
            return 'linear';
        }
        return null;
    }
    var Dropout = /** @class */ (function (_super) {
        __extends(Dropout, _super);
        function Dropout(args) {
            var _this = _super.call(this, args) || this;
            _this.rate = Math.max(Math.min(args.rate, 1), 0);
            // So that the scalar doesn't get tidied up between executions.
            _this.noiseShape = args.noiseShape;
            _this.seed = args.seed;
            _this.supportsMasking = true;
            return _this;
        }
        Dropout.prototype.getNoiseShape = function (input) {
            if (this.noiseShape == null) {
                return this.noiseShape;
            }
            var inputShape = input.shape;
            var noiseShape = [];
            for (var i = 0; i < this.noiseShape.length; ++i) {
                noiseShape.push(this.noiseShape[i] == null ? inputShape[i] : this.noiseShape[i]);
            }
            return noiseShape;
        };
        Dropout.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                _this.invokeCallHook(inputs, kwargs);
                var input = getExactlyOneTensor(inputs);
                if (0 < _this.rate && _this.rate < 1) {
                    var training = kwargs['training'] == null ? false : kwargs['training'];
                    var noiseShape_1 = _this.getNoiseShape(input);
                    var output = inTrainPhase(function () { return dropout(input, _this.rate, noiseShape_1, _this.seed); }, function () { return input; }, training);
                    return output;
                }
                return inputs;
            });
        };
        Dropout.prototype.getConfig = function () {
            var config = {
                rate: this.rate,
                noiseShape: this.noiseShape,
                seed: this.seed,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        Dropout.prototype.dispose = function () {
            return _super.prototype.dispose.call(this);
        };
        /** @nocollapse */
        Dropout.className = 'Dropout';
        return Dropout;
    }(Layer));
    tfc.serialization.registerClass(Dropout);
    var Dense = /** @class */ (function (_super) {
        __extends(Dense, _super);
        function Dense(args) {
            var _this = _super.call(this, args) || this;
            // Default activation: Linear (none).
            _this.activation = null;
            _this.useBias = true;
            _this.kernel = null;
            _this.bias = null;
            _this.DEFAULT_KERNEL_INITIALIZER = 'glorotNormal';
            _this.DEFAULT_BIAS_INITIALIZER = 'zeros';
            if (args.batchInputShape == null && args.inputShape == null &&
                args.inputDim != null) {
                // This logic is copied from Layer's constructor, since we can't
                // do exactly what the Python constructor does for Dense().
                var batchSize = null;
                if (args.batchSize != null) {
                    batchSize = args.batchSize;
                }
                _this.batchInputShape = [batchSize, args.inputDim];
            }
            _this.units = args.units;
            assertPositiveInteger(_this.units, 'units');
            _this.activation = getActivation(args.activation);
            if (args.useBias != null) {
                _this.useBias = args.useBias;
            }
            _this.kernelInitializer = getInitializer(args.kernelInitializer || _this.DEFAULT_KERNEL_INITIALIZER);
            _this.biasInitializer =
                getInitializer(args.biasInitializer || _this.DEFAULT_BIAS_INITIALIZER);
            _this.kernelConstraint = getConstraint(args.kernelConstraint);
            _this.biasConstraint = getConstraint(args.biasConstraint);
            _this.kernelRegularizer = getRegularizer(args.kernelRegularizer);
            _this.biasRegularizer = getRegularizer(args.biasRegularizer);
            _this.activityRegularizer = getRegularizer(args.activityRegularizer);
            _this.supportsMasking = true;
            _this.inputSpec = [{ minNDim: 2 }];
            return _this;
        }
        Dense.prototype.build = function (inputShape) {
            var _a;
            inputShape = getExactlyOneShape(inputShape);
            var inputLastDim = inputShape[inputShape.length - 1];
            if (this.kernel == null) {
                this.kernel = this.addWeight('kernel', [inputLastDim, this.units], null, this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
                if (this.useBias) {
                    this.bias = this.addWeight('bias', [this.units], null, this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
                }
            }
            this.inputSpec = [{ minNDim: 2, axes: (_a = {}, _a[-1] = inputLastDim, _a) }];
            this.built = true;
        };
        Dense.prototype.computeOutputShape = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            var outputShape = inputShape.slice();
            outputShape[outputShape.length - 1] = this.units;
            return outputShape;
        };
        Dense.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                _this.invokeCallHook(inputs, kwargs);
                // Dense layer accepts only a single input.
                var input = getExactlyOneTensor(inputs);
                var fusedActivationName = mapActivationToFusedKernel$1(_this.activation.getClassName());
                var output;
                if (fusedActivationName != null) {
                    output = dot(input, _this.kernel.read(), fusedActivationName, _this.bias ? _this.bias.read() : null);
                }
                else {
                    output = dot(input, _this.kernel.read());
                    if (_this.bias != null) {
                        output = biasAdd(output, _this.bias.read());
                    }
                    if (_this.activation != null) {
                        output = _this.activation.apply(output);
                    }
                }
                return output;
            });
        };
        Dense.prototype.getConfig = function () {
            var config = {
                units: this.units,
                activation: serializeActivation(this.activation),
                useBias: this.useBias,
                kernelInitializer: serializeInitializer(this.kernelInitializer),
                biasInitializer: serializeInitializer(this.biasInitializer),
                kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
                biasRegularizer: serializeRegularizer(this.biasRegularizer),
                activityRegularizer: serializeRegularizer(this.activityRegularizer),
                kernelConstraint: serializeConstraint(this.kernelConstraint),
                biasConstraint: serializeConstraint(this.biasConstraint)
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        Dense.className = 'Dense';
        return Dense;
    }(Layer));
    tfc.serialization.registerClass(Dense);
    var Flatten = /** @class */ (function (_super) {
        __extends(Flatten, _super);
        function Flatten(args) {
            var _this = _super.call(this, args || {}) || this;
            _this.inputSpec = [{ minNDim: 3 }];
            return _this;
        }
        Flatten.prototype.computeOutputShape = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            for (var _i = 0, _a = inputShape.slice(1); _i < _a.length; _i++) {
                var dim = _a[_i];
                if (dim == null) {
                    throw new ValueError("The shape of the input to \"Flatten\" is not fully defined " +
                        ("(got " + inputShape.slice(1) + "). Make sure to pass a complete ") +
                        "\"input_shape\" or \"batch_input_shape\" argument to the first " +
                        "layer in your model.");
                }
            }
            return [inputShape[0], arrayProd(inputShape, 1)];
        };
        Flatten.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                _this.invokeCallHook(inputs, kwargs);
                return batchFlatten(getExactlyOneTensor(inputs));
            });
        };
        /** @nocollapse */
        Flatten.className = 'Flatten';
        return Flatten;
    }(Layer));
    tfc.serialization.registerClass(Flatten);
    var Activation$1 = /** @class */ (function (_super) {
        __extends(Activation$$1, _super);
        function Activation$$1(args) {
            var _this = _super.call(this, args) || this;
            _this.supportsMasking = true;
            _this.activation = getActivation(args.activation);
            return _this;
        }
        Activation$$1.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                _this.invokeCallHook(inputs, kwargs);
                var input = getExactlyOneTensor(inputs);
                return _this.activation.apply(input);
            });
        };
        Activation$$1.prototype.getConfig = function () {
            var config = { activation: serializeActivation(this.activation) };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        Activation$$1.className = 'Activation';
        return Activation$$1;
    }(Layer));
    tfc.serialization.registerClass(Activation$1);
    var RepeatVector = /** @class */ (function (_super) {
        __extends(RepeatVector, _super);
        function RepeatVector(args) {
            var _this = _super.call(this, args) || this;
            _this.n = args.n;
            _this.inputSpec = [{ ndim: 2 }];
            return _this;
        }
        RepeatVector.prototype.computeOutputShape = function (inputShape) {
            return [inputShape[0], this.n, inputShape[1]];
        };
        RepeatVector.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                inputs = getExactlyOneTensor(inputs);
                return repeat(inputs, _this.n);
            });
        };
        RepeatVector.prototype.getConfig = function () {
            var config = {
                n: this.n,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        RepeatVector.className = 'RepeatVector';
        return RepeatVector;
    }(Layer));
    tfc.serialization.registerClass(RepeatVector);
    var Reshape = /** @class */ (function (_super) {
        __extends(Reshape, _super);
        function Reshape(args) {
            var _this = _super.call(this, args) || this;
            _this.targetShape = args.targetShape;
            // Make sure that all unknown dimensions are represented as `null`.
            for (var i = 0; i < _this.targetShape.length; ++i) {
                if (_this.isUnknown(_this.targetShape[i])) {
                    _this.targetShape[i] = null;
                }
            }
            return _this;
        }
        Reshape.prototype.isUnknown = function (dim) {
            return dim < 0 || dim == null;
        };
        /**
         * Finds and replaces a missing dimension in output shape.
         *
         * This is a near direct port of the internal Numpy function
         * `_fix_unknown_dimension` in `numpy/core/src/multiarray/shape.c`.
         *
         * @param inputShape: Original shape of array begin reshape.
         * @param outputShape: Target shape of the array, with at most a single
         * `null` or negative number, which indicates an underdetermined dimension
         * that should be derived from `inputShape` and the known dimensions of
         *   `outputShape`.
         * @returns: The output shape with `null` replaced with its computed value.
         * @throws: ValueError: If `inputShape` and `outputShape` do not match.
         */
        Reshape.prototype.fixUnknownDimension = function (inputShape, outputShape) {
            var errorMsg = 'Total size of new array must be unchanged.';
            var finalShape = outputShape.slice();
            var known = 1;
            var unknown = null;
            for (var i = 0; i < finalShape.length; ++i) {
                var dim = finalShape[i];
                if (this.isUnknown(dim)) {
                    if (unknown === null) {
                        unknown = i;
                    }
                    else {
                        throw new ValueError('Can only specifiy one unknown dimension.');
                    }
                }
                else {
                    known *= dim;
                }
            }
            var originalSize = arrayProd(inputShape);
            if (unknown !== null) {
                if (known === 0 || originalSize % known !== 0) {
                    throw new ValueError(errorMsg);
                }
                finalShape[unknown] = originalSize / known;
            }
            else if (originalSize !== known) {
                throw new ValueError(errorMsg);
            }
            return finalShape;
        };
        Reshape.prototype.computeOutputShape = function (inputShape) {
            var anyUnknownDims = false;
            for (var i = 0; i < inputShape.length; ++i) {
                if (this.isUnknown(inputShape[i])) {
                    anyUnknownDims = true;
                    break;
                }
            }
            if (anyUnknownDims) {
                return inputShape.slice(0, 1).concat(this.targetShape);
            }
            else {
                return inputShape.slice(0, 1).concat(this.fixUnknownDimension(inputShape.slice(1), this.targetShape));
            }
        };
        Reshape.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                _this.invokeCallHook(inputs, kwargs);
                var input = getExactlyOneTensor(inputs);
                var inputShape = input.shape;
                var outputShape = inputShape.slice(0, 1).concat(_this.fixUnknownDimension(inputShape.slice(1), _this.targetShape));
                return input.reshape(outputShape);
            });
        };
        Reshape.prototype.getConfig = function () {
            var config = {
                targetShape: this.targetShape,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        Reshape.className = 'Reshape';
        return Reshape;
    }(Layer));
    tfc.serialization.registerClass(Reshape);
    var Permute = /** @class */ (function (_super) {
        __extends(Permute, _super);
        function Permute(args) {
            var _this = _super.call(this, args) || this;
            if (args.dims == null) {
                throw new Error('Required configuration field `dims` is missing during Permute ' +
                    'constructor call.');
            }
            if (!Array.isArray(args.dims)) {
                throw new Error('Permute constructor requires `dims` to be an Array, but received ' +
                    (args.dims + " instead."));
            }
            // Check the validity of the permutation indices.
            var expectedSortedIndices = range(1, args.dims.length + 1);
            if (!tfc.util.arraysEqual(args.dims.slice().sort(), expectedSortedIndices)) {
                throw new Error('Invalid permutation `dims`: ' + JSON.stringify(args.dims) +
                    ' `dims` must contain consecutive integers starting from 1.');
            }
            _this.dims = args.dims;
            _this.dimsIncludingBatch = [0].concat(_this.dims);
            _this.inputSpec = [new InputSpec({ ndim: _this.dims.length + 1 })];
            return _this;
        }
        Permute.prototype.computeOutputShape = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            var outputShape = inputShape.slice();
            this.dims.forEach(function (dim, i) {
                outputShape[i + 1] = inputShape[dim];
            });
            return outputShape;
        };
        Permute.prototype.call = function (inputs, kwargs) {
            return tfc.transpose(getExactlyOneTensor(inputs), this.dimsIncludingBatch);
        };
        Permute.prototype.getConfig = function () {
            var config = {
                dims: this.dims,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        Permute.className = 'Permute';
        return Permute;
    }(Layer));
    tfc.serialization.registerClass(Permute);
    var Masking = /** @class */ (function (_super) {
        __extends(Masking, _super);
        function Masking(args) {
            var _this = _super.call(this, args == null ? {} : args) || this;
            _this.supportsMasking = true;
            if (args != null) {
                _this.maskValue = args.maskValue == null ? 0 : args.maskValue;
            }
            else {
                _this.maskValue = 0;
            }
            return _this;
        }
        Masking.prototype.computeOutputShape = function (inputShape) {
            return inputShape;
        };
        Masking.prototype.getConfig = function () {
            var baseConfig = _super.prototype.getConfig.call(this);
            var config = { maskValue: this.maskValue };
            Object.assign(config, baseConfig);
            return config;
        };
        Masking.prototype.computeMask = function (inputs, mask) {
            var input = getExactlyOneTensor(inputs);
            var axis = -1;
            return tfc.any(tfc.notEqual(input, this.maskValue), axis);
        };
        Masking.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                _this.invokeCallHook(inputs, kwargs);
                var input = getExactlyOneTensor(inputs);
                var axis = -1;
                var keepDims = true;
                var booleanMask = tfc.any(tfc.notEqual(input, _this.maskValue), axis, keepDims);
                var output = input.mul(booleanMask.asType(input.dtype));
                return output;
            });
        };
        /** @nocollapse */
        Masking.className = 'Masking';
        return Masking;
    }(Layer));
    tfc.serialization.registerClass(Masking);

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    var Embedding = /** @class */ (function (_super) {
        __extends(Embedding, _super);
        function Embedding(args) {
            var _this = _super.call(this, args) || this;
            _this.embeddings = null;
            _this.DEFAULT_EMBEDDINGS_INITIALIZER = 'randomUniform';
            if (args.batchInputShape == null && args.inputShape == null) {
                // Porting Note: This logic is copied from Layer's constructor, since we
                // can't do exactly what the Python constructor does for Embedding().
                // Specifically, the super constructor can not be called after the
                // mutation of the `config` argument.
                var batchSize = null;
                if (args.batchSize != null) {
                    batchSize = args.batchSize;
                }
                if (args.inputLength == null) {
                    // Fix super-constructor to what it would have done if
                    // 'config.inputShape' were (None, )
                    _this.batchInputShape = [batchSize, null];
                }
                else {
                    // Fix super-constructor to what it would have done if
                    // 'config.inputShape' were (config.inputLength, )
                    _this.batchInputShape =
                        [batchSize].concat(toList(args.inputLength));
                }
            }
            _this.inputDim = args.inputDim;
            assertPositiveInteger(_this.inputDim, 'inputDim');
            _this.outputDim = args.outputDim;
            assertPositiveInteger(_this.outputDim, 'outputDim');
            _this.embeddingsInitializer = getInitializer(args.embeddingsInitializer || _this.DEFAULT_EMBEDDINGS_INITIALIZER);
            _this.embeddingsRegularizer = getRegularizer(args.embeddingsRegularizer);
            _this.activityRegularizer = getRegularizer(args.activityRegularizer);
            _this.embeddingsConstraint = getConstraint(args.embeddingsConstraint);
            _this.maskZero = args.maskZero;
            _this.supportsMasking = args.maskZero;
            _this.inputLength = args.inputLength;
            return _this;
        }
        Embedding.prototype.build = function (inputShape) {
            this.embeddings = this.addWeight('embeddings', [this.inputDim, this.outputDim], this.dtype, this.embeddingsInitializer, this.embeddingsRegularizer, true, this.embeddingsConstraint);
            this.built = true;
        };
        // Override warnOnIncompatibleInputShape because an embedding layer allows
        // the input to have varying ranks.
        Embedding.prototype.warnOnIncompatibleInputShape = function (inputShape) { };
        Embedding.prototype.computeMask = function (inputs, mask) {
            var _this = this;
            return tfc.tidy(function () {
                if (!_this.maskZero) {
                    return null;
                }
                else {
                    inputs = getExactlyOneTensor(inputs);
                    return tfc.notEqual(inputs, tfc.zerosLike(inputs));
                }
            });
        };
        Embedding.prototype.computeOutputShape = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            if (this.inputLength == null) {
                return inputShape.concat([this.outputDim]);
            }
            // inputLength can be an array if input is 3D or higher.
            var inLens = toList(this.inputLength);
            if (inLens.length !== inputShape.length - 1) {
                throw new ValueError("\"inputLength\" is " + this.inputLength + ", but received " +
                    ("input shape has shape " + inputShape));
            }
            else {
                var i = 0;
                for (var k = 0; k < inLens.length; ++k) {
                    var s1 = inLens[k];
                    var s2 = inputShape[k + 1];
                    if ((s1 != null) && (s2 != null) && (s1 !== s2)) {
                        throw new ValueError("\"inputLength\" is " + this.inputLength + ", but received " +
                            ("input shape has shape " + inputShape));
                    }
                    else if (s1 == null) {
                        inLens[i] = s2;
                    }
                    i++;
                }
            }
            return [inputShape[0]].concat(inLens, [this.outputDim]);
        };
        Embedding.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                _this.invokeCallHook(inputs, kwargs);
                // Embedding layer accepts only a single input.
                var input = getExactlyOneTensor(inputs);
                if (input.dtype !== 'int32') {
                    input = cast(input, 'int32');
                }
                var output = gather(_this.embeddings.read(), input.as1D());
                return output.reshape(getExactlyOneShape(_this.computeOutputShape(input.shape)));
            });
        };
        Embedding.prototype.getConfig = function () {
            var config = {
                inputDim: this.inputDim,
                outputDim: this.outputDim,
                embeddingsInitializer: serializeInitializer(this.embeddingsInitializer),
                embeddingsRegularizer: serializeRegularizer(this.embeddingsRegularizer),
                activityRegularizer: serializeRegularizer(this.activityRegularizer),
                embeddingsConstraint: serializeConstraint(this.embeddingsConstraint),
                maskZero: this.maskZero,
                inputLength: this.inputLength
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        Embedding.className = 'Embedding';
        return Embedding;
    }(Layer));
    tfc.serialization.registerClass(Embedding);

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Generic Merge layer for element-wise merge functions.
     *
     * Used to implement `Sum`, `Average`, `Concatenate`, etc.
     */
    var Merge = /** @class */ (function (_super) {
        __extends(Merge, _super);
        function Merge(args) {
            var _this = _super.call(this, args || {}) || this;
            _this.supportsMasking = true;
            return _this;
        }
        /**
         * Logic for merging multiple tensors, to be overridden by subclasses.
         * @param inputs
         */
        Merge.prototype.mergeFunction = function (inputs) {
            throw new NotImplementedError();
        };
        /**
         * Computes the shape of the result of an elementwise operation.
         *
         * @param shape1: Shape of the first tensor.
         * @param shape2: Shape of the second tensor.
         * @returns Expected output shape when an elementwise operation is carried
         *   out on 2 tensors with shapes `shape1` and `shape2`.
         * @throws ValueError: If `shape1` and `shape2` are not compatible for
         *   element-wise operations.
         */
        Merge.prototype.computeElementwiseOpOutputShape = function (shape1, shape2) {
            if (shape1 == null || shape2 == null) {
                return null;
            }
            else if (shape1.length < shape2.length) {
                return this.computeElementwiseOpOutputShape(shape2, shape1);
            }
            else if (shape2.length === 0) {
                return shape1;
            }
            var outputShape = shape1.slice(0, shape1.length - shape2.length);
            for (var k = 0; k < shape2.length; ++k) {
                var i = shape1[shape1.length - shape2.length + k];
                var j = shape2[k];
                if (i == null || j == null || i < 0 || j < 0) {
                    outputShape.push(null);
                }
                else if (i === 1) {
                    outputShape.push(j);
                }
                else if (j === 1) {
                    outputShape.push(i);
                }
                else {
                    if (i !== j) {
                        throw new ValueError('Operands could not be broadcast together with shapes ' +
                            JSON.stringify(shape1) + ' ' + JSON.stringify(shape2));
                    }
                    outputShape.push(i);
                }
            }
            return outputShape;
        };
        Merge.prototype.build = function (inputShape) {
            // Used purely for shape validation.
            if (Array.isArray(inputShape) && !Array.isArray(inputShape[0])) {
                // Make sure that inputShape is an Array of shape.
                inputShape = [getExactlyOneShape(inputShape)];
            }
            inputShape = inputShape;
            if (inputShape.length < 2) {
                throw new ValueError('A merge layer should be called on an Array of at least 2 inputs.' +
                    (" Got " + inputShape.length + " input(s)."));
            }
            // Make sure that there is at most one unique batch size among the input
            // shapes.
            var batchSizes = [];
            for (var _i = 0, inputShape_1 = inputShape; _i < inputShape_1.length; _i++) {
                var shape = inputShape_1[_i];
                if (shape != null && shape[0] !== null) {
                    batchSizes.push(shape[0]);
                }
            }
            batchSizes = unique(batchSizes);
            if (batchSizes.length > 1) {
                throw new ValueError("Can not merge tensors with different batch sizes. " +
                    ("Got tensors with shapes: " + JSON.stringify(inputShape) + "."));
            }
            var outputShape = inputShape[0] == null ? null : inputShape[0].slice(1);
            for (var i = 1; i < inputShape.length; ++i) {
                var shape = inputShape[i] == null ? null : inputShape[i].slice(1);
                outputShape = this.computeElementwiseOpOutputShape(outputShape, shape);
            }
            // If the inputs have different ranks, we have to reshape them to make them
            // broadcastable.
            var allRanks = inputShape.map(function (shape) { return shape.length; });
            if (inputShape.indexOf(null) === -1 &&
                unique(allRanks).length === 1) {
                this.reshapeRequired = false;
            }
            else {
                this.reshapeRequired = true;
            }
        };
        Merge.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                inputs = inputs;
                if (_this.reshapeRequired) {
                    var reshapedInputs = [];
                    var inputDims = inputs.map(function (input) { return input.rank; });
                    if (inputDims.indexOf(null) === -1) {
                        // If ranks of all inputs are available, we simply expand each of them
                        // at axis=1 until all of them have the same rank.
                        var maxNDim = max(inputDims);
                        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
                            var x = inputs_1[_i];
                            var xNDim = x.rank;
                            for (var k = 0; k < maxNDim - xNDim; ++k) {
                                x = expandDims(x, 1);
                            }
                            reshapedInputs.push(x);
                        }
                        return _this.mergeFunction(reshapedInputs);
                    }
                    else {
                        // Transpose all inputs so that batch size is the last dimension.
                        // [batchSize, dim1, dim2, ...] -> [dim1, dim2, ..., batchSize]
                        var transposed = false;
                        for (var _a = 0, inputs_2 = inputs; _a < inputs_2.length; _a++) {
                            var x = inputs_2[_a];
                            var xNDim = x.rank;
                            if (xNDim == null) {
                                var xShape = x.shape;
                                var batchSize = xShape[0];
                                var newShape = xShape.slice(1).concat([batchSize]);
                                var xTransposed = x.reshape([batchSize].concat(arrayProd(xShape.slice(1))));
                                xTransposed = tfc.transpose(xTransposed, [1, 0]);
                                xTransposed = xTransposed.reshape(newShape);
                                reshapedInputs.push(xTransposed);
                                transposed = true;
                            }
                            else if (xNDim > 1) {
                                var dims = range(1, xNDim).concat([0]);
                                reshapedInputs.push(tfc.transpose(x, dims));
                                transposed = true;
                            }
                            else {
                                // We don't transpose inputs if they are 1D vectors or scalars.
                                reshapedInputs.push(x);
                            }
                        }
                        var y = _this.mergeFunction(reshapedInputs);
                        var yNDim = y.rank;
                        if (transposed) {
                            // If inputs have been transposed, we have to transpose the output
                            // too.
                            if (yNDim == null) {
                                var yShape = y.shape;
                                var yNDim_1 = yShape.length;
                                var batchSize = yShape[yNDim_1 - 1];
                                var newShape = [batchSize].concat(yShape.slice(0, yShape.length - 1));
                                y = tfc.transpose(y.reshape([-1, batchSize]), [1, 0])
                                    .reshape(newShape);
                            }
                            else if (yNDim > 1) {
                                var dims = [yNDim - 1].concat(range(0, yNDim - 1));
                                y = tfc.transpose(y, dims);
                            }
                        }
                        return y;
                    }
                }
                else {
                    return _this.mergeFunction(inputs);
                }
            });
        };
        Merge.prototype.computeOutputShape = function (inputShape) {
            inputShape = inputShape;
            var outputShape;
            if (inputShape[0] == null) {
                outputShape = null;
            }
            else {
                outputShape = inputShape[0].slice(1);
            }
            for (var i = 1; i < inputShape.length; ++i) {
                var shape = inputShape[i] == null ? null : inputShape[i].slice(1);
                outputShape = this.computeElementwiseOpOutputShape(outputShape, shape);
            }
            var batchSizes = [];
            for (var _i = 0, inputShape_2 = inputShape; _i < inputShape_2.length; _i++) {
                var shape = inputShape_2[_i];
                if (shape != null && shape[0] !== null) {
                    batchSizes.push(shape[0]);
                }
            }
            batchSizes = unique(batchSizes);
            if (batchSizes.length === 1) {
                outputShape = batchSizes.concat(outputShape);
            }
            else {
                outputShape = [null].concat(outputShape);
            }
            return outputShape;
        };
        Merge.prototype.computeMask = function (inputs, mask) {
            return tfc.tidy(function () {
                if (mask == null) {
                    return null;
                }
                if (!Array.isArray(mask)) {
                    throw new ValueError('`mask` should be an Array');
                }
                if (!Array.isArray(inputs)) {
                    throw new ValueError('`inputs` should be an Array');
                }
                if (mask.length !== inputs.length) {
                    throw new ValueError("The Array 'inputs' and 'mask' are expected to have the same " +
                        "length, but have different lengths " +
                        ("(" + inputs.length + " vs " + mask.length + ")"));
                }
                if (mask.every(function (m) { return m == null; })) {
                    return null;
                }
                mask = mask.map(function (m) { return m == null ? m : tfc.expandDims(m, 0); });
                var output = mask[0];
                for (var i = 1; i < mask.length - 1; ++i) {
                    output = tfc.logicalAnd(output, mask[i]);
                }
                return output;
            });
        };
        return Merge;
    }(Layer));
    var Add = /** @class */ (function (_super) {
        __extends(Add, _super);
        function Add(args) {
            return _super.call(this, args) || this;
        }
        Add.prototype.mergeFunction = function (inputs) {
            return tfc.tidy(function () {
                var output = inputs[0].clone();
                for (var i = 1; i < inputs.length; ++i) {
                    output = tfc.add(output, inputs[i]);
                }
                return output;
            });
        };
        /** @nocollapse */
        Add.className = 'Add';
        return Add;
    }(Merge));
    tfc.serialization.registerClass(Add);
    var Multiply = /** @class */ (function (_super) {
        __extends(Multiply, _super);
        function Multiply(args) {
            return _super.call(this, args) || this;
        }
        Multiply.prototype.mergeFunction = function (inputs) {
            return tfc.tidy(function () {
                var output = inputs[0].clone();
                for (var i = 1; i < inputs.length; ++i) {
                    output = tfc.mul(output, inputs[i]);
                }
                return output;
            });
        };
        /** @nocollapse */
        Multiply.className = 'Multiply';
        return Multiply;
    }(Merge));
    tfc.serialization.registerClass(Multiply);
    var Average = /** @class */ (function (_super) {
        __extends(Average, _super);
        function Average(args) {
            return _super.call(this, args) || this;
        }
        Average.prototype.mergeFunction = function (inputs) {
            return tfc.tidy(function () {
                var output = inputs[0].clone();
                for (var i = 1; i < inputs.length; ++i) {
                    output = tfc.add(output, inputs[i]);
                }
                return tfc.mul(1 / inputs.length, output);
            });
        };
        /** @nocollapse */
        Average.className = 'Average';
        return Average;
    }(Merge));
    tfc.serialization.registerClass(Average);
    var Maximum = /** @class */ (function (_super) {
        __extends(Maximum, _super);
        function Maximum(args) {
            return _super.call(this, args) || this;
        }
        Maximum.prototype.mergeFunction = function (inputs) {
            return tfc.tidy(function () {
                var output = inputs[0];
                for (var i = 1; i < inputs.length; ++i) {
                    output = tfc.maximum(output, inputs[i]);
                }
                return output;
            });
        };
        /** @nocollapse */
        Maximum.className = 'Maximum';
        return Maximum;
    }(Merge));
    tfc.serialization.registerClass(Maximum);
    var Minimum = /** @class */ (function (_super) {
        __extends(Minimum, _super);
        function Minimum(args) {
            return _super.call(this, args) || this;
        }
        Minimum.prototype.mergeFunction = function (inputs) {
            return tfc.tidy(function () {
                var output = inputs[0];
                for (var i = 1; i < inputs.length; ++i) {
                    output = tfc.minimum(output, inputs[i]);
                }
                return output;
            });
        };
        /** @nocollapse */
        Minimum.className = 'Minimum';
        return Minimum;
    }(Merge));
    tfc.serialization.registerClass(Minimum);
    var Concatenate = /** @class */ (function (_super) {
        __extends(Concatenate, _super);
        function Concatenate(args) {
            var _this = _super.call(this, args) || this;
            _this.DEFAULT_AXIS = -1;
            if (args == null) {
                args = {};
            }
            _this.axis = args.axis == null ? _this.DEFAULT_AXIS : args.axis;
            _this.supportsMasking = true;
            _this.reshapeRequired = false;
            return _this;
        }
        Concatenate.prototype.build = function (inputShape) {
            // Used purely for shape validation.]
            if (!(Array.isArray(inputShape) && Array.isArray(inputShape[0])) ||
                inputShape.length === 1) {
                throw new ValueError('A `Concatenate` layer should be called on a list of at least 2 ' +
                    'inputs');
            }
            inputShape = inputShape;
            var allNoneShape = true;
            for (var _i = 0, inputShape_3 = inputShape; _i < inputShape_3.length; _i++) {
                var shape = inputShape_3[_i];
                if (shape != null) {
                    allNoneShape = false;
                    break;
                }
            }
            if (allNoneShape) {
                return;
            }
            var shapeSet = [];
            for (var i = 0; i < inputShape.length; ++i) {
                var shapeWithoutConcatAxis = inputShape[i].slice();
                shapeWithoutConcatAxis.splice(this.axis, 1);
                var exists = false;
                for (var _a = 0, shapeSet_1 = shapeSet; _a < shapeSet_1.length; _a++) {
                    var shape = shapeSet_1[_a];
                    if (tfc.util.arraysEqual(shape, shapeWithoutConcatAxis)) {
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    shapeSet.push(shapeWithoutConcatAxis);
                }
            }
            if (shapeSet.length > 1) {
                throw new ValueError('A `Concatenate` layer requires inputs with matching shapes ' +
                    'except for the concat axis. Got input shapes: ' +
                    JSON.stringify(inputShape));
            }
        };
        Concatenate.prototype.mergeFunction = function (inputs) {
            var _this = this;
            return tfc.tidy(function () {
                return concatenate(inputs, _this.axis);
            });
        };
        Concatenate.prototype.computeOutputShape = function (inputShape) {
            if (!(Array.isArray(inputShape) && Array.isArray(inputShape[0]))) {
                throw new ValueError('A `Concatenate` layer should be called on a list of inputs.');
            }
            var inputShapes = inputShape;
            var outputShape = inputShapes[0].slice();
            var axis = this.axis < 0 ? outputShape.length + this.axis : this.axis;
            // Porting Note: the line above is because TypeScript doesn't support
            //   negative indices.
            for (var _i = 0, _a = inputShapes.slice(1); _i < _a.length; _i++) {
                var shape = _a[_i];
                if (outputShape[axis] == null || shape[axis] == null) {
                    outputShape[axis] = null;
                    break;
                }
                outputShape[axis] += shape[axis];
            }
            return outputShape;
        };
        Concatenate.prototype.computeMask = function (inputs, mask) {
            var _this = this;
            if (mask == null) {
                return null;
            }
            if (!Array.isArray(mask)) {
                throw new ValueError('`mask` should be an array for Concatenate');
            }
            if (!Array.isArray(inputs)) {
                throw new ValueError('`inputs` should be an array for Concatenate');
            }
            if (mask.length !== inputs.length) {
                throw new ValueError("Mismatch in the length of mask (" + mask.length + ") " +
                    ("and the legnth of inputs (" + inputs.length + ")"));
            }
            return tfc.tidy(function () {
                var allNullMasks = true;
                mask.forEach(function (m) {
                    if (m != null) {
                        allNullMasks = false;
                        return;
                    }
                });
                if (allNullMasks) {
                    return null;
                }
                var outputMasks = [];
                for (var i = 0; i < inputs.length; ++i) {
                    if (mask[i] == null) {
                        // Input is unmasked. Append all 1's to masks.
                        outputMasks.push(tfc.onesLike(inputs[i]).asType('bool'));
                    }
                    else if (mask[i].rank < inputs[i].rank) {
                        // Mask is smaller than the input, expand it.
                        outputMasks.push(tfc.expandDims(mask[i], -1));
                    }
                    else {
                        outputMasks.push(mask[i]);
                    }
                }
                var concatenatedMasks = tfc.concat(outputMasks, _this.axis);
                return tfc.all(concatenatedMasks, -1, false);
            });
        };
        Concatenate.prototype.getConfig = function () {
            var config = {
                'axis': this.axis,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        Concatenate.className = 'Concatenate';
        return Concatenate;
    }(Merge));
    tfc.serialization.registerClass(Concatenate);
    /**
     * Interpretable potentially negative axis index.
     *
     * For example, given axis = -1, and dim = 3, this function will return 2.
     *
     * @param axis The axis index, may be a positive, zero or negative integer.
     * @param dim Total number of dimensions, a positive integer.
     * @returns A non-negative axis index equivalent to the input `axis`.
     */
    function interpretAxis(axis, dim) {
        while (axis < 0) {
            axis += dim;
        }
        return axis;
    }
    function batchDot(x, y, axes) {
        if (x.shape.length > 3 || y.shape.length > 3) {
            throw new NotImplementedError('batchDot is not implemented for tensors of 4D or higher rank yet');
        }
        tfc.util.assert(x.shape.length >= 2, function () { return "batchDot requires the rank of x to be >= 2, " +
            ("but got " + x.shape.length); });
        tfc.util.assert(x.shape.length >= 2, function () { return "batchDot requires the rank of y to be >= 2, " +
            ("but got " + y.shape.length); });
        if (typeof axes === 'number') {
            axes = [axes, axes];
        }
        if (x.dtype === 'complex64' || y.dtype === 'complex64') {
            throw new NotImplementedError('batchDot is not implemented for complex64-type Tensors yet.');
        }
        var xNDim = x.shape.length;
        var yNDim = y.shape.length;
        if (axes == null) {
            // Behave like batchMatmul by default.
            axes = [xNDim - 1, yNDim - 2];
        }
        var axesArray = axes;
        return tfc.tidy(function () {
            var diff;
            if (xNDim > yNDim) {
                diff = xNDim - yNDim;
                var diffShape = [];
                for (var i = 0; i < diff; ++i) {
                    diffShape.push(1);
                }
                y = y.reshape(y.shape.concat(diffShape));
            }
            else if (yNDim > xNDim) {
                diff = yNDim - xNDim;
                var diffShape = [];
                for (var i = 0; i < diff; ++i) {
                    diffShape.push(1);
                }
                x = x.reshape(x.shape.concat(diffShape));
            }
            else {
                diff = 0;
            }
            var out;
            if (x.shape.length === 2 && y.shape.length === 2) {
                if (axesArray[0] === axesArray[1]) {
                    out = x.mulStrict(y).sum(axesArray[0]);
                }
                else {
                    out = x.transpose([1, 0]).mulStrict(y).sum(axesArray[1]);
                }
            }
            else {
                var adjX = axesArray[0] !== x.shape.length - 1;
                var adjY = axesArray[1] === y.shape.length - 1;
                out = x.matMul(y, adjX, adjY);
            }
            if (diff > 0) {
                var idx = void 0;
                if (xNDim > yNDim) {
                    idx = xNDim + yNDim - 3;
                }
                else {
                    idx = xNDim - 1;
                }
                var squeezeAxes = [];
                for (var i = idx; i < idx + diff; ++i) {
                    squeezeAxes.push(i);
                }
                out = out.squeeze(squeezeAxes);
            }
            if (out.shape.length === 1) {
                out = out.expandDims(1);
            }
            return out;
        });
    }
    var Dot = /** @class */ (function (_super) {
        __extends(Dot, _super);
        function Dot(args) {
            var _this = _super.call(this, args) || this;
            _this.axes = args.axes;
            _this.normalize = args.normalize == null ? false : args.normalize;
            _this.supportsMasking = true;
            _this.reshapeRequired = false;
            return _this;
        }
        Dot.prototype.build = function (inputShape) {
            tfc.util.assert(Array.isArray(inputShape) && inputShape.length === 2 &&
                Array.isArray(inputShape[0]) && Array.isArray(inputShape[1]), function () { return 'A `Dot` layer should be called on a list of exactly 2 inputs.'; });
            var shape1 = inputShape[0];
            var shape2 = inputShape[1];
            if (shape1.length > 3 || shape2.length > 3) {
                throw new NotImplementedError('Dot layer does not support tensors of 4D or higher rank yet.');
            }
            var axes = this.interpretAxes(shape1, shape2);
            if (shape1[axes[0]] !== shape2[axes[1]]) {
                throw new ValueError("Dimension incompatibility: " +
                    (shape1[axes[0]] + " !== " + shape2[axes[1]]));
            }
        };
        Dot.prototype.mergeFunction = function (inputs) {
            if (inputs.length !== 2) {
                throw new ValueError('A `Dot` layer must be called on exactly 2 inputs, ' +
                    ("but received " + inputs.length + " input(s)."));
            }
            var x1 = inputs[0];
            var x2 = inputs[1];
            var axes;
            if (!Array.isArray(this.axes)) {
                axes = [
                    interpretAxis(this.axes, x1.shape.length),
                    interpretAxis(this.axes, x2.shape.length)
                ];
            }
            else {
                axes = this.axes.map(function (axis, i) { return interpretAxis(axis, inputs[i].shape.length); });
            }
            if (this.normalize) {
                x1 = l2Normalize(x1, axes[0]);
                x2 = l2Normalize(x2, axes[1]);
            }
            return batchDot(x1, x2, axes);
        };
        Dot.prototype.interpretAxes = function (shape1, shape2) {
            var axes;
            if (!Array.isArray(this.axes)) {
                // `this.axes` is a single integer.
                axes = [
                    interpretAxis(this.axes, shape1.length),
                    interpretAxis(this.axes, shape2.length)
                ];
            }
            else {
                // `this.axes` is an Array of integers.
                axes = this.axes;
            }
            return axes;
        };
        Dot.prototype.computeOutputShape = function (inputShape) {
            tfc.util.assert(Array.isArray(inputShape) && inputShape.length === 2 &&
                Array.isArray(inputShape[0]) && Array.isArray(inputShape[1]), function () { return 'A `Dot` layer should be called on a list of exactly 2 inputs.'; });
            var shape1 = inputShape[0].slice();
            var shape2 = inputShape[1].slice();
            if (shape1.length > 3 || shape2.length > 3) {
                throw new NotImplementedError('Dot layer does not support tensors of 4D or higher rank yet.');
            }
            var axes = this.interpretAxes(shape1, shape2);
            shape1.splice(axes[0], 1);
            shape2.splice(axes[1], 1);
            shape2.splice(0, 1);
            var outputShape = shape1.concat(shape2);
            if (outputShape.length === 1) {
                outputShape.push(1);
            }
            return outputShape;
        };
        Dot.prototype.computeMask = function (inputs, mask) {
            return null;
        };
        Dot.prototype.getConfig = function () {
            var config = {
                'axes': this.axes,
                'normalize': this.normalize
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        Dot.className = 'Dot';
        return Dot;
    }(Merge));
    tfc.serialization.registerClass(Dot);
    // TODO(cais): Add functional interfaces for the merge layers.

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    var GaussianNoise = /** @class */ (function (_super) {
        __extends(GaussianNoise, _super);
        function GaussianNoise(args) {
            var _this = _super.call(this, args) || this;
            _this.supportsMasking = true;
            _this.stddev = args.stddev;
            return _this;
        }
        GaussianNoise.prototype.computeOutputShape = function (inputShape) {
            return inputShape;
        };
        GaussianNoise.prototype.getConfig = function () {
            var baseConfig = _super.prototype.getConfig.call(this);
            var config = { stddev: this.stddev };
            Object.assign(config, baseConfig);
            return config;
        };
        GaussianNoise.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                _this.invokeCallHook(inputs, kwargs);
                var input = getExactlyOneTensor(inputs);
                var noised = function () {
                    return randomNormal(input.shape, 0, _this.stddev).add(input);
                };
                var output = inTrainPhase(noised, function () { return input; }, kwargs['training'] || false);
                return output;
            });
        };
        /** @nocollapse */
        GaussianNoise.className = 'GaussianNoise';
        return GaussianNoise;
    }(Layer));
    tfc.serialization.registerClass(GaussianNoise);
    var GaussianDropout = /** @class */ (function (_super) {
        __extends(GaussianDropout, _super);
        function GaussianDropout(args) {
            var _this = _super.call(this, args) || this;
            _this.supportsMasking = true;
            _this.rate = args.rate;
            return _this;
        }
        GaussianDropout.prototype.computeOutputShape = function (inputShape) {
            return inputShape;
        };
        GaussianDropout.prototype.getConfig = function () {
            var baseConfig = _super.prototype.getConfig.call(this);
            var config = { rate: this.rate };
            Object.assign(config, baseConfig);
            return config;
        };
        GaussianDropout.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                _this.invokeCallHook(inputs, kwargs);
                var input = getExactlyOneTensor(inputs);
                if (_this.rate > 0 && _this.rate < 1) {
                    var noised = function () {
                        var stddev = Math.sqrt(_this.rate / (1 - _this.rate));
                        return input.mul(randomNormal(input.shape, 1, stddev));
                    };
                    return inTrainPhase(noised, function () { return input; }, kwargs['training'] || false);
                }
                return input;
            });
        };
        /** @nocollapse */
        GaussianDropout.className = 'GaussianDropout';
        return GaussianDropout;
    }(Layer));
    tfc.serialization.registerClass(GaussianDropout);
    /**
     * Applies Alpha Dropout to the input.
     *
     * As it is a regularization layer, it is only active at training time.
     *
     * Alpha Dropout is a `Dropout` that keeps mean and variance of inputs
     * to their original values, in order to ensure the self-normalizing property
     * even after this dropout.
     * Alpha Dropout fits well to Scaled Exponential Linear Units
     * by randomly setting activations to the negative saturation value.
     *
     * Arguments:
     *   - `rate`: float, drop probability (as with `Dropout`).
     *     The multiplicative noise will have
     *     standard deviation `sqrt(rate / (1 - rate))`.
     *   - `noise_shape`: A 1-D `Tensor` of type `int32`, representing the
     *     shape for randomly generated keep/drop flags.
     *
     * Input shape:
     *   Arbitrary. Use the keyword argument `inputShape`
     *   (tuple of integers, does not include the samples axis)
     *   when using this layer as the first layer in a model.
     *
     * Output shape:
     *   Same shape as input.
     *
     * References:
     *   - [Self-Normalizing Neural Networks](https://arxiv.org/abs/1706.02515)
     */
    var AlphaDropout = /** @class */ (function (_super) {
        __extends(AlphaDropout, _super);
        function AlphaDropout(args) {
            var _this = _super.call(this, args) || this;
            _this.supportsMasking = true;
            _this.rate = args.rate;
            _this.noiseShape = args.noiseShape;
            return _this;
        }
        AlphaDropout.prototype._getNoiseShape = function (inputs) {
            return this.noiseShape || getExactlyOneTensor(inputs).shape;
        };
        AlphaDropout.prototype.computeOutputShape = function (inputShape) {
            return inputShape;
        };
        AlphaDropout.prototype.getConfig = function () {
            var baseConfig = _super.prototype.getConfig.call(this);
            var config = { rate: this.rate };
            Object.assign(config, baseConfig);
            return config;
        };
        AlphaDropout.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                if (_this.rate < 1 && _this.rate > 0) {
                    var noiseShape_1 = _this._getNoiseShape(inputs);
                    var droppedInputs = function () {
                        var input = getExactlyOneTensor(inputs);
                        var alpha = 1.6732632423543772848170429916717;
                        var scale = 1.0507009873554804934193349852946;
                        var alphaP = -alpha * scale;
                        var keptIdx = tfc.greaterEqual(tfc.randomUniform(noiseShape_1), _this.rate);
                        keptIdx = cast(keptIdx, 'float32'); // get default dtype.
                        // Get affine transformation params.
                        var a = Math.pow(((1 - _this.rate) * (1 + _this.rate * Math.pow(alphaP, 2))), -0.5);
                        var b = -a * alphaP * _this.rate;
                        // Apply mask.
                        var x = input.mul(keptIdx).add(keptIdx.add(-1).mul(alphaP));
                        return x.mul(a).add(b);
                    };
                    return inTrainPhase(droppedInputs, function () { return getExactlyOneTensor(inputs); }, kwargs['training'] || false);
                }
                return inputs;
            });
        };
        /** @nocollapse */
        AlphaDropout.className = 'AlphaDropout';
        return AlphaDropout;
    }(Layer));
    tfc.serialization.registerClass(AlphaDropout);

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Applies batch normalization on x given mean, var, beta and gamma.
     *
     * I.e. returns:
     *   `output = (x - mean) / (sqrt(var) + epsilon) * gamma + beta`
     *
     * @param x Input tensor.
     * @param mean Mean of batch.
     * @param variance Variance of batch.
     * @param beta Tensor with which to center the input.
     * @param gamma Tensor by which to scale the input.
     * @param epsilon Fuzz factor.
     * @returns The result of the batch normalization.
     */
    function batchNormalization(x, mean$$1, variance$$1, beta, gamma, epsilon) {
        if (epsilon === void 0) { epsilon = 1e-3; }
        var out;
        if (x.rank === 2) {
            out = tfc.batchNorm2d(x, mean$$1, variance$$1, beta, gamma, epsilon);
        }
        else if (x.rank === 3) {
            // TODO(cais): Check rank; give proper error message.
            out = tfc.batchNorm3d(x, mean$$1, variance$$1, beta, gamma, epsilon);
        }
        else if (x.rank === 4) {
            out = tfc.batchNorm4d(x, mean$$1, variance$$1, beta, gamma, epsilon);
        }
        else {
            throw new NotImplementedError("batchNormalization is not implemented for array of rank " + x.rank + " " +
                "yet");
        }
        return out;
    }
    /**
     * Non-broadcasting batch normalization for use in training (not inference).
     *
     * The input is normalized to zero mean and unit variance along the
     * `reductionAxes`, followed by scaling with `gamma` and shifted by `beta`.
     * The result of that is returned as the first element
     * of the returned `Array`. The other two elements are the mean and variance,
     * respectively.
     *
     * @param x Input tensor to be normalized.
     * @param gamma Tensor by which to scale the input.
     * @param beta Tensor by which to center the input.
     * @param reductionAxes Axes over which to normalize.
     * @param epsilon Fuzz factor.
     * @returns An `Array` of three `Tensors`:
     *   [normalized tensor, mean of input, variance of input].
     */
    function regularNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon) {
        if (epsilon === void 0) { epsilon = 1e-3; }
        return tfc.tidy(function () {
            var meanAndVariance = tfc.moments(x, reductionAxes);
            var mean$$1 = meanAndVariance.mean;
            var variance$$1 = meanAndVariance.variance;
            var normed = batchNormalization(x, mean$$1, variance$$1, beta, gamma, epsilon);
            return [normed, mean$$1, variance$$1];
        });
    }
    /**
     * Broadcasting batch normalization for use in training (not inference).
     *
     * The input is normalized to zero mean and unit variance along the
     * `reductionAxes`, followed by scaling with `gamma` and shifted by `beta`.
     * The result of that is returned as the first element
     * of the returned `Array`. The other two elements are the mean and variance,
     * respectively.
     *
     * @param x Input tensor to be normalized.
     * @param gamma Tensor by which to scale the input.
     * @param beta Tensor by which to center the input.
     * @param reductionAxes Axes over which to normalize.
     * @param epsilon Fuzz factor.
     * @returns An `Array` of three `Tensors`:
     *   [normalized tensor, mean of input, variance of input].
     */
    function broadcastNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon) {
        if (epsilon === void 0) { epsilon = 1e-3; }
        return tfc.tidy(function () {
            var meanAndVariance = tfc.moments(x, reductionAxes);
            var mean$$1 = meanAndVariance.mean;
            var variance$$1 = meanAndVariance.variance;
            var targetShape = [];
            for (var _i = 0, _a = range(0, x.rank); _i < _a.length; _i++) {
                var axis = _a[_i];
                if (reductionAxes.indexOf(axis) !== -1) {
                    targetShape.push(1);
                }
                else {
                    targetShape.push(x.shape[axis]);
                }
            }
            var broadcastMean = mean$$1.reshape(targetShape);
            var broadcastVariance = variance$$1.reshape(targetShape);
            var broadcastGamma = gamma == null ? null : gamma.reshape(targetShape);
            var broadcastBeta = beta == null ? null : beta.reshape(targetShape);
            var normed = batchNormalization(x, broadcastMean, broadcastVariance, broadcastBeta, broadcastGamma, epsilon);
            return [normed, mean$$1, variance$$1];
        });
    }
    /**
     * Batch normalization for use in training (not inference).
     *
     * @param x Input tensor to be normalized.
     * @param gamma Tensor by which to scale the input.
     * @param beta Tensor by which to center the input.
     * @param reductionAxes Axes over which to normalize.
     * @param epsilon Fuzz factor.
     * @returns An `Array` of three `Tensors`:
     *   [normalized tensor, mean of input, variance of input].
     */
    function normalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon) {
        if (epsilon === void 0) { epsilon = 1e-3; }
        if (tfc.util.arraysEqual(reductionAxes.slice().sort(), range(0, x.rank - 1))) {
            return regularNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon);
        }
        else {
            return broadcastNormalizeBatchInTraining(x, gamma, beta, reductionAxes, epsilon);
        }
    }
    var BatchNormalization = /** @class */ (function (_super) {
        __extends(BatchNormalization, _super);
        function BatchNormalization(args) {
            var _this = this;
            if (args == null) {
                args = {};
            }
            _this = _super.call(this, args) || this;
            _this.supportsMasking = true;
            _this.axis = args.axis == null ? -1 : args.axis;
            _this.momentum = args.momentum == null ? 0.99 : args.momentum;
            _this.epsilon = args.epsilon == null ? 1e-3 : args.epsilon;
            _this.center = args.center == null ? true : args.center;
            _this.scale = args.scale == null ? true : args.scale;
            _this.betaInitializer = getInitializer(args.betaInitializer || 'zeros');
            _this.gammaInitializer = getInitializer(args.gammaInitializer || 'ones');
            _this.movingMeanInitializer =
                getInitializer(args.movingMeanInitializer || 'zeros');
            _this.movingVarianceInitializer =
                getInitializer(args.movingVarianceInitializer || 'ones');
            _this.betaConstraint = getConstraint(args.betaConstraint);
            _this.gammaConstraint = getConstraint(args.gammaConstraint);
            _this.betaRegularizer = getRegularizer(args.betaRegularizer);
            _this.gammaRegularizer = getRegularizer(args.gammaRegularizer);
            return _this;
        }
        BatchNormalization.prototype.build = function (inputShape) {
            var _a;
            inputShape = getExactlyOneShape(inputShape);
            var axis = this.axis >= 0 ? this.axis : (this.axis + inputShape.length);
            var dim = inputShape[axis];
            if (dim == null) {
                throw new ValueError("Axis " + axis + " of input tensor should have a defined dimension but " +
                    "the layer received an input with shape " +
                    (JSON.stringify(inputShape) + "."));
            }
            this.inputSpec =
                [new InputSpec({ ndim: inputShape.length, axes: (_a = {}, _a[axis] = dim, _a) })];
            var shape = [dim];
            if (this.scale) {
                this.gamma = this.addWeight('gamma', shape, null, this.gammaInitializer, this.gammaRegularizer, true, this.gammaConstraint);
            }
            if (this.center) {
                this.beta = this.addWeight('beta', shape, null, this.betaInitializer, this.betaRegularizer, true, this.betaConstraint);
            }
            this.movingMean = this.addWeight('moving_mean', shape, null, this.movingMeanInitializer, null, false);
            this.movingVariance = this.addWeight('moving_variance', shape, null, this.movingVarianceInitializer, null, false);
            this.built = true;
        };
        BatchNormalization.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                var training = kwargs['training'] == null ? false : kwargs['training'];
                var input = getExactlyOneTensor(inputs);
                var inputShape = input.shape;
                var ndim = inputShape.length;
                var reductionAxes = range(0, ndim);
                var axis = _this.axis >= 0 ? _this.axis : (_this.axis + ndim);
                reductionAxes.splice(axis, 1);
                var broadcastShape = pyListRepeat(1, ndim);
                broadcastShape[axis] = inputShape[axis];
                var sortedReductionAxes = reductionAxes.slice();
                sortedReductionAxes.sort();
                var needsBroadcasting = !tfc.util.arraysEqual(sortedReductionAxes, range(0, ndim).slice(0, ndim - 1));
                var normalizeInference = function () {
                    if (needsBroadcasting) {
                        var broadcastMovingMean = _this.movingMean.read().reshape(broadcastShape);
                        var broadcastMovingVariance = _this.movingVariance.read().reshape(broadcastShape);
                        var broadcastBeta = _this.center ? _this.beta.read().reshape(broadcastShape) : null;
                        var broadcastGamma = _this.scale ? _this.gamma.read().reshape(broadcastShape) : null;
                        return batchNormalization(input, broadcastMovingMean, broadcastMovingVariance, broadcastBeta, broadcastGamma, _this.epsilon);
                    }
                    else {
                        return batchNormalization(input, _this.movingMean.read(), _this.movingVariance.read(), _this.beta == null ? null : _this.beta.read(), _this.gamma == null ? null : _this.gamma.read(), _this.epsilon);
                    }
                };
                if (!training) {
                    return normalizeInference();
                }
                var _a = normalizeBatchInTraining(input, _this.gamma.read(), _this.beta.read(), reductionAxes, _this.epsilon), normedTraining = _a[0], mean$$1 = _a[1], variance$$1 = _a[2];
                var doMovingAverage = function (variable, value, momentum) {
                    tfc.tidy(function () {
                        var decay = 1 - momentum;
                        var origValue = variable.read();
                        var updateDelta = origValue.sub(value).mul(decay);
                        variable.write(origValue.sub(updateDelta));
                    });
                };
                // Perform updates to moving mean and moving variance for training.
                // Porting Note: In PyKeras, these updates to `movingMean` and
                //   `movingAverage` are done as a deferred Graph, added to the `Layer`'s
                //   `update`s using the `add_update()` method. Here we do it imperatively
                //   and encapsulate the updates in a function that is invoked
                //   immediately.
                var updateMovingMeanAndVariance = function () {
                    doMovingAverage(_this.movingMean, mean$$1, _this.momentum);
                    doMovingAverage(_this.movingVariance, variance$$1, _this.momentum);
                };
                updateMovingMeanAndVariance();
                return normedTraining;
            });
        };
        BatchNormalization.prototype.getConfig = function () {
            var config = {
                axis: this.axis,
                momentum: this.momentum,
                epsilon: this.epsilon,
                center: this.center,
                scale: this.scale,
                betaInitializer: serializeInitializer(this.betaInitializer),
                gammaInitializer: serializeInitializer(this.gammaInitializer),
                movingMeanInitializer: serializeInitializer(this.movingMeanInitializer),
                movingVarianceInitializer: serializeInitializer(this.movingVarianceInitializer),
                betaRegularizer: serializeRegularizer(this.betaRegularizer),
                gammaRegularizer: serializeRegularizer(this.gammaRegularizer),
                betaConstraint: serializeConstraint(this.betaConstraint),
                gammaConstraint: serializeConstraint(this.gammaConstraint)
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        BatchNormalization.className = 'BatchNormalization';
        return BatchNormalization;
    }(Layer));
    tfc.serialization.registerClass(BatchNormalization);

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Pads the 2nd and 3rd dimensions of a 4D tensor.
     *
     * @param x Input `tf.Tensor` to be padded.
     * @param padding `Array` of two `Array`s, each of which is an `Array` of two
     *   integers. The amount of padding at the beginning and end of the 2nd and 3rd
     *   dimensions, respectively.
     * @param dataFormat 'channelsLast' (default) or 'channelsFirst'.
     * @return Padded 4D `tf.Tensor`.
     */
    function spatial2dPadding(x, padding, dataFormat) {
        return tfc.tidy(function () {
            if (x.rank !== 4) {
                throw new ValueError("temporalPadding expects input tensor to be 4-D, but received a " +
                    (x.rank + "-D tensor."));
            }
            if (padding == null) {
                padding = [[1, 1], [1, 1]];
            }
            if (padding.length !== 2 || padding[0].length !== 2 ||
                padding[1].length !== 2) {
                throw new ValueError('spatial2dPadding expects `padding` to be an Array of two Arrays, ' +
                    'each of which is an Array of two integers.');
            }
            if (dataFormat == null) {
                dataFormat = imageDataFormat();
            }
            if (dataFormat !== 'channelsLast' && dataFormat !== 'channelsFirst') {
                throw new ValueError("Unknown data format: " + dataFormat + ". " +
                    "Supported data formats are 'channelsLast' and 'channelsFirst.");
            }
            var pattern;
            if (dataFormat === 'channelsFirst') {
                pattern = [[0, 0], [0, 0], padding[0], padding[1]];
            }
            else {
                pattern = [[0, 0], padding[0], padding[1], [0, 0]];
            }
            return tfc.pad(x, pattern);
        });
    }
    var ZeroPadding2D = /** @class */ (function (_super) {
        __extends(ZeroPadding2D, _super);
        function ZeroPadding2D(args) {
            var _this = this;
            if (args == null) {
                args = {};
            }
            _this = _super.call(this, args) || this;
            _this.dataFormat =
                args.dataFormat == null ? imageDataFormat() : args.dataFormat;
            // TODO(cais): Maybe refactor the following logic surrounding `padding`
            //   into a helper method.
            if (args.padding == null) {
                _this.padding = [[1, 1], [1, 1]];
            }
            else if (typeof args.padding === 'number') {
                _this.padding =
                    [[args.padding, args.padding], [args.padding, args.padding]];
            }
            else {
                args.padding = args.padding;
                if (args.padding.length !== 2) {
                    throw new ValueError("ZeroPadding2D expects padding to be a length-2 array, but " +
                        ("received a length-" + args.padding.length + " array."));
                }
                var heightPadding = void 0;
                var widthPadding = void 0;
                if (typeof args.padding[0] === 'number') {
                    heightPadding = [args.padding[0], args.padding[0]];
                    widthPadding = [args.padding[1], args.padding[1]];
                }
                else {
                    args.padding = args.padding;
                    if (args.padding[0].length !== 2) {
                        throw new ValueError("ZeroPadding2D expects height padding to be a length-2 array, " +
                            ("but received a length-" + args.padding[0].length + " array."));
                    }
                    heightPadding = args.padding[0];
                    if (args.padding[1].length !== 2) {
                        throw new ValueError("ZeroPadding2D expects width padding to be a length-2 array, " +
                            ("but received a length-" + args.padding[1].length + " array."));
                    }
                    widthPadding = args.padding[1];
                }
                _this.padding = [heightPadding, widthPadding];
            }
            _this.inputSpec = [new InputSpec({ ndim: 4 })];
            return _this;
        }
        ZeroPadding2D.prototype.computeOutputShape = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            var rows;
            var cols;
            if (this.dataFormat === 'channelsFirst') {
                if (inputShape[2] != null && inputShape[2] >= 0) {
                    rows = inputShape[2] + this.padding[0][0] + this.padding[0][1];
                }
                else {
                    rows = null;
                }
                if (inputShape[3] != null && inputShape[3] >= 0) {
                    cols = inputShape[3] + this.padding[1][0] + this.padding[1][1];
                }
                else {
                    cols = null;
                }
                return [inputShape[0], inputShape[1], rows, cols];
            }
            else {
                if (inputShape[1] != null && inputShape[1] >= 0) {
                    rows = inputShape[1] + this.padding[0][0] + this.padding[0][1];
                }
                else {
                    rows = null;
                }
                if (inputShape[2] != null && inputShape[2] >= 0) {
                    cols = inputShape[2] + this.padding[1][0] + this.padding[1][1];
                }
                else {
                    cols = null;
                }
                return [inputShape[0], rows, cols, inputShape[3]];
            }
        };
        ZeroPadding2D.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () { return spatial2dPadding(getExactlyOneTensor(inputs), _this.padding, _this.dataFormat); });
        };
        ZeroPadding2D.prototype.getConfig = function () {
            var config = {
                padding: this.padding,
                dataFormat: this.dataFormat,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        ZeroPadding2D.className = 'ZeroPadding2D';
        return ZeroPadding2D;
    }(Layer));
    tfc.serialization.registerClass(ZeroPadding2D);

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * 2D pooling.
     * @param x
     * @param poolSize
     * @param stridesdes strides. Defaults to [1, 1].
     * @param padding padding. Defaults to 'valid'.
     * @param dataFormat data format. Defaults to 'channelsLast'.
     * @param poolMode Mode of pooling. Defaults to 'max'.
     * @returns Result of the 2D pooling.
     */
    function pool2d(x, poolSize, strides, padding, dataFormat, poolMode) {
        return tfc.tidy(function () {
            checkDataFormat(dataFormat);
            checkPoolMode(poolMode);
            checkPaddingMode(padding);
            if (strides == null) {
                strides = [1, 1];
            }
            if (padding == null) {
                padding = 'valid';
            }
            if (dataFormat == null) {
                dataFormat = imageDataFormat();
            }
            if (poolMode == null) {
                poolMode = 'max';
            }
            // TODO(cais): Remove the preprocessing step once deeplearn.js supports
            // dataFormat as an input argument.
            x = preprocessConv2DInput(x, dataFormat); // x is NHWC after preprocessing.
            var y;
            var paddingString = (padding === 'same') ? 'same' : 'valid';
            if (poolMode === 'max') {
                // TODO(cais): Rank check?
                y = tfc.maxPool(x, poolSize, strides, paddingString);
            }
            else { // 'avg'
                // TODO(cais): Check the dtype and rank of x and give clear error message
                //   if those are incorrect.
                y = tfc.avgPool(
                // TODO(cais): Rank check?
                x, poolSize, strides, paddingString);
            }
            if (dataFormat === 'channelsFirst') {
                y = tfc.transpose(y, [0, 3, 1, 2]); // NHWC -> NCHW.
            }
            return y;
        });
    }
    /**
     * 3D pooling.
     * @param x
     * @param poolSize. Default to [1, 1, 1].
     * @param strides strides. Defaults to [1, 1, 1].
     * @param padding padding. Defaults to 'valid'.
     * @param dataFormat data format. Defaults to 'channelsLast'.
     * @param poolMode Mode of pooling. Defaults to 'max'.
     * @returns Result of the 3D pooling.
     */
    function pool3d(x, poolSize, strides, padding, dataFormat, poolMode) {
        return tfc.tidy(function () {
            checkDataFormat(dataFormat);
            checkPoolMode(poolMode);
            checkPaddingMode(padding);
            if (strides == null) {
                strides = [1, 1, 1];
            }
            if (padding == null) {
                padding = 'valid';
            }
            if (dataFormat == null) {
                dataFormat = imageDataFormat();
            }
            if (poolMode == null) {
                poolMode = 'max';
            }
            // x is NDHWC after preprocessing.
            x = preprocessConv3DInput(x, dataFormat);
            var y;
            var paddingString = (padding === 'same') ? 'same' : 'valid';
            if (poolMode === 'max') {
                y = tfc.maxPool3d(x, poolSize, strides, paddingString);
            }
            else { // 'avg'
                y = tfc.avgPool3d(x, poolSize, strides, paddingString);
            }
            if (dataFormat === 'channelsFirst') {
                y = tfc.transpose(y, [0, 4, 1, 2, 3]); // NDHWC -> NCDHW.
            }
            return y;
        });
    }
    /**
     * Abstract class for different pooling 1D layers.
     */
    var Pooling1D = /** @class */ (function (_super) {
        __extends(Pooling1D, _super);
        /**
         *
         * @param args Parameters for the Pooling layer.
         *
         * config.poolSize defaults to 2.
         */
        function Pooling1D(args) {
            var _this = this;
            if (args.poolSize == null) {
                args.poolSize = 2;
            }
            _this = _super.call(this, args) || this;
            if (typeof args.poolSize === 'number') {
                _this.poolSize = [args.poolSize];
            }
            else if (Array.isArray(args.poolSize) &&
                args.poolSize.length === 1 &&
                typeof args.poolSize[0] === 'number') {
                _this.poolSize = args.poolSize;
            }
            else {
                throw new ValueError("poolSize for 1D convolutional layer must be a number or an " +
                    "Array of a single number, but received " +
                    ("" + JSON.stringify(args.poolSize)));
            }
            assertPositiveInteger(_this.poolSize, 'poolSize');
            if (args.strides == null) {
                _this.strides = _this.poolSize;
            }
            else {
                if (typeof args.strides === 'number') {
                    _this.strides = [args.strides];
                }
                else if (Array.isArray(args.strides) &&
                    args.strides.length === 1 &&
                    typeof args.strides[0] === 'number') {
                    _this.strides = args.strides;
                }
                else {
                    throw new ValueError("strides for 1D convolutional layer must be a number or an " +
                        "Array of a single number, but received " +
                        ("" + JSON.stringify(args.strides)));
                }
            }
            assertPositiveInteger(_this.strides, 'strides');
            _this.padding = args.padding == null ? 'valid' : args.padding;
            checkPaddingMode(_this.padding);
            _this.inputSpec = [new InputSpec({ ndim: 3 })];
            return _this;
        }
        Pooling1D.prototype.computeOutputShape = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            var length = convOutputLength(inputShape[1], this.poolSize[0], this.padding, this.strides[0]);
            return [inputShape[0], length, inputShape[2]];
        };
        Pooling1D.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                _this.invokeCallHook(inputs, kwargs);
                // Add dummy last dimension.
                inputs = expandDims(getExactlyOneTensor(inputs), 2);
                var output = _this.poolingFunction(getExactlyOneTensor(inputs), [_this.poolSize[0], 1], [_this.strides[0], 1], _this.padding, 'channelsLast');
                // Remove dummy last dimension.
                return tfc.squeeze(output, [2]);
            });
        };
        Pooling1D.prototype.getConfig = function () {
            var config = {
                poolSize: this.poolSize,
                padding: this.padding,
                strides: this.strides,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        return Pooling1D;
    }(Layer));
    var MaxPooling1D = /** @class */ (function (_super) {
        __extends(MaxPooling1D, _super);
        function MaxPooling1D(args) {
            return _super.call(this, args) || this;
        }
        MaxPooling1D.prototype.poolingFunction = function (inputs, poolSize, strides, padding, dataFormat) {
            checkDataFormat(dataFormat);
            checkPaddingMode(padding);
            return pool2d(inputs, poolSize, strides, padding, dataFormat, 'max');
        };
        /** @nocollapse */
        MaxPooling1D.className = 'MaxPooling1D';
        return MaxPooling1D;
    }(Pooling1D));
    tfc.serialization.registerClass(MaxPooling1D);
    var AveragePooling1D = /** @class */ (function (_super) {
        __extends(AveragePooling1D, _super);
        function AveragePooling1D(args) {
            return _super.call(this, args) || this;
        }
        AveragePooling1D.prototype.poolingFunction = function (inputs, poolSize, strides, padding, dataFormat) {
            checkDataFormat(dataFormat);
            checkPaddingMode(padding);
            return pool2d(inputs, poolSize, strides, padding, dataFormat, 'avg');
        };
        /** @nocollapse */
        AveragePooling1D.className = 'AveragePooling1D';
        return AveragePooling1D;
    }(Pooling1D));
    tfc.serialization.registerClass(AveragePooling1D);
    /**
     * Abstract class for different pooling 2D layers.
     */
    var Pooling2D = /** @class */ (function (_super) {
        __extends(Pooling2D, _super);
        function Pooling2D(args) {
            var _this = this;
            if (args.poolSize == null) {
                args.poolSize = [2, 2];
            }
            _this = _super.call(this, args) || this;
            _this.poolSize = Array.isArray(args.poolSize) ?
                args.poolSize :
                [args.poolSize, args.poolSize];
            if (args.strides == null) {
                _this.strides = _this.poolSize;
            }
            else if (Array.isArray(args.strides)) {
                if (args.strides.length !== 2) {
                    throw new ValueError("If the strides property of a 2D pooling layer is an Array, " +
                        "it is expected to have a length of 2, but received length " +
                        (args.strides.length + "."));
                }
                _this.strides = args.strides;
            }
            else {
                // `config.strides` is a number.
                _this.strides = [args.strides, args.strides];
            }
            assertPositiveInteger(_this.poolSize, 'poolSize');
            assertPositiveInteger(_this.strides, 'strides');
            _this.padding = args.padding == null ? 'valid' : args.padding;
            _this.dataFormat =
                args.dataFormat == null ? 'channelsLast' : args.dataFormat;
            checkDataFormat(_this.dataFormat);
            checkPaddingMode(_this.padding);
            _this.inputSpec = [new InputSpec({ ndim: 4 })];
            return _this;
        }
        Pooling2D.prototype.computeOutputShape = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            var rows = this.dataFormat === 'channelsFirst' ? inputShape[2] : inputShape[1];
            var cols = this.dataFormat === 'channelsFirst' ? inputShape[3] : inputShape[2];
            rows =
                convOutputLength(rows, this.poolSize[0], this.padding, this.strides[0]);
            cols =
                convOutputLength(cols, this.poolSize[1], this.padding, this.strides[1]);
            if (this.dataFormat === 'channelsFirst') {
                return [inputShape[0], inputShape[1], rows, cols];
            }
            else {
                return [inputShape[0], rows, cols, inputShape[3]];
            }
        };
        Pooling2D.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                _this.invokeCallHook(inputs, kwargs);
                return _this.poolingFunction(getExactlyOneTensor(inputs), _this.poolSize, _this.strides, _this.padding, _this.dataFormat);
            });
        };
        Pooling2D.prototype.getConfig = function () {
            var config = {
                poolSize: this.poolSize,
                padding: this.padding,
                strides: this.strides,
                dataFormat: this.dataFormat
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        return Pooling2D;
    }(Layer));
    var MaxPooling2D = /** @class */ (function (_super) {
        __extends(MaxPooling2D, _super);
        function MaxPooling2D(args) {
            return _super.call(this, args) || this;
        }
        MaxPooling2D.prototype.poolingFunction = function (inputs, poolSize, strides, padding, dataFormat) {
            checkDataFormat(dataFormat);
            checkPaddingMode(padding);
            return pool2d(inputs, poolSize, strides, padding, dataFormat, 'max');
        };
        /** @nocollapse */
        MaxPooling2D.className = 'MaxPooling2D';
        return MaxPooling2D;
    }(Pooling2D));
    tfc.serialization.registerClass(MaxPooling2D);
    var AveragePooling2D = /** @class */ (function (_super) {
        __extends(AveragePooling2D, _super);
        function AveragePooling2D(args) {
            return _super.call(this, args) || this;
        }
        AveragePooling2D.prototype.poolingFunction = function (inputs, poolSize, strides, padding, dataFormat) {
            checkDataFormat(dataFormat);
            checkPaddingMode(padding);
            return pool2d(inputs, poolSize, strides, padding, dataFormat, 'avg');
        };
        /** @nocollapse */
        AveragePooling2D.className = 'AveragePooling2D';
        return AveragePooling2D;
    }(Pooling2D));
    tfc.serialization.registerClass(AveragePooling2D);
    /**
     * Abstract class for different pooling 3D layers.
     */
    var Pooling3D = /** @class */ (function (_super) {
        __extends(Pooling3D, _super);
        function Pooling3D(args) {
            var _this = this;
            if (args.poolSize == null) {
                args.poolSize = [2, 2, 2];
            }
            _this = _super.call(this, args) || this;
            _this.poolSize = Array.isArray(args.poolSize) ?
                args.poolSize :
                [args.poolSize, args.poolSize, args.poolSize];
            if (args.strides == null) {
                _this.strides = _this.poolSize;
            }
            else if (Array.isArray(args.strides)) {
                if (args.strides.length !== 3) {
                    throw new ValueError("If the strides property of a 3D pooling layer is an Array, " +
                        "it is expected to have a length of 3, but received length " +
                        (args.strides.length + "."));
                }
                _this.strides = args.strides;
            }
            else {
                // `config.strides` is a number.
                _this.strides = [args.strides, args.strides, args.strides];
            }
            assertPositiveInteger(_this.poolSize, 'poolSize');
            assertPositiveInteger(_this.strides, 'strides');
            _this.padding = args.padding == null ? 'valid' : args.padding;
            _this.dataFormat =
                args.dataFormat == null ? 'channelsLast' : args.dataFormat;
            checkDataFormat(_this.dataFormat);
            checkPaddingMode(_this.padding);
            _this.inputSpec = [new InputSpec({ ndim: 5 })];
            return _this;
        }
        Pooling3D.prototype.computeOutputShape = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            var depths = this.dataFormat === 'channelsFirst' ? inputShape[2] : inputShape[1];
            var rows = this.dataFormat === 'channelsFirst' ? inputShape[3] : inputShape[2];
            var cols = this.dataFormat === 'channelsFirst' ? inputShape[4] : inputShape[3];
            depths = convOutputLength(depths, this.poolSize[0], this.padding, this.strides[0]);
            rows =
                convOutputLength(rows, this.poolSize[1], this.padding, this.strides[1]);
            cols =
                convOutputLength(cols, this.poolSize[2], this.padding, this.strides[2]);
            if (this.dataFormat === 'channelsFirst') {
                return [inputShape[0], inputShape[1], depths, rows, cols];
            }
            else {
                return [inputShape[0], depths, rows, cols, inputShape[4]];
            }
        };
        Pooling3D.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                _this.invokeCallHook(inputs, kwargs);
                return _this.poolingFunction(getExactlyOneTensor(inputs), _this.poolSize, _this.strides, _this.padding, _this.dataFormat);
            });
        };
        Pooling3D.prototype.getConfig = function () {
            var config = {
                poolSize: this.poolSize,
                padding: this.padding,
                strides: this.strides,
                dataFormat: this.dataFormat
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        return Pooling3D;
    }(Layer));
    var MaxPooling3D = /** @class */ (function (_super) {
        __extends(MaxPooling3D, _super);
        function MaxPooling3D(args) {
            return _super.call(this, args) || this;
        }
        MaxPooling3D.prototype.poolingFunction = function (inputs, poolSize, strides, padding, dataFormat) {
            checkDataFormat(dataFormat);
            checkPaddingMode(padding);
            return pool3d(inputs, poolSize, strides, padding, dataFormat, 'max');
        };
        /** @nocollapse */
        MaxPooling3D.className = 'MaxPooling3D';
        return MaxPooling3D;
    }(Pooling3D));
    tfc.serialization.registerClass(MaxPooling3D);
    var AveragePooling3D = /** @class */ (function (_super) {
        __extends(AveragePooling3D, _super);
        function AveragePooling3D(args) {
            return _super.call(this, args) || this;
        }
        AveragePooling3D.prototype.poolingFunction = function (inputs, poolSize, strides, padding, dataFormat) {
            checkDataFormat(dataFormat);
            checkPaddingMode(padding);
            return pool3d(inputs, poolSize, strides, padding, dataFormat, 'avg');
        };
        /** @nocollapse */
        AveragePooling3D.className = 'AveragePooling3D';
        return AveragePooling3D;
    }(Pooling3D));
    tfc.serialization.registerClass(AveragePooling3D);
    /**
     * Abstract class for different global pooling 1D layers.
     */
    var GlobalPooling1D = /** @class */ (function (_super) {
        __extends(GlobalPooling1D, _super);
        function GlobalPooling1D(args) {
            var _this = _super.call(this, args) || this;
            _this.inputSpec = [new InputSpec({ ndim: 3 })];
            return _this;
        }
        GlobalPooling1D.prototype.computeOutputShape = function (inputShape) {
            return [inputShape[0], inputShape[2]];
        };
        GlobalPooling1D.prototype.call = function (inputs, kwargs) {
            throw new NotImplementedError();
        };
        return GlobalPooling1D;
    }(Layer));
    var GlobalAveragePooling1D = /** @class */ (function (_super) {
        __extends(GlobalAveragePooling1D, _super);
        function GlobalAveragePooling1D(args) {
            return _super.call(this, args || {}) || this;
        }
        GlobalAveragePooling1D.prototype.call = function (inputs, kwargs) {
            return tfc.tidy(function () {
                var input = getExactlyOneTensor(inputs);
                return tfc.mean(input, 1);
            });
        };
        /** @nocollapse */
        GlobalAveragePooling1D.className = 'GlobalAveragePooling1D';
        return GlobalAveragePooling1D;
    }(GlobalPooling1D));
    tfc.serialization.registerClass(GlobalAveragePooling1D);
    var GlobalMaxPooling1D = /** @class */ (function (_super) {
        __extends(GlobalMaxPooling1D, _super);
        function GlobalMaxPooling1D(args) {
            return _super.call(this, args || {}) || this;
        }
        GlobalMaxPooling1D.prototype.call = function (inputs, kwargs) {
            return tfc.tidy(function () {
                var input = getExactlyOneTensor(inputs);
                return tfc.max(input, 1);
            });
        };
        /** @nocollapse */
        GlobalMaxPooling1D.className = 'GlobalMaxPooling1D';
        return GlobalMaxPooling1D;
    }(GlobalPooling1D));
    tfc.serialization.registerClass(GlobalMaxPooling1D);
    /**
     * Abstract class for different global pooling 2D layers.
     */
    var GlobalPooling2D = /** @class */ (function (_super) {
        __extends(GlobalPooling2D, _super);
        function GlobalPooling2D(args) {
            var _this = _super.call(this, args) || this;
            _this.dataFormat =
                args.dataFormat == null ? 'channelsLast' : args.dataFormat;
            checkDataFormat(_this.dataFormat);
            _this.inputSpec = [new InputSpec({ ndim: 4 })];
            return _this;
        }
        GlobalPooling2D.prototype.computeOutputShape = function (inputShape) {
            inputShape = inputShape;
            if (this.dataFormat === 'channelsLast') {
                return [inputShape[0], inputShape[3]];
            }
            else {
                return [inputShape[0], inputShape[1]];
            }
        };
        GlobalPooling2D.prototype.call = function (inputs, kwargs) {
            throw new NotImplementedError();
        };
        GlobalPooling2D.prototype.getConfig = function () {
            var config = { dataFormat: this.dataFormat };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        return GlobalPooling2D;
    }(Layer));
    var GlobalAveragePooling2D = /** @class */ (function (_super) {
        __extends(GlobalAveragePooling2D, _super);
        function GlobalAveragePooling2D() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GlobalAveragePooling2D.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                var input = getExactlyOneTensor(inputs);
                if (_this.dataFormat === 'channelsLast') {
                    return tfc.mean(input, [1, 2]);
                }
                else {
                    return tfc.mean(input, [2, 3]);
                }
            });
        };
        /** @nocollapse */
        GlobalAveragePooling2D.className = 'GlobalAveragePooling2D';
        return GlobalAveragePooling2D;
    }(GlobalPooling2D));
    tfc.serialization.registerClass(GlobalAveragePooling2D);
    var GlobalMaxPooling2D = /** @class */ (function (_super) {
        __extends(GlobalMaxPooling2D, _super);
        function GlobalMaxPooling2D() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GlobalMaxPooling2D.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                var input = getExactlyOneTensor(inputs);
                if (_this.dataFormat === 'channelsLast') {
                    return tfc.max(input, [1, 2]);
                }
                else {
                    return tfc.max(input, [2, 3]);
                }
            });
        };
        /** @nocollapse */
        GlobalMaxPooling2D.className = 'GlobalMaxPooling2D';
        return GlobalMaxPooling2D;
    }(GlobalPooling2D));
    tfc.serialization.registerClass(GlobalMaxPooling2D);

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Standardize `apply()` args to a single list of tensor inputs.
     *
     * When running a model loaded from file, the input tensors `initialState` and
     * `constants` are passed to `RNN.apply()` as part of `inputs` instead of the
     * dedicated kwargs fields. `inputs` consists of
     * `[inputs, initialState0, initialState1, ..., constant0, constant1]` in this
     * case.
     * This method makes sure that arguments are
     * separated and that `initialState` and `constants` are `Array`s of tensors
     * (or None).
     *
     * @param inputs Tensor or `Array` of  tensors.
     * @param initialState Tensor or `Array` of tensors or `null`/`undefined`.
     * @param constants Tensor or `Array` of tensors or `null`/`undefined`.
     * @returns An object consisting of
     *   inputs: A tensor.
     *   initialState: `Array` of tensors or `null`.
     *   constants: `Array` of tensors or `null`.
     * @throws ValueError, if `inputs` is an `Array` but either `initialState` or
     *   `constants` is provided.
     */
    function standardizeArgs(inputs, initialState, constants, numConstants) {
        if (Array.isArray(inputs)) {
            if (initialState != null || constants != null) {
                throw new ValueError('When inputs is an array, neither initialState or constants ' +
                    'should be provided');
            }
            if (numConstants != null) {
                constants = inputs.slice(inputs.length - numConstants, inputs.length);
                inputs = inputs.slice(0, inputs.length - numConstants);
            }
            if (inputs.length > 1) {
                initialState = inputs.slice(1, inputs.length);
            }
            inputs = inputs[0];
        }
        function toListOrNull(x) {
            if (x == null || Array.isArray(x)) {
                return x;
            }
            else {
                return [x];
            }
        }
        initialState = toListOrNull(initialState);
        constants = toListOrNull(constants);
        return { inputs: inputs, initialState: initialState, constants: constants };
    }
    /**
     * Iterates over the time dimension of a tensor.
     *
     * @param stepFunction RNN step function.
     *   Parameters:
     *     inputs: tensor with shape `[samples, ...]` (no time dimension),
     *       representing input for the batch of samples at a certain time step.
     *     states: an Array of tensors.
     *   Returns:
     *     outputs: tensor with shape `[samples, outputDim]` (no time dimension).
     *     newStates: list of tensors, same length and shapes as `states`. The first
     *       state in the list must be the output tensor at the previous timestep.
     * @param inputs Tensor of temporal data of shape `[samples, time, ...]` (at
     *   least 3D).
     * @param initialStates Tensor with shape `[samples, outputDim]` (no time
     *   dimension), containing the initial values of the states used in the step
     *   function.
     * @param goBackwards If `true`, do the iteration over the time dimension in
     *   reverse order and return the reversed sequence.
     * @param mask Binary tensor with shape `[sample, time, 1]`, with a zero for
     *   every element that is masked.
     * @param constants An Array of constant values passed at each step.
     * @param unroll Whether to unroll the RNN or to use a symbolic loop. *Not*
     *   applicable to this imperative deeplearn.js backend. Its value is ignored.
     * @param needPerStepOutputs Whether the per-step outputs are to be
     *   concatenated into a single tensor and returned (as the second return
     *   value). Default: `false`. This arg is included so that the relatively
     *   expensive concatenation of the stepwise outputs can be omitted unless
     *   the stepwise outputs need to be kept (e.g., for an LSTM layer of which
     *   `returnSequence` is `true`.)
     * @returns An Array: `[lastOutput, outputs, newStates]`.
     *   lastOutput: the lastest output of the RNN, of shape `[samples, ...]`.
     *   outputs: tensor with shape `[samples, time, ...]` where each entry
     *     `output[s, t]` is the output of the step function at time `t` for sample
     *     `s`. This return value is provided if and only if the
     *     `needPerStepOutputs` is set as `true`. If it is set as `false`, this
     *     return value will be `undefined`.
     *   newStates: Array of tensors, latest states returned by the step function,
     *      of shape `(samples, ...)`.
     * @throws ValueError If input dimension is less than 3.
     *
     * TODO(nielsene): This needs to be tidy-ed.
     */
    function rnn(stepFunction, inputs, initialStates, goBackwards, mask, constants, unroll, needPerStepOutputs) {
        if (goBackwards === void 0) { goBackwards = false; }
        if (unroll === void 0) { unroll = false; }
        if (needPerStepOutputs === void 0) { needPerStepOutputs = false; }
        return tfc.tidy(function () {
            var ndim = inputs.shape.length;
            if (ndim < 3) {
                throw new ValueError("Input should be at least 3D, but is " + ndim + "D.");
            }
            // Transpose to time-major, i.e., from [batch, time, ...] to [time, batch,
            // ...].
            var axes = [1, 0].concat(range(2, ndim));
            inputs = tfc.transpose(inputs, axes);
            if (constants != null) {
                throw new NotImplementedError('The rnn() functoin of the deeplearn.js backend does not support ' +
                    'constants yet.');
            }
            // Porting Note: the unroll option is ignored by the imperative backend.
            if (unroll) {
                console.warn('Backend rnn(): the unroll = true option is not applicable to the ' +
                    'imperative deeplearn.js backend.');
            }
            if (mask != null) {
                mask = mask.asType('bool').asType('float32');
                if (mask.rank === ndim - 1) {
                    mask = tfc.expandDims(mask, -1);
                }
                mask = tfc.transpose(mask, axes);
            }
            if (goBackwards) {
                inputs = tfc.reverse(inputs, 0);
                if (mask != null) {
                    mask = tfc.reverse(mask, 0);
                }
            }
            // Porting Note: PyKeras with TensorFlow backend uses a symbolic loop
            //   (tf.while_loop). But for the imperative deeplearn.js backend, we just
            //   use the usual TypeScript control flow to iterate over the time steps in
            //   the inputs.
            // Porting Note: PyKeras patches a "_use_learning_phase" attribute to
            // outputs.
            //   This is not idiomatic in TypeScript. The info regarding whether we are
            //   in a learning (i.e., training) phase for RNN is passed in a different
            //   way.
            var perStepOutputs = [];
            var lastOutput;
            var states = initialStates;
            var timeSteps = inputs.shape[0];
            var perStepInputs = tfc.unstack(inputs);
            var perStepMasks;
            if (mask != null) {
                perStepMasks = tfc.unstack(mask);
            }
            var _loop_1 = function (t) {
                var currentInput = perStepInputs[t];
                var stepOutputs = tfc.tidy(function () { return stepFunction(currentInput, states); });
                if (mask == null) {
                    lastOutput = stepOutputs[0];
                    states = stepOutputs[1];
                }
                else {
                    var maskedOutputs = tfc.tidy(function () {
                        var stepMask = perStepMasks[t];
                        var negStepMask = tfc.onesLike(stepMask).sub(stepMask);
                        // TODO(cais): Would tfc.where() be better for performance?
                        var output = stepOutputs[0].mul(stepMask).addStrict(states[0].mul(negStepMask));
                        var newStates = states.map(function (state, i) {
                            return stepOutputs[1][i].mul(stepMask).addStrict(state.mul(negStepMask));
                        });
                        return { output: output, newStates: newStates };
                    });
                    lastOutput = maskedOutputs.output;
                    states = maskedOutputs.newStates;
                }
                if (needPerStepOutputs) {
                    perStepOutputs.push(lastOutput);
                }
            };
            for (var t = 0; t < timeSteps; ++t) {
                _loop_1(t);
            }
            var outputs;
            if (needPerStepOutputs) {
                var axis = 1;
                outputs = tfc.stack(perStepOutputs, axis);
            }
            return [lastOutput, outputs, states];
        });
    }
    var RNN = /** @class */ (function (_super) {
        __extends(RNN, _super);
        function RNN(args) {
            var _this = _super.call(this, args) || this;
            var cell;
            if (args.cell == null) {
                throw new ValueError('cell property is missing for the constructor of RNN.');
            }
            else if (Array.isArray(args.cell)) {
                cell = new StackedRNNCells({ cells: args.cell });
            }
            else {
                cell = args.cell;
            }
            if (cell.stateSize == null) {
                throw new ValueError('The RNN cell should have an attribute `stateSize` (tuple of ' +
                    'integers, one integer per RNN state).');
            }
            _this.cell = cell;
            _this.returnSequences =
                args.returnSequences == null ? false : args.returnSequences;
            _this.returnState = args.returnState == null ? false : args.returnState;
            _this.goBackwards = args.goBackwards == null ? false : args.goBackwards;
            _this._stateful = args.stateful == null ? false : args.stateful;
            _this.unroll = args.unroll == null ? false : args.unroll;
            _this.supportsMasking = true;
            _this.inputSpec = [new InputSpec({ ndim: 3 })];
            _this.stateSpec = null;
            _this.states_ = null;
            // TODO(cais): Add constantsSpec and numConstants.
            _this.numConstants = null;
            // TODO(cais): Look into the use of initial_state in the kwargs of the
            //   constructor.
            _this.keptStates = [];
            return _this;
        }
        // Porting Note: This is the equivalent of `RNN.states` property getter in
        //   PyKeras.
        RNN.prototype.getStates = function () {
            if (this.states_ == null) {
                var numStates = Array.isArray(this.cell.stateSize) ? this.cell.stateSize.length : 1;
                return range(0, numStates).map(function (x) { return null; });
            }
            else {
                return this.states_;
            }
        };
        // Porting Note: This is the equivalent of the `RNN.states` property setter in
        //   PyKeras.
        RNN.prototype.setStates = function (states) {
            this.states_ = states;
        };
        RNN.prototype.computeOutputShape = function (inputShape) {
            if (isArrayOfShapes(inputShape)) {
                inputShape = inputShape[0];
            }
            inputShape = inputShape;
            // TODO(cais): Remove the casting once stacked RNN cells become supported.
            var stateSize = this.cell.stateSize;
            if (!Array.isArray(stateSize)) {
                stateSize = [stateSize];
            }
            var outputDim = stateSize[0];
            var outputShape;
            if (this.returnSequences) {
                outputShape = [inputShape[0], inputShape[1], outputDim];
            }
            else {
                outputShape = [inputShape[0], outputDim];
            }
            if (this.returnState) {
                var stateShape = [];
                for (var _i = 0, stateSize_1 = stateSize; _i < stateSize_1.length; _i++) {
                    var dim = stateSize_1[_i];
                    stateShape.push([inputShape[0], dim]);
                }
                return [outputShape].concat(stateShape);
            }
            else {
                return outputShape;
            }
        };
        RNN.prototype.computeMask = function (inputs, mask) {
            var _this = this;
            return tfc.tidy(function () {
                if (Array.isArray(mask)) {
                    mask = mask[0];
                }
                var outputMask = _this.returnSequences ? mask : null;
                if (_this.returnState) {
                    var stateMask = _this.states.map(function (s) { return null; });
                    return [outputMask].concat(stateMask);
                }
                else {
                    return outputMask;
                }
            });
        };
        Object.defineProperty(RNN.prototype, "states", {
            /**
             * Get the current state tensors of the RNN.
             *
             * If the state hasn't been set, return an array of `null`s of the correct
             * length.
             */
            get: function () {
                if (this.states_ == null) {
                    var numStates = Array.isArray(this.cell.stateSize) ? this.cell.stateSize.length : 1;
                    var output = [];
                    for (var i = 0; i < numStates; ++i) {
                        output.push(null);
                    }
                    return output;
                }
                else {
                    return this.states_;
                }
            },
            set: function (s) {
                this.states_ = s;
            },
            enumerable: true,
            configurable: true
        });
        RNN.prototype.build = function (inputShape) {
            // Note inputShape will be an Array of Shapes of initial states and
            // constants if these are passed in apply().
            var constantShape = null;
            if (this.numConstants != null) {
                throw new NotImplementedError('Constants support is not implemented in RNN yet.');
            }
            if (isArrayOfShapes(inputShape)) {
                inputShape = inputShape[0];
            }
            inputShape = inputShape;
            var batchSize = this.stateful ? inputShape[0] : null;
            var inputDim = inputShape[inputShape.length - 1];
            this.inputSpec[0] = new InputSpec({ shape: [batchSize, null, inputDim] });
            // Allow cell (if RNNCell Layer) to build before we set or validate
            // stateSpec.
            var stepInputShape = [inputShape[0]].concat(inputShape.slice(2));
            if (constantShape != null) {
                throw new NotImplementedError('Constants support is not implemented in RNN yet.');
            }
            else {
                this.cell.build(stepInputShape);
            }
            // Set or validate stateSpec.
            var stateSize;
            if (Array.isArray(this.cell.stateSize)) {
                stateSize = this.cell.stateSize;
            }
            else {
                stateSize = [this.cell.stateSize];
            }
            if (this.stateSpec != null) {
                if (!tfc.util.arraysEqual(this.stateSpec.map(function (spec) { return spec.shape[spec.shape.length - 1]; }), stateSize)) {
                    throw new ValueError("An initialState was passed that is not compatible with " +
                        ("cell.stateSize. Received stateSpec=" + this.stateSpec + "; ") +
                        ("However cell.stateSize is " + this.cell.stateSize));
                }
            }
            else {
                this.stateSpec =
                    stateSize.map(function (dim) { return new InputSpec({ shape: [null, dim] }); });
            }
            if (this.stateful) {
                this.resetStates();
            }
        };
        /**
         * Reset the state tensors of the RNN.
         *
         * If the `states` argument is `undefined` or `null`, will set the
         * state tensor(s) of the RNN to all-zero tensors of the appropriate
         * shape(s).
         *
         * If `states` is provided, will set the state tensors of the RNN to its
         * value.
         *
         * @param states Optional externally-provided initial states.
         * @param training Whether this call is done during training. For stateful
         *   RNNs, this affects whether the old states are kept or discarded. In
         *   particular, if `training` is `true`, the old states will be kept so
         *   that subsequent backpropgataion through time (BPTT) may work properly.
         *   Else, the old states will be discarded.
         */
        RNN.prototype.resetStates = function (states, training) {
            var _this = this;
            if (training === void 0) { training = false; }
            tfc.tidy(function () {
                if (!_this.stateful) {
                    throw new AttributeError('Cannot call resetStates() on an RNN Layer that is not stateful.');
                }
                var batchSize = _this.inputSpec[0].shape[0];
                if (batchSize == null) {
                    throw new ValueError('If an RNN is stateful, it needs to know its batch size. Specify ' +
                        'the batch size of your input tensors: \n' +
                        '- If using a Sequential model, specify the batch size by ' +
                        'passing a `batchInputShape` option to your first layer.\n' +
                        '- If using the functional API, specify the batch size by ' +
                        'passing a `batchShape` option to your Input layer.');
                }
                // Initialize state if null.
                if (_this.states_ == null) {
                    if (Array.isArray(_this.cell.stateSize)) {
                        _this.states_ =
                            _this.cell.stateSize.map(function (dim) { return tfc.zeros([batchSize, dim]); });
                    }
                    else {
                        _this.states_ = [tfc.zeros([batchSize, _this.cell.stateSize])];
                    }
                }
                else if (states == null) {
                    // Dispose old state tensors.
                    tfc.dispose(_this.states_);
                    // For stateful RNNs, fully dispose kept old states.
                    if (_this.keptStates != null) {
                        tfc.dispose(_this.keptStates);
                        _this.keptStates = [];
                    }
                    if (Array.isArray(_this.cell.stateSize)) {
                        _this.states_ =
                            _this.cell.stateSize.map(function (dim) { return tfc.zeros([batchSize, dim]); });
                    }
                    else {
                        _this.states_[0] = tfc.zeros([batchSize, _this.cell.stateSize]);
                    }
                }
                else {
                    if (!Array.isArray(states)) {
                        states = [states];
                    }
                    if (states.length !== _this.states_.length) {
                        throw new ValueError("Layer " + _this.name + " expects " + _this.states_.length + " state(s), " +
                            ("but it received " + states.length + " state value(s). Input ") +
                            ("received: " + states));
                    }
                    if (training === true) {
                        // Store old state tensors for complete disposal later, i.e., during
                        // the next no-arg call to this method. We do not dispose the old
                        // states immediately because that BPTT (among other things) require
                        // them.
                        _this.keptStates.push(_this.states_.slice());
                    }
                    else {
                        tfc.dispose(_this.states_);
                    }
                    for (var index = 0; index < _this.states_.length; ++index) {
                        var value = states[index];
                        var dim = Array.isArray(_this.cell.stateSize) ?
                            _this.cell.stateSize[index] :
                            _this.cell.stateSize;
                        var expectedShape = [batchSize, dim];
                        if (!tfc.util.arraysEqual(value.shape, expectedShape)) {
                            throw new ValueError("State " + index + " is incompatible with layer " + _this.name + ": " +
                                ("expected shape=" + expectedShape + ", received shape=" + value.shape));
                        }
                        _this.states_[index] = value;
                    }
                }
                _this.states_ = _this.states_.map(function (state) { return tfc.keep(state.clone()); });
            });
        };
        RNN.prototype.apply = function (inputs, kwargs) {
            // TODO(cais): Figure out whether initialState is in kwargs or inputs.
            var initialState = kwargs == null ? null : kwargs['initialState'];
            var constants = kwargs == null ? null : kwargs['constants'];
            if (kwargs == null) {
                kwargs = {};
            }
            var standardized = standardizeArgs(inputs, initialState, constants, this.numConstants);
            inputs = standardized.inputs;
            initialState = standardized.initialState;
            constants = standardized.constants;
            // If any of `initial_state` or `constants` are specified and are
            // `tf.SymbolicTensor`s, then add them to the inputs and temporarily modify
            // the input_spec to include them.
            var additionalInputs = [];
            var additionalSpecs = [];
            if (initialState != null) {
                kwargs['initialState'] = initialState;
                additionalInputs = additionalInputs.concat(initialState);
                this.stateSpec = [];
                for (var _i = 0, initialState_1 = initialState; _i < initialState_1.length; _i++) {
                    var state = initialState_1[_i];
                    this.stateSpec.push(new InputSpec({ shape: state.shape }));
                }
                // TODO(cais): Use the following instead.
                // this.stateSpec = initialState.map(state => new InputSpec({shape:
                // state.shape}));
                additionalSpecs = additionalSpecs.concat(this.stateSpec);
            }
            if (constants != null) {
                kwargs['constants'] = constants;
                additionalInputs = additionalInputs.concat(constants);
                // TODO(cais): Add this.constantsSpec.
                this.numConstants = constants.length;
            }
            var isTensor = additionalInputs[0] instanceof SymbolicTensor;
            if (isTensor) {
                // Compute full input spec, including state and constants.
                var fullInput = [inputs].concat(additionalInputs);
                var fullInputSpec = this.inputSpec.concat(additionalSpecs);
                // Perform the call with temporarily replaced inputSpec.
                var originalInputSpec = this.inputSpec;
                this.inputSpec = fullInputSpec;
                var output = _super.prototype.apply.call(this, fullInput, kwargs);
                this.inputSpec = originalInputSpec;
                return output;
            }
            else {
                return _super.prototype.apply.call(this, inputs, kwargs);
            }
        };
        // tslint:disable-next-line:no-any
        RNN.prototype.call = function (inputs, kwargs) {
            var _this = this;
            // Input shape: `[samples, time (padded with zeros), input_dim]`.
            // Note that the .build() method of subclasses **must** define
            // this.inputSpec and this.stateSpec owith complete input shapes.
            return tfc.tidy(function () {
                var mask = kwargs == null ? null : kwargs['mask'];
                var training = kwargs == null ? null : kwargs['training'];
                var initialState = kwargs == null ? null : kwargs['initialState'];
                inputs = getExactlyOneTensor(inputs);
                if (initialState == null) {
                    if (_this.stateful) {
                        initialState = _this.states_;
                    }
                    else {
                        initialState = _this.getInitialState(inputs);
                    }
                }
                var numStates = Array.isArray(_this.cell.stateSize) ? _this.cell.stateSize.length : 1;
                if (initialState.length !== numStates) {
                    throw new ValueError("RNN Layer has " + numStates + " state(s) but was passed " +
                        (initialState.length + " initial state(s)."));
                }
                if (_this.unroll) {
                    console.warn('Ignoring unroll = true for RNN layer, due to imperative backend.');
                }
                var cellCallKwargs = { training: training };
                // TODO(cais): Add support for constants.
                var step = function (inputs, states) {
                    // `inputs` and `states` are concatenated to form a single `Array` of
                    // `tf.Tensor`s as the input to `cell.call()`.
                    var outputs = _this.cell.call([inputs].concat(states), cellCallKwargs);
                    // Marshall the return value into output and new states.
                    return [outputs[0], outputs.slice(1)];
                };
                // TODO(cais): Add support for constants.
                var rnnOutputs = rnn(step, inputs, initialState, _this.goBackwards, mask, null, _this.unroll, _this.returnSequences);
                var lastOutput = rnnOutputs[0];
                var outputs = rnnOutputs[1];
                var states = rnnOutputs[2];
                if (_this.stateful) {
                    _this.resetStates(states, training);
                }
                var output = _this.returnSequences ? outputs : lastOutput;
                // TODO(cais): Porperty set learning phase flag.
                if (_this.returnState) {
                    return [output].concat(states);
                }
                else {
                    return output;
                }
            });
        };
        RNN.prototype.getInitialState = function (inputs) {
            var _this = this;
            return tfc.tidy(function () {
                // Build an all-zero tensor of shape [samples, outputDim].
                // [Samples, timeSteps, inputDim].
                var initialState = tfc.zeros(inputs.shape);
                // [Samples].
                initialState = tfc.sum(initialState, [1, 2]);
                initialState = expandDims(initialState); // [Samples, 1].
                if (Array.isArray(_this.cell.stateSize)) {
                    return _this.cell.stateSize.map(function (dim) { return dim > 1 ? tile(initialState, [1, dim]) : initialState; });
                }
                else {
                    return _this.cell.stateSize > 1 ?
                        [tile(initialState, [1, _this.cell.stateSize])] :
                        [initialState];
                }
            });
        };
        Object.defineProperty(RNN.prototype, "trainableWeights", {
            get: function () {
                if (!this.trainable) {
                    return [];
                }
                // Porting Note: In TypeScript, `this` is always an instance of `Layer`.
                return this.cell.trainableWeights;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RNN.prototype, "nonTrainableWeights", {
            get: function () {
                // Porting Note: In TypeScript, `this` is always an instance of `Layer`.
                if (!this.trainable) {
                    return this.cell.weights;
                }
                return this.cell.nonTrainableWeights;
            },
            enumerable: true,
            configurable: true
        });
        RNN.prototype.setFastWeightInitDuringBuild = function (value) {
            _super.prototype.setFastWeightInitDuringBuild.call(this, value);
            if (this.cell != null) {
                this.cell.setFastWeightInitDuringBuild(value);
            }
        };
        RNN.prototype.getConfig = function () {
            var config = {
                returnSequences: this.returnSequences,
                returnState: this.returnState,
                goBackwards: this.goBackwards,
                stateful: this.stateful,
                unroll: this.unroll,
            };
            if (this.numConstants != null) {
                config['numConstants'] = this.numConstants;
            }
            var cellConfig = this.cell.getConfig();
            config['cell'] = {
                'className': this.cell.getClassName(),
                'config': cellConfig,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        RNN.fromConfig = function (cls, config, customObjects) {
            if (customObjects === void 0) { customObjects = {}; }
            var cellConfig = config['cell'];
            var cell = deserialize(cellConfig, customObjects);
            return new cls(Object.assign(config, { cell: cell }));
        };
        /** @nocollapse */
        RNN.className = 'RNN';
        return RNN;
    }(Layer));
    tfc.serialization.registerClass(RNN);
    /**
     * An RNNCell layer.
     */
    // Porting Note: This is a common parent class for RNN cells. There is no
    // equivalent of this in PyKeras. Having a common parent class forgoes the
    //  need for `has_attr(cell, ...)` checks or its TypeScript equivalent.
    /** @doc {heading: 'Layers', subheading: 'Classes'} */
    var RNNCell = /** @class */ (function (_super) {
        __extends(RNNCell, _super);
        function RNNCell() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RNNCell;
    }(Layer));
    var SimpleRNNCell = /** @class */ (function (_super) {
        __extends(SimpleRNNCell, _super);
        function SimpleRNNCell(args) {
            var _this = _super.call(this, args) || this;
            _this.DEFAULT_ACTIVATION = 'tanh';
            _this.DEFAULT_KERNEL_INITIALIZER = 'glorotNormal';
            _this.DEFAULT_RECURRENT_INITIALIZER = 'orthogonal';
            _this.DEFAULT_BIAS_INITIALIZER = 'zeros';
            _this.units = args.units;
            assertPositiveInteger(_this.units, "units");
            _this.activation = getActivation(args.activation == null ? _this.DEFAULT_ACTIVATION : args.activation);
            _this.useBias = args.useBias == null ? true : args.useBias;
            _this.kernelInitializer = getInitializer(args.kernelInitializer || _this.DEFAULT_KERNEL_INITIALIZER);
            _this.recurrentInitializer = getInitializer(args.recurrentInitializer || _this.DEFAULT_RECURRENT_INITIALIZER);
            _this.biasInitializer =
                getInitializer(args.biasInitializer || _this.DEFAULT_BIAS_INITIALIZER);
            _this.kernelRegularizer = getRegularizer(args.kernelRegularizer);
            _this.recurrentRegularizer = getRegularizer(args.recurrentRegularizer);
            _this.biasRegularizer = getRegularizer(args.biasRegularizer);
            _this.kernelConstraint = getConstraint(args.kernelConstraint);
            _this.recurrentConstraint = getConstraint(args.recurrentConstraint);
            _this.biasConstraint = getConstraint(args.biasConstraint);
            _this.dropout = min([1, max([0, args.dropout == null ? 0 : args.dropout])]);
            _this.recurrentDropout = min([
                1,
                max([0, args.recurrentDropout == null ? 0 : args.recurrentDropout])
            ]);
            _this.stateSize = _this.units;
            _this.dropoutMask = null;
            _this.recurrentDropoutMask = null;
            return _this;
        }
        SimpleRNNCell.prototype.build = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            // TODO(cais): Use regularizer.
            this.kernel = this.addWeight('kernel', [inputShape[inputShape.length - 1], this.units], null, this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
            this.recurrentKernel = this.addWeight('recurrent_kernel', [this.units, this.units], null, this.recurrentInitializer, this.recurrentRegularizer, true, this.recurrentConstraint);
            if (this.useBias) {
                this.bias = this.addWeight('bias', [this.units], null, this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
            }
            else {
                this.bias = null;
            }
            this.built = true;
        };
        // Porting Note: PyKeras' equivalent of this method takes two tensor inputs:
        //   `inputs` and `states`. Here, the two tensors are combined into an
        //   `Tensor[]` Array as the first input argument.
        //   Similarly, PyKeras' equivalent of this method returns two values:
        //    `output` and `[output]`. Here the two are combined into one length-2
        //    `Tensor[]`, consisting of `output` repeated.
        SimpleRNNCell.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                inputs = inputs;
                if (inputs.length !== 2) {
                    throw new ValueError("SimpleRNNCell expects 2 input Tensors, got " + inputs.length + ".");
                }
                var prevOutput = inputs[1];
                inputs = inputs[0];
                var training = kwargs['training'] == null ? false : kwargs['training'];
                if (0 < _this.dropout && _this.dropout < 1 && _this.dropoutMask == null) {
                    _this.dropoutMask = generateDropoutMask(function () { return tfc.onesLike(inputs); }, _this.dropout, training);
                }
                if (0 < _this.recurrentDropout && _this.recurrentDropout < 1 &&
                    _this.recurrentDropoutMask == null) {
                    _this.recurrentDropoutMask =
                        generateDropoutMask(function () { return tfc.onesLike(prevOutput); }, _this.recurrentDropout, training);
                }
                var h;
                var dpMask = _this.dropoutMask;
                var recDpMask = _this.recurrentDropoutMask;
                if (dpMask != null) {
                    h = dot(tfc.mul(inputs, dpMask), _this.kernel.read());
                }
                else {
                    h = dot(inputs, _this.kernel.read());
                }
                if (_this.bias != null) {
                    h = biasAdd(h, _this.bias.read());
                }
                if (recDpMask != null) {
                    prevOutput = tfc.mul(prevOutput, recDpMask);
                }
                var output = tfc.add(h, dot(prevOutput, _this.recurrentKernel.read()));
                if (_this.activation != null) {
                    output = _this.activation.apply(output);
                }
                // TODO(cais): Properly set learning phase on output tensor?
                return [output, output];
            });
        };
        SimpleRNNCell.prototype.getConfig = function () {
            var config = {
                units: this.units,
                activation: serializeActivation(this.activation),
                useBias: this.useBias,
                kernelInitializer: serializeInitializer(this.kernelInitializer),
                recurrentInitializer: serializeInitializer(this.recurrentInitializer),
                biasInitializer: serializeInitializer(this.biasInitializer),
                kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
                recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
                biasRegularizer: serializeRegularizer(this.biasRegularizer),
                activityRegularizer: serializeRegularizer(this.activityRegularizer),
                kernelConstraint: serializeConstraint(this.kernelConstraint),
                recurrentConstraint: serializeConstraint(this.recurrentConstraint),
                biasConstraint: serializeConstraint(this.biasConstraint),
                dropout: this.dropout,
                recurrentDropout: this.recurrentDropout,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        SimpleRNNCell.className = 'SimpleRNNCell';
        return SimpleRNNCell;
    }(RNNCell));
    tfc.serialization.registerClass(SimpleRNNCell);
    var SimpleRNN = /** @class */ (function (_super) {
        __extends(SimpleRNN, _super);
        function SimpleRNN(args) {
            var _this = this;
            args.cell = new SimpleRNNCell(args);
            _this = _super.call(this, args) || this;
            return _this;
            // TODO(cais): Add activityRegularizer.
        }
        SimpleRNN.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                if (_this.cell.dropoutMask != null) {
                    tfc.dispose(_this.cell.dropoutMask);
                    _this.cell.dropoutMask = null;
                }
                if (_this.cell.recurrentDropoutMask != null) {
                    tfc.dispose(_this.cell.recurrentDropoutMask);
                    _this.cell.recurrentDropoutMask = null;
                }
                var mask = kwargs == null ? null : kwargs['mask'];
                var training = kwargs == null ? null : kwargs['training'];
                var initialState = kwargs == null ? null : kwargs['initialState'];
                return _super.prototype.call.call(_this, inputs, { mask: mask, training: training, initialState: initialState });
            });
        };
        Object.defineProperty(SimpleRNN.prototype, "units", {
            // TODO(cais): Research possibility of refactoring out the tedious all
            //   the getters that delegate to `this.cell` below.
            get: function () {
                return this.cell.units;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "activation", {
            get: function () {
                return this.cell.activation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "useBias", {
            get: function () {
                return this.cell.useBias;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "kernelInitializer", {
            get: function () {
                return this.cell.kernelInitializer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "recurrentInitializer", {
            get: function () {
                return this.cell.recurrentInitializer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "biasInitializer", {
            get: function () {
                return this.cell.biasInitializer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "kernelRegularizer", {
            get: function () {
                return this.cell.kernelRegularizer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "recurrentRegularizer", {
            get: function () {
                return this.cell.recurrentRegularizer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "biasRegularizer", {
            get: function () {
                return this.cell.biasRegularizer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "kernelConstraint", {
            get: function () {
                return this.cell.kernelConstraint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "recurrentConstraint", {
            get: function () {
                return this.cell.recurrentConstraint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "biasConstraint", {
            get: function () {
                return this.cell.biasConstraint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "dropout", {
            get: function () {
                return this.cell.dropout;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SimpleRNN.prototype, "recurrentDropout", {
            get: function () {
                return this.cell.recurrentDropout;
            },
            enumerable: true,
            configurable: true
        });
        SimpleRNN.prototype.getConfig = function () {
            var config = {
                units: this.units,
                activation: serializeActivation(this.activation),
                useBias: this.useBias,
                kernelInitializer: serializeInitializer(this.kernelInitializer),
                recurrentInitializer: serializeInitializer(this.recurrentInitializer),
                biasInitializer: serializeInitializer(this.biasInitializer),
                kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
                recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
                biasRegularizer: serializeRegularizer(this.biasRegularizer),
                activityRegularizer: serializeRegularizer(this.activityRegularizer),
                kernelConstraint: serializeConstraint(this.kernelConstraint),
                recurrentConstraint: serializeConstraint(this.recurrentConstraint),
                biasConstraint: serializeConstraint(this.biasConstraint),
                dropout: this.dropout,
                recurrentDropout: this.recurrentDropout,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            delete baseConfig['cell'];
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        SimpleRNN.fromConfig = function (cls, config) {
            return new cls(config);
        };
        /** @nocollapse */
        SimpleRNN.className = 'SimpleRNN';
        return SimpleRNN;
    }(RNN));
    tfc.serialization.registerClass(SimpleRNN);
    var GRUCell = /** @class */ (function (_super) {
        __extends(GRUCell, _super);
        function GRUCell(args) {
            var _this = _super.call(this, args) || this;
            _this.DEFAULT_ACTIVATION = 'tanh';
            _this.DEFAULT_RECURRENT_ACTIVATION = 'hardSigmoid';
            _this.DEFAULT_KERNEL_INITIALIZER = 'glorotNormal';
            _this.DEFAULT_RECURRENT_INITIALIZER = 'orthogonal';
            _this.DEFAULT_BIAS_INITIALIZER = 'zeros';
            _this.units = args.units;
            assertPositiveInteger(_this.units, 'units');
            _this.activation = getActivation(args.activation === undefined ? _this.DEFAULT_ACTIVATION :
                args.activation);
            _this.recurrentActivation = getActivation(args.recurrentActivation === undefined ?
                _this.DEFAULT_RECURRENT_ACTIVATION :
                args.recurrentActivation);
            _this.useBias = args.useBias == null ? true : args.useBias;
            _this.kernelInitializer = getInitializer(args.kernelInitializer || _this.DEFAULT_KERNEL_INITIALIZER);
            _this.recurrentInitializer = getInitializer(args.recurrentInitializer || _this.DEFAULT_RECURRENT_INITIALIZER);
            _this.biasInitializer =
                getInitializer(args.biasInitializer || _this.DEFAULT_BIAS_INITIALIZER);
            _this.kernelRegularizer = getRegularizer(args.kernelRegularizer);
            _this.recurrentRegularizer = getRegularizer(args.recurrentRegularizer);
            _this.biasRegularizer = getRegularizer(args.biasRegularizer);
            _this.kernelConstraint = getConstraint(args.kernelConstraint);
            _this.recurrentConstraint = getConstraint(args.recurrentConstraint);
            _this.biasConstraint = getConstraint(args.biasConstraint);
            _this.dropout = min([1, max([0, args.dropout == null ? 0 : args.dropout])]);
            _this.recurrentDropout = min([
                1,
                max([0, args.recurrentDropout == null ? 0 : args.recurrentDropout])
            ]);
            _this.implementation = args.implementation;
            _this.stateSize = _this.units;
            _this.dropoutMask = null;
            _this.recurrentDropoutMask = null;
            return _this;
        }
        GRUCell.prototype.build = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            var inputDim = inputShape[inputShape.length - 1];
            this.kernel = this.addWeight('kernel', [inputDim, this.units * 3], null, this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
            this.recurrentKernel = this.addWeight('recurrent_kernel', [this.units, this.units * 3], null, this.recurrentInitializer, this.recurrentRegularizer, true, this.recurrentConstraint);
            if (this.useBias) {
                this.bias = this.addWeight('bias', [this.units * 3], null, this.biasInitializer, this.biasRegularizer, true, this.biasConstraint);
            }
            else {
                this.bias = null;
            }
            // Porting Notes: Unlike the PyKeras implementation, we perform slicing
            //   of the weights and bias in the call() method, at execution time.
            this.built = true;
        };
        GRUCell.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                inputs = inputs;
                if (inputs.length !== 2) {
                    throw new ValueError("GRUCell expects 2 input Tensors (inputs, h, c), got " +
                        (inputs.length + "."));
                }
                var training = kwargs['training'] == null ? false : kwargs['training'];
                var hTMinus1 = inputs[1]; // Previous memory state.
                inputs = inputs[0];
                // Note: For superior performance, TensorFlow.js always uses
                // implementation 2, regardless of the actual value of
                // config.implementation.
                if (0 < _this.dropout && _this.dropout < 1 && _this.dropoutMask == null) {
                    _this.dropoutMask = generateDropoutMask(function () { return tfc.onesLike(inputs); }, _this.dropout, training, 3);
                }
                if (0 < _this.recurrentDropout && _this.recurrentDropout < 1 &&
                    _this.recurrentDropoutMask == null) {
                    _this.recurrentDropoutMask =
                        generateDropoutMask(function () { return tfc.onesLike(hTMinus1); }, _this.recurrentDropout, training, 3);
                }
                var dpMask = _this.dropoutMask;
                var recDpMask = _this.recurrentDropoutMask;
                var z;
                var r;
                var hh;
                if (0 < _this.dropout && _this.dropout < 1) {
                    inputs = tfc.mul(inputs, dpMask[0]);
                }
                var matrixX = dot(inputs, _this.kernel.read());
                if (_this.useBias) {
                    matrixX = biasAdd(matrixX, _this.bias.read());
                }
                if (0 < _this.recurrentDropout && _this.recurrentDropout < 1) {
                    hTMinus1 = tfc.mul(hTMinus1, recDpMask[0]);
                }
                var recurrentKernelValue = _this.recurrentKernel.read();
                var _a = tfc.split(recurrentKernelValue, [2 * _this.units, _this.units], recurrentKernelValue.rank - 1), rk1 = _a[0], rk2 = _a[1];
                var matrixInner = dot(hTMinus1, rk1);
                var _b = tfc.split(matrixX, 3, matrixX.rank - 1), xZ = _b[0], xR = _b[1], xH = _b[2];
                var _c = tfc.split(matrixInner, 2, matrixInner.rank - 1), recurrentZ = _c[0], recurrentR = _c[1];
                z = _this.recurrentActivation.apply(tfc.add(xZ, recurrentZ));
                r = _this.recurrentActivation.apply(tfc.add(xR, recurrentR));
                var recurrentH = dot(tfc.mul(r, hTMinus1), rk2);
                hh = _this.activation.apply(tfc.add(xH, recurrentH));
                var h = tfc.add(tfc.mul(z, hTMinus1), tfc.mul(tfc.add(1, tfc.neg(z)), hh));
                // TODO(cais): Add use_learning_phase flag properly.
                return [h, h];
            });
        };
        GRUCell.prototype.getConfig = function () {
            var config = {
                units: this.units,
                activation: serializeActivation(this.activation),
                recurrentActivation: serializeActivation(this.recurrentActivation),
                useBias: this.useBias,
                kernelInitializer: serializeInitializer(this.kernelInitializer),
                recurrentInitializer: serializeInitializer(this.recurrentInitializer),
                biasInitializer: serializeInitializer(this.biasInitializer),
                kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
                recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
                biasRegularizer: serializeRegularizer(this.biasRegularizer),
                activityRegularizer: serializeRegularizer(this.activityRegularizer),
                kernelConstraint: serializeConstraint(this.kernelConstraint),
                recurrentConstraint: serializeConstraint(this.recurrentConstraint),
                biasConstraint: serializeConstraint(this.biasConstraint),
                dropout: this.dropout,
                recurrentDropout: this.recurrentDropout,
                implementation: this.implementation,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        GRUCell.className = 'GRUCell';
        return GRUCell;
    }(RNNCell));
    tfc.serialization.registerClass(GRUCell);
    var GRU = /** @class */ (function (_super) {
        __extends(GRU, _super);
        function GRU(args) {
            var _this = this;
            if (args.implementation === 0) {
                console.warn('`implementation=0` has been deprecated, and now defaults to ' +
                    '`implementation=1`. Please update your layer call.');
            }
            args.cell = new GRUCell(args);
            _this = _super.call(this, args) || this;
            return _this;
            // TODO(cais): Add activityRegularizer.
        }
        GRU.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                if (_this.cell.dropoutMask != null) {
                    tfc.dispose(_this.cell.dropoutMask);
                    _this.cell.dropoutMask = null;
                }
                if (_this.cell.recurrentDropoutMask != null) {
                    tfc.dispose(_this.cell.recurrentDropoutMask);
                    _this.cell.recurrentDropoutMask = null;
                }
                var mask = kwargs == null ? null : kwargs['mask'];
                var training = kwargs == null ? null : kwargs['training'];
                var initialState = kwargs == null ? null : kwargs['initialState'];
                return _super.prototype.call.call(_this, inputs, { mask: mask, training: training, initialState: initialState });
            });
        };
        Object.defineProperty(GRU.prototype, "units", {
            get: function () {
                return this.cell.units;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "activation", {
            get: function () {
                return this.cell.activation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "recurrentActivation", {
            get: function () {
                return this.cell.recurrentActivation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "useBias", {
            get: function () {
                return this.cell.useBias;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "kernelInitializer", {
            get: function () {
                return this.cell.kernelInitializer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "recurrentInitializer", {
            get: function () {
                return this.cell.recurrentInitializer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "biasInitializer", {
            get: function () {
                return this.cell.biasInitializer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "kernelRegularizer", {
            get: function () {
                return this.cell.kernelRegularizer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "recurrentRegularizer", {
            get: function () {
                return this.cell.recurrentRegularizer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "biasRegularizer", {
            get: function () {
                return this.cell.biasRegularizer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "kernelConstraint", {
            get: function () {
                return this.cell.kernelConstraint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "recurrentConstraint", {
            get: function () {
                return this.cell.recurrentConstraint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "biasConstraint", {
            get: function () {
                return this.cell.biasConstraint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "dropout", {
            get: function () {
                return this.cell.dropout;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "recurrentDropout", {
            get: function () {
                return this.cell.recurrentDropout;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRU.prototype, "implementation", {
            get: function () {
                return this.cell.implementation;
            },
            enumerable: true,
            configurable: true
        });
        GRU.prototype.getConfig = function () {
            var config = {
                units: this.units,
                activation: serializeActivation(this.activation),
                recurrentActivation: serializeActivation(this.recurrentActivation),
                useBias: this.useBias,
                kernelInitializer: serializeInitializer(this.kernelInitializer),
                recurrentInitializer: serializeInitializer(this.recurrentInitializer),
                biasInitializer: serializeInitializer(this.biasInitializer),
                kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
                recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
                biasRegularizer: serializeRegularizer(this.biasRegularizer),
                activityRegularizer: serializeRegularizer(this.activityRegularizer),
                kernelConstraint: serializeConstraint(this.kernelConstraint),
                recurrentConstraint: serializeConstraint(this.recurrentConstraint),
                biasConstraint: serializeConstraint(this.biasConstraint),
                dropout: this.dropout,
                recurrentDropout: this.recurrentDropout,
                implementation: this.implementation,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            delete baseConfig['cell'];
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        GRU.fromConfig = function (cls, config) {
            if (config['implmentation'] === 0) {
                config['implementation'] = 1;
            }
            return new cls(config);
        };
        /** @nocollapse */
        GRU.className = 'GRU';
        return GRU;
    }(RNN));
    tfc.serialization.registerClass(GRU);
    var LSTMCell = /** @class */ (function (_super) {
        __extends(LSTMCell, _super);
        function LSTMCell(args) {
            var _this = _super.call(this, args) || this;
            _this.DEFAULT_ACTIVATION = 'tanh';
            _this.DEFAULT_RECURRENT_ACTIVATION = 'hardSigmoid';
            _this.DEFAULT_KERNEL_INITIALIZER = 'glorotNormal';
            _this.DEFAULT_RECURRENT_INITIALIZER = 'orthogonal';
            _this.DEFAULT_BIAS_INITIALIZER = 'zeros';
            _this.units = args.units;
            assertPositiveInteger(_this.units, 'units');
            _this.activation = getActivation(args.activation === undefined ? _this.DEFAULT_ACTIVATION :
                args.activation);
            _this.recurrentActivation = getActivation(args.recurrentActivation === undefined ?
                _this.DEFAULT_RECURRENT_ACTIVATION :
                args.recurrentActivation);
            _this.useBias = args.useBias == null ? true : args.useBias;
            _this.kernelInitializer = getInitializer(args.kernelInitializer || _this.DEFAULT_KERNEL_INITIALIZER);
            _this.recurrentInitializer = getInitializer(args.recurrentInitializer || _this.DEFAULT_RECURRENT_INITIALIZER);
            _this.biasInitializer =
                getInitializer(args.biasInitializer || _this.DEFAULT_BIAS_INITIALIZER);
            _this.unitForgetBias = args.unitForgetBias;
            _this.kernelRegularizer = getRegularizer(args.kernelRegularizer);
            _this.recurrentRegularizer = getRegularizer(args.recurrentRegularizer);
            _this.biasRegularizer = getRegularizer(args.biasRegularizer);
            _this.kernelConstraint = getConstraint(args.kernelConstraint);
            _this.recurrentConstraint = getConstraint(args.recurrentConstraint);
            _this.biasConstraint = getConstraint(args.biasConstraint);
            _this.dropout = min([1, max([0, args.dropout == null ? 0 : args.dropout])]);
            _this.recurrentDropout = min([
                1,
                max([0, args.recurrentDropout == null ? 0 : args.recurrentDropout])
            ]);
            _this.implementation = args.implementation;
            _this.stateSize = [_this.units, _this.units];
            _this.dropoutMask = null;
            _this.recurrentDropoutMask = null;
            return _this;
        }
        LSTMCell.prototype.build = function (inputShape) {
            var _a;
            inputShape = getExactlyOneShape(inputShape);
            var inputDim = inputShape[inputShape.length - 1];
            this.kernel = this.addWeight('kernel', [inputDim, this.units * 4], null, this.kernelInitializer, this.kernelRegularizer, true, this.kernelConstraint);
            this.recurrentKernel = this.addWeight('recurrent_kernel', [this.units, this.units * 4], null, this.recurrentInitializer, this.recurrentRegularizer, true, this.recurrentConstraint);
            var biasInitializer;
            if (this.useBias) {
                if (this.unitForgetBias) {
                    var capturedBiasInit_1 = this.biasInitializer;
                    var capturedUnits_1 = this.units;
                    biasInitializer = new (_a = /** @class */ (function (_super) {
                            __extends(CustomInit, _super);
                            function CustomInit() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            CustomInit.prototype.apply = function (shape, dtype) {
                                // TODO(cais): More informative variable names?
                                var bI = capturedBiasInit_1.apply([capturedUnits_1]);
                                var bF = (new Ones()).apply([capturedUnits_1]);
                                var bCAndH = capturedBiasInit_1.apply([capturedUnits_1 * 2]);
                                return concatAlongFirstAxis(concatAlongFirstAxis(bI, bF), bCAndH);
                            };
                            return CustomInit;
                        }(Initializer)),
                        /** @nocollapse */
                        _a.className = 'CustomInit',
                        _a)();
                }
                else {
                    biasInitializer = this.biasInitializer;
                }
                this.bias = this.addWeight('bias', [this.units * 4], null, biasInitializer, this.biasRegularizer, true, this.biasConstraint);
            }
            else {
                this.bias = null;
            }
            // Porting Notes: Unlike the PyKeras implementation, we perform slicing
            //   of the weights and bias in the call() method, at execution time.
            this.built = true;
        };
        LSTMCell.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                var training = kwargs['training'] == null ? false : kwargs['training'];
                inputs = inputs;
                if (inputs.length !== 3) {
                    throw new ValueError("LSTMCell expects 3 input Tensors (inputs, h, c), got " +
                        (inputs.length + "."));
                }
                var hTMinus1 = inputs[1]; // Previous memory state.
                var cTMinus1 = inputs[2]; // Previous carry state.
                inputs = inputs[0];
                if (0 < _this.dropout && _this.dropout < 1 && _this.dropoutMask == null) {
                    _this.dropoutMask = generateDropoutMask(function () { return tfc.onesLike(inputs); }, _this.dropout, training, 4);
                }
                if (0 < _this.recurrentDropout && _this.recurrentDropout < 1 &&
                    _this.recurrentDropoutMask == null) {
                    _this.recurrentDropoutMask =
                        generateDropoutMask(function () { return tfc.onesLike(hTMinus1); }, _this.recurrentDropout, training, 4);
                }
                var dpMask = _this.dropoutMask;
                var recDpMask = _this.recurrentDropoutMask;
                // Note: For superior performance, TensorFlow.js always uses
                // implementation 2 regardless of the actual value of
                // config.implementation.
                var i;
                var f;
                var c;
                var o;
                if (0 < _this.dropout && _this.dropout < 1) {
                    inputs = tfc.mul(inputs, dpMask[0]);
                }
                var z = dot(inputs, _this.kernel.read());
                if (0 < _this.recurrentDropout && _this.recurrentDropout < 1) {
                    hTMinus1 = tfc.mul(hTMinus1, recDpMask[0]);
                }
                z = tfc.add(z, dot(hTMinus1, _this.recurrentKernel.read()));
                if (_this.useBias) {
                    z = biasAdd(z, _this.bias.read());
                }
                var _a = tfc.split(z, 4, z.rank - 1), z0 = _a[0], z1 = _a[1], z2 = _a[2], z3 = _a[3];
                i = _this.recurrentActivation.apply(z0);
                f = _this.recurrentActivation.apply(z1);
                c = tfc.add(tfc.mul(f, cTMinus1), tfc.mul(i, _this.activation.apply(z2)));
                o = _this.recurrentActivation.apply(z3);
                var h = tfc.mul(o, _this.activation.apply(c));
                // TODO(cais): Add use_learning_phase flag properly.
                return [h, h, c];
            });
        };
        LSTMCell.prototype.getConfig = function () {
            var config = {
                units: this.units,
                activation: serializeActivation(this.activation),
                recurrentActivation: serializeActivation(this.recurrentActivation),
                useBias: this.useBias,
                kernelInitializer: serializeInitializer(this.kernelInitializer),
                recurrentInitializer: serializeInitializer(this.recurrentInitializer),
                biasInitializer: serializeInitializer(this.biasInitializer),
                unitForgetBias: this.unitForgetBias,
                kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
                recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
                biasRegularizer: serializeRegularizer(this.biasRegularizer),
                activityRegularizer: serializeRegularizer(this.activityRegularizer),
                kernelConstraint: serializeConstraint(this.kernelConstraint),
                recurrentConstraint: serializeConstraint(this.recurrentConstraint),
                biasConstraint: serializeConstraint(this.biasConstraint),
                dropout: this.dropout,
                recurrentDropout: this.recurrentDropout,
                implementation: this.implementation,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        LSTMCell.className = 'LSTMCell';
        return LSTMCell;
    }(RNNCell));
    tfc.serialization.registerClass(LSTMCell);
    var LSTM = /** @class */ (function (_super) {
        __extends(LSTM, _super);
        function LSTM(args) {
            var _this = this;
            if (args.implementation === 0) {
                console.warn('`implementation=0` has been deprecated, and now defaults to ' +
                    '`implementation=1`. Please update your layer call.');
            }
            args.cell = new LSTMCell(args);
            _this = _super.call(this, args) || this;
            return _this;
            // TODO(cais): Add activityRegularizer.
        }
        LSTM.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                if (_this.cell.dropoutMask != null) {
                    tfc.dispose(_this.cell.dropoutMask);
                    _this.cell.dropoutMask = null;
                }
                if (_this.cell.recurrentDropoutMask != null) {
                    tfc.dispose(_this.cell.recurrentDropoutMask);
                    _this.cell.recurrentDropoutMask = null;
                }
                var mask = kwargs == null ? null : kwargs['mask'];
                var training = kwargs == null ? null : kwargs['training'];
                var initialState = kwargs == null ? null : kwargs['initialState'];
                return _super.prototype.call.call(_this, inputs, { mask: mask, training: training, initialState: initialState });
            });
        };
        Object.defineProperty(LSTM.prototype, "units", {
            get: function () {
                return this.cell.units;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "activation", {
            get: function () {
                return this.cell.activation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "recurrentActivation", {
            get: function () {
                return this.cell.recurrentActivation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "useBias", {
            get: function () {
                return this.cell.useBias;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "kernelInitializer", {
            get: function () {
                return this.cell.kernelInitializer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "recurrentInitializer", {
            get: function () {
                return this.cell.recurrentInitializer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "biasInitializer", {
            get: function () {
                return this.cell.biasInitializer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "unitForgetBias", {
            get: function () {
                return this.cell.unitForgetBias;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "kernelRegularizer", {
            get: function () {
                return this.cell.kernelRegularizer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "recurrentRegularizer", {
            get: function () {
                return this.cell.recurrentRegularizer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "biasRegularizer", {
            get: function () {
                return this.cell.biasRegularizer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "kernelConstraint", {
            get: function () {
                return this.cell.kernelConstraint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "recurrentConstraint", {
            get: function () {
                return this.cell.recurrentConstraint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "biasConstraint", {
            get: function () {
                return this.cell.biasConstraint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "dropout", {
            get: function () {
                return this.cell.dropout;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "recurrentDropout", {
            get: function () {
                return this.cell.recurrentDropout;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LSTM.prototype, "implementation", {
            get: function () {
                return this.cell.implementation;
            },
            enumerable: true,
            configurable: true
        });
        LSTM.prototype.getConfig = function () {
            var config = {
                units: this.units,
                activation: serializeActivation(this.activation),
                recurrentActivation: serializeActivation(this.recurrentActivation),
                useBias: this.useBias,
                kernelInitializer: serializeInitializer(this.kernelInitializer),
                recurrentInitializer: serializeInitializer(this.recurrentInitializer),
                biasInitializer: serializeInitializer(this.biasInitializer),
                unitForgetBias: this.unitForgetBias,
                kernelRegularizer: serializeRegularizer(this.kernelRegularizer),
                recurrentRegularizer: serializeRegularizer(this.recurrentRegularizer),
                biasRegularizer: serializeRegularizer(this.biasRegularizer),
                activityRegularizer: serializeRegularizer(this.activityRegularizer),
                kernelConstraint: serializeConstraint(this.kernelConstraint),
                recurrentConstraint: serializeConstraint(this.recurrentConstraint),
                biasConstraint: serializeConstraint(this.biasConstraint),
                dropout: this.dropout,
                recurrentDropout: this.recurrentDropout,
                implementation: this.implementation,
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            delete baseConfig['cell'];
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        LSTM.fromConfig = function (cls, config) {
            if (config['implmentation'] === 0) {
                config['implementation'] = 1;
            }
            return new cls(config);
        };
        /** @nocollapse */
        LSTM.className = 'LSTM';
        return LSTM;
    }(RNN));
    tfc.serialization.registerClass(LSTM);
    var StackedRNNCells = /** @class */ (function (_super) {
        __extends(StackedRNNCells, _super);
        function StackedRNNCells(args) {
            var _this = _super.call(this, args) || this;
            _this.cells = args.cells;
            return _this;
        }
        Object.defineProperty(StackedRNNCells.prototype, "stateSize", {
            get: function () {
                // States are a flat list in reverse order of the cell stack.
                // This allows perserving the requirement `stack.statesize[0] ===
                // outputDim`. E.g., states of a 2-layer LSTM would be `[h2, c2, h1, c1]`,
                // assuming one LSTM has states `[h, c]`.
                var stateSize = [];
                for (var _i = 0, _a = this.cells.slice().reverse(); _i < _a.length; _i++) {
                    var cell = _a[_i];
                    if (Array.isArray(cell.stateSize)) {
                        stateSize.push.apply(stateSize, cell.stateSize);
                    }
                    else {
                        stateSize.push(cell.stateSize);
                    }
                }
                return stateSize;
            },
            enumerable: true,
            configurable: true
        });
        StackedRNNCells.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                inputs = inputs;
                var states = inputs.slice(1);
                // Recover per-cell states.
                var nestedStates = [];
                for (var _i = 0, _a = _this.cells.slice().reverse(); _i < _a.length; _i++) {
                    var cell = _a[_i];
                    if (Array.isArray(cell.stateSize)) {
                        nestedStates.push(states.splice(0, cell.stateSize.length));
                    }
                    else {
                        nestedStates.push(states.splice(0, 1));
                    }
                }
                nestedStates.reverse();
                // Call the cells in order and store the returned states.
                var newNestedStates = [];
                var callInputs;
                for (var i = 0; i < _this.cells.length; ++i) {
                    var cell = _this.cells[i];
                    states = nestedStates[i];
                    // TODO(cais): Take care of constants.
                    if (i === 0) {
                        callInputs = [inputs[0]].concat(states);
                    }
                    else {
                        callInputs = [callInputs[0]].concat(states);
                    }
                    callInputs = cell.call(callInputs, kwargs);
                    newNestedStates.push(callInputs.slice(1));
                }
                // Format the new states as a flat list in reverse cell order.
                states = [];
                for (var _b = 0, _c = newNestedStates.slice().reverse(); _b < _c.length; _b++) {
                    var cellStates = _c[_b];
                    states.push.apply(states, cellStates);
                }
                return [callInputs[0]].concat(states);
            });
        };
        StackedRNNCells.prototype.build = function (inputShape) {
            if (isArrayOfShapes(inputShape)) {
                // TODO(cais): Take care of input constants.
                // const constantShape = inputShape.slice(1);
                inputShape = inputShape[0];
            }
            inputShape = inputShape;
            var outputDim;
            for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                // TODO(cais): Take care of input constants.
                cell.build(inputShape);
                if (Array.isArray(cell.stateSize)) {
                    outputDim = cell.stateSize[0];
                }
                else {
                    outputDim = cell.stateSize;
                }
                inputShape = [inputShape[0], outputDim];
            }
            this.built = true;
        };
        StackedRNNCells.prototype.getConfig = function () {
            var cellConfigs = [];
            for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                cellConfigs.push({
                    'className': cell.getClassName(),
                    'config': cell.getConfig(),
                });
            }
            var config = { 'cells': cellConfigs };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        StackedRNNCells.fromConfig = function (cls, config, customObjects) {
            if (customObjects === void 0) { customObjects = {}; }
            var cells = [];
            for (var _i = 0, _a = config['cells']; _i < _a.length; _i++) {
                var cellConfig = _a[_i];
                cells.push(deserialize(cellConfig, customObjects));
            }
            return new cls({ cells: cells });
        };
        Object.defineProperty(StackedRNNCells.prototype, "trainableWeights", {
            get: function () {
                if (!this.trainable) {
                    return [];
                }
                var weights = [];
                for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                    var cell = _a[_i];
                    weights.push.apply(weights, cell.trainableWeights);
                }
                return weights;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StackedRNNCells.prototype, "nonTrainableWeights", {
            get: function () {
                var weights = [];
                for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                    var cell = _a[_i];
                    weights.push.apply(weights, cell.nonTrainableWeights);
                }
                if (!this.trainable) {
                    var trainableWeights = [];
                    for (var _b = 0, _c = this.cells; _b < _c.length; _b++) {
                        var cell = _c[_b];
                        trainableWeights.push.apply(trainableWeights, cell.trainableWeights);
                    }
                    return trainableWeights.concat(weights);
                }
                return weights;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Retrieve the weights of a the model.
         *
         * @returns A flat `Array` of `tf.Tensor`s.
         */
        StackedRNNCells.prototype.getWeights = function () {
            var weights = [];
            for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                weights.push.apply(weights, cell.weights);
            }
            return batchGetValue(weights);
        };
        /**
         * Set the weights of the model.
         *
         * @param weights An `Array` of `tf.Tensor`s with shapes and types matching
         *     the output of `getWeights()`.
         */
        StackedRNNCells.prototype.setWeights = function (weights) {
            var tuples = [];
            for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
                var cell = _a[_i];
                var numParams = cell.weights.length;
                var inputWeights = weights.splice(numParams);
                for (var i = 0; i < cell.weights.length; ++i) {
                    tuples.push([cell.weights[i], inputWeights[i]]);
                }
            }
            batchSetValue(tuples);
        };
        /** @nocollapse */
        StackedRNNCells.className = 'StackedRNNCells';
        return StackedRNNCells;
    }(RNNCell));
    tfc.serialization.registerClass(StackedRNNCells);
    function generateDropoutMask(ones, rate, training, count$$1) {
        if (training === void 0) { training = null; }
        if (count$$1 === void 0) { count$$1 = 1; }
        function droppedInputs() {
            return dropout(ones(), rate);
        }
        if (count$$1 > 1) {
            var mask = [];
            for (var i = 0; i < count$$1; i++) {
                mask.push(inTrainPhase(droppedInputs, ones, training));
            }
            return mask.map(function (m) { return tfc.keep(m.clone()); });
        }
        else {
            return tfc.keep(inTrainPhase(droppedInputs, ones, training).clone());
        }
    }

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Abstract wrapper base class.
     *
     * Wrappers take another layer and augment it in various ways.
     * Do not use this class as a layer, it is only an abstract base class.
     * Two usable wrappers are the `TimeDistributed` and `Bidirectional` wrappers.
     */
    var Wrapper = /** @class */ (function (_super) {
        __extends(Wrapper, _super);
        function Wrapper(args) {
            var _this = 
            // Porting Note: In PyKeras, `self.layer` is set prior to the calling
            //   `super()`. But we can't do that here due to TypeScript's restriction.
            //   See: https://github.com/Microsoft/TypeScript/issues/8277
            //   As a result, we have to add checks in `get trainable()` and
            //   `set trainable()` below in order to prevent using `this.layer` when
            //   its value is `undefined`. The super constructor does use the getter
            //   and the setter of `this.layer`.
            _super.call(this, args) || this;
            _this.layer = args.layer;
            return _this;
        }
        Wrapper.prototype.build = function (inputShape) {
            this.built = true;
        };
        Object.defineProperty(Wrapper.prototype, "trainable", {
            // TODO(cais): Implement activityRegularizer getter.
            get: function () {
                // Porting Note: the check of `this.layer` here is necessary due to the
                //   way the `constructor` of this class is written (see Porting Note
                //   above).
                if (this.layer != null) {
                    return this.layer.trainable;
                }
                else {
                    return false;
                }
            },
            set: function (value) {
                // Porting Note: the check of `this.layer` here is necessary due to the
                //   way the `constructor` of this class is written (see Porting Note
                //   above).
                if (this.layer != null) {
                    this.layer.trainable = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Wrapper.prototype, "trainableWeights", {
            get: function () {
                return this.layer.trainableWeights;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Wrapper.prototype, "nonTrainableWeights", {
            // TODO(cais): Implement setter for trainableWeights.
            get: function () {
                return this.layer.nonTrainableWeights;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Wrapper.prototype, "updates", {
            // TODO(cais): Implement setter for nonTrainableWeights.
            get: function () {
                // tslint:disable-next-line:no-any
                return this.layer._updates;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Wrapper.prototype, "losses", {
            // TODO(cais): Implement getUpdatesFor().
            get: function () {
                return this.layer.losses;
            },
            enumerable: true,
            configurable: true
        });
        // TODO(cais): Implement getLossesFor().
        Wrapper.prototype.getWeights = function () {
            return this.layer.getWeights();
        };
        Wrapper.prototype.setWeights = function (weights) {
            this.layer.setWeights(weights);
        };
        Wrapper.prototype.getConfig = function () {
            var config = {
                'layer': {
                    'className': this.layer.getClassName(),
                    'config': this.layer.getConfig(),
                }
            };
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        Wrapper.prototype.setFastWeightInitDuringBuild = function (value) {
            _super.prototype.setFastWeightInitDuringBuild.call(this, value);
            if (this.layer != null) {
                this.layer.setFastWeightInitDuringBuild(value);
            }
        };
        /** @nocollapse */
        Wrapper.fromConfig = function (cls, config, customObjects) {
            if (customObjects === void 0) { customObjects = {}; }
            var layerConfig = config['layer'];
            var layer = deserialize(layerConfig, customObjects);
            delete config['layer'];
            var newConfig = { layer: layer };
            Object.assign(newConfig, config);
            return new cls(newConfig);
        };
        return Wrapper;
    }(Layer));
    var TimeDistributed = /** @class */ (function (_super) {
        __extends(TimeDistributed, _super);
        function TimeDistributed(args) {
            var _this = _super.call(this, args) || this;
            _this.supportsMasking = true;
            return _this;
        }
        TimeDistributed.prototype.build = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            if (inputShape.length < 3) {
                throw new ValueError("TimeDistributed layer expects an input shape >= 3D, but received " +
                    ("input shape " + JSON.stringify(inputShape)));
            }
            this.inputSpec = [{ shape: inputShape }];
            var childInputShape = [inputShape[0]].concat(inputShape.slice(2));
            if (!this.layer.built) {
                this.layer.build(childInputShape);
                this.layer.built = true;
            }
            _super.prototype.build.call(this, inputShape);
        };
        TimeDistributed.prototype.computeOutputShape = function (inputShape) {
            inputShape = getExactlyOneShape(inputShape);
            var childInputShape = [inputShape[0]].concat(inputShape.slice(2));
            var childOutputShape = this.layer.computeOutputShape(childInputShape);
            var timesteps = inputShape[1];
            return [childOutputShape[0], timesteps].concat(childOutputShape.slice(1));
        };
        TimeDistributed.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                // TODO(cais): Add 'training' and 'useLearningPhase' to kwargs.
                inputs = getExactlyOneTensor(inputs);
                // Porting Note: In tfjs-layers, `inputs` are always concrete tensor
                // values. Hence the inputs can't have an undetermined first (batch)
                // dimension, which is why we always use the K.rnn approach here.
                var step = function (inputs, states) {
                    // TODO(cais): Add useLearningPhase.
                    // NOTE(cais): `layer.call` may return a length-1 array of Tensor in
                    //   some cases (e.g., `layer` is a `Sequential` instance), which is
                    //   why `getExactlyOneTensor` is used below.
                    var output = getExactlyOneTensor(_this.layer.call(inputs, kwargs));
                    return [output, []];
                };
                var rnnOutputs = rnn(step, inputs, [], false /* goBackwards */, null /* mask */, null /* constants */, false /* unroll */, true /* needPerStepOutputs */);
                var y = rnnOutputs[1];
                // TODO(cais): Add activity regularization.
                // TODO(cais): Add useLearningPhase.
                return y;
            });
        };
        /** @nocollapse */
        TimeDistributed.className = 'TimeDistributed';
        return TimeDistributed;
    }(Wrapper));
    tfc.serialization.registerClass(TimeDistributed);
    function checkBidirectionalMergeMode(value) {
        checkStringTypeUnionValue(VALID_BIDIRECTIONAL_MERGE_MODES, 'BidirectionalMergeMode', value);
    }
    var DEFAULT_BIDIRECTIONAL_MERGE_MODE = 'concat';
    var Bidirectional = /** @class */ (function (_super) {
        __extends(Bidirectional, _super);
        function Bidirectional(args) {
            var _this = _super.call(this, args) || this;
            // Note: When creating `this.forwardLayer`, the original Layer object
            //   (`config.layer`) ought to be cloned. This is why we call
            //   `getConfig()` followed by `deserialize()`. Without this cloning,
            //   the layer names saved during serialization will incorrectly contain
            //   the 'forward_' prefix. In Python Keras, this is done using
            //   `copy.copy` (shallow copy), which does not have a simple equivalent
            //   in JavaScript. JavaScript's `Object.assign()` does not copy
            //   methods.
            var layerConfig = args.layer.getConfig();
            var forwDict = {};
            forwDict['className'] = args.layer.getClassName();
            forwDict['config'] = layerConfig;
            _this.forwardLayer = deserialize(forwDict);
            layerConfig['goBackwards'] =
                layerConfig['goBackwards'] === true ? false : true;
            var backDict = {};
            backDict['className'] = args.layer.getClassName();
            backDict['config'] = layerConfig;
            _this.backwardLayer = deserialize(backDict);
            _this.forwardLayer.name = 'forward_' + _this.forwardLayer.name;
            _this.backwardLayer.name = 'backward_' + _this.backwardLayer.name;
            _this.mergeMode = args.mergeMode === undefined ?
                DEFAULT_BIDIRECTIONAL_MERGE_MODE :
                args.mergeMode;
            checkBidirectionalMergeMode(_this.mergeMode);
            if (args.weights) {
                throw new NotImplementedError('weights support is not implemented for Bidirectional layer yet.');
            }
            _this._stateful = args.layer.stateful;
            _this.returnSequences = args.layer.returnSequences;
            _this.returnState = args.layer.returnState;
            _this.supportsMasking = true;
            _this._trainable = true;
            _this.inputSpec = args.layer.inputSpec;
            _this.numConstants = null;
            return _this;
        }
        Object.defineProperty(Bidirectional.prototype, "trainable", {
            get: function () {
                return this._trainable;
            },
            set: function (value) {
                // Porting Note: the check of `this.layer` here is necessary due to the
                //   way the `constructor` of this class is written (see Porting Note
                //   above).
                this._trainable = value;
                if (this.forwardLayer != null) {
                    this.forwardLayer.trainable = value;
                }
                if (this.backwardLayer != null) {
                    this.backwardLayer.trainable = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Bidirectional.prototype.getWeights = function () {
            return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights());
        };
        Bidirectional.prototype.setWeights = function (weights) {
            var numWeights = weights.length;
            var numeightsOver2 = Math.floor(numWeights / 2);
            this.forwardLayer.setWeights(weights.slice(0, numeightsOver2));
            this.backwardLayer.setWeights(weights.slice(numeightsOver2));
        };
        Bidirectional.prototype.computeOutputShape = function (inputShape) {
            var layerShapes = this.forwardLayer.computeOutputShape(inputShape);
            if (!(Array.isArray(layerShapes) && Array.isArray(layerShapes[0]))) {
                layerShapes = [layerShapes];
            }
            layerShapes = layerShapes;
            var outputShape;
            var outputShapes;
            var stateShape;
            if (this.returnState) {
                stateShape = layerShapes.slice(1);
                outputShape = layerShapes[0];
            }
            else {
                outputShape = layerShapes[0];
            }
            outputShape = outputShape;
            if (this.mergeMode === 'concat') {
                outputShape[outputShape.length - 1] *= 2;
                outputShapes = [outputShape];
            }
            else if (this.mergeMode == null) {
                outputShapes = [outputShape, outputShape.slice()];
            }
            else {
                outputShapes = [outputShape];
            }
            if (this.returnState) {
                if (this.mergeMode == null) {
                    return outputShapes.concat(stateShape).concat(stateShape.slice());
                }
                return [outputShape].concat(stateShape).concat(stateShape.slice());
            }
            return singletonOrArray(outputShapes);
        };
        Bidirectional.prototype.apply = function (inputs, kwargs) {
            var initialState = kwargs == null ? null : kwargs['initialState'];
            var constants = kwargs == null ? null : kwargs['constants'];
            if (kwargs == null) {
                kwargs = {};
            }
            var standardized = standardizeArgs(inputs, initialState, constants, this.numConstants);
            inputs = standardized.inputs;
            initialState = standardized.initialState;
            constants = standardized.constants;
            if (Array.isArray(inputs)) {
                initialState = inputs.slice(1);
                inputs = inputs[0];
            }
            if ((initialState == null || initialState.length === 0) &&
                constants == null) {
                return _super.prototype.apply.call(this, inputs, kwargs);
            }
            var additionalInputs = [];
            var additionalSpecs = [];
            if (initialState != null) {
                var numStates = initialState.length;
                if (numStates % 2 > 0) {
                    throw new ValueError('When passing `initialState` to a Bidrectional RNN, ' +
                        'the state should be an Array containing the states of ' +
                        'the underlying RNNs.');
                }
                kwargs['initialState'] = initialState;
                additionalInputs.push.apply(additionalInputs, initialState);
                var stateSpecs = initialState
                    .map(function (state) { return new InputSpec({ shape: state.shape }); });
                this.forwardLayer.stateSpec = stateSpecs.slice(0, numStates / 2);
                this.backwardLayer.stateSpec = stateSpecs.slice(numStates / 2);
                additionalSpecs.push.apply(additionalSpecs, stateSpecs);
            }
            if (constants != null) {
                throw new NotImplementedError('Support for constants in Bidirectional layers is not ' +
                    'implemented yet.');
            }
            var isSymbolicTensor = additionalInputs[0] instanceof SymbolicTensor;
            for (var _i = 0, additionalInputs_1 = additionalInputs; _i < additionalInputs_1.length; _i++) {
                var tensor = additionalInputs_1[_i];
                if (tensor instanceof SymbolicTensor !== isSymbolicTensor) {
                    throw new ValueError('The initial state of a Bidirectional layer cannot be ' +
                        'specified as a mix of symbolic and non-symbolic tensors');
                }
            }
            if (isSymbolicTensor) {
                // Compute the full input and specs, including the states.
                var fullInput = [inputs].concat(additionalInputs);
                var fullInputSpec = this.inputSpec.concat(additionalSpecs);
                // Perform the call temporarily and replace inputSpec.
                // Note: with initial states symbolic calls and non-symbolic calls to
                // this method differ in how the initial states are passed. For
                // symbolic calls, the initial states are passed in the first arg, as
                // an Array of SymbolicTensors; for non-symbolic calls, they are
                // passed in the second arg as a part of the kwargs. Hence the need to
                // temporarily modify inputSpec here.
                // TODO(cais): Make refactoring so that this hacky code below is no
                // longer needed.
                var originalInputSpec = this.inputSpec;
                this.inputSpec = fullInputSpec;
                var output = _super.prototype.apply.call(this, fullInput, kwargs);
                this.inputSpec = originalInputSpec;
                return output;
            }
            else {
                return _super.prototype.apply.call(this, inputs, kwargs);
            }
        };
        Bidirectional.prototype.call = function (inputs, kwargs) {
            var _this = this;
            return tfc.tidy(function () {
                if (kwargs['mask'] != null) {
                    throw new NotImplementedError('The support for masking is not implemented for ' +
                        'Bidirectional layers yet.');
                }
                var initialState = kwargs['initialState'];
                var y;
                var yRev;
                if (initialState == null) {
                    y = _this.forwardLayer.call(inputs, kwargs);
                    yRev = _this.backwardLayer.call(inputs, kwargs);
                }
                else {
                    var forwardState = initialState.slice(0, initialState.length / 2);
                    var backwardState = initialState.slice(initialState.length / 2);
                    y = _this.forwardLayer.call(inputs, Object.assign(kwargs, { initialState: forwardState }));
                    yRev = _this.backwardLayer.call(inputs, Object.assign(kwargs, { initialState: backwardState }));
                }
                var states;
                if (_this.returnState) {
                    if (Array.isArray(y)) {
                        states = y.slice(1).concat(yRev.slice(1));
                    }
                    y = y[0];
                    yRev = yRev[0];
                }
                if (_this.returnSequences) {
                    yRev = tfc.reverse(yRev, 1);
                }
                var output;
                if (_this.mergeMode === 'concat') {
                    output = concatenate([y, yRev]);
                }
                else if (_this.mergeMode === 'sum') {
                    output = tfc.add(y, yRev);
                }
                else if (_this.mergeMode === 'ave') {
                    output = tfc.mul(.5, tfc.add(y, yRev));
                }
                else if (_this.mergeMode === 'mul') {
                    output = tfc.mul(y, yRev);
                }
                else if (_this.mergeMode == null) {
                    output = [y, yRev];
                }
                // TODO(cais): Properly set learning phase.
                if (_this.returnState) {
                    if (_this.mergeMode == null) {
                        return output.concat(states);
                    }
                    return [output].concat(states);
                }
                return output;
            });
        };
        Bidirectional.prototype.resetStates = function (states) {
            this.forwardLayer.resetStates();
            this.backwardLayer.resetStates();
        };
        Bidirectional.prototype.build = function (inputShape) {
            var _this = this;
            nameScope(this.forwardLayer.name, function () {
                _this.forwardLayer.build(inputShape);
            });
            nameScope(this.backwardLayer.name, function () {
                _this.backwardLayer.build(inputShape);
            });
            this.built = true;
        };
        Object.defineProperty(Bidirectional.prototype, "trainableWeights", {
            // TODO(cais): Implement computeMask().
            get: function () {
                return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bidirectional.prototype, "nonTrainableWeights", {
            get: function () {
                return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights);
            },
            enumerable: true,
            configurable: true
        });
        // TODO(cais): Implement constraints().
        Bidirectional.prototype.setFastWeightInitDuringBuild = function (value) {
            _super.prototype.setFastWeightInitDuringBuild.call(this, value);
            if (this.forwardLayer != null) {
                this.forwardLayer.setFastWeightInitDuringBuild(value);
            }
            if (this.backwardLayer != null) {
                this.backwardLayer.setFastWeightInitDuringBuild(value);
            }
        };
        Bidirectional.prototype.getConfig = function () {
            var config = {
                'mergeMode': this.mergeMode,
            };
            // TODO(cais): Add logic for `numConstants` once the property is added.
            var baseConfig = _super.prototype.getConfig.call(this);
            Object.assign(config, baseConfig);
            return config;
        };
        /** @nocollapse */
        Bidirectional.fromConfig = function (cls, config) {
            var rnnLayer = deserialize(config['layer']);
            delete config['layer'];
            // TODO(cais): Add logic for `numConstants` once the property is added.
            if (config['numConstants'] != null) {
                throw new NotImplementedError("Deserialization of a Bidirectional layer with numConstants " +
                    "present is not supported yet.");
            }
            // tslint:disable-next-line:no-any
            var newConfig = config;
            newConfig['layer'] = rnnLayer;
            return new cls(newConfig);
        };
        /** @nocollapse */
        Bidirectional.className = 'Bidirectional';
        return Bidirectional;
    }(Wrapper));
    tfc.serialization.registerClass(Bidirectional);

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    // TODO(cais): Add doc string to all the public static functions in this
    //   class; include exectuable JavaScript code snippets where applicable
    //   (b/74074458).
    // Input Layer.
    /**
     * An input layer is an entry point into a `tf.LayersModel`.
     *
     * `InputLayer` is generated automatically for `tf.Sequential`` models by
     * specifying the `inputshape` or `batchInputShape` for the first layer.  It
     * should not be specified explicitly. However, it can be useful sometimes,
     * e.g., when constructing a sequential model from a subset of another
     * sequential model's layers. Like the code snippet below shows.
     *
     * ```js
     * // Define a model which simply adds two inputs.
     * const model1 = tf.sequential();
     * model1.add(tf.layers.dense({inputShape: [4], units: 3, activation: 'relu'}));
     * model1.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
     * model1.summary();
     * model1.predict(tf.zeros([1, 4])).print();
     *
     * // Construct another model, reusing the second layer of `model1` while
     * // not using the first layer of `model1`. Note that you cannot add the second
     * // layer of `model` directly as the first layer of the new sequential model,
     * // because doing so will lead to an error related to the fact that the layer
     * // is not an input layer. Instead, you need to create an `inputLayer` and add
     * // it to the new sequential model before adding the reused layer.
     * const model2 = tf.sequential();
     * // Use an inputShape that matches the input shape of `model1`'s second
     * // layer.
     * model2.add(tf.layers.inputLayer({inputShape: [3]}));
     * model2.add(model1.layers[1]);
     * model2.summary();
     * model2.predict(tf.zeros([1, 3])).print();
     * ```
     */
    /** @doc {heading: 'Layers', subheading: 'Inputs', namespace: 'layers'} */
    function inputLayer(args) {
        return new InputLayer(args);
    }
    // Advanced Activation Layers.
    /**
     * Exponetial Linear Unit (ELU).
     *
     * It follows:
     * `f(x) =  alpha * (exp(x) - 1.) for x < 0`,
     * `f(x) = x for x >= 0`.
     *
     * Input shape:
     *   Arbitrary. Use the configuration `inputShape` when using this layer as the
     *   first layer in a model.
     *
     * Output shape:
     *   Same shape as the input.
     *
     * References:
     *   - [Fast and Accurate Deep Network Learning by Exponential Linear Units
     * (ELUs)](https://arxiv.org/abs/1511.07289v1)
     */
    /**
     * @doc {
     *   heading: 'Layers',
     *   subheading: 'Advanced Activation',
     *   namespace: 'layers'
     * }
     */
    function elu$1(args) {
        return new ELU(args);
    }
    /**
     * Rectified Linear Unit activation function.
     *
     * Input shape:
     *   Arbitrary. Use the config field `inputShape` (Array of integers, does
     *   not include the sample axis) when using this layer as the first layer
     *   in a model.
     *
     * Output shape:
     *   Same shape as the input.
     */
    /**
     * @doc {
     *   heading: 'Layers',
     *   subheading: 'Advanced Activation',
     *   namespace: 'layers'
     * }
     */
    function reLU(args) {
        return new ReLU(args);
    }
    /**
     * Leaky version of a rectified linear unit.
     *
     * It allows a small gradient when the unit is not active:
     * `f(x) = alpha * x for x < 0.`
     * `f(x) = x for x >= 0.`
     *
     * Input shape:
     *   Arbitrary. Use the configuration `inputShape` when using this layer as the
     *   first layer in a model.
     *
     * Output shape:
     *   Same shape as the input.
     */
    /**
     * @doc {
     *   heading: 'Layers',
     *   subheading: 'Advanced Activation',
     *   namespace: 'layers'
     * }
     */
    function leakyReLU(args) {
        return new LeakyReLU(args);
    }
    /**
     * Parameterized version of a leaky rectified linear unit.
     *
     * It follows
     * `f(x) = alpha * x for x < 0.`
     * `f(x) = x for x >= 0.`
     * wherein `alpha` is a trainable weight.
     *
     * Input shape:
     *   Arbitrary. Use the configuration `inputShape` when using this layer as the
     *   first layer in a model.
     *
     * Output shape:
     *   Same shape as the input.
     */
    /**
     * @doc {
     *   heading: 'Layers',
     *   subheading: 'Advanced Activation',
     *   namespace: 'layers'
     * }
     */
    function prelu(args) {
        return new PReLU(args);
    }
    /**
     * Softmax activation layer.
     *
     * Input shape:
     *   Arbitrary. Use the configuration `inputShape` when using this layer as the
     *   first layer in a model.
     *
     * Output shape:
     *   Same shape as the input.
     */
    /**
     * @doc {
     *   heading: 'Layers',
     *   subheading: 'Advanced Activation',
     *   namespace: 'layers'
     * }
     */
    function softmax(args) {
        return new Softmax$1(args);
    }
    /**
     * Thresholded Rectified Linear Unit.
     *
     * It follows:
     * `f(x) = x for x > theta`,
     * `f(x) = 0 otherwise`.
     *
     * Input shape:
     *   Arbitrary. Use the configuration `inputShape` when using this layer as the
     *   first layer in a model.
     *
     * Output shape:
     *   Same shape as the input.
     *
     * References:
     *   - [Zero-Bias Autoencoders and the Benefits of Co-Adapting
     * Features](http://arxiv.org/abs/1402.3337)
     */
    /**
     * @doc {
     *   heading: 'Layers',
     *   subheading: 'Advanced Activation',
     *   namespace: 'layers'
     * }
     */
    function thresholdedReLU(args) {
        return new ThresholdedReLU(args);
    }
    // Convolutional Layers.
    /**
     * 1D convolution layer (e.g., temporal convolution).
     *
     * This layer creates a convolution kernel that is convolved
     * with the layer input over a single spatial (or temporal) dimension
     * to produce a tensor of outputs.
     *
     * If `use_bias` is True, a bias vector is created and added to the outputs.
     *
     * If `activation` is not `null`, it is applied to the outputs as well.
     *
     * When using this layer as the first layer in a model, provide an
     * `inputShape` argument `Array` or `null`.
     *
     * For example, `inputShape` would be:
     * - `[10, 128]` for sequences of 10 vectors of 128-dimensional vectors
     * - `[null, 128]` for variable-length sequences of 128-dimensional vectors.
     */
    /**
     * @doc {heading: 'Layers', subheading: 'Convolutional',  namespace: 'layers'}
     */
    function conv1d$1(args) {
        return new Conv1D(args);
    }
    /**
     * 2D convolution layer (e.g. spatial convolution over images).
     *
     * This layer creates a convolution kernel that is convolved
     * with the layer input to produce a tensor of outputs.
     *
     * If `useBias` is True, a bias vector is created and added to the outputs.
     *
     * If `activation` is not `null`, it is applied to the outputs as well.
     *
     * When using this layer as the first layer in a model,
     * provide the keyword argument `inputShape`
     * (Array of integers, does not include the sample axis),
     * e.g. `inputShape=[128, 128, 3]` for 128x128 RGB pictures
     * in `dataFormat='channelsLast'`.
     */
    /**
     * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
     */
    function conv2d$1(args) {
        return new Conv2D(args);
    }
    /**
     * Transposed convolutional layer (sometimes called Deconvolution).
     *
     * The need for transposed convolutions generally arises
     * from the desire to use a transformation going in the opposite direction of
     * a normal convolution, i.e., from something that has the shape of the output
     * of some convolution to something that has the shape of its input while
     * maintaining a connectivity pattern that is compatible with said
     * convolution.
     *
     * When using this layer as the first layer in a model, provide the
     * configuration `inputShape` (`Array` of integers, does not include the
     * sample axis), e.g., `inputShape: [128, 128, 3]` for 128x128 RGB pictures in
     * `dataFormat: 'channelsLast'`.
     *
     * Input shape:
     *   4D tensor with shape:
     *   `[batch, channels, rows, cols]` if `dataFormat` is `'channelsFirst'`.
     *   or 4D tensor with shape
     *   `[batch, rows, cols, channels]` if `dataFormat` is `'channelsLast`.
     *
     * Output shape:
     *   4D tensor with shape:
     *   `[batch, filters, newRows, newCols]` if `dataFormat` is
     * `'channelsFirst'`. or 4D tensor with shape:
     *   `[batch, newRows, newCols, filters]` if `dataFormat` is `'channelsLast'`.
     *
     * References:
     *   - [A guide to convolution arithmetic for deep
     * learning](https://arxiv.org/abs/1603.07285v1)
     *   - [Deconvolutional
     * Networks](http://www.matthewzeiler.com/pubs/cvpr2010/cvpr2010.pdf)
     */
    /**
     * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
     */
    function conv2dTranspose(args) {
        return new Conv2DTranspose(args);
    }
    /**
     * 3D convolution layer (e.g. spatial convolution over volumes).
     *
     * This layer creates a convolution kernel that is convolved
     * with the layer input to produce a tensor of outputs.
     *
     * If `useBias` is True, a bias vector is created and added to the outputs.
     *
     * If `activation` is not `null`, it is applied to the outputs as well.
     *
     * When using this layer as the first layer in a model,
     * provide the keyword argument `inputShape`
     * (Array of integers, does not include the sample axis),
     * e.g. `inputShape=[128, 128, 128, 1]` for 128x128x128 grayscale volumes
     * in `dataFormat='channelsLast'`.
     */
    /**
     * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
     */
    function conv3d$1(args) {
        return new Conv3D(args);
    }
    /**
     * Depthwise separable 2D convolution.
     *
     * Separable convolution consists of first performing
     * a depthwise spatial convolution
     * (which acts on each input channel separately)
     * followed by a pointwise convolution which mixes together the resulting
     * output channels. The `depthMultiplier` argument controls how many
     * output channels are generated per input channel in the depthwise step.
     *
     * Intuitively, separable convolutions can be understood as
     * a way to factorize a convolution kernel into two smaller kernels,
     * or as an extreme version of an Inception block.
     *
     * Input shape:
     *   4D tensor with shape:
     *     `[batch, channels, rows, cols]` if data_format='channelsFirst'
     *   or 4D tensor with shape:
     *     `[batch, rows, cols, channels]` if data_format='channelsLast'.
     *
     * Output shape:
     *   4D tensor with shape:
     *     `[batch, filters, newRows, newCols]` if data_format='channelsFirst'
     *   or 4D tensor with shape:
     *     `[batch, newRows, newCols, filters]` if data_format='channelsLast'.
     *     `rows` and `cols` values might have changed due to padding.
     */
    /**
     * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
     */
    function separableConv2d(args) {
        return new SeparableConv2D(args);
    }
    /**
     * Cropping layer for 2D input (e.g., image).
     *
     * This layer can crop an input
     * at the top, bottom, left and right side of an image tensor.
     *
     * Input shape:
     *   4D tensor with shape:
     *   - If `dataFormat` is `"channelsLast"`:
     *     `[batch, rows, cols, channels]`
     *   - If `data_format` is `"channels_first"`:
     *     `[batch, channels, rows, cols]`.
     *
     * Output shape:
     *   4D with shape:
     *   - If `dataFormat` is `"channelsLast"`:
     *     `[batch, croppedRows, croppedCols, channels]`
     *    - If `dataFormat` is `"channelsFirst"`:
     *     `[batch, channels, croppedRows, croppedCols]`.
     *
     * Examples
     * ```js
     *
     * const model = tf.sequential();
     * model.add(tf.layers.cropping2D({cropping:[[2, 2], [2, 2]],
     *                                inputShape: [128, 128, 3]}));
     * //now output shape is [batch, 124, 124, 3]
     * ```
     */
    /**
     * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
     */
    function cropping2D(args) {
        return new Cropping2D(args);
    }
    /**
     * Upsampling layer for 2D inputs.
     *
     * Repeats the rows and columns of the data
     * by size[0] and size[1] respectively.
     *
     *
     * Input shape:
     *    4D tensor with shape:
     *     - If `dataFormat` is `"channelsLast"`:
     *         `[batch, rows, cols, channels]`
     *     - If `dataFormat` is `"channelsFirst"`:
     *        `[batch, channels, rows, cols]`
     *
     * Output shape:
     *     4D tensor with shape:
     *     - If `dataFormat` is `"channelsLast"`:
     *        `[batch, upsampledRows, upsampledCols, channels]`
     *     - If `dataFormat` is `"channelsFirst"`:
     *         `[batch, channels, upsampledRows, upsampledCols]`
     *
     */
    /**
     * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
     */
    function upSampling2d(args) {
        return new UpSampling2D(args);
    }
    // Convolutional(depthwise) Layers.
    /**
     * Depthwise separable 2D convolution.
     *
     * Depthwise Separable convolutions consists in performing just the first step
     * in a depthwise spatial convolution (which acts on each input channel
     * separately). The `depthMultplier` argument controls how many output channels
     * are generated per input channel in the depthwise step.
     */
    /**
     * @doc {heading: 'Layers', subheading: 'Convolutional', namespace: 'layers'}
     */
    function depthwiseConv2d$1(args) {
        return new DepthwiseConv2D(args);
    }
    // Basic Layers.
    /**
     * Applies an activation function to an output.
     *
     * This layer applies element-wise activation function.  Other layers, notably
     * `dense` can also apply activation functions.  Use this isolated activation
     * function to extract the values before and after the
     * activation. For instance:
     *
     * ```js
     * const input = tf.input({shape: [5]});
     * const denseLayer = tf.layers.dense({units: 1});
     * const activationLayer = tf.layers.activation({activation: 'relu6'});
     *
     * // Obtain the output symbolic tensors by applying the layers in order.
     * const denseOutput = denseLayer.apply(input);
     * const activationOutput = activationLayer.apply(denseOutput);
     *
     * // Create the model based on the inputs.
     * const model = tf.model({
     *     inputs: input,
     *     outputs: [denseOutput, activationOutput]
     * });
     *
     * // Collect both outputs and print separately.
     * const [denseOut, activationOut] = model.predict(tf.randomNormal([6, 5]));
     * denseOut.print();
     * activationOut.print();
     * ```
     */
    /**
     * @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'}
     */
    function activation(args) {
        return new Activation$1(args);
    }
    /**
     * Creates a dense (fully connected) layer.
     *
     * This layer implements the operation:
     *   `output = activation(dot(input, kernel) + bias)`
     *
     * `activation` is the element-wise activation function
     *   passed as the `activation` argument.
     *
     * `kernel` is a weights matrix created by the layer.
     *
     * `bias` is a bias vector created by the layer (only applicable if `useBias`
     * is `true`).
     *
     * **Input shape:**
     *
     *   nD `tf.Tensor` with shape: `(batchSize, ..., inputDim)`.
     *
     *   The most common situation would be
     *   a 2D input with shape `(batchSize, inputDim)`.
     *
     * **Output shape:**
     *
     *   nD tensor with shape: `(batchSize, ..., units)`.
     *
     *   For instance, for a 2D input with shape `(batchSize, inputDim)`,
     *   the output would have shape `(batchSize, units)`.
     *
     * Note: if the input to the layer has a rank greater than 2, then it is
     * flattened prior to the initial dot product with the kernel.
     */
    /** @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'} */
    function dense(args) {
        return new Dense(args);
    }
    /**
     * Applies
     * [dropout](http://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf) to
     * the input.
     *
     * Dropout consists in randomly setting a fraction `rate` of input units to 0 at
     * each update during training time, which helps prevent overfitting.
     */
    /** @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'} */
    function dropout$1(args) {
        return new Dropout(args);
    }
    /**
     * Flattens the input. Does not affect the batch size.
     *
     * A `Flatten` layer flattens each batch in its inputs to 1D (making the output
     * 2D).
     *
     * For example:
     *
     * ```js
     * const input = tf.input({shape: [4, 3]});
     * const flattenLayer = tf.layers.flatten();
     * // Inspect the inferred output shape of the flatten layer, which
     * // equals `[null, 12]`. The 2nd dimension is 4 * 3, i.e., the result of the
     * // flattening. (The 1st dimension is the undermined batch size.)
     * console.log(JSON.stringify(flattenLayer.apply(input).shape));
     * ```
     */
    /** @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'} */
    function flatten$1(args) {
        return new Flatten(args);
    }
    /**
     * Repeats the input n times in a new dimension.
     *
     * ```js
     *  const model = tf.sequential();
     *  model.add(tf.layers.repeatVector({n: 4, inputShape: [2]}));
     *  const x = tf.tensor2d([[10, 20]]);
     *  // Use the model to do inference on a data point the model hasn't see
     *  model.predict(x).print();
     *  // output shape is now [batch, 2, 4]
     * ```
     */
    /** @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'} */
    function repeatVector(args) {
        return new RepeatVector(args);
    }
    /**
     * Reshapes an input to a certain shape.
     *
     * ```js
     * const input = tf.input({shape: [4, 3]});
     * const reshapeLayer = tf.layers.reshape({targetShape: [2, 6]});
     * // Inspect the inferred output shape of the Reshape layer, which
     * // equals `[null, 2, 6]`. (The 1st dimension is the undermined batch size.)
     * console.log(JSON.stringify(reshapeLayer.apply(input).shape));
     * ```
     *
     * Input shape:
     *   Arbitrary, although all dimensions in the input shape must be fixed.
     *   Use the configuration `inputShape` when using this layer as the
     *   first layer in a model.
     *
     *
     * Output shape:
     *   [batchSize, targetShape[0], targetShape[1], ...,
     *    targetShape[targetShape.length - 1]].
     */
    /** @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'} */
    function reshape(args) {
        return new Reshape(args);
    }
    /**
     * Permutes the dimensions of the input according to a given pattern.
     *
     * Useful for, e.g., connecting RNNs and convnets together.
     *
     * Example:
     *
     * ```js
     * const model = tf.sequential();
     * model.add(tf.layers.permute({
     *   dims: [2, 1],
     *   inputShape: [10, 64]
     * }));
     * console.log(model.outputShape);
     * // Now model's output shape is [null, 64, 10], where null is the
     * // unpermuted sample (batch) dimension.
     * ```
     *
     * Input shape:
     *   Arbitrary. Use the configuration field `inputShape` when using this
     *   layer as the first layer in a model.
     *
     * Output shape:
     *   Same rank as the input shape, but with the dimensions re-ordered (i.e.,
     *   permuted) according to the `dims` configuration of this layer.
     */
    /** @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'} */
    function permute(args) {
        return new Permute(args);
    }
    /**
     * Maps positive integers (indices) into dense vectors of fixed size.
     * eg. [[4], [20]] -> [[0.25, 0.1], [0.6, -0.2]]
     *
     * **Input shape:** 2D tensor with shape: `[batchSize, sequenceLength]`.
     *
     * **Output shape:** 3D tensor with shape: `[batchSize, sequenceLength,
     * outputDim]`.
     */
    /** @doc {heading: 'Layers', subheading: 'Basic', namespace: 'layers'} */
    function embedding(args) {
        return new Embedding(args);
    }
    // Merge Layers.
    /**
     * Layer that performs element-wise addition on an `Array` of inputs.
     *
     * It takes as input a list of tensors, all of the same shape, and returns a
     * single tensor (also of the same shape). The inputs are specified as an
     * `Array` when the `apply` method of the `Add` layer instance is called. For
     * example:
     *
     * ```js
     * const input1 = tf.input({shape: [2, 2]});
     * const input2 = tf.input({shape: [2, 2]});
     * const addLayer = tf.layers.add();
     * const sum = addLayer.apply([input1, input2]);
     * console.log(JSON.stringify(sum.shape));
     * // You get [null, 2, 2], with the first dimension as the undetermined batch
     * // dimension.
     * ```
     */
    /** @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'} */
    function add$1(args) {
        return new Add(args);
    }
    /**
     * Layer that performs element-wise averaging on an `Array` of inputs.
     *
     * It takes as input a list of tensors, all of the same shape, and returns a
     * single tensor (also of the same shape). For example:
     *
     * ```js
     * const input1 = tf.input({shape: [2, 2]});
     * const input2 = tf.input({shape: [2, 2]});
     * const averageLayer = tf.layers.average();
     * const average = averageLayer.apply([input1, input2]);
     * console.log(JSON.stringify(average.shape));
     * // You get [null, 2, 2], with the first dimension as the undetermined batch
     * // dimension.
     * ```
     */
    /** @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'} */
    function average$1(args) {
        return new Average(args);
    }
    /**
     * Layer that concatenates an `Array` of inputs.
     *
     * It takes a list of tensors, all of the same shape except for the
     * concatenation axis, and returns a single tensor, the concatenation
     * of all inputs. For example:
     *
     * ```js
     * const input1 = tf.input({shape: [2, 2]});
     * const input2 = tf.input({shape: [2, 3]});
     * const concatLayer = tf.layers.concatenate();
     * const output = concatLayer.apply([input1, input2]);
     * console.log(JSON.stringify(output.shape));
     * // You get [null, 2, 5], with the first dimension as the undetermined batch
     * // dimension. The last dimension (5) is the result of concatenating the
     * // last dimensions of the inputs (2 and 3).
     * ```
     */
    /** @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'} */
    function concatenate$2(args) {
        return new Concatenate(args);
    }
    /**
     * Layer that computes the element-wise maximum an `Array` of inputs.
     *
     * It takes as input a list of tensors, all of the same shape and returns a
     * single tensor (also of the same shape). For example:
     *
     * ```js
     * const input1 = tf.input({shape: [2, 2]});
     * const input2 = tf.input({shape: [2, 2]});
     * const maxLayer = tf.layers.maximum();
     * const max = maxLayer.apply([input1, input2]);
     * console.log(JSON.stringify(max.shape));
     * // You get [null, 2, 2], with the first dimension as the undetermined batch
     * // dimension.
     * ```
     */
    /** @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'} */
    function maximum$1(args) {
        return new Maximum(args);
    }
    /**
     * Layer that computes the element-wise minimum of an `Array` of inputs.
     *
     * It takes as input a list of tensors, all of the same shape and returns a
     * single tensor (also of the same shape). For example:
     *
     * ```js
     * const input1 = tf.input({shape: [2, 2]});
     * const input2 = tf.input({shape: [2, 2]});
     * const minLayer = tf.layers.minimum();
     * const min = minLayer.apply([input1, input2]);
     * console.log(JSON.stringify(min.shape));
     * // You get [null, 2, 2], with the first dimension as the undetermined batch
     * // dimension.
     * ```
     */
    /** @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'} */
    function minimum$1(args) {
        return new Minimum(args);
    }
    /**
     * Layer that multiplies (element-wise) an `Array` of inputs.
     *
     * It takes as input an Array of tensors, all of the same
     * shape, and returns a single tensor (also of the same shape).
     * For example:
     *
     * ```js
     * const input1 = tf.input({shape: [2, 2]});
     * const input2 = tf.input({shape: [2, 2]});
     * const input3 = tf.input({shape: [2, 2]});
     * const multiplyLayer = tf.layers.multiply();
     * const product = multiplyLayer.apply([input1, input2, input3]);
     * console.log(product.shape);
     * // You get [null, 2, 2], with the first dimension as the undetermined batch
     * // dimension.
     */
    /** @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'} */
    function multiply$1(args) {
        return new Multiply(args);
    }
    /**
     * Layer that computes a dot product between samples in two tensors.
     *
     * E.g., if applied to a list of two tensors `a` and `b` both of shape
     * `[batchSize, n]`, the output will be a tensor of shape `[batchSize, 1]`,
     * where each entry at index `[i, 0]` will be the dot product between
     * `a[i, :]` and `b[i, :]`.
     *
     * Example:
     *
     * ```js
     * const dotLayer = tf.layers.dot({axes: -1});
     * const x1 = tf.tensor2d([[10, 20], [30, 40]]);
     * const x2 = tf.tensor2d([[-1, -2], [-3, -4]]);
     *
     * // Invoke the layer's apply() method in eager (imperative) mode.
     * const y = dotLayer.apply([x1, x2]);
     * y.print();
     * ```
     */
    /** @doc {heading: 'Layers', subheading: 'Merge', namespace: 'layers'} */
    function dot$1(args) {
        return new Dot(args);
    }
    // Normalization Layers.
    /**
     * Batch normalization layer (Ioffe and Szegedy, 2014).
     *
     * Normalize the activations of the previous layer at each batch,
     * i.e. applies a transformation that maintains the mean activation
     * close to 0 and the activation standard deviation close to 1.
     *
     * Input shape:
     *   Arbitrary. Use the keyword argument `inputShape` (Array of integers, does
     *   not include the sample axis) when calling the constructor of this class,
     *   if this layer is used as a first layer in a model.
     *
     * Output shape:
     *   Same shape as input.
     *
     * References:
     *   - [Batch Normalization: Accelerating Deep Network Training by Reducing
     * Internal Covariate Shift](https://arxiv.org/abs/1502.03167)
     */
    /**
     * @doc {heading: 'Layers', subheading: 'Normalization', namespace: 'layers'}
     */
    function batchNormalization$1(args) {
        return new BatchNormalization(args);
    }
    // Padding Layers.
    /**
     * Zero-padding layer for 2D input (e.g., image).
     *
     * This layer can add rows and columns of zeros
     * at the top, bottom, left and right side of an image tensor.
     *
     * Input shape:
     *   4D tensor with shape:
     *   - If `dataFormat` is `"channelsLast"`:
     *     `[batch, rows, cols, channels]`
     *   - If `data_format` is `"channels_first"`:
     *     `[batch, channels, rows, cols]`.
     *
     * Output shape:
     *   4D with shape:
     *   - If `dataFormat` is `"channelsLast"`:
     *     `[batch, paddedRows, paddedCols, channels]`
     *    - If `dataFormat` is `"channelsFirst"`:
     *     `[batch, channels, paddedRows, paddedCols]`.
     */
    /** @doc {heading: 'Layers', subheading: 'Padding', namespace: 'layers'} */
    function zeroPadding2d(args) {
        return new ZeroPadding2D(args);
    }
    // Pooling Layers.
    /**
     * Average pooling operation for spatial data.
     *
     * Input shape: `[batchSize, inLength, channels]`
     *
     * Output shape: `[batchSize, pooledLength, channels]`
     *
     * `tf.avgPool1d` is an alias.
     */
    /** @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'} */
    function averagePooling1d(args) {
        return new AveragePooling1D(args);
    }
    function avgPool1d(args) {
        return averagePooling1d(args);
    }
    // For backwards compatibility.
    // See https://github.com/tensorflow/tfjs/issues/152
    function avgPooling1d(args) {
        return averagePooling1d(args);
    }
    /**
     * Average pooling operation for spatial data.
     *
     * Input shape:
     *  - If `dataFormat === CHANNEL_LAST`:
     *      4D tensor with shape:
     *      `[batchSize, rows, cols, channels]`
     *  - If `dataFormat === CHANNEL_FIRST`:
     *      4D tensor with shape:
     *      `[batchSize, channels, rows, cols]`
     *
     * Output shape
     *  - If `dataFormat === CHANNEL_LAST`:
     *      4D tensor with shape:
     *      `[batchSize, pooleRows, pooledCols, channels]`
     *  - If `dataFormat === CHANNEL_FIRST`:
     *      4D tensor with shape:
     *      `[batchSize, channels, pooleRows, pooledCols]`
     *
     * `tf.avgPool2d` is an alias.
     */
    /** @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'} */
    function averagePooling2d(args) {
        return new AveragePooling2D(args);
    }
    function avgPool2d(args) {
        return averagePooling2d(args);
    }
    // For backwards compatibility.
    // See https://github.com/tensorflow/tfjs/issues/152
    function avgPooling2d(args) {
        return averagePooling2d(args);
    }
    /**
     * Average pooling operation for 3D data.
     *
     * Input shape
     *   - If `dataFormat === channelsLast`:
     *       5D tensor with shape:
     *       `[batchSize, depths, rows, cols, channels]`
     *   - If `dataFormat === channelsFirst`:
     *      4D tensor with shape:
     *       `[batchSize, channels, depths, rows, cols]`
     *
     * Output shape
     *   - If `dataFormat=channelsLast`:
     *       5D tensor with shape:
     *       `[batchSize, pooledDepths, pooledRows, pooledCols, channels]`
     *   - If `dataFormat=channelsFirst`:
     *       5D tensor with shape:
     *       `[batchSize, channels, pooledDepths, pooledRows, pooledCols]`
     */
    /** @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'} */
    function averagePooling3d(args) {
        return new AveragePooling3D(args);
    }
    function avgPool3d(args) {
        return averagePooling3d(args);
    }
    // For backwards compatibility.
    // See https://github.com/tensorflow/tfjs/issues/152
    function avgPooling3d(args) {
        return averagePooling3d(args);
    }
    /**
     * Global average pooling operation for temporal data.
     *
     * Input Shape: 3D tensor with shape: `[batchSize, steps, features]`.
     *
     * Output Shape:2D tensor with shape: `[batchSize, features]`.
     */
    /** @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'} */
    function globalAveragePooling1d(args) {
        return new GlobalAveragePooling1D(args);
    }
    /**
     * Global average pooling operation for spatial data.
     *
     * Input shape:
     *   - If `dataFormat` is `CHANNEL_LAST`:
     *       4D tensor with shape: `[batchSize, rows, cols, channels]`.
     *   - If `dataFormat` is `CHANNEL_FIRST`:
     *       4D tensor with shape: `[batchSize, channels, rows, cols]`.
     *
     * Output shape:
     *   2D tensor with shape: `[batchSize, channels]`.
     */
    /** @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'} */
    function globalAveragePooling2d(args) {
        return new GlobalAveragePooling2D(args);
    }
    /**
     * Global max pooling operation for temporal data.
     *
     * Input Shape: 3D tensor with shape: `[batchSize, steps, features]`.
     *
     * Output Shape:2D tensor with shape: `[batchSize, features]`.
     */
    /** @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'} */
    function globalMaxPooling1d(args) {
        return new GlobalMaxPooling1D(args);
    }
    /**
     * Global max pooling operation for spatial data.
     *
     * Input shape:
     *   - If `dataFormat` is `CHANNEL_LAST`:
     *       4D tensor with shape: `[batchSize, rows, cols, channels]`.
     *   - If `dataFormat` is `CHANNEL_FIRST`:
     *       4D tensor with shape: `[batchSize, channels, rows, cols]`.
     *
     * Output shape:
     *   2D tensor with shape: `[batchSize, channels]`.
     */
    /** @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'} */
    function globalMaxPooling2d(args) {
        return new GlobalMaxPooling2D(args);
    }
    /**
     * Max pooling operation for temporal data.
     *
     * Input shape:  `[batchSize, inLength, channels]`
     *
     * Output shape: `[batchSize, pooledLength, channels]`
     */
    /** @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'} */
    function maxPooling1d(args) {
        return new MaxPooling1D(args);
    }
    /**
     * Max pooling operation for spatial data.
     *
     * Input shape
     *   - If `dataFormat === CHANNEL_LAST`:
     *       4D tensor with shape:
     *       `[batchSize, rows, cols, channels]`
     *   - If `dataFormat === CHANNEL_FIRST`:
     *      4D tensor with shape:
     *       `[batchSize, channels, rows, cols]`
     *
     * Output shape
     *   - If `dataFormat=CHANNEL_LAST`:
     *       4D tensor with shape:
     *       `[batchSize, pooleRows, pooledCols, channels]`
     *   - If `dataFormat=CHANNEL_FIRST`:
     *       4D tensor with shape:
     *       `[batchSize, channels, pooleRows, pooledCols]`
     */
    /** @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'} */
    function maxPooling2d(args) {
        return new MaxPooling2D(args);
    }
    /**
     * Max pooling operation for 3D data.
     *
     * Input shape
     *   - If `dataFormat === channelsLast`:
     *       5D tensor with shape:
     *       `[batchSize, depths, rows, cols, channels]`
     *   - If `dataFormat === channelsFirst`:
     *      5D tensor with shape:
     *       `[batchSize, channels, depths, rows, cols]`
     *
     * Output shape
     *   - If `dataFormat=channelsLast`:
     *       5D tensor with shape:
     *       `[batchSize, pooledDepths, pooledRows, pooledCols, channels]`
     *   - If `dataFormat=channelsFirst`:
     *       5D tensor with shape:
     *       `[batchSize, channels, pooledDepths, pooledRows, pooledCols]`
     */
    /** @doc {heading: 'Layers', subheading: 'Pooling', namespace: 'layers'} */
    function maxPooling3d(args) {
        return new MaxPooling3D(args);
    }
    // Recurrent Layers.
    /**
     * Gated Recurrent Unit - Cho et al. 2014.
     *
     * This is an `RNN` layer consisting of one `GRUCell`. However, unlike
     * the underlying `GRUCell`, the `apply` method of `SimpleRNN` operates
     * on a sequence of inputs. The shape of the input (not including the first,
     * batch dimension) needs to be at least 2-D, with the first dimension being
     * time steps. For example:
     *
     * ```js
     * const rnn = tf.layers.gru({units: 8, returnSequences: true});
     *
     * // Create an input with 10 time steps.
     * const input = tf.input({shape: [10, 20]});
     * const output = rnn.apply(input);
     *
     * console.log(JSON.stringify(output.shape));
     * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
     * // same as the sequence length of `input`, due to `returnSequences`: `true`;
     * // 3rd dimension is the `GRUCell`'s number of units.
     */
    /** @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'} */
    function gru(args) {
        return new GRU(args);
    }
    /**
     * Cell class for `GRU`.
     *
     * `GRUCell` is distinct from the `RNN` subclass `GRU` in that its
     * `apply` method takes the input data of only a single time step and returns
     * the cell's output at the time step, while `GRU` takes the input data
     * over a number of time steps. For example:
     *
     * ```js
     * const cell = tf.layers.gruCell({units: 2});
     * const input = tf.input({shape: [10]});
     * const output = cell.apply(input);
     *
     * console.log(JSON.stringify(output.shape));
     * // [null, 10]: This is the cell's output at a single time step. The 1st
     * // dimension is the unknown batch size.
     * ```
     *
     * Instance(s) of `GRUCell` can be used to construct `RNN` layers. The
     * most typical use of this workflow is to combine a number of cells into a
     * stacked RNN cell (i.e., `StackedRNNCell` internally) and use it to create an
     * RNN. For example:
     *
     * ```js
     * const cells = [
     *   tf.layers.gruCell({units: 4}),
     *   tf.layers.gruCell({units: 8}),
     * ];
     * const rnn = tf.layers.rnn({cell: cells, returnSequences: true});
     *
     * // Create an input with 10 time steps and a length-20 vector at each step.
     * const input = tf.input({shape: [10, 20]});
     * const output = rnn.apply(input);
     *
     * console.log(JSON.stringify(output.shape));
     * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
     * // same as the sequence length of `input`, due to `returnSequences`: `true`;
     * // 3rd dimension is the last `gruCell`'s number of units.
     * ```
     *
     * To create an `RNN` consisting of only *one* `GRUCell`, use the
     * `tf.layers.gru`.
     */
    /** @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'} */
    function gruCell(args) {
        return new GRUCell(args);
    }
    /**
     * Long-Short Term Memory layer - Hochreiter 1997.
     *
     * This is an `RNN` layer consisting of one `LSTMCell`. However, unlike
     * the underlying `LSTMCell`, the `apply` method of `LSTM` operates
     * on a sequence of inputs. The shape of the input (not including the first,
     * batch dimension) needs to be at least 2-D, with the first dimension being
     * time steps. For example:
     *
     * ```js
     * const lstm = tf.layers.lstm({units: 8, returnSequences: true});
     *
     * // Create an input with 10 time steps.
     * const input = tf.input({shape: [10, 20]});
     * const output = lstm.apply(input);
     *
     * console.log(JSON.stringify(output.shape));
     * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
     * // same as the sequence length of `input`, due to `returnSequences`: `true`;
     * // 3rd dimension is the `LSTMCell`'s number of units.
     */
    /** @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'} */
    function lstm(args) {
        return new LSTM(args);
    }
    /**
     * Cell class for `LSTM`.
     *
     * `LSTMCell` is distinct from the `RNN` subclass `LSTM` in that its
     * `apply` method takes the input data of only a single time step and returns
     * the cell's output at the time step, while `LSTM` takes the input data
     * over a number of time steps. For example:
     *
     * ```js
     * const cell = tf.layers.lstmCell({units: 2});
     * const input = tf.input({shape: [10]});
     * const output = cell.apply(input);
     *
     * console.log(JSON.stringify(output.shape));
     * // [null, 10]: This is the cell's output at a single time step. The 1st
     * // dimension is the unknown batch size.
     * ```
     *
     * Instance(s) of `LSTMCell` can be used to construct `RNN` layers. The
     * most typical use of this workflow is to combine a number of cells into a
     * stacked RNN cell (i.e., `StackedRNNCell` internally) and use it to create an
     * RNN. For example:
     *
     * ```js
     * const cells = [
     *   tf.layers.lstmCell({units: 4}),
     *   tf.layers.lstmCell({units: 8}),
     * ];
     * const rnn = tf.layers.rnn({cell: cells, returnSequences: true});
     *
     * // Create an input with 10 time steps and a length-20 vector at each step.
     * const input = tf.input({shape: [10, 20]});
     * const output = rnn.apply(input);
     *
     * console.log(JSON.stringify(output.shape));
     * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
     * // same as the sequence length of `input`, due to `returnSequences`: `true`;
     * // 3rd dimension is the last `lstmCell`'s number of units.
     * ```
     *
     * To create an `RNN` consisting of only *one* `LSTMCell`, use the
     * `tf.layers.lstm`.
     */
    /** @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'} */
    function lstmCell(args) {
        return new LSTMCell(args);
    }
    /**
     * Fully-connected RNN where the output is to be fed back to input.
     *
     * This is an `RNN` layer consisting of one `SimpleRNNCell`. However, unlike
     * the underlying `SimpleRNNCell`, the `apply` method of `SimpleRNN` operates
     * on a sequence of inputs. The shape of the input (not including the first,
     * batch dimension) needs to be at least 2-D, with the first dimension being
     * time steps. For example:
     *
     * ```js
     * const rnn = tf.layers.simpleRNN({units: 8, returnSequences: true});
     *
     * // Create an input with 10 time steps.
     * const input = tf.input({shape: [10, 20]});
     * const output = rnn.apply(input);
     *
     * console.log(JSON.stringify(output.shape));
     * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
     * // same as the sequence length of `input`, due to `returnSequences`: `true`;
     * // 3rd dimension is the `SimpleRNNCell`'s number of units.
     * ```
     */
    /** @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'} */
    function simpleRNN(args) {
        return new SimpleRNN(args);
    }
    /**
     * Cell class for `SimpleRNN`.
     *
     * `SimpleRNNCell` is distinct from the `RNN` subclass `SimpleRNN` in that its
     * `apply` method takes the input data of only a single time step and returns
     * the cell's output at the time step, while `SimpleRNN` takes the input data
     * over a number of time steps. For example:
     *
     * ```js
     * const cell = tf.layers.simpleRNNCell({units: 2});
     * const input = tf.input({shape: [10]});
     * const output = cell.apply(input);
     *
     * console.log(JSON.stringify(output.shape));
     * // [null, 10]: This is the cell's output at a single time step. The 1st
     * // dimension is the unknown batch size.
     * ```
     *
     * Instance(s) of `SimpleRNNCell` can be used to construct `RNN` layers. The
     * most typical use of this workflow is to combine a number of cells into a
     * stacked RNN cell (i.e., `StackedRNNCell` internally) and use it to create an
     * RNN. For example:
     *
     * ```js
     * const cells = [
     *   tf.layers.simpleRNNCell({units: 4}),
     *   tf.layers.simpleRNNCell({units: 8}),
     * ];
     * const rnn = tf.layers.rnn({cell: cells, returnSequences: true});
     *
     * // Create an input with 10 time steps and a length-20 vector at each step.
     * const input = tf.input({shape: [10, 20]});
     * const output = rnn.apply(input);
     *
     * console.log(JSON.stringify(output.shape));
     * // [null, 10, 8]: 1st dimension is unknown batch size; 2nd dimension is the
     * // same as the sequence length of `input`, due to `returnSequences`: `true`;
     * // 3rd dimension is the last `SimpleRNNCell`'s number of units.
     * ```
     *
     * To create an `RNN` consisting of only *one* `SimpleRNNCell`, use the
     * `tf.layers.simpleRNN`.
     */
    /** @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'} */
    function simpleRNNCell(args) {
        return new SimpleRNNCell(args);
    }
    /**
     * Base class for recurrent layers.
     *
     * Input shape:
     *   3D tensor with shape `[batchSize, timeSteps, inputDim]`.
     *
     * Output shape:
     *   - if `returnState`, an Array of tensors (i.e., `tf.Tensor`s). The first
     *     tensor is the output. The remaining tensors are the states at the
     *     last time step, each with shape `[batchSize, units]`.
     *   - if `returnSequences`, the output will have shape
     *     `[batchSize, timeSteps, units]`.
     *   - else, the output will have shape `[batchSize, units]`.
     *
     * Masking:
     *   This layer supports masking for input data with a variable number
     *   of timesteps. To introduce masks to your data,
     *   use an embedding layer with the `mask_zero` parameter
     *   set to `True`.
     *
     * Notes on using statefulness in RNNs:
     *   You can set RNN layers to be 'stateful', which means that the states
     *   computed for the samples in one batch will be reused as initial states
     *   for the samples in the next batch. This assumes a one-to-one mapping
     *   between samples in different successive batches.
     *
     *   To enable statefulness:
     *     - specify `stateful: true` in the layer constructor.
     *     - specify a fixed batch size for your model, by passing
     *       if sequential model:
     *         `batchInputShape=[...]` to the first layer in your model.
     *       else for functional model with 1 or more Input layers:
     *         `batchShape=[...]` to all the first layers in your model.
     *       This is the expected shape of your inputs *including the batch size*.
     *       It should be a tuple of integers, e.g. `(32, 10, 100)`.
     *     - specify `shuffle=False` when calling fit().
     *
     *   To reset the states of your model, call `.resetStates()` on either
     *   a specific layer, or on your entire model.
     *
     * Note on specifying the initial state of RNNs
     *   You can specify the initial state of RNN layers symbolically by
     *   calling them with the option `initialState`. The value of
     *   `initialState` should be a tensor or list of tensors representing
     *   the initial state of the RNN layer.
     *
     *   You can specify the initial state of RNN layers numerically by
     *   calling `resetStates` with the keyword argument `states`. The value of
     *   `states` should be a numpy array or list of numpy arrays representing
     *   the initial state of the RNN layer.
     *
     * Note on passing external constants to RNNs
     *   You can pass "external" constants to the cell using the `constants`
     *   keyword argument of `RNN.call` method. This requires that the `cell.call`
     *   method accepts the same keyword argument `constants`. Such constants
     *   can be used to conditon the cell transformation on additional static inputs
     *   (not changing over time), a.k.a an attention mechanism.
     */
    /** @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'} */
    function rnn$1(args) {
        return new RNN(args);
    }
    /**
     * Wrapper allowing a stack of RNN cells to behave as a single cell.
     *
     * Used to implement efficient stacked RNNs.
     */
    /** @doc {heading: 'Layers', subheading: 'Recurrent', namespace: 'layers'} */
    function stackedRNNCells(args) {
        return new StackedRNNCells(args);
    }
    // Wrapper Layers.
    /** @doc {heading: 'Layers', subheading: 'Wrapper', namespace: 'layers'} */
    function bidirectional(args) {
        return new Bidirectional(args);
    }
    /**
     * This wrapper applies a layer to every temporal slice of an input.
     *
     * The input should be at least 3D,  and the dimension of the index `1` will be
     * considered to be the temporal dimension.
     *
     * Consider a batch of 32 samples, where each sample is a sequence of 10 vectors
     * of 16 dimensions. The batch input shape of the layer is then `[32,  10,
     * 16]`, and the `inputShape`, not including the sample dimension, is
     * `[10, 16]`.
     *
     * You can then use `TimeDistributed` to apply a `Dense` layer to each of the 10
     * timesteps, independently:
     *
     * ```js
     * const model = tf.sequential();
     * model.add(tf.layers.timeDistributed({
     *   layer: tf.layers.dense({units: 8}),
     *   inputShape: [10, 16],
     * }));
     *
     * // Now model.outputShape = [null, 10, 8].
     * // The output will then have shape `[32, 10, 8]`.
     *
     * // In subsequent layers, there is no need for `inputShape`:
     * model.add(tf.layers.timeDistributed({layer: tf.layers.dense({units: 32})}));
     * console.log(JSON.stringify(model.outputs[0].shape));
     * // Now model.outputShape = [null, 10, 32].
     * ```
     *
     * The output will then have shape `[32, 10, 32]`.
     *
     * `TimeDistributed` can be used with arbitrary layers, not just `Dense`, for
     * instance a `Conv2D` layer.
     *
     * ```js
     * const model = tf.sequential();
     * model.add(tf.layers.timeDistributed({
     *   layer: tf.layers.conv2d({filters: 64, kernelSize: [3, 3]}),
     *   inputShape: [10, 299, 299, 3],
     * }));
     * console.log(JSON.stringify(model.outputs[0].shape));
     * ```
     */
    /** @doc {heading: 'Layers', subheading: 'Wrapper', namespace: 'layers'} */
    function timeDistributed(args) {
        return new TimeDistributed(args);
    }
    // Aliases for pooling.
    var globalMaxPool1d = globalMaxPooling1d;
    var globalMaxPool2d = globalMaxPooling2d;
    var maxPool1d = maxPooling1d;
    var maxPool2d = maxPooling2d;
    /**
     * Apply additive zero-centered Gaussian noise.
     *
     * As it is a regularization layer, it is only active at training time.
     *
     * This is useful to mitigate overfitting
     * (you could see it as a form of random data augmentation).
     * Gaussian Noise (GS) is a natural choice as corruption process
     * for real valued inputs.
     *
     * # Arguments
     *     stddev: float, standard deviation of the noise distribution.
     *
     * # Input shape
     *         Arbitrary. Use the keyword argument `input_shape`
     *         (tuple of integers, does not include the samples axis)
     *         when using this layer as the first layer in a model.
     *
     * # Output shape
     *         Same shape as input.
     */
    /** @doc {heading: 'Layers', subheading: 'Noise', namespace: 'layers'} */
    function gaussianNoise(args) {
        return new GaussianNoise(args);
    }
    /**
     * Apply multiplicative 1-centered Gaussian noise.
     *
     * As it is a regularization layer, it is only active at training time.
     *
     * Arguments:
     *   - `rate`: float, drop probability (as with `Dropout`).
     *     The multiplicative noise will have
     *     standard deviation `sqrt(rate / (1 - rate))`.
     *
     * Input shape:
     *   Arbitrary. Use the keyword argument `inputShape`
     *   (tuple of integers, does not include the samples axis)
     *   when using this layer as the first layer in a model.
     *
     * Output shape:
     *   Same shape as input.
     *
     * References:
     *   - [Dropout: A Simple Way to Prevent Neural Networks from Overfitting](
     *      http://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf)
     *
     */
    /** @doc {heading: 'Layers', subheading: 'Noise', namespace: 'layers'} */
    function gaussianDropout(args) {
        return new GaussianDropout(args);
    }
    /**
     * Applies Alpha Dropout to the input.
     *
     * As it is a regularization layer, it is only active at training time.
     *
     * Alpha Dropout is a `Dropout` that keeps mean and variance of inputs
     * to their original values, in order to ensure the self-normalizing property
     * even after this dropout.
     * Alpha Dropout fits well to Scaled Exponential Linear Units
     * by randomly setting activations to the negative saturation value.
     *
     * Arguments:
     *   - `rate`: float, drop probability (as with `Dropout`).
     *     The multiplicative noise will have
     *     standard deviation `sqrt(rate / (1 - rate))`.
     *   - `noise_shape`: A 1-D `Tensor` of type `int32`, representing the
     *     shape for randomly generated keep/drop flags.
     *
     * Input shape:
     *   Arbitrary. Use the keyword argument `inputShape`
     *   (tuple of integers, does not include the samples axis)
     *   when using this layer as the first layer in a model.
     *
     * Output shape:
     *   Same shape as input.
     *
     * References:
     *   - [Self-Normalizing Neural Networks](https://arxiv.org/abs/1706.02515)
     */
    /** @doc {heading: 'Layers', subheading: 'Noise', namespace: 'layers'} */
    function alphaDropout(args) {
        return new AlphaDropout(args);
    }
    /**
     * Masks a sequence by using a mask value to skip timesteps.
     *
     * If all features for a given sample timestep are equal to `mask_value`,
     * then the sample timestep will be masked (skipped) in all downstream layers
     * (as long as they support masking).
     *
     * If any downstream layer does not support masking yet receives such
     * an input mask, an exception will be raised.
     *
     * Arguments:
     *   - `maskValue`: Either None or mask value to skip.
     *
     * Input shape:
     *   Arbitrary. Use the keyword argument `inputShape`
     *   (tuple of integers, does not include the samples axis)
     *   when using this layer as the first layer in a model.
     *
     * Output shape:
     *   Same shape as input.
     */
    /** @doc {heading: 'Layers', subheading: 'Mask', namespace: 'layers'} */
    function masking(args) {
        return new Masking(args);
    }

    var exports_layers = /*#__PURE__*/Object.freeze({
        inputLayer: inputLayer,
        elu: elu$1,
        reLU: reLU,
        leakyReLU: leakyReLU,
        prelu: prelu,
        softmax: softmax,
        thresholdedReLU: thresholdedReLU,
        conv1d: conv1d$1,
        conv2d: conv2d$1,
        conv2dTranspose: conv2dTranspose,
        conv3d: conv3d$1,
        separableConv2d: separableConv2d,
        cropping2D: cropping2D,
        upSampling2d: upSampling2d,
        depthwiseConv2d: depthwiseConv2d$1,
        activation: activation,
        dense: dense,
        dropout: dropout$1,
        flatten: flatten$1,
        repeatVector: repeatVector,
        reshape: reshape,
        permute: permute,
        embedding: embedding,
        add: add$1,
        average: average$1,
        concatenate: concatenate$2,
        maximum: maximum$1,
        minimum: minimum$1,
        multiply: multiply$1,
        dot: dot$1,
        batchNormalization: batchNormalization$1,
        zeroPadding2d: zeroPadding2d,
        averagePooling1d: averagePooling1d,
        avgPool1d: avgPool1d,
        avgPooling1d: avgPooling1d,
        averagePooling2d: averagePooling2d,
        avgPool2d: avgPool2d,
        avgPooling2d: avgPooling2d,
        averagePooling3d: averagePooling3d,
        avgPool3d: avgPool3d,
        avgPooling3d: avgPooling3d,
        globalAveragePooling1d: globalAveragePooling1d,
        globalAveragePooling2d: globalAveragePooling2d,
        globalMaxPooling1d: globalMaxPooling1d,
        globalMaxPooling2d: globalMaxPooling2d,
        maxPooling1d: maxPooling1d,
        maxPooling2d: maxPooling2d,
        maxPooling3d: maxPooling3d,
        gru: gru,
        gruCell: gruCell,
        lstm: lstm,
        lstmCell: lstmCell,
        simpleRNN: simpleRNN,
        simpleRNNCell: simpleRNNCell,
        rnn: rnn$1,
        stackedRNNCells: stackedRNNCells,
        bidirectional: bidirectional,
        timeDistributed: timeDistributed,
        globalMaxPool1d: globalMaxPool1d,
        globalMaxPool2d: globalMaxPool2d,
        maxPool1d: maxPool1d,
        maxPool2d: maxPool2d,
        Layer: Layer,
        RNN: RNN,
        RNNCell: RNNCell,
        input: input,
        gaussianNoise: gaussianNoise,
        gaussianDropout: gaussianDropout,
        alphaDropout: alphaDropout,
        masking: masking
    });

    /**
     * Binary accuracy metric function.
     *
     * `yTrue` and `yPred` can have 0-1 values. Example:
     * ```js
     * const x = tf.tensor2d([[1, 1, 1, 1], [0, 0, 0, 0]], [2, 4]);
     * const y = tf.tensor2d([[1, 0, 1, 0], [0, 0, 0, 1]], [2, 4]);
     * const accuracy = tf.metrics.binaryAccuracy(x, y);
     * accuracy.print();
     * ```
     *
     * `yTrue` and `yPred` can also have floating-number values between 0 and 1, in
     * which case the values will be thresholded at 0.5 to yield 0-1 values (i.e.,
     * a value >= 0.5 and <= 1.0 is interpreted as 1.
     * )
     * Example:
     * ```js
     * const x = tf.tensor1d([1, 1, 1, 1, 0, 0, 0, 0]);
     * const y = tf.tensor1d([0.2, 0.4, 0.6, 0.8, 0.2, 0.3, 0.4, 0.7]);
     * const accuracy = tf.metrics.binaryAccuracy(x, y);
     * accuracy.print();
     * ```
     *
     * @param yTrue Binary Tensor of truth.
     * @param yPred Binary Tensor of prediction.
     * @return Accuracy Tensor.
     */
    /** @doc {heading: 'Metrics', namespace: 'metrics'} */
    function binaryAccuracy$1(yTrue, yPred) {
        return binaryAccuracy(yTrue, yPred);
    }
    /**
     * Binary crossentropy metric function.
     *
     * Example:
     * ```js
     * const x = tf.tensor2d([[0], [1], [1], [1]]);
     * const y = tf.tensor2d([[0], [0], [0.5], [1]]);
     * const crossentropy = tf.metrics.binaryCrossentropy(x, y);
     * crossentropy.print();
     * ```
     *
     * @param yTrue Binary Tensor of truth.
     * @param yPred Binary Tensor of prediction, probabilities for the `1` case.
     * @return Accuracy Tensor.
     */
    /** @doc {heading: 'Metrics', namespace: 'metrics'} */
    function binaryCrossentropy$2(yTrue, yPred) {
        return binaryCrossentropy$1(yTrue, yPred);
    }
    /**
     * Sparse categorical accuracy metric function.
     *
     * Example:
     * ```js
     *
     * const yTrue = tf.tensor1d([1, 1, 2, 2, 0]);
     * const yPred = tf.tensor2d(
     *      [[0, 1, 0], [1, 0, 0], [0, 0.4, 0.6], [0, 0.6, 0.4], [0.7, 0.3, 0]]);
     * const crossentropy = tf.metrics.sparseCategoricalAccuracy(yTrue, yPred);
     * crossentropy.print();
     * ```
     *
     * @param yTrue True labels: indices.
     * @param yPred Predicted probabilities or logits.
     * @returns Accuracy tensor.
     */
    /** @doc {heading: 'Metrics', namespace: 'metrics'} */
    function sparseCategoricalAccuracy$1(yTrue, yPred) {
        return sparseCategoricalAccuracy(yTrue, yPred);
    }
    /**
     * Categorical accuracy metric function.
     *
     * Example:
     * ```js
     * const x = tf.tensor2d([[0, 0, 0, 1], [0, 0, 0, 1]]);
     * const y = tf.tensor2d([[0.1, 0.8, 0.05, 0.05], [0.1, 0.05, 0.05, 0.8]]);
     * const accuracy = tf.metrics.categoricalAccuracy(x, y);
     * accuracy.print();
     * ```
     *
     * @param yTrue Binary Tensor of truth: one-hot encoding of categories.
     * @param yPred Binary Tensor of prediction: probabilities or logits for the
     *   same categories as in `yTrue`.
     * @return Accuracy Tensor.
     */
    /** @doc {heading: 'Metrics', namespace: 'metrics'} */
    function categoricalAccuracy$1(yTrue, yPred) {
        return categoricalAccuracy(yTrue, yPred);
    }
    /**
     * Categorical crossentropy between an output tensor and a target tensor.
     *
     * @param target A tensor of the same shape as `output`.
     * @param output A tensor resulting from a softmax (unless `fromLogits` is
     *  `true`, in which case `output` is expected to be the logits).
     * @param fromLogits Boolean, whether `output` is the result of a softmax, or is
     *   a tensor of logits.
     */
    /** @doc {heading: 'Metrics', namespace: 'metrics'} */
    function categoricalCrossentropy$2(yTrue, yPred) {
        return categoricalCrossentropy$1(yTrue, yPred);
    }
    /**
     * Computes the precision of the predictions with respect to the labels.
     *
     * Example:
     * ```js
     * const x = tf.tensor2d(
     *    [
     *      [0, 0, 0, 1],
     *      [0, 1, 0, 0],
     *      [0, 0, 0, 1],
     *      [1, 0, 0, 0],
     *      [0, 0, 1, 0]
     *    ]
     * );
     *
     * const y = tf.tensor2d(
     *    [
     *      [0, 0, 1, 0],
     *      [0, 1, 0, 0],
     *      [0, 0, 0, 1],
     *      [0, 1, 0, 0],
     *      [0, 1, 0, 0]
     *    ]
     * );
     *
     * const precision = tf.metrics.precision(x, y);
     * precision.print();
     * ```
     *
     * @param yTrue The ground truth values. Expected to be contain only 0-1 values.
     * @param yPred The predicted values. Expected to be contain only 0-1 values.
     * @return Precision Tensor.
     */
    /** @doc {heading: 'Metrics', namespace: 'metrics'} */
    function precision$1(yTrue, yPred) {
        return precision(yTrue, yPred);
    }
    /**
     * Computes the recall of the predictions with respect to the labels.
     *
     * Example:
     * ```js
     * const x = tf.tensor2d(
     *    [
     *      [0, 0, 0, 1],
     *      [0, 1, 0, 0],
     *      [0, 0, 0, 1],
     *      [1, 0, 0, 0],
     *      [0, 0, 1, 0]
     *    ]
     * );
     *
     * const y = tf.tensor2d(
     *    [
     *      [0, 0, 1, 0],
     *      [0, 1, 0, 0],
     *      [0, 0, 0, 1],
     *      [0, 1, 0, 0],
     *      [0, 1, 0, 0]
     *    ]
     * );
     *
     * const recall = tf.metrics.recall(x, y);
     * recall.print();
     * ```
     *
     * @param yTrue The ground truth values. Expected to be contain only 0-1 values.
     * @param yPred The predicted values. Expected to be contain only 0-1 values.
     * @return Recall Tensor.
     */
    /** @doc {heading: 'Metrics', namespace: 'metrics'} */
    function recall$1(yTrue, yPred) {
        return recall(yTrue, yPred);
    }
    /**
     * Loss or metric function: Cosine proximity.
     *
     * Mathematically, cosine proximity is defined as:
     *   `-sum(l2Normalize(yTrue) * l2Normalize(yPred))`,
     * wherein `l2Normalize()` normalizes the L2 norm of the input to 1 and `*`
     * represents element-wise multiplication.
     *
     * ```js
     * const yTrue = tf.tensor2d([[1, 0], [1, 0]]);
     * const yPred = tf.tensor2d([[1 / Math.sqrt(2), 1 / Math.sqrt(2)], [0, 1]]);
     * const proximity = tf.metrics.cosineProximity(yTrue, yPred);
     * proximity.print();
     * ```
     *
     * @param yTrue Truth Tensor.
     * @param yPred Prediction Tensor.
     * @return Cosine proximity Tensor.
     */
    /** @doc {heading: 'Metrics', namespace: 'metrics'} */
    function cosineProximity$1(yTrue, yPred) {
        return cosineProximity(yTrue, yPred);
    }
    /**
     * Loss or metric function: Mean absolute error.
     *
     * Mathematically, mean absolute error is defined as:
     *   `mean(abs(yPred - yTrue))`,
     * wherein the `mean` is applied over feature dimensions.
     *
     * ```js
     * const yTrue = tf.tensor2d([[0, 1], [0, 0], [2, 3]]);
     * const yPred = tf.tensor2d([[0, 1], [0, 1], [-2, -3]]);
     * const mse = tf.metrics.meanAbsoluteError(yTrue, yPred);
     * mse.print();
     * ```
     *
     * @param yTrue Truth Tensor.
     * @param yPred Prediction Tensor.
     * @return Mean absolute error Tensor.
     */
    /** @doc {heading: 'Metrics', namespace: 'metrics'} */
    function meanAbsoluteError$1(yTrue, yPred) {
        return meanAbsoluteError(yTrue, yPred);
    }
    /**
     * Loss or metric function: Mean absolute percentage error.
     *
     * ```js
     * const yTrue = tf.tensor2d([[0, 1], [10, 20]]);
     * const yPred = tf.tensor2d([[0, 1], [11, 24]]);
     * const mse = tf.metrics.meanAbsolutePercentageError(yTrue, yPred);
     * mse.print();
     * ```
     *
     * Aliases: `tf.metrics.MAPE`, `tf.metrics.mape`.
     *
     * @param yTrue Truth Tensor.
     * @param yPred Prediction Tensor.
     * @return Mean absolute percentage error Tensor.
     */
    /** @doc {heading: 'Metrics', namespace: 'metrics'} */
    function meanAbsolutePercentageError$1(yTrue, yPred) {
        return meanAbsolutePercentageError(yTrue, yPred);
    }
    function MAPE$2(yTrue, yPred) {
        return meanAbsolutePercentageError(yTrue, yPred);
    }
    function mape$2(yTrue, yPred) {
        return meanAbsolutePercentageError(yTrue, yPred);
    }
    /**
     * Loss or metric function: Mean squared error.
     *
     * ```js
     * const yTrue = tf.tensor2d([[0, 1], [3, 4]]);
     * const yPred = tf.tensor2d([[0, 1], [-3, -4]]);
     * const mse = tf.metrics.meanSquaredError(yTrue, yPred);
     * mse.print();
     * ```
     *
     * Aliases: `tf.metrics.MSE`, `tf.metrics.mse`.
     *
     * @param yTrue Truth Tensor.
     * @param yPred Prediction Tensor.
     * @return Mean squared error Tensor.
     */
    /** @doc {heading: 'Metrics', namespace: 'metrics'} */
    function meanSquaredError$1(yTrue, yPred) {
        return meanSquaredError(yTrue, yPred);
    }
    function MSE$2(yTrue, yPred) {
        return meanSquaredError(yTrue, yPred);
    }
    function mse$2(yTrue, yPred) {
        return meanSquaredError(yTrue, yPred);
    }

    var exports_metrics = /*#__PURE__*/Object.freeze({
        binaryAccuracy: binaryAccuracy$1,
        binaryCrossentropy: binaryCrossentropy$2,
        sparseCategoricalAccuracy: sparseCategoricalAccuracy$1,
        categoricalAccuracy: categoricalAccuracy$1,
        categoricalCrossentropy: categoricalCrossentropy$2,
        precision: precision$1,
        recall: recall$1,
        cosineProximity: cosineProximity$1,
        meanAbsoluteError: meanAbsoluteError$1,
        meanAbsolutePercentageError: meanAbsolutePercentageError$1,
        MAPE: MAPE$2,
        mape: mape$2,
        meanSquaredError: meanSquaredError$1,
        MSE: MSE$2,
        mse: mse$2
    });

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */

    var exports_models = /*#__PURE__*/Object.freeze({
        modelFromJSON: modelFromJSON
    });

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    /**
     * Regularizer for L1 and L2 regularization.
     *
     * Adds a term to the loss to penalize large weights:
     * loss += sum(l1 * abs(x)) + sum(l2 * x^2)
     */
    /** @doc {heading: 'Regularizers', namespace: 'regularizers'} */
    function l1l2(config) {
        return new L1L2(config);
    }
    /**
     * Regularizer for L1 regularization.
     *
     * Adds a term to the loss to penalize large weights:
     * loss += sum(l1 * abs(x))
     * @param args l1 config.
     */
    /** @doc {heading: 'Regularizers', namespace: 'regularizers'} */
    function l1$1(config) {
        return l1(config);
    }
    /**
     * Regularizer for L2 regularization.
     *
     * Adds a term to the loss to penalize large weights:
     * loss += sum(l2 * x^2)
     * @param args l2 config.
     */
    /** @doc {heading: 'Regularizers', namespace: 'regularizers'} */
    function l2$1(config) {
        return l2(config);
    }

    var exports_regularizers = /*#__PURE__*/Object.freeze({
        l1l2: l1l2,
        l1: l1$1,
        l2: l2$1
    });

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */
    var Callback = /** @class */ (function (_super) {
        __extends(Callback, _super);
        function Callback() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Instance of `keras.models.Model`. Reference of the model being trained. */
            _this.model = null;
            return _this;
        }
        Callback.prototype.setModel = function (model) {
            if (!(model instanceof LayersModel)) {
                throw new Error('model must be a LayersModel, not some other Container');
            }
            this.model = model;
        };
        return Callback;
    }(BaseCallback));
    function less(currVal, prevVal) {
        return currVal < prevVal;
    }
    function greater(currVal, prevVal) {
        return currVal > prevVal;
    }
    /**
     * A Callback that stops training when a monitored quantity has stopped
     * improving.
     */
    var EarlyStopping = /** @class */ (function (_super) {
        __extends(EarlyStopping, _super);
        function EarlyStopping(args) {
            var _this = _super.call(this) || this;
            if (args == null) {
                args = {};
            }
            if (args.restoreBestWeights) {
                throw new NotImplementedError('restoreBestWeights = True is not implemented in EarlyStopping yet.');
            }
            _this.monitor = args.monitor || 'val_loss';
            _this.minDelta = Math.abs(args.minDelta || 0);
            _this.patience = args.patience || 0;
            _this.verbose = args.verbose || 0;
            _this.mode = args.mode || 'auto';
            _this.baseline = args.baseline;
            if (['auto', 'min', 'max'].indexOf(_this.mode) === -1) {
                console.warn("EarlyStopping mode '" + _this.mode + "' is invalid. " +
                    "Falling back to mode 'auto'.");
                _this.mode = 'auto';
            }
            if (_this.mode === 'min') {
                _this.monitorFunc = less;
            }
            else if (_this.mode === 'max') {
                _this.monitorFunc = greater;
            }
            else {
                // For mode === 'auto'.
                if (_this.monitor.indexOf('acc') !== -1) {
                    _this.monitorFunc = greater;
                }
                else {
                    _this.monitorFunc = less;
                }
            }
            if (_this.monitorFunc === less) {
                _this.minDelta *= -1;
            }
            return _this;
        }
        EarlyStopping.prototype.onTrainBegin = function (logs) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.wait = 0;
                    this.stoppedEpoch = 0;
                    if (this.baseline != null) {
                        this.best = this.baseline;
                    }
                    else {
                        this.best = this.monitorFunc === less ? Infinity : -Infinity;
                    }
                    return [2 /*return*/];
                });
            });
        };
        EarlyStopping.prototype.onEpochEnd = function (epoch, logs) {
            return __awaiter(this, void 0, void 0, function () {
                var current;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, resolveScalarsInLogs(logs)];
                        case 1:
                            _a.sent();
                            current = this.getMonitorValue(logs);
                            if (current == null) {
                                return [2 /*return*/];
                            }
                            if (this.monitorFunc(current - this.minDelta, this.best)) {
                                this.best = current;
                                this.wait = 0;
                                // TODO(cais): Logic for restoreBestWeights.
                            }
                            else {
                                this.wait++;
                                if (this.wait >= this.patience) {
                                    this.stoppedEpoch = epoch;
                                    this.model.stopTraining = true;
                                }
                                // TODO(cais): Logic for restoreBestWeights.
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        EarlyStopping.prototype.onTrainEnd = function (logs) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.stoppedEpoch > 0 && this.verbose) {
                        console.log("Epoch " + this.stoppedEpoch + ": early stopping.");
                    }
                    return [2 /*return*/];
                });
            });
        };
        EarlyStopping.prototype.getMonitorValue = function (logs) {
            if (logs == null) {
                logs = {};
            }
            var monitorValue = logs[this.monitor];
            if (monitorValue == null) {
                console.warn("Metric for EarlyStopping " + this.monitor + " is not available. " +
                    ("Available metrics are: " + Object.keys(logs)));
            }
            return monitorValue;
        };
        return EarlyStopping;
    }(Callback));
    /**
     * Factory function for a Callback that stops training when a monitored
     * quantity has stopped improving.
     *
     * Early stopping is a type of regularization, and protects model against
     * overfitting.
     *
     * The following example based on fake data illustrates how this callback
     * can be used during `tf.LayersModel.fit()`:
     *
     * ```js
     * const model = tf.sequential();
     * model.add(tf.layers.dense({
     *   units: 3,
     *   activation: 'softmax',
     *   kernelInitializer: 'ones',
     *   inputShape: [2]
     * }));
     * const xs = tf.tensor2d([1, 2, 3, 4], [2, 2]);
     * const ys = tf.tensor2d([[1, 0, 0], [0, 1, 0]], [2, 3]);
     * const xsVal = tf.tensor2d([4, 3, 2, 1], [2, 2]);
     * const ysVal = tf.tensor2d([[0, 0, 1], [0, 1, 0]], [2, 3]);
     * model.compile(
     *     {loss: 'categoricalCrossentropy', optimizer: 'sgd', metrics: ['acc']});
     *
     * // Without the EarlyStopping callback, the val_acc value would be:
     * //   0.5, 0.5, 0.5, 0.5, ...
     * // With val_acc being monitored, training should stop after the 2nd epoch.
     * const history = await model.fit(xs, ys, {
     *   epochs: 10,
     *   validationData: [xsVal, ysVal],
     *   callbacks: tf.callbacks.earlyStopping({monitor: 'val_acc'})
     * });
     *
     * // Expect to see a length-2 array.
     * console.log(history.history.val_acc);
     * ```
     */
    /**
     * @doc {
     *   heading: 'Callbacks',
     *   namespace: 'callbacks'
     * }
     */
    function earlyStopping(args) {
        return new EarlyStopping(args);
    }
    var callbacks = { earlyStopping: earlyStopping };

    /**
     * @license
     * Copyright 2018 Google LLC
     *
     * Use of this source code is governed by an MIT-style
     * license that can be found in the LICENSE file or at
     * https://opensource.org/licenses/MIT.
     * =============================================================================
     */

    exports.constraints = exports_constraints;
    exports.initializers = exports_initializers;
    exports.layers = exports_layers;
    exports.metrics = exports_metrics;
    exports.models = exports_models;
    exports.regularizers = exports_regularizers;
    exports.CallbackList = CallbackList;
    exports.CustomCallback = CustomCallback;
    exports.History = History;
    exports.Callback = Callback;
    exports.callbacks = callbacks;
    exports.EarlyStopping = EarlyStopping;
    exports.InputSpec = InputSpec;
    exports.SymbolicTensor = SymbolicTensor;
    exports.LayersModel = LayersModel;
    exports.input = input;
    exports.loadLayersModel = loadLayersModel;
    exports.model = model;
    exports.registerCallbackConstructor = registerCallbackConstructor;
    exports.sequential = sequential;
    exports.RNN = RNN;
    exports.Sequential = Sequential;
    exports.LayerVariable = LayerVariable;
    exports.version_layers = version;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tf-layers.js.map
