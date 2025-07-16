const fs = require("fs");

fs.readFile("../f1.txt", "utf-8", function (err, data1) {
    if (err) {
        return console.log( err);
    }

    console.log( data1);
    let users1 = JSON.parse(data1);
    console.log("All users ");
    users1.forEach(user => console.log(user.name));

    fs.readFile("../f2.txt", "utf-8", function (err, data2) {
        if (err) {
            return console.log( err);
        }

        console.log( data2);
        let users2 = JSON.parse(data2);
        console.log("All users");
        users2.forEach(user => console.log(user.name));

        let mergedUsers = [...users1, ...users2];

        fs.writeFile("../result.txt", JSON.stringify(mergedUsers, null, 2), function (err) {
            if (err) {
                return console.log( err);
            }

            fs.readFile("../result.txt", "utf-8", function (err, resultData) {
                if (err) {
                    return console.log( err);
                }

                console.log( resultData);
                let users = JSON.parse(resultData);
                console.log("All users");
                users.forEach(user => console.log(user.name));
            });
        });
    });
});
