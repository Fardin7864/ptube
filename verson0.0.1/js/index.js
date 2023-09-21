// category container
const categoryContainer = document.getElementById('category-container');

const loadCategory = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories = data.data;
    displayCategoryButtons(categories);
    setFocusOnButton('button1');
    // console.log(categories);
}

// Display Category Buttons

const displayCategoryButtons = (categories,buttonIdCounter=0)=>{

    categories.forEach(category => {
        buttonIdCounter++;
        let buttonId = 'button' + buttonIdCounter;
        // console.log(buttonId)
        // console.log(category);
        const categoryDiv = document.createElement('div');
            categoryDiv.innerHTML = 
            `
            <button id="${buttonId}" onclick="productsCard(${category.category_id})" class="btn focus:bg-[#FF1F3D] focus:text-white focus:outline-none', 'focus:border', 'focus:border-[#FF1F3D]', 'focus:ring-2', 'focus:ring-[#FF1F3D]">${category.category}</button>
            `
            categoryContainer.appendChild(categoryDiv);            
    });

}

// function to set focus on a button
const setFocusOnButton = (buttonId)=>{
    const buttonToFocus = document.getElementById(buttonId);
    if (buttonToFocus) {
        buttonToFocus.focus();
        buttonToFocus.classList.add('focus:outline-none', 'focus:border', 'focus:border-[#FF1F3D]', 'focus:ring-2', 'focus:ring-[#FF1F3D]');
        }
}

// Display products cards
const productsCard = async (categoryId)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const products =data.data;
    // console.log(data);
    displayCategoryCard(products);
    sortProduct(products, currentSortOrder);
}

// products card container 
const productsCardContainer = document.getElementById('products-card-container');

const displayCategoryCard = (products, sortOrder = 'ascending')=>{

    // Sort the categories array based on views
    products.sort((a, b) => {
        const viewsA = parseFloat(a.others.views.replace('K', '')); // Convert 'K' to a number
        const viewsB = parseFloat(b.others.views.replace('K', '')); // Convert 'K' to a number

        if (sortOrder === 'ascending') {
            return viewsA - viewsB;
        } else if (sortOrder === 'descending') {
            return viewsB - viewsA;
        }
    });
        productsCardContainer.innerHTML = '';

        // no data found display
        const noDataContainer = document.getElementById('no-data-container');
        if (products.length === 0) {
            noDataContainer.innerHTML = '';
            const productDiv = document.createElement('div');
            productDiv.innerHTML =
            `<div class=" w-full flex flex-col justify-center items-center">
            <img src="img/Icon.png" alt="">
            <h1 class=" text-[#171717] text-3xl font-bold leading-10 text-center">Oops!! Sorry, There is no <br/> content here</h1>
            </div>
            `
            productDiv.classList = 'flex justify-center items-center  max-w-[1440px] mx-auto';
            noDataContainer.appendChild(productDiv);
        }else{
            noDataContainer.innerHTML = '';
        }

    products.forEach(product=>{
        // Time calculations here
        const postedTime = (product.others.posted_date/60)/60;
        let hours = Math.floor(postedTime);
        const minutes = Math.round((postedTime-hours) * 60);
        let formattedDuration = ``;
        // condition for days and years
        if (hours >24 && hours <8760) {
          const dayCount = ( hours/24);
          const day = Math.floor(dayCount);
          hours = Math.round(dayCount-day) * 24;

        formattedDuration = `${day.toString().padStart(2, '0')}days${hours.toString().padStart(2, '0')}hrs ${minutes.toString().padStart(2, '0')}min ago`;

        }
        else if (hours>8760) {
            const yearCount = ( hours/8760);
            const year = Math.floor(yearCount);
            const day = Math.round(yearCount-year) * 8760;
  
          formattedDuration = `${year.toString().padStart(2, '0')}yrs ${day.toString().padStart(1, '0')}days ago`;
  
        }
        else{

          formattedDuration = `${hours.toString().padStart(2, '0')}hrs ${minutes.toString().padStart(2, '0')}min ago`;
        }

        // show date with conditional rendering
        const conditionalHTML = product?.others?.posted_date? `<p class="text-white bg-black text-[10px] font-normal">${formattedDuration}</p>`: '';
        // console.log(formattedDuration);

        const productDiv = document.createElement('div');
        productDiv.innerHTML =
        `
        <figure>
            <img src="${product.thumbnail}" alt="" class=" h-48 w-[312px] rounded-lg" />
        </figure>

        <div class="w-24 absolute top-40 right-7 flex justify-center items-center">
        ${conditionalHTML}
        </div>

        <div class="pl-5 ">
        <div class="flex items-center gap-3">
         <img src="${product.authors[0].profile_picture}" alt="" class="w-10 h-10 rounded-[40px]">
         <h2 class="text-[#171717] text-base font-bold">${product.title}</h2>
        </div>
        <p class="text-[#171717] text-sm font-normal pl-12 flex">${product.authors[0].profile_name}<span class="ml-3">${product?.authors[0]?.verified ? '<img src="img/blutic.png" alt="Special" />' : ''}</span></p>
        <p class="text-[#171717] text-sm mt-2 font-normal pl-12">${product.others.views}</p>
        </div>
        `
        productDiv.classList = 'card h-[340px] bg-base-100 shadow-xl gap-8';
        productsCardContainer.appendChild(productDiv);
    });
}


let currentSortOrder = 'ascending';
const sortProduct = (products, currentSortOrder)=>{
        const sortButton = document.getElementById('sort-btn');

        sortButton.addEventListener('click', () => {
            console.log('i am clicked')
            // Toggle sorting order on each click
            if (currentSortOrder === 'ascending') {
                currentSortOrder = 'descending';
            } else {
                currentSortOrder = 'ascending';
            }

            // Call the displayCategoryCard function with the currentSortOrder
            displayCategoryCard(products, currentSortOrder);
});
}

loadCategory();
productsCard('1000');