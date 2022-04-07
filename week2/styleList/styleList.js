const jsonArry = [ 
    {
        "response_code": 0,
        "results": [
            {
                "category": "Science: Computers",
                "type": "multiple",
                "difficulty": "easy",
                "question": "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
                "correct_answer": "Apple",
                "incorrect_answers": [
                    "Microsoft",
                    "Atari",
                    "Commodore"
                ]
            },
            {
                "category": "Science: Computers",
                "type": "multiple",
                "difficulty": "easy",
                "question": "What does CPU stand for?",
                "correct_answer": "Central Processing Unit",
                "incorrect_answers": [
                    "Central Process Unit",
                    "Computer Personal Unit",
                    "Central Processor Unit"
                ]
            },
            {
                "category": "Science: Computers",
                "type": "multiple",
                "difficulty": "easy",
                "question": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
                "correct_answer": "Final",
                "incorrect_answers": [
                    "Static",
                    "Private",
                    "Public"
                ]
            },
            {
                "category": "Science: Computers",
                "type": "multiple",
                "difficulty": "easy",
                "question": "What does the Prt Sc button do?",
                "correct_answer": "Captures what&#039;s on the screen and copies it to your clipboard",
                "incorrect_answers": [
                    "Nothing",
                    "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
                    "Closes all windows"
                ]
            },
            {
                "category": "Science: Computers",
                "type": "multiple",
                "difficulty": "easy",
                "question": "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
                "correct_answer": "Green",
                "incorrect_answers": [
                    "Red",
                    "Blue",
                    "Yellow"
                ]
            },
            {
                "category": "Science: Computers",
                "type": "multiple",
                "difficulty": "easy",
                "question": "Which computer language would you associate Django framework with?",
                "correct_answer": "Python",
                "incorrect_answers": [
                    "C#",
                    "C++",
                    "Java"
                ]
            },
            {
                "category": "Science: Computers",
                "type": "multiple",
                "difficulty": "easy",
                "question": "The numbering system with a radix of 16 is more commonly referred to as ",
                "correct_answer": "Hexidecimal",
                "incorrect_answers": [
                    "Binary",
                    "Duodecimal",
                    "Octal"
                ]
            },
            {
                "category": "Science: Computers",
                "type": "multiple",
                "difficulty": "easy",
                "question": "How many values can a single byte represent?",
                "correct_answer": "256",
                "incorrect_answers": [
                    "8",
                    "1",
                    "1024"
                ]
            },
            {
                "category": "Science: Computers",
                "type": "multiple",
                "difficulty": "easy",
                "question": "How long is an IPv6 address?",
                "correct_answer": "128 bits",
                "incorrect_answers": [
                    "32 bits",
                    "64 bits",
                    "128 bytes"
                ]
            },
            {
                "category": "Science: Computers",
                "type": "multiple",
                "difficulty": "easy",
                "question": "What does the computer software acronym JVM stand for?",
                "correct_answer": "Java Virtual Machine",
                "incorrect_answers": [
                    "Java Vendor Machine",
                    "Java Visual Machine",
                    "Just Virtual Machine"
                ]
            }
        ]
    }
]

var json = JSON.stringify(jsonArry);

document.querySelector('#u-list').innerHTML += json