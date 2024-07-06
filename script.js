document.addEventListener('DOMContentLoaded', function(){
    fetch('events.json').then(response => response.json()).then(events => {
        const eventContainer = document.getElementsById('events-container');
        events.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.className = "col-md-4 event-card";
            eventCard.innerHTML = '\
                <div class="card">\
                    <div class="card-body">\
                        <h5 class="card-title event-card-title">${event.title}</h5>\
                        <h6 class="card-subtitle mb-2 text-muted">${new Date(event.date).toStringDate()}</h6>\
                        <p class="card-text event-card-text">${event.description}</p>\
                    </div>\
                </div>\
            ';
            eventContainer.appendChild(eventCard);

        });

    })
    .catch(error => console.error('error loading events: ', error));
});