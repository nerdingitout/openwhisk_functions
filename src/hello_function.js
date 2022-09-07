[sourcecode language=”javascript”]
/**
*
* main() will be run when you invoke this action
*
* @param Cloud Functions actions accept a single parameter, which must be a JSON object.
*
* @return The output of this action, which must be a JSON object.
*
*/
function main(params) {
var greeting = params.greeting;
var user = params.user;
var message = greeting + ", " + user;
return {
"Message": message,
"Status": "Success",
"Code": 200
}
}
[/sourcecode]
