function toggle(IconId, IsHovered) {
    const icon = document.getElementById(IconId)

    if (IsHovered) {
        const classesToRemove = IconId.includes("insta") ? ["fa-brands", "fa-instagram"] : ["fa-brands", "fa-github"]
        icon.classList.remove(...classesToRemove)
        const classesToAdd = IconId.includes("github") ? ["fa-brands", "fa-square-github"] : ["fa-brands", "fa-square-instagram"]
        icon.classList.add(...classesToAdd)
    } else {
        const classesToRemove = IconId.includes("insta") ? ["fa-brands", "fa-square-instagram"] : ["fa-brands", "fa-square-github"]
        icon.classList.remove(...classesToRemove)
        const classesToAdd = IconId.includes("insta") ? ["fa-brands", "fa-instagram"] : ["fa-brands", "fa-github"]
        icon.classList.add(...classesToAdd)
    }
}
console.error();
console.log("Já que ta fuçando no codigo, aproveita e me segue no insta @oluizzn")

const div = document.createElement("div");
div.textContent = "u\0190";
document.getElementById("container").appendChild(div);

// condição ? valorSeVerdadeiro : valorSeFalso
