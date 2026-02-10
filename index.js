let tabs = document.querySelectorAll('[data-tab-target]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.tabTarget)
        let contents = document.querySelectorAll('[data-tab-content]')
        contents.forEach(content => {
            content.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        target.classList.add('active')
        tab.classList.add('active')
    })
})

