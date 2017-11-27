new Vue({
    el: "#vue-app",
    data: {
        message: "Vue running successfully.",
        imageFolder: 'assets/images/',
        profiles: [{
                name: "Michael Scott",
                title: "Regional Manager",
                email: "mscott@dundermifflin.com",
                photo: 'MichaelScott.png'
            },
            {
                name: "Dwight Schrute",
                title: "Assistant To Regional Manager",
                email: "dschrute@dundermifflin.com",
                photo: 'Dwight_Schrute.jpg'
            },
            {
                name: "Jim Halpert",
                title: "Salesman",
                email: "jhalpert@dundermifflin.com",
                photo: 'Jim-halpert.jpg'
            },
            {
                name: "Pam Beasley",
                title: "Receptionist",
                email: "pbeasley@dundermifflin.com",
                photo: 'Pam_Beesley.jpg'
            },
            {
                name: "Phyllis Lapin",
                title: "Saleswoman",
                email: "plapin@dundermifflin.com",
                photo: 'Phyllis_Lapin-Vance.jpg'
            },
            {
                name: "Andy Bernard",
                title: "Salesman",
                email: "abernard@dundermifflin.com",
                photo: 'Andy_Bernard.jpg'
            },
            {
                name: "Stanley Hudson",
                title: "Salesman",
                email: "shudson@dundermifflin.com",
                photo: 'Stanley_Hudson.jpg'
            },
            {
                name: "Kevin Malone",
                title: "Accountant",
                email: "kmalone@dundermifflin.com",
                photo: 'Kevin_Malone.jpg'
            }
        ]
    }

});