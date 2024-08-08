const quantQuestions = [
    // Proportions
    { word: "6", hint: "If 3 is 50% of a number, what is the number?" },
    { word: "15", hint: "If 25 is 75% of a number, what is the number?" },
    { word: "40", hint: "If 20 is 25% of a number, what is the number?" },
    { word: "80", hint: "If 40 is 20% of a number, what is the number?" },
    { word: "25", hint: "If 5 is 20% of a number, what is the number?" },

    // Percentages
    { word: "45", hint: "What is 30% of 150?" },
    { word: "75", hint: "20% of what number is 15?" },
    { word: "80", hint: "If a price increased from 50 to 90, what is the percentage increase?" },
    { word: "48", hint: "If a price decreased from 60 to 31.2, what is the percentage decrease?" },
    { word: "30", hint: "If 15 is 50% of a number, what is the number?" },

    // Age
    { word: "15", hint: "In 5 years, Alice will be three times as old as she was 5 years ago. How old is Alice now?" },
    { word: "12", hint: "John is 4 times as old as Jane. If the sum of their ages is 16, how old is Jane?" },
    { word: "40", hint: "The sum of the ages of a father and son is 50. If the father is 30 years older than the son, how old is the son?" },
    { word: "20", hint: "Five years ago, the father was four times as old as his son. What are their ages now?" },
    { word: "25", hint: "The sum of the ages of two friends is 50. If one is twice as old as the other, how old are they?" },

    // Partnership
    { word: "240", hint: "A and B invest in a business. A invests $120 for 6 months, and B invests $180 for 4 months. Find the ratio of their profits." },
    { word: "400", hint: "A, B, and C invest in a business. A invests $200 for 3 months, B invests $150 for 5 months, and C invests $250 for 2 months. Find their total investment." },
    { word: "200", hint: "A and B invest in a business. A invests $150 for 8 months, and B invests $120 for 6 months. Find their total profit." },
    { word: "160", hint: "A and B invest in a business. A invests $200 for 4 months, and B invests $120 for 6 months. Find the ratio of their profits." },
    { word: "250", hint: "A, B, and C invest in a business. A invests $150 for 5 months, B invests $100 for 7 months, and C invests $200 for 3 months. Find their total investment." },

    // Time
    { word: "3", hint: "If a car travels at 60 km/h, how long will it take to cover 180 km?" },
    { word: "5", hint: "If a train travels at 50 km/h, how long will it take to cover 250 km?" },
    { word: "4", hint: "If a person walks at 6 km/h, how long will it take to walk 24 km?" },
    { word: "2", hint: "If a plane flies at 500 km/h, how long will it take to cover 1000 km?" },
    { word: "8", hint: "If a boat travels at 25 km/h, how long will it take to travel 200 km downstream?" },

    // Measurement
    { word: "72", hint: "If a rectangle has a length of 18 cm and a width of 4 cm, what is its area?" },
    { word: "36", hint: "If a square has a side length of 6 units, what is its area?" },
    { word: "120", hint: "If a rectangular prism has dimensions 5 cm by 4 cm by 6 cm, what is its volume?" },
    { word: "314", hint: "What is the area of a circle with a radius of 10 units? (Use π = 3.14)" },
    { word: "240", hint: "If a cylinder has a radius of 4 cm and a height of 15 cm, what is its volume?" },

    // Average
    { word: "20", hint: "The average of five numbers is 25. If four of the numbers are 15, 25, 35, and 45, what is the fifth number?" },
    { word: "15", hint: "The average of three numbers is 10. If two of the numbers are 5 and 10, what is the third number?" },
    { word: "40", hint: "The average of four numbers is 30. If three of the numbers are 20, 30, and 50, what is the fourth number?" },
    { word: "12", hint: "The average of six numbers is 10. If five of the numbers are 8, 10, 12, 14, and 16, what is the sixth number?" },
    { word: "25", hint: "The average of five numbers is 20. If four of the numbers are 15, 20, 25, and 30, what is the fifth number?" },

    // Temperature
    { word: "77", hint: "Convert 25 degrees Celsius to Fahrenheit. (Use the formula F = (C * 9/5) + 32)" },
    { word: "20", hint: "Convert 68 degrees Fahrenheit to Celsius. (Use the formula C = (F - 32) * 5/9)" },
    { word: "-5", hint: "Convert 23 degrees Fahrenheit to Celsius. (Use the formula C = (F - 32) * 5/9)" },
    { word: "37", hint: "Convert 98.6 degrees Fahrenheit to Celsius. (Use the formula C = (F - 32) * 5/9)" },
    { word: "98", hint: "Convert 37 degrees Celsius to Fahrenheit. (Use the formula F = (C * 9/5) + 32)" },

    // Speed
    { word: "45", hint: "A car travels at a speed of 60 km/h. How long will it take to cover 270 km?" },
    { word: "120", hint: "A train travels at a speed of 100 km/h. How far will it travel in 1.2 hours?" },
    { word: "30", hint: "A person walks at a speed of 6 km/h. How long will it take to walk 180 km?" },
    { word: "40", hint: "A plane flies at a speed of 800 km/h. How far will it travel in 0.05 hours?" },
    { word: "15", hint: "A boat travels at a speed of 30 km/h. How long will it take to travel 450 km downstream?" },
    { word: "25", hint: "What is 50% of 50?" },
    { word: "12", hint: "If a number is increased by 20%, what is the result?" },
    { word: "50", hint: "If 30% of a number is 15, what is the number?" },
    { word: "15", hint: "If a person is 5 years older than twice their age, and their age is 5, what is the person's age?" },
    { word: "14", hint: "If a recipe requires 2 cups of sugar and you want to make 3 times the recipe, how many cups of sugar do you need?" },
    { word: "120", hint: "If a car travels at a speed of 60 mph, how long does it take to travel 120 miles?" },
    { word: "49", hint: "If 25% of a number is 12.25, what is the number?" },
    { word: "70", hint: "If the original price of an item is $100 and it is discounted by 30%, what is the discounted price?" },
    { word: "5", hint: "If you subtract 3 from 8, what is the result?" },
    { word: "21", hint: "If a worker can complete a job in 3 hours and another worker is twice as fast, how long will it take the second worker to complete the job alone?" },
    { word: "36", hint: "If a rectangle has a length of 6 units and a width of 6 units, what is its area?" },
    { word: "8", hint: "If you divide 16 by 2, what is the result?" },
    { word: "45", hint: "What is 30% of 150?" },
    { word: "9", hint: "If a person is 3 times as old as another person, and the sum of their ages is 12, what is the age of the younger person?" },
    { word: "64", hint: "If a cube has a side length of 4 units, what is its volume?" },
    { word: "18", hint: "If the average of three numbers is 6, what is their sum?" },
    { word: "30", hint: "If the distance between two cities is 150 miles and a car travels at a speed of 50 mph, how long will it take to reach the destination?" },
    { word: "7", hint: "If you subtract 3 from 10, what is the result?" },
    { word: "81", hint: "If a temperature in Celsius is 27, what is the temperature in Fahrenheit?" },
    { word: "14", hint: "If a recipe requires 2 tablespoons of spice and you want to make 7 times the recipe, how many tablespoons of spice do you need?" },
    { word: "40", hint: "If a rectangle has a length of 8 units and a width of 5 units, what is its perimeter?" },
    { word: "12", hint: "If you add 5 and 7, what is the result?" },
    { word: "9", hint: "If a person's age is doubled, and then 5 is added, the result is 23. What is the person's age?" },
    { word: "15", hint: "If a rectangle has a length of 3 units and a width of 5 units, what is its area?" },
    { word: "56", hint: "If a car travels at a speed of 70 mph, how long does it take to travel 98 miles?" },
    { word: "21", hint: "If a person is 7 years older than three times their age, and their age is 4, what is the person's age?" },
    { word: "16", hint: "If a square has a side length of 4 units, what is its area?" },
    { word: "24", hint: "If you subtract 9 from 33, what is the result?" },
    { word: "75", hint: "What is 150% of 50?" },
    { word: "11", hint: "If a person is 3 years older than twice their age, and their age is 4, what is the person's age?" },
    { word: "48", hint: "If a number is decreased by 20%, what is the result?" },
    { word: "36", hint: "If a cube has a side length of 6 units, what is its volume?" },
    { word: "7", hint: "If you add 4 and 3, what is the result?" },
    { word: "45", hint: "If a person's age is tripled, and then 15 is added, the result is 60. What is the person's age?" },
    { word: "14", hint: "If a rectangle has a length of 7 units and a width of 2 units, what is its area?" },
    { word: "40", hint: "If a rectangle has a length of 10 units and a width of 4 units, what is its perimeter?" },
    { word: "64", hint: "If a cube has a side length of 4 units, what is its surface area?" },
    { word: "17", hint: "If the sum of two numbers is 9 and one of the numbers is 8, what is the other number?" },
    { word: "56", hint: "If a car travels at a speed of 65 mph, how long does it take to travel 91 miles?" },
    { word: "24", hint: "If a rectangle has a length of 12 units and a width of 2 units, what is its area?" },
    { word: "15", hint: "If a person is 5 years younger than twice their age, and their age is 10, what is the person's age?" },
    { word: "18", hint: "If the average of four numbers is 9, what is their sum?" },
    { word: "35", hint: "If a person is 7 years older than four times their age, and their age is 7, what is the person's age?" },
    { word: "16", hint: "If a square has a side length of 4 units, what is its perimeter?" },
    { word: "25", hint: "If a person's age is squared, the result is 625. What is the person's age?" },
    { word: "72", hint: "If a rectangle has a length of 9 units and a width of 8 units, what is its area?" },
    { word: "121", hint: "If a number is squared, and then 11 is added, the result is 132. What is the number?" },
    { word: "28", hint: "If the difference between two numbers is 18 and one of the numbers is 10, what is the other number?" },
    { word: "35", hint: "If a person is 7 years older than three times their age, and their age is 8, what is the person's age?" },
    { word: "18", hint: "If the average of five numbers is 12, what is their sum?" },
    { word: "45", hint: "If a person is 9 years older than five times their age, and their age is 6, what is the person's age?" },
    { word: "14", hint: "If a rectangle has a length of 7 units and a width of 2 units, what is its perimeter?" },
    { word: "40", hint: "If a rectangle has a length of 8 units and a width of 5 units, what is its area?" },
    { word: "64", hint: "If a cube has a side length of 4 units, what is its volume?" },
    { word: "22", hint: "If the sum of two numbers is 14 and one of the numbers is 8, what is the other number?" },
    { word: "30", hint: "If a car travels at a speed of 60 mph, how long does it take to travel 30 miles?" },
    { word: "49", hint: "If a person is 7 years older than four times their age, and their age is 7, what is the person's age?" },
    { word: "45", hint: "If a rectangle has a length of 9 units and a width of 5 units, what is its perimeter?" },
    { word: "14", hint: "If a rectangle has a length of 7 units and a width of 2 units, what is its surface area?" },
    { word: "40", hint: "If a rectangle has a length of 8 units and a width of 5 units, what is its perimeter?" },
    { word: "121", hint: "If the sum of two numbers is 22 and one of the numbers is 11, what is the other number?" },
    { word: "28", hint: "If a rectangle has a length of 14 units and a width of 2 units, what is its area?" },
    { word: "35", hint: "If the product of two numbers is 35 and one of the numbers is 7, what is the other number?" },
    { word: "18", hint: "If the average of six numbers is 15, what is their sum?" },
    { word: "45", hint: "If a rectangle has a length of 9 units and a width of 5 units, what is its area?" },
    { word: "14", hint: "If a rectangle has a length of 7 units and a width of 2 units, what is its perimeter?" },
    { word: "40", hint: "If a rectangle has a length of 8 units and a width of 5 units, what is its area?" },
    { word: "64", hint: "If a cube has a side length of 4 units, what is its volume?" },
    { word: "22", hint: "If the sum of two numbers is 14 and one of the numbers is 8, what is the other number?" },
    { word: "30", hint: "If a car travels at a speed of 60 mph, how long does it take to travel 30 miles?" },
    { word: "49", hint: "If a person is 7 years older than four times their age, and their age is 7, what is the person's age?" },
    { word: "45", hint: "If a rectangle has a length of 9 units and a width of 5 units, what is its perimeter?" },
    { word: "14", hint: "If a rectangle has a length of 7 units and a width of 2 units, what is its surface area?" },
    { word: "40", hint: "If a rectangle has a length of 8 units and a width of 5 units, what is its perimeter?" },
    { word: "121", hint: "If the sum of two numbers is 22 and one of the numbers is 11, what is the other number?" },
    { word: "28", hint: "If a rectangle has a length of 14 units and a width of 2 units, what is its area?" },
    { word: "35", hint: "If the product of two numbers is 35 and one of the numbers is 7, what is the other number?" },
    { word: "18", hint: "If the average of six numbers is 15, what is their sum?" },
    { word: "45", hint: "If a rectangle has a length of 9 units and a width of 5 units, what is its area?" },
];