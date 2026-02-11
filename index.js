//declares variable 'tabs' as all the buttons in the header section
let tabs = document.querySelectorAll('[data-tab-target]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        //declares variable 'target'. tab.dataset.tabTarget is taken from one of the button attributes, data-tab-target
        let target = document.querySelector(tab.dataset.tabTarget)
        let contents = document.querySelectorAll('[data-tab-content]')
        //removes all active attribute in the paragraph everytime the user clicks
        contents.forEach(content => {
            content.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        //when user clicks, add active attribute
        target.classList.add('active')
        tab.classList.add('active')
    })
})

