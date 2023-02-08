import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  let urlSearchParameters = new URLSearchParams(search.slice(1))
  return urlSearchParameters.get("adventure")
  // Place holder for functionality to work in the Stubs
  // return null;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try{
    let fetchAdventureDetailsResponse = await fetch(`${config.backendEndpoint}/adventures/detail?adventure=${adventureId}`);
    let adventureDetailsData = await fetchAdventureDetailsResponse.json();
    return adventureDetailsData;
  }catch(error){
    return null;
  }

  // Place holder for functionality to work in the Stubs
  // return null;
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  let adventureHeadingElement = document.getElementById("adventure-name");
  adventureHeadingElement.textContent = adventure.name;

  let adventureSubtitleElement = document.getElementById("adventure-subtitle");
  adventureSubtitleElement.textContent = adventure.subtitle;

  let adventureGalleryElement = document.getElementById("photo-gallery");
  adventure.images.forEach(src=>{
    adventureGalleryElement.innerHTML += `<div>
                                            <img src="${src}" class="activity-card-image" alt="${adventure.name}"/>
                                          </div>
                                        `
  })

  let adventureContentElement = document.getElementById("adventure-content");
  adventureContentElement.textContent = adventure.content;


}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let adventureGalleryElement = document.getElementById("photo-gallery");
  adventureGalleryElement.innerHTML = `
                                          <div id="adventureCarousel" class="carousel slide" data-bs-ride="carousel">
                                            <div class="carousel-indicators" id="carouselIndicatorButton">
                                            </div>
                                            <div class="carousel-inner" id="carouselInner">
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#adventureCarousel" data-bs-slide="prev">
                                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                              <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#adventureCarousel" data-bs-slide="next">
                                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                              <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                      `
   let carouselIndicaterElement = document.getElementById("carouselIndicatorButton")
   let carouselInnerElement = document.getElementById("carouselInner")
   images.forEach((imageSrc,index)=>{
    carouselIndicaterElement.innerHTML += `
                                          <button type="button" data-bs-target="#adventureCarousel" data-bs-slide-to="${index}" ${index===0? "class='active' aria-current='true'":""} aria-label="Slide ${index+1}"></button>
                                          `
    carouselInnerElement.innerHTML += ` <div class="carousel-item ${index===0? "active":""}">
                                          <img src="${imageSrc}" class="d-block activity-card-image w-100" alt="Image ${index+1}">
                                        </div>
                                      `
   });

}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.

}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field

}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
