(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const target = e.target
        const burgerIcon = target.closest('.burger-icon')
        const burgerNavLink = target.closest('.burger-icon')


        if (burgerIcon) {
            console.log('Есть!');
        }


    }

})()