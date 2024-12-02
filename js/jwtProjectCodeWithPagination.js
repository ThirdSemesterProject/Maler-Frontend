/* Display Logic */

const tblRows = document.getElementById('tbl-rows');

function displayBookData(books) {
    tblRows.innerHTML = books.map(book => `<tr><td>${escapeHTML(book.author)}</td><td>${escapeHTML(book.title)}</td></tr>`).join('');
}

function displayPagination(totalPages, currentPage, size) {
    const paginationElement = document.getElementById('pagination');

    const createPageItem = (page, label, isActive = false) => `
    <li class="page-item ${isActive ? 'active' : ''}">
      <a class="page-link" data-page="${page}" href="#">${label}</a>
    </li>`;

    // Generate the base array of page items
    const pageItems = [
        ...(currentPage > 0 ? [createPageItem(0, 'First')] : []),
        ...(currentPage > 0 ? [createPageItem(currentPage - 1, 'Previous')] : []),
        ...Array.from({ length: totalPages }, (_, i) => i)
            .filter(i => i >= Math.max(0, currentPage - 2) && i <= Math.min(totalPages - 1, currentPage + 2))
            .map(i => createPageItem(i, i + 1, i === currentPage)),
        ...(currentPage < totalPages - 1 ? [createPageItem(currentPage + 1, 'Next')] : []),
        ...(currentPage < totalPages - 1 ? [createPageItem(totalPages - 1, 'Last')] : []),
    ];

    // Combine all page items into HTML
    const paginationHtml = pageItems.join('');

    // Set the inner HTML of the pagination element
    paginationElement.innerHTML = paginationHtml;
}

document.querySelector('#pagination').onclick = function (evt) {
    evt.preventDefault();
    if (evt.target.tagName === 'A' && evt.target.hasAttribute('data-page')) {
        const page = parseInt(evt.target.getAttribute('data-page'));
        fetchData(page);
    }
};

function clearData(){
    document.getElementById('pagination').innerHTML ="";
    tblRows.innerHTML = "";
}

function escapeHTML(string) {
    if (!string) return "";

    return string.replaceAll(`&`, "&amp;")
        .replaceAll(`>`, "&gt;")
        .replaceAll(`<`, "&lt;")
        .replaceAll(`"`, "&quot;")
        .replaceAll(`/`, "&#039;");
}

/* Pagination/data fetching */

const API_ENDPOINT = 'http://localhost:8080/api/books';
const PAGE_SIZE = 10
let sortColumn = 'author'
let sortDirection = 'asc'

document.getElementById('header-row').onclick = function (evt) {
    const target = evt.target
    if (!target.id.startsWith("sort-")) return
    //TODO: Add the missing sort functionality here
    const targetSortColumn = target.id.substring(target.id.indexOf('-') + 1);
    if (target.dataset.sort_direction == 'asc' && targetSortColumn == sortColumn){
        target.dataset.sort_direction = 'desc';
        sortDirection = 'desc';
    } else {
        sortColumn = targetSortColumn;
        target.dataset.sort_direction = 'asc';
        sortDirection = 'asc';
    }
    /*
    if (targetSortColumn==sortColumn) {
      sortDirection = (sortDirection=='asc')?'desc':'asc';
    } else {
      sortColumn = targetSortColumn;
      sortDirection = 'asc';
    }
    */
    fetchData();
};

async function fetchData(page = 0, size = PAGE_SIZE, sort = sortColumn) {
    if (localStorage.getItem('user') == undefined) {
        //user not logged in
        console.log('Login to read books');
        return;
    }

    console.log(`fetch(${API_ENDPOINT}?page=${page}&size=${size}&sort=${sortColumn},${sortDirection})`);
    try {
        const fetchUrl = `${API_ENDPOINT}?page=${page}&size=${size}&sort=${sortColumn},${sortDirection}`;
        const token = getToken();
        const data = await fetch(fetchUrl,
            {
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            .then(handleHttpErrors)
        //.then(response => response.json())
        // TODO: Handle error cases
        displayBookData(data.content);
        displayPagination(data.totalPages, page);
    } catch (err) {
        if (err.apiError){
            console.log("Full API error: ", err.apiError)
        } else {
            console.log(err.message)
        }
    }
}

fetchData();//Initial call to the backend

async function handleHttpErrors(res) {
    if (!res.ok) {
        const errorResponse = await res.json();
        const error = new Error(errorResponse.message)
        error.apiError = errorResponse
        throw error
    }
    return res.json()
}

// const data = {author: "lis Benson", title: "16:01"};
// const options = makeOptions("POST",data);
// fetch("https://somewhereoutthere/books",options);

function makeOptions(method, body) {
    const opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) { //Observe how we can add new fields to an object when needed
        opts.body = JSON.stringify(body);
    }
    return opts;
}