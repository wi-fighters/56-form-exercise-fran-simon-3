//activate alternative address
const checkBox = document.querySelector("#alt-address")

checkBox.addEventListener("click", showForm);

const showForm = () => {
    const billingForm = document.querySelector("#billing-form")
    if (checkBox.checked) {
        console.log(checkBox === checked)
        billingForm.style.display = "none";
    }
} 