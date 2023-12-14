const navItem = document.querySelectorAll('#item')
const menuToggle = document.querySelector('.toggle')
const nav = document.querySelector('.nav')
const sections = document.querySelectorAll('section')
const navLink = document.querySelectorAll('header nav ul li a')
const copyText = document.querySelector('.copy-text')

const animation = () => {
    menuToggle.classList.toggle('active')

    nav.classList.toggle('ativado')
}

navItem.forEach((ele, index) => {
    ele.addEventListener('click', () => {
        navItem.forEach(ele => ele.style.color = '')
        navItem[index].style.color = '#147EFB'
    })
})

menuToggle.addEventListener('click', () => {
    animation()
})

copyText.querySelector('button').addEventListener('click', () => {
    const input = copyText.querySelector('input.text')
    input.select()
    document.execCommand('copy')
    copyText.classList.add('active')
    window.getSelection().removeAllRanges()
    setTimeout(() => {
        copyText.classList.remove('active')
    }, 1000)
}) 

navLink.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.remove('ativado')
        animation();
    });
});