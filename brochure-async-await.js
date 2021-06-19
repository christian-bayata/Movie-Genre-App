function customerDetail(id) {
    setTimeout(() => {
        custInfo = {
            id: id,
            name: "Frank Edomaruse",
            age: 27,
            country: "Nigeria",
            location: "Lagos",
            isGold: true
        };
        console.log(custInfo); 
    }, 3000);
};

function getBrochure(name) {
    setTimeout(() => {
        console.log({Title: name, Message: "Thank you for your participation thus far, you will recieve a brochure that contains your bonus"});
    }, 4000);
};

function receiveEmail(addr) {
    setTimeout(() => {
        console.log({Email_Address: addr, Content: "You have just received your email..."});
    }, 4000);
};

//Write an async function to display and await result
async function displayAllResults() {
    try {
        const customer = await customerDetail(1);
        const brochureMessage = await getBrochure("Congratulations");
        const emailContent = await receiveEmail("franksagie1@gmail.com")
    } catch (error) {
        console.log("Error ", error.message)
    }
}

displayAllResults();