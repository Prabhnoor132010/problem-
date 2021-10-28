Player1_name=localStorage.getItem("Player1_name");
Player2_name=localStorage.getItem("Player2_name");
Player1_score=0;
Player2_score=0;
document.getElementById("player1_name").innerHTML=Player1_name+"=";
document.getElementById("player2_name").innerHTML=Player2_name+"=";
document.getElementById("player1_score").innerHTML=Player1_score;
document.getElementById("player2_score").innerHTML=Player2_score;
document.getElementById("player_Q").innerHTML="Question turn - "+ Player1_name;
 document.getElementById("player_A").innerHTML="Answer turn - "+ Player2_name;
 function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);
    char1=word.charAt(1);
    console.log(char1);
    chara=Math.floor(word.length/2);
    char2=word.charAt(chara);
    console.log(char2);

    charac=word.length-1;
    char3=word.charAt(charac);
    console.log(char3);
 
    remove1=word.replace(char1,"_");
    remove2=remove1.replace(char2,"_");
    remove3=remove2.replace(char3,"_");
    console.log(remove3);
    Q_word="<h4 id='word_display'>  Q. "+remove3+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'> CHECK</button>";
    row=Q_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value = " ";
}
 answer_turn="player2";
 question_turn="player1";
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case  " + answer);
    if (answer==word) {
        if (answer_turn=="player1") {
        Player1_score=Player1_score+1;
        document.getElementById("player1_score").innerHTML=Player1_score;           
        }
        else{
            Player2_score=Player2_score+1;
            document.getElementById("player2_score").innerHTML=Player2_score;           
            }

    }
        if (question_turn=="player1") {
            question_turn=="player2";
         document.getElementById("player_Q").innerHTML="question turn-  " + Player2_name;           
        }
        else{
            question_turn=="player1";
            document.getElementById("player_Q").innerHTML="question turn-  " + Player1_name;           
            }
        if (answer_turn=="player1") {
            answer_turn=="player2";
            document.getElementById("player_A").innerHTML="answer turn-  " + Player2_name;           
            }
        else{
            answer_turn=="player1";
            document.getElementById("player_A").innerHTML="answer turn-  " + Player1_name;           
                }
       document.getElementById("output").innerHTML="";       
           
    }
