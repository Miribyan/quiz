
const questions = [
      {
        question: "Мышечный тонус при поражении периферического двигательного нейрона: ",
        round: "Вопросы по Медицине",
        answers:[
          { option: "Снижается", isCorrect: true },
          { option: "Повышается", isCorrect: false },
          { option: "Не изменяется", isCorrect: false },
          { option: "Не иследовано", isCorrect: false }
        ],
        timeLimit: 5
      }, {
        question: "Мышечный тонус при поражении центрального двигательного нейрона: ",
        round: "Вопросы по Медицине",
        answers: [
          { option: "Снижается", isCorrect: false },
          { option: "Повышается", isCorrect: true },
          { option: "Не изменяется", isCorrect: false },
          { option: "Не иследовано", isCorrect: false }
        ],
        timeLimit: 5
      }, {
        question: "Патологические пирамидные симптомы на верхней конечности - рефлексы: ",
        round: "Вопросы по Медицине",
        answers: [
          { option: "Бабинского", isCorrect: false },
          { option: "Оппенгейма", isCorrect: false },
          { option: "Россолимо", isCorrect: true },
          { option: "Шеффера", isCorrect: false }
        ],
        timeLimit: 5
      }, {
        question: "Гипотрофия мышц характерна для поражения: ",
        round: "Вопросы по Медицине",
        answers: [
          { option: "Центрального двигательного нейрона", isCorrect: false },
          { option: "Периферического двигательного нейрона", isCorrect: true },
          { option: "Мозжечка", isCorrect: false },
          { option: "Гипоталамуса", isCorrect: false }
        ],
        timeLimit: 5
      }, {
        question: "При поражении отводящего нерва возникает паралич глазодвигательной мышцы: ",
        round: "Вопросы по Медицине",
        answers: [
          { option: "Наружной прямой", isCorrect: true },
          { option: "Верхней прямой", isCorrect: false },
          { option: "Нижней прямой", isCorrect: false },
          { option: "Нижней косой", isCorrect: false }
        ],
        timeLimit: 5
      }, {
        question: "При центральном параличе наблюдается:",
        round: "Вопросы по Медицине",
        answers: [
          { option: "Повышение сухожильных рефлексов", isCorrect: true },
          { option: "Атрофия мышц", isCorrect: false },
          { option: "Фибрилярные подергивания", isCorrect: false },
          { option: "Не иследовано", isCorrect: false }
        ],
        timeLimit: 5
      }, {
        question: "Хореический гиперкинез возникает при поражении: ",
        round: "Вопросы по Медицине",
        answers: [
          { option: "Палеостриатума", isCorrect: false },
          { option: "Неостриатума", isCorrect: true },
          { option: "Бедиального бледного шара", isCorrect: false },
          { option: "Латерального бледного шара", isCorrect: false }
        ],
        timeLimit: 5
      }, {
        question: "Основным медиатором тормозного действия является: ",
        round: "Вопросы по Медицине",
        answers: [
          { option: "ГАМК", isCorrect: true },
          { option: "Ацетилхолин", isCorrect: false },
          { option: "Норадреналин", isCorrect: false },
          { option: "Адреналин", isCorrect: false }
        ],
        timeLimit: 5
      }, {
        question: "Все афферентные пути стриопаллидарной системы оканчиваются:",
        round: "Вопросы по Медицине",
        answers: [
          { option: "В полосатом теле", isCorrect: true },
          { option: "В латеральном ядре бледного шара", isCorrect: false },
          { option: "В медиальном ядре бледного шара", isCorrect: false },
          { option: "В субталамическом ядре", isCorrect: false }
        ],
        timeLimit: 5
      }, {
        question: "Обонятельные галлюцинации наблюдаются при поражении: ",
        round: "Вопросы по Медицине",
        answers: [
          { option: "Обонятельного бугорка", isCorrect: false },
          { option: "Обонятельной луковицы", isCorrect: false },
          { option: "Височной доли", isCorrect: true },
          { option: "Теменной доли", isCorrect: false }
        ],
        timeLimit: 5
      }
      //  {
    //     question: "Столица Германии?",
    //     round: 1,
    //     answers: [
    //       { option: "Париж", isCorrect: false },
    //       { option: "Берлин", isCorrect: true },
    //       { option: "Лондон", isCorrect: false },
    //       { option: "Мадрид", isCorrect: false }
    //     ],
    //   }, {
    //     question: "Столица Испании?",
    //     round: 1,
    //     answers: [
    //       { option: "Париж", isCorrect: false },
    //       { option: "Москва", isCorrect: false },
    //       { option: "Лондон", isCorrect: false },
    //       { option: "Мадрид", isCorrect: true }
    //     ],
    //   }, {
    //     question: "Столица России?",
    //     round: 1,
    //     answers: [
    //       { option: "Париж", isCorrect: false },
    //       { option: "Москва", isCorrect: true },
    //       { option: "Лондон", isCorrect: false },
    //       { option: "Мадрид", isCorrect: false }
    //     ],
    //   }, {
    //     question: "Столица Австралии?",
    //     round: 1,
    //     answers: [
    //       { option: "Париж", isCorrect: false },
    //       { option: "Канберра", isCorrect: true },
    //       { option: "Лондон", isCorrect: false },
    //       { option: "Мадрид", isCorrect: false }
    //     ],
    //   }, { 
    //     question: "Столица Японии?",
    //     round: 1,
    //     answers: [
    //       { option: "Париж", isCorrect: false },
    //       { option: "Токио", isCorrect: true },
    //       { option: "Лондон", isCorrect: false },
    //       { option: "Мадрид", isCorrect: false }
    //     ]
    //   }
    // ,
    //   {
    //     question: "Столица Великобритании?",
    //     round: 2,
    //     answers: [
    //       { option: "Париж", isCorrect: false },
    //       { option: "Москва", isCorrect: false },
    //       { option: "Лондон", isCorrect: true },
    //       { option: "Мадрид", isCorrect: false }
    //     ],
    //   }, {
    //     question: "Столица Франции?",
    //     round: 2,
    //     answers: [
    //       { option: "Париж", isCorrect: true },
    //       { option: "Москва", isCorrect: false },
    //       { option: "Лондон", isCorrect: false },
    //       { option: "Мадрид", isCorrect: false }
    //     ],
    //   }, {
    //     question: "Столица Германии?",
    //     round: 2,
    //     answers: [
    //       { option: "Париж", isCorrect: false },
    //       { option: "Берлин", isCorrect: true },
    //       { option: "Лондон", isCorrect: false },
    //       { option: "Мадрид", isCorrect: false }
    //     ],
    //   }, {
    //     question: "Столица Испании?",
    //     round: 2,
    //     answers: [
    //       { option: "хуй]", isCorrect: false },
    //       { option: "Москва", isCorrect: false },
    //       { option: "Лондон", isCorrect: false },
    //       { option: "Мадрид", isCorrect: true }
    //     ],
    //   }, {
    //     question: "Столица России?",
    //     round: 2,
    //     answers: [
    //       { option: "Париж", isCorrect: false },
    //       { option: "Москва", isCorrect: true },
    //       { option: "Лондон", isCorrect: false },
    //       { option: "Мадрид", isCorrect: false }
    //     ],
    //   }, {
    //     question: "Столица Австралии?",
    //     round: 2,
    //     answers: [
    //       { option: "Париж", isCorrect: false },
    //       { option: "Канберра", isCorrect: true },
    //       { option: "Лондон", isCorrect: false },
    //       { option: "Мадрид", isCorrect: false }
    //     ],
    //   }, {
    //     question: "Столица Японии?",
    //     round: 2,
    //     answers: [
    //       { option: "Париж", isCorrect: false },
    //       { option: "Токио", isCorrect: true },
    //       { option: "Лондон", isCorrect: false },
    //       { option: "Мадрид", isCorrect: false }
    //     ]
    //   }
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