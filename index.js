/* =========================================
   CONFIG
========================================= */

const FIVE_STAR_REVIEWS = [
  "One of the best multi-cuisine cafes in Raipur. Delicious food, cozy ambience, and friendly staff.",
  "Tashi's is my go-to restaurant in Raipur. Great taste, warm vibes, and amazing service.",
  "The food quality at Tashi's is excellent. Everything tasted fresh and perfectly prepared.",
  "Highly recommend Tashi's for a relaxing meal with family and friends. Wonderful experience overall.",
  "The staff at Tashi's was very polite and helpful. My dining experience was completely satisfying.",
  "Tashi's cafe offers a perfect cozy spot in Raipur. Food was tasty and the ambience was very inviting.",
  "Amazing multi-cuisine menu at Tashi's. We enjoyed everything from mains to desserts.",
  "The best casual dining spot in Raipur. Tashi's delivers great food and a pleasant atmosphere.",
  "I had a fantastic dinner at Tashi's. Every dish was flavorful and served with care.",
  "Tashi's has a great vibe for friends' hangouts and family dinners. The food never disappoints.",
  "The North Indian and Chinese options at Tashi's are excellent. Truly a multi-cuisine delight.",
  "Tashi's is a hidden gem in Raipur. Comfortable seating, friendly staff, and delicious food.",
  "Everything about Tashi's was perfect. The food, service, and atmosphere made my visit special.",
  "The menu at Tashi's is diverse and well-executed. Great quality and great value for money.",
  "Tashi's is a must-visit for food lovers in Raipur. The taste and presentation were top-notch.",
  "The staff at Tashi's went above and beyond to make our visit comfortable and enjoyable.",
  "Tashi's serves some of the best burgers, noodles, and curries in Raipur. Highly recommended.",
  "I love the cozy Himalayan vibe at Tashi's. It feels like a little escape in the city.",
  "Tashi's is perfect for a casual dinner or a weekend brunch. The food is consistently excellent.",
  "The attention to detail in Tashi's food is impressive. Every dish was well-prepared and tasty.",
  "Tashi's has become my favorite café in Raipur. Great food, chilled-out ambience, and good service.",
  "The customers at Tashi's are truly valued. The team is warm, professional, and attentive.",
  "Tashi's delivers a perfect café experience. Great taste, great service, great ambience.",
  "The multi-cuisine menu at Tashi's is fantastic. There's something for everyone.",
  "Tashi's is perfect for a relaxing evening with good food and good company.",
  "Tasty food, neat dining area, and well-mannered staff. Tashi's is a great find in Raipur.",
  "The food at Tashi's is consistently delicious. I keep coming back for more.",
  "Tashi's is a great place for quick meals and longer hangouts. The vibe is just right.",
  "The staff at Tashi's is very friendly and attentive. My family absolutely loved it there.",
  "Tashi's cafe has a wonderful vibe. The food is flavorful and served with care.",
  "Tashi's is a reliable spot in Raipur for quality food and a pleasant dining experience.",
  "I had a great lunch at Tashi's. The dishes were fresh, tasty, and fairly priced.",
  "Tashi's is a perfect spot for a casual date night. Nice ambience and great food.",
  "The menu at Tashi's is well-balanced. Indian, Chinese, and Continental options are all good.",
  "Tashi's is a great multi-cuisine café with a calming vibe. The food quality is excellent.",
  "I love the warm atmosphere at Tashi's. It feels welcoming and comfortable.",
  "Tashi's is a great choice for family meals and group gatherings. Everyone enjoyed the food.",
  "The taste and presentation at Tashi's are impressive. A truly enjoyable dining experience.",
  "Tashi's offers excellent value for money. Quality food, good service, and a nice place.",
  "Tashi's is a must-visit café in Raipur. The food, service, and ambience were all great."
];

const FOUR_STAR_REVIEWS = [
  "Good experience at Tashi's. Food was tasty and the ambience was pleasant.",
  "Nice casual dining spot in Raipur. The service was friendly and the food was good.",
  "Tashi's has a good multi-cuisine menu. Most dishes were well-prepared and tasty.",
  "The staff at Tashi's was polite and helpful. Overall a good visit.",
  "Food quality at Tashi's is good. The ambience is cozy and comfortable.",
  "Tashi's is a reliable place in Raipur for a decent meal. Good value for money.",
  "I had a good dining experience at Tashi's. The food was tasty and service was smooth.",
  "The multi-cuisine options at Tashi's are good. A few dishes were excellent.",
  "Tashi's has a nice vibe. The food was good and the service was friendly.",
  "Good place in Raipur for casual dining. The staff was supportive and the food was decent.",
  "The food at Tashi's was tasty. The ambience was pleasant and the service was good.",
  "Tashi's is a good spot for family meals. The staff was cooperative and the food was tasty.",
  "I liked the menu at Tashi's. Dishes were flavorful and well-presented.",
  "Tashi's offers good food and service. The ambience is comfortable and inviting.",
  "The staff at Tashi's was helpful and the food was nicely prepared.",
  "Tashi's is a nice place for a casual dinner. The food was good and the service was friendly.",
  "Tashi's serves decent multi-cuisine food. The vibe is cozy and welcoming.",
  "The dining experience at Tashi's was good. The food was tasty and service was smooth.",
  "Tashi's has a good selection of dishes. The food was fresh and well-prepared.",
  "The ambience at Tashi's is pleasant. The food and service were good overall.",
  "Tashi's is a good café in Raipur. The staff was friendly and the food was tasty.",
  "The food at Tashi's was well-prepared and flavorful. A good casual dining experience.",
  "Tashi's is a nice place to hang out. The food was good and the staff was supportive.",
  "The menu at Tashi's is varied. Most dishes were tasty and satisfying.",
  "Tashi's offers good quality food. The service was friendly and the ambience was comfortable.",
  "I had a good experience at Tashi's. The food and service were both solid.",
  "Tashi's has a nice casual dining vibe. The food was tasty and the staff was helpful.",
  "The dishes at Tashi's were well-prepared and tasty. The ambience was pleasant.",
  "Tashi's is a good place for quick meals. The food was decent and service was friendly.",
  "The staff at Tashi's was cooperative. The food was tasty and the service was smooth.",
  "Tashi's is a good spot for family dinners. The food was good and the vibe was cozy.",
  "The multi-cuisine menu at Tashi's is satisfying. Most dishes were tasty and well-prepared.",
  "Tashi's is a reliable place for casual dining in Raipur. Good food and service.",
  "The ambiance at Tashi's is warm. The food was good and the service was decent.",
  "Tashi's offers consistent quality. The food was tasty and the staff was friendly.",
  "The food at Tashi's was flavorful. The service and ambience were good overall.",
  "Tashi's is a good café for a relaxing meal. The staff was supportive and the food was tasty.",
  "The dishes at Tashi's were well-presented. The overall experience was good.",
  "Tashi's is a nice casual dining spot. The food was tasty and the staff was polite.",
  "Tashi's gives a good value for money. The food was good and the service was friendly."
];

const THREE_STAR_REVIEWS = [
  "The overall experience was satisfactory and the staff was cooperative.",
  "The food was decent and the service met basic expectations.",
  "Average experience overall with acceptable food quality.",
  "The staff was helpful and guided me when required.",
  "The menu at Tashi's was satisfactory for my needs.",
  "A reasonable dining experience overall.",
  "The restaurant provided acceptable service and food options.",
  "Good communication and support from the staff.",
  "The overall dining experience was decent.",
  "The food was fine and the experience was satisfactory.",
  "Reasonable food selection and customer service.",
  "The restaurant met basic expectations for a casual meal.",
  "An average but satisfactory dining experience.",
  "The staff was professional and supportive.",
  "Overall a fair experience dining at Tashi's."
];

const ONE_STAR_REVIEWS = [
  "The experience did not meet my expectations.",
  "The service quality needs significant improvement.",
  "I was disappointed with the overall dining experience.",
  "The dish I was looking for was not available and support was limited.",
  "The customer service could be much better.",
  "The overall experience was unsatisfactory.",
  "I expected better assistance and food guidance.",
  "There were challenges throughout the visit.",
  "The restaurant did not fully meet my expectations.",
  "The experience was below average and needs improvement.",
  "The support provided was not as helpful as expected.",
  "I expected a better customer experience overall.",
  "The food availability and service quality need improvement.",
  "Unfortunately my experience was not positive.",
  "There is considerable scope for improvement in customer service."
];

const TWO_STAR_REVIEWS = [
  "The experience could have been better overall.",
  "Some aspects of customer service need improvement.",
  "The food availability did not fully meet my expectations.",
  "There is room for improvement in customer guidance and support.",
  "The restaurant has potential but the overall experience was average.",
  "I expected a wider range of dish options.",
  "The staff was helpful but the experience could have been smoother.",
  "The overall dining experience was below expectations.",
  "Some dishes I was looking for were unavailable during my visit.",
  "The service quality could be improved further.",
  "I expected more detailed food guidance and recommendations.",
  "The experience was acceptable but there is scope for improvement.",
  "The restaurant could improve customer support and food availability.",
  "The overall value received was moderate compared to expectations.",
  "There is potential for improvement in the overall dining experience."
];




const GOOGLE_REVIEW_URL =
"https://g.page/r/CbD4dKK-IaYUEBE/review";



const RATING_LABELS = {
  1: "We're sorry to hear that 😔",
  2: "We appreciate your feedback 🙏",
  3: "Thank you for sharing your experience",
  4: "Great to hear! 😊",
  5: "Amazing! Thank you! 🚀"
};

/* =========================================
   REVIEW DATA
   (Will fill later)
========================================= */

const reviews = {
  1: ONE_STAR_REVIEWS,
  2: TWO_STAR_REVIEWS,
  3: THREE_STAR_REVIEWS,
  4: FOUR_STAR_REVIEWS,
  5: FIVE_STAR_REVIEWS
};

/* =========================================
   STATE
========================================= */

let selectedRating = null;
let selectedReview = null;

/* =========================================
   SCREEN HANDLER
========================================= */

function showScreen(id){

  document
    .querySelectorAll(".screen")
    .forEach(screen => {
      screen.classList.remove("active");
    });

  const target =
    document.getElementById(id);

  target.classList.add("active");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}

function goBack(){

  selectedReview = null;

  showScreen("screen-rating");

}

/* =========================================
   STAR LOGIC
========================================= */

const stars =
document.querySelectorAll(".star");

stars.forEach(star => {

  star.addEventListener("click", () => {

    const rating =
      Number(star.dataset.rating);

    setRating(rating);

  });

  star.addEventListener("mouseenter", () => {

    const rating =
      Number(star.dataset.rating);

    highlightStars(rating);

  });

});

document
.getElementById("stars")
.addEventListener("mouseleave", () => {

  if(selectedRating){
    highlightStars(selectedRating);
  }
  else{
    highlightStars(0);
  }

});

function highlightStars(rating){

  stars.forEach(star => {

    const current =
      Number(star.dataset.rating);

    star.classList.toggle(
      "lit",
      current <= rating
    );

  });

}

function setRating(rating){

  selectedRating = rating;

  highlightStars(rating);

  const label =
  document.getElementById(
    "ratingLabel"
  );

  label.textContent =
    RATING_LABELS[rating];

  const star =
  document.querySelector(
    `.star[data-rating="${rating}"]`
  );

  star.classList.remove("pop");

  void star.offsetWidth;

  star.classList.add("pop");

  setTimeout(() => {

    buildReviewScreen(rating);

    showScreen("screen-reviews");

  },400);

}

/* =========================================
   RANDOM REVIEW PICKER
========================================= */

function getRandomReviews(
  reviewPool,
  count = 5
){

  const shuffled =
    [...reviewPool];

  for(
    let i = shuffled.length - 1;
    i > 0;
    i--
  ){

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [shuffled[i], shuffled[j]]
      =
    [shuffled[j], shuffled[i]];

  }

  return shuffled.slice(0,count);

}

/* =========================================
   BUILD REVIEW SCREEN
========================================= */

function buildReviewScreen(rating){

  const display =
  document.getElementById(
    "ratingDisplay"
  );

  const starsHtml =
  Array.from(
    {length:5},
    (_,i)=>
    `<span style="color:${
      i < rating
      ? '#f59e0b'
      : '#cbd5e1'
    }">★</span>`
  ).join("");

  display.innerHTML = `
    <span class="stars-mini">
      ${starsHtml}
    </span>

    <span class="rating-text">
      ${rating} Star
    </span>
  `;

  const list =
  document.getElementById(
    "reviewList"
  );

  list.innerHTML = "";

  selectedReview = null;

  document.getElementById(
    "submitBtn"
  ).disabled = true;

  const selectedReviews =
  getRandomReviews(
    reviews[rating],
    5
  );

  selectedReviews.forEach(
    (text,index)=>{

      const card =
      document.createElement(
        "div"
      );

      card.className =
        "review-card";

      card.style.animationDelay =
        `${index * 0.06}s`;

      card.innerHTML =
      `<p>${text}</p>`;

      card.onclick = ()=>{

        document
        .querySelectorAll(
          ".review-card"
        )
        .forEach(card=>{
          card.classList.remove(
            "selected"
          );
        });

        card.classList.add(
          "selected"
        );

        selectedReview = text;

        document
        .getElementById(
          "submitBtn"
        )
        .disabled = false;

      };

      list.appendChild(card);

    }
  );

}

/* =========================================
   SUBMIT REVIEW
========================================= */

async function submitReview(){

  if(!selectedReview){
    return;
  }

  const btn =
  document.getElementById(
    "submitBtn"
  );

  btn.disabled = true;

  btn.innerHTML = `
    <span class="btn-icon">
      ⏳
    </span>

    <span class="btn-text">
      Copying...
    </span>
  `;

  try{

    await navigator.clipboard
      .writeText(
        selectedReview
      );

    document
    .getElementById(
      "reminderText"
    )
    .textContent =
      selectedReview;

    showScreen(
      "screen-success"
    );

    setTimeout(()=>{

      window.open(
        GOOGLE_REVIEW_URL,
        "_blank"
      );

    },600);

    showToast(
      "✅ Review copied successfully"
    );

  }
  catch(error){

    console.error(error);

    document
    .getElementById(
      "reminderText"
    )
    .textContent =
      selectedReview;

    showScreen(
      "screen-success"
    );

    showToast(
      "📋 Please copy review manually"
    );

  }

  btn.disabled = false;

  btn.innerHTML = `
    <span class="btn-icon">
      📋
    </span>

    <span class="btn-text">
      Copy & Open Google Reviews
    </span>

    <span class="btn-arrow">
      →
    </span>
  `;

}

/* =========================================
   OPEN AGAIN
========================================= */

function openGoogleAgain(){

  if(selectedReview){

    navigator.clipboard
    .writeText(
      selectedReview
    )
    .catch(()=>{});

  }

  window.open(
    GOOGLE_REVIEW_URL,
    "_blank"
  );

  showToast(
    "📋 Review copied again"
  );

}

/* =========================================
   TOAST
========================================= */

function showToast(message){

  const toast =
  document.getElementById(
    "toast"
  );

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  setTimeout(()=>{

    toast.classList.remove(
      "show"
    );

  },3000);

}

