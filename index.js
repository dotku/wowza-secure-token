const hash = require("sha256");

function secureTokenHash(str) {
  return Buffer.from(hash(str, { asString: true }), "binary")
    .toString("base64")
    .replace(/\//g, "_")
    .replace(/\+/g, "-");
}
