/**
 * script.js - Script de la page
 */

/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: ["1967", "1974", "1962", "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: ["Zelda", "Ganon", "Tom", "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/
document.addEventListener("DOMContentLoaded", () => {
  console.log(questions);

  let question = document.getElementById("question");
  let answers = document.getElementById("answers");

  function displayContent() {
    console.log(questions);
    let i = 0;

    // Affichage première question
    question.innerHTML = questions[i].question;
    // Affichage des réponses de la première question
    questions[i].answers.forEach((element, index) => {
      let childOfAnswer = document.createElement("li");
      childOfAnswer.innerText = element;
      childOfAnswer.className = "answer";
      answers.appendChild(childOfAnswer);

      childOfAnswer.addEventListener("click", () => {
        // score première question
        score(index, i);
        answers.innerHTML = "";
        i++;

        // Affichage deuxième question
        question.innerHTML = questions[i].question;

        // Affichage des réponses de la seconde question
        questions[i].answers.forEach((element, index) => {
          let childOfAnswer = document.createElement("li");
          childOfAnswer.className = "answer";
          childOfAnswer.innerText = element;

          answers.appendChild(childOfAnswer);

          childOfAnswer.addEventListener("click", () => {
            // score seconde question
            score(index, i);

            answers.innerHTML = "";
            i++;
            // Affichage troisième question
            question.innerHTML = questions[i].question;

            // Affichage des réponses de la troisième question
            questions[i].answers.forEach((element, index) => {
              let childOfAnswer = document.createElement("li");
              childOfAnswer.className = "answer";
              childOfAnswer.innerText = element;

              answers.appendChild(childOfAnswer);

              childOfAnswer.addEventListener("click", () => {
                // score troisième question
                score(index, i);
                answers.innerHTML = "";
                i++;

                // Affichage quatrième question
                question.innerHTML = questions[i].question;

                // Affichage des réponses de la quetrième question
                questions[i].answers.forEach((element, index) => {
                  let childOfAnswer = document.createElement("li");
                  childOfAnswer.className = "answer";
                  childOfAnswer.innerText = element;

                  answers.appendChild(childOfAnswer);

                  childOfAnswer.addEventListener("click", () => {
                    // score quatrième question
                    score(index, i);

                    question.innerHTML = "Vous avez terminé le quizz !";

                    answers.remove();
                  });
                });
              });
            });
          });
        });
      });
    });
  }

  displayContent();

  function score(index, i) {
    let score = document.getElementById("score");
    if (index == questions[i].correctAnswerIndex) {
      score.innerText++;
    }
  }
});
