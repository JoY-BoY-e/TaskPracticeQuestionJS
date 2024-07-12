//Write a sync and Async funtion to fetch data from 3 APIs with delays 10000, 5000 and 7000 respectively.

async function fetchDataWithDelay(api, delay) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        await new Promise(resolve => setTimeout(resolve, delay)); // Introduce delay
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Propagate the error
    }
}

const url1 = 'https://api.thecatapi.com/v1/images/search';
const url2 = 'https://api.thedogapi.com/v1/images/search';
const url3 = 'https://api.thecatapi.com/v1/images/search';

// Asynchronous function to fetch data from all APIs with specified delays
async function fetchAllDataAsync() {
    try {
        const data1 = await fetchDataWithDelay(url1, 10000);
        const data2 = await fetchDataWithDelay(url2, 5000);
        const data3 = await fetchDataWithDelay(url3, 7000);
        return [data1, data2, data3];
    } catch (error) {
        console.error('Error fetching all data:', error);
        throw error; // Propagate the error
    }
}

// Example usage of async function
fetchAllDataAsync()
    .then(results => {
        console.log('Fetched data (async):', results);
    })
    .catch(error => {
        console.error('Error in fetching all data (async):', error);
    });

// Synchronous function to fetch data from all APIs with specified delays

function fetchAllDataSync() {
    return Promise.all([
        fetchDataWithDelay(url1, 10000),
        fetchDataWithDelay(url2, 5000),
        fetchDataWithDelay(url3, 7000)
    ]);
}

// Example usage of sync function
fetchAllDataSync()
    .then(results => {
        console.log('Fetched data (sync):', results);
    })
    .catch(error => {
        console.error('Error in fetching all data (sync):', error);
    });