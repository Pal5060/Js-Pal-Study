const accountId = 144553
let accountEmail= "pal@gmail.com"
var accountPassword = "12345"
accountCity = "ahemadabad"
let accountState = "gujarat"

// accountId = 2
accountEmail = "ps@ps.com"
accountPassword = "1234"
accountCity = "surat"

/*
Prefer not using var
becuse of issue in block scope and function scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
