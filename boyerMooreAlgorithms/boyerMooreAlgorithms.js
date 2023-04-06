//Metin ve kelime desenini parametre olarak alır ve kelimenin metin içinde kaç kez geçtiğini sayar.
function boyerMoore(text, pattern) {
    let count = 0; //Kelimenin kaç kez geçtiğini tutmak için bir sayaç.
    let result = []; //Kelimenin geçtiği konumları tutmak için bir dizi.
    let n = text.length; //Metnin uzunluğu.
    let m = pattern.length; //Kelimenin uzunluğu.
    let last = {}; //Metindeki her karakterin son görünümünü depolayan bir nesne.
    for (let i = 0; i < n; i++) {
      last[text[i]] = -1;
    }
    for (let i = 0; i < m; i++) {
      last[pattern[i]] = i;
    }
    let i = m - 1;
    let j = m - 1;
    while (i < n) {
        //Metin içinde gezinir.
      if (text[i] == pattern[j]) {
        //Kelimenin bir harfi metindeki harfe eşitse:
        if (j == 0) {
            //Eğer kelimenin sonuna gelinmişse, kelimenin geçtiği bir konum olarak kaydedilir ve sayacı artırılır. Sonra i, kelimenin uzunluğu kadar artırılır ve j sıfırlanır.
          result.push(i);
          count++;
          i = i + m;
          j = m - 1;
        } else {
            //Aksi takdirde, j ve i birer azaltılır ve kontrol devam eder.
          i--;
          j--;
        }
      } else {
        //Eğer harfler eşleşmezse:
        let k = last[text[i]]; //k harfin metindeki son görünümünü alır.
        i = i + m - Math.min(j, 1 + k); //i, sonuç vermeyecek kadar atlayarak kelimeyi metinde bir sonraki konuma taşır.
        j = m - 1; // j sıfırlanır.
      }
    }
    return count; // Kelimenin geçtiği toplam sayı döndürülür.
  }
  
  let text = document.getElementById("myText").innerHTML;
  let words = ["upon", "sigh","Dormouse","jury-box","swim"];
  
  for(let i=0; i<words.length; i++) {
    let count = boyerMoore(text, words[i]);
    console.log(words[i] + " kelimesi " + count + " kez geçiyor.");
  }