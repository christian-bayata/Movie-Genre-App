//Using callback function that sends a list of movies to a customer who is deemed to be gold

customerDetail(1, (customer) => {
    console.log("Customer Details: ", customer);
    if(customer.isGold) {
        getBrochure("Congratulations", brochureContent);

        receiveEmail("franksagie@gmail.com", confirmEmail);        
    };
});

//Named Functions
function brochureContent(content) {
    console.log("Brochure Content: ", content);
};

function confirmEmail(email) {
    console.log("Please Confirm: ", email);    
}

function customerDetail(id, callback) {
    setTimeout(() => {
        callback({
            id: id,
            name: "Frank Edomaruse",
            age: 27,
            country: "Nigeria",
            location: "Lagos",
            isGold: true
        })
    }, 3000);
} 

//get Brochure
function getBrochure(name, callback) {
    setTimeout(() => {
        callback({Title: name, Message: "Thank you for your participation thus far, you will recieve a brochure that contains your bonus"})
    }, 4000);
}

function receiveEmail(addr, callback) {
    setTimeout(() => {
        callback({Email_Address: addr, Content: "You have just received your email..."})
    }, 4000);
}

