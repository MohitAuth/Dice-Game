var scores, roundScore, activePlayer;

init();

// document.querySelector('#current--' + activePlayer ).textContent = dice;

 $(document).ready(function(){
    init();
     

    $('.btn--roll').click(function(){
        var dice = Math.floor(Math.random() * 6) + 1;
        
        $('.dice').css('display','block');
        $('.dice').attr('src','dice-'+dice+'.png');
    

        if(dice !== 1){
                roundScore += dice;
                $('#current--'+activePlayer).text(roundScore);
        }else{
            nextPlayer();
            
            }
        });


    $('.btn--hold').click(function(){
        scores[activePlayer] += roundScore;
            $('#score--'+activePlayer).text(scores[activePlayer]);
            

            if(scores[activePlayer] >= 50){
                $('#name--'+activePlayer).text('Winner!!!');
                $('.btn--roll').css('display','none');
                $('.btn--hold').css('display','none');
            } else{
                nextPlayer();
            }
        });

                $('.btn--new').click(function(){
                    init();
                    $('.btn--roll').css('display','block');
                $('.btn--hold').css('display','block');
                });
            
    
});

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    roundScore = 0;

    $('#current--0').text(0);
    $('#current--1').text(0);


};

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    $('#score--0').text(0);
     $('#score--1').text(0);
     $('#current--0').text(0);
     $('#current--1').text(0);

    $('.dice').css('display','none');

    $('#name--0').text('Player 1');
    $('#name--1').text('Player 2');

}