const accountId = 144553
let accountEmail = "infotech4056@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2    // not allowed

accountEmail = "ts@gmail.com"
accountPassword = "212121"
accountCity = "Bangluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])  


