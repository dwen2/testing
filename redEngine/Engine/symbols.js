console.log("inside symbols js")
exports.noScript = Symbol('NoScript');


/// Exploit environment types ///
exports.pythonEnv = Symbol("Python");
exports.nodeEnv = Symbol("Node");


/// Exploit type types ///
exports.scanType = Symbol("Scan"); // Just scanning a system for vulnerabilities.


/// Exploit target types ///
exports.genericTarget = Symbol("Generic"); // Not a specific type; usually used when scanning unknown systems.
