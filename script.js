



const apiKey = 'CG-VLEhoL81jZyvAVGTmSyFWoYb';
const apiUrl = 'https://api.coingecko.com/api/v3/simple/price';

// Function to fetch cryptocurrency prices
async function getCryptoPrices() {
    try {
        const response = await fetch(`${apiUrl}?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd&apiKey=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching crypto prices:', error.message);
        throw error;
    }
}

// Example usage
getCryptoPrices().then((prices) => {
    console.log(prices);

    // Update your website UI with the received data
    const btc = document.getElementById("bitcoin")
    const eth = document.getElementById("ethereum")
    const doge = document.getElementById("dogecoin")
    btc.innerHTML = prices.bitcoin.usd;
    eth.innerHTML = prices.ethereum.usd;
    doge.innerHTML = prices.dogecoin.usd;

});



document.addEventListener('mousemove', function (e) {
    var bubble = document.createElement('div');
    bubble.className = 'bubble';
    document.body.appendChild(bubble);

    var x = e.clientX;
    var y = e.clientY;

    bubble.style.left = x + 'px';
    bubble.style.top = y + 'px';

    bubble.addEventListener('animationend', function () {
        document.body.removeChild(bubble);
    });
});

