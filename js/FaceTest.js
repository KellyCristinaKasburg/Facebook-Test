var perguntas = new Questions(); 
var per = new fila();
var imagesGift = new pilha(); 
var answersId = 0; 
var questionsArray = []; 
var questionsCount = 0;
var answersArray = []; 
var correctAnswersArray = []; 
var Level = 0; 
var Class = null; 

this.nextQuestion = function() {  // Cria a próxima pergunta e alternativas
    document.getElementById("answers").innerHTML = ""; 
    document.getElementById("questionText").innerHTML = per.readFirst(); 
    for (var i = 0; i < 5; i++){
        var radioHtml = '<input class="answer" id="answer" type="radio" name="answer" value="' + 
        answersId + '" checked> ' + answers.removeFirst(); + ' </input>'; // Cria o elemento radio, com o ID da resposta
        var answer = document.createElement("div"); // Cria a div e coloca o HTML do radio dentro
        answer.innerHTML = radioHtml;
        document.getElementById("answers").appendChild(answer); //div na alternativa
        answersId++;
    }
};

this.handleNext = function() { // Função que faz validações antes de chamar a proxima questão
    this.questionsArray[this.questionsCount] = per.removeFirst();  //armazena a pergunta no vetor
    var answerId = document.querySelector('input[type=radio]:checked').value;
    this.answersArray[this.questionsCount] = answerId;
    if (questionsCount != 9) { 
        receiveGift(answerId); 
        nextQuestion(); //proxima pergunta
        this.questionsCount++; //conta as perguntas respondidas
    } else {
        calculatePowerLevel();

        document.getElementById("answers").innerHTML = "";
        document.getElementById("question").innerHTML = ""; 
        document.getElementById("submitButton").remove();   //Tira elementos desnecessarios 

        var title = document.createElement("div"); //Div´s para o HTML
        var message = document.createElement("div");
        var image = document.createElement("div");
        var points = document.createElement("div");

        var clear=document.getElementById('lateral');
        clear.setAttribute('style', 'display: none;');

        var titleText = '<h2> Você terminou! </h2>';  //Cria os HTML's baseados nos pontos e nos níveis
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
            'Estudando um pouco mais sobre isso, dá pra melhorar esse placar aí em! </p>';
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

        document.getElementById("answers").appendChild(title);   //As div's criadas vão para as div´s do HTML
        document.getElementById("answers").appendChild(message);
        document.getElementById("answers").appendChild(image);
        document.getElementById("answers").appendChild(points);
    }
};

this.loadImageGifts = function() {  //Carrega as imagens das recompensa finais
    this.imagesGift.push('<img src="Imagens/Zeus-Hercules.gif">'); 
    this.imagesGift.push('<img src="Imagens/Desculpas.gif'); 
};

this.receiveGift = function(answerId) {  //Cria a Moeda-Recompensa
    var stackImagesGift = new Stack();  //A pilha das imagens de recompensa
    stackImagesGift.push('<img class="imgrecon" src="Imagens/Coruja.png">');
    stackImagesGift.push('<img class="imgrecon" src="Imagens/medusa.png">');

    var imageGift = null;
    if(answerId === this.correctAnswersArray[this.questionsCount]){ //A resposta é correta, então é colocada na pilha
        stackImagesGift.pop();
        imageGift = stackImagesGift.peek(); //Se for correta, é Zeus e Hercules
    } else {
        imageGift = stackImagesGift.peek(); //Se não é os lacaios de Hades
    }
    var divElement = document.createElement('div'); //Documento vai para a div
    divElement.innerHTML = imageGift;
    document.getElementById("lateral").appendChild(divElement); //coloca a div na lateral
};

this.calculatePowerLevel = function() {  // Checa as respostas selecionas 
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
};

function newFunction() {
    questions.Pergunta();
    loadImageGifts();
    loadCorrectAnswers();
}