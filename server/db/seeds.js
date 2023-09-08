use dreamscapeDiary;
db.dropDatabase();
db.dreams.insertMany([
    {
        title: "Scary Dream",
        body: "I had a horribly scary dream about being blown around on the rocks.",
        isLucidDream: false,
        isNightmare: false,
        isRecurring: false,
    },
    {
        title: "Cats!",
        body: "I had a nightmare about a cat continually trying to enter my house!",
        isLucidDream: false,
        isNightmare: false,
        isRecurring: true,
    },
    {
        title: "Falling",
        body: "The dreaded feeling of falling from a great height and then feeling the sudden impact of the ground.",
        isLucidDream: false,
        isNightmare: true,
        isRecurring: false,
    }
]);