var friends = require("../data/friends");

// API routes
module.exports = function (app) {

    // ??Why is the route /../ ??
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var newScore = 0;
        var friendScore = 0;
        var minimumDifference = 40;

        for (var i = 0; i < req.body.scores.length; i++) {
            newScore += parseInt(req.body.scores[i]);
        }

        for (var i = 0; i < friends.length; i++) {

            var friendScore = 0;
            
            for (var j = 0; j < friends[i].scores.length; j++) {
                friendScore += parseInt(friends[i].scores[j]);
            }
            console.log(friends[i].name)
            console.log(friendScore);

            var newDifference = Math.abs(friendScore - newScore);
            if (newDifference < minimumDifference) {
                minimumDifference = newDifference;
                var bestFriendInfo = [friends[i].name, friends[i].photo]
                var bestFriendPhoto = friends[i].photo;
            }

        }

        // console.log(bestFriendName, bestFriendPhoto);
        console.log(bestFriendInfo);

        friends.push(req.body)

        res.json(bestFriendInfo);

    });


    // Post and Get

};