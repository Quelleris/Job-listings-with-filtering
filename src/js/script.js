let jobOffers;

fetch("../data.json")
    .then(response => response.json())
    .then(data => {
        jobOffers = data
        renderOffersList(jobOffers);
    })

const createOfferElement = (offer) => {
    const offerElem = document.createElement("li");
    offerElem.classList.add("offer-item");

    offerElem.innerHTML = `
    <img src=${offer.logo} alt="${offer.company}">
    <div class="info">
    <div class="wrapper">
      <p class="company-name">${offer.company}</p>
      ${offer.new ? '<span class="spn new">New!</span>' : ''}
      ${offer.featured ? '<span class="spn featured">Featured</span>' : ''}
    </div>
    <h2 class="position">${offer.position}</h2>
    <ul class="info-list">
      <li class="info-item">
        <p>${offer.postedAt}</p>
      </li>
      <li class="info-item">
        <p>${offer.contract}</p>
      </li>
      <li class="info-item">
        <p>${offer.location}</p>
      </li>
    </ul>
    </div>
    <ul class="tag-list">
      <li class="tag-item">
        <button>${offer.role}</button>
      </li>
      <li class="tag-item">
        <button>${offer.level}</button>
      </li>
      ${addListItems(offer.languages)}
      ${offer.tools ? addListItems(offer.tools) : ''}
  </ul>
    `

    return offerElem;
};

const addListItems = (listItems) => {
    let list = '';
    listItems.forEach(item => {
        list += `<li class="tag-item">
        <button class="location">${item}</button></li>`
    })
    return list;
}

const createList = (offers) => {
    const listElem = document.createElement("ul");
    listElem.classList.add("offer-list");
    offers.forEach(offer => {
        listElem.appendChild(createOfferElement(offer));
    });
    return listElem;
}

const renderOffersList = (offers) => {
    const mainElem = document.querySelector("#main");
    mainElem.appendChild(createList(offers));
}
