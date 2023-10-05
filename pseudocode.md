# Procedural

##### Discussion

1. Understand the problem
> what is a Turn?
> what is a Marker/symbol?
> how to represent a Board with State?
>> array? 
>>> [0, 1, ... ]?
>>> ["", ]? so it's an empty square?
>>> [ ]
>>> connect each event to an index?
>>>> stacked array?
>>> multidimensional array
>>>> 3x3 board 

2. Follow the Process


3. Sandbox "small tests"
> can I simply change a turn?
>> toggle it off and on?
>> make one or two squares to test toggling between turns
>>> make a marker show with a click event
>>>> can click anywhere and not just the first open space
>> turn = false OR turn = !turn 
> switch cases?
> strings? (this might be hard to lift)


4. ?? Win Condition 
> stack the some method and every method? 
> fill?
> map?
> data
> there should be 8 win conditions 


container
    row
        col
            tile id=0


##### On my own

> What do I need?

>> grid for the board
>> 2 symbols to represent the 2 players
>> toggle between players (and let them know it's their turn)
>> restart game button
>> display who wins or if there is a draw
>> click handler in each tile/square to have the symbols show up
>> 8 different win conditions: 3 vertical, 3 horizontal, and 2 diagonal
>>> or draw when there are no more moves left (all spaces filled with no win)
>> stay within one div in HTML 
>> title for the game

> IF (big if) i finish early 
>> have players enter their name (input box)
>> connect to local storage so game will not end if refreshed??