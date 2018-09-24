var questions = new fila(); 
var answers = new ListaEncadeada(); 
var imagesGift = new pilha(); 
var answersId = 0; 
var questionsArray = []; 
var questionsCount = 0;
var answersArray = []; 
var correctAnswersArray = []; 
var Level = 0; 
var Class = null; 

loadQuestions(); 
loadAnswers();
loadImageGifts(); 
loadCorrectAnswers();

function nextQuestion() {  // Cria a próxima pergunta e alternativas
    document.getElementById("answers").innerHTML = ""; 
    document.getElementById("questionText").innerHTML = questions.readFirst(); 
    for (var i = 0; i < 5; i++){
        var radioHtml = '<input class="answer" id="answer" type="radio" name="answer" value="' + 
        answersId + '" checked> ' + answers.removeFirst(); + ' </input>'; 
        var answer = document.createElement("div");
        answer.innerHTML = radioHtml;
        document.getElementById("answers").appendChild(answer);a
        answersId++;
    }
}

function handleNext() { // Função que faz validações antes de chamar a proxima questão
    this.questionsArray[this.questionsCount] = questions.removeFirst(); 
    var answerId = document.querySelector('input[type=radio]:checked').value;
    this.answersArray[this.questionsCount] = answerId;
    if (questionsCount != 9) { 
        receiveGift(answerId);
        nextQuestion();
        this.questionsCount++;
    } else {
        calculatePowerLevel();

        document.getElementById("answers").innerHTML = "";
        document.getElementById("question").innerHTML = ""; 
        document.getElementById("submitButton").remove();   

        var title = document.createElement("div");
        var message = document.createElement("div");
        var image = document.createElement("div");
        var points = document.createElement("div");

        var clear=document.getElementById('lateral');
        clear.setAttribute('style', 'display: none;');

        var titleText = '<h2> Você terminou! </h2>';  // Cria os HTML's baseados nos pontos e nos níveis
        var messageText;
        var imageIcon;
        var pointsText = '<h1> Acertou ' + Level + '/10</h1>';
        if (Class == "Discípulo(a) de Atena") { 
            messageText = '<p> Pelo amor de Zeus, você é muito bom no assunto.' + 
            ' O deus dos deuses está feliz com o seu desempenho e orgulhoso dos seus conhecimentos! </p>';
            imagesGift.pop();
            imageIcon = imagesGift.peek();
        } else if(Class == "Pior que um Cerberu"){ 
            messageText = '<p> Parece que alguém aqui andava fugindo das aulas na escola em.' +  
            'Estudando um pouco mais sobre, dá pra melhorar esse placar aí em! </p>';
            imageIcon = imagesGift.peek();
        }

        title.innerHTML = titleText;  //Coloca o HTML na div
        message.innerHTML = messageText;
        image.innerHTML = imageIcon;
        points.innerHTML = pointsText;

        title.id = "final-content";  //Coloca id nas div's no css
        message.id = "final-content";
        image.id = "final-content";
        points.id = "final-content";

        document.getElementById("answers").appendChild(title);   //Coloca as div's criadas no HTML
        document.getElementById("answers").appendChild(message);
        document.getElementById("answers").appendChild(image);
        document.getElementById("answers").appendChild(points);
    }
}

function loadQuestions() { // Função que carrega as perguntas
    this.questions.insert("Quem era o Deus mais jovem da primeira geração do Olimpo?");
    this.questions.insert("Afrodite, uma das Deusas mais conhecida da mitologia grega. Oque ela representava?");
    this.questions.insert("Atena, considerava dois animais sagrados. Quais eram?");
    this.questions.insert("Conhecidas como górgonas, que eram duas irmãs de Medusa. Quem são elas?");
    this.questions.insert("Ulisses invadiu uma ilha de um ciclope. Qual era o nome do ciclope?");
    this.questions.insert("Quem casou com Poseidon?");
    this.questions.insert("Hermes, teve um filho com uma deusa. Quem era ela?");
    this.questions.insert("Quem construiu as muralhas ao redor de Troia?");
    this.questions.insert("Atena e Poseidon, entraram em uma batalha por uma cidade. Quem venceu esta batalha");
    this.questions.insert("Qual é o/a primeiro(a) deus(a) a nascer?");
}

function loadAnswers() { // Função que carrega as respostas
    this.answers.insertFirst("Héstia"); //certo
    this.answers.insertFirst("Ártemis");
    this.answers.insertFirst("Poseidon");
    this.answers.insertFirst("Zeus");
    this.answers.insertFirst("Hera");

    this.answers.insertFirst("Nenhum, pois outro deus interveio e derrotou ambos");
    this.answers.insertFirst("Os dois");
    this.answers.insertFirst("Zeus");
    this.answers.insertFirst("Poseidon");
    this.answers.insertFirst("Atena"); //certo

    this.answers.insertFirst("Apolo e Poseidon"); //certo
    this.answers.insertFirst("Hércules e Hades");
    this.answers.insertFirst("Zeus e Hades");
    this.answers.insertFirst("Ártemis e Hera");
    this.answers.insertFirst("Apolo e Atena");

    this.answers.insertFirst("Deméter");
    this.answers.insertFirst("Hécate");
    this.answers.insertFirst("Medusa");
    this.answers.insertFirst("Afrodite"); //certo
    this.answers.insertFirst("Hera");

    this.answers.insertFirst("Deméter");
    this.answers.insertFirst("Anfitríte"); //certo
    this.answers.insertFirst("Ártemis");
    this.answers.insertFirst("Héstia");
    this.answers.insertFirst("Hera");

    this.answers.insertFirst("Polifemo"); //certo
    this.answers.insertFirst("Estéropes");
    this.answers.insertFirst("Arges");
    this.answers.insertFirst("Brontes");
    this.answers.insertFirst("Cronos");

    this.answers.insertFirst("Metis e Temis");
    this.answers.insertFirst("Éter e Hemera");
    this.answers.insertFirst("Josefina e Aurelia");
    this.answers.insertFirst("Héstia E Hécate");
    this.answers.insertFirst("Esteno e Euríale"); // certo

    this.answers.insertFirst("Coruja e Cavalo");
    this.answers.insertFirst("Coruja e Cobra");  //certo
    this.answers.insertFirst("Cavalo e Cobra");
    this.answers.insertFirst("Cobra e Cavalo");
    this.answers.insertFirst("Cobra e Cabra");

    this.answers.insertFirst("da força");
    this.answers.insertFirst("do lar");  
    this.answers.insertFirst("da sabedoria");
    this.answers.insertFirst("do amor"); // certo
    this.answers.insertFirst("da paz");

    this.answers.insertFirst("Perséfone"); 
    this.answers.insertFirst("Hefesto");
    this.answers.insertFirst("Poseidon");
    this.answers.insertFirst("Hades");
    this.answers.insertFirst("Zeus"); //certo
}

function loadCorrectAnswers() { //Função que carrega as respostas corretas baseadas no ID

    this.correctAnswersArray[0] = "1";
    this.correctAnswersArray[1] = "10";
    this.correctAnswersArray[2] = "11";
    this.correctAnswersArray[3] = "19";
    this.correctAnswersArray[4] = "22";
    this.correctAnswersArray[5] = "26";
    this.correctAnswersArray[6] = "35";
    this.correctAnswersArray[7] = "37";
    this.correctAnswersArray[8] = "44";
    this.correctAnswersArray[9] = "50";
}

function loadImageGifts() {  //Carrega as imagens das recompensa finais
    this.imagesGift.push('<img src="Imagens/Zeus-Hercules.gif">'); 
    this.imagesGift.push('<img src="Imagens/Desculpas.gif'); 
}

function receiveGift(answerId) {  //Cria a Moeda-Recompensa
    var stackImagesGift = new Stack();  // Cria a pilha das imagens de recompensa
    stackImagesGift.push('<img class="imgrecon" src="Imagens/Coruja.png">');
    stackImagesGift.push('<img class="imgrecon" src="Imagens/medusa.png">');

    var imageGift = null;
    if(answerId === this.correctAnswersArray[this.questionsCount]){ //A resposta é correta, então é colocada na pilha
        stackImagesGift.pop();
        imageGift = stackImagesGift.peek();
    } else {
        imageGift = stackImagesGift.peek();
    }
    var divElement = document.createElement('div');
    divElement.innerHTML = imageGift;
    document.getElementById("lateral").appendChild(divElement); //coloca a div na lateral
}

function calculatePowerLevel() {  // Checa as respostas selecionas 
    for (var i = 0; i < this.answersArray.length; i++) { // Vai correr os vetores das respostas
        if (this.answersArray[i] === this.correctAnswersArray[i]) {
            this.Level++;
        }
    }
    if (this.Level < questionsCount/2) {
        this.Class = "Pior que um Cerberu";
    } else {
        this.Class ="Discípulo(a) de Atena";
    }
}
