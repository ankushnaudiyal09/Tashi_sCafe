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
  "Tashi's is a must-visit café in Raipur. The food, service, and ambience were all great.",
  "The Himalayan-inspired decor at Tashi's creates such a unique and relaxing dining atmosphere.",
  "Tashi's pasta dishes are absolutely phenomenal. Creamy, flavorful, and perfectly cooked every time.",
  "The活力 energy at Tashi's during evening hours is perfect for catching up with friends over coffee.",
  "I've tried many cafes in Raipur but Tashi's stands out for its consistent quality and warm service.",
  "The mocktails at Tashi's are creative and delicious. Perfect complement to the amazing food menu.",
  "Tashi's breakfast options are underrated. The pancakes and parathas are both excellent choices.",
  "The vegetarian options at Tashi's are extensive and delicious. Great for groups with mixed dietary needs.",
  "Tashi's dessert menu is a must-try. The brownies and ice cream sundaes are absolutely divine.",
  "The portion sizes at Tashi's are generous and the prices remain very reasonable for the quality.",
  "Tashi's outdoor seating area is perfect for pleasant evenings. The lighting and decor are beautiful.",
  "The chef at Tashi's clearly knows what they're doing. Every dish shows skill and attention to detail.",
  "Tashi's coffee is surprisingly good for a multi-cuisine cafe. The espresso drinks are well-crafted.",
  "The staff remembered my name and preferences from previous visits. This level of personal care is rare.",
  "Tashi's maintains excellent hygiene standards throughout the cafe. The dining area is always spotless.",
  "The chicken curry at Tashi's is the best I've had in Raipur. Rich, flavorful, and perfectly spiced.",
  "Tashi's is the perfect spot for celebrating small milestones with close friends or family members.",
  "The fusion items on Tashi's menu are creative and delicious. They blend flavors beautifully.",
  "Tashi's acoustics are well-designed. You can have conversations without feeling overwhelmed by noise.",
  "The grilled sandwiches at Tashi's are crispy, cheesy, and absolutely satisfying. Perfect light meal option.",
  "Tashi's management clearly cares about customer satisfaction. They listen to feedback and improve.",
  "The paneer tikka at Tashi's is melt-in-the-mouth tender with perfect char and flavor balance.",
  "Tashi's stays open late enough for post-movie dinners. The service remains consistent even during late hours.",
  "The fresh juices at Tashi's are made to order and taste incredibly fresh. Great healthy option.",
  "Tashi's birthday celebrations are special. The team makes you feel extra welcomed and celebrated.",
  "The Chinese section at Tashi's rivals dedicated Chinese restaurants. Hakka noodles are outstanding.",
  "Tashi's ambient lighting creates such a romantic and peaceful atmosphere for evening dining.",
  "The staff at Tashi's is knowledgeable about the menu and can recommend dishes based on preferences.",
  "Tashi's maintains consistent quality across multiple visits. I've never had a disappointing meal there.",
  "The North Indian thali at Tashi's is comprehensive and delicious. Great way to try multiple dishes.",
  "Tashi's is the perfect balance between casual and special. Works for any occasion really.",
  "The desserts at Tashi's are made fresh daily. You can taste the quality in every bite.",
  "Tashi's has become my regular spot for client meetings. Professional yet comfortable atmosphere.",
  "The staff at Tashi's handles busy rushes well without compromising service quality or friendliness."
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
  "Tashi's gives a good value for money. The food was good and the service was friendly.",
  "Tashi's pasta dishes are well-prepared and tasty. The sauces are flavorful and portions are generous.",
  "The coffee at Tashi's is good quality. Perfect for a relaxing afternoon cafe visit with friends.",
  "Tashi's seating arrangements are comfortable for both quick meals and longer conversations.",
  "The Chinese food section at Tashi's is solid. Noodles and fried rice are consistently good.",
  "Tashi's maintains good hygiene standards. The dining area and restrooms are clean and well-maintained.",
  "The vegetarian options at Tashi's are decent with good variety for non-meat eaters.",
  "Tashi's service is generally efficient. Wait times are reasonable even during busy hours.",
  "The North Indian curries at Tashi's are flavorful with good balance of spices and creaminess.",
  "Tashi's is a reliable choice when you want decent food without experimenting with unknown places.",
  "The mocktails at Tashi's are refreshing and well-made. Good variety for non-alcoholic beverages.",
  "Tashi's pricing is fair for the quality and portion sizes offered. Good value overall.",
  "The bakery items at Tashi's are fresh and tasty. Cakes and pastries are worth trying.",
  "Tashi's staff is generally responsive to requests and special dietary needs.",
  "The salad options at Tashi's are fresh and well-prepared. Good healthy additions to meals.",
  "Tashi's maintains a pleasant atmosphere throughout the day. Lighting and music are appropriate.",
  "The grilled items at Tashi's are well-cooked with good char and flavor. Tandoor works well.",
  "Tashi's is conveniently located in Raipur with adequate parking space for customers.",
  "The breakfast menu at Tashi's has good options. Parathas and eggs are prepared well.",
  "Tashi's dessert selection is decent. Ice cream and cakes are available for sweet cravings.",
  "The staff at Tashi's is knowledgeable about ingredients and can accommodate basic dietary restrictions.",
  "Tashi's maintains consistent standards across different times of day. Quality doesn't fluctuate much.",
  "The sandwich options at Tashi's are good. Grilled and toasted sandwiches are crispy and filling.",
  "Tashi's music volume is appropriate for conversation. Not too loud or too quiet.",
  "The juice bar at Tashi's offers fresh options. Seasonal juices are particularly good.",
  "Tashi's is a solid choice for casual gatherings with friends or small family celebrations.",
  "The appetizers at Tashi's are well-prepared. Good starters to share before main courses.",
  "Tashi's整体 overall experience is reliably good. Nothing exceptional but consistently satisfying."
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
  "Overall a fair experience dining at Tashi's.",
  "The food quality was acceptable but not exceptional at Tashi's.",
  "Tashi's serves decent food but nothing particularly memorable stood out.",
  "The service was adequate but could be more attentive during peak hours.",
  "Tashi's ambience is okay but could use some updates to seating furniture.",
  "The menu variety at Tashi's is good but execution varies across dishes.",
  "Tashi's pricing is reasonable but value could be better with larger portions.",
  "The food took a bit long to arrive but was acceptable once served.",
  "Tashi's is a decent option when other restaurants are crowded or unavailable.",
  "The staff was polite but seemed inexperienced with menu recommendations.",
  "Tashi's maintains basic hygiene standards but could improve kitchen visibility.",
  "The dishes were cooked properly but lacked the wow factor I expected.",
  "Tashi's is a safe choice for casual dining without exciting highlights.",
  "The beverage selection at Tashi's is limited compared to other cafes in Raipur.",
  "Tashi's seating comfort is average. Fine for short meals but long sits feel uncomfortable.",
  "The food temperature was appropriate but flavors were somewhat muted.",
  "Tashi's service is functional but not particularly warm or engaging.",
  "The restaurant cleanliness is adequate but corners could be cleaner.",
  "Tashi's menu has good variety but some dishes feel generic and uninspired.",
  "The cooking quality at Tashi's is consistent but not impressive.",
  "Tashi's is fine for quick meals but not special enough for celebrations.",
  "The staff at Tashi's completes tasks but doesn't exceed basic expectations.",
  "Tashi's atmosphere is pleasant but lacks unique character or personality.",
  "The food portions at Tashi's are standard but not particularly generous.",
  "Tashi's pricing is fair but competitors offer slightly better value.",
  "The dining area at Tashi's is tidy but furniture shows signs of wear.",
  "Tashi's accepts feedback but improvements seem slow to materialize.",
  "The menu updates at Tashi's are infrequent. Would like more new options.",
  "Tashi's is a middle-of-the-road cafe. Not bad but not outstanding either.",
  "The food presentation at Tashi's is adequate but could be more visually appealing.",
  "Tashi's service speed is acceptable during non-peak hours but slows down during rush.",
  "The overall experience at Tashi's was fine but I'm not rushed to return immediately.",
  "Tashi's maintains basic standards but doesn't excel in any particular area.",
  "The food at Tashi's is edible and satisfying but not memorable or exceptional.",
  "Tashi's is a reliable fallback option but not my first choice for dining out."
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
  "There is considerable scope for improvement in customer service.",
  "The food at Tashi's was completely cold when it reached our table.",
  "Tashi's staff was rude and dismissive when we complained about food quality.",
  "We waited over an hour for food that arrived lukewarm and poorly prepared.",
  "The food at Tashi's tasted like it was reheated from frozen or pre-made.",
  "Tashi's service was non-existent. We had to flag down staff multiple times.",
  "The dining area at Tashi's was filthy with dirty tables and sticky floors.",
  "Tashi's charged us for items we never ordered and refused to correct the bill.",
  "The food at Tashi's contained hair and foreign objects which was disgusting.",
  "Tashi's management was unwilling to address our serious complaints about hygiene.",
  "The staff at Tashi's argued with us when we asked for basic service requests.",
  "Tashi's food made me sick after eating. Clearly a food safety issue.",
  "The restaurant at Tashi's had broken furniture and felt unsafe to sit on.",
  "Tashi's served expired food without acknowledging the issue when we pointed it out.",
  "The staff at Tashi's was blatantly unprofessional and disrespectful to customers.",
  "Tashi's food portions were insultingly small for the exorbitant prices charged.",
  "The food at Tashi's was undercooked and raw in the middle which is dangerous.",
  "Tashi's refuses to acknowledge negative reviews or attempt any customer recovery.",
  "The restaurant atmosphere at Tashi's was oppressively loud and uncomfortable.",
  "Tashi's staff ignored our table completely for 30 minutes after being seated.",
  "The food at Tashi's had clearly been sitting out for hours before serving.",
  "Tashi's billing system is混乱 confused and they overcharge customers intentionally.",
  "The staff at Tashi's showed zero interest in customer satisfaction or quality.",
  "Tashi's restrooms were disgusting with no toilet paper and overflowing trash.",
  "The food at Tashi's contained ingredients I am allergic to despite warnings.",
  "Tashi's management is completely unresponsive to serious customer complaints.",
  "The overall experience at Tashi's was the worst dining experience I've had in Raipur.",
  "Tashi's food quality has declined dramatically and is now completely unacceptable.",
  "The staff at Tashi's was high on attitude and low on actual service delivery.",
  "Tashi's serves food that looks nothing like what is shown on the menu pictures.",
  "The restaurant at Tashi's has serious pest issues with visible insects in dining area.",
  "Tashi's refuses to refund or replace food that is clearly spoiled or bad.",
  "The food at Tashi's tasted like it was cooked in rancid or old oil.",
  "Tashi's staff is completely untrained and creates chaos in the kitchen constantly.",
  "The overall experience at Tashi's was so bad I will never return or recommend.",
  "Tashi's is a complete scam charging premium prices for garbage quality food.",
  "The restaurant at Tashi's has fundamental operational problems that never get fixed.",
  "Worst cafe experience in Raipur. Tashi's needs to completely shut down and reconsider everything."
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
  "There is potential for improvement in the overall dining experience.",
  "The food at Tashi's was lukewarm when it arrived at our table.",
  "Tashi's service was slow even though the restaurant wasn't particularly busy.",
  "Some items on the menu were out of stock without prior notice to customers.",
  "The food at Tashi's tasted a bit bland and needed more seasoning.",
  "Tashi's staff seemed overwhelmed and overwhelmed during our visit.",
  "The dining area at Tashi's felt a bit dirty with crumbs and sticky tables.",
  "Tashi's pricing feels a bit high for the quality you actually receive.",
  "The food portions at Tashi's were smaller than expected for the price.",
  "Tashi's kitchen seems to struggle with consistency in food preparation.",
  "The staff at Tashi's lacked knowledge about menu ingredients and allergens.",
  "Tashi's seating was uncomfortable with wobbly chairs and thin cushions.",
  "The food at Tashi's took over 45 minutes to arrive during our visit.",
  "Tashi's menu descriptions don't accurately match what actually arrives.",
  "The music at Tashi's was too loud making conversation difficult.",
  "Tashi's restrooms were not clean and needed proper maintenance.",
  "The food at Tashi's had inconsistent temperatures across different dishes.",
  "Tashi's staff seemed disorganized and confused about order details.",
  "The ambiance at Tashi's felt dated and in need of modernization.",
  "Tashi's had limited vegetarian options compared to other cafes in Raipur.",
  "The food at Tashi's lacked the freshness I expected from a cafe.",
  "Tashi's service was inattentive and we had to ask multiple times for water.",
  "The dishes at Tashi's were overcooked and lacked proper texture.",
  "Tashi's pricing seems inflated compared to similar cafes with better quality.",
  "The staff at Tashi's was friendly but clearly undertrained on menu knowledge.",
  "Tashi's food presentation was sloppy and unappetizing visually.",
  "The food at Tashi's contained ingredients I specifically asked to exclude.",
  "Tashi's management doesn't seem to listen to customer feedback effectively.",
  "The overall dining experience at Tashi's felt rushed and impersonal.",
  "Tashi's has inconsistent quality across different visits and times.",
  "The food at Tashi's was mediocre and didn't justify the price point.",
  "Tashi's staff seemed uninterested in ensuring customer satisfaction.",
  "The restaurant atmosphere at Tashi's felt stale and uninspired overall.",
  "Tashi's service recovery when issues arise is inadequate and slow.",
  "The food at Tashi's lacked the flavor profile promised in menu descriptions.",
  "Tashi's needs significant improvement in basic restaurant operations and standards."
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

