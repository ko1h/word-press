///back-end logic



///font-end logic
$(document).ready(function() {
  $("#wordPress").submit(function(event) {
    event.preventDefault();
    console.log("I am working")
    var sentences = $("#wordInput").val().split(" ");
    console.log(sentences)
    
    var newSentences =[];

    sentences.map(function(sentence) {
      if (sentence.length >= 3) {
        newSentences.push(sentence);
        newSentences.push(" ");
        console.log(newSentences)
      }
    });
    newSentences.reverse();
    newSentences.join();
    $("ul").append(newSentences);
  });
});
