;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var TextAnalyzer = require('../src/atropa-TextAnalyzer.js');

try {
    Object.keys(TextAnalyzer).forEach(
        function (prop) {
            if(!atropa[prop]) {
                atropa[prop] = TextAnalyzer[prop];
            }
        }
    );
} catch (ignore) {
    atropa = require('../src/atropa-TextAnalyzer.js');
}

Object.keys(TextAnalyzer.data).filter(
    function (prop) {
        return prop !== 'requirements';
    }
).forEach(
    function (prop) {
        atropa.data[prop] = TextAnalyzer.data[prop];
    }
);

},{"../src/atropa-TextAnalyzer.js":2}],2:[function(require,module,exports){
/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa = require('atropa-header');
/**
 * Required module, the docs for it are in the <code>
 *  atropa-string/docs</code> directory where this module 
 *  is located.
 * @see <a href="../../../node_modules/atropa-string/docs/jsdoc/index.html">
 * ../../../node_modules/atropa-string/docs/jsdoc/index.html</a>,
 *  unless you installed this dependency manually.
 */
atropa.string = require('atropa-string').string;
/**
 * Required module, the docs for it are in the <code>
 *  atropa-arrays/docs</code> directory where this module 
 *  is located.
 * @see <a href="../../../node_modules/atropa-arrays/docs/jsdoc/index.html">
 * ../../../node_modules/atropa-arrays/docs/jsdoc/index.html</a>,
 *  unless you installed this dependency manually.
 */
atropa.arrays = require('atropa-arrays').arrays;
/**
 * Required module, the docs for it are in the <code>
 *  atropa-setAsOptionalArg/docs</code> directory where this module 
 *  is located.
 * @see <a href="../../../node_modules/atropa-setAsOptionalArg/docs/jsdoc/index.html">
 * ../../../node_modules/atropa-setAsOptionalArg/docs/jsdoc/index.html</a>,
 *  unless you installed this dependency manually.
 */
atropa.setAsOptionalArg = require('atropa-setAsOptionalArg').setAsOptionalArg;
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true,
    vars: true
*/
/*global atropa */
// end header

(function () {
    "use strict";
    atropa.requires(
        'TextAnalyzer',
        function () {
            var supported = true;
            
            [
                atropa.string,
                atropa.arrays,
                atropa.setAsOptionalArg
            ].forEach(function (prerequisite) {
                if(prerequisite === undefined) {
                    supported = false;
                }
            });
            return supported;
        }
    );
}());

/**
 * Represents a utility for analyzing text.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130311
 * @class Represents a utility for analyzing text.
 * @param {String} text The text to analyze.
 * @returns {TextAnalyzer} Returns an instance of the text analyzer.
 * @requires atropa.string
 * @requires atropa.arrays
 * @requires atropa.setAsOptionalArg
 * @see <a href="../../../AtropaToolboxTests.html?spec=atropa.TextAnalyzer">tests</a>
 */
atropa.TextAnalyzer = function TextAnalyzer(text) {
    "use strict";
    var that = this;
    var construct;
    /**
    * The supplied text. Defaults to an empty string.
    * @type String
    * @fieldOf atropa.TextAnalyzer#
    */
    this.text = String(atropa.setAsOptionalArg('', text));
    /**
    * Gives the count of words in the text. Defaults to 0.
    * @type Number
    * @fieldOf atropa.TextAnalyzer#
    */
    this.wordCount = 0;
    /**
    * An array of every word in the supplied text.
    *  Defaults to an empty array.
    * @type Array
    * @fieldOf atropa.TextAnalyzer#
    */
    this.words = [];
    /**
    * Sets the basic properties of the text analyzer.
    * @author <a href="mailto:matthewkastor@gmail.com">
    * Matthew Christopher Kastor-Inare III </a><br />
    * ☭ Hial Atropa!! ☭
    * @private
    * @version 20130311
    * @methodOf atropa.TextAnalyzer-
    */
    construct = function () {
        atropa.supportCheck('TextAnalyzer');
        that.text = atropa.string.convertEol(that.text, '\n');
        that.wordCount = atropa.string.countWords(that.text);
        that.words = atropa.string.getWords(that.text);
    };
    
    construct();
    return this;
};
/**
 * Gets an index of the text.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130118
 * @methodOf atropa.TextAnalyzer#
 * @returns {Array} Returns an array of unique values
 *  derived from the text given.
 */
atropa.TextAnalyzer.prototype.getIndex = function () {
    "use strict";
    this.words = atropa.arrays.reindex(this.words);
    return atropa.arrays.getUnique(this.words);
};
/**
 * Get the frequency data for each unique word in
 *  the text.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130118
 * @methodOf atropa.TextAnalyzer#
 * @returns {Object} Returns an object whose keys are
 *  the unique words from the given text and whose
 *  values are the count of each words occurrence.
 */
atropa.TextAnalyzer.prototype.getWordFrequency = function () {
    "use strict";
    this.words = atropa.arrays.reindex(this.words);
    return atropa.arrays.getFrequency(this.words);
};
/**
 * Gets phrases of the specified length from the text.
 * @param {Number} phraseLength The length of the phrases
 *  to extract from the text. Defaults to 2.
 * @returns {Object} Returns an object whose keys are phrases
 *  and whose values are the number of occurrences of the phrase.
 */
atropa.TextAnalyzer.prototype.getPhraseFrequency = function getPhraseFrequency(
    phraseLength
) {
    "use strict";
    phraseLength = atropa.setAsOptionalArg(2, phraseLength);
    if(2 > phraseLength) {
        phraseLength = 2;
    }
    var counter = 0, prop, out = [];
    
    this.words = atropa.arrays.reindex(this.words);
    
    this.words.map(function(element, index, arr) {
        counter = 1;  // element is word 1 of phraseLength
        // making sure there are enough words to concatenate a phrase of the
        // proper length.
        if(arr[index + phraseLength - 1] !== undefined) {
            prop = String(element + ' ').toLowerCase();
            for(counter; counter !== phraseLength; counter++) {
                prop += String(arr[index + counter] + ' ').toLowerCase();
            }
            out.push(prop.trim());
        }
    });
    
    out = atropa.arrays.getFrequency(out);
    
    return out;
};




while(atropa.data.requirements.length > 0) {
    atropa.data.requirements.pop()();
}
module.exports = atropa;

},{"atropa-arrays":3,"atropa-header":4,"atropa-setAsOptionalArg":7,"atropa-string":8}],3:[function(require,module,exports){
/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa = require('atropa-header');
/**
 * Required module, the docs for it are in the <code>
 *  atropa-inquire/docs</code> directory where this module 
 *  is located.
 * @see <a href="../../../node_modules/atropa-inquire/docs/jsdoc/index.html">
 * ../../../node_modules/atropa-inquire/docs/jsdoc/index.html</a>,
 *  unless you installed this dependency manually.
 */
atropa.inquire = require('atropa-inquire').inquire;
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

/**
 * Utilities for handling arrays.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130221
 * @namespace Utilities for handling arrays.
 * @see <a href="../../../AtropaToolboxTests.html?spec=atropa.arrays">tests</a>
 */
atropa.arrays = {};
/**
 * Compares two arrays based on size, contents, and element order.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Array} array1 One array you want compared to another.
 * @param {Array} array2 The other array.
 * @returns {Boolean} Returns true or false depending on
 *  whether or not the arrays matched in size, composition, and
 *  element order.
 * @example
 * var x = [1,2];
 * var y = [1,1,3];
 * atropa.arrays.match(x,y);
 * // returns false
 * @example
 * var x = [1,2];
 * var y = [1,2];
 * atropa.arrays.match(x,y);
 * // returns true
 * @example
 * var x = [1,2];
 * var y = [2,1];
 * atropa.arrays.match(x,y);
 * // returns false because the elements are not in the same order.
 * @example
 * var x = [1,{'aProp' : 'aValue'}];
 * var y = [1,{'aProp' : 'aValue'}];
 * atropa.arrays.match(x,y);
 * // returns false because even though the object looks the same, the
 * // two objects are in fact distinct objects.
 * @example
 * var obj = {'aProp' : 'aValue'};
 * var x = [1,obj];
 * var y = [1,obj];
 * atropa.arrays.match(x,y);
 * // returns true because the objects referenced in the arrays are
 * // in fact the same object.
 */
atropa.arrays.match = function arraysMatch(array1, array2) {
    "use strict";
    var x,
    l;
    if (array1.length !== array2.length) {
        return false;
    }
    l = array1.length;
    for (x = 0; x < l; x += 1) {
        if (array1[x] !== array2[x]) {
            return false;
        }
    }
    return true;
};
/**
 * Subtracts one array from another array based on the unique values in both
 *  sets.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130112
 * @param {Array} a (subtrahend) The array to subtract.
 * @param {Array} (minuend) fromB The array with elements duplicated in <code>a</code>
 * @returns {Array} Returns a new array containing only the unique
 *  values found in <code>fromB</code> that are not present in <code>a</code>
 * @example
 * var x = [1,2];
 * var y = [1,1,3];
 * atropa.arrays.subtract(x,y);
 * // returns [3]
 * @example
 * var x = [1,3];
 * var y = [3,1];
 * atropa.arrays.subtract(x,y);
 * // returns []
 * @example
 * var x = [1,3];
 * var y = [3,1,1,9];
 * atropa.arrays.subtract(x,y);
 * // returns [9]
 * @example
 * var x = [1,3,{'aProp' : 'aVal'}];
 * var y = [3,1,{'aProp' : 'aVal'}];
 * atropa.arrays.subtract(x,y);
 * // returns [{'aProp' : 'aVal'}] 
 * // because the two objects are not the same object.
 * @example
 * var obj = {'aProp' : 'aVal'};
 * var x = [1,3,obj];
 * var y = [3,1,{'aProp' : 'aVal'}];
 * atropa.arrays.subtract(x,y);
 * // returns [{'aProp' : 'aVal'}] 
 * // because the two objects are not the same object.
 * @example
 * var obj = {'aProp' : 'aVal'}
 * var x = [1,3,obj];
 * var y = [3,1,obj];
 * atropa.arrays.subtract(x,y);
 * // returns [] 
 * // because the objects referenced in the arrays are the same object.
 */
atropa.arrays.subtract = function(a, fromB) {
    "use strict";
    var the = {};
    the.result = [];
    fromB.forEach(function(item){
        the.mark = false;
        a.forEach(function(rm){
            if(item === rm) {
                the.mark = true;
            }
        });
        if(the.mark !== true) {
            the.result.push(item);
        }
    });
    return the.result;
};
/**
 * Returns an array of values found in both of the given arrays.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130112
 * @param {Array} array1 An array.
 * @param {Array} array2 Another array.
 * @returns {Array} Returns an array of values found in both of the given
 *  arrays.
 * @example
 * var x = [1,3,4];
 * var y = [3,1,5];
 * atropa.arrays.intersect(x,y);
 * // returns [1,3]
 * @example
 * var x = [1,1,3,4];
 * var y = [3,1,1,5];
 * atropa.arrays.intersect(x,y);
 * // returns [1,1,3]
 * @example
 * var obj = {'aProp' : 'aVal'};
 * var x = [1,3,obj];
 * var y = [3,1,obj];
 * atropa.arrays.intersect(x,y);
 * // returns [1,3,{'aProp' : 'aVal'}]
 * @example
 * var obj = {'aProp' : 'aVal'};
 * var x = [1,3,{'aProp' : 'aVal'}];
 * var y = [3,1,obj];
 * atropa.arrays.intersect(x,y);
 * // returns [1,3] because the two objects are not the same object.
 * @example
 * var x = [1,3,{'aProp' : 'aVal'}];
 * var y = [3,1,{'aProp' : 'aVal'}];
 * atropa.arrays.intersect(x,y);
 * // returns [1,3] because the two objects are not the same object.
 */
atropa.arrays.intersect = function intersect(array1, array2) {
    "use strict";
    var smallArray, largeArray, intersection = [];
    if(array1.length > array2.length) {
        largeArray = array1.splice(0);
        smallArray = array2.splice(0);
    } else {
        largeArray = array2.splice(0);
        smallArray = array1.splice(0);
    }
    smallArray.forEach(function (item) {
        var idxInLargeArray = largeArray.indexOf(item);
        if (0 <= idxInLargeArray) { // has word
            intersection.push(largeArray.splice(idxInLargeArray, 1)[0]);
        }
    });
    return intersection;
};
/**
 * Calculates the frequency of items occurring in an array.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130118
 * @param {Array} arr The array to calculate frequencies from.
 * @returns {Object} Returns an object whose keys are each unique
 *  elements from the array and their value is their frequency of
 *  occurrence within the array. Be careful that your array does
 *  not contain values matching object instance property names.
 * @example
 * var x = [1,1,1,1,1,3,3];
 * atropa.arrays.getFrequency(x);
 * // returns {
 * //     "1": 5,
 * //     "3": 2
 * // }
 * @example
 * var x = ["bill", "fred", "fred", "jane"];
 * atropa.arrays.getFrequency(x);
 * // returns {
 * //     "bill": 1,
 * //     "fred": 2,
 * //     "jane": 1
 * // }
 * @example
 * var x = [1,3,{'aProp' : 'aVal'}];
 * atropa.arrays.getFrequency(x);
 * // returns {
 * //     "1": 1,
 * //     "3": 1,
 * //     "[object Object]": 1
 * // }
 * @example
 * var obj = {'aProp' : 'aVal'};
 * var otherObj = {};
 * var x = [1,3,obj,otherObj,{'aDoughnut' : 'sprinkles'}];
 * atropa.arrays.getFrequency(x);
 * // returns {
 * //     "1": 1,
 * //     "3": 1,
 * //     "[object Object]": 3
 * // }
 * @example
 * var x = [1,3,"toString"];
 * atropa.arrays.getFrequency(x);
 * // returns {
 * //     "1": 1,
 * //     "3": 1,
 * //     "toString": "function toString() {\n    [native code]\n}1"
 * // }
 */
atropa.arrays.getFrequency = function (arr) {
    "use strict";
    var out = arr.reduce(function (acc, curr) {
        if (acc[curr] === undefined) {
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }
        return acc;
    }, {});
    return out;
};
/**
 * Gets Unique values from an array.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130118
 * @param {Array} largeArray The array with duplicate values in it.
 * @returns {Array} Returns a new array containing only the unique
 *  values found in the largeArray.
 * @example
 * var x = [1,1,1,4,4,3,6];
 * atropa.arrays.getUnique(x);
 * // returns [ "1", "4", "3", "6" ]
 * @example
 * var x = ["bill", "fred", "jane", "fred"];
 * atropa.arrays.getUnique(x);
 * // returns ["bill", "fred", "jane"]
 * @example
 * var x = [ 
 *     "bill",
 *     {"aProp" : "aValue"},
 *     {"aGuy" : "fred"},
 *     {"aLady" : "jane"}
 * ];
 * atropa.arrays.getUnique(x);
 * // returns [ "bill", "[object Object]" ]
 */
atropa.arrays.getUnique = function (largeArray) {
    "use strict";
    return Object.keys(atropa.arrays.getFrequency(largeArray)).sort();
};
/**
 * Removes empty strings from the given array.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130118
 * @param {Array} arrayWithEmptyElements The array with empty strings in it.
 * @returns {Array} Returns a new array with empty strings removed.
 * @example
 * var x = [ 10, , 5, "", '', 7 ];
 * console.log('starting length ' + x.length);
 * console.log(x);
 * x = atropa.arrays.removeEmptyElements(x);
 * console.log('ending length ' + x.length);
 * console.log(x);
 * // displays the following
 * // starting length 6
 * // [10, undefined, 5, "", "", 7]
 * // ending length 3
 * // [10, 5, 7]
 */
atropa.arrays.removeEmptyElements = function (arrayWithEmptyElements) {
    "use strict";
    return arrayWithEmptyElements.filter(function (item) {
        return !atropa.inquire.isEmptyString(item);
    });
};
/**
 * Reindexes an array.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130118
 * @param {Array} arr The array with discontinuous keys.
 * @returns {Array} Returns an array with continuous keys.
 * @example
 * var x = [ "a", "b", "c", undefined ];
 * console.log(x); // [ "a", "b", "c", undefined ]
 * console.log(x.length); // 4
 * 
 * delete x[1]; // deletes the key from the array but
 *              // the array length remains the same
 *              // at this point the arrays keys are 0, 2, and 3
 * console.log(x); // [ "a", undefined, "c", undefined ]
 * console.log(x.length); // 4
 * 
 * x = atropa.arrays.reindex(x);
 * console.log(x); //  [ "a", "c", undefined ]
 *    // note that the last element existed in the array, its value was
 *    // undefined but it did have a key so the element remains in the array.
 *    //
 *    // The deleted element was in fact deleted from the array so there was no
 *    // key x[1] at all, when trying to access this non existing element the
 *    // value of undefined was returned. This behavior is confusing unless you
 *    // think about the arrayas an object whose properties are named by
 *    // numbers. Accessing an undefined property returns undefined regardless
 *    // of whether the property existed in the past or not.
 * console.log(x.length); // 3
 */
atropa.arrays.reindex = function reindex(arr) {
    "use strict";
    var idx, out;
    out = [];
    for(idx in arr) {
        if(arr.hasOwnProperty(idx)) {
            out.push(arr[idx]);
        }
    }
    return out;
};
/**
 * Sorts an array's elements numerically.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130120
 * @param {Array} arr The array to sort. All elements of the array must be
 *  number-ish.
 * @returns {Array} Returns an array whose elements are in numeric order.
 * @example
 * var x = [3, 2, 9, 26, 10, 1, 99, 15];
 * console.log( atropa.arrays.sortNumerically(x) );
 * // logs [1, 2, 3, 9, 10, 15, 26, 99]
 */
atropa.arrays.sortNumerically = function sortNumerically(arr) {
    "use strict";
    return arr.sort(function (a, b) {
        return (a - b);
    });
};
/**
 * Throws an error, <code>String.prototype.localeCompare</code> is not 
 *  standardized.
 * 
 *  Yes, localeCompare is in the standard but, at this time the actual
 *  comparison is implementation dependant. This means that "alphabetical order"
 *  can be different on different platforms. What I found was that in node the
 *  array of <code>['a','Z','A','z']</code> would be sorted to
 *  <code>['A','Z','a','z"]</code>, while on
 *  firefox it would be sorted to <code>['a','A','z','Z']</code>. Who knows if
 *  another implementor would sort it <code>['A','a','Z','z']</code>?
 * 
 * In order to provide a reliable implementation I would have to create my own
 *  implementation of <code>String.prototype.localeCompare</code> and that's
 *  just too much work for me to do alone.
 * @throws {Error} "String.prototype.localeCompare is not standardized"
 */
atropa.arrays.sortAlphabetically = function sortAlphabetically(arr) {
    "use strict";
    throw new Error("String.prototype.localeCompare is not standardized");
};
/**
 * Deletes the given element from the array at the given index. It basically
 *  does what you would expect the delete operator to do, except the delete
 *  operator doesn't do what you would expect.
 * @param {Array} arr The array.
 * @param {Number} index The index of the element to delete.
 * @returns Returns an array with the element removed, contiguous keys, and
 *  whose length is 1 less than the input array.
 */
atropa.arrays.deleteElement = function (arr, index) {
    "use strict";
    delete arr[index];
    return atropa.arrays.reindex(arr);
};




while(atropa.data.requirements.length > 0) {
    atropa.data.requirements.pop()();
}
module.exports = atropa;

},{"atropa-header":4,"atropa-inquire":5}],4:[function(require,module,exports){
var atropa = {};

/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>

/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global XPathResult */
// end header

/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa;
atropa = {};
/**
 * Checks whether this class has been marked as unsupported and throws an 
 *  error if it has.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130308
 * @param {String} className The name of the class.
 * @param {String} errorMessage Optional. A custom error message. Defaults to
 *  atropa.data[className].error
 */
atropa.supportCheck = function (className, errorMessage) {
    "use strict";
    className = String(className);
    errorMessage = errorMessage || atropa.data[className].error;
    errorMessage = String(errorMessage);
    
    if(atropa.data[className].support === 'unsupported') {
        throw new Error(errorMessage);
    }
};
/**
 * Pushes a requirement check into atropa.data.requirements. The test
 *  tests whether the class is supported in this environment. Sets
 *  atropa.data[className]'s support to unsupported and error to errorMessage
 *  if the requirementFn returns false. The requirement checks will all be run
 *  after the library has loaded.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130308
 * @param {String} className The name of the class.
 * @param {Function} requirementFn A function to test whether or not the class
 *  is supported in this environment. If supported, returns true otherwise
 *  return false.
 * @param {String} errorMessage The error message to use when this class or its
 *  methods are called in unsupported environments. Defaults to:
 *  'The atropa.' + className + ' class is unsupported in this environment.';
 */
atropa.requires = function (className, requirementFn, errorMessage) {
    "use strict";
    var check = function () {
        var test = false;
        if(typeof className !== 'string') {
            throw new Error('atropa.requires requires the class name to be ' +
                'specified');
        }
        
        if(atropa.data[className] === undefined) {
            atropa.data[className] = {};
            
            if(typeof requirementFn !== 'function') {
                requirementFn = false;
            }
            errorMessage = errorMessage || 'The atropa.' + className +
                    ' class is unsupported in this environment.';
            try {
                test = requirementFn();
            } catch (e) {
                test = false;
            }
            
            atropa.data[className].error = errorMessage;
            
            if(test === false) {
                atropa.data[className].support = 'unsupported';
            }
        }
    };
    
    atropa.data.requirements.push(check);
};
/**
 * Container for gobal data related to the classes and functions.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for gobal data related to the classes and functions.
 */
atropa.data = {};

atropa.data.requirements = [];

atropa.nop = function nop () {
    "use strict";
    return null;
};
module.exports = atropa;


},{}],5:[function(require,module,exports){
/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa = require('atropa-header');
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

/**
 * Container for functions that test the state of inputs.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @namespace Container for functions that test the state of inputs.
 * @see <a href="../../../AtropaToolboxTests.html?spec=atropa.inquire">tests</a>
 */
atropa.inquire = {};
/**
 * Checks whether the input is null.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Mixed} x Any input that may or may not be null.
 * @returns {Boolean} Returns true if x === null.
 */
atropa.inquire.isNull = function (x) {
    "use strict";
    return (x === null);
};
/**
 * Checks whether the input is an object.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Mixed} x Any input that may or may not be an object.
 * @returns {Boolean} Returns true if typeof(x) === 'object'.
 */
atropa.inquire.isObject = function (x) {
    "use strict";
    return (typeof x === 'object');
};
/**
 * Checks whether the input is both an object and not null.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Mixed} x Any input that may or may not be both an
 * object and null.
 * @returns {Boolean} Returns true if x is both an object and
 * not null. (null is an object).
 */
atropa.inquire.isObjectNotNull = function (x) {
    "use strict";
    return atropa.inquire.isObject(x) && (!atropa.inquire.isNull(x));
};
/**
 * Checks an object for the existence of a property
 * regardless of whether the property was inherited
 * or not.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Object} obj An object which may or may not
 * have the property identified by prop.
 * @param {String} prop A string value representing the
 * name of the property.
 * @returns {Boolean} Returns true if obj.prop exists,
 * otherwise returns false.
 */
atropa.inquire.hasProperty = function (obj, prop) {
    "use strict";
    if (atropa.inquire.isObjectNotNull(obj)) {
        return (prop in obj);
    }
    return false;
};
/**
 * Checks whether the input is an empty string.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130118
 * @param {String} str The string you want to know about
 * @returns {Boolean} Returns true if str is an empty string,
 *  otherwise returns false.
 */
atropa.inquire.isEmptyString = function (str) {
    "use strict";
    var out = false;
    if ('' === str) {
        out = true;
    }
    return out;
};




while(atropa.data.requirements.length > 0) {
    atropa.data.requirements.pop()();
}
module.exports = atropa;

},{"atropa-header":4}],6:[function(require,module,exports){
/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa = require('atropa-header');
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

/**
 * Container for regex functions.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @namespace Container for regex functions.
 * @see <a href="../../../AtropaToolboxTests.html?spec=atropa.regex">tests</a>
 */
atropa.regex = {};
/**
 * Regex patterns.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Regex patterns.
 */
atropa.regex.patterns = {
    /** finds repeated words and phrases */
    repeatedWords : /(\b.{3,}\b)\s*(\1)/g,
    /** finds paragraph breaks */
    paragraphBreaks : /(\r\n\r\n|\n\n|\r\r)/g,
    /** finds line breaks */
    lineBreaks : /(\r\n|\r|\n)/g
};
/**
 * Appends common prefix, suffix, and word boundary regex strings to
 * the supplied word.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130110
 * @param {String} word The word to append prefix and suffix to
 * @param {Integer} threshold The word.length at which it does not
 * make sense to append prefix and suffix. Defaults to 3.
 * @returns {String} Returns the supplied word with prefix, suffix,
 * and word boundaries attached. If the word.length was not greater
 * than the threshold, only word boundaries are attached. The string
 * represents a RegEx which should pick out most forms of regular
 * words.
 */
atropa.regex.appendPrefixesAndSuffixes = function (word, threshold) {
    "use strict";
    var prefixes,
    suffixes;
    prefixes = '(pre|un|re)?';
    suffixes = '(ification|' +
                'tionally|' +
                'ication|' +
                'ified|istic|iness|' +
                'fare|tion|ance|ence|less|ally|able|ness|ized|ised|' +
                'ous|ify|ing|ity|ful|ant|ate|est|ism|izm|ist|' +
                'ic|al|ed|er|et|ly|rs|in|' +
                'y|s|r|d)?';
    
    threshold = threshold === undefined ? 3 : threshold;
    
    if (word.length > threshold) {
        word = '\\b' + prefixes + word + suffixes + '\\b';
    } else {
        word = '\\b()' + word + '()\\b';
    }
    return word;
};




while(atropa.data.requirements.length > 0) {
    atropa.data.requirements.pop()();
}
module.exports = atropa;

},{"atropa-header":4}],7:[function(require,module,exports){
/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa = require('atropa-header');
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

/**
 * Set default values for optional function parameters.
 * @example
 * <pre>
 *   // To set a default value for an optional parameter
 *   function(optionalArg) {
 *       var defaultVal = 'hello there!';
 *       optionalArg = atropa.setAsOptionalArg(defaultVal, optionalArg);
 *       return optionalArg;
 *   }
 * </pre>
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {Mixed} defaultVal The default value to set.
 * @param {Mixed} optionalArg A reference to the optional argument.
 * @returns {Mixed} Returns the default value supplied when the optional
 * argument is undefined or null. Otherwise, the supplied optional argument
 * is returned.
 * @see <a href="../../../AtropaToolboxTests.html?spec=atropa.setAsOptionalArg">tests</a>
 */
atropa.setAsOptionalArg = function (defaultVal, optionalArg) {
    "use strict";
    if (optionalArg === undefined || optionalArg === null) {
        optionalArg = defaultVal;
    }
    return optionalArg;
};




while(atropa.data.requirements.length > 0) {
    atropa.data.requirements.pop()();
}
module.exports = atropa;

},{"atropa-header":4}],8:[function(require,module,exports){
/**
 * Container for all Glorious classes, functions, etc.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace Container for all Glorious classes, functions, etc.
 */
var atropa = require('atropa-header');
/**
 * Required module, the docs for it are in the <code>
 *  atropa-regex/docs</code> directory where this module 
 *  is located.
 * @see <a href="../../../node_modules/atropa-regex/docs/jsdoc/index.html">
 * ../../../node_modules/atropa-regex/docs/jsdoc/index.html</a>,
 *  unless you installed this dependency manually.
 */
atropa.regex = require('atropa-regex').regex;
/**
 * Required module, the docs for it are in the <code>
 *  atropa-arrays/docs</code> directory where this module 
 *  is located.
 * @see <a href="../../../node_modules/atropa-arrays/docs/jsdoc/index.html">
 * ../../../node_modules/atropa-arrays/docs/jsdoc/index.html</a>,
 *  unless you installed this dependency manually.
 */
atropa.arrays = require('atropa-arrays').arrays;
/// <reference path="../../docs/vsdoc/OpenLayersAll.js"/>
/*jslint
    indent: 4,
    maxerr: 50,
    white: true,
    browser: true,
    devel: true,
    plusplus: true,
    regexp: true
*/
/*global atropa */
// end header

/**
 * A few utilities for manipulating strings.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @namespace A few utilities for manipulating strings.
 * @requires atropa.regex.patterns
 * @see <a href="../../../AtropaToolboxTests.html?spec=atropa.string">tests</a>
 */
atropa.string = {};
/**
 * Replaces repeated words and phrases with a single word or phrase.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130701
 * @param {String} string The string to remove repeated words from.
 * @returns {String} Returns the given string with repeated words and
 *  phrases removed.
 */
atropa.string.removeRepeatedWord = function removeRepeatedWord (string) {
    "use strict";
    return string.replace(atropa.regex.patterns.repeatedWords, '$1');
};
/**
 * Creates paragraph breaks at every occurrence of two consecutive line breaks.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130701
 * @param {String} string The string to insert paragraph tags into.
 * @returns {String} Returns the given string with paragraph breaks inserted.
 */
atropa.string.lineBreaksToParagraphTags = function lineBreaksToParagraphTags (string) {
    "use strict";
    var out = string.replace(atropa.regex.patterns.paragraphBreaks, '</p><p>');
    out = '<p>' + out.trim() + '</p>';
    out = out.replace(/\s+<\/(p|br)>/g, '</$1>');
    return out;
};
/**
 * Creates break tags at every line break.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130701
 * @param {String} string The string to insert break tags into.
 * @returns {String} Returns the given string with break tags inserted.
 */
atropa.string.lineBreaksToBreakTags = function lineBreaksToBreakTags (string) {
    "use strict";
    return string.replace(atropa.regex.patterns.lineBreaks, '<br>');
};
/**
 * Normalizes line breaks to `\n`.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130701
 * @param {String} string The string to normalize.
 * @returns {String} Returns the given string with normalized line breaks.
 */
atropa.string.normalizeEol = function normalizeEol (string) {
    "use strict";
    return string.replace(atropa.regex.patterns.lineBreaks, '\n');
};
/**
 * Converts the first character of a given string to
 * uppercase.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20120909
 * @param {String} string The string for which you want the
 * first letter to be in upper case.
 * @returns {String} The given string with it's first letter capitalized.
 */
atropa.string.ucFirst = function ucFirst(string) {
    "use strict";
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
};
/**
 * Converts the given string to camel case.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130823
 * @param {String} string The string to camelize.
 * @returns {String} The camelized string.
 * @example
 *  atropa.string.camelize('get it together');
 *  // returns "getItTogether"
 */
atropa.string.camelize = function camelize (str) {
    "use strict";
    var arr, out;
    arr = str.split(' ');
    out = arr.shift();
    arr = arr.map(function (item) {
        return atropa.string.ucFirst(item);
    });
    out += arr.join('');
    return out;
};
/**
 * Counts words.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130313
 * @param {String} someText Plain text.
 * @return {Number} Returns the count of words in someText.
 */
atropa.string.countWords = function countWords(someText) {
    "use strict";
    var wordCount, re, len = 0;
    if(someText !== undefined && someText !== null) {
        someText = someText.trim();
        if(someText !== '') {
            wordCount = 0;
            re = /\s+/gi;
            wordCount = someText.split(re);
            len = wordCount.length;
        }
    }
    return len;
};
/**
 * Converts end of line markers into whatever you want. 
 * Automatically detects any of \r\n, \n, or \r and 
 * replaces it with the user specified EOL marker.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @param {String} text The text you want processed.
 * @param {String} newEOL The replacement for the current EOL marks.
 * @returns {String} Returns the processed text.
 */
atropa.string.convertEol = function convertEOL(text, newEOL) {
    'use strict';
    return text.replace(atropa.regex.patterns.lineBreaks, newEOL);
};

/**
 * Removes a quantity of leading spaces specified by offset.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @param {String} text The text to process.
 * @param {Number} offset The amount of spaces you want removed 
 * from the beginning of the text.
 * @returns Returns the processed text.
 */
atropa.string.offsetWhiteSpace = function offsetWhiteSpace(text, offset) {
    'use strict';
    var regx;
    regx = new RegExp('^ {' + offset + '}');
    text = text.replace(regx, '');
    return text;
};

/**
 * Converts all tabs in leading whitespace into four spaces.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @param {String} text The text to process
 * @returns {String} Returns the processed text.
 */
atropa.string.normalizeWhiteSpacePrefix = function normalizeWhiteSpacePrefix(
    text
) {
    'use strict';
    var prefix = text.match(/^\s*/);
    if(prefix) {
        prefix = prefix[0];
        prefix = prefix.replace(/\t/g, '    ');
        text = text.replace(/^\s*/, prefix);
    }
    return text;
};

/**
 * Converts all tabs into four spaces.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @param {String} text The text to process
 * @returns {String} Returns the processed text.
 */
atropa.string.normalizeWhiteSpace = function normalizeWhiteSpace(text) {
    'use strict';
    text = text.replace(/\t/g, '    ');
    return text;
};

/**
 * Counts the number of leading space or tab characters but not both.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @param {String} text The text to analyze.
 * @returns {Number} Returns the quantity of leading spaces or tabs.
 */
atropa.string.getOffset = function getOffset(text) {
    'use strict';
    var offset = 0,
        leadingChar = text.charAt(0);
        
    if( leadingChar === ' ' || leadingChar === '\t') {
        while(text.charAt(offset) === leadingChar && offset < text.length) {
            offset++;
        }
    }
    return offset;
};
/**
 * Breaks a string into an array of words.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130118
 * @param {String} text The text to analyze.
 * @returns {Array} Returns an array of the words in
 *  the given text.
 * @requires atropa.arrays.removeEmptyElements
 */
atropa.string.getWords = function (text) {
    "use strict";
    var out = [];
    function invalidChars(element) {
        var matched = /^[\-'’`]+$/.test(element);
        // invert the result of test. throw out elements that match.
        return !matched;
    }
    out = atropa.arrays.removeEmptyElements(
        text.split(/[^A-Za-z\-'’`]+/gi)
    );
    out = out.filter(invalidChars);
    return out;
};
/**
 * Escapes <code>CDATA</code> sections in text
 *  so that the text may be embedded into a 
 *  <code>CDATA</code> section. This should be run
 *  on any text which may contain the string 
 *  <code>]]></code> since said string will effectively
 *  end the <code>CDATA</code> section prematurely.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @version 20130118
 * @param {String} text The text containing 
 *  <code>CDATA</code> sections to escape.
 * @returns {Array} Returns a string with escaped
 *  <code>CDATA</code> sections.
 * @see <a href="http://en.wikipedia.org/wiki/CDATA#Nesting">
 *  http://en.wikipedia.org/wiki/CDATA#Nesting</a>
 * @see <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=98168">
 *  https://bugzilla.mozilla.org/show_bug.cgi?id=98168</a>
 */
atropa.string.escapeCdata = function escapeCdata(text) {
    "use strict";
    return String(text).replace(/\]\]>/g, ']]]]><![CDATA[>');
};




while(atropa.data.requirements.length > 0) {
    atropa.data.requirements.pop()();
}
module.exports = atropa;

},{"atropa-arrays":3,"atropa-header":4,"atropa-regex":6}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGthc3RvclxcRGVza3RvcFxcZXhwZXJpbWVudHNcXGF0cm9wYS1jb21wb25lbnRzXFxub2RlX21vZHVsZXNcXGF0cm9wYS1UZXh0QW5hbHl6ZXJcXGRldlxcYnJvd3Nlck1haW4uanMiLCJDOlxcVXNlcnNcXGthc3RvclxcRGVza3RvcFxcZXhwZXJpbWVudHNcXGF0cm9wYS1jb21wb25lbnRzXFxub2RlX21vZHVsZXNcXGF0cm9wYS1UZXh0QW5hbHl6ZXJcXHNyY1xcYXRyb3BhLVRleHRBbmFseXplci5qcyIsIkM6XFxVc2Vyc1xca2FzdG9yXFxEZXNrdG9wXFxleHBlcmltZW50c1xcYXRyb3BhLWNvbXBvbmVudHNcXG5vZGVfbW9kdWxlc1xcYXRyb3BhLWFycmF5c1xcc3JjXFxhdHJvcGEtYXJyYXlzLmpzIiwiQzpcXFVzZXJzXFxrYXN0b3JcXERlc2t0b3BcXGV4cGVyaW1lbnRzXFxhdHJvcGEtY29tcG9uZW50c1xcbm9kZV9tb2R1bGVzXFxhdHJvcGEtaGVhZGVyXFxzcmNcXGF0cm9wYS1oZWFkZXIuanMiLCJDOlxcVXNlcnNcXGthc3RvclxcRGVza3RvcFxcZXhwZXJpbWVudHNcXGF0cm9wYS1jb21wb25lbnRzXFxub2RlX21vZHVsZXNcXGF0cm9wYS1pbnF1aXJlXFxzcmNcXGF0cm9wYS1pbnF1aXJlLmpzIiwiQzpcXFVzZXJzXFxrYXN0b3JcXERlc2t0b3BcXGV4cGVyaW1lbnRzXFxhdHJvcGEtY29tcG9uZW50c1xcbm9kZV9tb2R1bGVzXFxhdHJvcGEtcmVnZXhcXHNyY1xcYXRyb3BhLXJlZ2V4LmpzIiwiQzpcXFVzZXJzXFxrYXN0b3JcXERlc2t0b3BcXGV4cGVyaW1lbnRzXFxhdHJvcGEtY29tcG9uZW50c1xcbm9kZV9tb2R1bGVzXFxhdHJvcGEtc2V0QXNPcHRpb25hbEFyZ1xcc3JjXFxhdHJvcGEtc2V0QXNPcHRpb25hbEFyZy5qcyIsIkM6XFxVc2Vyc1xca2FzdG9yXFxEZXNrdG9wXFxleHBlcmltZW50c1xcYXRyb3BhLWNvbXBvbmVudHNcXG5vZGVfbW9kdWxlc1xcYXRyb3BhLXN0cmluZ1xcc3JjXFxhdHJvcGEtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzViQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRleHRBbmFseXplciA9IHJlcXVpcmUoJy4uL3NyYy9hdHJvcGEtVGV4dEFuYWx5emVyLmpzJyk7XHJcblxyXG50cnkge1xyXG4gICAgT2JqZWN0LmtleXMoVGV4dEFuYWx5emVyKS5mb3JFYWNoKFxyXG4gICAgICAgIGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICAgIGlmKCFhdHJvcGFbcHJvcF0pIHtcclxuICAgICAgICAgICAgICAgIGF0cm9wYVtwcm9wXSA9IFRleHRBbmFseXplcltwcm9wXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn0gY2F0Y2ggKGlnbm9yZSkge1xyXG4gICAgYXRyb3BhID0gcmVxdWlyZSgnLi4vc3JjL2F0cm9wYS1UZXh0QW5hbHl6ZXIuanMnKTtcclxufVxyXG5cclxuT2JqZWN0LmtleXMoVGV4dEFuYWx5emVyLmRhdGEpLmZpbHRlcihcclxuICAgIGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb3AgIT09ICdyZXF1aXJlbWVudHMnO1xyXG4gICAgfVxyXG4pLmZvckVhY2goXHJcbiAgICBmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgIGF0cm9wYS5kYXRhW3Byb3BdID0gVGV4dEFuYWx5emVyLmRhdGFbcHJvcF07XHJcbiAgICB9XHJcbik7XHJcbiIsIi8qKlxyXG4gKiBDb250YWluZXIgZm9yIGFsbCBHbG9yaW91cyBjbGFzc2VzLCBmdW5jdGlvbnMsIGV0Yy5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEBuYW1lc3BhY2UgQ29udGFpbmVyIGZvciBhbGwgR2xvcmlvdXMgY2xhc3NlcywgZnVuY3Rpb25zLCBldGMuXHJcbiAqL1xyXG52YXIgYXRyb3BhID0gcmVxdWlyZSgnYXRyb3BhLWhlYWRlcicpO1xyXG4vKipcclxuICogUmVxdWlyZWQgbW9kdWxlLCB0aGUgZG9jcyBmb3IgaXQgYXJlIGluIHRoZSA8Y29kZT5cclxuICogIGF0cm9wYS1zdHJpbmcvZG9jczwvY29kZT4gZGlyZWN0b3J5IHdoZXJlIHRoaXMgbW9kdWxlIFxyXG4gKiAgaXMgbG9jYXRlZC5cclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F0cm9wYS1zdHJpbmcvZG9jcy9qc2RvYy9pbmRleC5odG1sXCI+XHJcbiAqIC4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdHJvcGEtc3RyaW5nL2RvY3MvanNkb2MvaW5kZXguaHRtbDwvYT4sXHJcbiAqICB1bmxlc3MgeW91IGluc3RhbGxlZCB0aGlzIGRlcGVuZGVuY3kgbWFudWFsbHkuXHJcbiAqL1xyXG5hdHJvcGEuc3RyaW5nID0gcmVxdWlyZSgnYXRyb3BhLXN0cmluZycpLnN0cmluZztcclxuLyoqXHJcbiAqIFJlcXVpcmVkIG1vZHVsZSwgdGhlIGRvY3MgZm9yIGl0IGFyZSBpbiB0aGUgPGNvZGU+XHJcbiAqICBhdHJvcGEtYXJyYXlzL2RvY3M8L2NvZGU+IGRpcmVjdG9yeSB3aGVyZSB0aGlzIG1vZHVsZSBcclxuICogIGlzIGxvY2F0ZWQuXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdHJvcGEtYXJyYXlzL2RvY3MvanNkb2MvaW5kZXguaHRtbFwiPlxyXG4gKiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvYXRyb3BhLWFycmF5cy9kb2NzL2pzZG9jL2luZGV4Lmh0bWw8L2E+LFxyXG4gKiAgdW5sZXNzIHlvdSBpbnN0YWxsZWQgdGhpcyBkZXBlbmRlbmN5IG1hbnVhbGx5LlxyXG4gKi9cclxuYXRyb3BhLmFycmF5cyA9IHJlcXVpcmUoJ2F0cm9wYS1hcnJheXMnKS5hcnJheXM7XHJcbi8qKlxyXG4gKiBSZXF1aXJlZCBtb2R1bGUsIHRoZSBkb2NzIGZvciBpdCBhcmUgaW4gdGhlIDxjb2RlPlxyXG4gKiAgYXRyb3BhLXNldEFzT3B0aW9uYWxBcmcvZG9jczwvY29kZT4gZGlyZWN0b3J5IHdoZXJlIHRoaXMgbW9kdWxlIFxyXG4gKiAgaXMgbG9jYXRlZC5cclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F0cm9wYS1zZXRBc09wdGlvbmFsQXJnL2RvY3MvanNkb2MvaW5kZXguaHRtbFwiPlxyXG4gKiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvYXRyb3BhLXNldEFzT3B0aW9uYWxBcmcvZG9jcy9qc2RvYy9pbmRleC5odG1sPC9hPixcclxuICogIHVubGVzcyB5b3UgaW5zdGFsbGVkIHRoaXMgZGVwZW5kZW5jeSBtYW51YWxseS5cclxuICovXHJcbmF0cm9wYS5zZXRBc09wdGlvbmFsQXJnID0gcmVxdWlyZSgnYXRyb3BhLXNldEFzT3B0aW9uYWxBcmcnKS5zZXRBc09wdGlvbmFsQXJnO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vZG9jcy92c2RvYy9PcGVuTGF5ZXJzQWxsLmpzXCIvPlxyXG4vKmpzbGludFxyXG4gICAgaW5kZW50OiA0LFxyXG4gICAgbWF4ZXJyOiA1MCxcclxuICAgIHdoaXRlOiB0cnVlLFxyXG4gICAgYnJvd3NlcjogdHJ1ZSxcclxuICAgIGRldmVsOiB0cnVlLFxyXG4gICAgcGx1c3BsdXM6IHRydWUsXHJcbiAgICByZWdleHA6IHRydWUsXHJcbiAgICB2YXJzOiB0cnVlXHJcbiovXHJcbi8qZ2xvYmFsIGF0cm9wYSAqL1xyXG4vLyBlbmQgaGVhZGVyXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBhdHJvcGEucmVxdWlyZXMoXHJcbiAgICAgICAgJ1RleHRBbmFseXplcicsXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc3VwcG9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIGF0cm9wYS5zdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBhdHJvcGEuYXJyYXlzLFxyXG4gICAgICAgICAgICAgICAgYXRyb3BhLnNldEFzT3B0aW9uYWxBcmdcclxuICAgICAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChwcmVyZXF1aXNpdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKHByZXJlcXVpc2l0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn0oKSk7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHV0aWxpdHkgZm9yIGFuYWx5emluZyB0ZXh0LlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMzAzMTFcclxuICogQGNsYXNzIFJlcHJlc2VudHMgYSB1dGlsaXR5IGZvciBhbmFseXppbmcgdGV4dC5cclxuICogQHBhcmFtIHtTdHJpbmd9IHRleHQgVGhlIHRleHQgdG8gYW5hbHl6ZS5cclxuICogQHJldHVybnMge1RleHRBbmFseXplcn0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgdGV4dCBhbmFseXplci5cclxuICogQHJlcXVpcmVzIGF0cm9wYS5zdHJpbmdcclxuICogQHJlcXVpcmVzIGF0cm9wYS5hcnJheXNcclxuICogQHJlcXVpcmVzIGF0cm9wYS5zZXRBc09wdGlvbmFsQXJnXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uLy4uL0F0cm9wYVRvb2xib3hUZXN0cy5odG1sP3NwZWM9YXRyb3BhLlRleHRBbmFseXplclwiPnRlc3RzPC9hPlxyXG4gKi9cclxuYXRyb3BhLlRleHRBbmFseXplciA9IGZ1bmN0aW9uIFRleHRBbmFseXplcih0ZXh0KSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHZhciBjb25zdHJ1Y3Q7XHJcbiAgICAvKipcclxuICAgICogVGhlIHN1cHBsaWVkIHRleHQuIERlZmF1bHRzIHRvIGFuIGVtcHR5IHN0cmluZy5cclxuICAgICogQHR5cGUgU3RyaW5nXHJcbiAgICAqIEBmaWVsZE9mIGF0cm9wYS5UZXh0QW5hbHl6ZXIjXHJcbiAgICAqL1xyXG4gICAgdGhpcy50ZXh0ID0gU3RyaW5nKGF0cm9wYS5zZXRBc09wdGlvbmFsQXJnKCcnLCB0ZXh0KSk7XHJcbiAgICAvKipcclxuICAgICogR2l2ZXMgdGhlIGNvdW50IG9mIHdvcmRzIGluIHRoZSB0ZXh0LiBEZWZhdWx0cyB0byAwLlxyXG4gICAgKiBAdHlwZSBOdW1iZXJcclxuICAgICogQGZpZWxkT2YgYXRyb3BhLlRleHRBbmFseXplciNcclxuICAgICovXHJcbiAgICB0aGlzLndvcmRDb3VudCA9IDA7XHJcbiAgICAvKipcclxuICAgICogQW4gYXJyYXkgb2YgZXZlcnkgd29yZCBpbiB0aGUgc3VwcGxpZWQgdGV4dC5cclxuICAgICogIERlZmF1bHRzIHRvIGFuIGVtcHR5IGFycmF5LlxyXG4gICAgKiBAdHlwZSBBcnJheVxyXG4gICAgKiBAZmllbGRPZiBhdHJvcGEuVGV4dEFuYWx5emVyI1xyXG4gICAgKi9cclxuICAgIHRoaXMud29yZHMgPSBbXTtcclxuICAgIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBiYXNpYyBwcm9wZXJ0aWVzIG9mIHRoZSB0ZXh0IGFuYWx5emVyLlxyXG4gICAgKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICAgICogTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICAgICog4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqIEB2ZXJzaW9uIDIwMTMwMzExXHJcbiAgICAqIEBtZXRob2RPZiBhdHJvcGEuVGV4dEFuYWx5emVyLVxyXG4gICAgKi9cclxuICAgIGNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhdHJvcGEuc3VwcG9ydENoZWNrKCdUZXh0QW5hbHl6ZXInKTtcclxuICAgICAgICB0aGF0LnRleHQgPSBhdHJvcGEuc3RyaW5nLmNvbnZlcnRFb2wodGhhdC50ZXh0LCAnXFxuJyk7XHJcbiAgICAgICAgdGhhdC53b3JkQ291bnQgPSBhdHJvcGEuc3RyaW5nLmNvdW50V29yZHModGhhdC50ZXh0KTtcclxuICAgICAgICB0aGF0LndvcmRzID0gYXRyb3BhLnN0cmluZy5nZXRXb3Jkcyh0aGF0LnRleHQpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0KCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuLyoqXHJcbiAqIEdldHMgYW4gaW5kZXggb2YgdGhlIHRleHQuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDExOFxyXG4gKiBAbWV0aG9kT2YgYXRyb3BhLlRleHRBbmFseXplciNcclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFuIGFycmF5IG9mIHVuaXF1ZSB2YWx1ZXNcclxuICogIGRlcml2ZWQgZnJvbSB0aGUgdGV4dCBnaXZlbi5cclxuICovXHJcbmF0cm9wYS5UZXh0QW5hbHl6ZXIucHJvdG90eXBlLmdldEluZGV4ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB0aGlzLndvcmRzID0gYXRyb3BhLmFycmF5cy5yZWluZGV4KHRoaXMud29yZHMpO1xyXG4gICAgcmV0dXJuIGF0cm9wYS5hcnJheXMuZ2V0VW5pcXVlKHRoaXMud29yZHMpO1xyXG59O1xyXG4vKipcclxuICogR2V0IHRoZSBmcmVxdWVuY3kgZGF0YSBmb3IgZWFjaCB1bmlxdWUgd29yZCBpblxyXG4gKiAgdGhlIHRleHQuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDExOFxyXG4gKiBAbWV0aG9kT2YgYXRyb3BhLlRleHRBbmFseXplciNcclxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2hvc2Uga2V5cyBhcmVcclxuICogIHRoZSB1bmlxdWUgd29yZHMgZnJvbSB0aGUgZ2l2ZW4gdGV4dCBhbmQgd2hvc2VcclxuICogIHZhbHVlcyBhcmUgdGhlIGNvdW50IG9mIGVhY2ggd29yZHMgb2NjdXJyZW5jZS5cclxuICovXHJcbmF0cm9wYS5UZXh0QW5hbHl6ZXIucHJvdG90eXBlLmdldFdvcmRGcmVxdWVuY3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHRoaXMud29yZHMgPSBhdHJvcGEuYXJyYXlzLnJlaW5kZXgodGhpcy53b3Jkcyk7XHJcbiAgICByZXR1cm4gYXRyb3BhLmFycmF5cy5nZXRGcmVxdWVuY3kodGhpcy53b3Jkcyk7XHJcbn07XHJcbi8qKlxyXG4gKiBHZXRzIHBocmFzZXMgb2YgdGhlIHNwZWNpZmllZCBsZW5ndGggZnJvbSB0aGUgdGV4dC5cclxuICogQHBhcmFtIHtOdW1iZXJ9IHBocmFzZUxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBwaHJhc2VzXHJcbiAqICB0byBleHRyYWN0IGZyb20gdGhlIHRleHQuIERlZmF1bHRzIHRvIDIuXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdob3NlIGtleXMgYXJlIHBocmFzZXNcclxuICogIGFuZCB3aG9zZSB2YWx1ZXMgYXJlIHRoZSBudW1iZXIgb2Ygb2NjdXJyZW5jZXMgb2YgdGhlIHBocmFzZS5cclxuICovXHJcbmF0cm9wYS5UZXh0QW5hbHl6ZXIucHJvdG90eXBlLmdldFBocmFzZUZyZXF1ZW5jeSA9IGZ1bmN0aW9uIGdldFBocmFzZUZyZXF1ZW5jeShcclxuICAgIHBocmFzZUxlbmd0aFxyXG4pIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcGhyYXNlTGVuZ3RoID0gYXRyb3BhLnNldEFzT3B0aW9uYWxBcmcoMiwgcGhyYXNlTGVuZ3RoKTtcclxuICAgIGlmKDIgPiBwaHJhc2VMZW5ndGgpIHtcclxuICAgICAgICBwaHJhc2VMZW5ndGggPSAyO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvdW50ZXIgPSAwLCBwcm9wLCBvdXQgPSBbXTtcclxuICAgIFxyXG4gICAgdGhpcy53b3JkcyA9IGF0cm9wYS5hcnJheXMucmVpbmRleCh0aGlzLndvcmRzKTtcclxuICAgIFxyXG4gICAgdGhpcy53b3Jkcy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgsIGFycikge1xyXG4gICAgICAgIGNvdW50ZXIgPSAxOyAgLy8gZWxlbWVudCBpcyB3b3JkIDEgb2YgcGhyYXNlTGVuZ3RoXHJcbiAgICAgICAgLy8gbWFraW5nIHN1cmUgdGhlcmUgYXJlIGVub3VnaCB3b3JkcyB0byBjb25jYXRlbmF0ZSBhIHBocmFzZSBvZiB0aGVcclxuICAgICAgICAvLyBwcm9wZXIgbGVuZ3RoLlxyXG4gICAgICAgIGlmKGFycltpbmRleCArIHBocmFzZUxlbmd0aCAtIDFdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcHJvcCA9IFN0cmluZyhlbGVtZW50ICsgJyAnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBmb3IoY291bnRlcjsgY291bnRlciAhPT0gcGhyYXNlTGVuZ3RoOyBjb3VudGVyKyspIHtcclxuICAgICAgICAgICAgICAgIHByb3AgKz0gU3RyaW5nKGFycltpbmRleCArIGNvdW50ZXJdICsgJyAnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dC5wdXNoKHByb3AudHJpbSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgb3V0ID0gYXRyb3BhLmFycmF5cy5nZXRGcmVxdWVuY3kob3V0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIG91dDtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbndoaWxlKGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICBhdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMucG9wKCkoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGF0cm9wYTtcclxuIiwiLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQG5hbWVzcGFjZSBDb250YWluZXIgZm9yIGFsbCBHbG9yaW91cyBjbGFzc2VzLCBmdW5jdGlvbnMsIGV0Yy5cclxuICovXHJcbnZhciBhdHJvcGEgPSByZXF1aXJlKCdhdHJvcGEtaGVhZGVyJyk7XHJcbi8qKlxyXG4gKiBSZXF1aXJlZCBtb2R1bGUsIHRoZSBkb2NzIGZvciBpdCBhcmUgaW4gdGhlIDxjb2RlPlxyXG4gKiAgYXRyb3BhLWlucXVpcmUvZG9jczwvY29kZT4gZGlyZWN0b3J5IHdoZXJlIHRoaXMgbW9kdWxlIFxyXG4gKiAgaXMgbG9jYXRlZC5cclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F0cm9wYS1pbnF1aXJlL2RvY3MvanNkb2MvaW5kZXguaHRtbFwiPlxyXG4gKiAuLi8uLi8uLi9ub2RlX21vZHVsZXMvYXRyb3BhLWlucXVpcmUvZG9jcy9qc2RvYy9pbmRleC5odG1sPC9hPixcclxuICogIHVubGVzcyB5b3UgaW5zdGFsbGVkIHRoaXMgZGVwZW5kZW5jeSBtYW51YWxseS5cclxuICovXHJcbmF0cm9wYS5pbnF1aXJlID0gcmVxdWlyZSgnYXRyb3BhLWlucXVpcmUnKS5pbnF1aXJlO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vZG9jcy92c2RvYy9PcGVuTGF5ZXJzQWxsLmpzXCIvPlxyXG4vKmpzbGludFxyXG4gICAgaW5kZW50OiA0LFxyXG4gICAgbWF4ZXJyOiA1MCxcclxuICAgIHdoaXRlOiB0cnVlLFxyXG4gICAgYnJvd3NlcjogdHJ1ZSxcclxuICAgIGRldmVsOiB0cnVlLFxyXG4gICAgcGx1c3BsdXM6IHRydWUsXHJcbiAgICByZWdleHA6IHRydWVcclxuKi9cclxuLypnbG9iYWwgYXRyb3BhICovXHJcbi8vIGVuZCBoZWFkZXJcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXRpZXMgZm9yIGhhbmRsaW5nIGFycmF5cy5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTMwMjIxXHJcbiAqIEBuYW1lc3BhY2UgVXRpbGl0aWVzIGZvciBoYW5kbGluZyBhcnJheXMuXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uLy4uL0F0cm9wYVRvb2xib3hUZXN0cy5odG1sP3NwZWM9YXRyb3BhLmFycmF5c1wiPnRlc3RzPC9hPlxyXG4gKi9cclxuYXRyb3BhLmFycmF5cyA9IHt9O1xyXG4vKipcclxuICogQ29tcGFyZXMgdHdvIGFycmF5cyBiYXNlZCBvbiBzaXplLCBjb250ZW50cywgYW5kIGVsZW1lbnQgb3JkZXIuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEyMDkwOVxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheTEgT25lIGFycmF5IHlvdSB3YW50IGNvbXBhcmVkIHRvIGFub3RoZXIuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MiBUaGUgb3RoZXIgYXJyYXkuXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRydWUgb3IgZmFsc2UgZGVwZW5kaW5nIG9uXHJcbiAqICB3aGV0aGVyIG9yIG5vdCB0aGUgYXJyYXlzIG1hdGNoZWQgaW4gc2l6ZSwgY29tcG9zaXRpb24sIGFuZFxyXG4gKiAgZWxlbWVudCBvcmRlci5cclxuICogQGV4YW1wbGVcclxuICogdmFyIHggPSBbMSwyXTtcclxuICogdmFyIHkgPSBbMSwxLDNdO1xyXG4gKiBhdHJvcGEuYXJyYXlzLm1hdGNoKHgseSk7XHJcbiAqIC8vIHJldHVybnMgZmFsc2VcclxuICogQGV4YW1wbGVcclxuICogdmFyIHggPSBbMSwyXTtcclxuICogdmFyIHkgPSBbMSwyXTtcclxuICogYXRyb3BhLmFycmF5cy5tYXRjaCh4LHkpO1xyXG4gKiAvLyByZXR1cm5zIHRydWVcclxuICogQGV4YW1wbGVcclxuICogdmFyIHggPSBbMSwyXTtcclxuICogdmFyIHkgPSBbMiwxXTtcclxuICogYXRyb3BhLmFycmF5cy5tYXRjaCh4LHkpO1xyXG4gKiAvLyByZXR1cm5zIGZhbHNlIGJlY2F1c2UgdGhlIGVsZW1lbnRzIGFyZSBub3QgaW4gdGhlIHNhbWUgb3JkZXIuXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciB4ID0gWzEseydhUHJvcCcgOiAnYVZhbHVlJ31dO1xyXG4gKiB2YXIgeSA9IFsxLHsnYVByb3AnIDogJ2FWYWx1ZSd9XTtcclxuICogYXRyb3BhLmFycmF5cy5tYXRjaCh4LHkpO1xyXG4gKiAvLyByZXR1cm5zIGZhbHNlIGJlY2F1c2UgZXZlbiB0aG91Z2ggdGhlIG9iamVjdCBsb29rcyB0aGUgc2FtZSwgdGhlXHJcbiAqIC8vIHR3byBvYmplY3RzIGFyZSBpbiBmYWN0IGRpc3RpbmN0IG9iamVjdHMuXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciBvYmogPSB7J2FQcm9wJyA6ICdhVmFsdWUnfTtcclxuICogdmFyIHggPSBbMSxvYmpdO1xyXG4gKiB2YXIgeSA9IFsxLG9ial07XHJcbiAqIGF0cm9wYS5hcnJheXMubWF0Y2goeCx5KTtcclxuICogLy8gcmV0dXJucyB0cnVlIGJlY2F1c2UgdGhlIG9iamVjdHMgcmVmZXJlbmNlZCBpbiB0aGUgYXJyYXlzIGFyZVxyXG4gKiAvLyBpbiBmYWN0IHRoZSBzYW1lIG9iamVjdC5cclxuICovXHJcbmF0cm9wYS5hcnJheXMubWF0Y2ggPSBmdW5jdGlvbiBhcnJheXNNYXRjaChhcnJheTEsIGFycmF5Mikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgeCxcclxuICAgIGw7XHJcbiAgICBpZiAoYXJyYXkxLmxlbmd0aCAhPT0gYXJyYXkyLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGwgPSBhcnJheTEubGVuZ3RoO1xyXG4gICAgZm9yICh4ID0gMDsgeCA8IGw7IHggKz0gMSkge1xyXG4gICAgICAgIGlmIChhcnJheTFbeF0gIT09IGFycmF5Mlt4XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn07XHJcbi8qKlxyXG4gKiBTdWJ0cmFjdHMgb25lIGFycmF5IGZyb20gYW5vdGhlciBhcnJheSBiYXNlZCBvbiB0aGUgdW5pcXVlIHZhbHVlcyBpbiBib3RoXHJcbiAqICBzZXRzLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMzAxMTJcclxuICogQHBhcmFtIHtBcnJheX0gYSAoc3VidHJhaGVuZCkgVGhlIGFycmF5IHRvIHN1YnRyYWN0LlxyXG4gKiBAcGFyYW0ge0FycmF5fSAobWludWVuZCkgZnJvbUIgVGhlIGFycmF5IHdpdGggZWxlbWVudHMgZHVwbGljYXRlZCBpbiA8Y29kZT5hPC9jb2RlPlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYSBuZXcgYXJyYXkgY29udGFpbmluZyBvbmx5IHRoZSB1bmlxdWVcclxuICogIHZhbHVlcyBmb3VuZCBpbiA8Y29kZT5mcm9tQjwvY29kZT4gdGhhdCBhcmUgbm90IHByZXNlbnQgaW4gPGNvZGU+YTwvY29kZT5cclxuICogQGV4YW1wbGVcclxuICogdmFyIHggPSBbMSwyXTtcclxuICogdmFyIHkgPSBbMSwxLDNdO1xyXG4gKiBhdHJvcGEuYXJyYXlzLnN1YnRyYWN0KHgseSk7XHJcbiAqIC8vIHJldHVybnMgWzNdXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciB4ID0gWzEsM107XHJcbiAqIHZhciB5ID0gWzMsMV07XHJcbiAqIGF0cm9wYS5hcnJheXMuc3VidHJhY3QoeCx5KTtcclxuICogLy8gcmV0dXJucyBbXVxyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgeCA9IFsxLDNdO1xyXG4gKiB2YXIgeSA9IFszLDEsMSw5XTtcclxuICogYXRyb3BhLmFycmF5cy5zdWJ0cmFjdCh4LHkpO1xyXG4gKiAvLyByZXR1cm5zIFs5XVxyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgeCA9IFsxLDMseydhUHJvcCcgOiAnYVZhbCd9XTtcclxuICogdmFyIHkgPSBbMywxLHsnYVByb3AnIDogJ2FWYWwnfV07XHJcbiAqIGF0cm9wYS5hcnJheXMuc3VidHJhY3QoeCx5KTtcclxuICogLy8gcmV0dXJucyBbeydhUHJvcCcgOiAnYVZhbCd9XSBcclxuICogLy8gYmVjYXVzZSB0aGUgdHdvIG9iamVjdHMgYXJlIG5vdCB0aGUgc2FtZSBvYmplY3QuXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciBvYmogPSB7J2FQcm9wJyA6ICdhVmFsJ307XHJcbiAqIHZhciB4ID0gWzEsMyxvYmpdO1xyXG4gKiB2YXIgeSA9IFszLDEseydhUHJvcCcgOiAnYVZhbCd9XTtcclxuICogYXRyb3BhLmFycmF5cy5zdWJ0cmFjdCh4LHkpO1xyXG4gKiAvLyByZXR1cm5zIFt7J2FQcm9wJyA6ICdhVmFsJ31dIFxyXG4gKiAvLyBiZWNhdXNlIHRoZSB0d28gb2JqZWN0cyBhcmUgbm90IHRoZSBzYW1lIG9iamVjdC5cclxuICogQGV4YW1wbGVcclxuICogdmFyIG9iaiA9IHsnYVByb3AnIDogJ2FWYWwnfVxyXG4gKiB2YXIgeCA9IFsxLDMsb2JqXTtcclxuICogdmFyIHkgPSBbMywxLG9ial07XHJcbiAqIGF0cm9wYS5hcnJheXMuc3VidHJhY3QoeCx5KTtcclxuICogLy8gcmV0dXJucyBbXSBcclxuICogLy8gYmVjYXVzZSB0aGUgb2JqZWN0cyByZWZlcmVuY2VkIGluIHRoZSBhcnJheXMgYXJlIHRoZSBzYW1lIG9iamVjdC5cclxuICovXHJcbmF0cm9wYS5hcnJheXMuc3VidHJhY3QgPSBmdW5jdGlvbihhLCBmcm9tQikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgdGhlID0ge307XHJcbiAgICB0aGUucmVzdWx0ID0gW107XHJcbiAgICBmcm9tQi5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgIHRoZS5tYXJrID0gZmFsc2U7XHJcbiAgICAgICAgYS5mb3JFYWNoKGZ1bmN0aW9uKHJtKXtcclxuICAgICAgICAgICAgaWYoaXRlbSA9PT0gcm0pIHtcclxuICAgICAgICAgICAgICAgIHRoZS5tYXJrID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHRoZS5tYXJrICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoZS5yZXN1bHQucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGUucmVzdWx0O1xyXG59O1xyXG4vKipcclxuICogUmV0dXJucyBhbiBhcnJheSBvZiB2YWx1ZXMgZm91bmQgaW4gYm90aCBvZiB0aGUgZ2l2ZW4gYXJyYXlzLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMzAxMTJcclxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkxIEFuIGFycmF5LlxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheTIgQW5vdGhlciBhcnJheS5cclxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFuIGFycmF5IG9mIHZhbHVlcyBmb3VuZCBpbiBib3RoIG9mIHRoZSBnaXZlblxyXG4gKiAgYXJyYXlzLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgeCA9IFsxLDMsNF07XHJcbiAqIHZhciB5ID0gWzMsMSw1XTtcclxuICogYXRyb3BhLmFycmF5cy5pbnRlcnNlY3QoeCx5KTtcclxuICogLy8gcmV0dXJucyBbMSwzXVxyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgeCA9IFsxLDEsMyw0XTtcclxuICogdmFyIHkgPSBbMywxLDEsNV07XHJcbiAqIGF0cm9wYS5hcnJheXMuaW50ZXJzZWN0KHgseSk7XHJcbiAqIC8vIHJldHVybnMgWzEsMSwzXVxyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgb2JqID0geydhUHJvcCcgOiAnYVZhbCd9O1xyXG4gKiB2YXIgeCA9IFsxLDMsb2JqXTtcclxuICogdmFyIHkgPSBbMywxLG9ial07XHJcbiAqIGF0cm9wYS5hcnJheXMuaW50ZXJzZWN0KHgseSk7XHJcbiAqIC8vIHJldHVybnMgWzEsMyx7J2FQcm9wJyA6ICdhVmFsJ31dXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciBvYmogPSB7J2FQcm9wJyA6ICdhVmFsJ307XHJcbiAqIHZhciB4ID0gWzEsMyx7J2FQcm9wJyA6ICdhVmFsJ31dO1xyXG4gKiB2YXIgeSA9IFszLDEsb2JqXTtcclxuICogYXRyb3BhLmFycmF5cy5pbnRlcnNlY3QoeCx5KTtcclxuICogLy8gcmV0dXJucyBbMSwzXSBiZWNhdXNlIHRoZSB0d28gb2JqZWN0cyBhcmUgbm90IHRoZSBzYW1lIG9iamVjdC5cclxuICogQGV4YW1wbGVcclxuICogdmFyIHggPSBbMSwzLHsnYVByb3AnIDogJ2FWYWwnfV07XHJcbiAqIHZhciB5ID0gWzMsMSx7J2FQcm9wJyA6ICdhVmFsJ31dO1xyXG4gKiBhdHJvcGEuYXJyYXlzLmludGVyc2VjdCh4LHkpO1xyXG4gKiAvLyByZXR1cm5zIFsxLDNdIGJlY2F1c2UgdGhlIHR3byBvYmplY3RzIGFyZSBub3QgdGhlIHNhbWUgb2JqZWN0LlxyXG4gKi9cclxuYXRyb3BhLmFycmF5cy5pbnRlcnNlY3QgPSBmdW5jdGlvbiBpbnRlcnNlY3QoYXJyYXkxLCBhcnJheTIpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIHNtYWxsQXJyYXksIGxhcmdlQXJyYXksIGludGVyc2VjdGlvbiA9IFtdO1xyXG4gICAgaWYoYXJyYXkxLmxlbmd0aCA+IGFycmF5Mi5sZW5ndGgpIHtcclxuICAgICAgICBsYXJnZUFycmF5ID0gYXJyYXkxLnNwbGljZSgwKTtcclxuICAgICAgICBzbWFsbEFycmF5ID0gYXJyYXkyLnNwbGljZSgwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGFyZ2VBcnJheSA9IGFycmF5Mi5zcGxpY2UoMCk7XHJcbiAgICAgICAgc21hbGxBcnJheSA9IGFycmF5MS5zcGxpY2UoMCk7XHJcbiAgICB9XHJcbiAgICBzbWFsbEFycmF5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICB2YXIgaWR4SW5MYXJnZUFycmF5ID0gbGFyZ2VBcnJheS5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIGlmICgwIDw9IGlkeEluTGFyZ2VBcnJheSkgeyAvLyBoYXMgd29yZFxyXG4gICAgICAgICAgICBpbnRlcnNlY3Rpb24ucHVzaChsYXJnZUFycmF5LnNwbGljZShpZHhJbkxhcmdlQXJyYXksIDEpWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbnRlcnNlY3Rpb247XHJcbn07XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBmcmVxdWVuY3kgb2YgaXRlbXMgb2NjdXJyaW5nIGluIGFuIGFycmF5LlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMzAxMThcclxuICogQHBhcmFtIHtBcnJheX0gYXJyIFRoZSBhcnJheSB0byBjYWxjdWxhdGUgZnJlcXVlbmNpZXMgZnJvbS5cclxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2hvc2Uga2V5cyBhcmUgZWFjaCB1bmlxdWVcclxuICogIGVsZW1lbnRzIGZyb20gdGhlIGFycmF5IGFuZCB0aGVpciB2YWx1ZSBpcyB0aGVpciBmcmVxdWVuY3kgb2ZcclxuICogIG9jY3VycmVuY2Ugd2l0aGluIHRoZSBhcnJheS4gQmUgY2FyZWZ1bCB0aGF0IHlvdXIgYXJyYXkgZG9lc1xyXG4gKiAgbm90IGNvbnRhaW4gdmFsdWVzIG1hdGNoaW5nIG9iamVjdCBpbnN0YW5jZSBwcm9wZXJ0eSBuYW1lcy5cclxuICogQGV4YW1wbGVcclxuICogdmFyIHggPSBbMSwxLDEsMSwxLDMsM107XHJcbiAqIGF0cm9wYS5hcnJheXMuZ2V0RnJlcXVlbmN5KHgpO1xyXG4gKiAvLyByZXR1cm5zIHtcclxuICogLy8gICAgIFwiMVwiOiA1LFxyXG4gKiAvLyAgICAgXCIzXCI6IDJcclxuICogLy8gfVxyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgeCA9IFtcImJpbGxcIiwgXCJmcmVkXCIsIFwiZnJlZFwiLCBcImphbmVcIl07XHJcbiAqIGF0cm9wYS5hcnJheXMuZ2V0RnJlcXVlbmN5KHgpO1xyXG4gKiAvLyByZXR1cm5zIHtcclxuICogLy8gICAgIFwiYmlsbFwiOiAxLFxyXG4gKiAvLyAgICAgXCJmcmVkXCI6IDIsXHJcbiAqIC8vICAgICBcImphbmVcIjogMVxyXG4gKiAvLyB9XHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciB4ID0gWzEsMyx7J2FQcm9wJyA6ICdhVmFsJ31dO1xyXG4gKiBhdHJvcGEuYXJyYXlzLmdldEZyZXF1ZW5jeSh4KTtcclxuICogLy8gcmV0dXJucyB7XHJcbiAqIC8vICAgICBcIjFcIjogMSxcclxuICogLy8gICAgIFwiM1wiOiAxLFxyXG4gKiAvLyAgICAgXCJbb2JqZWN0IE9iamVjdF1cIjogMVxyXG4gKiAvLyB9XHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciBvYmogPSB7J2FQcm9wJyA6ICdhVmFsJ307XHJcbiAqIHZhciBvdGhlck9iaiA9IHt9O1xyXG4gKiB2YXIgeCA9IFsxLDMsb2JqLG90aGVyT2JqLHsnYURvdWdobnV0JyA6ICdzcHJpbmtsZXMnfV07XHJcbiAqIGF0cm9wYS5hcnJheXMuZ2V0RnJlcXVlbmN5KHgpO1xyXG4gKiAvLyByZXR1cm5zIHtcclxuICogLy8gICAgIFwiMVwiOiAxLFxyXG4gKiAvLyAgICAgXCIzXCI6IDEsXHJcbiAqIC8vICAgICBcIltvYmplY3QgT2JqZWN0XVwiOiAzXHJcbiAqIC8vIH1cclxuICogQGV4YW1wbGVcclxuICogdmFyIHggPSBbMSwzLFwidG9TdHJpbmdcIl07XHJcbiAqIGF0cm9wYS5hcnJheXMuZ2V0RnJlcXVlbmN5KHgpO1xyXG4gKiAvLyByZXR1cm5zIHtcclxuICogLy8gICAgIFwiMVwiOiAxLFxyXG4gKiAvLyAgICAgXCIzXCI6IDEsXHJcbiAqIC8vICAgICBcInRvU3RyaW5nXCI6IFwiZnVuY3Rpb24gdG9TdHJpbmcoKSB7XFxuICAgIFtuYXRpdmUgY29kZV1cXG59MVwiXHJcbiAqIC8vIH1cclxuICovXHJcbmF0cm9wYS5hcnJheXMuZ2V0RnJlcXVlbmN5ID0gZnVuY3Rpb24gKGFycikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgb3V0ID0gYXJyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyKSB7XHJcbiAgICAgICAgaWYgKGFjY1tjdXJyXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFjY1tjdXJyXSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWNjW2N1cnJdICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSk7XHJcbiAgICByZXR1cm4gb3V0O1xyXG59O1xyXG4vKipcclxuICogR2V0cyBVbmlxdWUgdmFsdWVzIGZyb20gYW4gYXJyYXkuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDExOFxyXG4gKiBAcGFyYW0ge0FycmF5fSBsYXJnZUFycmF5IFRoZSBhcnJheSB3aXRoIGR1cGxpY2F0ZSB2YWx1ZXMgaW4gaXQuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhIG5ldyBhcnJheSBjb250YWluaW5nIG9ubHkgdGhlIHVuaXF1ZVxyXG4gKiAgdmFsdWVzIGZvdW5kIGluIHRoZSBsYXJnZUFycmF5LlxyXG4gKiBAZXhhbXBsZVxyXG4gKiB2YXIgeCA9IFsxLDEsMSw0LDQsMyw2XTtcclxuICogYXRyb3BhLmFycmF5cy5nZXRVbmlxdWUoeCk7XHJcbiAqIC8vIHJldHVybnMgWyBcIjFcIiwgXCI0XCIsIFwiM1wiLCBcIjZcIiBdXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciB4ID0gW1wiYmlsbFwiLCBcImZyZWRcIiwgXCJqYW5lXCIsIFwiZnJlZFwiXTtcclxuICogYXRyb3BhLmFycmF5cy5nZXRVbmlxdWUoeCk7XHJcbiAqIC8vIHJldHVybnMgW1wiYmlsbFwiLCBcImZyZWRcIiwgXCJqYW5lXCJdXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciB4ID0gWyBcclxuICogICAgIFwiYmlsbFwiLFxyXG4gKiAgICAge1wiYVByb3BcIiA6IFwiYVZhbHVlXCJ9LFxyXG4gKiAgICAge1wiYUd1eVwiIDogXCJmcmVkXCJ9LFxyXG4gKiAgICAge1wiYUxhZHlcIiA6IFwiamFuZVwifVxyXG4gKiBdO1xyXG4gKiBhdHJvcGEuYXJyYXlzLmdldFVuaXF1ZSh4KTtcclxuICogLy8gcmV0dXJucyBbIFwiYmlsbFwiLCBcIltvYmplY3QgT2JqZWN0XVwiIF1cclxuICovXHJcbmF0cm9wYS5hcnJheXMuZ2V0VW5pcXVlID0gZnVuY3Rpb24gKGxhcmdlQXJyYXkpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGF0cm9wYS5hcnJheXMuZ2V0RnJlcXVlbmN5KGxhcmdlQXJyYXkpKS5zb3J0KCk7XHJcbn07XHJcbi8qKlxyXG4gKiBSZW1vdmVzIGVtcHR5IHN0cmluZ3MgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDExOFxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheVdpdGhFbXB0eUVsZW1lbnRzIFRoZSBhcnJheSB3aXRoIGVtcHR5IHN0cmluZ3MgaW4gaXQuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIGVtcHR5IHN0cmluZ3MgcmVtb3ZlZC5cclxuICogQGV4YW1wbGVcclxuICogdmFyIHggPSBbIDEwLCAsIDUsIFwiXCIsICcnLCA3IF07XHJcbiAqIGNvbnNvbGUubG9nKCdzdGFydGluZyBsZW5ndGggJyArIHgubGVuZ3RoKTtcclxuICogY29uc29sZS5sb2coeCk7XHJcbiAqIHggPSBhdHJvcGEuYXJyYXlzLnJlbW92ZUVtcHR5RWxlbWVudHMoeCk7XHJcbiAqIGNvbnNvbGUubG9nKCdlbmRpbmcgbGVuZ3RoICcgKyB4Lmxlbmd0aCk7XHJcbiAqIGNvbnNvbGUubG9nKHgpO1xyXG4gKiAvLyBkaXNwbGF5cyB0aGUgZm9sbG93aW5nXHJcbiAqIC8vIHN0YXJ0aW5nIGxlbmd0aCA2XHJcbiAqIC8vIFsxMCwgdW5kZWZpbmVkLCA1LCBcIlwiLCBcIlwiLCA3XVxyXG4gKiAvLyBlbmRpbmcgbGVuZ3RoIDNcclxuICogLy8gWzEwLCA1LCA3XVxyXG4gKi9cclxuYXRyb3BhLmFycmF5cy5yZW1vdmVFbXB0eUVsZW1lbnRzID0gZnVuY3Rpb24gKGFycmF5V2l0aEVtcHR5RWxlbWVudHMpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuIGFycmF5V2l0aEVtcHR5RWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuICFhdHJvcGEuaW5xdWlyZS5pc0VtcHR5U3RyaW5nKGl0ZW0pO1xyXG4gICAgfSk7XHJcbn07XHJcbi8qKlxyXG4gKiBSZWluZGV4ZXMgYW4gYXJyYXkuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDExOFxyXG4gKiBAcGFyYW0ge0FycmF5fSBhcnIgVGhlIGFycmF5IHdpdGggZGlzY29udGludW91cyBrZXlzLlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gYXJyYXkgd2l0aCBjb250aW51b3VzIGtleXMuXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciB4ID0gWyBcImFcIiwgXCJiXCIsIFwiY1wiLCB1bmRlZmluZWQgXTtcclxuICogY29uc29sZS5sb2coeCk7IC8vIFsgXCJhXCIsIFwiYlwiLCBcImNcIiwgdW5kZWZpbmVkIF1cclxuICogY29uc29sZS5sb2coeC5sZW5ndGgpOyAvLyA0XHJcbiAqIFxyXG4gKiBkZWxldGUgeFsxXTsgLy8gZGVsZXRlcyB0aGUga2V5IGZyb20gdGhlIGFycmF5IGJ1dFxyXG4gKiAgICAgICAgICAgICAgLy8gdGhlIGFycmF5IGxlbmd0aCByZW1haW5zIHRoZSBzYW1lXHJcbiAqICAgICAgICAgICAgICAvLyBhdCB0aGlzIHBvaW50IHRoZSBhcnJheXMga2V5cyBhcmUgMCwgMiwgYW5kIDNcclxuICogY29uc29sZS5sb2coeCk7IC8vIFsgXCJhXCIsIHVuZGVmaW5lZCwgXCJjXCIsIHVuZGVmaW5lZCBdXHJcbiAqIGNvbnNvbGUubG9nKHgubGVuZ3RoKTsgLy8gNFxyXG4gKiBcclxuICogeCA9IGF0cm9wYS5hcnJheXMucmVpbmRleCh4KTtcclxuICogY29uc29sZS5sb2coeCk7IC8vICBbIFwiYVwiLCBcImNcIiwgdW5kZWZpbmVkIF1cclxuICogICAgLy8gbm90ZSB0aGF0IHRoZSBsYXN0IGVsZW1lbnQgZXhpc3RlZCBpbiB0aGUgYXJyYXksIGl0cyB2YWx1ZSB3YXNcclxuICogICAgLy8gdW5kZWZpbmVkIGJ1dCBpdCBkaWQgaGF2ZSBhIGtleSBzbyB0aGUgZWxlbWVudCByZW1haW5zIGluIHRoZSBhcnJheS5cclxuICogICAgLy9cclxuICogICAgLy8gVGhlIGRlbGV0ZWQgZWxlbWVudCB3YXMgaW4gZmFjdCBkZWxldGVkIGZyb20gdGhlIGFycmF5IHNvIHRoZXJlIHdhcyBub1xyXG4gKiAgICAvLyBrZXkgeFsxXSBhdCBhbGwsIHdoZW4gdHJ5aW5nIHRvIGFjY2VzcyB0aGlzIG5vbiBleGlzdGluZyBlbGVtZW50IHRoZVxyXG4gKiAgICAvLyB2YWx1ZSBvZiB1bmRlZmluZWQgd2FzIHJldHVybmVkLiBUaGlzIGJlaGF2aW9yIGlzIGNvbmZ1c2luZyB1bmxlc3MgeW91XHJcbiAqICAgIC8vIHRoaW5rIGFib3V0IHRoZSBhcnJheWFzIGFuIG9iamVjdCB3aG9zZSBwcm9wZXJ0aWVzIGFyZSBuYW1lZCBieVxyXG4gKiAgICAvLyBudW1iZXJzLiBBY2Nlc3NpbmcgYW4gdW5kZWZpbmVkIHByb3BlcnR5IHJldHVybnMgdW5kZWZpbmVkIHJlZ2FyZGxlc3NcclxuICogICAgLy8gb2Ygd2hldGhlciB0aGUgcHJvcGVydHkgZXhpc3RlZCBpbiB0aGUgcGFzdCBvciBub3QuXHJcbiAqIGNvbnNvbGUubG9nKHgubGVuZ3RoKTsgLy8gM1xyXG4gKi9cclxuYXRyb3BhLmFycmF5cy5yZWluZGV4ID0gZnVuY3Rpb24gcmVpbmRleChhcnIpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIGlkeCwgb3V0O1xyXG4gICAgb3V0ID0gW107XHJcbiAgICBmb3IoaWR4IGluIGFycikge1xyXG4gICAgICAgIGlmKGFyci5oYXNPd25Qcm9wZXJ0eShpZHgpKSB7XHJcbiAgICAgICAgICAgIG91dC5wdXNoKGFycltpZHhdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG59O1xyXG4vKipcclxuICogU29ydHMgYW4gYXJyYXkncyBlbGVtZW50cyBudW1lcmljYWxseS5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTMwMTIwXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGFyciBUaGUgYXJyYXkgdG8gc29ydC4gQWxsIGVsZW1lbnRzIG9mIHRoZSBhcnJheSBtdXN0IGJlXHJcbiAqICBudW1iZXItaXNoLlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gYXJyYXkgd2hvc2UgZWxlbWVudHMgYXJlIGluIG51bWVyaWMgb3JkZXIuXHJcbiAqIEBleGFtcGxlXHJcbiAqIHZhciB4ID0gWzMsIDIsIDksIDI2LCAxMCwgMSwgOTksIDE1XTtcclxuICogY29uc29sZS5sb2coIGF0cm9wYS5hcnJheXMuc29ydE51bWVyaWNhbGx5KHgpICk7XHJcbiAqIC8vIGxvZ3MgWzEsIDIsIDMsIDksIDEwLCAxNSwgMjYsIDk5XVxyXG4gKi9cclxuYXRyb3BhLmFycmF5cy5zb3J0TnVtZXJpY2FsbHkgPSBmdW5jdGlvbiBzb3J0TnVtZXJpY2FsbHkoYXJyKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiAoYSAtIGIpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8qKlxyXG4gKiBUaHJvd3MgYW4gZXJyb3IsIDxjb2RlPlN0cmluZy5wcm90b3R5cGUubG9jYWxlQ29tcGFyZTwvY29kZT4gaXMgbm90IFxyXG4gKiAgc3RhbmRhcmRpemVkLlxyXG4gKiBcclxuICogIFllcywgbG9jYWxlQ29tcGFyZSBpcyBpbiB0aGUgc3RhbmRhcmQgYnV0LCBhdCB0aGlzIHRpbWUgdGhlIGFjdHVhbFxyXG4gKiAgY29tcGFyaXNvbiBpcyBpbXBsZW1lbnRhdGlvbiBkZXBlbmRhbnQuIFRoaXMgbWVhbnMgdGhhdCBcImFscGhhYmV0aWNhbCBvcmRlclwiXHJcbiAqICBjYW4gYmUgZGlmZmVyZW50IG9uIGRpZmZlcmVudCBwbGF0Zm9ybXMuIFdoYXQgSSBmb3VuZCB3YXMgdGhhdCBpbiBub2RlIHRoZVxyXG4gKiAgYXJyYXkgb2YgPGNvZGU+WydhJywnWicsJ0EnLCd6J108L2NvZGU+IHdvdWxkIGJlIHNvcnRlZCB0b1xyXG4gKiAgPGNvZGU+WydBJywnWicsJ2EnLCd6XCJdPC9jb2RlPiwgd2hpbGUgb25cclxuICogIGZpcmVmb3ggaXQgd291bGQgYmUgc29ydGVkIHRvIDxjb2RlPlsnYScsJ0EnLCd6JywnWiddPC9jb2RlPi4gV2hvIGtub3dzIGlmXHJcbiAqICBhbm90aGVyIGltcGxlbWVudG9yIHdvdWxkIHNvcnQgaXQgPGNvZGU+WydBJywnYScsJ1onLCd6J108L2NvZGU+P1xyXG4gKiBcclxuICogSW4gb3JkZXIgdG8gcHJvdmlkZSBhIHJlbGlhYmxlIGltcGxlbWVudGF0aW9uIEkgd291bGQgaGF2ZSB0byBjcmVhdGUgbXkgb3duXHJcbiAqICBpbXBsZW1lbnRhdGlvbiBvZiA8Y29kZT5TdHJpbmcucHJvdG90eXBlLmxvY2FsZUNvbXBhcmU8L2NvZGU+IGFuZCB0aGF0J3NcclxuICogIGp1c3QgdG9vIG11Y2ggd29yayBmb3IgbWUgdG8gZG8gYWxvbmUuXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSBcIlN0cmluZy5wcm90b3R5cGUubG9jYWxlQ29tcGFyZSBpcyBub3Qgc3RhbmRhcmRpemVkXCJcclxuICovXHJcbmF0cm9wYS5hcnJheXMuc29ydEFscGhhYmV0aWNhbGx5ID0gZnVuY3Rpb24gc29ydEFscGhhYmV0aWNhbGx5KGFycikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHJpbmcucHJvdG90eXBlLmxvY2FsZUNvbXBhcmUgaXMgbm90IHN0YW5kYXJkaXplZFwiKTtcclxufTtcclxuLyoqXHJcbiAqIERlbGV0ZXMgdGhlIGdpdmVuIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXkgYXQgdGhlIGdpdmVuIGluZGV4LiBJdCBiYXNpY2FsbHlcclxuICogIGRvZXMgd2hhdCB5b3Ugd291bGQgZXhwZWN0IHRoZSBkZWxldGUgb3BlcmF0b3IgdG8gZG8sIGV4Y2VwdCB0aGUgZGVsZXRlXHJcbiAqICBvcGVyYXRvciBkb2Vzbid0IGRvIHdoYXQgeW91IHdvdWxkIGV4cGVjdC5cclxuICogQHBhcmFtIHtBcnJheX0gYXJyIFRoZSBhcnJheS5cclxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCB0byBkZWxldGUuXHJcbiAqIEByZXR1cm5zIFJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgZWxlbWVudCByZW1vdmVkLCBjb250aWd1b3VzIGtleXMsIGFuZFxyXG4gKiAgd2hvc2UgbGVuZ3RoIGlzIDEgbGVzcyB0aGFuIHRoZSBpbnB1dCBhcnJheS5cclxuICovXHJcbmF0cm9wYS5hcnJheXMuZGVsZXRlRWxlbWVudCA9IGZ1bmN0aW9uIChhcnIsIGluZGV4KSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGRlbGV0ZSBhcnJbaW5kZXhdO1xyXG4gICAgcmV0dXJuIGF0cm9wYS5hcnJheXMucmVpbmRleChhcnIpO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxud2hpbGUoYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgIGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5wb3AoKSgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gYXRyb3BhO1xyXG4iLCJ2YXIgYXRyb3BhID0ge307XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vZG9jcy92c2RvYy9PcGVuTGF5ZXJzQWxsLmpzXCIvPlxyXG5cclxuLypqc2xpbnRcclxuICAgIGluZGVudDogNCxcclxuICAgIG1heGVycjogNTAsXHJcbiAgICB3aGl0ZTogdHJ1ZSxcclxuICAgIGJyb3dzZXI6IHRydWUsXHJcbiAgICBkZXZlbDogdHJ1ZSxcclxuICAgIHBsdXNwbHVzOiB0cnVlLFxyXG4gICAgcmVnZXhwOiB0cnVlXHJcbiovXHJcbi8qZ2xvYmFsIFhQYXRoUmVzdWx0ICovXHJcbi8vIGVuZCBoZWFkZXJcclxuXHJcbi8qKlxyXG4gKiBDb250YWluZXIgZm9yIGFsbCBHbG9yaW91cyBjbGFzc2VzLCBmdW5jdGlvbnMsIGV0Yy5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEBuYW1lc3BhY2UgQ29udGFpbmVyIGZvciBhbGwgR2xvcmlvdXMgY2xhc3NlcywgZnVuY3Rpb25zLCBldGMuXHJcbiAqL1xyXG52YXIgYXRyb3BhO1xyXG5hdHJvcGEgPSB7fTtcclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHRoaXMgY2xhc3MgaGFzIGJlZW4gbWFya2VkIGFzIHVuc3VwcG9ydGVkIGFuZCB0aHJvd3MgYW4gXHJcbiAqICBlcnJvciBpZiBpdCBoYXMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDMwOFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIFRoZSBuYW1lIG9mIHRoZSBjbGFzcy5cclxuICogQHBhcmFtIHtTdHJpbmd9IGVycm9yTWVzc2FnZSBPcHRpb25hbC4gQSBjdXN0b20gZXJyb3IgbWVzc2FnZS4gRGVmYXVsdHMgdG9cclxuICogIGF0cm9wYS5kYXRhW2NsYXNzTmFtZV0uZXJyb3JcclxuICovXHJcbmF0cm9wYS5zdXBwb3J0Q2hlY2sgPSBmdW5jdGlvbiAoY2xhc3NOYW1lLCBlcnJvck1lc3NhZ2UpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgY2xhc3NOYW1lID0gU3RyaW5nKGNsYXNzTmFtZSk7XHJcbiAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2UgfHwgYXRyb3BhLmRhdGFbY2xhc3NOYW1lXS5lcnJvcjtcclxuICAgIGVycm9yTWVzc2FnZSA9IFN0cmluZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgXHJcbiAgICBpZihhdHJvcGEuZGF0YVtjbGFzc05hbWVdLnN1cHBvcnQgPT09ICd1bnN1cHBvcnRlZCcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFB1c2hlcyBhIHJlcXVpcmVtZW50IGNoZWNrIGludG8gYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzLiBUaGUgdGVzdFxyXG4gKiAgdGVzdHMgd2hldGhlciB0aGUgY2xhc3MgaXMgc3VwcG9ydGVkIGluIHRoaXMgZW52aXJvbm1lbnQuIFNldHNcclxuICogIGF0cm9wYS5kYXRhW2NsYXNzTmFtZV0ncyBzdXBwb3J0IHRvIHVuc3VwcG9ydGVkIGFuZCBlcnJvciB0byBlcnJvck1lc3NhZ2VcclxuICogIGlmIHRoZSByZXF1aXJlbWVudEZuIHJldHVybnMgZmFsc2UuIFRoZSByZXF1aXJlbWVudCBjaGVja3Mgd2lsbCBhbGwgYmUgcnVuXHJcbiAqICBhZnRlciB0aGUgbGlicmFyeSBoYXMgbG9hZGVkLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMzAzMDhcclxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZSBUaGUgbmFtZSBvZiB0aGUgY2xhc3MuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlcXVpcmVtZW50Rm4gQSBmdW5jdGlvbiB0byB0ZXN0IHdoZXRoZXIgb3Igbm90IHRoZSBjbGFzc1xyXG4gKiAgaXMgc3VwcG9ydGVkIGluIHRoaXMgZW52aXJvbm1lbnQuIElmIHN1cHBvcnRlZCwgcmV0dXJucyB0cnVlIG90aGVyd2lzZVxyXG4gKiAgcmV0dXJuIGZhbHNlLlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXJyb3JNZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSB3aGVuIHRoaXMgY2xhc3Mgb3IgaXRzXHJcbiAqICBtZXRob2RzIGFyZSBjYWxsZWQgaW4gdW5zdXBwb3J0ZWQgZW52aXJvbm1lbnRzLiBEZWZhdWx0cyB0bzpcclxuICogICdUaGUgYXRyb3BhLicgKyBjbGFzc05hbWUgKyAnIGNsYXNzIGlzIHVuc3VwcG9ydGVkIGluIHRoaXMgZW52aXJvbm1lbnQuJztcclxuICovXHJcbmF0cm9wYS5yZXF1aXJlcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUsIHJlcXVpcmVtZW50Rm4sIGVycm9yTWVzc2FnZSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgY2hlY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRlc3QgPSBmYWxzZTtcclxuICAgICAgICBpZih0eXBlb2YgY2xhc3NOYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2F0cm9wYS5yZXF1aXJlcyByZXF1aXJlcyB0aGUgY2xhc3MgbmFtZSB0byBiZSAnICtcclxuICAgICAgICAgICAgICAgICdzcGVjaWZpZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoYXRyb3BhLmRhdGFbY2xhc3NOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGF0cm9wYS5kYXRhW2NsYXNzTmFtZV0gPSB7fTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiByZXF1aXJlbWVudEZuICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlbWVudEZuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlIHx8ICdUaGUgYXRyb3BhLicgKyBjbGFzc05hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICcgY2xhc3MgaXMgdW5zdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudC4nO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGVzdCA9IHJlcXVpcmVtZW50Rm4oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhdHJvcGEuZGF0YVtjbGFzc05hbWVdLmVycm9yID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGVzdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGF0cm9wYS5kYXRhW2NsYXNzTmFtZV0uc3VwcG9ydCA9ICd1bnN1cHBvcnRlZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBhdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMucHVzaChjaGVjayk7XHJcbn07XHJcbi8qKlxyXG4gKiBDb250YWluZXIgZm9yIGdvYmFsIGRhdGEgcmVsYXRlZCB0byB0aGUgY2xhc3NlcyBhbmQgZnVuY3Rpb25zLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQG5hbWVzcGFjZSBDb250YWluZXIgZm9yIGdvYmFsIGRhdGEgcmVsYXRlZCB0byB0aGUgY2xhc3NlcyBhbmQgZnVuY3Rpb25zLlxyXG4gKi9cclxuYXRyb3BhLmRhdGEgPSB7fTtcclxuXHJcbmF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cyA9IFtdO1xyXG5cclxuYXRyb3BhLm5vcCA9IGZ1bmN0aW9uIG5vcCAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IGF0cm9wYTtcclxuXHJcbiIsIi8qKlxyXG4gKiBDb250YWluZXIgZm9yIGFsbCBHbG9yaW91cyBjbGFzc2VzLCBmdW5jdGlvbnMsIGV0Yy5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEBuYW1lc3BhY2UgQ29udGFpbmVyIGZvciBhbGwgR2xvcmlvdXMgY2xhc3NlcywgZnVuY3Rpb25zLCBldGMuXHJcbiAqL1xyXG52YXIgYXRyb3BhID0gcmVxdWlyZSgnYXRyb3BhLWhlYWRlcicpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vZG9jcy92c2RvYy9PcGVuTGF5ZXJzQWxsLmpzXCIvPlxyXG4vKmpzbGludFxyXG4gICAgaW5kZW50OiA0LFxyXG4gICAgbWF4ZXJyOiA1MCxcclxuICAgIHdoaXRlOiB0cnVlLFxyXG4gICAgYnJvd3NlcjogdHJ1ZSxcclxuICAgIGRldmVsOiB0cnVlLFxyXG4gICAgcGx1c3BsdXM6IHRydWUsXHJcbiAgICByZWdleHA6IHRydWVcclxuKi9cclxuLypnbG9iYWwgYXRyb3BhICovXHJcbi8vIGVuZCBoZWFkZXJcclxuXHJcbi8qKlxyXG4gKiBDb250YWluZXIgZm9yIGZ1bmN0aW9ucyB0aGF0IHRlc3QgdGhlIHN0YXRlIG9mIGlucHV0cy5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTIwOTA5XHJcbiAqIEBuYW1lc3BhY2UgQ29udGFpbmVyIGZvciBmdW5jdGlvbnMgdGhhdCB0ZXN0IHRoZSBzdGF0ZSBvZiBpbnB1dHMuXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uLy4uL0F0cm9wYVRvb2xib3hUZXN0cy5odG1sP3NwZWM9YXRyb3BhLmlucXVpcmVcIj50ZXN0czwvYT5cclxuICovXHJcbmF0cm9wYS5pbnF1aXJlID0ge307XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgaW5wdXQgaXMgbnVsbC5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTIwOTA5XHJcbiAqIEBwYXJhbSB7TWl4ZWR9IHggQW55IGlucHV0IHRoYXQgbWF5IG9yIG1heSBub3QgYmUgbnVsbC5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB4ID09PSBudWxsLlxyXG4gKi9cclxuYXRyb3BhLmlucXVpcmUuaXNOdWxsID0gZnVuY3Rpb24gKHgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgcmV0dXJuICh4ID09PSBudWxsKTtcclxufTtcclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBpbnB1dCBpcyBhbiBvYmplY3QuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEyMDkwOVxyXG4gKiBAcGFyYW0ge01peGVkfSB4IEFueSBpbnB1dCB0aGF0IG1heSBvciBtYXkgbm90IGJlIGFuIG9iamVjdC5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YoeCkgPT09ICdvYmplY3QnLlxyXG4gKi9cclxuYXRyb3BhLmlucXVpcmUuaXNPYmplY3QgPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gKHR5cGVvZiB4ID09PSAnb2JqZWN0Jyk7XHJcbn07XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgaW5wdXQgaXMgYm90aCBhbiBvYmplY3QgYW5kIG5vdCBudWxsLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMjA5MDlcclxuICogQHBhcmFtIHtNaXhlZH0geCBBbnkgaW5wdXQgdGhhdCBtYXkgb3IgbWF5IG5vdCBiZSBib3RoIGFuXHJcbiAqIG9iamVjdCBhbmQgbnVsbC5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiB4IGlzIGJvdGggYW4gb2JqZWN0IGFuZFxyXG4gKiBub3QgbnVsbC4gKG51bGwgaXMgYW4gb2JqZWN0KS5cclxuICovXHJcbmF0cm9wYS5pbnF1aXJlLmlzT2JqZWN0Tm90TnVsbCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBhdHJvcGEuaW5xdWlyZS5pc09iamVjdCh4KSAmJiAoIWF0cm9wYS5pbnF1aXJlLmlzTnVsbCh4KSk7XHJcbn07XHJcbi8qKlxyXG4gKiBDaGVja3MgYW4gb2JqZWN0IGZvciB0aGUgZXhpc3RlbmNlIG9mIGEgcHJvcGVydHlcclxuICogcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZSBwcm9wZXJ0eSB3YXMgaW5oZXJpdGVkXHJcbiAqIG9yIG5vdC5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTIwOTA5XHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogQW4gb2JqZWN0IHdoaWNoIG1heSBvciBtYXkgbm90XHJcbiAqIGhhdmUgdGhlIHByb3BlcnR5IGlkZW50aWZpZWQgYnkgcHJvcC5cclxuICogQHBhcmFtIHtTdHJpbmd9IHByb3AgQSBzdHJpbmcgdmFsdWUgcmVwcmVzZW50aW5nIHRoZVxyXG4gKiBuYW1lIG9mIHRoZSBwcm9wZXJ0eS5cclxuICogQHJldHVybnMge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBvYmoucHJvcCBleGlzdHMsXHJcbiAqIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxyXG4gKi9cclxuYXRyb3BhLmlucXVpcmUuaGFzUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBwcm9wKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGlmIChhdHJvcGEuaW5xdWlyZS5pc09iamVjdE5vdE51bGwob2JqKSkge1xyXG4gICAgICAgIHJldHVybiAocHJvcCBpbiBvYmopO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGFuIGVtcHR5IHN0cmluZy5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTMwMTE4XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB5b3Ugd2FudCB0byBrbm93IGFib3V0XHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBSZXR1cm5zIHRydWUgaWYgc3RyIGlzIGFuIGVtcHR5IHN0cmluZyxcclxuICogIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxyXG4gKi9cclxuYXRyb3BhLmlucXVpcmUuaXNFbXB0eVN0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIG91dCA9IGZhbHNlO1xyXG4gICAgaWYgKCcnID09PSBzdHIpIHtcclxuICAgICAgICBvdXQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbndoaWxlKGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICBhdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMucG9wKCkoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGF0cm9wYTtcclxuIiwiLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQG5hbWVzcGFjZSBDb250YWluZXIgZm9yIGFsbCBHbG9yaW91cyBjbGFzc2VzLCBmdW5jdGlvbnMsIGV0Yy5cclxuICovXHJcbnZhciBhdHJvcGEgPSByZXF1aXJlKCdhdHJvcGEtaGVhZGVyJyk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9kb2NzL3ZzZG9jL09wZW5MYXllcnNBbGwuanNcIi8+XHJcbi8qanNsaW50XHJcbiAgICBpbmRlbnQ6IDQsXHJcbiAgICBtYXhlcnI6IDUwLFxyXG4gICAgd2hpdGU6IHRydWUsXHJcbiAgICBicm93c2VyOiB0cnVlLFxyXG4gICAgZGV2ZWw6IHRydWUsXHJcbiAgICBwbHVzcGx1czogdHJ1ZSxcclxuICAgIHJlZ2V4cDogdHJ1ZVxyXG4qL1xyXG4vKmdsb2JhbCBhdHJvcGEgKi9cclxuLy8gZW5kIGhlYWRlclxyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgcmVnZXggZnVuY3Rpb25zLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMjA5MDlcclxuICogQG5hbWVzcGFjZSBDb250YWluZXIgZm9yIHJlZ2V4IGZ1bmN0aW9ucy5cclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vLi4vQXRyb3BhVG9vbGJveFRlc3RzLmh0bWw/c3BlYz1hdHJvcGEucmVnZXhcIj50ZXN0czwvYT5cclxuICovXHJcbmF0cm9wYS5yZWdleCA9IHt9O1xyXG4vKipcclxuICogUmVnZXggcGF0dGVybnMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAbmFtZXNwYWNlIFJlZ2V4IHBhdHRlcm5zLlxyXG4gKi9cclxuYXRyb3BhLnJlZ2V4LnBhdHRlcm5zID0ge1xyXG4gICAgLyoqIGZpbmRzIHJlcGVhdGVkIHdvcmRzIGFuZCBwaHJhc2VzICovXHJcbiAgICByZXBlYXRlZFdvcmRzIDogLyhcXGIuezMsfVxcYilcXHMqKFxcMSkvZyxcclxuICAgIC8qKiBmaW5kcyBwYXJhZ3JhcGggYnJlYWtzICovXHJcbiAgICBwYXJhZ3JhcGhCcmVha3MgOiAvKFxcclxcblxcclxcbnxcXG5cXG58XFxyXFxyKS9nLFxyXG4gICAgLyoqIGZpbmRzIGxpbmUgYnJlYWtzICovXHJcbiAgICBsaW5lQnJlYWtzIDogLyhcXHJcXG58XFxyfFxcbikvZ1xyXG59O1xyXG4vKipcclxuICogQXBwZW5kcyBjb21tb24gcHJlZml4LCBzdWZmaXgsIGFuZCB3b3JkIGJvdW5kYXJ5IHJlZ2V4IHN0cmluZ3MgdG9cclxuICogdGhlIHN1cHBsaWVkIHdvcmQuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDExMFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gd29yZCBUaGUgd29yZCB0byBhcHBlbmQgcHJlZml4IGFuZCBzdWZmaXggdG9cclxuICogQHBhcmFtIHtJbnRlZ2VyfSB0aHJlc2hvbGQgVGhlIHdvcmQubGVuZ3RoIGF0IHdoaWNoIGl0IGRvZXMgbm90XHJcbiAqIG1ha2Ugc2Vuc2UgdG8gYXBwZW5kIHByZWZpeCBhbmQgc3VmZml4LiBEZWZhdWx0cyB0byAzLlxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBSZXR1cm5zIHRoZSBzdXBwbGllZCB3b3JkIHdpdGggcHJlZml4LCBzdWZmaXgsXHJcbiAqIGFuZCB3b3JkIGJvdW5kYXJpZXMgYXR0YWNoZWQuIElmIHRoZSB3b3JkLmxlbmd0aCB3YXMgbm90IGdyZWF0ZXJcclxuICogdGhhbiB0aGUgdGhyZXNob2xkLCBvbmx5IHdvcmQgYm91bmRhcmllcyBhcmUgYXR0YWNoZWQuIFRoZSBzdHJpbmdcclxuICogcmVwcmVzZW50cyBhIFJlZ0V4IHdoaWNoIHNob3VsZCBwaWNrIG91dCBtb3N0IGZvcm1zIG9mIHJlZ3VsYXJcclxuICogd29yZHMuXHJcbiAqL1xyXG5hdHJvcGEucmVnZXguYXBwZW5kUHJlZml4ZXNBbmRTdWZmaXhlcyA9IGZ1bmN0aW9uICh3b3JkLCB0aHJlc2hvbGQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIHByZWZpeGVzLFxyXG4gICAgc3VmZml4ZXM7XHJcbiAgICBwcmVmaXhlcyA9ICcocHJlfHVufHJlKT8nO1xyXG4gICAgc3VmZml4ZXMgPSAnKGlmaWNhdGlvbnwnICtcclxuICAgICAgICAgICAgICAgICd0aW9uYWxseXwnICtcclxuICAgICAgICAgICAgICAgICdpY2F0aW9ufCcgK1xyXG4gICAgICAgICAgICAgICAgJ2lmaWVkfGlzdGljfGluZXNzfCcgK1xyXG4gICAgICAgICAgICAgICAgJ2ZhcmV8dGlvbnxhbmNlfGVuY2V8bGVzc3xhbGx5fGFibGV8bmVzc3xpemVkfGlzZWR8JyArXHJcbiAgICAgICAgICAgICAgICAnb3VzfGlmeXxpbmd8aXR5fGZ1bHxhbnR8YXRlfGVzdHxpc218aXptfGlzdHwnICtcclxuICAgICAgICAgICAgICAgICdpY3xhbHxlZHxlcnxldHxseXxyc3xpbnwnICtcclxuICAgICAgICAgICAgICAgICd5fHN8cnxkKT8nO1xyXG4gICAgXHJcbiAgICB0aHJlc2hvbGQgPSB0aHJlc2hvbGQgPT09IHVuZGVmaW5lZCA/IDMgOiB0aHJlc2hvbGQ7XHJcbiAgICBcclxuICAgIGlmICh3b3JkLmxlbmd0aCA+IHRocmVzaG9sZCkge1xyXG4gICAgICAgIHdvcmQgPSAnXFxcXGInICsgcHJlZml4ZXMgKyB3b3JkICsgc3VmZml4ZXMgKyAnXFxcXGInO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3b3JkID0gJ1xcXFxiKCknICsgd29yZCArICcoKVxcXFxiJztcclxuICAgIH1cclxuICAgIHJldHVybiB3b3JkO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxud2hpbGUoYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgIGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5wb3AoKSgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gYXRyb3BhO1xyXG4iLCIvKipcclxuICogQ29udGFpbmVyIGZvciBhbGwgR2xvcmlvdXMgY2xhc3NlcywgZnVuY3Rpb25zLCBldGMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAbmFtZXNwYWNlIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKi9cclxudmFyIGF0cm9wYSA9IHJlcXVpcmUoJ2F0cm9wYS1oZWFkZXInKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2RvY3MvdnNkb2MvT3BlbkxheWVyc0FsbC5qc1wiLz5cclxuLypqc2xpbnRcclxuICAgIGluZGVudDogNCxcclxuICAgIG1heGVycjogNTAsXHJcbiAgICB3aGl0ZTogdHJ1ZSxcclxuICAgIGJyb3dzZXI6IHRydWUsXHJcbiAgICBkZXZlbDogdHJ1ZSxcclxuICAgIHBsdXNwbHVzOiB0cnVlLFxyXG4gICAgcmVnZXhwOiB0cnVlXHJcbiovXHJcbi8qZ2xvYmFsIGF0cm9wYSAqL1xyXG4vLyBlbmQgaGVhZGVyXHJcblxyXG4vKipcclxuICogU2V0IGRlZmF1bHQgdmFsdWVzIGZvciBvcHRpb25hbCBmdW5jdGlvbiBwYXJhbWV0ZXJzLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiA8cHJlPlxyXG4gKiAgIC8vIFRvIHNldCBhIGRlZmF1bHQgdmFsdWUgZm9yIGFuIG9wdGlvbmFsIHBhcmFtZXRlclxyXG4gKiAgIGZ1bmN0aW9uKG9wdGlvbmFsQXJnKSB7XHJcbiAqICAgICAgIHZhciBkZWZhdWx0VmFsID0gJ2hlbGxvIHRoZXJlISc7XHJcbiAqICAgICAgIG9wdGlvbmFsQXJnID0gYXRyb3BhLnNldEFzT3B0aW9uYWxBcmcoZGVmYXVsdFZhbCwgb3B0aW9uYWxBcmcpO1xyXG4gKiAgICAgICByZXR1cm4gb3B0aW9uYWxBcmc7XHJcbiAqICAgfVxyXG4gKiA8L3ByZT5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTIwOTA5XHJcbiAqIEBwYXJhbSB7TWl4ZWR9IGRlZmF1bHRWYWwgVGhlIGRlZmF1bHQgdmFsdWUgdG8gc2V0LlxyXG4gKiBAcGFyYW0ge01peGVkfSBvcHRpb25hbEFyZyBBIHJlZmVyZW5jZSB0byB0aGUgb3B0aW9uYWwgYXJndW1lbnQuXHJcbiAqIEByZXR1cm5zIHtNaXhlZH0gUmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZSBzdXBwbGllZCB3aGVuIHRoZSBvcHRpb25hbFxyXG4gKiBhcmd1bWVudCBpcyB1bmRlZmluZWQgb3IgbnVsbC4gT3RoZXJ3aXNlLCB0aGUgc3VwcGxpZWQgb3B0aW9uYWwgYXJndW1lbnRcclxuICogaXMgcmV0dXJuZWQuXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uLy4uL0F0cm9wYVRvb2xib3hUZXN0cy5odG1sP3NwZWM9YXRyb3BhLnNldEFzT3B0aW9uYWxBcmdcIj50ZXN0czwvYT5cclxuICovXHJcbmF0cm9wYS5zZXRBc09wdGlvbmFsQXJnID0gZnVuY3Rpb24gKGRlZmF1bHRWYWwsIG9wdGlvbmFsQXJnKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGlmIChvcHRpb25hbEFyZyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbmFsQXJnID09PSBudWxsKSB7XHJcbiAgICAgICAgb3B0aW9uYWxBcmcgPSBkZWZhdWx0VmFsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9wdGlvbmFsQXJnO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxud2hpbGUoYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgIGF0cm9wYS5kYXRhLnJlcXVpcmVtZW50cy5wb3AoKSgpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gYXRyb3BhO1xyXG4iLCIvKipcclxuICogQ29udGFpbmVyIGZvciBhbGwgR2xvcmlvdXMgY2xhc3NlcywgZnVuY3Rpb25zLCBldGMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAbmFtZXNwYWNlIENvbnRhaW5lciBmb3IgYWxsIEdsb3Jpb3VzIGNsYXNzZXMsIGZ1bmN0aW9ucywgZXRjLlxyXG4gKi9cclxudmFyIGF0cm9wYSA9IHJlcXVpcmUoJ2F0cm9wYS1oZWFkZXInKTtcclxuLyoqXHJcbiAqIFJlcXVpcmVkIG1vZHVsZSwgdGhlIGRvY3MgZm9yIGl0IGFyZSBpbiB0aGUgPGNvZGU+XHJcbiAqICBhdHJvcGEtcmVnZXgvZG9jczwvY29kZT4gZGlyZWN0b3J5IHdoZXJlIHRoaXMgbW9kdWxlIFxyXG4gKiAgaXMgbG9jYXRlZC5cclxuICogQHNlZSA8YSBocmVmPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F0cm9wYS1yZWdleC9kb2NzL2pzZG9jL2luZGV4Lmh0bWxcIj5cclxuICogLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F0cm9wYS1yZWdleC9kb2NzL2pzZG9jL2luZGV4Lmh0bWw8L2E+LFxyXG4gKiAgdW5sZXNzIHlvdSBpbnN0YWxsZWQgdGhpcyBkZXBlbmRlbmN5IG1hbnVhbGx5LlxyXG4gKi9cclxuYXRyb3BhLnJlZ2V4ID0gcmVxdWlyZSgnYXRyb3BhLXJlZ2V4JykucmVnZXg7XHJcbi8qKlxyXG4gKiBSZXF1aXJlZCBtb2R1bGUsIHRoZSBkb2NzIGZvciBpdCBhcmUgaW4gdGhlIDxjb2RlPlxyXG4gKiAgYXRyb3BhLWFycmF5cy9kb2NzPC9jb2RlPiBkaXJlY3Rvcnkgd2hlcmUgdGhpcyBtb2R1bGUgXHJcbiAqICBpcyBsb2NhdGVkLlxyXG4gKiBAc2VlIDxhIGhyZWY9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYXRyb3BhLWFycmF5cy9kb2NzL2pzZG9jL2luZGV4Lmh0bWxcIj5cclxuICogLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F0cm9wYS1hcnJheXMvZG9jcy9qc2RvYy9pbmRleC5odG1sPC9hPixcclxuICogIHVubGVzcyB5b3UgaW5zdGFsbGVkIHRoaXMgZGVwZW5kZW5jeSBtYW51YWxseS5cclxuICovXHJcbmF0cm9wYS5hcnJheXMgPSByZXF1aXJlKCdhdHJvcGEtYXJyYXlzJykuYXJyYXlzO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vZG9jcy92c2RvYy9PcGVuTGF5ZXJzQWxsLmpzXCIvPlxyXG4vKmpzbGludFxyXG4gICAgaW5kZW50OiA0LFxyXG4gICAgbWF4ZXJyOiA1MCxcclxuICAgIHdoaXRlOiB0cnVlLFxyXG4gICAgYnJvd3NlcjogdHJ1ZSxcclxuICAgIGRldmVsOiB0cnVlLFxyXG4gICAgcGx1c3BsdXM6IHRydWUsXHJcbiAgICByZWdleHA6IHRydWVcclxuKi9cclxuLypnbG9iYWwgYXRyb3BhICovXHJcbi8vIGVuZCBoZWFkZXJcclxuXHJcbi8qKlxyXG4gKiBBIGZldyB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBzdHJpbmdzLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQG5hbWVzcGFjZSBBIGZldyB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBzdHJpbmdzLlxyXG4gKiBAcmVxdWlyZXMgYXRyb3BhLnJlZ2V4LnBhdHRlcm5zXHJcbiAqIEBzZWUgPGEgaHJlZj1cIi4uLy4uLy4uL0F0cm9wYVRvb2xib3hUZXN0cy5odG1sP3NwZWM9YXRyb3BhLnN0cmluZ1wiPnRlc3RzPC9hPlxyXG4gKi9cclxuYXRyb3BhLnN0cmluZyA9IHt9O1xyXG4vKipcclxuICogUmVwbGFjZXMgcmVwZWF0ZWQgd29yZHMgYW5kIHBocmFzZXMgd2l0aCBhIHNpbmdsZSB3b3JkIG9yIHBocmFzZS5cclxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOm1hdHRoZXdrYXN0b3JAZ21haWwuY29tXCI+XHJcbiAqICBNYXR0aGV3IENocmlzdG9waGVyIEthc3Rvci1JbmFyZSBJSUkgPC9hPjxiciAvPlxyXG4gKiAg4pitIEhpYWwgQXRyb3BhISEg4pitXHJcbiAqIEB2ZXJzaW9uIDIwMTMwNzAxXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byByZW1vdmUgcmVwZWF0ZWQgd29yZHMgZnJvbS5cclxuICogQHJldHVybnMge1N0cmluZ30gUmV0dXJucyB0aGUgZ2l2ZW4gc3RyaW5nIHdpdGggcmVwZWF0ZWQgd29yZHMgYW5kXHJcbiAqICBwaHJhc2VzIHJlbW92ZWQuXHJcbiAqL1xyXG5hdHJvcGEuc3RyaW5nLnJlbW92ZVJlcGVhdGVkV29yZCA9IGZ1bmN0aW9uIHJlbW92ZVJlcGVhdGVkV29yZCAoc3RyaW5nKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShhdHJvcGEucmVnZXgucGF0dGVybnMucmVwZWF0ZWRXb3JkcywgJyQxJyk7XHJcbn07XHJcbi8qKlxyXG4gKiBDcmVhdGVzIHBhcmFncmFwaCBicmVha3MgYXQgZXZlcnkgb2NjdXJyZW5jZSBvZiB0d28gY29uc2VjdXRpdmUgbGluZSBicmVha3MuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDcwMVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zZXJ0IHBhcmFncmFwaCB0YWdzIGludG8uXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFJldHVybnMgdGhlIGdpdmVuIHN0cmluZyB3aXRoIHBhcmFncmFwaCBicmVha3MgaW5zZXJ0ZWQuXHJcbiAqL1xyXG5hdHJvcGEuc3RyaW5nLmxpbmVCcmVha3NUb1BhcmFncmFwaFRhZ3MgPSBmdW5jdGlvbiBsaW5lQnJlYWtzVG9QYXJhZ3JhcGhUYWdzIChzdHJpbmcpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIG91dCA9IHN0cmluZy5yZXBsYWNlKGF0cm9wYS5yZWdleC5wYXR0ZXJucy5wYXJhZ3JhcGhCcmVha3MsICc8L3A+PHA+Jyk7XHJcbiAgICBvdXQgPSAnPHA+JyArIG91dC50cmltKCkgKyAnPC9wPic7XHJcbiAgICBvdXQgPSBvdXQucmVwbGFjZSgvXFxzKzxcXC8ocHxicik+L2csICc8LyQxPicpO1xyXG4gICAgcmV0dXJuIG91dDtcclxufTtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYnJlYWsgdGFncyBhdCBldmVyeSBsaW5lIGJyZWFrLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMzA3MDFcclxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc2VydCBicmVhayB0YWdzIGludG8uXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFJldHVybnMgdGhlIGdpdmVuIHN0cmluZyB3aXRoIGJyZWFrIHRhZ3MgaW5zZXJ0ZWQuXHJcbiAqL1xyXG5hdHJvcGEuc3RyaW5nLmxpbmVCcmVha3NUb0JyZWFrVGFncyA9IGZ1bmN0aW9uIGxpbmVCcmVha3NUb0JyZWFrVGFncyAoc3RyaW5nKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShhdHJvcGEucmVnZXgucGF0dGVybnMubGluZUJyZWFrcywgJzxicj4nKTtcclxufTtcclxuLyoqXHJcbiAqIE5vcm1hbGl6ZXMgbGluZSBicmVha3MgdG8gYFxcbmAuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDcwMVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gbm9ybWFsaXplLlxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBSZXR1cm5zIHRoZSBnaXZlbiBzdHJpbmcgd2l0aCBub3JtYWxpemVkIGxpbmUgYnJlYWtzLlxyXG4gKi9cclxuYXRyb3BhLnN0cmluZy5ub3JtYWxpemVFb2wgPSBmdW5jdGlvbiBub3JtYWxpemVFb2wgKHN0cmluZykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYXRyb3BhLnJlZ2V4LnBhdHRlcm5zLmxpbmVCcmVha3MsICdcXG4nKTtcclxufTtcclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBnaXZlbiBzdHJpbmcgdG9cclxuICogdXBwZXJjYXNlLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMjA5MDlcclxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIGZvciB3aGljaCB5b3Ugd2FudCB0aGVcclxuICogZmlyc3QgbGV0dGVyIHRvIGJlIGluIHVwcGVyIGNhc2UuXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBnaXZlbiBzdHJpbmcgd2l0aCBpdCdzIGZpcnN0IGxldHRlciBjYXBpdGFsaXplZC5cclxuICovXHJcbmF0cm9wYS5zdHJpbmcudWNGaXJzdCA9IGZ1bmN0aW9uIHVjRmlyc3Qoc3RyaW5nKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHN0cmluZyA9IHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxuICAgIHJldHVybiBzdHJpbmc7XHJcbn07XHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3RyaW5nIHRvIGNhbWVsIGNhc2UuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDgyM1xyXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY2FtZWxpemUuXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBjYW1lbGl6ZWQgc3RyaW5nLlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgYXRyb3BhLnN0cmluZy5jYW1lbGl6ZSgnZ2V0IGl0IHRvZ2V0aGVyJyk7XHJcbiAqICAvLyByZXR1cm5zIFwiZ2V0SXRUb2dldGhlclwiXHJcbiAqL1xyXG5hdHJvcGEuc3RyaW5nLmNhbWVsaXplID0gZnVuY3Rpb24gY2FtZWxpemUgKHN0cikge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB2YXIgYXJyLCBvdXQ7XHJcbiAgICBhcnIgPSBzdHIuc3BsaXQoJyAnKTtcclxuICAgIG91dCA9IGFyci5zaGlmdCgpO1xyXG4gICAgYXJyID0gYXJyLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBhdHJvcGEuc3RyaW5nLnVjRmlyc3QoaXRlbSk7XHJcbiAgICB9KTtcclxuICAgIG91dCArPSBhcnIuam9pbignJyk7XHJcbiAgICByZXR1cm4gb3V0O1xyXG59O1xyXG4vKipcclxuICogQ291bnRzIHdvcmRzLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMzAzMTNcclxuICogQHBhcmFtIHtTdHJpbmd9IHNvbWVUZXh0IFBsYWluIHRleHQuXHJcbiAqIEByZXR1cm4ge051bWJlcn0gUmV0dXJucyB0aGUgY291bnQgb2Ygd29yZHMgaW4gc29tZVRleHQuXHJcbiAqL1xyXG5hdHJvcGEuc3RyaW5nLmNvdW50V29yZHMgPSBmdW5jdGlvbiBjb3VudFdvcmRzKHNvbWVUZXh0KSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciB3b3JkQ291bnQsIHJlLCBsZW4gPSAwO1xyXG4gICAgaWYoc29tZVRleHQgIT09IHVuZGVmaW5lZCAmJiBzb21lVGV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHNvbWVUZXh0ID0gc29tZVRleHQudHJpbSgpO1xyXG4gICAgICAgIGlmKHNvbWVUZXh0ICE9PSAnJykge1xyXG4gICAgICAgICAgICB3b3JkQ291bnQgPSAwO1xyXG4gICAgICAgICAgICByZSA9IC9cXHMrL2dpO1xyXG4gICAgICAgICAgICB3b3JkQ291bnQgPSBzb21lVGV4dC5zcGxpdChyZSk7XHJcbiAgICAgICAgICAgIGxlbiA9IHdvcmRDb3VudC5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlbjtcclxufTtcclxuLyoqXHJcbiAqIENvbnZlcnRzIGVuZCBvZiBsaW5lIG1hcmtlcnMgaW50byB3aGF0ZXZlciB5b3Ugd2FudC4gXHJcbiAqIEF1dG9tYXRpY2FsbHkgZGV0ZWN0cyBhbnkgb2YgXFxyXFxuLCBcXG4sIG9yIFxcciBhbmQgXHJcbiAqIHJlcGxhY2VzIGl0IHdpdGggdGhlIHVzZXIgc3BlY2lmaWVkIEVPTCBtYXJrZXIuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBUaGUgdGV4dCB5b3Ugd2FudCBwcm9jZXNzZWQuXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuZXdFT0wgVGhlIHJlcGxhY2VtZW50IGZvciB0aGUgY3VycmVudCBFT0wgbWFya3MuXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFJldHVybnMgdGhlIHByb2Nlc3NlZCB0ZXh0LlxyXG4gKi9cclxuYXRyb3BhLnN0cmluZy5jb252ZXJ0RW9sID0gZnVuY3Rpb24gY29udmVydEVPTCh0ZXh0LCBuZXdFT0wpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoYXRyb3BhLnJlZ2V4LnBhdHRlcm5zLmxpbmVCcmVha3MsIG5ld0VPTCk7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhIHF1YW50aXR5IG9mIGxlYWRpbmcgc3BhY2VzIHNwZWNpZmllZCBieSBvZmZzZXQuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBUaGUgdGV4dCB0byBwcm9jZXNzLlxyXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IFRoZSBhbW91bnQgb2Ygc3BhY2VzIHlvdSB3YW50IHJlbW92ZWQgXHJcbiAqIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgdGV4dC5cclxuICogQHJldHVybnMgUmV0dXJucyB0aGUgcHJvY2Vzc2VkIHRleHQuXHJcbiAqL1xyXG5hdHJvcGEuc3RyaW5nLm9mZnNldFdoaXRlU3BhY2UgPSBmdW5jdGlvbiBvZmZzZXRXaGl0ZVNwYWNlKHRleHQsIG9mZnNldCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdmFyIHJlZ3g7XHJcbiAgICByZWd4ID0gbmV3IFJlZ0V4cCgnXiB7JyArIG9mZnNldCArICd9Jyk7XHJcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHJlZ3gsICcnKTtcclxuICAgIHJldHVybiB0ZXh0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFsbCB0YWJzIGluIGxlYWRpbmcgd2hpdGVzcGFjZSBpbnRvIGZvdXIgc3BhY2VzLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHBhcmFtIHtTdHJpbmd9IHRleHQgVGhlIHRleHQgdG8gcHJvY2Vzc1xyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBSZXR1cm5zIHRoZSBwcm9jZXNzZWQgdGV4dC5cclxuICovXHJcbmF0cm9wYS5zdHJpbmcubm9ybWFsaXplV2hpdGVTcGFjZVByZWZpeCA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVdoaXRlU3BhY2VQcmVmaXgoXHJcbiAgICB0ZXh0XHJcbikge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdmFyIHByZWZpeCA9IHRleHQubWF0Y2goL15cXHMqLyk7XHJcbiAgICBpZihwcmVmaXgpIHtcclxuICAgICAgICBwcmVmaXggPSBwcmVmaXhbMF07XHJcbiAgICAgICAgcHJlZml4ID0gcHJlZml4LnJlcGxhY2UoL1xcdC9nLCAnICAgICcpO1xyXG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL15cXHMqLywgcHJlZml4KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFsbCB0YWJzIGludG8gZm91ciBzcGFjZXMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBUaGUgdGV4dCB0byBwcm9jZXNzXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IFJldHVybnMgdGhlIHByb2Nlc3NlZCB0ZXh0LlxyXG4gKi9cclxuYXRyb3BhLnN0cmluZy5ub3JtYWxpemVXaGl0ZVNwYWNlID0gZnVuY3Rpb24gbm9ybWFsaXplV2hpdGVTcGFjZSh0ZXh0KSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHQvZywgJyAgICAnKTtcclxuICAgIHJldHVybiB0ZXh0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvdW50cyB0aGUgbnVtYmVyIG9mIGxlYWRpbmcgc3BhY2Ugb3IgdGFiIGNoYXJhY3RlcnMgYnV0IG5vdCBib3RoLlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHBhcmFtIHtTdHJpbmd9IHRleHQgVGhlIHRleHQgdG8gYW5hbHl6ZS5cclxuICogQHJldHVybnMge051bWJlcn0gUmV0dXJucyB0aGUgcXVhbnRpdHkgb2YgbGVhZGluZyBzcGFjZXMgb3IgdGFicy5cclxuICovXHJcbmF0cm9wYS5zdHJpbmcuZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gZ2V0T2Zmc2V0KHRleHQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIHZhciBvZmZzZXQgPSAwLFxyXG4gICAgICAgIGxlYWRpbmdDaGFyID0gdGV4dC5jaGFyQXQoMCk7XHJcbiAgICAgICAgXHJcbiAgICBpZiggbGVhZGluZ0NoYXIgPT09ICcgJyB8fCBsZWFkaW5nQ2hhciA9PT0gJ1xcdCcpIHtcclxuICAgICAgICB3aGlsZSh0ZXh0LmNoYXJBdChvZmZzZXQpID09PSBsZWFkaW5nQ2hhciAmJiBvZmZzZXQgPCB0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBvZmZzZXQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2Zmc2V0O1xyXG59O1xyXG4vKipcclxuICogQnJlYWtzIGEgc3RyaW5nIGludG8gYW4gYXJyYXkgb2Ygd29yZHMuXHJcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzptYXR0aGV3a2FzdG9yQGdtYWlsLmNvbVwiPlxyXG4gKiAgTWF0dGhldyBDaHJpc3RvcGhlciBLYXN0b3ItSW5hcmUgSUlJIDwvYT48YnIgLz5cclxuICogIOKYrSBIaWFsIEF0cm9wYSEhIOKYrVxyXG4gKiBAdmVyc2lvbiAyMDEzMDExOFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBUaGUgdGV4dCB0byBhbmFseXplLlxyXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHdvcmRzIGluXHJcbiAqICB0aGUgZ2l2ZW4gdGV4dC5cclxuICogQHJlcXVpcmVzIGF0cm9wYS5hcnJheXMucmVtb3ZlRW1wdHlFbGVtZW50c1xyXG4gKi9cclxuYXRyb3BhLnN0cmluZy5nZXRXb3JkcyA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHZhciBvdXQgPSBbXTtcclxuICAgIGZ1bmN0aW9uIGludmFsaWRDaGFycyhlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZWQgPSAvXltcXC0n4oCZYF0rJC8udGVzdChlbGVtZW50KTtcclxuICAgICAgICAvLyBpbnZlcnQgdGhlIHJlc3VsdCBvZiB0ZXN0LiB0aHJvdyBvdXQgZWxlbWVudHMgdGhhdCBtYXRjaC5cclxuICAgICAgICByZXR1cm4gIW1hdGNoZWQ7XHJcbiAgICB9XHJcbiAgICBvdXQgPSBhdHJvcGEuYXJyYXlzLnJlbW92ZUVtcHR5RWxlbWVudHMoXHJcbiAgICAgICAgdGV4dC5zcGxpdCgvW15BLVphLXpcXC0n4oCZYF0rL2dpKVxyXG4gICAgKTtcclxuICAgIG91dCA9IG91dC5maWx0ZXIoaW52YWxpZENoYXJzKTtcclxuICAgIHJldHVybiBvdXQ7XHJcbn07XHJcbi8qKlxyXG4gKiBFc2NhcGVzIDxjb2RlPkNEQVRBPC9jb2RlPiBzZWN0aW9ucyBpbiB0ZXh0XHJcbiAqICBzbyB0aGF0IHRoZSB0ZXh0IG1heSBiZSBlbWJlZGRlZCBpbnRvIGEgXHJcbiAqICA8Y29kZT5DREFUQTwvY29kZT4gc2VjdGlvbi4gVGhpcyBzaG91bGQgYmUgcnVuXHJcbiAqICBvbiBhbnkgdGV4dCB3aGljaCBtYXkgY29udGFpbiB0aGUgc3RyaW5nIFxyXG4gKiAgPGNvZGU+XV0+PC9jb2RlPiBzaW5jZSBzYWlkIHN0cmluZyB3aWxsIGVmZmVjdGl2ZWx5XHJcbiAqICBlbmQgdGhlIDxjb2RlPkNEQVRBPC9jb2RlPiBzZWN0aW9uIHByZW1hdHVyZWx5LlxyXG4gKiBAYXV0aG9yIDxhIGhyZWY9XCJtYWlsdG86bWF0dGhld2thc3RvckBnbWFpbC5jb21cIj5cclxuICogIE1hdHRoZXcgQ2hyaXN0b3BoZXIgS2FzdG9yLUluYXJlIElJSSA8L2E+PGJyIC8+XHJcbiAqICDimK0gSGlhbCBBdHJvcGEhISDimK1cclxuICogQHZlcnNpb24gMjAxMzAxMThcclxuICogQHBhcmFtIHtTdHJpbmd9IHRleHQgVGhlIHRleHQgY29udGFpbmluZyBcclxuICogIDxjb2RlPkNEQVRBPC9jb2RlPiBzZWN0aW9ucyB0byBlc2NhcGUuXHJcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBhIHN0cmluZyB3aXRoIGVzY2FwZWRcclxuICogIDxjb2RlPkNEQVRBPC9jb2RlPiBzZWN0aW9ucy5cclxuICogQHNlZSA8YSBocmVmPVwiaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DREFUQSNOZXN0aW5nXCI+XHJcbiAqICBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NEQVRBI05lc3Rpbmc8L2E+XHJcbiAqIEBzZWUgPGEgaHJlZj1cImh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTk4MTY4XCI+XHJcbiAqICBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD05ODE2ODwvYT5cclxuICovXHJcbmF0cm9wYS5zdHJpbmcuZXNjYXBlQ2RhdGEgPSBmdW5jdGlvbiBlc2NhcGVDZGF0YSh0ZXh0KSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIHJldHVybiBTdHJpbmcodGV4dCkucmVwbGFjZSgvXFxdXFxdPi9nLCAnXV1dXT48IVtDREFUQVs+Jyk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG53aGlsZShhdHJvcGEuZGF0YS5yZXF1aXJlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgYXRyb3BhLmRhdGEucmVxdWlyZW1lbnRzLnBvcCgpKCk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBhdHJvcGE7XHJcbiJdfQ==
;