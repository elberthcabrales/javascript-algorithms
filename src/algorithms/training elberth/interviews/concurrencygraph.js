/**
 * Tinder
 * Problem Statement
 * Given some exchange rates, write a function that takes in 3 arguments current currency, target currency, and value, and return the new value in the target currency. The converted value should be trimmed to 2 decimal places, and rounded up. If a conversion cannot be made return 0.
 *
 * Below is a sample set of data you can load into a data structure of your choice to then run against the tests. For example:
 *
 * solution("USD", "AUD", 100) => 129
 * solution("YEN", "CAD", 523) => 6.06
 * solution("YEN", "LLL", 1) => 0
 *   USD  => AUD: 1.29
 *   USD  => GBP: .72
 *   USD  => EUR: .83
 *   AUD  => USD: .77
 *   YEN  => USD: .0093
 *   CAD  => GBP: .58
 *   GBP  => CAD: 1.73
 * [execution time limit] 4 seconds (js)
 *
 * [input] string curr
 *
 * current currency
 *
 * [input] string target
 *
 * target currency
 *
 * [input] float value
 *
 * [output] float
 *
 * [JavaScript] Syntax Tips
 *
 * // Prints help message to the console
 * // Returns a string
 * function helloWorld(name) {
 *     console.log("This prints to the console when you Run Tests");
 *     return "Hello, " + name;
 * }
 */
