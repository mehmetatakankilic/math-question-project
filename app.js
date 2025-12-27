/**
 * --- SABİTLER VE SEÇİCİLER (CONSTANTS & SELECTORS) ---
 * DOM elemanlarını ve doğru cevap anahtarını burada tanımlıyoruz.
 */
const correctAnswers = ['8', '10', '3', '25'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result'); 
const successMessage = document.querySelector('#successMessage');
const submitButton = document.querySelector('.btn');

/**
 * --- ETKİNLİK DİNLEYİCİLERİ (EVENT LISTENERS) ---
 * Form gönderildiği an (submit) çalışacak ana fonksiyon.
 */
form.addEventListener('submit', e => {
    // 1. Sayfanın varsayılan yenilenme davranışını engelle
    e.preventDefault();

    let score = 0;
    
    // 2. Kullanıcının seçtiği cevapları bir diziye al
    const userAnswers = [
        form.q1.value, 
        form.q2.value, 
        form.q3.value, 
        form.q4.value
    ];

    // 3. Cevapları kontrol et ve puanı hesapla
    userAnswers.forEach((answer, index) => {
        // Eğer cevap, anahtardaki doğru cevapla eşleşiyorsa puan ekle
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // 4. Sonuçları Ekrana Yazdır
    // Sonuç alanındaki 'd-none' sınıfını kaldırarak görünür yap
    result.classList.remove('d-none');
    
    // Puanı yüzdelik alana yaz
    result.querySelector('#percentage').textContent = `${score}%`;

    // 5. Tam Puan Kontrolü
    // Eğer kullanıcı 100 aldıysa tebrik mesajını göster ve butonu pasif yap
    if (score === 100) {
        successMessage.classList.remove('d-none');
        submitButton.setAttribute('disabled', '');
    }
});
















//     let puan = 0;
//     const bastir = setInterval(()=>{

//      bu result.querySelector seçmiştik yukarıda result adlı bir değişken onun içinden seçmek için ;
//         result.querySelector('#percentage').textContent = `${puan}%`;
//         if(puan == score){
//             clearInterval(bastir);
//         }

//         else{
//             puan++;
//         }

//     },10)


// })

// önemli içerisindeki yazmış olduğumuz kod 1 kere çalışır.
// setTimeout(()=>{
//     console.log('Can');
// },2000)



// sürekli çalışır 1 sn de 1 sn
// setInterval(()=>{
//     console.log("Atakan")
// },1000)


// örnek
// let i = 0;
// const bastir = setInterval(()=>{
//     console.log("Atakan")
//     i++;
//     if(i==4){
//         clearInterval(bastir)
//     }
// },1000)