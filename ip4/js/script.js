var turn = 0; // 0 = human, 1 = computer
var AC = 0;
var AC_saved = 0;
var BC = 0;
var BC_saved = 0;
var ra = 0;
var rb = 0;
function CheckWin()
{
var p1c = document.F.AC.value;
var p2c = document.F.BC.value;
if (p1c > 99) 
{ alert("You have won!"); }
if (p2c > 99) 
{ alert("The computer has won!"); }
}

function Roll1()
{
if (turn == 1)
{
alert("You are a cheater! It is the computer's turn!");
return;
}
var da1 = Math.floor(Math.random()*6)+1;
var da2 = Math.floor(Math.random()*6)+1;
BC_saved = eval(document.F.BC.value);
document.F.IA.value = eval(document.F.IA.value) + 1;
document.F.IB.value = "0";
rb = 0;
document.F.DA1.value = da1;
document.F.DA2.value = da2;
var sa = da1 + da2;
ra = ra + sa;
if (da1 == 1 | da2 == 1)
{ 
alert("You rolled a 1! Your turn has ended\nClick on the Computer's Button"); 
turn = 1;
sa = 0; ra = 0; 
document.F.AC.value = AC_saved;
}
if (da1 == 1 && da2 == 1)
{ 
alert("Double ONES! You are set to zero and your turn has ended"); 
sa = 0; ra = 0; document.F.AC.value = 0;
turn = 1;
}
document.F.AR.value = ra;
document.F.SA.value = sa;
document.F.AC.value = eval(document.F.AC.value) + sa;
CheckWin();
}

function Roll2()
{
AC_saved = eval(document.F.AC.value);
var cc = 2 + Math.floor(2 * Math.random());
for (c=0; c<cc; c++)
{
var db1 = Math.floor(Math.random()*6)+1;
var db2 = Math.floor(Math.random()*6)+1;
document.F.IA.value = "0";
document.F.IB.value = eval(document.F.IB.value) + 1;
document.F.DB1.value = db1;
document.F.DB2.value = db2;
var sb = db1 + db2;
rb = rb + sb;
if (db1 == 1 && db2 == 1)
{ 
alert("Double ONES! The computer's score is set to zero"); 
sb = 0; rb = 0; document.F.BC.value = 0; c = cc;
}
else if (db1 == 1 | db2 == 1)
{ 
alert("The Computer rolled a one!");
sb = 0; rb = 0; 
document.F.BC.value = BC_saved; c = cc;
}
document.F.SB.value = sb;
document.F.BR.value = rb;
document.F.BC.value = eval(document.F.BC.value) + sb;
}
alert("The computer has completed its turn. It's your move");
turn = 0;
CheckWin();
}