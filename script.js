document.addEventListener('DOMContentLoaded', function(){
    fetch('events.json').then(response => response.json()).then(events => {
        const eventContainer = document.getElementById('events-container');
        events.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.className = "col-md-4 event-card";
            eventCard.innerHTML = `
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title event-card-title">${event.title}</h5>
                  <div class="event-card-details">
                    <span class="card-date mb-2 text-muted">${event.date}</span>
                    <span class="card-location mb-2 text-muted">${event.location}</span>
                </div>
                  <p class="card-text event-card-text">${event.description}</p>
                </div>
              </div>
            `;
            eventContainer.appendChild(eventCard);

        });

    })
    .catch(error => console.error('error loading events: ', error));
});