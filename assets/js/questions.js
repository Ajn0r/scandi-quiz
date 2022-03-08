const questions = [{
        question: "Oslo is the capital of which country?",
        answer: [
            { text: "Norway", correct: true },
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
        ]
    },
    {
        question: "What is the capital of Sweden?",
        answer: [
            { text: "Malmö", correct: false },
            { text: "Copenhagen", correct: false },
            { text: "Gothenburg", correct: false },
            { text: "Stockholm", correct: true },
        ]
    },
    {
        question: "Copenhagen is the capital of which country?",
        answer: [
            { text: "Denmark", correct: true },
            { text: "Sweden", correct: false },
            { text: "Norway", correct: false },
            { text: "Iceland", correct: false },
        ]
    },
    {
        question: "Which is the second-largest city in Sweden?",
        answer: [
            { text: "Malmö", correct: false },
            { text: "Bergen", correct: false },
            { text: "Gothenburg", correct: true },
            { text: "Uppsala", correct: false },
        ]
    },
    {
        question: "The Swedish phenomenon ‘Fika’ normally involves what?",
        answer: [
            { text: "Pickled herring and cooked potatoes", correct: false },
            { text: "A visit to the sauna and a shot of vodka", correct: false },
            { text: "A home-cooked meal, usually meatballs and a glass of milk", correct: false },
            { text: "A coffee and a cinnamon bun", correct: true },
        ]
    },
    {
        question: "Which is the largest country in Scandinavia seen to its population?",
        answer: [
            { text: "Norway", correct: false },
            { text: "Sweden", correct: true },
            { text: "Denmark", correct: false },
            { text: "Greenland", correct: false },
        ]
    },
    {
        question: "Scandinavia is a part of the Nordics, but only includes 3 countries, which ones?",
        answer: [
            { text: "Sweden, Finland, and Norway", correct: false },
            { text: "Norway, Sweden, and Iceland", correct: false },
            { text: "Denmark, Norway, and Iceland", correct: false },
            { text: "Sweden, Denmark, and Norway", correct: true },
        ]
    },
    {
        question: "In Norway, 100.000 people eat this dish on Christmas eve every year, which one?",
        answer: [
            { text: "Pigsfeets in a brine", correct: false },
            { text: "A 'Grandiosa', a store-bought frozen pizza", correct: true },
            { text: "Pickled fermented cod with potatoes", correct: false },
            { text: "Steamed salted and dried Lamb racks", correct: false },
        ]
    },
    {
        question: "In which city will you find the biggest amusement park?",
        answer: [
            { text: "Gothenburg, Sweden", correct: true },
            { text: "Aarhus, Denmark", correct: false },
            { text: "Copenhagen, Denmark", correct: false },
            { text: "Stockholm, Sweden", correct: false },
        ]
    },
    {
        question: "The largest city in Scandinavia is this one:",
        answer: [
            { text: "Stockholm", correct: true },
            { text: "Gothenburg", correct: false },
            { text: "Copenhagen", correct: false },
            { text: "Oslo", correct: false },
        ]
    },
    {
        question: "Most Norwegians eat this for lunch:",
        answer: [
            { text: "A take-out", correct: false },
            { text: "A simple sandwich", correct: true },
            { text: "A salad", correct: false },
            { text: "Porridge", correct: false },
        ]
    },
    {
        question: "Driving from the most northern point to the most southern point of Norway would take:",
        answer: [
            { text: "18 hours", correct: false },
            { text: "22 hours", correct: false },
            { text: "30 hours", correct: true },
            { text: "74 hours", correct: false },
        ]
    },
    {
        question: "The popular furniture store Ikea originates from this Swedish town:",
        answer: [
            { text: "Timrå", correct: false },
            { text: "Sundsvall", correct: false },
            { text: "Åre", correct: false },
            { text: "Älmhult", correct: true },
        ]
    },
    {
        question: "In Norway, they have a saying that Norwegians was born with this on their feet:",
        answer: [
            { text: "Skiis", correct: true },
            { text: "Warm socks", correct: false },
            { text: "Runningshoes", correct: false },
            { text: "Hiking boots", correct: false },
        ]
    },
    {
        question: "Which is the highest mountain in Scandinavia?",
        answer: [
            { text: "Galdhøpiggen, Norway", correct: true },
            { text: "Kebnekaise, Sweden", correct: false },
            { text: "Glittertind, Norway", correct: false },
            { text: "Sarektjåkkå", correct: false },
        ]
    },
    {
        question: "This Danish city is home to the biggest festival in Scandinavia:",
        answer: [
            { text: "Copenhagen", correct: false },
            { text: "Aarhus", correct: false },
            { text: "Nyborg", correct: false },
            { text: "Roskilde", correct: true },
        ]
    },
    {
        question: "What is the famous little mermaid statue in Copenhagen called in Danish?",
        answer: [
            { text: "Lille kvinne i vannet", correct: false },
            { text: "Liten sjöjungfru", correct: false },
            { text: "Den lille Havfrue", correct: true },
            { text: "Havkvinne på sten", correct: false },
        ]
    },
    {
        question: "Danish Christmas dinner usually contains this 'bird'",
        answer: [
            { text: "Turkey", correct: false },
            { text: "Duck", correct: true },
            { text: "Chicken", correct: false },
            { text: "Quail", correct: false },
        ]
    },
    {
        question: "How many 'Semlor' are eaten in Sweden during the 'Semle' season?",
        answer: [
            { text: "2.4 million", correct: false },
            { text: "50 million", correct: true },
            { text: "170.000", correct: false },
            { text: "1.9 million", correct: false },
        ]
    },
    {
        question: "The Swedish 'midsummer' is a beloved holiday by many swedes, but what is it called in Denmark and Norway?",
        answer: [
            { text: "Midten sommer", correct: false },
            { text: "Sankt Hans", correct: true },
            { text: "Halv sommer", correct: false },
            { text: "Midsommer aften", correct: false },
        ]
    },
    {
        question: "LEGO blocks originate from one of the Scandinavian counties, which one?",
        answer: [
            { text: "Denmark", correct: true },
            { text: "Sweden", correct: false },
            { text: "Norway", correct: false },
            { text: "Iceland", correct: false },
        ]
    },
    {
        question: "One of the world's best restaurants, Noma, is situated in this Scandinavian capital, but which one?",
        answer: [
            { text: "Copenhagen, Denmark", correct: true },
            { text: "Stockholm, Sweden", correct: false },
            { text: "Oslo, Norway", correct: false },
            { text: "Reykjavik, Iceland", correct: false },
        ]
    },
    {
        question: "Sweden has won Eurovision song contests many times, how many to be exact?",
        answer: [
            { text: "4", correct: false },
            { text: "3", correct: false },
            { text: "6", correct: true },
            { text: "12", correct: false },
        ]
    },
    {
        question: "Many know that ABBA is from Sweden, but in which town were they formed?",
        answer: [
            { text: "Los Angeles, USA", correct: false },
            { text: "London, United Kingdom", correct: false },
            { text: "Stockholm, Sweden", correct: true },
            { text: "Copenhagen, Denmark", correct: false },
        ]
    },
]