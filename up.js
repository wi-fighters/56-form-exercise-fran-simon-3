//activate alternative address
const checkBox = document.querySelector("#alt-address")



const showForm = () => {
    const billingForm = document.querySelector("#billing-form")
    if (checkBox.checked) {
        billingForm.style.display = "none";
    } else {
        billingForm.style.display = "block";
    }
}

checkBox.addEventListener("click", showForm);