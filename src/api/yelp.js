import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer VA_dWMjPkoQcPkhNTsuYy1PT8qJhy18-gAm5LcgTQ561TWXof5sNHmzNynXiprpNHJHgagEVBvdDOmMP9McIVLtJyiMcrFfSqN7lRITYGww0wtQRFzZgkxaM8Fc4ZHYx'
    }
});