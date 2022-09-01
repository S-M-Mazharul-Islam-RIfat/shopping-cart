document.getElementById("phone-increase").addEventListener("click", function () {
    handleProductChange("phone", true);
});

document.getElementById("phone-decrease").addEventListener("click", function () {
    handleProductChange("phone", false);
});

document.getElementById("case-increase").addEventListener("click", function () {
    handleProductChange("case", true);
});

document.getElementById("case-decrease").addEventListener("click", function () {
    handleProductChange("case", false);
});


function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true)
        productNewCount = productCount + 1;
    else
        productNewCount = productNewCount > 0 ? productCount - 1 : 0;
    productInput.value = productNewCount;
    productInput.value = productNewCount;
    const productTotal = productNewCount * (product == "phone" ? 1219 : 59);
    document.getElementById(product + "-total").innerText = productTotal;

    calculateTotal();
}

function calculateTotal(){
    const phoneCount=getInputValue("phone");
    const caseCount=getInputValue("case");

    const totalPrice=(phoneCount*1219+caseCount*59);
    document.getElementById("total-price").innerText=totalPrice;

    const tax=Math.round(totalPrice*0.1);
    document.getElementById("tax-amount").innerText=tax;

    const grandTotal=(totalPrice+tax);
    document.getElementById("grand-total").innerText=grandTotal;
}

function getInputValue(product){
    const productInput=document.getElementById(product+"-count");
    const productCount=parseInt(productInput.value);
    return productCount;
}