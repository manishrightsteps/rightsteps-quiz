const STUDENT_CONFIG = {
    MIN_NAME_LENGTH: 2,
    MAX_NAME_LENGTH: 50
}

const TEACHERS = [
    { id: 1, name: "Ms. Emily Thompson", subject: "Mathematics", experience: "5 years" },
    { id: 2, name: "Mr. James Wilson", subject: "Science", experience: "8 years" },
    { id: 3, name: "Ms. Sarah Johnson", subject: "Mathematics", experience: "6 years" },
    { id: 4, name: "Mr. Oliver Davies", subject: "Science", experience: "4 years" }
]

const SUBJECTS = [
    { id: 1, name: "Mathematics", icon: "🔢" },
    { id: 2, name: "Science", icon: "🔬" }
]

const GRADES = [
    { id: 1, level: 1, description: "Class 1" },
    { id: 2, level: 2, description: "Class 2" },
    { id: 3, level: 3, description: "Class 3" },
    { id: 4, level: 4, description: "Class 4" },
    { id: 5, level: 5, description: "Class 5" }
]

const QUESTION_SOURCES = [
    { id: 1, type: "AI_GENERATED", label: "AI Generated Questions", icon: "🤖" },
    { id: 2, type: "TEACHER_PREPARED", label: "Teacher Prepared Questions", icon: "👨‍🏫" }
]

const DIFFICULTY_LEVELS = [
    { id: 1, level: "EASY", label: "Easy" },
    { id: 2, level: "MEDIUM", label: "Medium" },
    { id: 3, level: "HARD", label: "Hard" }
]

const QUIZ_CONFIG = {
    MAX_QUESTIONS_PER_QUIZ: 5,
    TIME_LIMIT_MINUTES: 15,
    PASSING_SCORE_PERCENTAGE: 60,
    HINTS_ALLOWED: 3
}

const HINT_TYPES = [
    { id: 1, type: "FORMULA", label: "Show Formula" },
    { id: 2, type: "EXAMPLE", label: "Show Example" },
    { id: 3, type: "CONCEPT", label: "Explain Concept" }
]

const QUESTION_BANK = [
    {
        id: 1,
        subject: "Mathematics",
        grade: 1,
        difficulty: "EASY",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Counting",
        questionData: {
            questionText: "How many fingers do you have on one hand?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "5",
            explanation: "We have 5 fingers on each hand: thumb, index, middle, ring, and little finger.",
            hints: [
                { type: "CONCEPT", text: "Count the fingers on your hand" },
                { type: "EXAMPLE", text: "Hold up your hand and count each finger" },
                { type: "FORMULA", text: "Count: 1, 2, 3, 4, 5" }
            ]
        },
        timeLimit: 45,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 2,
        subject: "Mathematics",
        grade: 1,
        difficulty: "EASY",
        preparedBy: "Ms. Sarah Johnson",
        questionSource: "TEACHER_PREPARED",
        topic: "Basic Addition",
        questionData: {
            questionText: "What is 1 + 1?",
            options: ["1", "2", "3", "4"],
            correctAnswer: "2",
            explanation: "When we add 1 thing to 1 other thing, we get 2 things in total.",
            hints: [
                { type: "CONCEPT", text: "Addition means putting things together" },
                { type: "EXAMPLE", text: "1 toy + 1 toy = 2 toys" },
                { type: "FORMULA", text: "1 + 1 = 2" }
            ]
        },
        timeLimit: 45,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },

    {
        id: 3,
        subject: "Mathematics",
        grade: 1,
        difficulty: "EASY",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Subtraction",
        questionData: {
            questionText: "What is 3 - 1?",
            options: ["1", "2", "3", "4"],
            correctAnswer: "2",
            explanation: "When we take away 1 from 3, we get 2. 3 - 1 = 2.",
            hints: [
                { type: "CONCEPT", text: "Subtraction means taking away" },
                { type: "EXAMPLE", text: "3 apples, eat 1 apple, 2 left" },
                { type: "FORMULA", text: "3 - 1 = 2" }
            ]
        },
        timeLimit: 45,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 4,
        subject: "Mathematics",
        grade: 1,
        difficulty: "EASY",
        preparedBy: "Ms. Sarah Johnson",
        questionSource: "TEACHER_PREPARED",
        topic: "Shapes",
        questionData: {
            questionText: "How many sides does a triangle have?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "3",
            explanation: "A triangle has 3 sides and 3 corners. Tri means three.",
            hints: [
                { type: "CONCEPT", text: "Think about the shape's name" },
                { type: "EXAMPLE", text: "Draw a triangle and count its sides" },
                { type: "FORMULA", text: "Tri = three" }
            ]
        },
        timeLimit: 45,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 5,
        subject: "Mathematics",
        grade: 1,
        difficulty: "EASY",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Numbers",
        questionData: {
            questionText: "Which number comes after 5?",
            options: ["4", "6", "7", "8"],
            correctAnswer: "6",
            explanation: "Numbers go in order: 1, 2, 3, 4, 5, 6. So 6 comes after 5.",
            hints: [
                { type: "CONCEPT", text: "Count in order" },
                { type: "EXAMPLE", text: "Count: 1, 2, 3, 4, 5, ?" },
                { type: "FORMULA", text: "5 + 1 = 6" }
            ]
        },
        timeLimit: 45,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },

    {
        id: 6,
        subject: "Science",
        grade: 1,
        difficulty: "EASY",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Animals",
        questionData: {
            questionText: "Which animal says 'moo'?",
            options: ["Cat", "Dog", "Cow", "Bird"],
            correctAnswer: "Cow",
            explanation: "Cows make a 'moo' sound. They are farm animals that give us milk.",
            hints: [
                { type: "CONCEPT", text: "Think about farm animals" },
                { type: "EXAMPLE", text: "This animal gives us milk" },
                { type: "FORMULA", text: "Farm animal that is black and white" }
            ]
        },
        timeLimit: 45,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 7,
        subject: "Science",
        grade: 1,
        difficulty: "EASY",
        preparedBy: "Mr. Oliver Davies",
        questionSource: "TEACHER_PREPARED",
        topic: "Body Parts",
        questionData: {
            questionText: "What do we use to see?",
            options: ["Ears", "Eyes", "Nose", "Mouth"],
            correctAnswer: "Eyes",
            explanation: "We use our eyes to see things around us. Eyes help us look at the world.",
            hints: [
                { type: "CONCEPT", text: "Think about your face" },
                { type: "EXAMPLE", text: "You close these when you sleep" },
                { type: "FORMULA", text: "Two round things on your face" }
            ]
        },
        timeLimit: 45,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 8,
        subject: "Science",
        grade: 1,
        difficulty: "EASY",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Colors",
        questionData: {
            questionText: "What color do you get when you mix red and yellow?",
            options: ["Blue", "Green", "Orange", "Purple"],
            correctAnswer: "Orange",
            explanation: "When we mix red and yellow together, we get orange. Like an orange fruit!",
            hints: [
                { type: "CONCEPT", text: "Think about mixing colors" },
                { type: "EXAMPLE", text: "Think of a fruit with this color" },
                { type: "FORMULA", text: "Red + Yellow = ?" }
            ]
        },
        timeLimit: 45,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 9,
        subject: "Science",
        grade: 1,
        difficulty: "EASY",
        preparedBy: "Mr. Oliver Davies",
        questionSource: "TEACHER_PREPARED",
        topic: "Nature",
        questionData: {
            questionText: "What gives us light during the day?",
            options: ["Moon", "Stars", "Sun", "Candle"],
            correctAnswer: "Sun",
            explanation: "The Sun gives us light and warmth during the day. It's very bright and hot.",
            hints: [
                { type: "CONCEPT", text: "Think about what makes day bright" },
                { type: "EXAMPLE", text: "It's hot and yellow in the sky" },
                { type: "FORMULA", text: "Day light source" }
            ]
        },
        timeLimit: 45,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 10,
        subject: "Science",
        grade: 1,
        difficulty: "EASY",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Food",
        questionData: {
            questionText: "Which of these is a fruit?",
            options: ["Carrot", "Apple", "Bread", "Milk"],
            correctAnswer: "Apple",
            explanation: "An apple is a fruit that grows on trees. Fruits are sweet and healthy to eat.",
            hints: [
                { type: "CONCEPT", text: "Think about things that grow on trees" },
                { type: "EXAMPLE", text: "It's red or green and round" },
                { type: "FORMULA", text: "Sweet food that grows on trees" }
            ]
        },
        timeLimit: 45,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },

    {
        id: 11,
        subject: "Mathematics",
        grade: 2,
        difficulty: "EASY",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Addition",
        questionData: {
            questionText: "What is 3 + 4?",
            options: ["6", "7", "8", "9"],
            correctAnswer: "7",
            explanation: "3 + 4 = 7. We can count: 3, then add 4 more: 4, 5, 6, 7.",
            hints: [
                { type: "CONCEPT", text: "Addition means counting forward" },
                { type: "EXAMPLE", text: "Start with 3, then count 4 more numbers" },
                { type: "FORMULA", text: "3 + 4 = 7" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 12,
        subject: "Mathematics",
        grade: 2,
        difficulty: "EASY",
        preparedBy: "Ms. Sarah Johnson",
        questionSource: "TEACHER_PREPARED",
        topic: "Subtraction",
        questionData: {
            questionText: "What is 8 - 3?",
            options: ["4", "5", "6", "7"],
            correctAnswer: "5",
            explanation: "8 - 3 = 5. We start with 8 and take away 3, leaving us with 5.",
            hints: [
                { type: "CONCEPT", text: "Subtraction means taking away" },
                { type: "EXAMPLE", text: "8 toys, give away 3 toys, 5 left" },
                { type: "FORMULA", text: "8 - 3 = 5" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 13,
        subject: "Mathematics",
        grade: 2,
        difficulty: "EASY",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Numbers",
        questionData: {
            questionText: "Which number is bigger: 15 or 12?",
            options: ["12", "15", "Both same", "Neither"],
            correctAnswer: "15",
            explanation: "15 is bigger than 12. When counting, 15 comes after 12.",
            hints: [
                { type: "CONCEPT", text: "Compare the numbers" },
                { type: "EXAMPLE", text: "Count up to see which comes later" },
                { type: "FORMULA", text: "15 > 12" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 14,
        subject: "Mathematics",
        grade: 2,
        difficulty: "EASY",
        preparedBy: "Ms. Sarah Johnson",
        questionSource: "TEACHER_PREPARED",
        topic: "Time",
        questionData: {
            questionText: "How many minutes are in 1 hour?",
            options: ["30", "45", "60", "90"],
            correctAnswer: "60",
            explanation: "There are 60 minutes in 1 hour. This is how we measure time.",
            hints: [
                { type: "CONCEPT", text: "Think about clock time" },
                { type: "EXAMPLE", text: "Count by 5s around a clock face" },
                { type: "FORMULA", text: "1 hour = 60 minutes" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 15,
        subject: "Mathematics",
        grade: 2,
        difficulty: "EASY",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Money",
        questionData: {
            questionText: "How many pennies make 10 pence?",
            options: ["5", "10", "15", "20"],
            correctAnswer: "10",
            explanation: "10 pennies make 10 pence. Each penny is worth 1 pence.",
            hints: [
                { type: "CONCEPT", text: "Think about coin values" },
                { type: "EXAMPLE", text: "1 penny = 1 pence" },
                { type: "FORMULA", text: "10 × 1 penny = 10 pence" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },

    {
        id: 16,
        subject: "Science",
        grade: 2,
        difficulty: "EASY",
        preparedBy: "Mr. Oliver Davies",
        questionSource: "TEACHER_PREPARED",
        topic: "Weather",
        questionData: {
            questionText: "What do we use to stay dry in the rain?",
            options: ["Sunglasses", "Umbrella", "Shorts", "Sandals"],
            correctAnswer: "Umbrella",
            explanation: "An umbrella protects us from rain by keeping the water from falling on us.",
            hints: [
                { type: "CONCEPT", text: "Think about rainy day items" },
                { type: "EXAMPLE", text: "It's round and keeps water away" },
                { type: "FORMULA", text: "Rain protection tool" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 17,
        subject: "Science",
        grade: 2,
        difficulty: "EASY",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Weather",
        questionData: {
            questionText: "What happens to water when it gets very cold?",
            options: ["It disappears", "It turns to ice", "It gets warmer", "It changes color"],
            correctAnswer: "It turns to ice",
            explanation: "When water gets very cold (below 0°C), it freezes and becomes ice.",
            hints: [
                { type: "CONCEPT", text: "Think about what happens in winter" },
                { type: "EXAMPLE", text: "Water in the freezer becomes hard" },
                { type: "FORMULA", text: "Cold water = frozen water" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 18,
        subject: "Science",
        grade: 2,
        difficulty: "EASY",
        preparedBy: "Mr. Oliver Davies",
        questionSource: "TEACHER_PREPARED",
        topic: "Plants",
        questionData: {
            questionText: "What do plants need to grow?",
            options: ["Only toys", "Water and sunlight", "Only chocolate", "Only music"],
            correctAnswer: "Water and sunlight",
            explanation: "Plants need water and sunlight to grow healthy and strong. They also need soil and air.",
            hints: [
                { type: "CONCEPT", text: "Think about what you give to garden plants" },
                { type: "EXAMPLE", text: "Plants in dark places don't grow well" },
                { type: "FORMULA", text: "Sunlight + Water = Happy plants" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 19,
        subject: "Science",
        grade: 2,
        difficulty: "EASY",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Plants",
        questionData: {
            questionText: "Which part of the plant takes in water from the soil?",
            options: ["Leaves", "Flowers", "Roots", "Stem"],
            correctAnswer: "Roots",
            explanation: "Roots grow underground and take in water and nutrients from the soil to feed the plant.",
            hints: [
                { type: "CONCEPT", text: "Think about the parts you can't see" },
                { type: "EXAMPLE", text: "The part that grows down into the dirt" },
                { type: "FORMULA", text: "Underground plant part" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 20,
        subject: "Science",
        grade: 2,
        difficulty: "EASY",
        preparedBy: "Mr. Oliver Davies",
        questionSource: "TEACHER_PREPARED",
        topic: "Animals",
        questionData: {
            questionText: "Which animal can fly?",
            options: ["Fish", "Bird", "Dog", "Cat"],
            correctAnswer: "Bird",
            explanation: "Birds have wings and feathers that help them fly through the air.",
            hints: [
                { type: "CONCEPT", text: "Think about animals with wings" },
                { type: "EXAMPLE", text: "This animal has feathers and a beak" },
                { type: "FORMULA", text: "Wings + feathers = flying animal" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },

    {
        id: 21,
        subject: "Mathematics",
        grade: 3,
        difficulty: "MEDIUM",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Multiplication",
        questionData: {
            questionText: "What is 3 × 2?",
            options: ["5", "6", "7", "8"],
            correctAnswer: "6",
            explanation: "3 × 2 = 6. This means 3 groups of 2, or 2 + 2 + 2 = 6.",
            hints: [
                { type: "CONCEPT", text: "Multiplication is repeated addition" },
                { type: "EXAMPLE", text: "3 groups of 2 items each" },
                { type: "FORMULA", text: "3 × 2 = 2 + 2 + 2 = 6" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 22,
        subject: "Mathematics",
        grade: 3,
        difficulty: "MEDIUM",
        preparedBy: "Ms. Sarah Johnson",
        questionSource: "TEACHER_PREPARED",
        topic: "Multiplication",
        questionData: {
            questionText: "What is 4 × 5?",
            options: ["15", "20", "25", "30"],
            correctAnswer: "20",
            explanation: "4 × 5 = 20. This means 4 groups of 5, or 5 + 5 + 5 + 5 = 20.",
            hints: [
                { type: "CONCEPT", text: "Think of 4 groups with 5 items each" },
                { type: "EXAMPLE", text: "4 boxes with 5 toys in each box" },
                { type: "FORMULA", text: "4 × 5 = 5 + 5 + 5 + 5 = 20" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 23,
        subject: "Mathematics",
        grade: 3,
        difficulty: "MEDIUM",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Division",
        questionData: {
            questionText: "What is 12 ÷ 3?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4",
            explanation: "12 ÷ 3 = 4. This means sharing 12 items equally among 3 groups gives 4 items per group.",
            hints: [
                { type: "CONCEPT", text: "Division is sharing equally" },
                { type: "EXAMPLE", text: "12 sweets shared among 3 friends" },
                { type: "FORMULA", text: "3 × 4 = 12, so 12 ÷ 3 = 4" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 24,
        subject: "Mathematics",
        grade: 3,
        difficulty: "MEDIUM",
        preparedBy: "Ms. Sarah Johnson",
        questionSource: "TEACHER_PREPARED",
        topic: "Division",
        questionData: {
            questionText: "What is 15 ÷ 5?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "3",
            explanation: "15 ÷ 5 = 3. This means 15 items divided into groups of 5 makes 3 groups.",
            hints: [
                { type: "CONCEPT", text: "How many 5s are in 15?" },
                { type: "EXAMPLE", text: "15 stickers in groups of 5" },
                { type: "FORMULA", text: "5 × 3 = 15, so 15 ÷ 5 = 3" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 25,
        subject: "Mathematics",
        grade: 3,
        difficulty: "MEDIUM",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Time",
        questionData: {
            questionText: "How many days are in a week?",
            options: ["5", "6", "7", "8"],
            correctAnswer: "7",
            explanation: "There are 7 days in a week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.",
            hints: [
                { type: "CONCEPT", text: "Count the days from Monday to Sunday" },
                { type: "EXAMPLE", text: "School days plus weekend days" },
                { type: "FORMULA", text: "5 school days + 2 weekend days = 7" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },

    {
        id: 26,
        subject: "Science",
        grade: 3,
        difficulty: "MEDIUM",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Plants",
        questionData: {
            questionText: "What do plants need to make their own food?",
            options: ["Only water", "Only soil", "Sunlight, water and air", "Only sunlight"],
            correctAnswer: "Sunlight, water and air",
            explanation: "Plants need sunlight, water, and carbon dioxide from air to make food through photosynthesis.",
            hints: [
                { type: "CONCEPT", text: "Think about what plants get from their environment" },
                { type: "EXAMPLE", text: "Plants turn green leaves toward the sun" },
                { type: "FORMULA", text: "Photosynthesis needs multiple ingredients" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 27,
        subject: "Science",
        grade: 3,
        difficulty: "MEDIUM",
        preparedBy: "Mr. Oliver Davies",
        questionSource: "TEACHER_PREPARED",
        topic: "Plants",
        questionData: {
            questionText: "What is the green substance in leaves that helps plants make food?",
            options: ["Water", "Chlorophyll", "Soil", "Air"],
            correctAnswer: "Chlorophyll",
            explanation: "Chlorophyll is the green substance in leaves that captures sunlight to help plants make their own food.",
            hints: [
                { type: "CONCEPT", text: "Think about what makes leaves green" },
                { type: "EXAMPLE", text: "It's the reason plants look green" },
                { type: "FORMULA", text: "Green substance + sunlight = plant food" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 28,
        subject: "Science",
        grade: 3,
        difficulty: "MEDIUM",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Space",
        questionData: {
            questionText: "What do we call the path that Earth takes around the Sun?",
            options: ["Rotation", "Orbit", "Spinning", "Circle"],
            correctAnswer: "Orbit",
            explanation: "Earth's orbit is the path it takes as it travels around the Sun. It takes one year to complete one orbit.",
            hints: [
                { type: "CONCEPT", text: "Think about Earth moving around the Sun" },
                { type: "EXAMPLE", text: "Like a ball going around a track" },
                { type: "FORMULA", text: "Earth's path around Sun = orbit" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 29,
        subject: "Science",
        grade: 3,
        difficulty: "MEDIUM",
        preparedBy: "Mr. Oliver Davies",
        questionSource: "TEACHER_PREPARED",
        topic: "Space",
        questionData: {
            questionText: "How long does it take for Earth to go around the Sun once?",
            options: ["1 day", "1 month", "1 year", "1 hour"],
            correctAnswer: "1 year",
            explanation: "It takes Earth about 365 days (1 year) to complete one full orbit around the Sun.",
            hints: [
                { type: "CONCEPT", text: "Think about how we measure long periods of time" },
                { type: "EXAMPLE", text: "From one birthday to the next" },
                { type: "FORMULA", text: "365 days = 1 year = 1 orbit" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 30,
        subject: "Science",
        grade: 3,
        difficulty: "MEDIUM",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Animals",
        questionData: {
            questionText: "What do we call animals that eat only plants?",
            options: ["Carnivores", "Herbivores", "Omnivores", "Predators"],
            correctAnswer: "Herbivores",
            explanation: "Herbivores are animals that eat only plants. Examples include rabbits, cows, and horses.",
            hints: [
                { type: "CONCEPT", text: "Think about animals that don't eat meat" },
                { type: "EXAMPLE", text: "Rabbits eating carrots and grass" },
                { type: "FORMULA", text: "Plant-eating animals = herbivores" }
            ]
        },
        timeLimit: 60,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },

    {
        id: 31,
        subject: "Mathematics",
        grade: 4,
        difficulty: "MEDIUM",
        preparedBy: "Ms. Sarah Johnson",
        questionSource: "TEACHER_PREPARED",
        topic: "Division",
        questionData: {
            questionText: "What is 24 ÷ 6?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4",
            explanation: "24 ÷ 6 = 4. This means how many groups of 6 can we make from 24 items.",
            hints: [
                { type: "CONCEPT", text: "Division is splitting into equal groups" },
                { type: "EXAMPLE", text: "24 sweets shared among 6 children" },
                { type: "FORMULA", text: "6 × 4 = 24, so 24 ÷ 6 = 4" }
            ]
        },
        timeLimit: 75,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 32,
        subject: "Mathematics",
        grade: 4,
        difficulty: "MEDIUM",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Division",
        questionData: {
            questionText: "What is 48 ÷ 8?",
            options: ["5", "6", "7", "8"],
            correctAnswer: "6",
            explanation: "48 ÷ 8 = 6. We can check this: 8 × 6 = 48.",
            hints: [
                { type: "CONCEPT", text: "Think about how many 8s fit into 48" },
                { type: "EXAMPLE", text: "48 pencils in boxes of 8" },
                { type: "FORMULA", text: "8 × ? = 48, so 48 ÷ 8 = 6" }
            ]
        },
        timeLimit: 75,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 33,
        subject: "Mathematics",
        grade: 4,
        difficulty: "MEDIUM",
        preparedBy: "Ms. Sarah Johnson",
        questionSource: "TEACHER_PREPARED",
        topic: "Fractions",
        questionData: {
            questionText: "Which fraction is larger: 1/2 or 1/4?",
            options: ["1/2", "1/4", "They are equal", "Cannot tell"],
            correctAnswer: "1/2",
            explanation: "1/2 is larger than 1/4. Half of something is bigger than a quarter of the same thing.",
            hints: [
                { type: "CONCEPT", text: "Think about pizza slices" },
                { type: "EXAMPLE", text: "Half a pizza vs quarter of a pizza" },
                { type: "FORMULA", text: "1/2 = 2/4, so 2/4 > 1/4" }
            ]
        },
        timeLimit: 75,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 34,
        subject: "Mathematics",
        grade: 4,
        difficulty: "MEDIUM",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Fractions",
        questionData: {
            questionText: "What is 1/3 + 1/3?",
            options: ["1/6", "2/6", "2/3", "3/3"],
            correctAnswer: "2/3",
            explanation: "1/3 + 1/3 = 2/3. We add the numerators (top numbers) and keep the same denominator.",
            hints: [
                { type: "CONCEPT", text: "Add the top numbers, keep the bottom number" },
                { type: "EXAMPLE", text: "One third + one third = two thirds" },
                { type: "FORMULA", text: "1/3 + 1/3 = (1+1)/3 = 2/3" }
            ]
        },
        timeLimit: 75,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 35,
        subject: "Mathematics",
        grade: 4,
        difficulty: "MEDIUM",
        preparedBy: "Ms. Sarah Johnson",
        questionSource: "TEACHER_PREPARED",
        topic: "Multiplication",
        questionData: {
            questionText: "What is 7 × 8?",
            options: ["54", "56", "58", "60"],
            correctAnswer: "56",
            explanation: "7 × 8 = 56. This is from the times table: 7 × 8 = 56.",
            hints: [
                { type: "CONCEPT", text: "Think of the 7 times table" },
                { type: "EXAMPLE", text: "7 groups of 8 items each" },
                { type: "FORMULA", text: "7 × 8 = 8 × 7 = 56" }
            ]
        },
        timeLimit: 75,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },

    {
        id: 36,
        subject: "Science",
        grade: 4,
        difficulty: "MEDIUM",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Solar System",
        questionData: {
            questionText: "Which planet is closest to the Sun?",
            options: ["Earth", "Mars", "Mercury", "Venus"],
            correctAnswer: "Mercury",
            explanation: "Mercury is the smallest planet and the one closest to the Sun in our solar system.",
            hints: [
                { type: "CONCEPT", text: "Think about the order of planets from the Sun" },
                { type: "EXAMPLE", text: "Remember: My Very Educated Mother Just..." },
                { type: "FORMULA", text: "First planet in the solar system order" }
            ]
        },
        timeLimit: 75,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 37,
        subject: "Science",
        grade: 4,
        difficulty: "MEDIUM",
        preparedBy: "Mr. Oliver Davies",
        questionSource: "TEACHER_PREPARED",
        topic: "Solar System",
        questionData: {
            questionText: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Mars",
            explanation: "Mars is called the Red Planet because of the iron oxide (rust) on its surface that gives it a reddish color.",
            hints: [
                { type: "CONCEPT", text: "Think about planet colors" },
                { type: "EXAMPLE", text: "This planet looks rusty red in the sky" },
                { type: "FORMULA", text: "Iron oxide = rust = red color" }
            ]
        },
        timeLimit: 75,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 38,
        subject: "Science",
        grade: 4,
        difficulty: "MEDIUM",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Human Body",
        questionData: {
            questionText: "Which organ helps us breathe?",
            options: ["Heart", "Lungs", "Stomach", "Brain"],
            correctAnswer: "Lungs",
            explanation: "The lungs are the organs that help us breathe by taking in oxygen and removing carbon dioxide.",
            hints: [
                { type: "CONCEPT", text: "Think about breathing in and out" },
                { type: "EXAMPLE", text: "These expand when you take a deep breath" },
                { type: "FORMULA", text: "Breathing organs = lungs" }
            ]
        },
        timeLimit: 75,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 39,
        subject: "Science",
        grade: 4,
        difficulty: "MEDIUM",
        preparedBy: "Mr. Oliver Davies",
        questionSource: "TEACHER_PREPARED",
        topic: "Human Body",
        questionData: {
            questionText: "How many bones are approximately in an adult human body?",
            options: ["106", "206", "306", "406"],
            correctAnswer: "206",
            explanation: "An adult human body has approximately 206 bones. Babies are born with more bones, but some fuse together as they grow.",
            hints: [
                { type: "CONCEPT", text: "Think about the skeleton" },
                { type: "EXAMPLE", text: "More than 200 but less than 300" },
                { type: "FORMULA", text: "Around 200 bones in total" }
            ]
        },
        timeLimit: 75,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 40,
        subject: "Science",
        grade: 4,
        difficulty: "MEDIUM",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Water Cycle",
        questionData: {
            questionText: "What happens when water vapor in the air cools down?",
            options: ["It disappears", "It forms clouds", "It gets warmer", "It turns to ice"],
            correctAnswer: "It forms clouds",
            explanation: "When water vapor cools down, it condenses to form tiny water droplets that create clouds.",
            hints: [
                { type: "CONCEPT", text: "Think about the water cycle" },
                { type: "EXAMPLE", text: "What you see in the sky on cloudy days" },
                { type: "FORMULA", text: "Water vapor + cooling = clouds" }
            ]
        },
        timeLimit: 75,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },

    {
        id: 41,
        subject: "Mathematics",
        grade: 5,
        difficulty: "HARD",
        preparedBy: "Ms. Sarah Johnson",
        questionSource: "TEACHER_PREPARED",
        topic: "Fractions",
        questionData: {
            questionText: "What is 1/2 + 1/4?",
            options: ["2/6", "3/4", "1/6", "2/4"],
            correctAnswer: "3/4",
            explanation: "1/2 + 1/4 = 2/4 + 1/4 = 3/4. We need to make the denominators the same first.",
            hints: [
                { type: "CONCEPT", text: "Find a common denominator" },
                { type: "EXAMPLE", text: "1/2 = 2/4, then add 2/4 + 1/4" },
                { type: "FORMULA", text: "Convert 1/2 to quarters: 1/2 = 2/4" }
            ]
        },
        timeLimit: 90,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 42,
        subject: "Mathematics",
        grade: 5,
        difficulty: "HARD",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Fractions",
        questionData: {
            questionText: "What is 3/5 - 1/5?",
            options: ["2/5", "2/10", "4/5", "3/10"],
            correctAnswer: "2/5",
            explanation: "3/5 - 1/5 = 2/5. When fractions have the same denominator, subtract the numerators.",
            hints: [
                { type: "CONCEPT", text: "Subtract the top numbers, keep the bottom" },
                { type: "EXAMPLE", text: "3 fifths take away 1 fifth = 2 fifths" },
                { type: "FORMULA", text: "3/5 - 1/5 = (3-1)/5 = 2/5" }
            ]
        },
        timeLimit: 90,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 43,
        subject: "Mathematics",
        grade: 5,
        difficulty: "HARD",
        preparedBy: "Ms. Sarah Johnson",
        questionSource: "TEACHER_PREPARED",
        topic: "Decimals",
        questionData: {
            questionText: "What is 0.5 + 0.3?",
            options: ["0.8", "0.53", "8.0", "5.3"],
            correctAnswer: "0.8",
            explanation: "0.5 + 0.3 = 0.8. We add decimals like regular numbers, keeping the decimal point in place.",
            hints: [
                { type: "CONCEPT", text: "Line up the decimal points" },
                { type: "EXAMPLE", text: "5 tenths + 3 tenths = 8 tenths" },
                { type: "FORMULA", text: "0.5 + 0.3 = 0.8" }
            ]
        },
        timeLimit: 90,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 44,
        subject: "Mathematics",
        grade: 5,
        difficulty: "HARD",
        preparedBy: "Ms. Emily Thompson",
        questionSource: "TEACHER_PREPARED",
        topic: "Decimals",
        questionData: {
            questionText: "What is 1.2 - 0.7?",
            options: ["0.5", "1.9", "0.19", "1.5"],
            correctAnswer: "0.5",
            explanation: "1.2 - 0.7 = 0.5. We subtract decimals by lining up the decimal points and subtracting normally.",
            hints: [
                { type: "CONCEPT", text: "Line up decimal points and subtract" },
                { type: "EXAMPLE", text: "12 tenths - 7 tenths = 5 tenths" },
                { type: "FORMULA", text: "1.2 - 0.7 = 0.5" }
            ]
        },
        timeLimit: 90,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 45,
        subject: "Mathematics",
        grade: 5,
        difficulty: "HARD",
        preparedBy: "Ms. Sarah Johnson",
        questionSource: "TEACHER_PREPARED",
        topic: "Percentages",
        questionData: {
            questionText: "What is 50% of 20?",
            options: ["5", "10", "15", "25"],
            correctAnswer: "10",
            explanation: "50% means half. So 50% of 20 is 20 ÷ 2 = 10.",
            hints: [
                { type: "CONCEPT", text: "50% means half of something" },
                { type: "EXAMPLE", text: "Half of 20 items" },
                { type: "FORMULA", text: "50% = 1/2, so 20 ÷ 2 = 10" }
            ]
        },
        timeLimit: 90,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },

    {
        id: 46,
        subject: "Science",
        grade: 5,
        difficulty: "HARD",
        preparedBy: "Mr. Oliver Davies",
        questionSource: "TEACHER_PREPARED",
        topic: "Human Body",
        questionData: {
            questionText: "Which organ pumps blood throughout the body?",
            options: ["Lungs", "Heart", "Liver", "Kidneys"],
            correctAnswer: "Heart",
            explanation: "The heart is a muscular organ that pumps blood through blood vessels to all parts of the body.",
            hints: [
                { type: "CONCEPT", text: "Think about circulation system" },
                { type: "EXAMPLE", text: "You can feel it beating in your chest" },
                { type: "FORMULA", text: "Muscular pump for blood circulation" }
            ]
        },
        timeLimit: 90,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 47,
        subject: "Science",
        grade: 5,
        difficulty: "HARD",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Human Body",
        questionData: {
            questionText: "What is the largest organ in the human body?",
            options: ["Heart", "Liver", "Skin", "Brain"],
            correctAnswer: "Skin",
            explanation: "The skin is the largest organ in the human body. It covers our entire body and protects us.",
            hints: [
                { type: "CONCEPT", text: "Think about what covers your whole body" },
                { type: "EXAMPLE", text: "It protects us and helps control temperature" },
                { type: "FORMULA", text: "Covering + protection = largest organ" }
            ]
        },
        timeLimit: 90,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 48,
        subject: "Science",
        grade: 5,
        difficulty: "HARD",
        preparedBy: "Mr. Oliver Davies",
        questionSource: "TEACHER_PREPARED",
        topic: "Physics",
        questionData: {
            questionText: "What force pulls objects toward the Earth?",
            options: ["Magnetism", "Gravity", "Friction", "Electricity"],
            correctAnswer: "Gravity",
            explanation: "Gravity is the force that pulls all objects toward the center of the Earth. It's why things fall down.",
            hints: [
                { type: "CONCEPT", text: "Think about why things fall down" },
                { type: "EXAMPLE", text: "When you drop a ball, this force pulls it down" },
                { type: "FORMULA", text: "Pulling force toward Earth = gravity" }
            ]
        },
        timeLimit: 90,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 49,
        subject: "Science",
        grade: 5,
        difficulty: "HARD",
        preparedBy: "Mr. James Wilson",
        questionSource: "TEACHER_PREPARED",
        topic: "Physics",
        questionData: {
            questionText: "What happens when you rub a balloon on your hair?",
            options: ["It gets heavier", "It builds up static electricity", "It changes color", "It gets smaller"],
            correctAnswer: "It builds up static electricity",
            explanation: "Rubbing a balloon on your hair creates static electricity, which can make the balloon stick to things or make your hair stand up.",
            hints: [
                { type: "CONCEPT", text: "Think about electrical charges" },
                { type: "EXAMPLE", text: "Your hair might stick to the balloon" },
                { type: "FORMULA", text: "Rubbing = friction = static electricity" }
            ]
        },
        timeLimit: 90,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    },
    {
        id: 50,
        subject: "Science",
        grade: 5,
        difficulty: "HARD",
        preparedBy: "Mr. Oliver Davies",
        questionSource: "TEACHER_PREPARED",
        topic: "Chemistry",
        questionData: {
            questionText: "What are the three states of matter?",
            options: ["Hot, cold, warm", "Solid, liquid, gas", "Big, medium, small", "Hard, soft, rough"],
            correctAnswer: "Solid, liquid, gas",
            explanation: "The three main states of matter are solid (like ice), liquid (like water), and gas (like water vapor).",
            hints: [
                { type: "CONCEPT", text: "Think about different forms of water" },
                { type: "EXAMPLE", text: "Ice, water, and steam" },
                { type: "FORMULA", text: "Matter exists in three main forms" }
            ]
        },
        timeLimit: 90,
        createdAt: "2024-01-15",
        updatedAt: "2024-01-15"
    }
]

const AI_PROMPTS = {
    MATHEMATICS: {
        EASY: "Generate a simple math question for grade {grade} level focusing on basic {topic}",
        MEDIUM: "Create a moderately challenging math problem for grade {grade} involving {topic}",
        HARD: "Design a complex mathematical problem for advanced grade {grade} students on {topic}"
    },
    SCIENCE: {
        EASY: "Create a basic science question for grade {grade} about {topic}",
        MEDIUM: "Generate a science question requiring analysis for grade {grade} on {topic}",
        HARD: "Design a complex science problem for grade {grade} involving critical thinking about {topic}"
    }
}

const QUIZ_STATES = {
    STUDENT_REGISTRATION: "STUDENT_REGISTRATION",
    GRADE_SELECTION: "GRADE_SELECTION",
    SUBJECT_SELECTION: "SUBJECT_SELECTION",
    TEACHER_SELECTION: "TEACHER_SELECTION",
    QUESTION_SOURCE_SELECTION: "QUESTION_SOURCE_SELECTION",
    QUIZ_IN_PROGRESS: "QUIZ_IN_PROGRESS",
    QUIZ_COMPLETED: "QUIZ_COMPLETED",
    RESULTS_DISPLAY: "RESULTS_DISPLAY"
}

export {
    STUDENT_CONFIG,
    TEACHERS,
    SUBJECTS,
    GRADES,
    QUESTION_SOURCES,
    DIFFICULTY_LEVELS,
    QUIZ_CONFIG,
    HINT_TYPES,
    QUESTION_BANK,
    AI_PROMPTS,
    QUIZ_STATES
}