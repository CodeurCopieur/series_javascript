const container = document.querySelector('.container');

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if( scrollTop + clientHeight === scrollHeight) {
        console.log("touché");
        addArticles(10);
    }
});


const addArticles = i => {
    for (let index = 0; index < i ; index++) {
        
        const item = `
            <div class="item"></div>
        `;

        container.innerHTML+=item;
        
    }
}