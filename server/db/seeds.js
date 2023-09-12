use dreamscapeDiary;
db.dropDatabase();
db.dreams.insertMany([
    {
        title: "Scary Dream",
        body: "I had a horribly scary dream about being blown around on the rocks.",
        isLucidDream: false,
        isNightmare: false,
        isRecurring: false,
        date: "07 August 2023 at 08:05 am"
    },
    {
        title: "Cats!",
        body: "I had a nightmare about a cat continually trying to enter my house!",
        isLucidDream: false,
        isNightmare: false,
        isRecurring: true,
        date: "08 August 2023 at 07:45 am"
    },
    {
        title: "Falling",
        body: "The dreaded feeling of falling from a great height and then feeling the sudden impact of the ground.",
        isLucidDream: false,
        isNightmare: true,
        isRecurring: false,
        date: "09 August 2023 at 08:14 am"
    }
]);