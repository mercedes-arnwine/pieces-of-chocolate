var piecesOfChoco = Number(prompt("How many pieces of chocolate would you like? (0-10) "));

  var leftOverChoco = 10 - piecesOfChoco;

  if (leftOverChoco === 10) {
  alert("You didn't want any chocolate?");
  } else if (leftOverChoco >= 6)  {
  alert(
    `There are ${leftOverChoco} pieces of chocolate left. Only a few left!`
    );
  } else if (leftOverChoco >= 1)  {
  alert(`There are ${leftOverChoco} pieces of chocolate left. Have some more!`);
  else {
    alert("You ate all the chocolate!!! ");
  }
