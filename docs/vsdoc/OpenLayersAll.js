
  
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);

  

  
/* vsdoc for atropa */

(function (window) {
    

    window.atropa = {
        /// <summary></summary>
        /// <field name="data" type="">Container for gobal data related to the classes and functions.</field>
        /// <field name="regex" type="">Required module, the docs for it are in the &lt;code&gt;
        ///  atropa-regex/docs&lt;/code&gt; directory where this module 
        ///  is located.</field>
        /// <field name="arrays" type="">Required module, the docs for it are in the &lt;code&gt;
        ///  atropa-arrays/docs&lt;/code&gt; directory where this module 
        ///  is located.</field>
        /// <field name="string" type="">A few utilities for manipulating strings.</field>
        /// <returns type="atropa"/>
                
        supportCheck: function(className, errorMessage) {
            /// <summary>Checks whether this class has been marked as unsupported and throws an 
            ///  error if it has.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="errorMessage" type="String">Optional. A custom error message. Defaults to
            ///  atropa.data[className].error</param>
        }, 
        
        requires: function(className, requirementFn, errorMessage) {
            /// <summary>Pushes a requirement check into atropa.data.requirements. The test
            ///  tests whether the class is supported in this environment. Sets
            ///  atropa.data[className]&apos;s support to unsupported and error to errorMessage
            ///  if the requirementFn returns false. The requirement checks will all be run
            ///  after the library has loaded.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="requirementFn" type="Function">A function to test whether or not the class
            ///  is supported in this environment. If supported, returns true otherwise
            ///  return false.</param>
            /// <param name="errorMessage" type="String">The error message to use when this class or its
            ///  methods are called in unsupported environments. Defaults to:
            ///  &apos;The atropa.&apos; + className + &apos; class is unsupported in this environment.&apos;;</param>
        }, 
        
        setAsOptionalArg: function(defaultVal, optionalArg) {
            /// <summary>Set default values for optional function parameters.</summary>
            /// <param name="defaultVal" type="Mixed">The default value to set.</param>
            /// <param name="optionalArg" type="Mixed">A reference to the optional argument.</param>
            /// <returns type="Mixed">Returns the default value supplied when the optional
            /// argument is undefined or null. Otherwise, the supplied optional argument
            /// is returned.</returns>
        }
        
    };

    var $x = window.atropa;
    $x.__namespace = "true";
    $x.__typeName = "atropa";
})(this);

  

  
/* vsdoc for atropa.data */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.data = {
        /// <summary></summary>
        /// <returns type="atropa.data"/>
                
    };

    var $x = window.atropa.data;
    $x.__namespace = "true";
    $x.__typeName = "atropa.data";
})(this);

  

  
/* vsdoc for atropa.string */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.string = {
        /// <summary></summary>
        /// <returns type="atropa.string"/>
                
        removeRepeatedWord: function(string) {
            /// <summary>Replaces repeated words and phrases with a single word or phrase.</summary>
            /// <param name="string" type="String">The string to remove repeated words from.</param>
            /// <returns type="String">Returns the given string with repeated words and
            ///  phrases removed.</returns>
        }, 
        
        lineBreaksToParagraphTags: function(string) {
            /// <summary>Creates paragraph breaks at every occurrence of two consecutive line breaks.</summary>
            /// <param name="string" type="String">The string to insert paragraph tags into.</param>
            /// <returns type="String">Returns the given string with paragraph breaks inserted.</returns>
        }, 
        
        lineBreaksToBreakTags: function(string) {
            /// <summary>Creates break tags at every line break.</summary>
            /// <param name="string" type="String">The string to insert break tags into.</param>
            /// <returns type="String">Returns the given string with break tags inserted.</returns>
        }, 
        
        normalizeEol: function(string) {
            /// <summary>Normalizes line breaks to `\n`.</summary>
            /// <param name="string" type="String">The string to normalize.</param>
            /// <returns type="String">Returns the given string with normalized line breaks.</returns>
        }, 
        
        ucFirst: function(string) {
            /// <summary>Converts the first character of a given string to
            /// uppercase.</summary>
            /// <param name="string" type="String">The string for which you want the
            /// first letter to be in upper case.</param>
            /// <returns type="String">The given string with it&apos;s first letter capitalized.</returns>
        }, 
        
        camelize: function(string) {
            /// <summary>Converts the given string to camel case.</summary>
            /// <param name="string" type="String">The string to camelize.</param>
            /// <returns type="String">The camelized string.</returns>
        }, 
        
        countWords: function(someText) {
            /// <summary>Counts words.</summary>
            /// <param name="someText" type="String">Plain text.</param>
            /// <returns type="Number">Returns the count of words in someText.</returns>
        }, 
        
        convertEol: function(text, newEOL) {
            /// <summary>Converts end of line markers into whatever you want. 
            /// Automatically detects any of \r\n, \n, or \r and 
            /// replaces it with the user specified EOL marker.</summary>
            /// <param name="text" type="String">The text you want processed.</param>
            /// <param name="newEOL" type="String">The replacement for the current EOL marks.</param>
            /// <returns type="String">Returns the processed text.</returns>
        }, 
        
        offsetWhiteSpace: function(text, offset) {
            /// <summary>Removes a quantity of leading spaces specified by offset.</summary>
            /// <param name="text" type="String">The text to process.</param>
            /// <param name="offset" type="Number">The amount of spaces you want removed 
            /// from the beginning of the text.</param>
            /// <returns type="">Returns the processed text.</returns>
        }, 
        
        normalizeWhiteSpacePrefix: function(text) {
            /// <summary>Converts all tabs in leading whitespace into four spaces.</summary>
            /// <param name="text" type="String">The text to process</param>
            /// <returns type="String">Returns the processed text.</returns>
        }, 
        
        normalizeWhiteSpace: function(text) {
            /// <summary>Converts all tabs into four spaces.</summary>
            /// <param name="text" type="String">The text to process</param>
            /// <returns type="String">Returns the processed text.</returns>
        }, 
        
        getOffset: function(text) {
            /// <summary>Counts the number of leading space or tab characters but not both.</summary>
            /// <param name="text" type="String">The text to analyze.</param>
            /// <returns type="Number">Returns the quantity of leading spaces or tabs.</returns>
        }, 
        
        getWords: function(text) {
            /// <summary>Breaks a string into an array of words.</summary>
            /// <param name="text" type="String">The text to analyze.</param>
            /// <returns type="Array">Returns an array of the words in
            ///  the given text.</returns>
        }, 
        
        escapeCdata: function(text) {
            /// <summary>Escapes &lt;code&gt;CDATA&lt;/code&gt; sections in text
            ///  so that the text may be embedded into a 
            ///  &lt;code&gt;CDATA&lt;/code&gt; section. This should be run
            ///  on any text which may contain the string 
            ///  &lt;code&gt;]]>&lt;/code&gt; since said string will effectively
            ///  end the &lt;code&gt;CDATA&lt;/code&gt; section prematurely.</summary>
            /// <param name="text" type="String">The text containing 
            ///  &lt;code&gt;CDATA&lt;/code&gt; sections to escape.</param>
            /// <returns type="Array">Returns a string with escaped
            ///  &lt;code&gt;CDATA&lt;/code&gt; sections.</returns>
        }
        
    };

    var $x = window.atropa.string;
    $x.__namespace = "true";
    $x.__typeName = "atropa.string";
})(this);

  

  
  
/* vsdoc for atropa.TextAnalyzer */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.TextAnalyzer = function(text){
        /// <summary></summary>
        /// <param name="text" type="String">The text to analyze.</param>
        /// <field name="text" type="String">The supplied text. Defaults to an empty string.</field>
        /// <field name="wordCount" type="Number">Gives the count of words in the text. Defaults to 0.</field>
        /// <field name="words" type="Array">An array of every word in the supplied text.
        ///  Defaults to an empty array.</field>
        /// <returns type="atropa.TextAnalyzer"/>
    };

    var $x = window.atropa.TextAnalyzer;
    $x.prototype = {
                
        getIndex: function() {
            /// <summary>Gets an index of the text.</summary>
            /// <returns type="Array">Returns an array of unique values
            ///  derived from the text given.</returns>
        }, 
        
        getWordFrequency: function() {
            /// <summary>Get the frequency data for each unique word in
            ///  the text.</summary>
            /// <returns type="Object">Returns an object whose keys are
            ///  the unique words from the given text and whose
            ///  values are the count of each words occurrence.</returns>
        }, 
        
        getPhraseFrequency: function(phraseLength) {
            /// <summary>Gets phrases of the specified length from the text.</summary>
            /// <param name="phraseLength" type="Number">The length of the phrases
            ///  to extract from the text. Defaults to 2.</param>
            /// <returns type="Object">Returns an object whose keys are phrases
            ///  and whose values are the number of occurrences of the phrase.</returns>
        }
        
    };

    $x.__class = "true";
    $x.__typeName = "atropa.TextAnalyzer";
})(this);


