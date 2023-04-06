## Boyer-Moore Hakkında

Boyer-Moore algoritması, bir metin içinde bir desenin aranması için kullanılan etkili bir string eşleme algoritmasıdır. Bu algoritma, birçok diğer string eşleme algoritmasından daha hızlı çalışır ve özellikle uzun desenler için daha iyi performans gösterir.

## Boyer-Moore Çalışma Zaman Hesabı

Boyer-Moore algoritmasının çalışma zamanı, metin ve desenin uzunluğuna ve desenin tekrarlanan karakterlerinin sayısına bağlıdır. _En iyi durumda_, algoritmanın çalışma zamanı lineerdir, yani **O(n/m)**, n metnin uzunluğu ve m desenin uzunluğudur. Bu en iyi durum, desenin metinde nadir bir şekilde göründüğü ve desenin en son karakteri eşleştiğinde gerçekleşir.

_En kötü durumda_, algoritmanın çalışma zamanı **O(nm)**'dir. Bu, desenin her karakterinin metinde eşleşmediği durumlarda gerçekleşir. Ancak Boyer-Moore algoritması, desenin her karakterini tek tek karşılaştırmak yerine, deseni metinde ileri geri hareket ettirerek eşleştirir ve bu sayede genellikle diğer algoritmalardan daha hızlı çalışır.

_Ortalama durumda_, Boyer-Moore algoritmasının çalışma zamanı, en iyi ve en kötü durum arasındadır ve **O(n+m)** 'dir. Bu, genellikle metindeki desenin orta derecede tekrar eden karakterlere sahip olduğu durumlarda gerçekleşir.

Boyer-Moore algoritmasının performansını iyileştirmek için, desendeki karakterleri frekanslarına göre bir tablo halinde tutar. Bu tablo, desendeki her karakterin metinde nerede eşleşeceğini tahmin etmek için kullanılır. Ayrıca, deseni metinde ileri geri hareket ettirerek eşleştirirken, desendeki son karakterden başlayarak geriye doğru hareket ederek daha hızlı bir şekilde eşleştirme yapar.

Sonuç olarak, Boyer-Moore algoritması, birçok diğer string eşleme algoritmasından daha hızlı çalışır ve özellikle uzun desenler için daha iyi performans gösterir. _En iyi durumda_ **lineer**, _en kötü durumda_ **O(nm)** ve _ortalama durumda_ **O(n+m)** çalışma zamanı vardır. Desendeki karakterlerin frekanslarına göre bir tablo tutarak ve deseni metinde geriye doğru hareket ettirerek eşleştirerek performansı iyileştirir.

## Uygulama Nasıl Çalışıyor?

Boyer-Moore algoritması kullanılarak metin.html dosyası içindeki “upon, Dormouse, sigh, jury-box, swim” kelimelerinin kaç kez tekrar ettiğini bulduğumuz bir uygulamadır. Bu uygulamayı pratik bir şekilde çalıştırmak için:

1. İlk olarak boyerMooreAlgorithms dosyasını indirmeniz gerekmektedir
2. boyerMooreAlgorithms dosyasının içindeki boyerMooreAlgorithms.js ve metin.html dosyalarını bilgisayarınızda olan IDE‘lerden biriyle açmanız gerekmektedir.
3. Bu dosyaları açtıktan sonra boyerMooreAlgorithms.js dosyasını konsolda çalıştırmanız gerekmektedir.
4. Bu işlemleri yaptıktan sonra ekranda hangi kelimeden kaç defa metinde tekrar ettiğini görebilirsiniz.
