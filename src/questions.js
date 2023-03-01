
const questions = [
      {
        question: "Столица Великобритании?",
        round: 1,
        answers:[
          { option: "Париж", isCorrect: false },
          { option: "Москва", isCorrect: false },
          { option: "Лондон", isCorrect: true },
          { option: "Мадрид", isCorrect: false }
        ],
      }, {
        question: "Столица Франции?",
        round: 1,
        answers: [
          { option: "Париж", isCorrect: true },
          { option: "Москва", isCorrect: false },
          { option: "Лондон", isCorrect: false },
          { option: "Мадрид", isCorrect: false }
        ],
      }, {
        question: "Столица Германии?",
        round: 1,
        answers: [
          { option: "Париж", isCorrect: false },
          { option: "Берлин", isCorrect: true },
          { option: "Лондон", isCorrect: false },
          { option: "Мадрид", isCorrect: false }
        ],
      }, {
        question: "Столица Испании?",
        round: 1,
        answers: [
          { option: "Париж", isCorrect: false },
          { option: "Москва", isCorrect: false },
          { option: "Лондон", isCorrect: false },
          { option: "Мадрид", isCorrect: true }
        ],
      }, {
        question: "Столица России?",
        round: 1,
        answers: [
          { option: "Париж", isCorrect: false },
          { option: "Москва", isCorrect: true },
          { option: "Лондон", isCorrect: false },
          { option: "Мадрид", isCorrect: false }
        ],
      }, {
        question: "Столица Австралии?",
        round: 1,
        answers: [
          { option: "Париж", isCorrect: false },
          { option: "Канберра", isCorrect: true },
          { option: "Лондон", isCorrect: false },
          { option: "Мадрид", isCorrect: false }
        ],
      }, { 
        question: "Столица Японии?",
        round: 1,
        answers: [
          { option: "Париж", isCorrect: false },
          { option: "Токио", isCorrect: true },
          { option: "Лондон", isCorrect: false },
          { option: "Мадрид", isCorrect: false }
        ]
      }
    ,
      {
        question: "Столица Великобритании?",
        round: 2,
        answers: [
          { option: "Париж", isCorrect: false },
          { option: "Москва", isCorrect: false },
          { option: "Лондон", isCorrect: true },
          { option: "Мадрид", isCorrect: false }
        ],
      }, {
        question: "Столица Франции?",
        round: 2,
        answers: [
          { option: "Париж", isCorrect: true },
          { option: "Москва", isCorrect: false },
          { option: "Лондон", isCorrect: false },
          { option: "Мадрид", isCorrect: false }
        ],
      }, {
        question: "Столица Германии?",
        round: 2,
        answers: [
          { option: "Париж", isCorrect: false },
          { option: "Берлин", isCorrect: true },
          { option: "Лондон", isCorrect: false },
          { option: "Мадрид", isCorrect: false }
        ],
      }, {
        question: "Столица Испании?",
        round: 2,
        answers: [
          { option: "Париж", isCorrect: false },
          { option: "Москва", isCorrect: false },
          { option: "Лондон", isCorrect: false },
          { option: "Мадрид", isCorrect: true }
        ],
      }, {
        question: "Столица России?",
        round: 2,
        answers: [
          { option: "Париж", isCorrect: false },
          { option: "Москва", isCorrect: true },
          { option: "Лондон", isCorrect: false },
          { option: "Мадрид", isCorrect: false }
        ],
      }, {
        question: "Столица Австралии?",
        round: 2,
        answers: [
          { option: "Париж", isCorrect: false },
          { option: "Канберра", isCorrect: true },
          { option: "Лондон", isCorrect: false },
          { option: "Мадрид", isCorrect: false }
        ],
      }, {
        question: "Столица Японии?",
        round: 2,
        answers: [
          { option: "Париж", isCorrect: false },
          { option: "Токио", isCorrect: true },
          { option: "Лондон", isCorrect: false },
          { option: "Мадрид", isCorrect: false }
        ]
      }
//    ,
//       {
//         question: "Столица Великобритании?",
//         round: 3,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: true },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Франции?",
//         round: 3,
//         answers: [
//           { option: "Париж", isCorrect: true },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Германии?",
//         round: 3,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Берлин", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Испании?",
//         round: 3,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: true }
//         ],
//       }, {
//         question: "Столица России?",
//         round: 3,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Австралии?",
//         round: 3,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Канберра", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Японии?",
//         round: 3,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Токио", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ]
//       }
//    ,
//       {
//         question: "Столица Великобритании?",
//         round: 4,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: true },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Франции?",
//         round: 4,
//         answers: [
//           { option: "Париж", isCorrect: true },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Германии?",
//         round: 4,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Берлин", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Испании?",
//         round: 4,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: true }
//         ]
//       }, {
//         question: "Столица России?",
//         round: 4,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Австралии?",
//         round: 4,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Канберра", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Японии?",
//         round: 4,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Токио", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ]
//       }
//     ,
//       {
//         question: "Столица Великобритании?",
//         round: 5,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: true },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Франции?",
//         round: 5,
//         answers: [
//           { option: "Париж", isCorrect: true },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Германии?",
//         round: 5,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Берлин", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Испании?",
//         round: 5,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: true }
//         ],
//       }, {
//         question: "Столица России?",
//         round: 5,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Австралии?",
//         round: 5,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Канберра", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Японии?",
//         round: 5,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Токио", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ]
//       }
//    ,
//       {
//         question: "Столица Великобритании?",
//         round: 6,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: true },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Франции?",
//         round: 6,
//         answers: [
//           { option: "Париж", isCorrect: true },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Германии?",
//         round: 6,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Берлин", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Испании?",
//         round: 6,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: true }
//         ],
//       }, {
//         question: "Столица России?",
//         round: 6,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Австралии?",
//         round: 6,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Канберра", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Японии?",
//         round: 6,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Токио", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ]
//       }
//    ,
//       {
//         question: "Столица Великобритании?",
//         round: 7,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: true },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Франции?",
//         round: 7,
//         answers: [
//           { option: "Париж", isCorrect: true },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Германии?",
//         round: 7,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Берлин", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Испании?",
//         round: 7,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: false },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: true }
//         ],
//       }, {
//         question: "Столица России?",
//         round: 7,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Москва", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Австралии?",
//         round: 7,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Канберра", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ],
//       }, {
//         question: "Столица Японии?",
//         round: 7,
//         answers: [
//           { option: "Париж", isCorrect: false },
//           { option: "Токио", isCorrect: true },
//           { option: "Лондон", isCorrect: false },
//           { option: "Мадрид", isCorrect: false }
//         ]
//       }
  ]

  export default questions