
let deck = [];
let cards = [{"id": 1, "title": "Card 1", "message": "Oracle message for card 1. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 2, "title": "Card 2", "message": "Oracle message for card 2. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 3, "title": "Card 3", "message": "Oracle message for card 3. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 4, "title": "Card 4", "message": "Oracle message for card 4. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 5, "title": "Card 5", "message": "Oracle message for card 5. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 6, "title": "Card 6", "message": "Oracle message for card 6. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 7, "title": "Card 7", "message": "Oracle message for card 7. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 8, "title": "Card 8", "message": "Oracle message for card 8. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 9, "title": "Card 9", "message": "Oracle message for card 9. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 10, "title": "Card 10", "message": "Oracle message for card 10. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 11, "title": "Card 11", "message": "Oracle message for card 11. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 12, "title": "Card 12", "message": "Oracle message for card 12. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 13, "title": "Card 13", "message": "Oracle message for card 13. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 14, "title": "Card 14", "message": "Oracle message for card 14. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 15, "title": "Card 15", "message": "Oracle message for card 15. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 16, "title": "Card 16", "message": "Oracle message for card 16. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 17, "title": "Card 17", "message": "Oracle message for card 17. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 18, "title": "Card 18", "message": "Oracle message for card 18. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 19, "title": "Card 19", "message": "Oracle message for card 19. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 20, "title": "Card 20", "message": "Oracle message for card 20. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 21, "title": "Card 21", "message": "Oracle message for card 21. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 22, "title": "Card 22", "message": "Oracle message for card 22. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 23, "title": "Card 23", "message": "Oracle message for card 23. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 24, "title": "Card 24", "message": "Oracle message for card 24. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 25, "title": "Card 25", "message": "Oracle message for card 25. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 26, "title": "Card 26", "message": "Oracle message for card 26. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 27, "title": "Card 27", "message": "Oracle message for card 27. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 28, "title": "Card 28", "message": "Oracle message for card 28. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 29, "title": "Card 29", "message": "Oracle message for card 29. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 30, "title": "Card 30", "message": "Oracle message for card 30. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 31, "title": "Card 31", "message": "Oracle message for card 31. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 32, "title": "Card 32", "message": "Oracle message for card 32. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 33, "title": "Card 33", "message": "Oracle message for card 33. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 34, "title": "Card 34", "message": "Oracle message for card 34. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 35, "title": "Card 35", "message": "Oracle message for card 35. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 36, "title": "Card 36", "message": "Oracle message for card 36. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 37, "title": "Card 37", "message": "Oracle message for card 37. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 38, "title": "Card 38", "message": "Oracle message for card 38. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 39, "title": "Card 39", "message": "Oracle message for card 39. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 40, "title": "Card 40", "message": "Oracle message for card 40. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 41, "title": "Card 41", "message": "Oracle message for card 41. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 42, "title": "Card 42", "message": "Oracle message for card 42. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 43, "title": "Card 43", "message": "Oracle message for card 43. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 44, "title": "Card 44", "message": "Oracle message for card 44. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 45, "title": "Card 45", "message": "Oracle message for card 45. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 46, "title": "Card 46", "message": "Oracle message for card 46. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 47, "title": "Card 47", "message": "Oracle message for card 47. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 48, "title": "Card 48", "message": "Oracle message for card 48. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 49, "title": "Card 49", "message": "Oracle message for card 49. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 50, "title": "Card 50", "message": "Oracle message for card 50. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 51, "title": "Card 51", "message": "Oracle message for card 51. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}, {"id": 52, "title": "Card 52", "message": "Oracle message for card 52. ให้พิจารณาความหมายเชิงปัญญาและการเติบโตภายใน"}];

function shuffleDeck(){
deck = [...Array(52).keys()].map(x=>x+1);
deck.sort(()=>Math.random()-0.5);
}

shuffleDeck();

function drawCard(){
if(deck.length===0){
alert("ไพ่ถูกเปิดครบแล้ว กรุณาเริ่มสำรับใหม่");
return;
}

let n = deck.pop();

showCard(n);
}

function showCard(n){

let card = cards[n-1];

document.getElementById("cardTitle").innerText = card.title;
document.getElementById("cardText").innerText = card.message;
document.getElementById("cardNumber").innerText = "Card Number : "+n;

document.getElementById("cardImage").src="images/card"+n+".jpg";

document.getElementById("cardInner").classList.add("flip");

}

function resetDeck(){
shuffleDeck();
document.getElementById("cardInner").classList.remove("flip");
document.getElementById("cardTitle").innerText="Tap to Draw";
document.getElementById("cardText").innerText="สำรับถูกรีเซ็ตแล้ว";
document.getElementById("cardImage").src="images/back.jpg";
document.getElementById("cardNumber").innerText="";
}

function dailyCard(){
let today = new Date().toDateString();
let stored = localStorage.getItem("oracleDaily");

if(stored){
let data = JSON.parse(stored);
if(data.date===today){
showCard(data.card);
return;
}
}

let n = Math.floor(Math.random()*52)+1;

localStorage.setItem("oracleDaily", JSON.stringify({
date:today,
card:n
}));

showCard(n);

}
