function createSecretHolder(secret) {
  var x;
  return {
    getSecret : () => { return secret }, // returns the secret value
    setSecret : (n) => { secret = n } // sets a new secret value
  }
}