var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
function updateUser(user, updateFields) {
    return __assign(__assign({}, user), updateFields);
}
var user1 = {
    username: 'Daniel',
    firstName: 'Daniel',
    lastName: 'Zych',
    age: 100,
    isAdmin: true,
    bio: 'Has a nice shiny bald head.'
};
var myUpdate = {
    username: 'DanielZ',
    age: 1,
    bio: 'On 10/17/23, Daniel figured out how to use TpyScript partials.',
    potato: 'yum'
};
console.log(user1);
console.log(updateUser(user1, myUpdate));
