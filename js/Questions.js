var perguntas; 
var Respostas; 

class Questions {
    constructor() {

        this.Pergunta = function () {
            this.pergunta = null;
            this.opcao1 = null;
            this.opcao2 = null;
            this.opcao3 = null;
            this.opcao4 = null;
            this.opcao5 = null;
            this.resposta = null;
        };

        perguntas = new fila();
        Respostas = new ListaEncadeada();

        pergunta_1 = new Pergunta();
        pergunta_1.pergunta = "1) Quem era o Deus mais jovem da primeira geração do Olimpo?";
        Respostas.adiciona("Zeus");
        Respostas.adiciona("Hades");
        Respostas.adiciona("Poseidon");
        Respostas.adiciona("Hefesto");
        Respostas.adiciona("Hera");
        pergunta_1.opcao1 = Respostas.procura(0); //Certo
        pergunta_1.opcao2 = Respostas.procura(1);
        pergunta_1.opcao3 = Respostas.procura(2);
        pergunta_1.opcao4 = Respostas.procura(3);
        pergunta_1.opcao5 = Respostas.procura(4);
        pergunta_1.resposta = "1";
        perguntas.insert(pergunta_1);

        pergunta_2 = new Pergunta();
        pergunta_2.pergunta = "2) Afrodite, uma das Deusas mais conhecida da mitologia grega. Oque ela representava?";
        Respostas.adiciona("Deusa da Paz");
        Respostas.adiciona("Do amor");
        Respostas.adiciona("Da sabedoria");
        Respostas.adiciona("Da força");
        Respostas.adiciona("Do lar");
        pergunta_2.opcao1 = Respostas.procura(5);
        pergunta_2.opcao2 = Respostas.procura(6); //Certo
        pergunta_2.opcao3 = Respostas.procura(7);
        pergunta_2.opcao4 = Respostas.procura(8);
        pergunta_2.opcao5 = Respostas.procura(9);
        pergunta_2.resposta = "2";
        perguntas.insert(pergunta_2);

        pergunta_3 = new Pergunta();
        pergunta_3.pergunta = "3) Atena, considerava dois animais sagrados. Quais eram?";
        Respostas.adiciona("Cobra e Cabra");
        Respostas.adiciona("Cobra e Cavalo");
        Respostas.adiciona("Cavalo e Cabra");
        Respostas.adiciona("Coruja e Cobra");
        Respostas.adiciona("Coruja e Cavalo");
        pergunta_3.opcao1 = Respostas.procura(10);
        pergunta_3.opcao2 = Respostas.procura(11);
        pergunta_3.opcao3 = Respostas.procura(12);
        pergunta_3.opcao4 = Respostas.procura(13); //Certo
        pergunta_3.opcao5 = Respostas.procura(14);
        pergunta_3.resposta = "4";
        perguntas.insert(pergunta_3);

        pergunta_4 = new Pergunta();
        pergunta_4.pergunta = "4) Conhecidas como górgonas, que eram duas irmãs de Medusa. Quem são elas?";
        Respostas.adiciona("Esteno e Euríale");
        Respostas.adiciona("Héstia e Hécate");
        Respostas.adiciona("Josefina e Aurelia");
        Respostas.adiciona("Éter e Hemera");
        Respostas.adiciona("Metis e Temis");
        pergunta_4.opcao1 = Respostas.procura(15); //Certo
        pergunta_4.opcao2 = Respostas.procura(16);
        pergunta_4.opcao3 = Respostas.procura(17);
        pergunta_4.opcao4 = Respostas.procura(18);
        pergunta_4.opcao5 = Respostas.procura(19);
        pergunta_4.resposta = "1";
        perguntas.insert(pergunta_4);

        pergunta_5 = new Pergunta();
        pergunta_5.pergunta = "5) Ulisses invadiu uma ilha de um ciclope. Qual era o nome do ciclope";
        Respostas.adiciona("Cronos");
        Respostas.adiciona("Brontes");
        Respostas.adiciona("Arges");
        Respostas.adiciona("Estéropes");
        Respostas.adiciona("Polifemo");
        pergunta_5.opcao1 = Respostas.procura(20);
        pergunta_5.opcao2 = Respostas.procura(21);
        pergunta_5.opcao3 = Respostas.procura(22);
        pergunta_5.opcao4 = Respostas.procura(23);
        pergunta_5.opcao5 = Respostas.procura(24); //Certo
        pergunta_5.resposta = "5";
        perguntas.insert(pergunta_5);

        pergunta_6 = new Pergunta();
        pergunta_6.pergunta = "6) Quem casou com Poseidon";
        Respostas.adiciona("Hera");
        Respostas.adiciona("Héstia");
        Respostas.adiciona("Ártemis");
        Respostas.adiciona("Anfitríte");
        Respostas.adiciona("Deméter");
        pergunta_6.opcao1 = Respostas.procura(25);
        pergunta_6.opcao2 = Respostas.procura(26);
        pergunta_6.opcao3 = Respostas.procura(27);
        pergunta_6.opcao4 = Respostas.procura(28); //Certo
        pergunta_6.opcao5 = Respostas.procura(29);
        pergunta_6.resposta = "4";
        perguntas.insert(pergunta_6);

        pergunta_7 = new Pergunta();
        pergunta_7.pergunta = "7) Hermes, teve um filho com uma deusa. Quem era ela?";
        Respostas.adiciona("Hera");
        Respostas.adiciona("Afrodite");
        Respostas.adiciona("Medusa");
        Respostas.adiciona("Hécate");
        Respostas.adiciona("Deméter");
        pergunta_7.opcao1 = Respostas.procura(30);
        pergunta_7.opcao2 = Respostas.procura(31); //correta
        pergunta_7.opcao3 = Respostas.procura(32);
        pergunta_7.opcao4 = Respostas.procura(33);
        pergunta_7.opcao5 = Respostas.procura(34);
        pergunta_7.resposta = "2";
        perguntas.insert(pergunta_7);

        pergunta_8 = new Pergunta();
        pergunta_8.pergunta = "8) quem construiu as muralhas ao redor de Troia?";
        Respostas.adiciona("Apolo e Atena");
        Respostas.adiciona("Ártemis e Hera");
        Respostas.adiciona("Zeus e Hades");
        Respostas.adiciona("Hércules e Hades");
        Respostas.adiciona("Apolo e Poseidon");
        pergunta_8.opcao1 = Respostas.procura(35);
        pergunta_8.opcao2 = Respostas.procura(36);
        pergunta_8.opcao3 = Respostas.procura(37);
        pergunta_8.opcao4 = Respostas.procura(38);
        pergunta_8.opcao5 = Respostas.procura(39); //Certo
        pergunta_8.resposta = "5";
        perguntas.insert(pergunta_8);

        pergunta_9 = new Pergunta();
        pergunta_9.pergunta = "9) Atena e Poseidon, entraram em uma batalha por uma cidade. Quem venceu esta batalha?";
        Respostas.adiciona("Atena");
        Respostas.adiciona("Poseidon");
        Respostas.adiciona("Zeus");
        Respostas.adiciona("Os dois");
        Respostas.adiciona("Nenhum, pois outro deus interveio e derrotou ambos");
        pergunta_9.opcao1 = Respostas.procura(40); //Certo
        pergunta_9.opcao2 = Respostas.procura(41);
        pergunta_9.opcao3 = Respostas.procura(42);
        pergunta_9.opcao4 = Respostas.procura(43);
        pergunta_9.opcao5 = Respostas.procura(44);
        pergunta_9.resposta = "1";
        perguntas.insert(pergunta_9);

        pergunta_10 = new Pergunta();
        pergunta_10.pergunta = "10) Qual é o/a primeiro(a) deus(a) a nascer?";
        Respostas.adiciona("Hera");
        Respostas.adiciona("Zeus");
        Respostas.adiciona("Poseidon");
        Respostas.adiciona("Átermis");
        Respostas.adiciona("Héstia");
        pergunta_10.opcao1 = Respostas.procura(45);
        pergunta_10.opcao2 = Respostas.procura(46);
        pergunta_10.opcao3 = Respostas.procura(47);
        pergunta_10.opcao4 = Respostas.procura(48);
        pergunta_10.opcao5 = Respostas.procura(49); //Certo
        pergunta_10.resposta = "5";
        perguntas.insert(pergunta_10);
    };
}