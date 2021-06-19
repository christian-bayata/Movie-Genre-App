function customerDetail(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
               custInfo = {
                    id: id,
                    name: "Frank Edomaruse",
                    age: 27,
                    country: "Nigeria",
                    location: "Lagos",
                    isGold: true
                }
            )
        }, 3000);
    });
};

function getBrochure(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({Title: name, Message: "Thank you for your participation thus far, you will recieve a brochure that contains your bonus"})
        }, 4000);
    });
};

function receiveEmail(addr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({Email_Address: addr, Content: "You have just received your email..."})
        }, 4000);
    })
}

//Now tack on the then() call
customerDetail(1).then((result) => {
    console.log("Customer Details: ", result);

    if(custInfo.isGold) {
        getBrochure("Congratulations").then((result) => {
            console.log("Brochure Content: ", result);

        receiveEmail("franksagie!@gmail.com").then((result) => {
            console.log("Please Confirm: ", result)
        })
        });
    };
}).catch(err => console.log("Error ", err.message));

